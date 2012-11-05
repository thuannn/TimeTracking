function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$ExtractDataPresenter_ExtractDataPresenter_methodInjection(_0, _1){
  return new ExtractDataPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$ExtractDataPresenter_ExtractDataPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$ = new ExtractDataView_0(new ExtractDataView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$MyProxy$_annotation$$none$$ = new ExtractDataPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$7$1.prototype;
_.onSuccess = function onSuccess_13(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onDepartmentSelected(this$static, deptId){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new DefaultRequestTransport_0);
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllByCourse(rc, deptId), new ExtractDataPresenter$2_0(this$static));
}

function $onProfSelected(this$static, profId){
  var rcl, rfl, x;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this$static.eventBus, new DefaultRequestTransport_0);
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire((x = new LogRequestFactory_LogRequestContextImpl$6X_0(rcl, profId) , $addInvocation(rcl.state.dialect, x) , x), new ExtractDataPresenter$3_0(this$static));
}

function ExtractDataPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function ExtractDataPresenter(){
}

_ = ExtractDataPresenter_0.prototype = ExtractDataPresenter.prototype = new Presenter;
_.getClass$ = function getClass_547(){
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
  $clearLogTable(dynamicCast(this.view, Q$ExtractDataPresenter$MyView));
  dynamicCast(dynamicCast(this.view, Q$ExtractDataPresenter$MyView), Q$ExtractDataView).lstProfs.element.options.length = 0;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new DefaultRequestTransport_0);
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
_.getClass$ = function getClass_548(){
  return Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_24(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_24(response){
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
_.getClass$ = function getClass_549(){
  return Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_25(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_25(response){
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
_.getClass$ = function getClass_550(){
  return Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$3_2_classLit;
}
;
_.onFailure_0 = function onFailure_26(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_26(response){
  $onSuccess_11(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $clearLogTable(this$static){
  var temp;
  temp = new ArrayList_0;
  $setRowData(this$static.tblLog, temp);
  $setRowCount(this$static.tblLog, temp.size_0);
}

function $initializeTable_1(this$static){
  var colHour, colMonth, colRemarque, colType, colYear, coldeptse;
  $setWidth(this$static.tblLog, '100%');
  colYear = new ExtractDataView$1_0;
  $addColumn(this$static.tblLog, colYear, 'Year');
  $setColumnWidth(this$static.tblLog, colYear, 10 + ($clinit_Style$Unit() , '%'));
  colMonth = new ExtractDataView$2_0;
  $addColumn(this$static.tblLog, colMonth, 'Month');
  $setColumnWidth(this$static.tblLog, colMonth, '10%');
  coldeptse = new ExtractDataView$3_0;
  $addColumn(this$static.tblLog, coldeptse, 'D\xE9partements');
  $setColumnWidth(this$static.tblLog, coldeptse, '20%');
  colType = new ExtractDataView$4_0;
  $addColumn(this$static.tblLog, colType, 'Type');
  $setColumnWidth(this$static.tblLog, colType, '10%');
  colHour = new ExtractDataView$5_0;
  $addColumn(this$static.tblLog, colHour, 'Totale');
  $setColumnWidth(this$static.tblLog, colHour, '10%');
  colRemarque = new ExtractDataView$6_0;
  $addColumn(this$static.tblLog, colRemarque, 'Remarques');
  $setColumnWidth(this$static.tblLog, colRemarque, '40%');
}

function $onListDepartmentsSelected(this$static){
  $clearLogTable(this$static);
  $selectClear(this$static.lstProfs.element);
  if ($equals_5($getValue_0(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onDepartmentSelected(dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler), $getValue_0(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex));
}

function $onListProfsSelected(this$static){
  $clearLogTable(this$static);
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
  $setRowCount_0(this$static.tblLog, logs.size_1(), true);
  $setRowData(this$static.tblLog, logs);
  $setRowCount(this$static.tblLog, logs.size_1());
}

function $setProfList(this$static, profs){
  var p, p$iterator;
  $insertItem(this$static.lstProfs, '', '', -1);
  for (p$iterator = profs.iterator(); p$iterator.hasNext();) {
    p = dynamicCast(p$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstProfs, p.getProfName(), '' + toString_6(p.getId_0().value_0), -1);
  }
}

function ExtractDataView_0(){
  this.tblLog = new DataGrid_0;
  this.widget = $createAndBindUi_1(this);
}

function ExtractDataView(){
}

_ = ExtractDataView_0.prototype = ExtractDataView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_6(){
  return this.widget;
}
;
_.getClass$ = function getClass_646(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ExtractDataPresenter$MyView, Q$ExtractDataView]);
_.lstDepartments = null;
_.lstProfs = null;
_.widget = null;
function ExtractDataView$1_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$1(){
}

_ = ExtractDataView$1_0.prototype = ExtractDataView$1.prototype = new TextColumn;
_.getClass$ = function getClass_647(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$1_2_classLit;
}
;
_.getValue = function getValue_6(object){
  return '' + dynamicCast(object, Q$LogProxy).getYear();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$2_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$2(){
}

_ = ExtractDataView$2_0.prototype = ExtractDataView$2.prototype = new TextColumn;
_.getClass$ = function getClass_648(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$2_2_classLit;
}
;
_.getValue = function getValue_7(object){
  return '' + dynamicCast(object, Q$LogProxy).getMonth_0();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$3_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$3(){
}

_ = ExtractDataView$3_0.prototype = ExtractDataView$3.prototype = new TextColumn;
_.getClass$ = function getClass_649(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$3_2_classLit;
}
;
_.getValue = function getValue_8(object){
  return dynamicCast(object, Q$LogProxy).getCourseName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$4_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$4(){
}

_ = ExtractDataView$4_0.prototype = ExtractDataView$4.prototype = new TextColumn;
_.getClass$ = function getClass_650(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$4_2_classLit;
}
;
_.getValue = function getValue_9(object){
  return dynamicCast(object, Q$LogProxy).getTypeName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$5_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$5(){
}

_ = ExtractDataView$5_0.prototype = ExtractDataView$5.prototype = new TextColumn;
_.getClass$ = function getClass_651(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$5_2_classLit;
}
;
_.getValue = function getValue_10(object){
  return '' + dynamicCast(object, Q$LogProxy).getHour();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$6_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$6(){
}

_ = ExtractDataView$6_0.prototype = ExtractDataView$6.prototype = new TextColumn;
_.getClass$ = function getClass_652(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$6_2_classLit;
}
;
_.getValue = function getValue_11(object){
  return '' + dynamicCast(object, Q$LogProxy).getMemo();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $createAndBindUi_1(owner){
  var attachRecord0, domId0, domId0Element, f_Button8, f_FlowPanel2, f_HTMLPanel1, f_HorizontalPanel5, f_Label4, f_Label6, f_Label7, f_VerticalPanel3, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, lstDepartments, lstProfs, tblLog, sb, sb_0;
  domId0 = $createUniqueId($doc);
  f_Label4 = new Label_0;
  f_Label6 = new Label_0;
  lstDepartments = new ListBox_0;
  f_Label7 = new Label_0;
  lstProfs = new ListBox_0;
  f_Button8 = new Button_0;
  f_HorizontalPanel5 = new HorizontalPanel_0;
  tblLog = owner.tblLog;
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
  $setHTML(f_Button8, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Extraire en Excel' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html);
  $add_6(f_HorizontalPanel5, f_Button8);
  f_HorizontalPanel5.element.style['width'] = '80%';
  f_HorizontalPanel5.table['cellSpacing'] = 2;
  $add_8(f_VerticalPanel3, f_HorizontalPanel5);
  tblLog.element.style['height'] = '520px';
  tblLog.element.style['width'] = '830px';
  $add_8(f_VerticalPanel3, tblLog);
  f_VerticalPanel3.element.style['height'] = '100%';
  f_VerticalPanel3.element.style['width'] = '100%';
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
  return f_HTMLPanel1;
}

function ExtractDataView_BinderImpl_0(){
}

function ExtractDataView_BinderImpl(){
}

_ = ExtractDataView_BinderImpl_0.prototype = ExtractDataView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_653(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl_2_classLit;
}
;
function ExtractDataView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function ExtractDataView_BinderImpl$1(){
}

_ = ExtractDataView_BinderImpl$1_0.prototype = ExtractDataView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_654(){
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
_.getClass$ = function getClass_655(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl$2_2_classLit;
}
;
_.onChange = function onChange_1(event_0){
  $onListProfsSelected(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function LogRequestFactory_LogRequestContextImpl$6X_0(this$0, val$deptId){
  this.val$deptId = val$deptId;
  AbstractRequest_0.call(this, this$0);
}

function LogRequestFactory_LogRequestContextImpl$6X(){
}

_ = LogRequestFactory_LogRequestContextImpl$6X_0.prototype = LogRequestFactory_LogRequestContextImpl$6X.prototype = new AbstractRequest;
_.getClass$ = function getClass_803(){
  return Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$6X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_10(){
  return new RequestData_0('r7XIrN8gCo7cvZPRVfJpFB8sIck=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$deptId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$deptId = null;
var Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter$3', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$1', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$2', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$3', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$4', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$5', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$6', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$6X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$6X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(13);
