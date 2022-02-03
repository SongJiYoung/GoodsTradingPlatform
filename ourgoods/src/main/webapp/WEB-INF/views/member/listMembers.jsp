<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />

<%
request.setCharacterEncoding("UTF-8");
%>

<html>
<head>
<meta charset=UTF-8">
<title>회원 정보 출력창</title>
</head>
<body>
	<table border="1" align="center" width="80%">
		<tr align="center" bgcolor="lightgreen">
			<td><b>사용자코드</b></td>
			<td><b>아이디</b></td>
			<td><b>비밀번호</b></td>
			<td><b>이름</b></td>
			<td><b>이메일</b></td>
			<td><b>전화번호</b></td>
			<td><b>가입일</b></td>
			<td><b>최근 수정일 </b></td>
			<td><b>도시 코드</b></td>
			<td><b>사용자 레벨</b></td>

			<td><b>삭제</b></td>
		</tr>

		<c:forEach var="member" items="${membersList}">
			<tr align="center">
				<td>${member.code}</td>
				<td>${member.id}</td>
				<td>${member.pw}</td>
				<td>${member.name}</td>
				<td>${member.email}</td>
				<td>${member.phone}</td>
				<td>${member.date}</td>
			    <td>${member.updated}</td>
				<td>${member.tcode}</td>
				<td>${member.gcode}</td>
				<td><a
					href="${contextPath}/member/removeMember.do?id=${member.code}">삭제하기</a></td>
			</tr>
		</c:forEach>
	</table>
	<a href="${contextPath}/member/memberForm.do"><h1
			style="text-align: center">회원가입</h1></a>
</body>
</html>
