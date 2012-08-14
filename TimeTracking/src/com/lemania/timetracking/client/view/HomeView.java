package com.lemania.timetracking.client.view;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.HomePresenter;

public class HomeView extends ViewImpl implements HomePresenter.MyView {
	
	private static HomeViewUiBinder uiBinder = GWT.create(HomeViewUiBinder.class);
	interface HomeViewUiBinder extends UiBinder<Widget, HomeView> {}

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, HomeView> {
	}

	@Inject
	public HomeView(final Binder binder) {
		widget = uiBinder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
}
