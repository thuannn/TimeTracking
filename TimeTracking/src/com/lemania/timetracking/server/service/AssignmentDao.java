package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Assignment;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.Professor;

public class AssignmentDao extends DAOBase {
	
	static {
        ObjectifyService.register(Assignment.class);
    }
	
	public List<Assignment> listAll(){
		Query<Assignment> q = this.ofy().query(Assignment.class).order("cours");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			a.setSchoolName( this.ofy().get(this.ofy().get(a.getCours()).getEcole()).getSchoolName());
			a.setCourseName(this.ofy().get(a.getCours()).getCoursNom());
			returnList.add(a);
		}
		return returnList;
	}
	
	public List<Assignment> listAll(String profId){
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("prof", new Key<Professor>(Professor.class, Long.parseLong(profId)))
				.order("cours");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			a.setSchoolName( this.ofy().get(this.ofy().get(a.getCours()).getEcole()).getSchoolName());
			a.setCourseName(this.ofy().get(a.getCours()).getCoursNom());
			returnList.add(a);
		}
		return returnList;
	}
	
	public List<Assignment> listAllActive(){
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("schoolActive", true)
				.order("cours");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			returnList.add(a);
		}
		return returnList;
	}
	
	public void save(Assignment a){
		this.ofy().put(a);
	}
	
	public Assignment saveAndReturn(Assignment a){
		Key<Assignment> key = this.ofy().put(a);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public Assignment saveAndReturn(String courseId, String profId){
		Assignment a = new Assignment();
		a.setCours(new Key<Cours>(Cours.class, Long.parseLong(courseId)));
		a.setProf(new Key<Professor>(Professor.class, Long.parseLong(profId)));
		Key<Assignment> key = this.ofy().put(a);		
		try {
			Assignment savedA = this.ofy().get(key);
			savedA.setCourseName(this.ofy().get(a.getCours()).getCoursNom());
			savedA.setSchoolName(this.ofy().get(this.ofy().get(a.getCours()).getEcole()).getSchoolName());
			return savedA; 
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeAssignment(Assignment a){
		this.ofy().delete(a);
	}
}
