package com.lemania.timetracking.client.view;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.TimeInputPresenter;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.client.ui.ListBox;

public class TimeInputView extends ViewImpl implements
		TimeInputPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, TimeInputView> {
	}

	@Inject
	public TimeInputView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<Object> tblProfesseurs = new DataGrid<Object>();
	@UiField ListBox lstCourses;
	@UiField(provided=true) DataGrid<Object> dataGrid = new DataGrid<Object>();
	@UiField ListBox lstYear;
	@UiField ListBox lstMonth;
	@UiField ListBox lstSchools;
}
