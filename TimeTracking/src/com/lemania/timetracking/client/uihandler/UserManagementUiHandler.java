package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface UserManagementUiHandler extends UiHandlers {
	public void addNewUser(String fullName, String userName, String password);
}
