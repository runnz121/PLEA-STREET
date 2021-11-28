package com.plestreet.community.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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

	@Enumerated(value = EnumType.STRING)
	private State state;



	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="boardId")
	private Board board;

	@Builder
	public Comments(Long id, String commentId, String username, String password, String content, Board board){
		this.id = id;
		this.commentId = commentId;
		this.username = username;
		this.password = password;
		this.content = content;
		this.board = board;
	}
}
