function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = nullMethod;
  NORMAL = new Style$WhiteSpace$1_0;
  NOWRAP = new Style$WhiteSpace$2_0;
  PRE = new Style$WhiteSpace$3_0;
  PRE_LINE = new Style$WhiteSpace$4_0;
  PRE_WRAP = new Style$WhiteSpace$5_0;
  $VALUES_9 = initValues(_3Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$WhiteSpace, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

function values_10(){
  $clinit_Style$WhiteSpace();
  return $VALUES_9;
}

defineSeed(218, 33, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_9, NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
function Style$WhiteSpace$1_0(){
  Enum_0.call(this, 'NORMAL', 0);
}

defineSeed(219, 218, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]), Style$WhiteSpace$1_0);
function Style$WhiteSpace$2_0(){
  Enum_0.call(this, 'NOWRAP', 1);
}

defineSeed(220, 218, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]), Style$WhiteSpace$2_0);
function Style$WhiteSpace$3_0(){
  Enum_0.call(this, 'PRE', 2);
}

defineSeed(221, 218, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]), Style$WhiteSpace$3_0);
function Style$WhiteSpace$4_0(){
  Enum_0.call(this, 'PRE_LINE', 3);
}

defineSeed(222, 218, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]), Style$WhiteSpace$4_0);
function Style$WhiteSpace$5_0(){
  Enum_0.call(this, 'PRE_WRAP', 4);
}

defineSeed(223, 218, makeCastMap([Q$Style$HasCssName, Q$Style$WhiteSpace, Q$Serializable, Q$Comparable, Q$Enum]), Style$WhiteSpace$5_0);
function Label_1(element){
  LabelBase_0.call(this, element, $equalsIgnoreCase('span', element.tagName));
}

function $setHTML_0(this$static, html){
  $setTextOrHtml(this$static.directionalTextHelper, html, true);
  $updateHorizontalAlignment(this$static);
}

function HTML_0(){
  Label_1.call(this, $doc.createElement('div'));
  this.element['className'] = 'gwt-HTML';
}

defineSeed(438, 439, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), HTML_0);
function ContactPresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
}

defineSeed(738, 672, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget]), ContactPresenter_0);
_.onBind = function onBind_1(){
}
;
_.revealInParent = function revealInParent_0(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$) {
    result = new ContactPresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$;
}

defineSeed(872, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_47(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function ContactView_0(){
  this.widget = $build_f_HTMLPanel1(new ContactView_BinderImpl$Widgets_0);
}

defineSeed(908, 676, makeCastMap([Q$IsWidget]), ContactView_0);
_.asWidget = function asWidget_3(){
  return this.widget;
}
;
_.widget = null;
function ContactView_BinderImpl_0(){
}

defineSeed(909, 1, {}, ContactView_BinderImpl_0);
function $build_f_HTMLPanel1(this$static){
  var attachRecord0, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HTML4, sb;
  f_HTMLPanel1 = new HTMLPanel_0($html2(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_9(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setAutoHorizontalAlignment(f_Label3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label3.directionalTextHelper, 'CONTACT', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_9(f_VerticalPanel2, (f_HTML4 = new HTML_0 , $setHTML_0(f_HTML4, (sb = new StringBuilder_0 , sb.impl.string += 'Pour toutes questions, veuillez contacter Monsieur Carlo CAVADINI. <p>Email : Carlo.CAVADINI@lemania.ch <\/p> <p>Extension : 420<\/p>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , f_HTML4.element['className'] = 'header' , f_HTML4.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal') , f_HTML4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2.table['cellSpacing'] = 2 , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ContactView_BinderImpl$Widgets_0(){
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(910, 1, {}, ContactView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
function $html2(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$) {
    result = new ContactView_0(new ContactView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$;
}

var Lcom_lemania_timetracking_client_presenter_ContactPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ContactPresenter', 738), Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace', 218, Ljava_lang_Enum_2_classLit, values_10), _3Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$WhiteSpace;', 1302, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit), Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace$1', 219, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null), Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace$2', 220, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null), Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace$3', 221, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null), Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace$4', 222, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null), Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$WhiteSpace$5', 223, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null), Lcom_lemania_timetracking_client_view_ContactView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView', 908), Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView_BinderImpl', 909), Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView_BinderImpl$Widgets', 910), Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTML', 438);
$entry(onLoad)(1);
