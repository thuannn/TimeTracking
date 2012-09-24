package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface HomeUiHandler extends UiHandlers {
	void authenticateUser(String userName, String password);
}
