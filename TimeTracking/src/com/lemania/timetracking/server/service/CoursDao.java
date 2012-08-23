package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Cours;

public class CoursDao extends DAOBase {
	static {
        ObjectifyService.register(Cours.class);
    }
	
	public List<Cours> listAll(){
		Query<Cours> q = this.ofy().query(Cours.class);
		List<Cours> returnList = new ArrayList<Cours>();
		for (Cours ecole : q){
			returnList.add(ecole);
		}
		return returnList;
	}
	
	public void save(Cours cours){
		this.ofy().put(cours);
	}
	
	public Cours saveAndReturn(Cours cours){
		Key<Cours> key = this.ofy().put(cours);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeCours(Cours cours){
		this.ofy().delete(cours);
	}
}
