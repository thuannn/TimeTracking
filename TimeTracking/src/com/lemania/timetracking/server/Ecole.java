package com.lemania.timetracking.server;

import com.googlecode.objectify.annotation.Entity;
import com.gwtplatform.crawlerservice.server.domain.DatastoreObject;

@Entity
public class Ecole extends DatastoreObject{
	private String schoolName;
	
	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
}
