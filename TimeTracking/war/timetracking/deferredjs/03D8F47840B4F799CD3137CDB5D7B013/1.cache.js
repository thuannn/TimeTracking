function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = nullMethod;
  NORMAL = new Style$WhiteSpace$1_0;
  NOWRAP = new Style$WhiteSpace$2_0;
  PRE = new Style$WhiteSpace$3_0;
  PRE_LINE = new Style$WhiteSpace$4_0;
  PRE_WRAP = new Style$WhiteSpace$5_0;
  $VALUES_8 = initValues(_3Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$WhiteSpace, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

function values_9(){
  $clinit_Style$WhiteSpace();
  return $VALUES_8;
}

defineSeed(209, 31, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_8, NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
function Style$WhiteSpace$1_0(){
  Enum_0.call(this, 'NORMAL', 0);
}

defineSeed(210, 209, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]), Style$WhiteSpace$1_0);
function Style$WhiteSpace$2_0(){
  Enum_0.call(this, 'NOWRAP', 1);
}

defineSeed(211, 209, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]), Style$WhiteSpace$2_0);
function Style$WhiteSpace$3_0(){
  Enum_0.call(this, 'PRE', 2);
}

defineSeed(212, 209, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]), Style$WhiteSpace$3_0);
function Style$WhiteSpace$4_0(){
  Enum_0.call(this, 'PRE_LINE', 3);
}

defineSeed(213, 209, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]), Style$WhiteSpace$4_0);
function Style$WhiteSpace$5_0(){
  Enum_0.call(this, 'PRE_WRAP', 4);
}

defineSeed(214, 209, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]), Style$WhiteSpace$5_0);
function Label_1(element){
  LabelBase_0.call(this, element, $equalsIgnoreCase('span', $getTagName(element)));
}

function $setHTML_0(this$static, html){
  $setTextOrHtml(this$static.directionalTextHelper, html, true);
  $updateHorizontalAlignment(this$static);
}

function HTML_0(){
  Label_1.call(this, $createElement($doc, 'div'));
  this.element['className'] = 'gwt-HTML';
}

defineSeed(433, 434, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), HTML_0);
function ContactPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(729, 668, makeCastMap([Q$HasHandlers, Q$PresenterWidget]), ContactPresenter_0);
_.onBind = function onBind_1(){
}
;
_.revealInParent = function revealInParent(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $com$lemania$timetracking$client$presenter$ContactPresenter_com$lemania$timetracking$client$presenter$ContactPresenter_methodInjection(_0, _1){
  return new ContactPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$) {
    result = $com$lemania$timetracking$client$presenter$ContactPresenter_com$lemania$timetracking$client$presenter$ContactPresenter_methodInjection($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$;
}

defineSeed(857, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_46(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function ContactView_0(){
  this.widget = $build_f_HTMLPanel1(new ContactView_BinderImpl$Widgets_0);
}

defineSeed(891, 672, {}, ContactView_0);
_.asWidget = function asWidget_1(){
  return this.widget;
}
;
_.widget = null;
function ContactView_BinderImpl_0(){
}

defineSeed(892, 1, {}, ContactView_BinderImpl_0);
function $build_f_HTMLPanel1(this$static){
  var attachRecord0, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HTML4, sb;
  f_HTMLPanel1 = new HTMLPanel_0($html2(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_8(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'CONTACT', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_8(f_VerticalPanel2, (f_HTML4 = new HTML_0 , $setHTML_0(f_HTML4, (sb = new StringBuilder_0 , $append_1(sb.data, 'Pour toutes questions, veuillez contacter Monsieur Carlo CAVADINI. <p>Email : Carlo.CAVADINI@lemania.ch <\/p> <p>Extension : 420<\/p>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , f_HTML4.element['className'] = 'header' , f_HTML4.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal') , f_HTML4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ContactView_BinderImpl$Widgets_0(){
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(893, 1, {}, ContactView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
function $html2(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$) {
    result = new ContactView_0(new ContactView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$;
}

var Lcom_lemania_timetracking_client_presenter_ContactPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ContactPresenter', 729), Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace', 209, Ljava_lang_Enum_2_classLit, values_9), _3Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$WhiteSpace;', 1258, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit), Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace$1', 210, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null), Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace$2', 211, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null), Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace$3', 212, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null), Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace$4', 213, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null), Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace$5', 214, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null), Lcom_lemania_timetracking_client_view_ContactView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView', 891), Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView_BinderImpl', 892), Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView_BinderImpl$Widgets', 893), Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTML', 433);
$entry(onLoad)(1);
