package com.lemania.timetracking.server.service;

import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.timetracking.server.Cours;
import com.lemania.timetracking.server.Professor;
import com.lemania.timetracking.server.User;


public class ContactDao extends MyDAOBase {
	
	/*
	 * */
	public void sendEmail (String firstName, String lastName, String email, String message ) {
		//
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);

        String msgBody = "Email : " + email + "\n\nMessage : " + message;

        try {
	        Message msg = new MimeMessage(session);
	        //
	        msg.setFrom(new InternetAddress("thuannn@gmail.com", "Lemania eProfil"));
	        //
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("Thuan.Nguyen@lemania.ch", "Thuan NGUYEN"));
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("Cindy.Clemence@lemania.ch", "Cindy CLEMENCE"));
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("Olga.Theofanidis@lemania.ch", "Olga THEOFANIDIS"));
	        //
	        // Reply to
 	        Address[] rraa = new Address[1];
 	        rraa[0] = new InternetAddress( email, email );
	        msg.setReplyTo( rraa );
	        //
	        msg.setSubject("Nouveau message de "+ firstName + " " + lastName +" depuis eProfil");
	        msg.setText( msgBody );
	        //
	        Transport.send( msg );
	    } catch (Exception e) {
	    	throw new RuntimeException(e);
	    }
	}
	
	
	/*
	 * */
	public void sendNotification( String profId, String courseId, String year, String month, boolean status) {
		//
		User directorTo;
		Professor prof = ofy().load().key( Key.create(Professor.class, Long.parseLong(profId))).now();
		User directorFrom = ofy().load().key( prof.getManager() ).now();
		Cours course = ofy().load().key( Key.create(Cours.class, Long.parseLong(courseId)) ).now();
		//
		Query<User> qUser = ofy().load().type(User.class)
				.filter("departments", Key.create(Cours.class, Long.parseLong(courseId)));
		if (qUser.list().size() > 0) {
			//
			directorTo = qUser.list().get(0);
			//
			Properties props = new Properties();
	        Session session = Session.getDefaultInstance(props, null);
	
	        String strStatus = (status) ? "approuvées à nouveau" : "désapprouvées";
	        String msgBody = "Les heures du professeur " + prof.getProfName() + " pour le cours " + course.getCoursNom() + " ont été " + strStatus + " par " + directorFrom.getFullName() + ".";
	        String strSubject = "ALERTE : Les heures du professeur " + prof.getProfName() + " ont été " + strStatus + " par " + directorFrom.getFullName() + ".";
	        
	        try {
		        Message msg = new MimeMessage(session);
		        //
		        msg.setFrom(new InternetAddress("thuannn@gmail.com", "Lemania eProfil"));
		        //
		        msg.addRecipient(Message.RecipientType.TO, new InternetAddress(directorTo.getEmail(), directorTo.getFullName()));
		        msg.addRecipient(Message.RecipientType.CC, new InternetAddress(directorFrom.getEmail(), directorFrom.getFullName()));
		        //
		        // Reply to
	 	        Address[] rraa = new Address[1];
	 	        rraa[0] = new InternetAddress( directorFrom.getEmail(), directorFrom.getFullName() );
		        msg.setReplyTo( rraa );
		        //
		        msg.setSubject(MimeUtility.encodeText( strSubject, "utf-8", "B"));
		        msg.setText( msgBody );
		        //
		        Transport.send( msg );
		    } catch (Exception e) {
		    	throw new RuntimeException(e);
		    }
		}
	}
	
	
	/*
	 * 
	 * */
	public void sendEmail ( 
			String messageSubject,
			String from, String to, String replyto, String cc,
			String messageBody ) {
		//
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);

        try {
	        Message msg = new MimeMessage(session);
	        //
	        // From
	        String[] fromEmails = from.split(",");
	        msg.setFrom(new InternetAddress( fromEmails[0].trim(), fromEmails[1].trim() ));
	        //
	        // To
	        String[] toto;
 	        String[] toPairs = to.split("/");
	        for ( String toMail : toPairs ) {
	        	toto = toMail.split(",");
	        	msg.addRecipient( Message.RecipientType.TO, new InternetAddress( toto[0].trim(), toto[1].trim() ));
	        }
	        //
	        // CC
	        String[] cccc;
 	        String[] ccPairs = cc.split("/");
	        for ( String ccMail : ccPairs ) {
	        	cccc = ccMail.split(",");
	        	msg.addRecipient( Message.RecipientType.TO, new InternetAddress( cccc[0].trim(), cccc[1].trim() ));
	        }
	        //
	        // Reply to
	        String[] rrrr;
 	        String[] rrPairs = replyto.split("/");
 	        Address[] rraa = new Address[ rrPairs.length ];
	        for ( int i = 0; i < rrPairs.length; i++ ) {
	        	//
	        	rrrr = rrPairs[i].split(",");
	        	rraa[i] = new InternetAddress( rrrr[0].trim(), rrrr[1].trim() );
	        }
	        msg.setReplyTo( rraa );
	        // 
	        // Message
	        msg.setSubject( messageSubject );
	        msg.setText( messageBody );
	        //
	        // Send
	        Transport.send(msg);
	        //
	    } catch (Exception e) {
	    	throw new RuntimeException(e);
	    }
	}
	
	
	
	/*
	 * */
	public void sendSMS( String number, String message ) {
		//
		//
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);
        
        String from = "thuannn@gmail.com, Ecole Lémania";
        String to = number + "@neprlp85uw7k65lf.sms.vtx.ch,Mobile/";
        String subject = "Absence";

        try {
	        Message msg = new MimeMessage(session);
	        //
	        String[] fromEmails = from.split(",");
	        msg.setFrom(new InternetAddress( fromEmails[0].trim(), fromEmails[1].trim() ));
	        //
	        String[] toto;
 	        String[] toPairs = to.split("/");
	        for ( String toMail : toPairs ) {
	        	toto = toMail.split(",");
	        	msg.addRecipient( Message.RecipientType.TO, new InternetAddress( toto[0].trim(), toto[1].trim() ));
	        }
	        //
	        msg.setSubject( subject );
	        msg.setText( message );
	        //
	        Transport.send(msg);
	        //
	    } catch (Exception e) {
	    	throw new RuntimeException(e);
	    }
	}
}