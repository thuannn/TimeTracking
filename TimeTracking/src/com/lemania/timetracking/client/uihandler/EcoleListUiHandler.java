package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.EcoleProxy;

public interface EcoleListUiHandler extends UiHandlers {
	void updateEcoleStatus(EcoleProxy ecole);
}
