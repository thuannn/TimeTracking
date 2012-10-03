package com.lemania.timetracking.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.timetracking.client.CurrentUser;
import com.lemania.timetracking.client.event.AfterUserLogOutEvent;
import com.lemania.timetracking.client.event.AfterUserLogOutEvent.AfterUserLogOutHandler;
import com.lemania.timetracking.client.event.LoginAuthenticatedEvent;
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
import com.lemania.timetracking.client.uihandler.HomeUiHandler;
import com.lemania.timetracking.shared.UserProxy;
import com.lemania.timetracking.shared.service.UserRequestFactory;
import com.lemania.timetracking.shared.service.UserRequestFactory.UserRequestContext;

public class HomePresenter 
		extends Presenter<HomePresenter.MyView, HomePresenter.MyProxy> 
		implements HomeUiHandler, AfterUserLogOutHandler {

	public interface MyView extends View, HasUiHandlers<HomeUiHandler> {
		
		public void toggleLoginPanel(Boolean visible);
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
		
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus());
		UserRequestContext rc = rf.userRequest();
		rc.authenticateUser(userName, password).fire( new Receiver<UserProxy>(){
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(UserProxy response) {
				if (response!= null) {
					CurrentUser currentUser = new CurrentUser();
					currentUser.setFullName(response.getFullName());
					currentUser.setLoggedIn(true);
					currentUser.setAdmin(response.getAdmin());
					getEventBus().fireEvent(new LoginAuthenticatedEvent(currentUser));
					getView().toggleLoginPanel(false);
				}
				else
					Window.alert("La combination de nom d'utilisateur et mot de passe n'est pas valable.");
			}
		} );	
	}

	@ProxyEvent
	@Override
	public void onAfterUserLogOut(AfterUserLogOutEvent event) {
		getView().toggleLoginPanel(true);
	}
}
