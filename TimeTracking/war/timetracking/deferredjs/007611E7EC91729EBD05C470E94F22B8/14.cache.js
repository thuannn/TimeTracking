function CoursAddedEvent_0(){
  $clinit_CoursAddedEvent();
}

defineSeed(743, 221, {}, CoursAddedEvent_0);
_.dispatch_0 = function dispatch_34(handler){
  dynamicCast(handler, Q$CoursAddedEvent$CoursAddedHandler).onCoursAdded(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_35(){
  return TYPE_34;
}
;
function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$CoursAddPresenter_CoursAddPresenter_methodInjection(_0, _1){
  return new CoursAddPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$CoursAddPresenter_CoursAddPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursAddView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursAddView$_annotation$$none$$ = new CoursAddView_0(new CoursAddView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursAddView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$ = new CoursAddPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$_annotation$$none$$;
}

defineSeed(760, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_6(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $coursAdd(this$static, coursNom, ecoleId, coursActif){
  var rc, rf;
  if (!coursNom.length) {
    alert_0('Veuillez saissir le nom du cours.');
    return;
  }
  if (!ecoleId.length) {
    alert_0("Veuillez choisir le nom de l'\uFFFDcole.");
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  this$static.cours = dynamicCast($create_1(rc, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit), Q$CoursProxy);
  this$static.cours.setCoursNom(coursNom);
  this$static.cours.setCoursActif(coursActif);
  $fire($save(rc, this$static.cours, ecoleId), new CoursAddPresenter$2_0(this$static));
}

function $coursAddCancel(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!cours', true);
}

function CoursAddPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$CoursAddPresenter$MyView).setUiHandlers(this);
}

defineSeed(788, 695, makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$CoursAddUiHandler]), CoursAddPresenter_0);
_.onBind = function onBind_2(){
  var rf, rc;
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_1(rc), new CoursAddPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_0(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.cours = null;
function $onSuccess_1(this$static, response){
  $populateEcoleList(dynamicCast(this$static.this$0.view, Q$CoursAddPresenter$MyView), response);
}

function CoursAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(789, 634, makeCastMap([Q$Receiver]), CoursAddPresenter$1_0);
_.onFailure_0 = function onFailure_18(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_18(response){
  $onSuccess_1(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_2(this$static){
  $doFire(this$static.this$0.eventBus, new CoursAddedEvent_0, null);
}

function CoursAddPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(790, 634, makeCastMap([Q$Receiver]), CoursAddPresenter$2_0);
_.onFailure_0 = function onFailure_19(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_19(response){
  $onSuccess_2(this, throwClassCastExceptionUnlessNull(response));
}
;
_.this$0 = null;
defineSeed(798, 723, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$Place, Q$CoursAddedEvent$CoursAddedHandler]));
_.onCoursAdded = function onCoursAdded_0(event_0){
  $getPresenter_0(this, new CoursPresenterMyProxyImpl$1_0(this.eventBus));
}
;
function $success(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new CoursPresenterMyProxyImpl$1$1_0);
}

function CoursPresenterMyProxyImpl$1_0($anonymous0){
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(799, 707, {}, CoursPresenterMyProxyImpl$1_0);
_.success = function success_1(presenter){
  $success(dynamicCast(presenter, Q$CoursPresenter));
}
;
function CoursPresenterMyProxyImpl$1$1_0(){
}

defineSeed(800, 1, {}, CoursPresenterMyProxyImpl$1$1_0);
_.execute_0 = function execute_29(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!cours', true);
}
;
function $onCmdAjouterClicked(this$static){
  !!this$static.uiHandlers && $coursAdd(dynamicCast(this$static.uiHandlers, Q$CoursAddUiHandler), $trim($getPropertyString(this$static.txtCoursNom.element, 'value')), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex), $getValue_0(this$static.chkActif));
}

function $onCmdAnnulerClicked(this$static){
  !!this$static.uiHandlers && $coursAddCancel(dynamicCast(this$static.uiHandlers, Q$CoursAddUiHandler));
}

function $populateEcoleList(this$static, ecoles){
  var i;
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (i = 0; i < ecoles.size_1(); ++i)
    $insertItem(this$static.lstEcoles, dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getSchoolName(), '' + toString_6(dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getId_0().value_0), -1);
}

function CoursAddView_0(){
  this.widget = $build_f_HTMLPanel1_0(new CoursAddView_BinderImpl$Widgets_0(this));
}

defineSeed(916, 700, makeCastMap([Q$CoursAddPresenter$MyView]), CoursAddView_0);
_.asWidget = function asWidget_2(){
  return this.widget;
}
;
_.chkActif = null;
_.lstEcoles = null;
_.txtCoursNom = null;
_.widget = null;
function CoursAddView_BinderImpl_0(){
}

defineSeed(917, 1, {}, CoursAddView_BinderImpl_0);
function $build_f_HTMLPanel1_0(this$static){
  var attachRecord0, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, txtCoursNom, f_Label6, lstEcoles, f_Label7, chkActif, f_HorizontalPanel9, cmdAnnuler, sb, cmdAjouter, sb_0;
  f_HTMLPanel1 = new HTMLPanel_0($html3(this$static.domId0).html);
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_8(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Ajouter un nom de cours') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_8(f_VerticalPanel2, (f_Grid4 = new Grid_0 , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 4) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom de cours :') , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 0, 1, (txtCoursNom = new TextBox_0 , txtCoursNom.element.style['width'] = '250px' , this$static.owner.txtCoursNom = txtCoursNom , txtCoursNom)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, "Nom d'\xE9cole :") , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (lstEcoles = new ListBox_0 , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , $setWidget_1(f_Grid4, 2, 0, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Actif :') , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 2, 1, (chkActif = new CheckBox_0 , this$static.owner.chkActif = chkActif , chkActif)) , $setWidget_1(f_Grid4, 3, 0, new Label_0) , $setWidget_1(f_Grid4, 3, 1, (f_HorizontalPanel9 = new HorizontalPanel_0 , $setHorizontalAlignment(f_HorizontalPanel9, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT)) , $add_6(f_HorizontalPanel9, (cmdAnnuler = new Button_0 , $setHTML(cmdAnnuler, (sb = new StringBuilder_0 , $append_1(sb.data, 'Annuler') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $addDomHandler(cmdAnnuler, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAnnuler)) , $add_6(f_HorizontalPanel9, (cmdAjouter = new Button_0 , $setHTML(cmdAjouter, (sb_0 = new StringBuilder_0 , $append_1(sb_0.data, 'Ajouter') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $addDomHandler(cmdAjouter, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0) , cmdAjouter)) , f_HorizontalPanel9.element.style['width'] = '100%' , f_HorizontalPanel9)) , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function CoursAddView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new CoursAddView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new CoursAddView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(918, 1, {}, CoursAddView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function CoursAddView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(919, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), CoursAddView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_3(event_0){
  $onCmdAnnulerClicked(this.this$1.owner);
}
;
_.this$1 = null;
function CoursAddView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(920, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), CoursAddView_BinderImpl$Widgets$2_0);
_.onClick = function onClick_4(event_0){
  $onCmdAjouterClicked(this.this$1.owner);
}
;
_.this$1 = null;
function $html3(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $save(this$static, cours, ecoleId){
  var x;
  x = new CoursRequestFactory_CoursRequestContextImpl$7X_0(this$static, cours, ecoleId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function CoursRequestFactory_CoursRequestContextImpl$7X_0(this$0, val$cours, val$ecoleId){
  this.val$cours = val$cours;
  this.val$ecoleId = val$ecoleId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1114, 638, makeCastMap([Q$AbstractRequest]), CoursRequestFactory_CoursRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_2(){
  return new RequestData_0('yN7F8RR6LGTv$2c$d_vWYQc7I9k=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$cours, this.val$ecoleId]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.val$cours = null;
_.val$ecoleId = null;
var Lcom_lemania_timetracking_client_presenter_CoursAddPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursAddPresenter', 788), Lcom_lemania_timetracking_client_presenter_CoursAddPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursAddPresenter$1', 789), Lcom_lemania_timetracking_client_presenter_CoursAddPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursAddPresenter$2', 790), Lcom_lemania_timetracking_client_event_CoursAddedEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'CoursAddedEvent', 743), Lcom_lemania_timetracking_client_view_CoursAddView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursAddView', 916), Lcom_lemania_timetracking_client_presenter_CoursPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenterMyProxyImpl$1', 799), Lcom_lemania_timetracking_client_presenter_CoursPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenterMyProxyImpl$1$1', 800), Lcom_lemania_timetracking_client_view_CoursAddView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursAddView_BinderImpl', 917), Lcom_lemania_timetracking_client_view_CoursAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursAddView_BinderImpl$Widgets', 918), Lcom_lemania_timetracking_client_view_CoursAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursAddView_BinderImpl$Widgets$1', 919), Lcom_lemania_timetracking_client_view_CoursAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursAddView_BinderImpl$Widgets$2', 920), Lcom_lemania_timetracking_shared_service_CoursRequestFactory_1CoursRequestContextImpl$7X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl$7X', 1114);
$entry(onLoad)(14);
