package com.lemania.timetracking.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
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
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.HourProxy;
import com.lemania.timetracking.shared.service.EcoleRequestFactory;
import com.lemania.timetracking.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.timetracking.shared.service.HourRequestFactory;
import com.lemania.timetracking.shared.service.HourRequestFactory.HourRequestContext;

public class TypesAddPresenter 
		extends Presenter<TypesAddPresenter.MyView, TypesAddPresenter.MyProxy>
		implements HourAddUiHandler {

	public interface MyView extends View, HasUiHandlers<HourAddUiHandler> {
	}
	
	private HourProxy hp;

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
		
		HourRequestFactory rf = GWT.create(HourRequestFactory.class);
		rf.initialize(this.getEventBus());
		HourRequestContext rc = rf.hourRequest();
		hp = rc.create(HourProxy.class);
		hp.setHourName(nom);
		hp.setHourActive(active);
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
		// fire event here
	}

	@Override
	public void hourAddCancel() {
		History.newItem(NameTokens.types);		
	}
}
