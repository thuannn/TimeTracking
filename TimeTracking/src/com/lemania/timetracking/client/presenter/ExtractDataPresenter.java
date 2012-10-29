package com.lemania.timetracking.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.timetracking.client.event.LoginAuthenticatedEvent;
import com.lemania.timetracking.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.timetracking.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.timetracking.client.CurrentUser;
import com.lemania.timetracking.client.LoggedInGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.service.UserRequestFactory;
import com.lemania.timetracking.shared.service.UserRequestFactory.UserRequestContext;

public class ExtractDataPresenter 
		extends Presenter<ExtractDataPresenter.MyView, ExtractDataPresenter.MyProxy> 
		implements LoginAuthenticatedHandler {
	
	private CurrentUser currentUser;

	public interface MyView extends View {
		
		public void initializeTable();
		
		public void setLogData(List<LogProxy> logs);
		
		public void setDepartmentList(List<CoursProxy> depts);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.extractdata)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<ExtractDataPresenter> {
	}

	@Inject
	public ExtractDataPresenter(final EventBus eventBus, final MyView view,
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
		getView().initializeTable();
	}

	@Override
	protected void onReset() {
		super.onReset();
		
		// Thuan
		loadDepartmentList();
	}
	
	public void loadDepartmentList(){
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus());
		UserRequestContext rc = rf.userRequest();
		rc.getDepartments(currentUser.getUserId()).fire( new Receiver<List<CoursProxy>>(){
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess( List<CoursProxy> response ) {
				getView().setDepartmentList(response);
			}
		} );
	}

	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		this.currentUser = event.getCurrentUser();
	}
}
