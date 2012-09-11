package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Professor;

public class ProfessorDao extends DAOBase {
	static {
        ObjectifyService.register(Professor.class);        
    }
	
	public List<Professor> listAll(){
		Query<Professor> q = this.ofy().query(Professor.class);
		List<Professor> returnList = new ArrayList<Professor>();
		for (Professor prof : q){
			returnList.add(prof);
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
