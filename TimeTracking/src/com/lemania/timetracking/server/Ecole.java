package com.lemania.timetracking.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class Ecole extends DatastoreObject{
	private String schoolName;
	private String schoolAddress;
	
	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public String getSchoolAddress() {
		return schoolAddress;
	}

	public void setSchoolAddress(String schoolAddress) {
		this.schoolAddress = schoolAddress;
	}
}
