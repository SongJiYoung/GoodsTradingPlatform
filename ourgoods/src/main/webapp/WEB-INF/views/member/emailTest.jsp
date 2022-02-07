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
<title>Insert title here</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
<script type="text/javascript">
	$(function() {
		$("#certEmail").click(function() {
			var data = {
				email : $("#inputEmail").val(),
			};

			$.ajax({
				url : "/certifiedEmail",
				type : "post",
				data : data,
				dataType : "json",
				success : [ function(rs) {
					console.log(rs);
				} ],
				error : function(rs) {
					console.log(rs);
				}
			});
		});
	});
</script>
</head>
<body>
	<form name="frmLogin" method="get" action="${contextPath}/member/certifiedEmail.do">
		<table border="1" width="80%" align="center">
		
			<tr align="center">
				<td>
					<input type="email" id="inputEmail" name="email" value="" size="20" placeholder="type your email">
					<button text="certified_email" id="certEmail">Button</button>
				</td>
			</tr>
			
		</table>
	</form>
</body>
</html>