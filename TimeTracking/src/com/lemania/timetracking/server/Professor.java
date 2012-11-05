package com.lemania.timetracking.server;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.NotSaved;

@Entity
public class Professor extends DatastoreObject implements Comparable<Professor> {

	private String profName;
	private Boolean profActive;
	
	@NotSaved
	int total_01 = 0;
	@NotSaved
	int total_02 = 0;
	@NotSaved
	int total_03 = 0;
	@NotSaved
	int total_04 = 0;
	@NotSaved
	int total_05 = 0;
	@NotSaved
	int total_06 = 0;
	@NotSaved
	int total_07 = 0;
	@NotSaved
	int total_08 = 0;
	@NotSaved
	int total_09 = 0;
	@NotSaved
	int total_10 = 0;
	@NotSaved
	int total_11 = 0;
	@NotSaved
	int total_12 = 0;
	
	@NotSaved
	int fee_01 = 0;
	@NotSaved
	int fee_02 = 0;
	@NotSaved
	int fee_03 = 0;
	@NotSaved
	int fee_04 = 0;
	@NotSaved
	int fee_05 = 0;
	@NotSaved
	int fee_06 = 0;
	@NotSaved
	int fee_07 = 0;
	@NotSaved
	int fee_08 = 0;
	@NotSaved
	int fee_09 = 0;
	@NotSaved
	int fee_10 = 0;
	@NotSaved
	int fee_11 = 0;
	@NotSaved
	int fee_12 = 0;
	
	public String getProfName() {
		return profName;
	}
	
	public void setProfName(String profName) {
		this.profName = profName;
	}
	
	public Boolean getProfActive() {
		return profActive;
	}
	
	public void setProfActive(Boolean profActive) {
		this.profActive = profActive;
	}

	@Override
	public int compareTo(Professor prof) {
		int lastProfName = profName.compareTo(prof.getProfName());
		return lastProfName;
	}

	public int getTotal_01() {
		return total_01;
	}

	public void setTotal_01(int total_01) {
		this.total_01 = total_01;
	}

	public int getTotal_02() {
		return total_02;
	}

	public void setTotal_02(int total_02) {
		this.total_02 = total_02;
	}

	public int getTotal_03() {
		return total_03;
	}

	public void setTotal_03(int total_03) {
		this.total_03 = total_03;
	}

	public int getTotal_04() {
		return total_04;
	}

	public void setTotal_04(int total_04) {
		this.total_04 = total_04;
	}

	public int getTotal_05() {
		return total_05;
	}

	public void setTotal_05(int total_05) {
		this.total_05 = total_05;
	}

	public int getTotal_06() {
		return total_06;
	}

	public void setTotal_06(int total_06) {
		this.total_06 = total_06;
	}

	public int getTotal_07() {
		return total_07;
	}

	public void setTotal_07(int total_07) {
		this.total_07 = total_07;
	}

	public int getTotal_08() {
		return total_08;
	}

	public void setTotal_08(int total_08) {
		this.total_08 = total_08;
	}

	public int getTotal_09() {
		return total_09;
	}

	public void setTotal_09(int total_09) {
		this.total_09 = total_09;
	}

	public int getTotal_10() {
		return total_10;
	}

	public void setTotal_10(int total_10) {
		this.total_10 = total_10;
	}

	public int getTotal_11() {
		return total_11;
	}

	public void setTotal_11(int total_11) {
		this.total_11 = total_11;
	}

	public int getTotal_12() {
		return total_12;
	}

	public void setTotal_12(int total_12) {
		this.total_12 = total_12;
	}

	public int getFee_01() {
		return fee_01;
	}

	public void setFee_01(int fee_01) {
		this.fee_01 = fee_01;
	}

	public int getFee_02() {
		return fee_02;
	}

	public void setFee_02(int fee_02) {
		this.fee_02 = fee_02;
	}

	public int getFee_03() {
		return fee_03;
	}

	public void setFee_03(int fee_03) {
		this.fee_03 = fee_03;
	}

	public int getFee_04() {
		return fee_04;
	}

	public void setFee_04(int fee_04) {
		this.fee_04 = fee_04;
	}

	public int getFee_05() {
		return fee_05;
	}

	public void setFee_05(int fee_05) {
		this.fee_05 = fee_05;
	}

	public int getFee_06() {
		return fee_06;
	}

	public void setFee_06(int fee_06) {
		this.fee_06 = fee_06;
	}

	public int getFee_07() {
		return fee_07;
	}

	public void setFee_07(int fee_07) {
		this.fee_07 = fee_07;
	}

	public int getFee_08() {
		return fee_08;
	}

	public void setFee_08(int fee_08) {
		this.fee_08 = fee_08;
	}

	public int getFee_09() {
		return fee_09;
	}

	public void setFee_09(int fee_09) {
		this.fee_09 = fee_09;
	}

	public int getFee_10() {
		return fee_10;
	}

	public void setFee_10(int fee_10) {
		this.fee_10 = fee_10;
	}

	public int getFee_11() {
		return fee_11;
	}

	public void setFee_11(int fee_11) {
		this.fee_11 = fee_11;
	}

	public int getFee_12() {
		return fee_12;
	}

	public void setFee_12(int fee_12) {
		this.fee_12 = fee_12;
	}	
}
