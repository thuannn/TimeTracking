function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$SettingsPresenter_SettingsPresenter_methodInjection(_0, _1){
  return new SettingsPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$SettingsPresenter_SettingsPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$SettingsView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$SettingsView$_annotation$$none$$ = new SettingsView_0(new SettingsView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$SettingsView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$ = new SettingsPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$13$1.prototype;
_.onSuccess = function onSuccess_5(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $updateSettingOptionDeadline(this$static, dayNumber){
  var rc, rf;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_4(rc, 'DEADLINE', dayNumber), new SettingsPresenter$1_0(this$static));
}

function $updateSettingOptionManualBlock(this$static, blnBlock){
  var rc, rf;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_4(rc, 'BLOCK', blnBlock.value_0?'true':'false'), new SettingsPresenter$3_0(this$static));
}

function SettingsPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function SettingsPresenter(){
}

_ = SettingsPresenter_0.prototype = SettingsPresenter.prototype = new Presenter;
_.getClass$ = function getClass_616(){
  return Lcom_lemania_timetracking_client_presenter_SettingsPresenter_2_classLit;
}
;
_.onBind = function onBind_16(){
  dynamicCast(this.view, Q$SettingsPresenter$MyView).setUiHandlers(this);
}
;
_.onReset = function onReset_10(){
  var rc, rf;
  $initializeInterface(dynamicCast(this.view, Q$SettingsPresenter$MyView));
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($listAll_3(rc), new SettingsPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$SettingOptionsUiHandler]);
function $onSuccess_28(this$static){
  $setText_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function SettingsPresenter$1(){
}

_ = SettingsPresenter$1_0.prototype = SettingsPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_617(){
  return Lcom_lemania_timetracking_client_presenter_SettingsPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_45(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_45(response){
  $onSuccess_28(this, throwClassCastExceptionUnlessNull(response));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_29(this$static, response){
  $populateCurrentSettings(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), response);
}

function SettingsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

function SettingsPresenter$2(){
}

_ = SettingsPresenter$2_0.prototype = SettingsPresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_618(){
  return Lcom_lemania_timetracking_client_presenter_SettingsPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_46(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_46(response){
  $onSuccess_29(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_30(this$static){
  $setText_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

function SettingsPresenter$3(){
}

_ = SettingsPresenter$3_0.prototype = SettingsPresenter$3.prototype = new Receiver;
_.getClass$ = function getClass_619(){
  return Lcom_lemania_timetracking_client_presenter_SettingsPresenter$3_2_classLit;
}
;
_.onFailure_0 = function onFailure_47(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_47(response){
  $onSuccess_30(this, throwClassCastExceptionUnlessNull(response));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $initializeInterface(this$static){
  var i;
  for (i = 0; i < 31; ++i)
    $insertItem(this$static.lstDays, '' + (i + 1), '' + i, -1);
  $setText_0(this$static.lblUpdateStatus, '');
}

function $onCmdSaveClick(this$static){
  if (this$static.uiHandlers) {
    $updateSettingOptionDeadline(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getItemText(this$static.lstDays, this$static.lstDays.element.selectedIndex));
    $updateSettingOptionManualBlock(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_1(this$static.blnBlock));
  }
}

function $populateCurrentSettings(this$static, settingOptions){
  var setting, setting$iterator;
  for (setting$iterator = settingOptions.iterator(); setting$iterator.hasNext();) {
    setting = dynamicCast(setting$iterator.next_0(), Q$SettingOptionProxy);
    $equals_5(setting.getOptionName(), 'DEADLINE') && $setSelectedIndex_0(this$static.lstDays, __parseAndValidateInt(setting.getOptionValue()) - 1);
    $equals_5(setting.getOptionName(), 'BLOCK') && $setValue_1(this$static.blnBlock, ($clinit_Boolean() , $clinit_Boolean() , $equalsIgnoreCase('true', setting.getOptionValue())?TRUE:FALSE));
  }
}

function SettingsView_0(){
  this.widget = $createAndBindUi_7(this);
}

function SettingsView(){
}

_ = SettingsView_0.prototype = SettingsView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_16(){
  return this.widget;
}
;
_.getClass$ = function getClass_741(){
  return Lcom_lemania_timetracking_client_view_SettingsView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$SettingsPresenter$MyView, Q$SettingsView]);
_.blnBlock = null;
_.lblUpdateStatus = null;
_.lstDays = null;
_.widget = null;
function $createAndBindUi_7(owner){
  var attachRecord0, blnBlock, cmdSave, domId0, domId0Element, f_Grid4, f_HTMLPanel1, f_Label3, f_Label5, f_Label6, f_Label7, f_Label8, f_Label9, f_VerticalPanel2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, lblUpdateStatus, lstDays, sb;
  domId0 = $createUniqueId($doc);
  f_Label3 = new Label_0;
  f_Label5 = new Label_0;
  lstDays = new ListBox_0;
  f_Label6 = new Label_0;
  f_Label7 = new Label_0;
  blnBlock = new SimpleCheckBox_0;
  f_Label8 = new Label_0;
  lblUpdateStatus = new Label_0;
  f_Label9 = new Label_0;
  cmdSave = new Button_0;
  f_Grid4 = new Grid_0;
  f_VerticalPanel2 = new VerticalPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  f_Label3.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label3.directionalTextHelper, "Bloquer l'acc\xE8s");
  $updateHorizontalAlignment(f_Label3);
  $add_8(f_VerticalPanel2, f_Label3);
  $setTextOrHtml(f_Label5.directionalTextHelper, "Bloquer automatiquement l'acc\xE8s au syst\xE8me le");
  $updateHorizontalAlignment(f_Label5);
  $setTextOrHtml(f_Label6.directionalTextHelper, 'tous les mois.');
  $updateHorizontalAlignment(f_Label6);
  $setTextOrHtml(f_Label7.directionalTextHelper, "Bloquer l'acc\xE8s d\xE8s MAINTENANT");
  $updateHorizontalAlignment(f_Label7);
  $setTextOrHtml(f_Label8.directionalTextHelper, '');
  $updateHorizontalAlignment(f_Label8);
  $setInnerText(cmdSave.element, 'Enregistrer');
  $resizeColumns(f_Grid4, 3);
  $resizeRows(f_Grid4, 4);
  $setWidget_1(f_Grid4, 0, 0, f_Label5);
  $setWidget_1(f_Grid4, 0, 1, lstDays);
  $setWidget_1(f_Grid4, 0, 2, f_Label6);
  $setWidget_1(f_Grid4, 1, 0, f_Label7);
  $setWidget_1(f_Grid4, 1, 1, blnBlock);
  $setWidget_1(f_Grid4, 2, 0, f_Label8);
  $setWidget_1(f_Grid4, 2, 1, lblUpdateStatus);
  $setWidget_1(f_Grid4, 3, 0, f_Label9);
  $setWidget_1(f_Grid4, 3, 1, cmdSave);
  f_Grid4.tableElem['cellPadding'] = 10;
  $add_8(f_VerticalPanel2, f_Grid4);
  f_VerticalPanel2.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new SettingsView_BinderImpl$1_0(owner);
  $addDomHandler(cmdSave, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  owner.blnBlock = blnBlock;
  owner.lblUpdateStatus = lblUpdateStatus;
  owner.lstDays = lstDays;
  return f_HTMLPanel1;
}

function SettingsView_BinderImpl_0(){
}

function SettingsView_BinderImpl(){
}

_ = SettingsView_BinderImpl_0.prototype = SettingsView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_742(){
  return Lcom_lemania_timetracking_client_view_SettingsView_1BinderImpl_2_classLit;
}
;
function SettingsView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function SettingsView_BinderImpl$1(){
}

_ = SettingsView_BinderImpl$1_0.prototype = SettingsView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_743(){
  return Lcom_lemania_timetracking_client_view_SettingsView_1BinderImpl$1_2_classLit;
}
;
_.onClick = function onClick_31(event_0){
  $onCmdSaveClick(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
function $save_4(this$static, optionName, optionValue){
  var x;
  x = new SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0(this$static, optionName, optionValue);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0(this$0, val$optionName, val$optionValue){
  this.val$optionName = val$optionName;
  this.val$optionValue = val$optionValue;
  AbstractRequest_0.call(this, this$0);
}

function SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X(){
}

_ = SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0.prototype = SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X.prototype = new AbstractRequest;
_.getClass$ = function getClass_842(){
  return Lcom_lemania_timetracking_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl$4X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_23(){
  return new RequestData_0('wtxSs$uzFmur4x3itVwd9YzGzUA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$optionName, this.val$optionValue]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$optionName = null;
_.val$optionValue = null;
var Lcom_lemania_timetracking_client_presenter_SettingsPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'SettingsPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_SettingsView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'SettingsView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_SettingsPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'SettingsPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_SettingsPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'SettingsPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_SettingsPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'SettingsPresenter$3', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_SettingsView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'SettingsView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_SettingsView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'SettingsView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(5);
