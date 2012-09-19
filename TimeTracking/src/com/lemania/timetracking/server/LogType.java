package com.lemania.timetracking.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class LogType extends DatastoreObject{

	private String hourName;
	private Boolean hourActive;
	
	public Boolean getLogTypeActive() {
		return hourActive;
	}
	
	public void setLogTypeActive(Boolean hourActive) {
		this.hourActive = hourActive;
	}
	
	public String getLogTypeName() {
		return hourName;
	}
	
	public void setLogTypeName(String hourName) {
		this.hourName = hourName;
	}
}
