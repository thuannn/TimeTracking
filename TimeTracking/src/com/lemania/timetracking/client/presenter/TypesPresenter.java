package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.timetracking.client.event.TypeAddedEvent;
import com.lemania.timetracking.client.event.TypeAddedEvent.TypeAddedHandler;
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
import com.lemania.timetracking.client.uihandler.TypeListUiHandler;
import com.lemania.timetracking.shared.TypeProxy;
import com.lemania.timetracking.shared.service.TypeRequestFactory;
import com.lemania.timetracking.shared.service.TypeRequestFactory.TypeRequestContext;

public class TypesPresenter 
		extends Presenter<TypesPresenter.MyView, TypesPresenter.MyProxy> 
		implements TypeAddedHandler, TypeListUiHandler {

	public interface MyView extends View, HasUiHandlers<TypeListUiHandler> {
		void initializeTable();
		void addHour(TypeProxy hour);
		void refreshTable(TypeProxy updatedHour);
		void setData(List<TypeProxy> hours);
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
		TypeRequestFactory rf = GWT.create(TypeRequestFactory.class);
		rf.initialize(this.getEventBus());
		TypeRequestContext rc = rf.typeRequest();
		rc.listAll().fire(new Receiver<List<TypeProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<TypeProxy> response) {
				getView().setData(response);
			}
		});
	}

	@ProxyEvent
	@Override
	public void onHourAdded(TypeAddedEvent event) {
		getView().addHour(event.getHp());
		History.newItem(NameTokens.types, true);
	}

	@Override
	public void updateTypeStatus(TypeProxy hp, Boolean status) {
		TypeRequestFactory rf = GWT.create(TypeRequestFactory.class);
		rf.initialize(this.getEventBus());
		TypeRequestContext rc = rf.typeRequest();
		TypeProxy hourForUpdate = rc.edit(hp);
		hourForUpdate.setTypeActive(status);
		rc.saveAndReturn(hourForUpdate).fire(new Receiver<TypeProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(TypeProxy response) {
				getView().refreshTable(response);
			}
		});
	}
}
