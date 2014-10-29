package com.lemania.timetracking.server.service;

import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.googlecode.objectify.ObjectifyService;
import com.lemania.timetracking.server.Assignment;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.Ecole;
import com.lemania.timetracking.server.Log;
import com.lemania.timetracking.server.LogType;
import com.lemania.timetracking.server.Professor;
import com.lemania.timetracking.server.SettingOption;
import com.lemania.timetracking.server.User;

public class MyDAOBase {
	
	public static Objectify ofy() {
        return ObjectifyService.ofy();
    }

    public static ObjectifyFactory factory() {
        return ObjectifyService.factory();
    }

	static {
		try {
        	ObjectifyService.register(Assignment.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
			ObjectifyService.register(SettingOption.class);
		} catch (Exception e){
			// do nothing
		}
		
		try {
    		ObjectifyService.register(User.class);        
    	} catch (Exception e) {
    		// do nothing
    	}
		
		try {
        	ObjectifyService.register(Professor.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(LogType.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
			ObjectifyService.register(Log.class);
		} catch (Exception e){
			// do nothing
		}
		
		try {
        	ObjectifyService.register(Ecole.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Cours.class);
        } catch (Exception e) {
        	// do nothing
        }
	}
}
