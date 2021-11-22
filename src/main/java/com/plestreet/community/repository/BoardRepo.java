package com.plestreet.community.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plestreet.community.domain.Board;

public interface BoardRepo extends JpaRepository<Board, Long > {

}
