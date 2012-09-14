package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.Log;
import com.lemania.timetracking.server.ObjectifyLocator;

@ProxyFor(value=Log.class, locator=ObjectifyLocator.class)
public interface LogProxy extends EntityProxy {

	Long getId();	
	
	public int getHour();	
	public void setHour(int hour);	
}
