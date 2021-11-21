package com.plestreet.community.dto;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ResponseSignInDto {

	private String accessToken;
	private String tokenType = "Bearer ";

	public ResponseSignInDto(String accessToken) {
		this.accessToken = accessToken;
	}
}
