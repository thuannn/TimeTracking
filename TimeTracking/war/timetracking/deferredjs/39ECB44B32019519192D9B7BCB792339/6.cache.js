function CoursesLoadedEvent_0(){
  $clinit_CoursesLoadedEvent();
}

defineSeed(726, 233, {}, CoursesLoadedEvent_0);
_.dispatch_0 = function dispatch_34(handler){
  dynamicCast(handler, Q$CoursesLoadedEvent$CoursesLoadedHandler).onCoursesLoaded(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_35(){
  return TYPE_34;
}
;
function $loadProfessorList(this$static, courses){
  var rc, rf, x;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire((x = new ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0(rc, courses) , $addInvocation(rc.state.dialect, x) , x), new RptTimeByProfPresenter$2_0(this$static));
}

function $onCoursesLoaded(this$static){
  $loadProfessorList(this$static, this$static.courses);
}

function $onDepartmentSelected_0(this$static, deptId){
  var rc, rf, x;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire((x = new ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0(rc, deptId) , $addInvocation(rc.state.dialect, x) , x), new RptTimeByProfPresenter$3_0(this$static));
}

function $onProfSelected(this$static, profId){
  var rcl, rfl, x;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire((x = new LogRequestFactory_LogRequestContextImpl$9X_0(rcl, profId) , $addInvocation(rcl.state.dialect, x) , x), new RptTimeByProfPresenter$4_0(this$static));
}

function RptTimeByProfPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(828, 672, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$CoursesLoadedEvent$CoursesLoadedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$RptTimeByProfPresenter, Q$ExtractDataUiHandler]), RptTimeByProfPresenter_0);
_.onBind = function onBind_15(){
  dynamicCast(this.view, Q$RptTimeByProfPresenter$MyView).setUiHandlers(this);
  $initializeTable_5(dynamicCast(this.view, Q$RptTimeByProfPresenter$MyView));
}
;
_.onCoursesLoaded = function onCoursesLoaded(event_0){
  $onCoursesLoaded(this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_11(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_8(){
  var rf, rc;
  $removeAllRows(dynamicCast(dynamicCast(this.view, Q$RptTimeByProfPresenter$MyView), Q$RptTimeByProfView).tblLogs);
  dynamicCast(dynamicCast(this.view, Q$RptTimeByProfPresenter$MyView), Q$RptTimeByProfView).lstProfs.element.options.length = 0;
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire($getDepartments(rc, this.currentUser.userId), new RptTimeByProfPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_14(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.courses = null;
_.currentUser = null;
function $onSuccess_28(this$static, response){
  this$static.this$0.courses = response;
  $doFire(this$static.this$0.eventBus, new CoursesLoadedEvent_0, null);
}

function RptTimeByProfPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(829, 611, makeCastMap([Q$Receiver]), RptTimeByProfPresenter$1_0);
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
  $setProfList(dynamicCast(this$static.this$0.view, Q$RptTimeByProfPresenter$MyView), response);
}

function RptTimeByProfPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(830, 611, makeCastMap([Q$Receiver]), RptTimeByProfPresenter$2_0);
_.onFailure_0 = function onFailure_31(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_31(response){
  $onSuccess_29(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_30(this$static, response){
  $setProfList(dynamicCast(this$static.this$0.view, Q$RptTimeByProfPresenter$MyView), response);
}

function RptTimeByProfPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(831, 611, makeCastMap([Q$Receiver]), RptTimeByProfPresenter$3_0);
_.onFailure_0 = function onFailure_32(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_32(response){
  $onSuccess_30(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_31(this$static, response){
  $setLogData_0(dynamicCast(this$static.this$0.view, Q$RptTimeByProfPresenter$MyView), response);
}

function RptTimeByProfPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(832, 611, makeCastMap([Q$Receiver]), RptTimeByProfPresenter$4_0);
_.onFailure_0 = function onFailure_33(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_33(response){
  $onSuccess_31(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
defineSeed(833, 703, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$CoursesLoadedEvent$CoursesLoadedHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler]));
_.onCoursesLoaded = function onCoursesLoaded_0(event_0){
  $getPresenter_0(this, new RptTimeByProfPresenterMyProxyImpl$2_0(this.eventBus, event_0));
}
;
function $success_11(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new RptTimeByProfPresenterMyProxyImpl$2$1_0(presenter, this$static.val$event));
}

function RptTimeByProfPresenterMyProxyImpl$2_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(836, 685, {}, RptTimeByProfPresenterMyProxyImpl$2_0);
_.success = function success_13(presenter){
  $success_11(this, dynamicCast(presenter, Q$RptTimeByProfPresenter));
}
;
_.val$event = null;
function RptTimeByProfPresenterMyProxyImpl$2$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(837, 1, {}, RptTimeByProfPresenterMyProxyImpl$2$1_0);
_.execute_1 = function execute_39(){
  $onCoursesLoaded(this.val$presenter);
}
;
_.val$event = null;
_.val$presenter = null;
function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$) {
    result = new RptTimeByProfPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$RptTimeByProfView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$;
}

defineSeed(904, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_64(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
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
  if ($equals_3($getValue_1(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onDepartmentSelected_0(dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler), $getValue_1(this$static.lstDepartments, this$static.lstDepartments.element.selectedIndex));
}

function $onListProfsSelected(this$static){
  $removeAllRows(this$static.tblLogs);
  if ($equals_3($getValue_1(this$static.lstProfs, this$static.lstProfs.element.selectedIndex), ''))
    return;
  !!this$static.uiHandlers && $onProfSelected(dynamicCast(this$static.uiHandlers, Q$ExtractDataUiHandler), $getValue_1(this$static.lstProfs, this$static.lstProfs.element.selectedIndex));
}

function $setLogData_0(this$static, logs){
  var currentCol, currentMemo, currentRow, i, k, prevDept, prevMonth, totalCash, totalHour, totalProf, totalProfCash;
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
    }
  }
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
}

function RptTimeByProfView_0(){
  this.widget = $build_f_HTMLPanel1_12(new RptTimeByProfView_BinderImpl$Widgets_0(this));
}

defineSeed(1025, 677, makeCastMap([Q$IsWidget, Q$RptTimeByProfPresenter$MyView, Q$RptTimeByProfView]), RptTimeByProfView_0);
_.asWidget = function asWidget_17(){
  return this.widget;
}
;
_.lstDepartments = null;
_.lstProfs = null;
_.tblLogs = null;
_.widget = null;
function RptTimeByProfView_BinderImpl_0(){
}

defineSeed(1026, 1, {}, RptTimeByProfView_BinderImpl_0);
function $build_f_HTMLPanel1_12(this$static){
  var attachRecord5, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, f_HorizontalPanel5, f_Label6, lstDepartments, f_Label7, lstProfs, tblLogs;
  f_HTMLPanel1 = new HTMLPanel_0($html1_9(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord5 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord5.origParent?$insertBefore(attachRecord5.origParent, attachRecord5.element, attachRecord5.origSibling):orphan(attachRecord5.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_5(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , $add_9(f_VerticalPanel3, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label4, ALIGN_CENTER) , $setTextOrHtml(f_Label4.directionalTextHelper, 'RAPPORT DES HEURES PAR PROFESSEUR', false) , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , f_Label4)) , $add_9(f_VerticalPanel3, (f_HorizontalPanel5 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_7(f_HorizontalPanel5, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir un d\xE9partement :', false) , $updateHorizontalAlignment(f_Label6) , setVisible(f_Label6.element, false) , f_Label6)) , $add_7(f_HorizontalPanel5, (lstDepartments = new ListBox_0 , setVisible(lstDepartments.element, false) , $addDomHandler(lstDepartments, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstDepartments = lstDepartments , lstDepartments)) , $add_7(f_HorizontalPanel5, (f_Label7 = new Label_0 , $setAutoHorizontalAlignment(f_Label7, ALIGN_RIGHT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Choisir un professeur :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_7(f_HorizontalPanel5, (lstProfs = new ListBox_0 , $addDomHandler(lstProfs, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, TYPE) , this$static.owner.lstProfs = lstProfs , lstProfs)) , f_HorizontalPanel5.element.style['width'] = '80%' , f_HorizontalPanel5.table['cellSpacing'] = 2 , f_HorizontalPanel5)) , $add_9(f_VerticalPanel3, (tblLogs = new FlexTable_0 , tblLogs.element.style['height'] = '100%' , tblLogs.element.style['width'] = '100%' , this$static.owner.tblLogs = tblLogs , tblLogs)) , f_VerticalPanel3.element.style['height'] = '' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3.table['cellSpacing'] = 2 , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_FlowPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function RptTimeByProfView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RptTimeByProfView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new RptTimeByProfView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1027, 1, {}, RptTimeByProfView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function RptTimeByProfView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1028, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByProfView_BinderImpl$Widgets$1_0);
_.onChange = function onChange_4(event_0){
  $onListDepartmentsSelected(this.this$1.owner);
}
;
_.this$1 = null;
function RptTimeByProfView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1029, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), RptTimeByProfView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_5(event_0){
  $onListProfsSelected(this.this$1.owner);
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

function LogRequestFactory_LogRequestContextImpl$9X_0(this$0, val$deptId){
  this.val$deptId = val$deptId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1134, 615, makeCastMap([Q$AbstractRequest]), LogRequestFactory_LogRequestContextImpl$9X_0);
_.makeRequestData = function makeRequestData_12(){
  return new RequestData_0('r7XIrN8gCo7cvZPRVfJpFB8sIck=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$deptId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.val$deptId = null;
function ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0(this$0, val$courseId){
  this.val$courseId = val$courseId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1146, 615, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$4X_0);
_.makeRequestData = function makeRequestData_18(){
  return new RequestData_0('ywncKjv4F7rkiVzVbLxtJTCHnls=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$courseId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
_.val$courseId = null;
function ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0(this$0, val$courses){
  this.val$courses = val$courses;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1147, 615, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_19(){
  return new RequestData_0('y4Erx6ku_NihiukA3faS_HYuP7E=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$courses]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
_.val$courses = null;
var Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter', 828), Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter$1', 829), Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter$2', 830), Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter$3', 831), Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenter$4', 832), Lcom_lemania_timetracking_client_event_CoursesLoadedEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'CoursesLoadedEvent', 726), Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenterMyProxyImpl$2', 836), Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeByProfPresenterMyProxyImpl$2$1', 837), Lcom_lemania_timetracking_client_view_RptTimeByProfView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView', 1025), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl', 1026), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets', 1027), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets$1', 1028), Lcom_lemania_timetracking_client_view_RptTimeByProfView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeByProfView_BinderImpl$Widgets$2', 1029), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$4X', 1146), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$5X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$5X', 1147), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$9X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$9X', 1134);
$entry(onLoad)(6);
