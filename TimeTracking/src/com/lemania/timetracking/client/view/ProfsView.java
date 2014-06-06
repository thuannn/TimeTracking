package com.lemania.timetracking.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.cell.client.TextInputCell;
import com.google.gwt.dom.client.Document;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.DomEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.CustomEditTextCell;
import com.lemania.timetracking.client.presenter.ProfsPresenter;
import com.lemania.timetracking.client.uihandler.ProfessorListUiHandler;
import com.lemania.timetracking.shared.AssignmentProxy;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.client.ui.ToggleButton;

public class ProfsView extends ViewWithUiHandlers<ProfessorListUiHandler> implements ProfsPresenter.MyView {

	private final Widget widget;
	private int selectedProf;
	private int selectedIndexAssignment;
	private ProfessorProxy selectedProfessor;

	public interface Binder extends UiBinder<Widget, ProfsView> {
	}

	@Inject
	public ProfsView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField DataGrid<AssignmentProxy> tblAssignments = new DataGrid<AssignmentProxy>();
	@UiField Label lblProfNameAssign;
	@UiField Button cmdAddCourse;
	@UiField ListBox lstAddEcole;
	@UiField ListBox lstAddCourse;
	@UiField ListBox lstStatus;
	@UiField DataGrid<ProfessorProxy> tblProfessors = new DataGrid<ProfessorProxy>();
	
	//
	CustomEditTextCell nomCell = new CustomEditTextCell();

	
	/*
	 * 
	 * */
	@UiHandler("cmdAddCourse")
	public void onCmdAddCourseClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().addCourse(lstAddCourse.getValue(lstAddCourse.getSelectedIndex()), selectedProfessor);
	}
	
	@UiHandler("lstAddEcole")
	public void onLstAddEcoleChanged(ChangeEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().addSchoolSelected(lstAddEcole.getValue(lstAddEcole.getSelectedIndex()));
	}

	@Override
	public void initializeTable() {
		//
		populateStatusList();
		
		// Add a text column to show the name
		Column<ProfessorProxy, String> colName = new Column<ProfessorProxy, String>(nomCell) {
	      @Override
	      public String getValue(ProfessorProxy object) {
	        return object.getProfName();
	      }
	    };
	    tblProfessors.addColumn(colName, "Nom");
	    // If user is Admin, he can edit the names of the profs
    	colName.setFieldUpdater(new FieldUpdater<ProfessorProxy, String>(){
	    	@Override
	    	public void update(int index, ProfessorProxy prof, String value){
	    		//
	    		if (getUiHandlers() != null) {	    			
	    			selectedProf = index;
	    			if (!prof.getProfName().equals(value))
	    				getUiHandlers().updateProfessorName(prof, value);
	    		}
	    		nomCell.isFirst(true);
	    	}
	    });
	    
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<ProfessorProxy, Boolean> colActive = new Column<ProfessorProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(ProfessorProxy ecole){
	    		return ecole.getProfActive();
	    	}	    	
	    };
	    tblProfessors.addColumn(colActive, "Active");
	    
	    colActive.setFieldUpdater(new FieldUpdater<ProfessorProxy, Boolean>(){
	    	@Override
	    	public void update(int index, ProfessorProxy prof, Boolean value){
	    		//
	    		if (getUiHandlers() != null) {	    			
	    			selectedProf = index;
	    			getUiHandlers().updateProfessorStatus(prof, value);
	    		}	    		
	    	}
	    });
	    
	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<ProfessorProxy> selectionModel = new SingleSelectionModel<ProfessorProxy>();
	    tblProfessors.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	    	  //
	          selectedProfessor = selectionModel.getSelectedObject();
	          //
	          if (selectedProfessor != null) {
	        	  lblProfNameAssign.setText(selectedProfessor.getProfName());
	        	  getUiHandlers().professorSelected(selectedProfessor);
	          }
	       }
	    });
	    
	    
	    // Assignment table	    
	    TextColumn<AssignmentProxy> colSchoolName = new TextColumn<AssignmentProxy>() {
		      @Override
		      public String getValue(AssignmentProxy object) {
		        return object.getSchoolName();
		      }
		    };
		tblAssignments.addColumn(colSchoolName, "Ecole");
		    
	    TextColumn<AssignmentProxy> colCourseName = new TextColumn<AssignmentProxy>() {
	      @Override
	      public String getValue(AssignmentProxy object) {
	        return object.getCourseName();
	      }
	    };
	    tblAssignments.addColumn(colCourseName, "Cours");
	    
	    CheckboxCell cellAssignmentActive = new CheckboxCell();
	    Column<AssignmentProxy, Boolean> colAssignmentActive = new Column<AssignmentProxy, Boolean>(cellAssignmentActive) {
	    	@Override
	    	public Boolean getValue(AssignmentProxy object){
	    		return object.getActive();
	    	}	    	
	    };
	    tblAssignments.addColumn(colAssignmentActive, "Active");
	    
	    colAssignmentActive.setFieldUpdater(new FieldUpdater<AssignmentProxy, Boolean>(){
	    	@Override
	    	public void update(int index, AssignmentProxy assignment, Boolean value){
	    		if (getUiHandlers() != null) {
	    			selectedIndexAssignment = index;
	    			getUiHandlers().updateAssignmentStatus(assignment, value);
	    		}	    		
	    	}
	    });
	}

	
	/*
	 * */
	private void populateStatusList() {
		//
		lstStatus.addItem("Actif", "1");
		lstStatus.addItem("Inactif", "0");
	}

	@Override
	public void setData(List<ProfessorProxy> profs) {
		//
		tblProfessors.setRowCount(profs.size(), true);
		tblProfessors.setRowData(0, profs);
	}

	@Override
	public void refreshTable(ProfessorProxy prof) {
		//
		List<ProfessorProxy> profs = new ArrayList<ProfessorProxy>();
		profs.add(prof);
        tblProfessors.setRowData(selectedProf, profs);
		tblProfessors.redraw();
	}

	@Override
	public void setEcoleAddList(List<EcoleProxy> ecoles) {
		lstAddEcole.clear();
		lstAddEcole.addItem("-","");
		for (int i=0; i<ecoles.size(); i++)
			lstAddEcole.addItem(ecoles.get(i).getSchoolName(), ecoles.get(i).getId().toString());		
	}

	@Override
	public void setCourseAddList(List<CoursProxy> cours) {
		lstAddCourse.clear();
		lstAddCourse.addItem("-","");
		for (int i=0; i<cours.size(); i++)
			lstAddCourse.addItem(cours.get(i).getCoursNom(), cours.get(i).getId().toString());
	}

	@Override
	public void addToAssignmentList(AssignmentProxy a) {				
		// Not using for the moment
	}

	@Override
	public void setAssignmentList(List<AssignmentProxy> assignments) {		
		tblAssignments.setRowData(assignments);
		tblAssignments.setRowCount(assignments.size());
	}
	
	
	/*
	 * 
	 * */
	@UiHandler("lstStatus")
	void onLstStatusChange(ChangeEvent event) {
		//
		getUiHandlers().onStatusChange( lstStatus.getValue(lstStatus.getSelectedIndex()) );
	}
}