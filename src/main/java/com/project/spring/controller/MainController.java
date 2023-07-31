package com.project.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import com.project.spring.dao.Board;
//import com.project.spring.service.BoardService;
import org.springframework.web.bind.annotation.ResponseBody;

import com.project.spring.dao.Board;
import com.project.spring.service.BoardService;

@Controller
public class MainController {

	
	@Autowired
	private BoardService boardService;
	
	@GetMapping("/")
	public String start() {
		return "index";
	}
	
	@GetMapping("/content")
	public String content() {
		return "content";
	}
	
	@GetMapping("/form")
	public String form() {
		return "form";
	}
	@GetMapping("/boardList")
	@ResponseBody
	public List<Board> boardList() {
		return boardService.getAllBoard();
	}
}
