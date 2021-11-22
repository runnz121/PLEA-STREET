package com.plestreet.community.service;

import java.util.UUID;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plestreet.community.domain.Board;
import com.plestreet.community.domain.User;
import com.plestreet.community.dto.BoardCreateDto;
import com.plestreet.community.exception.BoardNotFoundException;
import com.plestreet.community.repository.BoardRepo;
import com.plestreet.community.repository.UserRepo;
import com.plestreet.community.security.TokenProvider;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class BoardService {

	private final BoardRepo boardRepo;
	private final UserRepo userRepo;
	private final TokenProvider tokenProvider;

	public String createBoard(BoardCreateDto boardCreateDto){
		User user = userRepo.findByUserId(tokenProvider.getUserIdFromToken(boardCreateDto.getToken())).orElseThrow(() -> new UsernameNotFoundException("(게시글생성 해당 유저가 없습니다"));
		String getBoardId = generateBoardId();
		boardRepo.save(
			Board.builder()
				.boardId(getBoardId)
				.boardTitle(boardCreateDto.getTitle())
				.boardContent(boardCreateDto.getContent())
				.user(user)
				.build()
		);
		return getBoardId;
	}

	public void deleteBoard(String boardId){
		Board board = boardRepo.findByboardId(boardId).orElseThrow(() -> new BoardNotFoundException("선택된 게시글이 없습니다"));
		if(board.getBoardId() == null)
			throw new BoardNotFoundException("선택된 게시글의 번호가 없습니다");
		boardRepo.delete(board);
	}

	public String generateBoardId(){
		return UUID.randomUUID().toString();
	}
}
