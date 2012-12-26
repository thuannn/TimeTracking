function $clinit_FocusEvent(){
  $clinit_FocusEvent = nullMethod;
  TYPE_1 = new DomEvent$Type_0('focus', new FocusEvent_0);
}

function FocusEvent_0(){
}

function FocusEvent(){
}

_ = FocusEvent_0.prototype = FocusEvent.prototype = new DomEvent;
_.dispatch_0 = function dispatch_2(handler){
  $onTxtPasswordFocus(dynamicCast(dynamicCast(handler, Q$FocusHandler), Q$HomeView_HomeViewUiBinderImpl$3).val$owner);
}
;
_.getAssociatedType_1 = function getAssociatedType_3(){
  return TYPE_1;
}
;
_.getClass$ = function getClass_89(){
  return Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit;
}
;
var TYPE_1;
function KeyEvent_0(){
}

_ = KeyEvent_0.prototype = new DomEvent;
_.getClass$ = function getClass_90(){
  return Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit;
}
;
function $clinit_KeyPressEvent(){
  $clinit_KeyPressEvent = nullMethod;
  TYPE_2 = new DomEvent$Type_0('keypress', new KeyPressEvent_0);
}

function $dispatch(this$static, handler){
  $onTxtPasswordKeypress(handler.val$owner, this$static);
}

function KeyPressEvent_0(){
}

function KeyPressEvent(){
}

_ = KeyPressEvent_0.prototype = KeyPressEvent.prototype = new KeyEvent_0;
_.dispatch_0 = function dispatch_3(handler){
  $dispatch(this, dynamicCast(handler, Q$KeyPressHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_4(){
  return TYPE_2;
}
;
_.getClass$ = function getClass_91(){
  return Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit;
}
;
var TYPE_2;
function $setSelectionRange(this$static, length_0){
  if (!this$static.attached) {
    return;
  }
  if (length_0 < 0) {
    throw new IndexOutOfBoundsException_1('Length must be a positive integer. Length: ' + length_0);
  }
  if (length_0 > $getPropertyString(this$static.element, 'value').length) {
    throw new IndexOutOfBoundsException_1('From Index: 0  To Index: ' + length_0 + '  Text Length: ' + $getPropertyString(this$static.element, 'value').length);
  }
  $setSelectionRange_0(this$static.element, 0, length_0);
}

function PasswordTextBox_0(){
  $clinit_TextBoxBase();
  TextBox_1.call(this, $createInputElement($doc, 'password'), 'gwt-PasswordTextBox');
}

function PasswordTextBox(){
}

_ = PasswordTextBox_0.prototype = PasswordTextBox.prototype = new TextBox;
_.getClass$ = function getClass_282(){
  return Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function $setSelectionRange_0(elem, pos, length_0){
  try {
    elem.setSelectionRange(pos, pos + length_0);
  }
   catch (e) {
  }
}

function $setAdmin(this$static, isAdmin){
  this$static.isAdmin = isAdmin;
}

function $setCurrentMonth(this$static, currentMonth){
  this$static.currentMonth = currentMonth;
}

function $setCurrentYear(this$static, currentYear){
  this$static.currentYear = currentYear;
}

function $setFullName(this$static, fullName){
  this$static.fullName = fullName;
}

function $setUserId(this$static, userId){
  this$static.userId = userId;
}

function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection___________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$HomePresenter_HomePresenter_methodInjection(_0, _1){
  return new HomePresenter_0(_0, _1);
}

function $com$lemania$timetracking$client$view$HomeView_HomeView_methodInjection(){
  return new HomeView_0;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$HomePresenter_HomePresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$HomeView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$HomeView$_annotation$$none$$ = $com$lemania$timetracking$client$view$HomeView_HomeView_methodInjection(new HomeView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$HomeView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$MyProxy$_annotation$$none$$ = new HomePresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection___________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$11$1.prototype;
_.onSuccess = function onSuccess_3(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $authenticateUser(this$static, userName, password){
  var rc, rf, x;
  if ($equals_5(userName, '') || $equals_5(password, '')) {
    alert_0("Veuillez introduire votre nom d'utilisateur et mot de passe !");
    return;
  }
  rf = new UserRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new DefaultRequestTransport_0);
  rc = new UserRequestFactory_UserRequestContextImpl_0(rf);
  $fire((x = new UserRequestFactory_UserRequestContextImpl$2X_0(rc, userName, password) , $addInvocation(rc.state.dialect, x) , x), new HomePresenter$1_0(this$static));
}

function HomePresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function HomePresenter(){
}

_ = HomePresenter_0.prototype = HomePresenter.prototype = new Presenter;
_.getClass$ = function getClass_562(){
  return Lcom_lemania_timetracking_client_presenter_HomePresenter_2_classLit;
}
;
_.onAfterUserLogOut = function onAfterUserLogOut(event_0){
  $toggleLoginPanel(dynamicCast(this.view, Q$HomePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , TRUE));
}
;
_.onBind = function onBind_7(){
  dynamicCast(this.view, Q$HomePresenter$MyView).setUiHandlers(this);
}
;
_.revealInParent = function revealInParent_5(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$AfterUserLogOutEvent$AfterUserLogOutHandler, Q$HomePresenter, Q$HomeUiHandler]);
function $onSuccess_12(this$static, response){
  var currentUser;
  if (response) {
    currentUser = new CurrentUser_0;
    $setFullName(currentUser, response.getFullName());
    currentUser.isLoggedIn = true;
    $setAdmin(currentUser, response.getAdmin().value_0);
    $setUserId(currentUser, response.getId_0());
    $setCurrentMonth(currentUser, response.getCurrentMonth());
    $setCurrentYear(currentUser, response.getCurrentYear());
    $doFire(this$static.this$0.eventBus, new LoginAuthenticatedEvent_0(currentUser), null);
    $toggleLoginPanel(dynamicCast(this$static.this$0.view, Q$HomePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , FALSE));
  }
   else 
    alert_0("La combination de nom d'utilisateur et mot de passe n'est pas valable.");
}

function HomePresenter$1_0(this$0){
  this.this$0 = this$0;
}

function HomePresenter$1(){
}

_ = HomePresenter$1_0.prototype = HomePresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_563(){
  return Lcom_lemania_timetracking_client_presenter_HomePresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_28(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_28(response){
  $onSuccess_12(this, dynamicCast(response, Q$UserProxy));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $authenticateUser_0(this$static){
  if (!isValidUserName($getPropertyString(this$static.txtUserName.element, 'value'))) {
    alert_0("Le nom d'utilisateur n'est pas valable.");
    return;
  }
  if (!isValidUserName($getPropertyString(this$static.txtPassword.element, 'value'))) {
    alert_0("Le mot de passe n'est pas valable.");
    return;
  }
  !!this$static.uiHandlers && $authenticateUser(dynamicCast(this$static.uiHandlers, Q$HomeUiHandler), $getPropertyString(this$static.txtUserName.element, 'value'), $getPropertyString(this$static.txtPassword.element, 'value'));
}

function $onTxtPasswordFocus(this$static){
  $setSelectionRange(this$static.txtPassword, $getPropertyString(this$static.txtPassword.element, 'value').length);
}

function $onTxtPasswordKeypress(this$static, event_0){
  ((event_0.nativeEvent.charCode || 0) & 65535) == 13 && $authenticateUser_0(this$static);
}

function $toggleLoginPanel(this$static, visible){
  $setVisible_0(this$static.panelLogin, visible.value_0);
}

function HomeView_0(){
  this.widget = $createAndBindUi_2(this);
}

function HomeView(){
}

_ = HomeView_0.prototype = HomeView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_7(){
  return this.widget;
}
;
_.getClass$ = function getClass_663(){
  return Lcom_lemania_timetracking_client_view_HomeView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HomePresenter$MyView]);
_.panelLogin = null;
_.txtPassword = null;
_.txtUserName = null;
_.widget = null;
function HomeView_BinderImpl_0(){
}

function HomeView_BinderImpl(){
}

_ = HomeView_BinderImpl_0.prototype = HomeView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_664(){
  return Lcom_lemania_timetracking_client_view_HomeView_1BinderImpl_2_classLit;
}
;
function $createAndBindUi_2(owner){
  var attachRecord0, cmdLogin, domId0, domId0Element, f_HTMLPanel1, f_HorizontalPanel5, f_Image4, f_Label3, f_Label6, f_Label7, f_Label8, f_VerticalPanel2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, panelLogin, txtPassword, txtUserName, sb;
  domId0 = $createUniqueId($doc);
  f_Label3 = new Label_0;
  f_Image4 = new Image_1;
  f_Label6 = new Label_0;
  txtUserName = new TextBox_0;
  f_Label7 = new Label_0;
  txtPassword = new PasswordTextBox_0;
  f_Label8 = new Label_0;
  cmdLogin = new Button_0;
  panelLogin = new Grid_0;
  f_HorizontalPanel5 = new HorizontalPanel_0;
  f_VerticalPanel2 = new VerticalPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  $setHorizontalAlignment_1(f_VerticalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  f_Label3.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label3.directionalTextHelper, 'Bienvenue');
  $updateHorizontalAlignment(f_Label3);
  $add_8(f_VerticalPanel2, f_Label3);
  f_Image4.element.style['height'] = '336px';
  f_Image4.element.style['width'] = '339px';
  $setUrl(f_Image4, ($clinit_UriUtils() , new SafeUriString_0('images/Capture.PNG')));
  $add_8(f_VerticalPanel2, f_Image4);
  $setHorizontalAlignment_0(f_HorizontalPanel5, ALIGN_LEFT);
  $setTextOrHtml(f_Label6.directionalTextHelper, "Nom d'utilisateur :");
  $updateHorizontalAlignment(f_Label6);
  $setTextOrHtml(f_Label7.directionalTextHelper, 'Mot de passe :');
  $updateHorizontalAlignment(f_Label7);
  $setInnerText(cmdLogin.element, 'Se connecter');
  $resizeColumns(panelLogin);
  $resizeRows(panelLogin, 3);
  $setWidget_1(panelLogin, 0, 0, f_Label6);
  $setWidget_1(panelLogin, 0, 1, txtUserName);
  $setWidget_1(panelLogin, 1, 0, f_Label7);
  $setWidget_1(panelLogin, 1, 1, txtPassword);
  $setWidget_1(panelLogin, 2, 0, f_Label8);
  $setWidget_1(panelLogin, 2, 1, cmdLogin);
  panelLogin.element.style['width'] = '';
  $add_6(f_HorizontalPanel5, panelLogin);
  $add_8(f_VerticalPanel2, f_HorizontalPanel5);
  f_VerticalPanel2.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new HomeView_HomeViewUiBinderImpl$1_0(owner);
  $addDomHandler(txtPassword, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_2));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new HomeView_HomeViewUiBinderImpl$2_0(owner);
  $addDomHandler(cmdLogin, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new HomeView_HomeViewUiBinderImpl$3_0(owner);
  $addDomHandler(txtPassword, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_FocusEvent() , $clinit_FocusEvent() , TYPE_1));
  owner.panelLogin = panelLogin;
  owner.txtPassword = txtPassword;
  owner.txtUserName = txtUserName;
  return f_HTMLPanel1;
}

function HomeView_HomeViewUiBinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function HomeView_HomeViewUiBinderImpl$1(){
}

_ = HomeView_HomeViewUiBinderImpl$1_0.prototype = HomeView_HomeViewUiBinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_665(){
  return Lcom_lemania_timetracking_client_view_HomeView_1HomeViewUiBinderImpl$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyPressHandler, Q$EventHandler]);
_.val$owner = null;
function HomeView_HomeViewUiBinderImpl$2_0(val$owner){
  this.val$owner = val$owner;
}

function HomeView_HomeViewUiBinderImpl$2(){
}

_ = HomeView_HomeViewUiBinderImpl$2_0.prototype = HomeView_HomeViewUiBinderImpl$2.prototype = new Object_0;
_.getClass$ = function getClass_666(){
  return Lcom_lemania_timetracking_client_view_HomeView_1HomeViewUiBinderImpl$2_2_classLit;
}
;
_.onClick = function onClick_7(event_0){
  $authenticateUser_0(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
function HomeView_HomeViewUiBinderImpl$3_0(val$owner){
  this.val$owner = val$owner;
}

function HomeView_HomeViewUiBinderImpl$3(){
}

_ = HomeView_HomeViewUiBinderImpl$3_0.prototype = HomeView_HomeViewUiBinderImpl$3.prototype = new Object_0;
_.getClass$ = function getClass_667(){
  return Lcom_lemania_timetracking_client_view_HomeView_1HomeViewUiBinderImpl$3_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$FocusHandler, Q$EventHandler, Q$HomeView_HomeViewUiBinderImpl$3]);
_.val$owner = null;
function UserRequestFactory_UserRequestContextImpl$2X_0(this$0, val$userName, val$password){
  this.val$userName = val$userName;
  this.val$password = val$password;
  AbstractRequest_0.call(this, this$0);
}

function UserRequestFactory_UserRequestContextImpl$2X(){
}

_ = UserRequestFactory_UserRequestContextImpl$2X_0.prototype = UserRequestFactory_UserRequestContextImpl$2X.prototype = new AbstractRequest;
_.getClass$ = function getClass_825(){
  return Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$2X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_23(){
  return new RequestData_0('u$X7cP7wvTrkCXO7CKIl41zY5R4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userName, this.val$password]), this.propertyRefs, Lcom_lemania_timetracking_shared_UserProxy_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$password = null;
_.val$userName = null;
var Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'FocusEvent', Lcom_google_gwt_event_dom_client_DomEvent_2_classLit), Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyEvent', Lcom_google_gwt_event_dom_client_DomEvent_2_classLit), Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyPressEvent', Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit), Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PasswordTextBox', Lcom_google_gwt_user_client_ui_TextBox_2_classLit), Lcom_lemania_timetracking_client_presenter_HomePresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'HomePresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_HomeView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'HomeView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_HomePresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'HomePresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_HomeView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'HomeView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_HomeView_1HomeViewUiBinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'HomeView_HomeViewUiBinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_HomeView_1HomeViewUiBinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'HomeView_HomeViewUiBinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_HomeView_1HomeViewUiBinderImpl$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'HomeView_HomeViewUiBinderImpl$3', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$2X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$2X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(3);
