function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$ContactPresenter_ContactPresenter_methodInjection(_0, _1){
  return new ContactPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$ContactPresenter_ContactPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$ = new ContactView_0(new ContactView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$ = new ContactPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$10$1.prototype;
_.onSuccess = function onSuccess_2(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function ContactPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function ContactPresenter(){
}

_ = ContactPresenter_0.prototype = ContactPresenter.prototype = new Presenter;
_.getClass$ = function getClass_531(){
  return Lcom_lemania_timetracking_client_presenter_ContactPresenter_2_classLit;
}
;
_.onBind = function onBind_1(){
}
;
_.revealInParent = function revealInParent(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers, Q$PresenterWidget]);
function ContactView_0(){
  var attachRecord0, domId0, domId0Element, f_HTMLPanel1, f_Label3, f_Label4, f_VerticalPanel2, sb;
  this.widget = (domId0 = $createUniqueId($doc) , f_Label3 = new Label_0 , f_Label4 = new Label_0 , f_VerticalPanel2 = new VerticalPanel_0 , f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Contact') , $updateHorizontalAlignment(f_Label3) , $add_8(f_VerticalPanel2, f_Label3) , $setTextOrHtml(f_Label4.directionalTextHelper, 'Pour assistance technique, veuillez contacter par email \xE0 : thuan.nguyen@lemania.ch') , $updateHorizontalAlignment(f_Label4) , $add_8(f_VerticalPanel2, f_Label4) , f_VerticalPanel2.element.style['width'] = '100%' , f_HTMLPanel1.element.style['width'] = '100%' , attachRecord0 = attachToDom(f_HTMLPanel1.element) , domId0Element = $getElementById($doc, domId0) , attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element) , $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element) , f_HTMLPanel1);
}

function ContactView(){
}

_ = ContactView_0.prototype = ContactView.prototype = new ViewImpl;
_.asWidget = function asWidget_1(){
  return this.widget;
}
;
_.getClass$ = function getClass_655(){
  return Lcom_lemania_timetracking_client_view_ContactView_2_classLit;
}
;
_.widget = null;
function ContactView_BinderImpl_0(){
}

function ContactView_BinderImpl(){
}

_ = ContactView_BinderImpl_0.prototype = ContactView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_656(){
  return Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl_2_classLit;
}
;
var Lcom_lemania_timetracking_client_presenter_ContactPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ContactPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_ContactView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView', Lcom_gwtplatform_mvp_client_ViewImpl_2_classLit), Lcom_lemania_timetracking_client_view_ContactView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ContactView_BinderImpl', Ljava_lang_Object_2_classLit);
$entry(onLoad)(2);
