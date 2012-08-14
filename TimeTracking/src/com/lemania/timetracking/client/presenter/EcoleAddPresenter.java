package com.lemania.timetracking.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.timetracking.client.place.NameTokens;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.client.uihandler.EcoleAddUiHandler;

public class EcoleAddPresenter extends
		Presenter<EcoleAddPresenter.MyView, EcoleAddPresenter.MyProxy> 
		implements EcoleAddUiHandler{

	public interface MyView extends View, HasUiHandlers<EcoleAddUiHandler> {
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.addecole)
	public interface MyProxy extends ProxyPlace<EcoleAddPresenter> {
	}

	@Inject
	public EcoleAddPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
		
		// Thuan: attach Ui handler
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
	public void ecoleAdd() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void ecoleAddCancel() {
		Window.alert("here");
		// TODO Auto-generated method stub
		History.newItem(NameTokens.ecolepage);
	}
}
