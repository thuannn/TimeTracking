package com.lemania.timetracking.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.timetracking.server.service.AssignmentDao;
import com.lemania.timetracking.server.service.DaoServiceLocator;
import com.lemania.timetracking.shared.AssignmentProxy;

public interface AssignmentRequestFactory extends RequestFactory {
	
	@Service(value=AssignmentDao.class, locator=DaoServiceLocator.class)
	interface AssignmentRequestContext extends RequestContext {
		Request<List<AssignmentProxy>> listAll();		
		Request<List<AssignmentProxy>> listAll(String profId);
		Request<List<AssignmentProxy>> listAllActive();
		
		Request<Void> save(AssignmentProxy a);
		Request<AssignmentProxy> saveAndReturn(AssignmentProxy a);
		Request<AssignmentProxy> saveAndReturn(String courseId, String profId);
		
		Request<Void> removeAssignment(AssignmentProxy a);
	}
	
	AssignmentRequestContext assignmentRequest();
}
