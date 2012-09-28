package com.lemania.timetracking.client.presenter;

import java.util.ArrayList;
import java.util.List;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.timetracking.client.event.UpdateTimeLogEvent;
import com.lemania.timetracking.client.event.UpdateTimeLogEvent.UpdateTimeLogHandler;
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
import com.lemania.timetracking.shared.AssignmentProxy;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.LogTypeProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.lemania.timetracking.shared.service.AssignmentRequestFactory;
import com.lemania.timetracking.shared.service.CoursRequestFactory;
import com.lemania.timetracking.shared.service.EcoleRequestFactory;
import com.lemania.timetracking.shared.service.LogRequestFactory;
import com.lemania.timetracking.shared.service.LogRequestFactory.LogRequestContext;
import com.lemania.timetracking.shared.service.LogTypeRequestFactory;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory;
import com.lemania.timetracking.shared.service.AssignmentRequestFactory.AssignmentRequestContext;
import com.lemania.timetracking.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.timetracking.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.timetracking.shared.service.LogTypeRequestFactory.LogTypeRequestContext;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.lemania.timetracking.client.LoggedInGatekeeper;

public class TimeInputPresenter 
		extends Presenter<TimeInputPresenter.MyView, TimeInputPresenter.MyProxy> 
		implements TimeInputUiHandler, UpdateTimeLogHandler {
	
	private List<LogTypeProxy> logTypes;

	public interface MyView extends View, HasUiHandlers<TimeInputUiHandler> {
		
		void setProfData(List<ProfessorProxy> profs);
		void setLogData(List<LogProxy> logs);
		
		void setEcoleList(List<EcoleProxy> ecoles);
		void setCourseList(List<CoursProxy> cours);
		
		// Initialize values
		void initializeValues();
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
		
		/* Thuan */
		getView().setUiHandlers(this);
		
		// Initalize table structure
		getView().initializeProfTable();
		getView().initializeLogTable();
	}
	
	@Override
	protected void onReset(){
		// Initialize values
		getView().initializeValues();
		
		// Initialize active school list
		getEcoleList();
	}
	
	public void loadProfessorsByCourse(String courseId) {	
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus());
		ProfessorRequestContext rc = rf.professorRequest();
		rc.listAllByCourse(courseId).fire(new Receiver<List<ProfessorProxy>>(){
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
				// getView().setCourseList(response);
			}
		});
		
		// Just to register the Assignment class in Objectify
		AssignmentRequestFactory rfa = GWT.create(AssignmentRequestFactory.class);
		rfa.initialize(this.getEventBus());
		AssignmentRequestContext rca = rfa.assignmentRequest();
		rca.listAll().fire(new Receiver<List<AssignmentProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<AssignmentProxy> response) {
				//
			}
		});
		
		// Get LogType list
		LogTypeRequestFactory rfl = GWT.create(LogTypeRequestFactory.class);
		rfl.initialize(this.getEventBus());
		LogTypeRequestContext rcl = rfl.typeRequest();
		rcl.listAll().fire(new Receiver<List<LogTypeProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogTypeProxy> response) {
				logTypes = response;
			}
		});
	}
	
	public void updateLogTypeList(final ProfessorProxy prof, final String courseId, final String year, final String month) {
		// TODO Load log list
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus());
		LogRequestContext rcl = rfl.logRequest();
		rcl.listAll(prof.getId().toString(), courseId, year, month).fire(new Receiver<List<LogProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogProxy> response) {
				populateLogTypeList(response, prof, courseId, year, month);
			}
		});
	}
	
	// Find and add missing LogType
	public void populateLogTypeList(final List<LogProxy> logList, ProfessorProxy prof, String courseId, String year, String month){
		
		List<String> typeIdList = new ArrayList<String>();
		boolean found = false;
		for (int i=0; i<logTypes.size(); i++) {
			found = false;
			for (int j=0; j<logList.size(); j++) {
				if (logTypes.get(i).getId().toString().equals(logList.get(j).getTypeId())) {
					found = true;
					break;
				}
			}
			
			if (found) {
				continue;
			}
			else {
				typeIdList.add(logTypes.get(i).getId().toString());
			}
		}
		
		if (typeIdList.size() > 0) {
			LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
			rfl.initialize(this.getEventBus());
			LogRequestContext rcl = rfl.logRequest();
			rcl.batchUpdate(prof.getId().toString(), courseId, year, month, typeIdList).fire(new Receiver<List<LogProxy>>(){
				@Override
				public void onFailure(ServerFailure error){
					Window.alert(error.getMessage());
				}
				@Override
				public void onSuccess(List<LogProxy> response) {
					logList.addAll(response);
					getView().setLogData(logList);
				}
			});
		} else {
			getView().setLogData(logList);
		}
	}

	@Override
	public void loadCoursesBySchool(String ecoleId) {
		if (ecoleId.equals("")){
			Window.alert("Veuillez choisir l'�cole � rajouter.");
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

	@ProxyEvent
	@Override
	public void onUpdateTimeLog(UpdateTimeLogEvent event) {
		updateLogTypeList(event.getProf(), event.getCourseId(), event.getYear(), event.getMonth());
	}

	@Override
	public void professorSelected(ProfessorProxy prof, String courseId,
			String year, String month) {
		getView().clearLogTable();
		getEventBus().fireEvent(new UpdateTimeLogEvent(prof, courseId, year, month));
	}

	@Override
	public void updateLogTime(LogProxy log, String value) {
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus());
		LogRequestContext rcl = rfl.logRequest();

		LogProxy logUpdate = rcl.edit(log);
		logUpdate.setHour(Integer.parseInt(value));
		
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
}
