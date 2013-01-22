function $populateCoursList(this$static, ecoleId){
  var rc, rf;
  if (!ecoleId.length) {
    return;
  }
  rf = new CoursRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAll_0(rc, ecoleId), new CoursPresenter$3_0(this$static));
}

function $updateCoursName(this$static, cours, name_0){
  var coursForUpdate, rc, rf;
  if ($equals_3(name_0, ''))
    return;
  rf = new CoursRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  coursForUpdate = dynamicCast($editProxy(rc, cours), Q$CoursProxy);
  coursForUpdate.setCoursNom(name_0);
  $fire($saveAndReturn_0(rc, coursForUpdate), new CoursPresenter$4_0(this$static));
}

function $updateCoursStatus(this$static, cours, value){
  var coursForUpdate, rc, rf;
  rf = new CoursRequestFactoryImpl_0;
  $initialize_0(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  coursForUpdate = dynamicCast($editProxy(rc, cours), Q$CoursProxy);
  coursForUpdate.setCoursActif(value);
  $fire($saveAndReturn_0(rc, coursForUpdate), new CoursPresenter$2_0(this$static));
}

function CoursPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(739, 670, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$CoursAddedEvent$CoursAddedHandler, Q$CoursPresenter, Q$CoursListUiHandler]), CoursPresenter_0);
_.onBind = function onBind_3(){
  dynamicCast(this.view, Q$CoursPresenter$MyView).setUiHandlers(this);
  $initializeTable(dynamicCast(this.view, Q$CoursPresenter$MyView));
}
;
_.onCoursAdded = function onCoursAdded(event_0){
  $clinit_History();
  !!impl_2 && $newItem(impl_2, '!cours', true);
}
;
_.onReset = function onReset_0(){
  var rf, rc;
  rf = new EcoleRequestFactoryImpl_0;
  $initialize_0(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
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

defineSeed(740, 609, makeCastMap([Q$Receiver]), CoursPresenter$1_0);
_.onFailure_0 = function onFailure_3(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_3(response){
  $onSuccess_3(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_4(this$static, response){
  $refreshTable(dynamicCast(this$static.this$0.view, Q$CoursPresenter$MyView), response);
}

function CoursPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(741, 609, makeCastMap([Q$Receiver]), CoursPresenter$2_0);
_.onFailure_0 = function onFailure_4(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_4(response){
  $onSuccess_4(this, dynamicCast(response, Q$CoursProxy));
}
;
_.this$0 = null;
function $onSuccess_5(this$static, response){
  $setData_0(dynamicCast(this$static.this$0.view, Q$CoursPresenter$MyView), response);
}

function CoursPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(742, 609, makeCastMap([Q$Receiver]), CoursPresenter$3_0);
_.onFailure_0 = function onFailure_5(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_5(response){
  $onSuccess_5(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_6(this$static, response){
  $refreshTable(dynamicCast(this$static.this$0.view, Q$CoursPresenter$MyView), response);
}

function CoursPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(743, 609, makeCastMap([Q$Receiver]), CoursPresenter$4_0);
_.onFailure_0 = function onFailure_6(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_6(response){
  $onSuccess_6(this, dynamicCast(response, Q$CoursProxy));
}
;
_.this$0 = null;
function $com$lemania$timetracking$client$presenter$CoursPresenter_com$lemania$timetracking$client$presenter$CoursPresenter_methodInjection(_0, _1){
  return new CoursPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$) {
    result = $com$lemania$timetracking$client$presenter$CoursPresenter_com$lemania$timetracking$client$presenter$CoursPresenter_methodInjection($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$CoursView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$;
}

defineSeed(881, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_57(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable(this$static){
  var cellActive, cellName, colActive, colName;
  cellName = new EditTextCell_0;
  colName = new CoursView$1_0(cellName);
  $addColumn(this$static.tblCours, colName, 'Nom');
  $setFieldUpdater(colName, new CoursView$2_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new CoursView$3_0(cellActive);
  $addColumn(this$static.tblCours, colActive, 'Actif');
  $setFieldUpdater(colActive, new CoursView$4_0(this$static));
}

function $onLstEcolesSelected(this$static){
  !!this$static.uiHandlers && $populateCoursList(dynamicCast(this$static.uiHandlers, Q$CoursListUiHandler), $getValue_1(this$static.lstEcoles, this$static.lstEcoles.element.selectedIndex));
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
  $setRowData(this$static.tblCours, this$static.selectedCours, listCours);
  $ensurePendingState(this$static.tblCours.presenter).redrawRequired = true;
}

function $setData_0(this$static, listCours){
  $setRowData_0(this$static.tblCours, listCours);
  $ensurePendingState(this$static.tblCours.presenter).redrawRequired = true;
}

function CoursView_0(){
  this.tblCours = new DataGrid_0;
  this.widget = $build_f_HTMLPanel1_1(new CoursView_BinderImpl$Widgets_0(this));
}

defineSeed(903, 675, makeCastMap([Q$CoursPresenter$MyView]), CoursView_0);
_.asWidget = function asWidget_3(){
  return this.widget;
}
;
_.lstEcoles = null;
_.selectedCours = 0;
_.widget = null;
function CoursView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(904, 350, makeCastMap([Q$HasCell, Q$Column]), CoursView$1_0);
_.getValue = function getValue_1(object){
  return dynamicCast(object, Q$CoursProxy).getCoursNom();
}
;
function $update_0(this$static, index, cours, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedCours = index;
    $updateCoursName(dynamicCast(this$static.this$0.uiHandlers, Q$CoursListUiHandler), cours, value);
  }
}

function CoursView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(905, 1, {}, CoursView$2_0);
_.update = function update_1(index, cours, value){
  $update_0(this, index, dynamicCast(cours, Q$CoursProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function CoursView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(906, 350, makeCastMap([Q$HasCell, Q$Column]), CoursView$3_0);
_.getValue = function getValue_2(cours){
  return dynamicCast(cours, Q$CoursProxy).getCoursActif();
}
;
function $update_1(this$static, index, cours, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedCours = index;
    $updateCoursStatus(dynamicCast(this$static.this$0.uiHandlers, Q$CoursListUiHandler), cours, value);
  }
}

function CoursView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(907, 1, {}, CoursView$4_0);
_.update = function update_2(index, cours, value){
  $update_1(this, index, dynamicCast(cours, Q$CoursProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function CoursView_BinderImpl_0(){
}

defineSeed(908, 1, {}, CoursView_BinderImpl_0);
function $build_f_HTMLPanel1_1(this$static){
  var attachRecord2, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_Label5, lstEcoles, tblCours;
  f_HTMLPanel1 = new HTMLPanel_0($html1_1(this$static.domId0).html);
  attachRecord2 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord2.origParent?$insertBefore(attachRecord2.origParent, attachRecord2.element, attachRecord2.origSibling):orphan(attachRecord2.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_8(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Liste des nom de cours', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_8(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $setHorizontalAlignment(f_HorizontalPanel4, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setVerticalAlignment(f_HorizontalPanel4, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_6(f_HorizontalPanel4, (f_Label5 = new Label_0 , $setTextOrHtml(f_Label5.directionalTextHelper, "Choisir le nom d'\xE9cole :", false) , $updateHorizontalAlignment(f_Label5) , f_Label5.element.style['width'] = '' , f_Label5)) , $add_6(f_HorizontalPanel4, (lstEcoles = new ListBox_0 , $addDomHandler(lstEcoles, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstEcoles = lstEcoles , lstEcoles)) , f_HorizontalPanel4.element.style['height'] = '40px' , f_HorizontalPanel4.element.style['width'] = '50%' , f_HorizontalPanel4)) , $add_8(f_VerticalPanel2, (tblCours = this$static.owner.tblCours , tblCours.element.style['height'] = '600px' , tblCours.element.style['width'] = '800px' , tblCours)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function CoursView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new CoursView_BinderImpl$Widgets$1_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(909, 1, {}, CoursView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function CoursView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(910, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), CoursView_BinderImpl$Widgets$1_0);
_.onChange = function onChange(event_0){
  $onLstEcolesSelected(this.this$1.owner);
}
;
_.this$1 = null;
function $html1_1(arg0){
  var sb;
  sb = new StringBuilder_0;
  $append_1(sb.data, "<span id='");
  $append_10(sb, htmlEscape(arg0));
  $append_1(sb.data, "'><\/span>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data));
}

function $get_Key$type$com$lemania$timetracking$client$view$CoursView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursView$_annotation$$none$$) {
    result = new CoursView_0(new CoursView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$CoursView$_annotation$$none$$;
}

function $saveAndReturn_0(this$static, newCours){
  var x;
  x = new CoursRequestFactory_CoursRequestContextImpl$8X_0(this$static, newCours);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function CoursRequestFactory_CoursRequestContextImpl$8X_0(this$0, val$newCours){
  this.val$newCours = val$newCours;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1091, 613, makeCastMap([Q$AbstractRequest]), CoursRequestFactory_CoursRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_3(){
  return new RequestData_0('rbmJhIFcA5GVgrckSnOI018NXMk=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newCours]), this.propertyRefs, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit, null);
}
;
_.val$newCours = null;
var Lcom_lemania_timetracking_client_presenter_CoursPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenter', 739), Lcom_lemania_timetracking_client_presenter_CoursPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenter$1', 740), Lcom_lemania_timetracking_client_presenter_CoursPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenter$2', 741), Lcom_lemania_timetracking_client_presenter_CoursPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenter$3', 742), Lcom_lemania_timetracking_client_presenter_CoursPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'CoursPresenter$4', 743), Lcom_lemania_timetracking_client_view_CoursView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView', 903), Lcom_lemania_timetracking_client_view_CoursView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView$1', 904), Lcom_lemania_timetracking_client_view_CoursView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView$2', 905), Lcom_lemania_timetracking_client_view_CoursView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView$3', 906), Lcom_lemania_timetracking_client_view_CoursView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView$4', 907), Lcom_lemania_timetracking_client_view_CoursView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView_BinderImpl', 908), Lcom_lemania_timetracking_client_view_CoursView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView_BinderImpl$Widgets', 909), Lcom_lemania_timetracking_client_view_CoursView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'CoursView_BinderImpl$Widgets$1', 910), Lcom_lemania_timetracking_shared_service_CoursRequestFactory_1CoursRequestContextImpl$8X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl$8X', 1091);
$entry(onLoad)(3);
