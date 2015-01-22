/**
 * 
 */
package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

/**
 * @author Thuan
 *
 */
public interface MainPageUiHandler extends UiHandlers {
	void showHomepage();
	void showTimeInput();
	void showFrmPassword();
	
	void showEcoleList();
	void showEcoleAdd();

	void showCoursList();
	void showCoursAdd();
	
	void showProfessorList();
	void showProfessorAdd();
	
	void showTypeList();
	void showTypeAdd();
	
	void showSettingsScreen();
	void showContact();
	
	void showExtractDataForm();
	
	void showUserManagement();
	
	void showRptByDept();
	void showRptBySchool();
	void showRptByMonth();
	void showRptByStatus();
	
	void logOut();
}
