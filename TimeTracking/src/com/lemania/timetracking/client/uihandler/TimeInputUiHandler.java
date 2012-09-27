package com.lemania.timetracking.client.uihandler;

import java.util.Date;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.ProfessorProxy;


public interface TimeInputUiHandler extends UiHandlers {
		
	void professorSelected(ProfessorProxy prof, String courseId, Date currentMonth);
		
	void loadCoursesBySchool(String ecoleId);
	void loadProfessorsByCourse(String courseId);
}