package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.Ecole;
import com.lemania.timetracking.server.ObjectifyLocator;

@ProxyFor(value=Ecole.class, locator=ObjectifyLocator.class)
public interface EcoleProxy extends EntityProxy {
	String getSchoolName();
	String getSchoolAddress();
	Boolean getSchoolStatus();
	void setSchoolName(String name);
	void setSchoolAddress(String name);
	void setSchoolStatus(Boolean active);
}