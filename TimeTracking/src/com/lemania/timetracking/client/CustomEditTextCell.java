package com.lemania.timetracking.client;

import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.ValueUpdater;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.NativeEvent;

public class CustomEditTextCell extends EditTextCell {
		//
	 	private boolean isFirst = true;

	    @Override
	    public void onBrowserEvent(Context context, Element parent, String value, NativeEvent event, ValueUpdater<String> valueUpdater) {
	        //
	    	if( event.getType().equals("click")) {
	        	if (isFirst) {
	        		super.onBrowserEvent(context, parent, value, event, valueUpdater);
	        		isFirst = false;
	        	}
	    	}
	    	else
	    		super.onBrowserEvent(context, parent, value, event, valueUpdater);
	    }

	    public void isFirst(Boolean isFirst) {
	        this.isFirst = isFirst;
	    }
}
