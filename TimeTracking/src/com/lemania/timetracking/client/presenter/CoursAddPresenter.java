package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.timetracking.client.LoggedInGatekeeper;
import com.lemania.timetracking.client.event.CoursAddedEvent;
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
import com.lemania.timetracking.client.uihandler.CoursAddUiHandler;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.service.CoursRequestFactory;
import com.lemania.timetracking.shared.service.EcoleRequestFactory;
import com.lemania.timetracking.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.timetracking.shared.service.EcoleRequestFactory.EcoleRequestContext;

public class CoursAddPresenter 
		extends Presenter<CoursAddPresenter.MyView, CoursAddPresenter.MyProxy>
		implements CoursAddUiHandler {

	public interface MyView extends View, HasUiHandlers<CoursAddUiHandler> {
		void populateEcoleList(List<EcoleProxy> ecoles);
	}
	
	// Thuan
	private CoursProxy cours;

	@ProxyCodeSplit
	@NameToken(NameTokens.coursadd)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<CoursAddPresenter> {
	}

	@Inject
	public CoursAddPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
		
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
		initialData();
	}
	
	private void initialData(){
		EcoleRequestFactory rf = GWT.create(EcoleRequestFactory.class);
		rf.initialize(this.getEventBus());
		EcoleRequestContext rc = rf.ecoleRequest();
		rc.listAll().fire(new Receiver<List<EcoleProxy>>(){
			@Override
			public void onSuccess(List<EcoleProxy> response){
				getView().populateEcoleList(response);
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
	
	@Override
	public void coursAdd(String coursNom, String ecoleId, Boolean coursActif){
		// Validate data		
		if (coursNom.isEmpty()){
			Window.alert("Veuillez saissir le nom du cours.");
			return;
		}
		if (ecoleId.isEmpty()){
			Window.alert("Veuillez choisir le nom de l'école.");
			return;
		}
		
		// Save data
		CoursRequestFactory rf = GWT.create(CoursRequestFactory.class);
		rf.initialize(this.getEventBus());
		CoursRequestContext rc = rf.coursRequest();
		cours = rc.create(CoursProxy.class);
		cours.setCoursNom(coursNom);
		cours.setCoursActif(coursActif);
		rc.save(cours, ecoleId).fire(new Receiver<Void>(){
			@Override
			public void onSuccess(Void response){
				returnToCoursListSuccess();
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}

	@Override
	public void coursAddCancel() {
		// Return to the list of the cours name
		History.newItem(NameTokens.cours);
	}
	
	private void returnToCoursListSuccess() {
		// TODO Auto-generated method stub
		getEventBus().fireEvent(new CoursAddedEvent(cours));
	}
}
