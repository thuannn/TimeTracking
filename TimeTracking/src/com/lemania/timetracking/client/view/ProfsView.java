package com.lemania.timetracking.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.ProfsPresenter;
import com.lemania.timetracking.client.uihandler.ProfessorListUiHandler;
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

public class ProfsView extends ViewWithUiHandlers<ProfessorListUiHandler> implements ProfsPresenter.MyView {

	private final Widget widget;
	private int selectedProf;
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
	
	@UiField(provided=true) DataGrid<ProfessorProxy> tblProfessors = new DataGrid<ProfessorProxy>();
	@UiField(provided=true) DataGrid<CoursProxy> tblCourses = new DataGrid<CoursProxy>();
	@UiField ListBox lstEcoles;
	@UiField Label lblProfName;
	@UiField Label lblProfNameAssign;
	@UiField Button cmdAddCourse;
	@UiField ListBox lstAddEcole;
	@UiField ListBox lstAddCourse;
	
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
		
		// Add a text column to show the name.
	    TextColumn<ProfessorProxy> colName = new TextColumn<ProfessorProxy>() {
	      @Override
	      public String getValue(ProfessorProxy object) {
	        return object.getProfName();
	      }
	    };
	    tblProfessors.addColumn(colName, "Nom");
	    
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
	    		if (getUiHandlers() != null) {	    			
	    			selectedProf = index;
	    			getUiHandlers().updateProfessorStatus(prof, value);
	    		}	    		
	    	}
	    });
	    
	    // Courses table
	    TextColumn<CoursProxy> colCourseName = new TextColumn<CoursProxy>() {
	      @Override
	      public String getValue(CoursProxy object) {
	        return object.getCoursNom();
	      }
	    };
	    tblCourses.addColumn(colCourseName, "Nom du cours");
	    
	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<ProfessorProxy> selectionModel = new SingleSelectionModel<ProfessorProxy>();
	    tblProfessors.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedProfessor = selectionModel.getSelectedObject();
	        if (selectedProfessor != null) {
	        	lblProfName.setText(selectedProfessor.getProfName());
	        	lblProfNameAssign.setText(selectedProfessor.getProfName());
	        	getUiHandlers().professorSelected(selectedProfessor);
	        }
	      }
	    });
	    
	}

	@Override
	public void setData(List<ProfessorProxy> profs) {
		tblProfessors.setRowCount(profs.size(), true);
		tblProfessors.setRowData(0, profs);
	}

	@Override
	public void refreshTable(ProfessorProxy prof) {
		
		List<ProfessorProxy> profs = new ArrayList<ProfessorProxy>();
		profs.add(prof);
        tblProfessors.setRowData(selectedProf, profs);
		tblProfessors.redraw();
		
		// Notify user
		Window.alert("Statut du professeur a été mis à jour.");
	}

	@Override
	public void setEcoleList(List<EcoleProxy> ecoles) {
		lstEcoles.addItem("-","");
		for (int i=0; i<ecoles.size(); i++)
			lstEcoles.addItem(ecoles.get(i).getSchoolName(), ecoles.get(i).getId().toString());		
	}

	@Override
	public void setEcoleAddList(List<EcoleProxy> ecoles) {
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
	public void addCourseToList(CoursProxy cours) {
		List<CoursProxy> newList = new ArrayList<CoursProxy>();
		newList.add(cours);
		tblCourses.setRowData(tblCourses.getRowCount(), newList);		
	}

	@Override
	public void addCoursesList(List<CoursProxy> courses) {
		tblCourses.setRowData(courses);		
	}
}