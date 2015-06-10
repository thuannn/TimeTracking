function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = nullMethod;
  TYPE_3 = new DomEvent$Type_0('mousedown', new MouseDownEvent_0);
}

function MouseDownEvent_0(){
}

defineSeed(244, 235, {}, MouseDownEvent_0);
_.dispatch_0 = function dispatch_4(handler){
  dynamicCast(handler, Q$MouseDownHandler).onMouseDown(this);
}
;
_.getAssociatedType_1 = function getAssociatedType_5(){
  return TYPE_3;
}
;
var TYPE_3;
defineSeed(338, 1, makeCastMap([Q$HasVisibility, Q$UIObject]));
_.setVisible = function setVisible_0(visible){
  $setVisible_0(this, visible);
}
;
function Button_1(){
  Button_0.call(this);
  $setInnerHTML(($clinit_DOM() , this.element), 'Valider');
}

defineSeed(413, 414, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Button_1);
function $setFormValue(this$static, value_0){
  $setAttribute(this$static.inputElem, 'value', value_0);
}

function CheckBox_2(){
  CheckBox_0.call(this);
  $setTextOrHtml(this.directionalTextHelper, '', false);
}

defineSeed(417, 414, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$CheckBox, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), CheckBox_2);
function $getWidget(this$static, row, column){
  var e, child;
  $checkCellBounds(this$static, row, column);
  return e = $getRawElement(this$static.cellFormatter, row, column) , child = ($clinit_DOM() , $clinit_DOM() , $getFirstChildElement(e)) , !child?null:dynamicCast($get_2(this$static.widgetMap, child), Q$Widget);
}

function $setStyleName_1(this$static, row, column){
  this$static.this$0.prepareCell(row, column);
  $getCellElement(this$static.this$0.bodyElem, row, column).className = 'hourCell';
}

function $setGlassEnabled(this$static){
  this$static.isGlassEnabled = true;
  if (!this$static.glass) {
    this$static.glass = $createElement($doc, 'div');
    $setClassName(this$static.glass, 'gwt-PopupPanelGlass');
    this$static.glass.style['position'] = ($clinit_Style$Position() , 'absolute');
    this$static.glass.style['left'] = 0 + ($clinit_Style$Unit() , 'px');
    this$static.glass.style['top'] = '0px';
  }
}

defineSeed(489, 421, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]));
_.setVisible = function setVisible_1(visible){
  $setVisible_1(this, visible);
}
;
function TextArea_1(){
  $clinit_TextBoxBase();
  TextBoxBase_0.call(this, $createElement($doc, 'textarea'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-TextArea');
}

defineSeed(508, 487, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), TextArea_1);
function $setList(this$static, listToWrap){
  this$static.listWrapper = new ListDataProvider$ListWrapper_0(this$static, listToWrap);
  this$static.listWrapper.minModified = 0;
  this$static.listWrapper.maxModified = this$static.listWrapper.list.size_1();
  this$static.listWrapper.modified = true;
  $flushNow(this$static.listWrapper);
}

defineSeed(547, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.add_0 = function add_2(index_0, element){
  var e;
  try {
    this.list.add_0(index_0, element);
    this.minModified = min_0(this.minModified, index_0);
    this.maxModified = this.list.size_1();
    this.modified = true;
    $flush(this);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$IndexOutOfBoundsException)) {
      e = $e0;
      throw new IndexOutOfBoundsException_1(e.detailMessage);
    }
     else 
      throw unwrap($e0);
  }
}
;
function LoadAllProfessorLogsEvent_0(profId, year, month){
  $clinit_LoadAllProfessorLogsEvent();
  this.profId = profId;
  this.year = year;
  this.month = month;
}

defineSeed(749, 232, {}, LoadAllProfessorLogsEvent_0);
_.dispatch_0 = function dispatch_37(handler){
  dynamicCast(handler, Q$LoadAllProfessorLogsEvent$LoadAllProfessorLogsHandler).onLoadAllProfessorLogs(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_38(){
  return TYPE_38;
}
;
_.month = -1;
_.profId = '';
_.year = -1;
function UpdateTimeLogEvent_0(prof, courseId, year, month){
  $clinit_UpdateTimeLogEvent();
  this.prof = prof;
  this.courseId = courseId;
  this.year = year;
  this.month = month;
}

defineSeed(752, 232, {}, UpdateTimeLogEvent_0);
_.dispatch_0 = function dispatch_40(handler){
  dynamicCast(handler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler).onUpdateTimeLog(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_41(){
  return TYPE_41;
}
;
function $loadLogData(this$static, prof, courseId, year, month){
  var rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire($listAll_2(rcl, '' + toString_6(prof.getId_0().value_0), courseId, year, month), new TimeInputPresenter$3_0(this$static));
}

function $loadProfessorsByCourse(this$static, courseId, year, month){
  var rc, rf, x_0;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire((x_0 = new ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0(rc, courseId, year, month) , $addInvocation(rc.state.dialect, x_0) , x_0), new TimeInputPresenter$2_0(this$static));
}

function $onLoadAllProfessorLogs(this$static, event_0){
  var rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire($listAllFullDetailByProf(rcl, event_0.profId, event_0.year, event_0.month), new TimeInputPresenter$7_0(this$static));
}

function $onUpdateTimeLog(this$static, event_0){
  $loadLogData(this$static, event_0.prof, event_0.courseId, event_0.year, event_0.month);
}

function $professorSelected_0(this$static, prof, courseId, year, month){
  $doFire(this$static.eventBus, new UpdateTimeLogEvent_0(prof, courseId, year, month), null);
  $doFire(this$static.eventBus, new LoadAllProfessorLogsEvent_0('' + toString_6(prof.getId_0().value_0), __parseAndValidateInt(year), __parseAndValidateInt(month)), null);
}

function $sendNotification(this$static, profId, courseId, year, month, status_0){
  var rc, rf, x_0;
  rf = new ContactRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ContactRequestFactory_ContactRequestContextImpl_0(rf);
  $fire((x_0 = new ContactRequestFactory_ContactRequestContextImpl$3X_0(rc, profId, courseId, year, month, status_0) , $addInvocation(rc.state.dialect, x_0) , x_0), new TimeInputPresenter$9_0);
}

function $updateLogStatus(this$static, profId, courseId, year, month, status_0){
  var rcl, rfl, x_0;
  rfl = new LogRequestFactoryImpl_0;
  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire((x_0 = new LogRequestFactory_LogRequestContextImpl$15X_0(rcl, profId, courseId, year, month, status_0) , $addInvocation(rcl.state.dialect, x_0) , x_0), new TimeInputPresenter$8_0(this$static, profId, courseId, year, month, status_0));
}

function $updateLogTime(this$static, prof, courseId, year, month, coursTime, coursNote, maladieTime, maladieNote, ferieTime, ferieNote, priveTime, priveNote, supervisionTime, supervisionNote, fraisAmount, fraisNote){
  var rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  if (!prof) {
    alert_0('Merci de choisir un professeur \xE0 introduire les heures.');
    return;
  }
  $fire($batchUpdate(rcl, '' + toString_6(prof.getId_0().value_0), courseId, year, month, coursTime, coursNote, maladieTime, maladieNote, ferieTime, ferieNote, priveTime, priveNote, supervisionTime, supervisionNote, fraisAmount, fraisNote), new TimeInputPresenter$6_0(this$static, prof, year, month));
}

function TimeInputPresenter_0(eventBus, view, placeManager, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  this.placeManager = placeManager;
}

defineSeed(868, 691, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$LoadAllProfessorLogsEvent$LoadAllProfessorLogsHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler, Q$TimeInputPresenter, Q$TimeInputUiHandler]), TimeInputPresenter_0);
_.onActionCompleted = function onActionCompleted_1(event_0){
  $onActionCompleted_0(this);
}
;
_.onBind = function onBind_18(){
  dynamicCast(this.view, Q$TimeInputPresenter$MyView).setUiHandlers(this);
  $initializeProfTable(dynamicCast(this.view, Q$TimeInputPresenter$MyView));
  dynamicCast(this.view, Q$TimeInputPresenter$MyView);
}
;
_.onLoadAllProfessorLogs = function onLoadAllProfessorLogs(event_0){
  $onLoadAllProfessorLogs(this, event_0);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_13(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_11(){
  var rf, rc;
  if (this.currentUser.isReadOnly) {
    alert_0("L'acc\xE8s \xE0 cette fonction est bloqu\xE9 d\xE8s \xE0 pr\xE9sent.");
    $clinit_History();
    !!impl_3 && $newItem(impl_3, '!homepage', true);
  }
  $initializeValues_1(dynamicCast(this.view, Q$TimeInputPresenter$MyView), this.currentUser.currentMonth, this.currentUser.currentYear, this.currentUser.isAdmin, this.currentUser.fullName);
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($getDepartments(rc, this.currentUser.userId), new TimeInputPresenter$1_0(this));
}
;
_.onUpdateTimeLog = function onUpdateTimeLog(event_0){
  $onUpdateTimeLog(this, event_0);
}
;
_.revealInParent = function revealInParent_17(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_35(this$static, response){
  $setCourseList(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response);
}

function TimeInputPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(869, 627, makeCastMap([Q$Receiver]), TimeInputPresenter$1_0);
_.onFailure_0 = function onFailure_37(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_37(response){
  $onSuccess_35(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_36(this$static, response){
  $setProfData(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response);
}

function TimeInputPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(870, 627, makeCastMap([Q$Receiver]), TimeInputPresenter$2_0);
_.onFailure_0 = function onFailure_38(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_38(response){
  $onSuccess_36(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_37(this$static, response){
  $setLogData_2(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
}

function TimeInputPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(871, 627, makeCastMap([Q$Receiver]), TimeInputPresenter$3_0);
_.onFailure_0 = function onFailure_39(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_39(response){
  $onSuccess_37(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_38(this$static, response){
  $setOnLeaveConfirmation(this$static.this$0.placeManager, null);
  $setLogData_2(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
  $doFire(this$static.this$0.eventBus, new LoadAllProfessorLogsEvent_0('' + toString_6(this$static.val$prof.getId_0().value_0), __parseAndValidateInt(this$static.val$year), __parseAndValidateInt(this$static.val$month)), null);
}

function TimeInputPresenter$6_0(this$0, val$prof, val$year, val$month){
  this.this$0 = this$0;
  this.val$prof = val$prof;
  this.val$year = val$year;
  this.val$month = val$month;
}

defineSeed(872, 627, makeCastMap([Q$Receiver]), TimeInputPresenter$6_0);
_.onFailure_0 = function onFailure_40(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_40(response){
  $onSuccess_38(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_39(this$static, response){
  $setOtherLogData(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response, $clinit_Boolean());
}

function TimeInputPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(873, 627, makeCastMap([Q$Receiver]), TimeInputPresenter$7_0);
_.onFailure_0 = function onFailure_41(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_41(response){
  $onSuccess_39(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_40(this$static){
  $sendNotification(this$static.this$0, this$static.val$profId, this$static.val$courseId, this$static.val$year, this$static.val$month, this$static.val$status);
}

function TimeInputPresenter$8_0(this$0, val$profId, val$courseId, val$year, val$month, val$status){
  this.this$0 = this$0;
  this.val$profId = val$profId;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  this.val$status = val$status;
}

defineSeed(874, 627, makeCastMap([Q$Receiver]), TimeInputPresenter$8_0);
_.onFailure_0 = function onFailure_42(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_42(response){
  $onSuccess_40(this, throwClassCastExceptionUnlessNull(response));
}
;
_.val$status = false;
function TimeInputPresenter$9_0(){
}

defineSeed(875, 627, makeCastMap([Q$Receiver]), TimeInputPresenter$9_0);
_.onFailure_0 = function onFailure_43(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_43(response){
  throwClassCastExceptionUnlessNull(response);
}
;
defineSeed(876, 720, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$ActionCompletedEvent$ActionCompletedHandler, Q$LoadAllProfessorLogsEvent$LoadAllProfessorLogsHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler]));
_.onLoadAllProfessorLogs = function onLoadAllProfessorLogs_0(event_0){
  $getPresenter_0(this, new TimeInputPresenterMyProxyImpl$4_0(this.eventBus, event_0));
}
;
_.onUpdateTimeLog = function onUpdateTimeLog_0(event_0){
  $getPresenter_0(this, new TimeInputPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_11(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new TimeInputPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function TimeInputPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(877, 705, {}, TimeInputPresenterMyProxyImpl$1_0);
_.success = function success_13(presenter){
  $success_11(this, dynamicCast(presenter, Q$TimeInputPresenter));
}
;
function TimeInputPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(878, 1, {}, TimeInputPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_41(){
  $onUpdateTimeLog(this.val$presenter, this.val$event);
}
;
function $success_14(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new TimeInputPresenterMyProxyImpl$4$1_0(presenter, this$static.val$event));
}

function TimeInputPresenterMyProxyImpl$4_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(883, 705, {}, TimeInputPresenterMyProxyImpl$4_0);
_.success = function success_16(presenter){
  $success_14(this, dynamicCast(presenter, Q$TimeInputPresenter));
}
;
function TimeInputPresenterMyProxyImpl$4$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(884, 1, {}, TimeInputPresenterMyProxyImpl$4$1_0);
_.execute_0 = function execute_44(){
  $onLoadAllProfessorLogs(this.val$presenter, this.val$event);
}
;
function $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$) {
    result = new TimeInputPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$;
}

defineSeed(912, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_58(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $clearProfTable(this$static){
  var temp;
  temp = new ArrayList_0;
  this$static.professorProvider = new ListDataProvider_0;
  $setList(this$static.professorProvider, temp);
  $addDataDisplay(this$static.professorProvider, this$static.tblProfessors);
  this$static.tblProfessors.presenter.selectionModel.setSelected(this$static.selectedProfessor, false);
}

function $clearValues(this$static){
  $setText_2(this$static.txtCoursTime, '');
  $setText_2(this$static.txtCoursNote, '');
  $setText_2(this$static.txtMaladieTime, '');
  $setText_2(this$static.txtMaladieNote, '');
  $setText_2(this$static.txtFerieTime, '');
  $setText_2(this$static.txtFerieNote, '');
  $setText_2(this$static.txtPriveTime, '');
  $setText_2(this$static.txtPriveNote, '');
  $setText_2(this$static.txtSupervisionTime, '');
  $setText_2(this$static.txtSupervisionNote, '');
  $setText_2(this$static.txtFraisAmount, '');
  $setText_2(this$static.txtFraisNote, '');
}

function $createCheckBox(this$static, log_0, row, col, status_0){
  var cb;
  cb = new CheckBox_2;
  $setValue_1(cb, ($clinit_Boolean() , status_0?TRUE_1:FALSE_1));
  $setFormValue(cb, log_0.getCourseId());
  $addDomHandler(cb, new TimeInputView$7_0(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  $setWidget_1(this$static.tblHours, row, col, cb);
  $getWidget(this$static.tblHours, row, col).setVisible($equals_3(this$static.selectedProfessor.getManagerName(), this$static.directorName));
}

function $initializeProfTable(this$static){
  var colDate, colName, selectionModel;
  colName = new TimeInputView$1_0;
  $addColumn(this$static.tblProfessors, colName, 'Nom');
  colDate = new TimeInputView$2_0;
  $addColumn(this$static.tblProfessors, colDate, 'Date de modification');
  $setColumnWidth_0(this$static.tblProfessors, colDate, 40 + ($clinit_Style$Unit() , '%'));
  selectionModel = new TimeInputView$3_0;
  $addSelectionChangeHandler(selectionModel, new TimeInputView$4_0(this$static, selectionModel));
  $setSelectionModel(this$static.tblProfessors, selectionModel);
}

function $initializeValues_1(this$static, currentMonth, currentYear, isAdmin, directorName){
  var i, i0;
  $selectClear($getSelectElement(this$static.lstSchools));
  $selectClear($getSelectElement(this$static.lstCourses));
  $clearProfTable(this$static);
  $clearValues(this$static);
  $removeAllRows(this$static.tblHours);
  $selectClear($getSelectElement(this$static.lstMonth));
  for (i0 = 1; i0 <= 12; i0++) {
    $insertItem(this$static.lstMonth, '' + i0, '' + i0, -1);
    i0 == currentMonth && $setSelectedIndex_0(this$static.lstMonth, i0 - 1);
  }
  $selectClear($getSelectElement(this$static.lstYear));
  for (i = -2; i < 2; i++) {
    $insertItem(this$static.lstYear, '' + (i + currentYear), '' + (i + currentYear), -1);
    i + currentYear == currentYear && $setSelectedIndex_0(this$static.lstYear, i + 2);
  }
  $setEnabled(this$static.lstMonth, isAdmin);
  $setEnabled(this$static.lstYear, isAdmin);
  $setText_0(this$static.lblProfName, '');
  this$static.directorName = directorName;
  $clearValues(this$static);
}

function $onCmdSaveClick_1(this$static){
  $equals_3($getPropertyString($getElement(this$static.txtCoursTime), 'value'), '') && $setText_2(this$static.txtCoursTime, '0.0');
  $equals_3($getPropertyString($getElement(this$static.txtMaladieTime), 'value'), '') && $setText_2(this$static.txtMaladieTime, '0.0');
  $equals_3($getPropertyString($getElement(this$static.txtFerieTime), 'value'), '') && $setText_2(this$static.txtFerieTime, '0.0');
  $equals_3($getPropertyString($getElement(this$static.txtPriveTime), 'value'), '') && $setText_2(this$static.txtPriveTime, '0.0');
  $equals_3($getPropertyString($getElement(this$static.txtSupervisionTime), 'value'), '') && $setText_2(this$static.txtSupervisionTime, '0.0');
  $equals_3($getPropertyString($getElement(this$static.txtFraisAmount), 'value'), '') && $setText_2(this$static.txtFraisAmount, '0.0');
  if (!$matches($getPropertyString($getElement(this$static.txtCoursTime), 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$') || !$matches($getPropertyString($getElement(this$static.txtMaladieTime), 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$') || !$matches($getPropertyString($getElement(this$static.txtFerieTime), 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$') || !$matches($getPropertyString($getElement(this$static.txtPriveTime), 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$') || !$matches($getPropertyString($getElement(this$static.txtSupervisionTime), 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$') || !$matches($getPropertyString($getElement(this$static.txtFraisAmount), 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$')) {
    alert_0('Veuillez introduire des heures en chiffre.');
    return;
  }
  $updateLogTime(dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler), this$static.selectedProfessor, $getValue_1(this$static.lstCourses, $getSelectElement(this$static.lstCourses).selectedIndex), $getItemText(this$static.lstYear, $getSelectElement(this$static.lstYear).selectedIndex), $getItemText(this$static.lstMonth, $getSelectElement(this$static.lstMonth).selectedIndex), $getPropertyString($getElement(this$static.txtCoursTime), 'value'), $getPropertyString($getElement(this$static.txtCoursNote), 'value'), $getPropertyString($getElement(this$static.txtMaladieTime), 'value'), $getPropertyString($getElement(this$static.txtMaladieNote), 'value'), $getPropertyString($getElement(this$static.txtFerieTime), 'value'), $getPropertyString($getElement(this$static.txtFerieNote), 'value'), $getPropertyString($getElement(this$static.txtPriveTime), 'value'), $getPropertyString($getElement(this$static.txtPriveNote), 'value'), $getPropertyString($getElement(this$static.txtSupervisionTime), 'value'), $getPropertyString($getElement(this$static.txtSupervisionNote), 'value'), $getPropertyString($getElement(this$static.txtFraisAmount), 'value'), $getPropertyString($getElement(this$static.txtFraisNote), 'value'));
}

function $onLstAddEcoleChanged_0(this$static){
  $clearProfTable(this$static);
  $clearValues(this$static);
  $removeAllRows(this$static.tblHours);
  $equals_3($getItemText(this$static.lstSchools, $getSelectElement(this$static.lstSchools).selectedIndex), '-') || !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler) , $getValue_1(this$static.lstSchools, $getSelectElement(this$static.lstSchools).selectedIndex) , undefined);
}

function $reloadProfList(this$static){
  $clearProfTable(this$static);
  $clearValues(this$static);
  $removeAllRows(this$static.tblHours);
  $clearValues(this$static);
  $setText_0(this$static.lblProfName, '');
  $equals_3($getItemText(this$static.lstCourses, $getSelectElement(this$static.lstCourses).selectedIndex), '-') || !!this$static.uiHandlers && $loadProfessorsByCourse(dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler), $getValue_1(this$static.lstCourses, $getSelectElement(this$static.lstCourses).selectedIndex), $getItemText(this$static.lstYear, $getSelectElement(this$static.lstYear).selectedIndex), $getItemText(this$static.lstMonth, $getSelectElement(this$static.lstMonth).selectedIndex));
}

function $setCourseList(this$static, cours){
  var i;
  $selectClear($getSelectElement(this$static.lstCourses));
  $insertItem(this$static.lstCourses, '-', '', -1);
  for (i = 0; i < cours.size_1(); i++)
    $insertItem(this$static.lstCourses, dynamicCast(cours.get_1(i), Q$CoursProxy).getSchoolName() + ' - ' + dynamicCast(cours.get_1(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(cours.get_1(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $setLogData_2(this$static, logs, logUpdated){
  var editProf, log_0, log$iterator, prof, rc, rf;
  for (log$iterator = logs.iterator(); log$iterator.hasNext();) {
    log_0 = dynamicCast(log$iterator.next_0(), Q$LogProxy);
    if ($equals_3(log_0.getTypeName().toLowerCase(), '1.cours')) {
      $setText_2(this$static.txtCoursTime, '' + log_0.getHour());
      $setText_2(this$static.txtCoursNote, log_0.getMemo());
    }
    if ($equals_3(log_0.getTypeName().toLowerCase(), '2.maladie/acc')) {
      $setText_2(this$static.txtMaladieTime, '' + log_0.getHour());
      $setText_2(this$static.txtMaladieNote, log_0.getMemo());
    }
    if ($equals_3(log_0.getTypeName().toLowerCase(), '3.f\xE9ri\xE9s')) {
      $setText_2(this$static.txtFerieTime, '' + log_0.getHour());
      $setText_2(this$static.txtFerieNote, log_0.getMemo());
    }
    if ($equals_3(log_0.getTypeName().toLowerCase(), '4.priv\xE9')) {
      $setText_2(this$static.txtPriveTime, '' + log_0.getHour());
      $setText_2(this$static.txtPriveNote, log_0.getMemo());
    }
    if ($equals_3(log_0.getTypeName().toLowerCase(), '5.supervision')) {
      $setText_2(this$static.txtSupervisionTime, '' + log_0.getHour());
      $setText_2(this$static.txtSupervisionNote, log_0.getMemo());
    }
    if ($equals_3(log_0.getTypeName().toLowerCase(), '6.frais')) {
      $setText_2(this$static.txtFraisAmount, '' + log_0.getHour());
      $setText_2(this$static.txtFraisNote, log_0.getMemo());
    }
  }
  if (!!this$static.selectedProfessor && logUpdated.value_0) {
    try {
      this$static.selectedProfessor.setLogModifyDate(dynamicCast(logs.get_1(0), Q$LogProxy).getModifyDate());
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, Q$Exception)) {
        rf = new ProfessorRequestFactoryImpl_0;
        rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
        editProf = this$static.selectedProfessor;
        prof = dynamicCast($editProxy(rc, editProf), Q$ProfessorProxy);
        prof.setLogModifyDate(dynamicCast(logs.get_1(0), Q$LogProxy).getModifyDate());
        this$static.currentProfList.remove_1(this$static.selectedProfessorIndex);
        this$static.currentProfList.add_0(this$static.selectedProfessorIndex, prof);
        $setRowData_0(this$static.tblProfessors, this$static.currentProfList);
        this$static.tblProfessors.presenter.selectionModel.setSelected(prof, true);
      }
       else 
        throw unwrap($e0);
    }
  }
}

function $setOtherLogData(this$static, logs){
  var i, lastColumn, log_0, logStatus, prevCourse, prevLog, row;
  prevLog = null;
  prevCourse = '';
  row = -1;
  lastColumn = -1;
  logStatus = true;
  $removeAllRows(this$static.tblHours);
  for (i = 0; i < logs.size_1(); i++) {
    log_0 = dynamicCast(logs.get_1(i), Q$LogProxy);
    if ($equals_3(prevCourse, '') || !$equals_3(prevCourse, dynamicCast(logs.get_1(i), Q$LogProxy).getCourseName())) {
      if (!$equals_3(prevCourse, '')) {
        lastColumn == -1 && (lastColumn = $getCellCount(this$static.tblHours, 0));
        $createCheckBox(this$static, prevLog, row, lastColumn, logStatus);
      }
      prevCourse = log_0.getCourseName();
      prevLog = log_0;
      logStatus = true;
      ++row;
    }
    $setText(this$static.tblHours, row, 0, log_0.getCourseName());
    if ($equals_3(log_0.getTypeName().toLowerCase(), '1.cours')) {
      $setText(this$static.tblHours, row, 1, '' + log_0.getHour());
      logStatus = logStatus & log_0.isApproved();
    }
    if ($equals_3(log_0.getTypeName().toLowerCase(), '2.maladie/acc')) {
      $setText(this$static.tblHours, row, 2, '' + log_0.getHour());
      logStatus = logStatus & log_0.isApproved();
    }
    if ($equals_3(log_0.getTypeName().toLowerCase(), '3.f\xE9ri\xE9s')) {
      $setText(this$static.tblHours, row, 3, '' + log_0.getHour());
      logStatus = logStatus & log_0.isApproved();
    }
    if ($equals_3(log_0.getTypeName().toLowerCase(), '4.priv\xE9')) {
      $setText(this$static.tblHours, row, 4, '' + log_0.getHour());
      logStatus = logStatus & log_0.isApproved();
    }
    if ($equals_3(log_0.getTypeName().toLowerCase(), '5.supervision')) {
      $setText(this$static.tblHours, row, 5, '' + log_0.getHour());
      logStatus = logStatus & log_0.isApproved();
    }
    if ($equals_3(log_0.getTypeName().toLowerCase(), '6.frais')) {
      $setText(this$static.tblHours, row, 6, '' + log_0.getHour());
      logStatus = logStatus & log_0.isApproved();
    }
    if (i == logs.size_1() - 1) {
      lastColumn == -1 && (lastColumn = $getCellCount(this$static.tblHours, 0));
      $createCheckBox(this$static, log_0, row, lastColumn, logStatus);
    }
  }
  $styleTable_3(this$static);
}

function $setProfData(this$static, profs){
  this$static.currentProfList = profs;
  $setRowData_0(this$static.tblProfessors, this$static.currentProfList);
}

function $showNoteBox(tb){
  var closeButton, popup, ta, vp;
  ($clinit_DOM() , tb.element)['disabled'] = true;
  popup = new PopupPanel_0;
  vp = new VerticalPanel_0;
  ta = new TextArea_1;
  ta.element.style['width'] = '400px';
  ta.element.style['height'] = '300px';
  $setText_2(ta, $getPropertyString(tb.element, 'value'));
  closeButton = new Button_1;
  $setClassName(closeButton.element, 'button-highlight');
  $addDomHandler(closeButton, new TimeInputView$5_0(popup, tb), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  $add_10(vp, ta);
  $add_10(vp, closeButton);
  $add_3(popup, vp);
  $setGlassEnabled(popup);
  popup.autoHide = false;
  $addHandler_0(popup, new TimeInputView$6_0(tb, ta), TYPE_10?TYPE_10:(TYPE_10 = new GwtEvent$Type_0));
  $center(popup);
}

function $styleTable_3(this$static){
  var col, row;
  for (row = 0; row < $getDOMRowCount(this$static.tblHours); row++) {
    for (col = 0; col < $getCellCount(this$static.tblHours, 0); col++) {
      $setStyleName_1(this$static.tblHours.cellFormatter, row, col);
    }
  }
}

function TimeInputView_0(){
  this.tblProfessors = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_16(new TimeInputView_BinderImpl$Widgets_0(this));
}

defineSeed(1099, 696, makeCastMap([Q$IsWidget, Q$TimeInputPresenter$MyView]), TimeInputView_0);
_.asWidget = function asWidget_20(){
  return this.widget;
}
;
_.directorName = '';
_.selectedProfessorIndex = 0;
function TimeInputView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1100, 382, makeCastMap([Q$HasCell, Q$Column]), TimeInputView$1_0);
_.getValue = function getValue_29(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
function TimeInputView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1101, 382, makeCastMap([Q$HasCell, Q$Column]), TimeInputView$2_0);
_.getValue = function getValue_30(object){
  return dynamicCast(object, Q$ProfessorProxy).getLogModifyDate();
}
;
function TimeInputView$3_0(){
  SingleSelectionModel_0.call(this);
}

defineSeed(1102, 555, makeCastMap([Q$HasHandlers]), TimeInputView$3_0);
_.setSelected = function setSelected_0(object, selected){
  $setSelected_0(this, dynamicCast(object, Q$ProfessorProxy), selected);
}
;
function TimeInputView$4_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1103, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), TimeInputView$4_0);
_.onSelectionChange = function onSelectionChange_1(event_0){
  this.this$0.selectedProfessor = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfessorProxy);
  if (this.this$0.selectedProfessor) {
    this.this$0.selectedProfessorIndex = this.this$0.currentProfList.indexOf_0(this.this$0.selectedProfessor);
    $setText_0(this.this$0.lblProfName, this.this$0.selectedProfessor.getProfName());
    $setText_0(this.this$0.txtResponsable, this.this$0.selectedProfessor.getManagerName());
    $clearValues(this.this$0);
    $professorSelected_0(dynamicCast(this.this$0.uiHandlers, Q$TimeInputUiHandler), this.this$0.selectedProfessor, $getValue_1(this.this$0.lstCourses, $getSelectElement(this.this$0.lstCourses).selectedIndex), $getItemText(this.this$0.lstYear, $getSelectElement(this.this$0.lstYear).selectedIndex), $getItemText(this.this$0.lstMonth, $getSelectElement(this.this$0.lstMonth).selectedIndex));
  }
}
;
function TimeInputView$5_0(val$popup, val$tb){
  this.val$popup = val$popup;
  this.val$tb = val$tb;
}

defineSeed(1104, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), TimeInputView$5_0);
_.onClick = function onClick_32(event_0){
  $hide(this.val$popup);
  $setEnabled(this.val$tb, true);
}
;
function TimeInputView$6_0(val$tb, val$ta){
  this.val$tb = val$tb;
  this.val$ta = val$ta;
}

defineSeed(1105, 1, makeCastMap([Q$CloseHandler, Q$EventHandler]), TimeInputView$6_0);
_.onClose = function onClose_0(event_0){
  $setText_2(this.val$tb, $getPropertyString($getElement(this.val$ta), 'value'));
}
;
function TimeInputView$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1106, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), TimeInputView$7_0);
_.onClick = function onClick_33(event_0){
  if (!$equals_3(this.this$0.selectedProfessor.getManagerName(), this.this$0.directorName)) {
    $setValue_1(dynamicCast(event_0.source, Q$CheckBox), ($clinit_Boolean() , $getValue_0(dynamicCast(event_0.source, Q$CheckBox)).value_0?FALSE_1:TRUE_1));
    return;
  }
  $updateLogStatus(dynamicCast(this.this$0.uiHandlers, Q$TimeInputUiHandler), '' + toString_6(this.this$0.selectedProfessor.getId_0().value_0), dynamicCast(event_0.source, Q$CheckBox).inputElem.value, $getItemText(this.this$0.lstYear, $getSelectElement(this.this$0.lstYear).selectedIndex), $getItemText(this.this$0.lstMonth, $getSelectElement(this.this$0.lstMonth).selectedIndex), $getValue_0(dynamicCast(event_0.source, Q$CheckBox)).value_0);
}
;
function TimeInputView_BinderImpl_0(){
}

defineSeed(1107, 1, {}, TimeInputView_BinderImpl_0);
function $build_f_Grid16(this$static){
  var f_Grid16, f_Label17, f_Label18, f_Label19, f_Label20, f_Label21, f_Label22, f_Label23, f_Label24, f_Label25, txtCoursTime, txtMaladieTime, txtFerieTime, txtPriveTime, txtSupervisionTime, txtFraisAmount, f_Label26, txtCoursNote, txtMaladieNote, txtFerieNote, txtPriveNote, txtSupervisionNote, txtFraisNote;
  f_Grid16 = new Grid_0;
  $resizeColumns(f_Grid16, 8);
  $resizeRows(f_Grid16, 3);
  $setWidget_1(f_Grid16, 0, 0, (f_Label17 = new Label_0 , $setClassName(($clinit_DOM() , f_Label17.element), 'hiddenText') , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17));
  $setWidget_1(f_Grid16, 0, 1, (f_Label18 = new Label_0 , $setTextOrHtml(f_Label18.directionalTextHelper, 'Cours', false) , $updateHorizontalAlignment(f_Label18) , f_Label18));
  $setWidget_1(f_Grid16, 0, 2, (f_Label19 = new Label_0 , $setTextOrHtml(f_Label19.directionalTextHelper, 'Maladie/ACC', false) , $updateHorizontalAlignment(f_Label19) , f_Label19));
  $setWidget_1(f_Grid16, 0, 3, (f_Label20 = new Label_0 , $setTextOrHtml(f_Label20.directionalTextHelper, 'F\xE9ri\xE9s/ MIL', false) , $updateHorizontalAlignment(f_Label20) , f_Label20));
  $setWidget_1(f_Grid16, 0, 4, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, 'Priv\xE9', false) , $updateHorizontalAlignment(f_Label21) , f_Label21));
  $setWidget_1(f_Grid16, 0, 5, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, 'Supervision', false) , $updateHorizontalAlignment(f_Label22) , f_Label22));
  $setWidget_1(f_Grid16, 0, 6, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'Frais (CHF)', false) , $updateHorizontalAlignment(f_Label23) , f_Label23));
  $setWidget_1(f_Grid16, 0, 7, (f_Label24 = new Label_0 , f_Label24.element.style['width'] = '25px' , f_Label24));
  $setWidget_1(f_Grid16, 1, 0, (f_Label25 = new Label_0 , $setTextOrHtml(f_Label25.directionalTextHelper, 'Heures :', false) , $updateHorizontalAlignment(f_Label25) , f_Label25.element.style['width'] = '100px' , f_Label25));
  $setWidget_1(f_Grid16, 1, 1, (txtCoursTime = new TextBox_0 , txtCoursTime.element.style['width'] = '100px' , $addDomHandler(txtCoursTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.txtCoursTime = txtCoursTime , txtCoursTime));
  $setWidget_1(f_Grid16, 1, 2, (txtMaladieTime = new TextBox_0 , txtMaladieTime.element.style['width'] = '100px' , $addDomHandler(txtMaladieTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames16, TYPE) , this$static.owner.txtMaladieTime = txtMaladieTime , txtMaladieTime));
  $setWidget_1(f_Grid16, 1, 3, (txtFerieTime = new TextBox_0 , txtFerieTime.element.style['width'] = '100px' , $addDomHandler(txtFerieTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14, TYPE) , this$static.owner.txtFerieTime = txtFerieTime , txtFerieTime));
  $setWidget_1(f_Grid16, 1, 4, (txtPriveTime = new TextBox_0 , txtPriveTime.element.style['width'] = '100px' , $addDomHandler(txtPriveTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, TYPE) , this$static.owner.txtPriveTime = txtPriveTime , txtPriveTime));
  $setWidget_1(f_Grid16, 1, 5, (txtSupervisionTime = new TextBox_0 , txtSupervisionTime.element.style['width'] = '100px' , $addDomHandler(txtSupervisionTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8, TYPE) , this$static.owner.txtSupervisionTime = txtSupervisionTime , txtSupervisionTime));
  $setWidget_1(f_Grid16, 1, 6, (txtFraisAmount = new TextBox_0 , txtFraisAmount.element.style['width'] = '100px' , $addDomHandler(txtFraisAmount, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13, TYPE) , this$static.owner.txtFraisAmount = txtFraisAmount , txtFraisAmount));
  $setWidget_1(f_Grid16, 2, 0, (f_Label26 = new Label_0 , $setTextOrHtml(f_Label26.directionalTextHelper, 'Commentaires', false) , $updateHorizontalAlignment(f_Label26) , f_Label26));
  $setWidget_1(f_Grid16, 2, 1, (txtCoursNote = new TextBox_0 , txtCoursNote.element.style['width'] = '100px' , $addDomHandler(txtCoursNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames15, TYPE) , $addDomHandler(txtCoursNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames18, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_3)) , this$static.owner.txtCoursNote = txtCoursNote , txtCoursNote));
  $setWidget_1(f_Grid16, 2, 2, (txtMaladieNote = new TextBox_0 , txtMaladieNote.element.style['width'] = '100px' , $addDomHandler(txtMaladieNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10, TYPE) , $addDomHandler(txtMaladieNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames19, TYPE_3) , this$static.owner.txtMaladieNote = txtMaladieNote , txtMaladieNote));
  $setWidget_1(f_Grid16, 2, 3, (txtFerieNote = new TextBox_0 , txtFerieNote.element.style['width'] = '100px' , $addDomHandler(txtFerieNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, TYPE) , $addDomHandler(txtFerieNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames20, TYPE_3) , this$static.owner.txtFerieNote = txtFerieNote , txtFerieNote));
  $setWidget_1(f_Grid16, 2, 4, (txtPriveNote = new TextBox_0 , txtPriveNote.element.style['width'] = '100px' , $addDomHandler(txtPriveNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9, TYPE) , $addDomHandler(txtPriveNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames21, TYPE_3) , this$static.owner.txtPriveNote = txtPriveNote , txtPriveNote));
  $setWidget_1(f_Grid16, 2, 5, (txtSupervisionNote = new TextBox_0 , txtSupervisionNote.element.style['width'] = '100px' , $addDomHandler(txtSupervisionNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames17, TYPE) , $addDomHandler(txtSupervisionNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames22, TYPE_3) , this$static.owner.txtSupervisionNote = txtSupervisionNote , txtSupervisionNote));
  $setWidget_1(f_Grid16, 2, 6, (txtFraisNote = new TextBox_0 , txtFraisNote.element.style['width'] = '100px' , $addDomHandler(txtFraisNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12, TYPE) , $addDomHandler(txtFraisNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames23, TYPE_3) , this$static.owner.txtFraisNote = txtFraisNote , txtFraisNote));
  f_Grid16.element.style['width'] = '100%';
  return f_Grid16;
}

function $build_f_HTMLPanel1_16(this$static){
  var attachRecord14, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel10, f_Grid6, f_Label7, lstSchools, f_Label8, lstCourses, f_Label9, tblProfessors, f_Label11, lblProfName, f_Grid12, f_Label13, lstYear, f_Label14, lstMonth, f_Label15, cmdSave, f_Label27, f_VerticalPanel28, f_Label29, f_HorizontalPanel30, f_Label31, txtResponsable, tblHours, f_Label32, f_Label33, f_Label34, f_HorizontalPanel35, f_Label36, f_Hyperlink37, f_Label38, f_Hyperlink39;
  f_HTMLPanel1 = new HTMLPanel_0($html1_12(this$static.domId0).html);
  ($clinit_DOM() , f_HTMLPanel1.element).style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord14 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord14.origParent?$insertBefore(attachRecord14.origParent, attachRecord14.element, attachRecord14.origSibling):orphan(attachRecord14.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_10(f_VerticalPanel2, (f_Label3 = new Label_0 , $setClassName(f_Label3.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'SAISIR DES HEURES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '' , f_Label3)) , $add_10(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel4, ALIGN_LEFT) , $add_8(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel5, ALIGN_CENTER) , $add_10(f_VerticalPanel5, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 2) , $resizeRows(f_Grid6, 2) , $setWidget_1(f_Grid6, 0, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Ecoles :', false) , $updateHorizontalAlignment(f_Label7) , setVisible(f_Label7.element, false) , f_Label7)) , $setWidget_1(f_Grid6, 0, 1, (lstSchools = new ListBox_0 , setVisible(lstSchools.element, false) , $addDomHandler(lstSchools, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstSchools = lstSchools , lstSchools)) , $setWidget_1(f_Grid6, 1, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'D\xE9partements :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid6, 1, 1, (lstCourses = new ListBox_0 , $addDomHandler(lstCourses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstCourses = lstCourses , lstCourses)) , f_Grid6.element.style['width'] = '100%' , f_Grid6)) , $add_10(f_VerticalPanel5, (f_Label9 = new Label_0 , $setClassName(f_Label9.element, 'hiddenText') , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_10(f_VerticalPanel5, (tblProfessors = new DataGrid_0 , tblProfessors.element.style['height'] = '500px' , tblProfessors.element.style['width'] = '400px' , $setKeyboardSelectionPolicy(tblProfessors, ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED)) , this$static.owner.tblProfessors = tblProfessors , tblProfessors)) , f_VerticalPanel5.element.style['width'] = '300px' , f_VerticalPanel5)) , $add_8(f_HorizontalPanel4, (f_VerticalPanel10 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel10, ALIGN_CENTER) , $add_10(f_VerticalPanel10, (f_Label11 = new Label_0 , $setClassName(f_Label11.element, 'hiddenText') , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_10(f_VerticalPanel10, (lblProfName = new Label_0 , $setClassName(lblProfName.element, 'header') , lblProfName.element.style['width'] = '' , this$static.owner.lblProfName = lblProfName , lblProfName)) , $add_10(f_VerticalPanel10, (f_Grid12 = new Grid_0 , $resizeColumns(f_Grid12, 2) , $resizeRows(f_Grid12, 2) , $setWidget_1(f_Grid12, 0, 0, (f_Label13 = new Label_0 , $setTextOrHtml(f_Label13.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $setWidget_1(f_Grid12, 0, 1, (lstYear = new ListBox_0 , $addDomHandler(lstYear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstYear = lstYear , lstYear)) , $setWidget_1(f_Grid12, 1, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Mois :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14)) , $setWidget_1(f_Grid12, 1, 1, (lstMonth = new ListBox_0 , $addDomHandler(lstMonth, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstMonth = lstMonth , lstMonth)) , f_Grid12.element.style['width'] = '300px' , f_Grid12)) , $add_10(f_VerticalPanel10, (f_Label15 = new Label_0 , f_Label15.element.style['height'] = '20px' , f_Label15)) , $add_10(f_VerticalPanel10, $build_f_Grid16(this$static)) , $add_10(f_VerticalPanel10, (cmdSave = new Button_0 , $setClassName(cmdSave.element, 'button-highlight') , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , $add_10(f_VerticalPanel10, (f_Label27 = new Label_0 , $setClassName(f_Label27.element, 'hiddenText') , $setTextOrHtml(f_Label27.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label27) , f_Label27)) , $add_10(f_VerticalPanel10, (f_VerticalPanel28 = new VerticalPanel_0 , $add_10(f_VerticalPanel28, (f_Label29 = new Label_0 , $setClassName(f_Label29.element, 'sectionTitle') , $setAutoHorizontalAlignment(f_Label29, ALIGN_LEFT) , $setTextOrHtml(f_Label29.directionalTextHelper, 'R\xE9capitulatif des heures du mois', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $add_10(f_VerticalPanel28, (f_HorizontalPanel30 = new HorizontalPanel_0 , $add_8(f_HorizontalPanel30, (f_Label31 = new Label_0 , $setTextOrHtml(f_Label31.directionalTextHelper, 'Responsable du prof :', false) , $updateHorizontalAlignment(f_Label31) , f_Label31)) , $add_8(f_HorizontalPanel30, (txtResponsable = new Label_0 , $setClassName(txtResponsable.element, 'boldBlue') , $setTextOrHtml(txtResponsable.directionalTextHelper, '...', false) , $updateHorizontalAlignment(txtResponsable) , txtResponsable.element.style['width'] = '300px' , this$static.owner.txtResponsable = txtResponsable , txtResponsable)) , $setPropertyInt(f_HorizontalPanel30.table, 'cellSpacing', 5) , f_HorizontalPanel30)) , $add_10(f_VerticalPanel28, (tblHours = new FlexTable_0 , tblHours.element.style['width'] = '800px' , this$static.owner.tblHours = tblHours , tblHours)) , f_VerticalPanel28.element.style['width'] = '100%' , f_VerticalPanel28)) , $add_10(f_VerticalPanel10, (f_Label32 = new Label_0 , $setClassName(f_Label32.element, 'blue') , $setTextOrHtml(f_Label32.directionalTextHelper, 'D\xE9cocher pour d\xE9sapprouver les heures saisies par les autres sections. Une notification sera envoy\xE9e \xE0 la direction de la section.', false) , $updateHorizontalAlignment(f_Label32) , f_Label32)) , $add_10(f_VerticalPanel10, (f_Label33 = new Label_0 , $setClassName(f_Label33.element, 'boldRed') , $setTextOrHtml(f_Label33.directionalTextHelper, 'Les heures d\xE9saprouv\xE9es ne seront pas comptabilis\xE9es.', false) , $updateHorizontalAlignment(f_Label33) , f_Label33)) , $add_10(f_VerticalPanel10, (f_Label34 = new Label_0 , $setClassName(f_Label34.element, 'hiddenText') , $setTextOrHtml(f_Label34.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $add_10(f_VerticalPanel10, (f_HorizontalPanel35 = new HorizontalPanel_0 , $add_8(f_HorizontalPanel35, (f_Label36 = new Label_0 , $setTextOrHtml(f_Label36.directionalTextHelper, 'R\xE9capitulatif des heures :', false) , $updateHorizontalAlignment(f_Label36) , f_Label36)) , $add_8(f_HorizontalPanel35, (f_Hyperlink37 = new Hyperlink_0 , $setTargetHistoryToken(f_Hyperlink37, 'rptbydept') , $setTextOrHtml(f_Hyperlink37.directionalTextHelper, 'Par d\xE9partement', false) , f_Hyperlink37)) , $add_8(f_HorizontalPanel35, (f_Label38 = new Label_0 , $setTextOrHtml(f_Label38.directionalTextHelper, '-', false) , $updateHorizontalAlignment(f_Label38) , f_Label38)) , $add_8(f_HorizontalPanel35, (f_Hyperlink39 = new Hyperlink_0 , $setTargetHistoryToken(f_Hyperlink39, 'extractdata') , $setTextOrHtml(f_Hyperlink39.directionalTextHelper, 'Par chaque professeur', false) , f_Hyperlink39)) , f_HorizontalPanel35.element.style['width'] = '' , $setPropertyInt(f_HorizontalPanel35.table, 'cellSpacing', 5) , f_HorizontalPanel35)) , $setClassName(f_VerticalPanel10.element, 'subSection') , f_VerticalPanel10.element.style['width'] = '600px' , f_VerticalPanel10)) , f_HorizontalPanel4.element.style['height'] = '100%' , $setPropertyString(f_HorizontalPanel4.table, 'border', '0') , f_HorizontalPanel4.element.style['width'] = '100%' , $setPropertyInt(f_HorizontalPanel4.table, 'cellSpacing', 5) , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['height'] = '' , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function TimeInputView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new TimeInputView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new TimeInputView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new TimeInputView_BinderImpl$Widgets$3_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new TimeInputView_BinderImpl$Widgets$4_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new TimeInputView_BinderImpl$Widgets$5_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new TimeInputView_BinderImpl$Widgets$6_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new TimeInputView_BinderImpl$Widgets$7_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8 = new TimeInputView_BinderImpl$Widgets$8_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9 = new TimeInputView_BinderImpl$Widgets$9_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10 = new TimeInputView_BinderImpl$Widgets$10_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11 = new TimeInputView_BinderImpl$Widgets$11_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12 = new TimeInputView_BinderImpl$Widgets$12_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13 = new TimeInputView_BinderImpl$Widgets$13_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14 = new TimeInputView_BinderImpl$Widgets$14_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames15 = new TimeInputView_BinderImpl$Widgets$15_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames16 = new TimeInputView_BinderImpl$Widgets$16_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames17 = new TimeInputView_BinderImpl$Widgets$17_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames18 = new TimeInputView_BinderImpl$Widgets$18_0;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames19 = new TimeInputView_BinderImpl$Widgets$19_0;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames20 = new TimeInputView_BinderImpl$Widgets$20_0;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames21 = new TimeInputView_BinderImpl$Widgets$21_0;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames22 = new TimeInputView_BinderImpl$Widgets$22_0;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames23 = new TimeInputView_BinderImpl$Widgets$23_0;
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1108, 1, {}, TimeInputView_BinderImpl$Widgets_0);
function TimeInputView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1109, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_11(event_0){
  $onLstAddEcoleChanged_0(this.this$1.owner);
}
;
function TimeInputView_BinderImpl$Widgets$10_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1110, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$10_0);
_.onChange = function onChange_12(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$11_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1111, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$11_0);
_.onChange = function onChange_13(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$12_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1112, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$12_0);
_.onChange = function onChange_14(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$13_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1113, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$13_0);
_.onChange = function onChange_15(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$14_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1114, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$14_0);
_.onChange = function onChange_16(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$15_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1115, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$15_0);
_.onChange = function onChange_17(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$16_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1116, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$16_0);
_.onChange = function onChange_18(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$17_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1117, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$17_0);
_.onChange = function onChange_19(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$18_0(){
}

defineSeed(1118, 1, makeCastMap([Q$MouseDownHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$18_0);
_.onMouseDown = function onMouseDown(event_0){
  $showNoteBox(dynamicCast(event_0.source, Q$TextBox));
}
;
function TimeInputView_BinderImpl$Widgets$19_0(){
}

defineSeed(1119, 1, makeCastMap([Q$MouseDownHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$19_0);
_.onMouseDown = function onMouseDown_0(event_0){
  $showNoteBox(dynamicCast(event_0.source, Q$TextBox));
}
;
function TimeInputView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1120, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_20(event_0){
  $reloadProfList(this.this$1.owner);
}
;
function TimeInputView_BinderImpl$Widgets$20_0(){
}

defineSeed(1121, 1, makeCastMap([Q$MouseDownHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$20_0);
_.onMouseDown = function onMouseDown_1(event_0){
  $showNoteBox(dynamicCast(event_0.source, Q$TextBox));
}
;
function TimeInputView_BinderImpl$Widgets$21_0(){
}

defineSeed(1122, 1, makeCastMap([Q$MouseDownHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$21_0);
_.onMouseDown = function onMouseDown_2(event_0){
  $showNoteBox(dynamicCast(event_0.source, Q$TextBox));
}
;
function TimeInputView_BinderImpl$Widgets$22_0(){
}

defineSeed(1123, 1, makeCastMap([Q$MouseDownHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$22_0);
_.onMouseDown = function onMouseDown_3(event_0){
  $showNoteBox(dynamicCast(event_0.source, Q$TextBox));
}
;
function TimeInputView_BinderImpl$Widgets$23_0(){
}

defineSeed(1124, 1, makeCastMap([Q$MouseDownHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$23_0);
_.onMouseDown = function onMouseDown_4(event_0){
  $showNoteBox(dynamicCast(event_0.source, Q$TextBox));
}
;
function TimeInputView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1125, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_21(event_0){
  $reloadProfList(this.this$1.owner);
}
;
function TimeInputView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1126, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_22(event_0){
  $reloadProfList(this.this$1.owner);
}
;
function TimeInputView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1127, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_34(event_0){
  $onCmdSaveClick_1(this.this$1.owner);
}
;
function TimeInputView_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1128, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$6_0);
_.onChange = function onChange_23(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$7_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1129, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$7_0);
_.onChange = function onChange_24(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$8_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1130, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$8_0);
_.onChange = function onChange_25(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function TimeInputView_BinderImpl$Widgets$9_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1131, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$9_0);
_.onChange = function onChange_26(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
function $html1_12(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$) {
    result = new TimeInputView_0(new TimeInputView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$;
}

defineSeed(1167, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfessorProxy]));
_.setLogModifyDate = function setLogModifyDate(date){
  dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).setLogModifyDate(date);
}
;
defineSeed(1168, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfessorProxy]));
_.setLogModifyDate = function setLogModifyDate_0(date){
  $setProperty(this.this$0, 'logModifyDate', date);
}
;
function $clinit_ContactRequestFactoryImpl(){
  $clinit_ContactRequestFactoryImpl = nullMethod;
  tokensToTypes_0 = new HashMap_0;
  typesToTokens_0 = new HashMap_0;
  entityProxyTypes_0 = new HashSet_0;
  valueProxyTypes_0 = new HashSet_0;
}

function ContactRequestFactoryImpl_0(){
  $clinit_ContactRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1181, 622, {}, ContactRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_0(){
  return 'com.lemania.timetracking.shared.service.ContactRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_0(typeToken){
  return dynamicCast(tokensToTypes_0.get_2(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_4(type_0){
  return dynamicCast(typesToTokens_0.get_2(type_0), Q$String);
}
;
_.isEntityType = function isEntityType_1(type_0){
  return $contains_1(entityProxyTypes_0, type_0);
}
;
_.isValueType = function isValueType_1(type_0){
  return $contains_1(valueProxyTypes_0, type_0);
}
;
var entityProxyTypes_0, tokensToTypes_0, typesToTokens_0, valueProxyTypes_0;
function ContactRequestFactory_ContactRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1182, 632, makeCastMap([Q$AbstractRequestContext]), ContactRequestFactory_ContactRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_0(){
  return !FACTORY_1 && (FACTORY_1 = new ContactRequestFactory_ContactRequestContextImpl_FactoryImpl_0) , FACTORY_1;
}
;
var FACTORY_1;
function ContactRequestFactory_ContactRequestContextImpl$3X_0(this$0, val$profId, val$courseId, val$year, val$month, val$status){
  this.val$profId = val$profId;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  this.val$status = val$status;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1183, 631, makeCastMap([Q$AbstractRequest]), ContactRequestFactory_ContactRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_2(){
  return new RequestData_0('667gaF_UGITV_kwlJLSZwejtR_s=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$courseId, this.val$year, this.val$month, ($clinit_Boolean() , this.val$status?TRUE_1:FALSE_1)]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$status = false;
function ContactRequestFactory_ContactRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1184, 557, makeCastMap([Q$EnumMap]), ContactRequestFactory_ContactRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_1(map_0){
}
;
_.initializeEnumMap = function initializeEnumMap_1(){
}
;
function $batchUpdate(this$static, profId, courseId, year, month, coursTime, coursNote, maladieTime, maladieNote, ferieTime, ferieNote, priveTime, priveNote, supervisionTime, supervisionNote, fraisAmount, fraisNote){
  var x_0;
  x_0 = new LogRequestFactory_LogRequestContextImpl$1X_0(this$static, profId, courseId, year, month, coursTime, coursNote, maladieTime, maladieNote, ferieTime, ferieNote, priveTime, priveNote, supervisionTime, supervisionNote, fraisAmount, fraisNote);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function $listAll_2(this$static, profId, courseId, year, month){
  var x_0;
  x_0 = new LogRequestFactory_LogRequestContextImpl$5X_0(this$static, profId, courseId, year, month);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function $listAllFullDetailByProf(this$static, profId, year, month){
  var x_0;
  x_0 = new LogRequestFactory_LogRequestContextImpl$10X_0(this$static, profId, year, month);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function LogRequestFactory_LogRequestContextImpl$10X_0(this$0, val$profId, val$year, val$month){
  this.val$profId = val$profId;
  this.val$year = val$year;
  this.val$month = val$month;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1202, 631, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$10X_0);
_.makeRequestData = function makeRequestData_10(){
  return new RequestData_0('FlPc0OtewVFA7nSBQyfJXiJh$lg=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, valueOf_1(this.val$year), valueOf_1(this.val$month)]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.val$month = 0;
_.val$year = 0;
function LogRequestFactory_LogRequestContextImpl$15X_0(this$0, val$profId, val$courseId, val$year, val$month, val$status){
  this.val$profId = val$profId;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  this.val$status = val$status;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1204, 631, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$15X_0);
_.makeRequestData = function makeRequestData_12(){
  return new RequestData_0('6O_bTyUtbbARCoUx5gZwNiTrEpM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$courseId, this.val$year, this.val$month, ($clinit_Boolean() , this.val$status?TRUE_1:FALSE_1)]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$status = false;
function LogRequestFactory_LogRequestContextImpl$1X_0(this$0, val$profId, val$courseId, val$year, val$month, val$coursTime, val$coursNote, val$maladieTime, val$maladieNote, val$ferieTime, val$ferieNote, val$priveTime, val$priveNote, val$supervisionTime, val$supervisionNote, val$fraisAmount, val$fraisNote){
  this.val$profId = val$profId;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  this.val$coursTime = val$coursTime;
  this.val$coursNote = val$coursNote;
  this.val$maladieTime = val$maladieTime;
  this.val$maladieNote = val$maladieNote;
  this.val$ferieTime = val$ferieTime;
  this.val$ferieNote = val$ferieNote;
  this.val$priveTime = val$priveTime;
  this.val$priveNote = val$priveNote;
  this.val$supervisionTime = val$supervisionTime;
  this.val$supervisionNote = val$supervisionNote;
  this.val$fraisAmount = val$fraisAmount;
  this.val$fraisNote = val$fraisNote;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1205, 631, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_13(){
  return new RequestData_0('xnPISWZ4lBR9rHCoRwANJ28cPz4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$courseId, this.val$year, this.val$month, this.val$coursTime, this.val$coursNote, this.val$maladieTime, this.val$maladieNote, this.val$ferieTime, this.val$ferieNote, this.val$priveTime, this.val$priveNote, this.val$supervisionTime, this.val$supervisionNote, this.val$fraisAmount, this.val$fraisNote]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
function LogRequestFactory_LogRequestContextImpl$5X_0(this$0, val$profId, val$courseId, val$year, val$month){
  this.val$profId = val$profId;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1206, 631, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_14(){
  return new RequestData_0('jYwYNZ2GdAHpRkHITOENfbCme_E=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$courseId, this.val$year, this.val$month]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
function ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0(this$0, val$courseId, val$year, val$month){
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1221, 631, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_23(){
  return new RequestData_0('V$DB2$k$L6KOdOLJxLo83lbU2I8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$courseId, this.val$year, this.val$month]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
defineSeed(1246, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.add_0 = function add_10(index_0, element){
  dynamicCast($getWrapped(this.this$0), Q$List).add_0(index_0, element);
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(index_0), element]);
}
;
function $matches(this$static, regex){
  return (new RegExp('^(' + regex + ')$')).test(this$static);
}

defineSeed(1317, 1315, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.add_0 = function add_20(index_0, element){
  throw new UnsupportedOperationException_0;
}
;
var Lcom_lemania_timetracking_client_presenter_TimeInputPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter', 868), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$1', 869), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$2', 870), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$3', 871), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$6', 872), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$7_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$7', 873), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$8_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$8', 874), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$9_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$9', 875), Lcom_lemania_timetracking_client_event_UpdateTimeLogEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'UpdateTimeLogEvent', 752), Lcom_lemania_timetracking_client_event_LoadAllProfessorLogsEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'LoadAllProfessorLogsEvent', 749), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$1', 877), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$1$1', 878), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$4', 883), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$4$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$4$1', 884), Lcom_lemania_timetracking_client_view_TimeInputView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView', 1099), Lcom_lemania_timetracking_client_view_TimeInputView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$1', 1100), Lcom_lemania_timetracking_client_view_TimeInputView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$2', 1101), Lcom_lemania_timetracking_client_view_TimeInputView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$3', 1102), Lcom_lemania_timetracking_client_view_TimeInputView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$4', 1103), Lcom_lemania_timetracking_client_view_TimeInputView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$5', 1104), Lcom_lemania_timetracking_client_view_TimeInputView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$6', 1105), Lcom_lemania_timetracking_client_view_TimeInputView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$7', 1106), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl', 1107), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets', 1108), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$1', 1109), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$2', 1120), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$3', 1125), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$4', 1126), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$5', 1127), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$6', 1128), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$7', 1129), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$8', 1130), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$9', 1131), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$10_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$10', 1110), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$11_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$11', 1111), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$12_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$12', 1112), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$13_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$13', 1113), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$14_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$14', 1114), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$15_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$15', 1115), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$16_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$16', 1116), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$17_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$17', 1117), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$18_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$18', 1118), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$19_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$19', 1119), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$20_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$20', 1121), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$21_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$21', 1122), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$22_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$22', 1123), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$23_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$23', 1124), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$4X', 1221), Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseDownEvent', 244), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$1X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$1X', 1205), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$5X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$5X', 1206), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$10X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$10X', 1202), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$15X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$15X', 1204), Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextArea', 508), Lcom_lemania_timetracking_shared_service_ContactRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ContactRequestFactoryImpl', 1181), Lcom_lemania_timetracking_shared_service_ContactRequestFactory_1ContactRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ContactRequestFactory_ContactRequestContextImpl', 1182), Lcom_lemania_timetracking_shared_service_ContactRequestFactory_1ContactRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ContactRequestFactory_ContactRequestContextImpl$3X', 1183), Lcom_lemania_timetracking_shared_service_ContactRequestFactory_1ContactRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ContactRequestFactory_ContactRequestContextImpl_FactoryImpl', 1184);
$entry(onLoad)(15);
