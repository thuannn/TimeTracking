package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.timetracking.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.timetracking.client.LoggedInGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.client.uihandler.UserManagementUiHandler;
import com.lemania.timetracking.shared.UserProxy;
import com.lemania.timetracking.shared.service.UserRequestFactory;
import com.lemania.timetracking.shared.service.UserRequestFactory.UserRequestContext;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;

public class UserManagementPresenter
		extends Presenter<UserManagementPresenter.MyView, UserManagementPresenter.MyProxy> 
		implements UserManagementUiHandler {

	public interface MyView extends View, HasUiHandlers<UserManagementUiHandler> {
		
		public void initializeTables();
		
		public void addNewUser(UserProxy newUser);
		public void setUserData(List<UserProxy> list);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.usermanagement)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<UserManagementPresenter> {
	}

	@Inject
	public UserManagementPresenter(final EventBus eventBus, final MyView view,
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
		getView().initializeTables();
	}
	
	@Override
	protected void onReset(){
		loadUsers();
	}

	private void loadUsers() {
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus());
		UserRequestContext rc = rf.userRequest();
		rc.listAll().fire(new Receiver<List<UserProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<UserProxy> response) {
				getView().setUserData(response);
			}
		});
	}

	@Override
	public void addNewUser(String fullName, String userName, String password) {
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus());
		UserRequestContext rc = rf.userRequest();
		final UserProxy newUser = rc.create(UserProxy.class);
		newUser.setFullName(fullName);
		newUser.setUserName(userName);
		newUser.setPassword(password);
		newUser.setActive(true);
		rc.save(newUser).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getView().addNewUser(newUser);
			}
		});
	}
}
