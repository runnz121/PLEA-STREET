package com.plestreet.community.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.plestreet.community.dto.GetCommentsDto;
import com.sun.istack.NotNull;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="comment")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comments {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	private String commentId;

	@NotNull
	private String username;

	@NotNull
	private String password;

	@NotNull
	@Lob
	private String content;


	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="boardPkId")
	private Board board;

	@Builder
	public Comments(String commentId,Long id, String username, String password, String content, Board board){
		this.commentId = commentId;
		this.id = id;
		this.username = username;
		this.password = password;
		this.content = content;
		this.board = board;
	}
}
