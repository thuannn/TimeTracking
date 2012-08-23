package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.ObjectifyLocator;

@ProxyFor(value=Cours.class, locator=ObjectifyLocator.class)
public interface CoursProxy extends EntityProxy {
	String getCoursNom();
	Boolean getCoursActif();
	void setCoursNom(String name);
	void setCoursActif(Boolean status);
}
