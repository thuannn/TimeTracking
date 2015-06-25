$wnd.timetracking.runAsyncCallback7("function $changePassword(this$static, current, new1, new2){\n  var rc, rf;\n  if ($equals_3(current, '') || $equals_3(new1, '') || $equals_3(new2, '')) {\n    alert_0('Merci de saisir tous les champs.');\n    return;\n  }\n  if (!$equals_3(new1, new2)) {\n    alert_0('Le nouveau mot de passe et la confirmation ne sont pas identiques.');\n    return;\n  }\n  if (!isValidUserName(new1) || !isValidUserName(new2)) {\n    alert_0(\"Le nouveau mot de passe n'est pas valable (minimum 6 caract\\xE8res).\");\n    return;\n  }\n  rf = new UserRequestFactoryImpl;\n  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport(this$static.eventBus));\n  rc = new UserRequestFactory_UserRequestContextImpl(rf);\n  $fire($changePassword_0(rc, this$static.currentUser.userName, current, new1), new FrmPasswordPresenter$1(this$static));\n}\n\nfunction $logOut(this$static){\n  !this$static.currentUser && (this$static.currentUser = new CurrentUser);\n  this$static.currentUser.isLoggedIn = false;\n  newItem('!homepage', true);\n  $doFire(this$static.eventBus, new LoginAuthenticatedEvent(this$static.currentUser), null);\n  $doFire(this$static.eventBus, new AfterUserLogOutEvent, null);\n}\n\nfunction FrmPasswordPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy);\n}\n\ndefineClass(257, 75, {6:1, 9:1, 15:1, 57:1, 101:1, 257:1, 1328:1}, FrmPasswordPresenter);\n_.onBind = function onBind_6(){\n  dynamicCast(this.view, 1327).setUiHandlers(this);\n}\n;\n_.onLoginAuthenticated = function onLoginAuthenticated_1(event_0){\n  this.currentUser = event_0.currentUser;\n}\n;\n_.revealInParent = function revealInParent_5(){\n  $fireEvent_1(this, new RevealContentEvent(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));\n}\n;\nvar Lcom_lemania_timetracking_client_presenter_FrmPasswordPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'FrmPasswordPresenter', 257);\nfunction $onSuccess_11(this$static, response){\n  if (response) {\n    alert_0('Le mot de passe a \\xE9t\\xE9 chang\\xE9 avec succ\\xE8s.');\n    $logOut(this$static.this$01);\n  }\n   else \n    alert_0(\"Le mot de passe actuel n'est pas correct.\");\n}\n\nfunction FrmPasswordPresenter$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(476, 23, $intern_68, FrmPasswordPresenter$1);\n_.onFailure_1 = function onFailure_11(error){\n  alert_0(error.message_0);\n}\n;\n_.onSuccess = function onSuccess_11(response){\n  $onSuccess_11(this, dynamicCast(response, 54));\n}\n;\nvar Lcom_lemania_timetracking_client_presenter_FrmPasswordPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'FrmPasswordPresenter/1', 476);\nfunction $get_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$_annotation$$none$$) {\n    result = new FrmPasswordPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$FrmPasswordView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$_annotation$$none$$;\n}\n\ndefineClass(428, 1, $intern_59);\n_.onSuccess_0 = function onSuccess_68(){\n  $onSuccess_1(this.val$callback2, $get_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction $onCmdSaveClick(this$static){\n  !!this$static.uiHandlers && $changePassword(dynamicCast(this$static.uiHandlers, 1328), $getPropertyString($getElement(this$static.txtCurrentPassword), 'value'), $getPropertyString($getElement(this$static.txtNewPassword1), 'value'), $getPropertyString($getElement(this$static.txtNewPassword2), 'value'));\n}\n\nfunction FrmPasswordView(){\n  $clinit_ViewWithUiHandlers();\n  this.widget = $build_f_HTMLPanel1_5(new FrmPasswordView_BinderImpl$Widgets(this));\n}\n\ndefineClass(712, $intern_44, {15:1, 1327:1}, FrmPasswordView);\n_.asWidget = function asWidget_8(){\n  return this.widget;\n}\n;\nvar Lcom_lemania_timetracking_client_view_FrmPasswordView_2_classLit = createForClass('com.lemania.timetracking.client.view', 'FrmPasswordView', 712);\nfunction FrmPasswordView_BinderImpl(){\n}\n\ndefineClass(790, 1, {}, FrmPasswordView_BinderImpl);\nvar Lcom_lemania_timetracking_client_view_FrmPasswordView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view', 'FrmPasswordView_BinderImpl', 790);\nfunction $build_f_HTMLPanel1_5(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Grid4, f_Label5, f_Label6, txtCurrentPassword, f_Label7, txtNewPassword1, f_Label8, txtNewPassword2, f_Label9, cmdSave;\n  f_HTMLPanel1 = new HTMLPanel($html1_5(this$static.domId0).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_10(f_VerticalPanel2, (f_Label3 = new Label , $setClassName(f_Label3.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label3, ALIGN_CENTER) , $setTextOrHtml(f_Label3.directionalTextHelper, 'CHANGER LE MOT DE PASSE', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_10(f_VerticalPanel2, (f_Grid4 = new Grid , $resizeColumns(f_Grid4, 2) , $resizeRows(f_Grid4, 6) , $setWidget_1(f_Grid4, 0, 0, (f_Label5 = new Label , $setClassName(f_Label5.element, 'hiddenText') , $setTextOrHtml(f_Label5.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label5) , f_Label5)) , $setWidget_1(f_Grid4, 1, 0, (f_Label6 = new Label , $setAutoHorizontalAlignment(f_Label6, ALIGN_LEFT) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Le mot de passe actuel :', false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(f_Grid4, 1, 1, (txtCurrentPassword = new TextBox , this$static.owner.txtCurrentPassword = txtCurrentPassword , txtCurrentPassword)) , $setWidget_1(f_Grid4, 2, 0, (f_Label7 = new Label , $setAutoHorizontalAlignment(f_Label7, ALIGN_LEFT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Nouveau mot de passe :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(f_Grid4, 2, 1, (txtNewPassword1 = new TextBox , this$static.owner.txtNewPassword1 = txtNewPassword1 , txtNewPassword1)) , $setWidget_1(f_Grid4, 3, 0, (f_Label8 = new Label , $setAutoHorizontalAlignment(f_Label8, ALIGN_LEFT) , $setTextOrHtml(f_Label8.directionalTextHelper, 'Nouveau mot de passe confirmation :', false) , $updateHorizontalAlignment(f_Label8) , f_Label8)) , $setWidget_1(f_Grid4, 3, 1, (txtNewPassword2 = new TextBox , this$static.owner.txtNewPassword2 = txtNewPassword2 , txtNewPassword2)) , $setWidget_1(f_Grid4, 4, 0, (f_Label9 = new Label , $setClassName(f_Label9.element, 'hiddenText') , $setTextOrHtml(f_Label9.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label9) , f_Label9)) , $setWidget_1(f_Grid4, 4, 1, (cmdSave = new Button , $setClassName(cmdSave.element, 'button-highlight') , $setInnerText(cmdSave.element, 'Enregistrer') , $addDomHandler(cmdSave, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdSave)) , f_Grid4)) , f_VerticalPanel2.element.style['width'] = '100%' , undefined , f_VerticalPanel2), $get_0(this$static.domId0Element));\n  return f_HTMLPanel1;\n}\n\nfunction FrmPasswordView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FrmPasswordView_BinderImpl$Widgets$1(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n}\n\ndefineClass(791, 1, {}, FrmPasswordView_BinderImpl$Widgets);\nvar Lcom_lemania_timetracking_client_view_FrmPasswordView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view', 'FrmPasswordView_BinderImpl/Widgets', 791);\nfunction FrmPasswordView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(792, 1, $intern_60, FrmPasswordView_BinderImpl$Widgets$1);\n_.onClick = function onClick_3(event_0){\n  $onCmdSaveClick(this.this$11.owner);\n}\n;\nvar Lcom_lemania_timetracking_client_view_FrmPasswordView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view', 'FrmPasswordView_BinderImpl/Widgets/1', 792);\nfunction $html1_5(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$com$lemania$timetracking$client$view$FrmPasswordView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$FrmPasswordView$_annotation$$none$$) {\n    result = new FrmPasswordView(new FrmPasswordView_BinderImpl);\n    this$static.singleton_Key$type$com$lemania$timetracking$client$view$FrmPasswordView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$FrmPasswordView$_annotation$$none$$;\n}\n\nfunction $changePassword_0(this$static, userName, password, newPassword){\n  var x_0;\n  x_0 = new UserRequestFactory_UserRequestContextImpl$3X(this$static, userName, password, newPassword);\n  $addInvocation(this$static.state.dialect, x_0);\n  return x_0;\n}\n\nfunction UserRequestFactory_UserRequestContextImpl$3X(this$0, val$userName, val$password, val$newPassword){\n  this.val$userName2 = val$userName;\n  this.val$password3 = val$password;\n  this.val$newPassword4 = val$newPassword;\n  AbstractRequest.call(this, this$0);\n}\n\ndefineClass(990, 17, $intern_69, UserRequestFactory_UserRequestContextImpl$3X);\n_.makeRequestData = function makeRequestData_31(){\n  return new RequestData('Mi0pe7DhszgeEz9CAnkdAFAyTok=', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [this.val$userName2, this.val$password3, this.val$newPassword4]), this.propertyRefs, Lcom_lemania_timetracking_shared_UserProxy_2_classLit, null);\n}\n;\nvar Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service', 'UserRequestFactory_UserRequestContextImpl/3X', 990);\n$entry(onLoad)(7);\n\n//# sourceURL=timetracking-7.js\n")
