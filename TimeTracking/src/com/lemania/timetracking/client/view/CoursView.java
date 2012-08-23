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
import com.lemania.timetracking.client.presenter.CoursPresenter;
import com.lemania.timetracking.client.uihandler.CoursListUiHandler;
import com.lemania.timetracking.shared.CoursProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;

public class CoursView extends ViewWithUiHandlers<CoursListUiHandler> implements CoursPresenter.MyView {

	private final Widget widget;
	
	// Thuan
	private int selectedCours;

	public interface Binder extends UiBinder<Widget, CoursView> {
	}

	@Inject
	public CoursView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<CoursProxy> tblCours = new DataGrid<CoursProxy>();
	
	@Override
	public void addCours(CoursProxy cours) {
		// TODO Auto-generated method stub
		List<CoursProxy> newCours = new ArrayList<CoursProxy>();
		newCours.add(cours);
		tblCours.setRowData(tblCours.getRowCount()+1, newCours);
	}

	@Override
	public void setData(List<CoursProxy> listCours) {
		 // Add a text column to show the name.
	    TextColumn<CoursProxy> colName = new TextColumn<CoursProxy>() {
	      @Override
	      public String getValue(CoursProxy object) {
	        return object.getCoursNom();
	      }
	    };
	    tblCours.addColumn(colName, "Nom");
	    
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<CoursProxy, Boolean> colActive = new Column<CoursProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(CoursProxy cours){
	    		return cours.getCoursActif();
	    	}	    	
	    };
	    tblCours.addColumn(colActive, "Actif");
	    
	    colActive.setFieldUpdater(new FieldUpdater<CoursProxy, Boolean>(){
	    	@Override
	    	public void update(int index, CoursProxy cours, Boolean value){
	    		if (getUiHandlers() != null) {
	    			selectedCours = index;
	    			getUiHandlers().updateCoursStatus(cours, value);
	    		}	    		
	    	}
	    });
	   
	    // Put them together
	    tblCours.setRowData(0, listCours);
	}

	@Override
	public void refreshTable(CoursProxy updatedCours) {
		// TODO Auto-generated method stub
		List<CoursProxy> listCours = new ArrayList<CoursProxy>();
		listCours.add(updatedCours);
		tblCours.setRowData(selectedCours, listCours);
		tblCours.redraw();
		
		// Notify user
		Window.alert("Statut du cours mis � jour.");
	}
}
