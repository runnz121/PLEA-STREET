package com.plestreet.community.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plestreet.community.domain.User;
import com.plestreet.community.dto.SignUpDto;

public interface UserRepo extends JpaRepository<User, Long> {

	Optional<User> save(SignUpDto signUpDto);

	Optional<User> findByUserId(String userId);
}
