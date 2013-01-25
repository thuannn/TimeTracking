function $onDepartmentSelected(this$static, deptId){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllByCourse(rc, deptId), new ExtractDataPresenter$2_0(this$static));
}

function $onProfSelected(this$static, profId){
  var rcl, rfl, x;
  rfl = new LogRequestFactoryImpl_0;
  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire((x = new LogRequestFactory_LogRequestContextImpl$9X_0(rcl, profId) , $addInvocation(rcl.state.dialect, x) , x), new ExtractDataPresenter$3_0(this$static));
}

function ExtractDataPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(765, 676, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ExtractDataPresenter, Q$ExtractDataUiHandler]), ExtractDataPresenter_0);
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
  var rf, rc;
  $removeAllRows(dynamicCast(dynamicCast(this.view, Q$ExtractDataPresenter$MyView), Q$ExtractDataView).tblLogs);
  dynamicCast(dynamicCast(this.view, Q$ExtractDataPresenter$MyView), Q$ExtractDataView).lstProfs.element.options.length = 0;
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($getDepartments(rc, this.currentUser.userId), new ExtractDataPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_4(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_10(this$static, response){
  $setDepartmentList(dynamicCast(this$static.this$0.view, Q$ExtractDataPresenter$MyView), response);
}

function ExtractDataPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(766, 615, makeCastMap([Q$Receiver]), ExtractDataPresenter$1_0);
_.onFailure_0 = function onFailure_10(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_10(response){
  $onSuccess_10(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_11(this$static, response){
  $setProfList(dynamicCast(this$static.this$0.view, Q$ExtractDataPresenter$MyView), response);
}

function ExtractDataPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(767, 615, makeCastMap([Q$Receiver]), ExtractDataPresenter$2_0);
_.onFailure_0 = function onFailure_11(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_11(response){
  $onSuccess_11(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_12(this$static, response){
  $setLogData(dynamicCast(this$static.this$0.view, Q$ExtractDataPresenter$MyView), response);
}

function ExtractDataPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(768, 615, makeCastMap([Q$Receiver]), ExtractDataPresenter$3_0);
_.onFailure_0 = function onFailure_12(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_12(response){
  $onSuccess_12(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $com$lemania$timetracking$client$presenter$ExtractDataPresenter_com$lemania$timetracking$client$presenter$ExtractDataPresenter_methodInjection(_0, _1){
  return new ExtractDataPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$) {
    result = $com$lemania$timetracking$client$presenter$ExtractDataPresenter_com$lemania$timetracking$client$presenter$ExtractDataPresenter_methodInjection($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$;
}

defineSeed(893, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_60(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
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
  if ($equals_3($getValue_1(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onDepartmentSelected(dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler), $getValue_1(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex));
}

function $onListProfsSelected(this$static){
  $removeAllRows(this$static.tblLogs);
  if ($equals_3($getValue_1(this$static.lstProfs, this$static.lstProfs.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onProfSelected(dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler), ($getValue_1(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex) , $getValue_1(this$static.lstProfs, this$static.lstProfs.element.selectedIndex)));
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
    if (prevMonth != dynamicCast(logs.get_0(i), Q$LogProxy).getMonth_0() || !$equals_3(prevDept, dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName())) {
      $setText(this$static.tblLogs, i + 1, 1, '' + dynamicCast(logs.get_0(i), Q$LogProxy).getMonth_0());
      $setText(this$static.tblLogs, i + 1, 2, dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName());
    }
    $setText(this$static.tblLogs, i + 1, 3, dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName());
    $setText(this$static.tblLogs, i + 1, 4, $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'Frais')?dynamicCast(logs.get_0(i), Q$LogProxy).getHour() > 0?'CHF ' + dynamicCast(logs.get_0(i), Q$LogProxy).getHour():'':dynamicCast(logs.get_0(i), Q$LogProxy).getHour() > 0?'' + dynamicCast(logs.get_0(i), Q$LogProxy).getHour():'');
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
  this.widget = $build_f_HTMLPanel1_4(new ExtractDataView_BinderImpl$Widgets_0(this));
}

defineSeed(932, 681, makeCastMap([Q$ExtractDataPresenter$MyView, Q$ExtractDataView]), ExtractDataView_0);
_.asWidget = function asWidget_6(){
  return this.widget;
}
;
_.lstDepartments = null;
_.lstProfs = null;
_.tblLogs = null;
_.widget = null;
function ExtractDataView_BinderImpl_0(){
}

defineSeed(933, 1, {}, ExtractDataView_BinderImpl_0);
function $build_f_HTMLPanel1_4(this$static){
  var attachRecord5, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, f_HorizontalPanel5, f_Label6, lstDepartments, f_Label7, lstProfs, tblLogs;
  f_HTMLPanel1 = new HTMLPanel_0($html1_4(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord5 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord5.origParent?$insertBefore(attachRecord5.origParent, attachRecord5.element, attachRecord5.origSibling):orphan(attachRecord5.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_4(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_0(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , $add_8(f_VerticalPanel3, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label4.directionalTextHelper, 'RAPPORT DES HEURES PAR PROFESSEUR', false) , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , f_Label4)) , $add_8(f_VerticalPanel3, (f_HorizontalPanel5 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_6(f_HorizontalPanel5, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir un d\xE9partement :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_6(f_HorizontalPanel5, (lstDepartments = new ListBox_0 , $addDomHandler(lstDepartments, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstDepartments = lstDepartments , lstDepartments)) , $add_6(f_HorizontalPanel5, (f_Label7 = new Label_0 , $setTextOrHtml(f_Label7.directionalTextHelper, 'Choisir un professeur :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_6(f_HorizontalPanel5, (lstProfs = new ListBox_0 , $addDomHandler(lstProfs, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProfs = lstProfs , lstProfs)) , f_HorizontalPanel5.element.style['width'] = '80%' , f_HorizontalPanel5.table['cellSpacing'] = 2 , f_HorizontalPanel5)) , $add_8(f_VerticalPanel3, (tblLogs = new FlexTable_0 , tblLogs.element.style['height'] = '100%' , tblLogs.element.style['width'] = '100%' , this$static.owner.tblLogs = tblLogs , tblLogs)) , f_VerticalPanel3.element.style['height'] = '' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 2 , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_FlowPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ExtractDataView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ExtractDataView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ExtractDataView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(934, 1, {}, ExtractDataView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ExtractDataView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(935, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ExtractDataView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_0(event_0){
  $onListDepartmentsSelected(this.this$1.owner);
}
;
_.this$1 = null;
function ExtractDataView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(936, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ExtractDataView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_1(event_0){
  $onListProfsSelected(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_4(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$) {
    result = new ExtractDataView_0(new ExtractDataView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$;
}

function LogRequestFactory_LogRequestContextImpl$9X_0(this$0, val$deptId){
  this.val$deptId = val$deptId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1113, 619, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_11(){
  return new RequestData_0('r7XIrN8gCo7cvZPRVfJpFB8sIck=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$deptId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.val$deptId = null;
var Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter', 765), Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter$1', 766), Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter$2', 767), Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter$3', 768), Lcom_lemania_timetracking_client_view_ExtractDataView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView', 932), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl', 933), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl$Widgets', 934), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl$Widgets$1', 935), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl$Widgets$2', 936), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$9X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$9X', 1113);
$entry(onLoad)(6);
