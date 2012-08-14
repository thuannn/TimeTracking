package com.lemania.timetracking.client;

import com.google.gwt.core.client.EntryPoint;
import com.lemania.timetracking.client.gin.ClientGinjector;
import com.google.gwt.core.client.GWT;
import com.gwtplatform.mvp.client.DelayedBindRegistry;

public class TimeTracking implements EntryPoint {

	public final ClientGinjector ginjector = GWT.create(ClientGinjector.class);

	@Override
	public final void onModuleLoad() {
		// This is required for Gwt-Platform proxy's generator
		DelayedBindRegistry.bind(ginjector);
	
		ginjector.getPlaceManager().revealCurrentPlace();
	}
}
