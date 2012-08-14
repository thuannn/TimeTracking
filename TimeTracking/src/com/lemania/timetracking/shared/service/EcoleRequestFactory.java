package com.lemania.timetracking.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.timetracking.server.service.EcoleDao;
import com.lemania.timetracking.shared.DaoServiceLocator;
import com.lemania.timetracking.shared.EcoleProxy;

public interface EcoleRequestFactory extends RequestFactory {
	
	@Service(value=EcoleDao.class, locator=DaoServiceLocator.class)
	interface EcoleRequestContext extends RequestContext {
		Request<List<EcoleProxy>> listAll();
		Request<Void> save(EcoleProxy ecole);
		Request<EcoleProxy> saveAndReturn(EcoleProxy newEcole);
		Request<Void> removeEcole(EcoleProxy ecole);
	}
	
	EcoleRequestContext ecoleRequest();
}
