function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter_RptTimeBySchoolPresenter_methodInjection(_0, _1){
  return new RptTimeBySchoolPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter_RptTimeBySchoolPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeBySchoolView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeBySchoolView$_annotation$$none$$ = new RptTimeBySchoolView_0(new RptTimeBySchoolView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeBySchoolView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$MyProxy$_annotation$$none$$ = new RptTimeBySchoolPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$;
}

defineSeed(765, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_10(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function RptTimeBySchoolPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(874, 691, makeCastMap([Q$HasHandlers, Q$PresenterWidget]), RptTimeBySchoolPresenter_0);
_.onBind = function onBind_15(){
}
;
_.onReset = function onReset_9(){
  var rf, rc;
  dynamicCast(dynamicCast(this.view, Q$RptTimeBySchoolPresenter$MyView), Q$RptTimeBySchoolView).lstSchools.element.options.length = 0;
  $initiallizeDepartmentTable(dynamicCast(this.view, Q$RptTimeBySchoolPresenter$MyView));
  rf = new EcoleRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf);
  $fire($listAll_1(rc), new RptTimeBySchoolPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_13(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
function $onSuccess_30(this$static, response){
  $populateEcoleList_1(dynamicCast(this$static.this$0.view, Q$RptTimeBySchoolPresenter$MyView), response);
}

function RptTimeBySchoolPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(875, 630, makeCastMap([Q$Receiver]), RptTimeBySchoolPresenter$1_0);
_.onFailure_0 = function onFailure_48(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_48(response){
  $onSuccess_30(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $initiallizeDepartmentTable(this$static){
  var col01, col02, col03, col04, col05, col06, col07, col08, col09, col10, col11, col12, colProf;
  $setWidth(this$static.tblDepts, '100%');
  colProf = new RptTimeBySchoolView$1_0;
  $addColumn(this$static.tblDepts, colProf, 'D\xE9partement');
  $setColumnWidth(this$static.tblDepts, colProf, 28 + ($clinit_Style$Unit() , '%'));
  col01 = new RptTimeBySchoolView$2_0;
  $addColumn(this$static.tblDepts, col01, 'janvier');
  col02 = new RptTimeBySchoolView$3_0;
  $addColumn(this$static.tblDepts, col02, 'fevrier');
  col03 = new RptTimeBySchoolView$4_0;
  $addColumn(this$static.tblDepts, col03, 'mars');
  col04 = new RptTimeBySchoolView$5_0;
  $addColumn(this$static.tblDepts, col04, 'avril');
  col05 = new RptTimeBySchoolView$6_0;
  $addColumn(this$static.tblDepts, col05, 'mai');
  col06 = new RptTimeBySchoolView$7_0;
  $addColumn(this$static.tblDepts, col06, 'juin');
  col07 = new RptTimeBySchoolView$8_0;
  $addColumn(this$static.tblDepts, col07, 'juillet');
  col08 = new RptTimeBySchoolView$9_0;
  $addColumn(this$static.tblDepts, col08, 'ao\xFBt');
  col09 = new RptTimeBySchoolView$10_0;
  $addColumn(this$static.tblDepts, col09, 'septembre');
  col10 = new RptTimeBySchoolView$11_0;
  $addColumn(this$static.tblDepts, col10, 'octobre');
  col11 = new RptTimeBySchoolView$12_0;
  $addColumn(this$static.tblDepts, col11, 'novembre');
  col12 = new RptTimeBySchoolView$13_0;
  $addColumn(this$static.tblDepts, col12, 'd\xE9cembre');
}

function $populateEcoleList_1(this$static, ecoles){
  var i;
  $insertItem(this$static.lstSchools, '', '', -1);
  for (i = 0; i < ecoles.size_1(); ++i)
    $insertItem(this$static.lstSchools, dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getSchoolName(), '' + toString_6(dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getId_0().value_0), -1);
}

function RptTimeBySchoolView_0(){
  this.widget = $build_f_HTMLPanel1_12(new RptTimeBySchoolView_BinderImpl$Widgets_0(this));
}

defineSeed(1022, 696, makeCastMap([Q$RptTimeBySchoolPresenter$MyView, Q$RptTimeBySchoolView]), RptTimeBySchoolView_0);
_.asWidget = function asWidget_15(){
  return this.widget;
}
;
_.lstSchools = null;
_.tblDepts = null;
_.widget = null;
function RptTimeBySchoolView$1_0(){
  TextColumn_0.call(this);
}

defineSeed(1023, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$1_0);
_.getValue = function getValue_13(object){
  return dynamicCast(object, Q$CoursProxy).getCoursNom();
}
;
function RptTimeBySchoolView$10_0(){
  TextColumn_0.call(this);
}

defineSeed(1024, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$10_0);
_.getValue = function getValue_14(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$11_0(){
  TextColumn_0.call(this);
}

defineSeed(1025, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$11_0);
_.getValue = function getValue_15(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$12_0(){
  TextColumn_0.call(this);
}

defineSeed(1026, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$12_0);
_.getValue = function getValue_16(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$13_0(){
  TextColumn_0.call(this);
}

defineSeed(1027, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$13_0);
_.getValue = function getValue_17(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$2_0(){
  TextColumn_0.call(this);
}

defineSeed(1028, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$2_0);
_.getValue = function getValue_18(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$3_0(){
  TextColumn_0.call(this);
}

defineSeed(1029, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$3_0);
_.getValue = function getValue_19(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$4_0(){
  TextColumn_0.call(this);
}

defineSeed(1030, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$4_0);
_.getValue = function getValue_20(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$5_0(){
  TextColumn_0.call(this);
}

defineSeed(1031, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$5_0);
_.getValue = function getValue_21(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(1032, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$6_0);
_.getValue = function getValue_22(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(1033, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$7_0);
_.getValue = function getValue_23(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1034, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$8_0);
_.getValue = function getValue_24(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView$9_0(){
  TextColumn_0.call(this);
}

defineSeed(1035, 400, makeCastMap([Q$HasCell, Q$Column]), RptTimeBySchoolView$9_0);
_.getValue = function getValue_25(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
function RptTimeBySchoolView_BinderImpl_0(){
}

defineSeed(1036, 1, {}, RptTimeBySchoolView_BinderImpl_0);
function $build_f_HTMLPanel1_12(this$static){
  var attachRecord10, f_HTMLPanel1, f_FlowPanel2, f_VerticalPanel3, f_Label4, f_HorizontalPanel5, f_Label6, lstSchools, f_Button7, sb, tblDepts;
  f_HTMLPanel1 = new HTMLPanel_0($html2_0(this$static.domId0).html);
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord10 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord10.origParent?$insertBefore(attachRecord10.origParent, attachRecord10.element, attachRecord10.origSibling):orphan(attachRecord10.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_FlowPanel2 = new FlowPanel_0 , $add_4(f_FlowPanel2, (f_VerticalPanel3 = new VerticalPanel_0 , $setHorizontalAlignment_0(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , $add_8(f_VerticalPanel3, (f_Label4 = new Label_0 , f_Label4.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label4.directionalTextHelper, 'Informations des heures par \xE9coles') , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , f_Label4)) , $add_8(f_VerticalPanel3, (f_HorizontalPanel5 = new HorizontalPanel_0 , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_6(f_HorizontalPanel5, (f_Label6 = new Label_0 , $setTextOrHtml(f_Label6.directionalTextHelper, 'Ecoles :') , $updateHorizontalAlignment(f_Label6) , f_Label6)) , $add_6(f_HorizontalPanel5, (lstSchools = new ListBox_0 , this$static.owner.lstSchools = lstSchools , lstSchools)) , $add_6(f_HorizontalPanel5, (f_Button7 = new Button_0 , $setHTML(f_Button7, (sb = new StringBuilder_0 , sb.impl.string += 'Extraire en Excel' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , f_Button7)) , f_HorizontalPanel5.element.style['width'] = '80%' , f_HorizontalPanel5.table['cellSpacing'] = 2 , f_HorizontalPanel5)) , $add_8(f_VerticalPanel3, (tblDepts = new DataGrid_0 , tblDepts.element.style['height'] = '520px' , tblDepts.element.style['width'] = '830px' , this$static.owner.tblDepts = tblDepts , tblDepts)) , f_VerticalPanel3.element.style['height'] = '100%' , f_VerticalPanel3.element.style['width'] = '100%' , f_VerticalPanel3)) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_FlowPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function RptTimeBySchoolView_BinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(1037, 1, {}, RptTimeBySchoolView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function $html2_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

var Lcom_lemania_timetracking_client_presenter_RptTimeBySchoolPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeBySchoolPresenter', 874), Lcom_lemania_timetracking_client_presenter_RptTimeBySchoolPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeBySchoolPresenter$1', 875), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView', 1022), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$1', 1023), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$2', 1028), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$3', 1029), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$4', 1030), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$5', 1031), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$6', 1032), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$7', 1033), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$8', 1034), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$9', 1035), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$10_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$10', 1024), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$11_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$11', 1025), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$12_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$12', 1026), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$13_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$13', 1027), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView_BinderImpl', 1036), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView_BinderImpl$Widgets', 1037);
$entry(onLoad)(2);
