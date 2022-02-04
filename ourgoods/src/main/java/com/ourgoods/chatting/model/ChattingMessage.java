package com.ourgoods.chatting.model;

import java.io.Serializable;

public class ChattingMessage implements Serializable{
	
	private String author;
	private String content;
	private String timestamp;
	
	public ChattingMessage() {

	}

	public ChattingMessage(String author, String content) {
		super();
		this.author = author;
		this.content = content;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}
	
	@Override
	public String toString() {
		return "Messge[" +
				"author'" + author + '\'' +
				", content='" + content + '\'' +
				", timestamp='" + timestamp + '\'' +
				'}';
	}
	
	
}
