package com.ourgoods.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.ourgoods.user.dao.MemberDAO;

@Service("memberService")
@Transactional(propagation = Propagation.REQUIRED)
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	MemberDAO memberDAO;
	
	// admin 계정일때만 접속가능하게 구현 
	@Override
	public List listMembers() throws Exception {
		List memberList = null;
		memberList = memberDAO.selectAllMemberList();
		return memberList;
	}

	@Override
	public int addMembers() throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

}
