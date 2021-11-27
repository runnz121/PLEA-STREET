package com.plestreet.community.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.plestreet.community.domain.Board;
import com.plestreet.community.domain.Comments;
import com.plestreet.community.dto.CreateCommentDto;
import com.plestreet.community.dto.GetCommentsDto;

@Repository
public interface CommentRepo extends JpaRepository<Comments, Long > {


}
