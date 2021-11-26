package com.plestreet.community.dto;

import java.util.ArrayList;
import java.util.List;

import com.plestreet.community.domain.Comments;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class GetCommentsDto {
	private String username;

	private String content;

	//private List<Comments> subcomments;
}
