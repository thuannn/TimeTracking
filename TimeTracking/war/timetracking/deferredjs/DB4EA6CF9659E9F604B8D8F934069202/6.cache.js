function $onProfSelected(this$static, profId, year){
  var rcl, rfl, x_0;
  rfl = new LogRequestFactoryImpl_0;
  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire((x_0 = new LogRequestFactory_LogRequestContextImpl$11X_0(rcl, profId, year) , $addInvocation(rcl.state.dialect, x_0) , x_0), new RptTimeByProfPresenter$2_0(this$static));
}

function RptTimeByProfPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(851, 691, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$RptTimeByProfPresenter, Q$ExtractDataUiHandler]), RptTimeByProfPresenter_0);
_.onBind = function onBind_15(){
  dynamicCast(this.view, Q$RptTimeByProfPresenter$MyView).setUiHandlers(this);
  $initializeTable_6(dynamicCast(this.view, Q$RptTimeByProfPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_11(event_0){
}
;
_.onReset = function onReset_8(){
  var rf, rc;
  $removeAllRows(dynamicCast(dynamicCast(this.view, Q$RptTimeByProfPresenter$MyView), Q$RptTimeByProfView).tblLogs);
  $clearProfList(dynamicCast(this.view, Q$RptTimeByProfPresenter$MyView));
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllActive_0(rc, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)), new RptTimeByProfPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_29(this$static, response){
  $setProfList(dynamicCast(this$static.this$0.view, Q$RptTimeByProfPresenter$MyView), response);
}

function RptTimeByProfPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(852, 627, makeCastMap([Q$Receiver]), RptTimeByProfPresenter$1_0);
_.onFailure_0 = function onFailure_31(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_31(response){
  $onSuccess_29(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_30(this$static, response){
  $setLogData_1(dynamicCast(this$static.this$0.view, Q$RptTimeByProfPresenter$MyView), response);
}

function RptTimeByProfPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(853, 627, makeCastMap([Q$Receiver]), RptTimeByProfPresenter$2_0);
_.onFailure_0 = function onFailure_32(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_32(response){
  $onSuccess_30(this, dynamicCast(response, Q$List));
}
;
function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$) {
    result = new RptTimeByProfPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$RptTimeByProfView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$;
}

defineSeed(928, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_66(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $clearProfList(this$static){
  $selectClear($getSelectElement(this$static.lstProfs));
  $populateYearList(this$static);
}

function $initializeTable_6(this$static){
  $removeAllRows(this$static.tblLogs);
  $setWidth_0(this$static.tblLogs, '100%');
  $setText(this$static.tblLogs, 0, 0, 'Mois');
  $setText(this$static.tblLogs, 0, 1, 'D\xE9partement');
  $setText(this$static.tblLogs, 0, 2, 'Cours');
  $setText(this$static.tblLogs, 0, 3, 'Maladie');
  $setText(this$static.tblLogs, 0, 4, 'F\xE9ri\xE9s');
  $setText(this$static.tblLogs, 0, 5, 'Priv\xE9');
  $setText(this$static.tblLogs, 0, 6, 'Supervision');
  $setText(this$static.tblLogs, 0, 7, 'Total');
  $setText(this$static.tblLogs, 0, 8, 'Frais');
  $setText(this$static.tblLogs, 0, 9, 'Remarque');
  $styleTable_2(this$static);
}

function $onListDepartmentsSelected(this$static){
  $removeAllRows(this$static.tblLogs);
  $selectClear($getElement(this$static.lstProfs));
  $populateYearList(this$static);
  if ($equals_3($getValue_1(this$static.lstDepartments, $getSelectElement(this$static.lstDepartments).selectedIndex), ''))
    return;
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler) , $getValue_1(this$static.lstDepartments, $getSelectElement(this$static.lstDepartments).selectedIndex) , undefined);
}

function $onLstYearsChange_0(this$static){
  $removeAllRows(this$static.tblLogs);
  if ($equals_3($getValue_1(this$static.lstProfs, $getSelectElement(this$static.lstProfs).selectedIndex), '') || $equals_3($getValue_1(this$static.lstYears, $getSelectElement(this$static.lstYears).selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onProfSelected(dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler), $getValue_1(this$static.lstProfs, $getSelectElement(this$static.lstProfs).selectedIndex), $getValue_1(this$static.lstYears, $getSelectElement(this$static.lstYears).selectedIndex));
}

function $populateYearList(this$static){
  $selectClear($getSelectElement(this$static.lstYears));
  $insertItem(this$static.lstYears, '-', '', -1);
  $insertItem(this$static.lstYears, '2013', '2013', -1);
  $insertItem(this$static.lstYears, '2014', '2014', -1);
  $insertItem(this$static.lstYears, '2015', '2015', -1);
  $insertItem(this$static.lstYears, '2016', '2016', -1);
}

function $setLogData_1(this$static, logs){
  var currentCol, currentMemo, currentRow, i, k, prevDept, prevMonth, totalCash, totalHour, totalProf, totalProfCash, totalYearCash, totalYearHour;
  $initializeTable_6(this$static);
  prevDept = '';
  prevMonth = -1;
  currentMemo = '';
  currentRow = 0;
  currentCol = 0;
  totalHour = 0;
  totalProf = 0;
  totalCash = 0;
  totalProfCash = 0;
  totalYearHour = 0;
  totalYearCash = 0;
  for (i = 0; i < logs.size_1(); i++) {
    if (prevMonth != dynamicCast(logs.get_1(i), Q$LogProxy).getMonth_0()) {
      currentRow = i + 1;
      if (currentRow > 1) {
        totalProf = totalProf + totalHour;
        totalProfCash = totalProfCash + totalCash;
        $setText(this$static.tblLogs, currentRow, 7, '' + totalProf);
        $setText(this$static.tblLogs, currentRow, 8, 'CHF ' + totalProfCash);
        $addStyleName(this$static.tblLogs.cellFormatter, currentRow, 7, 'FlexTable-Cell-Total');
        $addStyleName(this$static.tblLogs.cellFormatter, currentRow, 8, 'FlexTable-Cell-Total');
        totalYearHour = totalYearHour + totalProf;
        totalYearCash = totalYearCash + totalProfCash;
        totalHour = 0;
        totalProf = 0;
        totalCash = 0;
        totalProfCash = 0;
        currentRow = currentRow + 1;
        for (k = 0; k < 10; k++) {
          $setText(this$static.tblLogs, currentRow, 0, '');
          $addStyleName(this$static.tblLogs.cellFormatter, currentRow, k, 'FlexTable-Cell-Divider');
        }
        currentRow = currentRow + 1;
      }
      currentMemo = '';
      $setText(this$static.tblLogs, currentRow, 0, '' + dynamicCast(logs.get_1(i), Q$LogProxy).getMonth_0());
      $setText(this$static.tblLogs, currentRow, 1, dynamicCast(logs.get_1(i), Q$LogProxy).getCourseName());
    }
    if (!$equals_3(prevDept, dynamicCast(logs.get_1(i), Q$LogProxy).getCourseName())) {
      currentRow = i + 1;
      if (prevMonth == dynamicCast(logs.get_1(i), Q$LogProxy).getMonth_0()) {
        totalProf = totalProf + totalHour;
        totalProfCash = totalProfCash + totalCash;
      }
      if (prevMonth != dynamicCast(logs.get_1(i), Q$LogProxy).getMonth_0() && currentRow > 1) {
        currentRow = currentRow + 1;
        for (k = 0; k < 10; k++) {
          $setText(this$static.tblLogs, currentRow, 0, '');
          $addStyleName(this$static.tblLogs.cellFormatter, currentRow, k, 'FlexTable-Cell-Divider');
        }
        currentRow = currentRow + 1;
      }
      currentMemo = '';
      totalHour = 0;
      totalCash = 0;
      $setText(this$static.tblLogs, currentRow, 1, dynamicCast(logs.get_1(i), Q$LogProxy).getCourseName());
    }
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '1.Cours') && (currentCol = 2);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '2.Maladie/ACC') && (currentCol = 3);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '3.F\xE9ri\xE9s') && (currentCol = 4);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '4.Priv\xE9') && (currentCol = 5);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '5.Supervision') && (currentCol = 6);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais') && (currentCol = 8);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais') || (totalHour = totalHour + dynamicCast(logs.get_1(i), Q$LogProxy).getHour());
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais') && (totalCash = totalCash + dynamicCast(logs.get_1(i), Q$LogProxy).getHour());
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais')?$setText(this$static.tblLogs, currentRow, currentCol, dynamicCast(logs.get_1(i), Q$LogProxy).getHour() > 0?'CHF ' + dynamicCast(logs.get_1(i), Q$LogProxy).getHour():''):$setText(this$static.tblLogs, currentRow, currentCol, dynamicCast(logs.get_1(i), Q$LogProxy).getHour() > 0?'' + dynamicCast(logs.get_1(i), Q$LogProxy).getHour():'');
    $setText(this$static.tblLogs, currentRow, 7, '' + totalHour);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getMemo(), '') || (currentMemo = dynamicCast(logs.get_1(i), Q$LogProxy).getMemo() + '. ' + currentMemo);
    $setText(this$static.tblLogs, currentRow, 9, currentMemo);
    prevDept = dynamicCast(logs.get_1(i), Q$LogProxy).getCourseName();
    prevMonth = dynamicCast(logs.get_1(i), Q$LogProxy).getMonth_0();
    if (i == logs.size_1() - 1) {
      currentRow = i + 2;
      totalProf = totalProf + totalHour;
      totalProfCash = totalProfCash + totalCash;
      $setText(this$static.tblLogs, currentRow, 7, '' + totalProf);
      $setText(this$static.tblLogs, currentRow, 8, 'CHF ' + totalProfCash);
      $addStyleName(this$static.tblLogs.cellFormatter, currentRow, 7, 'FlexTable-Cell-Total');
      $addStyleName(this$static.tblLogs.cellFormatter, currentRow, 8, 'FlexTable-Cell-Total');
      totalYearHour = totalYearHour + totalProf;
      totalYearCash = totalYearCash + totalProfCash;
    }
  }
  ++currentRow;
  $setText(this$static.tblLogs, currentRow, 6, 'Total : ');
  $setText(this$static.tblLogs, currentRow, 7, '' + totalYearHour);
  $setText(this$static.tblLogs, currentRow, 8, 'CHF ' + totalYearCash);
  $addStyleName(this$static.tblLogs.cellFormatter, currentRow, 7, 'FlexTable-Cell-Total');
  $addStyleName(this$static.tblLogs.cellFormatter, currentRow, 8, 'FlexTable-Cell-Total');
  $styleTable_2(this$static);
}

function $setProfList(this$static, profs){
  var p, p$iterator;
  $insertItem(this$static.lstProfs, '', '', -1);
  for (p$iterator = profs.iterator(); p$iterator.hasNext();) {
    p = dynamicCast(p$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstProfs, p.getProfName(), '' + toString_6(p.getId_0().value_0), -1);
  }
}

function $styleTable_2(this$static){
  var j, k, k0;
  for (j = 0; j < $getDOMRowCount(this$static.tblLogs); j++) {
    for (k0 = 0; k0 < $getCellCount(this$static.tblLogs, j); k0++) {
      $addStyleName(this$static.tblLogs.cellFormatter, j, k0, 'FlexTable-Cell');
    }
  }
  for (k = 0; k < $getCellCount(this$static.tblLogs, 0); k++) {
    $addStyleName(this$static.tblLogs.cellFormatter, $getDOMRowCount(this$static.tblLogs) - 1, k, 'FlexTable-Cell-Total');
  }
}

function RptTimeByProfView_0(){
  this.widget = $build_f_HTMLPanel1_13(new RptTimeByProfView_BinderImpl$Widgets_0(this));
}

defineSeed(1070, 696, makeCastMap([Q$IsWidget, Q$RptTimeByProfPresenter$MyView, Q$RptTimeByProfView]), RptTimeByProfView_0);
_.asWidget = function asWidget_17(){
  return this.widget;
}
;
function RptTimeByProfView_BinderImpl_0(){
}

defineSeed(1071, 1, {}, RptTimeByProfView_BinderImpl_0);
function $build_f_HTMLPanel1_13(this$static){
  var attachRecord5, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, f_HorizontalPanel5, f_Label6, lstDepartments, f_Label7, lstProfs, f_Label8, lstYears, f_Label9, tblLogs;
  f_HTMLPanel1 = new HTMLPanel_0($html1_10(this$static.domId0).html);
  ($clinit_DOM() , f_HTMLPanel1.element).style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord5 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord5.origParent?$insertBefore(attachRecord5.origParent, attachRecord5.element, attachRecord5.origSibling):orphan(attachRecord5.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_6(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_10(f_VerticalPanel3, (f_Label4 = new Label_0 , $setClassName(f_Label4.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label4, ALIGN_CENTER) , $setTextOrHtml(f_Label4.directionalTextHelper, 'RAPPORT DES HEURES PAR PROFESSEUR', false) , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , f_Label4)) , $add_10(f_VerticalPanel3, (f_HorizontalPanel5 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel5, ALIGN_LEFT) , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_8(f_HorizontalPanel5, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir un d\xE9partement :', false) , $updateHorizontalAlignment(f_Label6) , setVisible(f_Label6.element, false) , f_Label6)) , $add_8(f_HorizontalPanel5, (lstDepartments = new ListBox_0 , setVisible(lstDepartments.element, false) , $addDomHandler(lstDepartments, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstDepartments = lstDepartments , lstDepartments)) , $add_8(f_HorizontalPanel5, (f_Label7 = new Label_0 , $setAutoHorizontalAlignment(f_Label7, ALIGN_RIGHT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Nom du professeur :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_8(f_HorizontalPanel5, (lstProfs = new ListBox_0 , $addDomHandler(lstProfs, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProfs = lstProfs , lstProfs)) , $add_8(f_HorizontalPanel5, (f_Label8 = new Label_0 , $setAutoHorizontalAlignment(f_Label8, ALIGN_RIGHT) , $setTextOrHtml(f_Label8.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_8(f_HorizontalPanel5, (lstYears = new ListBox_0 , $addDomHandler(lstYears, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstYears = lstYears , lstYears)) , $setClassName(f_HorizontalPanel5.element, 'subSection') , f_HorizontalPanel5.element.style['width'] = '60%' , $setPropertyInt(f_HorizontalPanel5.table, 'cellSpacing', 5) , f_HorizontalPanel5)) , $add_10(f_VerticalPanel3, (f_Label9 = new Label_0 , $setClassName(f_Label9.element, 'hiddenText') , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_10(f_VerticalPanel3, (tblLogs = new FlexTable_0 , tblLogs.element.style['height'] = '100%' , $setPropertyString(tblLogs.tableElem, 'border', '0') , tblLogs.element.style['width'] = '100%' , this$static.owner.tblLogs = tblLogs , tblLogs)) , f_VerticalPanel3.element.style['height'] = '' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_FlowPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function RptTimeByProfView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RptTimeByProfView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new RptTimeByProfView_BinderImpl$Widgets$2_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new RptTimeByProfView_BinderImpl$Widgets$3_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1072, 1, {}, RptTimeByProfView_BinderImpl$Widgets_0);
function RptTimeByProfView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1073, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByProfView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_8(event_0){
  $onListDepartmentsSelected(this.this$1.owner);
}
;
function RptTimeByProfView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1074, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByProfView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_9(event_0){
  $populateYearList(this.this$1.owner);
}
;
function RptTimeByProfView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1075, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByProfView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_10(event_0){
  $onLstYearsChange_0(this.this$1.owner);
}
;
function $html1_10(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$RptTimeByProfView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByProfView$_annotation$$none$$) {
    result = new RptTimeByProfView_0(new RptTimeByProfView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByProfView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByProfView$_annotation$$none$$;
}

function LogRequestFactory_LogRequestContextImpl$11X_0(this$0, val$profId, val$year){
  this.val$profId = val$profId;
  this.val$year = val$year;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1203, 631, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$11X_0);
_.makeRequestData = function makeRequestData_11(){
  return new RequestData_0('o9i_UuShEjF$Gd$7shm4aORWsWc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$year]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter', 851), Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter$1', 852), Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter$2', 853), Lcom_lemania_timetracking_client_view_RptTimeByProfView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView', 1070), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl', 1071), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets', 1072), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets$1', 1073), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets$2', 1074), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets$3', 1075), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$11X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$11X', 1203);
$entry(onLoad)(6);
