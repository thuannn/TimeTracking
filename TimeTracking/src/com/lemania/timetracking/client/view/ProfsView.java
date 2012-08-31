package com.lemania.timetracking.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.ProfsPresenter;
import com.lemania.timetracking.client.uihandler.ProfessorListUiHandler;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;

public class ProfsView extends ViewWithUiHandlers<ProfessorListUiHandler> implements ProfsPresenter.MyView {

	private final Widget widget;
	private int selectedProf;

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
	    			getUiHandlers().updateEcoleStatus(prof, value);
	    		}	    		
	    	}
	    });
	}

	@Override
	public void setData(List<ProfessorProxy> profs) {
		
		// Put them together
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
}