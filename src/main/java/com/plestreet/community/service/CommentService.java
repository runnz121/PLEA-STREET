package com.plestreet.community.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.plestreet.community.domain.Board;
import com.plestreet.community.domain.Comments;
import com.plestreet.community.dto.CreateCommentDto;
import com.plestreet.community.dto.CreateCommentsResponseDto;
import com.plestreet.community.dto.GetCommentsDto;
import com.plestreet.community.exception.BoardNotFoundException;
import com.plestreet.community.exception.CommentsNotFoundException;
import com.plestreet.community.repository.BoardRepo;
import com.plestreet.community.repository.CommentRepo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class CommentService {

	private final CommentRepo commentRepo;
	private final BoardRepo boardRepo;


	public CreateCommentsResponseDto createComments(CreateCommentDto createCommentDto) {
		Board board = boardRepo.findByboardId(createCommentDto.getBoardId()).orElseThrow(()->new BoardNotFoundException("게시글이 없습니다"));
		log.info(String.valueOf(board));
		String getCommentId = generateCommentId();
		commentRepo.save(
			Comments.builder()
					.commentId(getCommentId)
					.username(createCommentDto.getUsername())
					.password(createCommentDto.getPassword())
					.content(createCommentDto.getContent())
					.board(board)
				.build()
		);
		return CreateCommentsResponseDto.builder()
			.username(createCommentDto.getUsername())
			.content(createCommentDto.getContent())
			.build();
	}


	public String generateCommentId(){
		return UUID.randomUUID().toString();
	}

	//댓글 갖고오기
	public List<GetCommentsDto> getComments(String boardId) {
		Board board = boardRepo.findByboardId(boardId).orElseThrow(BoardNotFoundException::new);
		List<Comments> comments = commentRepo.findByBoardId(board.getId());
		List<GetCommentsDto> getCommentsDtoList = new ArrayList<>();
		for(Comments comment : comments){
			getCommentsDtoList.add(GetCommentsDto.builder()
				.username(comment.getUsername())
				.content(comment.getContent())
				.boardId(boardId)
				.build());
		}
		return getCommentsDtoList;
	}
}
