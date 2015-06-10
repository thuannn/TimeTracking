function LogTypeAddedEvent_0(){
  $clinit_LogTypeAddedEvent();
}

defineSeed(747, 232, {}, LogTypeAddedEvent_0);
_.dispatch_0 = function dispatch_38(handler){
  dynamicCast(handler, Q$LogTypeAddedEvent$LogTypeAddedHandler).onHourAdded(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_39(){
  return TYPE_39;
}
;
function $hourAdd(this$static, nom, active){
  var rc, rf;
  if (!nom.length) {
    alert_0("Veuillez sassir le nom de type d'heure.");
    return;
  }
  rf = new LogTypeRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new LogTypeRequestFactory_LogTypeRequestContextImpl_0(rf);
  this$static.hp = dynamicCast($create_1(rc, Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit), Q$LogTypeProxy);
  this$static.hp.setLogTypeName(nom);
  this$static.hp.setLogTypeActive(active);
  $fire($save_1(rc, this$static.hp), new LogTypesAddPresenter$1_0(this$static));
}

function $hourAddCancel(){
  $clinit_History();
  !!impl_3 && $newItem(impl_3, 'types', true);
}

function LogTypesAddPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  dynamicCast(this.view, Q$LogTypesAddPresenter$MyView).setUiHandlers(this);
}

defineSeed(796, 688, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$HourAddUiHandler]), LogTypesAddPresenter_0);
_.onBind = function onBind_8(){
}
;
_.revealInParent = function revealInParent_7(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_13(this$static){
  $doFire(this$static.this$0.eventBus, new LogTypeAddedEvent_0, null);
}

function LogTypesAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(797, 624, makeCastMap([Q$Receiver]), LogTypesAddPresenter$1_0);
_.onFailure_0 = function onFailure_13(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_13(response){
  $onSuccess_13(this, throwClassCastExceptionUnlessNull(response));
}
;
defineSeed(805, 717, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$LogTypeAddedEvent$LogTypeAddedHandler]));
_.onHourAdded = function onHourAdded_0(event_0){
  $getPresenter_0(this, new LogTypesPresenterMyProxyImpl$1_0(this.eventBus));
}
;
function $success_3(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new LogTypesPresenterMyProxyImpl$1$1_0);
}

function LogTypesPresenterMyProxyImpl$1_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(806, 702, {}, LogTypesPresenterMyProxyImpl$1_0);
_.success = function success_5(presenter){
  $success_3(dynamicCast(presenter, Q$LogTypesPresenter));
}
;
function LogTypesPresenterMyProxyImpl$1$1_0(){
}

defineSeed(807, 1, {}, LogTypesPresenterMyProxyImpl$1$1_0);
_.execute_1 = function execute_33(){
  $clinit_History();
  !!impl_3 && $newItem(impl_3, 'types', true);
}
;
function $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$) {
    result = new LogTypesAddPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$LogTypesAddView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$;
}

defineSeed(911, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_59(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdAddClicked(this$static){
  !!this$static.uiHandlers && $hourAdd(dynamicCast(this$static.uiHandlers, Q$HourAddUiHandler), $trim($getPropertyString($getElement(this$static.txtHourName), 'value')), $getValue_0(this$static.txtHourActive));
}

function $onCmdCancelClicked_0(this$static){
  !!this$static.uiHandlers && $hourAddCancel(dynamicCast(this$static.uiHandlers, Q$HourAddUiHandler));
}

function LogTypesAddView_0(){
  this.widget = $build_f_HTMLPanel1_7(new LogTypesAddView_BinderImpl$Widgets_0(this));
}

defineSeed(991, 693, makeCastMap([Q$IsWidget, Q$LogTypesAddPresenter$MyView]), LogTypesAddView_0);
_.asWidget = function asWidget_10(){
  return this.widget;
}
;
function LogTypesAddView_BinderImpl_0(){
}

defineSeed(992, 1, {}, LogTypesAddView_BinderImpl_0);
function $build_f_HTMLPanel1_7(this$static){
  var attachRecord15, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, txtHourName, f_Label6, txtHourActive, f_HorizontalPanel8, cmdCancel, sb, cmdAdd, sb_0;
  f_HTMLPanel1 = new HTMLPanel_0($html3_0(this$static.domId0).html);
  attachRecord15 = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get_1(this$static.domId0Element);
  attachRecord15.origParent?$insertBefore(attachRecord15.origParent, attachRecord15.element, attachRecord15.origSibling):orphan(attachRecord15.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_10(f_VerticalPanel2, (f_Label3 = new Label_0 , $setClassName(f_Label3.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, "RAJOUTER UN TYPE D'HEURE", false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_10(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 3) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom du type :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (txtHourName = new TextBox_0 , txtHourName.element.style['width'] = '250px' , this$static.owner.txtHourName = txtHourName , txtHourName)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Actif :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (txtHourActive = new CheckBox_0 , $setValue_0(txtHourActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.txtHourActive = txtHourActive , txtHourActive)) , $setWidget_1(f_Grid4, 2, 0, new Label_0) , $setWidget_1(f_Grid4, 2, 1, (f_HorizontalPanel8 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel8, ALIGN_RIGHT) , $add_8(f_HorizontalPanel8, (cmdCancel = new Button_0 , $setHTML(cmdCancel, (sb = new StringBuilder_0 , $append_2(sb.impl, 'Annuler') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $setClassName(cmdCancel.element, 'button-normal') , $addDomHandler(cmdCancel, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCancel)) , $add_8(f_HorizontalPanel8, (cmdAdd = new Button_0 , $setHTML(cmdAdd, (sb_0 = new StringBuilder_0 , $append_2(sb_0.impl, 'Ajouter') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html) , $setClassName(cmdAdd.element, 'button-highlight') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdAdd)) , f_HorizontalPanel8.element.style['width'] = '100%' , f_HorizontalPanel8)) , $setPropertyInt(f_Grid4.tableElem, 'cellPadding', 5) , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function LogTypesAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LogTypesAddView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LogTypesAddView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(993, 1, {}, LogTypesAddView_BinderImpl$Widgets_0);
function LogTypesAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(994, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), LogTypesAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_5(event_0){
  $onCmdCancelClicked_0(this.this$1.owner);
}
;
function LogTypesAddView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(995, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), LogTypesAddView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_6(event_0){
  $onCmdAddClicked(this.this$1.owner);
}
;
function $html3_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$LogTypesAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesAddView$_annotation$$none$$) {
    result = new LogTypesAddView_0(new LogTypesAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesAddView$_annotation$$none$$;
}

function $save_1(this$static, type_0){
  var x_0;
  x_0 = new LogTypeRequestFactory_LogTypeRequestContextImpl$5X_0(this$static, type_0);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function LogTypeRequestFactory_LogTypeRequestContextImpl$5X_0(this$0, val$type){
  this.val$type = val$type;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1210, 628, makeCastMap([Q$AbstractRequest]), LogTypeRequestFactory_LogTypeRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_18(){
  return new RequestData_0('6lwGHhkcEZgJwVKhEsuhdLKDNU4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$type]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
var Lcom_lemania_timetracking_client_presenter_LogTypesAddPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesAddPresenter', 796), Lcom_lemania_timetracking_client_presenter_LogTypesAddPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesAddPresenter$1', 797), Lcom_lemania_timetracking_client_event_LogTypeAddedEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'LogTypeAddedEvent', 747), Lcom_lemania_timetracking_client_presenter_LogTypesPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenterMyProxyImpl$1', 806), Lcom_lemania_timetracking_client_presenter_LogTypesPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenterMyProxyImpl$1$1', 807), Lcom_lemania_timetracking_client_view_LogTypesAddView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView', 991), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl', 992), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl$Widgets', 993), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl$Widgets$1', 994), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl$Widgets$2', 995), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$5X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl$5X', 1210);
$entry(onLoad)(16);
