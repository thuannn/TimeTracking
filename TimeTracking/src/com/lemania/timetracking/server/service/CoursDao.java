package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.Ecole;

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
		List<Cours> returnList = new ArrayList<Cours>();
		
		if (ecoleId.isEmpty())
			return returnList;
		
		Key<Ecole> ecole = new Key<Ecole>(Ecole.class, Long.parseLong(ecoleId));
		Query<Cours> q = this.ofy().query(Cours.class).filter("ecole", ecole);
		
		for (Cours cours : q){
			returnList.add(cours);
		}
		
		return returnList;
	}
	
	public List<Cours> listAllActive(String ecoleId){
		List<Cours> returnList = new ArrayList<Cours>();
		
		if (ecoleId.isEmpty())
			return returnList;
		
		Key<Ecole> ecole = new Key<Ecole>(Ecole.class, Long.parseLong(ecoleId));
		Query<Cours> q = this.ofy().query(Cours.class).filter("ecole", ecole);
		
		for (Cours cours : q){
			if (cours.getCoursActif().equals(true))
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
}