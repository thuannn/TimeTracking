package com.lemania.timetracking.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.lemania.timetracking.shared.HourProxy;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class HourAddedEvent extends GwtEvent<HourAddedEvent.HourAddedHandler> {

	public static Type<HourAddedHandler> TYPE = new Type<HourAddedHandler>();
	private HourProxy hp;

	public interface HourAddedHandler extends EventHandler {
		void onHourAdded(HourAddedEvent event);
	}

	public interface HourAddedHasHandlers extends HasHandlers {
		HandlerRegistration addHourAddedHandler(HourAddedHandler handler);
	}

	public HourAddedEvent(HourProxy hp) {
		this.hp = hp;
	}

	public HourProxy getHp() {
		return hp;
	}

	@Override
	protected void dispatch(HourAddedHandler handler) {
		handler.onHourAdded(this);
	}

	@Override
	public Type<HourAddedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<HourAddedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source, HourProxy hp) {
		source.fireEvent(new HourAddedEvent(hp));
	}
}
