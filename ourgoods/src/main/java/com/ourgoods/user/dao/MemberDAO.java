package com.ourgoods.user.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

@Mapper
@Repository("memberDAO")
public interface MemberDAO {
	 // 유져 리스트
	 public List selectAllMemberList() throws DataAccessException;
}
