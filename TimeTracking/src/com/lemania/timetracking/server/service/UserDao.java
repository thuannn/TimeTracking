package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.User;

public class UserDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<User> listAll(){
		Query<User> q = ofy().load().type(User.class);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){
			returnList.add(user);
		}
		return returnList;
	}
	
	public List<User> listAllActive(){
		Query<User> q = ofy().load().type(User.class)
				.filter("active", true);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){
			returnList.add(user);
		}
		return returnList;
	}
	
	
	/*
	 * Get list of manager names
	 * */
	public List<String> getManagerNameList() {
		//
		List<String> managerNames = new ArrayList<String>();
		Query<User> q = ofy().load().type(User.class)
				.filter("active", true);
		for (User user : q){
			managerNames.add( user.getFullName() );
		}
		return managerNames;
	}
	
	
	public List<Cours> addDepartment(User user, String courseId){
		if (user.getDepartments() != null)
			user.getDepartments().add( Key.create(Cours.class, Long.parseLong(courseId)) );
		else {
			List<Key<Cours>> depts = new ArrayList<Key<Cours>>();
			depts.add( Key.create(Cours.class, Long.parseLong(courseId)) );
			user.setDepartments(depts);
		}
		ofy().save().entities(user).now();
		
		Map<Key<Cours>, Cours> cours = ofy().load().keys( user.getDepartments() );
		List<Cours> returnList = new ArrayList<Cours>(cours.values());
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Cours> getDepartments(User user) {
		List<Cours> returnList = new ArrayList<Cours>();
			if (user.getDepartments() != null) {
			Map<Key<Cours>, Cours> cours = ofy().load().keys( user.getDepartments() );
			returnList = new ArrayList<Cours>(cours.values());
			java.util.Collections.sort(returnList);
		}
		return returnList;
	}
	
	public List<Cours> getDepartments(Long userId) {
		User user = ofy().load().key( Key.create(User.class, userId) ).now();
		List<Cours> returnList = new ArrayList<Cours>();
		if (user.getDepartments() != null) {
			Map<Key<Cours>, Cours> cours = ofy().load().keys( user.getDepartments() );
			returnList = new ArrayList<Cours>(cours.values());
			for (int i=0; i<returnList.size(); i++)
				returnList.get(i).setSchoolName( ofy().load().key( (returnList.get(i).getEcole()) ).now().getSchoolName() );
			java.util.Collections.sort(returnList);
		}
		return returnList;
	}
	
	public void save(User user) {
		//
		ofy().save().entities(user).now();
	}
	
	public User saveAndReturn(User user) {
		//
		Key<User> key = ofy().save().entities(user).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeUser(User user) {
		//
		ofy().delete().entities(user).now();
	}
	
	public User authenticateUser(String userName, String password) {
		Query<User> q = ofy().load().type(User.class)
				.filter("active", true)
				.filter("userName", userName.toLowerCase())
				.filter("password", password);
		List<User> returnList = new ArrayList<User>();
		
		Calendar cal = Calendar.getInstance();
		
		for (User user : q){
			// the months in Java start by zero, so increase one
			user.setCurrentMonth(cal.get(Calendar.MONTH) +1);
			user.setCurrentYear(cal.get(Calendar.YEAR));
			user.setCurrentDay(cal.get(Calendar.DAY_OF_MONTH));
			returnList.add(user);
		}
		
		if (returnList.size() > 0)
			return returnList.get(0);
		else
			return null;
	}
	
	public User changePassword(String userName, String password, String newPassword) {
		Query<User> q = ofy().load().type(User.class)
				.filter("active", true)
				.filter("userName", userName.toLowerCase())
				.filter("password", password);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){		
			returnList.add(user);
		}
		
		if (returnList.size() > 0) {
			returnList.get(0).setPassword(newPassword);
			ofy().save().entities( returnList.get(0) ).now();
			return returnList.get(0);
		}
		else
			return null;
	}
}
