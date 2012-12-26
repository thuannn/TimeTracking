function $getStyleName(this$static, row, column){
  return $getPropertyString(($checkCellBounds(this$static.this$0, row, column) , $getCellElement(this$static.this$0.bodyElem, row, column)), 'className');
}

function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter_RptTimeByMonthPresenter_methodInjection(_0, _1){
  return new RptTimeByMonthPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter_RptTimeByMonthPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$ = new RptTimeByMonthView_0(new RptTimeByMonthView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$MyProxy$_annotation$$none$$ = new RptTimeByMonthPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$14$1.prototype;
_.onSuccess = function onSuccess_6(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $onMonthChanged(this$static, selectedYear, selectedMonth){
  var rcl, rfl, x;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this$static.eventBus, new DefaultRequestTransport_0);
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire((x = new LogRequestFactory_LogRequestContextImpl$6X_0(rcl, selectedYear, selectedMonth) , $addInvocation(rcl.state.dialect, x) , x), new RptTimeByMonthPresenter$1_0(this$static));
}

function RptTimeByMonthPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function RptTimeByMonthPresenter(){
}

_ = RptTimeByMonthPresenter_0.prototype = RptTimeByMonthPresenter.prototype = new Presenter;
_.getClass$ = function getClass_603(){
  return Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenter_2_classLit;
}
;
_.onBind = function onBind_14(){
  dynamicCast(this.view, Q$RptTimeByMonthPresenter$MyView).setUiHandlers(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_7(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_8(){
  $initializeValues(dynamicCast(this.view, Q$RptTimeByMonthPresenter$MyView), this.currentUser.currentYear);
  $initializeTable_5(dynamicCast(this.view, Q$RptTimeByMonthPresenter$MyView));
}
;
_.revealInParent = function revealInParent_12(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$RptTimeByMonthPresenter, Q$RptTimeByMonthUiHandler]);
_.currentUser = null;
function $onSuccess_25(this$static, response){
  $setLogData_0(dynamicCast(this$static.this$0.view, Q$RptTimeByMonthPresenter$MyView), response);
}

function RptTimeByMonthPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function RptTimeByMonthPresenter$1(){
}

_ = RptTimeByMonthPresenter$1_0.prototype = RptTimeByMonthPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_604(){
  return Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_41(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_41(response){
  $onSuccess_25(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $initializeTable_5(this$static){
  $removeAllRows(this$static.tblProfs);
  $setWidth(this$static.tblProfs, '100%');
  $setText(this$static.tblProfs, 0, 0, 'Professeur');
  $setText(this$static.tblProfs, 0, 1, 'D\xE9partement');
  $setText(this$static.tblProfs, 0, 2, 'Cours');
  $setText(this$static.tblProfs, 0, 3, 'Maladie');
  $setText(this$static.tblProfs, 0, 4, 'F\xE9ri\xE9s');
  $setText(this$static.tblProfs, 0, 5, 'Priv\xE9');
  $setText(this$static.tblProfs, 0, 6, 'Supervision');
  $setText(this$static.tblProfs, 0, 7, 'Totale');
  $setText(this$static.tblProfs, 0, 8, 'Frais');
  $setText(this$static.tblProfs, 0, 9, 'Remarque');
  $styleTable_1(this$static);
}

function $initializeValues(this$static, currentYear){
  var i;
  $selectClear(this$static.lstMonth.element);
  $insertItem(this$static.lstMonth, '', '', -1);
  for (i = 0; i < 12; ++i) {
    $insertItem(this$static.lstMonth, '' + (i + 1), '' + (i + 1), -1);
  }
  $selectClear(this$static.lstYear.element);
  for (i = 0; i < 3; ++i) {
    $insertItem(this$static.lstYear, '' + (i - 1 + currentYear), '' + (i - 1 + currentYear), -1);
    i - 1 + currentYear == currentYear && $setSelectedIndex_0(this$static.lstYear, i);
  }
}

function $onLstMonthChanged(this$static){
  $removeAllRows(this$static.tblProfs);
  if ($equals_5($getValue_0(this$static.lstMonth, this$static.lstMonth.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onMonthChanged(dynamicCast(this$static.uiHandlers, Q$RptTimeByMonthUiHandler), __parseAndValidateInt($getValue_0(this$static.lstYear, this$static.lstYear.element.selectedIndex)), __parseAndValidateInt($getValue_0(this$static.lstMonth, this$static.lstMonth.element.selectedIndex)));
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
  for (i = 0; i < logs.size_1(); ++i) {
    if (!$equals_5(prevProf, dynamicCast(logs.get_0(i), Q$LogProxy).getProfName())) {
      currentRow = i + 1;
      if (currentRow > 1) {
        totalProf = totalProf + totalHour;
        totalProfCash = totalProfCash + totalCash;
        $setText(this$static.tblProfs, currentRow, 7, '' + totalProf);
        $setText(this$static.tblProfs, currentRow, 8, 'CHF ' + totalProfCash);
        $addStyleName(this$static.tblProfs.cellFormatter, currentRow, 7, 'FlexTable-Cell-Total');
        $addStyleName(this$static.tblProfs.cellFormatter, currentRow, 8, 'FlexTable-Cell-Total');
        totalProf = 0;
        totalProfCash = 0;
        currentRow = currentRow + 1;
        for (k = 0; k < 10; ++k) {
          $setText(this$static.tblProfs, currentRow, 0, '');
          $addStyleName(this$static.tblProfs.cellFormatter, currentRow, k, 'FlexTable-Cell-Divider');
        }
        currentRow = currentRow + 1;
      }
      currentMemo = '';
      $setText(this$static.tblProfs, currentRow, 0, dynamicCast(logs.get_0(i), Q$LogProxy).getProfName());
      $setText(this$static.tblProfs, currentRow, 1, dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName());
    }
    if (!$equals_5(prevDept, dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName())) {
      currentRow = i + 1;
      if ($equals_5(prevProf, dynamicCast(logs.get_0(i), Q$LogProxy).getProfName())) {
        totalProf = totalProf + totalHour;
        totalProfCash = totalProfCash + totalCash;
      }
      if (!$equals_5(prevProf, dynamicCast(logs.get_0(i), Q$LogProxy).getProfName()) && currentRow > 1) {
        currentRow = currentRow + 1;
        for (k = 0; k < 10; ++k) {
          $setText(this$static.tblProfs, currentRow, 0, '');
          $addStyleName(this$static.tblProfs.cellFormatter, currentRow, k, 'FlexTable-Cell-Divider');
        }
        currentRow = currentRow + 1;
      }
      $setText(this$static.tblProfs, currentRow, 1, dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName());
      currentMemo = '';
      totalHour = 0;
      totalCash = 0;
    }
    $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'Cours') && (currentCol = 2);
    $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'Maladie') && (currentCol = 3);
    $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'F\xE9ri\xE9s') && (currentCol = 4);
    $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'Priv\xE9') && (currentCol = 5);
    $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'Supervision') && (currentCol = 6);
    $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'Frais') && (currentCol = 8);
    $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'Frais') || (totalHour = totalHour + dynamicCast(logs.get_0(i), Q$LogProxy).getHour());
    $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'Frais') && (totalCash = totalCash + dynamicCast(logs.get_0(i), Q$LogProxy).getHour());
    $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getTypeName(), 'Frais')?$setText(this$static.tblProfs, currentRow, currentCol, dynamicCast(logs.get_0(i), Q$LogProxy).getHour() > 0?'CHF ' + dynamicCast(logs.get_0(i), Q$LogProxy).getHour():''):$setText(this$static.tblProfs, currentRow, currentCol, dynamicCast(logs.get_0(i), Q$LogProxy).getHour() > 0?'' + dynamicCast(logs.get_0(i), Q$LogProxy).getHour():'');
    $setText(this$static.tblProfs, currentRow, 7, '' + totalHour);
    $equals_5(dynamicCast(logs.get_0(i), Q$LogProxy).getMemo(), '') || (currentMemo = dynamicCast(logs.get_0(i), Q$LogProxy).getMemo() + '. ' + currentMemo);
    $setText(this$static.tblProfs, currentRow, 9, currentMemo);
    prevProf = dynamicCast(logs.get_0(i), Q$LogProxy).getProfName();
    prevDept = dynamicCast(logs.get_0(i), Q$LogProxy).getCourseName();
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
  for (j = 0; j < this$static.tblProfs.bodyElem.rows.length; ++j) {
    for (k = 0; k < $getCellCount(this$static.tblProfs, j); ++k) {
      $equals_5($getStyleName(this$static.tblProfs.cellFormatter, j, k), '') && $addStyleName(this$static.tblProfs.cellFormatter, j, k, 'FlexTable-Cell');
    }
  }
}

function RptTimeByMonthView_0(){
  this.widget = $createAndBindUi_6(this);
}

function RptTimeByMonthView(){
}

_ = RptTimeByMonthView_0.prototype = RptTimeByMonthView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_14(){
  return this.widget;
}
;
_.getClass$ = function getClass_712(){
  return Lcom_lemania_timetracking_client_view_RptTimeByMonthView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RptTimeByMonthPresenter$MyView]);
_.lstMonth = null;
_.lstYear = null;
_.tblProfs = null;
_.widget = null;
function $createAndBindUi_6(owner){
  var attachRecord0, domId0, domId0Element, f_FlowPanel2, f_HTMLPanel1, f_HorizontalPanel5, f_Label4, f_Label6, f_Label7, f_VerticalPanel3, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, lstMonth, lstYear, tblProfs, sb;
  domId0 = $createUniqueId($doc);
  f_Label4 = new Label_0;
  f_Label6 = new Label_0;
  lstYear = new ListBox_0;
  f_Label7 = new Label_0;
  lstMonth = new ListBox_0;
  f_HorizontalPanel5 = new HorizontalPanel_0;
  tblProfs = new FlexTable_0;
  f_VerticalPanel3 = new VerticalPanel_0;
  f_FlowPanel2 = new FlowPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  f_Label4.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label4.directionalTextHelper, 'Informations des heures par mois');
  $updateHorizontalAlignment(f_Label4);
  f_Label4.element.style['height'] = '30';
  f_Label4.element.style['width'] = '830';
  $add_8(f_VerticalPanel3, f_Label4);
  $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $setTextOrHtml(f_Label6.directionalTextHelper, 'Ann\xE9e :');
  $updateHorizontalAlignment(f_Label6);
  $add_6(f_HorizontalPanel5, f_Label6);
  $add_6(f_HorizontalPanel5, lstYear);
  $setTextOrHtml(f_Label7.directionalTextHelper, 'Mois :');
  $updateHorizontalAlignment(f_Label7);
  $add_6(f_HorizontalPanel5, f_Label7);
  $add_6(f_HorizontalPanel5, lstMonth);
  f_HorizontalPanel5.element.style['width'] = '80%';
  f_HorizontalPanel5.table['cellSpacing'] = 2;
  $add_8(f_VerticalPanel3, f_HorizontalPanel5);
  tblProfs.element.style['height'] = '100%';
  tblProfs.element.style['width'] = '100%';
  $add_8(f_VerticalPanel3, tblProfs);
  f_VerticalPanel3.element.style['height'] = '';
  f_VerticalPanel3.element.style['width'] = '100%';
  f_VerticalPanel3.table['cellSpacing'] = 2;
  $add_0(f_FlowPanel2, f_VerticalPanel3, f_FlowPanel2.element);
  f_FlowPanel2.element.style['height'] = '';
  f_FlowPanel2.element.style['width'] = '';
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_FlowPanel2, domId0Element);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RptTimeByMonthView_BinderImpl$1_0(owner);
  $addDomHandler(lstYear, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new RptTimeByMonthView_BinderImpl$2_0(owner);
  $addDomHandler(lstMonth, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE);
  owner.lstMonth = lstMonth;
  owner.lstYear = lstYear;
  owner.tblProfs = tblProfs;
  return f_HTMLPanel1;
}

function RptTimeByMonthView_BinderImpl_0(){
}

function RptTimeByMonthView_BinderImpl(){
}

_ = RptTimeByMonthView_BinderImpl_0.prototype = RptTimeByMonthView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_713(){
  return Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl_2_classLit;
}
;
function RptTimeByMonthView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function RptTimeByMonthView_BinderImpl$1(){
}

_ = RptTimeByMonthView_BinderImpl$1_0.prototype = RptTimeByMonthView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_714(){
  return Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl$1_2_classLit;
}
;
_.onChange = function onChange_4(event_0){
  $onLstYearChanged(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function RptTimeByMonthView_BinderImpl$2_0(val$owner){
  this.val$owner = val$owner;
}

function RptTimeByMonthView_BinderImpl$2(){
}

_ = RptTimeByMonthView_BinderImpl$2_0.prototype = RptTimeByMonthView_BinderImpl$2.prototype = new Object_0;
_.getClass$ = function getClass_715(){
  return Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl$2_2_classLit;
}
;
_.onChange = function onChange_5(event_0){
  $onLstMonthChanged(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function LogRequestFactory_LogRequestContextImpl$6X_0(this$0, val$selectedYear, val$selectedMonth){
  this.val$selectedYear = val$selectedYear;
  this.val$selectedMonth = val$selectedMonth;
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
  return new RequestData_0('5h14jyFhSA0RGLHOcpBdXq$DtWU=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(this.val$selectedYear), valueOf_1(this.val$selectedMonth)]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$selectedMonth = 0;
_.val$selectedYear = 0;
var Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByMonthPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByMonthView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByMonthView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByMonthPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByMonthView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByMonthView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByMonthView_BinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$6X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$6X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(6);
