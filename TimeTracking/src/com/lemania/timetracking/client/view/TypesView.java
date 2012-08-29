package com.lemania.timetracking.client.view;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.TypesPresenter;
import com.lemania.timetracking.shared.CoursProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;

public class TypesView extends ViewImpl implements TypesPresenter.MyView {

	private final Widget widget;

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
	
	@UiField(provided=true) DataGrid<Object> dataGrid = new DataGrid<Object>();
	
	@Override
	public void initializeTable() {
		//
	}
}
