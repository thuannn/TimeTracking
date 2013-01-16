function ContactPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(753, 692, makeCastMap([Q$HasHandlers, Q$PresenterWidget]), ContactPresenter_0);
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

defineSeed(882, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_49(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function ContactView_0(){
  this.widget = $build_f_HTMLPanel1(new ContactView_BinderImpl$Widgets_0);
}

defineSeed(916, 696, {}, ContactView_0);
_.asWidget = function asWidget_1(){
  return this.widget;
}
;
_.widget = null;
function ContactView_BinderImpl_0(){
}

defineSeed(917, 1, {}, ContactView_BinderImpl_0);
function $build_f_HTMLPanel1(this$static){
  var attachRecord0, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Label4;
  f_HTMLPanel1 = new HTMLPanel_0($html1_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_8(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Contact') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_8(f_VerticalPanel2, (f_Label4 = new Label_0 , $setTextOrHtml(f_Label4.directionalTextHelper, 'Pour assistance technique, veuillez contacter par email \xE0 : thuan.nguyen@lemania.ch') , $updateHorizontalAlignment(f_Label4) , f_Label4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ContactView_BinderImpl$Widgets_0(){
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(918, 1, {}, ContactView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
function $html1_1(arg0){
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

var Lcom_lemania_timetracking_client_presenter_ContactPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ContactPresenter', 753), Lcom_lemania_timetracking_client_view_ContactView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView', 916), Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView_BinderImpl', 917), Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView_BinderImpl$Widgets', 918);
$entry(onLoad)(1);
