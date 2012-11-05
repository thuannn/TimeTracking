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
	
	@UiField(provided=true) DataGrid<LogProxy> tblLog = new DataGrid<LogProxy>();
	@UiField ListBox lstDepartments;
	@UiField ListBox lstProfs;
	
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
		List<LogProxy> temp = new ArrayList<LogProxy>();
		tblLog.setRowData(temp);
		tblLog.setRowCount(temp.size());
	}
	
	@Override
	public void initializeTable() {
		tblLog.setWidth("100%");
	    
	    TextColumn<LogProxy> colYear = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return String.valueOf(object.getYear());
			}
	    };
	    tblLog.addColumn(colYear, "Year");
	    tblLog.setColumnWidth(colYear, 10, Unit.PCT);
	    //
	    TextColumn<LogProxy> colMonth = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return String.valueOf(object.getMonth());
			}
	    };
	    tblLog.addColumn(colMonth, "Month");
	    tblLog.setColumnWidth(colMonth, 10, Unit.PCT);
	    //
	    TextColumn<LogProxy> coldeptse = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return object.getCourseName();
			}
	    };
	    tblLog.addColumn(coldeptse, "Départements");
	    tblLog.setColumnWidth(coldeptse, 20, Unit.PCT);
		//
	    TextColumn<LogProxy> colType = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return object.getTypeName();
			}
	    };
	    tblLog.addColumn(colType, "Type");
	    tblLog.setColumnWidth(colType, 10, Unit.PCT);
	    //
	    TextColumn<LogProxy> colHour = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return String.valueOf(object.getHour());
			}
	    };
	    tblLog.addColumn(colHour, "Totale");
	    tblLog.setColumnWidth(colHour, 10, Unit.PCT);
	    //
	    TextColumn<LogProxy> colRemarque = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return String.valueOf(object.getMemo());
			}
	    };
	    tblLog.addColumn(colRemarque, "Remarques");
	    tblLog.setColumnWidth(colRemarque, 40, Unit.PCT);
	}

	@Override
	public void setLogData(List<LogProxy> logs) {
		tblLog.setRowCount(logs.size(), true);
		tblLog.setRowData(logs);
		tblLog.setRowCount(logs.size());
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
