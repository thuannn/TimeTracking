package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.ObjectifyLocator;
import com.lemania.timetracking.server.Type;

@ProxyFor(value=Type.class, locator=ObjectifyLocator.class)
public interface TypeProxy extends EntityProxy {
	Long getId();
	
	Boolean getTypeActive();
	void setTypeActive(Boolean status);
	
	String getTypeName();
	void setTypeName(String typeName);
}