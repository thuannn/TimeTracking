package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.ProfessorProxy;


public interface TimeInputUiHandler extends UiHandlers {
		
	void professorSelected(ProfessorProxy prof, String courseId, String year, String month);
		
	void loadCoursesBySchool(String ecoleId);
	void loadProfessorsByCourse(String courseId);
}