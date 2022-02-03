<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />
<%
request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 가입창</title>
<style type="text/css">

.id_input_re_1 {
	color: green;
	display: none;
}

.id_input_re_2 {
	color: red;
	display: none;
}

/* #mail_check_input_box_false {
	background-color: #ebebe4;
}

#mail_check_input_box_true {
	background-color: white;
} */

/* 이매일 인증시 동일하면 GREEN 아니면 RED */
.correct {
	color: green;
}

.incorrect {
	color: red;
}
</style>
<!-- Daum KaKao map -->
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript">
	var code = ""; //이메일전송 인증번호 저장위한 코드

	$(document).ready(
			function() {

				//회원가입 버튼(회원가입 기능 작동)
				$(".join_button").click(function() {
					console.log("join clicked");
					$("#join_form").attr("action", "/member/addMembers");
					$("#join_form").submit();
				});

				//아이디 중복검사
				$('.id_input').on(
						"propertychange change keyup paste input",
						function() {

							console.log("keyup 테스트");

							var id = $('.id_input').val(); // .id_input에 입력되는 값
							var data = {
								id : id
							} // '컨트롤에 넘길 데이터 이름' : '데이터(.id_input에 입력되는 값)'

							$.ajax({
								type : "post",
								url : "/member/memberIdCheck",
								data : data,
								success : function(result) {
									console.log("성공 여부" + result);

									if (result != 'fail') {
										$('.id_input_re_1').css("display",
												"inline-block");
										$('.id_input_re_2').css("display",
												"none");
									} else {
										$('.id_input_re_2').css("display",
												"inline-block");
										$('.id_input_re_1').css("display",
												"none");
									}

								}// success 종료
							}); // ajax 종료	
						});// function 종료

				/* 인증번호 이메일 전송 */
				$(".mail_check_button").click(function() {
					var email = $(".mail_input").val(); // 입력한 이메일
					var cehckBox = $(".mail_check_input"); // 인증번호 입력란
					var boxWrap = $(".mail_check_input_box"); // 인증번호 입력란 박스

					console.log('mail button clicked');
					$.ajax({

						type : "GET",
						url : "mailCheck?email=" + email,
						success : function(data) {

							//console.log("data : " + data);
							cehckBox.attr("disabled", false);
							boxWrap.attr("id", "mail_check_input_box_true");
							code = data;
						}
					});
				});

				/* 인증번호 비교 */
				$(".mail_check_input").blur(function() {

					var inputCode = $(".mail_check_input").val(); // 입력코드    
					var checkResult = $("#mail_check_input_box_warn"); // 비교 결과  

					if (inputCode == code) { // 일치할 경우
						checkResult.html("인증번호가 일치합니다.");
						checkResult.attr("class", "correct");
					} else { // 일치하지 않을 경우
						checkResult.html("인증번호를 다시 확인해주세요.");
						checkResult.attr("class", "incorrect");
					}
				});

				/* 다음 주소 연동 */
				$(".address_button").click(function() {
					new daum.Postcode({
						oncomplete : function(data) {
							
							// 아직 주소관련 미구현 입니다.

						}
					}).open();
				});
			});// end ready()///////////////////
</script>
</head>
<body>
	<div class="wrapper">
		<form id="join_form" method="post">
			<div class="wrap">
				<div class="subject">
					<span>회원 가입창</span>
				</div>

				<!-- ID -->
				<div class="id_wrap">
					<div class="id_name">ID</div>
					<div class="id_input_box">
						<input class="id_input" name="id">
					</div>
					<span class="id_input_re_1">사용 가능한 아이디입니다.</span> <span
						class="id_input_re_2">아이디가 이미 존재합니다.</span>

					<!-- PW -->
					<div class="pw_wrap">
						<div class="pw_name">비밀번호</div>
						<div class="pw_input_box">
							<input class="pw_input" name="pw">
						</div>
						<span class="final_pw_ck">비밀번호를 입력해주세요.</span>
					</div>
					<div class="pwck_wrap">
						<div class="pwck_name">비밀번호 확인</div>
						<div class="pwck_input_box">
							<input class="pwck_input">

					<!-- Name -->
					<div class="user_wrap">
						<div class="user_name">이름</div>
						<div class="user_input_box">
							<input class="user_input" name="name">
						</div>
						<span class="final_name_ck">이름을 입력해주세요.</span>
					</div>

					<!-- Email -->
					<div class="mail_wrap">
						<div class="mail_name">이메일</div>
						<div class="mail_input_box">
							<input class="mail_input" type="email" name="email">
						</div>
						<span class="final_mail_ck">이메일을 입력해주세요.</span>
						<sapn class="mail_input_box_warn"></sapn>
						<div class="mail_check_wrap">
							<div class="mail_check_input_box" id="mail_check_input_box_false">
								<input class="mail_check_input" disabled="disabled">
							</div>
							<div class="mail_check_button">
								<span>인증번호 전송</span>
							</div>
							<div class="clearfix"></div>
							<span id="mail_check_input_box_warn"></span>
						</div>
					</div>

					<!-- Phone -->
					<div class="phone_wrap">
						<div class="phone_name">Phone</div>
						<div class="phone_input_box">
							<input class="phone_input" name="phone">
						</div>

						<!-- Address -->
						<!-- 이쪽은 아직 미구현 입니다 -->
						<div class="address_wrap">
							<div class="address_name">주소</div>
							<div class="address_input_1_wrap">
								<div class="address_input_1_box">
									<input class="address_input_1" name="addr" readonly="readonly">
								</div>
								<div class="address_button">
									<span>주소 찾기</span>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="address_input_2_wrap">
								<div class="address_input_2_box">
									<input class="address_input_2" name="memberAddr2"
										readonly="readonly">
								</div>
							</div>
							<div class="address_input_3_wrap">
								<div class="address_input_3_box">
									<input class="address_input_3" name="memberAddr3"
										readonly="readonly">
								</div>
							</div>
							<span class="final_addr_ck">주소를 입력해주세요.</span>
						</div>

						<!-- Submit -->
						<div class="join_button_wrap">
							<input type="button" class="join_button" value="가입하기">
						</div>

					</div>
				</div>
			</div>
		</form>
	</div>
</body>