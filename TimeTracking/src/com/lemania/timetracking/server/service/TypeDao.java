package com.lemania.timetracking.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.timetracking.server.Type;

public class TypeDao extends DAOBase {
	
	static {
        ObjectifyService.register(Type.class);
    }
	
	public List<Type> listAll(){
		Query<Type> q = this.ofy().query(Type.class);
		List<Type> returnList = new ArrayList<Type>();
		for (Type type : q){
			returnList.add(type);
		}
		return returnList;
	}
	
	public void save(Type type){
		this.ofy().put(type);
	}
	
	public Type saveAndReturn(Type type){
		Key<Type> key = this.ofy().put(type);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeType(Type type){
		this.ofy().delete(type);
	}
}
