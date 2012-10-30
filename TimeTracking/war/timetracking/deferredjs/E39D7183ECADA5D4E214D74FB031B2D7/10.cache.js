function LogTypeAddedEvent_0(){
  $clinit_LogTypeAddedEvent();
}

function LogTypeAddedEvent(){
}

_ = LogTypeAddedEvent_0.prototype = LogTypeAddedEvent.prototype = new GwtEvent;
_.dispatch_0 = function dispatch_33(handler){
  dynamicCast(handler, Q$LogTypeAddedEvent$LogTypeAddedHandler).onHourAdded(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_34(){
  return TYPE_33;
}
;
_.getClass$ = function getClass_483(){
  return Lcom_lemania_timetracking_client_event_LogTypeAddedEvent_2_classLit;
}
;
function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$LogTypesAddPresenter_LogTypesAddPresenter_methodInjection(_0, _1){
  return new LogTypesAddPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$LogTypesAddPresenter_LogTypesAddPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesAddView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesAddView$_annotation$$none$$ = new LogTypesAddView_0(new LogTypesAddView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesAddView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$MyProxy$_annotation$$none$$ = new LogTypesAddPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$5$1.prototype;
_.onSuccess = function onSuccess_10(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $hourAdd(this$static, nom, active){
  var rc, rf;
  if (!nom.length) {
    alert_0("Veuillez sassir le nom de type d'heure.");
    return;
  }
  rf = new LogTypeRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new DefaultRequestTransport_0);
  rc = new LogTypeRequestFactory_LogTypeRequestContextImpl_0(rf);
  this$static.hp = dynamicCast($create_1(rc, Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit), Q$LogTypeProxy);
  this$static.hp.setLogTypeName(nom);
  this$static.hp.setLogTypeActive(active);
  $fire($save_2(rc, this$static.hp), new LogTypesAddPresenter$1_0(this$static));
}

function LogTypesAddPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$LogTypesAddPresenter$MyView).setUiHandlers(this);
}

function LogTypesAddPresenter(){
}

_ = LogTypesAddPresenter_0.prototype = LogTypesAddPresenter.prototype = new Presenter;
_.getClass$ = function getClass_555(){
  return Lcom_lemania_timetracking_client_presenter_LogTypesAddPresenter_2_classLit;
}
;
_.onBind = function onBind_8(){
}
;
_.revealInParent = function revealInParent_6(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$HourAddUiHandler]);
_.hp = null;
function $onSuccess_12(this$static){
  $doFire(this$static.this$0.eventBus, new LogTypeAddedEvent_0, null);
}

function LogTypesAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function LogTypesAddPresenter$1(){
}

_ = LogTypesAddPresenter$1_0.prototype = LogTypesAddPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_556(){
  return Lcom_lemania_timetracking_client_presenter_LogTypesAddPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_25(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_25(response){
  $onSuccess_12(this, throwClassCastExceptionUnlessNull(response));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
_ = LogTypesPresenter.prototype;
_.onHourAdded = function onHourAdded(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'types', true);
}
;
_ = LogTypesPresenterMyProxyImpl.prototype;
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

function LogTypesPresenterMyProxyImpl$1(){
}

_ = LogTypesPresenterMyProxyImpl$1_0.prototype = LogTypesPresenterMyProxyImpl$1.prototype = new NotifyingAsyncCallback;
_.getClass$ = function getClass_563(){
  return Lcom_lemania_timetracking_client_presenter_LogTypesPresenterMyProxyImpl$1_2_classLit;
}
;
_.success = function success_5(presenter){
  $success_3(dynamicCast(presenter, Q$LogTypesPresenter));
}
;
function LogTypesPresenterMyProxyImpl$1$1_0(){
}

function LogTypesPresenterMyProxyImpl$1$1(){
}

_ = LogTypesPresenterMyProxyImpl$1$1_0.prototype = LogTypesPresenterMyProxyImpl$1$1.prototype = new Object_0;
_.execute_0 = function execute_31(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, 'types', true);
}
;
_.getClass$ = function getClass_564(){
  return Lcom_lemania_timetracking_client_presenter_LogTypesPresenterMyProxyImpl$1$1_2_classLit;
}
;
function $onCmdAddClicked(this$static){
  !!this$static.uiHandlers && $hourAdd(dynamicCast(this$static.uiHandlers, Q$HourAddUiHandler), $trim($getPropertyString(this$static.txtHourName.element, 'value')), $getValue(this$static.txtHourActive));
}

function $onCmdCancelClicked_0(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$HourAddUiHandler) , $clinit_History() , !!impl_2 && $newItem(impl_2, 'types', true));
}

function LogTypesAddView_0(){
  var attachRecord0, cmdAdd, cmdCancel, domId0, domId0Element, f_Grid4, f_HTMLPanel1, f_HorizontalPanel8, f_Label3, f_Label5, f_Label6, f_Label7, f_VerticalPanel2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, txtHourActive, txtHourName, sb, sb_0, sb_1;
  this.widget = (domId0 = $createUniqueId($doc) , f_Label3 = new Label_0 , f_Label5 = new Label_0 , txtHourName = new TextBox_0 , f_Label6 = new Label_0 , txtHourActive = new CheckBox_0 , f_Label7 = new Label_0 , cmdCancel = new Button_0 , cmdAdd = new Button_0 , f_HorizontalPanel8 = new HorizontalPanel_0 , f_Grid4 = new Grid_0 , f_VerticalPanel2 = new VerticalPanel_0 , f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , $append_2(sb.data, "<span id='") , $append_8(sb, htmlEscape(domId0)) , $append_2(sb.data, "'><\/span>") , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, "Ajouter un type d'heure") , $updateHorizontalAlignment(f_Label3) , $add_8(f_VerticalPanel2, f_Label3) , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom de type :') , $updateHorizontalAlignment(f_Label5) , txtHourName.element.style['width'] = '250px' , $setTextOrHtml(f_Label6.directionalTextHelper, 'Actif :') , $updateHorizontalAlignment(f_Label6) , $setHorizontalAlignment_0(f_HorizontalPanel8, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT)) , $setHTML(cmdCancel, (sb_0 = new StringBuilder_0 , $append_2(sb_0.data, 'Annuler') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $add_6(f_HorizontalPanel8, cmdCancel) , $setHTML(cmdAdd, (sb_1 = new StringBuilder_0 , $append_2(sb_1.data, 'Ajouter') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_1.data))).html) , $add_6(f_HorizontalPanel8, cmdAdd) , f_HorizontalPanel8.element.style['width'] = '100%' , $resizeColumns(f_Grid4) , $resizeRows(f_Grid4, 3) , $setWidget_1(f_Grid4, 0, 0, f_Label5) , $setWidget_1(f_Grid4, 0, 1, txtHourName) , $setWidget_1(f_Grid4, 1, 0, f_Label6) , $setWidget_1(f_Grid4, 1, 1, txtHourActive) , $setWidget_1(f_Grid4, 2, 0, f_Label7) , $setWidget_1(f_Grid4, 2, 1, f_HorizontalPanel8) , $add_8(f_VerticalPanel2, f_Grid4) , f_VerticalPanel2.element.style['width'] = '100%' , attachRecord0 = attachToDom(f_HTMLPanel1.element) , domId0Element = $getElementById($doc, domId0) , attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element) , $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LogTypesAddView_BinderImpl$1_0(this) , $addDomHandler(cmdCancel, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LogTypesAddView_BinderImpl$2_0(this) , $addDomHandler(cmdAdd, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , this.txtHourActive = txtHourActive , this.txtHourName = txtHourName , f_HTMLPanel1);
}

function LogTypesAddView(){
}

_ = LogTypesAddView_0.prototype = LogTypesAddView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_8(){
  return this.widget;
}
;
_.getClass$ = function getClass_644(){
  return Lcom_lemania_timetracking_client_view_LogTypesAddView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$LogTypesAddPresenter$MyView]);
_.txtHourActive = null;
_.txtHourName = null;
_.widget = null;
function LogTypesAddView_BinderImpl_0(){
}

function LogTypesAddView_BinderImpl(){
}

_ = LogTypesAddView_BinderImpl_0.prototype = LogTypesAddView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_645(){
  return Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl_2_classLit;
}
;
function LogTypesAddView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function LogTypesAddView_BinderImpl$1(){
}

_ = LogTypesAddView_BinderImpl$1_0.prototype = LogTypesAddView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_646(){
  return Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl$1_2_classLit;
}
;
_.onClick = function onClick_8(event_0){
  $onCmdCancelClicked_0(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
function LogTypesAddView_BinderImpl$2_0(val$owner){
  this.val$owner = val$owner;
}

function LogTypesAddView_BinderImpl$2(){
}

_ = LogTypesAddView_BinderImpl$2_0.prototype = LogTypesAddView_BinderImpl$2.prototype = new Object_0;
_.getClass$ = function getClass_647(){
  return Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl$2_2_classLit;
}
;
_.onClick = function onClick_9(event_0){
  $onCmdAddClicked(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
_ = LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1.prototype;
_.setLogTypeName = function setLogTypeName(typeName){
  dynamicCast($getWrapped(this.this$0), Q$LogTypeProxy).setLogTypeName(typeName);
}
;
_ = LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2.prototype;
_.setLogTypeName = function setLogTypeName_0(typeName){
  $setProperty(this.this$0, 'logTypeName', typeName);
}
;
function $save_2(this$static, type){
  var x;
  x = new LogTypeRequestFactory_LogTypeRequestContextImpl$4X_0(this$static, type);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function LogTypeRequestFactory_LogTypeRequestContextImpl$4X_0(this$0, val$type){
  this.val$type = val$type;
  AbstractRequest_0.call(this, this$0);
}

function LogTypeRequestFactory_LogTypeRequestContextImpl$4X(){
}

_ = LogTypeRequestFactory_LogTypeRequestContextImpl$4X_0.prototype = LogTypeRequestFactory_LogTypeRequestContextImpl$4X.prototype = new AbstractRequest;
_.getClass$ = function getClass_760(){
  return Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$4X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_14(){
  return new RequestData_0('6lwGHhkcEZgJwVKhEsuhdLKDNU4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$type]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$type = null;
var Lcom_lemania_timetracking_client_event_LogTypeAddedEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'LogTypeAddedEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_lemania_timetracking_client_presenter_LogTypesAddPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesAddPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_LogTypesAddView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_LogTypesAddPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesAddPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_LogTypesPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenterMyProxyImpl$1', Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2_classLit), Lcom_lemania_timetracking_client_presenter_LogTypesPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'LogTypesPresenterMyProxyImpl$1$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_LogTypesAddView_1BinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'LogTypesAddView_BinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl$4X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(10);
