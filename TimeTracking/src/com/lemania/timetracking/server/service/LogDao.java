package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.ibm.icu.util.Calendar;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.Log;
import com.lemania.timetracking.server.LogType;
import com.lemania.timetracking.server.Professor;

public class LogDao extends DAOBase {
	
	static {
        ObjectifyService.register(Log.class);
    }
	
	public List<Log> listAll(){
		Query<Log> q = this.ofy().query(Log.class);
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );
			returnList.add(log);
		}
		return returnList;
	}
	
	public List<Log> listAll(String profId, String coursId, Date currentMonth){
		java.util.Calendar cal = java.util.Calendar.getInstance();
		cal.setTime(currentMonth);
		
		Key<Professor> profKey = new Key<Professor>(Professor.class, Long.parseLong(profId));
		Key<Cours> coursKey = new Key<Cours>(Cours.class, Long.parseLong(coursId));
		
		Query<Log> q = this.ofy().query(Log.class)
				.filter("year", cal.get(Calendar.YEAR))
				.filter("month", cal.get(Calendar.MONTH))
				.filter("prof", profKey)
				.filter("cours", coursKey);
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );
			returnList.add(log);
		}
		return returnList;
	}
	
	public void save(Log log){
		this.ofy().put(log);
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
	
	public List<Log> batchUpdate(String profId, String courseId, Date currentMonth, List<String> typeIdList) {
		java.util.Calendar cal = java.util.Calendar.getInstance();
		cal.setTime(currentMonth);
		
		List<Log> returnList = new ArrayList<Log>();
		Log log;
		for (int i=0; i<typeIdList.size(); i++) {
			log = new Log();
			log.setProf( new Key<Professor>(Professor.class, Long.parseLong(profId)));
			log.setCours( new Key<Cours>(Cours.class, Long.parseLong(courseId)));
			log.setLogType( new Key<LogType>(LogType.class, Long.parseLong(typeIdList.get(i))));
			log.setYear(cal.get(Calendar.YEAR));
			log.setMonth(cal.get(Calendar.MONTH));
			this.ofy().put(log);
			
			log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );
			returnList.add(log);
		}
		return returnList;
	}

}
