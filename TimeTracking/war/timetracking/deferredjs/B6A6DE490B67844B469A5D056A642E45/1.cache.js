$wnd.timetracking.runAsyncCallback1("var $intern_67 = {28:1, 119:1, 3:1, 11:1, 7:1};\nfunction $clinit_Style$WhiteSpace(){\n  $clinit_Style$WhiteSpace = emptyMethod;\n  NORMAL = new Style$WhiteSpace$1;\n  NOWRAP = new Style$WhiteSpace$2;\n  PRE = new Style$WhiteSpace$3;\n  PRE_LINE = new Style$WhiteSpace$4;\n  PRE_WRAP = new Style$WhiteSpace$5;\n}\n\nfunction Style$WhiteSpace(enum$name, enum$ordinal){\n  Enum.call(this, enum$name, enum$ordinal);\n}\n\nfunction values_10(){\n  $clinit_Style$WhiteSpace();\n  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_2, 119, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);\n}\n\ndefineClass(119, 7, $intern_67);\nvar NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;\nvar Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace', 119, Ljava_lang_Enum_2_classLit, values_10);\nfunction Style$WhiteSpace$1(){\n  Style$WhiteSpace.call(this, 'NORMAL', 0);\n}\n\ndefineClass(688, 119, $intern_67, Style$WhiteSpace$1);\nvar Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/1', 688, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);\nfunction Style$WhiteSpace$2(){\n  Style$WhiteSpace.call(this, 'NOWRAP', 1);\n}\n\ndefineClass(689, 119, $intern_67, Style$WhiteSpace$2);\nvar Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/2', 689, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);\nfunction Style$WhiteSpace$3(){\n  Style$WhiteSpace.call(this, 'PRE', 2);\n}\n\ndefineClass(690, 119, $intern_67, Style$WhiteSpace$3);\nvar Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/3', 690, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);\nfunction Style$WhiteSpace$4(){\n  Style$WhiteSpace.call(this, 'PRE_LINE', 3);\n}\n\ndefineClass(691, 119, $intern_67, Style$WhiteSpace$4);\nvar Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/4', 691, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);\nfunction Style$WhiteSpace$5(){\n  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);\n}\n\ndefineClass(692, 119, $intern_67, Style$WhiteSpace$5);\nvar Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/5', 692, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);\nfunction Label_0(element){\n  LabelBase.call(this, element, $equalsIgnoreCase('span', element.tagName));\n}\n\nfunction $setHTML_0(this$static, html){\n  $setTextOrHtml(this$static.directionalTextHelper, html, true);\n  $updateHorizontalAlignment(this$static);\n}\n\nfunction HTML(){\n  Label_0.call(this, $doc.createElement('div'));\n  $setClassName(($clinit_DOM() , this.element), 'gwt-HTML');\n}\n\ndefineClass(954, 10, $intern_22, HTML);\nvar Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 954);\nfunction ContactPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy);\n}\n\ndefineClass(459, 75, $intern_43, ContactPresenter);\n_.onBind = function onBind_1(){\n}\n;\n_.revealInParent = function revealInParent_0(){\n  $fireEvent_1(this, new RevealContentEvent(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));\n}\n;\nvar Lcom_lemania_timetracking_client_presenter_ContactPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ContactPresenter', 459);\nfunction $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$) {\n    result = new ContactPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$;\n}\n\ndefineClass(416, 1, $intern_59);\n_.onSuccess_0 = function onSuccess_52(){\n  $onSuccess_1(this.val$callback2, $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction ContactView(){\n  this.widget = $build_f_HTMLPanel1_0(new ContactView_BinderImpl$Widgets);\n}\n\ndefineClass(697, 1282, {15:1}, ContactView);\n_.asWidget = function asWidget_3(){\n  return this.widget;\n}\n;\nvar Lcom_lemania_timetracking_client_view_ContactView_2_classLit = createForClass('com.lemania.timetracking.client.view', 'ContactView', 697);\nfunction ContactView_BinderImpl(){\n}\n\ndefineClass(770, 1, {}, ContactView_BinderImpl);\nvar Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view', 'ContactView_BinderImpl', 770);\nfunction $build_f_HTMLPanel1_0(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HTML4, sb;\n  f_HTMLPanel1 = new HTMLPanel($html2(this$static.domId0).html);\n  ($clinit_DOM() , f_HTMLPanel1.element).style['width'] = '100%';\n  __attachRecord__ = attachToDom(f_HTMLPanel1.element);\n  $get_0(this$static.domId0Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel , $add_10(f_VerticalPanel2, (f_Label3 = new Label , $setClassName(f_Label3.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'CONTACT', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_10(f_VerticalPanel2, (f_HTML4 = new HTML , $setHTML_0(f_HTML4, (sb = new StringBuilder , sb.string += 'Pour toutes questions, veuillez contacter Monsieur Carlo CAVADINI. <p>Email : Carlo.CAVADINI@lemania.ch <\\/p> <p>Extension : 420<\\/p>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , $setClassName(f_HTML4.element, 'header') , f_HTML4.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal') , f_HTML4)) , f_VerticalPanel2.element.style['width'] = '100%' , undefined , f_VerticalPanel2), $get_0(this$static.domId0Element));\n  return f_HTMLPanel1;\n}\n\nfunction ContactView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n}\n\ndefineClass(771, 1, {}, ContactView_BinderImpl$Widgets);\nvar Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view', 'ContactView_BinderImpl/Widgets', 771);\nfunction $html2(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$) {\n    result = new ContactView(new ContactView_BinderImpl);\n    this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$;\n}\n\n$entry(onLoad)(1);\n\n//# sourceURL=timetracking-1.js\n")
