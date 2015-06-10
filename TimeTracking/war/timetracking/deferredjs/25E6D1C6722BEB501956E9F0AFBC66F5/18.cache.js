function $getRowCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
}

function $addDepartment(this$static, courseId, user){
  var rc, rf, updatedUser, x_0;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  updatedUser = dynamicCast($editProxy(rc, user), Q$UserProxy);
  $fire((x_0 = new UserRequestFactory_UserRequestContextImpl$1X_0(rc, updatedUser, courseId) , $addInvocation(rc.state.dialect, x_0) , x_0), new UserManagementPresenter$6_0(this$static));
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
  $fire($save_4(rc, newUser), new UserManagementPresenter$2_0(this$static, newUser));
}

function $addSchoolSelected_0(this$static, ecoleId){
  var rc, rf;
  $equals_3(ecoleId, '') && alert_0("Veuillez choisir l'\xE9cole.");
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
  $equals_3(password, '') || updatedUser.setPassword(password);
  $fire($save_4(rc, updatedUser), new UserManagementPresenter$3_0(this$static, updatedUser));
}

function $userSelected(this$static, user){
  var rc, rf, updatedUser, x_0;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  updatedUser = dynamicCast($editProxy(rc, user), Q$UserProxy);
  $fire((x_0 = new UserRequestFactory_UserRequestContextImpl$4X_0(rc, updatedUser) , $addInvocation(rc.state.dialect, x_0) , x_0), new UserManagementPresenter$7_0(this$static));
}

function UserManagementPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  dynamicCast(this.view, Q$UserManagementPresenter$MyView).setUiHandlers(this);
}

defineSeed(886, 691, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$UserManagementUiHandler]), UserManagementPresenter_0);
_.onBind = function onBind_19(){
  $initializeTables(dynamicCast(this.view, Q$UserManagementPresenter$MyView));
  $initializeDepartmentTable(dynamicCast(this.view, Q$UserManagementPresenter$MyView));
}
;
_.onReset = function onReset_12(){
  var rf, rc, x_0, rf_0, rc_0;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x_0 = new UserRequestFactory_UserRequestContextImpl$8X_0(rc) , $addInvocation(rc.state.dialect, x_0) , x_0), new UserManagementPresenter$1_0(this));
  rf_0 = new EcoleRequestFactoryImpl_0;
  $initialize(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf_0);
  $fire($listAllActive(rc_0), new UserManagementPresenter$4_0(this));
}
;
_.revealInParent = function revealInParent_18(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_41(this$static, response){
  $setUserData(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(887, 627, makeCastMap([Q$Receiver]), UserManagementPresenter$1_0);
_.onFailure_0 = function onFailure_44(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_44(response){
  $onSuccess_41(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_42(this$static){
  $addNewUser_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$newUser);
}

function UserManagementPresenter$2_0(this$0, val$newUser){
  this.this$0 = this$0;
  this.val$newUser = val$newUser;
}

defineSeed(888, 627, makeCastMap([Q$Receiver]), UserManagementPresenter$2_0);
_.onFailure_0 = function onFailure_45(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_45(response){
  $onSuccess_42(this, throwClassCastExceptionUnlessNull(response));
}
;
function $onSuccess_43(this$static){
  $refreshTable_3(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$updatedUser);
}

function UserManagementPresenter$3_0(this$0, val$updatedUser){
  this.this$0 = this$0;
  this.val$updatedUser = val$updatedUser;
}

defineSeed(889, 627, makeCastMap([Q$Receiver]), UserManagementPresenter$3_0);
_.onFailure_0 = function onFailure_46(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_46(response){
  $onSuccess_43(this, throwClassCastExceptionUnlessNull(response));
}
;
function $onSuccess_44(this$static, response){
  $setEcoleAddList_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(890, 627, makeCastMap([Q$Receiver]), UserManagementPresenter$4_0);
_.onFailure_0 = function onFailure_47(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_47(response){
  $onSuccess_44(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_45(this$static, response){
  $setCourseAddList_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(891, 627, makeCastMap([Q$Receiver]), UserManagementPresenter$5_0);
_.onFailure_0 = function onFailure_48(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_48(response){
  $onSuccess_45(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_46(this$static, response){
  $refreshDepartmentTable(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(892, 627, makeCastMap([Q$Receiver]), UserManagementPresenter$6_0);
_.onFailure_0 = function onFailure_49(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_49(response){
  $onSuccess_46(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_47(this$static, response){
  $refreshDepartmentTable(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
  $populateSelectedUserInfo(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView));
}

function UserManagementPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(893, 627, makeCastMap([Q$Receiver]), UserManagementPresenter$7_0);
_.onFailure_0 = function onFailure_50(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_50(response){
  $onSuccess_47(this, dynamicCast(response, Q$List));
}
;
function $get_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$) {
    result = new UserManagementPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$;
}

defineSeed(918, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_61(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
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
  $setColumnWidth_0(this$static.tblUser, colFullName, 40 + ($clinit_Style$Unit() , '%'));
  colUserName = new UserManagementView$2_0;
  $addColumn(this$static.tblUser, colUserName, "Nom d'utilisateur");
  $setColumnWidth_0(this$static.tblUser, colUserName, '20%');
  passCell = new EditTextCell_0;
  passCol = new UserManagementView$3_0(passCell);
  $addColumn(this$static.tblUser, passCol, 'Password');
  $setColumnWidth_0(this$static.tblUser, passCol, '20%');
  $setFieldUpdater(passCol, new UserManagementView$4_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new UserManagementView$5_0(cellActive);
  $addColumn(this$static.tblUser, colActive, 'Actif');
  $setColumnWidth_0(this$static.tblUser, colActive, '10%');
  $setFieldUpdater(colActive, new UserManagementView$6_0(this$static));
  cellAdmin = new CheckboxCell_0;
  colAdmin = new UserManagementView$7_0(cellAdmin);
  $addColumn(this$static.tblUser, colAdmin, 'Admin');
  $setColumnWidth_0(this$static.tblUser, colAdmin, '10%');
  $setFieldUpdater(colAdmin, new UserManagementView$8_0(this$static));
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblUser, selectionModel);
  $addSelectionChangeHandler(selectionModel, new UserManagementView$9_0(this$static, selectionModel));
  $selectClear($getSelectElement(this$static.lstAddEcole));
  $selectClear($getSelectElement(this$static.lstAddCourse));
}

function $onCmdAddClicked_1(this$static){
  if (!isValidUserName($getPropertyString($getElement(this$static.txtUserName), 'value'))) {
    alert_0("Le nom d'utilisateur n'est pas valable.");
    return;
  }
  if (!isValidUserName($getPropertyString($getElement(this$static.txtPassword), 'value'))) {
    alert_0("Le mot de passe n'est pas valable.");
    return;
  }
  !!this$static.uiHandlers && $addNewUser(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getPropertyString($getElement(this$static.txtFullName), 'value'), $getPropertyString($getElement(this$static.txtUserName), 'value'), $getPropertyString($getElement(this$static.txtPassword), 'value'), $getPropertyString($getElement(this$static.txtEmail), 'value'));
}

function $onCmdAddCourseClicked_0(this$static){
  !!this$static.uiHandlers && $addDepartment(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getValue_1(this$static.lstAddCourse, $getSelectElement(this$static.lstAddCourse).selectedIndex), this$static.selectedUser);
}

function $onLstAddEcoleChanged_1(this$static){
  !!this$static.uiHandlers && $addSchoolSelected_0(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getValue_1(this$static.lstAddEcole, $getSelectElement(this$static.lstAddEcole).selectedIndex));
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
  $selectClear($getSelectElement(this$static.lstAddCourse));
  $insertItem(this$static.lstAddCourse, '-', '', -1);
  for (i = 0; i < cours.size_1(); i++)
    $insertItem(this$static.lstAddCourse, dynamicCast(cours.get_1(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(cours.get_1(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $setEcoleAddList_0(this$static, ecoles){
  var i;
  $selectClear($getSelectElement(this$static.lstAddEcole));
  $insertItem(this$static.lstAddEcole, '-', '', -1);
  for (i = 0; i < ecoles.size_1(); i++)
    $insertItem(this$static.lstAddEcole, dynamicCast(ecoles.get_1(i), Q$EcoleProxy).getSchoolName(), '' + toString_6(dynamicCast(ecoles.get_1(i), Q$EcoleProxy).getId_0().value_0), -1);
}

function $setUserData(this$static, list){
  $setRowData_0(this$static.tblUser, list);
}

function UserManagementView_0(){
  this.tblUser = new DataGrid_0;
  this.tblDepartment = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_17(new UserManagementView_BinderImpl$Widgets_0(this));
}

defineSeed(1133, 696, makeCastMap([Q$IsWidget, Q$UserManagementPresenter$MyView]), UserManagementView_0);
_.asWidget = function asWidget_21(){
  return this.widget;
}
;
_.selectedUserIndex = 0;
function UserManagementView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1134, 382, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$1_0);
_.getValue = function getValue_31(object){
  return dynamicCast(object, Q$UserProxy).getFullName();
}
;
function UserManagementView$10_0(){
  TextColumn_0.call(this);
}

defineSeed(1135, 382, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$10_0);
_.getValue = function getValue_32(object){
  return dynamicCast(object, Q$CoursProxy).getCoursNom();
}
;
function UserManagementView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1136, 382, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$2_0);
_.getValue = function getValue_33(object){
  return dynamicCast(object, Q$UserProxy).getUserName();
}
;
function UserManagementView$3_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1137, 356, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$3_0);
_.getValue = function getValue_34(object){
  return dynamicCast(object, Q$UserProxy).getPassword();
}
;
function $update_9(this$static, index_0, user, value_0){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index_0;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), user.getAdmin(), value_0);
  }
}

function UserManagementView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1138, 1, {}, UserManagementView$4_0);
_.update = function update_10(index_0, user, value_0){
  $update_9(this, index_0, dynamicCast(user, Q$UserProxy), dynamicCast(value_0, Q$String));
}
;
function UserManagementView$5_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1139, 356, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$5_0);
_.getValue = function getValue_35(ecole){
  return dynamicCast(ecole, Q$UserProxy).getActive();
}
;
function $update_10(this$static, index_0, user, value_0){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index_0;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, value_0, user.getAdmin(), '');
  }
}

function UserManagementView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1140, 1, {}, UserManagementView$6_0);
_.update = function update_11(index_0, user, value_0){
  $update_10(this, index_0, dynamicCast(user, Q$UserProxy), dynamicCast(value_0, Q$Boolean));
}
;
function UserManagementView$7_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1141, 356, makeCastMap([Q$HasCell, Q$Column]), UserManagementView$7_0);
_.getValue = function getValue_36(user){
  return dynamicCast(user, Q$UserProxy).getAdmin();
}
;
function $update_11(this$static, index_0, user, value_0){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index_0;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), value_0, '');
  }
}

function UserManagementView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1142, 1, {}, UserManagementView$8_0);
_.update = function update_12(index_0, user, value_0){
  $update_11(this, index_0, dynamicCast(user, Q$UserProxy), dynamicCast(value_0, Q$Boolean));
}
;
function UserManagementView$9_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1143, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), UserManagementView$9_0);
_.onSelectionChange = function onSelectionChange_2(event_0){
  this.this$0.selectedUser = dynamicCast($getSelectedObject(this.val$selectionModel), Q$UserProxy);
  $userSelected(dynamicCast(this.this$0.uiHandlers, Q$UserManagementUiHandler), this.this$0.selectedUser);
}
;
function UserManagementView_BinderImpl_0(){
}

defineSeed(1144, 1, {}, UserManagementView_BinderImpl_0);
function $build_f_HTMLPanel1_17(this$static){
  var attachRecord17, f_HTMLPanel1, f_Label2, f_VerticalPanel3, f_HorizontalPanel4, f_Grid5, f_Label6, txtFullName, f_Label7, txtUserName, f_Label8, txtPassword, f_Label9, txtEmail, f_Label10, cmdAdd, f_Grid11, f_Label12, lstAddEcole, f_Label13, lstAddCourse, cmdAddCourse, f_HorizontalPanel15, tblUser, tblDepartment;
  f_HTMLPanel1 = new HTMLPanel_0($html1_13(this$static.domId0, this$static.domId1).html);
  ($clinit_DOM() , f_HTMLPanel1.element).style['width'] = '100%';
  attachRecord17 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  attachRecord17.origParent?$insertBefore(attachRecord17.origParent, attachRecord17.element, attachRecord17.origSibling):orphan(attachRecord17.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label_0 , $setClassName(f_Label2.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label2.directionalTextHelper, 'GESTION DES UTILISATEURS', false) , $updateHorizontalAlignment(f_Label2) , f_Label2.element.style['width'] = '900' , f_Label2), $get_1(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel3 = new VerticalPanel_0 , $add_10(f_VerticalPanel3, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel4, ($clinit_HasVerticalAlignment() , ALIGN_BOTTOM)) , $add_8(f_HorizontalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 6) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Nom & Pr\xE9nom :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (txtFullName = new TextBox_0 , this$static.owner.txtFullName = txtFullName , txtFullName)) , $setWidget_1(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, "Nom d'utilisateur :", false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid5, 1, 1, (txtUserName = new TextBox_0 , this$static.owner.txtUserName = txtUserName , txtUserName)) , $setWidget_1(f_Grid5, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'Mot de passe :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid5, 2, 1, (txtPassword = new TextBox_0 , this$static.owner.txtPassword = txtPassword , txtPassword)) , $setWidget_1(f_Grid5, 3, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Email :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid5, 3, 1, (txtEmail = new TextBox_0 , this$static.owner.txtEmail = txtEmail , txtEmail)) , $setWidget_1(f_Grid5, 4, 0, (f_Label10 = new Label_0 , $setClassName(f_Label10.element, 'hiddenText') , $setTextOrHtml(f_Label10.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid5, 4, 1, (cmdAdd = new Button_0 , $setClassName(cmdAdd.element, 'button-highlight') , $setInnerText(cmdAdd.element, 'Ajouter') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAdd)) , f_Grid5.element.style['width'] = '600px' , f_Grid5)) , $add_8(f_HorizontalPanel4, (f_Grid11 = new Grid_0 , $resizeColumns(f_Grid11, 2) , $resizeRows(f_Grid11, 3) , $setWidget_1(f_Grid11, 0, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Ecoles :', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid11, 0, 1, (lstAddEcole = new ListBox_0 , $addDomHandler(lstAddEcole, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstAddEcole = lstAddEcole , lstAddEcole)) , $setWidget_1(f_Grid11, 1, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'D\xE9partements :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid11, 1, 1, (lstAddCourse = new ListBox_0 , this$static.owner.lstAddCourse = lstAddCourse , lstAddCourse)) , $setWidget_1(f_Grid11, 2, 0, new Label_0) , $setWidget_1(f_Grid11, 2, 1, (cmdAddCourse = new Button_0 , $setClassName(cmdAddCourse.element, 'button-highlight') , $setInnerText(cmdAddCourse.element, 'Assigner') , $addDomHandler(cmdAddCourse, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE_0) , cmdAddCourse)) , f_Grid11.element.style['width'] = '300px' , f_Grid11)) , f_HorizontalPanel4.element.style['height'] = '' , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4)) , $add_10(f_VerticalPanel3, (f_HorizontalPanel15 = new HorizontalPanel_0 , $add_8(f_HorizontalPanel15, (tblUser = this$static.owner.tblUser , tblUser.element.style['height'] = '450px' , tblUser.element.style['width'] = '600px' , tblUser)) , $add_8(f_HorizontalPanel15, (tblDepartment = this$static.owner.tblDepartment , tblDepartment.element.style['height'] = '450px' , tblDepartment.element.style['width'] = '300px' , tblDepartment)) , f_HorizontalPanel15.element.style['width'] = '100%' , f_HorizontalPanel15)) , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3), $get_1(this$static.domId1Element));
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

defineSeed(1145, 1, {}, UserManagementView_BinderImpl$Widgets_0);
function UserManagementView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1146, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_35(event_0){
  $onCmdAddClicked_1(this.this$1.owner);
}
;
function UserManagementView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1147, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_27(event_0){
  $onLstAddEcoleChanged_1(this.this$1.owner);
}
;
function UserManagementView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1148, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserManagementView_BinderImpl$Widgets$3_0);
_.onClick = function onClick_36(event_0){
  $onCmdAddCourseClicked_0(this.this$1.owner);
}
;
function $html1_13(arg0, arg1){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span> <span id='");
  $append_11(sb, htmlEscape(arg1));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$) {
    result = new UserManagementView_0(new UserManagementView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$;
}

defineSeed(1173, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$UserProxy]));
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
defineSeed(1174, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$UserProxy]));
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
function $save_4(this$static, user){
  var x_0;
  x_0 = new UserRequestFactory_UserRequestContextImpl$11X_0(this$static, user);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function UserRequestFactory_UserRequestContextImpl$11X_0(this$0, val$user){
  this.val$user = val$user;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1232, 631, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$11X_0);
_.makeRequestData = function makeRequestData_28(){
  return new RequestData_0('vMEVxvBL$fsBBnk3LEJqQbw7ypU=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$user]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
function UserRequestFactory_UserRequestContextImpl$1X_0(this$0, val$user, val$courseId){
  this.val$user = val$user;
  this.val$courseId = val$courseId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1233, 631, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_29(){
  return new RequestData_0('4kFsW5EpQ5A3QVDZhQI24vu1LRA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$user, this.val$courseId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}
;
function UserRequestFactory_UserRequestContextImpl$4X_0(this$0, val$user){
  this.val$user = val$user;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1236, 631, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_32(){
  return new RequestData_0('Qj3mMpCUVpjG2v4auY0Pl8wedEk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$user]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}
;
function UserRequestFactory_UserRequestContextImpl$8X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1239, 631, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_35(){
  return new RequestData_0('ZXEL4McK823kYxQGNpAGpYCyZ2I=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_UserProxy_2_classLit);
}
;
var Lcom_lemania_timetracking_client_presenter_UserManagementPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter', 886), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$1', 887), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$2', 888), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$3', 889), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$4', 890), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$5_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$5', 891), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$6', 892), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$7_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$7', 893), Lcom_lemania_timetracking_client_view_UserManagementView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView', 1133), Lcom_lemania_timetracking_client_view_UserManagementView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$1', 1134), Lcom_lemania_timetracking_client_view_UserManagementView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$2', 1136), Lcom_lemania_timetracking_client_view_UserManagementView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$3', 1137), Lcom_lemania_timetracking_client_view_UserManagementView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$4', 1138), Lcom_lemania_timetracking_client_view_UserManagementView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$5', 1139), Lcom_lemania_timetracking_client_view_UserManagementView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$6', 1140), Lcom_lemania_timetracking_client_view_UserManagementView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$7', 1141), Lcom_lemania_timetracking_client_view_UserManagementView$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$8', 1142), Lcom_lemania_timetracking_client_view_UserManagementView$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$9', 1143), Lcom_lemania_timetracking_client_view_UserManagementView$10_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$10', 1135), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl', 1144), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$Widgets', 1145), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$Widgets$1', 1146), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$Widgets$2', 1147), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$Widgets$3', 1148), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$1X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$1X', 1233), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$4X', 1236), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$8X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$8X', 1239), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$11X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$11X', 1232);
$entry(onLoad)(18);
