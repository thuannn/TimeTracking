package com.lemania.timetracking.client.view;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.CoursAddPresenter;
import com.lemania.timetracking.client.uihandler.CoursAddUiHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.CheckBox;

public class CoursAddView extends ViewWithUiHandlers<CoursAddUiHandler> implements CoursAddPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, CoursAddView> {
	}

	@Inject
	public CoursAddView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField Button cmdAnnuler;
	@UiField Button cmdAjouter;
	@UiField TextBox txtCoursNom;
	@UiField CheckBox chkActif;
	
	@UiHandler("cmdAnnuler")
	void onCmdAnnulerClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().coursAddCancel();
	}
	
	@UiHandler("cmdAjouter")
	void onCmdAjouterClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().coursAdd(txtCoursNom.getText().trim(), chkActif.getValue());
	}
}
