package com.plestreet.community.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.plestreet.community.security.TokenAuthenticationFilter;
import com.plestreet.community.service.CustomUserDetailService;

import lombok.RequiredArgsConstructor;


@EnableWebSecurity
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(
	securedEnabled = true,
	jsr250Enabled = true,
	prePostEnabled = true
)
public class SecurityConfig extends WebSecurityConfigurerAdapter {


	private final CustomUserDetailService customUserDetailService;


	@Bean
	public TokenAuthenticationFilter tokenAuthenticationFilter(){
		return new TokenAuthenticationFilter();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(customUserDetailService);
	}


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				.cors()
			.and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
				.csrf().disable()
				.formLogin().disable()
				.httpBasic().disable()
				.exceptionHandling().authenticationEntryPoint(new AuthEntryPoint())
			.and()
				.authorizeRequests()
					.antMatchers("/","/error","/favicon.ico", "/**/*.png", "/**/*.gif",
						"/**/*.svg",
						"/**/*.jpg",
						"/**/*.html",
						"/**/*.css",
						"/**/*.js").permitAll()
				.antMatchers("/PLEA-STREET/user/**","/PLEA-STREET/board/all").permitAll()

				.anyRequest().authenticated();

		http.addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
	}
}
