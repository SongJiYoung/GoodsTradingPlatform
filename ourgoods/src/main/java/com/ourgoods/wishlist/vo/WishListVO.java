package com.ourgoods.wishlist.vo;

import org.springframework.stereotype.Component;

@Component("wishlistVO")
public class WishListVO {
	private int wucode;
	private int wpcode;
	
	public WishListVO() {
		// TODO Auto-generated constructor stub
	}

	public int getWucode() {
		return wucode;
	}

	public void setWucode(int wucode) {
		this.wucode = wucode;
	}

	public int getWpcode() {
		return wpcode;
	}

	public void setWpcode(int wpcode) {
		this.wpcode = wpcode;
	}
	
	
	
}
