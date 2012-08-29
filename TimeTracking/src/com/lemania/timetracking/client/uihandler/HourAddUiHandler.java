package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface HourAddUiHandler extends UiHandlers {
	
	void hourAdd(String nom, Boolean active);
	void hourAddCancel();
}