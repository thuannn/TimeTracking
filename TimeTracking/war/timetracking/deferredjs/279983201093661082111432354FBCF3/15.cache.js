function $addRangeChangeHandler(this$static, handler){
  return $addRangeChangeHandler_0(this$static.presenter, handler);
}

defineSeed(336, 337, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasData]));
_.setRowCount = function setRowCount(size, isExact){
  $setRowCount_1(this.presenter, size, isExact);
}
;
function $addRangeChangeHandler_0(this$static, handler){
  return $addHandler_1(this$static.view, handler, (!TYPE_17 && (TYPE_17 = new GwtEvent$Type_0) , TYPE_17));
}

defineSeed(372, 1, makeCastMap([Q$HasHandlers, Q$HasData]));
_.setRowCount = function setRowCount_0(count, isExact){
  $setRowCount_1(this, count, isExact);
}
;
function $addDataDisplay(this$static, display){
  var handler;
  if (!display) {
    throw new IllegalArgumentException_1('display cannot be null');
  }
   else if ($contains_1(this$static.displays, display)) {
    throw new IllegalStateException_1('The specified display has already been added to this adapter.');
  }
  $add_16(this$static.displays, display);
  handler = $addRangeChangeHandler(display, new AbstractDataProvider$1_0(this$static, display));
  this$static.rangeChangeHandlers.put(display, handler);
  this$static.lastRowCount >= 0 && $setRowCount_0(display, this$static.lastRowCount, this$static.lastRowCountExact);
  $onRangeChanged(this$static, display);
}

function $updateRowCount(this$static, count){
  var display, display$iterator;
  this$static.lastRowCount = count;
  this$static.lastRowCountExact = true;
  for (display$iterator = $iterator($keySet(this$static.displays.map)); display$iterator.val$outerIter.hasNext();) {
    display = dynamicCast($next_5(display$iterator), Q$HasData);
    display.setRowCount(count, true);
  }
}

function $updateRowData(this$static, start, values){
  var display, display$iterator;
  for (display$iterator = $iterator($keySet(this$static.displays.map)); display$iterator.val$outerIter.hasNext();) {
    display = dynamicCast($next_5(display$iterator), Q$HasData);
    $updateRowData_0(display, start, values);
  }
}

defineSeed(536, 1, {});
_.lastRowCount = -1;
_.lastRowCountExact = false;
function AbstractDataProvider$1_0(this$0, val$display){
  this.this$0 = this$0;
  this.val$display = val$display;
}

defineSeed(537, 1, makeCastMap([Q$EventHandler, Q$RangeChangeEvent$Handler]), AbstractDataProvider$1_0);
_.this$0 = null;
_.val$display = null;
function $setList(this$static, listToWrap){
  this$static.listWrapper = new ListDataProvider$ListWrapper_0(this$static, listToWrap);
  this$static.listWrapper.minModified = 0;
  this$static.listWrapper.maxModified = this$static.listWrapper.list.size_1();
  this$static.listWrapper.modified = true;
  $flushNow(this$static.listWrapper);
}

function ListDataProvider_0(){
  ListDataProvider_1.call(this, new ArrayList_0);
}

function ListDataProvider_1(listToWrap){
  this.displays = new HashSet_0;
  this.rangeChangeHandlers = new HashMap_0;
  this.listWrapper = new ListDataProvider$ListWrapper_0(this, listToWrap);
}

defineSeed(541, 536, {}, ListDataProvider_0);
_.listWrapper = null;
function $flush(this$static){
  if (this$static.delegate) {
    this$static.delegate.minModified = min(this$static.minModified + this$static.offset, this$static.delegate.minModified);
    this$static.delegate.maxModified = max(this$static.maxModified + this$static.offset, this$static.delegate.maxModified);
    this$static.delegate.modified = this$static.modified || this$static.delegate.modified;
    $flush(this$static.delegate);
    return;
  }
  this$static.flushCancelled = false;
  if (!this$static.flushPending) {
    this$static.flushPending = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), this$static.flushCommand);
  }
}

function $flushNow(this$static){
  var newSize;
  this$static.flushPending && (this$static.flushCancelled = true);
  if (this$static.this$0.listWrapper != this$static) {
    return;
  }
  newSize = this$static.list.size_1();
  if (this$static.curSize != newSize) {
    this$static.curSize = newSize;
    $updateRowCount(this$static.this$0, this$static.curSize);
  }
  if (this$static.modified) {
    $updateRowData(this$static.this$0, this$static.minModified, this$static.list.subList(this$static.minModified, this$static.maxModified));
    this$static.modified = false;
  }
  this$static.minModified = 2147483647;
  this$static.maxModified = -2147483648;
}

function $get_4(this$static, index){
  return this$static.list.get_0(index);
}

function $remove_11(this$static, index){
  var e, toRet;
  try {
    toRet = this$static.list.remove_1(index);
    this$static.minModified = min(this$static.minModified, index);
    this$static.maxModified = this$static.list.size_1();
    this$static.modified = true;
    $flush(this$static);
    return toRet;
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$IndexOutOfBoundsException)) {
      e = $e0;
      throw new IndexOutOfBoundsException_1(e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function ListDataProvider$ListWrapper_0(this$0, list){
  ListDataProvider$ListWrapper_1.call(this, this$0, list, null, 0);
  $updateRowCount(this$0, list.size_0);
}

function ListDataProvider$ListWrapper_1(this$0, list, delegate, offset){
  this.this$0 = this$0;
  this.flushCommand = new ListDataProvider$ListWrapper$1_0(this);
  this.list = list;
  this.delegate = delegate;
  this.offset = offset;
}

defineSeed(542, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]), ListDataProvider$ListWrapper_0, ListDataProvider$ListWrapper_1);
_.add_0 = function add_1(index, element){
  var e;
  try {
    this.list.add_0(index, element);
    this.minModified = min(this.minModified, index);
    this.maxModified = this.list.size_1();
    this.modified = true;
    $flush(this);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$IndexOutOfBoundsException)) {
      e = $e0;
      throw new IndexOutOfBoundsException_1(e.detailMessage);
    }
     else 
      throw $e0;
  }
}
;
_.add_1 = function add_2(e){
  var toRet;
  toRet = this.list.add_1(e);
  this.minModified = min(this.minModified, this.list.size_1() - 1);
  this.maxModified = this.list.size_1();
  this.modified = true;
  $flush(this);
  return toRet;
}
;
_.clear_0 = function clear(){
  this.list.clear_0();
  this.minModified = this.maxModified = 0;
  this.modified = true;
  $flush(this);
}
;
_.contains_0 = function contains(o){
  return this.list.contains_0(o);
}
;
_.equals$ = function equals_8(o){
  return this.list.equals$(o);
}
;
_.get_0 = function get_2(index){
  return this.list.get_0(index);
}
;
_.hashCode$ = function hashCode_10(){
  return this.list.hashCode$();
}
;
_.indexOf_0 = function indexOf(o){
  return this.list.indexOf_0(o);
}
;
_.isEmpty_0 = function isEmpty(){
  return this.list.isEmpty_0();
}
;
_.iterator = function iterator_6(){
  return new ListDataProvider$ListWrapper$WrappedListIterator_0(this);
}
;
_.listIterator = function listIterator(){
  return new ListDataProvider$ListWrapper$WrappedListIterator_0(this);
}
;
_.listIterator_0 = function listIterator_0(index){
  return new ListDataProvider$ListWrapper$WrappedListIterator_1(this, index);
}
;
_.remove_1 = function remove_16(index){
  return $remove_11(this, index);
}
;
_.remove_2 = function remove_17(o){
  var index;
  index = this.list.indexOf_0(o);
  if (index == -1) {
    return false;
  }
  $remove_11(this, index);
  return true;
}
;
_.size_1 = function size_0(){
  return this.list.size_1();
}
;
_.subList = function subList(fromIndex, toIndex){
  return new ListDataProvider$ListWrapper_1(this.this$0, this.list.subList(fromIndex, toIndex), this, fromIndex);
}
;
_.toArray = function toArray(){
  return this.list.toArray();
}
;
_.curSize = 0;
_.delegate = null;
_.flushCancelled = false;
_.flushPending = false;
_.list = null;
_.maxModified = -2147483648;
_.minModified = 2147483647;
_.modified = false;
_.offset = 0;
_.this$0 = null;
function ListDataProvider$ListWrapper$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(543, 1, {}, ListDataProvider$ListWrapper$1_0);
_.execute_0 = function execute_21(){
  this.this$1.flushPending = false;
  if (this.this$1.flushCancelled) {
    this.this$1.flushCancelled = false;
    return;
  }
  $flushNow(this.this$1);
}
;
_.this$1 = null;
function ListDataProvider$ListWrapper$WrappedListIterator_0(this$1){
  this.this$1 = this$1;
}

function ListDataProvider$ListWrapper$WrappedListIterator_1(this$1, start){
  var size;
  this.this$1 = this$1;
  size = this$1.list.size_1();
  if (start < 0 || start > size) {
    throw new IndexOutOfBoundsException_1('Index: ' + start + ', Size: ' + size);
  }
  this.i = start;
}

defineSeed(544, 1, makeCastMap([Q$Iterator, Q$ListIterator]), ListDataProvider$ListWrapper$WrappedListIterator_0, ListDataProvider$ListWrapper$WrappedListIterator_1);
_.hasNext = function hasNext_4(){
  return this.i < this.this$1.list.size_1();
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.next_0 = function next_5(){
  if (this.i >= this.this$1.list.size_1()) {
    throw new NoSuchElementException_0;
  }
  return $get_4(this.this$1, this.last = this.i++);
}
;
_.previous = function previous_0(){
  if (this.i <= 0) {
    throw new NoSuchElementException_0;
  }
  return $get_4(this.this$1, this.last = --this.i);
}
;
_.remove_0 = function remove_18(){
  if (this.last < 0) {
    throw new IllegalStateException_1('Cannot call add/remove more than once per call to next/previous.');
  }
  $remove_11(this.this$1, this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
_.this$1 = null;
defineSeed(601, 597, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.indexOf_0 = function indexOf_0(toFind){
  return $indexOf_0(this, toFind);
}
;
function UpdateTimeLogEvent_0(prof, courseId, year, month){
  $clinit_UpdateTimeLogEvent();
  this.prof = prof;
  this.courseId = courseId;
  this.year = year;
  this.month = month;
}

defineSeed(740, 230, {}, UpdateTimeLogEvent_0);
_.dispatch_0 = function dispatch_38(handler){
  dynamicCast(handler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler).onUpdateTimeLog(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_39(){
  return TYPE_39;
}
;
_.courseId = null;
_.month = null;
_.prof = null;
_.year = null;
function $loadLogData(this$static, prof, courseId, year, month){
  var rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire($listAll_2(rcl, '' + toString_6(prof.getId_0().value_0), courseId, year, month), new TimeInputPresenter$3_0(this$static));
}

function $loadProfessorsByCourse(this$static, courseId, year, month){
  var rc, rf, x;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire((x = new ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0(rc, courseId, year, month) , $addInvocation(rc.state.dialect, x) , x), new TimeInputPresenter$2_0(this$static));
}

function $onUpdateTimeLog(this$static, event_0){
  $loadLogData(this$static, event_0.prof, event_0.courseId, event_0.year, event_0.month);
}

function $professorSelected_0(this$static, prof, courseId, year, month){
  $doFire(this$static.eventBus, new UpdateTimeLogEvent_0(prof, courseId, year, month), null);
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
  $fire($batchUpdate(rcl, '' + toString_6(prof.getId_0().value_0), courseId, year, month, coursTime, coursNote, maladieTime, maladieNote, ferieTime, ferieNote, priveTime, priveNote, supervisionTime, supervisionNote, fraisAmount, fraisNote), new TimeInputPresenter$6_0(this$static));
}

function TimeInputPresenter_0(eventBus, view, placeManager, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  this.placeManager = placeManager;
}

defineSeed(855, 680, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler, Q$TimeInputPresenter, Q$TimeInputUiHandler]), TimeInputPresenter_0);
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
_.onLoginAuthenticated = function onLoginAuthenticated_13(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_11(){
  var rf, rc;
  if (this.currentUser.isReadOnly) {
    alert_0("L'acc\xE8s \xE0 cette fonction est bloqu\xE9 d\xE8s \xE0 pr\xE9sent.");
    $clinit_History();
    !!impl_2 && $newItem(impl_2, '!homepage', true);
  }
  $initializeValues_0(dynamicCast(this.view, Q$TimeInputPresenter$MyView), this.currentUser.currentMonth, this.currentUser.currentYear, this.currentUser.isAdmin);
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
_.currentUser = null;
_.placeManager = null;
function $onSuccess_34(this$static, response){
  $setCourseList(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response);
}

function TimeInputPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(856, 619, makeCastMap([Q$Receiver]), TimeInputPresenter$1_0);
_.onFailure_0 = function onFailure_36(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_36(response){
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

defineSeed(857, 619, makeCastMap([Q$Receiver]), TimeInputPresenter$2_0);
_.onFailure_0 = function onFailure_37(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_37(response){
  $onSuccess_35(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_36(this$static, response){
  $setLogData_1(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
}

function TimeInputPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(858, 619, makeCastMap([Q$Receiver]), TimeInputPresenter$3_0);
_.onFailure_0 = function onFailure_38(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_38(response){
  $onSuccess_36(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_37(this$static, response){
  $setOnLeaveConfirmation(this$static.this$0.placeManager, null);
  $setLogData_1(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function TimeInputPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(859, 619, makeCastMap([Q$Receiver]), TimeInputPresenter$6_0);
_.onFailure_0 = function onFailure_39(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_39(response){
  $onSuccess_37(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
defineSeed(860, 712, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$ActionCompletedEvent$ActionCompletedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler]));
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

defineSeed(861, 694, {}, TimeInputPresenterMyProxyImpl$1_0);
_.success = function success_13(presenter){
  $success_11(this, dynamicCast(presenter, Q$TimeInputPresenter));
}
;
_.val$event = null;
function TimeInputPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(862, 1, {}, TimeInputPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_41(){
  $onUpdateTimeLog(this.val$presenter, this.val$event);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$) {
    result = new TimeInputPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$;
}

defineSeed(894, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_54(){
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

function $initializeProfTable(this$static){
  var colDate, colName, selectionModel;
  colName = new TimeInputView$1_0;
  $addColumn(this$static.tblProfessors, colName, 'Nom');
  colDate = new TimeInputView$2_0;
  $addColumn(this$static.tblProfessors, colDate, 'Date de modification');
  selectionModel = new TimeInputView$3_0;
  $addSelectionChangeHandler(selectionModel, new TimeInputView$4_0(this$static, selectionModel));
  $setSelectionModel(this$static.tblProfessors, selectionModel);
}

function $initializeValues_0(this$static, currentMonth, currentYear, isAdmin){
  var i;
  $selectClear(this$static.lstSchools.element);
  $selectClear(this$static.lstCourses.element);
  $clearProfTable(this$static);
  $clearValues(this$static);
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
  $clearValues(this$static);
}

function $onCmdSaveClick_1(this$static){
  $equals_3($getPropertyString(this$static.txtCoursTime.element, 'value'), '') && $setText_2(this$static.txtCoursTime, '0.0');
  $equals_3($getPropertyString(this$static.txtMaladieTime.element, 'value'), '') && $setText_2(this$static.txtMaladieTime, '0.0');
  $equals_3($getPropertyString(this$static.txtFerieTime.element, 'value'), '') && $setText_2(this$static.txtFerieTime, '0.0');
  $equals_3($getPropertyString(this$static.txtPriveTime.element, 'value'), '') && $setText_2(this$static.txtPriveTime, '0.0');
  $equals_3($getPropertyString(this$static.txtSupervisionTime.element, 'value'), '') && $setText_2(this$static.txtSupervisionTime, '0.0');
  $equals_3($getPropertyString(this$static.txtFraisAmount.element, 'value'), '') && $setText_2(this$static.txtFraisAmount, '0.0');
  if (!$matches($getPropertyString(this$static.txtCoursTime.element, 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$') || !$matches($getPropertyString(this$static.txtMaladieTime.element, 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$') || !$matches($getPropertyString(this$static.txtFerieTime.element, 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$') || !$matches($getPropertyString(this$static.txtPriveTime.element, 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$') || !$matches($getPropertyString(this$static.txtSupervisionTime.element, 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$') || !$matches($getPropertyString(this$static.txtFraisAmount.element, 'value'), '^(([0-9]*)|(([0-9]*).([0-9]*)))$')) {
    alert_0('Veuillez introduire des heures en chiffre.');
    return;
  }
  $updateLogTime(dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler), this$static.selectedProfessor, $getValue_1(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), $getItemText(this$static.lstYear, this$static.lstYear.element.selectedIndex), $getItemText(this$static.lstMonth, this$static.lstMonth.element.selectedIndex), $getPropertyString(this$static.txtCoursTime.element, 'value'), $getPropertyString(this$static.txtCoursNote.element, 'value'), $getPropertyString(this$static.txtMaladieTime.element, 'value'), $getPropertyString(this$static.txtMaladieNote.element, 'value'), $getPropertyString(this$static.txtFerieTime.element, 'value'), $getPropertyString(this$static.txtFerieNote.element, 'value'), $getPropertyString(this$static.txtPriveTime.element, 'value'), $getPropertyString(this$static.txtPriveNote.element, 'value'), $getPropertyString(this$static.txtSupervisionTime.element, 'value'), $getPropertyString(this$static.txtSupervisionNote.element, 'value'), $getPropertyString(this$static.txtFraisAmount.element, 'value'), $getPropertyString(this$static.txtFraisNote.element, 'value'));
}

function $onLstAddEcoleChanged_0(this$static){
  $clearProfTable(this$static);
  $clearValues(this$static);
  $equals_3($getItemText(this$static.lstSchools, this$static.lstSchools.element.selectedIndex), '-') || !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler) , $getValue_1(this$static.lstSchools, this$static.lstSchools.element.selectedIndex) , undefined);
}

function $reloadProfList(this$static){
  $clearProfTable(this$static);
  $clearValues(this$static);
  $clearValues(this$static);
  $setText_0(this$static.lblProfName, '');
  $equals_3($getItemText(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), '-') || !!this$static.uiHandlers && $loadProfessorsByCourse(dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler), $getValue_1(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), $getItemText(this$static.lstYear, this$static.lstYear.element.selectedIndex), $getItemText(this$static.lstMonth, this$static.lstMonth.element.selectedIndex));
}

function $setCourseList(this$static, cours){
  var i;
  $selectClear(this$static.lstCourses.element);
  $insertItem(this$static.lstCourses, '-', '', -1);
  for (i = 0; i < cours.size_1(); ++i)
    $insertItem(this$static.lstCourses, dynamicCast(cours.get_0(i), Q$CoursProxy).getSchoolName() + ' - ' + dynamicCast(cours.get_0(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(cours.get_0(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $setLogData_1(this$static, logs, logUpdated){
  var log, log$iterator, prof, rc, rf;
  for (log$iterator = logs.iterator(); log$iterator.hasNext();) {
    log = dynamicCast(log$iterator.next_0(), Q$LogProxy);
    if ($equals_3(log.getTypeName().toLowerCase(), '1.cours')) {
      $setText_2(this$static.txtCoursTime, '' + log.getHour());
      $setText_2(this$static.txtCoursNote, log.getMemo());
    }
    if ($equals_3(log.getTypeName().toLowerCase(), '2.maladie/acc')) {
      $setText_2(this$static.txtMaladieTime, '' + log.getHour());
      $setText_2(this$static.txtMaladieNote, log.getMemo());
    }
    if ($equals_3(log.getTypeName().toLowerCase(), '3.f\xE9ri\xE9s')) {
      $setText_2(this$static.txtFerieTime, '' + log.getHour());
      $setText_2(this$static.txtFerieNote, log.getMemo());
    }
    if ($equals_3(log.getTypeName().toLowerCase(), '4.priv\xE9')) {
      $setText_2(this$static.txtPriveTime, '' + log.getHour());
      $setText_2(this$static.txtPriveNote, log.getMemo());
    }
    if ($equals_3(log.getTypeName().toLowerCase(), '5.supervision')) {
      $setText_2(this$static.txtSupervisionTime, '' + log.getHour());
      $setText_2(this$static.txtSupervisionNote, log.getMemo());
    }
    if ($equals_3(log.getTypeName().toLowerCase(), '6.frais')) {
      $setText_2(this$static.txtFraisAmount, '' + log.getHour());
      $setText_2(this$static.txtFraisNote, log.getMemo());
    }
  }
  if (!!this$static.selectedProfessor && logUpdated.value_0) {
    rf = new ProfessorRequestFactoryImpl_0;
    rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
    prof = dynamicCast($editProxy(rc, this$static.selectedProfessor), Q$ProfessorProxy);
    prof.setLogModifyDate(dynamicCast(logs.get_0(0), Q$LogProxy).getModifyDate());
    this$static.currentProfList.remove_1(this$static.selectedProfessorIndex);
    this$static.currentProfList.add_0(this$static.selectedProfessorIndex, prof);
    $setRowData_0(this$static.tblProfessors, this$static.currentProfList);
    this$static.tblProfessors.presenter.selectionModel.setSelected(prof, true);
  }
}

function $setProfData(this$static, profs){
  this$static.currentProfList = profs;
  $setRowData_0(this$static.tblProfessors, this$static.currentProfList);
}

function TimeInputView_0(){
  this.tblProfessors = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_15(new TimeInputView_BinderImpl$Widgets_0(this));
}

defineSeed(1062, 685, makeCastMap([Q$IsWidget, Q$TimeInputPresenter$MyView]), TimeInputView_0);
_.asWidget = function asWidget_20(){
  return this.widget;
}
;
_.currentProfList = null;
_.lblProfName = null;
_.lstCourses = null;
_.lstMonth = null;
_.lstSchools = null;
_.lstYear = null;
_.professorProvider = null;
_.selectedProfessor = null;
_.selectedProfessorIndex = 0;
_.txtCoursNote = null;
_.txtCoursTime = null;
_.txtFerieNote = null;
_.txtFerieTime = null;
_.txtFraisAmount = null;
_.txtFraisNote = null;
_.txtMaladieNote = null;
_.txtMaladieTime = null;
_.txtPriveNote = null;
_.txtPriveTime = null;
_.txtSupervisionNote = null;
_.txtSupervisionTime = null;
_.widget = null;
function TimeInputView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1063, 383, makeCastMap([Q$HasCell, Q$Column]), TimeInputView$1_0);
_.getValue = function getValue_27(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
function TimeInputView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1064, 383, makeCastMap([Q$HasCell, Q$Column]), TimeInputView$2_0);
_.getValue = function getValue_28(object){
  return dynamicCast(object, Q$ProfessorProxy).getLogModifyDate();
}
;
function TimeInputView$3_0(){
  SingleSelectionModel_0.call(this);
}

defineSeed(1065, 550, makeCastMap([Q$HasHandlers]), TimeInputView$3_0);
_.setSelected = function setSelected_0(object, selected){
  $setSelected_0(this, dynamicCast(object, Q$ProfessorProxy), selected);
}
;
function TimeInputView$4_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(1066, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), TimeInputView$4_0);
_.onSelectionChange = function onSelectionChange_1(event_0){
  this.this$0.selectedProfessor = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfessorProxy);
  if (this.this$0.selectedProfessor) {
    this.this$0.selectedProfessorIndex = this.this$0.currentProfList.indexOf_0(this.this$0.selectedProfessor);
    $setText_0(this.this$0.lblProfName, this.this$0.selectedProfessor.getProfName());
    $clearValues(this.this$0);
    $professorSelected_0(dynamicCast(this.this$0.uiHandlers, Q$TimeInputUiHandler), this.this$0.selectedProfessor, $getValue_1(this.this$0.lstCourses, this.this$0.lstCourses.element.selectedIndex), $getItemText(this.this$0.lstYear, this.this$0.lstYear.element.selectedIndex), $getItemText(this.this$0.lstMonth, this.this$0.lstMonth.element.selectedIndex));
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function TimeInputView_BinderImpl_0(){
}

defineSeed(1067, 1, {}, TimeInputView_BinderImpl_0);
function $build_f_HTMLPanel1_15(this$static){
  var attachRecord14, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel10, f_Grid6, f_Label7, lstSchools, f_Label8, lstCourses, f_Label9, tblProfessors, f_Label11, f_Label12, f_Grid13, f_Label14, lblProfName, f_Label15, lstYear, f_Label16, lstMonth, f_Label17, f_Label18, f_Grid19, f_Label20, f_Label21, f_Label22, f_Label23, txtCoursTime, txtCoursNote, f_Label24, txtMaladieTime, txtMaladieNote, f_Label25, txtFerieTime, txtFerieNote, f_Label26, txtPriveTime, txtPriveNote, f_Label27, txtSupervisionTime, txtSupervisionNote, f_Label28, txtFraisAmount, txtFraisNote, f_Label29, cmdSave, f_Label30, f_HorizontalPanel31, f_Label32, f_Hyperlink33, f_Label34, f_Hyperlink35;
  f_HTMLPanel1 = new HTMLPanel_0($html1_11(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord14 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord14.origParent?$insertBefore(attachRecord14.origParent, attachRecord14.element, attachRecord14.origSibling):orphan(attachRecord14.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'SAISIR DES HEURES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '' , f_Label3)) , $add_9(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel4, ALIGN_LEFT) , $add_7(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel5, ALIGN_CENTER) , $add_9(f_VerticalPanel5, (f_Grid6 = new Grid_0 , $resizeColumns(f_Grid6, 2) , $resizeRows(f_Grid6, 2) , $setWidget_1(f_Grid6, 0, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Ecoles :', false) , $updateHorizontalAlignment(f_Label7) , setVisible(f_Label7.element, false) , f_Label7)) , $setWidget_1(f_Grid6, 0, 1, (lstSchools = new ListBox_0 , setVisible(lstSchools.element, false) , $addDomHandler(lstSchools, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstSchools = lstSchools , lstSchools)) , $setWidget_1(f_Grid6, 1, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, 'D\xE9partements :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid6, 1, 1, (lstCourses = new ListBox_0 , $addDomHandler(lstCourses, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE) , this$static.owner.lstCourses = lstCourses , lstCourses)) , f_Grid6.element.style['width'] = '100%' , f_Grid6)) , $add_9(f_VerticalPanel5, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_9(f_VerticalPanel5, (tblProfessors = new DataGrid_0 , tblProfessors.element.style['height'] = '500px' , tblProfessors.element.style['width'] = '400px' , $setKeyboardSelectionPolicy(tblProfessors, ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED)) , this$static.owner.tblProfessors = tblProfessors , tblProfessors)) , f_VerticalPanel5.element.style['width'] = '300px' , f_VerticalPanel5)) , $add_7(f_HorizontalPanel4, (f_VerticalPanel10 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel10, ALIGN_CENTER) , $add_9(f_VerticalPanel10, (f_Label11 = new Label_0 , f_Label11.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label11.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label11) , f_Label11)) , $add_9(f_VerticalPanel10, (f_Label12 = new Label_0 , f_Label12.element['className'] = 'sectionTitle' , f_Label12)) , $add_9(f_VerticalPanel10, (f_Grid13 = new Grid_0 , $resizeColumns(f_Grid13, 2) , $resizeRows(f_Grid13, 5) , $setWidget_1(f_Grid13, 0, 0, (f_Label14 = new Label_0 , $setTextOrHtml(f_Label14.directionalTextHelper, 'Professeur :', false) , $updateHorizontalAlignment(f_Label14) , f_Label14.element.style['width'] = '78px' , f_Label14)) , $setWidget_1(f_Grid13, 0, 1, (lblProfName = new Label_0 , lblProfName.element['className'] = 'header' , lblProfName.element.style['width'] = '' , this$static.owner.lblProfName = lblProfName , lblProfName)) , $setWidget_1(f_Grid13, 1, 0, (f_Label15 = new Label_0 , $setTextOrHtml(f_Label15.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label15) , f_Label15)) , $setWidget_1(f_Grid13, 1, 1, (lstYear = new ListBox_0 , $addDomHandler(lstYear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstYear = lstYear , lstYear)) , $setWidget_1(f_Grid13, 2, 0, (f_Label16 = new Label_0 , $setTextOrHtml(f_Label16.directionalTextHelper, 'Mois :', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , $setWidget_1(f_Grid13, 2, 1, (lstMonth = new ListBox_0 , $addDomHandler(lstMonth, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstMonth = lstMonth , lstMonth)) , $setWidget_1(f_Grid13, 3, 0, (f_Label17 = new Label_0 , f_Label17.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label17.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label17) , f_Label17)) , $setWidget_1(f_Grid13, 3, 1, new Label_0) , $setWidget_1(f_Grid13, 4, 0, (f_Label18 = new Label_0 , $setTextOrHtml(f_Label18.directionalTextHelper, 'Heures :', false) , $updateHorizontalAlignment(f_Label18) , f_Label18)) , $setWidget_1(f_Grid13, 4, 1, (f_Grid19 = new Grid_0 , $resizeColumns(f_Grid19, 3) , $resizeRows(f_Grid19, 8) , $setWidget_1(f_Grid19, 0, 0, (f_Label20 = new Label_0 , $setTextOrHtml(f_Label20.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label20) , f_Label20)) , $setWidget_1(f_Grid19, 0, 1, (f_Label21 = new Label_0 , $setTextOrHtml(f_Label21.directionalTextHelper, "Nombre d'heures", false) , $updateHorizontalAlignment(f_Label21) , f_Label21)) , $setWidget_1(f_Grid19, 0, 2, (f_Label22 = new Label_0 , $setTextOrHtml(f_Label22.directionalTextHelper, 'Commentaires', false) , $updateHorizontalAlignment(f_Label22) , f_Label22)) , $setWidget_1(f_Grid19, 1, 0, (f_Label23 = new Label_0 , $setTextOrHtml(f_Label23.directionalTextHelper, 'Cours', false) , $updateHorizontalAlignment(f_Label23) , f_Label23)) , $setWidget_1(f_Grid19, 1, 1, (txtCoursTime = new TextBox_0 , txtCoursTime.element.style['width'] = '100px' , $addDomHandler(txtCoursTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11, TYPE) , this$static.owner.txtCoursTime = txtCoursTime , txtCoursTime)) , $setWidget_1(f_Grid19, 1, 2, (txtCoursNote = new TextBox_0 , txtCoursNote.element.style['width'] = '300px' , $addDomHandler(txtCoursNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames15, TYPE) , this$static.owner.txtCoursNote = txtCoursNote , txtCoursNote)) , $setWidget_1(f_Grid19, 2, 0, (f_Label24 = new Label_0 , $setTextOrHtml(f_Label24.directionalTextHelper, 'Maladie/ACC', false) , $updateHorizontalAlignment(f_Label24) , f_Label24)) , $setWidget_1(f_Grid19, 2, 1, (txtMaladieTime = new TextBox_0 , txtMaladieTime.element.style['width'] = '100px' , $addDomHandler(txtMaladieTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames16, TYPE) , this$static.owner.txtMaladieTime = txtMaladieTime , txtMaladieTime)) , $setWidget_1(f_Grid19, 2, 2, (txtMaladieNote = new TextBox_0 , txtMaladieNote.element.style['width'] = '300px' , $addDomHandler(txtMaladieNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10, TYPE) , this$static.owner.txtMaladieNote = txtMaladieNote , txtMaladieNote)) , $setWidget_1(f_Grid19, 3, 0, (f_Label25 = new Label_0 , $setTextOrHtml(f_Label25.directionalTextHelper, 'F\xE9ri\xE9s/ MIL', false) , $updateHorizontalAlignment(f_Label25) , f_Label25)) , $setWidget_1(f_Grid19, 3, 1, (txtFerieTime = new TextBox_0 , txtFerieTime.element.style['width'] = '100px' , $addDomHandler(txtFerieTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14, TYPE) , this$static.owner.txtFerieTime = txtFerieTime , txtFerieTime)) , $setWidget_1(f_Grid19, 3, 2, (txtFerieNote = new TextBox_0 , txtFerieNote.element.style['width'] = '300px' , $addDomHandler(txtFerieNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, TYPE) , this$static.owner.txtFerieNote = txtFerieNote , txtFerieNote)) , $setWidget_1(f_Grid19, 4, 0, (f_Label26 = new Label_0 , $setTextOrHtml(f_Label26.directionalTextHelper, 'Priv\xE9', false) , $updateHorizontalAlignment(f_Label26) , f_Label26)) , $setWidget_1(f_Grid19, 4, 1, (txtPriveTime = new TextBox_0 , txtPriveTime.element.style['width'] = '100px' , $addDomHandler(txtPriveTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, TYPE) , this$static.owner.txtPriveTime = txtPriveTime , txtPriveTime)) , $setWidget_1(f_Grid19, 4, 2, (txtPriveNote = new TextBox_0 , txtPriveNote.element.style['width'] = '300px' , $addDomHandler(txtPriveNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9, TYPE) , this$static.owner.txtPriveNote = txtPriveNote , txtPriveNote)) , $setWidget_1(f_Grid19, 5, 0, (f_Label27 = new Label_0 , $setTextOrHtml(f_Label27.directionalTextHelper, 'Supervision', false) , $updateHorizontalAlignment(f_Label27) , f_Label27)) , $setWidget_1(f_Grid19, 5, 1, (txtSupervisionTime = new TextBox_0 , txtSupervisionTime.element.style['width'] = '100px' , $addDomHandler(txtSupervisionTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8, TYPE) , this$static.owner.txtSupervisionTime = txtSupervisionTime , txtSupervisionTime)) , $setWidget_1(f_Grid19, 5, 2, (txtSupervisionNote = new TextBox_0 , txtSupervisionNote.element.style['width'] = '300px' , $addDomHandler(txtSupervisionNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames17, TYPE) , this$static.owner.txtSupervisionNote = txtSupervisionNote , txtSupervisionNote)) , $setWidget_1(f_Grid19, 6, 0, (f_Label28 = new Label_0 , $setTextOrHtml(f_Label28.directionalTextHelper, 'Frais (CHF)', false) , $updateHorizontalAlignment(f_Label28) , f_Label28)) , $setWidget_1(f_Grid19, 6, 1, (txtFraisAmount = new TextBox_0 , txtFraisAmount.element.style['width'] = '100px' , $addDomHandler(txtFraisAmount, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13, TYPE) , this$static.owner.txtFraisAmount = txtFraisAmount , txtFraisAmount)) , $setWidget_1(f_Grid19, 6, 2, (txtFraisNote = new TextBox_0 , txtFraisNote.element.style['width'] = '300px' , $addDomHandler(txtFraisNote, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12, TYPE) , this$static.owner.txtFraisNote = txtFraisNote , txtFraisNote)) , $setWidget_1(f_Grid19, 7, 0, (f_Label29 = new Label_0 , f_Label29.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label29.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label29) , f_Label29)) , $setWidget_1(f_Grid19, 7, 1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , f_Grid19)) , f_Grid13.element['className'] = 'sideBar' , f_Grid13.tableElem['border'] = '0' , f_Grid13.element.style['width'] = '420px' , f_Grid13.tableElem['cellSpacing'] = 2 , f_Grid13.tableElem['cellPadding'] = 5 , f_Grid13)) , $add_9(f_VerticalPanel10, (f_Label30 = new Label_0 , f_Label30.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label30.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label30) , f_Label30)) , $add_9(f_VerticalPanel10, (f_HorizontalPanel31 = new HorizontalPanel_0 , $add_7(f_HorizontalPanel31, (f_Label32 = new Label_0 , $setTextOrHtml(f_Label32.directionalTextHelper, 'R\xE9capitulatif des heures :', false) , $updateHorizontalAlignment(f_Label32) , f_Label32)) , $add_7(f_HorizontalPanel31, (f_Hyperlink33 = new Hyperlink_0 , $setTargetHistoryToken(f_Hyperlink33, 'rptbydept') , $setTextOrHtml(f_Hyperlink33.directionalTextHelper, 'Par d\xE9partement', false) , f_Hyperlink33)) , $add_7(f_HorizontalPanel31, (f_Label34 = new Label_0 , $setTextOrHtml(f_Label34.directionalTextHelper, '-', false) , $updateHorizontalAlignment(f_Label34) , f_Label34)) , $add_7(f_HorizontalPanel31, (f_Hyperlink35 = new Hyperlink_0 , $setTargetHistoryToken(f_Hyperlink35, '#extractdata') , $setTextOrHtml(f_Hyperlink35.directionalTextHelper, 'Par chaque professeur', false) , f_Hyperlink35)) , f_HorizontalPanel31.element.style['width'] = '' , f_HorizontalPanel31.table['cellSpacing'] = 5 , f_HorizontalPanel31)) , f_VerticalPanel10.element.style['width'] = '600px' , f_VerticalPanel10)) , f_HorizontalPanel4.element.style['height'] = '100%' , f_HorizontalPanel4.table['border'] = '0' , f_HorizontalPanel4.element.style['width'] = '100%' , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['height'] = '' , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
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
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1068, 1, {}, TimeInputView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function TimeInputView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1069, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_9(event_0){
  $onLstAddEcoleChanged_0(this.this$1.owner);
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$10_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1070, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$10_0);
_.onChange = function onChange_10(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$11_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1071, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$11_0);
_.onChange = function onChange_11(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$12_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1072, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$12_0);
_.onChange = function onChange_12(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$13_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1073, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$13_0);
_.onChange = function onChange_13(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$14_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1074, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$14_0);
_.onChange = function onChange_14(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$15_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1075, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$15_0);
_.onChange = function onChange_15(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$16_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1076, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$16_0);
_.onChange = function onChange_16(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$17_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1077, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$17_0);
_.onChange = function onChange_17(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1078, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_18(event_0){
  $reloadProfList(this.this$1.owner);
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1079, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_19(event_0){
  $reloadProfList(this.this$1.owner);
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1080, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$4_0);
_.onChange = function onChange_20(event_0){
  $reloadProfList(this.this$1.owner);
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1081, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$5_0);
_.onClick = function onClick_30(event_0){
  $onCmdSaveClick_1(this.this$1.owner);
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1082, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$6_0);
_.onChange = function onChange_21(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$7_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1083, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$7_0);
_.onChange = function onChange_22(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$8_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1084, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$8_0);
_.onChange = function onChange_23(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
}
;
_.this$1 = null;
function TimeInputView_BinderImpl$Widgets$9_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1085, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), TimeInputView_BinderImpl$Widgets$9_0);
_.onChange = function onChange_24(event_0){
  $setOnLeaveConfirmation(dynamicCast(dynamicCast(this.this$1.owner.uiHandlers, Q$TimeInputUiHandler), Q$TimeInputPresenter).placeManager, 'Donn\xE9es non sauvegard\xE9es! CLIQUEZ ANULLER (ou CANCEL) pour rester sur cette page.');
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

function $get_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$) {
    result = new TimeInputView_0(new TimeInputView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$;
}

defineSeed(1121, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfessorProxy]));
_.setLogModifyDate = function setLogModifyDate(date){
  dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).setLogModifyDate(date);
}
;
defineSeed(1122, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfessorProxy]));
_.setLogModifyDate = function setLogModifyDate_0(date){
  $setProperty(this.this$0, 'logModifyDate', date);
}
;
function $batchUpdate(this$static, profId, courseId, year, month, coursTime, coursNote, maladieTime, maladieNote, ferieTime, ferieNote, priveTime, priveNote, supervisionTime, supervisionNote, fraisAmount, fraisNote){
  var x;
  x = new LogRequestFactory_LogRequestContextImpl$1X_0(this$static, profId, courseId, year, month, coursTime, coursNote, maladieTime, maladieNote, ferieTime, ferieNote, priveTime, priveNote, supervisionTime, supervisionNote, fraisAmount, fraisNote);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function $listAll_2(this$static, profId, courseId, year, month){
  var x;
  x = new LogRequestFactory_LogRequestContextImpl$5X_0(this$static, profId, courseId, year, month);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

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

defineSeed(1152, 623, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$1X_0);
_.makeRequestData = function makeRequestData_9(){
  return new RequestData_0('xnPISWZ4lBR9rHCoRwANJ28cPz4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$courseId, this.val$year, this.val$month, this.val$coursTime, this.val$coursNote, this.val$maladieTime, this.val$maladieNote, this.val$ferieTime, this.val$ferieNote, this.val$priveTime, this.val$priveNote, this.val$supervisionTime, this.val$supervisionNote, this.val$fraisAmount, this.val$fraisNote]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.val$coursNote = null;
_.val$coursTime = null;
_.val$courseId = null;
_.val$ferieNote = null;
_.val$ferieTime = null;
_.val$fraisAmount = null;
_.val$fraisNote = null;
_.val$maladieNote = null;
_.val$maladieTime = null;
_.val$month = null;
_.val$priveNote = null;
_.val$priveTime = null;
_.val$profId = null;
_.val$supervisionNote = null;
_.val$supervisionTime = null;
_.val$year = null;
function LogRequestFactory_LogRequestContextImpl$5X_0(this$0, val$profId, val$courseId, val$year, val$month){
  this.val$profId = val$profId;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1153, 623, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_10(){
  return new RequestData_0('jYwYNZ2GdAHpRkHITOENfbCme_E=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$courseId, this.val$year, this.val$month]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.val$courseId = null;
_.val$month = null;
_.val$profId = null;
_.val$year = null;
function ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0(this$0, val$courseId, val$year, val$month){
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1167, 623, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_18(){
  return new RequestData_0('V$DB2$k$L6KOdOLJxLo83lbU2I8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$courseId, this.val$year, this.val$month]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
_.val$courseId = null;
_.val$month = null;
_.val$year = null;
defineSeed(1191, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.add_0 = function add_9(index, element){
  dynamicCast($getWrapped(this.this$0), Q$List).add_0(index, element);
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(index), element]);
}
;
_.indexOf_0 = function indexOf_1(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).indexOf_0(o);
  valueOf_1(toReturn);
  return toReturn;
}
;
_.remove_1 = function remove_31(index){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).remove_1(index);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(index)]);
  return toReturn;
}
;
function $matches(this$static, regex){
  return (new RegExp('^(' + regex + ')$')).test(this$static);
}

defineSeed(1252, 601, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List]));
_.indexOf_0 = function indexOf_2(o){
  return $indexOf_2(this, o, 0);
}
;
defineSeed(1261, 1259, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.add_0 = function add_19(index, element){
  throw new UnsupportedOperationException_0;
}
;
_.indexOf_0 = function indexOf_3(o){
  return this.list.indexOf_0(o);
}
;
_.remove_1 = function remove_46(index){
  throw new UnsupportedOperationException_0;
}
;
defineSeed(1279, 601, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List]));
_.indexOf_0 = function indexOf_4(elem){
  return $indexOf_2(this.arrayList, elem, 0);
}
;
var Lcom_lemania_timetracking_client_presenter_TimeInputPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter', 855), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$1', 856), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$2', 857), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$3', 858), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$6', 859), Lcom_lemania_timetracking_client_event_UpdateTimeLogEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'UpdateTimeLogEvent', 740), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$1', 861), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$1$1', 862), Lcom_lemania_timetracking_client_view_TimeInputView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView', 1062), Lcom_lemania_timetracking_client_view_TimeInputView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$1', 1063), Lcom_lemania_timetracking_client_view_TimeInputView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$2', 1064), Lcom_lemania_timetracking_client_view_TimeInputView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$3', 1065), Lcom_lemania_timetracking_client_view_TimeInputView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$4', 1066), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl', 1067), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets', 1068), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$1', 1069), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$2', 1078), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$3', 1079), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$4', 1080), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$5', 1081), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$6', 1082), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$7', 1083), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$8', 1084), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$9', 1085), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$10_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$10', 1070), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$11_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$11', 1071), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$12_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$12', 1072), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$13_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$13', 1073), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$14_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$14', 1074), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$15_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$15', 1075), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$16_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$16', 1076), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$Widgets$17_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$Widgets$17', 1077), Lcom_google_gwt_view_client_AbstractDataProvider_2_classLit = createForClass('com.google.gwt.view.client.', 'AbstractDataProvider', 536), Lcom_google_gwt_view_client_ListDataProvider_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider', 541), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper', 542), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper$WrappedListIterator_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper$WrappedListIterator', 544), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper$1_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper$1', 543), Lcom_google_gwt_view_client_AbstractDataProvider$1_2_classLit = createForClass('com.google.gwt.view.client.', 'AbstractDataProvider$1', 537), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$4X', 1167), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$1X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$1X', 1152), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$5X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$5X', 1153);
$entry(onLoad)(15);
