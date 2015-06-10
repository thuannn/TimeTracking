function $setRowSpan(this$static, row){
  (this$static.this$0.prepareCell(row, 0) , $clinit_DOM() , $getCellElement(this$static.this$0.bodyElem, row, 0))['rowSpan'] = 2;
}

function $onDepartmentSelected(this$static, deptId, year){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllByCourseWithTime(rc, deptId, __parseAndValidateInt(year)), new RptTimeByDepartmentPresenter$2_0(this$static));
}

function RptTimeByDepartmentPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(840, 693, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$RptTimeByDepartmentPresenter, Q$RptTimeByDepartmentUiHandler]), RptTimeByDepartmentPresenter_0);
_.onBind = function onBind_13(){
  dynamicCast(this.view, Q$RptTimeByDepartmentPresenter$MyView).setUiHandlers(this);
  $initializeTable_4(dynamicCast(this.view, Q$RptTimeByDepartmentPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_7(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_6(){
  var rf, rc;
  $removeAllRows(dynamicCast(dynamicCast(this.view, Q$RptTimeByDepartmentPresenter$MyView), Q$RptTimeByDepartmentView).tblProf);
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($getDepartments(rc, this.currentUser.userId), new RptTimeByDepartmentPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_12(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_26(this$static, response){
  $setDepartmentList(dynamicCast(this$static.this$0.view, Q$RptTimeByDepartmentPresenter$MyView), response);
}

function RptTimeByDepartmentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(841, 629, makeCastMap([Q$Receiver]), RptTimeByDepartmentPresenter$1_0);
_.onFailure_0 = function onFailure_28(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_28(response){
  $onSuccess_26(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_27(this$static, response){
  $setData_4(dynamicCast(this$static.this$0.view, Q$RptTimeByDepartmentPresenter$MyView), response);
}

function RptTimeByDepartmentPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(842, 629, makeCastMap([Q$Receiver]), RptTimeByDepartmentPresenter$2_0);
_.onFailure_0 = function onFailure_29(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_29(response){
  $onSuccess_27(this, dynamicCast(response, Q$List));
}
;
function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$) {
    result = new RptTimeByDepartmentPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$;
}

defineSeed(906, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_54(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable_4(this$static){
  $setWidth_0(this$static.tblProf, '100%');
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
  $selectClear($getSelectElement(this$static.lstYears));
  $insertItem(this$static.lstYears, '-', '', -1);
  $insertItem(this$static.lstYears, '2013', '2013', -1);
  $insertItem(this$static.lstYears, '2014', '2014', -1);
  $insertItem(this$static.lstYears, '2015', '2015', -1);
  $insertItem(this$static.lstYears, '2016', '2016', -1);
  $removeAllRows(this$static.tblProf);
}

function $onLstYearsChange(this$static){
  $removeAllRows(this$static.tblProf);
  if ($equals_3($getValue_1(this$static.lstDepartments, $getSelectElement(this$static.lstDepartments).selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onDepartmentSelected(dynamicCast(this$static.uiHandlers, Q$RptTimeByDepartmentUiHandler), $getValue_1(this$static.lstDepartments, $getSelectElement(this$static.lstDepartments).selectedIndex), $getValue_1(this$static.lstYears, $getSelectElement(this$static.lstYears).selectedIndex));
}

function $setData_4(this$static, profs){
  var currentRow, i, total01, total02, total03, total04, total05, total06, total07, total08, total09, total10, total11, total12, totalFee, totalFee01, totalFee02, totalFee03, totalFee04, totalFee05, totalFee06, totalFee07, totalFee08, totalFee09, totalFee10, totalFee11, totalFee12, totalHour;
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
  totalFee01 = 0;
  totalFee02 = 0;
  totalFee03 = 0;
  totalFee04 = 0;
  totalFee05 = 0;
  totalFee06 = 0;
  totalFee07 = 0;
  totalFee08 = 0;
  totalFee09 = 0;
  totalFee10 = 0;
  totalFee11 = 0;
  totalFee12 = 0;
  for (i = 0; i < profs.size_1(); i++) {
    totalHour = 0;
    totalFee = 0;
    total01 = total01 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_01();
    total02 = total02 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_02();
    total03 = total03 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_03();
    total04 = total04 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_04();
    total05 = total05 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_05();
    total06 = total06 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_06();
    total07 = total07 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_07();
    total08 = total08 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_08();
    total09 = total09 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_09();
    total10 = total10 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_10();
    total11 = total11 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_11();
    total12 = total12 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_12();
    totalFee01 = totalFee01 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_01();
    totalFee02 = totalFee02 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_02();
    totalFee03 = totalFee03 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_03();
    totalFee04 = totalFee04 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_04();
    totalFee05 = totalFee05 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_05();
    totalFee06 = totalFee06 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_06();
    totalFee07 = totalFee07 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_07();
    totalFee08 = totalFee08 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_08();
    totalFee09 = totalFee09 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_09();
    totalFee10 = totalFee10 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_10();
    totalFee11 = totalFee11 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_11();
    totalFee12 = totalFee12 + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_12();
    $setText(this$static.tblProf, currentRow, 0, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getProfName());
    $setText(this$static.tblProf, currentRow, 1, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_01() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_01():'');
    $setText(this$static.tblProf, currentRow + 1, 0, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_01() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_01():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_01();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_01();
    $setText(this$static.tblProf, currentRow, 2, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_02() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_02():'');
    $setText(this$static.tblProf, currentRow + 1, 1, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_02() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_02():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_02();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_02();
    $setText(this$static.tblProf, currentRow, 3, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_03() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_03():'');
    $setText(this$static.tblProf, currentRow + 1, 2, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_03() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_03():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_03();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_03();
    $setText(this$static.tblProf, currentRow, 4, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_04() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_04():'');
    $setText(this$static.tblProf, currentRow + 1, 3, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_04() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_04():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_04();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_04();
    $setText(this$static.tblProf, currentRow, 5, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_05() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_05():'');
    $setText(this$static.tblProf, currentRow + 1, 4, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_05() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_05():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_05();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_05();
    $setText(this$static.tblProf, currentRow, 6, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_06() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_06():'');
    $setText(this$static.tblProf, currentRow + 1, 5, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_06() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_06():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_06();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_06();
    $setText(this$static.tblProf, currentRow, 7, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_07() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_07():'');
    $setText(this$static.tblProf, currentRow + 1, 6, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_07() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_07():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_07();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_07();
    $setText(this$static.tblProf, currentRow, 8, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_08() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_08():'');
    $setText(this$static.tblProf, currentRow + 1, 7, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_08() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_08():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_08();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_08();
    $setText(this$static.tblProf, currentRow, 9, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_09() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_09():'');
    $setText(this$static.tblProf, currentRow + 1, 8, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_09() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_09():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_09();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_09();
    $setText(this$static.tblProf, currentRow, 10, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_10() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_10():'');
    $setText(this$static.tblProf, currentRow + 1, 9, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_10() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_10():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_10();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_10();
    $setText(this$static.tblProf, currentRow, 11, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_11() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_11():'');
    $setText(this$static.tblProf, currentRow + 1, 10, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_11() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_11():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_11();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_11();
    $setText(this$static.tblProf, currentRow, 12, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_12() > 0?'' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_12():'');
    $setText(this$static.tblProf, currentRow + 1, 11, dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_12() > 0?'CHF ' + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_12():'');
    totalHour = totalHour + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getTotal_12();
    totalFee = totalFee + dynamicCast(profs.get_1(i), Q$ProfessorProxy).getFee_12();
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
  $setText(this$static.tblProf, currentRow + 2, 0, '');
  $setText(this$static.tblProf, currentRow + 2, 1, totalFee01 > 0?'CHF ' + totalFee01:'');
  $setText(this$static.tblProf, currentRow + 2, 2, totalFee02 > 0?'CHF ' + totalFee02:'');
  $setText(this$static.tblProf, currentRow + 2, 3, totalFee03 > 0?'CHF ' + totalFee03:'');
  $setText(this$static.tblProf, currentRow + 2, 4, totalFee04 > 0?'CHF ' + totalFee04:'');
  $setText(this$static.tblProf, currentRow + 2, 5, totalFee05 > 0?'CHF ' + totalFee05:'');
  $setText(this$static.tblProf, currentRow + 2, 6, totalFee06 > 0?'CHF ' + totalFee06:'');
  $setText(this$static.tblProf, currentRow + 2, 7, totalFee07 > 0?'CHF ' + totalFee07:'');
  $setText(this$static.tblProf, currentRow + 2, 8, totalFee08 > 0?'CHF ' + totalFee08:'');
  $setText(this$static.tblProf, currentRow + 2, 9, totalFee09 > 0?'CHF ' + totalFee09:'');
  $setText(this$static.tblProf, currentRow + 2, 10, totalFee10 > 0?'CHF ' + totalFee10:'');
  $setText(this$static.tblProf, currentRow + 2, 11, totalFee11 > 0?'CHF ' + totalFee11:'');
  $setText(this$static.tblProf, currentRow + 2, 12, totalFee12 > 0?'CHF ' + totalFee12:'');
  $styleTable_0(this$static);
}

function $setDepartmentList(this$static, depts){
  var i;
  $selectClear($getSelectElement(this$static.lstDepartments));
  $insertItem(this$static.lstDepartments, '-', '', -1);
  for (i = 0; i < depts.size_1(); i++)
    $insertItem(this$static.lstDepartments, dynamicCast(depts.get_1(i), Q$CoursProxy).getSchoolName() + ' - ' + dynamicCast(depts.get_1(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(depts.get_1(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $styleTable_0(this$static){
  var j, j0, k;
  for (j0 = 0; j0 < $getDOMRowCount(this$static.tblProf); j0++) {
    for (k = 0; k < $getCellCount(this$static.tblProf, j0); k++) {
      $addStyleName(this$static.tblProf.cellFormatter, j0, k, 'FlexTable-Cell');
    }
  }
  for (j = $getDOMRowCount(this$static.tblProf) - 2; j < $getDOMRowCount(this$static.tblProf); j++) {
    for (k = 0; k < $getCellCount(this$static.tblProf, 0); k++) {
      $addStyleName(this$static.tblProf.cellFormatter, j, k, 'FlexTable-Cell-Total');
    }
  }
}

function RptTimeByDepartmentView_0(){
  this.widget = $build_f_HTMLPanel1_11(new RptTimeByDepartmentView_BinderImpl$Widgets_0(this));
}

defineSeed(1060, 698, makeCastMap([Q$IsWidget, Q$RptTimeByDepartmentPresenter$MyView, Q$RptTimeByDepartmentView]), RptTimeByDepartmentView_0);
_.asWidget = function asWidget_15(){
  return this.widget;
}
;
function RptTimeByDepartmentView_BinderImpl_0(){
}

defineSeed(1061, 1, {}, RptTimeByDepartmentView_BinderImpl_0);
function $build_f_HTMLPanel1_11(this$static){
  var attachRecord10, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, f_HorizontalPanel5, f_Label6, lstDepartments, f_Label7, lstYears, f_Label8, tblProf;
  f_HTMLPanel1 = new HTMLPanel_0($html1_8(this$static.domId0).html);
  ($clinit_DOM() , f_HTMLPanel1.element).style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord10 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord10.origParent?$insertBefore(attachRecord10.origParent, attachRecord10.element, attachRecord10.origSibling):orphan(attachRecord10.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_6(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_10(f_VerticalPanel3, (f_Label4 = new Label_0 , $setClassName(f_Label4.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label4, ALIGN_CENTER) , $setTextOrHtml(f_Label4.directionalTextHelper, 'RAPPORT DES HEURES PAR DEPARTEMENT', false) , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , f_Label4)) , $add_10(f_VerticalPanel3, (f_HorizontalPanel5 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel5, ALIGN_LEFT) , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_8(f_HorizontalPanel5, (f_Label6 = new Label_0 , $setAutoHorizontalAlignment(f_Label6, ALIGN_RIGHT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir un d\xE9partement :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_8(f_HorizontalPanel5, (lstDepartments = new ListBox_0 , $addDomHandler(lstDepartments, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstDepartments = lstDepartments , lstDepartments)) , $add_8(f_HorizontalPanel5, (f_Label7 = new Label_0 , $setAutoHorizontalAlignment(f_Label7, ALIGN_RIGHT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_8(f_HorizontalPanel5, (lstYears = new ListBox_0 , $addDomHandler(lstYears, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstYears = lstYears , lstYears)) , $setClassName(f_HorizontalPanel5.element, 'subSection') , f_HorizontalPanel5.element.style['width'] = '60%' , $setPropertyInt(f_HorizontalPanel5.table, 'cellSpacing', 5) , f_HorizontalPanel5)) , $add_10(f_VerticalPanel3, (f_Label8 = new Label_0 , $setClassName(f_Label8.element, 'hiddenText') , $setTextOrHtml(f_Label8.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_10(f_VerticalPanel3, (tblProf = new FlexTable_0 , tblProf.element.style['height'] = '100%' , tblProf.element.style['width'] = '100%' , this$static.owner.tblProf = tblProf , tblProf)) , f_VerticalPanel3.element.style['height'] = '' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_FlowPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function RptTimeByDepartmentView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RptTimeByDepartmentView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new RptTimeByDepartmentView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1062, 1, {}, RptTimeByDepartmentView_BinderImpl$Widgets_0);
function RptTimeByDepartmentView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1063, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByDepartmentView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_4(event_0){
  $onLstDepartmentsChange(this.this$1.owner);
}
;
function RptTimeByDepartmentView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1064, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByDepartmentView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_5(event_0){
  $onLstYearsChange(this.this$1.owner);
}
;
function $html1_8(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$) {
    result = new RptTimeByDepartmentView_0(new RptTimeByDepartmentView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$;
}

function $listAllByCourseWithTime(this$static, deptId, year){
  var x_0;
  x_0 = new ProfessorRequestFactory_ProfessorRequestContextImpl$7X_0(this$static, deptId, year);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$7X_0(this$0, val$deptId, val$year){
  this.val$deptId = val$deptId;
  this.val$year = val$year;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1224, 633, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_24(){
  return new RequestData_0('fn0y14SFjm2fiaJ$NsdUMYOo5Gk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$deptId, valueOf_1(this.val$year)]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
_.val$year = 0;
var Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter', 840), Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter$1', 841), Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter$2', 842), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView', 1060), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl', 1061), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl$Widgets', 1062), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl$Widgets$1', 1063), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl$Widgets$2', 1064), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$7X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$7X', 1224);
$entry(onLoad)(11);
