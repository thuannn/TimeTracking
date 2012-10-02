package com.lemania.timetracking.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;


@Entity
public class User extends DatastoreObject {
	private String fullName;
	private String userName;
	private String password;
	private Boolean active;
	Key<Cours>[] departments;
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getFullName() {
		return fullName;
	}
	
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	
	public Boolean getActive() {
		return active;
	}
	
	public void setActive(Boolean active) {
		this.active = active;
	}
	
	public Key<Cours>[] getDepartments() {
		return departments;
	}
	
	public void setDepartments(Key<Cours>[] departments) {
		this.departments = departments;
	}
}
