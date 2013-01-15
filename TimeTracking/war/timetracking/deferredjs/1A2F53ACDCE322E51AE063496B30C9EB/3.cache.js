function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$CoursPresenter_CoursPresenter_methodInjection(_0, _1){
  return new CoursPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$CoursPresenter_CoursPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursView$_annotation$$none$$ = new CoursView_0(new CoursView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$MyProxy$_annotation$$none$$ = new CoursPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$11$1.prototype;
_.onSuccess = function onSuccess_3(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $populateCoursList(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAll_0(rc, ecoleId), new CoursPresenter$3_0(this$static));
}

function $updateCoursStatus(this$static, cours, value){
  var coursForUpdate, rc, rf, x;
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  coursForUpdate = dynamicCast($editProxy(rc, cours), Q$CoursProxy);
  coursForUpdate.setCoursActif(value);
  $fire((x = new CoursRequestFactory_CoursRequestContextImpl$8X_0(rc, coursForUpdate) , $addInvocation(rc.state.dialect, x) , x), new CoursPresenter$2_0(this$static));
}

function CoursPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

_ = CoursPresenter_0.prototype = CoursPresenter.prototype;
_.getClass$ = function getClass_539(){
  return Lcom_lemania_timetracking_client_presenter_CoursPresenter_2_classLit;
}
;
_.onBind = function onBind_3(){
  dynamicCast(this.view, Q$CoursPresenter$MyView).setUiHandlers(this);
  $initializeTable(dynamicCast(this.view, Q$CoursPresenter$MyView));
}
;
_.onReset = function onReset_0(){
  var rc, rf;
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_1(rc), new CoursPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_1(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_3(this$static, response){
  $populateEcoleList_0(dynamicCast(this$static.this$0.view, Q$CoursPresenter$MyView), response);
}

function CoursPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function CoursPresenter$1(){
}

_ = CoursPresenter$1_0.prototype = CoursPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_540(){
  return Lcom_lemania_timetracking_client_presenter_CoursPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_20(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_20(response){
  $onSuccess_3(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_4(this$static, response){
  $refreshTable(dynamicCast(this$static.this$0.view, Q$CoursPresenter$MyView), response);
}

function CoursPresenter$2_0(this$0){
  this.this$0 = this$0;
}

function CoursPresenter$2(){
}

_ = CoursPresenter$2_0.prototype = CoursPresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_541(){
  return Lcom_lemania_timetracking_client_presenter_CoursPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_21(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_21(response){
  $onSuccess_4(this, dynamicCast(response, Q$CoursProxy));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_5(this$static, response){
  $setData_0(dynamicCast(this$static.this$0.view, Q$CoursPresenter$MyView), response);
}

function CoursPresenter$3_0(this$0){
  this.this$0 = this$0;
}

function CoursPresenter$3(){
}

_ = CoursPresenter$3_0.prototype = CoursPresenter$3.prototype = new Receiver;
_.getClass$ = function getClass_542(){
  return Lcom_lemania_timetracking_client_presenter_CoursPresenter$3_2_classLit;
}
;
_.onFailure_0 = function onFailure_22(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_22(response){
  $onSuccess_5(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $initializeTable(this$static){
  var cellActive, colActive, colName;
  colName = new CoursView$1_0;
  $addColumn(this$static.tblCours, colName, 'Nom');
  cellActive = new CheckboxCell_0;
  colActive = new CoursView$2_0(cellActive);
  $addColumn(this$static.tblCours, colActive, 'Actif');
  $setFieldUpdater(colActive, new CoursView$3_0(this$static));
}

function $onLstEcolesSelected(this$static){
  !!this$static.uiHandlers && $populateCoursList(dynamicCast(this$static.uiHandlers, Q$CoursListUiHandler), $getValue_0(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
}

function $populateEcoleList_0(this$static, ecoles){
  var i;
  $selectClear(this$static.lstEcoles.element);
  $insertItem(this$static.lstEcoles, '-', '', -1);
  for (i = 0; i < ecoles.size_1(); ++i)
    $insertItem(this$static.lstEcoles, dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getSchoolName(), '' + toString_6(dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getId_0().value_0), -1);
}

function $refreshTable(this$static, updatedCours){
  var listCours;
  listCours = new ArrayList_0;
  setCheck(listCours.array, listCours.size_0++, updatedCours);
  $setRowData_0(this$static.tblCours, this$static.selectedCours, listCours);
  $redraw(this$static.tblCours);
  alert_0('Statut du cours mis \xE0 jour.');
}

function $setData_0(this$static, listCours){
  $setRowData(this$static.tblCours, listCours);
  $redraw(this$static.tblCours);
}

function CoursView_0(){
  var attachRecord0, domId0, domId0Element, f_HTMLPanel1, f_HorizontalPanel4, f_Label3, f_Label5, f_VerticalPanel2, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, lstEcoles, tblCours, sb;
  this.tblCours = new DataGrid_0;
  this.widget = (domId0 = $createUniqueId($doc) , f_Label3 = new Label_0 , f_Label5 = new Label_0 , lstEcoles = new ListBox_0 , f_HorizontalPanel4 = new HorizontalPanel_0 , tblCours = this.tblCours , f_VerticalPanel2 = new VerticalPanel_0 , f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Liste des nom de cours') , $updateHorizontalAlignment(f_Label3) , $add_8(f_VerticalPanel2, f_Label3) , $setHorizontalAlignment_0(f_HorizontalPanel4, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setVerticalAlignment(f_HorizontalPanel4, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $setTextOrHtml(f_Label5.directionalTextHelper, "Choisir le nom d'\xE9cole :") , $updateHorizontalAlignment(f_Label5) , f_Label5.element.style['width'] = '' , $add_6(f_HorizontalPanel4, f_Label5) , $add_6(f_HorizontalPanel4, lstEcoles) , f_HorizontalPanel4.element.style['height'] = '40px' , f_HorizontalPanel4.element.style['width'] = '50%' , $add_8(f_VerticalPanel2, f_HorizontalPanel4) , tblCours.element.style['height'] = '600px' , tblCours.element.style['width'] = '800px' , $add_8(f_VerticalPanel2, tblCours) , f_VerticalPanel2.element.style['width'] = '100%' , attachRecord0 = attachToDom(f_HTMLPanel1.element) , domId0Element = $getElementById($doc, domId0) , attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element) , $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element) , handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new CoursView_BinderImpl$1_0(this) , $addDomHandler(lstEcoles, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this.lstEcoles = lstEcoles , f_HTMLPanel1);
}

function CoursView(){
}

_ = CoursView_0.prototype = CoursView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_3(){
  return this.widget;
}
;
_.getClass$ = function getClass_658(){
  return Lcom_lemania_timetracking_client_view_CoursView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$CoursPresenter$MyView]);
_.lstEcoles = null;
_.selectedCours = 0;
_.widget = null;
function CoursView$1_0(){
  TextColumn_0.call(this);
}

function CoursView$1(){
}

_ = CoursView$1_0.prototype = CoursView$1.prototype = new TextColumn;
_.getClass$ = function getClass_659(){
  return Lcom_lemania_timetracking_client_view_CoursView$1_2_classLit;
}
;
_.getValue = function getValue_1(object){
  return dynamicCast(object, Q$CoursProxy).getCoursNom();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function CoursView$2_0($anonymous0){
  this.cell = $anonymous0;
}

function CoursView$2(){
}

_ = CoursView$2_0.prototype = CoursView$2.prototype = new Column;
_.getClass$ = function getClass_660(){
  return Lcom_lemania_timetracking_client_view_CoursView$2_2_classLit;
}
;
_.getValue = function getValue_2(cours){
  return dynamicCast(cours, Q$CoursProxy).getCoursActif();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $update_0(this$static, index, cours, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedCours = index;
    $updateCoursStatus(dynamicCast(this$static.this$0.uiHandlers, Q$CoursListUiHandler), cours, value);
  }
}

function CoursView$3_0(this$0){
  this.this$0 = this$0;
}

function CoursView$3(){
}

_ = CoursView$3_0.prototype = CoursView$3.prototype = new Object_0;
_.getClass$ = function getClass_661(){
  return Lcom_lemania_timetracking_client_view_CoursView$3_2_classLit;
}
;
_.update = function update(index, cours, value){
  $update_0(this, index, dynamicCast(cours, Q$CoursProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function CoursView_BinderImpl_0(){
}

function CoursView_BinderImpl(){
}

_ = CoursView_BinderImpl_0.prototype = CoursView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_662(){
  return Lcom_lemania_timetracking_client_view_CoursView_1BinderImpl_2_classLit;
}
;
function CoursView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function CoursView_BinderImpl$1(){
}

_ = CoursView_BinderImpl$1_0.prototype = CoursView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_663(){
  return Lcom_lemania_timetracking_client_view_CoursView_1BinderImpl$1_2_classLit;
}
;
_.onChange = function onChange(event_0){
  $onLstEcolesSelected(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function CoursRequestFactory_CoursRequestContextImpl$8X_0(this$0, val$newCours){
  this.val$newCours = val$newCours;
  AbstractRequest_0.call(this, this$0);
}

function CoursRequestFactory_CoursRequestContextImpl$8X(){
}

_ = CoursRequestFactory_CoursRequestContextImpl$8X_0.prototype = CoursRequestFactory_CoursRequestContextImpl$8X.prototype = new AbstractRequest;
_.getClass$ = function getClass_811(){
  return Lcom_lemania_timetracking_shared_service_CoursRequestFactory_1CoursRequestContextImpl$8X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_3(){
  return new RequestData_0('rbmJhIFcA5GVgrckSnOI018NXMk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newCours]), this.propertyRefs, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$newCours = null;
var Lcom_lemania_timetracking_client_presenter_CoursPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_CoursView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_CoursPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_CoursPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_CoursPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenter$3', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_CoursView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView$1', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_CoursView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView$2', Lcom_google_gwt_user_cellview_client_Column_2_classLit), Lcom_lemania_timetracking_client_view_CoursView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView$3', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_CoursView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_CoursView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_CoursRequestFactory_1CoursRequestContextImpl$8X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl$8X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(3);
