package com.lemania.timetracking.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.EcolePresenter;
import com.lemania.timetracking.client.uihandler.EcoleListUiHandler;
import com.lemania.timetracking.shared.EcoleProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;

public class EcoleView extends ViewWithUiHandlers<EcoleListUiHandler> implements EcolePresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, EcoleView> {
	}

	@Inject
	public EcoleView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField(provided=true) DataGrid<EcoleProxy> tblEcoles = new DataGrid<EcoleProxy>();

	@Override
	public void setData(List<EcoleProxy> ecoleList) {
		 // Add a text column to show the name.
	    TextColumn<EcoleProxy> colName = new TextColumn<EcoleProxy>() {
	      @Override
	      public String getValue(EcoleProxy object) {
	        return object.getSchoolName();
	      }
	    };
	    tblEcoles.addColumn(colName, "Nom");
	    
	    TextColumn<EcoleProxy> colAddress = new TextColumn<EcoleProxy>() {
	      @Override
	      public String getValue(EcoleProxy object) {
	        return object.getSchoolAddress();
	      }
	    };
	    tblEcoles.addColumn(colAddress, "Adresse");
	    
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<EcoleProxy, Boolean> colActive = new Column<EcoleProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(EcoleProxy ecole){
	    		return ecole.getSchoolStatus();
	    	}
	    };
	    tblEcoles.addColumn(colActive, "Activ�e");
	    
	    
		tblEcoles.setRowData(0, ecoleList);
	}

	@Override
	public void addEcole(EcoleProxy newEcole) {
		// TODO Auto-generated method stub
		List<EcoleProxy> newEcoles = new ArrayList<EcoleProxy>();
		newEcoles.add(newEcole);
		tblEcoles.setRowData(tblEcoles.getRowCount()+1, newEcoles);
	}
}
