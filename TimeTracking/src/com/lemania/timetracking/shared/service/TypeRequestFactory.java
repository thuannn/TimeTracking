package com.lemania.timetracking.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.timetracking.server.service.DaoServiceLocator;
import com.lemania.timetracking.server.service.TypeDao;
import com.lemania.timetracking.shared.TypeProxy;

public interface TypeRequestFactory extends RequestFactory {
	
	@Service(value=TypeDao.class, locator=DaoServiceLocator.class)
	interface TypeRequestContext extends RequestContext {
		Request<List<TypeProxy>> listAll();
		Request<Void> save(TypeProxy type);
		Request<TypeProxy> saveAndReturn(TypeProxy newHour);
		Request<Void> removeType(TypeProxy type);
	}
	
	TypeRequestContext typeRequest();
}
