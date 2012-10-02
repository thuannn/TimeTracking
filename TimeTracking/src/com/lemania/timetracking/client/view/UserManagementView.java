package com.lemania.timetracking.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.FieldVerifier;
import com.lemania.timetracking.client.presenter.UserManagementPresenter;
import com.lemania.timetracking.client.uihandler.UserManagementUiHandler;
import com.lemania.timetracking.shared.UserProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Button;

public class UserManagementView extends ViewWithUiHandlers<UserManagementUiHandler> implements
		UserManagementPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, UserManagementView> {
	}

	@Inject
	public UserManagementView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<UserProxy> tblUser = new DataGrid<UserProxy>();
	@UiField TextBox txtFullName;
	@UiField TextBox txtUserName;
	@UiField TextBox txtPassword;
	@UiField Button cmdAdd;
	
	@UiHandler("cmdAdd")
	public void onCmdAddClicked(ClickEvent event) {
		if ( !FieldVerifier.isValidUserName(txtUserName.getText()) ){
			Window.alert("Le nom d'utilisateur n'est pas valable.");
			return;
		}
		
		if ( !FieldVerifier.isValidUserName(txtPassword.getText()) ){
			Window.alert("Le mot de passe n'est pas valable.");
			return;
		}		
		
		if (this.getUiHandlers() != null) {
			getUiHandlers().addNewUser(
					txtFullName.getText(),
					txtUserName.getText(),
					txtPassword.getText());
		}
	}

	@Override
	public void addNewUser(UserProxy newUser) {
		List<UserProxy> list = new ArrayList<UserProxy>();
		list.add(newUser);
		tblUser.setRowData(tblUser.getRowCount() + 1, list);
		tblUser.setRowCount(tblUser.getRowCount() + list.size());
	}

	@Override
	public void initializeTables() {
		TextColumn<UserProxy> colFullName = new TextColumn<UserProxy>() {
			@Override
			public String getValue(UserProxy object) {
				return object.getFullName();
			}
	    };
	    tblUser.addColumn(colFullName, "Nom & Prénom");
	    
	    TextColumn<UserProxy> colUserName = new TextColumn<UserProxy>() {
			@Override
			public String getValue(UserProxy object) {
				return object.getUserName();
			}
	    };
	    tblUser.addColumn(colUserName, "Nom d'utilisateur");
	    
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<UserProxy, Boolean> colActive = new Column<UserProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(UserProxy ecole){
	    		return ecole.getActive();
	    	}	    	
	    };
	    tblUser.addColumn(colActive, "Actif");	
	}

	@Override
	public void setUserData(List<UserProxy> list) {
		tblUser.setRowData(list);
	}
}