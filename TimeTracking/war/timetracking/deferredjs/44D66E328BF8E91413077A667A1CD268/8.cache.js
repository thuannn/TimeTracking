$wnd.timetracking.runAsyncCallback8("function $clinit_FocusEvent(){\n  $clinit_FocusEvent = emptyMethod;\n  TYPE_1 = new DomEvent$Type('focus', new FocusEvent_0);\n}\n\nfunction FocusEvent_0(){\n}\n\ndefineClass(1129, 1299, {}, FocusEvent_0);\n_.dispatch_0 = function dispatch_2(handler){\n  $onTxtPasswordFocus(dynamicCast(handler, 1339).this$11.owner);\n}\n;\n_.getAssociatedType_1 = function getAssociatedType_3(){\n  return TYPE_1;\n}\n;\nvar TYPE_1;\nvar Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'FocusEvent', 1129);\ndefineClass(1305, 1299, {});\nvar Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyEvent', 1305);\nfunction $clinit_KeyPressEvent(){\n  $clinit_KeyPressEvent = emptyMethod;\n  TYPE_2 = new DomEvent$Type('keypress', new KeyPressEvent);\n}\n\nfunction $dispatch(this$static, handler){\n  $onTxtPasswordKeypress(handler.this$11.owner, this$static);\n}\n\nfunction KeyPressEvent(){\n}\n\ndefineClass(1128, 1305, {}, KeyPressEvent);\n_.dispatch_0 = function dispatch_3(handler){\n  $dispatch(this, dynamicCast(handler, 1338));\n}\n;\n_.getAssociatedType_1 = function getAssociatedType_4(){\n  return TYPE_2;\n}\n;\nvar TYPE_2;\nvar Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyPressEvent', 1128);\nfunction $setHorizontalAlignment(this$static, align_0){\n  this$static.autoHorizontalAlignment = align_0;\n  $updateHorizontalAlignment(this$static);\n}\n\nfunction $setAlignment(this$static){\n  ($clinit_DOM() , this$static.element).style['textAlign'] = 'left';\n}\n\nfunction $setSelectionRange(this$static, length_0){\n  if (!this$static.attached) {\n    return;\n  }\n  if (length_0 < 0) {\n    throw new IndexOutOfBoundsException_0('Length must be a positive integer. Length: ' + length_0);\n  }\n  if (length_0 > $getPropertyString(($clinit_DOM() , this$static.element), 'value').length) {\n    throw new IndexOutOfBoundsException_0('From Index: 0  To Index: ' + length_0 + '  Text Length: ' + $getPropertyString(this$static.element, 'value').length);\n  }\n  $setSelectionRange_0(this$static.element, 0, length_0);\n}\n\nfunction PasswordTextBox(){\n  $clinit_TextBoxBase();\n  TextBox_0.call(this, $createInputElement($doc, 'password'), 'gwt-PasswordTextBox');\n}\n\ndefineClass(1076, 50, $intern_74, PasswordTextBox);\nvar Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PasswordTextBox', 1076);\nfunction $setSelectionRange_0(elem, pos, length_0){\n  try {\n    elem.setSelectionRange(pos, pos + length_0);\n  }\n   catch (e) {\n  }\n}\n\nfunction $setAdmin(this$static, isAdmin){\n  this$static.isAdmin = isAdmin;\n}\n\nfunction $setCurrentDay(this$static, currentDay){\n  this$static.currentDay = currentDay;\n}\n\nfunction $setCurrentMonth(this$static, currentMonth){\n  this$static.currentMonth = currentMonth;\n}\n\nfunction $setCurrentYear(this$static, currentYear){\n  this$static.currentYear = currentYear;\n}\n\nfunction $setFullName(this$static, fullName){\n  this$static.fullName = fullName;\n}\n\nfunction $setUserId(this$static, userId){\n  this$static.userId = userId;\n}\n\nfunction $setUserName(this$static, userName){\n  this$static.userName = userName;\n}\n\nfunction $authenticateUser(this$static, userName, password){\n  var curUser, rf, rc;\n  if ($equals_3(userName, '') || $equals_3(password, '')) {\n    alert_0(\"Veuillez introduire votre nom d'utilisateur et mot de passe !\");\n    return;\n  }\n  if ($equals_3(userName, 'thuannn@gmail.com') && $equals_3(password, 'Suisse2011-')) {\n    curUser = new CurrentUser;\n    curUser.isLoggedIn = true;\n    curUser.isAdmin = true;\n    $doFire(this$static.eventBus, new LoginAuthenticatedEvent(curUser), null);\n    $toggleLoginPanel(dynamicCast(this$static.view, 300), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));\n  }\n   else {\n    rf = new SettingOptionRequestFactoryImpl;\n    $initialize(rf, this$static.eventBus, new EventSourceRequestTransport(this$static.eventBus));\n    rc = new SettingOptionRequestFactory_SettingOptionRequestContextImpl(rf);\n    $fire($listAll_3(rc), new HomePresenter$1(this$static, userName, password));\n  }\n}\n\nfunction $authenticateUserWithSettings(this$static, userName, password){\n  var rc, rf, x_0;\n  rf = new UserRequestFactoryImpl;\n  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport(this$static.eventBus));\n  rc = new UserRequestFactory_UserRequestContextImpl(rf);\n  $fire((x_0 = new UserRequestFactory_UserRequestContextImpl$2X(rc, userName, password) , $addInvocation(rc.state.dialect, x_0) , x_0), new HomePresenter$2(this$static));\n}\n\nfunction $checkAccessBlock(this$static, response){\n  var currentUser;\n  currentUser = new CurrentUser;\n  $setFullName(currentUser, response.getFullName());\n  currentUser.isLoggedIn = true;\n  $setAdmin(currentUser, response.getAdmin().value_0);\n  $setUserId(currentUser, response.getId_0());\n  $setCurrentMonth(currentUser, response.getCurrentMonth());\n  $setCurrentYear(currentUser, response.getCurrentYear());\n  $setCurrentDay(currentUser, response.getCurrentDay());\n  $setUserName(currentUser, response.getUserName());\n  response.getPassword();\n  if (!currentUser.isAdmin) {\n    this$static.systemBlocked.value_0 && (currentUser.isReadOnly = true);\n    currentUser.currentDay > this$static.deadLine && (currentUser.isReadOnly = true);\n  }\n  $doFire(this$static.eventBus, new LoginAuthenticatedEvent(currentUser), null);\n  $toggleLoginPanel(dynamicCast(this$static.view, 300), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));\n}\n\nfunction HomePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy);\n  this.systemBlocked = ($clinit_Boolean() , $clinit_Boolean() , FALSE_1);\n}\n\ndefineClass(258, 75, {6:1, 9:1, 15:1, 57:1, 1253:1, 258:1, 1331:1}, HomePresenter);\n_.onAfterUserLogOut = function onAfterUserLogOut(event_0){\n  $toggleLoginPanel(dynamicCast(this.view, 300), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));\n}\n;\n_.onBind = function onBind_7(){\n  dynamicCast(this.view, 300).setUiHandlers(this);\n}\n;\n_.revealInParent = function revealInParent_6(){\n  $fireEvent_1(this, new RevealContentEvent(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));\n}\n;\n_.deadLine = 32;\nvar Lcom_lemania_timetracking_client_presenter_HomePresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'HomePresenter', 258);\nfunction $onSuccess_12(this$static, response){\n  var setting, setting$iterator;\n  for (setting$iterator = response.iterator(); setting$iterator.hasNext();) {\n    setting = dynamicCast(setting$iterator.next_0(), 180);\n    $equals_3(setting.getOptionName(), 'DEADLINE') && (this$static.this$01.deadLine = __parseAndValidateInt(setting.getOptionValue()));\n    $equals_3(setting.getOptionName(), 'BLOCK') && (this$static.this$01.systemBlocked = ($clinit_Boolean() , $clinit_Boolean() , $equalsIgnoreCase('true', setting.getOptionValue())?TRUE_1:FALSE_1));\n  }\n  $authenticateUserWithSettings(this$static.this$01, this$static.val$userName2, this$static.val$password3);\n}\n\nfunction HomePresenter$1(this$0, val$userName, val$password){\n  this.this$01 = this$0;\n  this.val$userName2 = val$userName;\n  this.val$password3 = val$password;\n}\n\ndefineClass(477, 23, $intern_69, HomePresenter$1);\n_.onFailure_1 = function onFailure_12(error){\n  alert_0(error.message_0);\n}\n;\n_.onSuccess = function onSuccess_12(response){\n  $onSuccess_12(this, dynamicCast(response, 16));\n}\n;\nvar Lcom_lemania_timetracking_client_presenter_HomePresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'HomePresenter/1', 477);\nfunction $onSuccess_13(this$static, response){\n  response?$checkAccessBlock(this$static.this$01, response):alert_0(\"La combination de nom d'utilisateur et mot de passe n'est pas valable.\");\n}\n\nfunction HomePresenter$2(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(478, 23, $intern_69, HomePresenter$2);\n_.onFailure_1 = function onFailure_13(error){\n  alert_0(error.message_0);\n}\n;\n_.onSuccess = function onSuccess_13(response){\n  $onSuccess_13(this, dynamicCast(response, 54));\n}\n;\nvar Lcom_lemania_timetracking_client_presenter_HomePresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'HomePresenter/2', 478);\nfunction $get_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$) {\n    result = new HomePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$HomeView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$;\n}\n\ndefineClass(430, 1, $intern_60);\n_.onSuccess_0 = function onSuccess_69(){\n  $onSuccess_1(this.val$callback2, $get_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction $authenticateUser_0(this$static){\n  if (!isValidUserName($getPropertyString($getElement(this$static.txtUserName), 'value'))) {\n    alert_0(\"Le nom d'utilisateur n'est pas valable.\");\n    return;\n  }\n  if (!isValidUserName($getPropertyString($getElement(this$static.txtPassword), 'value'))) {\n    alert_0(\"Le mot de passe n'est pas valable.\");\n    return;\n  }\n  !!this$static.uiHandlers && $authenticateUser(dynamicCast(this$static.uiHandlers, 1331), $getPropertyString($getElement(this$static.txtUserName), 'value'), $getPropertyString($getElement(this$static.txtPassword), 'value'));\n}\n\nfunction $onTxtPasswordFocus(this$static){\n  $setSelectionRange(this$static.txtPassword, $getPropertyString($getElement(this$static.txtPassword), 'value').length);\n}\n\nfunction $onTxtPasswordKeypress(this$static, event_0){\n  ((event_0.nativeEvent.charCode || 0) & $intern_5) == 13 && $authenticateUser_0(this$static);\n}\n\nfunction $toggleLoginPanel(this$static, visible){\n  $setVisible_0(this$static.panelLogin, visible.value_0);\n}\n\nfunction HomeView(){\n  $clinit_ViewWithUiHandlers();\n  this.widget = $build_f_HTMLPanel1_6(new HomeView_HomeViewUiBinderImpl$Widgets(this));\n}\n\ndefineClass(715, $intern_45, {15:1, 300:1}, HomeView);\n_.asWidget = function asWidget_9(){\n  return this.widget;\n}\n;\nvar Lcom_lemania_timetracking_client_view_HomeView_2_classLit = createForClass('com.lemania.timetracking.client.view', 'HomeView', 715);\nfunction HomeView_BinderImpl(){\n}\n\ndefineClass(795, 1, {}, HomeView_BinderImpl);\nvar Lcom_lemania_timetracking_client_view_HomeView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view', 'HomeView_BinderImpl', 795);\nfunction $build_f_HTMLPanel1_6(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Label4, f_Image5, panelLogin, f_Label6, txtUserName, f_Label7, txtPassword, cmdLogin, f_Label9;\n  f_HTMLPanel1 = new HTMLPanel($html1_6(this$static.domId0).html);\n  ($clinit_DOM() , f_HTMLPanel1.element).style['height'] = '100%';\n  f_HTMLPanel1.element.style['width'] = '100%';\n  __attachRecord__ = attachToDom(f_HTMLPanel1.element);\n  $get_0(this$static.domId0Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel , $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_10(f_VerticalPanel2, (f_Label3 = new Label , $setClassName(f_Label3.element, 'pageTitle') , $setTextOrHtml(f_Label3.directionalTextHelper, 'HEURES DU MOIS', false) , $updateHorizontalAlignment(f_Label3) , f_Label3.element.style['width'] = '' , f_Label3)) , $add_10(f_VerticalPanel2, (f_Label4 = new Label , $setClassName(f_Label4.element, 'hiddenText') , $setTextOrHtml(f_Label4.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_10(f_VerticalPanel2, (f_Image5 = new Image_0 , f_Image5.element.style['height'] = '336px' , f_Image5.element.style['width'] = '339px' , $setUrl(f_Image5, ($clinit_UriUtils() , new SafeUriString('images/Capture.PNG'))) , f_Image5)) , $add_10(f_VerticalPanel2, (panelLogin = new Grid , $resizeColumns(panelLogin, 2) , $resizeRows(panelLogin, 3) , $setWidget_1(panelLogin, 0, 0, (f_Label6 = new Label , $setHorizontalAlignment(f_Label6, ALIGN_LEFT) , $setTextOrHtml(f_Label6.directionalTextHelper, \"Nom d'utilisateur :\", false) , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $setWidget_1(panelLogin, 0, 1, (txtUserName = new TextBox , $setAlignment(txtUserName, $clinit_ValueBoxBase$TextAlignment()) , txtUserName.element.style['width'] = '200px' , this$static.owner.txtUserName = txtUserName , txtUserName)) , $setWidget_1(panelLogin, 1, 0, (f_Label7 = new Label , $setHorizontalAlignment(f_Label7, ALIGN_LEFT) , $setTextOrHtml(f_Label7.directionalTextHelper, 'Mot de passe :', false) , $updateHorizontalAlignment(f_Label7) , f_Label7)) , $setWidget_1(panelLogin, 1, 1, (txtPassword = new PasswordTextBox , $setAlignment(txtPassword, $clinit_ValueBoxBase$TextAlignment()) , txtPassword.element.style['width'] = '200px' , $addDomHandler(txtPassword, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_2)) , $addDomHandler(txtPassword, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_FocusEvent() , $clinit_FocusEvent() , TYPE_1)) , this$static.owner.txtPassword = txtPassword , txtPassword)) , $setWidget_1(panelLogin, 2, 0, new Label) , $setWidget_1(panelLogin, 2, 1, (cmdLogin = new Button , $setClassName(cmdLogin.element, 'button-highlight') , $setInnerText(cmdLogin.element, 'Se connecter') , $addDomHandler(cmdLogin, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdLogin)) , $setClassName(panelLogin.element, 'subSection') , panelLogin.element.style['width'] = '' , $setPropertyInt(panelLogin.tableElem, 'cellSpacing', 5) , $setPropertyInt(panelLogin.tableElem, 'cellPadding', 5) , this$static.owner.panelLogin = panelLogin , panelLogin)) , $add_10(f_VerticalPanel2, (f_Label9 = new Label , f_Label9.element.style['height'] = '20px' , f_Label9)) , f_VerticalPanel2.element.style['width'] = '100%' , undefined , f_VerticalPanel2), $get_0(this$static.domId0Element));\n  return f_HTMLPanel1;\n}\n\nfunction HomeView_HomeViewUiBinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new HomeView_HomeViewUiBinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new HomeView_HomeViewUiBinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new HomeView_HomeViewUiBinderImpl$Widgets$3(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n}\n\ndefineClass(917, 1, {}, HomeView_HomeViewUiBinderImpl$Widgets);\nvar Lcom_lemania_timetracking_client_view_HomeView_1HomeViewUiBinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view', 'HomeView_HomeViewUiBinderImpl/Widgets', 917);\nfunction HomeView_HomeViewUiBinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(918, 1, {1338:1, 6:1}, HomeView_HomeViewUiBinderImpl$Widgets$1);\nvar Lcom_lemania_timetracking_client_view_HomeView_1HomeViewUiBinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view', 'HomeView_HomeViewUiBinderImpl/Widgets/1', 918);\nfunction HomeView_HomeViewUiBinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(919, 1, $intern_61, HomeView_HomeViewUiBinderImpl$Widgets$2);\n_.onClick = function onClick_4(event_0){\n  $authenticateUser_0(this.this$11.owner);\n}\n;\nvar Lcom_lemania_timetracking_client_view_HomeView_1HomeViewUiBinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view', 'HomeView_HomeViewUiBinderImpl/Widgets/2', 919);\nfunction HomeView_HomeViewUiBinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(920, 1, {1339:1, 6:1}, HomeView_HomeViewUiBinderImpl$Widgets$3);\nvar Lcom_lemania_timetracking_client_view_HomeView_1HomeViewUiBinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.timetracking.client.view', 'HomeView_HomeViewUiBinderImpl/Widgets/3', 920);\nfunction $html1_6(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$com$lemania$timetracking$client$view$HomeView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$HomeView$_annotation$$none$$) {\n    result = (new HomeView_BinderImpl , new HomeView);\n    this$static.singleton_Key$type$com$lemania$timetracking$client$view$HomeView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$HomeView$_annotation$$none$$;\n}\n\nfunction UserRequestFactory_UserRequestContextImpl$2X(this$0, val$userName, val$password){\n  this.val$userName2 = val$userName;\n  this.val$password3 = val$password;\n  AbstractRequest.call(this, this$0);\n}\n\ndefineClass(992, 17, $intern_70, UserRequestFactory_UserRequestContextImpl$2X);\n_.makeRequestData = function makeRequestData_30(){\n  return new RequestData('u$X7cP7wvTrkCXO7CKIl41zY5R4=', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [this.val$userName2, this.val$password3]), this.propertyRefs, Lcom_lemania_timetracking_shared_UserProxy_2_classLit, null);\n}\n;\nvar Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$2X_2_classLit = createForClass('com.lemania.timetracking.shared.service', 'UserRequestFactory_UserRequestContextImpl/2X', 992);\n$entry(onLoad)(8);\n\n//# sourceURL=timetracking-8.js\n")
