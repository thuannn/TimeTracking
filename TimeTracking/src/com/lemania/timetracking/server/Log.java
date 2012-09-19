package com.lemania.timetracking.server;

import java.util.Date;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;

@Entity
public class Log extends DatastoreObject {
	
	Key<Professor> prof;
	Key<Cours> cours;
	Key<LogType> type;
	Date date;
	int hour;
	
	public Key<Professor> getProf() {
		return prof;
	}
	
	public void setProf(Key<Professor> prof) {
		this.prof = prof;
	}
	
	public Key<Cours> getCours() {
		return cours;
	}
	
	public void setCours(Key<Cours> cours) {
		this.cours = cours;
	}
	
	public Key<LogType> getLogType() {
		return type;
	}
	
	public void setLogType(Key<LogType> type) {
		this.type = type;
	}
	
	public int getHour() {
		return hour;
	}
	
	public void setHour(int hour) {
		this.hour = hour;
	}	
	
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}