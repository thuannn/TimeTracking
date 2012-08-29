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
import com.lemania.timetracking.client.uihandler.HourListUiHandler;
import com.lemania.timetracking.shared.HourProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;

public class TypesView extends ViewWithUiHandlers<HourListUiHandler> implements TypesPresenter.MyView {

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
	
	@UiField(provided=true) DataGrid<HourProxy> tblHours = new DataGrid<HourProxy>();
	
	@Override
	public void initializeTable() {
		// Add a text column to show the name.
	    TextColumn<HourProxy> colName = new TextColumn<HourProxy>() {
	      @Override
	      public String getValue(HourProxy object) {
	        return object.getHourName();
	      }
	    };
	    tblHours.addColumn(colName, "Nom");
	    
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<HourProxy, Boolean> colActive = new Column<HourProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(HourProxy hour){
	    		return hour.getHourActive();
	    	}	    	
	    };
	    tblHours.addColumn(colActive, "Actif");
	    
	    colActive.setFieldUpdater(new FieldUpdater<HourProxy, Boolean>(){
	    	@Override
	    	public void update(int index, HourProxy hour, Boolean value){
	    		if (getUiHandlers() != null) {
	    			selectedHour = index;
	    			getUiHandlers().updateHourStatus(hour, value);
	    		}	    		
	    	}
	    });
	}

	@Override
	public void addHour(HourProxy hour) {
		// TODO Auto-generated method stub
		List<HourProxy> newHours = new ArrayList<HourProxy>();
		newHours.add(hour);
		tblHours.setRowData(tblHours.getRowCount()+1, newHours);
	}

	@Override
	public void refreshTable(HourProxy updatedHour) {
		// TODO Auto-generated method stub
		List<HourProxy> hours = new ArrayList<HourProxy>();
		hours.add(updatedHour);
        tblHours.setRowData(selectedHour, hours);
		tblHours.redraw();
		
		// Notify user
		Window.alert("Statut du type d'heure mis à jour.");
	}

	@Override
	public void setData(List<HourProxy> hours) {
		tblHours.setRowData(0, hours);
	}
}
