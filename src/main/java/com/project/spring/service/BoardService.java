package com.project.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.spring.dao.Board;
import com.project.spring.mapper.BoardMapper;


@Service
public class BoardService {
	
	@Autowired 
	private BoardMapper boardMapper;
	
	
	
	public List<Board> getAllBoard() {
		return boardMapper.getAllBoard();
	}
	
	public boolean addBoard(Board board) {
		return boardMapper.addBoard(board);
	}

	public Board getOneBoard(int id) {
	    return boardMapper.getOneBoard(id);
	}
}
