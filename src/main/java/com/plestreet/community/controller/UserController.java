package com.plestreet.community.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plestreet.community.dto.RequestSignInDto;
import com.plestreet.community.dto.ResponseSignInDto;
import com.plestreet.community.dto.SignUpDto;
import com.plestreet.community.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/PLEA-STREET/user")
@RequiredArgsConstructor
public class UserController {

	private final UserService userService;

	//회원가입 처리
	@PostMapping("/signup")
	public ResponseEntity<?> SignUp(@RequestBody SignUpDto signUpDto) {
		userService.handleSignUp(signUpDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	//로그인 처리
	@GetMapping("/signin")
	public ResponseEntity<?> SignIn(@RequestBody RequestSignInDto requestSignInDto) {
		String token = userService.handleLogin(requestSignInDto);
		return ResponseEntity.ok(new ResponseSignInDto(token));
	}
}
