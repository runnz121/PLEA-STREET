package com.plestreet.community.domain;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="boardtable")
@NoArgsConstructor
@AllArgsConstructor
public class Board {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long boardPkId;

	@Column(nullable = false)
	private Long boardId;

	@Column(nullable = false)
	private String boardTitle;

	@Lob
	private Blob boardImage;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "userPkId")
	private User user;

}
