package com.lemania.timetracking.client.view;


import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.TimeTypeNames;
import com.lemania.timetracking.client.presenter.TimeInputPresenter;
import com.lemania.timetracking.client.uihandler.TimeInputUiHandler;
import com.lemania.timetracking.shared.CoursProxy;
import com.lemania.timetracking.shared.EcoleProxy;
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.ProfessorProxy;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory;
import com.lemania.timetracking.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.MouseDownEvent;
import com.google.gwt.event.logical.shared.CloseEvent;
import com.google.gwt.event.logical.shared.CloseHandler;
import com.google.gwt.user.client.ui.FlexTable;

public class TimeInputView extends ViewWithUiHandlers<TimeInputUiHandler> implements TimeInputPresenter.MyView {

	//
	
	private final Widget widget;
	private ProfessorProxy selectedProfessor;
	private int selectedProfessorIndex;
	
	private ListDataProvider<ProfessorProxy> professorProvider;
	private List<ProfessorProxy> currentProfList;
	
	String directorName = "";
	
	//

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
	
	@UiField DataGrid<ProfessorProxy> tblProfessors = new DataGrid<ProfessorProxy>();
	@UiField ListBox lstCourses;
	@UiField ListBox lstSchools;
	@UiField TextBox txtCoursTime;
	@UiField Label lblProfName;
	@UiField TextBox txtCoursNote;
	@UiField ListBox lstYear;
	@UiField ListBox lstMonth;
	@UiField TextBox txtMaladieNote;
	@UiField TextBox txtMaladieTime;
	@UiField TextBox txtFerieTime;
	@UiField TextBox txtFerieNote;
	@UiField TextBox txtPriveTime;
	@UiField TextBox txtPriveNote;
	@UiField TextBox txtSupervisionTime;
	@UiField TextBox txtSupervisionNote;
	@UiField TextBox txtFraisAmount;
	@UiField TextBox txtFraisNote;
	@UiField Button cmdSave;
	@UiField FlexTable tblHours;
	@UiField Label txtResponsable;
	
	@Override
	public void setEcoleList(List<EcoleProxy> ecoles) {
		lstSchools.clear();
		lstSchools.addItem("-","");
		for (int i=0; i<ecoles.size(); i++)
			lstSchools.addItem(ecoles.get(i).getSchoolName(), ecoles.get(i).getId().toString());		
	}

	@Override
	public void setCourseList(List<CoursProxy> cours) {
		lstCourses.clear();
		lstCourses.addItem("-","");
		for (int i=0; i<cours.size(); i++)
			lstCourses.addItem(cours.get(i).getSchoolName() + " - " +cours.get(i).getCoursNom(), cours.get(i).getId().toString());				
	}
	
	@Override
	public void setProfData(List<ProfessorProxy> profs) {
		currentProfList = profs;
		tblProfessors.setRowData(currentProfList);
	}

	@Override
	public void initializeValues(int currentMonth, int currentYear, boolean isAdmin, String directorName) {
		// Clear school list and course list
		lstSchools.clear();
		lstCourses.clear();
		
		clearProfTable();
		clearLogTable();
		
		// List of month, auto-select current month
		lstMonth.clear();
		for (int i=1; i <= 12; i++) {
			lstMonth.addItem( Integer.toString(i), Integer.toString(i));
			if (i == currentMonth)
				lstMonth.setSelectedIndex(i-1);
		}
		
		// List of year, auto-select current year
		lstYear.clear();
		for (int i=-2; i<2; i++) {
			lstYear.addItem( Integer.toString(i + currentYear), Integer.toString(i + currentYear));
			if ((i + currentYear) == currentYear)
				lstYear.setSelectedIndex(i+2);
		}
		
		// Set UI options
		initializeUI(isAdmin);
		
		// 
		lblProfName.setText("");
		
		//
		this.directorName = directorName;
		
		// 
		clearValues();
	}
	
	private void clearValues() {
		// clear text fields
		txtCoursTime.setText("");
		txtCoursNote.setText("");
		// Maladie
		txtMaladieTime.setText("");
		txtMaladieNote.setText("");
		// Fériés
		txtFerieTime.setText("");
		txtFerieNote.setText("");
		// Privé
		txtPriveTime.setText("");
		txtPriveNote.setText("");
		// Supervision	
		txtSupervisionTime.setText("");
		txtSupervisionNote.setText("");
		// Frais
		txtFraisAmount.setText("");
		txtFraisNote.setText("");
	}
	
	/***/
	
	@UiHandler("lstSchools")
	public void onLstAddEcoleChanged(ChangeEvent event) {
		clearProfTable();
		clearLogTable();
		if ( !lstSchools.getItemText(lstSchools.getSelectedIndex()).equals("-") ) {
			if (getUiHandlers() != null)
				getUiHandlers().loadCoursesBySchool(lstSchools.getValue(lstSchools.getSelectedIndex()));
		}
	}
	
	@UiHandler("lstYear")
	public void onLstYearChanged(ChangeEvent event) {
//		clearLogTable();
//		getUiHandlers().professorSelected(
//    			selectedProfessor, 
//    			lstCourses.getValue(lstCourses.getSelectedIndex()),
//    			lstYear.getItemText(lstYear.getSelectedIndex()),
//    			lstMonth.getItemText(lstMonth.getSelectedIndex()));
		
		/*Thuan - 17.07.2013 - Everytime the year or month value is changed, reload the professor list.
		 */
		reloadProfList();
	}
	
	@UiHandler("lstMonth")
	public void onLstMonthChanged(ChangeEvent event) {
//		clearLogTable();
//		getUiHandlers().professorSelected(
//    			selectedProfessor, 
//    			lstCourses.getValue(lstCourses.getSelectedIndex()),
//    			lstYear.getItemText(lstYear.getSelectedIndex()),
//    			lstMonth.getItemText(lstMonth.getSelectedIndex()));
		
		/*Thuan - 17.07.2013 - Everytime the year or month value is changed, reload the professor list.
		 */
		reloadProfList();
	}
	
	@Override
	public void clearProfTable() {
		List<ProfessorProxy> temp = new ArrayList<ProfessorProxy>();
		professorProvider = new ListDataProvider<ProfessorProxy>();
		professorProvider.setList(temp);
		professorProvider.addDataDisplay(tblProfessors);
		
		tblProfessors.getSelectionModel().setSelected(selectedProfessor, false);
	}
	
	@Override
	public void clearLogTable() {
		//
		clearValues();
		//
		tblHours.removeAllRows();
	}
	

	@UiHandler("lstCourses")
	public void onLstCoursesChanged(ChangeEvent event) {
		//
		reloadProfList();
	}
	
	
	public void reloadProfList(){
		clearProfTable();
		clearLogTable();
		clearValues();
		lblProfName.setText("");
		if ( !lstCourses.getItemText(lstCourses.getSelectedIndex()).equals("-") ) {
			if (getUiHandlers() != null)
				getUiHandlers().loadProfessorsByCourse(
						lstCourses.getValue(lstCourses.getSelectedIndex()),
						lstYear.getItemText(lstYear.getSelectedIndex()),
		    			lstMonth.getItemText(lstMonth.getSelectedIndex())
				);
		}
	}
	
	
	@Override
	public void initializeProfTable() {
		// Initialize table structure of Professor table
		TextColumn<ProfessorProxy> colName = new TextColumn<ProfessorProxy>() {
	      @Override
	      public String getValue(ProfessorProxy object) {
	        return object.getProfName();
	      }
	    };
	    tblProfessors.addColumn(colName, "Nom");
	    
	    // Initialize table structure of Professor table
 		TextColumn<ProfessorProxy> colDate = new TextColumn<ProfessorProxy>() {
 	      @Override
 	      public String getValue(ProfessorProxy object) {
 	        return object.getLogModifyDate();
 	      }
 	    };
 	    tblProfessors.addColumn(colDate, "Date de modification");
 	    tblProfessors.setColumnWidth(colDate, 40, Unit.PCT);
    
	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<ProfessorProxy> selectionModel = new SingleSelectionModel<ProfessorProxy>() {
	    	@Override
	    	public void setSelected(ProfessorProxy object, boolean selected) {	    		
    	      	super.setSelected(object, selected);
	    	}
	    };
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	    	public void onSelectionChange(SelectionChangeEvent event) {
	    		selectedProfessor = selectionModel.getSelectedObject();
    			if (selectedProfessor != null) {
    				selectedProfessorIndex = currentProfList.indexOf(selectedProfessor);
    				lblProfName.setText(selectedProfessor.getProfName());
    				txtResponsable.setText( selectedProfessor.getManagerName() );
    				clearValues();
    				getUiHandlers().professorSelected(
						selectedProfessor, 
						lstCourses.getValue(lstCourses.getSelectedIndex()),
						lstYear.getItemText(lstYear.getSelectedIndex()),
						lstMonth.getItemText(lstMonth.getSelectedIndex()));
    			}
	      	}
	    });
	    tblProfessors.setSelectionModel(selectionModel);
	}
	

	@Override
	public void setLogData(List<LogProxy> logs, Boolean logUpdated) {
		for (LogProxy log : logs) {
			// Cours
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.cours)) {
				txtCoursTime.setText(Double.toString(log.getHour()));
				txtCoursNote.setText(log.getMemo());
			}
			// Maladie
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.maladie)) {
				txtMaladieTime.setText(Double.toString(log.getHour()));
				txtMaladieNote.setText(log.getMemo());
			}
			// Fériés
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.ferie)) {
				txtFerieTime.setText(Double.toString(log.getHour()));
				txtFerieNote.setText(log.getMemo());
			}
			// Privé
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.prive)) {
				txtPriveTime.setText(Double.toString(log.getHour()));
				txtPriveNote.setText(log.getMemo());
			}
			// Supervision
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.supervision)) {
				txtSupervisionTime.setText(Double.toString(log.getHour()));
				txtSupervisionNote.setText(log.getMemo());
			}
			// Frais
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.frais)) {
				txtFraisAmount.setText(Double.toString(log.getHour()));
				txtFraisNote.setText(log.getMemo());
			}
		}
		
		// Show date
		if (selectedProfessor != null && logUpdated) {
			// Show the update time in professors list
			try {
				selectedProfessor.setLogModifyDate( logs.get(0).getModifyDate() );
			} catch (Exception e) {
				ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
				ProfessorRequestContext rc = rf.professorRequest();
				ProfessorProxy editProf = selectedProfessor;
				ProfessorProxy prof = rc.edit( editProf );
				prof.setLogModifyDate( logs.get(0).getModifyDate() );
				currentProfList.remove( selectedProfessorIndex );
				currentProfList.add( selectedProfessorIndex, prof );
				tblProfessors.setRowData( currentProfList );
				tblProfessors.getSelectionModel().setSelected(prof, true);
			}
		}
	}
	

	@Override
	public void initializeLogTable() {
		// Datagrid removed, not being used	   
	}

	@Override
	public void setNotification(String code) {
		// This function is not being used
	}
	
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		
		// if there is nothing, set 0
		if (txtCoursTime.getText().equals("")) txtCoursTime.setText("0.0");
		if (txtMaladieTime.getText().equals("")) txtMaladieTime.setText("0.0");
		if (txtFerieTime.getText().equals("")) txtFerieTime.setText("0.0");
		if (txtPriveTime.getText().equals("")) txtPriveTime.setText("0.0");
		if (txtSupervisionTime.getText().equals("")) txtSupervisionTime.setText("0.0");
		if (txtFraisAmount.getText().equals("")) txtFraisAmount.setText("0.0");
		
		// validate numbers
		if (!txtCoursTime.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") ||
			!txtMaladieTime.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") || 
			!txtFerieTime.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") ||
			!txtPriveTime.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") ||
			!txtSupervisionTime.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") ||
			!txtFraisAmount.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") ) {
			Window.alert("Veuillez introduire des heures en chiffre.");
			return;
		}
		
		getUiHandlers().updateLogTime (
				selectedProfessor, 
				lstCourses.getValue(lstCourses.getSelectedIndex()),
    			lstYear.getItemText(lstYear.getSelectedIndex()),
    			lstMonth.getItemText(lstMonth.getSelectedIndex()),
				txtCoursTime.getText(), txtCoursNote.getText(), 
				txtMaladieTime.getText(), txtMaladieNote.getText(), 
				txtFerieTime.getText(), txtFerieNote.getText(), 
				txtPriveTime.getText(), txtPriveNote.getText(), 
				txtSupervisionTime.getText(), txtSupervisionNote.getText(), 
				txtFraisAmount.getText(), txtFraisNote.getText() );
	}

	@Override
	public void initializeUI(boolean isAdmin) {
		// let admin choose year and month
		lstMonth.setEnabled(isAdmin);
		lstYear.setEnabled(isAdmin);
	}
	
	//
	@UiHandler("txtPriveTime")
	void onTxtPriveTimeChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtFerieNote")
	void onTxtFerieNoteChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtSupervisionTime")
	void onTxtSupervisionTimeChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtPriveNote")
	void onTxtPriveNoteChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtMaladieNote")
	void onTxtMaladieNoteChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtCoursTime")
	void onTxtCoursTimeChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtFraisNote")
	void onTxtFraisNoteChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtFraisAmount")
	void onTxtFraisAmountChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtFerieTime")
	void onTxtFerieTimeChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtCoursNote")
	void onTxtCoursNoteChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtMaladieTime")
	void onTxtMaladieTimeChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	@UiHandler("txtSupervisionNote")
	void onTxtSupervisionNoteChange(ChangeEvent event) {
		getUiHandlers().toggleEditStatus(true);
	}
	
	@UiHandler("txtCoursNote")
	void onTxtCoursNoteMouseDown(MouseDownEvent event) {
		//
		showNoteBox((TextBox)event.getSource());
	}
	
	@UiHandler("txtMaladieNote")
	void onTxtMaladieNoteMouseDown(MouseDownEvent event) {
		//
		showNoteBox((TextBox)event.getSource());
	}
	
	@UiHandler("txtFerieNote")
	void onTxtFerieNoteMouseDown(MouseDownEvent event) {
		//
		showNoteBox((TextBox)event.getSource());
	}
	
	@UiHandler("txtPriveNote")
	void onTxtPriveNoteMouseDown(MouseDownEvent event) {
		//
		showNoteBox((TextBox)event.getSource());
	}
	
	@UiHandler("txtSupervisionNote")
	void onTxtSupervisionNoteMouseDown(MouseDownEvent event) {
		//
		showNoteBox((TextBox)event.getSource());
	}
	
	@UiHandler("txtFraisNote")
	void onTxtFraisNoteMouseDown(MouseDownEvent event) {
		//
		showNoteBox((TextBox)event.getSource());
	}

	
	/*
	 * Show popup to type comments
	 * */
	private void showNoteBox( final TextBox tb ) {
		//
		tb.setEnabled(false);
		final PopupPanel popup = new PopupPanel();
		VerticalPanel vp = new VerticalPanel();
		final TextArea ta = new TextArea();
		ta.setSize("400px", "300px");
		ta.setText( tb.getText() );
		//
		Button closeButton = new Button("Valider");
		closeButton.setStyleName("button-highlight");
		closeButton.addClickHandler( new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				//
				popup.hide();
				tb.setEnabled(true);
			}
			
		});
		//
		vp.add(ta);
		vp.add(closeButton);
		popup.add(vp);
		popup.setGlassEnabled(true);
		popup.setAutoHideEnabled(false);
		//
		popup.addCloseHandler( new CloseHandler<PopupPanel>(){

			@Override
			public void onClose(CloseEvent<PopupPanel> event) {
				//
				tb.setText( ta.getText() );
			}
			
		});
		//
		popup.center();
	}

	
	/*
	 * Show the log data of other departments
	 * */
	@Override
	public void setOtherLogData(List<LogProxy> logs, Boolean logUpdated) {
		//
		LogProxy log;
		LogProxy prevLog = null;
		String prevCourse = "";
		int row = -1;
		int lastColumn = -1;
		boolean logStatus = true;
		
		//
		// Clear the current table data
		tblHours.removeAllRows();
		//
		for (int i=0; i < logs.size(); i++ ) {
			//
			log = logs.get(i);
			//
			// If the department name changes, add the approval checkbox to last column
			if ( prevCourse.equals("") || !prevCourse.equals(logs.get(i).getCourseName()) ) {
				//
				if ( ! prevCourse.equals("") ) {
					//
					if (lastColumn == -1)
						lastColumn = tblHours.getCellCount(0);
					//
					createCheckBox( prevLog, row, lastColumn, logStatus );
				}
				//
				prevCourse = log.getCourseName();
				prevLog = log;
				logStatus = true;
				row++;
			}
			//
			tblHours.setText(row, 0, log.getCourseName() );
			// Cours
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.cours)) {
				tblHours.setText( row, 1, Double.toString(log.getHour()) );
				logStatus = logStatus & log.isApproved();
			}
			// Maladie
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.maladie)) {
				tblHours.setText( row, 2, Double.toString(log.getHour()) );
				logStatus = logStatus & log.isApproved();
			}
			// Fériés
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.ferie)) {
				tblHours.setText( row, 3, Double.toString(log.getHour()) );
				logStatus = logStatus & log.isApproved();
			}
			// Privé
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.prive)) {
				tblHours.setText( row, 4, Double.toString(log.getHour()) );
				logStatus = logStatus & log.isApproved();
			}
			// Supervision
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.supervision)) {
				tblHours.setText( row, 5, Double.toString(log.getHour()) );
				logStatus = logStatus & log.isApproved();
			}
			// Frais
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.frais)) {
				tblHours.setText( row, 6, Double.toString(log.getHour()) );
				logStatus = logStatus & log.isApproved();
			}
			
			//
			// if it's the last log, add the checkbox and Course ID
			if ( i == logs.size()-1 ) {
				//
				if (lastColumn == -1)
					lastColumn = tblHours.getCellCount(0);
				//
				createCheckBox( log, row, lastColumn, logStatus );
			}
		}
		//
		styleTable();
	}
	
	
	/*
	 * */
	void createCheckBox( LogProxy log, int row, int col, boolean status ) {
		//
		CheckBox cb;
		cb = new CheckBox("");
		cb.setValue( status );
		cb.setFormValue( log.getCourseId() );
		//
		cb.addClickHandler( new ClickHandler () {

			@Override
			public void onClick(ClickEvent event) {
				//
				if ( ! selectedProfessor.getManagerName().equals(directorName)) {
					((CheckBox) event.getSource()).setValue( !((CheckBox) event.getSource()).getValue() );
					return;
				}
				//
				getUiHandlers().updateLogStatus(
						selectedProfessor, 
						((CheckBox) event.getSource()).getFormValue(),
						lstYear.getItemText(lstYear.getSelectedIndex()),
						lstMonth.getItemText(lstMonth.getSelectedIndex()),
						((CheckBox) event.getSource()).getValue() );
			}
		});
		//
		tblHours.setWidget(row, col, cb );
		tblHours.getWidget(row, col).setVisible( selectedProfessor.getManagerName().equals(directorName) );
	}
	
	
	/*
	 * 
	 * */
	public void styleTable() {
		//
		for ( int row=0; row < tblHours.getRowCount(); row++ ) {
			for (int col=0; col < tblHours.getCellCount(0); col++ ) {
				tblHours.getCellFormatter().setStyleName(row, col, "hourCell");
			}
		}
	}
}
