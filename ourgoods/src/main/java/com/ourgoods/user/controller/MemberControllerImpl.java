package com.ourgoods.user.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ourgoods.user.service.MemberService;

@RestController("memberController")
public class MemberControllerImpl implements MemberController{
	
	// FOR ADMIN ONLY -- admin 권한 을 가진유저만 사용할수 있는 기능
	// TODO: 사용자간의 구분 general User & admin User
	
	@Autowired
	MemberService memberService;
	
	// FOR ADMIN ONLY
	// DB에 저장된 사용자만 출력한
	@Override
	@RequestMapping(value="/member/listMembers", method = RequestMethod.GET)
	public ModelAndView listOfMembers(HttpServletRequest request, HttpServletResponse response) throws Exception {
		List membersList = memberService.listMembers();
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("membersList", membersList);
		mav.setViewName("/member/listMembers");
		
		return mav;
	}
	
	// FOR ADMIN ONLY
	// DB에 저장된 사용자를 삭제
	@Override
	@RequestMapping(value="/member/removeMembers")
	public int removeMembers() throws Exception {
		return 0;
	}
	
	// FOR  ADMIN ONLY
	// 각각 유저의 HiSTORY 를 열람 한다 
	@Override
	public ModelAndView historyOfMembers(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return null;
	}
	
	// MAIN Page
	@RequestMapping(value="/", method = RequestMethod.GET)
	public ModelAndView main() {	
		ModelAndView mav = new ModelAndView("main");
		return mav;
	}




	
}
