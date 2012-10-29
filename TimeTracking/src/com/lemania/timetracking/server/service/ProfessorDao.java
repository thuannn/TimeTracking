package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Assignment;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.Professor;

public class ProfessorDao extends DAOBase {
	/*static {
        ObjectifyService.register(Professor.class);        
    }*/
	
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
		java.util.Collections.sort(returnList);
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
