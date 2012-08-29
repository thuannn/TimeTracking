package com.lemania.timetracking.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class Hour extends DatastoreObject{

	private String hourName;
	private Boolean hourActive;
	
	public Boolean getHourActive() {
		return hourActive;
	}
	
	public void setHourActive(Boolean hourActive) {
		this.hourActive = hourActive;
	}
	
	public String getHourName() {
		return hourName;
	}
	
	public void setHourName(String hourName) {
		this.hourName = hourName;
	}
}
