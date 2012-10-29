function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$EcolePresenter_EcolePresenter_methodInjection(_0, _1){
  return new EcolePresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$EcolePresenter_EcolePresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$EcoleView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$EcoleView$_annotation$$none$$ = new EcoleView_0(new EcoleView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$EcoleView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$MyProxy$_annotation$$none$$ = new EcolePresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$13$1.prototype;
_.onSuccess = function onSuccess_4(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $updateEcoleStatus(this$static, ecole, value){
  var ecoleForUpdate, rc, rf, x;
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new DefaultRequestTransport_0);
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  ecoleForUpdate = dynamicCast($editProxy(rc, ecole), Q$EcoleProxy);
  ecoleForUpdate.setSchoolStatus(value);
  $fire((x = new EcoleRequestFactory_EcoleRequestContextImpl$5X_0(rc, ecoleForUpdate) , $addInvocation(rc.state.dialect, x) , x), new EcolePresenter$2_0(this$static));
}

function EcolePresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
  dynamicCast(this.view, Q$EcolePresenter$MyView).setUiHandlers(this);
}

_ = EcolePresenter_0.prototype = EcolePresenter.prototype;
_.getClass$ = function getClass_534(){
  return Lcom_lemania_timetracking_client_presenter_EcolePresenter_2_classLit;
}
;
_.onBind = function onBind_5(){
  $initializeTable_0(dynamicCast(this.view, Q$EcolePresenter$MyView));
}
;
_.onReset = function onReset_1(){
  var rc, rf;
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new DefaultRequestTransport_0);
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_1(rc), new EcolePresenter$1_0(this));
}
;
_.onReveal = function onReveal_0(){
}
;
_.revealInParent = function revealInParent_3(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_7(this$static, response){
  $setData_1(dynamicCast(this$static.this$0.view, Q$EcolePresenter$MyView), response);
}

function EcolePresenter$1_0(this$0){
  this.this$0 = this$0;
}

function EcolePresenter$1(){
}

_ = EcolePresenter$1_0.prototype = EcolePresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_535(){
  return Lcom_lemania_timetracking_client_presenter_EcolePresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_20(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_20(response){
  $onSuccess_7(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_8(this$static, response){
  $refreshTable_0(dynamicCast(this$static.this$0.view, Q$EcolePresenter$MyView), response);
}

function EcolePresenter$2_0(this$0){
  this.this$0 = this$0;
}

function EcolePresenter$2(){
}

_ = EcolePresenter$2_0.prototype = EcolePresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_536(){
  return Lcom_lemania_timetracking_client_presenter_EcolePresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_21(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_21(response){
  $onSuccess_8(this, dynamicCast(response, Q$EcoleProxy));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $initializeTable_0(this$static){
  var cellActive, colActive, colAddress, colName;
  colName = new EcoleView$1_0;
  $addColumn(this$static.tblEcoles, colName, 'Nom');
  colAddress = new EcoleView$2_0;
  $addColumn(this$static.tblEcoles, colAddress, 'Adresse');
  cellActive = new CheckboxCell_0;
  colActive = new EcoleView$3_0(cellActive);
  $addColumn(this$static.tblEcoles, colActive, 'Active');
  $setFieldUpdater(colActive, new EcoleView$4_0(this$static));
}

function $refreshTable_0(this$static, updatedEcole){
  var ecoles;
  ecoles = new ArrayList_0;
  setCheck(ecoles.array, ecoles.size_0++, updatedEcole);
  $setRowData_0(this$static.tblEcoles, this$static.selectedEcole, ecoles);
  $redraw(this$static.tblEcoles);
  alert_0("Statut de l'\xE9cole mis \xE0 jour.");
}

function $setData_1(this$static, ecoleList){
  $setRowData(this$static.tblEcoles, ecoleList);
  $setRowCount(this$static.tblEcoles, ecoleList.size_1());
}

function EcoleView_0(){
  var attachRecord0, domId0, domId0Element, f_FlowPanel2, f_HTMLPanel1, f_Label4, f_VerticalPanel3, tblEcoles, sb;
  this.tblEcoles = new DataGrid_0;
  this.widget = (domId0 = $createUniqueId($doc) , f_Label4 = new Label_0 , tblEcoles = this.tblEcoles , f_VerticalPanel3 = new VerticalPanel_0 , f_FlowPanel2 = new FlowPanel_0 , f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , $append_2(sb.data, "<span id='") , $append_8(sb, htmlEscape(domId0)) , $append_2(sb.data, "'><\/span>") , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data))).html) , f_Label4.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label4.directionalTextHelper, "Liste d'\xE9coles") , $updateHorizontalAlignment(f_Label4) , $add_8(f_VerticalPanel3, f_Label4) , tblEcoles.element.style['height'] = '600px' , tblEcoles.element.style['width'] = '800px' , $add_8(f_VerticalPanel3, tblEcoles) , f_VerticalPanel3.element.style['height'] = '100%' , f_VerticalPanel3.element.style['width'] = '100%' , $add_0(f_FlowPanel2, f_VerticalPanel3, f_FlowPanel2.element) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_HTMLPanel1.element.style['height'] = '100%' , f_HTMLPanel1.element.style['width'] = '100%' , attachRecord0 = attachToDom(f_HTMLPanel1.element) , domId0Element = $getElementById($doc, domId0) , attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element) , $addAndReplaceElement(f_HTMLPanel1, f_FlowPanel2, domId0Element) , f_HTMLPanel1);
}

function EcoleView(){
}

_ = EcoleView_0.prototype = EcoleView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_5(){
  return this.widget;
}
;
_.getClass$ = function getClass_620(){
  return Lcom_lemania_timetracking_client_view_EcoleView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$EcolePresenter$MyView]);
_.selectedEcole = 0;
_.widget = null;
function EcoleView$1_0(){
  TextColumn_0.call(this);
}

function EcoleView$1(){
}

_ = EcoleView$1_0.prototype = EcoleView$1.prototype = new TextColumn;
_.getClass$ = function getClass_621(){
  return Lcom_lemania_timetracking_client_view_EcoleView$1_2_classLit;
}
;
_.getValue = function getValue_3(object){
  return dynamicCast(object, Q$EcoleProxy).getSchoolName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function EcoleView$2_0(){
  TextColumn_0.call(this);
}

function EcoleView$2(){
}

_ = EcoleView$2_0.prototype = EcoleView$2.prototype = new TextColumn;
_.getClass$ = function getClass_622(){
  return Lcom_lemania_timetracking_client_view_EcoleView$2_2_classLit;
}
;
_.getValue = function getValue_4(object){
  return dynamicCast(object, Q$EcoleProxy).getSchoolAddress();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function EcoleView$3_0($anonymous0){
  this.cell = $anonymous0;
}

function EcoleView$3(){
}

_ = EcoleView$3_0.prototype = EcoleView$3.prototype = new Column;
_.getClass$ = function getClass_623(){
  return Lcom_lemania_timetracking_client_view_EcoleView$3_2_classLit;
}
;
_.getValue = function getValue_5(ecole){
  return dynamicCast(ecole, Q$EcoleProxy).getSchoolStatus();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $update_1(this$static, index, ecole, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedEcole = index;
    $updateEcoleStatus(dynamicCast(this$static.this$0.uiHandlers, Q$EcoleListUiHandler), ecole, value);
  }
}

function EcoleView$4_0(this$0){
  this.this$0 = this$0;
}

function EcoleView$4(){
}

_ = EcoleView$4_0.prototype = EcoleView$4.prototype = new Object_0;
_.getClass$ = function getClass_624(){
  return Lcom_lemania_timetracking_client_view_EcoleView$4_2_classLit;
}
;
_.update = function update_0(index, ecole, value){
  $update_1(this, index, dynamicCast(ecole, Q$EcoleProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function EcoleView_BinderImpl_0(){
}

function EcoleView_BinderImpl(){
}

_ = EcoleView_BinderImpl_0.prototype = EcoleView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_625(){
  return Lcom_lemania_timetracking_client_view_EcoleView_1BinderImpl_2_classLit;
}
;
function EcoleRequestFactory_EcoleRequestContextImpl$5X_0(this$0, val$newEcole){
  this.val$newEcole = val$newEcole;
  AbstractRequest_0.call(this, this$0);
}

function EcoleRequestFactory_EcoleRequestContextImpl$5X(){
}

_ = EcoleRequestFactory_EcoleRequestContextImpl$5X_0.prototype = EcoleRequestFactory_EcoleRequestContextImpl$5X.prototype = new AbstractRequest;
_.getClass$ = function getClass_742(){
  return Lcom_lemania_timetracking_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl$5X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_7(){
  return new RequestData_0('9EsiXw3x9Vb9cvKxBmpxVD60090=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newEcole]), this.propertyRefs, Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$newEcole = null;
var Lcom_lemania_timetracking_client_presenter_EcolePresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'EcolePresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_EcoleView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_EcolePresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'EcolePresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_EcolePresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'EcolePresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_EcoleView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView$1', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_EcoleView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView$2', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_EcoleView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView$3', Lcom_google_gwt_user_cellview_client_Column_2_classLit), Lcom_lemania_timetracking_client_view_EcoleView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView$4', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_EcoleView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl$5X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl$5X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(4);
