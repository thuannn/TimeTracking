package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface CoursAddUiHandler extends UiHandlers {
	void coursAdd(String coursNom, Boolean cousActif);
	void coursAddCancel();
}
