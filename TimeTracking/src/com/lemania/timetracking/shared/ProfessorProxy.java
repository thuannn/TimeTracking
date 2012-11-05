package com.lemania.timetracking.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.timetracking.server.ObjectifyLocator;
import com.lemania.timetracking.server.Professor;

@ProxyFor(value=Professor.class, locator=ObjectifyLocator.class)
public interface ProfessorProxy extends EntityProxy {
	Long getId();

	public String getProfName();
	public void setProfName(String profName);
	
	public Boolean getProfActive();
	public void setProfActive(Boolean profActive);
	
	public int getTotal_01();
	public int getTotal_02();
	public int getTotal_03();
	public int getTotal_04();
	public int getTotal_05();
	public int getTotal_06();
	public int getTotal_07();
	public int getTotal_08();
	public int getTotal_09();
	public int getTotal_10();
	public int getTotal_11();
	public int getTotal_12();
	
	public int getFee_01();
	public int getFee_02();
	public int getFee_03();
	public int getFee_04();
	public int getFee_05();
	public int getFee_06();
	public int getFee_07();
	public int getFee_08();
	public int getFee_09();
	public int getFee_10();
	public int getFee_11();
	public int getFee_12();
}