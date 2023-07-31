package com.project.spring.dao;

import lombok.Data;

@Data
public class Board {
    private int id;
    private String title;
    private String content;
    private String image;
    private String author;

    public Board() {
    }

    public Board(int id, String title, String content, String image, String author) {
    	super();
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
        this.author = author;
    }
}