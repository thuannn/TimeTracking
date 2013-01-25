package com.lemania.timetracking.client.view;

import java.util.List;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.RptTimeByProfPresenter;
import com.lemania.timetracking.client.uihandler.ExtractDataUiHandler;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.FlexTable;

public class RptTimeByProfView extends ViewWithUiHandlers<ExtractDataUiHandler> 
		implements RptTimeByProfPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, RptTimeByProfView> {
	}

	@Inject
	public RptTimeByProfView(final Binder binder) {
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
//		tblLogs.setWidth("90%");
//		tblLogs.setText(0, 0, "Année");
//		tblLogs.setText(0, 1, "Mois");
//		tblLogs.setText(0, 2, "Département");
//		tblLogs.setText(0, 3, "Type");
//		tblLogs.setText(0, 4, "Totale");
//		tblLogs.setText(0, 5, "Remarque");
		
		clearTable();
		
		// Draw the table structure
		tblLogs.setWidth("100%");
		tblLogs.setText(0, 0, "Professeur");
		tblLogs.setText(0, 1, "Département");
		tblLogs.setText(0, 2, "Cours");
		tblLogs.setText(0, 3, "Maladie");
		tblLogs.setText(0, 4, "Fériés");
		tblLogs.setText(0, 5, "Privé");
		tblLogs.setText(0, 6, "Supervision");
		tblLogs.setText(0, 7, "Total");
		tblLogs.setText(0, 8, "Frais");
		tblLogs.setText(0, 9, "Remarque");
		tblLogs.setText(0, 10, "Mois");
		
		styleTable();
	}
	
	public void clearTable(){
		tblLogs.removeAllRows();
	}

//	@Override
//	public void setLogData(List<LogProxy> logs) {
//		initializeTable();
//		
//		int prevYear = 0;
//		int prevMonth = 0;
//		String prevDept = "";
//		
//		// Set the data
//		for (int i=0; i<logs.size(); i++){
//			if (prevYear != logs.get(i).getYear())
//				tblLogs.setText(i+1, 0, Integer.toString(logs.get(i).getYear()));
//			
//			if ((prevMonth != logs.get(i).getMonth()) || (!prevDept.equals(logs.get(i).getCourseName()))){
//				tblLogs.setText(i+1, 1, Integer.toString(logs.get(i).getMonth()));
//				tblLogs.setText(i+1, 2, logs.get(i).getCourseName());
//			}
//			
//			tblLogs.setText(i+1, 3, logs.get(i).getTypeName());
//			tblLogs.setText(i+1, 4, 
//					logs.get(i).getTypeName().equals("6.Frais") ? 
//							(logs.get(i).getHour()>0) ? "CHF " + Double.toString(logs.get(i).getHour()) : ""
//							: (logs.get(i).getHour()>0) ? Double.toString(logs.get(i).getHour()) : "" );
//			tblLogs.setText(i+1, 5, logs.get(i).getMemo());
//			
//			prevYear = logs.get(i).getYear();
//			prevMonth = logs.get(i).getMonth();
//			prevDept = logs.get(i).getCourseName();
//		}
//		
//		// Set the stylesheet
//		styleTable();
//	}
	
	@Override
	public void setLogData(List<LogProxy> logs) {
		// Draw data to the table
		initializeTable();
		
		String prevProf = "";
		String prevDept = "";		
		String currentMemo = "";
		int currentRow = 0; 	// keep the current row to write time details
		int currentCol = 0;
		double totalHour = 0;
		double totalProf = 0;
		double totalCash = 0;
		double totalProfCash = 0;
		// Set the data
		for (int i=0; i<logs.size(); i++){
			// if it's the same professor, does not need to display the name again 
			// otherwise, add a blank line and show the new name							
			if (!prevProf.equals(logs.get(i).getProfName())) {
				currentRow = i+1;
				if (currentRow > 1) {
					totalProf = totalProf + totalHour;
					totalProfCash = totalProfCash + totalCash;
					tblLogs.setText(currentRow, 7, Double.toString(totalProf));					
					tblLogs.setText(currentRow, 8, "CHF " + Double.toString(totalProfCash));
					tblLogs.getCellFormatter().addStyleName(currentRow,7,"FlexTable-Cell-Total");
					tblLogs.getCellFormatter().addStyleName(currentRow,8,"FlexTable-Cell-Total");
					
					totalHour = 0;
					totalProf = 0;
					totalCash = 0;
					totalProfCash = 0;
					
					currentRow = currentRow + 1;					
					for (int k=0; k<10; k++){
						tblLogs.setText(currentRow, 0, "");					
						tblLogs.getCellFormatter().addStyleName(currentRow,k,"FlexTable-Cell-Divider");
					}		
					currentRow = currentRow + 1;	
				}
				currentMemo = "";
				
				tblLogs.setText(currentRow, 0, logs.get(i).getProfName());				
				tblLogs.setText(currentRow, 1, logs.get(i).getCourseName());
				tblLogs.setText(currentRow, 10, Integer.toString(logs.get(i).getMonth()));
			}
			
			// if the name of department changes, check if prof name changes too,
			// if yes, add a blank line
			if ((!prevDept.equals(logs.get(i).getCourseName()))){						
				currentRow = i+1;
								
				if (prevProf.equals(logs.get(i).getProfName())) {
					totalProf = totalProf + totalHour;
					totalProfCash = totalProfCash + totalCash;
				}
								
				if (!prevProf.equals(logs.get(i).getProfName()) && (currentRow > 1)) {
					currentRow = currentRow + 1;
					for (int k=0; k<10; k++){
						tblLogs.setText(currentRow, 0, "");
						tblLogs.getCellFormatter().addStyleName(currentRow,k,"FlexTable-Cell-Divider");
					}
					currentRow = currentRow + 1;
				}
				
				tblLogs.setText(currentRow, 1, logs.get(i).getCourseName());
				currentMemo = "";
				totalHour = 0;
				totalCash = 0;
			}
			
			// choose the column number base on the log type
			if (logs.get(i).getTypeName().equals("1.Cours"))
				currentCol = 2;				
			if (logs.get(i).getTypeName().equals("2.Maladie/ACC"))
				currentCol = 3;
			if (logs.get(i).getTypeName().equals("3.Fériés"))
				currentCol = 4;
			if (logs.get(i).getTypeName().equals("4.Privé"))
				currentCol = 5;
			if (logs.get(i).getTypeName().equals("5.Supervision"))
				currentCol = 6;
			if (logs.get(i).getTypeName().equals("6.Frais"))
				currentCol = 8;
			
			// calculate the total hour
			if (!logs.get(i).getTypeName().equals("6.Frais"))
				totalHour = totalHour + logs.get(i).getHour();
			
			// calculate the total cash
			if (logs.get(i).getTypeName().equals("6.Frais"))
				totalCash = totalCash + logs.get(i).getHour();
			
			// draw the data
			if (logs.get(i).getTypeName().equals("6.Frais"))
				tblLogs.setText(currentRow, currentCol, (logs.get(i).getHour() > 0) ? "CHF " + Double.toString(logs.get(i).getHour()) : "");
			else
				tblLogs.setText(currentRow, currentCol, (logs.get(i).getHour() > 0) ? Double.toString(logs.get(i).getHour()) : "");
			
			// show the total hour of previous department
			tblLogs.setText(currentRow, 7, Double.toString(totalHour));			
			
			// show the notes
			if (!logs.get(i).getMemo().equals(""))
				currentMemo = logs.get(i).getMemo() + ". " + currentMemo;
			tblLogs.setText(currentRow, 9, currentMemo);
			
			// keep the current data to compare with the following row		
			prevProf = logs.get(i).getProfName();
			prevDept = logs.get(i).getCourseName();
			
			if (i==logs.size()-1) {
				currentRow = i+2;
				totalProf = totalProf + totalHour;
				totalProfCash = totalProfCash + totalCash;
				tblLogs.setText(currentRow, 7, Double.toString(totalProf));					
				tblLogs.setText(currentRow, 8, "CHF " + Double.toString(totalProfCash));
				tblLogs.getCellFormatter().addStyleName(currentRow,7,"FlexTable-Cell-Total");
				tblLogs.getCellFormatter().addStyleName(currentRow,8,"FlexTable-Cell-Total");
			}
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