package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.timetracking.client.event.ActionCompletedEvent;
import com.lemania.timetracking.client.event.ActionCompletedEvent.ActionCompletedHandler;
import com.lemania.timetracking.client.event.LoadAllProfessorLogsEvent;
import com.lemania.timetracking.client.event.LoadAllProfessorLogsEvent.LoadAllProfessorLogsHandler;
import com.lemania.timetracking.client.event.LoginAuthenticatedEvent;
import com.lemania.timetracking.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.timetracking.client.event.UpdateTimeLogEvent;
import com.lemania.timetracking.client.event.UpdateTimeLogEvent.UpdateTimeLogHandler;
import com.lemania.timetracking.client.place.NameTokens;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.History;
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
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.lemania.timetracking.shared.service.EventSourceRequestTransport;
import com.lemania.timetracking.shared.service.LogRequestFactory;
import com.lemania.timetracking.shared.service.UserRequestFactory;
import com.lemania.timetracking.shared.service.LogRequestFactory.LogRequestContext;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.lemania.timetracking.shared.service.UserRequestFactory.UserRequestContext;
import com.lemania.timetracking.client.CurrentUser;
import com.lemania.timetracking.client.LoggedInGatekeeper;

public class TimeInputPresenter 
		extends Presenter<TimeInputPresenter.MyView, TimeInputPresenter.MyProxy> 
		implements TimeInputUiHandler, UpdateTimeLogHandler, LoginAuthenticatedHandler, ActionCompletedHandler,
					LoadAllProfessorLogsHandler {
	
//	private List<LogTypeProxy> logTypes;
	private CurrentUser currentUser;
	
	private final PlaceManager placeManager;

	public interface MyView extends View, HasUiHandlers<TimeInputUiHandler> {
		//
		void setProfData(List<ProfessorProxy> profs);
		//
		void setLogData(List<LogProxy> logs, Boolean logUpdated);
		void setOtherLogData(List<LogProxy> logs, Boolean logUpdated);
		
		void setEcoleList(List<EcoleProxy> ecoles);
		void setCourseList(List<CoursProxy> cours);
		
		// Initialize values
		void initializeValues(int currentMonth, int currentYear, boolean isAdmin);
		void initializeUI(boolean isAdmin);
		void initializeProfTable();
		void initializeLogTable();
		
		// 
		void setNotification(String code);
		void clearLogTable();
		void clearProfTable();
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.timeinput)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<TimeInputPresenter> {
	}

	/*
	 * 
	 * */
	@Inject
	public TimeInputPresenter(final EventBus eventBus, final MyView view, PlaceManager placeManager, final MyProxy proxy) {
		//
		super(eventBus, view, proxy);
		//
		this.placeManager = placeManager;
	}

	/*
	 * */
	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		/* Thuan */
		getView().setUiHandlers(this);
		
		// Initalize table structure
		getView().initializeProfTable();
		getView().initializeLogTable();
	}
	
	/*
	 * */
	@Override
	protected void onReset(){
		// Check if the current user can Read Only, tell him and move him to the home page
		if (currentUser.isReadOnly()) {
			Window.alert("L'accès à cette fonction est bloqué dès à présent.");
			History.newItem( NameTokens.homepage );
		}
		
		// Initialize values
		getView().initializeValues(currentUser.getCurrentMonth(), currentUser.getCurrentYear(), currentUser.isAdmin());
		
		// Initialize active school list
		loadDepartmentList();
		
//		loadLogTypeList();
	}
	
	
	
	/*
	 * */
	private void loadDepartmentList() {
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		rc.getDepartments(currentUser.getUserId()).fire( new Receiver<List<CoursProxy>>() {
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess( List<CoursProxy> response ) {
				getView().setCourseList(response);
			}
		} );		
	}

	
	/*
	 * */
	public void loadProfessorsByCourse(String courseId, String year, String month) {
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		rc.listAllActiveByCourse(courseId, year, month).fire(new Receiver<List<ProfessorProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ProfessorProxy> response) {
				getView().setProfData(response);
			}
		});
	}
	

	/*
	 * */
	@Override
	public void loadCoursesBySchool(String ecoleId) {
		// empty
	}
	

	/*
	 * */
	@ProxyEvent
	@Override
	public void onUpdateTimeLog(UpdateTimeLogEvent event) {
		//
		loadLogData(event.getProf(), event.getCourseId(), event.getYear(), event.getMonth());
	}
	
	
	/*
	 * */
	public void loadLogData(final ProfessorProxy prof, final String courseId, final String year, final String month) {
		// Load log list
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();
		rcl.listAll(prof.getId().toString(), courseId, year, month).fire(new Receiver<List<LogProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogProxy> response) {
				getView().setLogData(response, false);
			}
		});
	}
	
	
	/*
	 * */
	@Override
	public void professorSelected(ProfessorProxy prof, String courseId, String year, String month) {
		//
		getEventBus().fireEvent(new UpdateTimeLogEvent(prof, courseId, year, month));
		getEventBus().fireEvent(new LoadAllProfessorLogsEvent( prof.getId().toString(), Integer.parseInt(year), Integer.parseInt(month)) );
	}

	
	/*
	 * */
	@Override
	public void updateLogTime(LogProxy log, String value) {
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();

		LogProxy logUpdate = rcl.edit(log);
		logUpdate.setHour(Double.parseDouble(value));
		
		rcl.save(logUpdate).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getView().setNotification("log-updated");
			}
		});		
	}
	

	/*
	 * */
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		this.currentUser = event.getCurrentUser();
	}
	

	/*
	 * */
	@Override
	public void updateLogMemo(LogProxy log, String value) {
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();

		LogProxy logUpdate = rcl.edit(log);
		logUpdate.setMemo(value);
		
		rcl.save(logUpdate).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getView().setNotification("log-updated");
			}
		});
	}

	
	/*
	 * */
	@Override
	public void updateLogTime(
			final ProfessorProxy prof, String courseId, final String year, final String month,
			String coursTime, String coursNote,
			String maladieTime, String maladieNote, String ferieTime,
			String ferieNote, String priveTime, String priveNote,
			String supervisionTime, String supervisionNote, String fraisAmount,
			String fraisNote) {
		
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();
		
		// If no professor is beling selected, show message and quit
		if (prof == null){
			Window.alert("Merci de choisir un professeur à introduire les heures.");
			return;
		}
		
		rcl.batchUpdate(
				prof.getId().toString(), courseId, year, month, 
				coursTime, coursNote,
				maladieTime, maladieNote, 
				ferieTime, ferieNote, 
				priveTime, priveNote,
				supervisionTime, supervisionNote, 
				fraisAmount, fraisNote)
				.fire(new Receiver<List<LogProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogProxy> response) {
				//
				placeManager.setOnLeaveConfirmation(null);
				getView().setLogData(response, true);
				// 
				// Update the list of log times
				getEventBus().fireEvent(new LoadAllProfessorLogsEvent( prof.getId().toString(), Integer.parseInt(year), Integer.parseInt(month)) );
			}
		});
	}

	
	/*
	 * */
	@ProxyEvent
	@Override
	public void onActionCompleted(ActionCompletedEvent event) {
		if (this.currentUser != null)
			getView().initializeUI(this.currentUser.isAdmin());
	}

	/*
	 * */
	@Override
	public void toggleEditStatus(boolean notsaved) {
		//
		placeManager.setOnLeaveConfirmation("Données non sauvegardées! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.");
	}

	
	/*
	 * When a professor is selected, load all the logs from other departments and show on screen.
	 * */
	@ProxyEvent
	@Override
	public void onLoadAllProfessorLogs(LoadAllProfessorLogsEvent event) {
		// Load log list
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();
		rcl.listAllFullDetailByProf( event.getProfId(), event.getYear(), event.getMonth() ).fire(new Receiver<List<LogProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogProxy> response) {
				getView().setOtherLogData(response, false);
			}
		});
	}
}
