package com.ourgoods.user.vo;

import java.sql.Date;

import org.springframework.stereotype.Component;

@Component("userVO")
public class UserVO {
	private String code;
	private String id;
	private String pw;
	private String name;
	private int grade;
	private String email;
	private String phone;
	private Date date;
	private Date updated;
	private int tcode;
	private int gcode;
	

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public UserVO() {
		// TODO Auto-generated constructor stub
	}
	
	public int getGcode() {
		return gcode;
	}
	
	public void setGcode(int gcode) {
		this.gcode = gcode;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Date getUpdated() {
		return updated;
	}

	public void setUpdated(Date updated) {
		this.updated = updated;
	}

	public int getTcode() {
		return tcode;
	}

	public void setTcode(int tcode) {
		this.tcode = tcode;
	}
	
	
	
}
