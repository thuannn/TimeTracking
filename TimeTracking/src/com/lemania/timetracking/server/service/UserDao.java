package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.User;

public class UserDao extends DAOBase {

	static {
        ObjectifyService.register(User.class);
    }
	
	public List<User> listAll(){
		Query<User> q = this.ofy().query(User.class);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){
			returnList.add(user);
		}
		return returnList;
	}
	
	public List<User> listAllActive(){
		Query<User> q = this.ofy().query(User.class)
				.filter("active", true);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){
			returnList.add(user);
		}
		return returnList;
	}
	
	public List<Cours> addDepartment(User user, String courseId){
		if (user.getDepartments() != null)
			user.getDepartments().add( new Key<Cours>(Cours.class, Long.parseLong(courseId)) );
		else {
			List<Key<Cours>> depts = new ArrayList<Key<Cours>>();
			depts.add(new Key<Cours>(Cours.class, Long.parseLong(courseId)));
			user.setDepartments(depts);
		}
		this.ofy().put(user);
		
		Map<Key<Cours>, Cours> cours = this.ofy().get( user.getDepartments() );
		List<Cours> returnList = new ArrayList<Cours>(cours.values());
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Cours> getDepartments(User user) {
		List<Cours> returnList = new ArrayList<Cours>();
			if (user.getDepartments() != null) {
			Map<Key<Cours>, Cours> cours = this.ofy().get( user.getDepartments() );
			returnList = new ArrayList<Cours>(cours.values());
			java.util.Collections.sort(returnList);
		}
		return returnList;
	}
	
	public void save(User user){
		this.ofy().put(user);
	}
	
	public User saveAndReturn(User user){
		Key<User> key = this.ofy().put(user);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeUser(User user){
		this.ofy().delete(user);
	}
	
	public User authenticateUser(String userName, String password) {
		Query<User> q = this.ofy().query(User.class)
				.filter("active", true)
				.filter("userName", userName)
				.filter("password", password);
		List<User> returnList = new ArrayList<User>();
		
		for (User user : q){
			returnList.add(user);
		}
		
		if (returnList.size() > 0)
			return returnList.get(0);
		else
			return null;
	}
}
