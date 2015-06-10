function $onBrowserEvent_0(this$static, context, parent_0, value_0, event_0, valueUpdater){
  var eventTarget;
  $onBrowserEvent(this$static, context, parent_0, value_0, event_0, valueUpdater);
  if ($equals_3('click', event_0.type)) {
    eventTarget = $eventGetTarget(event_0);
    if (!is_0(eventTarget)) {
      return;
    }
    $isOrHasChild($getFirstChildElement(parent_0), eventTarget) && !!valueUpdater && valueUpdater.update_0(value_0);
  }
}

function $onEnterKeyDown(value_0, valueUpdater){
  !!valueUpdater && valueUpdater.update_0(value_0);
}

function ButtonCell_0(){
  ButtonCell_1.call(this, (!instance_2 && (instance_2 = new SimpleSafeHtmlRenderer_0) , instance_2));
}

function ButtonCell_1(renderer){
  AbstractSafeHtmlCell_0.call(this, renderer, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['click', 'keydown']));
}

defineSeed(89, 88, {}, ButtonCell_0);
_.onBrowserEvent = function onBrowserEvent_0(context, parent_0, value_0, event_0, valueUpdater){
  $onBrowserEvent_0(this, context, parent_0, dynamicCast(value_0, Q$String), event_0, valueUpdater);
}
;
_.onEnterKeyDown = function onEnterKeyDown_0(context, parent_0, value_0, event_0, valueUpdater){
  $onEnterKeyDown(dynamicCast(value_0, Q$String), valueUpdater);
}
;
_.render_0 = function render_0(context, data_0, sb){
  $append_11(sb.sb, '<button type="button" tabindex="-1">');
  !!data_0 && ($append_11(sb.sb, data_0.html) , sb);
  $append_11(sb.sb, '<\/button>');
}
;
function $setKeyboardPagingPolicy(this$static, policy){
  $setKeyboardPagingPolicy_0(this$static.presenter, policy);
}

function $setColumnWidth(this$static, column, width_0){
  this$static.columnWidthsByIndex.put(valueOf_1(column), width_0);
  this$static.maxColumnIndex = max_0(this$static.maxColumnIndex, column);
  column < max_0(this$static.columns.size_0, this$static.maxColumnIndex + 1) && $doSetColumnWidth(this$static, column, width_0);
}

function $setKeyboardPagingPolicy_0(this$static, policy){
  if (!policy) {
    throw new NullPointerException_1('KeyboardPagingPolicy cannot be null');
  }
  this$static.keyboardPagingPolicy = policy;
}

function $addAll(this$static, c){
  var toRet;
  this$static.minModified = min_0(this$static.minModified, this$static.list.size_1());
  toRet = this$static.list.addAll(c);
  this$static.maxModified = this$static.list.size_1();
  this$static.modified = true;
  $flush(this$static);
  return toRet;
}

function $set_1(this$static, index_0, element){
  var toRet;
  toRet = this$static.list.set_0(index_0, element);
  this$static.minModified = min_0(this$static.minModified, index_0);
  this$static.maxModified = max_0(this$static.maxModified, index_0 + 1);
  this$static.modified = true;
  $flush(this$static);
  return toRet;
}

defineSeed(549, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.addAll = function addAll(c){
  return $addAll(this, c);
}
;
_.set_0 = function set_1(index_0, element){
  return $set_1(this, index_0, element);
}
;
function $addCourse(this$static, courseId, prof){
  var rc, rf;
  if (!courseId.length) {
    alert_0('Veuillez choisir un d\xE9partement \xE0 rajouter.');
    return;
  }
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($saveAndReturn(rc, courseId, '' + toString_6(prof.getId_0().value_0)), new ProfsPresenter$6_0(this$static, prof));
}

function $addSchoolSelected(this$static, ecoleId){
  var rc, rf;
  $equals_3(ecoleId, '') && alert_0("Veuillez choisir l'\xE9cole.");
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAll_0(rc, ecoleId), new ProfsPresenter$7_0(this$static));
}

function $getProfessorsList(this$static, status_0){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllActive_0(rc, ($clinit_Boolean() , $equals_3(status_0, '1')?TRUE_1:FALSE_1)), new ProfsPresenter$2_0(this$static));
}

function $professorSelected(this$static, prof){
  var rc, rf;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($listAll(rc, '' + toString_6(prof.getId_0().value_0)), new ProfsPresenter$5_0(this$static));
}

function $updateAssignmentStatus(this$static, assignment, status_0){
  var rc, rf;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($updateAssignmentStatus_0(rc, this$static.currentUser.userId, assignment, status_0), new ProfsPresenter$9_0);
}

function $updateManager(this$static, prof, managerName, profName){
  var rc, rf, x_0;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire((x_0 = new ProfessorRequestFactory_ProfessorRequestContextImpl$11X_0(rc, prof, managerName, profName) , $addInvocation(rc.state.dialect, x_0) , x_0), new ProfsPresenter$10_0(this$static));
}

function $updateProfessorStatus(this$static, prof, status_0){
  var profForUpdate, rc, rf, x_0;
  if (!this$static.currentUser.isAdmin) {
    alert_0("Veuillez vous connecter avec le code d'acc\xE8s de l'administrateur. La modification n'a pas \xE9t\xE9 effectu\xE9e.");
    return;
  }
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  profForUpdate = dynamicCast($editProxy(rc, prof), Q$ProfessorProxy);
  profForUpdate.setProfActive(status_0);
  $fire((x_0 = new ProfessorRequestFactory_ProfessorRequestContextImpl$10X_0(rc, profForUpdate) , $addInvocation(rc.state.dialect, x_0) , x_0), new ProfsPresenter$4_0(this$static));
}

function ProfsPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(826, 693, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfsPresenter, Q$ProfessorListUiHandler]), ProfsPresenter_0);
_.onBind = function onBind_12(){
  dynamicCast(this.view, Q$ProfsPresenter$MyView).setUiHandlers(this);
  $initializeTable_3(dynamicCast(this.view, Q$ProfsPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_5(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_5(){
  var rf, rc, x_0, rf_0, rc_0;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x_0 = new UserRequestFactory_UserRequestContextImpl$6X_0(rc) , $addInvocation(rc.state.dialect, x_0) , x_0), new ProfsPresenter$1_0(this));
  rf_0 = new EcoleRequestFactoryImpl_0;
  $initialize(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf_0);
  $fire($listAllActive(rc_0), new ProfsPresenter$3_0(this));
  $hideAdminFunction(dynamicCast(this.view, Q$ProfsPresenter$MyView), this.currentUser.isAdmin);
}
;
_.revealInParent = function revealInParent_11(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_19(this$static, managerNames){
  $setManagerNameList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), managerNames);
  $getProfessorsList(this$static.this$0, '1');
}

function ProfsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(827, 629, makeCastMap([Q$Receiver]), ProfsPresenter$1_0);
_.onFailure_0 = function onFailure_19(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_19(managerNames){
  $onSuccess_19(this, dynamicCast(managerNames, Q$List));
}
;
function $onSuccess_20(this$static, response){
  response?$refreshTable_2(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response):alert_0("Une erreur s'est produite. Les donn\xE9es n'\xE9taient pas enregistr\xE9es.");
}

function ProfsPresenter$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(828, 629, makeCastMap([Q$Receiver]), ProfsPresenter$10_0);
_.onFailure_0 = function onFailure_20(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_20(response){
  $onSuccess_20(this, dynamicCast(response, Q$ProfessorProxy));
}
;
function $onSuccess_21(this$static, response){
  $setData_3(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(829, 629, makeCastMap([Q$Receiver]), ProfsPresenter$2_0);
_.onFailure_0 = function onFailure_21(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_21(response){
  $onSuccess_21(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_22(this$static, response){
  $setEcoleAddList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(830, 629, makeCastMap([Q$Receiver]), ProfsPresenter$3_0);
_.onFailure_0 = function onFailure_22(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_22(response){
  $onSuccess_22(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_23(this$static, response){
  $refreshTable_2(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(831, 629, makeCastMap([Q$Receiver]), ProfsPresenter$4_0);
_.onFailure_0 = function onFailure_23(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_23(response){
  $onSuccess_23(this, dynamicCast(response, Q$ProfessorProxy));
}
;
function $onSuccess_24(this$static, response){
  $setAssignmentList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(832, 629, makeCastMap([Q$Receiver]), ProfsPresenter$5_0);
_.onFailure_0 = function onFailure_24(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_24(response){
  $onSuccess_24(this, dynamicCast(response, Q$List));
}
;
function ProfsPresenter$6_0(this$0, val$prof){
  this.this$0 = this$0;
  this.val$prof = val$prof;
}

defineSeed(833, 629, makeCastMap([Q$Receiver]), ProfsPresenter$6_0);
_.onFailure_0 = function onFailure_25(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_25(response){
  !dynamicCast(response, Q$AssignmentProxy) && alert_0('D\xE9partment d\xE9j\xE0 existe dans la liste.');
  $professorSelected(this.this$0, this.val$prof);
}
;
function $onSuccess_25(this$static, response){
  $setCourseAddList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(834, 629, makeCastMap([Q$Receiver]), ProfsPresenter$7_0);
_.onFailure_0 = function onFailure_26(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_26(response){
  $onSuccess_25(this, dynamicCast(response, Q$List));
}
;
function ProfsPresenter$9_0(){
}

defineSeed(835, 629, makeCastMap([Q$Receiver]), ProfsPresenter$9_0);
_.onFailure_0 = function onFailure_27(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_27(response){
  !dynamicCast(response, Q$AssignmentProxy) && alert_0("ERREUR : Vous n'\xEAtes pas le responsable de ce d\xE9partement.");
}
;
function $get_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$) {
    result = new ProfsPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$;
}

defineSeed(904, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_53(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $hideAdminFunction(this$static, isAdmin){
  if (isAdmin) {
    $setColumnWidth(this$static.tblProfessors, 0, '100px');
    $setColumnWidth(this$static.tblProfessors, 3, '100px');
  }
   else {
    $setColumnWidth(this$static.tblProfessors, 0, '0px');
    $setColumnWidth(this$static.tblProfessors, 3, '0px');
  }
}

function $initializeTable_3(this$static){
  var cellActive, cellAssignmentActive, colActive, colAssignmentActive, colCourseName, colManagerName, colManagerNameEdit, colName, colSchoolName, selectionModel, tic;
  $insertItem(this$static.lstStatus, 'Actif', '1', -1);
  $insertItem(this$static.lstStatus, 'Inactif', '0', -1);
  cellActive = new CheckboxCell_0;
  colActive = new ProfsView$1_0(cellActive);
  $setFieldUpdater(colActive, new ProfsView$2_0(this$static));
  $addColumn(this$static.tblProfessors, colActive, 'Active');
  $setColumnWidth_0(this$static.tblProfessors, colActive, 50 + ($clinit_Style$Unit() , 'px'));
  tic = new TextCell_0;
  colName = new ProfsView$3_0(tic);
  $addColumn(this$static.tblProfessors, colName, 'Nom');
  $setColumnWidth_0(this$static.tblProfessors, colName, '200px');
  colManagerName = new ProfsView$4_0(new TextCell_0);
  $addColumn(this$static.tblProfessors, colManagerName, 'Responsable');
  colManagerNameEdit = new ProfsView$5_0(new ButtonCell_0);
  $setFieldUpdater(colManagerNameEdit, new ProfsView$6_0(this$static));
  $addColumn(this$static.tblProfessors, colManagerNameEdit, '');
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblProfessors, selectionModel);
  $addSelectionChangeHandler(selectionModel, new ProfsView$7_0(this$static, selectionModel));
  $addDataDisplay(this$static.professorsProvider, this$static.tblProfessors);
  colSchoolName = new ProfsView$8_0;
  $addColumn(this$static.tblAssignments, colSchoolName, 'Ecole');
  colCourseName = new ProfsView$9_0;
  $addColumn(this$static.tblAssignments, colCourseName, 'Cours');
  cellAssignmentActive = new CheckboxCell_0;
  colAssignmentActive = new ProfsView$10_0(cellAssignmentActive);
  $addColumn(this$static.tblAssignments, colAssignmentActive, 'Active');
  $setFieldUpdater(colAssignmentActive, new ProfsView$11_0(this$static));
}

function $onCmdAddCourseClicked(this$static){
  !!this$static.uiHandlers && $addCourse(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), $getValue_1(this$static.lstAddCourse, $getSelectElement(this$static.lstAddCourse).selectedIndex), this$static.selectedProfessor);
}

function $onCmdSaveManagerClick(this$static){
  $updateManager(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), this$static.selectedProfessor, $getItemText(this$static.lstManagers, $getSelectElement(this$static.lstManagers).selectedIndex), $getPropertyString($getElement(this$static.txtProfNom), 'value'));
  $hide(this$static.popup);
}

function $onLstAddEcoleChanged(this$static){
  !!this$static.uiHandlers && $addSchoolSelected(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), $getValue_1(this$static.lstAddEcole, $getSelectElement(this$static.lstAddEcole).selectedIndex));
}

function $onLstStatusChange(this$static){
  $getProfessorsList(dynamicCast(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), Q$ProfsPresenter), $getValue_1(this$static.lstStatus, $getSelectElement(this$static.lstStatus).selectedIndex));
}

function $refreshTable_2(this$static, prof){
  if (this$static.selectedProfIndex != -1) {
    $set_1(this$static.professorsProvider.listWrapper, this$static.selectedProfIndex, prof);
    $flushNow(this$static.professorsProvider.listWrapper);
  }
}

function $setAssignmentList(this$static, assignments){
  $setRowData_0(this$static.tblAssignments, assignments);
  $setRowCount_0(this$static.tblAssignments, assignments.size_1(), true);
}

function $setCourseAddList(this$static, cours){
  var i;
  $selectClear($getSelectElement(this$static.lstAddCourse));
  $insertItem(this$static.lstAddCourse, '-', '', -1);
  for (i = 0; i < cours.size_1(); i++)
    $insertItem(this$static.lstAddCourse, dynamicCast(cours.get_1(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(cours.get_1(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $setData_3(this$static, profs){
  $clear_3(this$static.professorsProvider.listWrapper);
  $addAll(this$static.professorsProvider.listWrapper, profs);
  $flushNow(this$static.professorsProvider.listWrapper);
}

function $setEcoleAddList(this$static, ecoles){
  var i;
  $selectClear($getSelectElement(this$static.lstAddEcole));
  $insertItem(this$static.lstAddEcole, '-', '', -1);
  for (i = 0; i < ecoles.size_1(); i++)
    $insertItem(this$static.lstAddEcole, dynamicCast(ecoles.get_1(i), Q$EcoleProxy).getSchoolName(), '' + toString_6(dynamicCast(ecoles.get_1(i), Q$EcoleProxy).getId_0().value_0), -1);
}

function $setManagerNameList(this$static, managerNames){
  var i;
  $clear_5(this$static.managerNames);
  $addAll_1(this$static.managerNames, managerNames);
  $selectClear($getSelectElement(this$static.lstManagers));
  for (i = 0; i < managerNames.size_1(); i++) {
    $insertItem(this$static.lstManagers, dynamicCast(managerNames.get_1(i), Q$String), dynamicCast(managerNames.get_1(i), Q$String), -1);
  }
}

function ProfsView_0(){
  this.tblAssignments = new DataGrid_0;
  this.tblProfessors = new DataGrid_0;
  this.professorsProvider = new ListDataProvider_0;
  this.popup = new PopupPanel_0;
  this.managerNames = new ArrayList_0;
  this.widget = $build_f_HTMLPanel1_10(new ProfsView_BinderImpl$Widgets_0(this));
}

defineSeed(1041, 698, makeCastMap([Q$IsWidget, Q$ProfsPresenter$MyView]), ProfsView_0);
_.asWidget = function asWidget_14(){
  return this.widget;
}
;
_.selectedProfIndex = 0;
function ProfsView$1_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1042, 357, makeCastMap([Q$HasCell, Q$Column]), ProfsView$1_0);
_.getValue = function getValue_9(ecole){
  return dynamicCast(ecole, Q$ProfessorProxy).getProfActive();
}
;
function ProfsView$10_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1043, 357, makeCastMap([Q$HasCell, Q$Column]), ProfsView$10_0);
_.getValue = function getValue_10(object){
  return dynamicCast(object, Q$AssignmentProxy).getActive();
}
;
function $update_6(this$static, assignment, value_0){
  !!this$static.this$0.uiHandlers && $updateAssignmentStatus(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), assignment, value_0);
}

function ProfsView$11_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1044, 1, {}, ProfsView$11_0);
_.update = function update_7(index_0, assignment, value_0){
  $update_6(this, dynamicCast(assignment, Q$AssignmentProxy), dynamicCast(value_0, Q$Boolean));
}
;
function $update_7(this$static, index_0, prof, value_0){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedProfIndex = index_0;
    $updateProfessorStatus(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), prof, value_0);
  }
}

function ProfsView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1045, 1, {}, ProfsView$2_0);
_.update = function update_8(index_0, prof, value_0){
  $update_7(this, index_0, dynamicCast(prof, Q$ProfessorProxy), dynamicCast(value_0, Q$Boolean));
}
;
function ProfsView$3_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1046, 357, makeCastMap([Q$HasCell, Q$Column]), ProfsView$3_0);
_.getValue = function getValue_11(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
function ProfsView$4_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1047, 357, makeCastMap([Q$HasCell, Q$Column]), ProfsView$4_0);
_.getValue = function getValue_12(object){
  return dynamicCast(object, Q$ProfessorProxy).getManagerName();
}
;
function ProfsView$5_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1048, 357, makeCastMap([Q$HasCell, Q$Column]), ProfsView$5_0);
_.getValue = function getValue_13(object){
  return dynamicCast(object, Q$ProfessorProxy) , 'Editer';
}
;
function $update_8(this$static, index_0, prof){
  var i;
  this$static.this$0.selectedProfessor = prof;
  this$static.this$0.selectedProfIndex = index_0;
  if (!$equals_3('hidden', $getElement(this$static.this$0.popup).style['visibility'])) {
    for (i = 0; i < $getSelectElement(this$static.this$0.lstManagers).options.length; i++) {
      if ($equals_3($getItemText(this$static.this$0.lstManagers, i), prof.getManagerName())) {
        $setSelectedIndex_0(this$static.this$0.lstManagers, i);
        break;
      }
    }
    $setText_2(this$static.this$0.txtProfNom, prof.getProfName());
    if (!this$static.this$0.popup.widget) {
      $setVisible_0(this$static.this$0.pnlManagerList, true);
      $add_3(this$static.this$0.popup, this$static.this$0.pnlManagerList);
    }
    $center(this$static.this$0.popup);
  }
}

function ProfsView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1049, 1, {}, ProfsView$6_0);
_.update = function update_9(index_0, prof, value_0){
  $update_8(this, index_0, dynamicCast(prof, Q$ProfessorProxy), dynamicCast(value_0, Q$String));
}
;
function ProfsView$7_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1050, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ProfsView$7_0);
_.onSelectionChange = function onSelectionChange_0(event_0){
  this.this$0.selectedProfessor = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfessorProxy);
  if (this.this$0.selectedProfessor) {
    $setText_0(this.this$0.lblProfNameAssign, this.this$0.selectedProfessor.getProfName());
    $professorSelected(dynamicCast(this.this$0.uiHandlers, Q$ProfessorListUiHandler), this.this$0.selectedProfessor);
  }
}
;
function ProfsView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1051, 383, makeCastMap([Q$HasCell, Q$Column]), ProfsView$8_0);
_.getValue = function getValue_14(object){
  return dynamicCast(object, Q$AssignmentProxy).getSchoolName();
}
;
function ProfsView$9_0(){
  TextColumn_0.call(this);
}

defineSeed(1052, 383, makeCastMap([Q$HasCell, Q$Column]), ProfsView$9_0);
_.getValue = function getValue_15(object){
  return dynamicCast(object, Q$AssignmentProxy).getCourseName();
}
;
function ProfsView_BinderImpl_0(){
}

defineSeed(1053, 1, {}, ProfsView_BinderImpl_0);
function $build_f_HTMLPanel1_10(this$static){
  var attachRecord9, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel12, f_HorizontalPanel6, f_Label7, lstStatus, tblProfessors, pnlManagerList, f_Label8, f_Grid9, f_Label10, lstManagers, f_Label11, txtProfNom, cmdSaveManager, f_Label13, lblProfNameAssign, f_VerticalPanel14, f_Label15, f_Grid16, f_Label17, lstAddEcole, f_Label18, lstAddCourse, cmdAddCourse, sb, f_Label20, f_VerticalPanel21, f_Label22, tblAssignments;
  f_HTMLPanel1 = new HTMLPanel_0($html2_0(this$static.domId0).html);
  ($clinit_DOM() , f_HTMLPanel1.element).style['width'] = '100%';
  attachRecord9 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord9.origParent?$insertBefore(attachRecord9.origParent, attachRecord9.element, attachRecord9.origSibling):orphan(attachRecord9.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_10(f_VerticalPanel2, (f_Label3 = new Label_0 , $setClassName(f_Label3.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES PROFESSEURS', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_10(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_8(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel5, ALIGN_CENTER) , $add_10(f_VerticalPanel5, (f_HorizontalPanel6 = new HorizontalPanel_0 , $add_8(f_HorizontalPanel6, (f_Label7 = new Label_0 , $setAutoHorizontalAlignment(f_Label7, ALIGN_RIGHT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Statut :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_8(f_HorizontalPanel6, (lstStatus = new ListBox_0 , $addDomHandler(lstStatus, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstStatus = lstStatus , lstStatus)) , f_HorizontalPanel6.element.style['width'] = '95%' , f_HorizontalPanel6)) , $add_10(f_VerticalPanel5, (tblProfessors = new DataGrid_0 , $setClassName(tblProfessors.element, 'body') , $setKeyboardPagingPolicy(tblProfessors, ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , INCREASE_RANGE)) , tblProfessors.element.style['height'] = '550px' , $setAlwaysShowScrollBars(tblProfessors.tableDataScroller, false) , tblProfessors.element.style['width'] = '600px' , $setVisibleRange(tblProfessors, new Range_1($getVisibleRange(tblProfessors.presenter).start_0, 200)) , $setFocus(tblProfessors, false) , $setKeyboardSelectionPolicy(tblProfessors, ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED)) , this$static.owner.tblProfessors = tblProfessors , tblProfessors)) , $add_10(f_VerticalPanel5, (pnlManagerList = new VerticalPanel_0 , $setHorizontalAlignment_1(pnlManagerList, ALIGN_CENTER) , $add_10(pnlManagerList, (f_Label8 = new Label_0 , $setClassName(f_Label8.element, 'sectionTitle') , $setTextOrHtml(f_Label8.directionalTextHelper, 'Edit Professeur', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_10(pnlManagerList, (f_Grid9 = new Grid_0 , $resizeColumns(f_Grid9, 2) , $resizeRows(f_Grid9, 2) , $setWidget_1(f_Grid9, 0, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Responsable', false) , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $setWidget_1(f_Grid9, 0, 1, (lstManagers = new ListBox_0 , this$static.owner.lstManagers = lstManagers , lstManagers)) , $setWidget_1(f_Grid9, 1, 0, (f_Label11 = new Label_0 , $setTextOrHtml(f_Label11.directionalTextHelper, 'Nom', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $setWidget_1(f_Grid9, 1, 1, (txtProfNom = new TextBox_0 , txtProfNom.element.style['width'] = '300px' , this$static.owner.txtProfNom = txtProfNom , txtProfNom)) , f_Grid9.element.style['width'] = '100%' , f_Grid9)) , $add_10(pnlManagerList, (cmdSaveManager = new Button_0 , $setClassName(cmdSaveManager.element, 'button-highlight') , $setInnerText(cmdSaveManager.element, 'Valider') , $addDomHandler(cmdSaveManager, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSaveManager)) , setVisible(pnlManagerList.element, false) , pnlManagerList.element.style['width'] = '250px' , $setPropertyInt(pnlManagerList.table, 'cellSpacing', 2) , this$static.owner.pnlManagerList = pnlManagerList , pnlManagerList)) , f_VerticalPanel5.element.style['width'] = '400px' , $setPropertyInt(f_VerticalPanel5.table, 'cellSpacing', 5) , f_VerticalPanel5)) , $add_8(f_HorizontalPanel4, (f_VerticalPanel12 = new VerticalPanel_0 , $add_10(f_VerticalPanel12, (f_Label13 = new Label_0 , $setClassName(f_Label13.element, 'hiddenText') , $setTextOrHtml(f_Label13.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $add_10(f_VerticalPanel12, (lblProfNameAssign = new Label_0 , $setClassName(lblProfNameAssign.element, 'header') , this$static.owner.lblProfNameAssign = lblProfNameAssign , lblProfNameAssign)) , $add_10(f_VerticalPanel12, (f_VerticalPanel14 = new VerticalPanel_0 , $add_10(f_VerticalPanel14, (f_Label15 = new Label_0 , $setClassName(f_Label15.element, 'sectionTitle') , $setTextOrHtml(f_Label15.directionalTextHelper, 'Assigner un d\xE9partement', false) , $updateHorizontalAlignment(f_Label15) , f_Label15.element.style['width'] = '' , f_Label15)) , $add_10(f_VerticalPanel14, (f_Grid16 = new Grid_0 , $resizeColumns(f_Grid16, 2) , $resizeRows(f_Grid16, 3) , $setWidget_1(f_Grid16, 0, 0, (f_Label17 = new Label_0 , $setTextOrHtml(f_Label17.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label17) , f_Label17.element.style['width'] = '' , f_Label17)) , $setWidget_1(f_Grid16, 0, 1, (lstAddEcole = new ListBox_0 , $addDomHandler(lstAddEcole, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstAddEcole = lstAddEcole , lstAddEcole)) , $setWidget_1(f_Grid16, 1, 0, (f_Label18 = new Label_0 , $setTextOrHtml(f_Label18.directionalTextHelper, 'D\xE9partement :', false) , $updateHorizontalAlignment(f_Label18) , f_Label18.element.style['width'] = '' , f_Label18)) , $setWidget_1(f_Grid16, 1, 1, (lstAddCourse = new ListBox_0 , this$static.owner.lstAddCourse = lstAddCourse , lstAddCourse)) , $setWidget_1(f_Grid16, 2, 0, new Label_0) , $setWidget_1(f_Grid16, 2, 1, (cmdAddCourse = new Button_0 , $setHTML(cmdAddCourse, (sb = new StringBuilder_0 , $append_2(sb.impl, 'Ajouter') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $setClassName(cmdAddCourse.element, 'button-highlight') , $addDomHandler(cmdAddCourse, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, TYPE_0) , cmdAddCourse)) , f_Grid16.element.style['width'] = '100%' , f_Grid16)) , $setClassName(f_VerticalPanel14.element, 'subSection') , f_VerticalPanel14.element.style['width'] = '100%' , f_VerticalPanel14)) , $add_10(f_VerticalPanel12, (f_Label20 = new Label_0 , $setClassName(f_Label20.element, 'hiddenText') , $setTextOrHtml(f_Label20.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $add_10(f_VerticalPanel12, (f_VerticalPanel21 = new VerticalPanel_0 , $add_10(f_VerticalPanel21, (f_Label22 = new Label_0 , $setClassName(f_Label22.element, 'sectionTitle') , $setTextOrHtml(f_Label22.directionalTextHelper, 'Liste des d\xE9partement assign\xE9s', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $add_10(f_VerticalPanel21, (tblAssignments = new DataGrid_0 , tblAssignments.element.style['height'] = '350PX' , tblAssignments.element.style['width'] = '400px' , this$static.owner.tblAssignments = tblAssignments , tblAssignments)) , $setClassName(f_VerticalPanel21.element, 'subSection') , f_VerticalPanel21.element.style['width'] = '100%' , f_VerticalPanel21)) , f_VerticalPanel12.element.style['width'] = '400px' , f_VerticalPanel12)) , f_HorizontalPanel4.element.style['width'] = '850px' , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ProfsView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfsView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfsView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ProfsView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ProfsView_BinderImpl$Widgets$4_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1054, 1, {}, ProfsView_BinderImpl$Widgets_0);
function ProfsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1055, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_29(event_0){
  $onCmdAddCourseClicked(this.this$1.owner);
}
;
function ProfsView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1056, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_2(event_0){
  $onLstAddEcoleChanged(this.this$1.owner);
}
;
function ProfsView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1057, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_3(event_0){
  $onLstStatusChange(this.this$1.owner);
}
;
function ProfsView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1058, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$4_0);
_.onClick = function onClick_30(event_0){
  $onCmdSaveManagerClick(this.this$1.owner);
}
;
function $html2_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$) {
    result = new ProfsView_0(new ProfsView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$;
}

function $$init_9(this$static){
  this$static.shim = new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_9(this);
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_9(this);
}

defineSeed(1153, 587, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_8(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_8(){
  return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_16(){
  return Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_7(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = $getActive(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'active'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('active', value_0, propertyContext);
  value_0 = $getId_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value_0, propertyContext);
  value_0 = $getCourseName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'courseName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('courseName', value_0, propertyContext);
  value_0 = $getSchoolName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolName', value_0, propertyContext);
}
;
function $getActive(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getCourseName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getCourseName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getSchoolName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getSchoolName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1154, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_28(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).equals$(o);
}
;
_.getActive = function getActive(){
  return $getActive(this);
}
;
_.getCourseName = function getCourseName(){
  return $getCourseName(this);
}
;
_.getId_0 = function getId_1(){
  return $getId_2(this);
}
;
_.getSchoolName = function getSchoolName(){
  return $getSchoolName(this);
}
;
_.hashCode$ = function hashCode_28(){
  return dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).hashCode$();
}
;
_.toString$ = function toString_26(){
  return dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).toString$();
}
;
function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1155, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_29(other){
  return equals_14(this.this$0, other);
}
;
_.getActive = function getActive_0(){
  return dynamicCast($getOrReify(this.this$0, 'active'), Q$Boolean);
}
;
_.getCourseName = function getCourseName_0(){
  return dynamicCast($getOrReify(this.this$0, 'courseName'), Q$String);
}
;
_.getId_0 = function getId_2(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getSchoolName = function getSchoolName_0(){
  return dynamicCast($getOrReify(this.this$0, 'schoolName'), Q$String);
}
;
_.hashCode$ = function hashCode_29(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
function $clinit_AssignmentRequestFactoryImpl(){
  $clinit_AssignmentRequestFactoryImpl = nullMethod;
  tokensToTypes = new HashMap_0;
  typesToTokens = new HashMap_0;
  entityProxyTypes = new HashSet_0;
  valueProxyTypes = new HashSet_0;
  tokensToTypes.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_17(entityProxyTypes, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes.put('nZbZVLrq3Nvi3xgPJFIvRwOnXEo=', Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit);
  typesToTokens.put(Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit, 'nZbZVLrq3Nvi3xgPJFIvRwOnXEo=');
  $add_17(entityProxyTypes, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit);
}

function AssignmentRequestFactoryImpl_0(){
  $clinit_AssignmentRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1177, 624, {}, AssignmentRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken(){
  return 'com.lemania.timetracking.shared.service.AssignmentRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken(typeToken){
  return dynamicCast(tokensToTypes.get_2(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_3(type_0){
  return dynamicCast(typesToTokens.get_2(type_0), Q$String);
}
;
_.isEntityType = function isEntityType_0(type_0){
  return $contains_1(entityProxyTypes, type_0);
}
;
_.isValueType = function isValueType_0(type_0){
  return $contains_1(valueProxyTypes, type_0);
}
;
var entityProxyTypes, tokensToTypes, typesToTokens, valueProxyTypes;
function $listAll(this$static, profId){
  var x_0;
  x_0 = new AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$static, profId);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function $saveAndReturn(this$static, courseId, profId){
  var x_0;
  x_0 = new AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0(this$static, courseId, profId);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function $updateAssignmentStatus_0(this$static, userId, assignment, status_0){
  var x_0;
  x_0 = new AssignmentRequestFactory_AssignmentRequestContextImpl$9X_0(this$static, userId, assignment, status_0);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function AssignmentRequestFactory_AssignmentRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1178, 634, makeCastMap([Q$AbstractRequestContext]), AssignmentRequestFactory_AssignmentRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory(){
  return !FACTORY_0 && (FACTORY_0 = new AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0) , FACTORY_0;
}
;
var FACTORY_0;
function AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$0, val$profId){
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1179, 633, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData(){
  return new RequestData_0('nXzBSZ9$tRbKBBgjUY2gRKt05FY=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit);
}
;
function AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0(this$0, val$courseId, val$profId){
  this.val$courseId = val$courseId;
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1180, 633, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_0(){
  return new RequestData_0('t4VxZpmpymI5EZBHunEw3I6vgq4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$courseId, this.val$profId]), this.propertyRefs, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit, null);
}
;
function AssignmentRequestFactory_AssignmentRequestContextImpl$9X_0(this$0, val$userId, val$assignment, val$status){
  this.val$userId = val$userId;
  this.val$assignment = val$assignment;
  this.val$status = val$status;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1181, 633, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_1(){
  return new RequestData_0('wTN7hnq44xI6mTddO_$6oG2pB$Y=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userId, this.val$assignment, this.val$status]), this.propertyRefs, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit, null);
}
;
function $getConstructors_com_lemania_timetracking_shared_AssignmentProxy(){
  return [function(factory){
    return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1182, 559, makeCastMap([Q$EnumMap]), AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_0(map_0){
  $add_12(map_0, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_AssignmentProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_0(){
}
;
function ProfessorRequestFactory_ProfessorRequestContextImpl$10X_0(this$0, val$newProf){
  this.val$newProf = val$newProf;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1220, 633, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$10X_0);
_.makeRequestData = function makeRequestData_20(){
  return new RequestData_0('yI87RsyoDsBZEvpUZqK4aITdDI8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProf]), this.propertyRefs, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit, null);
}
;
function ProfessorRequestFactory_ProfessorRequestContextImpl$11X_0(this$0, val$prof, val$managerName, val$profName){
  this.val$prof = val$prof;
  this.val$managerName = val$managerName;
  this.val$profName = val$profName;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1221, 633, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$11X_0);
_.makeRequestData = function makeRequestData_21(){
  return new RequestData_0('5v29ik9na_skBd7mtwr107$bQkc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$prof, this.val$managerName, this.val$profName]), this.propertyRefs, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit, null);
}
;
function UserRequestFactory_UserRequestContextImpl$6X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1240, 633, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_34(){
  return new RequestData_0('ZJb$LZL6L3R4WgMRpZTqmk4ea1s=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Ljava_lang_String_2_classLit);
}
;
defineSeed(1248, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.addAll = function addAll_1(c){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).addAll(c);
  $clinit_Boolean();
  return toReturn;
}
;
_.set_0 = function set_5(index_0, element){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).set_0(index_0, element);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(index_0), element]);
  return toReturn;
}
;
defineSeed(1317, 1, makeCastMap([Q$Iterable, Q$Collection]));
_.addAll = function addAll_3(c){
  throw new UnsupportedOperationException_0;
}
;
defineSeed(1319, 1317, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.set_0 = function set_8(index_0, element){
  throw new UnsupportedOperationException_0;
}
;
var Lcom_lemania_timetracking_client_presenter_ProfsPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter', 826), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$1', 827), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$2', 829), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$3', 830), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$4', 831), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$5_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$5', 832), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$6', 833), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$7_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$7', 834), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$9_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$9', 835), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$10_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$10', 828), Lcom_lemania_timetracking_client_view_ProfsView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView', 1041), Lcom_lemania_timetracking_client_view_ProfsView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$1', 1042), Lcom_lemania_timetracking_client_view_ProfsView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$2', 1045), Lcom_lemania_timetracking_client_view_ProfsView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$3', 1046), Lcom_lemania_timetracking_client_view_ProfsView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$4', 1047), Lcom_lemania_timetracking_client_view_ProfsView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$5', 1048), Lcom_lemania_timetracking_client_view_ProfsView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$6', 1049), Lcom_lemania_timetracking_client_view_ProfsView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$7', 1050), Lcom_lemania_timetracking_client_view_ProfsView$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$8', 1051), Lcom_lemania_timetracking_client_view_ProfsView$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$9', 1052), Lcom_lemania_timetracking_client_view_ProfsView$10_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$10', 1043), Lcom_lemania_timetracking_client_view_ProfsView$11_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$11', 1044), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl', 1053), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl$Widgets', 1054), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl$Widgets$1', 1055), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl$Widgets$2', 1056), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl$Widgets$3', 1057), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl$Widgets$4', 1058), Lcom_google_gwt_cell_client_ButtonCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'ButtonCell', 89), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$10X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$10X', 1220), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$11X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$11X', 1221), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$6X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$6X', 1240), Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit = createForInterface('com.lemania.timetracking.shared.', 'AssignmentProxy'), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactoryImpl', 1177), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl', 1178), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$3X', 1179), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$8X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$8X', 1180), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$9X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$9X', 1181), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl', 1182), Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.timetracking.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1153), Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.timetracking.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1154), Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.timetracking.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1155);
$entry(onLoad)(10);
