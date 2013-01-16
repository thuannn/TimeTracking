function $professorAdd(this$static, profName, profStatus){
  var rc, rf;
  if (!profName.length) {
    alert_0('Veuillez saissir le nom du professeur !');
    return;
  }
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  this$static.prof = dynamicCast($create_1(rc, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit), Q$ProfessorProxy);
  this$static.prof.setProfName(profName);
  this$static.prof.setProfActive(profStatus);
  $fire($save_3(rc, this$static.prof), new ProfsAddPresenter$1_0(this$static));
}

function $professorAddCancelled(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!profs', true);
}

function ProfsAddPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$ProfsAddPresenter$MyView).setUiHandlers(this);
}

defineSeed(817, 692, makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$ProfessorAddUiHandler]), ProfsAddPresenter_0);
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
_.prof = null;
function $onSuccess_20(this$static){
  dynamicCast(dynamicCast(this$static.this$0.view, Q$ProfsAddPresenter$MyView), Q$ProfsAddView).cmdAdd.element['disabled'] = !false;
}

function ProfsAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(818, 631, makeCastMap([Q$Receiver]), ProfsAddPresenter$1_0);
_.onFailure_0 = function onFailure_20(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_20(response){
  $onSuccess_20(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
function $com$lemania$timetracking$client$presenter$ProfsAddPresenter_com$lemania$timetracking$client$presenter$ProfsAddPresenter_methodInjection(_0, _1){
  return new ProfsAddPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$) {
    result = $com$lemania$timetracking$client$presenter$ProfsAddPresenter_com$lemania$timetracking$client$presenter$ProfsAddPresenter_methodInjection($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$;
}

defineSeed(915, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_65(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeUi_0(this$static){
  $setText_2(this$static.txtProfName, '');
  $setEnabled(this$static.cmdAdd, true);
}

function $onCmdAddClicked_0(this$static){
  !!this$static.uiHandlers && $professorAdd(dynamicCast(this$static.uiHandlers, Q$ProfessorAddUiHandler), $trim($getPropertyString(this$static.txtProfName.element, 'value')), $getValue_0(this$static.chkProfStatus));
}

function $onCmdCancelClicked_1(this$static){
  !!this$static.uiHandlers && $professorAddCancelled(dynamicCast(this$static.uiHandlers, Q$ProfessorAddUiHandler));
}

function ProfsAddView_0(){
  this.widget = $build_f_HTMLPanel1_8(new ProfsAddView_BinderImpl$Widgets_0(this));
}

defineSeed(1000, 697, makeCastMap([Q$ProfsAddPresenter$MyView, Q$ProfsAddView]), ProfsAddView_0);
_.asWidget = function asWidget_11(){
  return this.widget;
}
;
_.chkProfStatus = null;
_.cmdAdd = null;
_.txtProfName = null;
_.widget = null;
function ProfsAddView_BinderImpl_0(){
}

defineSeed(1001, 1, {}, ProfsAddView_BinderImpl_0);
function $build_f_HTMLPanel1_8(this$static){
  var attachRecord7, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_Grid5, f_Label6, txtProfName, f_Label7, chkProfStatus, f_HorizontalPanel9, cmdCancel, sb, cmdAdd, sb_0;
  f_HTMLPanel1 = new HTMLPanel_0($html3_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord7 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord7.origParent?$insertBefore(attachRecord7.origParent, attachRecord7.element, attachRecord7.origSibling):orphan(attachRecord7.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_8(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Ajouter un professeur') , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '' , f_Label3)) , $add_8(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_6(f_HorizontalPanel4, (f_Grid5 = new Grid_0 , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 3) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Nom :') , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (txtProfName = new TextBox_0 , txtProfName.element.style['width'] = '270px' , this$static.owner.txtProfName = txtProfName , txtProfName)) , $setWidget_1(f_Grid5, 1, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Active :') , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid5, 1, 1, (chkProfStatus = new CheckBox_0 , $setValue_0(chkProfStatus, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkProfStatus = chkProfStatus , chkProfStatus)) , $setWidget_1(f_Grid5, 2, 0, new Label_0) , $setWidget_1(f_Grid5, 2, 1, (f_HorizontalPanel9 = new HorizontalPanel_0 , $setHorizontalAlignment(f_HorizontalPanel9, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT)) , $add_6(f_HorizontalPanel9, (cmdCancel = new Button_0 , $setHTML(cmdCancel, (sb = new StringBuilder_0 , sb.impl.string += 'Annuler' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $addDomHandler(cmdCancel, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCancel)) , $add_6(f_HorizontalPanel9, (cmdAdd = new Button_0 , $setHTML(cmdAdd, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html) , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , this$static.owner.cmdAdd = cmdAdd , cmdAdd)) , f_HorizontalPanel9.element.style['width'] = '100%' , f_HorizontalPanel9)) , f_Grid5.element.style['width'] = '320px' , f_Grid5)) , f_HorizontalPanel4.element.style['width'] = '800px' , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ProfsAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfsAddView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfsAddView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1002, 1, {}, ProfsAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfsAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1003, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfsAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_28(event_0){
  $onCmdCancelClicked_1(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsAddView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1004, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfsAddView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_29(event_0){
  $onCmdAddClicked_0(this.this$1.owner);
}
;
_.this$1 = null;
function $html3_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$) {
    result = new ProfsAddView_0(new ProfsAddView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$;
}

function $save_3(this$static, prof){
  var x;
  x = new ProfessorRequestFactory_ProfessorRequestContextImpl$6X_0(this$static, prof);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$6X_0(this$0, val$prof){
  this.val$prof = val$prof;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1151, 635, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_20(){
  return new RequestData_0('IAiZWd5l08yJfHM9yN8_PPbImY4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$prof]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$prof = null;
var Lcom_lemania_timetracking_client_presenter_ProfsAddPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsAddPresenter', 817), Lcom_lemania_timetracking_client_presenter_ProfsAddPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsAddPresenter$1', 818), Lcom_lemania_timetracking_client_view_ProfsAddView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsAddView', 1000), Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsAddView_BinderImpl', 1001), Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsAddView_BinderImpl$Widgets', 1002), Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsAddView_BinderImpl$Widgets$1', 1003), Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsAddView_BinderImpl$Widgets$2', 1004), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$6X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$6X', 1151);
$entry(onLoad)(8);
