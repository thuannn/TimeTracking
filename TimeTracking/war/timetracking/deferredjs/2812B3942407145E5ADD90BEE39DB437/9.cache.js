function $setRowSpan(this$static, row){
  (this$static.this$0.prepareCell(row, 0) , $getCellElement(this$static.this$0.bodyElem, row, 0))['rowSpan'] = 2;
}

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

_ = ClientGinjectorImpl$17$1.prototype;
_.onSuccess = function onSuccess_9(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onDepartmentSelected_0(this$static, deptId){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllByCourseWithTime(rc, deptId, this$static.currentUser.currentYear), new RptTimeByDepartmentPresenter$2_0(this$static));
}

function RptTimeByDepartmentPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function RptTimeByDepartmentPresenter(){
}

_ = RptTimeByDepartmentPresenter_0.prototype = RptTimeByDepartmentPresenter.prototype = new Presenter;
_.getClass$ = function getClass_608(){
  return Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter_2_classLit;
}
;
_.onBind = function onBind_13(){
  dynamicCast(this.view, Q$RptTimeByDepartmentPresenter$MyView).setUiHandlers(this);
  $initializeTable_4(dynamicCast(this.view, Q$RptTimeByDepartmentPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_7(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_7(){
  var rc, rf;
  $removeAllRows(dynamicCast(dynamicCast(this.view, Q$RptTimeByDepartmentPresenter$MyView), Q$RptTimeByDepartmentView).tblProf);
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
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
function $onSuccess_25(this$static, response){
  $setDepartmentList_0(dynamicCast(this$static.this$0.view, Q$RptTimeByDepartmentPresenter$MyView), response);
}

function RptTimeByDepartmentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function RptTimeByDepartmentPresenter$1(){
}

_ = RptTimeByDepartmentPresenter$1_0.prototype = RptTimeByDepartmentPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_609(){
  return Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_42(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_42(response){
  $onSuccess_25(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_26(this$static, response){
  $setData_4(dynamicCast(this$static.this$0.view, Q$RptTimeByDepartmentPresenter$MyView), response);
}

function RptTimeByDepartmentPresenter$2_0(this$0){
  this.this$0 = this$0;
}

function RptTimeByDepartmentPresenter$2(){
}

_ = RptTimeByDepartmentPresenter$2_0.prototype = RptTimeByDepartmentPresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_610(){
  return Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_43(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_43(response){
  $onSuccess_26(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $initializeTable_4(this$static){
  $setWidth(this$static.tblProf, '100%');
  $setText(this$static.tblProf, 0, 0, 'Professeur');
  $setText(this$static.tblProf, 0, 1, 'Jan');
  $setText(this$static.tblProf, 0, 2, 'Fev');
  $setText(this$static.tblProf, 0, 3, 'Mar');
  $setText(this$static.tblProf, 0, 4, 'Avr');
  $setText(this$static.tblProf, 0, 5, 'Mai');
  $setText(this$static.tblProf, 0, 6, 'Jun');
  $setText(this$static.tblProf, 0, 7, 'Jul');
  $setText(this$static.tblProf, 0, 8, 'Aou');
  $setText(this$static.tblProf, 0, 9, 'Sep');
  $setText(this$static.tblProf, 0, 10, 'Oct');
  $setText(this$static.tblProf, 0, 11, 'Nov');
  $setText(this$static.tblProf, 0, 12, 'Dec');
  $setText(this$static.tblProf, 0, 13, 'Total par Prof');
}

function $onLstDepartmentsChange(this$static){
  $removeAllRows(this$static.tblProf);
  if ($equals_5($getValue_0(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onDepartmentSelected_0(dynamicCast(this$static.uiHandlers, Q$RptTimeByDepartmentUiHandler), $getValue_0(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex));
}

function $setData_4(this$static, profs){
  var currentRow, i, total01, total02, total03, total04, total05, total06, total07, total08, total09, total10, total11, total12, totalFee, totalHour;
  $initializeTable_4(this$static);
  currentRow = 1;
  total01 = 0;
  total02 = 0;
  total03 = 0;
  total04 = 0;
  total05 = 0;
  total06 = 0;
  total07 = 0;
  total08 = 0;
  total09 = 0;
  total10 = 0;
  total11 = 0;
  total12 = 0;
  for (i = 0; i < profs.size_1(); ++i) {
    totalHour = 0;
    totalFee = 0;
    total01 = total01 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_01();
    total02 = total02 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_02();
    total03 = total03 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_03();
    total04 = total04 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_04();
    total05 = total05 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_05();
    total06 = total06 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_06();
    total07 = total07 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_07();
    total08 = total08 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_08();
    total09 = total09 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_09();
    total10 = total10 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_10();
    total11 = total11 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_11();
    total12 = total12 + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_12();
    $setText(this$static.tblProf, currentRow, 0, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getProfName());
    $setText(this$static.tblProf, currentRow, 1, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_01() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_01():'');
    $setText(this$static.tblProf, currentRow + 1, 0, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_01() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_01():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_01();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_01();
    $setText(this$static.tblProf, currentRow, 2, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_02() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_02():'');
    $setText(this$static.tblProf, currentRow + 1, 1, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_02() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_02():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_02();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_02();
    $setText(this$static.tblProf, currentRow, 3, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_03() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_03():'');
    $setText(this$static.tblProf, currentRow + 1, 2, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_03() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_03():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_03();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_03();
    $setText(this$static.tblProf, currentRow, 4, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_04() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_04():'');
    $setText(this$static.tblProf, currentRow + 1, 3, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_04() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_04():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_04();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_04();
    $setText(this$static.tblProf, currentRow, 5, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_05() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_05():'');
    $setText(this$static.tblProf, currentRow + 1, 4, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_05() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_05():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_05();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_05();
    $setText(this$static.tblProf, currentRow, 6, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_06() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_06():'');
    $setText(this$static.tblProf, currentRow + 1, 5, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_06() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_06():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_06();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_06();
    $setText(this$static.tblProf, currentRow, 7, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_07() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_07():'');
    $setText(this$static.tblProf, currentRow + 1, 6, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_07() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_07():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_07();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_07();
    $setText(this$static.tblProf, currentRow, 8, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_08() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_08():'');
    $setText(this$static.tblProf, currentRow + 1, 7, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_08() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_08():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_08();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_08();
    $setText(this$static.tblProf, currentRow, 9, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_09() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_09():'');
    $setText(this$static.tblProf, currentRow + 1, 8, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_09() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_09():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_09();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_09();
    $setText(this$static.tblProf, currentRow, 10, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_10() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_10():'');
    $setText(this$static.tblProf, currentRow + 1, 9, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_10() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_10():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_10();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_10();
    $setText(this$static.tblProf, currentRow, 11, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_11() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_11():'');
    $setText(this$static.tblProf, currentRow + 1, 10, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_11() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_11():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_11();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_11();
    $setText(this$static.tblProf, currentRow, 12, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_12() > 0?'' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_12():'');
    $setText(this$static.tblProf, currentRow + 1, 11, dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_12() > 0?'CHF ' + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_12():'');
    totalHour = totalHour + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getTotal_12();
    totalFee = totalFee + dynamicCast(profs.get_0(i), Q$ProfessorProxy).getFee_12();
    $setText(this$static.tblProf, currentRow, 13, totalHour > 0?'' + totalHour:'');
    $setText(this$static.tblProf, currentRow + 1, 12, totalFee > 0?'CHF ' + totalFee:'');
    $setRowSpan(dynamicCast(this$static.tblProf.cellFormatter, Q$FlexTable$FlexCellFormatter), currentRow);
    currentRow = currentRow + 2;
  }
  $setText(this$static.tblProf, currentRow + 1, 0, 'Total mensuel');
  $setText(this$static.tblProf, currentRow + 1, 1, total01 > 0?'' + total01:'');
  $setText(this$static.tblProf, currentRow + 1, 2, total02 > 0?'' + total02:'');
  $setText(this$static.tblProf, currentRow + 1, 3, total03 > 0?'' + total03:'');
  $setText(this$static.tblProf, currentRow + 1, 4, total04 > 0?'' + total04:'');
  $setText(this$static.tblProf, currentRow + 1, 5, total05 > 0?'' + total05:'');
  $setText(this$static.tblProf, currentRow + 1, 6, total06 > 0?'' + total06:'');
  $setText(this$static.tblProf, currentRow + 1, 7, total07 > 0?'' + total07:'');
  $setText(this$static.tblProf, currentRow + 1, 8, total08 > 0?'' + total08:'');
  $setText(this$static.tblProf, currentRow + 1, 9, total09 > 0?'' + total09:'');
  $setText(this$static.tblProf, currentRow + 1, 10, total10 > 0?'' + total10:'');
  $setText(this$static.tblProf, currentRow + 1, 11, total11 > 0?'' + total11:'');
  $setText(this$static.tblProf, currentRow + 1, 12, total12 > 0?'' + total12:'');
  $styleTable_0(this$static);
}

function $setDepartmentList_0(this$static, depts){
  var i;
  $selectClear(this$static.lstDepartments.element);
  $insertItem(this$static.lstDepartments, '-', '', -1);
  for (i = 0; i < depts.size_1(); ++i)
    $insertItem(this$static.lstDepartments, dynamicCast(depts.get_0(i), Q$CoursProxy).getSchoolName() + ' - ' + dynamicCast(depts.get_0(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(depts.get_0(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $styleTable_0(this$static){
  var j, k;
  for (j = 0; j < this$static.tblProf.bodyElem.rows.length; ++j) {
    for (k = 0; k < $getCellCount(this$static.tblProf, j); ++k) {
      $addStyleName(this$static.tblProf.cellFormatter, j, k, 'FlexTable-Cell');
    }
  }
}

function RptTimeByDepartmentView_0(){
  var attachRecord0, domId0, domId0Element, f_FlowPanel2, f_HTMLPanel1, f_HorizontalPanel5, f_Label4, f_Label6, f_VerticalPanel3, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, lstDepartments, tblProf, sb;
  this.widget = (domId0 = $createUniqueId($doc) , f_Label4 = new Label_0 , f_Label6 = new Label_0 , lstDepartments = new ListBox_0 , f_HorizontalPanel5 = new HorizontalPanel_0 , tblProf = new FlexTable_0 , f_VerticalPanel3 = new VerticalPanel_0 , f_FlowPanel2 = new FlowPanel_0 , f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , f_Label4.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label4.directionalTextHelper, 'Informations des heures par d\xE9partement') , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , $add_8(f_VerticalPanel3, f_Label4) , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $setTextOrHtml(f_Label6.directionalTextHelper, 'D\xE9partements :') , $updateHorizontalAlignment(f_Label6) , $add_6(f_HorizontalPanel5, f_Label6) , $add_6(f_HorizontalPanel5, lstDepartments) , f_HorizontalPanel5.element.style['width'] = '80%' , f_HorizontalPanel5.table['cellSpacing'] = 2 , $add_8(f_VerticalPanel3, f_HorizontalPanel5) , tblProf.element.style['height'] = '100%' , tblProf.element.style['width'] = '100%' , $add_8(f_VerticalPanel3, tblProf) , f_VerticalPanel3.element.style['height'] = '' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 2 , $add_0(f_FlowPanel2, f_VerticalPanel3, f_FlowPanel2.element) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_HTMLPanel1.element.style['height'] = '100%' , f_HTMLPanel1.element.style['width'] = '100%' , attachRecord0 = attachToDom(f_HTMLPanel1.element) , domId0Element = $getElementById($doc, domId0) , attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element) , $addAndReplaceElement(f_HTMLPanel1, f_FlowPanel2, domId0Element) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RptTimeByDepartmentView_BinderImpl$1_0(this) , $addDomHandler(lstDepartments, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this.lstDepartments = lstDepartments , this.tblProf = tblProf , f_HTMLPanel1);
}

function RptTimeByDepartmentView(){
}

_ = RptTimeByDepartmentView_0.prototype = RptTimeByDepartmentView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_13(){
  return this.widget;
}
;
_.getClass$ = function getClass_729(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RptTimeByDepartmentPresenter$MyView, Q$RptTimeByDepartmentView]);
_.lstDepartments = null;
_.tblProf = null;
_.widget = null;
function RptTimeByDepartmentView_BinderImpl_0(){
}

function RptTimeByDepartmentView_BinderImpl(){
}

_ = RptTimeByDepartmentView_BinderImpl_0.prototype = RptTimeByDepartmentView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_730(){
  return Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl_2_classLit;
}
;
function RptTimeByDepartmentView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function RptTimeByDepartmentView_BinderImpl$1(){
}

_ = RptTimeByDepartmentView_BinderImpl$1_0.prototype = RptTimeByDepartmentView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_731(){
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
  x = new ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0(this$static, deptId, year);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0(this$0, val$deptId, val$year){
  this.val$deptId = val$deptId;
  this.val$year = val$year;
  AbstractRequest_0.call(this, this$0);
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$4X(){
}

_ = ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0.prototype = ProfessorRequestFactory_ProfessorRequestContextImpl$4X.prototype = new AbstractRequest;
_.getClass$ = function getClass_847(){
  return Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$4X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_19(){
  return new RequestData_0('fn0y14SFjm2fiaJ$NsdUMYOo5Gk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$deptId, valueOf_1(this.val$year)]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$deptId = null;
_.val$year = 0;
var Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$4X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(9);
