$wnd.timetracking.runAsyncCallback9("function $professorAdd(this$static, profName, profStatus){\n  var rc, rf;\n  if (!profName.length) {\n    alert_0('Veuillez saissir le nom du professeur !');\n    return;\n  }\n  rf = new ProfessorRequestFactoryImpl;\n  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport(this$static.eventBus));\n  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl(rf);\n  this$static.prof = dynamicCast($create_1(rc, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit), 5);\n  this$static.prof.setProfName(profName);\n  this$static.prof.setProfActive(profStatus);\n  $fire($save_2(rc, this$static.prof), new ProfsAddPresenter$1(this$static));\n}\n\nfunction ProfsAddPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy);\n  dynamicCast(this.view, 363).setUiHandlers(this);\n}\n\ndefineClass(480, 75, {9:1, 15:1, 57:1, 1255:1}, ProfsAddPresenter);\n_.onBind = function onBind_11(){\n}\n;\n_.onReset = function onReset_4(){\n  $initializeUi_0(dynamicCast(this.view, 363));\n}\n;\n_.revealInParent = function revealInParent_10(){\n  $fireEvent_1(this, new RevealContentEvent(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));\n}\n;\nvar Lcom_lemania_timetracking_client_presenter_ProfsAddPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ProfsAddPresenter', 480);\nfunction $onSuccess_19(this$static){\n  $setEnabled(dynamicCast(dynamicCast(this$static.this$01.view, 363), 267).cmdAdd, false);\n}\n\nfunction ProfsAddPresenter$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(481, 24, $intern_65, ProfsAddPresenter$1);\n_.onFailure_1 = function onFailure_19(error){\n  alert_0(error.message_0);\n}\n;\n_.onSuccess = function onSuccess_19(response){\n  $onSuccess_19(this, throwClassCastExceptionUnlessNull(response));\n}\n;\nvar Lcom_lemania_timetracking_client_presenter_ProfsAddPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ProfsAddPresenter/1', 481);\nfunction $get_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$) {\n    result = new ProfsAddPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$;\n}\n\ndefineClass(433, 1, $intern_56);\n_.onSuccess_0 = function onSuccess_53(){\n  $onSuccess_1(this.val$callback2, $get_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction $initializeUi_0(this$static){\n  $setText_2(this$static.txtProfName, '');\n  $setEnabled(this$static.cmdAdd, true);\n}\n\nfunction $onCmdAddClicked_0(this$static){\n  !!this$static.uiHandlers && $professorAdd(dynamicCast(this$static.uiHandlers, 1255), $trim($getPropertyString(this$static.txtProfName.element, 'value')), $getValue_0(this$static.chkProfStatus));\n}\n\nfunction $onCmdCancelClicked_1(this$static){\n  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 1255) , $clinit_History() , newItem('!profs', true));\n}\n\nfunction ProfsAddView(){\n  $clinit_ViewWithUiHandlers();\n  this.widget = $build_f_HTMLPanel1_9(new ProfsAddView_BinderImpl$Widgets(this));\n}\n\ndefineClass(267, $intern_41, {15:1, 363:1, 267:1}, ProfsAddView);\n_.asWidget = function asWidget_13(){\n  return this.widget;\n}\n;\nvar Lcom_lemania_timetracking_client_view_ProfsAddView_2_classLit = createForClass('com.lemania.timetracking.client.view', 'ProfsAddView', 267);\nfunction ProfsAddView_BinderImpl(){\n}\n\ndefineClass(797, 1, {}, ProfsAddView_BinderImpl);\nvar Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view', 'ProfsAddView_BinderImpl', 797);\nfunction $build_f_HTMLPanel1_9(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_Grid5, f_Label6, txtProfName, f_Label7, chkProfStatus, f_HorizontalPanel9, cmdCancel, sb, cmdAdd, sb_0;\n  f_HTMLPanel1 = new HTMLPanel($html3_1(this$static.domId0).html);\n  $setPropertyImpl(f_HTMLPanel1.element.style, 'width', '100%');\n  __attachRecord__ = attachToDom(f_HTMLPanel1.element);\n  $get_0(this$static.domId0Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel , $add_10(f_VerticalPanel2, (f_Label3 = new Label , $setClassName(f_Label3.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'AJOUTER UN NOUVEAU PROFESSEUR', false) , $updateHorizontalAlignment(f_Label3) , $setPropertyImpl(f_Label3.element.style, 'width', '') , f_Label3)) , $add_10(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel , $add_8(f_HorizontalPanel4, (f_Grid5 = new Grid , $resizeColumns(f_Grid5, 2) , $resizeRows(f_Grid5, 3) , $setWidget_1(f_Grid5, 0, 0, (f_Label6 = new Label , $setTextOrHtml(f_Label6.directionalTextHelper, 'Nom :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid5, 0, 1, (txtProfName = new TextBox , $setPropertyImpl(txtProfName.element.style, 'width', '270px') , this$static.owner.txtProfName = txtProfName , txtProfName)) , $setWidget_1(f_Grid5, 1, 0, (f_Label7 = new Label , $setTextOrHtml(f_Label7.directionalTextHelper, 'Active :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid5, 1, 1, (chkProfStatus = new CheckBox , $setValue_1(chkProfStatus, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)) , this$static.owner.chkProfStatus = chkProfStatus , chkProfStatus)) , $setWidget_1(f_Grid5, 2, 0, new Label) , $setWidget_1(f_Grid5, 2, 1, (f_HorizontalPanel9 = new HorizontalPanel , $setHorizontalAlignment_0(f_HorizontalPanel9, ALIGN_RIGHT) , $add_8(f_HorizontalPanel9, (cmdCancel = new Button , $setHTML(cmdCancel, (sb = new StringBuilder , sb.string += 'Annuler' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , $setClassName(cmdCancel.element, 'button-normal') , $addDomHandler(cmdCancel, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdCancel)) , $add_8(f_HorizontalPanel9, (cmdAdd = new Button , $setHTML(cmdAdd, (sb_0 = new StringBuilder , sb_0.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , $setClassName(cmdAdd.element, 'button-highlight') , $addDomHandler(cmdAdd, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_0)) , this$static.owner.cmdAdd = cmdAdd , cmdAdd)) , $setPropertyImpl(f_HorizontalPanel9.element.style, 'width', '269px') , f_HorizontalPanel9)) , $setPropertyImpl(f_Grid5.element.style, 'width', '447px') , f_Grid5)) , $setPropertyImpl(f_HorizontalPanel4.element.style, 'width', '800px') , $setPropertyInt(f_HorizontalPanel4.table, 'cellSpacing', 5) , f_HorizontalPanel4)) , $setPropertyImpl(f_VerticalPanel2.element.style, 'width', '100%') , f_VerticalPanel2), $get_0(this$static.domId0Element));\n  return f_HTMLPanel1;\n}\n\nfunction ProfsAddView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfsAddView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfsAddView_BinderImpl$Widgets$2(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n}\n\ndefineClass(798, 1, {}, ProfsAddView_BinderImpl$Widgets);\nvar Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view', 'ProfsAddView_BinderImpl/Widgets', 798);\nfunction ProfsAddView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(799, 1, $intern_57, ProfsAddView_BinderImpl$Widgets$1);\n_.onClick = function onClick_27(event_0){\n  $onCmdCancelClicked_1(this.this$11.owner);\n}\n;\nvar Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view', 'ProfsAddView_BinderImpl/Widgets/1', 799);\nfunction ProfsAddView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(800, 1, $intern_57, ProfsAddView_BinderImpl$Widgets$2);\n_.onClick = function onClick_28(event_0){\n  $onCmdAddClicked_0(this.this$11.owner);\n}\n;\nvar Lcom_lemania_timetracking_client_view_ProfsAddView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view', 'ProfsAddView_BinderImpl/Widgets/2', 800);\nfunction $html3_1(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$) {\n    result = new ProfsAddView(new ProfsAddView_BinderImpl);\n    this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$;\n}\n\ndefineClass(1188, 1, $intern_72);\n_.setProfName = function setProfName(profName){\n  dynamicCast($getWrapped(this.this$01), 5).setProfName(profName);\n}\n;\ndefineClass(1189, 1, $intern_72);\n_.setProfName = function setProfName_0(profName){\n  $setProperty(this.this$01, 'profName', profName);\n}\n;\nfunction $save_2(this$static, prof){\n  var x_0;\n  x_0 = new ProfessorRequestFactory_ProfessorRequestContextImpl$9X(this$static, prof);\n  $addInvocation(this$static.state.dialect, x_0);\n  return x_0;\n}\n\nfunction ProfessorRequestFactory_ProfessorRequestContextImpl$9X(this$0, val$prof){\n  this.val$prof2 = val$prof;\n  AbstractRequest.call(this, this$0);\n}\n\ndefineClass(989, 17, $intern_66, ProfessorRequestFactory_ProfessorRequestContextImpl$9X);\n_.makeRequestData = function makeRequestData_25(){\n  return new RequestData('IAiZWd5l08yJfHM9yN8_PPbImY4=', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [this.val$prof2]), this.propertyRefs, Ljava_lang_Void_2_classLit, null);\n}\n;\nvar Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$9X_2_classLit = createForClass('com.lemania.timetracking.shared.service', 'ProfessorRequestFactory_ProfessorRequestContextImpl/9X', 989);\n$entry(onLoad)(9);\n\n//# sourceURL=timetracking-9.js\n")
