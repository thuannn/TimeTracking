package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.ProfessorProxy;

public interface ProfessorListUiHandler extends UiHandlers {

	void updateEcoleStatus(ProfessorProxy prof, Boolean status);
}