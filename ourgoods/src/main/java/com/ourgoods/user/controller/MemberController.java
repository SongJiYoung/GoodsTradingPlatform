package com.ourgoods.user.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.ModelAndView;

import com.ourgoods.user.vo.UserVO;

public interface MemberController {
	// ADMIN
	
	// ADMIN LOOK LIST
	public ModelAndView listOfMembers(HttpServletRequest request, HttpServletResponse response) throws Exception;
	
	// ADMIN USER REMOVE
	public int removeMembers() throws Exception;
	
	// ADMIN USER HISTROY
	public ModelAndView historyOfMembers(HttpServletRequest request, HttpServletResponse response) throws Exception;
	
	// ADMIN CHAGE USER NAME
	
	//GENERAL
	
	// ADD NEW USER
	public ModelAndView newMembers(@ModelAttribute("info")UserVO user,
		HttpServletRequest request, HttpServletResponse response) throws Exception;
	
	public String memberIdCheck(String id) throws Exception;
	
	public String mailCheckByEmail(String email) throws Exception;
}
