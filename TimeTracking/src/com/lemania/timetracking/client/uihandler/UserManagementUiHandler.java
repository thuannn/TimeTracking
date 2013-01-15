package com.lemania.timetracking.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.timetracking.shared.UserProxy;

public interface UserManagementUiHandler extends UiHandlers {
	
	public void addNewUser(String fullName, String userName, String password, String email);
	
	public void updateUserStatus(UserProxy user, Boolean active, Boolean admin, String password);
	
	public void addSchoolSelected(String schoolId);
	
	public void addDepartment(String courseId, UserProxy user);
	
	public void userSelected(UserProxy user);
}
