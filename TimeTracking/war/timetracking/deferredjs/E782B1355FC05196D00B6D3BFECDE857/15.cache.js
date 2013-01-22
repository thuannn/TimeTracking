function LogTypeAddedEvent_0(){
  $clinit_LogTypeAddedEvent();
}

defineSeed(716, 228, {}, LogTypeAddedEvent_0);
_.dispatch_0 = function dispatch_35(handler){
  dynamicCast(handler, Q$LogTypeAddedEvent$LogTypeAddedHandler).onHourAdded(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_36(){
  return TYPE_35;
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
  !!impl_2 && $newItem(impl_2, 'types', true);
}

function LogTypesAddPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$LogTypesAddPresenter$MyView).setUiHandlers(this);
}

defineSeed(767, 663, makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$HourAddUiHandler]), LogTypesAddPresenter_0);
_.onBind = function onBind_8(){
}
;
_.revealInParent = function revealInParent_6(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.hp = null;
function $onSuccess_15(this$static){
  $doFire(this$static.this$0.eventBus, new LogTypeAddedEvent_0, null);
}

function LogTypesAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(768, 602, makeCastMap([Q$Receiver]), LogTypesAddPresenter$1_0);
_.onFailure_0 = function onFailure_15(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_15(response){
  $onSuccess_15(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
defineSeed(776, 692, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$Place, Q$LogTypeAddedEvent$LogTypeAddedHandler]));
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

defineSeed(777, 676, {}, LogTypesPresenterMyProxyImpl$1_0);
_.success = function success_5(presenter){
  $success_3(dynamicCast(presenter, Q$LogTypesPresenter));
}
;
function LogTypesPresenterMyProxyImpl$1$1_0(){
}

defineSeed(778, 1, {}, LogTypesPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_30(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'types', true);
}
;
function $com$lemania$timetracking$client$presenter$LogTypesAddPresenter_com$lemania$timetracking$client$presenter$LogTypesAddPresenter_methodInjection(_0, _1){
  return new LogTypesAddPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$) {
    result = $com$lemania$timetracking$client$presenter$LogTypesAddPresenter_com$lemania$timetracking$client$presenter$LogTypesAddPresenter_methodInjection($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$LogTypesAddView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$;
}

defineSeed(866, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_53(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onCmdAddClicked(this$static){
  !!this$static.uiHandlers && $hourAdd(dynamicCast(this$static.uiHandlers, Q$HourAddUiHandler), $trim($getPropertyString(this$static.txtHourName.element, 'value')), $getValue_0(this$static.txtHourActive));
}

function $onCmdCancelClicked_0(this$static){
  !!this$static.uiHandlers && $hourAddCancel(dynamicCast(this$static.uiHandlers, Q$HourAddUiHandler));
}

function LogTypesAddView_0(){
  this.widget = $build_f_HTMLPanel1_6(new LogTypesAddView_BinderImpl$Widgets_0(this));
}

defineSeed(932, 668, makeCastMap([Q$LogTypesAddPresenter$MyView]), LogTypesAddView_0);
_.asWidget = function asWidget_8(){
  return this.widget;
}
;
_.txtHourActive = null;
_.txtHourName = null;
_.widget = null;
function LogTypesAddView_BinderImpl_0(){
}

defineSeed(933, 1, {}, LogTypesAddView_BinderImpl_0);
function $build_f_HTMLPanel1_6(this$static){
  var attachRecord14, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, txtHourName, f_Label6, txtHourActive, f_HorizontalPanel8, cmdCancel, sb, cmdAdd, sb_0;
  f_HTMLPanel1 = new HTMLPanel_0($html3_0(this$static.domId0).html);
  attachRecord14 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord14.origParent?$insertBefore(attachRecord14.origParent, attachRecord14.element, attachRecord14.origSibling):orphan(attachRecord14.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_8(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, "Ajouter un type d'heure", false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_8(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 3) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom de type :', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (txtHourName = new TextBox_0 , txtHourName.element.style['width'] = '250px' , this$static.owner.txtHourName = txtHourName , txtHourName)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Actif :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (txtHourActive = new CheckBox_0 , this$static.owner.txtHourActive = txtHourActive , txtHourActive)) , $setWidget_1(f_Grid4, 2, 0, new Label_0) , $setWidget_1(f_Grid4, 2, 1, (f_HorizontalPanel8 = new HorizontalPanel_0 , $setHorizontalAlignment(f_HorizontalPanel8, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT)) , $add_6(f_HorizontalPanel8, (cmdCancel = new Button_0 , $setHTML(cmdCancel, (sb = new StringBuilder_0 , sb.impl.string += 'Annuler' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $addDomHandler(cmdCancel, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCancel)) , $add_6(f_HorizontalPanel8, (cmdAdd = new Button_0 , $setHTML(cmdAdd, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html) , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdAdd)) , f_HorizontalPanel8.element.style['width'] = '100%' , f_HorizontalPanel8)) , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function LogTypesAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LogTypesAddView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LogTypesAddView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(934, 1, {}, LogTypesAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function LogTypesAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(935, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), LogTypesAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_4(event_0){
  $onCmdCancelClicked_0(this.this$1.owner);
}
;
_.this$1 = null;
function LogTypesAddView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(936, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), LogTypesAddView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_5(event_0){
  $onCmdAddClicked(this.this$1.owner);
}
;
_.this$1 = null;
function $html3_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
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

function $save_1(this$static, type){
  var x;
  x = new LogTypeRequestFactory_LogTypeRequestContextImpl$5X_0(this$static, type);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function LogTypeRequestFactory_LogTypeRequestContextImpl$5X_0(this$0, val$type){
  this.val$type = val$type;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1105, 606, makeCastMap([Q$AbstractRequest]), LogTypeRequestFactory_LogTypeRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_13(){
  return new RequestData_0('6lwGHhkcEZgJwVKhEsuhdLKDNU4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$type]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$type = null;
var Lcom_lemania_timetracking_client_presenter_LogTypesAddPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesAddPresenter', 767), Lcom_lemania_timetracking_client_presenter_LogTypesAddPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesAddPresenter$1', 768), Lcom_lemania_timetracking_client_event_LogTypeAddedEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'LogTypeAddedEvent', 716), Lcom_lemania_timetracking_client_presenter_LogTypesPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenterMyProxyImpl$1', 777), Lcom_lemania_timetracking_client_presenter_LogTypesPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenterMyProxyImpl$1$1', 778), Lcom_lemania_timetracking_client_view_LogTypesAddView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView', 932), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl', 933), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl$Widgets', 934), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl$Widgets$1', 935), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl$Widgets$2', 936), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$5X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl$5X', 1105);
$entry(onLoad)(15);
