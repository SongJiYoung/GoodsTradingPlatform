package com.ourgoods.chatting.model;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import org.springframework.web.socket.WebSocketSession;

public class ChattingRoom {
	private String roomId;
	private String name;
	private Set<WebSocketSession> sessions = new HashSet<>();
	
	public static ChattingRoom create(String name) {
		ChattingRoom room = new ChattingRoom();
		
		room.roomId = UUID.randomUUID().toString();
		room.name = name;
		return room;
	}
	
}
