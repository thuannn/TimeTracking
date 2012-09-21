package com.lemania.timetracking.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.timetracking.client.place.NameTokens;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.client.uihandler.HomeUiHandler;

public class HomePresenter 
		extends Presenter<HomePresenter.MyView, HomePresenter.MyProxy> 
		implements HomeUiHandler {

	public interface MyView extends View, HasUiHandlers<HomeUiHandler> {
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.homepage)
	public interface MyProxy extends ProxyPlace<HomePresenter> {
	}

	@Inject
	public HomePresenter(final EventBus eventBus, final MyView view,
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
		
		// Thuan
		getView().setUiHandlers(this);
	}

	@Override
	public void authenticateUser(String userName, String password) {
		if (userName.equals("") || password.equals("")) {
			Window.alert("Veuillez introduire votre nom d'utilisateur et mot de passe !");
			return;
		}
		
		// Validate user name and password here
		
	}
}
