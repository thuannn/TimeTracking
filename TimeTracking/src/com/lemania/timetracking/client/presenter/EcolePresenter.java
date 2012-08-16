package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.timetracking.client.event.EcoleAddedEvent;
import com.lemania.timetracking.client.event.EcoleAddedEvent.EcoleAddedHandler;
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
import com.lemania.timetracking.client.uihandler.EcoleListUiHandler;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.service.EcoleRequestFactory;
import com.lemania.timetracking.shared.service.EcoleRequestFactory.EcoleRequestContext;

public class EcolePresenter extends
		Presenter<EcolePresenter.MyView, EcolePresenter.MyProxy> 
		implements EcoleAddedHandler {

	public interface MyView extends View, HasUiHandlers<EcoleListUiHandler> {
		void setData(List<EcoleProxy> ecoleList);
		void addEcole(EcoleProxy newEcole);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.ecolepage)
	public interface MyProxy extends ProxyPlace<EcolePresenter> {
	}

	private final MyView display;
	
	@Inject
	public EcolePresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
		
		// Thuan
		this.display = view;
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		getEcoleList();
	}

	private void getEcoleList() {
		EcoleRequestFactory rf = GWT.create(EcoleRequestFactory.class);
		rf.initialize(this.getEventBus());
		EcoleRequestContext rc = rf.ecoleRequest();
		rc.listAll().fire(new Receiver<List<EcoleProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<EcoleProxy> response) {
				display.setData(response);
			}
		});
	}

	@ProxyEvent
	@Override
	public void onEcoleAdded(EcoleAddedEvent event) {
		display.addEcole(event.getNewEcole());
		revealInParent();		
	}
}
