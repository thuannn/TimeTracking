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
import com.lemania.timetracking.client.presenter.TypesPresenter;
import com.lemania.timetracking.client.uihandler.TypeListUiHandler;
import com.lemania.timetracking.shared.TypeProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;

public class TypesView extends ViewWithUiHandlers<TypeListUiHandler> implements TypesPresenter.MyView {

	private final Widget widget;
	private int selectedHour;

	public interface Binder extends UiBinder<Widget, TypesView> {
	}

	@Inject
	public TypesView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField(provided=true) DataGrid<TypeProxy> tblHours = new DataGrid<TypeProxy>();
	
	@Override
	public void initializeTable() {
		// Add a text column to show the name.
	    TextColumn<TypeProxy> colName = new TextColumn<TypeProxy>() {
	      @Override
	      public String getValue(TypeProxy object) {
	        return object.getTypeName();
	      }
	    };
	    tblHours.addColumn(colName, "Nom");
	    
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<TypeProxy, Boolean> colActive = new Column<TypeProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(TypeProxy type){
	    		return type.getTypeActive();
	    	}	    	
	    };
	    tblHours.addColumn(colActive, "Actif");
	    
	    colActive.setFieldUpdater(new FieldUpdater<TypeProxy, Boolean>(){
	    	@Override
	    	public void update(int index, TypeProxy type, Boolean value){
	    		if (getUiHandlers() != null) {
	    			selectedHour = index;
	    			getUiHandlers().updateTypeStatus(type, value);
	    		}	    		
	    	}
	    });
	}

	@Override
	public void addHour(TypeProxy type) {
		// TODO Auto-generated method stub
		List<TypeProxy> newHours = new ArrayList<TypeProxy>();
		newHours.add(type);
		tblHours.setRowData(tblHours.getRowCount()+1, newHours);
	}

	@Override
	public void refreshTable(TypeProxy updatedHour) {
		// TODO Auto-generated method stub
		List<TypeProxy> types = new ArrayList<TypeProxy>();
		types.add(updatedHour);
        tblHours.setRowData(selectedHour, types);
		tblHours.redraw();
		
		// Notify user
		Window.alert("Statut du type d'heure mis à jour.");
	}

	@Override
	public void setData(List<TypeProxy> types) {
		tblHours.setRowData(0, types);
	}
}
