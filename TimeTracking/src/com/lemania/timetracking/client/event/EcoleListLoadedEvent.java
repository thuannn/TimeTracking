package com.lemania.timetracking.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import java.util.List;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;
import com.lemania.timetracking.shared.EcoleProxy;

public class EcoleListLoadedEvent extends
		GwtEvent<EcoleListLoadedEvent.EcoleListLoadedHandler> {

	public static Type<EcoleListLoadedHandler> TYPE = new Type<EcoleListLoadedHandler>();
	private List<EcoleProxy> ecoleList;

	public interface EcoleListLoadedHandler extends EventHandler {
		void onEcoleListLoaded(EcoleListLoadedEvent event);
	}

	public interface EcoleListLoadedHasHandlers extends HasHandlers {
		HandlerRegistration addEcoleListLoadedHandler(EcoleListLoadedHandler handler);
	}

	public EcoleListLoadedEvent(List<EcoleProxy> ecoleList) {
		this.ecoleList = ecoleList;
	}

	public List<EcoleProxy> getEcoleList() {
		return ecoleList;
	}

	@Override
	protected void dispatch(EcoleListLoadedHandler handler) {
		handler.onEcoleListLoaded(this);
	}

	@Override
	public Type<EcoleListLoadedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<EcoleListLoadedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source, List<EcoleProxy> ecoleList) {
		source.fireEvent(new EcoleListLoadedEvent(ecoleList));
	}
}
