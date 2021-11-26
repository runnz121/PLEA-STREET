package com.plestreet.community.service;

import java.util.List;
import java.util.UUID;

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

	//게시글 갖고오기
	public Comments getComments(String boardId){
		Board board = boardRepo.findByboardId(boardId).orElseThrow(()->new BoardNotFoundException("게시글이 없습니다"));
		log.info(String.valueOf(board));
		Comments comments = commentRepo.findById(board.getBoardPkId()).orElseThrow(()->new CommentsNotFoundException("댓글이 없습니다"));
		log.info(String.valueOf(board.getBoardPkId()));
		return comments;
	}
}
