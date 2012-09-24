package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.timetracking.client.place.NameTokens;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.client.uihandler.TimeInputUiHandler;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.lemania.timetracking.shared.service.CoursRequestFactory;
import com.lemania.timetracking.shared.service.EcoleRequestFactory;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory;
import com.lemania.timetracking.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.timetracking.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.lemania.timetracking.client.LoggedInGatekeeper;

public class TimeInputPresenter 
		extends Presenter<TimeInputPresenter.MyView, TimeInputPresenter.MyProxy> 
		implements TimeInputUiHandler {

	public interface MyView extends View, HasUiHandlers<TimeInputUiHandler> {
		void setData(List<ProfessorProxy> profs);
		
		void setEcoleList(List<EcoleProxy> ecoles);
		void setCourseList(List<CoursProxy> cours);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.timeinput)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<TimeInputPresenter> {
	}

	@Inject
	public TimeInputPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		getView().setUiHandlers(this);
	}
	
	@Override
	protected void onReset(){
		getProfessorsList();
		getEcoleList();
	}
	
	private void getProfessorsList() {	
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus());
		ProfessorRequestContext rc = rf.professorRequest();
		rc.listAll().fire(new Receiver<List<ProfessorProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ProfessorProxy> response) {
				getView().setData(response);
			}
		});
	}
	
	/*
	 * Populate list of ecoles in drop-down list */
	private void getEcoleList(){
		EcoleRequestFactory rf = GWT.create(EcoleRequestFactory.class);
		rf.initialize(this.getEventBus());
		EcoleRequestContext rc = rf.ecoleRequest();
		rc.listAllActive().fire(new Receiver<List<EcoleProxy>>(){
			@Override
			public void onSuccess(List<EcoleProxy> response){
				getView().setEcoleList(response);
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
		
		// Just to register the Cours class in Objectify
		CoursRequestFactory crf = GWT.create(CoursRequestFactory.class);
		crf.initialize(this.getEventBus());
		CoursRequestContext crc = crf.coursRequest();
		crc.listAll("").fire(new Receiver<List<CoursProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<CoursProxy> response) {
				getView().setCourseList(response);
			}
		});
	}

	@Override
	public void professorSelected(ProfessorProxy prof) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void loadCoursesBySchool(String ecoleId) {
		if (ecoleId.equals("")){
			Window.alert("Veuillez choisir l'école à rajouter.");
		}
		
		CoursRequestFactory rf = GWT.create(CoursRequestFactory.class);
		rf.initialize(this.getEventBus());
		CoursRequestContext rc = rf.coursRequest();
		rc.listAllActive(ecoleId).fire(new Receiver<List<CoursProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<CoursProxy> response) {
				getView().setCourseList(response);
			}
		});
	}
}
