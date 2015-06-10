function $updateEcoleStatus(this$static, ecole, value_0){
  var ecoleForUpdate, rc, rf, x_0;
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  ecoleForUpdate = dynamicCast($editProxy(rc, ecole), Q$EcoleProxy);
  ecoleForUpdate.setSchoolStatus(value_0);
  $fire((x_0 = new EcoleRequestFactory_EcoleRequestContextImpl$6X_0(rc, ecoleForUpdate) , $addInvocation(rc.state.dialect, x_0) , x_0), new EcolePresenter$2_0(this$static));
}

function EcolePresenter_0(eventBus, view, proxy){
  Presenter_0.call(this, eventBus, view, proxy);
  dynamicCast(this.view, Q$EcolePresenter$MyView).setUiHandlers(this);
}

defineSeed(779, 691, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$EcoleAddedEvent$EcoleAddedHandler, Q$EcolePresenter, Q$EcoleListUiHandler]), EcolePresenter_0);
_.onBind = function onBind_5(){
  $initializeTable_1(dynamicCast(this.view, Q$EcolePresenter$MyView));
}
;
_.onEcoleAdded = function onEcoleAdded(event_0){
  $clinit_History();
  !!impl_3 && $newItem(impl_3, '!ecolepage', true);
}
;
_.onReset = function onReset_1(){
  var rf, rc;
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_1(rc), new EcolePresenter$1_0(this));
}
;
_.onReveal = function onReveal_0(){
}
;
_.revealInParent = function revealInParent_4(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_8(this$static, response){
  $setData_1(dynamicCast(this$static.this$0.view, Q$EcolePresenter$MyView), response);
}

function EcolePresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(780, 627, makeCastMap([Q$Receiver]), EcolePresenter$1_0);
_.onFailure_0 = function onFailure_8(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_8(response){
  $onSuccess_8(this, dynamicCast(response, Q$List));
}
;
function $onSuccess_9(this$static, response){
  $refreshTable_0(dynamicCast(this$static.this$0.view, Q$EcolePresenter$MyView), response);
}

function EcolePresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(781, 627, makeCastMap([Q$Receiver]), EcolePresenter$2_0);
_.onFailure_0 = function onFailure_9(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_9(response){
  $onSuccess_9(this, dynamicCast(response, Q$EcoleProxy));
}
;
function $get_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$) {
    result = new EcolePresenter_0($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$EcoleView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$;
}

defineSeed(926, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_65(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable_1(this$static){
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
  $setRowData(this$static.tblEcoles, this$static.selectedEcole, ecoles);
  $ensurePendingState(this$static.tblEcoles.presenter).redrawRequired = true;
  alert_0("Statut de l'\xE9cole mis \xE0 jour.");
}

function $setData_1(this$static, ecoleList){
  $setRowData_0(this$static.tblEcoles, ecoleList);
  $setRowCount_0(this$static.tblEcoles, ecoleList.size_1(), true);
}

function EcoleView_0(){
  this.tblEcoles = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_4(new EcoleView_BinderImpl$Widgets_0(this));
}

defineSeed(974, 696, makeCastMap([Q$IsWidget, Q$EcolePresenter$MyView]), EcoleView_0);
_.asWidget = function asWidget_7(){
  return this.widget;
}
;
_.selectedEcole = 0;
function EcoleView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(975, 382, makeCastMap([Q$HasCell, Q$Column]), EcoleView$1_0);
_.getValue = function getValue_3(object){
  return dynamicCast(object, Q$EcoleProxy).getSchoolName();
}
;
function EcoleView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(976, 382, makeCastMap([Q$HasCell, Q$Column]), EcoleView$2_0);
_.getValue = function getValue_4(object){
  return dynamicCast(object, Q$EcoleProxy).getSchoolAddress();
}
;
function EcoleView$3_0($anonymous0){
  Column_0.call(this, $anonymous0);
}

defineSeed(977, 356, makeCastMap([Q$HasCell, Q$Column]), EcoleView$3_0);
_.getValue = function getValue_5(ecole){
  return dynamicCast(ecole, Q$EcoleProxy).getSchoolStatus();
}
;
function $update_2(this$static, index_0, ecole, value_0){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedEcole = index_0;
    $updateEcoleStatus(dynamicCast(this$static.this$0.uiHandlers, Q$EcoleListUiHandler), ecole, value_0);
  }
}

function EcoleView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(978, 1, {}, EcoleView$4_0);
_.update = function update_3(index_0, ecole, value_0){
  $update_2(this, index_0, dynamicCast(ecole, Q$EcoleProxy), dynamicCast(value_0, Q$Boolean));
}
;
function EcoleView_BinderImpl_0(){
}

defineSeed(979, 1, {}, EcoleView_BinderImpl_0);
function $build_f_HTMLPanel1_4(this$static){
  var attachRecord4, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, tblEcoles;
  f_HTMLPanel1 = new HTMLPanel_0($html1_4(this$static.domId0).html);
  ($clinit_DOM() , f_HTMLPanel1.element).style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord4 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord4.origParent?$insertBefore(attachRecord4.origParent, attachRecord4.element, attachRecord4.origSibling):orphan(attachRecord4.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_6(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $add_10(f_VerticalPanel3, (f_Label4 = new Label_0 , $setClassName(f_Label4.element, 'pageTitle') , $setAutoHorizontalAlignment(f_Label4, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label4.directionalTextHelper, 'LISTE DES ECOLES', false) , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_10(f_VerticalPanel3, (tblEcoles = this$static.owner.tblEcoles , tblEcoles.element.style['height'] = '600px' , tblEcoles.element.style['width'] = '800px' , tblEcoles)) , f_VerticalPanel3.element.style['height'] = '100%' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_FlowPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function EcoleView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(980, 1, {}, EcoleView_BinderImpl$Widgets_0);
function $html1_4(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<span id='");
  $append_11(sb, htmlEscape(arg0));
  $append_2(sb.impl, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$EcoleView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$EcoleView$_annotation$$none$$) {
    result = new EcoleView_0(new EcoleView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$EcoleView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$EcoleView$_annotation$$none$$;
}

function EcoleRequestFactory_EcoleRequestContextImpl$6X_0(this$0, val$newEcole){
  this.val$newEcole = val$newEcole;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1196, 631, makeCastMap([Q$AbstractRequest]), EcoleRequestFactory_EcoleRequestContextImpl$6X_0);
_.makeRequestData = function makeRequestData_9(){
  return new RequestData_0('9EsiXw3x9Vb9cvKxBmpxVD60090=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newEcole]), this.propertyRefs, Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit, null);
}
;
var Lcom_lemania_timetracking_client_presenter_EcolePresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'EcolePresenter', 779), Lcom_lemania_timetracking_client_presenter_EcolePresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'EcolePresenter$1', 780), Lcom_lemania_timetracking_client_presenter_EcolePresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'EcolePresenter$2', 781), Lcom_lemania_timetracking_client_view_EcoleView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView', 974), Lcom_lemania_timetracking_client_view_EcoleView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView$1', 975), Lcom_lemania_timetracking_client_view_EcoleView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView$2', 976), Lcom_lemania_timetracking_client_view_EcoleView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView$3', 977), Lcom_lemania_timetracking_client_view_EcoleView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView$4', 978), Lcom_lemania_timetracking_client_view_EcoleView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView_BinderImpl', 979), Lcom_lemania_timetracking_client_view_EcoleView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'EcoleView_BinderImpl$Widgets', 980), Lcom_lemania_timetracking_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl$6X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl$6X', 1196);
$entry(onLoad)(5);
