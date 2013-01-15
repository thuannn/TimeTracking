package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.ObjectifyLocator;
import com.lemania.timetracking.server.LogType;

@ProxyFor(value=LogType.class, locator=ObjectifyLocator.class)
public interface LogTypeProxy extends EntityProxy {
	Long getId();
	
	Boolean getLogTypeActive();
	void setLogTypeActive(Boolean status);
	
	String getLogTypeName();
	void setLogTypeName(String typeName);
	
	int getOrderNumber();
	void setOrderNumber(int orderNumber);
}