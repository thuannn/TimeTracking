function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$ContactPresenter_ContactPresenter_methodInjection(_0, _1){
  return new ContactPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$ContactPresenter_ContactPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$ = new ContactView_0(new ContactView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$ = new ContactPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_________________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$;
}

defineSeed(771, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_11(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function ContactPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(785, 695, makeCastMap([Q$HasHandlers, Q$PresenterWidget]), ContactPresenter_0);
_.onBind = function onBind_1(){
}
;
_.revealInParent = function revealInParent(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function ContactView_0(){
  this.widget = $build_f_HTMLPanel1(new ContactView_BinderImpl$Widgets_0);
}

defineSeed(912, 699, {}, ContactView_0);
_.asWidget = function asWidget_1(){
  return this.widget;
}
;
_.widget = null;
function ContactView_BinderImpl_0(){
}

defineSeed(913, 1, {}, ContactView_BinderImpl_0);
function $build_f_HTMLPanel1(this$static){
  var attachRecord7, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_Label4;
  f_HTMLPanel1 = new HTMLPanel_0($html1_1(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord7 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord7.origParent?$insertBefore(attachRecord7.origParent, attachRecord7.element, attachRecord7.origSibling):orphan(attachRecord7.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_8(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Contact') , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_8(f_VerticalPanel2, (f_Label4 = new Label_0 , $setTextOrHtml(f_Label4.directionalTextHelper, 'Pour assistance technique, veuillez contacter par email \xE0 : thuan.nguyen@lemania.ch') , $updateHorizontalAlignment(f_Label4) , f_Label4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ContactView_BinderImpl$Widgets_0(){
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(914, 1, {}, ContactView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
function $html1_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

var Lcom_lemania_timetracking_client_presenter_ContactPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ContactPresenter', 785), Lcom_lemania_timetracking_client_view_ContactView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView', 912), Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView_BinderImpl', 913), Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView_BinderImpl$Widgets', 914);
$entry(onLoad)(3);
