package com.plestreet.community.exception;

public class CommentsNotFoundException extends RuntimeException {
	public CommentsNotFoundException(String message) {
		super(message);
	}
}
