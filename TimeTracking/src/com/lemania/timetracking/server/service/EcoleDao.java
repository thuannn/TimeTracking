package com.lemania.timetracking.server.service;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Ecole;

public class EcoleDao extends DAOBase{
	static {
        ObjectifyService.register(Ecole.class);
    }
	
	public void save(Ecole ecole){
		this.ofy().put(ecole);
	}
	
	public Ecole saveAndReturn(Ecole ecole){
		Key<Ecole> key = this.ofy().put(ecole);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeEcole(Ecole ecole){
		this.ofy().delete(ecole);
	}
}
