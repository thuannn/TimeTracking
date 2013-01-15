package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.ProfessorProxy;

public interface ProfessorListUiHandler extends UiHandlers {
	
	void updateProfessorStatus(ProfessorProxy prof, Boolean status);	
	void updateProfessorName(ProfessorProxy prof, String name);
	
	void professorSelected(ProfessorProxy prof);
	
	void addCourse(String courseId, ProfessorProxy prof);
	void addSchoolSelected(String ecoleId);
}