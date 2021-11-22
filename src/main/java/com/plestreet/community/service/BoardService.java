package com.plestreet.community.service;

import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plestreet.community.domain.Board;
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

	public Long createBoard(BoardCreateDto boardCreateDto){
		Long userId = userRepo.findByUserId(tokenProvider.getUserIdFromToken(boardCreateDto.getToken())).orElseThrow()
			.getUserPkId();
		Long getBoardId = generateBoardId(userId);
		boardRepo.save(
			Board.builder()
				.boardId(getBoardId)
				.boardTitle(boardCreateDto.getTitle())
				.boardTitle(boardCreateDto.getContent())
				.build()
		);
		return getBoardId;
	}

	public void deleteBoard(Long boardId){
		Board board = boardRepo.findById(boardId).orElseThrow(() -> new BoardNotFoundException("선택된 게시글이 없습니다"));
		if(board.getBoardId() == null)
			throw new BoardNotFoundException("선택된 게시글의 번호가 없습니다");
		boardRepo.delete(board);
	}

	public Long generateBoardId(Long userId){
		Long randomId = Long.parseLong(UUID.randomUUID().toString());
		return randomId + userId;
	}
}
