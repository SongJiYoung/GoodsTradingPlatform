package com.ourgoods.user.controller;

import java.util.List;
import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ourgoods.user.service.MemberService;
import com.ourgoods.user.vo.UserVO;

@RestController("memberController")
public class MemberControllerImpl implements MemberController {

	// FOR ADMIN ONLY -- admin 권한 을 가진유저만 사용할수 있는 기능
	// TODO: 사용자간의 구분 general User & admin User

	private static final Logger logger = LoggerFactory.getLogger(MemberControllerImpl.class);
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	MemberService memberService;

	@Autowired
	UserVO userVO;

	// FOR ADMIN ONLY
	// DB에 저장된 사용자만 출력한
	@Override
	@RequestMapping(value = "/member/listMembers", method = RequestMethod.GET)
	public ModelAndView listOfMembers(HttpServletRequest request, HttpServletResponse response) throws Exception {
		List membersList = memberService.listMembers();

		logger.info("listMember Called");

		ModelAndView mav = new ModelAndView();
		mav.addObject("membersList", membersList);
		mav.setViewName("/member/listMembers");

		return mav;
	}

	// FOR ADMIN ONLY
	// DB에 저장된 사용자를 삭제
	@Override
	@RequestMapping(value = "/member/removeMembers")
	public int removeMembers() throws Exception {
		return 0;
	}

	// FOR ADMIN ONLY
	// 각각 유저의 HiSTORY 를 열람 한다
	@Override
	public ModelAndView historyOfMembers(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return null;
	}

	// FOR ADMIN ONLY
	// 유저의 이름을 변경한다

	// 사용자 추가
	@Override
	@RequestMapping(value = "/member/addMembers", method = RequestMethod.POST)
	public ModelAndView newMembers(@ModelAttribute("user") UserVO user, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		request.setCharacterEncoding("utf-8");
		int result = 0;

		logger.info("AddMemebers Called");

		result = memberService.addMembers(user);
		ModelAndView mav = new ModelAndView("redirect:/member/listMembers");

		return mav;
	}

	// MAIN Page
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView main() {
		ModelAndView mav = new ModelAndView("main");
		return mav;
	}

	@RequestMapping(value = "/member/memberForm", method = RequestMethod.GET)
	public ModelAndView memberForm() {
		ModelAndView mav = new ModelAndView("/member/memberForm");
		return mav;
	}

	@Override
	@RequestMapping(value = "/member/memberIdCheck", method = RequestMethod.POST)
	public String memberIdCheck(String id) throws Exception {
		logger.info("memberIdCheck called");

		int result = memberService.checkMemberId(id);

		logger.info("결과값 = " + result);

		// id의 수가 0보다 크다면
		// 하나이상의 id 가 존재하므로 중복된 id이다
		if (result != 0) {

			return "fail";

		} else {

			return "success";

		}
	}

	@Override
	@RequestMapping(value = "/member/mailCheck", method = RequestMethod.GET)
	public String mailCheckByEmail(String email) throws Exception {
		logger.info("이메일 데이터 전송 확인");
		logger.info("인증번호 : " + email);
		
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
		
		/* 인증번호(난수) 생성 */
		Random random = new Random();
		int checkNum = random.nextInt(8888) + 1111;

		logger.info("인증번호 " + checkNum);

		String htmlString = "Our Goods를 방문해주셔서 진심으로 환영합니다" + "<br><br>" + " 인증번호: " + checkNum + " 입니다." + "<br><br>"
				+ "해당 인증번호를 인증번호 확인란에 기입하여 주세요.";
		try {
			helper.setTo(email);
			helper.setSubject("안녕하세요? Our Goods 입니다.");
			helper.setText(htmlString, true);
			javaMailSender.send(mimeMessage);
		} catch (MessagingException e) {
			e.printStackTrace();
		}

		String num = Integer.toString(checkNum);

		return num;
	}

}
