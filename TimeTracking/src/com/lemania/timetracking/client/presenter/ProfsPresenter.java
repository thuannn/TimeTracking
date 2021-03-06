package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.timetracking.client.CurrentUser;
import com.lemania.timetracking.client.LoggedInGatekeeper;
import com.lemania.timetracking.client.event.LoginAuthenticatedEvent;
import com.lemania.timetracking.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
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
import com.lemania.timetracking.shared.UserProxy;
import com.lemania.timetracking.shared.service.AssignmentRequestFactory;
import com.lemania.timetracking.shared.service.AssignmentRequestFactory.AssignmentRequestContext;
import com.lemania.timetracking.shared.service.CoursRequestFactory;
import com.lemania.timetracking.shared.service.EcoleRequestFactory;
import com.lemania.timetracking.shared.service.EventSourceRequestTransport;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory;
import com.lemania.timetracking.shared.service.UserRequestFactory;
import com.lemania.timetracking.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.timetracking.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.lemania.timetracking.shared.service.UserRequestFactory.UserRequestContext;

public class ProfsPresenter 
	extends Presenter<ProfsPresenter.MyView, ProfsPresenter.MyProxy> 
	implements ProfessorListUiHandler, LoginAuthenticatedHandler {
	
	
	// keep the current logged in user
	private CurrentUser currentUser;

	
	public interface MyView extends View, HasUiHandlers<ProfessorListUiHandler> {
		void initializeTable();
		
		void setData(List<ProfessorProxy> profs);
		
		void refreshTable(ProfessorProxy prof);
		
		void hideAdminFunction( boolean isAdmin );
		
		void setAssignmentList(List<AssignmentProxy> courses);
		void addToAssignmentList(AssignmentProxy a);
		
		void setEcoleAddList(List<EcoleProxy> ecoles);
		void setCourseAddList(List<CoursProxy> cours);
		
		void setManagerNameList( List<String> managerNames );
	}

	
	@ProxyCodeSplit
	@NameToken(NameTokens.profs)
	@UseGatekeeper(LoggedInGatekeeper.class)
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
	
	
	/*
	 * 
	 * */
	@Override
	protected void onReset() {
		super.onReset();
		
		//
		getManagerNameList();
		//
		getEcoleList();
		//
		getView().hideAdminFunction( currentUser.isAdmin() );
	}
	
	
	/*
	 * */
	private void getManagerNameList() {
		//
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		rc.getManagerNameList().fire(new Receiver<List<String>>() {
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<String> managerNames) {
				//
				getView().setManagerNameList(managerNames);
				//
				getProfessorsList("1");
			}
		});
	}


	/*
	 * 
	 * */
	private void getProfessorsList(String status) {
		
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		rc.listAllActive( status.equals("1")?true:false ).fire(new Receiver<List<ProfessorProxy>>(){
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
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
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
	}

	
	@Override
	public void updateProfessorStatus(ProfessorProxy prof, Boolean status) {
		
		if (!currentUser.isAdmin()) {
			Window.alert("Veuillez vous connecter avec le code d'accès de l'administrateur. La modification n'a pas été effectuée.");
			return;
		}
		
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
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
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
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
	public void addCourse(String courseId, final ProfessorProxy prof) {
		if (courseId.isEmpty()) {
			Window.alert("Veuillez choisir un département à rajouter.");
			return;
		}
		
//		if (!currentUser.isAdmin()) {
//			Window.alert("Veuillez vous connecter avec le code d'accès de l'administrateur. La modification n'a pas été effectuée.");
//			return;
//		}
		
		AssignmentRequestFactory rf = GWT.create(AssignmentRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		AssignmentRequestContext rc = rf.assignmentRequest();
		rc.saveAndReturn(courseId, prof.getId().toString()).fire(new Receiver<AssignmentProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(AssignmentProxy response) {				
				if (response == null)
					Window.alert("Départment déjà existe dans la liste.");
				professorSelected(prof);
			}
		});
	}

	
	/*
	 * When school name is selected, poupulate the list of courses to add */
	@Override
	public void addSchoolSelected(String ecoleId) {
		if (ecoleId.equals("")){
			Window.alert("Veuillez choisir l'école.");
		}
		
		CoursRequestFactory rf = GWT.create(CoursRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
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

	
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		currentUser = event.getCurrentUser();
	}

	
	@Override
	public void updateProfessorName(ProfessorProxy prof, String name) {
		
		if (!currentUser.isAdmin()) {
			Window.alert("Veuillez vous connecter avec le code d'accès de l'administrateur. La modification n'a pas été effectuée.");
			return;
		}
		
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		ProfessorProxy profForUpdate = rc.edit(prof);
		profForUpdate.setProfName(name);
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
	public void updateAssignmentStatus(AssignmentProxy assignment, Boolean status) {
		AssignmentRequestFactory rf = GWT.create(AssignmentRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		AssignmentRequestContext rc = rf.assignmentRequest();
		rc.updateAssignmentStatus(currentUser.getUserId(), assignment, status).fire(new Receiver<AssignmentProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(AssignmentProxy response) {
				if (response == null)
					Window.alert("ERREUR : Vous n'êtes pas le responsable de ce département.");
			}
		});
	}


	/*
	 * */
	@Override
	public void onStatusChange(String status) {
		//
		getProfessorsList(status);
	}


	/*
	 * */
	@Override
	public void updateManager( ProfessorProxy prof, String managerName, String profName ) {
		//
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		rc.updateManager( prof, managerName, profName ).fire(new Receiver<ProfessorProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ProfessorProxy response) {
				if (response != null)
					getView().refreshTable(response);
				else
					Window.alert("Une erreur s'est produite. Les données n'étaient pas enregistrées.");
			}
		});
	}
}
