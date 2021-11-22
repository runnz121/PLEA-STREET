package com.plestreet.community.security;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class TokenProvider {


	@Value("app.jwt.secret")
	private String secret;

	private long TOKEN_EXPIRY_DUR = 864000000;

	public String createToken(String loginUser) {
		Claims claims = Jwts.claims().setSubject(loginUser);

		Date now = new Date();
		Date expiryDate = new Date(now.getTime() + TOKEN_EXPIRY_DUR);


		return Jwts.builder()
			.setClaims(claims)
			.setIssuedAt(now)
			.setExpiration(expiryDate)
			.signWith(SignatureAlgorithm.HS512, secret)
			.compact();
	}

	public String getUserIdFromToken(String token) {

		try {
			return Jwts.parser()
				.setSigningKey(secret)
				.parseClaimsJws(token)
				.getBody()
				.getSubject();

		} catch (ExpiredJwtException ex) {
			log.info("token Expired");
			return ex.getClaims().getSubject();
		}
	}

	public boolean validToken(String token) {
		try{
			Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
			return true;
		} catch (JwtException ex) {
			ex.printStackTrace();
		}
		return false;
	}

}
