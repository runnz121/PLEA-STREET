package com.plestreet.community.controller;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.plestreet.community.dto.BoardCreateDto;
import com.plestreet.community.service.BoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/PLEA-STREET/board")
public class BoardController {

	private final BoardService boardService;

	@GetMapping("/check")
	public String check() {
		return "check";
	}

	//글 작성하기
	@PostMapping
	public ResponseEntity<?> createPost(@RequestBody BoardCreateDto boardCreateDto){
		Long boardId = boardService.createBoard(boardCreateDto);
		return new ResponseEntity<>(boardId, HttpStatus.CREATED);
	}

	//글 삭제하기
	@DeleteMapping
	public ResponseEntity<?> deletePost(@RequestParam("boardId") Long boardId){
		boardService.deleteBoard(boardId);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
}
