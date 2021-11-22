package com.plestreet.community.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plestreet.community.domain.Board;

public interface BoardRepo extends JpaRepository<Board, Long > {
	Optional<Board> findByboardId(String boardId);
}
