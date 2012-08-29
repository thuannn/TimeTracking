package com.lemania.timetracking.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.timetracking.server.service.DaoServiceLocator;
import com.lemania.timetracking.server.service.HourDao;
import com.lemania.timetracking.shared.HourProxy;

public interface HourRequestFactory extends RequestFactory {
	@Service(value=HourDao.class, locator=DaoServiceLocator.class)
	interface HourRequestContext extends RequestContext {
		Request<List<HourProxy>> listAll();
		Request<Void> save(HourProxy hour);
		Request<HourProxy> saveAndReturn(HourProxy newHour);
		Request<Void> removeHour(HourProxy hour);
	}
	
	HourRequestContext hourRequest();
}
