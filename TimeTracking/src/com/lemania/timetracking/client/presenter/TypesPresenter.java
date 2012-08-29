package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.timetracking.client.event.HourAddedEvent;
import com.lemania.timetracking.client.event.HourAddedEvent.HourAddedHandler;
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
import com.lemania.timetracking.client.uihandler.HourListUiHandler;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.HourProxy;
import com.lemania.timetracking.shared.service.EcoleRequestFactory;
import com.lemania.timetracking.shared.service.HourRequestFactory;
import com.lemania.timetracking.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.timetracking.shared.service.HourRequestFactory.HourRequestContext;

public class TypesPresenter 
		extends Presenter<TypesPresenter.MyView, TypesPresenter.MyProxy> 
		implements HourAddedHandler, HourListUiHandler {

	public interface MyView extends View, HasUiHandlers<HourListUiHandler> {
		void initializeTable();
		void addHour(HourProxy hour);
		void refreshTable(HourProxy updatedHour);
		void setData(List<HourProxy> hours);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.types)
	public interface MyProxy extends ProxyPlace<TypesPresenter> {
	}

	@Inject
	public TypesPresenter(final EventBus eventBus, final MyView view,
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
		HourRequestFactory rf = GWT.create(HourRequestFactory.class);
		rf.initialize(this.getEventBus());
		HourRequestContext rc = rf.hourRequest();
		rc.listAll().fire(new Receiver<List<HourProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<HourProxy> response) {
				getView().setData(response);
			}
		});
	}

	@ProxyEvent
	@Override
	public void onHourAdded(HourAddedEvent event) {
		getView().addHour(event.getHp());
		History.newItem(NameTokens.types, true);
	}

	@Override
	public void updateHourStatus(HourProxy hp, Boolean status) {
		HourRequestFactory rf = GWT.create(HourRequestFactory.class);
		rf.initialize(this.getEventBus());
		HourRequestContext rc = rf.hourRequest();
		HourProxy hourForUpdate = rc.edit(hp);
		hourForUpdate.setHourActive(status);
		rc.saveAndReturn(hourForUpdate).fire(new Receiver<HourProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(HourProxy response) {
				getView().refreshTable(response);
			}
		});
	}
}
