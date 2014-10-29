package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.Log;
import com.lemania.timetracking.server.LogType;
import com.lemania.timetracking.server.Professor;

/**
 * @author Thuan
 *
 */
public class LogDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<Log> listAll(){
		Query<Log> q = ofy().load().type(Log.class).order("type");
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			log.setTypeName( ofy().load().key( log.getLogType() ).now().getLogTypeName() );
			returnList.add(log);
		}
		
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Log> listAllFullDetail(){
		Query<Log> q = ofy().load().type(Log.class)
				.order("prof")
				.order("year")
				.order("month")
				.order("cours");
				
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			if ( ! ofy().load().key(log.getProf()).now().getProfActive() )
				continue;	
			returnList.add(log);
		}
		
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Log> listAllFullDetailByMonth(int selectedYear, int selectedMonth){
		Query<Log> q = ofy().load().type(Log.class)
				.filter("year", selectedYear)
				.filter("month", selectedMonth)
				.order("prof")
				.order("cours");
		
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			if ( ! ofy().load().key(log.getProf()).now().getProfActive() )
				continue;
			returnList.add(log);
		}
		
		// Sort by ProfName
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Log> listAllFullDetailByDepartment(String deptId){
		Query<Log> q = ofy().load().type(Log.class)
				.filter("cours", Key.create(Cours.class, Long.parseLong(deptId)))
				.order("prof")
				.order("year")
				.order("month")
				.order("cours");
		
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			if ( ! ofy().load().key(log.getProf()).now().getProfActive() )
				continue;
			
			returnList.add(log);
		}
		
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Log> listAllFullDetailByProf(String profId, String year){
		Query<Log> q = ofy().load().type(Log.class)
				.filter("prof", Key.create(Professor.class, Long.parseLong(profId)))
				.filter("year", Integer.parseInt(year) )
				.order("year")
				.order("month")
				.order("cours");
		
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){	
			returnList.add(log);
		}
		
		return returnList;
	}
	
	public List<Log> listAll(String profId, String coursId, String year, String month){				
		Key<Professor> profKey = Key.create(Professor.class, Long.parseLong(profId));
		Key<Cours> coursKey = Key.create(Cours.class, Long.parseLong(coursId));
		
		Query<Log> q = ofy().load().type(Log.class)
				.filter("year", Integer.parseInt(year))
				.filter("month", Integer.parseInt(month))
				.filter("prof", profKey)
				.filter("cours", coursKey);
		
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){			
			log.setProfName( "" );
			log.setCourseName( "" );
			returnList.add(log);
		}
		
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public void save(Log log){
		log.setTypeName( ofy().load().key(log.getLogType()).now().getLogTypeName() );			
		log.setProfName( ofy().load().key(log.getProf()).now().getProfName());
		log.setCourseName( ofy().load().key(log.getCours()).now().getCoursNom() );
		log.setSchoolName( ofy().load().key( ofy().load().key(log.getCours()).now().getEcole()).now().getSchoolName() );
		
		ofy().save().entities(log).now();
	}
	
	public Log saveAndReturn(Log log) {
		log.setTypeName( ofy().load().key(log.getLogType()).now().getLogTypeName() );			
		log.setProfName( ofy().load().key(log.getProf()).now().getProfName());
		log.setCourseName( ofy().load().key(log.getCours()).now().getCoursNom() );
		log.setSchoolName( ofy().load().key( ofy().load().key(log.getCours()).now().getEcole()).now().getSchoolName() );
		
		Key<Log> key = ofy().load().entities(log).keySet().iterator().next();
		
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeLog(Log log) {
		//
		ofy().delete().entities(log).now();
	}
	
	public List<Log> batchUpdate(String profId, String courseId, String year, String month, List<String> typeIdList) {				
		List<Log> returnList = new ArrayList<Log>();
		Log log;
		for (int i=0; i<typeIdList.size(); i++) {
			log = new Log();
			
			log.setProf( Key.create(Professor.class, Long.parseLong(profId)));
			log.setCours( Key.create(Cours.class, Long.parseLong(courseId)));
			log.setLogType( Key.create( LogType.class, Long.parseLong(typeIdList.get(i))) );
			log.setYear(Integer.parseInt(year));
			log.setMonth(Integer.parseInt(month));			
			
			log.setTypeName( ofy().load().key(log.getLogType()).now().getLogTypeName() );			
			log.setProfName( ofy().load().key(log.getProf()).now().getProfName());
			log.setCourseName( ofy().load().key(log.getCours()).now().getCoursNom() );
			log.setSchoolName( ofy().load().key( ofy().load().key(log.getCours()).now().getEcole()).now().getSchoolName() );
			
			ofy().save().entities(log).now();
			
			returnList.add(log);
		}
		return returnList;
	}
	
	public List<Log> batchUpdate(
			String profId, String courseId, String year, String month,
			String coursTime, String coursNote,
			String maladieTime, String maladieNote,
			String ferieTime, String ferieNote,
			String priveTime, String priveNote, 
			String supervisionTime, String supervisionNote, 
			String fraisAmount, String fraisNote ) {				
		
		// Return list
		List<Log> returnList = new ArrayList<Log>();
		
		// Get all the LogType
		// For each LogType, try to find the existing record, if not found, save a new one
		Query<LogType> q = ofy().load().type(LogType.class).filter("hourActive", true).order("orderNumber");
		Log saveLog;
		for (LogType lt : q) {
			Query<Log> qlog = ofy().load().type(Log.class)
					.filter("prof", Key.create(Professor.class, Long.parseLong(profId)))
					.filter("cours", Key.create(Cours.class, Long.parseLong(courseId)))
					.filter("type", Key.create(LogType.class, lt.getId()) )
					.filter("year", Integer.parseInt(year))
					.filter("month", Integer.parseInt(month));
			
			if (qlog.list().size()>0) {
				saveLog = qlog.list().get(0);	
			} else {
				saveLog = new Log();
				saveLog.setProf( Key.create(Professor.class, Long.parseLong(profId)));
				saveLog.setCours( Key.create(Cours.class, Long.parseLong(courseId)));
				saveLog.setLogType( Key.create(LogType.class, lt.getId()));
				saveLog.setYear(Integer.parseInt(year));
				saveLog.setMonth(Integer.parseInt(month));			
				
				saveLog.setTypeName( ofy().load().key(Key.create(LogType.class, lt.getId())).now().getLogTypeName() );			
				saveLog.setProfName( ofy().load().key(Key.create(Professor.class, Long.parseLong(profId))).now().getProfName());
				saveLog.setCourseName( ofy().load().key(Key.create(Cours.class, Long.parseLong(courseId))).now().getCoursNom() );
				saveLog.setSchoolName( ofy().load().key( ofy().load().key(Key.create(Cours.class, Long.parseLong(courseId))).now().getEcole()).now().getSchoolName() );
			}	
			
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.cours)) {
				saveLog.setHour(Double.parseDouble(coursTime));
				saveLog.setMemo(coursNote);
			}
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.maladie)) {
				saveLog.setHour(Double.parseDouble(maladieTime));
				saveLog.setMemo(maladieNote);
			}
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.ferie)) {
				saveLog.setHour(Double.parseDouble(ferieTime));
				saveLog.setMemo(ferieNote);
			}
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.prive)) {
				saveLog.setHour(Double.parseDouble(priveTime));
				saveLog.setMemo(priveNote);
			}
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.supervision)) {
				saveLog.setHour(Double.parseDouble(supervisionTime));
				saveLog.setMemo(supervisionNote);
			}
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.frais)) {
				saveLog.setHour(Double.parseDouble(fraisAmount));
				saveLog.setMemo(fraisNote);
			}
			
			Key<Log> key = ofy().save().entities(saveLog).now().keySet().iterator().next();
			
			returnList.add( ofy().load().key( key).now() );
		}
		
		return returnList;
	}
}
