package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.LogTypeProxy;

public interface LogTypeListUiHandler extends UiHandlers {

	void updateLogTypeStatus(LogTypeProxy hp, Boolean status);
}
