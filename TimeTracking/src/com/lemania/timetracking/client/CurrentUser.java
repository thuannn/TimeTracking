/**
 * Copyright 2011 ArcBees Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package com.lemania.timetracking.client;

import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.HasHandlers;
import com.google.inject.Inject;
import com.lemania.timetracking.client.event.CurrentUserChangedEvent;

/**
 * This is a basic class that holds the privileges of the user
 * currently logged in.
 *
 * @author Philippe Beaudoin
 */
public class CurrentUser implements HasHandlers {

  private boolean isAdmin = true;
  private boolean isLoggedIn = true;

  private final EventBus eventBus;

  @Inject
  public CurrentUser(EventBus eventBus) {
    this.eventBus = eventBus;
  }

  public void setAdmin(boolean isAdmin) {
    this.isAdmin = isAdmin;    
    CurrentUserChangedEvent.fire(this);
  }
  
  public void setLoggedIn(boolean isLoggedIn) {
	    this.isLoggedIn = isLoggedIn;    
	    CurrentUserChangedEvent.fire(this);
  }

  public boolean isLoggedIn() {
    return isLoggedIn;
  }
  
  public boolean isAdmin() {
	  return isAdmin;
  }

  @Override
  public void fireEvent(GwtEvent<?> event) {
    eventBus.fireEvent(event);
  }
}
