function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$LogTypesPresenter_LogTypesPresenter_methodInjection(_0, _1){
  return new LogTypesPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$LogTypesPresenter_LogTypesPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesView$_annotation$$none$$ = new LogTypesView_0(new LogTypesView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$MyProxy$_annotation$$none$$ = new LogTypesPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$16$1.prototype;
_.onSuccess = function onSuccess_7(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $updateLogTypeStatus(this$static, hp, status_0){
  var hourForUpdate, rc, rf, x;
  rf = new LogTypeRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new LogTypeRequestFactory_LogTypeRequestContextImpl_0(rf);
  hourForUpdate = dynamicCast($editProxy(rc, hp), Q$LogTypeProxy);
  hourForUpdate.setLogTypeActive(status_0);
  $fire((x = new LogTypeRequestFactory_LogTypeRequestContextImpl$6X_0(rc, hourForUpdate) , $addInvocation(rc.state.dialect, x) , x), new LogTypesPresenter$2_0(this$static));
}

function LogTypesPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$LogTypesPresenter$MyView).setUiHandlers(this);
}

function LogTypesPresenter(){
}

_ = LogTypesPresenter_0.prototype = LogTypesPresenter.prototype = new Presenter;
_.getClass$ = function getClass_571(){
  return Lcom_lemania_timetracking_client_presenter_LogTypesPresenter_2_classLit;
}
;
_.onBind = function onBind_9(){
  $initializeTable_2(dynamicCast(this.view, Q$LogTypesPresenter$MyView));
}
;
_.onHourAdded = function onHourAdded(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'types', true);
}
;
_.onReset = function onReset_3(){
  var rc, rf, x;
  rf = new LogTypeRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new LogTypeRequestFactory_LogTypeRequestContextImpl_0(rf);
  $fire((x = new LogTypeRequestFactory_LogTypeRequestContextImpl$2X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new LogTypesPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_7(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$LogTypeAddedEvent$LogTypeAddedHandler, Q$LogTypesPresenter, Q$LogTypeListUiHandler]);
function $onSuccess_15(this$static, response){
  $setData_2(dynamicCast(this$static.this$0.view, Q$LogTypesPresenter$MyView), response);
}

function LogTypesPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function LogTypesPresenter$1(){
}

_ = LogTypesPresenter$1_0.prototype = LogTypesPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_572(){
  return Lcom_lemania_timetracking_client_presenter_LogTypesPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_32(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_32(response){
  $onSuccess_15(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_16(this$static, response){
  $refreshTable_1(dynamicCast(this$static.this$0.view, Q$LogTypesPresenter$MyView), response);
}

function LogTypesPresenter$2_0(this$0){
  this.this$0 = this$0;
}

function LogTypesPresenter$2(){
}

_ = LogTypesPresenter$2_0.prototype = LogTypesPresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_573(){
  return Lcom_lemania_timetracking_client_presenter_LogTypesPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_33(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_33(response){
  $onSuccess_16(this, dynamicCast(response, Q$LogTypeProxy));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $initializeTable_2(this$static){
  var cellActive, colActive, colName;
  colName = new LogTypesView$1_0;
  $addColumn(this$static.tblHours, colName, 'Nom');
  cellActive = new CheckboxCell_0;
  colActive = new LogTypesView$2_0(cellActive);
  $addColumn(this$static.tblHours, colActive, 'Actif');
  $setFieldUpdater(colActive, new LogTypesView$3_0(this$static));
}

function $refreshTable_1(this$static, updatedHour){
  var types;
  types = new ArrayList_0;
  setCheck(types.array, types.size_0++, updatedHour);
  $setRowData_0(this$static.tblHours, this$static.selectedHour, types);
  $redraw(this$static.tblHours);
  alert_0("Statut du type d'heure mis \xE0 jour.");
}

function $setData_2(this$static, types){
  $setRowData_0(this$static.tblHours, 0, types);
}

function LogTypesView_0(){
  var attachRecord0, domId0, domId0Element, f_HTMLPanel1, f_Label3, f_VerticalPanel2, tblHours, sb;
  this.tblHours = new DataGrid_0;
  this.widget = (domId0 = $createUniqueId($doc) , f_Label3 = new Label_0 , tblHours = this.tblHours , f_VerticalPanel2 = new VerticalPanel_0 , f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, "List des types d'heure") , $updateHorizontalAlignment(f_Label3) , $add_8(f_VerticalPanel2, f_Label3) , tblHours.element.style['height'] = '600px' , tblHours.element.style['width'] = '800px' , $add_8(f_VerticalPanel2, tblHours) , f_VerticalPanel2.element.style['width'] = '100%' , attachRecord0 = attachToDom(f_HTMLPanel1.element) , domId0Element = $getElementById($doc, domId0) , attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element) , $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element) , f_HTMLPanel1);
}

function LogTypesView(){
}

_ = LogTypesView_0.prototype = LogTypesView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_9(){
  return this.widget;
}
;
_.getClass$ = function getClass_681(){
  return Lcom_lemania_timetracking_client_view_LogTypesView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$LogTypesPresenter$MyView]);
_.selectedHour = 0;
_.widget = null;
function LogTypesView$1_0(){
  TextColumn_0.call(this);
}

function LogTypesView$1(){
}

_ = LogTypesView$1_0.prototype = LogTypesView$1.prototype = new TextColumn;
_.getClass$ = function getClass_682(){
  return Lcom_lemania_timetracking_client_view_LogTypesView$1_2_classLit;
}
;
_.getValue = function getValue_6(object){
  return dynamicCast(object, Q$LogTypeProxy).getLogTypeName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function LogTypesView$2_0($anonymous0){
  this.cell = $anonymous0;
}

function LogTypesView$2(){
}

_ = LogTypesView$2_0.prototype = LogTypesView$2.prototype = new Column;
_.getClass$ = function getClass_683(){
  return Lcom_lemania_timetracking_client_view_LogTypesView$2_2_classLit;
}
;
_.getValue = function getValue_7(type){
  return dynamicCast(type, Q$LogTypeProxy).getLogTypeActive();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $update_2(this$static, index, type, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedHour = index;
    $updateLogTypeStatus(dynamicCast(this$static.this$0.uiHandlers, Q$LogTypeListUiHandler), type, value);
  }
}

function LogTypesView$3_0(this$0){
  this.this$0 = this$0;
}

function LogTypesView$3(){
}

_ = LogTypesView$3_0.prototype = LogTypesView$3.prototype = new Object_0;
_.getClass$ = function getClass_684(){
  return Lcom_lemania_timetracking_client_view_LogTypesView$3_2_classLit;
}
;
_.update = function update_1(index, type, value){
  $update_2(this, index, dynamicCast(type, Q$LogTypeProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function LogTypesView_BinderImpl_0(){
}

function LogTypesView_BinderImpl(){
}

_ = LogTypesView_BinderImpl_0.prototype = LogTypesView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_685(){
  return Lcom_lemania_timetracking_client_view_LogTypesView_1BinderImpl_2_classLit;
}
;
function LogTypeRequestFactory_LogTypeRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

function LogTypeRequestFactory_LogTypeRequestContextImpl$2X(){
}

_ = LogTypeRequestFactory_LogTypeRequestContextImpl$2X_0.prototype = LogTypeRequestFactory_LogTypeRequestContextImpl$2X.prototype = new AbstractRequest;
_.getClass$ = function getClass_826(){
  return Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$2X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_13(){
  return new RequestData_0('tPqW$mcU$NfZt9T1aQTt8kiSNcU=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
function LogTypeRequestFactory_LogTypeRequestContextImpl$6X_0(this$0, val$newHour){
  this.val$newHour = val$newHour;
  AbstractRequest_0.call(this, this$0);
}

function LogTypeRequestFactory_LogTypeRequestContextImpl$6X(){
}

_ = LogTypeRequestFactory_LogTypeRequestContextImpl$6X_0.prototype = LogTypeRequestFactory_LogTypeRequestContextImpl$6X.prototype = new AbstractRequest;
_.getClass$ = function getClass_829(){
  return Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$6X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_16(){
  return new RequestData_0('a4g9gZ79OAWgJvEMb1SrFcYOYLc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newHour]), this.propertyRefs, Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$newHour = null;
var Lcom_lemania_timetracking_client_presenter_LogTypesPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_LogTypesView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_LogTypesPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_LogTypesPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_LogTypesView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView$1', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_LogTypesView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView$2', Lcom_google_gwt_user_cellview_client_Column_2_classLit), Lcom_lemania_timetracking_client_view_LogTypesView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView$3', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_LogTypesView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$2X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl$2X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$6X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl$6X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(7);
