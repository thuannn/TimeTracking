package com.lemania.timetracking.server;

import javax.persistence.Id;
import javax.persistence.PrePersist;

public class DatastoreObject {
	@Id private Long id;
	private Integer version = 0;
	
	@PrePersist
	void onPersist(){
		this.version++ ;
	}
}
