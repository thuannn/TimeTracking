package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ExtractDataUiHandler extends UiHandlers {
	
	void onDepartmentSelected(String deptId);

	void onProfSelected(String deptId, String profId);
}
