package com.lemania.timetracking.client.event;

import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.HasHandlers;
import com.google.web.bindery.event.shared.HandlerRegistration;

public class LoadAllProfessorLogsEvent extends GwtEvent<LoadAllProfessorLogsEvent.LoadAllProfessorLogsHandler> {
    private static Type<LoadAllProfessorLogsHandler> TYPE = new Type<LoadAllProfessorLogsHandler>();
    
    //
    private String profId = ""; 
    private int year = -1;
    private int month = -1;
    
    public interface LoadAllProfessorLogsHandler extends EventHandler {
        void onLoadAllProfessorLogs(LoadAllProfessorLogsEvent event);
    }
    
    public interface LoadAllProfessorLogsHandlers extends HasHandlers {
        HandlerRegistration addLoadAllProfessorLogsHandler(LoadAllProfessorLogsHandler handler);
    }
    
    private String message = "";
   
    public LoadAllProfessorLogsEvent(final String message) {
        this.message = message;
    }
    
    public LoadAllProfessorLogsEvent(String profId, int year, int month) {
    	//
        this.profId = profId;
        this.year = year;
        this.month = month;
    }

    public static Type<LoadAllProfessorLogsHandler> getType() {
        return TYPE;
    }

    @Override
    protected void dispatch(final LoadAllProfessorLogsHandler handler) {
        handler.onLoadAllProfessorLogs(this);
    }

    @Override
    public Type<LoadAllProfessorLogsHandler> getAssociatedType() {
        return TYPE;
    }
    
    public String getMessage() {
        return this.message;
    }

	public static Type<LoadAllProfessorLogsHandler> getTYPE() {
		return TYPE;
	}

	public static void setTYPE(Type<LoadAllProfessorLogsHandler> tYPE) {
		TYPE = tYPE;
	}

	public String getProfId() {
		return profId;
	}

	public void setProfId(String profId) {
		this.profId = profId;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}