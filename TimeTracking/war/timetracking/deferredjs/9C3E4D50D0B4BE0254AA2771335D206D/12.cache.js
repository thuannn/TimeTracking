function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection___(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$UserManagementPresenter_UserManagementPresenter_methodInjection(_0, _1){
  return new UserManagementPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$UserManagementPresenter_UserManagementPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$ = new UserManagementView_0(new UserManagementView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$ = new UserManagementPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection___(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$3$1.prototype;
_.onSuccess = function onSuccess_12(){
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
  newUser.setActive(($clinit_Boolean() , $clinit_Boolean() , TRUE));
  $fire($save_5(rc, newUser), new UserManagementPresenter$2_0(this$static, newUser));
}

function $addSchoolSelected_0(this$static, ecoleId){
  var rc, rf;
  $equals_5(ecoleId, '') && alert_0("Veuillez choisir l'\xE9cole.");
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
  $equals_5(password, '') || updatedUser.setPassword(password);
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

function UserManagementPresenter(){
}

_ = UserManagementPresenter_0.prototype = UserManagementPresenter.prototype = new Presenter;
_.getClass$ = function getClass_635(){
  return Lcom_lemania_timetracking_client_presenter_UserManagementPresenter_2_classLit;
}
;
_.onBind = function onBind_18(){
  $initializeTables(dynamicCast(this.view, Q$UserManagementPresenter$MyView));
  $initializeDepartmentTable(dynamicCast(this.view, Q$UserManagementPresenter$MyView));
}
;
_.onReset = function onReset_12(){
  var rc, rf, x, rc_0, rf_0;
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
_.castableTypeMap$ = makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$UserManagementUiHandler]);
function $onSuccess_39(this$static, response){
  $setUserData(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function UserManagementPresenter$1(){
}

_ = UserManagementPresenter$1_0.prototype = UserManagementPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_636(){
  return Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_56(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_56(response){
  $onSuccess_39(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_40(this$static){
  $addNewUser_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$newUser);
}

function UserManagementPresenter$2_0(this$0, val$newUser){
  this.this$0 = this$0;
  this.val$newUser = val$newUser;
}

function UserManagementPresenter$2(){
}

_ = UserManagementPresenter$2_0.prototype = UserManagementPresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_637(){
  return Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_57(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_57(response){
  $onSuccess_40(this, throwClassCastExceptionUnlessNull(response));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
_.val$newUser = null;
function $onSuccess_41(this$static){
  $refreshTable_3(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), this$static.val$updatedUser);
}

function UserManagementPresenter$3_0(this$0, val$updatedUser){
  this.this$0 = this$0;
  this.val$updatedUser = val$updatedUser;
}

function UserManagementPresenter$3(){
}

_ = UserManagementPresenter$3_0.prototype = UserManagementPresenter$3.prototype = new Receiver;
_.getClass$ = function getClass_638(){
  return Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$3_2_classLit;
}
;
_.onFailure_0 = function onFailure_58(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_58(response){
  $onSuccess_41(this, throwClassCastExceptionUnlessNull(response));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
_.val$updatedUser = null;
function $onSuccess_42(this$static, response){
  $setEcoleAddList_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$4_0(this$0){
  this.this$0 = this$0;
}

function UserManagementPresenter$4(){
}

_ = UserManagementPresenter$4_0.prototype = UserManagementPresenter$4.prototype = new Receiver;
_.getClass$ = function getClass_639(){
  return Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$4_2_classLit;
}
;
_.onFailure_0 = function onFailure_59(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_59(response){
  $onSuccess_42(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_43(this$static, response){
  $setCourseAddList_0(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$5_0(this$0){
  this.this$0 = this$0;
}

function UserManagementPresenter$5(){
}

_ = UserManagementPresenter$5_0.prototype = UserManagementPresenter$5.prototype = new Receiver;
_.getClass$ = function getClass_640(){
  return Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$5_2_classLit;
}
;
_.onFailure_0 = function onFailure_60(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_60(response){
  $onSuccess_43(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_44(this$static, response){
  $refreshDepartmentTable(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
}

function UserManagementPresenter$6_0(this$0){
  this.this$0 = this$0;
}

function UserManagementPresenter$6(){
}

_ = UserManagementPresenter$6_0.prototype = UserManagementPresenter$6.prototype = new Receiver;
_.getClass$ = function getClass_641(){
  return Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$6_2_classLit;
}
;
_.onFailure_0 = function onFailure_61(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_61(response){
  $onSuccess_44(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_45(this$static, response){
  $refreshDepartmentTable(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView), response);
  $populateSelectedUserInfo(dynamicCast(this$static.this$0.view, Q$UserManagementPresenter$MyView));
}

function UserManagementPresenter$7_0(this$0){
  this.this$0 = this$0;
}

function UserManagementPresenter$7(){
}

_ = UserManagementPresenter$7_0.prototype = UserManagementPresenter$7.prototype = new Receiver;
_.getClass$ = function getClass_642(){
  return Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$7_2_classLit;
}
;
_.onFailure_0 = function onFailure_62(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_62(response){
  $onSuccess_45(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $addNewUser_0(this$static, newUser){
  var list;
  list = new ArrayList_0;
  setCheck(list.array, list.size_0++, newUser);
  $setRowData_0(this$static.tblUser, $getCurrentState(this$static.tblUser.presenter).rowCount + 1, list);
  $setRowCount(this$static.tblUser, $getCurrentState(this$static.tblUser.presenter).rowCount + list.size_0);
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
  colUserName = new UserManagementView$2_0;
  $addColumn(this$static.tblUser, colUserName, "Nom d'utilisateur");
  passCell = new EditTextCell_0;
  passCol = new UserManagementView$3_0(passCell);
  $addColumn(this$static.tblUser, passCol, 'Password');
  $setFieldUpdater(passCol, new UserManagementView$4_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new UserManagementView$5_0(cellActive);
  $addColumn(this$static.tblUser, colActive, 'Actif');
  $setFieldUpdater(colActive, new UserManagementView$6_0(this$static));
  cellAdmin = new CheckboxCell_0;
  colAdmin = new UserManagementView$7_0(cellAdmin);
  $addColumn(this$static.tblUser, colAdmin, 'Admin');
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
  !!this$static.uiHandlers && $addDepartment(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getValue_0(this$static.lstAddCourse, this$static.lstAddCourse.element.selectedIndex), this$static.selectedUser);
}

function $onLstAddEcoleChanged_1(this$static){
  !!this$static.uiHandlers && $addSchoolSelected_0(dynamicCast(this$static.uiHandlers, Q$UserManagementUiHandler), $getValue_0(this$static.lstAddEcole, this$static.lstAddEcole.element.selectedIndex));
}

function $populateSelectedUserInfo(this$static){
  if (this$static.selectedUser) {
    $setText_2(this$static.txtFullName, this$static.selectedUser.getFullName());
    $setText_2(this$static.txtUserName, this$static.selectedUser.getUserName());
    $setText_2(this$static.txtEmail, this$static.selectedUser.getEmail());
  }
}

function $refreshDepartmentTable(this$static, depts){
  $setRowData(this$static.tblDepartment, depts);
}

function $refreshTable_3(this$static, updatedUser){
  var users;
  users = new ArrayList_0;
  setCheck(users.array, users.size_0++, updatedUser);
  $setRowData_0(this$static.tblUser, this$static.selectedUserIndex, users);
  $redraw(this$static.tblUser);
  alert_0("Statut d'utilisateur a \xE9t\xE9 mis \xE0 jour.");
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
  $setRowData(this$static.tblUser, list);
}

function UserManagementView_0(){
  this.tblUser = new DataGrid_0;
  this.tblDepartment = new DataGrid_0;
  this.widget = $createAndBindUi_9(this);
}

function UserManagementView(){
}

_ = UserManagementView_0.prototype = UserManagementView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_18(){
  return this.widget;
}
;
_.getClass$ = function getClass_759(){
  return Lcom_lemania_timetracking_client_view_UserManagementView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$UserManagementPresenter$MyView]);
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

function UserManagementView$1(){
}

_ = UserManagementView$1_0.prototype = UserManagementView$1.prototype = new TextColumn;
_.getClass$ = function getClass_760(){
  return Lcom_lemania_timetracking_client_view_UserManagementView$1_2_classLit;
}
;
_.getValue = function getValue_29(object){
  return dynamicCast(object, Q$UserProxy).getFullName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function UserManagementView$10_0(){
  TextColumn_0.call(this);
}

function UserManagementView$10(){
}

_ = UserManagementView$10_0.prototype = UserManagementView$10.prototype = new TextColumn;
_.getClass$ = function getClass_761(){
  return Lcom_lemania_timetracking_client_view_UserManagementView$10_2_classLit;
}
;
_.getValue = function getValue_30(object){
  return dynamicCast(object, Q$CoursProxy).getCoursNom();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function UserManagementView$2_0(){
  TextColumn_0.call(this);
}

function UserManagementView$2(){
}

_ = UserManagementView$2_0.prototype = UserManagementView$2.prototype = new TextColumn;
_.getClass$ = function getClass_762(){
  return Lcom_lemania_timetracking_client_view_UserManagementView$2_2_classLit;
}
;
_.getValue = function getValue_31(object){
  return dynamicCast(object, Q$UserProxy).getUserName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function UserManagementView$3_0($anonymous0){
  this.cell = $anonymous0;
}

function UserManagementView$3(){
}

_ = UserManagementView$3_0.prototype = UserManagementView$3.prototype = new Column;
_.getClass$ = function getClass_763(){
  return Lcom_lemania_timetracking_client_view_UserManagementView$3_2_classLit;
}
;
_.getValue = function getValue_32(object){
  return dynamicCast(object, Q$UserProxy).getPassword();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $update_7(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), user.getAdmin(), value);
  }
}

function UserManagementView$4_0(this$0){
  this.this$0 = this$0;
}

function UserManagementView$4(){
}

_ = UserManagementView$4_0.prototype = UserManagementView$4.prototype = new Object_0;
_.getClass$ = function getClass_764(){
  return Lcom_lemania_timetracking_client_view_UserManagementView$4_2_classLit;
}
;
_.update = function update_6(index, user, value){
  $update_7(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function UserManagementView$5_0($anonymous0){
  this.cell = $anonymous0;
}

function UserManagementView$5(){
}

_ = UserManagementView$5_0.prototype = UserManagementView$5.prototype = new Column;
_.getClass$ = function getClass_765(){
  return Lcom_lemania_timetracking_client_view_UserManagementView$5_2_classLit;
}
;
_.getValue = function getValue_33(ecole){
  return dynamicCast(ecole, Q$UserProxy).getActive();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $update_8(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, value, user.getAdmin(), '');
  }
}

function UserManagementView$6_0(this$0){
  this.this$0 = this$0;
}

function UserManagementView$6(){
}

_ = UserManagementView$6_0.prototype = UserManagementView$6.prototype = new Object_0;
_.getClass$ = function getClass_766(){
  return Lcom_lemania_timetracking_client_view_UserManagementView$6_2_classLit;
}
;
_.update = function update_7(index, user, value){
  $update_8(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$7_0($anonymous0){
  this.cell = $anonymous0;
}

function UserManagementView$7(){
}

_ = UserManagementView$7_0.prototype = UserManagementView$7.prototype = new Column;
_.getClass$ = function getClass_767(){
  return Lcom_lemania_timetracking_client_view_UserManagementView$7_2_classLit;
}
;
_.getValue = function getValue_34(user){
  return dynamicCast(user, Q$UserProxy).getAdmin();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $update_9(this$static, index, user, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedUserIndex = index;
    $updateUserStatus(dynamicCast(this$static.this$0.uiHandlers, Q$UserManagementUiHandler), user, user.getActive(), value, '');
  }
}

function UserManagementView$8_0(this$0){
  this.this$0 = this$0;
}

function UserManagementView$8(){
}

_ = UserManagementView$8_0.prototype = UserManagementView$8.prototype = new Object_0;
_.getClass$ = function getClass_768(){
  return Lcom_lemania_timetracking_client_view_UserManagementView$8_2_classLit;
}
;
_.update = function update_8(index, user, value){
  $update_9(this, index, dynamicCast(user, Q$UserProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function UserManagementView$9_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

function UserManagementView$9(){
}

_ = UserManagementView$9_0.prototype = UserManagementView$9.prototype = new Object_0;
_.getClass$ = function getClass_769(){
  return Lcom_lemania_timetracking_client_view_UserManagementView$9_2_classLit;
}
;
_.onSelectionChange = function onSelectionChange_2(event_0){
  this.this$0.selectedUser = dynamicCast($getSelectedObject(this.val$selectionModel), Q$UserProxy);
  $userSelected(dynamicCast(this.this$0.uiHandlers, Q$UserManagementUiHandler), this.this$0.selectedUser);
}
;
_.castableTypeMap$ = makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]);
_.this$0 = null;
_.val$selectionModel = null;
function $createAndBindUi_9(owner){
  var attachRecord0, cmdAdd, cmdAddCourse, domId0, domId0Element, domId1, domId1Element, f_Grid11, f_Grid5, f_HTMLPanel1, f_HorizontalPanel15, f_HorizontalPanel4, f_Label10, f_Label12, f_Label13, f_Label14, f_Label2, f_Label6, f_Label7, f_Label8, f_Label9, f_VerticalPanel3, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, lstAddCourse, lstAddEcole, tblDepartment, tblUser, txtEmail, txtFullName, txtPassword, txtUserName, sb;
  domId0 = $createUniqueId($doc);
  f_Label2 = new Label_0;
  domId1 = $createUniqueId($doc);
  f_Label6 = new Label_0;
  txtFullName = new TextBox_0;
  f_Label7 = new Label_0;
  txtUserName = new TextBox_0;
  f_Label8 = new Label_0;
  txtPassword = new TextBox_0;
  f_Label9 = new Label_0;
  txtEmail = new TextBox_0;
  f_Label10 = new Label_0;
  cmdAdd = new Button_0;
  f_Grid5 = new Grid_0;
  f_Label12 = new Label_0;
  lstAddEcole = new ListBox_0;
  f_Label13 = new Label_0;
  lstAddCourse = new ListBox_0;
  f_Label14 = new Label_0;
  cmdAddCourse = new Button_0;
  f_Grid11 = new Grid_0;
  f_HorizontalPanel4 = new HorizontalPanel_0;
  tblUser = owner.tblUser;
  tblDepartment = owner.tblDepartment;
  f_HorizontalPanel15 = new HorizontalPanel_0;
  f_VerticalPanel3 = new VerticalPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span> <span id='" , $append_9(sb, htmlEscape(domId1)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  f_Label2.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label2.directionalTextHelper, 'Gestion des utilisateurs');
  $updateHorizontalAlignment(f_Label2);
  f_Label2.element.style['width'] = '900';
  $setVerticalAlignment(f_HorizontalPanel4, ($clinit_HasVerticalAlignment() , ALIGN_BOTTOM));
  $setTextOrHtml(f_Label6.directionalTextHelper, 'Nom & Pr\xE9nom :');
  $updateHorizontalAlignment(f_Label6);
  $setTextOrHtml(f_Label7.directionalTextHelper, "Nom d'utilisateur :");
  $updateHorizontalAlignment(f_Label7);
  $setTextOrHtml(f_Label8.directionalTextHelper, 'Mot de passe :');
  $updateHorizontalAlignment(f_Label8);
  $setTextOrHtml(f_Label9.directionalTextHelper, 'Email :');
  $updateHorizontalAlignment(f_Label9);
  $setTextOrHtml(f_Label10.directionalTextHelper, '.');
  $updateHorizontalAlignment(f_Label10);
  $setInnerText(cmdAdd.element, 'Ajouter');
  $resizeColumns(f_Grid5, 2);
  $resizeRows(f_Grid5, 6);
  $setWidget_1(f_Grid5, 0, 0, f_Label6);
  $setWidget_1(f_Grid5, 0, 1, txtFullName);
  $setWidget_1(f_Grid5, 1, 0, f_Label7);
  $setWidget_1(f_Grid5, 1, 1, txtUserName);
  $setWidget_1(f_Grid5, 2, 0, f_Label8);
  $setWidget_1(f_Grid5, 2, 1, txtPassword);
  $setWidget_1(f_Grid5, 3, 0, f_Label9);
  $setWidget_1(f_Grid5, 3, 1, txtEmail);
  $setWidget_1(f_Grid5, 4, 0, f_Label10);
  $setWidget_1(f_Grid5, 4, 1, cmdAdd);
  f_Grid5.element.style['width'] = '';
  $add_6(f_HorizontalPanel4, f_Grid5);
  $setTextOrHtml(f_Label12.directionalTextHelper, 'Ecoles :');
  $updateHorizontalAlignment(f_Label12);
  $setTextOrHtml(f_Label13.directionalTextHelper, 'D\xE9partements :');
  $updateHorizontalAlignment(f_Label13);
  $setInnerText(cmdAddCourse.element, 'Assigner');
  $resizeColumns(f_Grid11, 2);
  $resizeRows(f_Grid11, 3);
  $setWidget_1(f_Grid11, 0, 0, f_Label12);
  $setWidget_1(f_Grid11, 0, 1, lstAddEcole);
  $setWidget_1(f_Grid11, 1, 0, f_Label13);
  $setWidget_1(f_Grid11, 1, 1, lstAddCourse);
  $setWidget_1(f_Grid11, 2, 0, f_Label14);
  $setWidget_1(f_Grid11, 2, 1, cmdAddCourse);
  f_Grid11.element.style['width'] = '100%';
  $add_6(f_HorizontalPanel4, f_Grid11);
  f_HorizontalPanel4.element.style['height'] = '100%';
  f_HorizontalPanel4.element.style['width'] = '100%';
  $add_8(f_VerticalPanel3, f_HorizontalPanel4);
  tblUser.element.style['height'] = '450px';
  tblUser.element.style['width'] = '400px';
  $add_6(f_HorizontalPanel15, tblUser);
  tblDepartment.element.style['height'] = '450px';
  tblDepartment.element.style['width'] = '250px';
  $add_6(f_HorizontalPanel15, tblDepartment);
  f_HorizontalPanel15.element.style['width'] = '100%';
  $add_8(f_VerticalPanel3, f_HorizontalPanel15);
  f_VerticalPanel3.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  domId1Element = $getElementById($doc, domId1);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_Label2, domId0Element);
  $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel3, domId1Element);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new UserManagementView_BinderImpl$1_0(owner);
  $addDomHandler(cmdAdd, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new UserManagementView_BinderImpl$2_0(owner);
  $addDomHandler(lstAddEcole, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new UserManagementView_BinderImpl$3_0(owner);
  $addDomHandler(cmdAddCourse, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE_0);
  owner.lstAddCourse = lstAddCourse;
  owner.lstAddEcole = lstAddEcole;
  owner.txtEmail = txtEmail;
  owner.txtFullName = txtFullName;
  owner.txtPassword = txtPassword;
  owner.txtUserName = txtUserName;
  return f_HTMLPanel1;
}

function UserManagementView_BinderImpl_0(){
}

function UserManagementView_BinderImpl(){
}

_ = UserManagementView_BinderImpl_0.prototype = UserManagementView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_770(){
  return Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl_2_classLit;
}
;
function UserManagementView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function UserManagementView_BinderImpl$1(){
}

_ = UserManagementView_BinderImpl$1_0.prototype = UserManagementView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_771(){
  return Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$1_2_classLit;
}
;
_.onClick = function onClick_32(event_0){
  $onCmdAddClicked_1(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
function UserManagementView_BinderImpl$2_0(val$owner){
  this.val$owner = val$owner;
}

function UserManagementView_BinderImpl$2(){
}

_ = UserManagementView_BinderImpl$2_0.prototype = UserManagementView_BinderImpl$2.prototype = new Object_0;
_.getClass$ = function getClass_772(){
  return Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$2_2_classLit;
}
;
_.onChange = function onChange_10(event_0){
  $onLstAddEcoleChanged_1(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function UserManagementView_BinderImpl$3_0(val$owner){
  this.val$owner = val$owner;
}

function UserManagementView_BinderImpl$3(){
}

_ = UserManagementView_BinderImpl$3_0.prototype = UserManagementView_BinderImpl$3.prototype = new Object_0;
_.getClass$ = function getClass_773(){
  return Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$3_2_classLit;
}
;
_.onClick = function onClick_33(event_0){
  $onCmdAddCourseClicked_0(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
_ = UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1.prototype;
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
_ = UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2.prototype;
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

function UserRequestFactory_UserRequestContextImpl$1X(){
}

_ = UserRequestFactory_UserRequestContextImpl$1X_0.prototype = UserRequestFactory_UserRequestContextImpl$1X.prototype = new AbstractRequest;
_.getClass$ = function getClass_848(){
  return Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$1X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_24(){
  return new RequestData_0('4kFsW5EpQ5A3QVDZhQI24vu1LRA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$user, this.val$courseId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$courseId = null;
_.val$user = null;
function UserRequestFactory_UserRequestContextImpl$3X_0(this$0, val$user){
  this.val$user = val$user;
  AbstractRequest_0.call(this, this$0);
}

function UserRequestFactory_UserRequestContextImpl$3X(){
}

_ = UserRequestFactory_UserRequestContextImpl$3X_0.prototype = UserRequestFactory_UserRequestContextImpl$3X.prototype = new AbstractRequest;
_.getClass$ = function getClass_850(){
  return Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$3X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_26(){
  return new RequestData_0('Qj3mMpCUVpjG2v4auY0Pl8wedEk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$user]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$user = null;
function UserRequestFactory_UserRequestContextImpl$6X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

function UserRequestFactory_UserRequestContextImpl$6X(){
}

_ = UserRequestFactory_UserRequestContextImpl$6X_0.prototype = UserRequestFactory_UserRequestContextImpl$6X.prototype = new AbstractRequest;
_.getClass$ = function getClass_852(){
  return Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$6X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_28(){
  return new RequestData_0('ZXEL4McK823kYxQGNpAGpYCyZ2I=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_UserProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
function UserRequestFactory_UserRequestContextImpl$9X_0(this$0, val$user){
  this.val$user = val$user;
  AbstractRequest_0.call(this, this$0);
}

function UserRequestFactory_UserRequestContextImpl$9X(){
}

_ = UserRequestFactory_UserRequestContextImpl$9X_0.prototype = UserRequestFactory_UserRequestContextImpl$9X.prototype = new AbstractRequest;
_.getClass$ = function getClass_853(){
  return Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$9X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_29(){
  return new RequestData_0('vMEVxvBL$fsBBnk3LEJqQbw7ypU=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$user]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$user = null;
var Lcom_lemania_timetracking_client_presenter_UserManagementPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$3', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$4', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$5_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$5', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$6', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_UserManagementPresenter$7_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'UserManagementPresenter$7', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$1', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView$10_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$10', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$2', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$3', Lcom_google_gwt_user_cellview_client_Column_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$4', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$5', Lcom_google_gwt_user_cellview_client_Column_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$6', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$7', Lcom_google_gwt_user_cellview_client_Column_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$8', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView$9', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_UserManagementView_1BinderImpl$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'UserManagementView_BinderImpl$3', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$1X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$1X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$3X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$6X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$6X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$9X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$9X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(12);
