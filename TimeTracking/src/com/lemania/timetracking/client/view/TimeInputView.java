package com.lemania.timetracking.client.view;


import java.util.ArrayList;
import java.util.List;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.canvas.dom.client.Context;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.cell.client.TextInputCell;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.KeyCodeEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.TimeInputPresenter;
import com.lemania.timetracking.client.uihandler.TimeInputUiHandler;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.view.client.CellPreviewEvent;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.cellview.client.SimplePager;

public class TimeInputView extends ViewWithUiHandlers<TimeInputUiHandler> implements TimeInputPresenter.MyView {

	private final Widget widget;
	private ProfessorProxy selectedProfessor;
	private LogProxy selectedLog;
	private ListDataProvider<ProfessorProxy> professorProvider;
	private ListDataProvider<LogProxy> logProvider;

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
	@UiField(provided=true) DataGrid<LogProxy> tblLog = new DataGrid<LogProxy>();
	@UiField ListBox lstYear;
	@UiField ListBox lstMonth;
	@UiField Label txtNotification;
	@UiField SimplePager pager;
	
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
			lstCourses.addItem(cours.get(i).getSchoolName() + " - " +cours.get(i).getCoursNom(), cours.get(i).getId().toString());				
	}
	
	@Override
	public void setProfData(List<ProfessorProxy> profs) {
		professorProvider = new ListDataProvider<ProfessorProxy>();
		professorProvider.setList(profs);
		professorProvider.addDataDisplay(tblProfessors);
	}

	@Override
	public void initializeValues(int currentMonth, int currentYear, boolean isAdmin) {
		// Clear school list and course list
		lstSchools.clear();
		lstCourses.clear();
		
		clearProfTable();
		clearLogTable();
		
		// List of month, auto-select current month
		lstMonth.clear();
		for (int i=1; i <= 12; i++) {
			lstMonth.addItem( Integer.toString(i), Integer.toString(i));
			if (i == currentMonth)
				lstMonth.setSelectedIndex(i-1);
		}
		
		// List of year, auto-select current year
		lstYear.clear();
		for (int i=-2; i<2; i++) {
			lstYear.addItem( Integer.toString(i + currentYear), Integer.toString(i + currentYear));
			if ((i + currentYear) == currentYear)
				lstYear.setSelectedIndex(i+2);
		}		
		
		// let admin choose year and month
		lstMonth.setEnabled(isAdmin);
		lstYear.setEnabled(isAdmin);
	}
	
	/***/
	
	@UiHandler("lstSchools")
	public void onLstAddEcoleChanged(ChangeEvent event) {
		clearProfTable();
		clearLogTable();
		if ( !lstSchools.getItemText(lstSchools.getSelectedIndex()).equals("-") ) {
			if (getUiHandlers() != null)
				getUiHandlers().loadCoursesBySchool(lstSchools.getValue(lstSchools.getSelectedIndex()));
		}
	}
	
	@UiHandler("lstYear")
	public void onLstYearChanged(ChangeEvent event) {
		clearLogTable();
		getUiHandlers().professorSelected(
    			selectedProfessor, 
    			lstCourses.getValue(lstCourses.getSelectedIndex()),
    			lstYear.getItemText(lstYear.getSelectedIndex()),
    			lstMonth.getItemText(lstMonth.getSelectedIndex()));
	}
	
	@UiHandler("lstMonth")
	public void onLstMonthChanged(ChangeEvent event) {
		clearLogTable();
		getUiHandlers().professorSelected(
    			selectedProfessor, 
    			lstCourses.getValue(lstCourses.getSelectedIndex()),
    			lstYear.getItemText(lstYear.getSelectedIndex()),
    			lstMonth.getItemText(lstMonth.getSelectedIndex()));
	}
	
	@Override
	public void clearProfTable() {
		List<ProfessorProxy> temp = new ArrayList<ProfessorProxy>();
		professorProvider = new ListDataProvider<ProfessorProxy>();
		professorProvider.setList(temp);
		professorProvider.addDataDisplay(tblProfessors);
		
		tblProfessors.getSelectionModel().setSelected(selectedProfessor, false);
	}
	
	@Override
	public void clearLogTable() {
		List<LogProxy> temp = new ArrayList<LogProxy>();
		logProvider = new ListDataProvider<LogProxy>();
		logProvider.setList(temp);
		logProvider.addDataDisplay(tblLog);
	}

	@UiHandler("lstCourses")
	public void onLstCoursesChanged(ChangeEvent event){
		clearProfTable();
		clearLogTable();
		if ( !lstCourses.getItemText(lstCourses.getSelectedIndex()).equals("-") ) {
			if (getUiHandlers() != null)
				getUiHandlers().loadProfessorsByCourse(lstCourses.getValue(lstCourses.getSelectedIndex()));
		}
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
	    final SingleSelectionModel<ProfessorProxy> selectionModel = new SingleSelectionModel<ProfessorProxy>() {
	    	@Override
	    	public void setSelected(ProfessorProxy object, boolean selected) {	    		
    	      	super.setSelected(object, selected);
	    	}
	    };
	    
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedProfessor = selectionModel.getSelectedObject();
	        if (selectedProfessor != null) {
	        	lblProfName.setText(selectedProfessor.getProfName());
	        	getUiHandlers().professorSelected(
	        			selectedProfessor, 
	        			lstCourses.getValue(lstCourses.getSelectedIndex()),
	        			lstYear.getItemText(lstYear.getSelectedIndex()),
	        			lstMonth.getItemText(lstMonth.getSelectedIndex()));
	        }
	      }
	    });
	    tblProfessors.setSelectionModel(selectionModel);
	    
	    pager.setDisplay(tblProfessors);
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
	    
	    EditTextCell hourCell = new EditTextCell();
	    Column<LogProxy,String> hourColl = new Column<LogProxy,String>(hourCell) {
	    	@Override
	    	public String getValue(LogProxy log){
	    		return Double.toString(log.getHour());
	    	}
	    };
	    hourColl.setFieldUpdater(new FieldUpdater<LogProxy,String>(){
	    	@Override
	    	public void update(int index, LogProxy log, String value){
	    		if (getUiHandlers() != null) {
	    			selectedLog = log;
	    			if (value.equals(""))
	    				value = "0";
	    			getUiHandlers().updateLogTime(log, value);
	    		}	    		
	    	}
	    });
	    
	    EditTextCell memoCell = new EditTextCell();
	    Column<LogProxy, String> memoCol = new Column<LogProxy, String>(memoCell) {
	    	@Override
	    	public String getValue(LogProxy log){
	    		return log.getMemo();
	    	}	    	   
	    };
	    memoCol.setFieldUpdater(new FieldUpdater<LogProxy, String>(){
	    	@Override
	    	public void update(int index, LogProxy log, String value){
	    		if (getUiHandlers() != null){
	    			selectedLog = log;
	    			getUiHandlers().updateLogMemo(log,  value);
	    		}
	    	}
	    });
	    
	    tblLog.addCellPreviewHandler(new CellPreviewEvent.Handler<LogProxy>(){
	    	@Override
	    	public void onCellPreview(final CellPreviewEvent<LogProxy> event){
	    		boolean isClick = "click".equals(event.getNativeEvent().getType());
	    		boolean isKeyDown = "keydown".equals(event.getNativeEvent().getType());
	    		if (isClick || (isKeyDown && event.getNativeEvent().getKeyCode() == KeyCodes.KEY_BACKSPACE)) {
	    			tblLog.getRowElement(event.getIndex()).getCells().getItem(event.getColumn()).dispatchEvent(
	    				Document.get().createClickEvent(1, 0, 0, 0, 0, false, false, false, false));
	    		}		
	    	}
	    });
	    
	    tblLog.addColumn(colType, "Type");
	    tblLog.setColumnWidth(colType, 20, Unit.PCT);
	    
	    tblLog.addColumn(hourColl, "Somme");
	    tblLog.setColumnWidth(hourColl, 20, Unit.PCT);
	    
	    tblLog.addColumn(memoCol, "Memo");
	    tblLog.setColumnWidth(memoCol, 60, Unit.PCT);
	}

	@Override
	public void setNotification(String code) {
		if (code.equals("log-updated"))
			showTimer("Modification enregistrée.");
	}
	
	private void showTimer(final String text) {
		// This function is obsolete since the progress bar has been implemented
		
//		txtNotification.setText(text);
//		txtNotification.setVisible(true);
//		Timer t = new Timer() {
//	      public void run() {
//	        txtNotification.setVisible(false);
//	      }
//	    };
//	    // Schedule the timer to run once in 1 seconds.
//	    t.schedule(1000);
	}
}
