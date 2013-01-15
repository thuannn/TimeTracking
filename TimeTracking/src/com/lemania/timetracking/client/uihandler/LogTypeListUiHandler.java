package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.LogTypeProxy;

public interface LogTypeListUiHandler extends UiHandlers {

	void updateLogTypeStatus(LogTypeProxy hp, Boolean status);
	void updateLogTypeOrder(LogTypeProxy hp, String orderNumber);
	void updateLogTypeName(LogTypeProxy hp, String typeName);
}
