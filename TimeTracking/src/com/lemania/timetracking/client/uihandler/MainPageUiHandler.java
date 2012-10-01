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
	
	void showEcoleList();
	void showEcoleAdd();

	void showCoursList();
	void showCoursAdd();
	
	void showProfessorList();
	void showProfessorAdd();
	
	void showTypeList();
	void showTypeAdd();
	
	void showContact();
	
	void showExtractDataForm();
	
	void logOut();
}
