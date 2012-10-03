package com.lemania.timetracking.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.timetracking.server.service.DaoServiceLocator;
import com.lemania.timetracking.server.service.UserDao;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.UserProxy;

public interface UserRequestFactory extends RequestFactory {
	
	@Service(value=UserDao.class, locator=DaoServiceLocator.class)
	interface UserRequestContext extends RequestContext {
		
		Request<List<UserProxy>> listAll();
		Request<List<UserProxy>> listAllActive();
		
		Request<Void> save(UserProxy user);
		Request<UserProxy> saveAndReturn(UserProxy newUser);
		
		Request<Void> removeUser(UserProxy user);
		
		Request<List<CoursProxy>> addDepartment(UserProxy user, String courseId);
		Request<List<CoursProxy>> getDepartments(UserProxy user);
		
		Request<UserProxy> authenticateUser(String userName, String password);
	}
	
	UserRequestContext userRequest();
}
