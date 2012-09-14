package com.lemania.timetracking.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.timetracking.client.event.TypeAddedEvent;
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
import com.lemania.timetracking.client.uihandler.HourAddUiHandler;
import com.lemania.timetracking.shared.TypeProxy;
import com.lemania.timetracking.shared.service.TypeRequestFactory;
import com.lemania.timetracking.shared.service.TypeRequestFactory.TypeRequestContext;

public class TypesAddPresenter 
		extends Presenter<TypesAddPresenter.MyView, TypesAddPresenter.MyProxy>
		implements HourAddUiHandler {

	public interface MyView extends View, HasUiHandlers<HourAddUiHandler> {
	}
	
	private TypeProxy hp;

	@ProxyCodeSplit
	@NameToken(NameTokens.typesadd)
	public interface MyProxy extends ProxyPlace<TypesAddPresenter> {
	}

	@Inject
	public TypesAddPresenter(final EventBus eventBus, final MyView view,
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
	}

	@Override
	public void hourAdd(String nom, Boolean active) {
		if (nom.isEmpty()){
			Window.alert("Veuillez sassir le nom de type d'heure.");
			return;
		}
		
		TypeRequestFactory rf = GWT.create(TypeRequestFactory.class);
		rf.initialize(this.getEventBus());
		TypeRequestContext rc = rf.typeRequest();
		hp = rc.create(TypeProxy.class);
		hp.setTypeName(nom);
		hp.setTypeActive(active);
		rc.save(hp).fire(new Receiver<Void>(){
			@Override
			public void onSuccess(Void response){
				returnToHourListSuccess();
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
	
	private void returnToHourListSuccess(){
		getEventBus().fireEvent(new TypeAddedEvent(hp));
	}

	@Override
	public void hourAddCancel() {
		History.newItem(NameTokens.types);		
	}
}
