function Presenter_1(eventBus, view, proxy, slot){
  Presenter_2.call(this, eventBus, view, proxy, slot);
}

function $initWidget_0(this$static, widget){
  this$static.widget_0 = widget;
}

function $onMonthChanged_0(this$static, selectedYear, selectedMonth){
  var rcl, rfl;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire($listAllFullDetailByManager(rcl, selectedYear, selectedMonth, '' + toString_6(this$static.currentUser.userId.value_0)), new RptTimeByStatusPresenter$1_0(this$static));
}

function RptTimeByStatusPresenter_0(eventBus, view, proxy){
  $clinit_RptTimeByStatusPresenter();
  Presenter_1.call(this, eventBus, view, proxy, ($clinit_MainPagePresenter() , TYPE_SetMainContent));
  dynamicCast(this.view, Q$RptTimeByStatusPresenter$MyView).setUiHandlers(this);
}

defineSeed(931, 688, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$RptTimeByStatusPresenter, Q$RptTimeByStatusUiHandlers]), RptTimeByStatusPresenter_0);
_.onBind = function onBind_20(){
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_15(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_13(){
  $initializeValues(dynamicCast(this.view, Q$RptTimeByStatusPresenter$MyView), this.currentUser.currentYear);
  $initializeTable(dynamicCast(this.view, Q$RptTimeByStatusPresenter$MyView));
}
;
_.revealInParent = function revealInParent_19(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_48(this$static, response){
  $setLogData(dynamicCast(this$static.this$0.view, Q$RptTimeByStatusPresenter$MyView), response);
}

function RptTimeByStatusPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(932, 624, makeCastMap([Q$Receiver]), RptTimeByStatusPresenter$1_0);
_.onFailure_0 = function onFailure_69(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_69(response){
  $onSuccess_48(this, dynamicCast(response, Q$List));
}
;
function $initializeTable(this$static){
  $removeAllRows(this$static.tblProfs);
  $setWidth_0(this$static.tblProfs, '100%');
  $setText(this$static.tblProfs, 0, 0, 'Professeur');
  $setText(this$static.tblProfs, 0, 1, 'D\xE9partement');
  $setText(this$static.tblProfs, 0, 2, 'Cours');
  $setText(this$static.tblProfs, 0, 3, 'Maladie');
  $setText(this$static.tblProfs, 0, 4, 'F\xE9ri\xE9s');
  $setText(this$static.tblProfs, 0, 5, 'Priv\xE9');
  $setText(this$static.tblProfs, 0, 6, 'Supervision');
  $setText(this$static.tblProfs, 0, 7, 'Total');
  $setText(this$static.tblProfs, 0, 8, 'Frais');
  $setText(this$static.tblProfs, 0, 9, 'Remarque');
  $styleTable(this$static);
}

function $initializeValues(this$static, currentYear){
  var i, i0;
  $selectClear($getSelectElement(this$static.lstMonth));
  $insertItem(this$static.lstMonth, '', '', -1);
  for (i0 = 0; i0 < 12; i0++) {
    $insertItem(this$static.lstMonth, '' + (i0 + 1), '' + (i0 + 1), -1);
  }
  $selectClear($getSelectElement(this$static.lstYear));
  for (i = 0; i < 3; i++) {
    $insertItem(this$static.lstYear, '' + (i - 1 + currentYear), '' + (i - 1 + currentYear), -1);
    i - 1 + currentYear == currentYear && $setSelectedIndex_0(this$static.lstYear, i);
  }
}

function $onLstMonthChange(this$static){
  $removeAllRows(this$static.tblProfs);
  if ($equals_3($getValue_1(this$static.lstMonth, $getSelectElement(this$static.lstMonth).selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onMonthChanged_0(dynamicCast(this$static.uiHandlers, Q$RptTimeByStatusUiHandlers), __parseAndValidateInt($getValue_1(this$static.lstYear, $getSelectElement(this$static.lstYear).selectedIndex)), __parseAndValidateInt($getValue_1(this$static.lstMonth, $getSelectElement(this$static.lstMonth).selectedIndex)));
}

function $onLstYearChange(this$static){
  $removeAllRows(this$static.tblProfs);
  $setSelectedIndex_0(this$static.lstMonth, 0);
}

function $setLogData(this$static, logs){
  var currentCol, currentMemo, currentRow, i, k, prevDept, prevProf, totalCash, totalHour, totalProf, totalProfCash;
  $initializeTable(this$static);
  prevProf = '';
  prevDept = '';
  currentMemo = '';
  currentRow = 0;
  currentCol = 0;
  totalHour = 0;
  totalProf = 0;
  totalCash = 0;
  totalProfCash = 0;
  for (i = 0; i < logs.size_1(); i++) {
    if (!$equals_3(prevProf, dynamicCast(logs.get_1(i), Q$LogProxy).getProfName())) {
      currentRow = i + 1;
      if (currentRow > 1) {
        totalProf = totalProf + totalHour;
        totalProfCash = totalProfCash + totalCash;
        $setText(this$static.tblProfs, currentRow, 7, '' + totalProf);
        $setText(this$static.tblProfs, currentRow, 8, 'CHF ' + totalProfCash);
        $addStyleName(this$static.tblProfs.cellFormatter, currentRow, 7, 'FlexTable-Cell-Total');
        $addStyleName(this$static.tblProfs.cellFormatter, currentRow, 8, 'FlexTable-Cell-Total');
        totalHour = 0;
        totalProf = 0;
        totalCash = 0;
        totalProfCash = 0;
        currentRow = currentRow + 1;
        for (k = 0; k < 10; k++) {
          $setText(this$static.tblProfs, currentRow, 0, '');
          $addStyleName(this$static.tblProfs.cellFormatter, currentRow, k, 'FlexTable-Cell-Divider');
        }
        currentRow = currentRow + 1;
      }
      currentMemo = '';
      $setText(this$static.tblProfs, currentRow, 0, dynamicCast(logs.get_1(i), Q$LogProxy).getProfName());
      $setText(this$static.tblProfs, currentRow, 1, dynamicCast(logs.get_1(i), Q$LogProxy).getCourseName());
    }
    if (!$equals_3(prevDept, dynamicCast(logs.get_1(i), Q$LogProxy).getCourseName())) {
      currentRow = i + 1;
      if ($equals_3(prevProf, dynamicCast(logs.get_1(i), Q$LogProxy).getProfName())) {
        totalProf = totalProf + totalHour;
        totalProfCash = totalProfCash + totalCash;
      }
      if (!$equals_3(prevProf, dynamicCast(logs.get_1(i), Q$LogProxy).getProfName()) && currentRow > 1) {
        currentRow = currentRow + 1;
        for (k = 0; k < 10; k++) {
          $setText(this$static.tblProfs, currentRow, 0, '');
          $addStyleName(this$static.tblProfs.cellFormatter, currentRow, k, 'FlexTable-Cell-Divider');
        }
        currentRow = currentRow + 1;
      }
      $setText(this$static.tblProfs, currentRow, 1, dynamicCast(logs.get_1(i), Q$LogProxy).getCourseName());
      currentMemo = '';
      totalHour = 0;
      totalCash = 0;
    }
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '1.Cours') && (currentCol = 2);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '2.Maladie/ACC') && (currentCol = 3);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '3.F\xE9ri\xE9s') && (currentCol = 4);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '4.Priv\xE9') && (currentCol = 5);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '5.Supervision') && (currentCol = 6);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais') && (currentCol = 8);
    !$equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais') && dynamicCast(logs.get_1(i), Q$LogProxy).isApproved() && (totalHour = totalHour + dynamicCast(logs.get_1(i), Q$LogProxy).getHour());
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais') && dynamicCast(logs.get_1(i), Q$LogProxy).isApproved() && (totalCash = totalCash + dynamicCast(logs.get_1(i), Q$LogProxy).getHour());
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais')?dynamicCast(logs.get_1(i), Q$LogProxy).isApproved() && $setText(this$static.tblProfs, currentRow, currentCol, dynamicCast(logs.get_1(i), Q$LogProxy).getHour() > 0?'CHF ' + dynamicCast(logs.get_1(i), Q$LogProxy).getHour():''):$setText(this$static.tblProfs, currentRow, currentCol, dynamicCast(logs.get_1(i), Q$LogProxy).getHour() > 0?'' + dynamicCast(logs.get_1(i), Q$LogProxy).getHour():'');
    dynamicCast(logs.get_1(i), Q$LogProxy).isApproved() && $setText(this$static.tblProfs, currentRow, 7, '' + totalHour);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getMemo(), '') || (currentMemo = dynamicCast(logs.get_1(i), Q$LogProxy).getMemo() + '. ' + currentMemo);
    $setText(this$static.tblProfs, currentRow, 9, currentMemo);
    $setText(this$static.tblProfs, currentRow, 10, dynamicCast(logs.get_1(i), Q$LogProxy).isApproved()?'':'D\xE9sapprouv\xE9es');
    prevProf = dynamicCast(logs.get_1(i), Q$LogProxy).getProfName();
    prevDept = dynamicCast(logs.get_1(i), Q$LogProxy).getCourseName();
    if (i == logs.size_1() - 1) {
      currentRow = i + 2;
      totalProf = totalProf + totalHour;
      totalProfCash = totalProfCash + totalCash;
      $setText(this$static.tblProfs, currentRow, 7, '' + totalProf);
      $setText(this$static.tblProfs, currentRow, 8, 'CHF ' + totalProfCash);
      $addStyleName(this$static.tblProfs.cellFormatter, currentRow, 7, 'FlexTable-Cell-Total');
      $addStyleName(this$static.tblProfs.cellFormatter, currentRow, 8, 'FlexTable-Cell-Total');
    }
  }
  $styleTable(this$static);
}

function $styleTable(this$static){
  var j, k;
  for (j = 0; j < $getDOMRowCount(this$static.tblProfs); j++) {
    for (k = 0; k < $getCellCount(this$static.tblProfs, j); k++) {
      $equals_3($getElement_0(this$static.tblProfs.cellFormatter, j, k).className, '') && $addStyleName(this$static.tblProfs.cellFormatter, j, k, 'FlexTable-Cell');
    }
  }
}

function RptTimeByStatusView_0(){
  $initWidget_0(this, $build_f_HTMLPanel1(new RptTimeByStatusView_BinderImpl$Widgets_0(this)));
}

defineSeed(937, 693, makeCastMap([Q$IsWidget, Q$RptTimeByStatusPresenter$MyView]), RptTimeByStatusView_0);
function RptTimeByStatusView_BinderImpl_0(){
}

defineSeed(938, 1, {}, RptTimeByStatusView_BinderImpl_0);
function $build_f_HTMLPanel1(this$static){
  var attachRecord18, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, f_HorizontalPanel5, f_Label6, lstYear, f_Label7, lstMonth, f_Label8, tblProfs;
  f_HTMLPanel1 = new HTMLPanel_0($html1_1(this$static.domId0).html);
  ($clinit_DOM() , f_HTMLPanel1.element).style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord18 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord18.origParent?$insertBefore(attachRecord18.origParent, attachRecord18.element, attachRecord18.origSibling):orphan(attachRecord18.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_6(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_10(f_VerticalPanel3, (f_Label4 = new Label_0 , $setClassName(f_Label4.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label4, ALIGN_CENTER) , $setTextOrHtml(f_Label4.directionalTextHelper, 'RAPPORT DES HEURES PAR RESPONSABLE', false) , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , f_Label4)) , $add_10(f_VerticalPanel3, (f_HorizontalPanel5 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel5, ALIGN_LEFT) , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_8(f_HorizontalPanel5, (f_Label6 = new Label_0 , $setAutoHorizontalAlignment(f_Label6, ALIGN_RIGHT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir une ann\xE9e :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_8(f_HorizontalPanel5, (lstYear = new ListBox_0 , $addDomHandler(lstYear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstYear = lstYear , lstYear)) , $add_8(f_HorizontalPanel5, (f_Label7 = new Label_0 , $setAutoHorizontalAlignment(f_Label7, ALIGN_RIGHT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Choisir un mois :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_8(f_HorizontalPanel5, (lstMonth = new ListBox_0 , $addDomHandler(lstMonth, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstMonth = lstMonth , lstMonth)) , $setClassName(f_HorizontalPanel5.element, 'subSection') , f_HorizontalPanel5.element.style['width'] = '60%' , $setPropertyInt(f_HorizontalPanel5.table, 'cellSpacing', 5) , f_HorizontalPanel5)) , $add_10(f_VerticalPanel3, (f_Label8 = new Label_0 , $setClassName(f_Label8.element, 'hiddenText') , $setTextOrHtml(f_Label8.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_10(f_VerticalPanel3, (tblProfs = new FlexTable_0 , tblProfs.element.style['height'] = '100%' , tblProfs.element.style['width'] = '100%' , this$static.owner.tblProfs = tblProfs , tblProfs)) , f_VerticalPanel3.element.style['height'] = '' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '' , f_FlowPanel2.element.style['width'] = '' , f_FlowPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function RptTimeByStatusView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RptTimeByStatusView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new RptTimeByStatusView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(939, 1, {}, RptTimeByStatusView_BinderImpl$Widgets_0);
function RptTimeByStatusView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(940, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByStatusView_BinderImpl$Widgets$1_0);
_.onChange = function onChange(event_0){
  $onLstYearChange(this.this$1.owner);
}
;
function RptTimeByStatusView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(941, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByStatusView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_0(event_0){
  $onLstMonthChange(this.this$1.owner);
}
;
function $html1_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$_annotation$$none$$) {
    result = new RptTimeByStatusPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusView$_annotation$$none$$(this$static), $get_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusView$_annotation$$none$$) {
    result = new RptTimeByStatusView_0(new RptTimeByStatusView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusView$_annotation$$none$$;
}

defineSeed(945, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_70(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $listAllFullDetailByManager(this$static, selectedYear, selectedMonth, managerId){
  var x_0;
  x_0 = new LogRequestFactory_LogRequestContextImpl$8X_0(this$static, selectedYear, selectedMonth, managerId);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function LogRequestFactory_LogRequestContextImpl$8X_0(this$0, val$selectedYear, val$selectedMonth, val$managerId){
  this.val$selectedYear = val$selectedYear;
  this.val$selectedMonth = val$selectedMonth;
  this.val$managerId = val$managerId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1204, 628, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_15(){
  return new RequestData_0('9i$cjMWx0a5wDkXS2I7tWJpvo8A=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(this.val$selectedYear), valueOf_1(this.val$selectedMonth), this.val$managerId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.val$selectedMonth = 0;
_.val$selectedYear = 0;
var Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusPresenter_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus.', 'RptTimeByStatusPresenter', 931), Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus.', 'RptTimeByStatusPresenter$1', 932), Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusView_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus.', 'RptTimeByStatusView', 937), Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus.', 'RptTimeByStatusView_BinderImpl', 938), Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus.', 'RptTimeByStatusView_BinderImpl$Widgets', 939), Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus.', 'RptTimeByStatusView_BinderImpl$Widgets$1', 940), Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus.', 'RptTimeByStatusView_BinderImpl$Widgets$2', 941), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$8X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$8X', 1204);
$entry(onLoad)(19);
