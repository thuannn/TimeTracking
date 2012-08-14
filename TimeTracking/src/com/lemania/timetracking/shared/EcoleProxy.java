package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.Ecole;

@ProxyFor(value=Ecole.class)
public interface EcoleProxy extends EntityProxy {
	String getName();
	void setName(String name);
}
