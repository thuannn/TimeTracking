package com.lemania.timetracking.client.view;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.EcolePresenter;

public class EcoleView extends ViewImpl implements EcolePresenter.MyView {

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
}
