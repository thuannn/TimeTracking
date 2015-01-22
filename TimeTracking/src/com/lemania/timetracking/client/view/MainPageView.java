package com.lemania.timetracking.client.view;

import java.util.Iterator;

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
import com.google.gwt.user.client.ui.FocusWidget;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Label;
import com.lemania.timetracking.client.CurrentUser;
import com.google.gwt.user.client.ui.Tree;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.Image;

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
	@UiField Button cmdExtractData;
	@UiField Button cmdUserMgt;
	@UiField Label lblCurrentMonth;
	@UiField Button cmdRptByDept;
	@UiField Button cmdRptByMonth;
	@UiField Button button;
	@UiField Tree treeMenu;
	@UiField Image imgProgressBar;
	@UiField Button cmdSettings;
	@UiField DockPanel dockPanel;
	@UiField Button cmdPassword;
	
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
	public void setInSlot(Object slot, IsWidget content){
		if (slot == MainPagePresenter.TYPE_SetMainContent) {
			setMainContent(content);
		} else {
			super.setInSlot(slot, content);
		}
	}
	
	private void setMainContent(IsWidget content) {
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
	
	@UiHandler("cmdExtractData")
	void onCmdExtractDataClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showExtractDataForm();
	}
	
	@UiHandler("cmdContact")
	void onCmdContactClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showContact();
	}
	
	@UiHandler("cmdLogout")
	void onCmdLogoutClicked(ClickEvent event){
		if (getUiHandlers() != null) {			
			getUiHandlers().logOut();
		}
	}
	
	@UiHandler("cmdUserMgt")
	void onCmdUserMgtClicked(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showUserManagement();
		}
	}
	
	@UiHandler("cmdRptByDept")
	void onCmdRptByDeptClicked(ClickEvent event){
		if (getUiHandlers() != null) {
			getUiHandlers().showRptByDept();
		}
	}
	
	@UiHandler("cmdRptByMonth")
	void onCmdRptBySchoolClicked(ClickEvent event){
		if (getUiHandlers() != null) {
			getUiHandlers().showRptByMonth();
		}
	}
	
	@UiHandler("cmdSettings")
	void onCmdSettingsClicked(ClickEvent event){
		if (getUiHandlers() != null) {
			getUiHandlers().showSettingsScreen();
		}
	}

	@Override
	public void showUserInfo(CurrentUser currentUser) {
		txtWelcome.setText("Vous êtes connecté(e), " + currentUser.getFullName() + " !");
		cmdLogout.setText("Déconnexion");
		lblCurrentMonth.setText( "Le mois actuel: " + " " + Integer.toString(currentUser.getCurrentMonth()) + "/" + 
									Integer.toString(currentUser.getCurrentYear()) );
	}

	@Override
	public void initializeUi(CurrentUser currentUser) {
		if ( currentUser!=null && currentUser.isLoggedIn() ){
			showUserInfo(currentUser);
			// Set tree menu		
			dockPanel.add(treeMenu, DockPanel.WEST);
			dockPanel.setCellWidth(treeMenu, "250px");
		}
		else {
			txtWelcome.setText("");
			cmdLogout.setText("");
			lblCurrentMonth.setText("");
			dockPanel.remove(treeMenu);
		}
		
		imgProgressBar.setVisible(false);
	}
	
	@UiHandler("button")
	void onButtonClick(ClickEvent event) {
		treeMenu.setVisible(!treeMenu.isVisible());
		
		if (!treeMenu.isVisible()) {
			dockPanel.remove(treeMenu);
		}
		else {
			dockPanel.add(treeMenu, DockPanel.WEST);
			dockPanel.setCellWidth(treeMenu, "250px");
		}
	}

	@Override
	public void showProgressBar(boolean visible) {
		imgProgressBar.setVisible(visible);
	}

	@Override
	public void enableMainPanel(Boolean enabled) {
		enableAllChildren(enabled, mainContentPanel);
	}
	
	private void enableAllChildren(boolean enable, Widget widget)
	{
	    if (widget instanceof HasWidgets)
	    {
	        Iterator<Widget> iter = ((HasWidgets)widget).iterator();
	        while (iter.hasNext())
	        {
	            Widget nextWidget = iter.next();
	            enableAllChildren(enable, nextWidget);
	            if (nextWidget instanceof FocusWidget)
	            {
	                ((FocusWidget)nextWidget).setEnabled(enable);
	            }
	        }
	    }
	}
	
	
	@UiHandler("cmdPassword")
	void onCmdPasswordClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showFrmPassword();
		}
	}
	
	
	/*
	 * */
	@UiHandler("cmdRptByStatus")
	void onCmdRptByStatusClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showRptByStatus();
		}
	}
}
