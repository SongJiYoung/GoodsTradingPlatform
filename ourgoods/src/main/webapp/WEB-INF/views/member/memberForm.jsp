<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    isELIgnored="false" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath"  value="${pageContext.request.contextPath}"  />
<%
   request.setCharacterEncoding("UTF-8");
%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 가입창</title>
<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
<style>
 *{
	margin: 0;
	padding:0;
	margin: center;
}
/* 아이디 영역 */
.id_wrap{
	width: 100%;
    margin-top: 20px;
}
.id_name{
	font-size: 25px;
    font-weight: bold;
}
.id_input_box{
	border: 1px solid black;
	height:31px;
	padding: 10px 14px;	
	
}
.id_input{
	width:100%;
	height:100%;
	border:none;
	font-size:28px;
}
	/* 중복아이디 존재하지 않는경우 */
	.id_input_re_1{
		color : green;
		display : none;
	}
	/* 중복아이디 존재하는 경우 */
	.id_input_re_2{
		color : red;
		display : none;
	}

/* /* 비밀번호 영역 */
.pw_wrap{
	width: 100%;
    margin-top: 20px;
}
.pw_name{
	font-size: 25px;
    font-weight: bold;
}
.pw_input_box{
	border: 1px solid black;
	height:31px;
	padding: 10px 14px;	
	
}
.pw_input{
	width:100%;
	height:100%;
	border:none;
	font-size:28px;
}

/* 비밀번호 확인 영역 */
.pwck_wrap{
	width: 100%;
    margin-top: 20px;
}
.pwck_name{
	font-size: 25px;
    font-weight: bold;
}
.pwck_input_box{
	border: 1px solid black;
	height:31px;
	padding: 10px 14px;	
	
}
.pwck_input{
	width:100%;
	height:100%;
	border:none;
	font-size:28px;
}

/* 이름 영역 */
.user_wrap{
	width: 100%;
    margin-top: 20px;
}
.user_name{
	font-size: 25px;
    font-weight: bold;
}
.user_input_box{
	border: 1px solid black;
	height:31px;
	padding: 10px 14px;	
	
}
.user_input{
	width:100%;
	height:100%;
	border:none;
	font-size:28px;
}

.correct{
	color : green;
}
.incorrect{
	color : red;
}

/* 비밀번호 확인 일치 유효성검사 */
.pwck_input_re_1{
		color : green;
		display : none;	
}
.pwck_input_re_2{
		color : red;
		display : none;	
}

/* float 속성 해제 */
.clearfix{
	clear: both; */
}

.final_id_ck{
    display: none;
}
.final_pw_ck{
    display: none;
}
.final_pwck_ck{
    display: none;
}
.final_name_ck{
    display: none;
}
.final_mail_ck{
    display: none;
}
.final_addr_ck{
    display: none;
    
#mail_check_input_box_false{
	background-color:#ebebe4;
}
 
#mail_check_input_box_true{
    background-color:white;
}
.correct{
    color : green;
}
.incorrect{
    color : red;
}
}
</style>
<script type="text/javascript">
var code = "";                //이메일전송 인증번호 저장위한 코드

$(document).ready(function(){
		
	//아이디 중복검사
	$('.id_input').on("propertychange change keyup paste input", function(){
		/* console.log("keyup 테스트"); */
		
		var id = $('.id_input').val();			// .id_input에 입력되는 값
		var data = {id : id}				// '컨트롤에 넘길 데이터 이름' : '데이터(.id_input에 입력되는 값)'
		
		$.ajax({
			type : "post",
			url : "/member/memberIdCheck",
			data : data,
			success : function(result){
				// console.log("성공 여부" + result);
				if(result != 'fail'){
					$('.id_input_re_1').css("display","inline-block");
					$('.id_input_re_2').css("display", "none");	
					idckCheck = true;
				} else {
					$('.id_input_re_2').css("display","inline-block");
					$('.id_input_re_1').css("display", "none");
					idckCheck = false;
				}	
			}// success 종료
		}); // ajax 종료	
	});// function 종료
	
	/* 인증번호 이메일 전송 */
	$(".mail_check_button").click(function(){
		var email = $(".mail_input").val();  
		console.log('hi');
		
		$.ajax({
	        type:"POST",
	        url: "/member/certifiedEmail.do" + email,
	        success:function(data){
	        	
	        	console.log("data : " + data);
/* 	            cehckBox.attr("disabled",false);
	            boxWrap.attr("id", "mail_check_input_box_true");
	            
	            code = data; */
	        }
	                
	    });
	});
	/* 인증번호 비교 */
	$(".mail_check_input").blur(function(){
		var inputCode = $(".mail_check_input").val();        // 입력코드    
	    var checkResult = $("#mail_check_input_box_warn");    // 비교 결과
	    
	});
});// end ready()///////////////////
</script>
</head>
<body>
<div class="wrapper">
	<form id="join_form" method="post" action="${contextPath}/member/addMember.do">
	<div class="wrap">
			<div class="subjecet">
				<span>회원가입</span>
			</div>
			<div class="id_wrap">
				<div class="id_name">아이디</div>
				<div class="id_input_box">
					<input class="id_input" name="id">
				</div>
				<span class="id_input_re_1">사용 가능한 아이디입니다.</span>
				<span class="id_input_re_2">아이디가 이미 존재합니다.</span>	
				<span class="final_id_ck">아이디를 입력해주세요.</span>			
			</div>
			<div class="pw_wrap">
				<div class="pw_name">비밀번호</div>
				<div class="pw_input_box">
					<input class="pw_input" name="pwd">
				</div>
				<span class="final_pw_ck">비밀번호를 입력해주세요.</span>
			</div>
			<div class="pwck_wrap">
				<div class="pwck_name">비밀번호 확인</div>
				<div class="pwck_input_box">
					<input class="pwck_input">
				</div>
				<span class="final_pwck_ck">비밀번호 확인을 입력해주세요.</span>
				<span class="pwck_input_re_1">비밀번호가 일치합니다.</span>
				<span class="pwck_input_re_2">비밀번호가 일치하지 않습니다.</span>
			</div>
			<div class="user_wrap">
				<div class="user_name">이름</div>
				<div class="user_input_box">
					<input class="user_input" name="name">
				</div>
				<span class="final_name_ck">이름을 입력해주세요.</span>
			</div>
			<div class="mail_wrap">
				<div class="mail_name">이메일</div> 
				<div class="mail_input_box">
					<input class="mail_input" id="inputEmail type="email" value="" placeholder="type your email">
				</div>
				<span class="final_mail_ck">이메일을 입력해주세요.</span>
				<sapn class="mail_input_box_warn"></sapn>
				    <div class="mail_check_wrap">
				    <a> email : ${email }</a>
                    <div class="mail_check_input_box" id="mail_check_input_box_false">
                        <input class="mail_check_input" disabled="disabled" >
                    </div>
                    <input class="mail_check_button">
                        <span>인증번호 전송</span>
                    </input>
                    <div class="clearfix"></div>
                    <span id="mail_check_input_box_warn"></span>
                </div>
			</div>
				<input type="submit" class="join_button" value="가입하기"><input type="reset" value="다시입력">
		</div>
	</form>
</div>
	<%-- <form method="post"   action="${contextPath}/member/addMember.do">
	<h1  class="text_center">회원 가입창</h1>
	<table  align="center">
	   <tr>
	      <td width="200"><p align="right">아이디</td>
	      <td width="400"><input type="text" name="id"></td>
	      <td width="0"><button type="button">ID 중복확인</button></td>
	      <div>
	      	<span id="id_input_re_1">사용 가능한 아이디입니다.</span>
		    <span id="id_input_re_2">아이디가 이미 존재합니다.</span>
	      </div>
	     
	   </tr>
	   <tr>
	      <td width="200"><p align="right">비밀번호</td>
	      <td width="400"><input type="password" name="pwd"></td>
	    </tr>
	    <tr>
	       <td width="200"><p align="right">이름</td>
	       <td width="400"><p><input type="text" name="name"></td>
	    </tr>
	    <tr>
	       <td width="200"><p align="right">이메일</td>
	       <td width="400"><p><input type="text" name="email"></td>
	    </tr>
	    <tr>
	       <td width="200"><p>&nbsp;</p></td>
	       <td width="400"><input type="submit" value="가입하기"><input type="reset" value="다시입력"></td>
	    </tr>
	</table>
	</form> --%>
</body>
