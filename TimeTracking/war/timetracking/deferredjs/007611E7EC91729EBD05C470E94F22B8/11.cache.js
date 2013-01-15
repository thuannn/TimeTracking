function $getRowElement(this$static, row){
  $resolvePendingState(this$static.presenter, null);
  return $getSubRowElement(this$static, row + $getVisibleRange(this$static.presenter).start, 0);
}

defineSeed(557, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.addAll = function addAll(c){
  var toRet;
  this.minModified = min(this.minModified, this.list.size_1());
  toRet = this.list.addAll(c);
  this.maxModified = this.list.size_1();
  this.modified = true;
  $flush(this);
  return toRet;
}
;
function UpdateTimeLogEvent_0(prof, courseId, year, month){
  $clinit_UpdateTimeLogEvent();
  this.prof = prof;
  this.courseId = courseId;
  this.year = year;
  this.month = month;
}

defineSeed(747, 221, {}, UpdateTimeLogEvent_0);
_.dispatch_0 = function dispatch_38(handler){
  dynamicCast(handler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler).onUpdateTimeLog(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_39(){
  return TYPE_38;
}
;
_.courseId = null;
_.month = null;
_.prof = null;
_.year = null;
function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$TimeInputPresenter_TimeInputPresenter_methodInjection(_0, _1){
  return new TimeInputPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$TimeInputPresenter_TimeInputPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$ = new TimeInputView_0(new TimeInputView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$ = new TimeInputPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$;
}

defineSeed(754, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_3(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $loadProfessorsByCourse(this$static, courseId){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllByCourse(rc, courseId), new TimeInputPresenter$2_0(this$static));
}

function $onUpdateTimeLog(this$static, event_0){
  $updateLogTypeList(this$static, event_0.prof, event_0.courseId, event_0.year, event_0.month);
}

function $populateLogTypeList(this$static, logList, prof, courseId, year, month){
  var found, i, j, rcl, rfl, typeIdList;
  typeIdList = new ArrayList_0;
  for (i = 0; i < this$static.logTypes.size_1(); ++i) {
    found = false;
    for (j = 0; j < logList.size_1(); ++j) {
      if ($equals_4('' + toString_6(dynamicCast(this$static.logTypes.get_0(i), Q$LogTypeProxy).getId_0().value_0), dynamicCast(logList.get_0(j), Q$LogProxy).getTypeId())) {
        found = true;
        break;
      }
    }
    if (found) {
      continue;
    }
     else {
      $add_14(typeIdList, '' + toString_6(dynamicCast(this$static.logTypes.get_0(i), Q$LogTypeProxy).getId_0().value_0));
    }
  }
  if (typeIdList.size_0 > 0) {
    rfl = new LogRequestFactoryImpl_0;
    $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
    rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
    $fire($batchUpdate(rcl, '' + toString_6(prof.getId_0().value_0), courseId, year, month, typeIdList), new TimeInputPresenter$5_0(this$static, logList));
  }
   else {
    $setLogData_1(dynamicCast(this$static.view, Q$TimeInputPresenter$MyView), logList);
  }
}

function $professorSelected_0(this$static, prof, courseId, year, month){
  $clearLogTable(dynamicCast(this$static.view, Q$TimeInputPresenter$MyView));
  $doFire(this$static.eventBus, new UpdateTimeLogEvent_0(prof, courseId, year, month), null);
}

function $updateLogMemo(this$static, log, value){
  var logUpdate, rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  logUpdate = dynamicCast($editProxy(rcl, log), Q$LogProxy);
  logUpdate.setMemo(value);
  $fire($save_1(rcl, logUpdate), new TimeInputPresenter$7_0(this$static));
}

function $updateLogTime(this$static, log, value){
  var logUpdate, rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  logUpdate = dynamicCast($editProxy(rcl, log), Q$LogProxy);
  logUpdate.setHour(__parseAndValidateDouble(value));
  $fire($save_1(rcl, logUpdate), new TimeInputPresenter$6_0(this$static));
}

function $updateLogTypeList(this$static, prof, courseId, year, month){
  var rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire($listAll_2(rcl, '' + toString_6(prof.getId_0().value_0), courseId, year, month), new TimeInputPresenter$4_0(this$static, prof, courseId, year, month));
}

function TimeInputPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(888, 695, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler, Q$TimeInputPresenter, Q$TimeInputUiHandler]), TimeInputPresenter_0);
_.onBind = function onBind_17(){
  dynamicCast(this.view, Q$TimeInputPresenter$MyView).setUiHandlers(this);
  $initializeProfTable(dynamicCast(this.view, Q$TimeInputPresenter$MyView));
  $initializeLogTable(dynamicCast(this.view, Q$TimeInputPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_11(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_11(){
  var rf, rc, rfl, rcl, x;
  $initializeValues_0(dynamicCast(this.view, Q$TimeInputPresenter$MyView), this.currentUser.currentMonth, this.currentUser.currentYear, this.currentUser.isAdmin);
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($getDepartments(rc, this.currentUser.userId), new TimeInputPresenter$1_0(this));
  rfl = new LogTypeRequestFactoryImpl_0;
  $initialize_0(rfl, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rcl = new LogTypeRequestFactory_LogTypeRequestContextImpl_0(rfl);
  $fire((x = new LogTypeRequestFactory_LogTypeRequestContextImpl$3X_0(rcl) , $addInvocation(rcl.state.dialect, x) , x), new TimeInputPresenter$3_0(this));
}
;
_.onUpdateTimeLog = function onUpdateTimeLog(event_0){
  $onUpdateTimeLog(this, event_0);
}
;
_.revealInParent = function revealInParent_15(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
_.logTypes = null;
function $onSuccess_34(this$static, response){
  $setCourseList(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response);
}

function TimeInputPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(889, 634, makeCastMap([Q$Receiver]), TimeInputPresenter$1_0);
_.onFailure_0 = function onFailure_52(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_52(response){
  $onSuccess_34(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_35(this$static, response){
  $setProfData(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response);
}

function TimeInputPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(890, 634, makeCastMap([Q$Receiver]), TimeInputPresenter$2_0);
_.onFailure_0 = function onFailure_53(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_53(response){
  $onSuccess_35(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_36(this$static, response){
  this$static.this$0.logTypes = response;
}

function TimeInputPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(891, 634, makeCastMap([Q$Receiver]), TimeInputPresenter$3_0);
_.onFailure_0 = function onFailure_54(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_54(response){
  $onSuccess_36(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_37(this$static, response){
  $populateLogTypeList(this$static.this$0, response, this$static.val$prof, this$static.val$courseId, this$static.val$year, this$static.val$month);
}

function TimeInputPresenter$4_0(this$0, val$prof, val$courseId, val$year, val$month){
  this.this$0 = this$0;
  this.val$prof = val$prof;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
}

defineSeed(892, 634, makeCastMap([Q$Receiver]), TimeInputPresenter$4_0);
_.onFailure_0 = function onFailure_55(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_55(response){
  $onSuccess_37(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$courseId = null;
_.val$month = null;
_.val$prof = null;
_.val$year = null;
function $onSuccess_38(this$static, response){
  this$static.val$logList.addAll(response);
  $setLogData_1(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), this$static.val$logList);
}

function TimeInputPresenter$5_0(this$0, val$logList){
  this.this$0 = this$0;
  this.val$logList = val$logList;
}

defineSeed(893, 634, makeCastMap([Q$Receiver]), TimeInputPresenter$5_0);
_.onFailure_0 = function onFailure_56(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_56(response){
  $onSuccess_38(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
_.val$logList = null;
function $onSuccess_39(this$static){
  dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView);
}

function TimeInputPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(894, 634, makeCastMap([Q$Receiver]), TimeInputPresenter$6_0);
_.onFailure_0 = function onFailure_57(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_57(response){
  $onSuccess_39(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_40(this$static){
  dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView);
}

function TimeInputPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(895, 634, makeCastMap([Q$Receiver]), TimeInputPresenter$7_0);
_.onFailure_0 = function onFailure_58(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_58(response){
  $onSuccess_40(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
defineSeed(896, 723, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$Place, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler]));
_.onUpdateTimeLog = function onUpdateTimeLog_0(event_0){
  $getPresenter_0(this, new TimeInputPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_10(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new TimeInputPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function TimeInputPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(897, 707, {}, TimeInputPresenterMyProxyImpl$1_0);
_.success = function success_12(presenter){
  $success_10(this, dynamicCast(presenter, Q$TimeInputPresenter));
}
;
_.val$event = null;
function TimeInputPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(898, 1, {}, TimeInputPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_40(){
  $onUpdateTimeLog(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $clearLogTable(this$static){
  var temp;
  temp = new ArrayList_0;
  this$static.logProvider = new ListDataProvider_0;
  $setList(this$static.logProvider, temp);
  $addDataDisplay(this$static.logProvider, this$static.tblLog);
}

function $clearProfTable(this$static){
  var temp;
  temp = new ArrayList_0;
  this$static.professorProvider = new ListDataProvider_0;
  $setList(this$static.professorProvider, temp);
  $addDataDisplay(this$static.professorProvider, this$static.tblProfessors);
  this$static.tblProfessors.presenter.selectionModel.setSelected(this$static.selectedProfessor, false);
}

function $initializeLogTable(this$static){
  var colType, hourCell, hourColl, memoCell, memoCol;
  colType = new TimeInputView$4_0;
  hourCell = new EditTextCell_0;
  hourColl = new TimeInputView$5_0(hourCell);
  $setFieldUpdater(hourColl, new TimeInputView$6_0(this$static));
  memoCell = new EditTextCell_0;
  memoCol = new TimeInputView$7_0(memoCell);
  $setFieldUpdater(memoCol, new TimeInputView$8_0(this$static));
  $addCellPreviewHandler(this$static.tblLog, new TimeInputView$9_0(this$static));
  $addColumn(this$static.tblLog, colType, 'Type');
  $setColumnWidth(this$static.tblLog, colType, 20 + ($clinit_Style$Unit() , '%'));
  $addColumn(this$static.tblLog, hourColl, 'Somme');
  $setColumnWidth(this$static.tblLog, hourColl, '20%');
  $addColumn(this$static.tblLog, memoCol, 'Memo');
  $setColumnWidth(this$static.tblLog, memoCol, '60%');
}

function $initializeProfTable(this$static){
  var colName, selectionModel;
  colName = new TimeInputView$1_0;
  $addColumn(this$static.tblProfessors, colName, 'Nom');
  selectionModel = new TimeInputView$2_0;
  $addSelectionChangeHandler(selectionModel, new TimeInputView$3_0(this$static, selectionModel));
  $setSelectionModel(this$static.tblProfessors, selectionModel);
  $setDisplay_0(this$static.pager, this$static.tblProfessors);
}

function $initializeValues_0(this$static, currentMonth, currentYear, isAdmin){
  var i;
  $selectClear(this$static.lstSchools.element);
  $selectClear(this$static.lstCourses.element);
  $clearProfTable(this$static);
  $clearLogTable(this$static);
  $selectClear(this$static.lstMonth.element);
  for (i = 1; i <= 12; ++i) {
    $insertItem(this$static.lstMonth, '' + i, '' + i, -1);
    i == currentMonth && $setSelectedIndex_0(this$static.lstMonth, i - 1);
  }
  $selectClear(this$static.lstYear.element);
  for (i = -2; i < 2; ++i) {
    $insertItem(this$static.lstYear, '' + (i + currentYear), '' + (i + currentYear), -1);
    i + currentYear == currentYear && $setSelectedIndex_0(this$static.lstYear, i + 2);
  }
  $setEnabled(this$static.lstMonth, isAdmin);
  $setEnabled(this$static.lstYear, isAdmin);
  $setText_0(this$static.lblProfName, '');
}

function $onLstAddEcoleChanged_0(this$static){
  $clearProfTable(this$static);
  $clearLogTable(this$static);
  $equals_4($getItemText(this$static.lstSchools, this$static.lstSchools.element.selectedIndex), '-') || !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler) , $getValue_1(this$static.lstSchools, this$static.lstSchools.element.selectedIndex) , undefined);
}

function $onLstCoursesChanged(this$static){
  $clearProfTable(this$static);
  $clearLogTable(this$static);
  $setText_0(this$static.lblProfName, '');
  $equals_4($getItemText(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), '-') || !!this$static.uiHandlers && $loadProfessorsByCourse(dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler), $getValue_1(this$static.lstCourses, this$static.lstCourses.element.selectedIndex));
}

function $onLstMonthChanged_0(this$static){
  $clearLogTable(this$static);
  $professorSelected_0(dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler), this$static.selectedProfessor, $getValue_1(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), $getItemText(this$static.lstYear, this$static.lstYear.element.selectedIndex), $getItemText(this$static.lstMonth, this$static.lstMonth.element.selectedIndex));
}

function $onLstYearChanged_0(this$static){
  $clearLogTable(this$static);
  $professorSelected_0(dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler), this$static.selectedProfessor, $getValue_1(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), $getItemText(this$static.lstYear, this$static.lstYear.element.selectedIndex), $getItemText(this$static.lstMonth, this$static.lstMonth.element.selectedIndex));
}

function $setCourseList(this$static, cours){
  var i;
  $selectClear(this$static.lstCourses.element);
  $insertItem(this$static.lstCourses, '-', '', -1);
  for (i = 0; i < cours.size_1(); ++i)
    $insertItem(this$static.lstCourses, dynamicCast(cours.get_0(i), Q$CoursProxy).getSchoolName() + ' - ' + dynamicCast(cours.get_0(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(cours.get_0(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $setLogData_1(this$static, logs){
  $setRowCount_0(this$static.tblLog, logs.size_1(), true);
  $setRowData_0(this$static.tblLog, logs);
  $setRowCount_0(this$static.tblLog, logs.size_1(), true);
}

function $setProfData(this$static, profs){
  this$static.professorProvider = new ListDataProvider_0;
  $setList(this$static.professorProvider, profs);
  $addDataDisplay(this$static.professorProvider, this$static.tblProfessors);
}

function TimeInputView_0(){
  this.tblProfessors = new DataGrid_0;
  this.tblLog = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_14(new TimeInputView_BinderImpl$Widgets_0(this));
}

defineSeed(1048, 700, makeCastMap([Q$TimeInputPresenter$MyView]), TimeInputView_0);
_.asWidget = function asWidget_17(){
  return this.widget;
}
;
_.lblProfName = null;
_.logProvider = null;
_.lstCourses = null;
_.lstMonth = null;
_.lstSchools = null;
_.lstYear = null;
_.pager = null;
_.professorProvider = null;
_.selectedProfessor = null;
_.widget = null;
function TimeInputView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1049, 399, makeCastMap([Q$HasCell, Q$Column]), TimeInputView$1_0);
_.getValue = function getValue_26(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
function TimeInputView$2_0(){
  SingleSelectionModel_0.call(this);
}

defineSeed(1050, 566, makeCastMap([Q$HasHandlers]), TimeInputView$2_0);
_.setSelected = function setSelected_0(object, selected){
  $setSelected_0(this, dynamicCast(object, Q$ProfessorProxy), selected);
}
;
function TimeInputView$3_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1051, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), TimeInputView$3_0);
_.onSelectionChange = function onSelectionChange_1(event_0){
  this.this$0.selectedProfessor = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfessorProxy);
  if (this.this$0.selectedProfessor) {
    $setText_0(this.this$0.lblProfName, this.this$0.selectedProfessor.getProfName());
    $professorSelected_0(dynamicCast(this.this$0.uiHandlers, Q$TimeInputUiHandler), this.this$0.selectedProfessor, $getValue_1(this.this$0.lstCourses, this.this$0.lstCourses.element.selectedIndex), $getItemText(this.this$0.lstYear, this.this$0.lstYear.element.selectedIndex), $getItemText(this.this$0.lstMonth, this.this$0.lstMonth.element.selectedIndex));
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function TimeInputView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1052, 399, makeCastMap([Q$HasCell, Q$Column]), TimeInputView$4_0);
_.getValue = function getValue_27(object){
  return dynamicCast(object, Q$LogProxy).getTypeName();
}
;
function TimeInputView$5_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1053, 356, makeCastMap([Q$HasCell, Q$Column]), TimeInputView$5_0);
_.getValue = function getValue_28(log){
  return '' + dynamicCast(log, Q$LogProxy).getHour();
}
;
function $update_8(this$static, log, value){
  if (this$static.this$0.uiHandlers) {
    $equals_4(value, '') && (value = '0');
    $updateLogTime(dynamicCast(this$static.this$0.uiHandlers, Q$TimeInputUiHandler), log, value);
  }
}

function TimeInputView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1054, 1, {}, TimeInputView$6_0);
_.update = function update_9(index, log, value){
  $update_8(this, dynamicCast(log, Q$LogProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function TimeInputView$7_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1055, 356, makeCastMap([Q$HasCell, Q$Column]), TimeInputView$7_0);
_.getValue = function getValue_29(log){
  return dynamicCast(log, Q$LogProxy).getMemo();
}
;
function $update_9(this$static, log, value){
  !!this$static.this$0.uiHandlers && $updateLogMemo(dynamicCast(this$static.this$0.uiHandlers, Q$TimeInputUiHandler), log, value);
}

function TimeInputView$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1056, 1, {}, TimeInputView$8_0);
_.update = function update_10(index, log, value){
  $update_9(this, dynamicCast(log, Q$LogProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function TimeInputView$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1057, 1, makeCastMap([Q$EventHandler, Q$CellPreviewEvent$Handler]), TimeInputView$9_0);
_.onCellPreview = function onCellPreview_2(event_0){
  var isClick;
  isClick = $equals_4('click', event_0.nativeEvent.type);
  isClick && $dispatchEvent($getRowElement(this.this$0.tblLog, event_0.context.index_0).cells[event_0.context.column], $createMouseEvent($doc, 'click', 1, 0, 0, 0, 0, false, false, false, false, 1, null));
}
;
_.this$0 = null;
function TimeInputView_BinderImpl_0(){
}

defineSeed(1058, 1, {}, TimeInputView_BinderImpl_0);
function $build_f_HTMLPanel1_14(this$static){
  var attachRecord2, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel9, f_Grid6, f_Label7, lstSchools, f_Label8, lstCourses, pager, tblProfessors, f_Label10, f_Grid11, f_Label12, lblProfName, f_Label13, lstYear, f_Label14, lstMonth, f_Label15, f_Label16, tblLog;
  f_HTMLPanel1 = new HTMLPanel_0($html1_11(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord2 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord2.origParent?$insertBefore(attachRecord2.origParent, attachRecord2.element, attachRecord2.origSibling):orphan(attachRecord2.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_8(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Mettre des heures') , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '' , f_Label3)) , $add_8(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setHorizontalAlignment(f_HorizontalPanel4, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , $add_6(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $setHorizontalAlignment_0(f_VerticalPanel5, ALIGN_CENTER) , $add_8(f_VerticalPanel5, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 2) , $resizeRows(f_Grid6, 3) , $setWidget_1(f_Grid6, 0, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Ecoles :') , $updateHorizontalAlignment(f_Label7) , setVisible(f_Label7.element, false) , f_Label7)) , $setWidget_1(f_Grid6, 0, 1, (lstSchools = new ListBox_0 , setVisible(lstSchools.element, false) , $addDomHandler(lstSchools, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstSchools = lstSchools , lstSchools)) , $setWidget_1(f_Grid6, 1, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'D\xE9partements :') , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid6, 1, 1, (lstCourses = new ListBox_0 , $addDomHandler(lstCourses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstCourses = lstCourses , lstCourses)) , f_Grid6.element.style['width'] = '100%' , f_Grid6)) , $add_8(f_VerticalPanel5, (pager = new SimplePager_0 , $setPageSize(pager) , this$static.owner.pager = pager , pager)) , $add_8(f_VerticalPanel5, (tblProfessors = this$static.owner.tblProfessors , tblProfessors.element.style['height'] = '500px' , tblProfessors.element.style['width'] = '300px' , $setVisibleRange(tblProfessors, new Range_1($getVisibleRange(tblProfessors.presenter).start, 15)) , tblProfessors)) , f_VerticalPanel5.element.style['width'] = '300px' , f_VerticalPanel5)) , $add_6(f_HorizontalPanel4, (f_VerticalPanel9 = new VerticalPanel_0 , $add_8(f_VerticalPanel9, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label10) , f_Label10)) , $add_8(f_VerticalPanel9, (f_Grid11 = new Grid_0 , $resizeColumns(f_Grid11, 2) , $resizeRows(f_Grid11, 5) , $setWidget_1(f_Grid11, 0, 0, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, 'Professeur :') , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $setWidget_1(f_Grid11, 0, 1, (lblProfName = new Label_0 , lblProfName.element['className'] = 'header' , lblProfName.element.style['width'] = '' , this$static.owner.lblProfName = lblProfName , lblProfName)) , $setWidget_1(f_Grid11, 1, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Ann\xE9e :') , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid11, 1, 1, (lstYear = new ListBox_0 , $addDomHandler(lstYear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstYear = lstYear , lstYear)) , $setWidget_1(f_Grid11, 2, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Mois :') , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid11, 2, 1, (lstMonth = new ListBox_0 , $addDomHandler(lstMonth, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstMonth = lstMonth , lstMonth)) , $setWidget_1(f_Grid11, 3, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, '.') , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid11, 3, 1, new Label_0) , $setWidget_1(f_Grid11, 4, 0, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'Heures :') , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid11, 4, 1, (tblLog = this$static.owner.tblLog , tblLog.element.style['height'] = '300px' , tblLog.element.style['width'] = '550px' , tblLog)) , f_Grid11.element['className'] = 'sideBar' , f_Grid11.tableElem['border'] = '0' , f_Grid11.element.style['width'] = '420px' , f_Grid11.tableElem['cellSpacing'] = 2 , f_Grid11.tableElem['cellPadding'] = 5 , f_Grid11)) , f_VerticalPanel9.element.style['width'] = '600px' , f_VerticalPanel9)) , f_HorizontalPanel4.element.style['height'] = '100%' , f_HorizontalPanel4.table['border'] = '0' , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['height'] = '' , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function TimeInputView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new TimeInputView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new TimeInputView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new TimeInputView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new TimeInputView_BinderImpl$Widgets$4_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1059, 1, {}, TimeInputView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function TimeInputView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1060, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_6(event_0){
  $onLstAddEcoleChanged_0(this.this$1.owner);
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1061, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_7(event_0){
  $onLstYearChanged_0(this.this$1.owner);
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1062, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_8(event_0){
  $onLstMonthChanged_0(this.this$1.owner);
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1063, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_9(event_0){
  $onLstCoursesChanged(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_11(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

defineSeed(1092, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$LogProxy]));
_.setHour = function setHour(hour){
  dynamicCast($getWrapped(this.this$0), Q$LogProxy).setHour(hour);
  new Double_0(hour);
}
;
_.setMemo = function setMemo(memo){
  dynamicCast($getWrapped(this.this$0), Q$LogProxy).setMemo(memo);
}
;
defineSeed(1093, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$LogProxy]));
_.setHour = function setHour_0(hour){
  $setProperty(this.this$0, 'hour', new Double_0(hour));
}
;
_.setMemo = function setMemo_0(memo){
  $setProperty(this.this$0, 'memo', memo);
}
;
function $batchUpdate(this$static, profId, courseId, year, month, typeIdList){
  var x;
  x = new LogRequestFactory_LogRequestContextImpl$1X_0(this$static, profId, courseId, year, month, typeIdList);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function $listAll_2(this$static, profId, courseId, year, month){
  var x;
  x = new LogRequestFactory_LogRequestContextImpl$4X_0(this$static, profId, courseId, year, month);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function $save_1(this$static, log){
  var x;
  x = new LogRequestFactory_LogRequestContextImpl$10X_0(this$static, log);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function LogRequestFactory_LogRequestContextImpl$10X_0(this$0, val$log){
  this.val$log = val$log;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1128, 638, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$10X_0);
_.makeRequestData = function makeRequestData_8(){
  return new RequestData_0('tDC7lLOJfVdsA4iVyX907h2IS_U=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$log]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$log = null;
function LogRequestFactory_LogRequestContextImpl$1X_0(this$0, val$profId, val$courseId, val$year, val$month, val$typeIdList){
  this.val$profId = val$profId;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  this.val$typeIdList = val$typeIdList;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1129, 638, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_9(){
  return new RequestData_0('O7gb32zJhuWVMfKLRpcrbA5ufds=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$courseId, this.val$year, this.val$month, this.val$typeIdList]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.val$courseId = null;
_.val$month = null;
_.val$profId = null;
_.val$typeIdList = null;
_.val$year = null;
function LogRequestFactory_LogRequestContextImpl$4X_0(this$0, val$profId, val$courseId, val$year, val$month){
  this.val$profId = val$profId;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1130, 638, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_10(){
  return new RequestData_0('jYwYNZ2GdAHpRkHITOENfbCme_E=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$courseId, this.val$year, this.val$month]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.val$courseId = null;
_.val$month = null;
_.val$profId = null;
_.val$year = null;
function LogTypeRequestFactory_LogTypeRequestContextImpl$3X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1137, 638, makeCastMap([Q$AbstractRequest]), LogTypeRequestFactory_LogTypeRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_14(){
  return new RequestData_0('cIE5M8ZO8E_gfYUVGSqnszIg2m0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit);
}
;
defineSeed(1168, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.addAll = function addAll_1(c){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).addAll(c);
  $clinit_Boolean();
  return toReturn;
}
;
function __parseAndValidateDouble(s){
  var toReturn;
  toReturn = __parseDouble(s);
  if (isNaN(toReturn)) {
    throw new NumberFormatException_0('For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseDouble(str){
  var floatRegex = floatRegex_0;
  !floatRegex && (floatRegex = floatRegex_0 = /^\s*[+-]?((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?\s*$/i);
  if (floatRegex.test(str)) {
    return parseFloat(str);
  }
   else {
    return Number.NaN;
  }
}

var floatRegex_0 = null;
defineSeed(1236, 1, makeCastMap([Q$Iterable, Q$Collection]));
_.addAll = function addAll_3(c){
  throw new UnsupportedOperationException_0;
}
;
var Lcom_lemania_timetracking_client_presenter_TimeInputPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter', 888), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$1', 889), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$2', 890), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$3', 891), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$4', 892), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$5_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$5', 893), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$6', 894), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$7_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$7', 895), Lcom_lemania_timetracking_client_event_UpdateTimeLogEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'UpdateTimeLogEvent', 747), Lcom_lemania_timetracking_client_view_TimeInputView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView', 1048), Lcom_lemania_timetracking_client_view_TimeInputView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$1', 1049), Lcom_lemania_timetracking_client_view_TimeInputView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$2', 1050), Lcom_lemania_timetracking_client_view_TimeInputView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$3', 1051), Lcom_lemania_timetracking_client_view_TimeInputView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$4', 1052), Lcom_lemania_timetracking_client_view_TimeInputView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$5', 1053), Lcom_lemania_timetracking_client_view_TimeInputView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$6', 1054), Lcom_lemania_timetracking_client_view_TimeInputView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$7', 1055), Lcom_lemania_timetracking_client_view_TimeInputView$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$8', 1056), Lcom_lemania_timetracking_client_view_TimeInputView$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$9', 1057), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$1', 897), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$1$1', 898), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl', 1058), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets', 1059), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$1', 1060), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$2', 1061), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$3', 1062), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$4', 1063), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl$3X', 1137), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$1X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$1X', 1129), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$4X', 1130), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$10X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$10X', 1128);
$entry(onLoad)(11);
