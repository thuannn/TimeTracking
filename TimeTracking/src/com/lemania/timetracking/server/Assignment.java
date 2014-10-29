package com.lemania.timetracking.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.IgnoreSave;
import com.googlecode.objectify.annotation.Index;

@Entity
@Index
public class Assignment extends DatastoreObject {
	private Key<Professor> prof;
	private Key<Cours> cours;
	private Boolean active = false;
	
	@IgnoreSave
	private String courseName;
	
	@IgnoreSave
	private String schoolName;
	
	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public Key<Professor> getProf() {
		return prof;
	}
	
	public void setProf(Key<Professor> prof) {
		this.prof = prof;
	}
	
	public Key<Cours> getCours() {
		return cours;
	}
	
	public void setCours(Key<Cours> cours) {
		this.cours = cours;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}
}
