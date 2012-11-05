function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection______________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter_RptTimeByDepartmentPresenter_methodInjection(_0, _1){
  return new RptTimeByDepartmentPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter_RptTimeByDepartmentPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$ = new RptTimeByDepartmentView_0(new RptTimeByDepartmentView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$ = new RptTimeByDepartmentPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection______________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$1$1.prototype;
_.onSuccess = function onSuccess_1(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onDepartmentSelected_0(this$static, deptId){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new DefaultRequestTransport_0);
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllByCourseWithTime(rc, deptId, this$static.currentUser.currentYear), new RptTimeByDepartmentPresenter$2_0(this$static));
}

function RptTimeByDepartmentPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function RptTimeByDepartmentPresenter(){
}

_ = RptTimeByDepartmentPresenter_0.prototype = RptTimeByDepartmentPresenter.prototype = new Presenter;
_.getClass$ = function getClass_596(){
  return Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter_2_classLit;
}
;
_.onBind = function onBind_13(){
  dynamicCast(this.view, Q$RptTimeByDepartmentPresenter$MyView).setUiHandlers(this);
  $initializeTable_4(dynamicCast(this.view, Q$RptTimeByDepartmentPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_5(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_7(){
  var rc, rf;
  $clearLogTable_0(dynamicCast(this.view, Q$RptTimeByDepartmentPresenter$MyView));
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new DefaultRequestTransport_0);
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($getDepartments(rc, this.currentUser.userId), new RptTimeByDepartmentPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_11(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$RptTimeByDepartmentPresenter, Q$RptTimeByDepartmentUiHandler]);
_.currentUser = null;
function $onSuccess_23(this$static, response){
  $setDepartmentList_0(dynamicCast(this$static.this$0.view, Q$RptTimeByDepartmentPresenter$MyView), response);
}

function RptTimeByDepartmentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function RptTimeByDepartmentPresenter$1(){
}

_ = RptTimeByDepartmentPresenter$1_0.prototype = RptTimeByDepartmentPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_597(){
  return Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_38(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_38(response){
  $onSuccess_23(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_24(this$static, response){
  $setData_4(dynamicCast(this$static.this$0.view, Q$RptTimeByDepartmentPresenter$MyView), response);
}

function RptTimeByDepartmentPresenter$2_0(this$0){
  this.this$0 = this$0;
}

function RptTimeByDepartmentPresenter$2(){
}

_ = RptTimeByDepartmentPresenter$2_0.prototype = RptTimeByDepartmentPresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_598(){
  return Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_39(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_39(response){
  $onSuccess_24(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $clearLogTable_0(this$static){
  var temp;
  temp = new ArrayList_0;
  $setRowData(this$static.tblLog, temp);
  $setRowCount(this$static.tblLog, temp.size_0);
}

function $initializeTable_4(this$static){
  var col01, col02, col03, col04, col05, col06, col07, col08, col09, col10, col11, col12, colProf;
  $setWidth(this$static.tblLog, '100%');
  colProf = new RptTimeByDepartmentView$1_0;
  $addColumn(this$static.tblLog, colProf, 'Professeur');
  $setColumnWidth(this$static.tblLog, colProf, 28 + ($clinit_Style$Unit() , '%'));
  col01 = new RptTimeByDepartmentView$2_0;
  $addColumn(this$static.tblLog, col01, 'janvier');
  col02 = new RptTimeByDepartmentView$3_0;
  $addColumn(this$static.tblLog, col02, 'fevrier');
  col03 = new RptTimeByDepartmentView$4_0;
  $addColumn(this$static.tblLog, col03, 'mars');
  col04 = new RptTimeByDepartmentView$5_0;
  $addColumn(this$static.tblLog, col04, 'avril');
  col05 = new RptTimeByDepartmentView$6_0;
  $addColumn(this$static.tblLog, col05, 'mai');
  col06 = new RptTimeByDepartmentView$7_0;
  $addColumn(this$static.tblLog, col06, 'juin');
  col07 = new RptTimeByDepartmentView$8_0;
  $addColumn(this$static.tblLog, col07, 'juillet');
  col08 = new RptTimeByDepartmentView$9_0;
  $addColumn(this$static.tblLog, col08, 'ao\xFBt');
  col09 = new RptTimeByDepartmentView$10_0;
  $addColumn(this$static.tblLog, col09, 'septembre');
  col10 = new RptTimeByDepartmentView$11_0;
  $addColumn(this$static.tblLog, col10, 'octobre');
  col11 = new RptTimeByDepartmentView$12_0;
  $addColumn(this$static.tblLog, col11, 'novembre');
  col12 = new RptTimeByDepartmentView$13_0;
  $addColumn(this$static.tblLog, col12, 'd\xE9cembre');
}

function $onLstDepartmentsChange(this$static){
  $clearLogTable_0(this$static);
  if ($equals_5($getValue_0(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onDepartmentSelected_0(dynamicCast(this$static.uiHandlers, Q$RptTimeByDepartmentUiHandler), $getValue_0(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex));
}

function $setData_4(this$static, profs){
  $setRowCount_0(this$static.tblLog, profs.size_1(), true);
  $setRowData(this$static.tblLog, profs);
  $setRowCount(this$static.tblLog, profs.size_1());
}

function $setDepartmentList_0(this$static, depts){
  var i;
  $selectClear(this$static.lstDepartments.element);
  $insertItem(this$static.lstDepartments, '-', '', -1);
  for (i = 0; i < depts.size_1(); ++i)
    $insertItem(this$static.lstDepartments, dynamicCast(depts.get_0(i), Q$CoursProxy).getSchoolName() + ' - ' + dynamicCast(depts.get_0(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(depts.get_0(i), Q$CoursProxy).getId_0().value_0), -1);
}

function RptTimeByDepartmentView_0(){
  var attachRecord0, domId0, domId0Element, f_Button7, f_FlowPanel2, f_HTMLPanel1, f_HorizontalPanel5, f_Label4, f_Label6, f_VerticalPanel3, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, lstDepartments, tblLog, sb, sb_0;
  this.tblLog = new DataGrid_0;
  this.widget = (domId0 = $createUniqueId($doc) , f_Label4 = new Label_0 , f_Label6 = new Label_0 , lstDepartments = new ListBox_0 , f_Button7 = new Button_0 , f_HorizontalPanel5 = new HorizontalPanel_0 , tblLog = this.tblLog , f_VerticalPanel3 = new VerticalPanel_0 , f_FlowPanel2 = new FlowPanel_0 , f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , $append_2(sb.data, "<span id='") , $append_8(sb, htmlEscape(domId0)) , $append_2(sb.data, "'><\/span>") , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , f_Label4.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label4.directionalTextHelper, 'Informations des heures par d\xE9partement') , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , $add_8(f_VerticalPanel3, f_Label4) , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $setTextOrHtml(f_Label6.directionalTextHelper, 'D\xE9partements :') , $updateHorizontalAlignment(f_Label6) , $add_6(f_HorizontalPanel5, f_Label6) , $add_6(f_HorizontalPanel5, lstDepartments) , $setHTML(f_Button7, (sb_0 = new StringBuilder_0 , $append_2(sb_0.data, 'Extraire en Excel') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data))).html) , $add_6(f_HorizontalPanel5, f_Button7) , f_HorizontalPanel5.element.style['width'] = '80%' , f_HorizontalPanel5.table['cellSpacing'] = 2 , $add_8(f_VerticalPanel3, f_HorizontalPanel5) , tblLog.element.style['height'] = '520px' , tblLog.element.style['width'] = '830px' , $add_8(f_VerticalPanel3, tblLog) , f_VerticalPanel3.element.style['height'] = '100%' , f_VerticalPanel3.element.style['width'] = '100%' , $add_0(f_FlowPanel2, f_VerticalPanel3, f_FlowPanel2.element) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_HTMLPanel1.element.style['height'] = '100%' , f_HTMLPanel1.element.style['width'] = '100%' , attachRecord0 = attachToDom(f_HTMLPanel1.element) , domId0Element = $getElementById($doc, domId0) , attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element) , $addAndReplaceElement(f_HTMLPanel1, f_FlowPanel2, domId0Element) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RptTimeByDepartmentView_BinderImpl$1_0(this) , $addDomHandler(lstDepartments, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this.lstDepartments = lstDepartments , f_HTMLPanel1);
}

function RptTimeByDepartmentView(){
}

_ = RptTimeByDepartmentView_0.prototype = RptTimeByDepartmentView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_13(){
  return this.widget;
}
;
_.getClass$ = function getClass_708(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RptTimeByDepartmentPresenter$MyView]);
_.lstDepartments = null;
_.widget = null;
function RptTimeByDepartmentView$1_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$1(){
}

_ = RptTimeByDepartmentView$1_0.prototype = RptTimeByDepartmentView$1.prototype = new TextColumn;
_.getClass$ = function getClass_709(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$1_2_classLit;
}
;
_.getValue = function getValue_18(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$10_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$10(){
}

_ = RptTimeByDepartmentView$10_0.prototype = RptTimeByDepartmentView$10.prototype = new TextColumn;
_.getClass$ = function getClass_710(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$10_2_classLit;
}
;
_.getValue = function getValue_19(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_09();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$11_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$11(){
}

_ = RptTimeByDepartmentView$11_0.prototype = RptTimeByDepartmentView$11.prototype = new TextColumn;
_.getClass$ = function getClass_711(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$11_2_classLit;
}
;
_.getValue = function getValue_20(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_10();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$12_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$12(){
}

_ = RptTimeByDepartmentView$12_0.prototype = RptTimeByDepartmentView$12.prototype = new TextColumn;
_.getClass$ = function getClass_712(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$12_2_classLit;
}
;
_.getValue = function getValue_21(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_11();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$13_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$13(){
}

_ = RptTimeByDepartmentView$13_0.prototype = RptTimeByDepartmentView$13.prototype = new TextColumn;
_.getClass$ = function getClass_713(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$13_2_classLit;
}
;
_.getValue = function getValue_22(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_12();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$2_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$2(){
}

_ = RptTimeByDepartmentView$2_0.prototype = RptTimeByDepartmentView$2.prototype = new TextColumn;
_.getClass$ = function getClass_714(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$2_2_classLit;
}
;
_.getValue = function getValue_23(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_01();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$3_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$3(){
}

_ = RptTimeByDepartmentView$3_0.prototype = RptTimeByDepartmentView$3.prototype = new TextColumn;
_.getClass$ = function getClass_715(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$3_2_classLit;
}
;
_.getValue = function getValue_24(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_02();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$4_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$4(){
}

_ = RptTimeByDepartmentView$4_0.prototype = RptTimeByDepartmentView$4.prototype = new TextColumn;
_.getClass$ = function getClass_716(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$4_2_classLit;
}
;
_.getValue = function getValue_25(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_03();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$5_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$5(){
}

_ = RptTimeByDepartmentView$5_0.prototype = RptTimeByDepartmentView$5.prototype = new TextColumn;
_.getClass$ = function getClass_717(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$5_2_classLit;
}
;
_.getValue = function getValue_26(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_04();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$6_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$6(){
}

_ = RptTimeByDepartmentView$6_0.prototype = RptTimeByDepartmentView$6.prototype = new TextColumn;
_.getClass$ = function getClass_718(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$6_2_classLit;
}
;
_.getValue = function getValue_27(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_05();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$7_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$7(){
}

_ = RptTimeByDepartmentView$7_0.prototype = RptTimeByDepartmentView$7.prototype = new TextColumn;
_.getClass$ = function getClass_719(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$7_2_classLit;
}
;
_.getValue = function getValue_28(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_06();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$8_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$8(){
}

_ = RptTimeByDepartmentView$8_0.prototype = RptTimeByDepartmentView$8.prototype = new TextColumn;
_.getClass$ = function getClass_720(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$8_2_classLit;
}
;
_.getValue = function getValue_29(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_07();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView$9_0(){
  TextColumn_0.call(this);
}

function RptTimeByDepartmentView$9(){
}

_ = RptTimeByDepartmentView$9_0.prototype = RptTimeByDepartmentView$9.prototype = new TextColumn;
_.getClass$ = function getClass_721(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$9_2_classLit;
}
;
_.getValue = function getValue_30(object){
  return '' + dynamicCast(object, Q$ProfessorProxy).getTotal_08();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeByDepartmentView_BinderImpl_0(){
}

function RptTimeByDepartmentView_BinderImpl(){
}

_ = RptTimeByDepartmentView_BinderImpl_0.prototype = RptTimeByDepartmentView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_722(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl_2_classLit;
}
;
function RptTimeByDepartmentView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function RptTimeByDepartmentView_BinderImpl$1(){
}

_ = RptTimeByDepartmentView_BinderImpl$1_0.prototype = RptTimeByDepartmentView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_723(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl$1_2_classLit;
}
;
_.onChange = function onChange_3(event_0){
  $onLstDepartmentsChange(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function $listAllByCourseWithTime(this$static, deptId, year){
  var x;
  x = new ProfessorRequestFactory_ProfessorRequestContextImpl$3X_0(this$static, deptId, year);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$3X_0(this$0, val$deptId, val$year){
  this.val$deptId = val$deptId;
  this.val$year = val$year;
  AbstractRequest_0.call(this, this$0);
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$3X(){
}

_ = ProfessorRequestFactory_ProfessorRequestContextImpl$3X_0.prototype = ProfessorRequestFactory_ProfessorRequestContextImpl$3X.prototype = new AbstractRequest;
_.getClass$ = function getClass_824(){
  return Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$3X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_18(){
  return new RequestData_0('fn0y14SFjm2fiaJ$NsdUMYOo5Gk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$deptId, valueOf_1(this.val$year)]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$deptId = null;
_.val$year = 0;
var Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$1', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$10_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$10', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$11_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$11', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$12_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$12', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$13_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$13', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$2', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$3', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$4', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$5', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$6', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$7', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$8', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView$9', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$3X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(1);
