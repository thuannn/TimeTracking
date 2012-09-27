package com.lemania.timetracking.client.view;


import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.cell.client.TextInputCell;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.TimeInputPresenter;
import com.lemania.timetracking.client.uihandler.TimeInputUiHandler;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.LogTypeProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.datepicker.client.DatePicker;
import com.google.gwt.user.client.ui.Button;

public class TimeInputView extends ViewWithUiHandlers<TimeInputUiHandler> implements TimeInputPresenter.MyView {

	private final Widget widget;
	private ProfessorProxy selectedProfessor;
	private int selectedLog;

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
	
	@UiField(provided=true) DataGrid<ProfessorProxy> tblProfessors = new DataGrid<ProfessorProxy>();
	@UiField ListBox lstCourses;
	@UiField ListBox lstSchools;
	@UiField Label lblProfName;
	@UiField DatePicker dtLogDate;
	@UiField(provided=true) DataGrid<LogProxy> tblLog = new DataGrid<LogProxy>();
	
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
	public void setProfData(List<ProfessorProxy> profs) {
		tblProfessors.setRowCount(profs.size(), true);
		tblProfessors.setRowData(profs);
		tblProfessors.setRowCount(profs.size());
	}

	@Override
	public void initializeValues() {
		// Clear school list and course list
		lstSchools.clear();
		lstCourses.clear();
		
		clearProfTable();
		clearLogTable();
	}
	
	/***/
	
	@UiHandler("lstSchools")
	public void onLstAddEcoleChanged(ChangeEvent event){
		clearProfTable();
		if (getUiHandlers() != null)
			getUiHandlers().loadCoursesBySchool(lstSchools.getValue(lstSchools.getSelectedIndex()));
	}
	
	private void clearProfTable() {
		List<ProfessorProxy> temp = new ArrayList<ProfessorProxy>();
		tblProfessors.setRowData(temp);
		tblProfessors.setRowCount(temp.size());
	}
	
	private void clearLogTable() {
		List<LogProxy> temp = new ArrayList<LogProxy>();
		tblLog.setRowData(temp);
		tblLog.setRowCount(temp.size());
	}

	@UiHandler("lstCourses")
	public void onLstCoursesChanged(ChangeEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().loadProfessorsByCourse(lstCourses.getValue(lstCourses.getSelectedIndex()));
	}

	@Override
	public void initializeProfTable() {
		// Initialize table structure of Professor table
		TextColumn<ProfessorProxy> colName = new TextColumn<ProfessorProxy>() {
	      @Override
	      public String getValue(ProfessorProxy object) {
	        return object.getProfName();
	      }
	    };
	    tblProfessors.addColumn(colName, "Nom");
	    
	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<ProfessorProxy> selectionModel = new SingleSelectionModel<ProfessorProxy>();
	    tblProfessors.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedProfessor = selectionModel.getSelectedObject();
	        if (selectedProfessor != null) {
	        	lblProfName.setText(selectedProfessor.getProfName());
	        	getUiHandlers().professorSelected(
	        			selectedProfessor, 
	        			lstCourses.getValue(lstCourses.getSelectedIndex()),
	        			dtLogDate.getCurrentMonth());
	        }
	      }
	    });
	}

	@Override
	public void setLogData(List<LogProxy> logs) {
		// TODO Auto-generated method stub
		tblLog.setRowCount(logs.size(), true);
		tblLog.setRowData(logs);
		tblLog.setRowCount(logs.size());
	}

	@Override
	public void initializeLogTable() {
		TextColumn<LogProxy> colType = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return object.getTypeName();
			}
	    };
	    tblLog.addColumn(colType, "Type");
	    tblLog.setColumnWidth(colType, 5.0, Unit.EM);
	    
	    TextInputCell hourCell = new TextInputCell();
	    Column<LogProxy,String> hourColl = new Column<LogProxy,String>(hourCell) {
	    	@Override
	    	public String getValue(LogProxy log){
	    		return Integer.toString(log.getHour());
	    	}	 
	    };
	    hourColl.setFieldUpdater(new FieldUpdater<LogProxy,String>(){
	    	@Override
	    	public void update(int index, LogProxy cours, String value){
	    		if (getUiHandlers() != null) {
	    			selectedLog = index;
	    			// getUiHandlers().updateCoursStatus(cours, value);
	    			Window.alert("changed : " + value);
	    		}	    		
	    	}
	    });
	    tblLog.addColumn(hourColl, "No. d'heurs");
	    tblLog.setColumnWidth(hourColl, 3.0, Unit.EM);
	}

	@Override
	public void updateLogTypeList(List<LogProxy> logList) {
		// TODO Auto-generated method stub
		
	}
}
