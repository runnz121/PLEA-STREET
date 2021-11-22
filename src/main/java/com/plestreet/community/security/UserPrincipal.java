package com.plestreet.community.security;

import java.util.Collection;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.plestreet.community.domain.User;
;

public class UserPrincipal implements UserDetails {

	private String userId;
	private String userPwd;

	public UserPrincipal(String userId, String userPwd) {
		this.userId = userId;
		this.userPwd= userPwd;
	}

	public static UserPrincipal create(User user) {
		return new UserPrincipal(
			user.getUserId(),
			user.getUserPwd()
		);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getPassword() {
		return userPwd;
	}

	@Override
	public String getUsername() {
		return userId;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
