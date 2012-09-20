package com.lemania.timetracking.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.TimeInputPresenter;
import com.lemania.timetracking.client.uihandler.TimeInputUiHandler;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.client.ui.ListBox;

public class TimeInputView extends ViewWithUiHandlers<TimeInputUiHandler> implements TimeInputPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, TimeInputView> {
	}

	@Inject
	public TimeInputView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<Object> tblProfessors = new DataGrid<Object>();
	@UiField ListBox lstCourses;
	@UiField(provided=true) DataGrid<Object> dataGrid = new DataGrid<Object>();
	@UiField ListBox lstYear;
	@UiField ListBox lstMonth;
	@UiField ListBox lstSchools;
	
	@Override
	public void setEcoleList(List<EcoleProxy> ecoles) {
		lstSchools.clear();
		lstSchools.addItem("-","");
		for (int i=0; i<ecoles.size(); i++)
			lstSchools.addItem(ecoles.get(i).getSchoolName(), ecoles.get(i).getId().toString());		
	}

	@Override
	public void setCourseList(List<CoursProxy> cours) {
		lstCourses.clear();
		lstCourses.addItem("-","");
		for (int i=0; i<cours.size(); i++)
			lstCourses.addItem(cours.get(i).getCoursNom(), cours.get(i).getId().toString());				
	}
	
	@Override
	public void setData(List<ProfessorProxy> profs) {
		tblProfessors.setRowCount(profs.size(), true);
		tblProfessors.setRowData(profs);
		tblProfessors.setRowCount(profs.size());
	}
	
	@UiHandler("lstSchools")
	public void onLstAddEcoleChanged(ChangeEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().loadCoursesBySchool(lstSchools.getValue(lstSchools.getSelectedIndex()));
	}
}
