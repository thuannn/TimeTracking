package com.lemania.timetracking.client.presenter;

import java.util.List;

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
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.service.LogRequestFactory;
import com.lemania.timetracking.shared.service.LogRequestFactory.LogRequestContext;

public class ExtractDataPresenter extends
		Presenter<ExtractDataPresenter.MyView, ExtractDataPresenter.MyProxy> {

	public interface MyView extends View {
		public void initializeTable();
		public void setLogData(List<LogProxy> logs);
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
		getLogList();
	}
	
	private void getLogList(){
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus());
		LogRequestContext rcl = rfl.logRequest();
		rcl.listAllFullDetail().fire(new Receiver<List<LogProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogProxy> response) {
				getView().setLogData(response);
			}
		});
	}
}
