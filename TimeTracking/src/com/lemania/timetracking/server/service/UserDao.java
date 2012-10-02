package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
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
}
