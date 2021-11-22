package com.plestreet.community.exception;

public class BoardNotFoundException extends RuntimeException{
	public BoardNotFoundException(String message) {
		super(message);
	}
}
