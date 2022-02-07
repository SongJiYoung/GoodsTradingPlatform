package com.ourgoods.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ourgoods.user.dao.MemberDAO;
import com.ourgoods.user.vo.UserVO;

@Service("memberService")
@Transactional(propagation = Propagation.REQUIRED)
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	MemberDAO memberDAO;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	// admin 계정일때만 접속가능하게 구현 
	@Override
	public List listMembers() throws Exception {
		List memberList = null;
		memberList = memberDAO.selectAllMemberList();
		return memberList;
	}

	@Override
	public int addMembers(UserVO userVO) throws Exception {
		String encodePassword = passwordEncoder.encode(userVO.getPw());
		userVO.setPw(encodePassword);
		return memberDAO.insertMember(userVO);
	}

	@Override
	public int checkMemberId(String id) throws Exception {
		return memberDAO.checkById(id);
	}
}
