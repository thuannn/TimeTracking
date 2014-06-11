function $onProfSelected(this$static, profId, year){
  var rcl, rfl, x;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire((x = new LogRequestFactory_LogRequestContextImpl$9X_0(rcl, profId, year) , $addInvocation(rcl.state.dialect, x) , x), new RptTimeByProfPresenter$2_0(this$static));
}

function RptTimeByProfPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(821, 663, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$RptTimeByProfPresenter, Q$ExtractDataUiHandler]), RptTimeByProfPresenter_0);
_.onBind = function onBind_15(){
  dynamicCast(this.view, Q$RptTimeByProfPresenter$MyView).setUiHandlers(this);
  $initializeTable_5(dynamicCast(this.view, Q$RptTimeByProfPresenter$MyView));
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
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire($listAllActive_0(rc, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)), new RptTimeByProfPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_28(this$static, response){
  $setProfList(dynamicCast(this$static.this$0.view, Q$RptTimeByProfPresenter$MyView), response);
}

function RptTimeByProfPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(822, 602, makeCastMap([Q$Receiver]), RptTimeByProfPresenter$1_0);
_.onFailure_0 = function onFailure_30(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_30(response){
  $onSuccess_28(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_29(this$static, response){
  $setLogData_0(dynamicCast(this$static.this$0.view, Q$RptTimeByProfPresenter$MyView), response);
}

function RptTimeByProfPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(823, 602, makeCastMap([Q$Receiver]), RptTimeByProfPresenter$2_0);
_.onFailure_0 = function onFailure_31(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_31(response){
  $onSuccess_29(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$) {
    result = new RptTimeByProfPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$RptTimeByProfView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$;
}

defineSeed(893, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_62(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $clearProfList(this$static){
  $selectClear(this$static.lstProfs.element);
  $populateYearList_0(this$static);
}

function $initializeTable_5(this$static){
  $removeAllRows(this$static.tblLogs);
  $setWidth(this$static.tblLogs, '100%');
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
  $styleTable_1(this$static);
}

function $onListDepartmentsSelected(this$static){
  $removeAllRows(this$static.tblLogs);
  $selectClear(this$static.lstProfs.element);
  $populateYearList_0(this$static);
  if ($equals_3($getValue_1(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler) , $getValue_1(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex) , undefined);
}

function $onLstYearsChange_0(this$static){
  $removeAllRows(this$static.tblLogs);
  if ($equals_3($getValue_1(this$static.lstProfs, this$static.lstProfs.element.selectedIndex), '') || $equals_3($getValue_1(this$static.lstYears, this$static.lstYears.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onProfSelected(dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler), $getValue_1(this$static.lstProfs, this$static.lstProfs.element.selectedIndex), $getValue_1(this$static.lstYears, this$static.lstYears.element.selectedIndex));
}

function $populateYearList_0(this$static){
  $selectClear(this$static.lstYears.element);
  $insertItem(this$static.lstYears, '-', '', -1);
  $insertItem(this$static.lstYears, '2013', '2013', -1);
  $insertItem(this$static.lstYears, '2014', '2014', -1);
  $insertItem(this$static.lstYears, '2015', '2015', -1);
  $insertItem(this$static.lstYears, '2016', '2016', -1);
}

function $setLogData_0(this$static, logs){
  var currentCol, currentMemo, currentRow, i, k, prevDept, prevMonth, totalCash, totalHour, totalProf, totalProfCash, totalYearCash, totalYearHour;
  $initializeTable_5(this$static);
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
  for (i = 0; i < logs.size_1(); ++i) {
    if (prevMonth != dynamicCast(logs.get_0(i), Q$LogProxy).getMonth_0()) {
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
        for (k = 0; k < 10; ++k) {
          $setText(this$static.tblLogs, currentRow, 0, '');
          $addStyleName(this$static.tblLogs.cellFormatter, currentRow, k, 'FlexTable-Cell-Divider');
        }
        currentRow = currentRow + 1;
      }
      currentMemo = '';
      $setText(this$static.tblLogs, currentRow, 0, '' + dynamicCast(logs.get_0(i), Q$LogProxy).getMonth_0());
      $setText(this$static.tblLogs, currentRow, 1, dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName());
    }
    if (!$equals_3(prevDept, dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName())) {
      currentRow = i + 1;
      if (prevMonth == dynamicCast(logs.get_0(i), Q$LogProxy).getMonth_0()) {
        totalProf = totalProf + totalHour;
        totalProfCash = totalProfCash + totalCash;
      }
      if (prevMonth != dynamicCast(logs.get_0(i), Q$LogProxy).getMonth_0() && currentRow > 1) {
        currentRow = currentRow + 1;
        for (k = 0; k < 10; ++k) {
          $setText(this$static.tblLogs, currentRow, 0, '');
          $addStyleName(this$static.tblLogs.cellFormatter, currentRow, k, 'FlexTable-Cell-Divider');
        }
        currentRow = currentRow + 1;
      }
      currentMemo = '';
      totalHour = 0;
      totalCash = 0;
      $setText(this$static.tblLogs, currentRow, 1, dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName());
    }
    $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), '1.Cours') && (currentCol = 2);
    $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), '2.Maladie/ACC') && (currentCol = 3);
    $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), '3.F\xE9ri\xE9s') && (currentCol = 4);
    $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), '4.Priv\xE9') && (currentCol = 5);
    $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), '5.Supervision') && (currentCol = 6);
    $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), '6.Frais') && (currentCol = 8);
    $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), '6.Frais') || (totalHour = totalHour + dynamicCast(logs.get_0(i), Q$LogProxy).getHour());
    $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), '6.Frais') && (totalCash = totalCash + dynamicCast(logs.get_0(i), Q$LogProxy).getHour());
    $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), '6.Frais')?$setText(this$static.tblLogs, currentRow, currentCol, dynamicCast(logs.get_0(i), Q$LogProxy).getHour() > 0?'CHF ' + dynamicCast(logs.get_0(i), Q$LogProxy).getHour():''):$setText(this$static.tblLogs, currentRow, currentCol, dynamicCast(logs.get_0(i), Q$LogProxy).getHour() > 0?'' + dynamicCast(logs.get_0(i), Q$LogProxy).getHour():'');
    $setText(this$static.tblLogs, currentRow, 7, '' + totalHour);
    $equals_3(dynamicCast(logs.get_0(i), Q$LogProxy).getMemo(), '') || (currentMemo = dynamicCast(logs.get_0(i), Q$LogProxy).getMemo() + '. ' + currentMemo);
    $setText(this$static.tblLogs, currentRow, 9, currentMemo);
    prevDept = dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName();
    prevMonth = dynamicCast(logs.get_0(i), Q$LogProxy).getMonth_0();
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
  $styleTable_1(this$static);
}

function $setProfList(this$static, profs){
  var p, p$iterator;
  $insertItem(this$static.lstProfs, '', '', -1);
  for (p$iterator = profs.iterator(); p$iterator.hasNext();) {
    p = dynamicCast(p$iterator.next_0(), Q$ProfessorProxy);
    $insertItem(this$static.lstProfs, p.getProfName(), '' + toString_6(p.getId_0().value_0), -1);
  }
}

function $styleTable_1(this$static){
  var j, k;
  for (j = 0; j < this$static.tblLogs.bodyElem.rows.length; ++j) {
    for (k = 0; k < $getCellCount(this$static.tblLogs, j); ++k) {
      $addStyleName(this$static.tblLogs.cellFormatter, j, k, 'FlexTable-Cell');
    }
  }
  for (k = 0; k < $getCellCount(this$static.tblLogs, 0); ++k) {
    $addStyleName(this$static.tblLogs.cellFormatter, this$static.tblLogs.bodyElem.rows.length - 1, k, 'FlexTable-Cell-Total');
  }
}

function RptTimeByProfView_0(){
  this.widget = $build_f_HTMLPanel1_12(new RptTimeByProfView_BinderImpl$Widgets_0(this));
}

defineSeed(1016, 668, makeCastMap([Q$IsWidget, Q$RptTimeByProfPresenter$MyView, Q$RptTimeByProfView]), RptTimeByProfView_0);
_.asWidget = function asWidget_17(){
  return this.widget;
}
;
_.lstDepartments = null;
_.lstProfs = null;
_.lstYears = null;
_.tblLogs = null;
_.widget = null;
function RptTimeByProfView_BinderImpl_0(){
}

defineSeed(1017, 1, {}, RptTimeByProfView_BinderImpl_0);
function $build_f_HTMLPanel1_12(this$static){
  var attachRecord5, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, f_HorizontalPanel5, f_Label6, lstDepartments, f_Label7, lstProfs, f_Label8, lstYears, f_Label9, tblLogs;
  f_HTMLPanel1 = new HTMLPanel_0($html1_9(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord5 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord5.origParent?$insertBefore(attachRecord5.origParent, attachRecord5.element, attachRecord5.origSibling):orphan(attachRecord5.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_5(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_9(f_VerticalPanel3, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label4, ALIGN_CENTER) , $setTextOrHtml(f_Label4.directionalTextHelper, 'RAPPORT DES HEURES PAR PROFESSEUR', false) , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , f_Label4)) , $add_9(f_VerticalPanel3, (f_HorizontalPanel5 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel5, ALIGN_LEFT) , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_7(f_HorizontalPanel5, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir un d\xE9partement :', false) , $updateHorizontalAlignment(f_Label6) , setVisible(f_Label6.element, false) , f_Label6)) , $add_7(f_HorizontalPanel5, (lstDepartments = new ListBox_0 , setVisible(lstDepartments.element, false) , $addDomHandler(lstDepartments, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstDepartments = lstDepartments , lstDepartments)) , $add_7(f_HorizontalPanel5, (f_Label7 = new Label_0 , $setAutoHorizontalAlignment(f_Label7, ALIGN_RIGHT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Nom du professeur :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_7(f_HorizontalPanel5, (lstProfs = new ListBox_0 , $addDomHandler(lstProfs, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProfs = lstProfs , lstProfs)) , $add_7(f_HorizontalPanel5, (f_Label8 = new Label_0 , $setAutoHorizontalAlignment(f_Label8, ALIGN_RIGHT) , $setTextOrHtml(f_Label8.directionalTextHelper, 'Ann\xE9e :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_7(f_HorizontalPanel5, (lstYears = new ListBox_0 , $addDomHandler(lstYears, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, TYPE) , this$static.owner.lstYears = lstYears , lstYears)) , f_HorizontalPanel5.element['className'] = 'subSection' , f_HorizontalPanel5.element.style['width'] = '60%' , f_HorizontalPanel5.table['cellSpacing'] = 5 , f_HorizontalPanel5)) , $add_9(f_VerticalPanel3, (f_Label9 = new Label_0 , f_Label9.element['className'] = 'hiddenText' , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $add_9(f_VerticalPanel3, (tblLogs = new FlexTable_0 , tblLogs.element.style['height'] = '100%' , tblLogs.tableElem['border'] = '0' , tblLogs.element.style['width'] = '100%' , this$static.owner.tblLogs = tblLogs , tblLogs)) , f_VerticalPanel3.element.style['height'] = '' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 2 , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_FlowPanel2), $get_1(this$static.domId0Element));
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

defineSeed(1018, 1, {}, RptTimeByProfView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function RptTimeByProfView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1019, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByProfView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_6(event_0){
  $onListDepartmentsSelected(this.this$1.owner);
}
;
_.this$1 = null;
function RptTimeByProfView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1020, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByProfView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_7(event_0){
  $populateYearList_0(this.this$1.owner);
}
;
_.this$1 = null;
function RptTimeByProfView_BinderImpl$Widgets$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1021, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByProfView_BinderImpl$Widgets$3_0);
_.onChange = function onChange_8(event_0){
  $onLstYearsChange_0(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_9(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
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

function LogRequestFactory_LogRequestContextImpl$9X_0(this$0, val$profId, val$year){
  this.val$profId = val$profId;
  this.val$year = val$year;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1138, 606, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_12(){
  return new RequestData_0('o9i_UuShEjF$Gd$7shm4aORWsWc=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId, this.val$year]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.val$profId = null;
_.val$year = null;
var Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter', 821), Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter$1', 822), Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter$2', 823), Lcom_lemania_timetracking_client_view_RptTimeByProfView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView', 1016), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl', 1017), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets', 1018), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets$1', 1019), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets$2', 1020), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets$3', 1021), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$9X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$9X', 1138);
$entry(onLoad)(6);
