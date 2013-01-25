function $updateSettingOptionDeadline(this$static, dayNumber){
  var rc, rf;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_3(rc, 'DEADLINE', dayNumber), new SettingsPresenter$1_0(this$static));
}

function $updateSettingOptionManualBlock(this$static, blnBlock){
  var rc, rf;
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($save_3(rc, 'BLOCK', blnBlock.value_0?'true':'false'), new SettingsPresenter$3_0(this$static));
}

function SettingsPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(826, 668, makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$SettingOptionsUiHandler]), SettingsPresenter_0);
_.onBind = function onBind_16(){
  dynamicCast(this.view, Q$SettingsPresenter$MyView).setUiHandlers(this);
}
;
_.onReset = function onReset_10(){
  var rf, rc;
  $initializeInterface(dynamicCast(this.view, Q$SettingsPresenter$MyView));
  rf = new SettingOptionRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(rf);
  $fire($listAll_3(rc), new SettingsPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_31(this$static){
  $setText_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(827, 607, makeCastMap([Q$Receiver]), SettingsPresenter$1_0);
_.onFailure_0 = function onFailure_32(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_32(response){
  $onSuccess_31(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $onSuccess_32(this$static, response){
  $populateCurrentSettings(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), response);
}

function SettingsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(828, 607, makeCastMap([Q$Receiver]), SettingsPresenter$2_0);
_.onFailure_0 = function onFailure_33(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_33(response){
  $onSuccess_32(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_33(this$static){
  $setText_0(dynamicCast(dynamicCast(this$static.this$0.view, Q$SettingsPresenter$MyView), Q$SettingsView).lblUpdateStatus, 'Setting saved.');
}

function SettingsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(829, 607, makeCastMap([Q$Receiver]), SettingsPresenter$3_0);
_.onFailure_0 = function onFailure_34(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_34(response){
  $onSuccess_33(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $com$lemania$timetracking$client$presenter$SettingsPresenter_com$lemania$timetracking$client$presenter$SettingsPresenter_methodInjection(_0, _1){
  return new SettingsPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$) {
    result = $com$lemania$timetracking$client$presenter$SettingsPresenter_com$lemania$timetracking$client$presenter$SettingsPresenter_methodInjection($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$SettingsView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$;
}

defineSeed(867, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_51(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeInterface(this$static){
  var i;
  for (i = 0; i < 31; ++i)
    $insertItem(this$static.lstDays, '' + (i + 1), '' + i, -1);
  $setText_0(this$static.lblUpdateStatus, '');
}

function $onCmdSaveClick(this$static){
  if (this$static.uiHandlers) {
    $updateSettingOptionDeadline(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getItemText(this$static.lstDays, this$static.lstDays.element.selectedIndex));
    $updateSettingOptionManualBlock(dynamicCast(this$static.uiHandlers, Q$SettingOptionsUiHandler), $getValue_2(this$static.blnBlock));
  }
}

function $populateCurrentSettings(this$static, settingOptions){
  var setting, setting$iterator;
  for (setting$iterator = settingOptions.iterator(); setting$iterator.hasNext();) {
    setting = dynamicCast(setting$iterator.next_0(), Q$SettingOptionProxy);
    $equals_3(setting.getOptionName(), 'DEADLINE') && $setSelectedIndex_0(this$static.lstDays, __parseAndValidateInt(setting.getOptionValue()) - 1);
    $equals_3(setting.getOptionName(), 'BLOCK') && $setValue_2(this$static.blnBlock, ($clinit_Boolean() , $clinit_Boolean() , $equalsIgnoreCase('true', setting.getOptionValue())?TRUE_1:FALSE_1));
  }
}

function SettingsView_0(){
  this.widget = $build_f_HTMLPanel1_13(new SettingsView_BinderImpl$Widgets_0(this));
}

defineSeed(1021, 673, makeCastMap([Q$SettingsPresenter$MyView, Q$SettingsView]), SettingsView_0);
_.asWidget = function asWidget_16(){
  return this.widget;
}
;
_.blnBlock = null;
_.lblUpdateStatus = null;
_.lstDays = null;
_.widget = null;
function SettingsView_BinderImpl_0(){
}

defineSeed(1022, 1, {}, SettingsView_BinderImpl_0);
function $build_f_HTMLPanel1_13(this$static){
  var attachRecord12, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, lstDays, f_Label6, f_Label7, blnBlock, f_Label8, lblUpdateStatus, cmdSave;
  f_HTMLPanel1 = new HTMLPanel_0($html1_9(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord12 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord12.origParent?$insertBefore(attachRecord12.origParent, attachRecord12.element, attachRecord12.origSibling):orphan(attachRecord12.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_8(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, "GESTION DE L'ACCES", false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_8(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 3) , $resizeRows(f_Grid4, 4) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, "Bloquer automatiquement l'acc\xE8s au syst\xE8me le", false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (lstDays = new ListBox_0 , this$static.owner.lstDays = lstDays , lstDays)) , $setWidget_1(f_Grid4, 0, 2, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'tous les mois.', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, "Bloquer l'acc\xE8s d\xE8s MAINTENANT", false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 1, 1, (blnBlock = new SimpleCheckBox_0 , this$static.owner.blnBlock = blnBlock , blnBlock)) , $setWidget_1(f_Grid4, 2, 0, (f_Label8 = new Label_0 , $setTextOrHtml(f_Label8.directionalTextHelper, '', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 2, 1, (lblUpdateStatus = new Label_0 , this$static.owner.lblUpdateStatus = lblUpdateStatus , lblUpdateStatus)) , $setWidget_1(f_Grid4, 3, 0, new Label_0) , $setWidget_1(f_Grid4, 3, 1, (cmdSave = new Button_0 , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , f_Grid4.tableElem['cellPadding'] = 10 , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function SettingsView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new SettingsView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1023, 1, {}, SettingsView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function SettingsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1024, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SettingsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_27(event_0){
  $onCmdSaveClick(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_9(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$timetracking$client$view$SettingsView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$SettingsView$_annotation$$none$$) {
    result = new SettingsView_0(new SettingsView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$SettingsView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$SettingsView$_annotation$$none$$;
}

function $save_3(this$static, optionName, optionValue){
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

defineSeed(1124, 611, makeCastMap([Q$AbstractRequest]), SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_21(){
  return new RequestData_0('wtxSs$uzFmur4x3itVwd9YzGzUA=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$optionName, this.val$optionValue]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$optionName = null;
_.val$optionValue = null;
var Lcom_lemania_timetracking_client_presenter_SettingsPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'SettingsPresenter', 826), Lcom_lemania_timetracking_client_presenter_SettingsPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'SettingsPresenter$1', 827), Lcom_lemania_timetracking_client_presenter_SettingsPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'SettingsPresenter$2', 828), Lcom_lemania_timetracking_client_presenter_SettingsPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'SettingsPresenter$3', 829), Lcom_lemania_timetracking_client_view_SettingsView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'SettingsView', 1021), Lcom_lemania_timetracking_client_view_SettingsView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'SettingsView_BinderImpl', 1022), Lcom_lemania_timetracking_client_view_SettingsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'SettingsView_BinderImpl$Widgets', 1023), Lcom_lemania_timetracking_client_view_SettingsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'SettingsView_BinderImpl$Widgets$1', 1024), Lcom_lemania_timetracking_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl$4X', 1124);
$entry(onLoad)(13);
