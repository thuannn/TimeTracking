function $updateLogTypeName(this$static, hp, typeName){
  var hourForUpdate, rc, rf;
  rf = new LogTypeRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new LogTypeRequestFactory_LogTypeRequestContextImpl_0(rf);
  hourForUpdate = dynamicCast($editProxy(rc, hp), Q$LogTypeProxy);
  hourForUpdate.setLogTypeName(typeName);
  $fire($saveAndReturn_1(rc, hourForUpdate), new LogTypesPresenter$4_0(this$static));
}

function $updateLogTypeOrder(this$static, hp, orderNumber){
  var e, hourForUpdate, rc, rf;
  rf = new LogTypeRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new LogTypeRequestFactory_LogTypeRequestContextImpl_0(rf);
  hourForUpdate = dynamicCast($editProxy(rc, hp), Q$LogTypeProxy);
  try {
    hourForUpdate.setOrderNumber(__parseAndValidateInt(orderNumber));
    $fire($saveAndReturn_1(rc, hourForUpdate), new LogTypesPresenter$3_0(this$static));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$Exception)) {
      e = $e0;
      alert_0(e.getMessage());
    }
     else 
      throw unwrap($e0);
  }
}

function $updateLogTypeStatus(this$static, hp, status_0){
  var hourForUpdate, rc, rf;
  rf = new LogTypeRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new LogTypeRequestFactory_LogTypeRequestContextImpl_0(rf);
  hourForUpdate = dynamicCast($editProxy(rc, hp), Q$LogTypeProxy);
  hourForUpdate.setLogTypeActive(status_0);
  $fire($saveAndReturn_1(rc, hourForUpdate), new LogTypesPresenter$2_0(this$static));
}

function LogTypesPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  dynamicCast(this.view, Q$LogTypesPresenter$MyView).setUiHandlers(this);
}

defineSeed(805, 693, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LogTypeAddedEvent$LogTypeAddedHandler, Q$LogTypesPresenter, Q$LogTypeListUiHandler]), LogTypesPresenter_0);
_.onBind = function onBind_9(){
  $initializeTable_2(dynamicCast(this.view, Q$LogTypesPresenter$MyView));
}
;
_.onHourAdded = function onHourAdded(event_0){
  $clinit_History();
  !!impl_3 && $newItem(impl_3, 'types', true);
}
;
_.onReset = function onReset_2(){
  var rf, rc, x_0;
  rf = new LogTypeRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new LogTypeRequestFactory_LogTypeRequestContextImpl_0(rf);
  $fire((x_0 = new LogTypeRequestFactory_LogTypeRequestContextImpl$2X_0(rc) , $addInvocation(rc.state.dialect, x_0) , x_0), new LogTypesPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_8(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_14(this$static, response){
  $setData_2(dynamicCast(this$static.this$0.view, Q$LogTypesPresenter$MyView), response);
}

function LogTypesPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(806, 629, makeCastMap([Q$Receiver]), LogTypesPresenter$1_0);
_.onFailure_0 = function onFailure_14(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_14(response){
  $onSuccess_14(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_15(this$static, response){
  $refreshTable_1(dynamicCast(this$static.this$0.view, Q$LogTypesPresenter$MyView), response);
}

function LogTypesPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(807, 629, makeCastMap([Q$Receiver]), LogTypesPresenter$2_0);
_.onFailure_0 = function onFailure_15(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_15(response){
  $onSuccess_15(this, dynamicCast(response, Q$LogTypeProxy));
}
;
function $onSuccess_16(this$static, response){
  $refreshTable_1(dynamicCast(this$static.this$0.view, Q$LogTypesPresenter$MyView), response);
}

function LogTypesPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(808, 629, makeCastMap([Q$Receiver]), LogTypesPresenter$3_0);
_.onFailure_0 = function onFailure_16(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_16(response){
  $onSuccess_16(this, dynamicCast(response, Q$LogTypeProxy));
}
;
function $onSuccess_17(this$static, response){
  $refreshTable_1(dynamicCast(this$static.this$0.view, Q$LogTypesPresenter$MyView), response);
}

function LogTypesPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(809, 629, makeCastMap([Q$Receiver]), LogTypesPresenter$4_0);
_.onFailure_0 = function onFailure_17(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_17(response){
  $onSuccess_17(this, dynamicCast(response, Q$LogTypeProxy));
}
;
function $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$) {
    result = new LogTypesPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$LogTypesView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$;
}

defineSeed(918, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_60(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable_2(this$static){
  var cellActive, cellName, colActive, colName, orderCell, orderCol;
  orderCell = new EditTextCell_0;
  orderCol = new LogTypesView$1_0(orderCell);
  $addColumn(this$static.tblHours, orderCol, 'Ordre');
  $setColumnWidth_0(this$static.tblHours, orderCol, 20 + ($clinit_Style$Unit() , '%'));
  $setFieldUpdater(orderCol, new LogTypesView$2_0(this$static));
  cellName = new EditTextCell_0;
  colName = new LogTypesView$3_0(cellName);
  $addColumn(this$static.tblHours, colName, 'Nom');
  $setFieldUpdater(colName, new LogTypesView$4_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new LogTypesView$5_0(cellActive);
  $addColumn(this$static.tblHours, colActive, 'Actif');
  $setFieldUpdater(colActive, new LogTypesView$6_0(this$static));
}

function $refreshTable_1(this$static, updatedHour){
  var types;
  types = new ArrayList_0;
  setCheck(types.array, types.size_0++, updatedHour);
  $setRowData(this$static.tblHours, this$static.selectedHour, types);
  $ensurePendingState(this$static.tblHours.presenter).redrawRequired = true;
}

function $setData_2(this$static, types){
  $setRowData(this$static.tblHours, 0, types);
}

function LogTypesView_0(){
  this.tblHours = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_8(new LogTypesView_BinderImpl$Widgets_0(this));
}

defineSeed(1002, 698, makeCastMap([Q$IsWidget, Q$LogTypesPresenter$MyView]), LogTypesView_0);
_.asWidget = function asWidget_11(){
  return this.widget;
}
;
_.selectedHour = 0;
function LogTypesView$1_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1003, 357, makeCastMap([Q$HasCell, Q$Column]), LogTypesView$1_0);
_.getValue = function getValue_6(object){
  return '' + dynamicCast(object, Q$LogTypeProxy).getOrderNumber();
}
;
function $update_3(this$static, index_0, type_0, value_0){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedHour = index_0;
    $updateLogTypeOrder(dynamicCast(this$static.this$0.uiHandlers, Q$LogTypeListUiHandler), type_0, value_0);
  }
}

function LogTypesView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1004, 1, {}, LogTypesView$2_0);
_.update = function update_4(index_0, type_0, value_0){
  $update_3(this, index_0, dynamicCast(type_0, Q$LogTypeProxy), dynamicCast(value_0, Q$String));
}
;
function LogTypesView$3_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1005, 357, makeCastMap([Q$HasCell, Q$Column]), LogTypesView$3_0);
_.getValue = function getValue_7(object){
  return dynamicCast(object, Q$LogTypeProxy).getLogTypeName();
}
;
function $update_4(this$static, index_0, type_0, value_0){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedHour = index_0;
    $updateLogTypeName(dynamicCast(this$static.this$0.uiHandlers, Q$LogTypeListUiHandler), type_0, value_0);
  }
}

function LogTypesView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1006, 1, {}, LogTypesView$4_0);
_.update = function update_5(index_0, type_0, value_0){
  $update_4(this, index_0, dynamicCast(type_0, Q$LogTypeProxy), dynamicCast(value_0, Q$String));
}
;
function LogTypesView$5_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(1007, 357, makeCastMap([Q$HasCell, Q$Column]), LogTypesView$5_0);
_.getValue = function getValue_8(type_0){
  return dynamicCast(type_0, Q$LogTypeProxy).getLogTypeActive();
}
;
function $update_5(this$static, index_0, type_0, value_0){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedHour = index_0;
    $updateLogTypeStatus(dynamicCast(this$static.this$0.uiHandlers, Q$LogTypeListUiHandler), type_0, value_0);
  }
}

function LogTypesView$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1008, 1, {}, LogTypesView$6_0);
_.update = function update_6(index_0, type_0, value_0){
  $update_5(this, index_0, dynamicCast(type_0, Q$LogTypeProxy), dynamicCast(value_0, Q$Boolean));
}
;
function LogTypesView_BinderImpl_0(){
}

defineSeed(1009, 1, {}, LogTypesView_BinderImpl_0);
function $build_f_HTMLPanel1_8(this$static){
  var attachRecord16, f_HTMLPanel1, f_VerticalPanel2, f_Label3, tblHours;
  f_HTMLPanel1 = new HTMLPanel_0($html1_7(this$static.domId0).html);
  attachRecord16 = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get_1(this$static.domId0Element);
  attachRecord16.origParent?$insertBefore(attachRecord16.origParent, attachRecord16.element, attachRecord16.origSibling):orphan(attachRecord16.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_10(f_VerticalPanel2, (f_Label3 = new Label_0 , $setClassName(f_Label3.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'LISTE DES TYPES DES HEURES', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_10(f_VerticalPanel2, (tblHours = this$static.owner.tblHours , tblHours.element.style['height'] = '600px' , tblHours.element.style['width'] = '800px' , tblHours)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function LogTypesView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1010, 1, {}, LogTypesView_BinderImpl$Widgets_0);
function $html1_7(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$LogTypesView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesView$_annotation$$none$$) {
    result = new LogTypesView_0(new LogTypesView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesView$_annotation$$none$$;
}

defineSeed(1166, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$LogTypeProxy]));
_.setOrderNumber = function setOrderNumber(orderNumber){
  dynamicCast($getWrapped(this.this$0), Q$LogTypeProxy).setOrderNumber(orderNumber);
  valueOf_1(orderNumber);
}
;
defineSeed(1167, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$LogTypeProxy]));
_.setOrderNumber = function setOrderNumber_0(orderNumber){
  $setProperty(this.this$0, 'orderNumber', valueOf_1(orderNumber));
}
;
function $saveAndReturn_1(this$static, newHour){
  var x_0;
  x_0 = new LogTypeRequestFactory_LogTypeRequestContextImpl$6X_0(this$static, newHour);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function LogTypeRequestFactory_LogTypeRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1214, 633, makeCastMap([Q$AbstractRequest]), LogTypeRequestFactory_LogTypeRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_17(){
  return new RequestData_0('tPqW$mcU$NfZt9T1aQTt8kiSNcU=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit);
}
;
function LogTypeRequestFactory_LogTypeRequestContextImpl$6X_0(this$0, val$newHour){
  this.val$newHour = val$newHour;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1216, 633, makeCastMap([Q$AbstractRequest]), LogTypeRequestFactory_LogTypeRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_19(){
  return new RequestData_0('a4g9gZ79OAWgJvEMb1SrFcYOYLc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newHour]), this.propertyRefs, Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit, null);
}
;
var Lcom_lemania_timetracking_client_presenter_LogTypesPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenter', 805), Lcom_lemania_timetracking_client_presenter_LogTypesPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenter$1', 806), Lcom_lemania_timetracking_client_presenter_LogTypesPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenter$2', 807), Lcom_lemania_timetracking_client_presenter_LogTypesPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenter$3', 808), Lcom_lemania_timetracking_client_presenter_LogTypesPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenter$4', 809), Lcom_lemania_timetracking_client_view_LogTypesView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView', 1002), Lcom_lemania_timetracking_client_view_LogTypesView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView$1', 1003), Lcom_lemania_timetracking_client_view_LogTypesView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView$2', 1004), Lcom_lemania_timetracking_client_view_LogTypesView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView$3', 1005), Lcom_lemania_timetracking_client_view_LogTypesView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView$4', 1006), Lcom_lemania_timetracking_client_view_LogTypesView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView$5', 1007), Lcom_lemania_timetracking_client_view_LogTypesView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView$6', 1008), Lcom_lemania_timetracking_client_view_LogTypesView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView_BinderImpl', 1009), Lcom_lemania_timetracking_client_view_LogTypesView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView_BinderImpl$Widgets', 1010), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$2X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl$2X', 1214), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$6X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl$6X', 1216);
$entry(onLoad)(17);
