package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.Ecole;
import com.lemania.timetracking.server.Professor;

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
	
	public List<Cours> listAll(String ecoleId){
		Key<Ecole> ecole = new Key<Ecole>(Ecole.class, Long.parseLong(ecoleId));
		Query<Cours> q = this.ofy().query(Cours.class).filter("ecole", ecole);
		
		List<Cours> returnList = new ArrayList<Cours>();
		for (Cours cours : q){
			returnList.add(cours);
		}
		
		return returnList;
	}
	
	public void save(Cours cours){
		this.ofy().put(cours);
	}
	
	public void save(Cours cours, String ecoleId){
		Key<Ecole> ecoleKey = new Key<Ecole>(Ecole.class, Long.parseLong(ecoleId));
		cours.setEcole(ecoleKey);
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
	
	public List<Cours> listCours(Professor prof){
		List<Cours> result = new ArrayList<Cours>();
		for (int i=0; i<prof.getCourses().size(); i++)
			result.add(this.ofy().get(prof.getCourses().get(i)));
		return result;
	}
}