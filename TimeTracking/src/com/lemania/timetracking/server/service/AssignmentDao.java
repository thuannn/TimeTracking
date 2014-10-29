package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.timetracking.server.Assignment;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.Professor;
import com.lemania.timetracking.server.User;

public class AssignmentDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<Assignment> listAll(){
		Query<Assignment> q = ofy().load().type(Assignment.class)
				.order("cours");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			a.setSchoolName( ofy().load().key( ofy().load().key(a.getCours()).now().getEcole() ).now().getSchoolName());
			a.setCourseName( ofy().load().key(a.getCours()).now().getCoursNom() );
			returnList.add(a);
		}
		return returnList;
	}
	
	public List<Assignment> listAll(String profId){
		Query<Assignment> q = ofy().load().type(Assignment.class)
				.filter("prof", Key.create(Professor.class, Long.parseLong(profId)))
				.order("cours");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			a.setSchoolName( ofy().load().key( ofy().load().key(a.getCours()).now().getEcole() ).now().getSchoolName() );
			a.setCourseName( ofy().load().key(a.getCours()).now().getCoursNom() );
			returnList.add(a);
		}
		return returnList;
	}
	
	public List<Assignment> listAllActive(){
		Query<Assignment> q = ofy().load().type(Assignment.class)
				.filter("schoolActive", true)
				.order("cours");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			returnList.add(a);
		}
		return returnList;
	}
	
	public void save(Assignment a){
		ofy().save().entities(a).now();
	}
	
	public Assignment saveAndReturn(Assignment a){
		Key<Assignment> key = ofy().save().entities(a).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	public Assignment saveAndReturn(String courseId, String profId){
		// if the assignment is already existed, do not add more
		Query<Assignment> q = ofy().load().type(Assignment.class)
				.filter("prof", Key.create(Professor.class, Long.parseLong(profId)) )
				.filter("cours", Key.create(Cours.class, Long.parseLong(courseId)) );
		if (q.list().size()>0) {
			return null;
		}
		
		Assignment a = new Assignment();
		a.setCours( Key.create( Cours.class, Long.parseLong(courseId)) );
		a.setProf( Key.create(Professor.class, Long.parseLong(profId)) );
		Key<Assignment> key = ofy().save().entities(a).now().keySet().iterator().next();
		try {
			Assignment savedA = ofy().load().key(key).now();
			return savedA; 
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	public Assignment updateAssignmentStatus(Long userId, Assignment assignment, Boolean status){
		Boolean found = false;
		User user = ofy().load().key( Key.create(User.class, userId) ).now();
		List<Cours> returnList = new ArrayList<Cours>();
			if (user.getDepartments() != null) {
			Map<Key<Cours>, Cours> cours = ofy().load().keys( user.getDepartments() );
			returnList = new ArrayList<Cours>(cours.values());
			for (Cours c : returnList){
				if (assignment.getCours().equals( Key.create(Cours.class, c.getId())) ){
					found = true;
					break;
				}
			}
		}		
		if (found) {
			assignment.setActive(status);
			Key<Assignment> key = ofy().save().entities(assignment).now().keySet().iterator().next();
			try {
				return ofy().load().key(key).now();
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		} else
			return null;
	}
	
	
	public void removeAssignment(Assignment a){
		ofy().delete().entities(a).now();
	}
}
