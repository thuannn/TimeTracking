package com.lemania.timetracking.shared;

import java.io.Serializable;
import java.lang.String;
import java.lang.Boolean;

public class Ecole implements Serializable {

	private static final long serialVersionUID = -1366837495016522159L;
	private String Nom;
	private String Adresse;
	private Boolean Active;

	public Ecole() {
	}

	public void setNom(String Nom) {
		this.Nom = Nom;
	}

	public void setAdresse(String Adresse) {
		this.Adresse = Adresse;
	}

	public void setActive(Boolean Active) {
		this.Active = Active;
	}

	public String getNom() {
		return Nom;
	}

	public String getAdresse() {
		return Adresse;
	}

	public Boolean getActive() {
		return Active;
	}
}
