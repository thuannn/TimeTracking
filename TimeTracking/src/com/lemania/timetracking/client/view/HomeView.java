package com.lemania.timetracking.client.view;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.FieldVerifier;
import com.lemania.timetracking.client.presenter.HomePresenter;
import com.lemania.timetracking.client.uihandler.HomeUiHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.Grid;

public class HomeView extends ViewWithUiHandlers<HomeUiHandler> implements HomePresenter.MyView {
	
	private static HomeViewUiBinder uiBinder = GWT.create(HomeViewUiBinder.class);
	@UiField TextBox txtUserName;
	@UiField Button cmdLogin;
	@UiField PasswordTextBox txtPassword;
	@UiField Grid panelLogin;
	interface HomeViewUiBinder extends UiBinder<Widget, HomeView> {}

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, HomeView> {
	}

	@Inject
	public HomeView(final Binder binder) {
		widget = uiBinder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiHandler("cmdLogin")
	public void onCmdLoginClicked(ClickEvent event){
		if ( !FieldVerifier.isValidUserName(txtUserName.getText()) ){
			Window.alert("Le nom d'utilisateur n'est pas valable.");
			return;
		}
		if ( !FieldVerifier.isValidUserName(txtPassword.getText()) ){
			Window.alert("Le mot de passe n'est pas valable.");
			return;
		}		
		if (this.getUiHandlers() != null) {
			this.getUiHandlers().authenticateUser(txtUserName.getText(), txtPassword.getText());
		}
	}

	@Override
	public void toggleLoginPanel(Boolean visible) {
		panelLogin.setVisible(visible);		
	}
}
