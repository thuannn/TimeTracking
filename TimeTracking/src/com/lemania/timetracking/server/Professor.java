package com.lemania.timetracking.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class Professor extends DatastoreObject implements Comparable<Professor> {

	private String profName;
	private Boolean profActive;	
	
	public String getProfName() {
		return profName;
	}
	
	public void setProfName(String profName) {
		this.profName = profName;
	}
	
	public Boolean getProfActive() {
		return profActive;
	}
	
	public void setProfActive(Boolean profActive) {
		this.profActive = profActive;
	}

	@Override
	public int compareTo(Professor prof) {
		int lastProfName = profName.compareTo(prof.getProfName());
		return lastProfName;
	}	
}
