function $getRowCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
}

function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$UserManagementPresenter_UserManagementPresenter_methodInjection(_0, _1){
  return new UserManagementPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$UserManagementPresenter_UserManagementPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$ = new UserManagementView_0(new UserManagementView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$ = new UserManagementPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$;
}

defineSeed(752, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_8(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $addDepartment(this$static, courseId, user){
  var rc, rf, updatedUser, x;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  updatedUser = dynamicCast($editProxy(rc, user), Q$UserProxy);
  $fire((x = new UserRequestFactory_UserRequestContextImpl$1X_0(rc, updatedUser, courseId) , $addInvocation(rc.state.dialect, x) , x), new UserManagementPresenter$6_0(this$static));
}

function $addNewUser(this$static, fullName, userName, password, email){
  var newUser, rc, rf;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  newUser = dynamicCast($create_1(rc, Lcom_lemania_timetracking_shared_UserProxy_2_classLit), Q$UserProxy);
  newUser.setFullName(fullName);
  newUser.setUserName(userName);
  newUser.setPassword(password);
  newUser.setEmail(email);
  newUser.setActive(($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
  $fire($save_5(rc, newUser), new UserManagementPresenter$2_0(this$static, newUser));
}

function $addSchoolSelected_0(this$static, ecoleId){
  var rc, rf;
  $equals_4(ecoleId, '') && alert_0("Veuillez choisir l'\xE9cole.");
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAll_0(rc, ecoleId), new UserManagementPresenter$5_0(this$static));
}

function $updateUserStatus(this$static, user, active, admin, password){
  var rc, rf, updatedUser;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  updatedUser = dynamicCast($editProxy(rc, user), Q$UserProxy);
  updatedUser.setActive(active);
  updatedUser.setAdmin(admin);
  $equals_4(password, '') || updatedUser.setPassword(password);
  $fire($save_5(rc, updatedUser), new UserManagementPresenter$3_0(this$static, updatedUser));
}

function $userSelected(this$static, user){
  var rc, rf, updatedUser, x;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  updatedUser = dynamicCast($editProxy(rc, user), Q$UserProxy);
  $fire((x = new UserRequestFactory_UserRequestContextImpl$3X_0(rc, updatedUser) , $addInvocation(rc.state.dialect, x) , x), new UserManagementPresenter$7_0(this$static));
}

function UserManagementPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$UserManagementPresenter$MyView).setUiHandlers(this);
}

defineSeed(889, 682, makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$UserManagementUiHandler]), UserManagementPresenter_0);
_.onBind = function onBind_18(){
  $initializeTables(dynamicCast(this.view, Q$UserManagementPresenter$MyView));
  $initializeDepartmentTable(dynamicCast(this.view, Q$UserManagementPresenter$MyView));
}
;
_.onReset = function onReset_12(){
  var rf, rc, x, rf_0, rc_0;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x = new UserRequestFactory_UserRequestContextImpl$6X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new UserManagementPresenter$1_0(this));
  rf_0 = new EcoleRequestFactoryImpl_0;
  $initialize(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf_0);
  $fire($listAllActive(rc_0), new UserManagementPresenter$4_0(this));
}
;
_.revealInParent = function revealInParent_16(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_41(this$static, response){
  $setUserData(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(890, 621, makeCastMap([Q$Receiver]), UserManagementPresenter$1_0);
_.onFailure_0 = function onFailure_59(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_59(response){
  $onSuccess_41(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_42(this$static){
  $addNewUser_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$newUser);
}

function UserManagementPresenter$2_0(this$0, val$newUser){
  this.this$0 = this$0;
  this.val$newUser = val$newUser;
}

defineSeed(891, 621, makeCastMap([Q$Receiver]), UserManagementPresenter$2_0);
_.onFailure_0 = function onFailure_60(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_60(response){
  $onSuccess_42(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$newUser = null;
function $onSuccess_43(this$static){
  $refreshTable_3(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$updatedUser);
}

function UserManagementPresenter$3_0(this$0, val$updatedUser){
  this.this$0 = this$0;
  this.val$updatedUser = val$updatedUser;
}

defineSeed(892, 621, makeCastMap([Q$Receiver]), UserManagementPresenter$3_0);
_.onFailure_0 = function onFailure_61(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_61(response){
  $onSuccess_43(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
_.val$updatedUser = null;
function $onSuccess_44(this$static, response){
  $setEcoleAddList_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(893, 621, makeCastMap([Q$Receiver]), UserManagementPresenter$4_0);
_.onFailure_0 = function onFailure_62(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_62(response){
  $onSuccess_44(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_45(this$static, response){
  $setCourseAddList_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(894, 621, makeCastMap([Q$Receiver]), UserManagementPresenter$5_0);
_.onFailure_0 = function onFailure_63(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_63(response){
  $onSuccess_45(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_46(this$static, response){
  $refreshDepartmentTable(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(895, 621, makeCastMap([Q$Receiver]), UserManagementPresenter$6_0);
_.onFailure_0 = function onFailure_64(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_64(response){
  $onSuccess_46(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_47(this$static, response){
  $refreshDepartmentTable(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
  $populateSelectedUserInfo(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView));
}

function UserManagementPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(896, 621, makeCastMap([Q$Receiver]), UserManagementPresenter$7_0);
_.onFailure_0 = function onFailure_65(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_65(response){
  $onSuccess_47(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $addNewUser_0(this$static, newUser){
  var list;
  list = new ArrayList_0;
  setCheck(list.array, list.size_0++, newUser);
  $setRowData(this$static.tblUser, $getRowCount(this$static.tblUser.presenter) + 1, list);
  $setRowCount_0(this$static.tblUser, $getRowCount(this$static.tblUser.presenter) + list.size_0, true);
}

function $initializeDepartmentTable(this$static){
  var colCourseName;
  colCourseName = new UserManagementView$10_0;
  $addColumn(this$static.tblDepartment, colCourseName, 'D\xE9partement');
}

function $initializeTables(this$static){
  var cellActive, cellAdmin, colActive, colAdmin, colFullName, colUserName, passCell, passCol, selectionModel;
  colFullName = new UserManagementView$1_0;
  $addColumn(this$static.tblUser, colFullName, 'Nom & Pr\xE9nom');
  $setColumnWidth(this$static.tblUser, colFullName, 40 + ($clinit_Style$Unit() , '%'));
  colUserName = new UserManagementView$2_0;
  $addColumn(this$static.tblUser, colUserName, "Nom d'utilisateur");
  $setColumnWidth(this$static.tblUser, colUserName, '20%');
  passCell = new EditTextCell_0;
  passCol = new UserManagementView$3_0(passCell);
  $addColumn(this$static.tblUser, passCol, 'Password');
  $setColumnWidth(this$static.tblUser, passCol, '20%');
  $setFieldUpdater(passCol, new UserManagementView$4_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new UserManagementView$5_0(cellActive);
  $addColumn(this$static.tblUser, colActive, 'Actif');
  $setColumnWidth(this$static.tblUser, colActive, '10%');
  $setFieldUpdater(colActive, new UserManagementView$6_0(this$static));
  cellAdmin = new CheckboxCell_0;
  colAdmin = new UserManagementView$7_0(cellAdmin);
  $addColumn(this$static.tblUser, colAdmin, 'Admin');
  $setColumnWidth(this$static.tblUser, colAdmin, '10%');
  $setFieldUpdater(colAdmin, new UserManagementView$8_0(this$static));
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblUser, selectionModel);
  $addSelectionChangeHandler(selectionModel, new UserManagementView$9_0(this$static, selectionModel));
  $selectClear(this$static.lstAddEcole.element);
  $selectClear(this$static.lstAddCourse.element);
}

function $onCmdAddClicked_1(this$static){
  if (!isValidUserName($getPropertyString(this$static.txtUserName.element, 'value'))) {
    alert_0("Le nom d'utilisateur n'est pas valable.");
    return;
  }
  if (!isValidUserName($getPropertyString(this$static.txtPassword.element, 'value'))) {
    alert_0("Le mot de passe n'est pas valable.");
    return;
  }
  !!this$static.uiHandlers && $addNewUser(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getPropertyString(this$static.txtFullName.element, 'value'), $getPropertyString(this$static.txtUserName.element, 'value'), $getPropertyString(this$static.txtPassword.element, 'value'), $getPropertyString(this$static.txtEmail.element, 'value'));
}

function $onCmdAddCourseClicked_0(this$static){
  !!this$static.uiHandlers && $addDepartment(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getValue_1(this$static.lstAddCourse, this$static.lstAddCourse.element.selectedIndex), this$static.selectedUser);
}

function $onLstAddEcoleChanged_1(this$static){
  !!this$static.uiHandlers && $addSchoolSelected_0(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getValue_1(this$static.lstAddEcole, this$static.lstAddEcole.element.selectedIndex));
}

function $populateSelectedUserInfo(this$static){
  if (this$static.selectedUser) {
    $setText_2(this$static.txtFullName, this$static.selectedUser.getFullName());
    $setText_2(this$static.txtUserName, this$static.selectedUser.getUserName());
    $setText_2(this$static.txtEmail, this$static.selectedUser.getEmail());
  }
}

function $refreshDepartmentTable(this$static, depts){
  $setRowData_0(this$static.tblDepartment, depts);
}

function $refreshTable_3(this$static, updatedUser){
  var users;
  users = new ArrayList_0;
  setCheck(users.array, users.size_0++, updatedUser);
  $setRowData(this$static.tblUser, this$static.selectedUserIndex, users);
  $ensurePendingState(this$static.tblUser.presenter).redrawRequired = true;
}

function $setCourseAddList_0(this$static, cours){
  var i;
  $selectClear(this$static.lstAddCourse.element);
  $insertItem(this$static.lstAddCourse, '-', '', -1);
  for (i = 0; i < cours.size_1(); ++i)
    $insertItem(this$static.lstAddCourse, dynamicCast(cours.get_0(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(cours.get_0(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $setEcoleAddList_0(this$static, ecoles){
  var i;
  $selectClear(this$static.lstAddEcole.element);
  $insertItem(this$static.lstAddEcole, '-', '', -1);
  for (i = 0; i < ecoles.size_1(); ++i)
    $insertItem(this$static.lstAddEcole, dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getSchoolName(), '' + toString_6(dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getId_0().value_0), -1);
}

function $setUserData(this$static, list){
  $setRowData_0(this$static.tblUser, list);
}

function UserManagementView_0(){
  this.tblUser = new DataGrid_0;
  this.tblDepartment = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_15(new UserManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1052, 687, makeCastMap([Q$UserManagementPresenter$MyView]), UserManagementView_0);
_.asWidget = function asWidget_18(){
  return this.widget;
}
;
_.lstAddCourse = null;
_.lstAddEcole = null;
_.selectedUser = null;
_.selectedUserIndex = 0;
_.txtEmail = null;
_.txtFullName = null;
_.txtPassword = null;
_.txtUserName = null;
_.widget = null;
function UserManagementView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1053, 394, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$1_0);
_.getValue = function getValue_30(object){
  return dynamicCast(object, Q$UserProxy).getFullName();
}
;
function UserManagementView$10_0(){
  TextColumn_0.call(this);
}

defineSeed(1054, 394, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$10_0);
_.getValue = function getValue_31(object){
  return dynamicCast(object, Q$CoursProxy).getCoursNom();
}
;
function UserManagementView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1055, 394, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$2_0);
_.getValue = function getValue_32(object){
  return dynamicCast(object, Q$UserProxy).getUserName();
}
;
function UserManagementView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1056, 351, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$3_0);
_.getValue = function getValue_33(object){
  return dynamicCast(object, Q$UserProxy).getPassword();
}
;
function $update_10(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), user.getAdmin(), value);
  }
}

function UserManagementView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1057, 1, {}, UserManagementView$4_0);
_.update = function update_11(index, user, value){
  $update_10(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function UserManagementView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1058, 351, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$5_0);
_.getValue = function getValue_34(ecole){
  return dynamicCast(ecole, Q$UserProxy).getActive();
}
;
function $update_11(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, value, user.getAdmin(), '');
  }
}

function UserManagementView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1059, 1, {}, UserManagementView$6_0);
_.update = function update_12(index, user, value){
  $update_11(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1060, 351, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$7_0);
_.getValue = function getValue_35(user){
  return dynamicCast(user, Q$UserProxy).getAdmin();
}
;
function $update_12(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), value, '');
  }
}

function UserManagementView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1061, 1, {}, UserManagementView$8_0);
_.update = function update_13(index, user, value){
  $update_12(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$9_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1062, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), UserManagementView$9_0);
_.onSelectionChange = function onSelectionChange_2(event_0){
  this.this$0.selectedUser = dynamicCast($getSelectedObject(this.val$selectionModel), Q$UserProxy);
  $userSelected(dynamicCast(this.this$0.uiHandlers, Q$UserManagementUiHandler), this.this$0.selectedUser);
}
;
_.this$0 = null;
_.val$selectionModel = null;
function UserManagementView_BinderImpl_0(){
}

defineSeed(1063, 1, {}, UserManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_15(this$static){
  var attachRecord15, f_HTMLPanel1, f_Label2, f_VerticalPanel3, f_HorizontalPanel4, f_Grid5, f_Label6, txtFullName, f_Label7, txtUserName, f_Label8, txtPassword, f_Label9, txtEmail, f_Label10, cmdAdd, f_Grid11, f_Label12, lstAddEcole, f_Label13, lstAddCourse, cmdAddCourse, f_HorizontalPanel15, tblUser, tblDepartment;
  f_HTMLPanel1 = new HTMLPanel_0($html1_12(this$static.domId0, this$static.domId1).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord15 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  attachRecord15.origParent?$insertBefore(attachRecord15.origParent, attachRecord15.element, attachRecord15.origSibling):orphan(attachRecord15.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label_0 , f_Label2.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label2.directionalTextHelper, 'Gestion des utilisateurs') , $updateHorizontalAlignment(f_Label2) , f_Label2.element.style['width'] = '900' , f_Label2), $get_1(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel3 = new VerticalPanel_0 , $add_8(f_VerticalPanel3, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel4, ($clinit_HasVerticalAlignment() , ALIGN_BOTTOM)) , $add_6(f_HorizontalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 6) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Nom & Pr\xE9nom :') , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (txtFullName = new TextBox_0 , this$static.owner.txtFullName = txtFullName , txtFullName)) , $setWidget_1(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, "Nom d'utilisateur :") , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid5, 1, 1, (txtUserName = new TextBox_0 , this$static.owner.txtUserName = txtUserName , txtUserName)) , $setWidget_1(f_Grid5, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Mot de passe :') , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid5, 2, 1, (txtPassword = new TextBox_0 , this$static.owner.txtPassword = txtPassword , txtPassword)) , $setWidget_1(f_Grid5, 3, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Email :') , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid5, 3, 1, (txtEmail = new TextBox_0 , this$static.owner.txtEmail = txtEmail , txtEmail)) , $setWidget_1(f_Grid5, 4, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid5, 4, 1, (cmdAdd = new Button_0 , $setInnerText(cmdAdd.element, 'Ajouter') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAdd)) , f_Grid5.element.style['width'] = '600px' , f_Grid5)) , $add_6(f_HorizontalPanel4, (f_Grid11 = new Grid_0 , $resizeColumns(f_Grid11, 2) , $resizeRows(f_Grid11, 3) , $setWidget_1(f_Grid11, 0, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Ecoles :') , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid11, 0, 1, (lstAddEcole = new ListBox_0 , $addDomHandler(lstAddEcole, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstAddEcole = lstAddEcole , lstAddEcole)) , $setWidget_1(f_Grid11, 1, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'D\xE9partements :') , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid11, 1, 1, (lstAddCourse = new ListBox_0 , this$static.owner.lstAddCourse = lstAddCourse , lstAddCourse)) , $setWidget_1(f_Grid11, 2, 0, new Label_0) , $setWidget_1(f_Grid11, 2, 1, (cmdAddCourse = new Button_0 , $setInnerText(cmdAddCourse.element, 'Assigner') , $addDomHandler(cmdAddCourse, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE_0) , cmdAddCourse)) , f_Grid11.element.style['width'] = '300px' , f_Grid11)) , f_HorizontalPanel4.element.style['height'] = '' , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4)) , $add_8(f_VerticalPanel3, (f_HorizontalPanel15 = new HorizontalPanel_0 , $add_6(f_HorizontalPanel15, (tblUser = this$static.owner.tblUser , tblUser.element.style['height'] = '450px' , tblUser.element.style['width'] = '600px' , tblUser)) , $add_6(f_HorizontalPanel15, (tblDepartment = this$static.owner.tblDepartment , tblDepartment.element.style['height'] = '450px' , tblDepartment.element.style['width'] = '300px' , tblDepartment)) , f_HorizontalPanel15.element.style['width'] = '100%' , f_HorizontalPanel15)) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3), $get_1(this$static.domId1Element));
  return f_HTMLPanel1;
}

function UserManagementView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new UserManagementView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new UserManagementView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new UserManagementView_BinderImpl$Widgets$3_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
  this.domId1Element = new LazyDomElement_0(this.domId1);
}

defineSeed(1064, 1, {}, UserManagementView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.domId1 = null;
_.domId1Element = null;
_.owner = null;
function UserManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1065, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_32(event_0){
  $onCmdAddClicked_1(this.this$1.owner);
}
;
_.this$1 = null;
function UserManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1066, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_10(event_0){
  $onLstAddEcoleChanged_1(this.this$1.owner);
}
;
_.this$1 = null;
function UserManagementView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1067, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_33(event_0){
  $onCmdAddCourseClicked_0(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_12(arg0, arg1){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span> <span id='";
  $append_11(sb, htmlEscape(arg1));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

defineSeed(1091, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$UserProxy]));
_.setActive = function setActive(active){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setActive(active);
}
;
_.setAdmin = function setAdmin(admin){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setAdmin(admin);
}
;
_.setEmail = function setEmail(email){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setEmail(email);
}
;
_.setFullName = function setFullName(fullName){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setFullName(fullName);
}
;
_.setPassword = function setPassword(password){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setPassword(password);
}
;
_.setUserName = function setUserName(userName){
  dynamicCast($getWrapped(this.this$0), Q$UserProxy).setUserName(userName);
}
;
defineSeed(1092, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$UserProxy]));
_.setActive = function setActive_0(active){
  $setProperty(this.this$0, 'active', active);
}
;
_.setAdmin = function setAdmin_0(admin){
  $setProperty(this.this$0, 'admin', admin);
}
;
_.setEmail = function setEmail_0(email){
  $setProperty(this.this$0, 'email', email);
}
;
_.setFullName = function setFullName_0(fullName){
  $setProperty(this.this$0, 'fullName', fullName);
}
;
_.setPassword = function setPassword_0(password){
  $setProperty(this.this$0, 'password', password);
}
;
_.setUserName = function setUserName_0(userName){
  $setProperty(this.this$0, 'userName', userName);
}
;
function $save_5(this$static, user){
  var x;
  x = new UserRequestFactory_UserRequestContextImpl$9X_0(this$static, user);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function UserRequestFactory_UserRequestContextImpl$1X_0(this$0, val$user, val$courseId){
  this.val$user = val$user;
  this.val$courseId = val$courseId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1143, 625, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_24(){
  return new RequestData_0('4kFsW5EpQ5A3QVDZhQI24vu1LRA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$user, this.val$courseId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}
;
_.val$courseId = null;
_.val$user = null;
function UserRequestFactory_UserRequestContextImpl$3X_0(this$0, val$user){
  this.val$user = val$user;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1145, 625, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_26(){
  return new RequestData_0('Qj3mMpCUVpjG2v4auY0Pl8wedEk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$user]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}
;
_.val$user = null;
function UserRequestFactory_UserRequestContextImpl$6X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1147, 625, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_28(){
  return new RequestData_0('ZXEL4McK823kYxQGNpAGpYCyZ2I=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_UserProxy_2_classLit);
}
;
function UserRequestFactory_UserRequestContextImpl$9X_0(this$0, val$user){
  this.val$user = val$user;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1148, 625, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_29(){
  return new RequestData_0('vMEVxvBL$fsBBnk3LEJqQbw7ypU=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$user]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$user = null;
var Lcom_lemania_timetracking_client_presenter_UserManagementPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter', 889), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$1', 890), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$2', 891), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$3', 892), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$4', 893), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$5_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$5', 894), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$6', 895), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$7_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$7', 896), Lcom_lemania_timetracking_client_view_UserManagementView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView', 1052), Lcom_lemania_timetracking_client_view_UserManagementView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$1', 1053), Lcom_lemania_timetracking_client_view_UserManagementView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$2', 1055), Lcom_lemania_timetracking_client_view_UserManagementView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$3', 1056), Lcom_lemania_timetracking_client_view_UserManagementView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$4', 1057), Lcom_lemania_timetracking_client_view_UserManagementView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$5', 1058), Lcom_lemania_timetracking_client_view_UserManagementView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$6', 1059), Lcom_lemania_timetracking_client_view_UserManagementView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$7', 1060), Lcom_lemania_timetracking_client_view_UserManagementView$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$8', 1061), Lcom_lemania_timetracking_client_view_UserManagementView$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$9', 1062), Lcom_lemania_timetracking_client_view_UserManagementView$10_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$10', 1054), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl', 1063), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$Widgets', 1064), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$Widgets$1', 1065), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$Widgets$2', 1066), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$Widgets$3', 1067), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$1X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$1X', 1143), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$3X', 1145), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$6X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$6X', 1147), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$9X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$9X', 1148);
$entry(onLoad)(16);
