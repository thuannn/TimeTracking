package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.Hour;
import com.lemania.timetracking.server.ObjectifyLocator;

@ProxyFor(value=Hour.class, locator=ObjectifyLocator.class)
public interface HourProxy extends EntityProxy {
	Long getId();
	
	Boolean getHourActive();
	void setHourActive(Boolean status);
	
	String getHourName();
	void setHourName(String hourName);
}