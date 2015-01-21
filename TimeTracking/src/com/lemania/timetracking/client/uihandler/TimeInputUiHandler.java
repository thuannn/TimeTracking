package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.ProfessorProxy;


public interface TimeInputUiHandler extends UiHandlers {
		
	void professorSelected(ProfessorProxy prof, String courseId, String year, String month);
	void updateLogTime(LogProxy log, String value);
	void updateLogMemo(LogProxy log, String value);
		
	void loadCoursesBySchool(String ecoleId);
	void loadProfessorsByCourse(String courseId, String year, String month);
	
	void updateLogTime ( 
			ProfessorProxy prof, String courseId, String year, String month,
			String coursTime, String coursNote,
			String maladieTime, String maladieNote,
			String ferieTime, String ferieNote,
			String priveTime, String priveNote, 
			String supervisionTime, String supervisionNote, 
			String fraisAmount, String fraisNote );
	
	void toggleEditStatus(boolean notsaved);
	
	void updateLogStatus (ProfessorProxy prof, String courseId, String year, String month, boolean status);
}