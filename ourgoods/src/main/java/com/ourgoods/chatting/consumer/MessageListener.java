package com.ourgoods.chatting.consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import com.ourgoods.chatting.constants.KafkaConstants;
import com.ourgoods.chatting.model.ChattingMessage;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class MessageListener {
	

    @Autowired
    SimpMessagingTemplate template;

    @KafkaListener(
            topics = KafkaConstants.KAFKA_TOPIC,
            groupId = KafkaConstants.GROUP_ID
    )
    public void listen(ChattingMessage message) {
        System.out.println("sending via kafka listener..");
        template.convertAndSend("/topic/group", message);
    }
}