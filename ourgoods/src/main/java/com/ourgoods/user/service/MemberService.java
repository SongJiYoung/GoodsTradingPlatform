package com.ourgoods.user.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.ourgoods.user.vo.UserVO;

public interface MemberService {
	// 사용자 리스트 출
	public List listMembers() throws Exception;

	// 사용자 추가
	public int addMembers(UserVO userVO) throws Exception;

	public int checkMemberId(String id) throws Exception;
}
