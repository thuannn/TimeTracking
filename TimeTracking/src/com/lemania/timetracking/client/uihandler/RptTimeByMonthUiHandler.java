package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface RptTimeByMonthUiHandler extends UiHandlers {
	public void onMonthChanged(int selectedYear, int selectedMonth);
}
