package com.plestreet.community.controller;

import static org.assertj.core.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.plestreet.community.domain.User;
import com.plestreet.community.dto.RequestSignInDto;
import com.plestreet.community.dto.SignUpDto;
import com.plestreet.community.repository.UserRepo;
import com.plestreet.community.service.UserService;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class UserControllerTest {

	@Autowired
	MockMvc mockMvc;
	@Autowired
	UserService userService;
	@Autowired
	ObjectMapper objectMapper;
	@Autowired
	UserRepo userRepo;

	@PersistenceContext
	EntityManager em;

	@BeforeEach
	public void beforeEach() {
		userService.handleSignUp(new SignUpDto("test", "123","123","123"));
		User user = User.createUser("aaa","aaa","aaa","aaa");
		em.persist(user);
	}

	@Test
	public void registerTest() throws Exception {
		//given
		SignUpDto signUpDto = new SignUpDto("111","111","11","111");
		String content = objectMapper.writeValueAsString(signUpDto);

		//when, then
		mockMvc.perform(MockMvcRequestBuilders.post("/PLEA-STREET/user/signup")
			.contentType(MediaType.APPLICATION_JSON)
			.content(content))
			.andExpect(MockMvcResultMatchers.status().isCreated())
			.andDo(MockMvcResultHandlers.print());

	}

	@Test
	public void loginTest() throws Exception {
		//given
		String userId = "aaa";
		String userPwd = "aaa";
		RequestSignInDto requestSignInDto = new RequestSignInDto(userId, userPwd);
		String content = objectMapper.writeValueAsString(requestSignInDto);

		//when, then
		mockMvc.perform(MockMvcRequestBuilders.get("/PLEA-STREET/user/signin")
			.contentType(MediaType.APPLICATION_JSON)
			.content(content))
			.andExpect(MockMvcResultMatchers.jsonPath("$.data.accessToken").exists())
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(MockMvcResultHandlers.print());
	}

	@Test
	public void findUserTest() throws Exception {
		//given

		//when, then
		User user = userRepo.findByUserId("aaa").orElseThrow(()-> new UsernameNotFoundException("x"));
		em.flush();
		em.clear();
		assertThat(user.getUserId()).isEqualTo("aaa");

	}

}
