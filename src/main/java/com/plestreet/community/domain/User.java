package com.plestreet.community.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="user")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userPkId;

	@Column(nullable = false)
	private String userId;

	@Column(nullable = false)
	private String userPwd;

	@Column(nullable = false)
	private String userPhone;

	@Column(nullable = false)
	private String userName;


	@OneToMany(mappedBy = "user")
	private List<Board> boards = new ArrayList<>();

	@Builder
	public User(Long userPkId, String userId, String userPwd, String userName, String userPhone) {
		this.userPkId = userPkId;
		this.userId = userId;
		this.userPwd = userPwd;
		this.userName = userName;
		this.userPhone = userPhone;
	}
}
