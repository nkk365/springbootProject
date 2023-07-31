package com.project.spring.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.project.spring.dao.Board;


@Repository
public interface BoardMapper {
    public boolean addBoard(Board board);
    public List<Board> getAllBoard();
    public Board getOneBoard(int id);
}