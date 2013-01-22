function $setKeyboardPagingPolicy(this$static, policy){
  $setKeyboardPagingPolicy_0(this$static.presenter, policy);
}

function $setKeyboardPagingPolicy_0(this$static, policy){
  if (!policy) {
    throw new NullPointerException_1('KeyboardPagingPolicy cannot be null');
  }
  this$static.keyboardPagingPolicy = policy;
}

function $addCourse(this$static, courseId, prof){
  var rc, rf;
  if (!courseId.length) {
    alert_0('Veuillez choisir un cours \xE0 rajouter.');
    return;
  }
  rf = new AssignmentRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new AssignmentRequestFactory_AssignmentRequestContextImpl_0(rf);
  $fire($saveAndReturn(rc, courseId, '' + toString_6(prof.getId_0().value_0)), new ProfsPresenter$5_0(this$static, prof));
}

function $addSchoolSelected(this$static, ecoleId){
  var rc, rf;
  $equals_3(ecoleId, '') && alert_0("Veuillez choisir l'\xE9cole.");
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

function $updateProfessorName(this$static, prof, name_0){
  var profForUpdate, rc, rf;
  if (!this$static.currentUser.isAdmin) {
    alert_0("Veuillez vous connecter avec le code d'acc\xE8s de l'administrateur. La modification n'a pas \xE9t\xE9 effectu\xE9e.");
    return;
  }
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  profForUpdate = dynamicCast($editProxy(rc, prof), Q$ProfessorProxy);
  profForUpdate.setProfName(name_0);
  $fire($saveAndReturn_2(rc, profForUpdate), new ProfsPresenter$7_0(this$static));
}

function $updateProfessorStatus(this$static, prof, status_0){
  var profForUpdate, rc, rf;
  if (!this$static.currentUser.isAdmin) {
    alert_0("Veuillez vous connecter avec le code d'acc\xE8s de l'administrateur. La modification n'a pas \xE9t\xE9 effectu\xE9e.");
    return;
  }
  rf = new ProfessorRequestFactoryImpl_0;
  $initialize(rf, this$static.eventBus, new EventSourceRequestTransport_0(this$static.eventBus));
  rc = new ProfessorRequestFactory_ProfessorRequestContextImpl_0(rf);
  profForUpdate = dynamicCast($editProxy(rc, prof), Q$ProfessorProxy);
  profForUpdate.setProfActive(status_0);
  $fire($saveAndReturn_2(rc, profForUpdate), new ProfsPresenter$3_0(this$static));
}

function ProfsPresenter_0(eventBus, view){
  PresenterWidget_0.call(this, eventBus, view);
}

defineSeed(792, 663, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$PresenterWidget, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$ProfsPresenter, Q$ProfessorListUiHandler]), ProfsPresenter_0);
_.onBind = function onBind_12(){
  dynamicCast(this.view, Q$ProfsPresenter$MyView).setUiHandlers(this);
  $initializeTable_3(dynamicCast(this.view, Q$ProfsPresenter$MyView));
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_5(event_0){
  this.currentUser = event_0.currentUser;
}
;
_.onReset = function onReset_6(){
  var rf, rc, x, rf_0, rc_0;
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
_.currentUser = null;
function $onSuccess_21(this$static, response){
  $setData_3(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(793, 602, makeCastMap([Q$Receiver]), ProfsPresenter$1_0);
_.onFailure_0 = function onFailure_21(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_21(response){
  $onSuccess_21(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_22(this$static, response){
  $setEcoleAddList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(794, 602, makeCastMap([Q$Receiver]), ProfsPresenter$2_0);
_.onFailure_0 = function onFailure_22(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_22(response){
  $onSuccess_22(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_23(this$static, response){
  $refreshTable_2(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(795, 602, makeCastMap([Q$Receiver]), ProfsPresenter$3_0);
_.onFailure_0 = function onFailure_23(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_23(response){
  $onSuccess_23(this, dynamicCast(response, Q$ProfessorProxy));
}
;
_.this$0 = null;
function $onSuccess_24(this$static, response){
  $setAssignmentList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(796, 602, makeCastMap([Q$Receiver]), ProfsPresenter$4_0);
_.onFailure_0 = function onFailure_24(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_24(response){
  $onSuccess_24(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function ProfsPresenter$5_0(this$0, val$prof){
  this.this$0 = this$0;
  this.val$prof = val$prof;
}

defineSeed(797, 602, makeCastMap([Q$Receiver]), ProfsPresenter$5_0);
_.onFailure_0 = function onFailure_25(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_25(response){
  !dynamicCast(response, Q$AssignmentProxy) && alert_0('D\xE9partment d\xE9j\xE0 existe dans la liste.');
  $professorSelected(this.this$0, this.val$prof);
}
;
_.this$0 = null;
_.val$prof = null;
function $onSuccess_25(this$static, response){
  $setCourseAddList(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(798, 602, makeCastMap([Q$Receiver]), ProfsPresenter$6_0);
_.onFailure_0 = function onFailure_26(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_26(response){
  $onSuccess_25(this, dynamicCast(response, Q$List));
}
;
_.this$0 = null;
function $onSuccess_26(this$static, response){
  $refreshTable_2(dynamicCast(this$static.this$0.view, Q$ProfsPresenter$MyView), response);
}

function ProfsPresenter$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(799, 602, makeCastMap([Q$Receiver]), ProfsPresenter$7_0);
_.onFailure_0 = function onFailure_27(error){
  alert_0(error.message_0);
}
;
_.onSuccess_0 = function onSuccess_27(response){
  $onSuccess_26(this, dynamicCast(response, Q$ProfessorProxy));
}
;
_.this$0 = null;
function $com$lemania$timetracking$client$presenter$ProfsPresenter_com$lemania$timetracking$client$presenter$ProfsPresenter_methodInjection(_0, _1){
  return new ProfsPresenter_0(_0, _1);
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$) {
    result = $com$lemania$timetracking$client$presenter$ProfsPresenter_com$lemania$timetracking$client$presenter$ProfsPresenter_methodInjection($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$;
}

defineSeed(854, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_47(){
  $onSuccess_0(this.val$callback, $get_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$(this.this$1.this$0));
}
;
function $initializeTable_3(this$static){
  var cellActive, colActive, colCourseName, colName, colSchoolName, nomCell, selectionModel;
  nomCell = new EditTextCell_0;
  colName = new ProfsView$1_0(nomCell);
  $addColumn(this$static.tblProfessors, colName, 'Nom');
  $setFieldUpdater(colName, new ProfsView$2_0(this$static));
  cellActive = new CheckboxCell_0;
  colActive = new ProfsView$3_0(cellActive);
  $addColumn(this$static.tblProfessors, colActive, 'Active');
  $setFieldUpdater(colActive, new ProfsView$4_0(this$static));
  selectionModel = new SingleSelectionModel_0;
  $setSelectionModel(this$static.tblProfessors, selectionModel);
  $addSelectionChangeHandler(selectionModel, new ProfsView$5_0(this$static, selectionModel));
  colSchoolName = new ProfsView$6_0;
  $addColumn(this$static.tblAssignment, colSchoolName, 'Ecole');
  colCourseName = new ProfsView$7_0;
  $addColumn(this$static.tblAssignment, colCourseName, 'Cours');
}

function $onCmdAddCourseClicked(this$static){
  !!this$static.uiHandlers && $addCourse(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), $getValue_1(this$static.lstAddCourse, this$static.lstAddCourse.element.selectedIndex), this$static.selectedProfessor);
}

function $onLstAddEcoleChanged(this$static){
  !!this$static.uiHandlers && $addSchoolSelected(dynamicCast(this$static.uiHandlers, Q$ProfessorListUiHandler), $getValue_1(this$static.lstAddEcole, this$static.lstAddEcole.element.selectedIndex));
}

function $refreshTable_2(this$static, prof){
  var profs;
  profs = new ArrayList_0;
  setCheck(profs.array, profs.size_0++, prof);
  $setRowData(this$static.tblProfessors, this$static.selectedProf, profs);
  $ensurePendingState(this$static.tblProfessors.presenter).redrawRequired = true;
}

function $setAssignmentList(this$static, assignments){
  $setRowData_0(this$static.tblAssignment, assignments);
  $setRowCount_0(this$static.tblAssignment, assignments.size_1(), true);
}

function $setCourseAddList(this$static, cours){
  var i;
  $selectClear(this$static.lstAddCourse.element);
  $insertItem(this$static.lstAddCourse, '-', '', -1);
  for (i = 0; i < cours.size_1(); ++i)
    $insertItem(this$static.lstAddCourse, dynamicCast(cours.get_0(i), Q$CoursProxy).getCoursNom(), '' + toString_6(dynamicCast(cours.get_0(i), Q$CoursProxy).getId_0().value_0), -1);
}

function $setData_3(this$static, profs){
  $setRowCount_0(this$static.tblProfessors, profs.size_1(), true);
  $setRowData(this$static.tblProfessors, 0, profs);
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
  this.widget = $build_f_HTMLPanel1_9(new ProfsView_BinderImpl$Widgets_0(this));
}

defineSeed(975, 668, makeCastMap([Q$ProfsPresenter$MyView]), ProfsView_0);
_.asWidget = function asWidget_12(){
  return this.widget;
}
;
_.lblProfNameAssign = null;
_.lstAddCourse = null;
_.lstAddEcole = null;
_.selectedProf = 0;
_.selectedProfessor = null;
_.widget = null;
function ProfsView$1_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(976, 348, makeCastMap([Q$HasCell, Q$Column]), ProfsView$1_0);
_.getValue = function getValue_9(object){
  return dynamicCast(object, Q$ProfessorProxy).getProfName();
}
;
function $update_6(this$static, index, prof, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedProf = index;
    $equals_3(prof.getProfName(), value) || $updateProfessorName(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), prof, value);
  }
}

function ProfsView$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(977, 1, {}, ProfsView$2_0);
_.update = function update_7(index, prof, value){
  $update_6(this, index, dynamicCast(prof, Q$ProfessorProxy), dynamicCast(value, Q$String));
}
;
_.this$0 = null;
function ProfsView$3_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(978, 348, makeCastMap([Q$HasCell, Q$Column]), ProfsView$3_0);
_.getValue = function getValue_10(ecole){
  return dynamicCast(ecole, Q$ProfessorProxy).getProfActive();
}
;
function $update_7(this$static, index, prof, value){
  if (this$static.this$0.uiHandlers) {
    this$static.this$0.selectedProf = index;
    $updateProfessorStatus(dynamicCast(this$static.this$0.uiHandlers, Q$ProfessorListUiHandler), prof, value);
  }
}

function ProfsView$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(979, 1, {}, ProfsView$4_0);
_.update = function update_8(index, prof, value){
  $update_7(this, index, dynamicCast(prof, Q$ProfessorProxy), dynamicCast(value, Q$Boolean));
}
;
_.this$0 = null;
function ProfsView$5_0(this$0, val$selectionModel){
  this.this$0 = this$0;
  this.val$selectionModel = val$selectionModel;
}

defineSeed(980, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), ProfsView$5_0);
_.onSelectionChange = function onSelectionChange_0(event_0){
  this.this$0.selectedProfessor = dynamicCast($getSelectedObject(this.val$selectionModel), Q$ProfessorProxy);
  if (this.this$0.selectedProfessor) {
    $setText_0(this.this$0.lblProfNameAssign, this.this$0.selectedProfessor.getProfName());
    $professorSelected(dynamicCast(this.this$0.uiHandlers, Q$ProfessorListUiHandler), this.this$0.selectedProfessor);
  }
}
;
_.this$0 = null;
_.val$selectionModel = null;
function ProfsView$6_0(){
  TextColumn_0.call(this);
}

defineSeed(981, 374, makeCastMap([Q$HasCell, Q$Column]), ProfsView$6_0);
_.getValue = function getValue_11(object){
  return dynamicCast(object, Q$AssignmentProxy).getSchoolName();
}
;
function ProfsView$7_0(){
  TextColumn_0.call(this);
}

defineSeed(982, 374, makeCastMap([Q$HasCell, Q$Column]), ProfsView$7_0);
_.getValue = function getValue_12(object){
  return dynamicCast(object, Q$AssignmentProxy).getCourseName();
}
;
function ProfsView_BinderImpl_0(){
}

defineSeed(983, 1, {}, ProfsView_BinderImpl_0);
function $build_f_HTMLPanel1_9(this$static){
  var attachRecord8, f_HTMLPanel1, f_VerticalPanel2, f_Label3, f_HorizontalPanel4, f_VerticalPanel5, f_VerticalPanel6, tblProfessors, lblProfNameAssign, f_Label7, f_Grid8, f_Label9, lstAddEcole, f_Label10, lstAddCourse, cmdAddCourse, sb, f_Label12, f_Label13, tblAssignment;
  f_HTMLPanel1 = new HTMLPanel_0($html2_0(this$static.domId0).html);
  f_HTMLPanel1.element.style['width'] = '100%';
  attachRecord8 = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  attachRecord8.origParent?$insertBefore(attachRecord8.origParent, attachRecord8.element, attachRecord8.origSibling):orphan(attachRecord8.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_VerticalPanel2 = new VerticalPanel_0 , $add_8(f_VerticalPanel2, (f_Label3 = new Label_0 , f_Label3.element['className'] = 'pageTitle' , $setTextOrHtml(f_Label3.directionalTextHelper, 'Liste de professeurs', false) , $updateHorizontalAlignment(f_Label3) , f_Label3)) , $add_8(f_VerticalPanel2, (f_HorizontalPanel4 = new HorizontalPanel_0 , $add_6(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel_0 , $add_8(f_VerticalPanel5, (tblProfessors = this$static.owner.tblProfessors , $setKeyboardPagingPolicy(tblProfessors, ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , INCREASE_RANGE)) , tblProfessors.element.style['height'] = '550px' , tblProfessors.element.style['width'] = '400px' , $setVisibleRange(tblProfessors, new Range_1($getVisibleRange(tblProfessors.presenter).start, 1000)) , $setKeyboardSelectionPolicy(tblProfessors, ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED)) , tblProfessors)) , f_VerticalPanel5.element.style['width'] = '400px' , f_VerticalPanel5)) , $add_6(f_HorizontalPanel4, (f_VerticalPanel6 = new VerticalPanel_0 , $add_8(f_VerticalPanel6, (lblProfNameAssign = new Label_0 , lblProfNameAssign.element['className'] = 'header' , this$static.owner.lblProfNameAssign = lblProfNameAssign , lblProfNameAssign)) , $add_8(f_VerticalPanel6, (f_Label7 = new Label_0 , f_Label7.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label7.directionalTextHelper, 'Rajouter un d\xE9partement', false) , $updateHorizontalAlignment(f_Label7) , f_Label7.element.style['width'] = '' , f_Label7)) , $add_8(f_VerticalPanel6, (f_Grid8 = new Grid_0 , $resizeColumns(f_Grid8, 2) , $resizeRows(f_Grid8, 3) , $setWidget_1(f_Grid8, 0, 0, (f_Label9 = new Label_0 , $setTextOrHtml(f_Label9.directionalTextHelper, 'Ecole :', false) , $updateHorizontalAlignment(f_Label9) , f_Label9.element.style['width'] = '' , f_Label9)) , $setWidget_1(f_Grid8, 0, 1, (lstAddEcole = new ListBox_0 , $addDomHandler(lstAddEcole, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this$static.owner.lstAddEcole = lstAddEcole , lstAddEcole)) , $setWidget_1(f_Grid8, 1, 0, (f_Label10 = new Label_0 , $setTextOrHtml(f_Label10.directionalTextHelper, 'Cours :', false) , $updateHorizontalAlignment(f_Label10) , f_Label10.element.style['width'] = '' , f_Label10)) , $setWidget_1(f_Grid8, 1, 1, (lstAddCourse = new ListBox_0 , this$static.owner.lstAddCourse = lstAddCourse , lstAddCourse)) , $setWidget_1(f_Grid8, 2, 0, new Label_0) , $setWidget_1(f_Grid8, 2, 1, (cmdAddCourse = new Button_0 , $setHTML(cmdAddCourse, (sb = new StringBuilder_0 , sb.impl.string += 'Ajouter' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html) , $addDomHandler(cmdAddCourse, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdAddCourse)) , f_Grid8.element['className'] = 'subSection' , f_Grid8.element.style['width'] = '100%' , f_Grid8)) , $add_8(f_VerticalPanel6, (f_Label12 = new Label_0 , $setTextOrHtml(f_Label12.directionalTextHelper, '.', false) , $updateHorizontalAlignment(f_Label12) , f_Label12)) , $add_8(f_VerticalPanel6, (f_Label13 = new Label_0 , f_Label13.element['className'] = 'sectionTitle' , $setTextOrHtml(f_Label13.directionalTextHelper, 'Liste des d\xE9partement assign\xE9s', false) , $updateHorizontalAlignment(f_Label13) , f_Label13)) , $add_8(f_VerticalPanel6, (tblAssignment = this$static.owner.tblAssignment , tblAssignment.element['className'] = 'subSection' , tblAssignment.element.style['height'] = '350PX' , tblAssignment.element.style['width'] = '400px' , tblAssignment)) , f_VerticalPanel6.element.style['width'] = '400px' , f_VerticalPanel6)) , f_HorizontalPanel4.element.style['width'] = '850px' , f_HorizontalPanel4)) , f_VerticalPanel2.element.style['width'] = '100%' , f_VerticalPanel2), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function ProfsView_BinderImpl$Widgets_0(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ProfsView_BinderImpl$Widgets$1_0(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ProfsView_BinderImpl$Widgets$2_0(this);
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement_0(this.domId0);
}

defineSeed(984, 1, {}, ProfsView_BinderImpl$Widgets_0);
_.domId0 = null;
_.domId0Element = null;
_.owner = null;
function ProfsView_BinderImpl$Widgets$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(985, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$1_0);
_.onClick = function onClick_26(event_0){
  $onCmdAddCourseClicked(this.this$1.owner);
}
;
_.this$1 = null;
function ProfsView_BinderImpl$Widgets$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(986, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ProfsView_BinderImpl$Widgets$2_0);
_.onChange = function onChange_2(event_0){
  $onLstAddEcoleChanged(this.this$1.owner);
}
;
_.this$1 = null;
function $html2_0(arg0){
  var sb;
  sb = new StringBuilder_0;
  sb.impl.string += "<span id='";
  $append_11(sb, htmlEscape(arg0));
  sb.impl.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

function $get_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$) {
    result = new ProfsView_0(new ProfsView_BinderImpl_0);
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$;
}

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

defineSeed(1051, 563, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_8(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_8(){
  return new AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
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

defineSeed(1052, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_28(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$AssignmentProxy).equals$(o);
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
_.this$0 = null;
function AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1053, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$AssignmentProxy]), AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_29(other){
  return equals_14(this.this$0, other);
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

defineSeed(1075, 597, {}, AssignmentRequestFactoryImpl_0);
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

defineSeed(1076, 607, makeCastMap([Q$AbstractRequestContext]), AssignmentRequestFactory_AssignmentRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory(){
  return !FACTORY_0 && (FACTORY_0 = new AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0) , FACTORY_0;
}
;
var FACTORY_0 = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0(this$0, val$profId){
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1077, 606, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData(){
  return new RequestData_0('nXzBSZ9$tRbKBBgjUY2gRKt05FY=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$profId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit);
}
;
_.val$profId = null;
function AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0(this$0, val$courseId, val$profId){
  this.val$courseId = val$courseId;
  this.val$profId = val$profId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1078, 606, makeCastMap([Q$AbstractRequest]), AssignmentRequestFactory_AssignmentRequestContextImpl$8X_0);
_.makeRequestData = function makeRequestData_0(){
  return new RequestData_0('t4VxZpmpymI5EZBHunEw3I6vgq4=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$courseId, this.val$profId]), this.propertyRefs, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit, null);
}
;
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

defineSeed(1079, 535, makeCastMap([Q$EnumMap]), AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_0(map){
  $add_10(map, Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_AssignmentProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_0(){
}
;
function $saveAndReturn_2(this$static, newProf){
  var x;
  x = new ProfessorRequestFactory_ProfessorRequestContextImpl$7X_0(this$static, newProf);
  $addInvocation(this$static.state.dialect, x);
  return x;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1110, 606, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_15(){
  return new RequestData_0('BOpvP4Molsxs_uC9xiPbDEYeJZw=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
function ProfessorRequestFactory_ProfessorRequestContextImpl$7X_0(this$0, val$newProf){
  this.val$newProf = val$newProf;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1114, 606, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$7X_0);
_.makeRequestData = function makeRequestData_19(){
  return new RequestData_0('yI87RsyoDsBZEvpUZqK4aITdDI8=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$newProf]), this.propertyRefs, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit, null);
}
;
_.val$newProf = null;
var Lcom_lemania_timetracking_client_presenter_ProfsPresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter', 792), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$1', 793), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$2', 794), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$3', 795), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$4', 796), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$5_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$5', 797), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$6', 798), Lcom_lemania_timetracking_client_presenter_ProfsPresenter$7_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'ProfsPresenter$7', 799), Lcom_lemania_timetracking_client_view_ProfsView_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView', 975), Lcom_lemania_timetracking_client_view_ProfsView$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$1', 976), Lcom_lemania_timetracking_client_view_ProfsView$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$2', 977), Lcom_lemania_timetracking_client_view_ProfsView$3_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$3', 978), Lcom_lemania_timetracking_client_view_ProfsView$4_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$4', 979), Lcom_lemania_timetracking_client_view_ProfsView$5_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$5', 980), Lcom_lemania_timetracking_client_view_ProfsView$6_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$6', 981), Lcom_lemania_timetracking_client_view_ProfsView$7_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView$7', 982), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl', 983), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl$Widgets', 984), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl$Widgets$1', 985), Lcom_lemania_timetracking_client_view_ProfsView_1BinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view.', 'ProfsView_BinderImpl$Widgets$2', 986), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$2X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$2X', 1110), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$7X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$7X', 1114), Lcom_lemania_timetracking_shared_AssignmentProxy_2_classLit = createForInterface('com.lemania.timetracking.shared.', 'AssignmentProxy'), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactoryImpl', 1075), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl', 1076), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$3X', 1077), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl$8X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl$8X', 1078), Lcom_lemania_timetracking_shared_service_AssignmentRequestFactory_1AssignmentRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'AssignmentRequestFactory_AssignmentRequestContextImpl_FactoryImpl', 1079), Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.timetracking.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1051), Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.timetracking.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1052), Lcom_lemania_timetracking_shared_AssignmentProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.timetracking.shared.', 'AssignmentProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1053);
$entry(onLoad)(9);
