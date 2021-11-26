package com.plestreet.community.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.plestreet.community.dto.CreateCommentDto;
import com.plestreet.community.dto.CreateCommentsResponseDto;
import com.plestreet.community.dto.GetCommentsDto;
import com.plestreet.community.service.CommentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/PLEA-STREET/comment")
@RequiredArgsConstructor
public class CommentsController {

	private final CommentService commentService;

	//댓글 생성
	@PostMapping
	public ResponseEntity<CreateCommentsResponseDto> createComment(@RequestBody CreateCommentDto createCommentDto){
		return new ResponseEntity<>(commentService.createComments(createCommentDto), HttpStatus.CREATED);
	}

	// //댓글 조회
	// @GetMapping
	// public ResponseEntity<?> getComment(@RequestParam("boardId") String boardId){
	// 	return new ResponseEntity<>(commentService.getComments(boardId),HttpStatus.OK);
	// }


	// //댓글 삭제
	// @DeleteMapping
	// public ResponseEntity<?> deleteComment

}
