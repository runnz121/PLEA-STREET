package com.plestreet.community.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.plestreet.community.service.CustomUserDetailService;



public class TokenAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private TokenProvider tokenProvider;

	@Autowired
	private CustomUserDetailService customUserDetailService;



	private String getToken(HttpServletRequest request) {
		String token = request.getHeader("Authorization");
		if (StringUtils.hasText(token) && token.startsWith("Bearer ")){
			return token.substring(7, token.length());
		}
		return null;
	}


	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
		FilterChain filterChain) throws ServletException, IOException {

		String jwt = getToken(request);

		if(StringUtils.hasText(jwt) && tokenProvider.validToken(jwt)){
			//여기서 토큰으로부터 유저아이디를 갖고옴
			String userId = tokenProvider.getUserIdFromToken(jwt);

			UserDetails userDetails = customUserDetailService.loadUserByUsername(userId);

			UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, null,
				userDetails.getAuthorities());

			SecurityContextHolder.getContext().setAuthentication(auth);
		}
		filterChain.doFilter(request, response);
	}
}
