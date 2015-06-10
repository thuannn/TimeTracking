function $onMonthChanged(this$static, selectedYear, selectedMonth){
  var rcl, rfl, x_0;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire((x_0 = new LogRequestFactory_LogRequestContextImpl$9X_0(rcl, selectedYear, selectedMonth) , $addInvocation(rcl.state.dialect, x_0) , x_0), new RptTimeByMonthPresenter$1_0(this$static));
}

function RptTimeByMonthPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(847, 693, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$RptTimeByMonthPresenter, Q$RptTimeByMonthUiHandler]), RptTimeByMonthPresenter_0);
_.onBind = function onBind_14(){
  dynamicCast(this.view, Q$RptTimeByMonthPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_9(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_7(){
  $initializeValues_0(dynamicCast(this.view, Q$RptTimeByMonthPresenter$MyView), this.currentUser.currentYear);
  $initializeTable_5(dynamicCast(this.view, Q$RptTimeByMonthPresenter$MyView));
}
;
_.revealInParent = function revealInParent_13(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_28(this$static, response){
  $setLogData_0(dynamicCast(this$static.this$0.view, Q$RptTimeByMonthPresenter$MyView), response);
}

function RptTimeByMonthPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(848, 629, makeCastMap([Q$Receiver]), RptTimeByMonthPresenter$1_0);
_.onFailure_0 = function onFailure_30(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_30(response){
  $onSuccess_28(this, dynamicCast(response, Q$List));
}
;
function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$) {
    result = new RptTimeByMonthPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$;
}

defineSeed(908, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_55(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable_5(this$static){
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
  $styleTable_1(this$static);
}

function $initializeValues_0(this$static, currentYear){
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

function $onLstMonthChanged(this$static){
  $removeAllRows(this$static.tblProfs);
  if ($equals_3($getValue_1(this$static.lstMonth, $getSelectElement(this$static.lstMonth).selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onMonthChanged(dynamicCast(this$static.uiHandlers, Q$RptTimeByMonthUiHandler), __parseAndValidateInt($getValue_1(this$static.lstYear, $getSelectElement(this$static.lstYear).selectedIndex)), __parseAndValidateInt($getValue_1(this$static.lstMonth, $getSelectElement(this$static.lstMonth).selectedIndex)));
}

function $onLstYearChanged(this$static){
  $removeAllRows(this$static.tblProfs);
  $setSelectedIndex_0(this$static.lstMonth, 0);
}

function $setLogData_0(this$static, logs){
  var currentCol, currentMemo, currentRow, i, k, prevDept, prevProf, totalCash, totalHour, totalProf, totalProfCash;
  $initializeTable_5(this$static);
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
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais') || (totalHour = totalHour + dynamicCast(logs.get_1(i), Q$LogProxy).getHour());
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais') && (totalCash = totalCash + dynamicCast(logs.get_1(i), Q$LogProxy).getHour());
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getTypeName(), '6.Frais')?$setText(this$static.tblProfs, currentRow, currentCol, dynamicCast(logs.get_1(i), Q$LogProxy).getHour() > 0?'CHF ' + dynamicCast(logs.get_1(i), Q$LogProxy).getHour():''):$setText(this$static.tblProfs, currentRow, currentCol, dynamicCast(logs.get_1(i), Q$LogProxy).getHour() > 0?'' + dynamicCast(logs.get_1(i), Q$LogProxy).getHour():'');
    $setText(this$static.tblProfs, currentRow, 7, '' + totalHour);
    $equals_3(dynamicCast(logs.get_1(i), Q$LogProxy).getMemo(), '') || (currentMemo = dynamicCast(logs.get_1(i), Q$LogProxy).getMemo() + '. ' + currentMemo);
    $setText(this$static.tblProfs, currentRow, 9, currentMemo);
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
  $styleTable_1(this$static);
}

function $styleTable_1(this$static){
  var j, k;
  for (j = 0; j < $getDOMRowCount(this$static.tblProfs); j++) {
    for (k = 0; k < $getCellCount(this$static.tblProfs, j); k++) {
      $equals_3($getElement_0(this$static.tblProfs.cellFormatter, j, k).className, '') && $addStyleName(this$static.tblProfs.cellFormatter, j, k, 'FlexTable-Cell');
    }
  }
}

function RptTimeByMonthView_0(){
  this.widget = $build_f_HTMLPanel1_12(new RptTimeByMonthView_BinderImpl$Widgets_0(this));
}

defineSeed(1066, 698, makeCastMap([Q$IsWidget, Q$RptTimeByMonthPresenter$MyView]), RptTimeByMonthView_0);
_.asWidget = function asWidget_16(){
  return this.widget;
}
;
function RptTimeByMonthView_BinderImpl_0(){
}

defineSeed(1067, 1, {}, RptTimeByMonthView_BinderImpl_0);
function $build_f_HTMLPanel1_12(this$static){
  var attachRecord11, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, f_HorizontalPanel5, f_Label6, lstYear, f_Label7, lstMonth, f_Label8, tblProfs;
  f_HTMLPanel1 = new HTMLPanel_0($html1_9(this$static.domId0).html);
  ($clinit_DOM() , f_HTMLPanel1.element).style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord11 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord11.origParent?$insertBefore(attachRecord11.origParent, attachRecord11.element, attachRecord11.origSibling):orphan(attachRecord11.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_6(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_10(f_VerticalPanel3, (f_Label4 = new Label_0 , $setClassName(f_Label4.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label4, ALIGN_CENTER) , $setTextOrHtml(f_Label4.directionalTextHelper, 'RAPPORT DES HEURES PAR MOIS', false) , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , f_Label4)) , $add_10(f_VerticalPanel3, (f_HorizontalPanel5 = new HorizontalPanel_0 , $setHorizontalAlignment_0(f_HorizontalPanel5, ALIGN_LEFT) , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_8(f_HorizontalPanel5, (f_Label6 = new Label_0 , $setAutoHorizontalAlignment(f_Label6, ALIGN_RIGHT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir une ann\xE9e :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_8(f_HorizontalPanel5, (lstYear = new ListBox_0 , $addDomHandler(lstYear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstYear = lstYear , lstYear)) , $add_8(f_HorizontalPanel5, (f_Label7 = new Label_0 , $setAutoHorizontalAlignment(f_Label7, ALIGN_RIGHT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Choisir un mois :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_8(f_HorizontalPanel5, (lstMonth = new ListBox_0 , $addDomHandler(lstMonth, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstMonth = lstMonth , lstMonth)) , $setClassName(f_HorizontalPanel5.element, 'subSection') , f_HorizontalPanel5.element.style['width'] = '60%' , $setPropertyInt(f_HorizontalPanel5.table, 'cellSpacing', 5) , f_HorizontalPanel5)) , $add_10(f_VerticalPanel3, (f_Label8 = new Label_0 , $setClassName(f_Label8.element, 'hiddenText') , $setTextOrHtml(f_Label8.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_10(f_VerticalPanel3, (tblProfs = new FlexTable_0 , tblProfs.element.style['height'] = '100%' , tblProfs.element.style['width'] = '100%' , this$static.owner.tblProfs = tblProfs , tblProfs)) , f_VerticalPanel3.element.style['height'] = '' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '' , f_FlowPanel2.element.style['width'] = '' , f_FlowPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function RptTimeByMonthView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RptTimeByMonthView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new RptTimeByMonthView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1068, 1, {}, RptTimeByMonthView_BinderImpl$Widgets_0);
function RptTimeByMonthView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1069, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByMonthView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_6(event_0){
  $onLstYearChanged(this.this$1.owner);
}
;
function RptTimeByMonthView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1070, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByMonthView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_7(event_0){
  $onLstMonthChanged(this.this$1.owner);
}
;
function $html1_9(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$) {
    result = new RptTimeByMonthView_0(new RptTimeByMonthView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$;
}

function LogRequestFactory_LogRequestContextImpl$9X_0(this$0, val$selectedYear, val$selectedMonth){
  this.val$selectedYear = val$selectedYear;
  this.val$selectedMonth = val$selectedMonth;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1210, 633, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_16(){
  return new RequestData_0('5h14jyFhSA0RGLHOcpBdXq$DtWU=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(this.val$selectedYear), valueOf_1(this.val$selectedMonth)]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.val$selectedMonth = 0;
_.val$selectedYear = 0;
var Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByMonthPresenter', 847), Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByMonthPresenter$1', 848), Lcom_lemania_timetracking_client_view_RptTimeByMonthView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByMonthView', 1066), Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByMonthView_BinderImpl', 1067), Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByMonthView_BinderImpl$Widgets', 1068), Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByMonthView_BinderImpl$Widgets$1', 1069), Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByMonthView_BinderImpl$Widgets$2', 1070), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$9X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$9X', 1210);
$entry(onLoad)(12);
