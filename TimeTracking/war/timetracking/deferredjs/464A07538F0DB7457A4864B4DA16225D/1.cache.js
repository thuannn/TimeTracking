function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$ProfsAddPresenter_ProfsAddPresenter_methodInjection(_0, _1){
  return new ProfsAddPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$ProfsAddPresenter_ProfsAddPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$ = new ProfsAddView_0(new ProfsAddView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$ = new ProfsAddPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$1$1.prototype;
_.onSuccess = function onSuccess_1(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $professorAdd(this$static, profName, profStatus){
  var rc, rf;
  if (!profName.length) {
    alert_0('Veuillez saissir le nom du professeur !');
    return;
  }
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new DefaultRequestTransport_0);
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  this$static.prof = dynamicCast($create_1(rc, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit), Q$ProfessorProxy);
  this$static.prof.setProfName(profName);
  this$static.prof.setProfActive(profStatus);
  $fire($save_3(rc, this$static.prof), new ProfsAddPresenter$1_0(this$static));
}

function ProfsAddPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$ProfsAddPresenter$MyView).setUiHandlers(this);
}

function ProfsAddPresenter(){
}

_ = ProfsAddPresenter_0.prototype = ProfsAddPresenter.prototype = new Presenter;
_.getClass$ = function getClass_583(){
  return Lcom_lemania_timetracking_client_presenter_ProfsAddPresenter_2_classLit;
}
;
_.onBind = function onBind_11(){
}
;
_.onReset = function onReset_5(){
  $initializeUi_0(dynamicCast(this.view, Q$ProfsAddPresenter$MyView));
}
;
_.revealInParent = function revealInParent_9(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$ProfessorAddUiHandler]);
_.prof = null;
function $onSuccess_16(this$static){
  dynamicCast(dynamicCast(this$static.this$0.view, Q$ProfsAddPresenter$MyView), Q$ProfsAddView).cmdAdd.element['disabled'] = !false;
}

function ProfsAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function ProfsAddPresenter$1(){
}

_ = ProfsAddPresenter$1_0.prototype = ProfsAddPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_584(){
  return Lcom_lemania_timetracking_client_presenter_ProfsAddPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_32(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_32(response){
  $onSuccess_16(this, throwClassCastExceptionUnlessNull(response));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $initializeUi_0(this$static){
  $setText_2(this$static.txtProfName, '');
  $setEnabled(this$static.cmdAdd, true);
}

function $onCmdAddClicked_0(this$static){
  !!this$static.uiHandlers && $professorAdd(dynamicCast(this$static.uiHandlers, Q$ProfessorAddUiHandler), $trim($getPropertyString(this$static.txtProfName.element, 'value')), $getValue(this$static.chkProfStatus));
}

function $onCmdCancelClicked_1(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$ProfessorAddUiHandler) , $clinit_History() , !!impl_2 && $newItem(impl_2, '!profs', true));
}

function ProfsAddView_0(){
  this.widget = $createAndBindUi_4(this);
}

function ProfsAddView(){
}

_ = ProfsAddView_0.prototype = ProfsAddView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_11(){
  return this.widget;
}
;
_.getClass$ = function getClass_695(){
  return Lcom_lemania_timetracking_client_view_ProfsAddView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ProfsAddPresenter$MyView, Q$ProfsAddView]);
_.chkProfStatus = null;
_.cmdAdd = null;
_.txtProfName = null;
_.widget = null;
function $createAndBindUi_4(owner){
  var attachRecord0, chkProfStatus, cmdAdd, cmdCancel, domId0, domId0Element, f_Grid5, f_HTMLPanel1, f_HorizontalPanel4, f_HorizontalPanel9, f_Label3, f_Label6, f_Label7, f_Label8, f_VerticalPanel2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, txtProfName, sb, sb_0, sb_1;
  domId0 = $createUniqueId($doc);
  f_Label3 = new Label_0;
  f_Label6 = new Label_0;
  txtProfName = new TextBox_0;
  f_Label7 = new Label_0;
  chkProfStatus = new CheckBox_0;
  f_Label8 = new Label_0;
  cmdCancel = new Button_0;
  cmdAdd = new Button_0;
  f_HorizontalPanel9 = new HorizontalPanel_0;
  f_Grid5 = new Grid_0;
  f_HorizontalPanel4 = new HorizontalPanel_0;
  f_VerticalPanel2 = new VerticalPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  f_Label3.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label3.directionalTextHelper, 'Ajouter un professeur');
  $updateHorizontalAlignment(f_Label3);
  f_Label3.element.style['width'] = '';
  $add_8(f_VerticalPanel2, f_Label3);
  $setTextOrHtml(f_Label6.directionalTextHelper, 'Nom :');
  $updateHorizontalAlignment(f_Label6);
  txtProfName.element.style['width'] = '270px';
  $setTextOrHtml(f_Label7.directionalTextHelper, 'Active :');
  $updateHorizontalAlignment(f_Label7);
  $setValue_0(chkProfStatus, ($clinit_Boolean() , $clinit_Boolean() , TRUE));
  $setHorizontalAlignment_0(f_HorizontalPanel9, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  $setHTML(cmdCancel, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Annuler' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html);
  $add_6(f_HorizontalPanel9, cmdCancel);
  $setHTML(cmdAdd, (sb_1 = new StringBuilder_0 , sb_1.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_1.impl.string)).html);
  $add_6(f_HorizontalPanel9, cmdAdd);
  f_HorizontalPanel9.element.style['width'] = '100%';
  $resizeColumns(f_Grid5);
  $resizeRows(f_Grid5, 3);
  $setWidget_1(f_Grid5, 0, 0, f_Label6);
  $setWidget_1(f_Grid5, 0, 1, txtProfName);
  $setWidget_1(f_Grid5, 1, 0, f_Label7);
  $setWidget_1(f_Grid5, 1, 1, chkProfStatus);
  $setWidget_1(f_Grid5, 2, 0, f_Label8);
  $setWidget_1(f_Grid5, 2, 1, f_HorizontalPanel9);
  f_Grid5.element.style['width'] = '320px';
  $add_6(f_HorizontalPanel4, f_Grid5);
  f_HorizontalPanel4.element.style['width'] = '800px';
  $add_8(f_VerticalPanel2, f_HorizontalPanel4);
  f_VerticalPanel2.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfsAddView_BinderImpl$1_0(owner);
  $addDomHandler(cmdCancel, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfsAddView_BinderImpl$2_0(owner);
  $addDomHandler(cmdAdd, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0);
  owner.chkProfStatus = chkProfStatus;
  owner.cmdAdd = cmdAdd;
  owner.txtProfName = txtProfName;
  return f_HTMLPanel1;
}

function ProfsAddView_BinderImpl_0(){
}

function ProfsAddView_BinderImpl(){
}

_ = ProfsAddView_BinderImpl_0.prototype = ProfsAddView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_696(){
  return Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl_2_classLit;
}
;
function ProfsAddView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function ProfsAddView_BinderImpl$1(){
}

_ = ProfsAddView_BinderImpl$1_0.prototype = ProfsAddView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_697(){
  return Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl$1_2_classLit;
}
;
_.onClick = function onClick_27(event_0){
  $onCmdCancelClicked_1(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
function ProfsAddView_BinderImpl$2_0(val$owner){
  this.val$owner = val$owner;
}

function ProfsAddView_BinderImpl$2(){
}

_ = ProfsAddView_BinderImpl$2_0.prototype = ProfsAddView_BinderImpl$2.prototype = new Object_0;
_.getClass$ = function getClass_698(){
  return Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl$2_2_classLit;
}
;
_.onClick = function onClick_28(event_0){
  $onCmdAddClicked_0(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
_ = ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1.prototype;
_.setProfName = function setProfName(profName){
  dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).setProfName(profName);
}
;
_ = ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2.prototype;
_.setProfName = function setProfName_0(profName){
  $setProperty(this.this$0, 'profName', profName);
}
;
function $save_3(this$static, prof){
  var x;
  x = new ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0(this$static, prof);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0(this$0, val$prof){
  this.val$prof = val$prof;
  AbstractRequest_0.call(this, this$0);
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$5X(){
}

_ = ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0.prototype = ProfessorRequestFactory_ProfessorRequestContextImpl$5X.prototype = new AbstractRequest;
_.getClass$ = function getClass_819(){
  return Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$5X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_20(){
  return new RequestData_0('IAiZWd5l08yJfHM9yN8_PPbImY4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$prof]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$prof = null;
var Lcom_lemania_timetracking_client_presenter_ProfsAddPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsAddPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_ProfsAddView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsAddView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_ProfsAddPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsAddPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsAddView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsAddView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsAddView_BinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$5X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$5X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(1);
