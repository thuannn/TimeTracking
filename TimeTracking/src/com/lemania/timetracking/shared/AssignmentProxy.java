package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.Assignment;
import com.lemania.timetracking.server.ObjectifyLocator;

@ProxyFor(value=Assignment.class, locator=ObjectifyLocator.class)
public interface AssignmentProxy extends EntityProxy {

	Long getId();
	
	String getSchoolName();
	
	String getCourseName();
}
