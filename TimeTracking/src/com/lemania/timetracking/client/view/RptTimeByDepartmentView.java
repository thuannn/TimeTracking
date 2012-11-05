package com.lemania.timetracking.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.gargoylesoftware.htmlunit.javascript.host.Document;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.safehtml.shared.SafeHtmlUtils;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.RptTimeByDepartmentPresenter;
import com.lemania.timetracking.client.uihandler.RptTimeByDepartmentUiHandler;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.FlexTable;

public class RptTimeByDepartmentView extends ViewWithUiHandlers<RptTimeByDepartmentUiHandler> implements
		RptTimeByDepartmentPresenter.MyView {

	private final Widget widget;
	
	@UiField(provided=true) DataGrid<ProfessorProxy> tblLog = new DataGrid<ProfessorProxy>();
	@UiField ListBox lstDepartments;
	@UiField FlexTable tblProf;
	
	public interface Binder extends UiBinder<Widget, RptTimeByDepartmentView> {
	}

	@Inject
	public RptTimeByDepartmentView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiHandler("lstDepartments")
	void onLstDepartmentsChange(ChangeEvent event) {
		clearLogTable();
		if (lstDepartments.getValue(lstDepartments.getSelectedIndex()).equals(""))
			return;
		if (getUiHandlers() != null)
			getUiHandlers().onDepartmentSelected( lstDepartments.getValue( lstDepartments.getSelectedIndex() ));
	}
	
	@Override
	public void clearLogTable() {
//		List<ProfessorProxy> temp = new ArrayList<ProfessorProxy>();
//		tblLog.setRowData(temp);
//		tblLog.setRowCount(temp.size());
		
		// Clear Flextable
		tblProf.removeAllRows();
	}

	@Override
	public void initializeTable() {
		
		tblLog.setWidth("100%");
		
	    TextColumn<ProfessorProxy> colProf = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return object.getProfName();
			}
	    };
	    tblLog.addColumn(colProf, "Professeur");
	    tblLog.setColumnWidth(colProf, 16, Unit.PCT);
	    
	    // jan
	    TextColumn<ProfessorProxy> col01 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_01()>0) ? String.valueOf(object.getTotal_01()) : "";
			}
	    };
	    tblLog.addColumn(col01, "janvier");
	    
	    TextColumn<ProfessorProxy> colFee01 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_01()>0) ? String.valueOf(object.getFee_01()) : "";
			}
	    };
	    tblLog.addColumn(colFee01, "$");
	    
	    // feb
	    TextColumn<ProfessorProxy> col02 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_02()>0) ? String.valueOf(object.getTotal_02()) : "";					
			}
	    };
	    tblLog.addColumn(col02, "fevrier");
	    
	    TextColumn<ProfessorProxy> colFee02 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_02()>0) ? String.valueOf(object.getFee_02()) : "";				
			}
	    };
	    tblLog.addColumn(colFee02, "$");
	    
	    // mars
	    TextColumn<ProfessorProxy> col03 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_03()>0) ? String.valueOf(object.getTotal_03()) : "";
			}
	    };
	    tblLog.addColumn(col03, "mars");
	    
	    TextColumn<ProfessorProxy> colFee03 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_03()>0) ? String.valueOf(object.getFee_03()) : "";
			}
	    };
	    tblLog.addColumn(colFee03, "$");
	    
	    // avril
	    TextColumn<ProfessorProxy> col04 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_04()>0) ? String.valueOf(object.getTotal_04()) : "";
			}
	    };
	    tblLog.addColumn(col04, "avril");
	    
	    TextColumn<ProfessorProxy> colFee04 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_04()>0) ? String.valueOf(object.getFee_04()) : "";
			}
	    };
	    tblLog.addColumn(colFee04, "$");
	    
	    // mai
	    TextColumn<ProfessorProxy> col05 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_05()>0) ? String.valueOf(object.getTotal_05()) : "";
			}
	    };
	    tblLog.addColumn(col05, "mai");
	    
	    TextColumn<ProfessorProxy> colFee05 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_05()>0) ? String.valueOf(object.getFee_05()) : "";
			}
	    };
	    tblLog.addColumn(colFee05, "$");
	    
	    // juin
	    TextColumn<ProfessorProxy> col06 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_06()>0) ? String.valueOf(object.getTotal_06()) : "";
			}
	    };
	    tblLog.addColumn(col06, "juin");
	    
	    TextColumn<ProfessorProxy> colFee06 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_06()>0) ? String.valueOf(object.getFee_06()) : "";
			}
	    };
	    tblLog.addColumn(colFee06, "$");
	    
	    // juillet
	    TextColumn<ProfessorProxy> col07 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_07()>0) ? String.valueOf(object.getTotal_07()) : "";
			}
	    };
	    tblLog.addColumn(col07, "juillet");
	    
	    TextColumn<ProfessorProxy> colFee07 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_07()>0) ? String.valueOf(object.getFee_07()) : "";
			}
	    };
	    tblLog.addColumn(colFee07, "$");
	    
	    // aout
	    TextColumn<ProfessorProxy> col08 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_08()>0) ? String.valueOf(object.getTotal_08()) : "";
			}
	    };
	    tblLog.addColumn(col08, "août");
	    
	    TextColumn<ProfessorProxy> colFee08 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_08()>0) ? String.valueOf(object.getFee_08()) : "";
			}
	    };
	    tblLog.addColumn(colFee08, "$");
	    
	    // sep
	    TextColumn<ProfessorProxy> col09 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_09()>0) ? String.valueOf(object.getTotal_09()) : "";
			}
	    };
	    tblLog.addColumn(col09, "septembre");
	    
	    TextColumn<ProfessorProxy> colFee09 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_09()>0) ? String.valueOf(object.getFee_09()) : "";
			}
	    };
	    tblLog.addColumn(colFee09, "$");
	    
	    // octobre
	    TextColumn<ProfessorProxy> col10 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_10()>0) ? String.valueOf(object.getTotal_10()) : "";
			}
	    };
	    tblLog.addColumn(col10, "octobre");
	    
	    TextColumn<ProfessorProxy> colFee10 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_10()>0) ? String.valueOf(object.getFee_10()) : "";
			}
	    };
	    tblLog.addColumn(colFee10, "$");
	    
	    // novembre
	    TextColumn<ProfessorProxy> col11 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return ((object.getTotal_11()>0) ? String.valueOf(object.getTotal_11()) : "");
			}
	    };
	    tblLog.addColumn(col11, "novembre");
	    TextColumn<ProfessorProxy> colFee11 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_11()>0) ? String.valueOf(object.getFee_11()) : "";
			}
	    };
	    tblLog.addColumn(colFee11, "$");
	    
	    // décembre
	    TextColumn<ProfessorProxy> col12 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getTotal_12()>0) ? String.valueOf(object.getTotal_12()) : "";
			}
	    };
	    tblLog.addColumn(col12, "décembre");
	    TextColumn<ProfessorProxy> colFee12 = new TextColumn<ProfessorProxy>() {
			@Override
			public String getValue(ProfessorProxy object) {
				return (object.getFee_12()>0) ? String.valueOf(object.getFee_12()) : "";
			}
	    };
	    tblLog.addColumn(colFee12, "$");
	}

	@Override
	public void setDepartmentList(List<CoursProxy> depts) {
		lstDepartments.clear();
		lstDepartments.addItem("-","");
		for (int i=0; i<depts.size(); i++)
			lstDepartments.addItem(depts.get(i).getSchoolName() + " - " +depts.get(i).getCoursNom(), depts.get(i).getId().toString());
	}

	@Override
	public void setData(List<ProfessorProxy> profs) {
//		tblLog.setRowCount(profs.size(), true);
//		tblLog.setRowData(profs);
//		tblLog.setRowCount(profs.size());
		
		tblProf.setWidth("90%");
		tblProf.setText(0, 0, "Professeur");
		tblProf.setText(0, 1, "Jan");
		tblProf.setText(0, 2, "Fev");
		tblProf.setText(0, 3, "Mar");
		tblProf.setText(0, 4, "Avr");
		tblProf.setText(0, 5, "Mai");
		tblProf.setText(0, 6, "Jun");
		tblProf.setText(0, 7, "Jul");
		tblProf.setText(0, 8, "Aou");
		tblProf.setText(0, 9, "Sep");
		tblProf.setText(0, 10, "Oct");
		tblProf.setText(0, 11, "Nov");
		tblProf.setText(0, 12, "Dec");
		
		int currentRow = 1;
		for (int i=0; i<profs.size(); i++){
			tblProf.setText(currentRow, 0, profs.get(i).getProfName());
			
			tblProf.setText(currentRow, 1, (profs.get(i).getTotal_01()>0) ? String.valueOf(profs.get(i).getTotal_01()) : "");
			tblProf.setText(currentRow+1, 0, (profs.get(i).getFee_01()>0) ? "$" + String.valueOf(profs.get(i).getFee_01()) : "");
			
			tblProf.setText(currentRow, 2, (profs.get(i).getTotal_02()>0) ? String.valueOf(profs.get(i).getTotal_02()) : "");
			tblProf.setText(currentRow+1, 1, (profs.get(i).getFee_02()>0) ? "$" + String.valueOf(profs.get(i).getFee_02()) : "");
			
			tblProf.setText(currentRow, 3, (profs.get(i).getTotal_03()>0) ? String.valueOf(profs.get(i).getTotal_03()) : "");
			tblProf.setText(currentRow+1, 2, (profs.get(i).getFee_03()>0) ? "$" + String.valueOf(profs.get(i).getFee_03()) : "");
			
			tblProf.setText(currentRow, 4, (profs.get(i).getTotal_04()>0) ? String.valueOf(profs.get(i).getTotal_04()) : "");
			tblProf.setText(currentRow+1, 3, (profs.get(i).getFee_04()>0) ? "$" + String.valueOf(profs.get(i).getFee_04()) : "");
			
			tblProf.setText(currentRow, 5, (profs.get(i).getTotal_05()>0) ? String.valueOf(profs.get(i).getTotal_05()) : "");
			tblProf.setText(currentRow+1, 4, (profs.get(i).getFee_05()>0) ? "$" + String.valueOf(profs.get(i).getFee_05()) : "");
			
			tblProf.setText(currentRow, 6, (profs.get(i).getTotal_06()>0) ? String.valueOf(profs.get(i).getTotal_06()) : "");
			tblProf.setText(currentRow+1, 5, (profs.get(i).getFee_06()>0) ? "$" + String.valueOf(profs.get(i).getFee_06()) : "");
			
			tblProf.setText(currentRow, 7, (profs.get(i).getTotal_07()>0) ? String.valueOf(profs.get(i).getTotal_07()) : "");
			tblProf.setText(currentRow+1, 6, (profs.get(i).getFee_07()>0) ? "$" + String.valueOf(profs.get(i).getFee_07()) : "");
			
			tblProf.setText(currentRow, 8, (profs.get(i).getTotal_08()>0) ? String.valueOf(profs.get(i).getTotal_08()) : "");
			tblProf.setText(currentRow+1, 7, (profs.get(i).getFee_08()>0) ? "$" + String.valueOf(profs.get(i).getFee_08()) : "");
			
			tblProf.setText(currentRow, 9, (profs.get(i).getTotal_09()>0) ? String.valueOf(profs.get(i).getTotal_09()) : "");
			tblProf.setText(currentRow+1, 8, (profs.get(i).getFee_09()>0) ? "$" + String.valueOf(profs.get(i).getFee_09()) : "");
			
			tblProf.setText(currentRow, 10, (profs.get(i).getTotal_10()>0) ? String.valueOf(profs.get(i).getTotal_10()) : "");
			tblProf.setText(currentRow+1, 9, (profs.get(i).getFee_10()>0) ? "$" + String.valueOf(profs.get(i).getFee_10()) : "");
			
			tblProf.setText(currentRow, 11, (profs.get(i).getTotal_11()>0) ? String.valueOf(profs.get(i).getTotal_11()) : "");
			tblProf.setText(currentRow+1, 10, (profs.get(i).getFee_11()>0) ? "$" + String.valueOf(profs.get(i).getFee_11()) : "");
			
			tblProf.setText(currentRow, 12, (profs.get(i).getTotal_12()>0) ? String.valueOf(profs.get(i).getTotal_12()) : "");
			tblProf.setText(currentRow+1, 11, (profs.get(i).getFee_12()>0) ? "$" + String.valueOf(profs.get(i).getFee_12()) : "");
			
			tblProf.getFlexCellFormatter().setRowSpan(currentRow, 0, 2);
			currentRow = currentRow + 2;
		}
		
		for (int j=0; j<tblProf.getRowCount(); j++){
			for (int k=0; k<tblProf.getCellCount(j); k++){
				tblProf.getCellFormatter().addStyleName(j,k,"FlexTable-Cell");
			}
		}
		tblProf.setStyleName("FlexTable");
	}
}
