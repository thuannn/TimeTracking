package com.lemania.timetracking.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;

@Entity
public class Professor extends DatastoreObject {

	private String profName;
	private Boolean profActive;
	private Key<Cours>[] courses;
	
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

	public Key<Cours>[] getCourses() {
		return courses;
	}

	public void setCourses(Key<Cours>[] courses) {
		this.courses = courses;
	}
	
}
