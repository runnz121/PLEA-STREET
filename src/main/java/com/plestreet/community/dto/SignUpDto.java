package com.plestreet.community.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpDto {

	private String userId;

	private String userPwd;

	private String userName;

	private String userPhone;


}
