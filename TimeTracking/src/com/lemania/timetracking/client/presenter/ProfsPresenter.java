package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
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
import com.lemania.timetracking.client.uihandler.ProfessorListUiHandler;
import com.lemania.timetracking.shared.AssignmentProxy;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.lemania.timetracking.shared.service.AssignmentRequestFactory;
import com.lemania.timetracking.shared.service.AssignmentRequestFactory.AssignmentRequestContext;
import com.lemania.timetracking.shared.service.CoursRequestFactory;
import com.lemania.timetracking.shared.service.EcoleRequestFactory;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory;
import com.lemania.timetracking.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.timetracking.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory.ProfessorRequestContext;

public class ProfsPresenter 
	extends Presenter<ProfsPresenter.MyView, ProfsPresenter.MyProxy> 
	implements ProfessorListUiHandler {

	public interface MyView extends View, HasUiHandlers<ProfessorListUiHandler> {
		void initializeTable();
		
		void setData(List<ProfessorProxy> profs);
		
		void refreshTable(ProfessorProxy prof);
		
		void setAssignmentList(List<AssignmentProxy> courses);
		void addToAssignmentList(AssignmentProxy a);
		
		void setEcoleAddList(List<EcoleProxy> ecoles);
		void setCourseAddList(List<CoursProxy> cours);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.profs)
	public interface MyProxy extends ProxyPlace<ProfsPresenter> {
	}

	@Inject
	public ProfsPresenter(final EventBus eventBus, final MyView view, final MyProxy proxy) {
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
		getView().initializeTable();	
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
				getView().setEcoleAddList(response);
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
				getView().setCourseAddList(response);
			}
		});
	}

	@Override
	public void updateProfessorStatus(ProfessorProxy prof, Boolean status) {
		
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus());
		ProfessorRequestContext rc = rf.professorRequest();
		ProfessorProxy profForUpdate = rc.edit(prof);
		profForUpdate.setProfActive(status);
		rc.saveAndReturn(profForUpdate).fire(new Receiver<ProfessorProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ProfessorProxy response) {
				getView().refreshTable(response);
			}
		});	
	}

	@Override
	public void professorSelected(ProfessorProxy prof) {
		
		AssignmentRequestFactory rf = GWT.create(AssignmentRequestFactory.class);
		rf.initialize(this.getEventBus());
		AssignmentRequestContext rc = rf.assignmentRequest();
		rc.listAll(prof.getId().toString()).fire(new Receiver<List<AssignmentProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<AssignmentProxy> response) {
				getView().setAssignmentList(response);
			}
		});
	}

	@Override
	public void addCourse(String courseId, ProfessorProxy prof) {
		if (courseId.isEmpty())
			Window.alert("Veuillez choisir un cours à rajouter.");
		
		AssignmentRequestFactory rf = GWT.create(AssignmentRequestFactory.class);
		rf.initialize(this.getEventBus());
		AssignmentRequestContext rc = rf.assignmentRequest();
		rc.saveAndReturn(courseId, prof.getId().toString()).fire(new Receiver<AssignmentProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(AssignmentProxy response) {				
				getView().addToAssignmentList(response);
			}
		});
	}

	/*
	 * When school name is selected, poupulate the list of courses to add */
	@Override
	public void addSchoolSelected(String ecoleId) {
		if (ecoleId.equals("")){
			Window.alert("Veuillez choisir l'école à rajouter.");
		}
		
		CoursRequestFactory rf = GWT.create(CoursRequestFactory.class);
		rf.initialize(this.getEventBus());
		CoursRequestContext rc = rf.coursRequest();
		rc.listAll(ecoleId).fire(new Receiver<List<CoursProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<CoursProxy> response) {
				getView().setCourseAddList(response);
			}
		});
	}
}
