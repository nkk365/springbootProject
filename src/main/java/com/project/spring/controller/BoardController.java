package com.project.spring.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.project.spring.dao.Board;
import com.project.spring.service.BoardService;

@Controller
public class BoardController {

    @Autowired
    private BoardService boardService;

    @PostMapping("/write")
    public String write(
            @RequestParam(value = "image", required = false) List<MultipartFile> files,
            @RequestParam(value = "title", required = true) String title,
            @RequestParam(value = "content", required = true) String content,
            @RequestParam(value = "author", required = true) String author,
            RedirectAttributes redirectAttributes
    ) throws IOException {
        String PATH = "resources/";

        for (MultipartFile file : files) {
            if (!file.isEmpty()) {

                file.transferTo(new File(PATH + file.getOriginalFilename()));
            }
        }


        String imageFilename = (files.isEmpty()) ? "" : files.get(0).getOriginalFilename();

  
        boardService.addBoard(new Board(0, title, content, author, imageFilename));


        redirectAttributes.addFlashAttribute("message", "등록 되었습니다");
        return "redirect:/content";
    }
}
