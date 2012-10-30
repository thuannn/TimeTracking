function CoursAddedEvent_0(){
  $clinit_CoursAddedEvent();
}

function CoursAddedEvent(){
}

_ = CoursAddedEvent_0.prototype = CoursAddedEvent.prototype = new GwtEvent;
_.dispatch_0 = function dispatch_31(handler){
  dynamicCast(handler, Q$CoursAddedEvent$CoursAddedHandler).onCoursAdded(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_32(){
  return TYPE_31;
}
;
_.getClass$ = function getClass_488(){
  return Lcom_lemania_timetracking_client_event_CoursAddedEvent_2_classLit;
}
;
function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$CoursAddPresenter_CoursAddPresenter_methodInjection(_0, _1){
  return new CoursAddPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$CoursAddPresenter_CoursAddPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursAddView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursAddView$_annotation$$none$$ = new CoursAddView_0(new CoursAddView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursAddView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$ = new CoursAddPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$2$1.prototype;
_.onSuccess = function onSuccess_7(){
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
  $initialize(rf, this$static.eventBus, new DefaultRequestTransport_0);
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  this$static.cours = dynamicCast($create_1(rc, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit), Q$CoursProxy);
  this$static.cours.setCoursNom(coursNom);
  this$static.cours.setCoursActif(coursActif);
  $fire($save(rc, this$static.cours, ecoleId), new CoursAddPresenter$2_0(this$static));
}

function CoursAddPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$CoursAddPresenter$MyView).setUiHandlers(this);
}

function CoursAddPresenter(){
}

_ = CoursAddPresenter_0.prototype = CoursAddPresenter.prototype = new Presenter;
_.getClass$ = function getClass_525(){
  return Lcom_lemania_timetracking_client_presenter_CoursAddPresenter_2_classLit;
}
;
_.onBind = function onBind_2(){
  var rc, rf;
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new DefaultRequestTransport_0);
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_1(rc), new CoursAddPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_0(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$CoursAddUiHandler]);
_.cours = null;
function $onSuccess_1(this$static, response){
  $populateEcoleList(dynamicCast(this$static.this$0.view, Q$CoursAddPresenter$MyView), response);
}

function CoursAddPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function CoursAddPresenter$1(){
}

_ = CoursAddPresenter$1_0.prototype = CoursAddPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_526(){
  return Lcom_lemania_timetracking_client_presenter_CoursAddPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_14(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_14(response){
  $onSuccess_1(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_2(this$static){
  $doFire(this$static.this$0.eventBus, new CoursAddedEvent_0, null);
}

function CoursAddPresenter$2_0(this$0){
  this.this$0 = this$0;
}

function CoursAddPresenter$2(){
}

_ = CoursAddPresenter$2_0.prototype = CoursAddPresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_527(){
  return Lcom_lemania_timetracking_client_presenter_CoursAddPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_15(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_15(response){
  $onSuccess_2(this, throwClassCastExceptionUnlessNull(response));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
_ = CoursPresenter.prototype;
_.onCoursAdded = function onCoursAdded(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!cours', true);
}
;
_ = CoursPresenterMyProxyImpl.prototype;
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

function CoursPresenterMyProxyImpl$1(){
}

_ = CoursPresenterMyProxyImpl$1_0.prototype = CoursPresenterMyProxyImpl$1.prototype = new NotifyingAsyncCallback;
_.getClass$ = function getClass_535(){
  return Lcom_lemania_timetracking_client_presenter_CoursPresenterMyProxyImpl$1_2_classLit;
}
;
_.success = function success_1(presenter){
  $success(dynamicCast(presenter, Q$CoursPresenter));
}
;
function CoursPresenterMyProxyImpl$1$1_0(){
}

function CoursPresenterMyProxyImpl$1$1(){
}

_ = CoursPresenterMyProxyImpl$1$1_0.prototype = CoursPresenterMyProxyImpl$1$1.prototype = new Object_0;
_.execute_1 = function execute_27(){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!cours', true);
}
;
_.getClass$ = function getClass_536(){
  return Lcom_lemania_timetracking_client_presenter_CoursPresenterMyProxyImpl$1$1_2_classLit;
}
;
function $onCmdAjouterClicked(this$static){
  !!this$static.uiHandlers && $coursAdd(dynamicCast(this$static.uiHandlers, Q$CoursAddUiHandler), $trim($getPropertyString(this$static.txtCoursNom.element, 'value')), $getValue_0(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex), $getValue(this$static.chkActif));
}

function $onCmdAnnulerClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$CoursAddUiHandler) , $clinit_History() , !!impl_2 && $newItem(impl_2, '!cours', true));
}

function $populateEcoleList(this$static, ecoles){
  var i;
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (i = 0; i < ecoles.size_1(); ++i)
    $insertItem(this$static.lstEcoles, dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getSchoolName(), '' + toString_6(dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getId_0().value_0), -1);
}

function CoursAddView_0(){
  this.widget = $createAndBindUi(this);
}

function CoursAddView(){
}

_ = CoursAddView_0.prototype = CoursAddView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_2(){
  return this.widget;
}
;
_.getClass$ = function getClass_616(){
  return Lcom_lemania_timetracking_client_view_CoursAddView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$CoursAddPresenter$MyView]);
_.chkActif = null;
_.lstEcoles = null;
_.txtCoursNom = null;
_.widget = null;
function $createAndBindUi(owner){
  var attachRecord0, chkActif, cmdAjouter, cmdAnnuler, domId0, domId0Element, f_Grid4, f_HTMLPanel1, f_HorizontalPanel9, f_Label3, f_Label5, f_Label6, f_Label7, f_Label8, f_VerticalPanel2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, lstEcoles, txtCoursNom, sb, sb_0, sb_1;
  domId0 = $createUniqueId($doc);
  f_Label3 = new Label_0;
  f_Label5 = new Label_0;
  txtCoursNom = new TextBox_0;
  f_Label6 = new Label_0;
  lstEcoles = new ListBox_0;
  f_Label7 = new Label_0;
  chkActif = new CheckBox_0;
  f_Label8 = new Label_0;
  cmdAnnuler = new Button_0;
  cmdAjouter = new Button_0;
  f_HorizontalPanel9 = new HorizontalPanel_0;
  f_Grid4 = new Grid_0;
  f_VerticalPanel2 = new VerticalPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  f_Label3.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label3.directionalTextHelper, 'Ajouter un nom de cours');
  $updateHorizontalAlignment(f_Label3);
  $add_8(f_VerticalPanel2, f_Label3);
  $setTextOrHtml(f_Label5.directionalTextHelper, 'Nom de cours :');
  $updateHorizontalAlignment(f_Label5);
  txtCoursNom.element.style['width'] = '250px';
  $setTextOrHtml(f_Label6.directionalTextHelper, "Nom d'\xE9cole :");
  $updateHorizontalAlignment(f_Label6);
  $setTextOrHtml(f_Label7.directionalTextHelper, 'Actif :');
  $updateHorizontalAlignment(f_Label7);
  $setHorizontalAlignment_0(f_HorizontalPanel9, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  $setHTML(cmdAnnuler, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Annuler' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html);
  $add_6(f_HorizontalPanel9, cmdAnnuler);
  $setHTML(cmdAjouter, (sb_1 = new StringBuilder_0 , sb_1.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_1.impl.string)).html);
  $add_6(f_HorizontalPanel9, cmdAjouter);
  f_HorizontalPanel9.element.style['width'] = '100%';
  $resizeColumns(f_Grid4);
  $resizeRows(f_Grid4, 4);
  $setWidget_1(f_Grid4, 0, 0, f_Label5);
  $setWidget_1(f_Grid4, 0, 1, txtCoursNom);
  $setWidget_1(f_Grid4, 1, 0, f_Label6);
  $setWidget_1(f_Grid4, 1, 1, lstEcoles);
  $setWidget_1(f_Grid4, 2, 0, f_Label7);
  $setWidget_1(f_Grid4, 2, 1, chkActif);
  $setWidget_1(f_Grid4, 3, 0, f_Label8);
  $setWidget_1(f_Grid4, 3, 1, f_HorizontalPanel9);
  $add_8(f_VerticalPanel2, f_Grid4);
  f_VerticalPanel2.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new CoursAddView_BinderImpl$1_0(owner);
  $addDomHandler(cmdAnnuler, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new CoursAddView_BinderImpl$2_0(owner);
  $addDomHandler(cmdAjouter, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE_0);
  owner.chkActif = chkActif;
  owner.lstEcoles = lstEcoles;
  owner.txtCoursNom = txtCoursNom;
  return f_HTMLPanel1;
}

function CoursAddView_BinderImpl_0(){
}

function CoursAddView_BinderImpl(){
}

_ = CoursAddView_BinderImpl_0.prototype = CoursAddView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_617(){
  return Lcom_lemania_timetracking_client_view_CoursAddView_1BinderImpl_2_classLit;
}
;
function CoursAddView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function CoursAddView_BinderImpl$1(){
}

_ = CoursAddView_BinderImpl$1_0.prototype = CoursAddView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_618(){
  return Lcom_lemania_timetracking_client_view_CoursAddView_1BinderImpl$1_2_classLit;
}
;
_.onClick = function onClick_3(event_0){
  $onCmdAnnulerClicked(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
function CoursAddView_BinderImpl$2_0(val$owner){
  this.val$owner = val$owner;
}

function CoursAddView_BinderImpl$2(){
}

_ = CoursAddView_BinderImpl$2_0.prototype = CoursAddView_BinderImpl$2.prototype = new Object_0;
_.getClass$ = function getClass_619(){
  return Lcom_lemania_timetracking_client_view_CoursAddView_1BinderImpl$2_2_classLit;
}
;
_.onClick = function onClick_4(event_0){
  $onCmdAjouterClicked(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
_ = CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1.prototype;
_.setCoursNom = function setCoursNom(name_0){
  dynamicCast($getWrapped(this.this$0), Q$CoursProxy).setCoursNom(name_0);
}
;
_ = CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2.prototype;
_.setCoursNom = function setCoursNom_0(name_0){
  $setProperty(this.this$0, 'coursNom', name_0);
}
;
function $save(this$static, cours, ecoleId){
  var x;
  x = new CoursRequestFactory_CoursRequestContextImpl$6X_0(this$static, cours, ecoleId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function CoursRequestFactory_CoursRequestContextImpl$6X_0(this$0, val$cours, val$ecoleId){
  this.val$cours = val$cours;
  this.val$ecoleId = val$ecoleId;
  AbstractRequest_0.call(this, this$0);
}

function CoursRequestFactory_CoursRequestContextImpl$6X(){
}

_ = CoursRequestFactory_CoursRequestContextImpl$6X_0.prototype = CoursRequestFactory_CoursRequestContextImpl$6X.prototype = new AbstractRequest;
_.getClass$ = function getClass_746(){
  return Lcom_lemania_timetracking_shared_service_CoursRequestFactory_1CoursRequestContextImpl$6X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_2(){
  return new RequestData_0('yN7F8RR6LGTv$2c$d_vWYQc7I9k=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$cours, this.val$ecoleId]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$cours = null;
_.val$ecoleId = null;
var Lcom_lemania_timetracking_client_event_CoursAddedEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'CoursAddedEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_lemania_timetracking_client_presenter_CoursAddPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursAddPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_CoursAddView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursAddView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_CoursAddPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursAddPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_CoursAddPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursAddPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_CoursPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenterMyProxyImpl$1', Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2_classLit), Lcom_lemania_timetracking_client_presenter_CoursPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenterMyProxyImpl$1$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_CoursAddView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursAddView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_CoursAddView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursAddView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_CoursAddView_1BinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursAddView_BinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_CoursRequestFactory_1CoursRequestContextImpl$6X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl$6X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(7);
