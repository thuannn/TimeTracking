function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$ExtractDataPresenter_ExtractDataPresenter_methodInjection(_0, _1){
  return new ExtractDataPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$ExtractDataPresenter_ExtractDataPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$ = new ExtractDataView_0(new ExtractDataView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$MyProxy$_annotation$$none$$ = new ExtractDataPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$15$1.prototype;
_.onSuccess = function onSuccess_7(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onDepartmentSelected(this$static, deptId){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllByCourse(rc, deptId), new ExtractDataPresenter$2_0(this$static));
}

function $onProfSelected(this$static, profId){
  var rcl, rfl, x;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire((x = new LogRequestFactory_LogRequestContextImpl$8X_0(rcl, profId) , $addInvocation(rcl.state.dialect, x) , x), new ExtractDataPresenter$3_0(this$static));
}

function ExtractDataPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function ExtractDataPresenter(){
}

_ = ExtractDataPresenter_0.prototype = ExtractDataPresenter.prototype = new Presenter;
_.getClass$ = function getClass_558(){
  return Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter_2_classLit;
}
;
_.onBind = function onBind_6(){
  dynamicCast(this.view, Q$ExtractDataPresenter$MyView).setUiHandlers(this);
  $initializeTable_1(dynamicCast(this.view, Q$ExtractDataPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_1(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_2(){
  var rc, rf;
  $removeAllRows(dynamicCast(dynamicCast(this.view, Q$ExtractDataPresenter$MyView), Q$ExtractDataView).tblLogs);
  dynamicCast(dynamicCast(this.view, Q$ExtractDataPresenter$MyView), Q$ExtractDataView).lstProfs.element.options.length = 0;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($getDepartments(rc, this.currentUser.userId), new ExtractDataPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_4(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ExtractDataPresenter, Q$ExtractDataUiHandler]);
_.currentUser = null;
function $onSuccess_9(this$static, response){
  $setDepartmentList(dynamicCast(this$static.this$0.view, Q$ExtractDataPresenter$MyView), response);
}

function ExtractDataPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function ExtractDataPresenter$1(){
}

_ = ExtractDataPresenter$1_0.prototype = ExtractDataPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_559(){
  return Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_26(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_26(response){
  $onSuccess_9(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_10(this$static, response){
  $setProfList(dynamicCast(this$static.this$0.view, Q$ExtractDataPresenter$MyView), response);
}

function ExtractDataPresenter$2_0(this$0){
  this.this$0 = this$0;
}

function ExtractDataPresenter$2(){
}

_ = ExtractDataPresenter$2_0.prototype = ExtractDataPresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_560(){
  return Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_27(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_27(response){
  $onSuccess_10(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_11(this$static, response){
  $setLogData(dynamicCast(this$static.this$0.view, Q$ExtractDataPresenter$MyView), response);
}

function ExtractDataPresenter$3_0(this$0){
  this.this$0 = this$0;
}

function ExtractDataPresenter$3(){
}

_ = ExtractDataPresenter$3_0.prototype = ExtractDataPresenter$3.prototype = new Receiver;
_.getClass$ = function getClass_561(){
  return Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$3_2_classLit;
}
;
_.onFailure_0 = function onFailure_28(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_28(response){
  $onSuccess_11(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $initializeTable_1(this$static){
  $setWidth(this$static.tblLogs, '90%');
  $setText(this$static.tblLogs, 0, 0, 'Ann\xE9e');
  $setText(this$static.tblLogs, 0, 1, 'Mois');
  $setText(this$static.tblLogs, 0, 2, 'D\xE9partement');
  $setText(this$static.tblLogs, 0, 3, 'Type');
  $setText(this$static.tblLogs, 0, 4, 'Totale');
  $setText(this$static.tblLogs, 0, 5, 'Remarque');
}

function $onListDepartmentsSelected(this$static){
  $removeAllRows(this$static.tblLogs);
  $selectClear(this$static.lstProfs.element);
  if ($equals_5($getValue_0(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onDepartmentSelected(dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler), $getValue_0(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex));
}

function $onListProfsSelected(this$static){
  $removeAllRows(this$static.tblLogs);
  if ($equals_5($getValue_0(this$static.lstProfs, this$static.lstProfs.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onProfSelected(dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler), ($getValue_0(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex) , $getValue_0(this$static.lstProfs, this$static.lstProfs.element.selectedIndex)));
}

function $setDepartmentList(this$static, depts){
  var i;
  $selectClear(this$static.lstDepartments.element);
  $insertItem(this$static.lstDepartments, '', '', -1);
  for (i = 0; i < depts.size_1(); ++i)
    $insertItem(this$static.lstDepartments, dynamicCast(depts.get_0(i), Q$CoursProxy).getSchoolName() + ' - ' + dynamicCast(depts.get_0(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(depts.get_0(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $setLogData(this$static, logs){
  var i, prevDept, prevMonth, prevYear;
  $initializeTable_1(this$static);
  prevYear = 0;
  prevMonth = 0;
  prevDept = '';
  for (i = 0; i < logs.size_1(); ++i) {
    prevYear != dynamicCast(logs.get_0(i), Q$LogProxy).getYear() && $setText(this$static.tblLogs, i + 1, 0, '' + dynamicCast(logs.get_0(i), Q$LogProxy).getYear());
    if (prevMonth != dynamicCast(logs.get_0(i), Q$LogProxy).getMonth_0() || !$equals_5(prevDept, dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName())) {
      $setText(this$static.tblLogs, i + 1, 1, '' + dynamicCast(logs.get_0(i), Q$LogProxy).getMonth_0());
      $setText(this$static.tblLogs, i + 1, 2, dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName());
    }
    $setText(this$static.tblLogs, i + 1, 3, dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName());
    $setText(this$static.tblLogs, i + 1, 4, $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'Frais')?dynamicCast(logs.get_0(i), Q$LogProxy).getHour() > 0?'CHF ' + dynamicCast(logs.get_0(i), Q$LogProxy).getHour():'':dynamicCast(logs.get_0(i), Q$LogProxy).getHour() > 0?'' + dynamicCast(logs.get_0(i), Q$LogProxy).getHour():'');
    $setText(this$static.tblLogs, i + 1, 5, dynamicCast(logs.get_0(i), Q$LogProxy).getMemo());
    prevYear = dynamicCast(logs.get_0(i), Q$LogProxy).getYear();
    prevMonth = dynamicCast(logs.get_0(i), Q$LogProxy).getMonth_0();
    prevDept = dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName();
  }
  $styleTable(this$static);
}

function $setProfList(this$static, profs){
  var p, p$iterator;
  $insertItem(this$static.lstProfs, '', '', -1);
  for (p$iterator = profs.iterator(); p$iterator.hasNext();) {
    p = dynamicCast(p$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstProfs, p.getProfName(), '' + toString_6(p.getId_0().value_0), -1);
  }
}

function $styleTable(this$static){
  var j, k;
  for (j = 0; j < this$static.tblLogs.bodyElem.rows.length; ++j) {
    for (k = 0; k < $getCellCount(this$static.tblLogs, j); ++k) {
      $addStyleName(this$static.tblLogs.cellFormatter, j, k, 'FlexTable-Cell');
    }
  }
}

function ExtractDataView_0(){
  this.widget = $createAndBindUi_1(this);
}

function ExtractDataView(){
}

_ = ExtractDataView_0.prototype = ExtractDataView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_6(){
  return this.widget;
}
;
_.getClass$ = function getClass_677(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ExtractDataPresenter$MyView, Q$ExtractDataView]);
_.lstDepartments = null;
_.lstProfs = null;
_.tblLogs = null;
_.widget = null;
function $createAndBindUi_1(owner){
  var attachRecord0, domId0, domId0Element, f_FlowPanel2, f_HTMLPanel1, f_HorizontalPanel5, f_Label4, f_Label6, f_Label7, f_VerticalPanel3, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, lstDepartments, lstProfs, tblLogs, sb;
  domId0 = $createUniqueId($doc);
  f_Label4 = new Label_0;
  f_Label6 = new Label_0;
  lstDepartments = new ListBox_0;
  f_Label7 = new Label_0;
  lstProfs = new ListBox_0;
  f_HorizontalPanel5 = new HorizontalPanel_0;
  tblLogs = new FlexTable_0;
  f_VerticalPanel3 = new VerticalPanel_0;
  f_FlowPanel2 = new FlowPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  f_Label4.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label4.directionalTextHelper, 'Informations des heures par professeur');
  $updateHorizontalAlignment(f_Label4);
  f_Label4.element.style['height'] = '30';
  f_Label4.element.style['width'] = '830';
  $add_8(f_VerticalPanel3, f_Label4);
  $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $setTextOrHtml(f_Label6.directionalTextHelper, 'D\xE9partements :');
  $updateHorizontalAlignment(f_Label6);
  $add_6(f_HorizontalPanel5, f_Label6);
  $add_6(f_HorizontalPanel5, lstDepartments);
  $setTextOrHtml(f_Label7.directionalTextHelper, 'Professeur :');
  $updateHorizontalAlignment(f_Label7);
  $add_6(f_HorizontalPanel5, f_Label7);
  $add_6(f_HorizontalPanel5, lstProfs);
  f_HorizontalPanel5.element.style['width'] = '80%';
  f_HorizontalPanel5.table['cellSpacing'] = 2;
  $add_8(f_VerticalPanel3, f_HorizontalPanel5);
  tblLogs.element.style['height'] = '100%';
  tblLogs.element.style['width'] = '100%';
  $add_8(f_VerticalPanel3, tblLogs);
  f_VerticalPanel3.element.style['height'] = '';
  f_VerticalPanel3.element.style['width'] = '100%';
  f_VerticalPanel3.table['cellSpacing'] = 2;
  $add_0(f_FlowPanel2, f_VerticalPanel3, f_FlowPanel2.element);
  f_FlowPanel2.element.style['height'] = '100%';
  f_FlowPanel2.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_FlowPanel2, domId0Element);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ExtractDataView_BinderImpl$1_0(owner);
  $addDomHandler(lstDepartments, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ExtractDataView_BinderImpl$2_0(owner);
  $addDomHandler(lstProfs, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE);
  owner.lstDepartments = lstDepartments;
  owner.lstProfs = lstProfs;
  owner.tblLogs = tblLogs;
  return f_HTMLPanel1;
}

function ExtractDataView_BinderImpl_0(){
}

function ExtractDataView_BinderImpl(){
}

_ = ExtractDataView_BinderImpl_0.prototype = ExtractDataView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_678(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl_2_classLit;
}
;
function ExtractDataView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function ExtractDataView_BinderImpl$1(){
}

_ = ExtractDataView_BinderImpl$1_0.prototype = ExtractDataView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_679(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl$1_2_classLit;
}
;
_.onChange = function onChange_0(event_0){
  $onListDepartmentsSelected(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function ExtractDataView_BinderImpl$2_0(val$owner){
  this.val$owner = val$owner;
}

function ExtractDataView_BinderImpl$2(){
}

_ = ExtractDataView_BinderImpl$2_0.prototype = ExtractDataView_BinderImpl$2.prototype = new Object_0;
_.getClass$ = function getClass_680(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl$2_2_classLit;
}
;
_.onChange = function onChange_1(event_0){
  $onListProfsSelected(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function LogRequestFactory_LogRequestContextImpl$8X_0(this$0, val$deptId){
  this.val$deptId = val$deptId;
  AbstractRequest_0.call(this, this$0);
}

function LogRequestFactory_LogRequestContextImpl$8X(){
}

_ = LogRequestFactory_LogRequestContextImpl$8X_0.prototype = LogRequestFactory_LogRequestContextImpl$8X.prototype = new AbstractRequest;
_.getClass$ = function getClass_834(){
  return Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$8X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_12(){
  return new RequestData_0('r7XIrN8gCo7cvZPRVfJpFB8sIck=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$deptId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$deptId = null;
var Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter$3', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$8X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$8X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(7);
