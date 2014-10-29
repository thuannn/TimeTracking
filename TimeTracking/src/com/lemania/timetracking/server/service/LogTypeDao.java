package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.timetracking.server.LogType;

public class LogTypeDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<LogType> listAll(){
		Query<LogType> q = ofy().load().type(LogType.class).order("hourName");
		List<LogType> returnList = new ArrayList<LogType>();
		for (LogType type : q){
			returnList.add(type);
		}
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<LogType> listAllActive(){
		Query<LogType> q = ofy().load().type(LogType.class).filter("hourActive", true).order("orderNumber");
		List<LogType> returnList = new ArrayList<LogType>();
		for (LogType type : q){
			returnList.add(type);
		}
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public void save(LogType type){
		//
		ofy().save().entities(type).now();
	}
	
	public LogType saveAndReturn(LogType type) {
		//
		Key<LogType> key = ofy().save().entities(type).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeLogType(LogType type){
		//
		ofy().delete().entities( type ).now();
	}
}
