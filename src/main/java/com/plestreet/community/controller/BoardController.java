package com.plestreet.community.controller;


import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.plestreet.community.dto.BoardCreateDto;
import com.plestreet.community.dto.BoardResponseDto;
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
		String boardId = boardService.createBoard(boardCreateDto);
		return new ResponseEntity<>(boardId, HttpStatus.CREATED);
	}

	//글 삭제하기
	@DeleteMapping
	public ResponseEntity<?> deletePost(@RequestParam("boardId") String boardId){
		boardService.deleteBoard(boardId);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	//게시목록 갖고오기 최신순
	@GetMapping("/all")
	public ResponseEntity<?> getPost(@PageableDefault(page = 1, size = 3, sort = "id", direction = Sort.Direction.DESC) Pageable pageable){
		return new ResponseEntity<>(boardService.getPostList(pageable), HttpStatus.OK);
	}

	//선택한 게시글 데이터 불러오기
	@GetMapping("/find")
	public ResponseEntity<BoardResponseDto> selectPost(@RequestParam("postId") String postId){
		return new ResponseEntity<>(boardService.selectedPost(postId), HttpStatus.OK);
	}
}
