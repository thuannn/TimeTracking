function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$ExtractDataPresenter_ExtractDataPresenter_methodInjection(_0, _1){
  return new ExtractDataPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$ExtractDataPresenter_ExtractDataPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$ = new ExtractDataView_0(new ExtractDataView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$ExtractDataView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$MyProxy$_annotation$$none$$ = new ExtractDataPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$1$1.prototype;
_.onSuccess = function onSuccess_1(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ExtractDataPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function ExtractDataPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function ExtractDataPresenter(){
}

_ = ExtractDataPresenter_0.prototype = ExtractDataPresenter.prototype = new Presenter;
_.getClass$ = function getClass_542(){
  return Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter_2_classLit;
}
;
_.onBind = function onBind_6(){
  $initializeTable_1(dynamicCast(this.view, Q$ExtractDataPresenter$MyView));
}
;
_.onReset = function onReset_2(){
  var rcl, rfl, x;
  rfl = new LogRequestFactoryImpl_0;
  $initialize(rfl, this.eventBus, new DefaultRequestTransport_0);
  rcl = new LogRequestFactory_LogRequestContextImpl_0(rfl);
  $fire((x = new LogRequestFactory_LogRequestContextImpl$4X_0(rcl) , $addInvocation(rcl.state.dialect, x) , x), new ExtractDataPresenter$1_0(this));
}
;
_.revealInParent = function revealInParent_4(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers, Q$PresenterWidget]);
function $onSuccess_9(this$static, response){
  $setLogData(dynamicCast(this$static.this$0.view, Q$ExtractDataPresenter$MyView), response);
}

function ExtractDataPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function ExtractDataPresenter$1(){
}

_ = ExtractDataPresenter$1_0.prototype = ExtractDataPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_543(){
  return Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_22(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_22(response){
  $onSuccess_9(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $initializeTable_1(this$static){
  var colCourse, colEcole, colHour, colMonth, colProf, colType, colYear;
  $setWidth(this$static.tblLog, '100%');
  colEcole = new ExtractDataView$1_0;
  $addColumn(this$static.tblLog, colEcole, 'Ecole');
  $setColumnWidth(this$static.tblLog, colEcole, 15 + ($clinit_Style$Unit() , '%'));
  colProf = new ExtractDataView$2_0;
  $addColumn(this$static.tblLog, colProf, 'Professeur');
  $setColumnWidth(this$static.tblLog, colProf, '25%');
  colYear = new ExtractDataView$3_0;
  $addColumn(this$static.tblLog, colYear, 'Year');
  $setColumnWidth(this$static.tblLog, colYear, '10%');
  colMonth = new ExtractDataView$4_0;
  $addColumn(this$static.tblLog, colMonth, 'Month');
  $setColumnWidth(this$static.tblLog, colMonth, '10%');
  colCourse = new ExtractDataView$5_0;
  $addColumn(this$static.tblLog, colCourse, 'Cours');
  $setColumnWidth(this$static.tblLog, colCourse, '20%');
  colType = new ExtractDataView$6_0;
  $addColumn(this$static.tblLog, colType, 'Type');
  $setColumnWidth(this$static.tblLog, colType, '10%');
  colHour = new ExtractDataView$7_0;
  $addColumn(this$static.tblLog, colHour, 'Heur');
  $setColumnWidth(this$static.tblLog, colHour, '10%');
}

function $setLogData(this$static, logs){
  $setRowCount_0(this$static.tblLog, logs.size_1(), true);
  $setRowData(this$static.tblLog, logs);
  $setRowCount(this$static.tblLog, logs.size_1());
}

function ExtractDataView_0(){
  this.tblLog = new DataGrid_0;
  this.widget = $createAndBindUi_1(this);
}

function ExtractDataView(){
}

_ = ExtractDataView_0.prototype = ExtractDataView.prototype = new ViewImpl;
_.asWidget = function asWidget_6(){
  return this.widget;
}
;
_.getClass$ = function getClass_627(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ExtractDataPresenter$MyView]);
_.widget = null;
function ExtractDataView$1_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$1(){
}

_ = ExtractDataView$1_0.prototype = ExtractDataView$1.prototype = new TextColumn;
_.getClass$ = function getClass_628(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$1_2_classLit;
}
;
_.getValue = function getValue_6(object){
  return dynamicCast(object, Q$LogProxy).getSchoolName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$2_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$2(){
}

_ = ExtractDataView$2_0.prototype = ExtractDataView$2.prototype = new TextColumn;
_.getClass$ = function getClass_629(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$2_2_classLit;
}
;
_.getValue = function getValue_7(object){
  return dynamicCast(object, Q$LogProxy).getProfName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$3_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$3(){
}

_ = ExtractDataView$3_0.prototype = ExtractDataView$3.prototype = new TextColumn;
_.getClass$ = function getClass_630(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$3_2_classLit;
}
;
_.getValue = function getValue_8(object){
  return '' + dynamicCast(object, Q$LogProxy).getYear();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$4_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$4(){
}

_ = ExtractDataView$4_0.prototype = ExtractDataView$4.prototype = new TextColumn;
_.getClass$ = function getClass_631(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$4_2_classLit;
}
;
_.getValue = function getValue_9(object){
  return '' + dynamicCast(object, Q$LogProxy).getMonth_0();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$5_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$5(){
}

_ = ExtractDataView$5_0.prototype = ExtractDataView$5.prototype = new TextColumn;
_.getClass$ = function getClass_632(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$5_2_classLit;
}
;
_.getValue = function getValue_10(object){
  return dynamicCast(object, Q$LogProxy).getCourseName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$6_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$6(){
}

_ = ExtractDataView$6_0.prototype = ExtractDataView$6.prototype = new TextColumn;
_.getClass$ = function getClass_633(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$6_2_classLit;
}
;
_.getValue = function getValue_11(object){
  return dynamicCast(object, Q$LogProxy).getTypeName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ExtractDataView$7_0(){
  TextColumn_0.call(this);
}

function ExtractDataView$7(){
}

_ = ExtractDataView$7_0.prototype = ExtractDataView$7.prototype = new TextColumn;
_.getClass$ = function getClass_634(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView$7_2_classLit;
}
;
_.getValue = function getValue_12(object){
  return '' + dynamicCast(object, Q$LogProxy).getHour();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $createAndBindUi_1(owner){
  var attachRecord0, domId0, domId0Element, f_Button11, f_Button12, f_FlowPanel2, f_HTMLPanel1, f_HorizontalPanel5, f_Label4, f_Label6, f_Label7, f_Label9, f_ListBox10, f_ListBox8, f_VerticalPanel3, tblLog, sb, sb_0, sb_1;
  domId0 = $createUniqueId($doc);
  f_Label4 = new Label_0;
  f_Label6 = new Label_0;
  f_Label7 = new Label_0;
  f_ListBox8 = new ListBox_0;
  f_Label9 = new Label_0;
  f_ListBox10 = new ListBox_0;
  f_Button11 = new Button_0;
  f_HorizontalPanel5 = new HorizontalPanel_0;
  f_Button12 = new Button_0;
  tblLog = owner.tblLog;
  f_VerticalPanel3 = new VerticalPanel_0;
  f_FlowPanel2 = new FlowPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  f_Label4.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label4.directionalTextHelper, 'Extraire des informations des heures');
  $updateHorizontalAlignment(f_Label4);
  f_Label4.element.style['height'] = '30';
  f_Label4.element.style['width'] = '830';
  $add_8(f_VerticalPanel3, f_Label4);
  $setTextOrHtml(f_Label6.directionalTextHelper, 'Filtres :');
  $updateHorizontalAlignment(f_Label6);
  $add_6(f_HorizontalPanel5, f_Label6);
  $setTextOrHtml(f_Label7.directionalTextHelper, 'Ann\xE9e :');
  $updateHorizontalAlignment(f_Label7);
  $add_6(f_HorizontalPanel5, f_Label7);
  $add_6(f_HorizontalPanel5, f_ListBox8);
  $setTextOrHtml(f_Label9.directionalTextHelper, 'Mois :');
  $updateHorizontalAlignment(f_Label9);
  $add_6(f_HorizontalPanel5, f_Label9);
  $add_6(f_HorizontalPanel5, f_ListBox10);
  $setHTML(f_Button11, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Afiner' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html);
  $setInnerText(f_Button11.element, 'Filtrer');
  $add_6(f_HorizontalPanel5, f_Button11);
  $add_8(f_VerticalPanel3, f_HorizontalPanel5);
  $setHTML(f_Button12, (sb_1 = new StringBuilder_0 , sb_1.impl.string += 'Extraire en Excel' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_1.impl.string)).html);
  $add_8(f_VerticalPanel3, f_Button12);
  tblLog.element.style['height'] = '450px';
  tblLog.element.style['width'] = '830px';
  $add_8(f_VerticalPanel3, tblLog);
  f_VerticalPanel3.element.style['height'] = '100%';
  f_VerticalPanel3.element.style['width'] = '100%';
  $add_0(f_FlowPanel2, f_VerticalPanel3, f_FlowPanel2.element);
  f_FlowPanel2.element.style['height'] = '100%';
  f_FlowPanel2.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['height'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_FlowPanel2, domId0Element);
  return f_HTMLPanel1;
}

function ExtractDataView_BinderImpl_0(){
}

function ExtractDataView_BinderImpl(){
}

_ = ExtractDataView_BinderImpl_0.prototype = ExtractDataView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_635(){
  return Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl_2_classLit;
}
;
function LogRequestFactory_LogRequestContextImpl$4X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

function LogRequestFactory_LogRequestContextImpl$4X(){
}

_ = LogRequestFactory_LogRequestContextImpl$4X_0.prototype = LogRequestFactory_LogRequestContextImpl$4X.prototype = new AbstractRequest;
_.getClass$ = function getClass_749(){
  return Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$4X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_10(){
  return new RequestData_0('ppgHbdsCjY9F$gPBQ7NdM7Kb_CM=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
var Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView', Lcom_gwtplatform_mvp_client_ViewImpl_2_classLit), Lcom_lemania_timetracking_client_presenter_ExtractDataPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ExtractDataPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$1', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$2', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$3', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$4', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$5', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$6', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView$7', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ExtractDataView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ExtractDataView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl$4X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl$4X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(1);
