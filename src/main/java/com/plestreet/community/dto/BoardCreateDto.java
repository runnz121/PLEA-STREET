package com.plestreet.community.dto;

import com.plestreet.community.domain.Board;
import com.plestreet.community.domain.User;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class BoardCreateDto {

	private String title;

	private String content;

	private String token;
}
