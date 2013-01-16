package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.timetracking.server.Assignment;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.Log;
import com.lemania.timetracking.server.LogType;
import com.lemania.timetracking.server.Professor;

public class ProfessorDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<Professor> listAll(){
		Query<Professor> q = this.ofy().query(Professor.class).order("profName");
		List<Professor> returnList = new ArrayList<Professor>();
		for (Professor prof : q){
			returnList.add(prof);
		}
		return returnList;
	}
	
	public List<Professor> listAllByCourse(String courseId){
		Key<Cours> course = new Key<Cours>(Cours.class, Long.parseLong(courseId));
		Query<Assignment> qa = this.ofy().query(Assignment.class).filter("cours", course);
		
		List<Key<? extends Professor>> profKeys = new ArrayList<Key<? extends Professor>>();
		for (Assignment a : qa){
			profKeys.add( a.getProf() );
		}
		
		Map<Key<Professor>, Professor> profs = this.ofy().get(profKeys);
		List<Professor> returnList = new ArrayList<Professor>(profs.values());		
		List<Professor> activeList = new ArrayList<Professor>();
		
		for (Professor prof : returnList) {
			if (prof.getProfActive())
				activeList.add(prof);
		}
		
		java.util.Collections.sort(activeList);
		return activeList;
	}
	
	public List<Professor> listAllByCourseWithTime(String deptId, int year){
		// Query a list of keys of all the professors from a department
		Key<Cours> course = new Key<Cours>(Cours.class, Long.parseLong(deptId));
		Query<Assignment> qa = this.ofy().query(Assignment.class).filter("cours", course);
		
		// Get a list of object of those professors and sort by name
		List<Key<? extends Professor>> profKeys = new ArrayList<Key<? extends Professor>>();
		for (Assignment a : qa){
			profKeys.add( a.getProf() );
		}
		Map<Key<Professor>, Professor> profs = this.ofy().get(profKeys);
		List<Professor> returnList = new ArrayList<Professor>(profs.values());
		for (int i=0; i<returnList.size(); i++) {
			if (!returnList.get(i).getProfActive())
				returnList.remove(i);
		}
		java.util.Collections.sort(returnList);
		
		// Get the key of the Frais type
		Query<LogType> qt = this.ofy().query(LogType.class).filter("hourName", "6.Frais");
		Key<LogType> typeFrais = qt.getKey();
		
		// Calculate the total time for each professor
		Query<Log> q = this.ofy().query(Log.class)
				.filter("cours",new Key<Cours>(Cours.class, Long.parseLong(deptId)))
				.filter("year", year)
				.order("prof")
				.order("year")
				.order("month")
				.order("cours");
		List<Log> lstLogs = new ArrayList<Log>();
		for (Log log : q)
			lstLogs.add(log);
		java.util.Collections.sort(lstLogs);
		
		Key<Professor> currentProfKey;
		for (Professor p : returnList) {
			currentProfKey = new Key<Professor>(Professor.class, p.getId());
			for (Log log : lstLogs) {
				if ( currentProfKey.equals(log.getProf()) ){
					switch (log.getMonth()){
					case 1:
						if (log.getLogType().equals(typeFrais))
							p.setFee_01(p.getFee_01() + log.getHour());
						else
							p.setTotal_01(p.getTotal_01() + log.getHour());
						break;
					case 2:
						if (log.getLogType().equals(typeFrais))
							p.setFee_02(p.getFee_02() + log.getHour());
						else
							p.setTotal_02(p.getTotal_02() + log.getHour());
						break;
					case 3:
						if (log.getLogType().equals(typeFrais))
							p.setFee_03(p.getFee_03() + log.getHour());
						else
							p.setTotal_03(p.getTotal_03() + log.getHour());
						break;
					case 4:
						if (log.getLogType().equals(typeFrais))
							p.setFee_04(p.getFee_04() + log.getHour());
						else
							p.setTotal_04(p.getTotal_04() + log.getHour());
						break;
					case 5:
						if (log.getLogType().equals(typeFrais))
							p.setFee_05(p.getFee_05() + log.getHour());
						else
							p.setTotal_05(p.getTotal_05() + log.getHour());
						break;
					case 6:
						if (log.getLogType().equals(typeFrais))
							p.setFee_06(p.getFee_06() + log.getHour());
						else
							p.setTotal_06(p.getTotal_06() + log.getHour());
						break;	
					case 7:
						if (log.getLogType().equals(typeFrais))
							p.setFee_07(p.getFee_07() + log.getHour());
						else
							p.setTotal_07(p.getTotal_07() + log.getHour());
						break;
					case 8:
						if (log.getLogType().equals(typeFrais))
							p.setFee_08(p.getFee_08() + log.getHour());
						else
							p.setTotal_08(p.getTotal_08() + log.getHour());
						break;
					case 9:
						if (log.getLogType().equals(typeFrais))
							p.setFee_09(p.getFee_09() + log.getHour());
						else
							p.setTotal_09(p.getTotal_09() + log.getHour());
						break;
					case 10:
						if (log.getLogType().equals(typeFrais))
							p.setFee_10(p.getFee_10() + log.getHour());
						else
							p.setTotal_10(p.getTotal_10() + log.getHour());
						break;
					case 11:
						if (log.getLogType().equals(typeFrais))
							p.setFee_11(p.getFee_11() + log.getHour());
						else
							p.setTotal_11(p.getTotal_11() + log.getHour());
						break;
					case 12:
						if (log.getLogType().equals(typeFrais))
							p.setFee_12(p.getFee_12() + log.getHour());
						else
							p.setTotal_12(p.getTotal_12() + log.getHour());
						break;	
					}
				}
			}
		}
		
		return returnList;
	}
	
	public void save(Professor prof){
		this.ofy().put(prof);
	}
	
	public Professor saveAndReturn(Professor prof){
		Key<Professor> key = this.ofy().put(prof);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeProfessor(Professor prof) {
		this.ofy().delete(prof);
	}
}
