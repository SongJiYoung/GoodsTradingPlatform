package com.ourgoods.chatting.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ourgoods.chatting.constants.KafkaConstants;
import com.ourgoods.chatting.model.ChattingMessage;

@CrossOrigin
@RestController
@RequestMapping(value = "/kafka")
public class ChattingController {
	
    @Autowired
    private KafkaTemplate<String, ChattingMessage> kafkaTemplate;

    @PostMapping(value = "/publish")
    public void sendMessage(@RequestBody ChattingMessage message) {
        System.out.println("Produce message : " + message.toString());
        message.setTimestamp(LocalDateTime.now().toString());
        try {
            kafkaTemplate.send(KafkaConstants.KAFKA_TOPIC, message).get();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @MessageMapping("/sendMessage")
    @SendTo("/topic/group")
    public ChattingMessage broadcastGroupMessage(@Payload ChattingMessage message) {
        return message;
    }

}