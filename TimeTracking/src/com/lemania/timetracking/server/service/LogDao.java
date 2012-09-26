package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Log;

public class LogDao extends DAOBase {
	
	static {
        ObjectifyService.register(Log.class);
    }
	
	public List<Log> listAll(){
		Query<Log> q = this.ofy().query(Log.class);
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			returnList.add(log);
		}
		return returnList;
	}
	
	public List<Log> listAllActive(){
		Query<Log> q = this.ofy().query(Log.class).filter("schoolActive", true);
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			returnList.add(log);
		}
		return returnList;
	}
	
	public void save(Log log){
		this.ofy().put(log);
	}
	
	public void save(
			String profId,
			String courseId,
			String year,
			String month,
			String courseLog,
			String sickLog, 
			String holidayLog, 
			String personalLog, 
			String supervisionLog, 
			String feeLog) {
		
//		Key<Professor> keyProf = new Key<Professor>(Professor.class, profId);
//		Key<Cours> keyCours = new Key<Cours>(Cours.class, courseId);
//		
//		Log log = new Log();
//		log.setProf(keyProf);
//		log.setCours(keyCours);
//		log.setYear(Integer.valueOf(year));
//		log.setMonth(Integer.valueOf(month));
//		
//		// Course log
//		Key<LogType> keyLogType = this.ofy().get()
//		log.setLogType(keyLogType);
//		log.setHour(Integer.valueOf(courseLog));
//		this.ofy().put(log);
	}
	
	public Log saveAndReturn(Log log){
		Key<Log> key = this.ofy().put(log);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeLog(Log log){
		this.ofy().delete(log);
	}

}
