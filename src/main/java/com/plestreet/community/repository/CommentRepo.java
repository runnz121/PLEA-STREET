package com.plestreet.community.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.plestreet.community.domain.Board;
import com.plestreet.community.domain.Comments;
import com.plestreet.community.dto.CreateCommentDto;
import com.plestreet.community.dto.GetCommentsDto;

@Repository
public interface CommentRepo extends JpaRepository<Comments, Long > {

	// @Query("SELECT c.username, c.content FROM Comments c Where c.board IN (SELECT b.boardPkId FROM Board b WHERE b.boardId = :id)")
	@Query(value = "select c.username, c.content from comment c where c.boardId=:id", nativeQuery = true)
	Optional<Comments> findCommentsByBoardId(Long id);

	List<Comments> findByBoardId(Long id);
}
