package com.lemania.timetracking.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;

public class CurrentUserChangedEvent extends
		GwtEvent<CurrentUserChangedEvent.CurrentUserChangedHandler> {

	public static Type<CurrentUserChangedHandler> TYPE = new Type<CurrentUserChangedHandler>();

	public interface CurrentUserChangedHandler extends EventHandler {
		void onCurrentUserChanged(CurrentUserChangedEvent event);
	}

	public CurrentUserChangedEvent() {
	}

	@Override
	protected void dispatch(CurrentUserChangedHandler handler) {
		handler.onCurrentUserChanged(this);
	}

	@Override
	public Type<CurrentUserChangedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<CurrentUserChangedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new CurrentUserChangedEvent());
	}
}
