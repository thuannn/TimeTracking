function $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____________(injectee, _0){
  injectee.automaticBind(_0);
}

function $com$lemania$timetracking$client$presenter$ProfsPresenter_ProfsPresenter_methodInjection(_0, _1){
  return new ProfsPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$(this$static){
  var result;
  !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$ = (result = $com$lemania$timetracking$client$presenter$ProfsPresenter_ProfsPresenter_methodInjection((!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ && (this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = new SimpleEventBus_0) , this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$), (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$ = new ProfsView_0(new ProfsView_BinderImpl_0)) , this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$), !this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$ && (this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$ = new ProfsPresenterMyProxyImpl_0)) , $com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____________(result, (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ && (this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = new AutobindDisable_0) , this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$)) , result));
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$;
}

_ = ClientGinjectorImpl$17$1.prototype;
_.onSuccess = function onSuccess_8(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $addCourse(this$static, courseId, prof){
  var rc, rf;
  !courseId.length && alert_0('Veuillez choisir un cours \xE0 rajouter.');
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($saveAndReturn(rc, courseId, '' + toString_6(prof.getId_0().value_0)), new ProfsPresenter$5_0(this$static, prof));
}

function $addSchoolSelected(this$static, ecoleId){
  var rc, rf;
  $equals_5(ecoleId, '') && alert_0("Veuillez choisir l'\xE9cole.");
  rf = new CoursRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new CoursRequestFactory_CoursRequestContextImpl_0(rf);
  $fire($listAll_0(rc, ecoleId), new ProfsPresenter$6_0(this$static));
}

function $professorSelected(this$static, prof){
  var rc, rf;
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($listAll(rc, '' + toString_6(prof.getId_0().value_0)), new ProfsPresenter$4_0(this$static));
}

function $updateProfessorStatus(this$static, prof, status_0){
  var profForUpdate, rc, rf, x;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  profForUpdate = dynamicCast($editProxy(rc, prof), Q$ProfessorProxy);
  profForUpdate.setProfActive(status_0);
  $fire((x = new ProfessorRequestFactory_ProfessorRequestContextImpl$7X_0(rc, profForUpdate) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$3_0(this$static));
}

function ProfsPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

function ProfsPresenter(){
}

_ = ProfsPresenter_0.prototype = ProfsPresenter.prototype = new Presenter;
_.getClass$ = function getClass_590(){
  return Lcom_lemania_timetracking_client_presenter_ProfsPresenter_2_classLit;
}
;
_.onBind = function onBind_12(){
  dynamicCast(this.view, Q$ProfsPresenter$MyView).setUiHandlers(this);
  $initializeTable_3(dynamicCast(this.view, Q$ProfsPresenter$MyView));
}
;
_.onReset = function onReset_6(){
  var rc, rf, x, rc_0, rf_0;
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  $fire((x = new ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0(rc) , $addInvocation(rc.state.dialect, x) , x), new ProfsPresenter$1_0(this));
  rf_0 = new EcoleRequestFactoryImpl_0;
  $initialize(rf_0, this.eventBus, new EventSourceRequestTransport_0(this.eventBus));
  rc_0 = new EcoleRequestFactory_EcoleRequestContextImpl_0(rf_0);
  $fire($listAllActive(rc_0), new ProfsPresenter$2_0(this));
}
;
_.revealInParent = function revealInParent_10(){
  $fireEvent_1(this, new RevealContentEvent_0(($clinit_MainPagePresenter() , TYPE_SetMainContent), this));
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers, Q$PresenterWidget, Q$ProfessorListUiHandler]);
function $onSuccess_18(this$static, response){
  $setData_3(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

function ProfsPresenter$1(){
}

_ = ProfsPresenter$1_0.prototype = ProfsPresenter$1.prototype = new Receiver;
_.getClass$ = function getClass_591(){
  return Lcom_lemania_timetracking_client_presenter_ProfsPresenter$1_2_classLit;
}
;
_.onFailure_0 = function onFailure_35(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_35(response){
  $onSuccess_18(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_19(this$static, response){
  $setEcoleAddList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

function ProfsPresenter$2(){
}

_ = ProfsPresenter$2_0.prototype = ProfsPresenter$2.prototype = new Receiver;
_.getClass$ = function getClass_592(){
  return Lcom_lemania_timetracking_client_presenter_ProfsPresenter$2_2_classLit;
}
;
_.onFailure_0 = function onFailure_36(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_36(response){
  $onSuccess_19(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_20(this$static, response){
  $refreshTable_2(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

function ProfsPresenter$3(){
}

_ = ProfsPresenter$3_0.prototype = ProfsPresenter$3.prototype = new Receiver;
_.getClass$ = function getClass_593(){
  return Lcom_lemania_timetracking_client_presenter_ProfsPresenter$3_2_classLit;
}
;
_.onFailure_0 = function onFailure_37(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_37(response){
  $onSuccess_20(this, dynamicCast(response, Q$ProfessorProxy));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_21(this$static, response){
  $setAssignmentList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$4_0(this$0){
  this.this$0 = this$0;
}

function ProfsPresenter$4(){
}

_ = ProfsPresenter$4_0.prototype = ProfsPresenter$4.prototype = new Receiver;
_.getClass$ = function getClass_594(){
  return Lcom_lemania_timetracking_client_presenter_ProfsPresenter$4_2_classLit;
}
;
_.onFailure_0 = function onFailure_38(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_38(response){
  $onSuccess_21(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $onSuccess_22(this$static){
  $professorSelected(this$static.this$0, this$static.val$prof);
}

function ProfsPresenter$5_0(this$0, val$prof){
  this.this$0 = this$0;
  this.val$prof = val$prof;
}

function ProfsPresenter$5(){
}

_ = ProfsPresenter$5_0.prototype = ProfsPresenter$5.prototype = new Receiver;
_.getClass$ = function getClass_595(){
  return Lcom_lemania_timetracking_client_presenter_ProfsPresenter$5_2_classLit;
}
;
_.onFailure_0 = function onFailure_39(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_39(response){
  $onSuccess_22(this, dynamicCast(response, Q$AssignmentProxy));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
_.val$prof = null;
function $onSuccess_23(this$static, response){
  $setCourseAddList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$6_0(this$0){
  this.this$0 = this$0;
}

function ProfsPresenter$6(){
}

_ = ProfsPresenter$6_0.prototype = ProfsPresenter$6.prototype = new Receiver;
_.getClass$ = function getClass_596(){
  return Lcom_lemania_timetracking_client_presenter_ProfsPresenter$6_2_classLit;
}
;
_.onFailure_0 = function onFailure_40(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_40(response){
  $onSuccess_23(this, dynamicCast(response, Q$List));
}
;
_.castableTypeMap$ = makeCastMap([Q$Receiver]);
_.this$0 = null;
function $initializeTable_3(this$static){
  var cellActive, colActive, colCourseName, colName, colSchoolName, selectionModel;
  colName = new ProfsView$1_0;
  $addColumn(this$static.tblProfessors, colName, 'Nom');
  cellActive = new CheckboxCell_0;
  colActive = new ProfsView$2_0(cellActive);
  $addColumn(this$static.tblProfessors, colActive, 'Active');
  $setFieldUpdater(colActive, new ProfsView$3_0(this$static));
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblProfessors, selectionModel);
  $addSelectionChangeHandler(selectionModel, new ProfsView$4_0(this$static, selectionModel));
  $setDisplay_0(this$static.pager, this$static.tblProfessors);
  colSchoolName = new ProfsView$5_0;
  $addColumn(this$static.tblAssignment, colSchoolName, 'Ecole');
  colCourseName = new ProfsView$6_0;
  $addColumn(this$static.tblAssignment, colCourseName, 'Cours');
}

function $onCmdAddCourseClicked(this$static){
  !!this$static.uiHandlers && $addCourse(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), $getValue_0(this$static.lstAddCourse, this$static.lstAddCourse.element.selectedIndex), this$static.selectedProfessor);
}

function $onLstAddEcoleChanged(this$static){
  !!this$static.uiHandlers && $addSchoolSelected(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), $getValue_0(this$static.lstAddEcole, this$static.lstAddEcole.element.selectedIndex));
}

function $refreshTable_2(this$static, prof){
  var profs;
  profs = new ArrayList_0;
  setCheck(profs.array, profs.size_0++, prof);
  $setRowData_0(this$static.tblProfessors, this$static.selectedProf, profs);
  $redraw(this$static.tblProfessors);
  alert_0('Statut du professeur mis \xE0 jour.');
}

function $setAssignmentList(this$static, assignments){
  $setRowData(this$static.tblAssignment, assignments);
  $setRowCount(this$static.tblAssignment, assignments.size_1());
}

function $setCourseAddList(this$static, cours){
  var i;
  $selectClear(this$static.lstAddCourse.element);
  $insertItem(this$static.lstAddCourse, '-', '', -1);
  for (i = 0; i < cours.size_1(); ++i)
    $insertItem(this$static.lstAddCourse, dynamicCast(cours.get_0(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(cours.get_0(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $setData_3(this$static, profs){
  this$static.professorProvider = new ListDataProvider_0;
  $setList(this$static.professorProvider, profs);
  $addDataDisplay(this$static.professorProvider, this$static.tblProfessors);
}

function $setEcoleAddList(this$static, ecoles){
  var i;
  $selectClear(this$static.lstAddEcole.element);
  $insertItem(this$static.lstAddEcole, '-', '', -1);
  for (i = 0; i < ecoles.size_1(); ++i)
    $insertItem(this$static.lstAddEcole, dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getSchoolName(), '' + toString_6(dynamicCast(ecoles.get_0(i), Q$EcoleProxy).getId_0().value_0), -1);
}

function ProfsView_0(){
  this.tblProfessors = new DataGrid_0;
  this.tblAssignment = new DataGrid_0;
  this.widget = $createAndBindUi_5(this);
}

function ProfsView(){
}

_ = ProfsView_0.prototype = ProfsView.prototype = new ViewWithUiHandlers;
_.asWidget = function asWidget_12(){
  return this.widget;
}
;
_.getClass$ = function getClass_709(){
  return Lcom_lemania_timetracking_client_view_ProfsView_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ProfsPresenter$MyView]);
_.lblProfNameAssign = null;
_.lstAddCourse = null;
_.lstAddEcole = null;
_.pager = null;
_.professorProvider = null;
_.selectedProf = 0;
_.selectedProfessor = null;
_.widget = null;
function ProfsView$1_0(){
  TextColumn_0.call(this);
}

function ProfsView$1(){
}

_ = ProfsView$1_0.prototype = ProfsView$1.prototype = new TextColumn;
_.getClass$ = function getClass_710(){
  return Lcom_lemania_timetracking_client_view_ProfsView$1_2_classLit;
}
;
_.getValue = function getValue_8(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ProfsView$2_0($anonymous0){
  this.cell = $anonymous0;
}

function ProfsView$2(){
}

_ = ProfsView$2_0.prototype = ProfsView$2.prototype = new Column;
_.getClass$ = function getClass_711(){
  return Lcom_lemania_timetracking_client_view_ProfsView$2_2_classLit;
}
;
_.getValue = function getValue_9(ecole){
  return dynamicCast(ecole, Q$ProfessorProxy).getProfActive();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $update_3(this$static, index, prof, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedProf = index;
    $updateProfessorStatus(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), prof, value);
  }
}

function ProfsView$3_0(this$0){
  this.this$0 = this$0;
}

function ProfsView$3(){
}

_ = ProfsView$3_0.prototype = ProfsView$3.prototype = new Object_0;
_.getClass$ = function getClass_712(){
  return Lcom_lemania_timetracking_client_view_ProfsView$3_2_classLit;
}
;
_.update = function update_2(index, prof, value){
  $update_3(this, index, dynamicCast(prof, Q$ProfessorProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function ProfsView$4_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

function ProfsView$4(){
}

_ = ProfsView$4_0.prototype = ProfsView$4.prototype = new Object_0;
_.getClass$ = function getClass_713(){
  return Lcom_lemania_timetracking_client_view_ProfsView$4_2_classLit;
}
;
_.onSelectionChange = function onSelectionChange_0(event_0){
  this.this$0.selectedProfessor = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfessorProxy);
  if (this.this$0.selectedProfessor) {
    $setText_0(this.this$0.lblProfNameAssign, this.this$0.selectedProfessor.getProfName());
    $professorSelected(dynamicCast(this.this$0.uiHandlers, Q$ProfessorListUiHandler), this.this$0.selectedProfessor);
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]);
_.this$0 = null;
_.val$selectionModel = null;
function ProfsView$5_0(){
  TextColumn_0.call(this);
}

function ProfsView$5(){
}

_ = ProfsView$5_0.prototype = ProfsView$5.prototype = new TextColumn;
_.getClass$ = function getClass_714(){
  return Lcom_lemania_timetracking_client_view_ProfsView$5_2_classLit;
}
;
_.getValue = function getValue_10(object){
  return dynamicCast(object, Q$AssignmentProxy).getSchoolName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function ProfsView$6_0(){
  TextColumn_0.call(this);
}

function ProfsView$6(){
}

_ = ProfsView$6_0.prototype = ProfsView$6.prototype = new TextColumn;
_.getClass$ = function getClass_715(){
  return Lcom_lemania_timetracking_client_view_ProfsView$6_2_classLit;
}
;
_.getValue = function getValue_11(object){
  return dynamicCast(object, Q$AssignmentProxy).getCourseName();
}
;
_.castableTypeMap$ = makeCastMap([Q$Column]);
function $createAndBindUi_5(owner){
  var attachRecord0, cmdAddCourse, domId0, domId0Element, f_Grid8, f_HTMLPanel1, f_HorizontalPanel4, f_Label10, f_Label11, f_Label12, f_Label13, f_Label3, f_Label7, f_Label9, f_VerticalPanel2, f_VerticalPanel5, f_VerticalPanel6, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, lblProfNameAssign, lstAddCourse, lstAddEcole, pager, tblAssignment, tblProfessors, sb, sb_0;
  domId0 = $createUniqueId($doc);
  f_Label3 = new Label_0;
  pager = new SimplePager_0;
  tblProfessors = owner.tblProfessors;
  f_VerticalPanel5 = new VerticalPanel_0;
  lblProfNameAssign = new Label_0;
  f_Label7 = new Label_0;
  f_Label9 = new Label_0;
  lstAddEcole = new ListBox_0;
  f_Label10 = new Label_0;
  lstAddCourse = new ListBox_0;
  f_Label11 = new Label_0;
  cmdAddCourse = new Button_0;
  f_Grid8 = new Grid_0;
  f_Label12 = new Label_0;
  f_Label13 = new Label_0;
  tblAssignment = owner.tblAssignment;
  f_VerticalPanel6 = new VerticalPanel_0;
  f_HorizontalPanel4 = new HorizontalPanel_0;
  f_VerticalPanel2 = new VerticalPanel_0;
  f_HTMLPanel1 = new HTMLPanel_0((sb = new StringBuilder_0 , sb.impl.string += "<span id='" , $append_9(sb, htmlEscape(domId0)) , sb.impl.string += "'><\/span>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  f_Label3.element['className'] = 'pageTitle';
  $setTextOrHtml(f_Label3.directionalTextHelper, 'Liste de professeurs');
  $updateHorizontalAlignment(f_Label3);
  $add_8(f_VerticalPanel2, f_Label3);
  $setPageSize(pager);
  $add_8(f_VerticalPanel5, pager);
  tblProfessors.element.style['height'] = '550px';
  tblProfessors.element.style['width'] = '400px';
  $setVisibleRange(tblProfessors, new Range_1($getVisibleRange(tblProfessors.presenter).start, 15));
  $add_8(f_VerticalPanel5, tblProfessors);
  f_VerticalPanel5.element.style['width'] = '400px';
  $add_6(f_HorizontalPanel4, f_VerticalPanel5);
  lblProfNameAssign.element['className'] = 'header';
  $add_8(f_VerticalPanel6, lblProfNameAssign);
  f_Label7.element['className'] = 'sectionTitle';
  $setTextOrHtml(f_Label7.directionalTextHelper, 'Rajouter un d\xE9partement');
  $updateHorizontalAlignment(f_Label7);
  f_Label7.element.style['width'] = '';
  $add_8(f_VerticalPanel6, f_Label7);
  $setTextOrHtml(f_Label9.directionalTextHelper, 'Ecole :');
  $updateHorizontalAlignment(f_Label9);
  f_Label9.element.style['width'] = '';
  $setTextOrHtml(f_Label10.directionalTextHelper, 'Cours :');
  $updateHorizontalAlignment(f_Label10);
  f_Label10.element.style['width'] = '';
  $setHTML(cmdAddCourse, (sb_0 = new StringBuilder_0 , sb_0.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html);
  $resizeColumns(f_Grid8, 2);
  $resizeRows(f_Grid8, 3);
  $setWidget_1(f_Grid8, 0, 0, f_Label9);
  $setWidget_1(f_Grid8, 0, 1, lstAddEcole);
  $setWidget_1(f_Grid8, 1, 0, f_Label10);
  $setWidget_1(f_Grid8, 1, 1, lstAddCourse);
  $setWidget_1(f_Grid8, 2, 0, f_Label11);
  $setWidget_1(f_Grid8, 2, 1, cmdAddCourse);
  f_Grid8.element['className'] = 'subSection';
  f_Grid8.element.style['width'] = '100%';
  $add_8(f_VerticalPanel6, f_Grid8);
  $setTextOrHtml(f_Label12.directionalTextHelper, '.');
  $updateHorizontalAlignment(f_Label12);
  $add_8(f_VerticalPanel6, f_Label12);
  f_Label13.element['className'] = 'sectionTitle';
  $setTextOrHtml(f_Label13.directionalTextHelper, 'Liste des d\xE9partement assign\xE9s');
  $updateHorizontalAlignment(f_Label13);
  $add_8(f_VerticalPanel6, f_Label13);
  tblAssignment.element['className'] = 'subSection';
  tblAssignment.element.style['height'] = '400px';
  tblAssignment.element.style['width'] = '400px';
  $add_8(f_VerticalPanel6, tblAssignment);
  f_VerticalPanel6.element.style['width'] = '400px';
  $add_6(f_HorizontalPanel4, f_VerticalPanel6);
  f_HorizontalPanel4.element.style['width'] = '850px';
  $add_8(f_VerticalPanel2, f_HorizontalPanel4);
  f_VerticalPanel2.element.style['width'] = '100%';
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord0 = attachToDom(f_HTMLPanel1.element);
  domId0Element = $getElementById($doc, domId0);
  attachRecord0.origParent?$insertBefore(attachRecord0.origParent, attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element);
  $addAndReplaceElement(f_HTMLPanel1, f_VerticalPanel2, domId0Element);
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfsView_BinderImpl$1_0(owner);
  $addDomHandler(cmdAddCourse, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfsView_BinderImpl$2_0(owner);
  $addDomHandler(lstAddEcole, handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE));
  owner.lblProfNameAssign = lblProfNameAssign;
  owner.lstAddCourse = lstAddCourse;
  owner.lstAddEcole = lstAddEcole;
  owner.pager = pager;
  return f_HTMLPanel1;
}

function ProfsView_BinderImpl_0(){
}

function ProfsView_BinderImpl(){
}

_ = ProfsView_BinderImpl_0.prototype = ProfsView_BinderImpl.prototype = new Object_0;
_.getClass$ = function getClass_716(){
  return Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl_2_classLit;
}
;
function ProfsView_BinderImpl$1_0(val$owner){
  this.val$owner = val$owner;
}

function ProfsView_BinderImpl$1(){
}

_ = ProfsView_BinderImpl$1_0.prototype = ProfsView_BinderImpl$1.prototype = new Object_0;
_.getClass$ = function getClass_717(){
  return Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$1_2_classLit;
}
;
_.onClick = function onClick_30(event_0){
  $onCmdAddCourseClicked(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$owner = null;
function ProfsView_BinderImpl$2_0(val$owner){
  this.val$owner = val$owner;
}

function ProfsView_BinderImpl$2(){
}

_ = ProfsView_BinderImpl$2_0.prototype = ProfsView_BinderImpl$2.prototype = new Object_0;
_.getClass$ = function getClass_718(){
  return Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$2_2_classLit;
}
;
_.onChange = function onChange_2(event_0){
  $onLstAddEcoleChanged(this.val$owner);
}
;
_.castableTypeMap$ = makeCastMap([Q$ChangeHandler, Q$EventHandler]);
_.val$owner = null;
function $$init_8(this$static){
  this$static.shim = new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_8(this);
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_8(this);
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory(){
}

_ = AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1.prototype = AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0.prototype = AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory.prototype = new AbstractAutoBean;
_.as = function as_8(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_8(){
  return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getClass$ = function getClass_772(){
  return Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit;
}
;
_.getType_0 = function getType_16(){
  return Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_7(visitor, ctx){
  var as, propertyContext, value;
  as = this.shim;
  value = $getId_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value, propertyContext);
  value = $getCourseName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'courseName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('courseName', value, propertyContext);
  value = $getSchoolName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolName', value, propertyContext);
}
;
_.castableTypeMap$ = makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]);
function $getCourseName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getCourseName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getSchoolName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$AssignmentProxy).getSchoolName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1(){
}

_ = AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0.prototype = AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1.prototype = new Object_0;
_.equals$ = function equals_28(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).equals$(o);
}
;
_.getClass$ = function getClass_773(){
  return Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit;
}
;
_.getCourseName = function getCourseName(){
  return $getCourseName(this);
}
;
_.getId_0 = function getId_1(){
  return $getId_2(this);
}
;
_.getSchoolName = function getSchoolName(){
  return $getSchoolName(this);
}
;
_.hashCode$ = function hashCode_28(){
  return dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).hashCode$();
}
;
_.toString$ = function toString_24(){
  return dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).toString$();
}
;
_.castableTypeMap$ = makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]);
_.this$0 = null;
function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2(){
}

_ = AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0.prototype = AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2.prototype = new Object_0;
_.equals$ = function equals_29(other){
  return equals_14(this.this$0, other);
}
;
_.getClass$ = function getClass_774(){
  return Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit;
}
;
_.getCourseName = function getCourseName_0(){
  return dynamicCast($getOrReify(this.this$0, 'courseName'), Q$String);
}
;
_.getId_0 = function getId_2(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getSchoolName = function getSchoolName_0(){
  return dynamicCast($getOrReify(this.this$0, 'schoolName'), Q$String);
}
;
_.hashCode$ = function hashCode_29(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.castableTypeMap$ = makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]);
_.this$0 = null;
function $clinit_AssignmentRequestFactoryImpl(){
  $clinit_AssignmentRequestFactoryImpl = nullMethod;
  tokensToTypes = new HashMap_0;
  typesToTokens = new HashMap_0;
  entityProxyTypes = new HashSet_0;
  valueProxyTypes = new HashSet_0;
  tokensToTypes.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_15(entityProxyTypes, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes.put('nZbZVLrq3Nvi3xgPJFIvRwOnXEo=', Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit);
  typesToTokens.put(Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit, 'nZbZVLrq3Nvi3xgPJFIvRwOnXEo=');
  $add_15(entityProxyTypes, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit);
}

function AssignmentRequestFactoryImpl_0(){
  $clinit_AssignmentRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

function AssignmentRequestFactoryImpl(){
}

_ = AssignmentRequestFactoryImpl_0.prototype = AssignmentRequestFactoryImpl.prototype = new AbstractClientRequestFactory;
_.getClass$ = function getClass_796(){
  return Lcom_lemania_timetracking_shared_service_AssignmentRequestFactoryImpl_2_classLit;
}
;
_.getFactoryTypeToken = function getFactoryTypeToken(){
  return 'com.lemania.timetracking.shared.service.AssignmentRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken(typeToken){
  return dynamicCast(tokensToTypes.get_1(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_3(type){
  return dynamicCast(typesToTokens.get_1(type), Q$String);
}
;
_.isEntityType = function isEntityType_0(type){
  return $contains_1(entityProxyTypes, type);
}
;
_.isValueType = function isValueType_0(type){
  return $contains_1(valueProxyTypes, type);
}
;
var entityProxyTypes, tokensToTypes, typesToTokens, valueProxyTypes;
function $listAll(this$static, profId){
  var x;
  x = new AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$static, profId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function $saveAndReturn(this$static, courseId, profId){
  var x;
  x = new AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0(this$static, courseId, profId);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function AssignmentRequestFactory_AssignmentRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

function AssignmentRequestFactory_AssignmentRequestContextImpl(){
}

_ = AssignmentRequestFactory_AssignmentRequestContextImpl_0.prototype = AssignmentRequestFactory_AssignmentRequestContextImpl.prototype = new AbstractRequestContext;
_.getAutoBeanFactory = function getAutoBeanFactory(){
  return !FACTORY_0 && (FACTORY_0 = new AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0) , FACTORY_0;
}
;
_.getClass$ = function getClass_797(){
  return Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequestContext]);
var FACTORY_0 = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$0, val$profId){
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

function AssignmentRequestFactory_AssignmentRequestContextImpl$3X(){
}

_ = AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0.prototype = AssignmentRequestFactory_AssignmentRequestContextImpl$3X.prototype = new AbstractRequest;
_.getClass$ = function getClass_798(){
  return Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$3X_2_classLit;
}
;
_.makeRequestData = function makeRequestData(){
  return new RequestData_0('nXzBSZ9$tRbKBBgjUY2gRKt05FY=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$profId = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0(this$0, val$courseId, val$profId){
  this.val$courseId = val$courseId;
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

function AssignmentRequestFactory_AssignmentRequestContextImpl$8X(){
}

_ = AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0.prototype = AssignmentRequestFactory_AssignmentRequestContextImpl$8X.prototype = new AbstractRequest;
_.getClass$ = function getClass_799(){
  return Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$8X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_0(){
  return new RequestData_0('t4VxZpmpymI5EZBHunEw3I6vgq4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$courseId, this.val$profId]), this.propertyRefs, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$courseId = null;
_.val$profId = null;
function $getConstructors_com_lemania_timetracking_shared_AssignmentProxy(){
  return [function(factory){
    return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0(){
}

function AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl(){
}

_ = AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0.prototype = AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl.prototype = new AbstractAutoBeanFactory;
_.getClass$ = function getClass_800(){
  return Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_1FactoryImpl_2_classLit;
}
;
_.initializeCreatorMap = function initializeCreatorMap_0(map){
  $add_10(map, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_AssignmentProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_0(){
}
;
_.castableTypeMap$ = makeCastMap([Q$EnumMap]);
function ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$2X(){
}

_ = ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0.prototype = ProfessorRequestFactory_ProfessorRequestContextImpl$2X.prototype = new AbstractRequest;
_.getClass$ = function getClass_833(){
  return Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$2X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_17(){
  return new RequestData_0('BOpvP4Molsxs_uC9xiPbDEYeJZw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
function ProfessorRequestFactory_ProfessorRequestContextImpl$7X_0(this$0, val$newProf){
  this.val$newProf = val$newProf;
  AbstractRequest_0.call(this, this$0);
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$7X(){
}

_ = ProfessorRequestFactory_ProfessorRequestContextImpl$7X_0.prototype = ProfessorRequestFactory_ProfessorRequestContextImpl$7X.prototype = new AbstractRequest;
_.getClass$ = function getClass_837(){
  return Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$7X_2_classLit;
}
;
_.makeRequestData = function makeRequestData_21(){
  return new RequestData_0('yI87RsyoDsBZEvpUZqK4aITdDI8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProf]), this.propertyRefs, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit, null);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractRequest]);
_.val$newProf = null;
var Lcom_lemania_timetracking_client_presenter_ProfsPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter', Lcom_gwtplatform_mvp_client_Presenter_2_classLit), Lcom_lemania_timetracking_client_view_ProfsView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView', Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$1', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$2', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$3', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$4', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$5_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$5', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$6', Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit), Lcom_lemania_timetracking_client_view_ProfsView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$1', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ProfsView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$2', Lcom_google_gwt_user_cellview_client_Column_2_classLit), Lcom_lemania_timetracking_client_view_ProfsView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$3', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_ProfsView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$4', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_ProfsView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$5', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ProfsView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$6', Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.timetracking.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', Lcom_google_web_bindery_autobean_shared_impl_AbstractAutoBean_2_classLit), Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit = createForInterface('com.lemania.timetracking.shared.', 'AssignmentProxy'), Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.timetracking.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.timetracking.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', Ljava_lang_Object_2_classLit), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactoryImpl', Lcom_google_web_bindery_requestfactory_gwt_client_impl_AbstractClientRequestFactory_2_classLit), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext_2_classLit), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$3X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$8X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$8X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl', Lcom_google_web_bindery_autobean_gwt_client_impl_AbstractAutoBeanFactory_2_classLit), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$2X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$2X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$7X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$7X', Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit);
$entry(onLoad)(8);
