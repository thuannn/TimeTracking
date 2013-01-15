function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter_RptTimeBySchoolPresenter_methodInjection(_0, _1){
  return new RptTimeBySchoolPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter_RptTimeBySchoolPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeBySchoolView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeBySchoolView$_annotation$$none$$ = new RptTimeBySchoolView_0(new RptTimeBySchoolView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeBySchoolView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$MyProxy$_annotation$$none$$ = new RptTimeBySchoolPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$8$1.prototype;
_.onSuccess = function onSuccess_16(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function RptTimeBySchoolPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function RptTimeBySchoolPresenter(){
}

_ = RptTimeBySchoolPresenter_0.prototype = RptTimeBySchoolPresenter.prototype = new Presenter;
_.getClass$ = function getClass_608(){
  return Lcom_lemania_timetracking_client_presenter_RptTimeBySchoolPresenter_2_classLit;
}
;
_.onBind = function onBind_15(){
}
;
_.onReset = function onReset_9(){
  var rc, rf;
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
_.castableTypeMap$ = makeCastMap([Q$HasHandlers, Q$PresenterWidget]);
function $onSuccess_27(this$static, response){
  $populateEcoleList_1(dynamicCast(this$static.this$0.view, Q$RptTimeBySchoolPresenter$MyView), response);
}

function RptTimeBySchoolPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function RptTimeBySchoolPresenter$1(){
}

_ = RptTimeBySchoolPresenter$1_0.prototype = RptTimeBySchoolPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_609(){
  return Lcom_lemania_timetracking_client_presenter_RptTimeBySchoolPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_44(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_44(response){
  $onSuccess_27(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
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
  var attachRecord0, domId0, domId0Element, f_Button7, f_FlowPanel2, f_HTMLPanel1, f_HorizontalPanel5, f_Label4, f_Label6, f_VerticalPanel3, lstSchools, tblDepts, sb, sb_0;
  this.widget = (domId0 = $createUniqueId($doc) , f_Label4 = new Label_0 , f_Label6 = new Label_0 , lstSchools = new ListBox_0 , f_Button7 = new Button_0 , f_HorizontalPanel5 = new HorizontalPanel_0 , tblDepts = new DataGrid_0 , f_VerticalPanel3 = new VerticalPanel_0 , f_FlowPanel2 = new FlowPanel_0 , f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $setHorizontalAlignment_1(f_VerticalPanel3, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , f_Label4.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label4.directionalTextHelper, 'Informations des heures par \xE9coles') , $updateHorizontalAlignment(f_Label4) , f_Label4.element.style['height'] = '30' , f_Label4.element.style['width'] = '830' , $add_8(f_VerticalPanel3, f_Label4) , $setVerticalAlignment(f_HorizontalPanel5, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $setTextOrHtml(f_Label6.directionalTextHelper, 'Ecoles :') , $updateHorizontalAlignment(f_Label6) , $add_6(f_HorizontalPanel5, f_Label6) , $add_6(f_HorizontalPanel5, lstSchools) , $setHTML(f_Button7, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Extraire en Excel' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html) , $add_6(f_HorizontalPanel5, f_Button7) , f_HorizontalPanel5.element.style['width'] = '80%' , f_HorizontalPanel5.table['cellSpacing'] = 2 , $add_8(f_VerticalPanel3, f_HorizontalPanel5) , tblDepts.element.style['height'] = '520px' , tblDepts.element.style['width'] = '830px' , $add_8(f_VerticalPanel3, tblDepts) , f_VerticalPanel3.element.style['height'] = '100%' , f_VerticalPanel3.element.style['width'] = '100%' , $add_0(f_FlowPanel2, f_VerticalPanel3, f_FlowPanel2.element) , f_FlowPanel2.element.style['height'] = '100%' , f_FlowPanel2.element.style['width'] = '100%' , f_HTMLPanel1.element.style['height'] = '100%' , f_HTMLPanel1.element.style['width'] = '100%' , attachRecord0 = attachToDom(f_HTMLPanel1.element) , domId0Element = $getElementById($doc, domId0) , attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element) , $addAndReplaceElement(f_HTMLPanel1, f_FlowPanel2, domId0Element) , this.lstSchools = lstSchools , this.tblDepts = tblDepts , f_HTMLPanel1);
}

function RptTimeBySchoolView(){
}

_ = RptTimeBySchoolView_0.prototype = RptTimeBySchoolView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_15(){
  return this.widget;
}
;
_.getClass$ = function getClass_722(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RptTimeBySchoolPresenter$MyView, Q$RptTimeBySchoolView]);
_.lstSchools = null;
_.tblDepts = null;
_.widget = null;
function RptTimeBySchoolView$1_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$1(){
}

_ = RptTimeBySchoolView$1_0.prototype = RptTimeBySchoolView$1.prototype = new TextColumn;
_.getClass$ = function getClass_723(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$1_2_classLit;
}
;
_.getValue = function getValue_12(object){
  return dynamicCast(object, Q$CoursProxy).getCoursNom();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$10_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$10(){
}

_ = RptTimeBySchoolView$10_0.prototype = RptTimeBySchoolView$10.prototype = new TextColumn;
_.getClass$ = function getClass_724(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$10_2_classLit;
}
;
_.getValue = function getValue_13(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$11_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$11(){
}

_ = RptTimeBySchoolView$11_0.prototype = RptTimeBySchoolView$11.prototype = new TextColumn;
_.getClass$ = function getClass_725(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$11_2_classLit;
}
;
_.getValue = function getValue_14(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$12_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$12(){
}

_ = RptTimeBySchoolView$12_0.prototype = RptTimeBySchoolView$12.prototype = new TextColumn;
_.getClass$ = function getClass_726(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$12_2_classLit;
}
;
_.getValue = function getValue_15(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$13_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$13(){
}

_ = RptTimeBySchoolView$13_0.prototype = RptTimeBySchoolView$13.prototype = new TextColumn;
_.getClass$ = function getClass_727(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$13_2_classLit;
}
;
_.getValue = function getValue_16(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$2_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$2(){
}

_ = RptTimeBySchoolView$2_0.prototype = RptTimeBySchoolView$2.prototype = new TextColumn;
_.getClass$ = function getClass_728(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$2_2_classLit;
}
;
_.getValue = function getValue_17(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$3_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$3(){
}

_ = RptTimeBySchoolView$3_0.prototype = RptTimeBySchoolView$3.prototype = new TextColumn;
_.getClass$ = function getClass_729(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$3_2_classLit;
}
;
_.getValue = function getValue_18(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$4_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$4(){
}

_ = RptTimeBySchoolView$4_0.prototype = RptTimeBySchoolView$4.prototype = new TextColumn;
_.getClass$ = function getClass_730(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$4_2_classLit;
}
;
_.getValue = function getValue_19(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$5_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$5(){
}

_ = RptTimeBySchoolView$5_0.prototype = RptTimeBySchoolView$5.prototype = new TextColumn;
_.getClass$ = function getClass_731(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$5_2_classLit;
}
;
_.getValue = function getValue_20(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$6_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$6(){
}

_ = RptTimeBySchoolView$6_0.prototype = RptTimeBySchoolView$6.prototype = new TextColumn;
_.getClass$ = function getClass_732(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$6_2_classLit;
}
;
_.getValue = function getValue_21(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$7_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$7(){
}

_ = RptTimeBySchoolView$7_0.prototype = RptTimeBySchoolView$7.prototype = new TextColumn;
_.getClass$ = function getClass_733(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$7_2_classLit;
}
;
_.getValue = function getValue_22(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$8_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$8(){
}

_ = RptTimeBySchoolView$8_0.prototype = RptTimeBySchoolView$8.prototype = new TextColumn;
_.getClass$ = function getClass_734(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$8_2_classLit;
}
;
_.getValue = function getValue_23(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView$9_0(){
  TextColumn_0.call(this);
}

function RptTimeBySchoolView$9(){
}

_ = RptTimeBySchoolView$9_0.prototype = RptTimeBySchoolView$9.prototype = new TextColumn;
_.getClass$ = function getClass_735(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$9_2_classLit;
}
;
_.getValue = function getValue_24(object){
  return dynamicCast(object, Q$CoursProxy) , '';
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function RptTimeBySchoolView_BinderImpl_0(){
}

function RptTimeBySchoolView_BinderImpl(){
}

_ = RptTimeBySchoolView_BinderImpl_0.prototype = RptTimeBySchoolView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_736(){
  return Lcom_lemania_timetracking_client_view_RptTimeBySchoolView_1BinderImpl_2_classLit;
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeBySchoolPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeBySchoolPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_RptTimeBySchoolPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'RptTimeBySchoolPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$1', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$10_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$10', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$11_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$11', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$12_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$12', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$13_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$13', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$2', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$3', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$4', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$5', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$6', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$7', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$8_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$8', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView$9_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView$9', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_RptTimeBySchoolView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'RptTimeBySchoolView_BinderImpl', Ljava_lang_Object_2_classLit);
$entry(onLoad)(16);
