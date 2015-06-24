package com.lemania.timetracking.shared.service;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.timetracking.server.service.ContactDao;
import com.lemania.timetracking.server.service.DaoServiceLocator;
import com.lemania.timetracking.shared.ProfessorProxy;

public interface ContactRequestFactory extends RequestFactory {
	//
	@Service(value=ContactDao.class, locator=DaoServiceLocator.class)
	interface ContactRequestContext extends RequestContext {
		//
		Request<Void> sendEmail( String lastName, String firstName, String email, String message );
		
		Request<Void> sendEmail ( 
				String messageSubject,
				String from, String to, String replyto, String cc,
				String messageBody );
		
		Request<Void> sendSMS ( 
				String number,
				String messageBody );
		
		Request<Void> sendNotification( String profId, String courseId, String year, String month, boolean status, boolean isWithLog );
	}
	
	ContactRequestContext contactRequest();
}
