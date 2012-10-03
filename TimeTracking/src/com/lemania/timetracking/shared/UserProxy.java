package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.ObjectifyLocator;

@ProxyFor(value=com.lemania.timetracking.server.User.class, locator=ObjectifyLocator.class)
public interface UserProxy extends EntityProxy {
	
	public String getUserName();
	public void setUserName(String userName);
	
	public String getPassword();
	public void setPassword(String password);
	
	public String getFullName();
	public void setFullName(String fullName);
	
	public String getEmail();
	public void setEmail(String email);
	
	public Boolean getActive();
	public void setActive(Boolean active);
	
	public Boolean getAdmin();
	public void setAdmin(Boolean admin);
}