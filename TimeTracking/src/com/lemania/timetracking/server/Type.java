package com.lemania.timetracking.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class Type extends DatastoreObject{

	private String hourName;
	private Boolean hourActive;
	
	public Boolean getTypeActive() {
		return hourActive;
	}
	
	public void setTypeActive(Boolean hourActive) {
		this.hourActive = hourActive;
	}
	
	public String getTypeName() {
		return hourName;
	}
	
	public void setTypeName(String hourName) {
		this.hourName = hourName;
	}
}
