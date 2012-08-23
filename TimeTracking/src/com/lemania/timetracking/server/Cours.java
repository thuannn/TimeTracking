package com.lemania.timetracking.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class Cours extends DatastoreObject{
	private String coursNom;
	private Boolean coursActif;
	
	public String getCoursNom() {
		return coursNom;
	}
	
	public void setCoursNom(String coursNom) {
		this.coursNom = coursNom;
	}
	
	public Boolean getCoursActif() {
		return coursActif;
	}
	
	public void setCoursActif(Boolean coursActif) {
		this.coursActif = coursActif;
	}
}