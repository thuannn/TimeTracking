package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.LogType;

public class LogTypeDao extends DAOBase {
	
	static {
        ObjectifyService.register(LogType.class);
    }
	
	public List<LogType> listAll(){
		Query<LogType> q = this.ofy().query(LogType.class);
		List<LogType> returnList = new ArrayList<LogType>();
		for (LogType type : q){
			returnList.add(type);
		}
		return returnList;
	}
	
	public void save(LogType type){
		this.ofy().put(type);
	}
	
	public LogType saveAndReturn(LogType type){
		Key<LogType> key = this.ofy().put(type);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeLogType(LogType type){
		this.ofy().delete(type);
	}
}