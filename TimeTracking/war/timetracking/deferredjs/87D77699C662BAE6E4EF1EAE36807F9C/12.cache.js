$wnd.timetracking.runAsyncCallback12("function $onMonthChanged(this$static, selectedYear, selectedMonth){\n  var rcl, rfl, x_0;\n  rfl = new LogRequestFactoryImpl;\n  $initialize_0(rfl, this$static.eventBus, new EventSourceRequestTransport(this$static.eventBus));\n  rcl = new LogRequestFactory_LogRequestContextImpl(rfl);\n  $fire((x_0 = new LogRequestFactory_LogRequestContextImpl$9X(rcl, selectedYear, selectedMonth) , $addInvocation(rcl.state.dialect, x_0) , x_0), new RptTimeByMonthPresenter$1(this$static));\n}\n\nfunction RptTimeByMonthPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy);\n}\n\ndefineClass(260, 75, {6:1, 9:1, 15:1, 57:1, 101:1, 260:1, 1334:1}, RptTimeByMonthPresenter);\n_.onBind = function onBind_14(){\n  dynamicCast(this.view, 302).setUiHandlers(this);\n}\n;\n_.onLoginAuthenticated = function onLoginAuthenticated_9(event_0){\n  this.currentUser = event_0.currentUser;\n}\n;\n_.onReset = function onReset_7(){\n  $initializeValues_0(dynamicCast(this.view, 302), this.currentUser.currentYear);\n  $initializeTable_5(dynamicCast(this.view, 302));\n}\n;\n_.revealInParent = function revealInParent_13(){\n  $fireEvent_1(this, new RevealContentEvent(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));\n}\n;\nvar Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByMonthPresenter', 260);\nfunction $onSuccess_29(this$static, response){\n  $setLogData_0(dynamicCast(this$static.this$01.view, 302), response);\n}\n\nfunction RptTimeByMonthPresenter$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(493, 23, $intern_69, RptTimeByMonthPresenter$1);\n_.onFailure_1 = function onFailure_31(error){\n  alert_0(error.message_0);\n}\n;\n_.onSuccess = function onSuccess_31(response){\n  $onSuccess_29(this, dynamicCast(response, 16));\n}\n;\nvar Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByMonthPresenter/1', 493);\nfunction $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$) {\n    result = new RptTimeByMonthPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$;\n}\n\ndefineClass(439, 1, $intern_60);\n_.onSuccess_0 = function onSuccess_56(){\n  $onSuccess_1(this.val$callback2, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction $initializeTable_5(this$static){\n  $removeAllRows(this$static.tblProfs);\n  $setWidth_0(this$static.tblProfs, '100%');\n  $setText(this$static.tblProfs, 0, 0, 'Professeur');\n  $setText(this$static.tblProfs, 0, 1, 'D\\xE9partement');\n  $setText(this$static.tblProfs, 0, 2, 'Cours');\n  $setText(this$static.tblProfs, 0, 3, 'Maladie');\n  $setText(this$static.tblProfs, 0, 4, 'F\\xE9ri\\xE9s');\n  $setText(this$static.tblProfs, 0, 5, 'Priv\\xE9');\n  $setText(this$static.tblProfs, 0, 6, 'Supervision');\n  $setText(this$static.tblProfs, 0, 7, 'Total');\n  $setText(this$static.tblProfs, 0, 8, 'Frais');\n  $setText(this$static.tblProfs, 0, 9, 'Remarque');\n  $styleTable_1(this$static);\n}\n\nfunction $initializeValues_0(this$static, currentYear){\n  var i, i0;\n  $selectClear($getSelectElement(this$static.lstMonth));\n  $insertItem(this$static.lstMonth, '', '', -1);\n  for (i0 = 0; i0 < 12; i0++) {\n    $insertItem(this$static.lstMonth, '' + (i0 + 1), '' + (i0 + 1), -1);\n  }\n  $selectClear($getSelectElement(this$static.lstYear));\n  for (i = 0; i < 3; i++) {\n    $insertItem(this$static.lstYear, '' + (i - 1 + currentYear), '' + (i - 1 + currentYear), -1);\n    i - 1 + currentYear == currentYear && $setSelectedIndex_0(this$static.lstYear, i);\n  }\n}\n\nfunction $onLstMonthChanged(this$static){\n  $removeAllRows(this$static.tblProfs);\n  if ($equals_3($getValue_1(this$static.lstMonth, $getSelectElement(this$static.lstMonth).selectedIndex), ''))\n    return;\n  !!this$static.uiHandlers && $onMonthChanged(dynamicCast(this$static.uiHandlers, 1334), __parseAndValidateInt($getValue_1(this$static.lstYear, $getSelectElement(this$static.lstYear).selectedIndex)), __parseAndValidateInt($getValue_1(this$static.lstMonth, $getSelectElement(this$static.lstMonth).selectedIndex)));\n}\n\nfunction $onLstYearChanged(this$static){\n  $removeAllRows(this$static.tblProfs);\n  $setSelectedIndex_0(this$static.lstMonth, 0);\n}\n\nfunction $setLogData_0(this$static, logs){\n  var currentCol, currentMemo, currentRow, i, k, prevDept, prevProf, totalCash, totalHour, totalProf, totalProfCash;\n  $initializeTable_5(this$static);\n  prevProf = '';\n  prevDept = '';\n  currentMemo = '';\n  currentRow = 0;\n  currentCol = 0;\n  totalHour = 0;\n  totalProf = 0;\n  totalCash = 0;\n  totalProfCash = 0;\n  for (i = 0; i < logs.size_1(); i++) {\n    if (!$equals_3(prevProf, dynamicCast(logs.get_1(i), 13).getProfName())) {\n      currentRow = i + 1;\n      if (currentRow > 1) {\n        totalProf = totalProf + totalHour;\n        totalProfCash = totalProfCash + totalCash;\n        $setText(this$static.tblProfs, currentRow, 7, '' + totalProf);\n        $setText(this$static.tblProfs, currentRow, 8, 'CHF ' + ('' + totalProfCash));\n        $addStyleName(this$static.tblProfs.cellFormatter, currentRow, 7, 'FlexTable-Cell-Total');\n        $addStyleName(this$static.tblProfs.cellFormatter, currentRow, 8, 'FlexTable-Cell-Total');\n        totalHour = 0;\n        totalProf = 0;\n        totalCash = 0;\n        totalProfCash = 0;\n        currentRow = currentRow + 1;\n        for (k = 0; k < 10; k++) {\n          $setText(this$static.tblProfs, currentRow, 0, '');\n          $addStyleName(this$static.tblProfs.cellFormatter, currentRow, k, 'FlexTable-Cell-Divider');\n        }\n        currentRow = currentRow + 1;\n      }\n      currentMemo = '';\n      $setText(this$static.tblProfs, currentRow, 0, dynamicCast(logs.get_1(i), 13).getProfName());\n      $setText(this$static.tblProfs, currentRow, 1, dynamicCast(logs.get_1(i), 13).getCourseName());\n    }\n    if (!$equals_3(prevDept, dynamicCast(logs.get_1(i), 13).getCourseName())) {\n      currentRow = i + 1;\n      if ($equals_3(prevProf, dynamicCast(logs.get_1(i), 13).getProfName())) {\n        totalProf = totalProf + totalHour;\n        totalProfCash = totalProfCash + totalCash;\n      }\n      if (!$equals_3(prevProf, dynamicCast(logs.get_1(i), 13).getProfName()) && currentRow > 1) {\n        currentRow = currentRow + 1;\n        for (k = 0; k < 10; k++) {\n          $setText(this$static.tblProfs, currentRow, 0, '');\n          $addStyleName(this$static.tblProfs.cellFormatter, currentRow, k, 'FlexTable-Cell-Divider');\n        }\n        currentRow = currentRow + 1;\n      }\n      $setText(this$static.tblProfs, currentRow, 1, dynamicCast(logs.get_1(i), 13).getCourseName());\n      currentMemo = '';\n      totalHour = 0;\n      totalCash = 0;\n    }\n    $equals_3(dynamicCast(logs.get_1(i), 13).getTypeName(), '1.Cours') && (currentCol = 2);\n    $equals_3(dynamicCast(logs.get_1(i), 13).getTypeName(), '2.Maladie/ACC') && (currentCol = 3);\n    $equals_3(dynamicCast(logs.get_1(i), 13).getTypeName(), '3.F\\xE9ri\\xE9s') && (currentCol = 4);\n    $equals_3(dynamicCast(logs.get_1(i), 13).getTypeName(), '4.Priv\\xE9') && (currentCol = 5);\n    $equals_3(dynamicCast(logs.get_1(i), 13).getTypeName(), '5.Supervision') && (currentCol = 6);\n    $equals_3(dynamicCast(logs.get_1(i), 13).getTypeName(), '6.Frais') && (currentCol = 8);\n    $equals_3(dynamicCast(logs.get_1(i), 13).getTypeName(), '6.Frais') || (totalHour = totalHour + dynamicCast(logs.get_1(i), 13).getHour());\n    $equals_3(dynamicCast(logs.get_1(i), 13).getTypeName(), '6.Frais') && (totalCash = totalCash + dynamicCast(logs.get_1(i), 13).getHour());\n    $equals_3(dynamicCast(logs.get_1(i), 13).getTypeName(), '6.Frais')?$setText(this$static.tblProfs, currentRow, currentCol, dynamicCast(logs.get_1(i), 13).getHour() > 0?'CHF ' + ('' + dynamicCast(logs.get_1(i), 13).getHour()):''):$setText(this$static.tblProfs, currentRow, currentCol, dynamicCast(logs.get_1(i), 13).getHour() > 0?'' + dynamicCast(logs.get_1(i), 13).getHour():'');\n    $setText(this$static.tblProfs, currentRow, 7, '' + totalHour);\n    $equals_3(dynamicCast(logs.get_1(i), 13).getMemo(), '') || (currentMemo = dynamicCast(logs.get_1(i), 13).getMemo() + '. ' + currentMemo);\n    $setText(this$static.tblProfs, currentRow, 9, currentMemo);\n    prevProf = dynamicCast(logs.get_1(i), 13).getProfName();\n    prevDept = dynamicCast(logs.get_1(i), 13).getCourseName();\n    if (i == logs.size_1() - 1) {\n      currentRow = i + 2;\n      totalProf = totalProf + totalHour;\n      totalProfCash = totalProfCash + totalCash;\n      $setText(this$static.tblProfs, currentRow, 7, '' + totalProf);\n      $setText(this$static.tblProfs, currentRow, 8, 'CHF ' + ('' + totalProfCash));\n      $addStyleName(this$static.tblProfs.cellFormatter, currentRow, 7, 'FlexTable-Cell-Total');\n      $addStyleName(this$static.tblProfs.cellFormatter, currentRow, 8, 'FlexTable-Cell-Total');\n    }\n  }\n  $styleTable_1(this$static);\n}\n\nfunction $styleTable_1(this$static){\n  var j, k;\n  for (j = 0; j < $getDOMRowCount(this$static.tblProfs); j++) {\n    for (k = 0; k < $getCellCount(this$static.tblProfs, j); k++) {\n      $equals_3($getElement_0(this$static.tblProfs.cellFormatter, j, k).className || '', '') && $addStyleName(this$static.tblProfs.cellFormatter, j, k, 'FlexTable-Cell');\n    }\n  }\n}\n\nfunction RptTimeByMonthView(){\n  $clinit_ViewWithUiHandlers();\n  this.widget = $build_f_HTMLPanel1_12(new RptTimeByMonthView_BinderImpl$Widgets(this));\n}\n\ndefineClass(729, $intern_45, {15:1, 302:1}, RptTimeByMonthView);\n_.asWidget = function asWidget_16(){\n  return this.widget;\n}\n;\nvar Lcom_lemania_timetracking_client_view_RptTimeByMonthView_2_classLit = createForClass('com.lemania.timetracking.client.view', 'RptTimeByMonthView', 729);\nfunction RptTimeByMonthView_BinderImpl(){\n}\n\ndefineClass(810, 1, {}, RptTimeByMonthView_BinderImpl);\nvar Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view', 'RptTimeByMonthView_BinderImpl', 810);\nfunction $build_f_HTMLPanel1_12(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, f_HorizontalPanel5, f_Label6, lstYear, f_Label7, lstMonth, f_Label8, tblProfs;\n  f_HTMLPanel1 = new HTMLPanel($html1_9(this$static.domId0).html);\n  ($clinit_DOM() , f_HTMLPanel1.element).style['height'] = '100%';\n  f_HTMLPanel1.element.style['width'] = '100%';\n  __attachRecord__ = attachToDom(f_HTMLPanel1.element);\n  $get_0(this$static.domId0Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel , $add_6(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel , $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_10(f_VerticalPanel3, (f_Label4 = new Label , $setClassName(f_Label4.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label4, ALIGN_CENTER) , $setTextOrHtml(f_Label4.directionalTextHelper, 'RAPPORT DES HEURES PAR MOIS', false) , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , f_Label4)) , $add_10(f_VerticalPanel3, (f_HorizontalPanel5 = new HorizontalPanel , $setHorizontalAlignment_0(f_HorizontalPanel5, ALIGN_LEFT) , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_8(f_HorizontalPanel5, (f_Label6 = new Label , $setAutoHorizontalAlignment(f_Label6, ALIGN_RIGHT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Choisir une ann\\xE9e :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_8(f_HorizontalPanel5, (lstYear = new ListBox , $addDomHandler(lstYear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstYear = lstYear , lstYear)) , $add_8(f_HorizontalPanel5, (f_Label7 = new Label , $setAutoHorizontalAlignment(f_Label7, ALIGN_RIGHT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Choisir un mois :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $add_8(f_HorizontalPanel5, (lstMonth = new ListBox , $addDomHandler(lstMonth, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE)) , this$static.owner.lstMonth = lstMonth , lstMonth)) , $setClassName(f_HorizontalPanel5.element, 'subSection') , f_HorizontalPanel5.element.style['width'] = '60%' , $setPropertyInt(f_HorizontalPanel5.table, 'cellSpacing', 5) , f_HorizontalPanel5)) , $add_10(f_VerticalPanel3, (f_Label8 = new Label , $setClassName(f_Label8.element, 'hiddenText') , $setTextOrHtml(f_Label8.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $add_10(f_VerticalPanel3, (tblProfs = new FlexTable , tblProfs.element.style['height'] = '100%' , tblProfs.element.style['width'] = '100%' , this$static.owner.tblProfs = tblProfs , tblProfs)) , f_VerticalPanel3.element.style['height'] = '' , undefined , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '' , f_FlowPanel2.element.style['width'] = '' , f_FlowPanel2), $get_0(this$static.domId0Element));\n  return f_HTMLPanel1;\n}\n\nfunction RptTimeByMonthView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RptTimeByMonthView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new RptTimeByMonthView_BinderImpl$Widgets$2(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n}\n\ndefineClass(811, 1, {}, RptTimeByMonthView_BinderImpl$Widgets);\nvar Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view', 'RptTimeByMonthView_BinderImpl/Widgets', 811);\nfunction RptTimeByMonthView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(812, 1, $intern_72, RptTimeByMonthView_BinderImpl$Widgets$1);\n_.onChange = function onChange_6(event_0){\n  $onLstYearChanged(this.this$11.owner);\n}\n;\nvar Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view', 'RptTimeByMonthView_BinderImpl/Widgets/1', 812);\nfunction RptTimeByMonthView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(813, 1, $intern_72, RptTimeByMonthView_BinderImpl$Widgets$2);\n_.onChange = function onChange_7(event_0){\n  $onLstMonthChanged(this.this$11.owner);\n}\n;\nvar Lcom_lemania_timetracking_client_view_RptTimeByMonthView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view', 'RptTimeByMonthView_BinderImpl/Widgets/2', 813);\nfunction $html1_9(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$) {\n    result = new RptTimeByMonthView(new RptTimeByMonthView_BinderImpl);\n    this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$;\n}\n\nfunction LogRequestFactory_LogRequestContextImpl$9X(this$0, val$selectedYear, val$selectedMonth){\n  this.val$selectedYear2 = val$selectedYear;\n  this.val$selectedMonth3 = val$selectedMonth;\n  AbstractRequest.call(this, this$0);\n}\n\ndefineClass(1202, 17, $intern_70, LogRequestFactory_LogRequestContextImpl$9X);\n_.makeRequestData = function makeRequestData_16(){\n  return new RequestData('5h14jyFhSA0RGLHOcpBdXq$DtWU=', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [valueOf_1(this.val$selectedYear2), valueOf_1(this.val$selectedMonth3)]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);\n}\n;\n_.val$selectedMonth3 = 0;\n_.val$selectedYear2 = 0;\nvar Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$9X_2_classLit = createForClass('com.lemania.timetracking.shared.service', 'LogRequestFactory_LogRequestContextImpl/9X', 1202);\n$entry(onLoad)(12);\n\n//# sourceURL=timetracking-12.js\n")
