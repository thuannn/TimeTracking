package com.lemania.timetracking.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.timetracking.client.presenter.ExtractDataPresenter;
import com.lemania.timetracking.shared.LogProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;

public class ExtractDataView extends ViewImpl implements
		ExtractDataPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, ExtractDataView> {
	}

	@Inject
	public ExtractDataView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField(provided=true) DataGrid<LogProxy> tblLog = new DataGrid<LogProxy>();
	
	@Override
	public void initializeTable() {
		tblLog.setWidth("100%");
		
		TextColumn<LogProxy> colEcole = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return object.getSchoolName();
			}
	    };
	    tblLog.addColumn(colEcole, "Ecole");
	    tblLog.setColumnWidth(colEcole, 15, Unit.PCT);
	    
	    TextColumn<LogProxy> colProf = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return object.getProfName();
			}
	    };
	    tblLog.addColumn(colProf, "Professeur");
	    tblLog.setColumnWidth(colProf, 25, Unit.PCT);
	    
	    TextColumn<LogProxy> colYear = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return String.valueOf(object.getYear());
			}
	    };
	    tblLog.addColumn(colYear, "Year");
	    tblLog.setColumnWidth(colYear, 10, Unit.PCT);
	    
	    TextColumn<LogProxy> colMonth = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return String.valueOf(object.getMonth());
			}
	    };
	    tblLog.addColumn(colMonth, "Month");
	    tblLog.setColumnWidth(colMonth, 10, Unit.PCT);
	    
	    TextColumn<LogProxy> colCourse = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return object.getCourseName();
			}
	    };
	    tblLog.addColumn(colCourse, "Cours");
	    tblLog.setColumnWidth(colCourse, 20, Unit.PCT);
		
	    TextColumn<LogProxy> colType = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return object.getTypeName();
			}
	    };
	    tblLog.addColumn(colType, "Type");
	    tblLog.setColumnWidth(colType, 10, Unit.PCT);
	    
	    TextColumn<LogProxy> colHour = new TextColumn<LogProxy>() {
			@Override
			public String getValue(LogProxy object) {
				return String.valueOf(object.getHour());
			}
	    };
	    tblLog.addColumn(colHour, "Heur");
	    tblLog.setColumnWidth(colHour, 10, Unit.PCT);
	}

	@Override
	public void setLogData(List<LogProxy> logs) {
		tblLog.setRowCount(logs.size(), true);
		tblLog.setRowData(logs);
		tblLog.setRowCount(logs.size());
	}
}
