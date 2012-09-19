package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.timetracking.client.event.LogTypeAddedEvent;
import com.lemania.timetracking.client.event.LogTypeAddedEvent.LogTypeAddedHandler;
import com.lemania.timetracking.client.place.NameTokens;
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
import com.lemania.timetracking.client.uihandler.LogTypeListUiHandler;
import com.lemania.timetracking.shared.LogTypeProxy;
import com.lemania.timetracking.shared.service.LogTypeRequestFactory;
import com.lemania.timetracking.shared.service.LogTypeRequestFactory.LogTypeRequestContext;

public class LogTypesPresenter 
		extends Presenter<LogTypesPresenter.MyView, LogTypesPresenter.MyProxy> 
		implements LogTypeAddedHandler, LogTypeListUiHandler {

	public interface MyView extends View, HasUiHandlers<LogTypeListUiHandler> {
		void initializeTable();
		void addHour(LogTypeProxy hour);
		void refreshTable(LogTypeProxy updatedHour);
		void setData(List<LogTypeProxy> hours);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.types)
	public interface MyProxy extends ProxyPlace<LogTypesPresenter> {
	}

	@Inject
	public LogTypesPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
		
		// Thuan
		getView().setUiHandlers(this);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		initializeData();
	}
	
	private void initializeData(){
		getView().initializeTable();
		getHourList();
	}
	
	private void getHourList() {
		LogTypeRequestFactory rf = GWT.create(LogTypeRequestFactory.class);
		rf.initialize(this.getEventBus());
		LogTypeRequestContext rc = rf.typeRequest();
		rc.listAll().fire(new Receiver<List<LogTypeProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogTypeProxy> response) {
				getView().setData(response);
			}
		});
	}

	@ProxyEvent
	@Override
	public void onHourAdded(LogTypeAddedEvent event) {
		getView().addHour(event.getHp());
		History.newItem(NameTokens.types, true);
	}

	@Override
	public void updateLogTypeStatus(LogTypeProxy hp, Boolean status) {
		LogTypeRequestFactory rf = GWT.create(LogTypeRequestFactory.class);
		rf.initialize(this.getEventBus());
		LogTypeRequestContext rc = rf.typeRequest();
		LogTypeProxy hourForUpdate = rc.edit(hp);
		hourForUpdate.setLogTypeActive(status);
		rc.saveAndReturn(hourForUpdate).fire(new Receiver<LogTypeProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(LogTypeProxy response) {
				getView().refreshTable(response);
			}
		});
	}
}
