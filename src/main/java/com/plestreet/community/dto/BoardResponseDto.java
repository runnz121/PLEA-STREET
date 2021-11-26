package com.plestreet.community.dto;

import java.util.List;

import com.plestreet.community.domain.Comments;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class BoardResponseDto {

	private String title;

	private String content;

	private String boardId;

	private List<Comments> commentsList;
}
