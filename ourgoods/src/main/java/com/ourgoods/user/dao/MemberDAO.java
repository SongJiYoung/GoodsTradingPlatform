package com.ourgoods.user.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.ourgoods.user.vo.UserVO;

@Mapper
@Repository("memberDAO")
public interface MemberDAO {
	 // 유져 리스트
	 public List selectAllMemberList() throws DataAccessException;
	 // 유저 추가
	 public int insertMember(UserVO userVO) throws DataAccessException;
	 
	 public void memberUpdate(UserVO userVO) throws DataAccessException; 
	 
	 public int checkById(String id) throws DataAccessException;
}
