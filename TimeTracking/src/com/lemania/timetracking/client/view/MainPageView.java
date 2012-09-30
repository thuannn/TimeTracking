package com.lemania.timetracking.client.view;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Widget;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.client.uihandler.MainPageUiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.Label;

public class MainPageView extends ViewWithUiHandlers<MainPageUiHandler> implements MainPagePresenter.MyView {
	
	interface MainPageViewUiBinder extends UiBinder<Widget, MainPageView>{}
	private static MainPageViewUiBinder uiBinder = GWT.create(MainPageViewUiBinder.class);

	private final Widget widget;

	@UiField FlowPanel mainContentPanel;
	@UiField Button cmdEcolePage;
	@UiField Button cmdEcoleAdd;
	@UiField Button cmdHomepage;
	@UiField Button cmdTimeInput;
	@UiField Button cmdCours;
	@UiField Button cmdCoursAdd;
	@UiField Button cmdTypes;
	@UiField Button cmdTypesAdd;
	@UiField Button cmdProfs;
	@UiField Button cmdProfsAdd;
	@UiField Button cmdContact;
	@UiField Hyperlink cmdLogout;
	@UiField Label txtWelcome;
	
	public MainPageView() {		
		widget = uiBinder.createAndBindUi(this);
	}
	
	public interface Binder extends UiBinder<Widget, MainPageView> {
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@Override
	public void setInSlot(Object slot, Widget content){
		if (slot == MainPagePresenter.TYPE_SetMainContent) {
			setMainContent(content);
		} else {
			super.setInSlot(slot, content);
		}
	}
	
	private void setMainContent(Widget content) {
	    mainContentPanel.clear();
	    
	    if (content != null) {
	      mainContentPanel.add(content);
	    }
	}
	
	@UiHandler("cmdHomepage")
	void onCmdHomepageClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showHomepage();
	}
	
	@UiHandler("cmdEcolePage")
	void onCmdEcolePageClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showEcoleList();
	}
	
	@UiHandler("cmdEcoleAdd")
	void onCmdEcoleAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showEcoleAdd();
	}
	
	@UiHandler("cmdTimeInput")
	void onCmdTimeInputClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showTimeInput();
	}
	
	@UiHandler("cmdCours")
	void onCmdCoursClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showCoursList();
	}
	
	@UiHandler("cmdCoursAdd")
	void onCmdCoursAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showCoursAdd();
	}
	
	@UiHandler("cmdTypes")
	void onCmdTypesClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showTypeList();
	}
	
	@UiHandler("cmdTypesAdd")
	void onCmdTypesAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showTypeAdd();
	}
	
	@UiHandler("cmdProfs")
	void onCmdProfsClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showProfessorList();
	}
	
	@UiHandler("cmdProfsAdd")
	void onCmdProfsAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showProfessorAdd();
	}
	
	@UiHandler("cmdContact")
	void onCmdContactClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showContact();
	}
	
	@UiHandler("cmdLogout")
	void onCmdLogoutClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().logOut();
	}

	@Override
	public void showUserInfo() {
		txtWelcome.setText("Vous êtes connecté, Thuan!");
		cmdLogout.setText("Déconnection");
	}
}
