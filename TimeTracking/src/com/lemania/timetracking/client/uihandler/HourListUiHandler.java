package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.HourProxy;

public interface HourListUiHandler extends UiHandlers {

	void updateHourStatus(HourProxy hp, Boolean status);
}
