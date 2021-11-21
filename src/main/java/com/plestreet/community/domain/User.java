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

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="usertable")
@NoArgsConstructor
@AllArgsConstructor
@Data
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


	public static User createUser(String userId, String userPwd, String userName, String userPhone){
		User user = new User();
		user.userId = userId;
		user.userPwd = userPwd;
		user.userName = userName;
		user.userPhone = userPhone;
		return user;
	}
}
