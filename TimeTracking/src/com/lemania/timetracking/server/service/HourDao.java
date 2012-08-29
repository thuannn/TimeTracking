package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Hour;

public class HourDao extends DAOBase {
	
	static {
        ObjectifyService.register(Hour.class);
    }
	
	public List<Hour> listAll(){
		Query<Hour> q = this.ofy().query(Hour.class);
		List<Hour> returnList = new ArrayList<Hour>();
		for (Hour hour : q){
			returnList.add(hour);
		}
		return returnList;
	}
	
	public void save(Hour hour){
		this.ofy().put(hour);
	}
	
	public Hour saveAndReturn(Hour hour){
		Key<Hour> key = this.ofy().put(hour);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeHour(Hour hour){
		this.ofy().delete(hour);
	}
}
