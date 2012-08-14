package com.lemania.timetracking.client.view;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.EcoleAddPresenter;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.TextBox;

public class EcoleAddView extends ViewImpl implements EcoleAddPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, EcoleAddView> {
	}

	@Inject
	public EcoleAddView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField TextBox txtNom;
	@UiField TextBox txtAdresse;
}
