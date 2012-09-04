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
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory.ProfessorRequestContext;

public class ProfsPresenter 
	extends Presenter<ProfsPresenter.MyView, ProfsPresenter.MyProxy> 
	implements ProfessorListUiHandler {

	public interface MyView extends View, HasUiHandlers<ProfessorListUiHandler> {
		void initializeTable();
		void setData(List<ProfessorProxy> profs);
		void refreshTable(ProfessorProxy prof);
		void setEcoleList(List<EcoleProxy> ecoles);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.profs)
	public interface MyProxy extends ProxyPlace<ProfsPresenter> {
	}

	@Inject
	public ProfsPresenter(final EventBus eventBus, final MyView view, final MyProxy proxy) {
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
		getView().initializeTable();
		getProfessorsList();
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

	@Override
	public void updateEcoleStatus(ProfessorProxy prof, Boolean status) {
		
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
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus());
		ProfessorRequestContext rc = rf.professorRequest();
		rc.listEcoles(prof).fire(new Receiver<List<EcoleProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<EcoleProxy> response) {
				//getView().refreshTable(response);
			}
		});	
	}
}
