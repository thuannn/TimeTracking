package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.ObjectifyLocator;
import com.lemania.timetracking.server.Professor;

@ProxyFor(value=Professor.class, locator=ObjectifyLocator.class)
public interface ProfessorProxy extends EntityProxy {
	Long getId();

	public String getProfName();
	public void setProfName(String profName);
	
	public Boolean getProfActive();
	public void setProfActive(Boolean profActive);
}