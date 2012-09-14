package com.lemania.timetracking.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.timetracking.server.service.DaoServiceLocator;
import com.lemania.timetracking.server.service.LogDao;
import com.lemania.timetracking.shared.LogProxy;

public interface LogRequestFactory {
	
	@Service(value=LogDao.class, locator=DaoServiceLocator.class)
	interface LogRequestContext extends RequestContext {
		Request<List<LogProxy>> listAll();
		Request<List<LogProxy>> listAllActive();
		
		Request<Void> save(LogProxy log);
		Request<LogProxy> saveAndReturn(LogProxy newLog);
		
		Request<Void> removeLog(LogProxy log);
	}
	
	LogRequestContext ecoleRequest();
}