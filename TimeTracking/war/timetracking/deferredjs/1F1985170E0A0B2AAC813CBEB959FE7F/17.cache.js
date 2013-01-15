function EcoleAddedEvent_0(){
  $clinit_EcoleAddedEvent();
}

function EcoleAddedEvent(){
}

_ = EcoleAddedEvent_0.prototype = EcoleAddedEvent.prototype = new GwtEvent;
_.dispatch_0 = function dispatch_34(handler){
  dynamicCast(handler, Q$EcoleAddedEvent$EcoleAddedHandler).onEcoleAdded(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_35(){
  return TYPE_34;
}
;
_.getClass$ = function getClass_483(){
  return Lcom_lemania_timetracking_client_event_EcoleAddedEvent_2_classLit;
}
;
function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$EcoleAddPresenter_EcoleAddPresenter_methodInjection(_0, _1){
  return new EcoleAddPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$EcoleAddPresenter_EcoleAddPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$EcoleAddView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$EcoleAddView$_annotation$$none$$ = new EcoleAddView_0(new EcoleAddView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$EcoleAddView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$MyProxy$_annotation$$none$$ = new EcoleAddPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$9$1.prototype;
_.onSuccess = function onSuccess_17(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $ecoleAdd(this$static, ecoleNom, ecoleAdresse, ecoleActive){
  var rc, rf;
  if (!ecoleNom.length || !ecoleAdresse.length) {
    alert_0("Veuillez saissir le nom et l'addresse de l'\uFFFDcole !");
    return;
  }
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  this$static.ep = dynamicCast($create_1(rc, Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit), Q$EcoleProxy);
  this$static.ep.setSchoolName(ecoleNom);
  this$static.ep.setSchoolAddress(ecoleAdresse);
  this$static.ep.setSchoolStatus(ecoleActive);
  $fire($save_0(rc, this$static.ep), new EcoleAddPresenter$1_0(this$static));
}

function EcoleAddPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$EcoleAddPresenter$MyView).setUiHandlers(this);
}

function EcoleAddPresenter(){
}

_ = EcoleAddPresenter_0.prototype = EcoleAddPresenter.prototype = new Presenter;
_.getClass$ = function getClass_540(){
  return Lcom_lemania_timetracking_client_presenter_EcoleAddPresenter_2_classLit;
}
;
_.onBind = function onBind_4(){
}
;
_.revealInParent = function revealInParent_2(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$EcoleAddUiHandler]);
_.ep = null;
function $onSuccess_6(this$static){
  $doFire(this$static.this$0.eventBus, new EcoleAddedEvent_0, null);
}

function EcoleAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function EcoleAddPresenter$1(){
}

_ = EcoleAddPresenter$1_0.prototype = EcoleAddPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_541(){
  return Lcom_lemania_timetracking_client_presenter_EcoleAddPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_23(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_23(response){
  $onSuccess_6(this, throwClassCastExceptionUnlessNull(response));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
_ = EcolePresenter.prototype;
_.onEcoleAdded = function onEcoleAdded(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!ecolepage', true);
}
;
_ = EcolePresenterMyProxyImpl.prototype;
_.onEcoleAdded = function onEcoleAdded_0(event_0){
  $getPresenter_0(this, new EcolePresenterMyProxyImpl$1_0(this.eventBus));
}
;
function $success_0(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new EcolePresenterMyProxyImpl$1$1_0);
}

function EcolePresenterMyProxyImpl$1_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

function EcolePresenterMyProxyImpl$1(){
}

_ = EcolePresenterMyProxyImpl$1_0.prototype = EcolePresenterMyProxyImpl$1.prototype = new NotifyingAsyncCallback;
_.getClass$ = function getClass_548(){
  return Lcom_lemania_timetracking_client_presenter_EcolePresenterMyProxyImpl$1_2_classLit;
}
;
_.success = function success_2(presenter){
  $success_0(dynamicCast(presenter, Q$EcolePresenter));
}
;
function EcolePresenterMyProxyImpl$1$1_0(){
}

function EcolePresenterMyProxyImpl$1$1(){
}

_ = EcolePresenterMyProxyImpl$1$1_0.prototype = EcolePresenterMyProxyImpl$1$1.prototype = new Object_0;
_.execute_0 = function execute_28(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!ecolepage', true);
}
;
_.getClass$ = function getClass_549(){
  return Lcom_lemania_timetracking_client_presenter_EcolePresenterMyProxyImpl$1$1_2_classLit;
}
;
function $onCmdAddEcoleClicked(this$static){
  !!this$static.uiHandlers && $ecoleAdd(dynamicCast(this$static.uiHandlers, Q$EcoleAddUiHandler), $getPropertyString(this$static.txtNom.element, 'value'), $getPropertyString(this$static.txtAdresse.element, 'value'), $getValue_1(this$static.chkActive));
}

function $onCmdCancelClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$EcoleAddUiHandler) , $clinit_History() , !!impl_2 && $newItem(impl_2, '!ecolepage', true));
}

function EcoleAddView_0(){
  this.widget = $createAndBindUi_0(this);
}

function EcoleAddView(){
}

_ = EcoleAddView_0.prototype = EcoleAddView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_4(){
  return this.widget;
}
;
_.getClass$ = function getClass_660(){
  return Lcom_lemania_timetracking_client_view_EcoleAddView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$EcoleAddPresenter$MyView]);
_.chkActive = null;
_.txtAdresse = null;
_.txtNom = null;
_.widget = null;
function $createAndBindUi_0(owner){
  var attachRecord0, chkActive, cmdAddEcole, cmdCancel, domId0, domId0Element, f_Grid4, f_HTMLPanel1, f_HorizontalPanel9, f_Label3, f_Label5, f_Label6, f_Label7, f_Label8, f_VerticalPanel2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, txtAdresse, txtNom, sb;
  domId0 = $createUniqueId($doc);
  f_Label3 = new Label_0;
  f_Label5 = new Label_0;
  txtNom = new TextBox_0;
  f_Label6 = new Label_0;
  txtAdresse = new TextBox_0;
  f_Label7 = new Label_0;
  chkActive = new SimpleCheckBox_0;
  f_Label8 = new Label_0;
  cmdCancel = new Button_0;
  cmdAddEcole = new Button_0;
  f_HorizontalPanel9 = new HorizontalPanel_0;
  f_Grid4 = new Grid_0;
  f_VerticalPanel2 = new VerticalPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , $append_2(sb.data, "<span id='") , $append_8(sb, htmlEscape(domId0)) , $append_2(sb.data, "'><\/span>") , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html);
  f_Label3.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label3.directionalTextHelper, 'Ajouter une \xE9cole');
  $updateHorizontalAlignment(f_Label3);
  $add_8(f_VerticalPanel2, f_Label3);
  $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom :');
  $updateHorizontalAlignment(f_Label5);
  txtNom.element.style['width'] = '250px';
  $setTextOrHtml(f_Label6.directionalTextHelper, 'Adresse :');
  $updateHorizontalAlignment(f_Label6);
  txtAdresse.element.style['width'] = '250px';
  $setTextOrHtml(f_Label7.directionalTextHelper, 'Activ\xE9 :');
  $updateHorizontalAlignment(f_Label7);
  $setValue_2(chkActive, ($clinit_Boolean() , $clinit_Boolean() , TRUE));
  $setHorizontalAlignment_0(f_HorizontalPanel9, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  $setInnerText(cmdCancel.element, 'Annuler');
  $add_6(f_HorizontalPanel9, cmdCancel);
  $setInnerText(cmdAddEcole.element, 'Ajouter');
  $add_6(f_HorizontalPanel9, cmdAddEcole);
  f_HorizontalPanel9.element.style['width'] = '100%';
  $resizeColumns(f_Grid4, 2);
  $resizeRows(f_Grid4, 4);
  $setWidget_1(f_Grid4, 0, 0, f_Label5);
  $setWidget_1(f_Grid4, 0, 1, txtNom);
  $setWidget_1(f_Grid4, 1, 0, f_Label6);
  $setWidget_1(f_Grid4, 1, 1, txtAdresse);
  $setWidget_1(f_Grid4, 2, 0, f_Label7);
  $setWidget_1(f_Grid4, 2, 1, chkActive);
  $setWidget_1(f_Grid4, 3, 0, f_Label8);
  $setWidget_1(f_Grid4, 3, 1, f_HorizontalPanel9);
  f_Grid4.element.style['width'] = '253px';
  $add_8(f_VerticalPanel2, f_Grid4);
  f_VerticalPanel2.element.style['height'] = '';
  f_VerticalPanel2.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new EcoleAddView_BinderImpl$1_0(owner);
  $addDomHandler(cmdCancel, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new EcoleAddView_BinderImpl$2_0(owner);
  $addDomHandler(cmdAddEcole, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0);
  owner.chkActive = chkActive;
  owner.txtAdresse = txtAdresse;
  owner.txtNom = txtNom;
  return f_HTMLPanel1;
}

function EcoleAddView_BinderImpl_0(){
}

function EcoleAddView_BinderImpl(){
}

_ = EcoleAddView_BinderImpl_0.prototype = EcoleAddView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_661(){
  return Lcom_lemania_timetracking_client_view_EcoleAddView_1BinderImpl_2_classLit;
}
;
function EcoleAddView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function EcoleAddView_BinderImpl$1(){
}

_ = EcoleAddView_BinderImpl$1_0.prototype = EcoleAddView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_662(){
  return Lcom_lemania_timetracking_client_view_EcoleAddView_1BinderImpl$1_2_classLit;
}
;
_.onClick = function onClick_5(event_0){
  $onCmdCancelClicked(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
function EcoleAddView_BinderImpl$2_0(val$owner){
  this.val$owner = val$owner;
}

function EcoleAddView_BinderImpl$2(){
}

_ = EcoleAddView_BinderImpl$2_0.prototype = EcoleAddView_BinderImpl$2.prototype = new Object_0;
_.getClass$ = function getClass_663(){
  return Lcom_lemania_timetracking_client_view_EcoleAddView_1BinderImpl$2_2_classLit;
}
;
_.onClick = function onClick_6(event_0){
  $onCmdAddEcoleClicked(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
_ = EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1.prototype;
_.setSchoolAddress = function setSchoolAddress(name_0){
  dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).setSchoolAddress(name_0);
}
;
_.setSchoolName = function setSchoolName(name_0){
  dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).setSchoolName(name_0);
}
;
_ = EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2.prototype;
_.setSchoolAddress = function setSchoolAddress_0(name_0){
  $setProperty(this.this$0, 'schoolAddress', name_0);
}
;
_.setSchoolName = function setSchoolName_0(name_0){
  $setProperty(this.this$0, 'schoolName', name_0);
}
;
function $save_0(this$static, ecole){
  var x;
  x = new EcoleRequestFactory_EcoleRequestContextImpl$5X_0(this$static, ecole);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function EcoleRequestFactory_EcoleRequestContextImpl$5X_0(this$0, val$ecole){
  this.val$ecole = val$ecole;
  AbstractRequest_0.call(this, this$0);
}

function EcoleRequestFactory_EcoleRequestContextImpl$5X(){
}

_ = EcoleRequestFactory_EcoleRequestContextImpl$5X_0.prototype = EcoleRequestFactory_EcoleRequestContextImpl$5X.prototype = new AbstractRequest;
_.getClass$ = function getClass_816(){
  return Lcom_lemania_timetracking_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl$5X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_6(){
  return new RequestData_0('B57efEqQlqOYC_qMXPpn$_IMuYc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$ecole]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$ecole = null;
var Lcom_lemania_timetracking_client_event_EcoleAddedEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'EcoleAddedEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_lemania_timetracking_client_presenter_EcoleAddPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'EcoleAddPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_EcoleAddView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleAddView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_EcoleAddPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'EcoleAddPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_EcolePresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'EcolePresenterMyProxyImpl$1', Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2_classLit), Lcom_lemania_timetracking_client_presenter_EcolePresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'EcolePresenterMyProxyImpl$1$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_EcoleAddView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleAddView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_EcoleAddView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleAddView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_EcoleAddView_1BinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleAddView_BinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl$5X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl$5X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(17);
