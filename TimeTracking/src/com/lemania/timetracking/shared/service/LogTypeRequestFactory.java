package com.lemania.timetracking.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.timetracking.server.service.DaoServiceLocator;
import com.lemania.timetracking.server.service.LogTypeDao;
import com.lemania.timetracking.shared.LogTypeProxy;

public interface LogTypeRequestFactory extends RequestFactory {
	
	@Service(value=LogTypeDao.class, locator=DaoServiceLocator.class)
	interface LogTypeRequestContext extends RequestContext {
		
		Request<List<LogTypeProxy>> listAll();
		Request<List<LogTypeProxy>> listAllActive();
		
		Request<Void> save(LogTypeProxy type);
	
		Request<LogTypeProxy> saveAndReturn(LogTypeProxy newHour);
		
		Request<Void> removeLogType(LogTypeProxy type);
	}
	
	LogTypeRequestContext typeRequest();
}
