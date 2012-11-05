package com.lemania.timetracking.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.ExtractDataPresenter;
import com.lemania.timetracking.client.uihandler.ExtractDataUiHandler;
import com.lemania.timetracking.server.Professor;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.FlexTable;

public class ExtractDataView extends ViewWithUiHandlers<ExtractDataUiHandler> implements
		ExtractDataPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, ExtractDataView> {
	}

	@Inject
	public ExtractDataView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField ListBox lstDepartments;
	@UiField ListBox lstProfs;
	@UiField FlexTable tblLogs;
	
	@UiHandler("lstDepartments")
	public void onListDepartmentsSelected(ChangeEvent event){
		clearLogTable();
		clearProfList();
		if (lstDepartments.getValue(lstDepartments.getSelectedIndex()).equals(""))
			return;
		if (getUiHandlers() != null)
			getUiHandlers().onDepartmentSelected( lstDepartments.getValue( lstDepartments.getSelectedIndex() ));
	}
	
	@Override
	public void clearProfList(){
		lstProfs.clear();
	}
	
	@UiHandler("lstProfs")
	public void onListProfsSelected(ChangeEvent event){
		clearLogTable();
		if (lstProfs.getValue(lstProfs.getSelectedIndex()).equals(""))
			return;
		if (getUiHandlers() != null)
			getUiHandlers().onProfSelected( 
					lstDepartments.getValue(lstDepartments.getSelectedIndex()), 
					lstProfs.getValue(lstProfs.getSelectedIndex()) );
	}
	
	@Override
	public void clearLogTable() {
		tblLogs.removeAllRows();
	}
	
	@Override
	public void initializeTable() {
		tblLogs.setWidth("90%");
		tblLogs.setText(0, 0, "Année");
		tblLogs.setText(0, 1, "Mois");
		tblLogs.setText(0, 2, "Département");
		tblLogs.setText(0, 3, "Type");
		tblLogs.setText(0, 4, "Totale");
		tblLogs.setText(0, 5, "Remarque");
	}

	@Override
	public void setLogData(List<LogProxy> logs) {
		initializeTable();
		
		int prevYear = 0;
		int prevMonth = 0;
		String prevDept = "";
		
		// Set the data
		for (int i=0; i<logs.size(); i++){
			if (prevYear != logs.get(i).getYear())
				tblLogs.setText(i+1, 0, Integer.toString(logs.get(i).getYear()));
			
			if (prevMonth != logs.get(i).getMonth())
				tblLogs.setText(i+1, 1, Integer.toString(logs.get(i).getMonth()));
			
			if (!prevDept.equals(logs.get(i).getCourseName()))
				tblLogs.setText(i+1, 2, logs.get(i).getCourseName());
			
			tblLogs.setText(i+1, 3, logs.get(i).getTypeName());
			tblLogs.setText(i+1, 4, 
					logs.get(i).getTypeName().equals("Frais") ? 
							(logs.get(i).getHour()>0) ? "$" + Integer.toString(logs.get(i).getHour()) : ""
							: (logs.get(i).getHour()>0) ? Integer.toString(logs.get(i).getHour()) : "" );
			tblLogs.setText(i+1, 5, logs.get(i).getMemo());
			
			prevYear = logs.get(i).getYear();
			prevMonth = logs.get(i).getMonth();
			prevDept = logs.get(i).getCourseName();
		}
		
		// Set the stylesheet
		styleTable();
	}
	
	public void styleTable(){
		for (int j=0; j<tblLogs.getRowCount(); j++){
			for (int k=0; k<tblLogs.getCellCount(j); k++){
				tblLogs.getCellFormatter().addStyleName(j,k,"FlexTable-Cell");
			}
		}
		// tblLogs.setStyleName("FlexTable");
	}

	@Override
	public void setDepartmentList(List<CoursProxy> depts) {
		lstDepartments.clear();
		lstDepartments.addItem("", "");
		for (int i=0; i<depts.size(); i++)
			lstDepartments.addItem(depts.get(i).getSchoolName() + " - " +depts.get(i).getCoursNom(), depts.get(i).getId().toString());	
	}

	@Override
	public void setProfList(List<ProfessorProxy> profs) {
		lstProfs.addItem("", "");
		for (ProfessorProxy p : profs) {
			lstProfs.addItem(p.getProfName(), p.getId().toString());
		}
	}
}
