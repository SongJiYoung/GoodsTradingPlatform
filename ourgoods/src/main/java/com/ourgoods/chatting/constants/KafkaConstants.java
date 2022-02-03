package com.ourgoods.chatting.constants;

public class KafkaConstants {
	//생성한 토픽의 이름. 아래에서 토픽을 생성할 것(동일한 이름으로 생성)
	public static final String KAFKA_TOPIC = "kafka-chat";
	//consumer를 식별할 수 있는 그룹
	public static final String GROUP_ID = "foo";
	//Kafka클러스터에 연결하기 위한 호스트 값
	public static final String KAFKA_BROKER = "localhost:9092";
}
