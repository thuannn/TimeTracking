package com.lemania.timetracking.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.timetracking.server.service.DaoServiceLocator;
import com.lemania.timetracking.server.service.ProfessorDao;
import com.lemania.timetracking.shared.ProfessorProxy;

public interface ProfessorRequestFactory extends RequestFactory {
	
	@Service(value=ProfessorDao.class, locator=DaoServiceLocator.class)
	interface ProfessorRequestContext extends RequestContext {
		
		Request<List<ProfessorProxy>> listAll();
		
		Request<Void> save(ProfessorProxy prof);
		
		Request<ProfessorProxy> saveAndReturn(ProfessorProxy newProf);
		
		Request<Void> removeProfessor(ProfessorProxy prof);
	}
	
	ProfessorRequestContext professorRequest();

}