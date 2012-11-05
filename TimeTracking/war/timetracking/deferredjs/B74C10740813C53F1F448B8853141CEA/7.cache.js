function AbstractEditableCell_1(consumedEvents){
  !!consumedEvents && (this.consumedEvents = ($clinit_Collections() , new Collections$UnmodifiableSet_0(consumedEvents)));
  $$init(this);
}

function $onBrowserEvent_0(this$static, context, parent_0, value, event_0, valueUpdater){
  var eventType, target;
  $onBrowserEvent(this$static, context, parent_0, value, event_0, valueUpdater);
  target = event_0.target;
  if (!$isOrHasChild($getFirstChildElement(parent_0), target)) {
    return;
  }
  eventType = event_0.type;
  $equals_5('focus', eventType)?(this$static.focusedKey = context.key):$equals_5('blur', eventType) && (this$static.focusedKey = null);
}

function AbstractInputCell_0(consumedEvents){
  AbstractEditableCell_1.call(this, getConsumedEventsImpl(consumedEvents));
}

function getConsumedEventsImpl(consumedEvents){
  var event_0, event$index, event$max, userEvents, events;
  userEvents = new HashSet_0;
  if (consumedEvents != null) {
    for (event$index = 0 , event$max = consumedEvents.length; event$index < event$max; ++event$index) {
      event_0 = consumedEvents[event$index];
      $add_15(userEvents, event_0);
    }
  }
  return events = new HashSet_0 , $add_15(events, 'focus') , $add_15(events, 'blur') , $add_15(events, 'keydown') , !!userEvents && userEvents.map.size_1() > 0 && $addAll(events, userEvents) , events;
}

function AbstractInputCell(){
}

_ = AbstractInputCell.prototype = new AbstractEditableCell;
_.getClass$ = function getClass_14(){
  return Lcom_google_gwt_cell_client_AbstractInputCell_2_classLit;
}
;
_.isEditing = function isEditing_0(context, parent_0, value){
  return this.focusedKey != null && equals__devirtual$(this.focusedKey, context.key);
}
;
_.onBrowserEvent = function onBrowserEvent_0(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent_0(this, context, parent_0, value, event_0, valueUpdater);
}
;
_.onEnterKeyDown = function onEnterKeyDown_0(context, parent_0, value, event_0, valueUpdater){
  var input, key_0, target;
  input = $getFirstChildElement(parent_0);
  target = event_0.target;
  key_0 = context.key;
  if ($isOrHasChild($getFirstChildElement(parent_0), target)) {
    $finishEditing(this, parent_0, dynamicCast(value, Q$String), key_0, valueUpdater);
  }
   else {
    this.focusedKey = key_0;
    input.focus();
  }
}
;
_.resetFocus = function resetFocus_0(context, parent_0, value){
  if (this.focusedKey != null && equals__devirtual$(this.focusedKey, context.key)) {
    $getFirstChildElement(parent_0).focus();
    return true;
  }
  return false;
}
;
_.focusedKey = null;
function $finishEditing(this$static, parent_0, value, key_0, valueUpdater){
  var newValue, vd;
  newValue = $getFirstChildElement(parent_0).value;
  vd = dynamicCast(key_0 == null?null:this$static.viewDataMap.get_1(key_0), Q$TextInputCell$ViewData);
  if (!vd) {
    vd = new TextInputCell$ViewData_0(value);
    $setViewData(this$static, key_0, vd);
  }
  vd.curValue = newValue;
  if (!!valueUpdater && !$equals_5(vd.curValue, vd.lastValue)) {
    vd.lastValue = newValue;
    valueUpdater.this$0.fieldUpdater.update(valueUpdater.val$index, valueUpdater.val$object, newValue);
  }
  this$static.focusedKey = null;
  $getFirstChildElement(parent_0).blur();
}

function $onBrowserEvent_2(this$static, context, parent_0, value, event_0, valueUpdater){
  var eventType, input, key_0, target, vd;
  $onBrowserEvent_0(this$static, context, parent_0, value, event_0, valueUpdater);
  input = $getFirstChildElement(parent_0);
  target = event_0.target;
  if (!$isOrHasChild(input, target)) {
    return;
  }
  eventType = event_0.type;
  key_0 = context.key;
  if ($equals_5('change', eventType)) {
    $finishEditing(this$static, parent_0, value, key_0, valueUpdater);
  }
   else if ($equals_5('keyup', eventType)) {
    vd = dynamicCast(key_0 == null?null:this$static.viewDataMap.get_1(key_0), Q$TextInputCell$ViewData);
    if (!vd) {
      vd = new TextInputCell$ViewData_0(value);
      $setViewData(this$static, key_0, vd);
    }
    $setCurrentValue(vd, input.value);
  }
}

function $render_2(this$static, context, value, sb){
  var key_0, s, viewData, sb_0;
  key_0 = context.key;
  viewData = dynamicCast(key_0 == null?null:this$static.viewDataMap.get_1(key_0), Q$TextInputCell$ViewData);
  if (!!viewData && $equals_5(viewData.curValue, value)) {
    key_0 != null && this$static.viewDataMap.remove_3(key_0);
    viewData = null;
  }
  s = viewData?viewData.curValue:value;
  s != null?$append_4(sb, (sb_0 = new StringBuilder_0 , sb_0.impl.string += '<input type="text" value="' , $append_9(sb_0, htmlEscape(s)) , sb_0.impl.string += '" tabindex="-1"><\/input>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string))):($append_9(sb.sb, '<input type="text" tabindex="-1"><\/input>') , sb);
}

function TextInputCell_0(){
  AbstractInputCell_0.call(this, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['change', 'keyup']));
  !template && (template = new TextInputCell_TemplateImpl_0);
}

function TextInputCell(){
}

_ = TextInputCell_0.prototype = TextInputCell.prototype = new AbstractInputCell;
_.getClass$ = function getClass_19(){
  return Lcom_google_gwt_cell_client_TextInputCell_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_2(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent_2(this, context, parent_0, dynamicCast(value, Q$String), event_0, valueUpdater);
}
;
_.render = function render_1(context, value, sb){
  $render_2(this, context, dynamicCast(value, Q$String), sb);
}
;
var template = null;
function $equalsOrNull(a, b){
  return a != null?$equals_5(a, b):b == null;
}

function $setCurrentValue(this$static, curValue){
  this$static.curValue = curValue;
}

function TextInputCell$ViewData_0(value){
  this.lastValue = value;
  this.curValue = value;
}

function TextInputCell$ViewData(){
}

_ = TextInputCell$ViewData_0.prototype = TextInputCell$ViewData.prototype = new Object_0;
_.equals$ = function equals_0(other){
  var vd;
  if (!instanceOf(other, Q$TextInputCell$ViewData)) {
    return false;
  }
  vd = dynamicCast(other, Q$TextInputCell$ViewData);
  return $equalsOrNull(this.lastValue, vd.lastValue) && $equalsOrNull(this.curValue, vd.curValue);
}
;
_.getClass$ = function getClass_20(){
  return Lcom_google_gwt_cell_client_TextInputCell$ViewData_2_classLit;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode_1(this.lastValue + '_*!@HASH_SEPARATOR@!*_' + this.curValue);
}
;
_.castableTypeMap$ = makeCastMap([Q$TextInputCell$ViewData]);
_.curValue = null;
_.lastValue = null;
function TextInputCell_TemplateImpl_0(){
}

function TextInputCell_TemplateImpl(){
}

_ = TextInputCell_TemplateImpl_0.prototype = TextInputCell_TemplateImpl.prototype = new Object_0;
_.getClass$ = function getClass_21(){
  return Lcom_google_gwt_cell_client_TextInputCell_1TemplateImpl_2_classLit;
}
;
function $setSelectedIndex(this$static, index){
  this$static.selectedIndex = index;
}

function $getItemText(this$static, index){
  $checkIndex(this$static, index);
  return $getOptionText(this$static.element.options[index]);
}

function $getOptionText(option){
  var text;
  text = option.text;
  option.hasAttribute('bidiwrapped') && text.length > 1 && (text = $substring_0(text, 1, text.length - 1));
  return text;
}

function $setSelectedIndex_0(this$static, index){
  $setSelectedIndex(this$static.element, index);
}

_ = ListDataProvider$ListWrapper.prototype;
_.addAll = function addAll(c){
  var toRet;
  this.minModified = min(this.minModified, this.list.size_1());
  toRet = this.list.addAll(c);
  this.maxModified = this.list.size_1();
  this.modified = true;
  $flush_0(this);
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

function UpdateTimeLogEvent(){
}

_ = UpdateTimeLogEvent_0.prototype = UpdateTimeLogEvent.prototype = new GwtEvent;
_.dispatch_0 = function dispatch_35(handler){
  dynamicCast(handler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler).onUpdateTimeLog(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_36(){
  return TYPE_35;
}
;
_.getClass$ = function getClass_486(){
  return Lcom_lemania_timetracking_client_event_UpdateTimeLogEvent_2_classLit;
}
;
_.courseId = null;
_.month = null;
_.prof = null;
_.year = null;
function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$TimeInputPresenter_TimeInputPresenter_methodInjection(_0, _1){
  return new TimeInputPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$TimeInputPresenter_TimeInputPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$ = new TimeInputView_0(new TimeInputView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$ = new TimeInputPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$16$1.prototype;
_.onSuccess = function onSuccess_7(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $loadProfessorsByCourse(this$static, courseId){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new DefaultRequestTransport_0);
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
      if ($equals_5('' + toString_6(dynamicCast(this$static.logTypes.get_0(i), Q$LogTypeProxy).getId_0().value_0), dynamicCast(logList.get_0(j), Q$LogProxy).getTypeId())) {
        found = true;
        break;
      }
    }
    if (found) {
      continue;
    }
     else {
      $add_13(typeIdList, '' + toString_6(dynamicCast(this$static.logTypes.get_0(i), Q$LogTypeProxy).getId_0().value_0));
    }
  }
  if (typeIdList.size_0 > 0) {
    rfl = new LogRequestFactoryImpl_0;
    $initialize(rfl, this$static.eventBus, new DefaultRequestTransport_0);
    rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
    $fire($batchUpdate(rcl, '' + toString_6(prof.getId_0().value_0), courseId, year, month, typeIdList), new TimeInputPresenter$5_0(this$static, logList));
  }
   else {
    $setLogData_0(dynamicCast(this$static.view, Q$TimeInputPresenter$MyView), logList);
  }
}

function $professorSelected_0(this$static, prof, courseId, year, month){
  $clearLogTable_1(dynamicCast(this$static.view, Q$TimeInputPresenter$MyView));
  $doFire(this$static.eventBus, new UpdateTimeLogEvent_0(prof, courseId, year, month), null);
}

function $updateLogMemo(this$static, log, value){
  var logUpdate, rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this$static.eventBus, new DefaultRequestTransport_0);
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  logUpdate = dynamicCast($editProxy(rcl, log), Q$LogProxy);
  logUpdate.setMemo(value);
  $fire($save_1(rcl, logUpdate), new TimeInputPresenter$7_0(this$static));
}

function $updateLogTime(this$static, log, value){
  var logUpdate, rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this$static.eventBus, new DefaultRequestTransport_0);
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  logUpdate = dynamicCast($editProxy(rcl, log), Q$LogProxy);
  logUpdate.setHour(__parseAndValidateInt(value));
  $fire($save_1(rcl, logUpdate), new TimeInputPresenter$6_0(this$static));
}

function $updateLogTypeList(this$static, prof, courseId, year, month){
  var rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this$static.eventBus, new DefaultRequestTransport_0);
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire($listAll_2(rcl, '' + toString_6(prof.getId_0().value_0), courseId, year, month), new TimeInputPresenter$4_0(this$static, prof, courseId, year, month));
}

function TimeInputPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function TimeInputPresenter(){
}

_ = TimeInputPresenter_0.prototype = TimeInputPresenter.prototype = new Presenter;
_.getClass$ = function getClass_600(){
  return Lcom_lemania_timetracking_client_presenter_TimeInputPresenter_2_classLit;
}
;
_.onBind = function onBind_15(){
  dynamicCast(this.view, Q$TimeInputPresenter$MyView).setUiHandlers(this);
  $initializeProfTable(dynamicCast(this.view, Q$TimeInputPresenter$MyView));
  $initializeLogTable(dynamicCast(this.view, Q$TimeInputPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_7(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_9(){
  var rc, rf, rcl, rfl, x;
  $initializeValues(dynamicCast(this.view, Q$TimeInputPresenter$MyView), this.currentUser.currentMonth, this.currentUser.currentYear);
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new DefaultRequestTransport_0);
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($getDepartments(rc, this.currentUser.userId), new TimeInputPresenter$1_0(this));
  rfl = new LogTypeRequestFactoryImpl_0;
  $initialize(rfl, this.eventBus, new DefaultRequestTransport_0);
  rcl = new LogTypeRequestFactory_LogTypeRequestContextImpl_0(rfl);
  $fire((x = new LogTypeRequestFactory_LogTypeRequestContextImpl$2X_0(rcl) , $addInvocation(rcl.state.dialect, x) , x), new TimeInputPresenter$3_0(this));
}
;
_.onUpdateTimeLog = function onUpdateTimeLog(event_0){
  $onUpdateTimeLog(this, event_0);
}
;
_.revealInParent = function revealInParent_13(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler, Q$TimeInputPresenter, Q$TimeInputUiHandler]);
_.currentUser = null;
_.logTypes = null;
function $onSuccess_26(this$static, response){
  $setCourseList(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response);
}

function TimeInputPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function TimeInputPresenter$1(){
}

_ = TimeInputPresenter$1_0.prototype = TimeInputPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_601(){
  return Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_41(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_41(response){
  $onSuccess_26(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_27(this$static, response){
  $setProfData(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), response);
}

function TimeInputPresenter$2_0(this$0){
  this.this$0 = this$0;
}

function TimeInputPresenter$2(){
}

_ = TimeInputPresenter$2_0.prototype = TimeInputPresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_602(){
  return Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_42(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_42(response){
  $onSuccess_27(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_28(this$static, response){
  this$static.this$0.logTypes = response;
}

function TimeInputPresenter$3_0(this$0){
  this.this$0 = this$0;
}

function TimeInputPresenter$3(){
}

_ = TimeInputPresenter$3_0.prototype = TimeInputPresenter$3.prototype = new Receiver;
_.getClass$ = function getClass_603(){
  return Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$3_2_classLit;
}
;
_.onFailure_0 = function onFailure_43(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_43(response){
  $onSuccess_28(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_29(this$static, response){
  $populateLogTypeList(this$static.this$0, response, this$static.val$prof, this$static.val$courseId, this$static.val$year, this$static.val$month);
}

function TimeInputPresenter$4_0(this$0, val$prof, val$courseId, val$year, val$month){
  this.this$0 = this$0;
  this.val$prof = val$prof;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
}

function TimeInputPresenter$4(){
}

_ = TimeInputPresenter$4_0.prototype = TimeInputPresenter$4.prototype = new Receiver;
_.getClass$ = function getClass_604(){
  return Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$4_2_classLit;
}
;
_.onFailure_0 = function onFailure_44(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_44(response){
  $onSuccess_29(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
_.val$courseId = null;
_.val$month = null;
_.val$prof = null;
_.val$year = null;
function $onSuccess_30(this$static, response){
  this$static.val$logList.addAll(response);
  $setLogData_0(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), this$static.val$logList);
}

function TimeInputPresenter$5_0(this$0, val$logList){
  this.this$0 = this$0;
  this.val$logList = val$logList;
}

function TimeInputPresenter$5(){
}

_ = TimeInputPresenter$5_0.prototype = TimeInputPresenter$5.prototype = new Receiver;
_.getClass$ = function getClass_605(){
  return Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$5_2_classLit;
}
;
_.onFailure_0 = function onFailure_45(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_45(response){
  $onSuccess_30(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
_.val$logList = null;
function $onSuccess_31(this$static){
  $showTimer(dynamicCast(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), Q$TimeInputView));
}

function TimeInputPresenter$6_0(this$0){
  this.this$0 = this$0;
}

function TimeInputPresenter$6(){
}

_ = TimeInputPresenter$6_0.prototype = TimeInputPresenter$6.prototype = new Receiver;
_.getClass$ = function getClass_606(){
  return Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$6_2_classLit;
}
;
_.onFailure_0 = function onFailure_46(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_46(response){
  $onSuccess_31(this, throwClassCastExceptionUnlessNull(response));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_32(this$static){
  $showTimer(dynamicCast(dynamicCast(this$static.this$0.view, Q$TimeInputPresenter$MyView), Q$TimeInputView));
}

function TimeInputPresenter$7_0(this$0){
  this.this$0 = this$0;
}

function TimeInputPresenter$7(){
}

_ = TimeInputPresenter$7_0.prototype = TimeInputPresenter$7.prototype = new Receiver;
_.getClass$ = function getClass_607(){
  return Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$7_2_classLit;
}
;
_.onFailure_0 = function onFailure_47(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_47(response){
  $onSuccess_32(this, throwClassCastExceptionUnlessNull(response));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
_ = TimeInputPresenterMyProxyImpl.prototype;
_.onUpdateTimeLog = function onUpdateTimeLog_0(event_0){
  $getPresenter_0(this, new TimeInputPresenterMyProxyImpl$1_0(this.eventBus, event_0));
}
;
function $success_6(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new TimeInputPresenterMyProxyImpl$1$1_0(presenter, this$static.val$event));
}

function TimeInputPresenterMyProxyImpl$1_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

function TimeInputPresenterMyProxyImpl$1(){
}

_ = TimeInputPresenterMyProxyImpl$1_0.prototype = TimeInputPresenterMyProxyImpl$1.prototype = new NotifyingAsyncCallback;
_.getClass$ = function getClass_609(){
  return Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$1_2_classLit;
}
;
_.success = function success_8(presenter){
  $success_6(this, dynamicCast(presenter, Q$TimeInputPresenter));
}
;
_.val$event = null;
function TimeInputPresenterMyProxyImpl$1$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

function TimeInputPresenterMyProxyImpl$1$1(){
}

_ = TimeInputPresenterMyProxyImpl$1$1_0.prototype = TimeInputPresenterMyProxyImpl$1$1.prototype = new Object_0;
_.execute_1 = function execute_34(){
  $onUpdateTimeLog(this.val$presenter, this.val$event);
}
;
_.getClass$ = function getClass_610(){
  return Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$1$1_2_classLit;
}
;
_.val$event = null;
_.val$presenter = null;
function $clearLogTable_1(this$static){
  var temp;
  temp = new ArrayList_0;
  $setRowData(this$static.tblLog, temp);
  $setRowCount(this$static.tblLog, temp.size_0);
}

function $clearProfTable(this$static){
  var temp;
  temp = new ArrayList_0;
  this$static.professorProvider = new ListDataProvider_0;
  $setList(this$static.professorProvider, temp);
  $addDataDisplay(this$static.professorProvider, this$static.tblProfessors);
}

function $initializeLogTable(this$static){
  var colType, hourCell, hourColl, memoCell, memoCol;
  colType = new TimeInputView$4_0;
  hourCell = new TextInputCell_0;
  hourColl = new TimeInputView$5_0(hourCell);
  $setFieldUpdater(hourColl, new TimeInputView$6_0(this$static));
  memoCell = new TextInputCell_0;
  memoCol = new TimeInputView$7_0(memoCell);
  $setFieldUpdater(memoCol, new TimeInputView$8_0(this$static));
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

function $initializeValues(this$static, currentMonth, currentYear){
  var i;
  $selectClear(this$static.lstSchools.element);
  $selectClear(this$static.lstCourses.element);
  $clearProfTable(this$static);
  $clearLogTable_1(this$static);
  $selectClear(this$static.lstMonth.element);
  for (i = 0; i + currentMonth <= currentMonth; ++i) {
    $insertItem(this$static.lstMonth, '' + (i + currentMonth), '' + (i + currentMonth), -1);
    i + currentMonth == currentMonth && $setSelectedIndex_0(this$static.lstMonth, i);
  }
  $selectClear(this$static.lstYear.element);
  for (i = 0; i < 1; ++i) {
    $insertItem(this$static.lstYear, '' + (i + currentYear), '' + (i + currentYear), -1);
    i + currentYear == currentYear && $setSelectedIndex_0(this$static.lstYear, i);
  }
}

function $onLstAddEcoleChanged_0(this$static){
  $clearProfTable(this$static);
  $equals_5($getItemText(this$static.lstSchools, this$static.lstSchools.element.selectedIndex), '-') || !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler) , $getValue_0(this$static.lstSchools, this$static.lstSchools.element.selectedIndex) , undefined);
}

function $onLstCoursesChanged(this$static){
  $clearProfTable(this$static);
  $equals_5($getItemText(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), '-') || !!this$static.uiHandlers && $loadProfessorsByCourse(dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler), $getValue_0(this$static.lstCourses, this$static.lstCourses.element.selectedIndex));
}

function $onLstMonthChanged(this$static){
  $clearLogTable_1(this$static);
  $professorSelected_0(dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler), this$static.selectedProfessor, $getValue_0(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), $getItemText(this$static.lstYear, this$static.lstYear.element.selectedIndex), $getItemText(this$static.lstMonth, this$static.lstMonth.element.selectedIndex));
}

function $onLstYearChanged(this$static){
  $clearLogTable_1(this$static);
  $professorSelected_0(dynamicCast(this$static.uiHandlers, Q$TimeInputUiHandler), this$static.selectedProfessor, $getValue_0(this$static.lstCourses, this$static.lstCourses.element.selectedIndex), $getItemText(this$static.lstYear, this$static.lstYear.element.selectedIndex), $getItemText(this$static.lstMonth, this$static.lstMonth.element.selectedIndex));
}

function $setCourseList(this$static, cours){
  var i;
  $selectClear(this$static.lstCourses.element);
  $insertItem(this$static.lstCourses, '-', '', -1);
  for (i = 0; i < cours.size_1(); ++i)
    $insertItem(this$static.lstCourses, dynamicCast(cours.get_0(i), Q$CoursProxy).getSchoolName() + ' - ' + dynamicCast(cours.get_0(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(cours.get_0(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $setLogData_0(this$static, logs){
  $setRowCount_0(this$static.tblLog, logs.size_1(), true);
  $setRowData(this$static.tblLog, logs);
  $setRowCount(this$static.tblLog, logs.size_1());
}

function $setProfData(this$static, profs){
  this$static.professorProvider = new ListDataProvider_0;
  $setList(this$static.professorProvider, profs);
  $addDataDisplay(this$static.professorProvider, this$static.tblProfessors);
}

function $showTimer(this$static){
  var t;
  $setText(this$static.txtNotification, 'Modification enregistr\xE9e.');
  $setVisible_0(this$static.txtNotification, true);
  t = new TimeInputView$9_0(this$static);
  $schedule(t, 1000);
}

function TimeInputView_0(){
  this.tblProfessors = new DataGrid_0;
  this.tblLog = new DataGrid_0;
  this.widget = $createAndBindUi_6(this);
}

function TimeInputView(){
}

_ = TimeInputView_0.prototype = TimeInputView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_15(){
  return this.widget;
}
;
_.getClass$ = function getClass_732(){
  return Lcom_lemania_timetracking_client_view_TimeInputView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$TimeInputPresenter$MyView, Q$TimeInputView]);
_.lblProfName = null;
_.lstCourses = null;
_.lstMonth = null;
_.lstSchools = null;
_.lstYear = null;
_.pager = null;
_.professorProvider = null;
_.selectedProfessor = null;
_.txtNotification = null;
_.widget = null;
function TimeInputView$1_0(){
  TextColumn_0.call(this);
}

function TimeInputView$1(){
}

_ = TimeInputView$1_0.prototype = TimeInputView$1.prototype = new TextColumn;
_.getClass$ = function getClass_733(){
  return Lcom_lemania_timetracking_client_view_TimeInputView$1_2_classLit;
}
;
_.getValue = function getValue_44(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function TimeInputView$2_0(){
  SingleSelectionModel_0.call(this);
}

function TimeInputView$2(){
}

_ = TimeInputView$2_0.prototype = TimeInputView$2.prototype = new SingleSelectionModel;
_.getClass$ = function getClass_734(){
  return Lcom_lemania_timetracking_client_view_TimeInputView$2_2_classLit;
}
;
_.setSelected = function setSelected_0(object, selected){
  $setSelected_0(this, dynamicCast(object, Q$ProfessorProxy), selected);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers]);
function TimeInputView$3_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

function TimeInputView$3(){
}

_ = TimeInputView$3_0.prototype = TimeInputView$3.prototype = new Object_0;
_.getClass$ = function getClass_735(){
  return Lcom_lemania_timetracking_client_view_TimeInputView$3_2_classLit;
}
;
_.onSelectionChange = function onSelectionChange_1(event_0){
  this.this$0.selectedProfessor = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfessorProxy);
  if (this.this$0.selectedProfessor) {
    $setText(this.this$0.lblProfName, this.this$0.selectedProfessor.getProfName());
    $professorSelected_0(dynamicCast(this.this$0.uiHandlers, Q$TimeInputUiHandler), this.this$0.selectedProfessor, $getValue_0(this.this$0.lstCourses, this.this$0.lstCourses.element.selectedIndex), $getItemText(this.this$0.lstYear, this.this$0.lstYear.element.selectedIndex), $getItemText(this.this$0.lstMonth, this.this$0.lstMonth.element.selectedIndex));
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]);
_.this$0 = null;
_.val$selectionModel = null;
function TimeInputView$4_0(){
  TextColumn_0.call(this);
}

function TimeInputView$4(){
}

_ = TimeInputView$4_0.prototype = TimeInputView$4.prototype = new TextColumn;
_.getClass$ = function getClass_736(){
  return Lcom_lemania_timetracking_client_view_TimeInputView$4_2_classLit;
}
;
_.getValue = function getValue_45(object){
  return dynamicCast(object, Q$LogProxy).getTypeName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function TimeInputView$5_0($anonymous0){
  this.cell = $anonymous0;
}

function TimeInputView$5(){
}

_ = TimeInputView$5_0.prototype = TimeInputView$5.prototype = new Column;
_.getClass$ = function getClass_737(){
  return Lcom_lemania_timetracking_client_view_TimeInputView$5_2_classLit;
}
;
_.getValue = function getValue_46(log){
  return '' + dynamicCast(log, Q$LogProxy).getHour();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $update_4(this$static, log, value){
  !!this$static.this$0.uiHandlers && $updateLogTime(dynamicCast(this$static.this$0.uiHandlers, Q$TimeInputUiHandler), log, value);
}

function TimeInputView$6_0(this$0){
  this.this$0 = this$0;
}

function TimeInputView$6(){
}

_ = TimeInputView$6_0.prototype = TimeInputView$6.prototype = new Object_0;
_.getClass$ = function getClass_738(){
  return Lcom_lemania_timetracking_client_view_TimeInputView$6_2_classLit;
}
;
_.update = function update_3(index, log, value){
  $update_4(this, dynamicCast(log, Q$LogProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function TimeInputView$7_0($anonymous0){
  this.cell = $anonymous0;
}

function TimeInputView$7(){
}

_ = TimeInputView$7_0.prototype = TimeInputView$7.prototype = new Column;
_.getClass$ = function getClass_739(){
  return Lcom_lemania_timetracking_client_view_TimeInputView$7_2_classLit;
}
;
_.getValue = function getValue_47(log){
  return dynamicCast(log, Q$LogProxy).getMemo();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $update_5(this$static, log, value){
  !!this$static.this$0.uiHandlers && $updateLogMemo(dynamicCast(this$static.this$0.uiHandlers, Q$TimeInputUiHandler), log, value);
}

function TimeInputView$8_0(this$0){
  this.this$0 = this$0;
}

function TimeInputView$8(){
}

_ = TimeInputView$8_0.prototype = TimeInputView$8.prototype = new Object_0;
_.getClass$ = function getClass_740(){
  return Lcom_lemania_timetracking_client_view_TimeInputView$8_2_classLit;
}
;
_.update = function update_4(index, log, value){
  $update_5(this, dynamicCast(log, Q$LogProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function TimeInputView$9_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function TimeInputView$9(){
}

_ = TimeInputView$9_0.prototype = TimeInputView$9.prototype = new Timer;
_.getClass$ = function getClass_741(){
  return Lcom_lemania_timetracking_client_view_TimeInputView$9_2_classLit;
}
;
_.run = function run_1(){
  $setVisible_0(this.this$0.txtNotification, false);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $createAndBindUi_6(owner){
  var attachRecord0, domId0, domId0Element, f_Grid10, f_Grid6, f_HTMLPanel1, f_HorizontalPanel4, f_Label11, f_Label12, f_Label13, f_Label14, f_Label15, f_Label3, f_Label7, f_Label8, f_VerticalPanel2, f_VerticalPanel5, f_VerticalPanel9, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, lblProfName, lstCourses, lstMonth, lstSchools, lstYear, pager, tblLog, tblProfessors, txtNotification, sb;
  domId0 = $createUniqueId($doc);
  f_Label3 = new Label_0;
  f_Label7 = new Label_0;
  lstSchools = new ListBox_0;
  f_Label8 = new Label_0;
  lstCourses = new ListBox_0;
  f_Grid6 = new Grid_0;
  pager = new SimplePager_0;
  tblProfessors = owner.tblProfessors;
  f_VerticalPanel5 = new VerticalPanel_0;
  f_Label11 = new Label_0;
  lblProfName = new Label_0;
  f_Label12 = new Label_0;
  lstYear = new ListBox_0;
  f_Label13 = new Label_0;
  lstMonth = new ListBox_0;
  f_Label14 = new Label_0;
  txtNotification = new Label_0;
  f_Label15 = new Label_0;
  tblLog = owner.tblLog;
  f_Grid10 = new Grid_0;
  f_VerticalPanel9 = new VerticalPanel_0;
  f_HorizontalPanel4 = new HorizontalPanel_0;
  f_VerticalPanel2 = new VerticalPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  f_Label3.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label3.directionalTextHelper, 'Mettre des heures');
  $updateHorizontalAlignment(f_Label3);
  f_Label3.element.style['width'] = '';
  $add_8(f_VerticalPanel2, f_Label3);
  $setHorizontalAlignment_0(f_HorizontalPanel4, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  $setHorizontalAlignment_1(f_VerticalPanel5, ALIGN_CENTER);
  $setTextOrHtml(f_Label7.directionalTextHelper, 'Ecoles :');
  $updateHorizontalAlignment(f_Label7);
  setVisible(f_Label7.element, false);
  setVisible(lstSchools.element, false);
  $setTextOrHtml(f_Label8.directionalTextHelper, 'D\xE9partements :');
  $updateHorizontalAlignment(f_Label8);
  $resizeColumns(f_Grid6);
  $resizeRows(f_Grid6, 3);
  $setWidget_1(f_Grid6, 0, 0, f_Label7);
  $setWidget_1(f_Grid6, 0, 1, lstSchools);
  $setWidget_1(f_Grid6, 1, 0, f_Label8);
  $setWidget_1(f_Grid6, 1, 1, lstCourses);
  f_Grid6.element.style['width'] = '100%';
  $add_8(f_VerticalPanel5, f_Grid6);
  $setPageSize(pager);
  $add_8(f_VerticalPanel5, pager);
  tblProfessors.element.style['height'] = '550px';
  tblProfessors.element.style['width'] = '400px';
  $setVisibleRange(tblProfessors, new Range_1($getVisibleRange(tblProfessors.presenter).start, 10));
  $add_8(f_VerticalPanel5, tblProfessors);
  f_VerticalPanel5.element.style['width'] = '250px';
  $add_6(f_HorizontalPanel4, f_VerticalPanel5);
  $setTextOrHtml(f_Label11.directionalTextHelper, 'Professeur :');
  $updateHorizontalAlignment(f_Label11);
  lblProfName.element.style['width'] = '';
  $setTextOrHtml(f_Label12.directionalTextHelper, 'Ann\xE9e :');
  $updateHorizontalAlignment(f_Label12);
  $setTextOrHtml(f_Label13.directionalTextHelper, 'Mois :');
  $updateHorizontalAlignment(f_Label13);
  $setTextOrHtml(f_Label14.directionalTextHelper, '.');
  $updateHorizontalAlignment(f_Label14);
  $setTextOrHtml(f_Label15.directionalTextHelper, 'Heures :');
  $updateHorizontalAlignment(f_Label15);
  tblLog.element.style['height'] = '300px';
  tblLog.element.style['width'] = '480px';
  $resizeColumns(f_Grid10);
  $resizeRows(f_Grid10, 5);
  $setWidget_1(f_Grid10, 0, 0, f_Label11);
  $setWidget_1(f_Grid10, 0, 1, lblProfName);
  $setWidget_1(f_Grid10, 1, 0, f_Label12);
  $setWidget_1(f_Grid10, 1, 1, lstYear);
  $setWidget_1(f_Grid10, 2, 0, f_Label13);
  $setWidget_1(f_Grid10, 2, 1, lstMonth);
  $setWidget_1(f_Grid10, 3, 0, f_Label14);
  $setWidget_1(f_Grid10, 3, 1, txtNotification);
  $setWidget_1(f_Grid10, 4, 0, f_Label15);
  $setWidget_1(f_Grid10, 4, 1, tblLog);
  f_Grid10.tableElem['border'] = '0';
  f_Grid10.element.style['width'] = '420px';
  f_Grid10.tableElem['cellSpacing'] = 2;
  f_Grid10.tableElem['cellPadding'] = 5;
  $add_8(f_VerticalPanel9, f_Grid10);
  f_VerticalPanel9.element['className'] = 'sideBar';
  f_VerticalPanel9.element.style['width'] = '550px';
  $add_6(f_HorizontalPanel4, f_VerticalPanel9);
  f_HorizontalPanel4.element.style['height'] = '100%';
  f_HorizontalPanel4.table['border'] = '0';
  f_HorizontalPanel4.element.style['width'] = '100%';
  $add_8(f_VerticalPanel2, f_HorizontalPanel4);
  f_VerticalPanel2.element.style['height'] = '';
  f_VerticalPanel2.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new TimeInputView_BinderImpl$1_0(owner);
  $addDomHandler(lstSchools, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new TimeInputView_BinderImpl$2_0(owner);
  $addDomHandler(lstYear, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new TimeInputView_BinderImpl$3_0(owner);
  $addDomHandler(lstMonth, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new TimeInputView_BinderImpl$4_0(owner);
  $addDomHandler(lstCourses, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, TYPE);
  owner.lblProfName = lblProfName;
  owner.lstCourses = lstCourses;
  owner.lstMonth = lstMonth;
  owner.lstSchools = lstSchools;
  owner.lstYear = lstYear;
  owner.pager = pager;
  owner.txtNotification = txtNotification;
  return f_HTMLPanel1;
}

function TimeInputView_BinderImpl_0(){
}

function TimeInputView_BinderImpl(){
}

_ = TimeInputView_BinderImpl_0.prototype = TimeInputView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_742(){
  return Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl_2_classLit;
}
;
function TimeInputView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function TimeInputView_BinderImpl$1(){
}

_ = TimeInputView_BinderImpl$1_0.prototype = TimeInputView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_743(){
  return Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$1_2_classLit;
}
;
_.onChange = function onChange_4(event_0){
  $onLstAddEcoleChanged_0(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function TimeInputView_BinderImpl$2_0(val$owner){
  this.val$owner = val$owner;
}

function TimeInputView_BinderImpl$2(){
}

_ = TimeInputView_BinderImpl$2_0.prototype = TimeInputView_BinderImpl$2.prototype = new Object_0;
_.getClass$ = function getClass_744(){
  return Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$2_2_classLit;
}
;
_.onChange = function onChange_5(event_0){
  $onLstYearChanged(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function TimeInputView_BinderImpl$3_0(val$owner){
  this.val$owner = val$owner;
}

function TimeInputView_BinderImpl$3(){
}

_ = TimeInputView_BinderImpl$3_0.prototype = TimeInputView_BinderImpl$3.prototype = new Object_0;
_.getClass$ = function getClass_745(){
  return Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$3_2_classLit;
}
;
_.onChange = function onChange_6(event_0){
  $onLstMonthChanged(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function TimeInputView_BinderImpl$4_0(val$owner){
  this.val$owner = val$owner;
}

function TimeInputView_BinderImpl$4(){
}

_ = TimeInputView_BinderImpl$4_0.prototype = TimeInputView_BinderImpl$4.prototype = new Object_0;
_.getClass$ = function getClass_746(){
  return Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$4_2_classLit;
}
;
_.onChange = function onChange_7(event_0){
  $onLstCoursesChanged(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
_ = LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1.prototype;
_.setHour = function setHour(hour){
  dynamicCast($getWrapped(this.this$0), Q$LogProxy).setHour(hour);
  valueOf_1(hour);
}
;
_.setMemo = function setMemo(memo){
  dynamicCast($getWrapped(this.this$0), Q$LogProxy).setMemo(memo);
}
;
_ = LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2.prototype;
_.setHour = function setHour_0(hour){
  $setProperty(this.this$0, 'hour', valueOf_1(hour));
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
  x = new LogRequestFactory_LogRequestContextImpl$3X_0(this$static, profId, courseId, year, month);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function $save_1(this$static, log){
  var x;
  x = new LogRequestFactory_LogRequestContextImpl$8X_0(this$static, log);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function LogRequestFactory_LogRequestContextImpl$1X_0(this$0, val$profId, val$courseId, val$year, val$month, val$typeIdList){
  this.val$profId = val$profId;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  this.val$typeIdList = val$typeIdList;
  AbstractRequest_0.call(this, this$0);
}

function LogRequestFactory_LogRequestContextImpl$1X(){
}

_ = LogRequestFactory_LogRequestContextImpl$1X_0.prototype = LogRequestFactory_LogRequestContextImpl$1X.prototype = new AbstractRequest;
_.getClass$ = function getClass_801(){
  return Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$1X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_8(){
  return new RequestData_0('O7gb32zJhuWVMfKLRpcrbA5ufds=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$courseId, this.val$year, this.val$month, this.val$typeIdList]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$courseId = null;
_.val$month = null;
_.val$profId = null;
_.val$typeIdList = null;
_.val$year = null;
function LogRequestFactory_LogRequestContextImpl$3X_0(this$0, val$profId, val$courseId, val$year, val$month){
  this.val$profId = val$profId;
  this.val$courseId = val$courseId;
  this.val$year = val$year;
  this.val$month = val$month;
  AbstractRequest_0.call(this, this$0);
}

function LogRequestFactory_LogRequestContextImpl$3X(){
}

_ = LogRequestFactory_LogRequestContextImpl$3X_0.prototype = LogRequestFactory_LogRequestContextImpl$3X.prototype = new AbstractRequest;
_.getClass$ = function getClass_802(){
  return Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$3X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_9(){
  return new RequestData_0('jYwYNZ2GdAHpRkHITOENfbCme_E=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$courseId, this.val$year, this.val$month]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$courseId = null;
_.val$month = null;
_.val$profId = null;
_.val$year = null;
function LogRequestFactory_LogRequestContextImpl$8X_0(this$0, val$log){
  this.val$log = val$log;
  AbstractRequest_0.call(this, this$0);
}

function LogRequestFactory_LogRequestContextImpl$8X(){
}

_ = LogRequestFactory_LogRequestContextImpl$8X_0.prototype = LogRequestFactory_LogRequestContextImpl$8X.prototype = new AbstractRequest;
_.getClass$ = function getClass_804(){
  return Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$8X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_11(){
  return new RequestData_0('tDC7lLOJfVdsA4iVyX907h2IS_U=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$log]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$log = null;
function LogTypeRequestFactory_LogTypeRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

function LogTypeRequestFactory_LogTypeRequestContextImpl$2X(){
}

_ = LogTypeRequestFactory_LogTypeRequestContextImpl$2X_0.prototype = LogTypeRequestFactory_LogTypeRequestContextImpl$2X.prototype = new AbstractRequest;
_.getClass$ = function getClass_809(){
  return Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$2X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_13(){
  return new RequestData_0('cIE5M8ZO8E_gfYUVGSqnszIg2m0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_ = ListAutoBean$1.prototype;
_.addAll = function addAll_1(c){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).addAll(c);
  $clinit_Boolean();
  return toReturn;
}
;
_ = Collections$UnmodifiableCollection.prototype;
_.addAll = function addAll_3(c){
  throw new UnsupportedOperationException_0;
}
;
var Lcom_google_gwt_cell_client_AbstractInputCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractInputCell', Lcom_google_gwt_cell_client_AbstractEditableCell_2_classLit), Lcom_google_gwt_cell_client_TextInputCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'TextInputCell', Lcom_google_gwt_cell_client_AbstractInputCell_2_classLit), Lcom_google_gwt_cell_client_TextInputCell$ViewData_2_classLit = createForClass('com.google.gwt.cell.client.', 'TextInputCell$ViewData', Ljava_lang_Object_2_classLit), Lcom_google_gwt_cell_client_TextInputCell_1TemplateImpl_2_classLit = createForClass('com.google.gwt.cell.client.', 'TextInputCell_TemplateImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_event_UpdateTimeLogEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'UpdateTimeLogEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$3', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$4', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$5_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$5', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$6', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_TimeInputPresenter$7_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenter$7', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$1', Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2_classLit), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$1$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$1', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$2', Lcom_google_gwt_view_client_SingleSelectionModel_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$3', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$4', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$5', Lcom_google_gwt_user_cellview_client_Column_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$6', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$7', Lcom_google_gwt_user_cellview_client_Column_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$8', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView$9', Lcom_google_gwt_user_client_Timer_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$3', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_TimeInputView_1BinderImpl$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'TimeInputView_BinderImpl$4', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$1X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$1X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$3X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$8X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$8X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$2X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl$2X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(7);
