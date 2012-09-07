package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.ObjectifyLocator;

@ProxyFor(value=Cours.class, locator=ObjectifyLocator.class)
public interface CoursProxy extends EntityProxy {
	Long getId();
	
	String getCoursNom();
	void setCoursNom(String name);
	
	Boolean getCoursActif();
	void setCoursActif(Boolean status);
}
