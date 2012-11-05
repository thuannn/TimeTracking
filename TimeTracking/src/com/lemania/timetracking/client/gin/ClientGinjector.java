package com.lemania.timetracking.client.gin;

import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.inject.client.AsyncProvider;
import com.google.gwt.inject.client.GinModules;
import com.google.gwt.inject.client.Ginjector;
import com.google.inject.Provider;
import com.gwtplatform.mvp.client.proxy.PlaceManager;

import com.lemania.timetracking.client.AdminGateKeeper;
import com.lemania.timetracking.client.LoggedInGatekeeper;
import com.lemania.timetracking.client.presenter.HomePresenter;
import com.lemania.timetracking.client.presenter.LogTypesAddPresenter;
import com.lemania.timetracking.client.presenter.LogTypesPresenter;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.client.presenter.EcolePresenter;
import com.lemania.timetracking.client.presenter.EcoleAddPresenter;
import com.lemania.timetracking.client.presenter.RptTimeByDepartmentPresenter;
import com.lemania.timetracking.client.presenter.TimeInputPresenter;
import com.lemania.timetracking.client.presenter.CoursPresenter;
import com.lemania.timetracking.client.presenter.CoursAddPresenter;
import com.lemania.timetracking.client.presenter.ProfsPresenter;
import com.lemania.timetracking.client.presenter.ProfsAddPresenter;
import com.lemania.timetracking.client.presenter.ContactPresenter;
import com.lemania.timetracking.client.presenter.ExtractDataPresenter;
import com.lemania.timetracking.client.presenter.UserManagementPresenter;
import com.lemania.timetracking.client.presenter.RptTimeBySchoolPresenter;

@GinModules({ ClientModule.class })
public interface ClientGinjector extends Ginjector {
	
	EventBus getEventBus();
	
	Provider<MainPagePresenter> getMainPagePresenter();
	
	AsyncProvider<HomePresenter> getHomePresenter();
	
	PlaceManager getPlaceManager();

	AsyncProvider<EcolePresenter> getEcolePresenter();

	AsyncProvider<EcoleAddPresenter> getEcoleAddPresenter();

	AsyncProvider<TimeInputPresenter> getTimeInputPresenter();

	AsyncProvider<CoursPresenter> getCoursPresenter();

	AsyncProvider<CoursAddPresenter> getCoursAddPresenter();

	AsyncProvider<LogTypesPresenter> getTypesPresenter();

	AsyncProvider<LogTypesAddPresenter> getTypesAddPresenter();

	AsyncProvider<ProfsPresenter> getProfsPresenter();

	AsyncProvider<ProfsAddPresenter> getProfsAddPresenter();

	AsyncProvider<ContactPresenter> getContactPresenter();	
	
	// Thuan
	LoggedInGatekeeper getLoggedInGatekeeper();
	AdminGateKeeper getAdminGateKeeper();

	AsyncProvider<ExtractDataPresenter> getExtractDataPresenter();

	AsyncProvider<UserManagementPresenter> getUserManagementPresenter();

	AsyncProvider<RptTimeByDepartmentPresenter> getRptTimeByDepartmentPresenter();

	AsyncProvider<RptTimeBySchoolPresenter> getRptTimeBySchoolPresenter();
}
