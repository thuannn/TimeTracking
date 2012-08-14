package com.lemania.timetracking.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.proxy.Proxy;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.proxy.RevealRootContentEvent;

import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.user.client.History;
import com.google.inject.Inject;
import com.lemania.timetracking.client.place.NameTokens;
import com.lemania.timetracking.client.uihandler.MainPageUiHandler;

public class MainPagePresenter extends
		Presenter<MainPagePresenter.MyView, MainPagePresenter.MyProxy>
		implements MainPageUiHandler {
	/**
	   * Child presenters can fire a RevealContentEvent with TYPE_SetMainContent to set themselves
	   * as children of this presenter.
	   */
	@ContentSlot
	public static final Type<RevealContentHandler<?>> TYPE_SetMainContent = new Type<RevealContentHandler<?>>();

	public interface MyView extends View, HasUiHandlers<MainPageUiHandler> {
	}
	
	@ProxyStandard
	public interface MyProxy extends Proxy<MainPagePresenter> {
	}

	@Inject
	public MainPagePresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
		
		// Thuan: attach Ui handler
		getView().setUiHandlers(this);
	}

	@Override
	protected void revealInParent() {
		RevealRootContentEvent.fire(this, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
	}

	@Override
	public void showHomepage() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.homepage);
	}

	@Override
	public void showEcoleList() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.ecolepage);
	}

	@Override
	public void showEcoleAdd() {
		// TODO Auto-generated method stub
		History.newItem(NameTokens.addecole);
	}
}
