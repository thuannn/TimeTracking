function $setRowSpan(this$static, row){
  (this$static.this$0.prepareCell(row, 0) , $getCellElement(this$static.this$0.bodyElem, row, 0))['rowSpan'] = 2;
}

function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter_RptTimeByDepartmentPresenter_methodInjection(_0, _1){
  return new RptTimeByDepartmentPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter_RptTimeByDepartmentPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$ = new RptTimeByDepartmentView_0(new RptTimeByDepartmentView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$ = new RptTimeByDepartmentPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$;
}

defineSeed(771, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_14(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onDepartmentSelected_0(this$static, deptId){
  var rc, rf;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllByCourseWithTime(rc, deptId, this$static.currentUser.currentYear), new RptTimeByDepartmentPresenter$2_0(this$static));
}

function RptTimeByDepartmentPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(859, 689, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$RptTimeByDepartmentPresenter, Q$RptTimeByDepartmentUiHandler]), RptTimeByDepartmentPresenter_0);
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
  var rf, rc;
  $removeAllRows(dynamicCast(dynamicCast(this.view, Q$RptTimeByDepartmentPresenter$MyView), Q$RptTimeByDepartmentView).tblProf);
  rf = new UserRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($getDepartments(rc, this.currentUser.userId), new RptTimeByDepartmentPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_11(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.currentUser = null;
function $onSuccess_27(this$static, response){
  $setDepartmentList_0(dynamicCast(this$static.this$0.view, Q$RptTimeByDepartmentPresenter$MyView), response);
}

function RptTimeByDepartmentPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(860, 628, makeCastMap([Q$Receiver]), RptTimeByDepartmentPresenter$1_0);
_.onFailure_0 = function onFailure_45(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_45(response){
  $onSuccess_27(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_28(this$static, response){
  $setData_4(dynamicCast(this$static.this$0.view, Q$RptTimeByDepartmentPresenter$MyView), response);
}

function RptTimeByDepartmentPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(861, 628, makeCastMap([Q$Receiver]), RptTimeByDepartmentPresenter$2_0);
_.onFailure_0 = function onFailure_46(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_46(response){
  $onSuccess_28(this, dynamicCast(response, Q$List));
}
;
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
  if ($equals_4($getValue_1(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onDepartmentSelected_0(dynamicCast(this$static.uiHandlers, Q$RptTimeByDepartmentUiHandler), $getValue_1(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex));
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
  this.widget = $build_f_HTMLPanel1_10(new RptTimeByDepartmentView_BinderImpl$Widgets_0(this));
}

defineSeed(1009, 694, makeCastMap([Q$RptTimeByDepartmentPresenter$MyView, Q$RptTimeByDepartmentView]), RptTimeByDepartmentView_0);
_.asWidget = function asWidget_13(){
  return this.widget;
}
;
_.lstDepartments = null;
_.tblProf = null;
_.widget = null;
function RptTimeByDepartmentView_BinderImpl_0(){
}

defineSeed(1010, 1, {}, RptTimeByDepartmentView_BinderImpl_0);
function $build_f_HTMLPanel1_10(this$static){
  var attachRecord3, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, f_HorizontalPanel5, f_Label6, lstDepartments, tblProf;
  f_HTMLPanel1 = new HTMLPanel_0($html1_8(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord3 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord3.origParent?$insertBefore(attachRecord3.origParent, attachRecord3.element, attachRecord3.origSibling):orphan(attachRecord3.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_4(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_0(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , $add_8(f_VerticalPanel3, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label4.directionalTextHelper, 'Informations des heures par d\xE9partement') , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , f_Label4)) , $add_8(f_VerticalPanel3, (f_HorizontalPanel5 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_6(f_HorizontalPanel5, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'D\xE9partements :') , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_6(f_HorizontalPanel5, (lstDepartments = new ListBox_0 , $addDomHandler(lstDepartments, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstDepartments = lstDepartments , lstDepartments)) , f_HorizontalPanel5.element.style['width'] = '80%' , f_HorizontalPanel5.table['cellSpacing'] = 2 , f_HorizontalPanel5)) , $add_8(f_VerticalPanel3, (tblProf = new FlexTable_0 , tblProf.element.style['height'] = '100%' , tblProf.element.style['width'] = '100%' , this$static.owner.tblProf = tblProf , tblProf)) , f_VerticalPanel3.element.style['height'] = '' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 2 , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_FlowPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function RptTimeByDepartmentView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RptTimeByDepartmentView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1011, 1, {}, RptTimeByDepartmentView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function RptTimeByDepartmentView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1012, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByDepartmentView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_3(event_0){
  $onLstDepartmentsChange(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_8(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

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

defineSeed(1139, 632, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_19(){
  return new RequestData_0('fn0y14SFjm2fiaJ$NsdUMYOo5Gk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$deptId, valueOf_1(this.val$year)]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
_.val$deptId = null;
_.val$year = 0;
var Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter', 859), Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter$1', 860), Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByDepartmentPresenter$2', 861), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView', 1009), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl', 1010), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl$Widgets', 1011), Lcom_lemania_timetracking_client_view_RptTimeByDepartmentView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByDepartmentView_BinderImpl$Widgets$1', 1012), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$4X', 1139);
$entry(onLoad)(6);
