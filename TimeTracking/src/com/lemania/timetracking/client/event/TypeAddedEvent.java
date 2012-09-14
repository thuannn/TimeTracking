package com.lemania.timetracking.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.lemania.timetracking.shared.TypeProxy;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class TypeAddedEvent extends GwtEvent<TypeAddedEvent.TypeAddedHandler> {

	public static Type<TypeAddedHandler> TYPE = new Type<TypeAddedHandler>();
	private TypeProxy hp;

	public interface TypeAddedHandler extends EventHandler {
		void onHourAdded(TypeAddedEvent event);
	}

	public interface HourAddedHasHandlers extends HasHandlers {
		HandlerRegistration addTypeAddedHandler(TypeAddedHandler handler);
	}

	public TypeAddedEvent(TypeProxy hp) {
		this.hp = hp;
	}

	public TypeProxy getHp() {
		return hp;
	}

	@Override
	protected void dispatch(TypeAddedHandler handler) {
		handler.onHourAdded(this);
	}

	@Override
	public Type<TypeAddedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<TypeAddedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source, TypeProxy hp) {
		source.fireEvent(new TypeAddedEvent(hp));
	}
}
