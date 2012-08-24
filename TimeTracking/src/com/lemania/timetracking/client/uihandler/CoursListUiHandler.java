package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.CoursProxy;

public interface CoursListUiHandler extends UiHandlers {
	
	void updateCoursStatus(CoursProxy cours, Boolean value);
	
	void populateCoursList(String ecoleId);
}
