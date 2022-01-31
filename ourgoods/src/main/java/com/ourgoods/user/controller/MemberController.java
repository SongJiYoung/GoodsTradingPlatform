package com.ourgoods.user.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;

public interface MemberController {
	// ADMIN USER
	
	// USER LIST
	public ModelAndView listOfMembers(HttpServletRequest request, HttpServletResponse response) throws Exception;
	
	// USER REMOVE
	public int removeMembers() throws Exception;
	
	// USER HISTROY
	public ModelAndView historyOfMembers(HttpServletRequest request, HttpServletResponse response) throws Exception;
	
	
}
