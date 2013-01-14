package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface SettingOptionsUiHandler extends UiHandlers{
	
	void updateSettingOptionDeadline(String dayNumber);
	void updateSettingOptionManualBlock(Boolean blnBlock);
	
}
