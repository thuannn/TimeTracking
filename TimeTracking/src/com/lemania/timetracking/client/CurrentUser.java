package com.lemania.timetracking.client;

public class CurrentUser {
	private Long userId;
	private String fullName;
	private boolean isAdmin = false;
	private boolean isLoggedIn = false;
	
	public void setLoggedIn(boolean isLoggedIn) {
		this.isLoggedIn = isLoggedIn;
	}
	
	public boolean isLoggedIn() {
	    return isLoggedIn;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
	
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
}