package com.lemania.timetracking.client.view;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.CoursPresenter;
import com.lemania.timetracking.client.presenter.CoursPresenter.MyView;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;

public class CoursView extends ViewImpl implements CoursPresenter.MyView {

	private final Widget widget;

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
	@UiField(provided=true) DataGrid<Object> dataGrid = new DataGrid<Object>();
}
