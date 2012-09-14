package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.TypeProxy;

public interface TypeListUiHandler extends UiHandlers {

	void updateTypeStatus(TypeProxy hp, Boolean status);
}
