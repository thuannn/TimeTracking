var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.timetracking;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'DC8393C9CE91946E18D1973C592371B1';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = 3.141592653589793, $intern_2 = {3:1, 4:1}, $intern_3 = {3:1, 42:1, 21:1, 20:1}, $intern_4 = {3:1}, $intern_5 = {49:1, 28:1, 3:1, 11:1, 7:1}, $intern_6 = {28:1, 132:1, 3:1, 11:1, 7:1}, $intern_7 = {28:1, 133:1, 3:1, 11:1, 7:1}, $intern_8 = {28:1, 134:1, 3:1, 11:1, 7:1}, $intern_9 = {82:1, 3:1, 11:1, 7:1}, $intern_10 = {28:1, 189:1, 3:1, 11:1, 7:1}, $intern_11 = 1285, $intern_12 = {9:1}, $intern_13 = {131:1, 3:1, 42:1, 21:1, 20:1}, $intern_14 = 4194303, $intern_15 = 1048575, $intern_16 = 4194304, $intern_17 = 17592186044416, $intern_18 = -9223372036854775808, $intern_19 = 524288, $intern_20 = {247:1, 3:1}, $intern_21 = {33:1, 32:1}, $intern_22 = {36:1, 9:1, 34:1, 33:1, 15:1, 32:1, 25:1}, $intern_23 = 16384, $intern_24 = 131072, $intern_25 = 1048576, $intern_26 = 16777216, $intern_27 = 33554432, $intern_28 = 67108864, $intern_29 = {36:1, 9:1, 34:1, 33:1, 70:1, 15:1, 32:1, 25:1, 26:1}, $intern_30 = {36:1, 9:1, 34:1, 104:1, 108:1, 124:1, 33:1, 15:1, 32:1, 25:1}, $intern_31 = {36:1, 9:1, 34:1, 33:1, 70:1, 15:1, 142:1, 32:1, 25:1, 26:1}, $intern_32 = {367:1, 6:1}, $intern_33 = {36:1, 9:1, 34:1, 33:1, 70:1, 15:1, 240:1, 32:1, 25:1, 26:1}, $intern_34 = {1261:1, 6:1}, $intern_35 = {58:1}, $intern_36 = {3:1, 162:1, 20:1}, $intern_37 = {26:1, 37:1}, $intern_38 = 1280, $intern_39 = {26:1, 37:1, 59:1}, $intern_40 = 1281, $intern_41 = {26:1, 37:1, 16:1}, $intern_42 = {56:1}, $intern_43 = {3:1, 56:1}, $intern_44 = {9:1, 15:1, 57:1}, $intern_45 = 1288, $intern_46 = {72:1, 167:1}, $intern_47 = {366:1, 6:1, 9:1, 1259:1}, $intern_48 = 1287, $intern_49 = {9:1, 80:1, 72:1}, $intern_50 = {6:1, 101:1}, $intern_51 = {9:1, 46:1, 80:1, 72:1}, $intern_52 = {9:1, 46:1}, $intern_53 = {6:1, 9:1, 46:1, 80:1, 72:1, 1247:1}, $intern_54 = {6:1, 9:1, 46:1, 80:1, 72:1, 1249:1}, $intern_55 = {6:1, 9:1, 46:1, 80:1, 72:1, 101:1}, $intern_56 = {6:1, 9:1, 46:1, 80:1, 72:1, 1258:1}, $intern_57 = {6:1, 9:1, 15:1, 57:1, 301:1, 1252:1, 101:1, 206:1, 96:1}, $intern_58 = {6:1, 9:1, 46:1, 301:1, 1252:1, 101:1}, $intern_59 = {6:1, 9:1, 46:1, 80:1, 72:1, 301:1, 1256:1, 101:1, 1255:1}, $intern_60 = {81:1}, $intern_61 = {47:1, 6:1}, $intern_62 = {3:1, 42:1, 52:1, 21:1, 20:1}, $intern_63 = {3:1, 42:1, 21:1, 20:1, 51:1}, $intern_64 = {58:1, 116:1}, $intern_65 = {39:1}, $intern_66 = {3:1, 26:1, 37:1, 16:1}, $intern_67 = {3:1, 26:1, 37:1, 59:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals_3(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_1(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 1320:1, 11:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  clazz.enumConstantsFunc = enumConstantsFunc;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(74, 1, {74:1, 1344:1}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_45(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 74);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.onCancel();
}

function $run(this$static, duration, startTime, element){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  this$static.element = element;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $run_0(this$static, duration, element){
  $run(this$static, duration, now_1(), element);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate((1 + Math.cos($intern_1 + progress * $intern_1)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.onStart();
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.onComplete();
    return false;
  }
  return true;
}

function Animation(){
  Animation_0.call(this, (!instance_0 && (instance_0 = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance_0));
}

function Animation_0(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(238, 1, {});
_.onCancel = function onCancel(){
  this.wasStarted && this.onComplete();
}
;
_.onComplete = function onComplete(){
  this.onUpdate((1 + cos_0(6.283185307179586)) / 2);
}
;
_.onStart = function onStart(){
  this.onUpdate((1 + cos_0($intern_1)) / 2);
}
;
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 238);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(929, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 929);
defineClass(1294, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 1294);
defineClass(279, 1, {279:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 279);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(968, 1294, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 968);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(969, 279, {279:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 969);
function $cancelAnimationFrame(this$static, requestId){
  $remove_17(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {1339:1, 3:1, 4:1}, 282, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray_0(this$static.animationRequests, curAnimations), 1339);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_17(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(970, 1294, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_16(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 970);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_1(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(278, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 278);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(971, 278, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 971);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(282, 279, {279:1, 282:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 282);
function $set(this$static, element){
  $setAttribute(element, 'role', this$static.roleName);
}

function RoleImpl(roleName){
  this.roleName = roleName;
}

defineClass(22, 1, {});
var Lcom_google_gwt_aria_client_RoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RoleImpl', 22);
function AlertRoleImpl(){
  RoleImpl.call(this, 'alert');
}

defineClass(1000, 22, {}, AlertRoleImpl);
var Lcom_google_gwt_aria_client_AlertRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertRoleImpl', 1000);
function AlertdialogRoleImpl(){
  RoleImpl.call(this, 'alertdialog');
}

defineClass(999, 22, {}, AlertdialogRoleImpl);
var Lcom_google_gwt_aria_client_AlertdialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertdialogRoleImpl', 999);
function ApplicationRoleImpl(){
  RoleImpl.call(this, 'application');
}

defineClass(1001, 22, {}, ApplicationRoleImpl);
var Lcom_google_gwt_aria_client_ApplicationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ApplicationRoleImpl', 1001);
function $getAriaValue(this$static, value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_4($append_4(buf, this$static.getSingleValue(item_0)), ' ');
  }
  return $trim(buf.string);
}

function $remove(this$static, element){
  $removeAttribute(element, this$static.name_0);
}

function $set_0(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(this$static, values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(356, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 356);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(95, 356, {}, AriaValueAttribute);
_.getSingleValue = function getSingleValue(value_0){
  return dynamicCast(value_0, 371).getAriaValue();
}
;
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 95);
function ArticleRoleImpl(){
  RoleImpl.call(this, 'article');
}

defineClass(1002, 22, {}, ArticleRoleImpl);
var Lcom_google_gwt_aria_client_ArticleRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ArticleRoleImpl', 1002);
function BannerRoleImpl(){
  RoleImpl.call(this, 'banner');
}

defineClass(1003, 22, {}, BannerRoleImpl);
var Lcom_google_gwt_aria_client_BannerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'BannerRoleImpl', 1003);
function ButtonRoleImpl(){
  RoleImpl.call(this, 'button');
}

defineClass(1004, 22, {}, ButtonRoleImpl);
var Lcom_google_gwt_aria_client_ButtonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ButtonRoleImpl', 1004);
function CheckboxRoleImpl(){
  RoleImpl.call(this, 'checkbox');
}

defineClass(1005, 22, {}, CheckboxRoleImpl);
var Lcom_google_gwt_aria_client_CheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'CheckboxRoleImpl', 1005);
function ColumnheaderRoleImpl(){
  RoleImpl.call(this, 'columnheader');
}

defineClass(1006, 22, {}, ColumnheaderRoleImpl);
var Lcom_google_gwt_aria_client_ColumnheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ColumnheaderRoleImpl', 1006);
function ComboboxRoleImpl(){
  RoleImpl.call(this, 'combobox');
}

defineClass(1007, 22, {}, ComboboxRoleImpl);
var Lcom_google_gwt_aria_client_ComboboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComboboxRoleImpl', 1007);
function ComplementaryRoleImpl(){
  RoleImpl.call(this, 'complementary');
}

defineClass(1008, 22, {}, ComplementaryRoleImpl);
var Lcom_google_gwt_aria_client_ComplementaryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComplementaryRoleImpl', 1008);
function ContentinfoRoleImpl(){
  RoleImpl.call(this, 'contentinfo');
}

defineClass(1009, 22, {}, ContentinfoRoleImpl);
var Lcom_google_gwt_aria_client_ContentinfoRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ContentinfoRoleImpl', 1009);
function DefinitionRoleImpl(){
  RoleImpl.call(this, 'definition');
}

defineClass(1010, 22, {}, DefinitionRoleImpl);
var Lcom_google_gwt_aria_client_DefinitionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DefinitionRoleImpl', 1010);
function DialogRoleImpl(){
  RoleImpl.call(this, 'dialog');
}

defineClass(1011, 22, {}, DialogRoleImpl);
var Lcom_google_gwt_aria_client_DialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DialogRoleImpl', 1011);
function DirectoryRoleImpl(){
  RoleImpl.call(this, 'directory');
}

defineClass(1012, 22, {}, DirectoryRoleImpl);
var Lcom_google_gwt_aria_client_DirectoryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DirectoryRoleImpl', 1012);
function DocumentRoleImpl(){
  RoleImpl.call(this, 'document');
}

defineClass(1013, 22, {}, DocumentRoleImpl);
var Lcom_google_gwt_aria_client_DocumentRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DocumentRoleImpl', 1013);
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(7, 1, {3:1, 11:1, 7:1});
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_1(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 7);
function $clinit_ExpandedValue(){
  $clinit_ExpandedValue = emptyMethod;
  TRUE = new ExpandedValue('TRUE', 0);
  FALSE = new ExpandedValue('FALSE', 1);
  UNDEFINED = new ExpandedValue('UNDEFINED', 2);
}

function ExpandedValue(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_ExpandedValue();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_ExpandedValue_2_classLit, 1), $intern_2, 196, 0, [TRUE, FALSE, UNDEFINED]);
}

defineClass(196, 7, {371:1, 196:1, 3:1, 11:1, 7:1}, ExpandedValue);
_.getAriaValue = function getAriaValue(){
  switch (this.ordinal) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'undefined';
  }
  return null;
}
;
var FALSE, TRUE, UNDEFINED;
var Lcom_google_gwt_aria_client_ExpandedValue_2_classLit = createForEnum('com.google.gwt.aria.client', 'ExpandedValue', 196, Ljava_lang_Enum_2_classLit, values_0);
function FormRoleImpl(){
  RoleImpl.call(this, 'form');
}

defineClass(1014, 22, {}, FormRoleImpl);
var Lcom_google_gwt_aria_client_FormRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'FormRoleImpl', 1014);
function GridRoleImpl(){
  RoleImpl.call(this, 'grid');
}

defineClass(1016, 22, {}, GridRoleImpl);
var Lcom_google_gwt_aria_client_GridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridRoleImpl', 1016);
function GridcellRoleImpl(){
  RoleImpl.call(this, 'gridcell');
}

defineClass(1015, 22, {}, GridcellRoleImpl);
var Lcom_google_gwt_aria_client_GridcellRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridcellRoleImpl', 1015);
function GroupRoleImpl(){
  RoleImpl.call(this, 'group');
}

defineClass(1017, 22, {}, GroupRoleImpl);
var Lcom_google_gwt_aria_client_GroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GroupRoleImpl', 1017);
function HeadingRoleImpl(){
  RoleImpl.call(this, 'heading');
}

defineClass(1018, 22, {}, HeadingRoleImpl);
var Lcom_google_gwt_aria_client_HeadingRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'HeadingRoleImpl', 1018);
function $init(this$static, elementId){
  this$static.id_0 = elementId;
}

function Id(element){
  $init(this, element.id);
}

defineClass(283, 1, {371:1, 283:1}, Id);
_.getAriaValue = function getAriaValue_0(){
  return this.id_0;
}
;
var Lcom_google_gwt_aria_client_Id_2_classLit = createForClass('com.google.gwt.aria.client', 'Id', 283);
function ImgRoleImpl(){
  RoleImpl.call(this, 'img');
}

defineClass(1019, 22, {}, ImgRoleImpl);
var Lcom_google_gwt_aria_client_ImgRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ImgRoleImpl', 1019);
function LinkRoleImpl(){
  RoleImpl.call(this, 'link');
}

defineClass(1020, 22, {}, LinkRoleImpl);
var Lcom_google_gwt_aria_client_LinkRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LinkRoleImpl', 1020);
function ListRoleImpl(){
  RoleImpl.call(this, 'list');
}

defineClass(1023, 22, {}, ListRoleImpl);
var Lcom_google_gwt_aria_client_ListRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListRoleImpl', 1023);
function ListboxRoleImpl(){
  RoleImpl.call(this, 'listbox');
}

defineClass(1021, 22, {}, ListboxRoleImpl);
var Lcom_google_gwt_aria_client_ListboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListboxRoleImpl', 1021);
function ListitemRoleImpl(){
  RoleImpl.call(this, 'listitem');
}

defineClass(1022, 22, {}, ListitemRoleImpl);
var Lcom_google_gwt_aria_client_ListitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListitemRoleImpl', 1022);
function LogRoleImpl(){
  RoleImpl.call(this, 'log');
}

defineClass(1024, 22, {}, LogRoleImpl);
var Lcom_google_gwt_aria_client_LogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LogRoleImpl', 1024);
function MainRoleImpl(){
  RoleImpl.call(this, 'main');
}

defineClass(1025, 22, {}, MainRoleImpl);
var Lcom_google_gwt_aria_client_MainRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MainRoleImpl', 1025);
function MarqueeRoleImpl(){
  RoleImpl.call(this, 'marquee');
}

defineClass(1026, 22, {}, MarqueeRoleImpl);
var Lcom_google_gwt_aria_client_MarqueeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MarqueeRoleImpl', 1026);
function MathRoleImpl(){
  RoleImpl.call(this, 'math');
}

defineClass(1027, 22, {}, MathRoleImpl);
var Lcom_google_gwt_aria_client_MathRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MathRoleImpl', 1027);
function MenuRoleImpl(){
  RoleImpl.call(this, 'menu');
}

defineClass(1032, 22, {}, MenuRoleImpl);
var Lcom_google_gwt_aria_client_MenuRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuRoleImpl', 1032);
function MenubarRoleImpl(){
  RoleImpl.call(this, 'menubar');
}

defineClass(1028, 22, {}, MenubarRoleImpl);
var Lcom_google_gwt_aria_client_MenubarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenubarRoleImpl', 1028);
function MenuitemRoleImpl(){
  RoleImpl.call(this, 'menuitem');
}

defineClass(1031, 22, {}, MenuitemRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemRoleImpl', 1031);
function MenuitemcheckboxRoleImpl(){
  RoleImpl.call(this, 'menuitemcheckbox');
}

defineClass(1029, 22, {}, MenuitemcheckboxRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemcheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemcheckboxRoleImpl', 1029);
function MenuitemradioRoleImpl(){
  RoleImpl.call(this, 'menuitemradio');
}

defineClass(1030, 22, {}, MenuitemradioRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemradioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemradioRoleImpl', 1030);
function NavigationRoleImpl(){
  RoleImpl.call(this, 'navigation');
}

defineClass(1033, 22, {}, NavigationRoleImpl);
var Lcom_google_gwt_aria_client_NavigationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NavigationRoleImpl', 1033);
function NoteRoleImpl(){
  RoleImpl.call(this, 'note');
}

defineClass(1034, 22, {}, NoteRoleImpl);
var Lcom_google_gwt_aria_client_NoteRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NoteRoleImpl', 1034);
function OptionRoleImpl(){
  RoleImpl.call(this, 'option');
}

defineClass(1035, 22, {}, OptionRoleImpl);
var Lcom_google_gwt_aria_client_OptionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'OptionRoleImpl', 1035);
function PresentationRoleImpl(){
  RoleImpl.call(this, 'presentation');
}

defineClass(1036, 22, {}, PresentationRoleImpl);
var Lcom_google_gwt_aria_client_PresentationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'PresentationRoleImpl', 1036);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(100, 356, {}, PrimitiveValueAttribute);
_.getSingleValue = function getSingleValue_0(value_0){
  return '' + value_0;
}
;
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 100);
function ProgressbarRoleImpl(){
  RoleImpl.call(this, 'progressbar');
}

defineClass(1037, 22, {}, ProgressbarRoleImpl);
var Lcom_google_gwt_aria_client_ProgressbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ProgressbarRoleImpl', 1037);
function $clinit_Property(){
  $clinit_Property = emptyMethod;
  ACTIVEDESCENDANT = new AriaValueAttribute('aria-activedescendant');
  new PrimitiveValueAttribute('aria-atomic');
  new AriaValueAttribute('aria-autocomplete');
  new AriaValueAttribute('aria-controls');
  new AriaValueAttribute('aria-describedby');
  new AriaValueAttribute('aria-dropeffect');
  new AriaValueAttribute('aria-flowto');
  new PrimitiveValueAttribute('aria-haspopup');
  new PrimitiveValueAttribute('aria-label');
  new AriaValueAttribute('aria-labelledby');
  LEVEL = new PrimitiveValueAttribute('aria-level');
  new AriaValueAttribute('aria-live');
  new PrimitiveValueAttribute('aria-multiline');
  new PrimitiveValueAttribute('aria-multiselectable');
  new AriaValueAttribute('aria-orientation');
  new AriaValueAttribute('aria-owns');
  POSINSET = new PrimitiveValueAttribute('aria-posinset');
  new PrimitiveValueAttribute('aria-readonly');
  new AriaValueAttribute('aria-relevant');
  new PrimitiveValueAttribute('aria-required');
  SETSIZE = new PrimitiveValueAttribute('aria-setsize');
  new AriaValueAttribute('aria-sort');
  new PrimitiveValueAttribute('aria-valuemax');
  new PrimitiveValueAttribute('aria-valuemin');
  new PrimitiveValueAttribute('aria-valuenow');
  new PrimitiveValueAttribute('aria-valuetext');
}

var ACTIVEDESCENDANT, LEVEL, POSINSET, SETSIZE;
function RadioRoleImpl(){
  RoleImpl.call(this, 'radio');
}

defineClass(1039, 22, {}, RadioRoleImpl);
var Lcom_google_gwt_aria_client_RadioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadioRoleImpl', 1039);
function RadiogroupRoleImpl(){
  RoleImpl.call(this, 'radiogroup');
}

defineClass(1038, 22, {}, RadiogroupRoleImpl);
var Lcom_google_gwt_aria_client_RadiogroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadiogroupRoleImpl', 1038);
function RegionRoleImpl(){
  RoleImpl.call(this, 'region');
}

defineClass(1040, 22, {}, RegionRoleImpl);
var Lcom_google_gwt_aria_client_RegionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RegionRoleImpl', 1040);
function $clinit_Roles(){
  $clinit_Roles = emptyMethod;
  ALERTDIALOG = new AlertdialogRoleImpl;
  ALERT = new AlertRoleImpl;
  APPLICATION = new ApplicationRoleImpl;
  ARTICLE = new ArticleRoleImpl;
  BANNER = new BannerRoleImpl;
  BUTTON = new ButtonRoleImpl;
  CHECKBOX = new CheckboxRoleImpl;
  COLUMNHEADER = new ColumnheaderRoleImpl;
  COMBOBOX = new ComboboxRoleImpl;
  COMPLEMENTARY = new ComplementaryRoleImpl;
  CONTENTINFO = new ContentinfoRoleImpl;
  DEFINITION = new DefinitionRoleImpl;
  DIALOG = new DialogRoleImpl;
  DIRECTORY = new DirectoryRoleImpl;
  DOCUMENT = new DocumentRoleImpl;
  FORM = new FormRoleImpl;
  GRIDCELL = new GridcellRoleImpl;
  GRID = new GridRoleImpl;
  GROUP = new GroupRoleImpl;
  HEADING = new HeadingRoleImpl;
  IMG = new ImgRoleImpl;
  LINK = new LinkRoleImpl;
  LISTBOX = new ListboxRoleImpl;
  LISTITEM = new ListitemRoleImpl;
  LIST = new ListRoleImpl;
  LOG = new LogRoleImpl;
  MAIN = new MainRoleImpl;
  MARQUEE = new MarqueeRoleImpl;
  MATH = new MathRoleImpl;
  MENUBAR = new MenubarRoleImpl;
  MENUITEMCHECKBOX = new MenuitemcheckboxRoleImpl;
  MENUITEMRADIO = new MenuitemradioRoleImpl;
  MENUITEM = new MenuitemRoleImpl;
  MENU = new MenuRoleImpl;
  NAVIGATION = new NavigationRoleImpl;
  NOTE = new NoteRoleImpl;
  OPTION = new OptionRoleImpl;
  PRESENTATION = new PresentationRoleImpl;
  PROGRESSBAR = new ProgressbarRoleImpl;
  RADIOGROUP = new RadiogroupRoleImpl;
  RADIO = new RadioRoleImpl;
  REGION = new RegionRoleImpl;
  ROWGROUP = new RowgroupRoleImpl;
  ROWHEADER = new RowheaderRoleImpl;
  ROW = new RowRoleImpl;
  SCROLLBAR = new ScrollbarRoleImpl;
  SEARCH = new SearchRoleImpl;
  SEPARATOR = new SeparatorRoleImpl;
  SLIDER = new SliderRoleImpl;
  SPINBUTTON = new SpinbuttonRoleImpl;
  STATUS = new StatusRoleImpl;
  TABLIST = new TablistRoleImpl;
  TABPANEL = new TabpanelRoleImpl;
  TAB = new TabRoleImpl;
  TEXTBOX = new TextboxRoleImpl;
  TIMER = new TimerRoleImpl;
  TOOLBAR = new ToolbarRoleImpl;
  TOOLTIP = new TooltipRoleImpl;
  TREEGRID = new TreegridRoleImpl;
  TREEITEM = new TreeitemRoleImpl;
  TREE = new TreeRoleImpl;
  ROLES_MAP = new HashMap;
  ROLES_MAP.put('region', REGION);
  ROLES_MAP.put('alert', ALERT);
  ROLES_MAP.put('dialog', DIALOG);
  ROLES_MAP.put('alertdialog', ALERTDIALOG);
  ROLES_MAP.put('application', APPLICATION);
  ROLES_MAP.put('document', DOCUMENT);
  ROLES_MAP.put('article', ARTICLE);
  ROLES_MAP.put('banner', BANNER);
  ROLES_MAP.put('button', BUTTON);
  ROLES_MAP.put('checkbox', CHECKBOX);
  ROLES_MAP.put('gridcell', GRIDCELL);
  ROLES_MAP.put('columnheader', COLUMNHEADER);
  ROLES_MAP.put('group', GROUP);
  ROLES_MAP.put('combobox', COMBOBOX);
  ROLES_MAP.put('complementary', COMPLEMENTARY);
  ROLES_MAP.put('contentinfo', CONTENTINFO);
  ROLES_MAP.put('definition', DEFINITION);
  ROLES_MAP.put('list', LIST);
  ROLES_MAP.put('directory', DIRECTORY);
  ROLES_MAP.put('form', FORM);
  ROLES_MAP.put('grid', GRID);
  ROLES_MAP.put('heading', HEADING);
  ROLES_MAP.put('img', IMG);
  ROLES_MAP.put('link', LINK);
  ROLES_MAP.put('listbox', LISTBOX);
  ROLES_MAP.put('listitem', LISTITEM);
  ROLES_MAP.put('log', LOG);
  ROLES_MAP.put('main', MAIN);
  ROLES_MAP.put('marquee', MARQUEE);
  ROLES_MAP.put('math', MATH);
  ROLES_MAP.put('menu', MENU);
  ROLES_MAP.put('menubar', MENUBAR);
  ROLES_MAP.put('menuitem', MENUITEM);
  ROLES_MAP.put('menuitemcheckbox', MENUITEMCHECKBOX);
  ROLES_MAP.put('option', OPTION);
  ROLES_MAP.put('radio', RADIO);
  ROLES_MAP.put('menuitemradio', MENUITEMRADIO);
  ROLES_MAP.put('navigation', NAVIGATION);
  ROLES_MAP.put('note', NOTE);
  ROLES_MAP.put('presentation', PRESENTATION);
  ROLES_MAP.put('progressbar', PROGRESSBAR);
  ROLES_MAP.put('radiogroup', RADIOGROUP);
  ROLES_MAP.put('row', ROW);
  ROLES_MAP.put('rowgroup', ROWGROUP);
  ROLES_MAP.put('rowheader', ROWHEADER);
  ROLES_MAP.put('search', SEARCH);
  ROLES_MAP.put('separator', SEPARATOR);
  ROLES_MAP.put('scrollbar', SCROLLBAR);
  ROLES_MAP.put('slider', SLIDER);
  ROLES_MAP.put('spinbutton', SPINBUTTON);
  ROLES_MAP.put('status', STATUS);
  ROLES_MAP.put('tab', TAB);
  ROLES_MAP.put('tablist', TABLIST);
  ROLES_MAP.put('tabpanel', TABPANEL);
  ROLES_MAP.put('textbox', TEXTBOX);
  ROLES_MAP.put('timer', TIMER);
  ROLES_MAP.put('toolbar', TOOLBAR);
  ROLES_MAP.put('tooltip', TOOLTIP);
  ROLES_MAP.put('tree', TREE);
  ROLES_MAP.put('treegrid', TREEGRID);
  ROLES_MAP.put('treeitem', TREEITEM);
}

var ALERT, ALERTDIALOG, APPLICATION, ARTICLE, BANNER, BUTTON, CHECKBOX, COLUMNHEADER, COMBOBOX, COMPLEMENTARY, CONTENTINFO, DEFINITION, DIALOG, DIRECTORY, DOCUMENT, FORM, GRID, GRIDCELL, GROUP, HEADING, IMG, LINK, LIST, LISTBOX, LISTITEM, LOG, MAIN, MARQUEE, MATH, MENU, MENUBAR, MENUITEM, MENUITEMCHECKBOX, MENUITEMRADIO, NAVIGATION, NOTE, OPTION, PRESENTATION, PROGRESSBAR, RADIO, RADIOGROUP, REGION, ROLES_MAP, ROW, ROWGROUP, ROWHEADER, SCROLLBAR, SEARCH, SEPARATOR, SLIDER, SPINBUTTON, STATUS, TAB, TABLIST, TABPANEL, TEXTBOX, TIMER, TOOLBAR, TOOLTIP, TREE, TREEGRID, TREEITEM;
function RowRoleImpl(){
  RoleImpl.call(this, 'row');
}

defineClass(1043, 22, {}, RowRoleImpl);
var Lcom_google_gwt_aria_client_RowRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowRoleImpl', 1043);
function RowgroupRoleImpl(){
  RoleImpl.call(this, 'rowgroup');
}

defineClass(1041, 22, {}, RowgroupRoleImpl);
var Lcom_google_gwt_aria_client_RowgroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowgroupRoleImpl', 1041);
function RowheaderRoleImpl(){
  RoleImpl.call(this, 'rowheader');
}

defineClass(1042, 22, {}, RowheaderRoleImpl);
var Lcom_google_gwt_aria_client_RowheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowheaderRoleImpl', 1042);
function ScrollbarRoleImpl(){
  RoleImpl.call(this, 'scrollbar');
}

defineClass(1044, 22, {}, ScrollbarRoleImpl);
var Lcom_google_gwt_aria_client_ScrollbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ScrollbarRoleImpl', 1044);
function SearchRoleImpl(){
  RoleImpl.call(this, 'search');
}

defineClass(1045, 22, {}, SearchRoleImpl);
var Lcom_google_gwt_aria_client_SearchRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SearchRoleImpl', 1045);
function $clinit_SelectedValue(){
  $clinit_SelectedValue = emptyMethod;
  TRUE_0 = new SelectedValue('TRUE', 0);
  FALSE_0 = new SelectedValue('FALSE', 1);
  UNDEFINED_0 = new SelectedValue('UNDEFINED', 2);
}

function SelectedValue(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_SelectedValue();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_SelectedValue_2_classLit, 1), $intern_2, 197, 0, [TRUE_0, FALSE_0, UNDEFINED_0]);
}

defineClass(197, 7, {371:1, 197:1, 3:1, 11:1, 7:1}, SelectedValue);
_.getAriaValue = function getAriaValue_1(){
  switch (this.ordinal) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'undefined';
  }
  return null;
}
;
var FALSE_0, TRUE_0, UNDEFINED_0;
var Lcom_google_gwt_aria_client_SelectedValue_2_classLit = createForEnum('com.google.gwt.aria.client', 'SelectedValue', 197, Ljava_lang_Enum_2_classLit, values_1);
function SeparatorRoleImpl(){
  RoleImpl.call(this, 'separator');
}

defineClass(1046, 22, {}, SeparatorRoleImpl);
var Lcom_google_gwt_aria_client_SeparatorRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SeparatorRoleImpl', 1046);
function SliderRoleImpl(){
  RoleImpl.call(this, 'slider');
}

defineClass(1047, 22, {}, SliderRoleImpl);
var Lcom_google_gwt_aria_client_SliderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SliderRoleImpl', 1047);
function SpinbuttonRoleImpl(){
  RoleImpl.call(this, 'spinbutton');
}

defineClass(1048, 22, {}, SpinbuttonRoleImpl);
var Lcom_google_gwt_aria_client_SpinbuttonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SpinbuttonRoleImpl', 1048);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  EXPANDED = new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  HIDDEN = new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  new AriaValueAttribute('aria-pressed');
  SELECTED = new AriaValueAttribute('aria-selected');
}

var EXPANDED, HIDDEN, SELECTED;
function StatusRoleImpl(){
  RoleImpl.call(this, 'status');
}

defineClass(1049, 22, {}, StatusRoleImpl);
var Lcom_google_gwt_aria_client_StatusRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'StatusRoleImpl', 1049);
function TabRoleImpl(){
  RoleImpl.call(this, 'tab');
}

defineClass(1052, 22, {}, TabRoleImpl);
var Lcom_google_gwt_aria_client_TabRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabRoleImpl', 1052);
function TablistRoleImpl(){
  RoleImpl.call(this, 'tablist');
}

defineClass(1050, 22, {}, TablistRoleImpl);
var Lcom_google_gwt_aria_client_TablistRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TablistRoleImpl', 1050);
function TabpanelRoleImpl(){
  RoleImpl.call(this, 'tabpanel');
}

defineClass(1051, 22, {}, TabpanelRoleImpl);
var Lcom_google_gwt_aria_client_TabpanelRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabpanelRoleImpl', 1051);
function TextboxRoleImpl(){
  RoleImpl.call(this, 'textbox');
}

defineClass(1053, 22, {}, TextboxRoleImpl);
var Lcom_google_gwt_aria_client_TextboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TextboxRoleImpl', 1053);
function TimerRoleImpl(){
  RoleImpl.call(this, 'timer');
}

defineClass(1054, 22, {}, TimerRoleImpl);
var Lcom_google_gwt_aria_client_TimerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TimerRoleImpl', 1054);
function ToolbarRoleImpl(){
  RoleImpl.call(this, 'toolbar');
}

defineClass(1055, 22, {}, ToolbarRoleImpl);
var Lcom_google_gwt_aria_client_ToolbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ToolbarRoleImpl', 1055);
function TooltipRoleImpl(){
  RoleImpl.call(this, 'tooltip');
}

defineClass(1056, 22, {}, TooltipRoleImpl);
var Lcom_google_gwt_aria_client_TooltipRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TooltipRoleImpl', 1056);
function $setAriaActivedescendantProperty(element, value_0){
  $set_0(($clinit_Property() , ACTIVEDESCENDANT), element, initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_Id_2_classLit, 1), $intern_2, 283, 0, [value_0]));
}

function TreeRoleImpl(){
  RoleImpl.call(this, 'tree');
}

defineClass(1059, 22, {}, TreeRoleImpl);
var Lcom_google_gwt_aria_client_TreeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeRoleImpl', 1059);
function TreegridRoleImpl(){
  RoleImpl.call(this, 'treegrid');
}

defineClass(1057, 22, {}, TreegridRoleImpl);
var Lcom_google_gwt_aria_client_TreegridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreegridRoleImpl', 1057);
function $setAriaExpandedState(element, value_0){
  $set_0(($clinit_State() , EXPANDED), element, initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_ExpandedValue_2_classLit, 1), $intern_2, 196, 0, [value_0]));
}

function $setAriaSelectedState(element, value_0){
  $set_0(($clinit_State() , SELECTED), element, initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_SelectedValue_2_classLit, 1), $intern_2, 197, 0, [value_0]));
}

function $setAriaSetsizeProperty(element, value_0){
  $set_0(($clinit_Property() , SETSIZE), element, initValues(getClassLiteralForArray(Ljava_lang_Integer_2_classLit, 1), $intern_2, 65, 0, [valueOf_1(value_0)]));
}

function TreeitemRoleImpl(){
  RoleImpl.call(this, 'treeitem');
}

defineClass(1058, 22, {}, TreeitemRoleImpl);
var Lcom_google_gwt_aria_client_TreeitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeitemRoleImpl', 1058);
function $toString(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(20, 1, {3:1, 20:1});
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_2(){
  return $toString(this);
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 20);
function Exception(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(42, 20, {3:1, 42:1, 20:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 42);
function RuntimeException(){
  captureStackTrace(this, this.detailMessage);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(21, 42, $intern_3, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 21);
function CodeDownloadException(message){
  RuntimeException_0.call(this, message);
}

defineClass(1289, 21, $intern_3, CodeDownloadException);
var Lcom_google_gwt_core_client_CodeDownloadException_2_classLit = createForClass('com.google.gwt.core.client', 'CodeDownloadException', 1289);
function Duration(){
  this.start_0 = now_1();
}

defineClass(252, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 252);
function isScript(){
  return true;
}

defineClass(381, 21, $intern_3);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 381);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(112, 381, {112:1, 3:1, 42:1, 21:1, 20:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 112);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

var Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback');
defineClass(1265, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 1265);
function $clinit_ScriptInjector(){
  $clinit_ScriptInjector = emptyMethod;
}

function attachListeners(scriptElement, callback, removeTag){
  $clinit_ScriptInjector();
  function clearCallbacks(){
    scriptElement.onerror = scriptElement.onreadystatechange = scriptElement.onload = null;
    removeTag && nativeRemove(scriptElement);
  }

  scriptElement.onload = $entry(function(){
    clearCallbacks();
    callback && callback.onSuccess(null);
  }
  );
  scriptElement.onerror = $entry(function(){
    clearCallbacks();
    if (callback) {
      var ex = new CodeDownloadException('onerror() called.');
      callback.onFailure(ex);
    }
  }
  );
  scriptElement.onreadystatechange = $entry(function(){
    /loaded|complete/.test(scriptElement.readyState) && scriptElement.onload();
  }
  );
}

function nativeRemove(scriptElement){
  scriptElement.parentNode.removeChild(scriptElement);
}

function nativeSetSrc(element, url_0){
  $clinit_ScriptInjector();
  element.src = url_0;
}

function $inject(this$static){
  var doc, scriptElement, wnd;
  wnd = ($clinit_ScriptInjector() , window);
  doc = wnd.document;
  scriptElement = doc.createElement('script');
  (!!this$static.callback || this$static.removeTag) && attachListeners(scriptElement, this$static.callback, this$static.removeTag);
  nativeSetSrc(scriptElement, this$static.scriptUrl);
  (doc.head || doc.getElementsByTagName('head')[0]).appendChild(scriptElement);
  return scriptElement;
}

function $setCallback(this$static, callback){
  this$static.callback = callback;
  return this$static;
}

function $setRemoveTag(this$static){
  this$static.removeTag = true;
  return this$static;
}

function ScriptInjector$FromUrl(scriptUrl){
  this.scriptUrl = scriptUrl;
}

defineClass(326, 1, {}, ScriptInjector$FromUrl);
_.removeTag = false;
var Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromUrl', 326);
function $clinit_AsyncFragmentLoader(){
  $clinit_AsyncFragmentLoader = emptyMethod;
  BROWSER_LOADER = new AsyncFragmentLoader(20, initValues(getClassLiteralForArray(I_classLit, 1), $intern_4, 0, 7, []), new ScriptTagLoadingStrategy);
}

function $clearRequestsAlreadyLoaded(this$static){
  var offset;
  while ($size(this$static.requestedExclusives) > 0 && this$static.isLoaded[$peek(this$static.requestedExclusives)]) {
    offset = $remove_0(this$static.requestedExclusives);
    offset < this$static.pendingDownloadErrorHandlers.length && setCheck(this$static.pendingDownloadErrorHandlers, offset, null);
  }
}

function $initializeRemainingInitialFragments(this$static){
  var sp, sp$array, sp$index, sp$max;
  if (!this$static.remainingInitialFragments) {
    this$static.remainingInitialFragments = new AsyncFragmentLoader$BoundedIntQueue(this$static.initialLoadSequence.length + 1);
    for (sp$array = this$static.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
      sp = sp$array[sp$index];
      $add(this$static.remainingInitialFragments, sp);
    }
    $add(this$static.remainingInitialFragments, this$static.numEntries);
  }
}

function $inject_0(this$static, splitPoint, loadErrorHandler){
  setCheck(this$static.pendingDownloadErrorHandlers, splitPoint, loadErrorHandler);
  $isInitial(this$static, splitPoint) || $add(this$static.requestedExclusives, splitPoint);
  $startLoadingNextFragment(this$static);
}

function $isEmpty(array){
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i]) {
      return false;
    }
  }
  return true;
}

function $isInitial(this$static, splitPoint){
  var sp, sp$array, sp$index, sp$max;
  if (splitPoint == this$static.numEntries) {
    return true;
  }
  for (sp$array = this$static.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
    sp = sp$array[sp$index];
    if (sp == splitPoint) {
      return true;
    }
  }
  return false;
}

function $logEventProgress(eventGroup, fragment){
  $isStatsAvailable() && stats($createStatsEvent(eventGroup, 'begin', fragment, -1));
}

function $onLoadImpl(this$static, fragment){
  var callback, callback$array, callback$index, callback$max, callbacks, t, logGroup;
  logGroup = fragment == this$static.numEntries?'leftoversDownload':'download' + fragment;
  $isStatsAvailable() && stats($createStatsEvent(logGroup, 'end', fragment, -1));
  fragment < this$static.pendingDownloadErrorHandlers.length && setCheck(this$static.pendingDownloadErrorHandlers, fragment, null);
  $isInitial(this$static, fragment) && $remove_0(this$static.remainingInitialFragments);
  this$static.fragmentLoading = -1;
  this$static.isLoaded[fragment] = true;
  $startLoadingNextFragment(this$static);
  callbacks = this$static.allCallbacks[fragment];
  if (callbacks != null) {
    $isStatsAvailable() && stats($createStatsEvent('runCallbacks' + fragment, 'begin', -1, -1));
    setCheck(this$static.allCallbacks, fragment, null);
    for (callback$array = callbacks , callback$index = 0 , callback$max = callbacks.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      try {
        dynamicCast(callback, 81).onSuccess_0();
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 20)) {
          t = $e0;
          reportToBrowser(instanceOf(t, 112)?dynamicCast(t, 112).getThrown():t);
        }
         else 
          throw unwrap($e0);
      }
    }
    $isStatsAvailable() && stats($createStatsEvent('runCallbacks' + fragment, 'end', -1, -1));
  }
}

function $runAsyncImpl(this$static, fragment, callback){
  var callbacks;
  if (this$static.isLoaded[fragment]) {
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new OnSuccessExecutor$1(callback));
    return;
  }
  callbacks = this$static.allCallbacks[fragment];
  callbacks == null && (callbacks = setCheck(this$static.allCallbacks, fragment, initDim(Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit, $intern_2, 81, 0, 0, 1)));
  setCheck(callbacks, callbacks.length, callback);
  !!this$static.pendingDownloadErrorHandlers[fragment] || $inject_0(this$static, fragment, new AsyncFragmentLoader$1(this$static, fragment));
}

function $startLoadingFragment(this$static, fragment){
  this$static.fragmentLoading = fragment;
  $logEventProgress(fragment == this$static.numEntries?'leftoversDownload':'download' + fragment, fragment);
  $startLoadingFragment_0(this$static.loadingStrategy, fragment, new AsyncFragmentLoader$ResetAfterDownloadFailure(this$static, fragment));
}

function $startLoadingNextFragment(this$static){
  if (this$static.fragmentLoading >= 0) {
    return;
  }
  $initializeRemainingInitialFragments(this$static);
  $clearRequestsAlreadyLoaded(this$static);
  if ($isEmpty(this$static.pendingDownloadErrorHandlers)) {
    return;
  }
  if ($size(this$static.remainingInitialFragments) > 0) {
    $startLoadingFragment(this$static, $peek(this$static.remainingInitialFragments));
    return;
  }
  if ($size(this$static.requestedExclusives) > 0) {
    $startLoadingFragment(this$static, $remove_0(this$static.requestedExclusives));
    return;
  }
}

function AsyncFragmentLoader(numEntries, initialLoadSequence, loadingStrategy){
  var numEntriesPlusOne;
  this.numEntries = numEntries;
  this.initialLoadSequence = initialLoadSequence;
  this.loadingStrategy = loadingStrategy;
  numEntriesPlusOne = numEntries + 1;
  this.allCallbacks = initDim(Ljava_lang_Object_2_classLit, $intern_2, 4, numEntriesPlusOne, 0, 2);
  this.requestedExclusives = new AsyncFragmentLoader$BoundedIntQueue(numEntriesPlusOne);
  this.isLoaded = initDim(Z_classLit, $intern_4, 0, numEntriesPlusOne, 8, 1);
  this.pendingDownloadErrorHandlers = initDim(Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, $intern_2, 307, numEntriesPlusOne, 0, 1);
}

function onLoad(fragment){
  $onLoadImpl(BROWSER_LOADER, fragment);
}

function runAsync(fragment, callback){
  $clinit_AsyncFragmentLoader();
  $runAsyncImpl(BROWSER_LOADER, fragment, callback);
}

defineClass(373, 1, {}, AsyncFragmentLoader);
_.fragmentLoading = -1;
_.numEntries = 0;
_.remainingInitialFragments = null;
var BROWSER_LOADER;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader', 373);
function AsyncFragmentLoader$1(this$0, val$fragment){
  this.this$01 = this$0;
  this.val$fragment2 = val$fragment;
}

defineClass(375, 1, {307:1}, AsyncFragmentLoader$1);
_.loadTerminated = function loadTerminated(reason){
  var callback, callback$index, callback$max, callbacks;
  callbacks = this.this$01.allCallbacks[this.val$fragment2];
  if (callbacks != null) {
    setCheck(this.this$01.allCallbacks, this.val$fragment2, null);
    for (callback$index = 0 , callback$max = callbacks.length; callback$index < callback$max; ++callback$index) {
      callback = callbacks[callback$index];
      dynamicCast(callback, 81).onFailure_0(reason);
    }
  }
}
;
_.val$fragment2 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/1', 375);
function $add(this$static, x_0){
  this$static.array[this$static.write_0++] = x_0;
}

function $clear(this$static){
  this$static.read = 0;
  this$static.write_0 = 0;
}

function $peek(this$static){
  return this$static.array[this$static.read];
}

function $remove_0(this$static){
  return this$static.array[this$static.read++];
}

function $size(this$static){
  return this$static.write_0 - this$static.read;
}

function AsyncFragmentLoader$BoundedIntQueue(maxPuts){
  this.array = initDim(I_classLit, $intern_4, 0, maxPuts, 7, 1);
}

defineClass(306, 1, {}, AsyncFragmentLoader$BoundedIntQueue);
_.read = 0;
_.write_0 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$BoundedIntQueue_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/BoundedIntQueue', 306);
function AsyncFragmentLoader$HttpDownloadFailure(url_0){
  RuntimeException_0.call(this, 'Download of ' + url_0 + ' failed with status ' + 404 + '(' + 'Script Tag Failure - no status available' + ')');
}

defineClass(377, 21, $intern_3, AsyncFragmentLoader$HttpDownloadFailure);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpDownloadFailure', 377);
function AsyncFragmentLoader$HttpInstallFailure(url_0, text_0, rootCause){
  RuntimeException_1.call(this, 'Install of ' + url_0 + ' failed with text ' + text_0, rootCause);
}

defineClass(378, 21, $intern_3, AsyncFragmentLoader$HttpInstallFailure);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpInstallFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpInstallFailure', 378);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler');
function $loadTerminated(this$static, reason){
  var e, handler, handler$array, handler$index, handler$max, handlersToRun, lastException;
  if (this$static.this$01.fragmentLoading != this$static.fragment_0) {
    return;
  }
  handlersToRun = this$static.this$01.pendingDownloadErrorHandlers;
  this$static.this$01.pendingDownloadErrorHandlers = initDim(Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, $intern_2, 307, this$static.this$01.numEntries + 1, 0, 1);
  $clear(this$static.this$01.requestedExclusives);
  this$static.this$01.fragmentLoading = -1;
  lastException = null;
  for (handler$array = handlersToRun , handler$index = 0 , handler$max = handlersToRun.length; handler$index < handler$max; ++handler$index) {
    handler = handler$array[handler$index];
    if (handler) {
      try {
        handler.loadTerminated(reason);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 21)) {
          e = $e0;
          lastException = e;
        }
         else 
          throw unwrap($e0);
      }
    }
  }
  if (lastException) {
    throw unwrap(lastException);
  }
}

function AsyncFragmentLoader$ResetAfterDownloadFailure(this$0, myFragment){
  this.this$01 = this$0;
  this.fragment_0 = myFragment;
}

defineClass(376, 1, {307:1}, AsyncFragmentLoader$ResetAfterDownloadFailure);
_.loadTerminated = function loadTerminated_0(reason){
  $loadTerminated(this, reason);
}
;
_.fragment_0 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$ResetAfterDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/ResetAfterDownloadFailure', 376);
function $createStatsEvent(eventGroup, type_0, fragment, size_0){
  var evt = {moduleName:$moduleName, sessionId:$sessionId, subSystem:'runAsync', evtGroup:eventGroup, millis:(new Date).getTime(), type:type_0};
  fragment >= 0 && (evt.fragment = fragment);
  size_0 >= 0 && (evt.size = size_0);
  return evt;
}

function $isStatsAvailable(){
  return !!$stats;
}

function stats(data_0){
  return $stats(data_0);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $startLoadingFragment_0(this$static, fragment, loadErrorHandler){
  var connector, manualRetry, request, url_0, ser;
  url_0 = gwtStartLoadingFragment(fragment, loadErrorHandler);
  if (url_0 == null) {
    return;
  }
  manualRetry = (ser = $get(this$static.manualRetryNumbers, fragment) , this$static.manualRetryNumbers[fragment] = ser + 1 , ser);
  if (manualRetry > 0) {
    connector = url_0.indexOf('?') != -1?38:63;
    url_0 += charToString(connector) + 'manualRetry=' + manualRetry;
  }
  request = new LoadingStrategyBase$RequestData(url_0, loadErrorHandler, fragment, MAX_AUTO_RETRY_COUNT);
  setAsyncCallback(request.fragment_0, request);
  $inject($setCallback($setRemoveTag(($clinit_ScriptInjector() , new ScriptInjector$FromUrl(request.url_0))), new ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(request)));
}

function gwtStartLoadingFragment(fragment, loadErrorHandler){
  function loadFailed(e){
    loadErrorHandler.loadTerminated(e);
  }

  return __gwtStartLoadingFragment(fragment, $entry(loadFailed));
}

defineClass(390, 1, {});
var MAX_AUTO_RETRY_COUNT = 3;
var Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase', 390);
function $get(this$static, x_0){
  return this$static[x_0]?this$static[x_0]:0;
}

function $onLoadError(this$static, e, mayRetry){
  var connector;
  if (mayRetry) {
    ++this$static.retryCount;
    if (this$static.retryCount <= this$static.maxRetryCount) {
      connector = this$static.originalUrl.indexOf('?') != -1?38:63;
      this$static.url_0 = this$static.originalUrl + charToString(connector) + 'autoRetry=' + this$static.retryCount;
      setAsyncCallback(this$static.fragment_0, this$static);
      $inject($setCallback($setRemoveTag(($clinit_ScriptInjector() , new ScriptInjector$FromUrl(this$static.url_0))), new ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(this$static)));
      return;
    }
  }
  $loadTerminated(this$static.errorHandler, e);
}

function $tryInstall(this$static, code_0){
  var e, textIntro;
  try {
    __gwtInstallCode(code_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 21)) {
      e = $e0;
      textIntro = code_0;
      code_0 != null && code_0.length > 200 && (textIntro = code_0.substr(0, 200) + '...');
      $onLoadError(this$static, new AsyncFragmentLoader$HttpInstallFailure(this$static.url_0, textIntro, e), false);
    }
     else 
      throw unwrap($e0);
  }
}

function LoadingStrategyBase$RequestData(url_0, errorHandler, fragment, maxRetryCount){
  this.url_0 = url_0;
  this.originalUrl = url_0;
  this.errorHandler = errorHandler;
  this.maxRetryCount = maxRetryCount;
  this.retryCount = 0;
  this.fragment_0 = fragment;
}

defineClass(391, 1, {}, LoadingStrategyBase$RequestData);
_.errorHandler = null;
_.fragment_0 = 0;
_.maxRetryCount = 0;
_.retryCount = 0;
var Lcom_google_gwt_core_client_impl_LoadingStrategyBase$RequestData_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase/RequestData', 391);
function OnSuccessExecutor$1(val$callback){
  this.val$callback3 = val$callback;
}

defineClass(374, 1, {}, OnSuccessExecutor$1);
_.execute_1 = function execute_0(){
  this.val$callback3.onSuccess_0();
}
;
var Lcom_google_gwt_core_client_impl_OnSuccessExecutor$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor/1', 374);
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && $push(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function execute_1(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 20)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 112)?dynamicCast(e, 112).getThrown():e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_1)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(412, 1265, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 412);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(413, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 413);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(414, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_3(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 414);
function ScriptTagLoadingStrategy(){
  this.manualRetryNumbers = [];
}

function asyncCallback(request, code_0){
  var firstTimeCalled;
  firstTimeCalled = clearAsyncCallback(request.fragment_0);
  firstTimeCalled && $tryInstall(request, code_0);
}

function cleanup(request){
  var neverCalled;
  neverCalled = clearAsyncCallback(request.fragment_0);
  neverCalled && $onLoadError(request, new AsyncFragmentLoader$HttpDownloadFailure(request.url_0), true);
}

function clearAsyncCallback(fragment){
  if (!__gwtModuleFunction['runAsyncCallback' + fragment]) {
    return false;
  }
  delete __gwtModuleFunction['runAsyncCallback' + fragment];
  return true;
}

function setAsyncCallback(fragment, request){
  __gwtModuleFunction['runAsyncCallback' + fragment] = $entry(function(code_0, instance){
    asyncCallback(request, code_0);
  }
  );
}

defineClass(372, 390, {}, ScriptTagLoadingStrategy);
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy', 372);
function $onFailure(this$static){
  cleanup(this$static.val$request2);
}

function $onSuccess(this$static){
  cleanup(this$static.val$request2);
}

function ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(val$request){
  this.val$request2 = val$request;
}

defineClass(308, 1, {}, ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1);
_.onFailure = function onFailure(reason){
  $onFailure(this, dynamicCast(reason, 42));
}
;
_.onSuccess = function onSuccess(result){
  $onSuccess(this, throwClassCastExceptionUnlessNull(result));
}
;
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy/ScriptTagDownloadStrategy/1', 308);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

var collector;
defineClass(1276, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 1276);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(382, 1276, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 382);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(1277, 1276, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 1277);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(383, 1277, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 383);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $removeAllChildren(this$static){
  while (this$static.lastChild) {
    this$static.removeChild(this$static.lastChild);
  }
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $removeFromParent(this$static){
  var parent_0;
  parent_0 = $getParentElement(this$static);
  !!parent_0 && parent_0.removeChild(this$static);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $blur(this$static){
  this$static.blur();
}

function $focus(this$static){
  this$static.focus();
}

function $getAbsoluteLeft(this$static){
  return $getAbsoluteLeftImpl($getViewportElement(this$static.ownerDocument), this$static);
}

function $getAbsoluteTop(this$static){
  return $getAbsoluteTopImpl($getViewportElement(this$static.ownerDocument), this$static);
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $getSubPixelOffsetHeight(this$static){
  return this$static.offsetHeight || 0;
}

function $getSubPixelOffsetWidth(this$static){
  return this$static.offsetWidth || 0;
}

function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyInt(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $eventGetAltKey(evt){
  return !!evt.altKey;
}

function $eventGetCtrlKey(evt){
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $eventGetMetaKey(evt){
  return !!evt.metaKey;
}

function $eventGetShiftKey(evt){
  return !!evt.shiftKey;
}

function $eventStopPropagation(evt){
  evt.stopPropagation();
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $scrollIntoView(elem){
  var left = elem.offsetLeft, top_0 = elem.offsetTop;
  var width_0 = elem.offsetWidth, height = elem.offsetHeight;
  if (elem.parentNode != elem.offsetParent) {
    left -= elem.parentNode.offsetLeft;
    top_0 -= elem.parentNode.offsetTop;
  }
  var cur = elem.parentNode;
  while (cur && cur.nodeType == 1) {
    left < cur.scrollLeft && (cur.scrollLeft = left);
    left + width_0 > cur.scrollLeft + cur.clientWidth && (cur.scrollLeft = left + width_0 - cur.clientWidth);
    top_0 < cur.scrollTop && (cur.scrollTop = top_0);
    top_0 + height > cur.scrollTop + cur.clientHeight && (cur.scrollTop = top_0 + height - cur.clientHeight);
    var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
    if (cur.parentNode != cur.offsetParent) {
      offsetLeft -= cur.parentNode.offsetLeft;
      offsetTop -= cur.parentNode.offsetTop;
    }
    left += offsetLeft - cur.scrollLeft;
    top_0 += offsetTop - cur.scrollTop;
    cur = cur.parentNode;
  }
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $eventPreventDefault(evt){
  evt.preventDefault();
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $eventGetRelatedTarget(evt){
  var relatedTarget = evt.relatedTarget;
  if (!relatedTarget) {
    return null;
  }
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}

function $getAbsoluteLeftImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().left + viewport.scrollLeft | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenX - doc.getBoxObjectFor(doc.documentElement).screenX;
  }
}

function $getAbsoluteTopImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().top + viewport.scrollTop | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenY - doc.getBoxObjectFor(doc.documentElement).screenY;
  }
}

function $isOrHasChild(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function $toString_0(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getClientHeight(this$static){
  return ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getViewportElement(this$static){
  return $equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Display();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_2, 49, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL]);
}

defineClass(49, 7, $intern_5);
var BLOCK, INITIAL, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 49, Ljava_lang_Enum_2_classLit, values_2);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(646, 49, $intern_5, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 646, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(655, 49, $intern_5, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 655, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(656, 49, $intern_5, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 656, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(657, 49, $intern_5, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 657, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(658, 49, $intern_5, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 658, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(659, 49, $intern_5, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 659, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(660, 49, $intern_5, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 660, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(661, 49, $intern_5, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 661, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(662, 49, $intern_5, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 662, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(647, 49, $intern_5, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 647, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(648, 49, $intern_5, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 648, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(649, 49, $intern_5, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 649, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(650, 49, $intern_5, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 650, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(651, 49, $intern_5, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 651, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(652, 49, $intern_5, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 652, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(653, 49, $intern_5, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 653, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(654, 49, $intern_5, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 654, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN_0 = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Overflow();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_2, 132, 0, [VISIBLE, HIDDEN_0, SCROLL, AUTO]);
}

defineClass(132, 7, $intern_6);
var AUTO, HIDDEN_0, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 132, Ljava_lang_Enum_2_classLit, values_4);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(672, 132, $intern_6, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 672, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(673, 132, $intern_6, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 673, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(674, 132, $intern_6, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 674, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(675, 132, $intern_6, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 675, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Position();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_2, 133, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(133, 7, $intern_7);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 133, Ljava_lang_Enum_2_classLit, values_5);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(676, 133, $intern_7, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 676, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(677, 133, $intern_7, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 677, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(678, 133, $intern_7, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 678, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(679, 133, $intern_7, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 679, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_2, 134, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(134, 7, $intern_8);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 134, Ljava_lang_Enum_2_classLit, values_7);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(682, 134, $intern_8, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 682, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(683, 134, $intern_8, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 683, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(684, 134, $intern_8, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 684, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(685, 134, $intern_8, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 685, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_2, 82, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(82, 7, $intern_9);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 82, Ljava_lang_Enum_2_classLit, values_8);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(637, 82, $intern_9, Style$Unit$1);
_.getType = function getType(){
  return 'px';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 637, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(638, 82, $intern_9, Style$Unit$2);
_.getType = function getType_0(){
  return '%';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 638, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(639, 82, $intern_9, Style$Unit$3);
_.getType = function getType_1(){
  return 'em';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 639, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(640, 82, $intern_9, Style$Unit$4);
_.getType = function getType_2(){
  return 'ex';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 640, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(641, 82, $intern_9, Style$Unit$5);
_.getType = function getType_3(){
  return 'pt';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 641, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(642, 82, $intern_9, Style$Unit$6);
_.getType = function getType_4(){
  return 'pc';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 642, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(643, 82, $intern_9, Style$Unit$7);
_.getType = function getType_5(){
  return 'in';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 643, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(644, 82, $intern_9, Style$Unit$8);
_.getType = function getType_6(){
  return 'cm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 644, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(645, 82, $intern_9, Style$Unit$9);
_.getType = function getType_7(){
  return 'mm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 645, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_1 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_Style$Visibility();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_2, 189, 0, [VISIBLE_0, HIDDEN_1]);
}

defineClass(189, 7, $intern_10);
var HIDDEN_1, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 189, Ljava_lang_Enum_2_classLit, values_9);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(686, 189, $intern_10, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 686, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(687, 189, $intern_10, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 687, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
defineClass(1284, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 1284);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass($intern_11, 1284, {});
_.dispatch = function dispatch(handler){
  this.dispatch_0(dynamicCast(handler, 6));
}
;
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', $intern_11);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 16);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next_0(), 123);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(1297, $intern_11, {});
_.getAssociatedType_0 = function getAssociatedType_0(){
  return this.getAssociatedType_1();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 1297);
defineClass(1299, 1297, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 1299);
defineClass(1300, 1299, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 1300);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(1060, 1300, {}, ClickEvent);
_.dispatch_0 = function dispatch_1(handler){
  dynamicCast(handler, 47).onClick(this);
}
;
_.getAssociatedType_1 = function getAssociatedType_2(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 1060);
function Event$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(319, 1, {}, Event$Type);
_.hashCode$ = function hashCode_3(){
  return this.index_0;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 319);
function GwtEvent$Type(){
  Event$Type.call(this);
}

defineClass(41, 319, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 41);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 16);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_1(this);
  this.name_0 = eventName;
}

defineClass(123, 41, {123:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 123);
function isArrowKey(code_0){
  switch (code_0) {
    case 40:
    case 39:
    case 38:
    case 37:
      return true;
    default:return false;
  }
}

function $unsafeGet(this$static, key_0){
  return this$static.map_0[key_0];
}

function $unsafePut(this$static, key_0, value_0){
  this$static.map_0[key_0] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(1083, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 1083);
function AttachEvent(attached){
  this.attached = attached;
}

function fire_0(source, attached){
  var event_0;
  if (TYPE_9) {
    event_0 = new AttachEvent(attached);
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(458, $intern_11, {}, AttachEvent);
_.dispatch_0 = function dispatch_10(handler){
  dynamicCast(handler, 1244).onAttachOrDetach(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_11(){
  return TYPE_9;
}
;
_.attached = false;
var TYPE_9;
var Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'AttachEvent', 458);
function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_10) {
    event_0 = new CloseEvent_0;
    source.fireEvent(event_0);
  }
}

defineClass(636, $intern_11, {}, CloseEvent_0);
_.dispatch_0 = function dispatch_11(handler){
  dynamicCast(handler, 1261).onClose(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_12(){
  return TYPE_10;
}
;
var TYPE_10;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 636);
function ResizeEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_11) {
    event_0 = new ResizeEvent;
    $fireEvent(source, event_0);
  }
}

defineClass(972, $intern_11, {}, ResizeEvent);
_.dispatch_0 = function dispatch_12(handler){
  dynamicCast(handler, 367).onResize(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_13(){
  return TYPE_11;
}
;
var TYPE_11;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 972);
function ValueChangeEvent(value_0){
  this.value_0 = value_0;
}

function fire_3(source, value_0){
  var event_0;
  if (TYPE_12) {
    event_0 = new ValueChangeEvent(value_0);
    $fireEvent(source.handlers, event_0);
  }
}

defineClass(330, $intern_11, {}, ValueChangeEvent);
_.dispatch_0 = function dispatch_13(handler){
  dynamicCast(handler, 366).onValueChange(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_14(){
  return TYPE_12;
}
;
var TYPE_12;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 330);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0, null);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 131)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(165, 1, $intern_12, HandlerManager, HandlerManager_0);
_.fireEvent = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 165);
defineClass(1286, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 1286);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_16(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  if (handler == null) {
    throw new NullPointerException_0('Cannot add a null handler');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0, source){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    source != null && (event_0.source = source);
    handlers = $getDispatchList(this$static, event_0.getAssociatedType(), source);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 20)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_17(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_2(handler);
  removed && l.isEmpty_0() && (sourceMap = dynamicCast(this$static.map_0.get_4(type_0), 56) , dynamicCast(sourceMap.remove_3(source), 16) , sourceMap.isEmpty_0() && this$static.map_0.remove_3(type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_4(type_0), 56);
  if (!sourceMap) {
    sourceMap = new HashMap;
    this$static.map_0.put(type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_4(source), 16);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $fireEventFromSource(this$static, event_0, source){
  if (source == null) {
    throw new NullPointerException_0('Cannot fire from a null source');
  }
  $doFire(this$static, event_0, source);
}

function $getDispatchList(this$static, type_0, source){
  var directHandlers, globalHandlers, rtn;
  directHandlers = $getHandlerList(this$static, type_0, source);
  if (source == null) {
    return directHandlers;
  }
  globalHandlers = $getHandlerList(this$static, type_0, null);
  rtn = new ArrayList_1(directHandlers);
  $addAll_1(rtn, globalHandlers);
  return rtn;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_4(type_0), 56);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_4(source), 16);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_1(c$iterator.last = c$iterator.i++), 1260));
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return this$static.map_0.containsKey(eventKey);
}

function SimpleEventBus(){
  SimpleEventBus_0.call(this, false);
}

function SimpleEventBus_0(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(264, 1286, {}, SimpleEventBus);
_.addHandler = function addHandler(type_0, handler){
  return $doAdd(this, type_0, handler);
}
;
_.doRemove = function doRemove(type_0, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3(this, type_0, source, handler)):$doRemoveNow(this, type_0, source, handler);
}
;
_.fireEvent_0 = function fireEvent_0(event_0){
  $doFire(this, event_0, null);
}
;
_.fireEventFromSource = function fireEventFromSource(event_0, source){
  $fireEventFromSource(this, event_0, source);
}
;
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 264);
function HandlerManager$Bus(fireInReverseOrder){
  SimpleEventBus_0.call(this, fireInReverseOrder);
}

defineClass(529, 264, {}, HandlerManager$Bus);
_.doRemove = function doRemove_0(type_0, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3(this, type_0, source, handler)):$doRemoveNow(this, type_0, source, handler);
}
;
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 529);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(635, 1, {1335:1, 1243:1}, LegacyHandlerWrapper);
_.removeHandler = function removeHandler(){
  $removeHandler(this.real);
}
;
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 635);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next_0(), 20);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next_0(), 20);
    first?(first = false):(b.string += '; ' , b);
    $append_4(b, t.getMessage());
  }
  return b.string;
}

defineClass(131, 21, $intern_13, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 131);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(332, 131, $intern_13, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 332);
function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_2, 208, 0, [RTL, LTR, DEFAULT]);
}

defineClass(208, 7, {208:1, 3:1, 11:1, 7:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 208, Ljava_lang_Enum_2_classLit, values_11);
function cloneSubrange(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function createFrom(array, length_0){
  var result;
  result = initializeArrayElementsWithDefaults(0, length_0);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function nativeArraySplice(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 112)) {
    jse = dynamicCast(e, 112);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 20)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create_0(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_14;
  a1 = value_0 >> 22 & $intern_14;
  a2 = value_0 < 0?$intern_15:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_14;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_14;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_15;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_16 + a.h * $intern_17;
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_18) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_17) {
    a2 = round_int(value_0 / $intern_17);
    value_0 -= a2 * $intern_17;
  }
  a1 = 0;
  if (value_0 >= $intern_16) {
    a1 = round_int(value_0 / $intern_16);
    value_0 -= a1 * $intern_16;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_2, 1349, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_0(value_0));
    return result;
  }
  return create_0(value_0);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_14;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_14;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_15;
  return create0(neg0, neg1, neg2);
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_18;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_16 + a.h * $intern_17;
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_14, $intern_14, 524287);
  MIN_VALUE = create0(0, 0, $intern_19);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0(new TimeTracking);
}

function $adjustHorizontalConstraints(this$static, parentWidth, l){
  var leftPx, rightPx, widthPx;
  leftPx = l.left_0 * $getUnitSize(this$static, l.leftUnit, false);
  rightPx = l.right * $getUnitSize(this$static, l.rightUnit, false);
  widthPx = l.width_0 * $getUnitSize(this$static, l.widthUnit, false);
  if (l.setLeft && !l.setTargetLeft) {
    l.setLeft = false;
    if (l.setWidth) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
   else if (l.setWidth && !l.setTargetWidth) {
    l.setWidth = false;
    if (l.setLeft) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
  }
   else if (l.setRight && !l.setTargetRight) {
    l.setRight = false;
    if (l.setWidth) {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
  l.setLeft = l.setTargetLeft;
  l.setRight = l.setTargetRight;
  l.setWidth = l.setTargetWidth;
  l.leftUnit = l.targetLeftUnit;
  l.rightUnit = l.targetRightUnit;
  l.widthUnit = l.targetWidthUnit;
}

function $adjustVerticalConstraints(this$static, parentHeight, l){
  var bottomPx, heightPx, topPx;
  topPx = l.top_0 * $getUnitSize(this$static, l.topUnit, true);
  bottomPx = l.bottom * $getUnitSize(this$static, l.bottomUnit, true);
  heightPx = l.height_0 * $getUnitSize(this$static, l.heightUnit, true);
  if (l.setTop && !l.setTargetTop) {
    l.setTop = false;
    if (l.setHeight) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
   else if (l.setHeight && !l.setTargetHeight) {
    l.setHeight = false;
    if (l.setTop) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
  }
   else if (l.setBottom && !l.setTargetBottom) {
    l.setBottom = false;
    if (l.setHeight) {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
  l.setTop = l.setTargetTop;
  l.setBottom = l.setTargetBottom;
  l.setHeight = l.setTargetHeight;
  l.topUnit = l.targetTopUnit;
  l.bottomUnit = l.targetBottomUnit;
  l.heightUnit = l.targetHeightUnit;
}

function $attachChild(this$static, child, userObject){
  var container, layer;
  container = $attachChild_0(this$static.parentElem, child);
  layer = new Layout$Layer(container, child, userObject);
  $add_16(this$static.layers, layer);
  return layer;
}

function $getUnitSize(this$static, unit, vertical){
  return $getUnitSizeInPixels(this$static.impl, this$static.parentElem, unit, vertical);
}

function $layout(this$static, duration, callback){
  var l, l$iterator, l$iterator0, parentHeight, parentWidth;
  !!this$static.animation && $cancel(this$static.animation);
  if (duration == 0) {
    for (l$iterator0 = new AbstractList$IteratorImpl(this$static.layers); l$iterator0.i < l$iterator0.this$01_0.size_1();) {
      l = (checkCriticalElement(l$iterator0.i < l$iterator0.this$01_0.size_1()) , dynamicCast(l$iterator0.this$01_0.get_1(l$iterator0.last = l$iterator0.i++), 198));
      l.left_0 = l.sourceLeft = l.targetLeft;
      l.top_0 = l.sourceTop = l.targetTop;
      l.right = l.sourceRight = l.targetRight;
      l.bottom = l.sourceBottom = l.targetBottom;
      l.width_0 = l.sourceWidth = l.targetWidth;
      l.height_0 = l.sourceHeight = l.targetHeight;
      l.setLeft = l.setTargetLeft;
      l.setTop = l.setTargetTop;
      l.setRight = l.setTargetRight;
      l.setBottom = l.setTargetBottom;
      l.setWidth = l.setTargetWidth;
      l.setHeight = l.setTargetHeight;
      l.leftUnit = l.targetLeftUnit;
      l.topUnit = l.targetTopUnit;
      l.rightUnit = l.targetRightUnit;
      l.bottomUnit = l.targetBottomUnit;
      l.widthUnit = l.targetWidthUnit;
      l.heightUnit = l.targetHeightUnit;
      $layout_0(l);
    }
    return;
  }
  parentWidth = this$static.parentElem.clientWidth | 0;
  parentHeight = this$static.parentElem.clientHeight | 0;
  for (l$iterator = new AbstractList$IteratorImpl(this$static.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_1(l$iterator.last = l$iterator.i++), 198));
    $adjustHorizontalConstraints(this$static, parentWidth, l);
    $adjustVerticalConstraints(this$static, parentHeight, l);
  }
  this$static.animation = new Layout$1(this$static, callback);
  $run_0(this$static.animation, duration, this$static.parentElem);
}

function $removeChild_0(this$static, layer){
  $removeChild_1(layer.container, layer.child);
  $remove_17(this$static.layers, layer);
}

function Layout(parent_0){
  this.impl = new LayoutImpl;
  this.layers = new ArrayList;
  this.parentElem = parent_0;
  $initParent(this.impl, parent_0);
}

defineClass(353, 1, {}, Layout);
var Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout', 353);
function Layout$1(this$0, val$callback){
  this.this$01 = this$0;
  this.val$callback2 = val$callback;
  Animation.call(this);
}

defineClass(1071, 238, {}, Layout$1);
_.onCancel = function onCancel_0(){
  this.this$01.animation = null;
  $layout(this.this$01, 0, null);
}
;
_.onComplete = function onComplete_0(){
  this.this$01.animation = null;
  $layout(this.this$01, 0, null);
}
;
_.onUpdate = function onUpdate(progress){
  var l, l$iterator, child;
  for (l$iterator = new AbstractList$IteratorImpl(this.this$01.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_1(l$iterator.last = l$iterator.i++), 198));
    l.setTargetLeft && (l.left_0 = l.sourceLeft + (l.targetLeft - l.sourceLeft) * progress);
    l.setTargetRight && (l.right = l.sourceRight + (l.targetRight - l.sourceRight) * progress);
    l.setTargetTop && (l.top_0 = l.sourceTop + (l.targetTop - l.sourceTop) * progress);
    l.setTargetBottom && (l.bottom = l.sourceBottom + (l.targetBottom - l.sourceBottom) * progress);
    l.setTargetWidth && (l.width_0 = l.sourceWidth + (l.targetWidth - l.sourceWidth) * progress);
    l.setTargetHeight && (l.height_0 = l.sourceHeight + (l.targetHeight - l.sourceHeight) * progress);
    $layout_0(l);
    !!this.val$callback2 && (child = l.userObject , instanceOf(child, 142) && dynamicCast(child, 142).onResize_0() , undefined);
  }
}
;
var Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/1', 1071);
function Layout$Layer(container, child, userObject){
  this.targetLeftUnit = ($clinit_Style$Unit() , PX);
  this.targetTopUnit = PX;
  this.targetRightUnit = PX;
  this.targetBottomUnit = PX;
  this.container = container;
  this.child = child;
  this.userObject = userObject;
}

defineClass(198, 1, {198:1}, Layout$Layer);
_.bottom = 0;
_.height_0 = 0;
_.left_0 = 0;
_.right = 0;
_.setBottom = false;
_.setHeight = false;
_.setLeft = false;
_.setRight = false;
_.setTargetBottom = true;
_.setTargetHeight = false;
_.setTargetLeft = true;
_.setTargetRight = true;
_.setTargetTop = true;
_.setTargetWidth = false;
_.setTop = false;
_.setWidth = false;
_.sourceBottom = 0;
_.sourceHeight = 0;
_.sourceLeft = 0;
_.sourceRight = 0;
_.sourceTop = 0;
_.sourceWidth = 0;
_.targetBottom = 0;
_.targetHeight = 0;
_.targetLeft = 0;
_.targetRight = 0;
_.targetTop = 0;
_.targetWidth = 0;
_.top_0 = 0;
_.visible = true;
_.width_0 = 0;
var Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/Layer', 198);
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = emptyMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), CM);
  $appendChild($doc.body, fixedRuler);
}

function $attachChild_0(parent_0, child){
  var container;
  container = $doc.createElement('div');
  container.appendChild(child);
  $setPropertyImpl(container.style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(container.style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));
  $fillParent(child);
  parent_0.insertBefore(container, null);
  return container;
}

function $fillParent(elem){
  var style;
  style = elem.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(style, 'top', '0.0px');
  $setPropertyImpl(style, 'right', '0.0px');
  $setPropertyImpl(style, 'bottom', '0.0px');
}

function $getUnitSizeInPixels(this$static, parent_0, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.ordinal) {
    case 1:
      return (vertical?parent_0.clientHeight | 0:parent_0.clientWidth | 0) / 100;
    case 2:
      return ($getSubPixelOffsetWidth(this$static.relativeRuler) | 0) / 10;
    case 3:
      return ($getSubPixelOffsetHeight(this$static.relativeRuler) | 0) / 10;
    case 7:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.1;
    case 8:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.01;
    case 6:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.254;
    case 4:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.00353;
    case 5:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function $initParent(this$static, parent_0){
  $setPropertyImpl(parent_0.style, 'position', ($clinit_Style$Position() , 'relative'));
  $appendChild(parent_0, this$static.relativeRuler = createRuler(($clinit_Style$Unit() , EM), EX));
}

function $layout_0(layer){
  var style;
  style = layer.container.style;
  layer.visible?$setPropertyImpl(style, 'display', ''):$setPropertyImpl(style, 'display', ($clinit_Style$Display() , 'none'));
  style['left'] = layer.setLeft?layer.left_0 + 'px':'';
  style['top'] = layer.setTop?layer.top_0 + 'px':'';
  style['right'] = layer.setRight?layer.right + 'px':'';
  style['bottom'] = layer.setBottom?layer.bottom + 'px':'';
  style['width'] = layer.setWidth?layer.width_0 + 'px':'';
  style['height'] = layer.setHeight?layer.height_0 + 'px':'';
  style = layer.child.style;
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'right', '0.0px');
  }
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'top', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'bottom', '0.0px');
  }
}

function $removeChild_1(container, child){
  var style;
  $removeFromParent(container);
  $getParentElement(child) == container && $removeFromParent(child);
  style = child.style;
  $setPropertyImpl(style, 'position', '');
  $setPropertyImpl(style, 'left', '');
  $setPropertyImpl(style, 'top', '');
  $setPropertyImpl(style, 'width', '');
  $setPropertyImpl(style, 'height', '');
}

function LayoutImpl(){
  $clinit_LayoutImpl();
}

function createRuler(widthUnit, heightUnit){
  var ruler, style;
  ruler = $doc.createElement('div');
  $setInnerHTML(ruler, '&nbsp;');
  style = ruler.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'zIndex', '-32767');
  $setPropertyImpl(style, 'top', -20 + heightUnit.getType());
  $setPropertyImpl(style, 'width', 10 + widthUnit.getType());
  $setPropertyImpl(style, 'height', 10 + heightUnit.getType());
  $setPropertyImpl(style, 'visibility', ($clinit_Style$Visibility() , 'hidden'));
  $set_0(($clinit_State() , HIDDEN), ruler, initValues(getClassLiteralForArray(Ljava_lang_Boolean_2_classLit, 1), $intern_2, 48, 0, [($clinit_Boolean() , $clinit_Boolean() , TRUE_1)]));
  return ruler;
}

defineClass(1082, 1, {}, LayoutImpl);
var fixedRuler;
var Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImpl', 1082);
function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function ImageResourcePrototype(url_0, width_0, height){
  this.left_0 = 0;
  this.top_0 = 0;
  this.height_0 = height;
  this.width_0 = width_0;
  this.url_0 = url_0;
}

defineClass(195, 1, {}, ImageResourcePrototype);
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.width_0 = 0;
var Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl', 'ImageResourcePrototype', 195);
function $append(this$static, styles){
  $append_4(this$static.sb, styles.css);
  return this$static;
}

function SafeStylesBuilder(){
  this.sb = new StringBuilder;
}

defineClass(1115, 1, {}, SafeStylesBuilder);
var Lcom_google_gwt_safecss_shared_SafeStylesBuilder_2_classLit = createForClass('com.google.gwt.safecss.shared', 'SafeStylesBuilder', 1115);
function SafeStylesString(css){
  verifySafeStylesConstraints(css);
  this.css = css;
}

defineClass(99, 1, {1264:1, 99:1, 3:1}, SafeStylesString);
_.equals$ = function equals_2(obj){
  if (!instanceOf(obj, 1264)) {
    return false;
  }
  return $equals_3(this.css, dynamicCast(dynamicCast(obj, 1264), 99).css);
}
;
_.hashCode$ = function hashCode_4(){
  return getHashCode_1(this.css);
}
;
var Lcom_google_gwt_safecss_shared_SafeStylesString_2_classLit = createForClass('com.google.gwt.safecss.shared', 'SafeStylesString', 99);
function verifySafeStylesConstraints(styles){
  if (styles == null) {
    throw new NullPointerException_0('css is null');
  }
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(35, 1, $intern_20, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString(){
  return this.html;
}
;
_.equals$ = function equals_3(obj){
  if (!instanceOf(obj, 247)) {
    return false;
  }
  return $equals_3(this.html, dynamicCast(obj, 247).asString());
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode_1(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 35);
function SafeHtmlString(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(121, 1, $intern_20, SafeHtmlString);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals$ = function equals_4(obj){
  if (!instanceOf(obj, 247)) {
    return false;
  }
  return $equals_3(this.html, dynamicCast(obj, 247).asString());
}
;
_.hashCode$ = function hashCode_6(){
  return getHashCode_1(this.html);
}
;
_.toString$ = function toString_7(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 121);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  EMPTY_SAFE_HTML = new SafeHtmlString('');
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, EMPTY_SAFE_HTML, GT_RE, LT_RE, QUOT_RE, SQUOT_RE;
function SafeUriString(uri_0){
  if (uri_0 == null) {
    throw new NullPointerException_0('uri is null');
  }
  this.uri_0 = uri_0;
}

defineClass(113, 1, {1263:1, 113:1}, SafeUriString);
_.equals$ = function equals_5(obj){
  if (!instanceOf(obj, 1263)) {
    return false;
  }
  return $equals_3(this.uri_0, dynamicCast(dynamicCast(obj, 1263), 113).uri_0);
}
;
_.hashCode$ = function hashCode_7(){
  return getHashCode_1(this.uri_0);
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 113);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $isVisible(this$static){
  return ($clinit_DOM() , this$static.element).style.display != 'none';
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setHeight_0(this$static, height){
  ($clinit_DOM() , this$static.element).style['height'] = height;
}

function $setStyleName(this$static, style){
  $setClassName(this$static.getStyleElement(), style);
}

function $setVisible_0(this$static, visible){
  setVisible(($clinit_DOM() , this$static.element), visible);
}

function $setWidth_0(this$static, width_0){
  ($clinit_DOM() , this$static.element).style['width'] = width_0;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent_0(this$static.element, eventTypeName);
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(32, 1, $intern_21);
_.getStyleElement = function getStyleElement(){
  return $clinit_DOM() , this.element;
}
;
_.toString$ = function toString_9(){
  if (!this.element) {
    return '(null handle)';
  }
  return $toString_0(($clinit_DOM() , this.element));
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 32);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.sinkEvents(typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler_0(this$static, handler, type_0){
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached_0()) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener_0(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents(bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static, true);
}

function $onBrowserEvent_3(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = $eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached_0()) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
    fire_0(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      setEventListener_0(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent_0(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 70)) {
    dynamicCast(this$static.parent_0, 70).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && ($clinit_DOM() , setEventListener_0(this$static.element, null));
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && ($clinit_DOM() , setEventListener_0(this$static.element, this$static));
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached_0() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached_0() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents_1(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(25, 32, $intern_22);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent = function fireEvent_1(event_0){
  $fireEvent_0(this, event_0);
}
;
_.isAttached_0 = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_3(event_0){
  $onBrowserEvent_3(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad_0(){
}
;
_.onUnload = function onUnload(){
}
;
_.sinkEvents = function sinkEvents(eventBitsToAdd){
  $sinkEvents(this, eventBitsToAdd);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 25);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplMozilla();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent_0(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $clinit_DOM();
  $insertChild(parent_0, resolve(child), index_0);
}

function previewEvent_0(evt){
  $clinit_DOM();
  var ret;
  ret = fire_4(handlers_0, evt);
  if (!ret && !!evt) {
    $eventStopPropagation(evt);
    $eventPreventDefault(evt);
  }
  return ret;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setIntStyleAttribute(elem, attr, value_0){
  $clinit_DOM();
  $setPropertyImpl(elem.style, attr, '' + value_0);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_3(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_3('CSS1Compat', allowedModes[0]) && $equals_3('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

var handlers_0;
function fire_4(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_15 && !!handlers && $isEventHandled(handlers, TYPE_15)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    singleton.revive();
    singleton.setNativeEvent(nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(singleton.isCanceled_0() && !singleton.isConsumed_0());
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

var TYPE_15, singleton;
function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImpl;
  historyEventSource = new History$HistoryEventSource;
  token_0 = getDecodedHash();
}

function getDecodedHash(){
  var hashToken, href_0, hashLoc;
  hashToken = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc > 0?href_0.substring(hashLoc):'');
  if (hashToken == null || !hashToken.length) {
    return '';
  }
  return $decodeHistoryToken(__substr(hashToken, 1, hashToken.length - 1));
}

function newItem(historyToken, issueEvent){
  $clinit_History();
  var updateToken;
  historyToken = historyToken == null?'':historyToken;
  if (!$equals_3(historyToken, token_0)) {
    token_0 = historyToken;
    updateToken = $encodeHistoryToken(historyToken);
    $wnd.location.hash = updateToken;
    issueEvent && fire_3(historyEventSource, historyToken);
  }
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals_3(hashToken, token_0)) {
    token_0 = hashToken;
    fire_3(historyEventSource, hashToken);
  }
}

var historyEventSource, token_0;
function $addValueChangeHandler(this$static, handler){
  return $addHandler(this$static.handlers, (!TYPE_12 && (TYPE_12 = new GwtEvent$Type) , TYPE_12), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(631, 1, $intern_12, History$HistoryEventSource);
_.fireEvent = function fireEvent_3(event_0){
  $fireEvent(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 631);
function $decodeHistoryToken(historyToken){
  return $wnd.decodeURI(historyToken.replace('%23', '#'));
}

function $encodeHistoryToken(historyToken){
  return $wnd.encodeURI(historyToken).replace('#', '%23');
}

function History$HistoryImpl(){
  var handler;
  handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}

defineClass(632, 1, {}, History$HistoryImpl);
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 632);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler_0(TYPE_10?TYPE_10:(TYPE_10 = new GwtEvent$Type), handler);
}

function addHandler_0(type_0, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler_0((!TYPE_11 && (TYPE_11 = new GwtEvent$Type) , TYPE_11), handler);
}

function confirm_0(msg){
  return $wnd.confirm(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent(handlers_1, event_0);
    return event_0.message_0;
  }
  return null;
}

function onResize_1(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_2((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_16 = new GwtEvent$Type;
}

function $setMessage(this$static, message){
  this$static.message_0 = message;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(528, $intern_11, {}, Window$ClosingEvent);
_.dispatch_0 = function dispatch_17(handler){
  $setMessage(this, dynamicCast(handler, 1259).onLeaveQuestion);
}
;
_.getAssociatedType_0 = function getAssociatedType_18(){
  return TYPE_16;
}
;
_.message_0 = null;
var TYPE_16;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 528);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(263, 165, $intern_12, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 263);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return $intern_23;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return $intern_24;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_19;
    case 'touchstart':
      return $intern_25;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_16;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_26;
    case 'gesturechange':
      return $intern_27;
    case 'gestureend':
      return $intern_28;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem_0();
    $initSyntheticMouseUpEvents();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 34)?maybeListener:null;
}

function setEventListener_0(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $getChild_0(elem, index_0){
  var count = 0, child = elem.firstChild;
  while (child) {
    if (child.nodeType == 1) {
      if (index_0 == count)
        return child;
      ++count;
    }
    child = child.nextSibling;
  }
  return null;
}

function $getChildCount(elem){
  var count = 0, child = elem.firstChild;
  while (child) {
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return count;
}

function $initEventSystem_0(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $insertChild(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $sinkBitlessEvent_0(elem, eventTypeName){
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & $intern_23 && (elem.onscroll = bits & $intern_23?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_1:null);
  chMask & $intern_24 && (elem.onmousewheel = bits & $intern_24?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_19 && (elem.onpaste = bits & $intern_19?dispatchEvent_1:null);
  chMask & $intern_25 && (elem.ontouchstart = bits & $intern_25?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_16 && (elem.ontouchend = bits & $intern_16?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_26 && (elem.ongesturestart = bits & $intern_26?dispatchEvent_1:null);
  chMask & $intern_27 && (elem.ongesturechange = bits & $intern_27?dispatchEvent_1:null);
  chMask & $intern_28 && (elem.ongestureend = bits & $intern_28?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  previewEvent_0(evt);
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOMImplStandard();
  !previewEvent_0(evt);
  return;
}

function dispatchDragEvent(evt){
  $eventPreventDefault(evt);
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = evt.currentTarget;
  $setPropertyString(element, '__gwtLastUnhandledEvent', evt.type);
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = evt.currentTarget;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function $clinit_DOMImplMozilla(){
  $clinit_DOMImplMozilla = emptyMethod;
  $clinit_DOMImplStandard();
  captureEventDispatchers['DOMMouseScroll'] = dispatchCapturedMouseEvent;
}

function $initSyntheticMouseUpEvents(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = ($clinit_DOMImplStandard() , captureElem);
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
}

function $sinkEvents_1(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
  bits & $intern_24 && elem.addEventListener('DOMMouseScroll', ($clinit_DOMImplStandard() , dispatchEvent_1), false);
}

function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize_1();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function $add_0(this$static, child){
  $add_6(this$static, !child?null:child.view.asWidget());
}

function $clear_1(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator(this$static.children);
  while (it.index_0 < it.this$01.size_0) {
    $next_2(it);
    $remove_11(it);
  }
}

defineClass(1290, 25, $intern_29);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand_0(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand_0(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 1290);
function $add_1(this$static, child, container){
  $removeFromParent_0(child);
  $add_11(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $doLogicalClear(this$static){
  !this$static.orphanCommand && (this$static.orphanCommand = new ComplexPanel$1);
  try {
    tryCommand_0(this$static, this$static.orphanCommand);
  }
   finally {
    this$static.children = new WidgetCollection(this$static);
  }
}

function $remove_1(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $remove_10(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(207, 1290, $intern_29);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove_0(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 207);
function $add_2(this$static, w){
  $add_1(this$static, w, ($clinit_DOM() , this$static.element));
}

function $remove_2(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(931, 207, $intern_29);
_.remove = function remove_1(w){
  return $remove_2(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 931);
function create_2(resource){
  return new ClippedImagePrototype(resource.url_0, resource.left_0, resource.top_0, resource.width_0, resource.height_0);
}

defineClass(1298, 1, {});
var Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbstractImagePrototype', 1298);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand_0(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 25);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 20)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_17(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(333, 332, $intern_13, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 333);
function AttachDetachException$1(){
}

defineClass(880, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_11(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 880);
function AttachDetachException$2(){
}

defineClass(881, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_12(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 881);
function $clinit_FocusWidget(){
  $clinit_FocusWidget = emptyMethod;
  $clinit_FocusImpl();
}

function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(104, 25, $intern_30);
_.getTabIndex = function getTabIndex(){
  return ($clinit_DOM() , this.element).tabIndex;
}
;
_.onAttach = function onAttach_2(){
  var tabIndex;
  $onAttach(this);
  tabIndex = this.getTabIndex();
  -1 == tabIndex && this.setTabIndex(0);
}
;
_.setFocus = function setFocus_0(focused){
  focused?$focus(($clinit_DOM() , this.element)):$blur(($clinit_DOM() , this.element));
}
;
_.setTabIndex = function setTabIndex(index_0){
  $setTabIndex(($clinit_DOM() , this.element), index_0);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 104);
function $setHTML(this$static, html){
  $setInnerHTML(($clinit_DOM() , this$static.element), html);
}

function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(348, 104, $intern_30);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 348);
function Button(){
  var e;
  $clinit_FocusWidget();
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.type = 'button' , e));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Button');
}

defineClass(43, 348, $intern_30, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 43);
function $setCellHorizontalAlignment(td, align_0){
  $setPropertyString(($clinit_DOM() , td), 'align', align_0.textAlignString);
}

function $setCellVerticalAlignment(td, align_0){
  $setCellVerticalAlignment_0(($clinit_DOM() , td), align_0);
}

function $setCellVerticalAlignment_0(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = ($clinit_DOM() , $doc.createElement('table'));
  this.body_0 = $doc.createElement('tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(271, 207, $intern_29);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 271);
function ComplexPanel$1(){
}

defineClass(879, 1, {}, ComplexPanel$1);
_.execute_2 = function execute_13(w){
  $setParent(w, null);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel/1', 879);
function $setTextOrHtml(this$static, content_0, isHtml){
  isHtml?$setInnerHTML(this$static.element, content_0):$setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(273, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 273);
function $clinit_DockPanel(){
  $clinit_DockPanel = emptyMethod;
  CENTER_0 = new DockPanel$DockLayoutConstant;
  LINE_START = new DockPanel$DockLayoutConstant;
  LINE_END = new DockPanel$DockLayoutConstant;
  EAST = new DockPanel$DockLayoutConstant;
  NORTH = new DockPanel$DockLayoutConstant;
  SOUTH = new DockPanel$DockLayoutConstant;
  WEST = new DockPanel$DockLayoutConstant;
}

function $add_5(this$static, widget, direction){
  var layout;
  if (direction == CENTER_0) {
    if (widget == this$static.center) {
      return;
    }
     else if (this$static.center) {
      throw new IllegalArgumentException_0('Only one CENTER widget may be added');
    }
  }
  $removeFromParent_0(widget);
  $add_11(this$static.children, widget);
  direction == CENTER_0 && (this$static.center = widget);
  layout = new DockPanel$LayoutData(direction);
  widget.layoutData = layout;
  $setCellHorizontalAlignment_0(widget, this$static.horzAlign);
  $setCellVerticalAlignment_1(widget, this$static.vertAlign);
  $realizeTable(this$static);
  $setParent(widget, this$static);
}

function $realizeTable(this$static){
  var bodyElem, centerTd, child, colCount, dir_0, i, it, it0, layout, logicalLeftCol, logicalRightCol, northRow, row, rowCount, rows_0, southRow, td;
  bodyElem = ($clinit_DOM() , this$static.body_0);
  while ($getChildCount(bodyElem) > 0) {
    $removeChild(bodyElem, (null , $getChild_0(bodyElem, 0)));
  }
  rowCount = 1;
  colCount = 1;
  for (it0 = new WidgetCollection$WidgetIterator(this$static.children); it0.index_0 < it0.this$01.size_0;) {
    child = $next_2(it0);
    dir_0 = dynamicCast(child.layoutData, 152).direction_0;
    dir_0 == NORTH || dir_0 == SOUTH?++rowCount:(dir_0 == EAST || dir_0 == WEST || dir_0 == LINE_START || dir_0 == LINE_END) && ++colCount;
  }
  rows_0 = initDim(Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit, $intern_2, 272, rowCount, 0, 1);
  for (i = 0; i < rowCount; ++i) {
    rows_0[i] = new DockPanel$TmpRow;
    rows_0[i].tr = $doc.createElement('tr');
    $appendChild(bodyElem, resolve(rows_0[i].tr));
  }
  logicalLeftCol = 0;
  logicalRightCol = colCount - 1;
  northRow = 0;
  southRow = rowCount - 1;
  centerTd = null;
  for (it = new WidgetCollection$WidgetIterator(this$static.children); it.index_0 < it.this$01.size_0;) {
    child = $next_2(it);
    layout = dynamicCast(child.layoutData, 152);
    td = $doc.createElement('td');
    layout.td = td;
    $setPropertyString(layout.td, 'align', layout.hAlign);
    $setPropertyImpl(layout.td.style, 'verticalAlign', layout.vAlign);
    $setPropertyString(layout.td, 'width', layout.width_0);
    $setPropertyString(layout.td, 'height', layout.height_0);
    if (layout.direction_0 == NORTH) {
      insertChild(rows_0[northRow].tr, td, rows_0[northRow].center);
      $appendChild(td, resolve(child.element));
      $setPropertyInt(td, 'colSpan', logicalRightCol - logicalLeftCol + 1);
      ++northRow;
    }
     else if (layout.direction_0 == SOUTH) {
      insertChild(rows_0[southRow].tr, td, rows_0[southRow].center);
      $appendChild(td, resolve(child.element));
      $setPropertyInt(td, 'colSpan', logicalRightCol - logicalLeftCol + 1);
      --southRow;
    }
     else if (layout.direction_0 == CENTER_0) {
      centerTd = td;
    }
     else if ($shouldAddToLogicalLeftOfTable(layout.direction_0)) {
      row = rows_0[northRow];
      insertChild(row.tr, td, row.center++);
      $appendChild(td, resolve(child.element));
      $setPropertyInt(td, 'rowSpan', southRow - northRow + 1);
      ++logicalLeftCol;
    }
     else if ($shouldAddToLogicalRightOfTable(layout.direction_0)) {
      row = rows_0[northRow];
      insertChild(row.tr, td, row.center);
      $appendChild(td, resolve(child.element));
      $setPropertyInt(td, 'rowSpan', southRow - northRow + 1);
      --logicalRightCol;
    }
  }
  if (this$static.center) {
    row = rows_0[northRow];
    insertChild(row.tr, centerTd, row.center);
    $appendChild(centerTd, resolve($getElement(this$static.center)));
  }
}

function $remove_5(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  if (removed) {
    w == this$static.center && (this$static.center = null);
    $realizeTable(this$static);
  }
  return removed;
}

function $setCellHeight(w){
  var data_0;
  data_0 = dynamicCast(w.layoutData, 152);
  data_0.height_0 = '100%';
  !!data_0.td && $setPropertyImpl(data_0.td.style, 'height', data_0.height_0);
}

function $setCellHorizontalAlignment_0(w, align_0){
  var data_0;
  data_0 = dynamicCast(w.layoutData, 152);
  data_0.hAlign = align_0.textAlignString;
  !!data_0.td && $setCellHorizontalAlignment(data_0.td, align_0);
}

function $setCellVerticalAlignment_1(w, align_0){
  var data_0;
  data_0 = dynamicCast(w.layoutData, 152);
  data_0.vAlign = align_0.verticalAlignString;
  !!data_0.td && $setCellVerticalAlignment(data_0.td, align_0);
}

function $setCellWidth(w, width_0){
  var data_0;
  data_0 = dynamicCast(w.layoutData, 152);
  data_0.width_0 = width_0;
  !!data_0.td && $setPropertyImpl(data_0.td.style, 'width', data_0.width_0);
}

function $shouldAddToLogicalLeftOfTable(widgetDirection){
  if (widgetDirection == LINE_START) {
    return true;
  }
  return widgetDirection == WEST;
}

function $shouldAddToLogicalRightOfTable(widgetDirection){
  if (widgetDirection == LINE_END) {
    return true;
  }
  return widgetDirection == EAST;
}

function DockPanel(){
  $clinit_DockPanel();
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyInt(($clinit_DOM() , this.table), 'cellSpacing', 0);
  $setPropertyInt(this.table, 'cellPadding', 0);
}

defineClass(878, 271, $intern_29, DockPanel);
_.remove = function remove_4(w){
  return $remove_5(this, w);
}
;
var CENTER_0, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
var Lcom_google_gwt_user_client_ui_DockPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel', 878);
function DockPanel$DockLayoutConstant(){
}

defineClass(169, 1, {}, DockPanel$DockLayoutConstant);
var Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel/DockLayoutConstant', 169);
function DockPanel$LayoutData(dir_0){
  this.hAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT).textAlignString;
  this.vAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP).verticalAlignString;
  this.direction_0 = dir_0;
}

defineClass(152, 1, {152:1}, DockPanel$LayoutData);
_.height_0 = '';
_.width_0 = '';
var Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel/LayoutData', 152);
function DockPanel$TmpRow(){
}

defineClass(272, 1, {272:1}, DockPanel$TmpRow);
_.center = 0;
var Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockPanel/TmpRow', 272);
function $add_6(this$static, w){
  $add_1(this$static, w, ($clinit_DOM() , this$static.element));
}

function $clear_2(this$static){
  try {
    $doLogicalClear(this$static);
  }
   finally {
    $removeAllChildren(($clinit_DOM() , this$static.element));
  }
}

function FlowPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
}

defineClass(148, 207, $intern_29, FlowPanel);
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 148);
function $clinit_FocusPanel(){
  $clinit_FocusPanel = emptyMethod;
  $clinit_FocusImpl();
}

function $setAutoHorizontalAlignment(this$static, autoAlignment){
  this$static.autoHorizontalAlignment = autoAlignment;
  $updateHorizontalAlignment(this$static);
}

function $updateHorizontalAlignment(this$static){
  var align_0;
  !this$static.autoHorizontalAlignment?(align_0 = null):this$static.autoHorizontalAlignment?(align_0 = this$static.autoHorizontalAlignment):(align_0 = this$static.autoHorizontalAlignment == ($clinit_HasAutoHorizontalAlignment() , ALIGN_CONTENT_START)?startOf(this$static.directionalTextHelper.textDir):endOf(this$static.directionalTextHelper.textDir));
  if (align_0 != this$static.horzAlign) {
    this$static.horzAlign = align_0;
    ($clinit_DOM() , this$static.element).style['textAlign'] = !this$static.horzAlign?'':this$static.horzAlign.textAlignString;
  }
}

function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(233, 25, $intern_22);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 233);
function $setText_0(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
  $updateHorizontalAlignment(this$static);
}

function Label(){
  LabelBase.call(this, $doc.createElement('div'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Label');
}

defineClass(10, 233, $intern_22, Label);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 10);
function $clinit_HasAutoHorizontalAlignment(){
  $clinit_HasAutoHorizontalAlignment = emptyMethod;
  ALIGN_CONTENT_START = new HasHorizontalAlignment$AutoHorizontalAlignmentConstant;
}

var ALIGN_CONTENT_START;
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  ALIGN_CENTER = new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_LOCALE_END = ALIGN_RIGHT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_CENTER, ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_END, ALIGN_LOCALE_START, ALIGN_RIGHT;
function HasHorizontalAlignment$AutoHorizontalAlignmentConstant(){
}

defineClass(705, 1, {}, HasHorizontalAlignment$AutoHorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 705);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

function endOf(direction){
  return direction == ($clinit_HasDirection$Direction() , LTR)?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):direction == RTL?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_END);
}

function startOf(direction){
  return direction == ($clinit_HasDirection$Direction() , LTR)?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):direction == RTL?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_START);
}

defineClass(231, 705, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 231);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  ALIGN_BOTTOM = new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  ALIGN_MIDDLE = new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_BOTTOM, ALIGN_MIDDLE, ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(265, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 265);
function $add_8(this$static, w){
  var td, td_0;
  td = (td_0 = ($clinit_DOM() , $doc.createElement('td')) , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add_1(this$static, w, td);
}

function $setHorizontalAlignment_0(this$static, align_0){
  this$static.horzAlign = align_0;
}

function $setVerticalAlignment(this$static, align_0){
  this$static.vertAlign = align_0;
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = ($clinit_DOM() , $doc.createElement('tr'));
  $appendChild(this.body_0, resolve(this.tableRow));
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(79, 271, $intern_29, HorizontalPanel);
_.remove = function remove_9(w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove_1(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 79);
function $setTargetHistoryToken(this$static, targetHistoryToken){
  var hash;
  this$static.targetHistoryToken = targetHistoryToken;
  hash = ($clinit_History() , $encodeHistoryToken(targetHistoryToken));
  $setPropertyString(this$static.anchorElem, 'href', '#' + hash);
}

function $setText_1(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
}

function Hyperlink(){
  Hyperlink_0.call(this, ($clinit_DOM() , $doc.createElement('div')));
}

function Hyperlink_0(elem){
  this.anchorElem = ($clinit_DOM() , $doc.createElement('a'));
  if (!elem) {
    $setElement(this, this.anchorElem);
  }
   else {
    $setElement_0(this, elem);
    $appendChild(this.element, resolve(this.anchorElem));
  }
  this.eventsToSink == -1?$sinkEvents_1(this.element, 1 | (this.element.__eventBits || 0)):(this.eventsToSink |= 1);
  $setClassName(this.element, 'gwt-Hyperlink');
  this.directionalTextHelper = new DirectionalTextHelper(this.anchorElem);
}

defineClass(234, 25, $intern_22, Hyperlink);
_.onBrowserEvent_0 = function onBrowserEvent_7(event_0){
  var mouseButtons, alt_0, ctrl, meta, shift_0, modifiers, middle, right;
  $onBrowserEvent_3(this, event_0);
  $clinit_DOM();
  if ($eventGetTypeInt(event_0.type) == 1 && (mouseButtons = $eventGetButton(event_0) , alt_0 = $eventGetAltKey(event_0) , ctrl = $eventGetCtrlKey(event_0) , meta = $eventGetMetaKey(event_0) , shift_0 = $eventGetShiftKey(event_0) , modifiers = alt_0 || ctrl || meta || shift_0 , middle = mouseButtons == 4 , right = mouseButtons == 2 , !modifiers && !middle && !right)) {
    $clinit_History();
    newItem(this.targetHistoryToken, true);
    $eventPreventDefault(event_0);
  }
}
;
var Lcom_google_gwt_user_client_ui_Hyperlink_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Hyperlink', 234);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function $setUrl(this$static, url_0){
  this$static.state.setUrl(this$static, url_0);
}

function Image_0(){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState(this));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Image');
}

function Image_2(url_0, left, top_0, width_0, height){
  $clinit_Image();
  $changeState(this, new Image$ClippedState(this, url_0, left, top_0, width_0, height));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Image');
}

defineClass(190, 25, $intern_22, Image_0, Image_2);
_.onBrowserEvent_0 = function onBrowserEvent_8(event_0){
  $clinit_DOM();
  if ($eventGetTypeInt(event_0.type) == 32768) {
    !!this.state && $setPropertyString(this.state.getImageElement(this), '__gwtLastUnhandledEvent', '');
    this.state.onLoadEvent(this);
  }
  $onBrowserEvent_3(this, event_0);
}
;
_.onLoad = function onLoad_3(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 190);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(this$static.getImageElement(image), '__gwtLastUnhandledEvent');
  $equals_3('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(335, 1, {});
_.onLoadEvent = function onLoadEvent(image){
}
;
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 335);
function $clinit_Image$ClippedState(){
  $clinit_Image$ClippedState = emptyMethod;
  $clinit_ClippedImageImpl();
}

function Image$ClippedState(image, url_0, left, top_0, width_0, height){
  $clinit_Image$ClippedState();
  this.width_0 = width_0;
  $replaceElement(image, $createStructure(url_0, left, top_0, width_0, height));
  image.eventsToSink == -1?($clinit_DOM() , $sinkEvents_1(image.element, 133333119 | (image.element.__eventBits || 0))):(image.eventsToSink |= 133333119);
}

defineClass(883, 335, {}, Image$ClippedState);
_.getImageElement = function getImageElement(image){
  return $clinit_DOM() , image.element;
}
;
_.getWidth = function getWidth(image){
  return this.width_0;
}
;
_.onLoadEvent = function onLoadEvent_0(image){
}
;
_.setUrl = function setUrl(image, url_0){
  $changeState(image, new Image$UnclippedState_0(image, url_0));
}
;
_.width_0 = 0;
var Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/ClippedState', 883);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(884, 1, {}, Image$State$1);
_.execute_1 = function execute_16(){
  var evt, evt_0;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    this.this$11.getImageElement(this.val$image2)['__gwtLastUnhandledEvent'] = 'load';
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent(this.this$11.getImageElement(this.val$image2), evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 884);
function Image$UnclippedState(image){
  $replaceElement(image, $doc.createElement('img'));
  $clinit_DOM();
  $sinkEvents_1(image.element, 32768);
  image.eventsToSink == -1?$sinkEvents_1(image.element, 133398655 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133398655);
}

function Image$UnclippedState_0(image, url_0){
  Image$UnclippedState.call(this, image);
  !!image.state && $setPropertyString(image.state.getImageElement(image), '__gwtLastUnhandledEvent', '');
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
}

defineClass(209, 335, {}, Image$UnclippedState, Image$UnclippedState_0);
_.getImageElement = function getImageElement_0(image){
  return $clinit_DOM() , image.element;
}
;
_.getWidth = function getWidth_0(image){
  return ($clinit_DOM() , image.element).width;
}
;
_.setUrl = function setUrl_0(image, url_0){
  !!image.state && $setPropertyString(image.state.getImageElement(image), '__gwtLastUnhandledEvent', '');
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
}
;
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 209);
var Lcom_google_gwt_user_client_ui_IsWidget_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'IsWidget');
function $schedule_0(this$static){
  this$static.duration = 0;
  this$static.canceled = false;
  if (!this$static.scheduled) {
    this$static.scheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), this$static);
  }
}

function LayoutCommand(layout){
  this.layout = layout;
}

defineClass(1095, 1, {}, LayoutCommand);
_.execute_1 = function execute_17(){
  this.scheduled = false;
  if (this.canceled) {
    return;
  }
  $layout(this.layout, this.duration, new LayoutCommand$1);
}
;
_.canceled = false;
_.duration = 0;
_.scheduled = false;
var Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand', 1095);
function LayoutCommand$1(){
}

defineClass(1096, 1, {}, LayoutCommand$1);
var Lcom_google_gwt_user_client_ui_LayoutCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand/1', 1096);
function $add_9(this$static, widget){
  $insert(this$static, widget, this$static.children.size_0);
}

function $insert(this$static, widget, beforeIndex){
  var layer;
  $removeFromParent_0(widget);
  $insert_0(this$static.children, widget, beforeIndex);
  layer = $attachChild(this$static.layout, ($clinit_DOM() , widget.element), widget);
  widget.layoutData = layer;
  $setParent(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function $onResize_1(this$static){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_2(child$iterator);
    instanceOf(child, 142) && dynamicCast(child, 142).onResize_0();
  }
}

defineClass(980, 207, $intern_31);
_.onAttach = function onAttach_6(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_5(){
  $onDetach(this);
}
;
_.onResize_0 = function onResize_7(){
  $onResize_1(this);
}
;
_.remove = function remove_10(w){
  var removed;
  removed = $remove_1(this, w);
  removed && $removeChild_0(this.layout, dynamicCast(w.layoutData, 198));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutPanel', 980);
function RootLayoutPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  this.layout = new Layout(($clinit_DOM() , this.element));
  this.layoutCmd = new LayoutCommand(this.layout);
  addResizeHandler(new RootLayoutPanel$1(this));
}

function get_1(){
  if (!singleton_0) {
    singleton_0 = new RootLayoutPanel;
    $add_2(($clinit_RootPanel() , get_2()), singleton_0);
  }
  return singleton_0;
}

defineClass(981, 980, $intern_31, RootLayoutPanel);
_.onLoad = function onLoad_5(){
  $fillParent(this.layout.parentElem);
}
;
var singleton_0;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel', 981);
function RootLayoutPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(982, 1, $intern_32, RootLayoutPanel$1);
_.onResize = function onResize_9(event_0){
  $onResize_1(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel/1', 982);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_18(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand_0(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    widgetsToDetach.map_0.clear_0();
    rootPanels.clear_0();
  }
}

function get_2(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast(rootPanels.get_4(null), 240);
  if (rp) {
    return rp;
  }
  rootPanels.size_1() == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  rootPanels.put(null, rp);
  $add_17(widgetsToDetach, rp);
  return rp;
}

function getBodyElement(){
  $clinit_RootPanel();
  return $doc.body;
}

defineClass(240, 931, $intern_33);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 240);
function RootPanel$1(){
}

defineClass(933, 1, {}, RootPanel$1);
_.execute_2 = function execute_19(w){
  w.isAttached_0() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 933);
function RootPanel$2(){
}

defineClass(934, 1, $intern_34, RootPanel$2);
_.onClose = function onClose(closeEvent){
  detachWidgets();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 934);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, getBodyElement());
}

defineClass(932, 240, $intern_33, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 932);
function $addItem(this$static, item_0){
  $addItem_1(this$static.root, item_0);
}

function $addItem_0(this$static, widget){
  return $addItem_2(this$static.root, widget);
}

function $adopt(this$static, widget, treeItem){
  this$static.childWidgets.put(widget, treeItem);
  $setParent(widget, this$static);
}

function $collectElementChain(this$static, chain, hRoot, hElem){
  if (!hElem || hElem == hRoot) {
    return;
  }
  $collectElementChain(this$static, chain, hRoot, ($clinit_DOM() , $clinit_DOM() , $getParentElement(hElem)));
  setCheck(chain.array, chain.array.length, hElem);
}

function $elementClicked(this$static, hElem){
  var chain, item_0;
  chain = new ArrayList;
  $collectElementChain(this$static, chain, ($clinit_DOM() , this$static.element), hElem);
  item_0 = $findItemByChain(this$static, chain, 0, this$static.root);
  if (!!item_0 && item_0 != this$static.root) {
    if ($getChildCount_0(item_0) > 0 && $isOrHasChild($getFirstChildElement((!!item_0.imageHolder || $convertToFullNode(item_0) , item_0.imageHolder)), hElem)) {
      $setState_0(item_0, !item_0.open_0);
      return true;
    }
     else if ($isOrHasChild(item_0.element, hElem)) {
      $onSelection(this$static, item_0, !shouldTreeDelegateFocusToElement(hElem));
      return true;
    }
  }
  return false;
}

function $findDeepestOpenChild(this$static, item_0){
  if (!item_0.open_0) {
    return item_0;
  }
  return $findDeepestOpenChild(this$static, $getChild_1(item_0, $getChildCount_0(item_0) - 1));
}

function $findItemByChain(this$static, chain, idx, root){
  var child, hCurElem, i, n, retItem;
  if (idx == chain.array.length) {
    return root;
  }
  hCurElem = (checkElementIndex(idx, chain.array.length) , dynamicCastJso(chain.array[idx]));
  for (i = 0 , n = $getChildCount_0(root); i < n; ++i) {
    child = $getChild_1(root, i);
    $clinit_DOM();
    if (child.element == hCurElem) {
      retItem = $findItemByChain(this$static, chain, idx + 1, $getChild_1(root, i));
      if (!retItem) {
        return child;
      }
      return retItem;
    }
  }
  return $findItemByChain(this$static, chain, idx + 1, root);
}

function $fireStateChanged(this$static, open_0){
  open_0?undefined:fire_1(this$static);
}

function $getTopClosedParent(this$static, item_0){
  var parent_0, topClosedParent;
  topClosedParent = null;
  parent_0 = item_0.parent_0;
  while (!!parent_0 && parent_0 != this$static.root) {
    parent_0.open_0 || (topClosedParent = parent_0);
    parent_0 = parent_0.parent_0;
  }
  return topClosedParent;
}

function $init_1(this$static, images){
  $setImages(this$static, images, false);
  $setElement_0(this$static, ($clinit_DOM() , $doc.createElement('div')));
  this$static.element.style['position'] = 'relative';
  this$static.element.style['zoom'] = '1';
  this$static.focusable = ($clinit_FocusPanel() , createFocusable0(($clinit_FocusImpl() , focusHandler_0)?focusHandler_0:(focusHandler_0 = $createFocusHandler())));
  $setPropertyImpl(this$static.focusable.style, 'fontSize', '0');
  $setPropertyImpl(this$static.focusable.style, 'position', 'absolute');
  $setPropertyImpl(this$static.focusable.style, 'outline', '0px');
  $setAttribute(this$static.focusable, 'hideFocus', 'true');
  setIntStyleAttribute(this$static.focusable, 'zIndex', -1);
  $appendChild(this$static.element, resolve(this$static.focusable));
  this$static.eventsToSink == -1?$sinkEvents_1(this$static.element, 901 | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= 901);
  $sinkEvents_1(this$static.focusable, 6144);
  this$static.root = new TreeItem_1(true);
  $setTree(this$static.root, this$static);
  $setClassName(this$static.element, 'gwt-Tree');
  $clinit_Roles();
  $set(TREE, this$static.focusable);
}

function $keyboardNavigation(this$static, event_0){
  var code_0, topClosedParent;
  code_0 = $eventGetKeyCode(event_0);
  switch (code_0) {
    case 38:
      {
        $moveSelectionUp(this$static, this$static.curSelection);
        break;
      }

    case 40:
      {
        $moveSelectionDown(this$static, this$static.curSelection, true);
        break;
      }

    case 37:
      {
        $maybeCollapseTreeItem(this$static);
        break;
      }

    case 39:
      {
        topClosedParent = $getTopClosedParent(this$static, this$static.curSelection);
        topClosedParent?$setSelectedItem(this$static, topClosedParent):this$static.curSelection.open_0?$getChildCount_0(this$static.curSelection) > 0 && $setSelectedItem(this$static, $getChild_1(this$static.curSelection, 0)):$setState_0(this$static.curSelection, true);
        break;
      }

    default:{
        return;
      }

  }
}

function $maybeCollapseTreeItem(this$static){
  var parent_0, topClosedParent;
  topClosedParent = $getTopClosedParent(this$static, this$static.curSelection);
  if (topClosedParent) {
    $setSelectedItem(this$static, topClosedParent);
  }
   else if (this$static.curSelection.open_0) {
    $setState_0(this$static.curSelection, false);
  }
   else {
    parent_0 = this$static.curSelection.parent_0;
    !!parent_0 && $setSelectedItem(this$static, parent_0);
  }
}

function $maybeUpdateSelection(this$static, itemThatChangedState, isItemOpening){
  var tempItem;
  if (!isItemOpening) {
    tempItem = this$static.curSelection;
    while (tempItem) {
      if (tempItem == itemThatChangedState) {
        $setSelectedItem(this$static, itemThatChangedState);
        return;
      }
      tempItem = tempItem.parent_0;
    }
  }
}

function $moveFocus(this$static){
  var containerLeft, containerTop, focusableWidget, height, left, selectedElem, top_0, width_0;
  focusableWidget = $getFocusable(this$static.curSelection);
  if (focusableWidget) {
    focusableWidget.setFocus(true);
    this$static.scrollOnSelectEnabled && $scrollIntoView($getElement(dynamicCast(focusableWidget, 25)));
  }
   else {
    if (this$static.scrollOnSelectEnabled) {
      selectedElem = this$static.curSelection.contentElem;
      containerLeft = $getAbsoluteLeft(($clinit_DOM() , this$static.element));
      containerTop = $getAbsoluteTop(this$static.element);
      left = $getAbsoluteLeftImpl($getViewportElement(selectedElem.ownerDocument), selectedElem) - containerLeft;
      top_0 = $getAbsoluteTopImpl($getViewportElement(selectedElem.ownerDocument), selectedElem) - containerTop;
      width_0 = $getPropertyInt(selectedElem, 'offsetWidth');
      height = $getPropertyInt(selectedElem, 'offsetHeight');
      if (width_0 == 0 || height == 0) {
        setIntStyleAttribute(this$static.focusable, 'left', 0);
        setIntStyleAttribute(this$static.focusable, 'top', 0);
        return;
      }
      $setPropertyImpl(this$static.focusable.style, 'left', left + 'px');
      $setPropertyImpl(this$static.focusable.style, 'top', top_0 + 'px');
      $setPropertyImpl(this$static.focusable.style, 'width', width_0 + 'px');
      $setPropertyImpl(this$static.focusable.style, 'height', height + 'px');
      $scrollIntoView(this$static.focusable);
    }
    $updateAriaAttributes(this$static);
    $focus(($clinit_FocusPanel() , this$static.focusable));
  }
}

function $moveSelectionDown(this$static, sel, dig){
  var idx, parent_0, topClosedParent;
  if (sel == this$static.root) {
    return;
  }
  topClosedParent = $getTopClosedParent(this$static, sel);
  if (topClosedParent) {
    $moveSelectionDown(this$static, topClosedParent, false);
    return;
  }
  parent_0 = sel.parent_0;
  !parent_0 && (parent_0 = this$static.root);
  idx = $getChildIndex(parent_0, sel);
  !dig || !sel.open_0?idx < $getChildCount_0(parent_0) - 1?$onSelection(this$static, $getChild_1(parent_0, idx + 1), true):$moveSelectionDown(this$static, parent_0, false):$getChildCount_0(sel) > 0 && $onSelection(this$static, $getChild_1(sel, 0), true);
}

function $moveSelectionUp(this$static, sel){
  var idx, parent_0, sibling, topClosedParent;
  topClosedParent = $getTopClosedParent(this$static, sel);
  if (topClosedParent) {
    $onSelection(this$static, topClosedParent, true);
    return;
  }
  parent_0 = sel.parent_0;
  !parent_0 && (parent_0 = this$static.root);
  idx = $getChildIndex(parent_0, sel);
  if (idx > 0) {
    sibling = $getChild_1(parent_0, idx - 1);
    $onSelection(this$static, $findDeepestOpenChild(this$static, sibling), true);
  }
   else {
    $onSelection(this$static, parent_0, true);
  }
}

function $onSelection(this$static, item_0, moveFocus){
  if (item_0 == this$static.root) {
    return;
  }
  !!this$static.curSelection && $setSelected(this$static.curSelection, false);
  this$static.curSelection = item_0;
  if (this$static.curSelection) {
    moveFocus && $moveFocus(this$static);
    $setSelected(this$static.curSelection, true);
  }
}

function $orphan(this$static, widget){
  try {
    $setParent(widget, null);
  }
   finally {
    this$static.childWidgets.remove_3(widget);
  }
}

function $remove_8(this$static, w){
  var item_0;
  item_0 = dynamicCast(this$static.childWidgets.get_4(w), 98);
  if (!item_0) {
    return false;
  }
  $setWidget_2(item_0, null);
  return true;
}

function $removeItem(this$static, item_0){
  $removeItem_0(this$static.root, item_0);
}

function $setImages(this$static, images, useLeafImages){
  var image, size_0;
  this$static.images = images;
  this$static.useLeafImages = useLeafImages;
  if (!useLeafImages) {
    image = $createImage(images.treeLeaf);
    ($clinit_DOM() , image.element).style['visibility'] = 'hidden';
    $add_2(($clinit_RootPanel() , get_2()), image);
    size_0 = image.state.getWidth(image) + 7;
    $removeFromParent_0(image);
    this$static.indentValue = size_0 + 'px';
  }
}

function $setSelectedItem(this$static, item_0){
  if (!item_0) {
    if (!this$static.curSelection) {
      return;
    }
    $setSelected(this$static.curSelection, false);
    this$static.curSelection = null;
    return;
  }
  $onSelection(this$static, item_0, true);
}

function $showClosedImage(this$static, treeItem){
  $showImage(treeItem, this$static.images.treeClosed);
}

function $showImage(treeItem, proto){
  var child, holder;
  holder = (!!treeItem.imageHolder || $convertToFullNode(treeItem) , treeItem.imageHolder);
  child = ($clinit_DOM() , $clinit_DOM() , $getFirstChildElement(holder));
  !child?$appendChild(holder, resolve($createStructure(proto.url_0, proto.left_0, proto.top_0, proto.width_0, proto.height_0))):($adjust(child, proto.url_0, proto.left_0, proto.top_0, proto.width_0, proto.height_0) , undefined);
}

function $showLeafImage(this$static, treeItem){
  this$static.useLeafImages || !!treeItem.imageHolder?$showImage(treeItem, this$static.images.treeLeaf):(($clinit_DOM() , treeItem.element).style['paddingLeft'] = this$static.indentValue , undefined);
}

function $showOpenImage(this$static, treeItem){
  $showImage(treeItem, this$static.images.treeOpen);
}

function $updateAriaAttributes(this$static){
  var curSelectionContentElem, curSelectionIndex, curSelectionLevel, curSelectionParent, tempItem;
  curSelectionContentElem = this$static.curSelection.contentElem;
  curSelectionLevel = -1;
  tempItem = this$static.curSelection;
  while (tempItem) {
    tempItem = tempItem.parent_0;
    ++curSelectionLevel;
  }
  $clinit_Roles();
  $set_0(($clinit_Property() , LEVEL), curSelectionContentElem, initValues(getClassLiteralForArray(Ljava_lang_Integer_2_classLit, 1), $intern_2, 65, 0, [valueOf_1(curSelectionLevel + 1)]));
  curSelectionParent = this$static.curSelection.parent_0;
  !curSelectionParent && (curSelectionParent = this$static.root);
  $setAriaSetsizeProperty(curSelectionContentElem, $getChildCount_0(curSelectionParent));
  curSelectionIndex = $getChildIndex(curSelectionParent, this$static.curSelection);
  $set_0(POSINSET, curSelectionContentElem, initValues(getClassLiteralForArray(Ljava_lang_Integer_2_classLit, 1), $intern_2, 65, 0, [valueOf_1(curSelectionIndex + 1)]));
  $getChildCount_0(this$static.curSelection) == 0?$remove(($clinit_State() , EXPANDED), curSelectionContentElem):$setAriaExpandedState(curSelectionContentElem, ($clinit_ExpandedValue() , this$static.curSelection.open_0?TRUE:FALSE));
  $setAriaSelectedState(curSelectionContentElem, ($clinit_SelectedValue() , $clinit_SelectedValue() , TRUE_0));
  $setAriaActivedescendantProperty(this$static.focusable, new Id(curSelectionContentElem));
}

function Tree(){
  this.childWidgets = new HashMap;
  $init_1(this, new Tree$ImageAdapter);
}

function shouldTreeDelegateFocusToElement(elem){
  var name_0 = elem.nodeName;
  return name_0 == 'SELECT' || name_0 == 'INPUT' || name_0 == 'TEXTAREA' || name_0 == 'OPTION' || name_0 == 'BUTTON' || name_0 == 'LABEL';
}

defineClass(882, 25, {36:1, 9:1, 34:1, 108:1, 124:1, 33:1, 70:1, 15:1, 32:1, 25:1, 26:1}, Tree);
_.doAttachChildren = function doAttachChildren_2(){
  try {
    tryCommand_0(this, ($clinit_AttachDetachException() , attachCommand));
  }
   finally {
    $clinit_DOM();
    setEventListener_0(this.focusable, this);
  }
}
;
_.doDetachChildren = function doDetachChildren_2(){
  try {
    tryCommand_0(this, ($clinit_AttachDetachException() , detachCommand));
  }
   finally {
    $clinit_DOM();
    setEventListener_0(this.focusable, null);
  }
}
;
_.iterator = function iterator_4(){
  var widgets;
  widgets = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 25, this.childWidgets.size_1(), 0, 1);
  (new AbstractMap$1(this.childWidgets)).toArray_0(widgets);
  return new WidgetIterators$1(widgets, this);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_11(event_0){
  var chain, e, eventType, item_0;
  eventType = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  switch (eventType) {
    case 128:
      {
        if (!this.curSelection) {
          $getChildCount_0(this.root) > 0 && $onSelection(this, $getChild_1(this.root, 0), true);
          $onBrowserEvent_3(this, event_0);
          return;
        }
      }

    case 256:
    case 512:
      if ($eventGetAltKey(event_0) || $eventGetMetaKey(event_0)) {
        $onBrowserEvent_3(this, event_0);
        return;
      }

  }
  switch (eventType) {
    case 1:
      {
        e = event_0.target;
        if (shouldTreeDelegateFocusToElement(e))
        ;
        else 
          !!this.curSelection && $isOrHasChild(this.curSelection.contentElem, e) && $focus(($clinit_FocusPanel() , this.focusable));
        break;
      }

    case 4:
      {
        event_0.currentTarget == this.element && $eventGetButton(event_0) == 1 && $elementClicked(this, event_0.target);
        break;
      }

    case 128:
      {
        $keyboardNavigation(this, event_0);
        this.lastWasKeyDown = true;
        break;
      }

    case 256:
      {
        this.lastWasKeyDown || $keyboardNavigation(this, event_0);
        this.lastWasKeyDown = false;
        break;
      }

    case 512:
      {
        if ($eventGetKeyCode(event_0) == 9) {
          chain = new ArrayList;
          $collectElementChain(this, chain, this.element, event_0.target);
          item_0 = $findItemByChain(this, chain, 0, this.root);
          item_0 != this.curSelection && $setSelectedItem(this, item_0);
        }
        this.lastWasKeyDown = false;
        break;
      }

  }
  switch (eventType) {
    case 128:
    case 512:
      {
        if (isArrowKey($eventGetKeyCode(event_0))) {
          $eventStopPropagation(event_0);
          $eventPreventDefault(event_0);
          return;
        }
      }

  }
  $onBrowserEvent_3(this, event_0);
}
;
_.onLoad = function onLoad_6(){
  $updateStateRecursive(this.root);
}
;
_.remove = function remove_12(w){
  return $remove_8(this, w);
}
;
_.setFocus = function setFocus_2(focus_0){
  focus_0?$focus(($clinit_FocusPanel() , this.focusable)):$blur(($clinit_FocusPanel() , this.focusable));
}
;
_.isAnimationEnabled = false;
_.lastWasKeyDown = false;
_.scrollOnSelectEnabled = true;
_.useLeafImages = false;
var Lcom_google_gwt_user_client_ui_Tree_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Tree', 882);
function Tree$ImageAdapter(){
  this.treeClosed = create_2(($clinit_Tree_Resources_fr_InlineClientBundleGenerator$treeClosedInitializer() , treeClosed));
  this.treeLeaf = create_2(($clinit_Tree_Resources_fr_InlineClientBundleGenerator$treeLeafInitializer() , treeLeaf));
  this.treeOpen = create_2(($clinit_Tree_Resources_fr_InlineClientBundleGenerator$treeOpenInitializer() , treeOpen));
}

defineClass(334, 1, {}, Tree$ImageAdapter);
var Lcom_google_gwt_user_client_ui_Tree$ImageAdapter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Tree/ImageAdapter', 334);
function $clinit_TreeItem(){
  $clinit_TreeItem = emptyMethod;
  itemAnimation = new TreeItem$TreeItemAnimation;
  new TreeItem$TreeItemImpl;
}

function $addItem_1(this$static, item_0){
  (!!item_0.parent_0 || !!item_0.tree) && (item_0.parent_0?$removeItem_0(item_0.parent_0, item_0):!!item_0.tree && $removeItem(item_0.tree, item_0));
  $insertItem_0(this$static, $getChildCount_0(this$static), item_0);
}

function $addItem_2(this$static, widget){
  var ret;
  ret = new TreeItem_0(widget);
  (!!ret.parent_0 || !!ret.tree) && (ret.parent_0?$removeItem_0(ret.parent_0, ret):!!ret.tree && $removeItem(ret.tree, ret));
  $insertItem_0(this$static, $getChildCount_0(this$static), ret);
  return ret;
}

function $getChild_1(this$static, index_0){
  if (index_0 < 0 || index_0 >= $getChildCount_0(this$static)) {
    return null;
  }
  return dynamicCast($get_7(this$static.children, index_0), 98);
}

function $getChildCount_0(this$static){
  if (!this$static.children) {
    return 0;
  }
  return this$static.children.array.length;
}

function $getChildIndex(this$static, child){
  if (!this$static.children) {
    return -1;
  }
  return $indexOf_2(this$static.children, child, 0);
}

function $getFocusable(this$static){
  var focus_0, w, w_0;
  focus_0 = (w_0 = this$static.widget , instanceOf(w_0, 124)?dynamicCast(w_0, 124):null);
  if (!focus_0) {
    w = this$static.widget;
    instanceOf(w, 108) && (focus_0 = dynamicCast(w, 108));
  }
  return focus_0;
}

function $insertItem_0(this$static, beforeIndex, item_0){
  var beforeElem, childContainer, childCount, margin;
  (!!item_0.parent_0 || !!item_0.tree) && (item_0.parent_0?$removeItem_0(item_0.parent_0, item_0):!!item_0.tree && $removeItem(item_0.tree, item_0));
  childCount = $getChildCount_0(this$static);
  if (beforeIndex < 0 || beforeIndex > childCount) {
    throw new IndexOutOfBoundsException;
  }
  !this$static.children && ($convertToFullNode(this$static) , this$static.childSpanElem = ($clinit_DOM() , $doc.createElement('div')) , $clinit_DOM() , $appendChild(this$static.element, resolve(this$static.childSpanElem)) , $setPropertyImpl(this$static.childSpanElem.style, 'whiteSpace', 'nowrap') , this$static.children = new ArrayList);
  margin = this$static.isRoot?0:16;
  ($clinit_DOM() , item_0.element).style['marginLeft'] = margin + ($clinit_Style$Unit() , 'px');
  childContainer = this$static.isRoot?$getElement(this$static.tree):this$static.childSpanElem;
  if (beforeIndex == childCount) {
    $appendChild(childContainer, item_0.element);
  }
   else {
    beforeElem = $getElement($getChild_1(this$static, beforeIndex));
    $insertBefore(childContainer, item_0.element, beforeElem);
  }
  $setParentItem(item_0, this$static.isRoot?null:this$static);
  $add_15(this$static.children, beforeIndex, item_0);
  $setTree(item_0, this$static.tree);
  !this$static.isRoot && this$static.children.array.length == 1 && $updateState_0(this$static, false, false);
}

function $removeItem_0(this$static, item_0){
  var oldTree;
  if (!this$static.children || $indexOf_2(this$static.children, item_0, 0) == -1) {
    return;
  }
  oldTree = this$static.tree;
  $setTree(item_0, null);
  this$static.isRoot?$removeChild(($clinit_DOM() , oldTree.element), item_0.element):$removeChild(this$static.childSpanElem, ($clinit_DOM() , item_0.element));
  item_0.parent_0 = null;
  $remove_17(this$static.children, item_0);
  !this$static.isRoot && this$static.children.array.length == 0 && $updateState_0(this$static, false, false);
}

function $setParentItem(this$static, parent_0){
  this$static.parent_0 = parent_0;
}

function $setSelected(this$static, selected){
  if (this$static.selected == selected) {
    return;
  }
  this$static.selected = selected;
  setStyleName(this$static.contentElem, 'gwt-TreeItem-selected', selected);
}

function $setState_0(this$static, open_0){
  if (open_0 && $getChildCount_0(this$static) == 0) {
    return;
  }
  if (this$static.open_0 != open_0) {
    this$static.open_0 = open_0;
    $updateState_0(this$static, true, true);
    !!this$static.tree && $fireStateChanged(this$static.tree, open_0);
  }
}

function $setTree(this$static, newTree){
  var i, n;
  if (this$static.tree == newTree) {
    return;
  }
  if (this$static.tree) {
    this$static.tree.curSelection == this$static && $setSelectedItem(this$static.tree, null);
    !!this$static.widget && $orphan(this$static.tree, this$static.widget);
  }
  this$static.tree = newTree;
  for (i = 0 , n = $getChildCount_0(this$static); i < n; ++i) {
    $setTree(dynamicCast($get_7(this$static.children, i), 98), newTree);
  }
  $updateState_0(this$static, false, true);
  !!newTree && !!this$static.widget && $adopt(newTree, this$static.widget, this$static);
}

function $setWidget_2(this$static, newWidget){
  !!newWidget && $removeFromParent_0(newWidget);
  if (this$static.widget) {
    try {
      !!this$static.tree && $orphan(this$static.tree, this$static.widget);
    }
     finally {
      $removeChild(this$static.contentElem, $getElement(this$static.widget));
      this$static.widget = null;
    }
  }
  $setInnerHTML(this$static.contentElem, '');
  this$static.widget = newWidget;
  if (newWidget) {
    $clinit_DOM();
    $appendChild(this$static.contentElem, resolve(newWidget.element));
    !!this$static.tree && $adopt(this$static.tree, this$static.widget, this$static);
    shouldTreeDelegateFocusToElement($getElement(this$static.widget)) && $setAttribute($getElement(this$static.widget), 'tabIndex', '-1');
  }
}

function $updateState_0(this$static, animate, updateTreeSelection){
  if (!this$static.tree || !this$static.tree.attached) {
    return;
  }
  if ($getChildCount_0(this$static) == 0) {
    !!this$static.childSpanElem && setVisible(this$static.childSpanElem, false);
    $showLeafImage(this$static.tree, this$static);
    return;
  }
  animate && !!this$static.tree && this$static.tree.attached?$setItemState(itemAnimation, this$static, this$static.tree.isAnimationEnabled):$setItemState(itemAnimation, this$static, false);
  this$static.open_0?$showOpenImage(this$static.tree, this$static):$showClosedImage(this$static.tree, this$static);
  updateTreeSelection && $maybeUpdateSelection(this$static.tree, this$static, this$static.open_0);
}

function $updateStateRecursive(this$static){
  $updateStateRecursiveHelper(this$static);
  $maybeUpdateSelection(this$static.tree, this$static, this$static.open_0);
}

function $updateStateRecursiveHelper(this$static){
  var i, n;
  $updateState_0(this$static, false, false);
  for (i = 0 , n = $getChildCount_0(this$static); i < n; ++i) {
    $updateStateRecursiveHelper(dynamicCast($get_7(this$static.children, i), 98));
  }
}

function TreeItem(){
  $clinit_TreeItem();
  TreeItem_1.call(this, false);
}

function TreeItem_0(widget){
  TreeItem.call(this);
  $setWidget_2(this, widget);
}

function TreeItem_1(isRoot){
  $clinit_TreeItem();
  var elem;
  this.isRoot = isRoot;
  elem = ($clinit_DOM() , BASE_BARE_ELEM.cloneNode(true));
  $setElement_0(this, elem);
  this.contentElem = $getFirstChildElement(elem);
  $setAttribute(this.contentElem, 'id', $createUniqueId($doc));
  isRoot && ($convertToFullNode(this) , this.childSpanElem = $doc.createElement('div') , $appendChild(this.element, resolve(this.childSpanElem)) , $setPropertyImpl(this.childSpanElem.style, 'whiteSpace', 'nowrap') , this.children = new ArrayList);
}

defineClass(98, 32, {33:1, 98:1, 32:1}, TreeItem, TreeItem_0, TreeItem_1);
_.isRoot = false;
_.open_0 = false;
_.selected = false;
var BASE_BARE_ELEM, BASE_INTERNAL_ELEM, itemAnimation;
var Lcom_google_gwt_user_client_ui_TreeItem_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TreeItem', 98);
function $onUpdate_0(this$static, progress){
  var height, scrollWidth;
  height = round_int(progress * this$static.scrollHeight_0);
  this$static.opening || (height = this$static.scrollHeight_0 - height);
  height = height > 1?height:1;
  this$static.curItem.childSpanElem.style['height'] = height + 'px';
  scrollWidth = $getPropertyInt(this$static.curItem.childSpanElem, 'scrollWidth');
  this$static.curItem.childSpanElem.style['width'] = scrollWidth + 'px';
}

function $setItemState(this$static, item_0, animate){
  $cancel(this$static);
  if (animate) {
    this$static.curItem = item_0;
    this$static.opening = item_0.open_0;
    $run(this$static, min_0(200, 75 * $getChildCount_0(this$static.curItem)), now_1(), null);
  }
   else {
    setVisible(item_0.childSpanElem, item_0.open_0);
  }
}

function TreeItem$TreeItemAnimation(){
  Animation.call(this);
}

defineClass(947, 238, {}, TreeItem$TreeItemAnimation);
_.onComplete = function onComplete_2(){
  if (this.curItem) {
    if (this.opening) {
      setVisible(this.curItem.childSpanElem, true);
      $onUpdate_0(this, 1);
      $setPropertyImpl(this.curItem.childSpanElem.style, 'height', 'auto');
    }
     else {
      setVisible(this.curItem.childSpanElem, false);
    }
    $setPropertyImpl(this.curItem.childSpanElem.style, 'overflow', 'visible');
    $setPropertyImpl(this.curItem.childSpanElem.style, 'width', 'auto');
    this.curItem = null;
  }
}
;
_.onStart = function onStart_1(){
  this.scrollHeight_0 = 0;
  this.opening || (this.scrollHeight_0 = (this.curItem.childSpanElem.scrollHeight || 0) | 0);
  $setPropertyImpl(this.curItem.childSpanElem.style, 'overflow', 'hidden');
  $onUpdate_0(this, (1 + cos_0($intern_1)) / 2);
  if (this.opening) {
    setVisible(this.curItem.childSpanElem, true);
    this.scrollHeight_0 = (this.curItem.childSpanElem.scrollHeight || 0) | 0;
  }
}
;
_.onUpdate = function onUpdate_1(progress){
  $onUpdate_0(this, progress);
}
;
_.curItem = null;
_.opening = true;
_.scrollHeight_0 = 0;
var Lcom_google_gwt_user_client_ui_TreeItem$TreeItemAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TreeItem/TreeItemAnimation', 947);
function $convertToFullNode(item_0){
  var itemTable, tdContent, tdImg, tr;
  if (!item_0.imageHolder) {
    itemTable = ($clinit_DOM() , ($clinit_TreeItem() , BASE_INTERNAL_ELEM).cloneNode(true));
    $appendChild(item_0.element, resolve(itemTable));
    tr = $getFirstChildElement($getFirstChildElement(itemTable));
    tdImg = $getFirstChildElement(tr);
    tdContent = tdImg.nextSibling;
    item_0.element.style['padding'] = '0px';
    $appendChild(tdContent, resolve(item_0.contentElem));
    item_0.imageHolder = tdImg;
  }
}

function $initializeClonableElements(){
  var contentElem, tbody, tdContent, tdImg, tr;
  $clinit_TreeItem();
  BASE_INTERNAL_ELEM = ($clinit_DOM() , $doc.createElement('table'));
  contentElem = $doc.createElement('div');
  tbody = $doc.createElement('tbody');
  tr = $doc.createElement('tr');
  tdImg = $doc.createElement('td');
  tdContent = $doc.createElement('td');
  $appendChild(BASE_INTERNAL_ELEM, resolve(tbody));
  $appendChild(tbody, resolve(tr));
  $appendChild(tr, resolve(tdImg));
  $appendChild(tr, resolve(tdContent));
  $setPropertyImpl(tdImg.style, 'verticalAlign', 'middle');
  $setPropertyImpl(tdContent.style, 'verticalAlign', 'middle');
  $appendChild(tdContent, resolve(contentElem));
  $setPropertyImpl(contentElem.style, 'display', 'inline');
  $setClassName(contentElem, 'gwt-TreeItem');
  $setPropertyImpl(BASE_INTERNAL_ELEM.style, 'whiteSpace', 'nowrap');
  BASE_BARE_ELEM = $doc.createElement('div');
  $setPropertyImpl(BASE_BARE_ELEM.style, 'padding', '3px');
  $appendChild(BASE_BARE_ELEM, resolve(contentElem));
  $clinit_Roles();
  $set(TREEITEM, contentElem);
}

function TreeItem$TreeItemImpl(){
  $initializeClonableElements();
}

defineClass(946, 1, {}, TreeItem$TreeItemImpl);
var Lcom_google_gwt_user_client_ui_TreeItem$TreeItemImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TreeItem/TreeItemImpl', 946);
var treeClosed, treeLeaf, treeOpen;
function $clinit_Tree_Resources_fr_InlineClientBundleGenerator$treeClosedInitializer(){
  $clinit_Tree_Resources_fr_InlineClientBundleGenerator$treeClosedInitializer = emptyMethod;
  treeClosed = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/gif;base64,R0lGODlhEAAQAIQaAFhorldnrquz1mFxsvz9/vr6/M3Q2ZGbw5mixvb3+Gp5t2Nys77F4GRzs9ze4mt6uGV1s8/R2VZnrl5usFdortPV2/P09+3u8eXm6lZnrf///wAAzP///////////////yH5BAEAAB8ALAAAAAAQABAAAAVE4CeOZGmeaKquo5K974MuTKHdhDCcgOVvvoTkRLkYN8bL0ETBbJ5PTIaIqW6q0lPAYcVOTRNEpEI2HCYoCOzVYLnf7hAAOw==')), 16, 16);
}

function $clinit_Tree_Resources_fr_InlineClientBundleGenerator$treeLeafInitializer(){
  $clinit_Tree_Resources_fr_InlineClientBundleGenerator$treeLeafInitializer = emptyMethod;
  treeLeaf = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/gif;base64,R0lGODlhEAAQAJEAAP///wAAAP///wAAACH5BAEAAAIALAAAAAAQABAAAAIOlI+py+0Po5y02ouzPgUAOw==')), 16, 16);
}

function $clinit_Tree_Resources_fr_InlineClientBundleGenerator$treeOpenInitializer(){
  $clinit_Tree_Resources_fr_InlineClientBundleGenerator$treeOpenInitializer = emptyMethod;
  treeOpen = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/gif;base64,R0lGODlhEAAQAIQaAFhorldnrquz1mFxsvz9/vr6/M3Q2ZGbw5mixvb3+Gp5t2Nys77F4GRzs9ze4mt6uGV1s8/R2VZnrl5usFdortPV2/P09+3u8eXm6lZnrf///wAAzP///////////////yH5BAEAAB8ALAAAAAAQABAAAAVD4CeOZGmeaKquo5K974MuTKHdhDCcgOVfvoTkRLkYj5ehiYLZOJ2YDBFDvVCjp4CjepWaJohIZWw4TFAQ2KvBarvbIQA7')), 16, 16);
}

function $add_11(this$static, w){
  $insert_0(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_0(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 25, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_9(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_10(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_9(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 25, 4, 0, 1);
}

defineClass(336, 1, {26:1}, WidgetCollection);
_.iterator = function iterator_5(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 336);
function $next_2(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_11(this$static){
  if (!this$static.currentWidget) {
    throw new IllegalStateException;
  }
  this$static.this$01.parent_0.remove(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(170, 1, $intern_35, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_2(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next_3(){
  return $next_2(this);
}
;
_.remove_0 = function remove_14(){
  $remove_11(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 170);
function copyWidgetArray(widgets){
  var clone, i;
  clone = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 25, widgets.length, 0, 1);
  for (i = 0; i < widgets.length; i++) {
    setCheck(clone, i, widgets[i]);
  }
  return clone;
}

function $gotoNextIndex(this$static){
  ++this$static.index_0;
  while (this$static.index_0 < this$static.val$contained1.length) {
    if (this$static.val$contained1[this$static.index_0]) {
      return;
    }
    ++this$static.index_0;
  }
}

function $next_3(this$static){
  var w;
  if (this$static.index_0 >= this$static.val$contained1.length) {
    throw new NoSuchElementException;
  }
  this$static.last = this$static.index_0;
  w = this$static.val$contained1[this$static.index_0];
  $gotoNextIndex(this$static);
  return w;
}

function WidgetIterators$1(val$contained, val$container){
  this.val$contained1 = val$contained;
  this.val$container2 = val$container;
  this.widgets = this.val$contained1;
  $gotoNextIndex(this);
}

defineClass(974, 1, $intern_35, WidgetIterators$1);
_.hasNext = function hasNext_3(){
  return this.index_0 < this.val$contained1.length;
}
;
_.next_0 = function next_4(){
  return $next_3(this);
}
;
_.remove_0 = function remove_15(){
  if (this.last < 0) {
    throw new IllegalStateException;
  }
  if (!this.widgetsWasCopied) {
    this.widgets = copyWidgetArray(this.widgets);
    this.widgetsWasCopied = true;
  }
  $remove_8(this.val$container2, this.val$contained1[this.last]);
  this.last = -1;
}
;
_.index_0 = -1;
_.last = -1;
_.widgetsWasCopied = false;
var Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetIterators/1', 974);
function $clinit_ClippedImageImpl(){
  var global, key_0;
  $clinit_ClippedImageImpl = emptyMethod;
  clearImage = ($clinit_UriUtils() , new SafeUriString((key_0 = '__gwtDevModeHook:' + $moduleName + ':moduleBase' , global = $wnd || self , global[key_0] || $moduleBase) + 'clear.cache.gif'));
}

function $adjust(img, url_0, left, top_0, width_0, height){
  var style;
  style = 'url("' + url_0.uri_0 + '") no-repeat ' + (-left + 'px ') + (-top_0 + 'px');
  $setPropertyImpl(img.style, 'background', style);
  img.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
  img.style['height'] = height + 'px';
}

function $createStructure(url_0, left, top_0, width_0, height){
  var tmp;
  tmp = $doc.createElement('span');
  $setInnerHTML(tmp, $getSafeHtml(url_0, left, top_0, width_0, height).html);
  return $getFirstChildElement(tmp);
}

function $getSafeHtml(url_0, left, top_0, width_0, height){
  var builder;
  builder = new SafeStylesBuilder;
  $append($append($append(builder, new SafeStylesString('width:' + width_0 + ($clinit_Style$Unit() , 'px') + ';')), new SafeStylesString('height:' + height + 'px' + ';')), new SafeStylesString('background:' + ('url(' + url_0.uri_0 + ') ' + 'no-repeat ' + (-left + 'px ') + (-top_0 + 'px')) + ';'));
  return !template_1 && (template_1 = new ClippedImageImpl_TemplateImpl) , $image(clearImage, new SafeStylesString((new SafeStylesString(builder.sb.string)).css));
}

var clearImage, template_1;
function $image(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<img onload='this.__gwtLastUnhandledEvent=\"load\";' src='";
  $append_4(sb, htmlEscape(arg0.uri_0));
  sb.string += "' style='";
  $append_4(sb, htmlEscape(arg1.css));
  sb.string += "' border='0'>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function ClippedImageImpl_TemplateImpl(){
}

defineClass(1142, 1, {}, ClippedImageImpl_TemplateImpl);
var Lcom_google_gwt_user_client_ui_impl_ClippedImageImpl_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImageImpl_TemplateImpl', 1142);
function $clinit_ClippedImagePrototype(){
  $clinit_ClippedImagePrototype = emptyMethod;
  $clinit_ClippedImageImpl();
}

function $createImage(this$static){
  return new Image_2(this$static.url_0, this$static.left_0, this$static.top_0, this$static.width_0, this$static.height_0);
}

function ClippedImagePrototype(url_0, left, top_0, width_0, height){
  $clinit_ClippedImagePrototype();
  this.url_0 = url_0;
  this.left_0 = left;
  this.top_0 = top_0;
  this.width_0 = width_0;
  this.height_0 = height;
}

defineClass(1079, 1298, {}, ClippedImagePrototype);
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.url_0 = null;
_.width_0 = 0;
var Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImagePrototype', 1079);
function $clinit_FocusImpl(){
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplStandard;
  implWidget = implPanel?new FocusImpl:implPanel;
}

function FocusImpl(){
}

defineClass(973, 1, {}, FocusImpl);
var implPanel, implWidget;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImpl', 973);
function $createFocusHandler(){
  return function(evt){
    var div = this.parentNode;
    div.onfocus && $wnd.setTimeout(function(){
      div.focus();
    }
    , 0);
  }
  ;
}

function FocusImplStandard(){
}

function createFocusable0(focusHandler){
  $clinit_FocusImpl();
  var div = $doc.createElement('div');
  div.tabIndex = 0;
  var input_0 = $doc.createElement('input');
  input_0.type = 'text';
  input_0.tabIndex = -1;
  input_0.setAttribute('role', 'presentation');
  var style = input_0.style;
  style.opacity = 0;
  style.height = '1px';
  style.width = '1px';
  style.zIndex = -1;
  style.overflow = 'hidden';
  style.position = 'absolute';
  input_0.addEventListener('focus', focusHandler, false);
  div.appendChild(input_0);
  return div;
}

defineClass(1080, 973, {}, FocusImplStandard);
var focusHandler_0;
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImplStandard', 1080);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_3('gecko1_8', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(162, 20, $intern_36);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 162);
defineClass(107, 162, $intern_36);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 107);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 20)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 20):null);
}

defineClass(379, 107, $intern_36, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 379);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $addAll_0(this$static, c){
  var changed, e, e$iterator;
  checkNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    changed = changed | this$static.add_1(e);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

function $toString_1(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_1('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(1279, 1, $intern_37);
_.add_1 = function add_4(o){
  throw new UnsupportedOperationException_0('Add not supported on this collection');
}
;
_.contains = function contains_0(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty_0 = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.remove_2 = function remove_20(o){
  return $advanceToFind(this, o, true);
}
;
_.toArray = function toArray_1(){
  return this.toArray_0(initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, this.size_1(), 3, 1));
}
;
_.toArray_0 = function toArray_2(a){
  var i, it, size_0;
  size_0 = this.size_1();
  a.length < size_0 && (a = createFrom(a, size_0));
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next_0());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
_.toString$ = function toString_11(){
  return $toString_1(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 1279);
defineClass($intern_38, 1279, $intern_39);
_.equals$ = function equals_10(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 59)) {
    return false;
  }
  other = dynamicCast(o, 59);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_12(){
  return hashCode_65(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', $intern_38);
function $add_13(this$static, obj){
  this$static.add_0(this$static.size_1(), obj);
  return true;
}

function $equals(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 16)) {
    return false;
  }
  other = dynamicCast(o, 16);
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

defineClass($intern_40, 1279, $intern_41);
_.add_0 = function add_5(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_6(obj){
  return $add_13(this, obj);
}
;
_.equals$ = function equals_11(o){
  return $equals(this, o);
}
;
_.hashCode$ = function hashCode_13(){
  return hashCode_66(this);
}
;
_.iterator = function iterator_9(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator_1(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_2(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_1 = function remove_22(index_0){
  throw new UnsupportedOperationException_0('Remove not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', $intern_40);
function $removeHandler(this$static){
  this$static.this$01.doRemove(this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(530, 1, {1243:1}, SimpleEventBus$1);
_.removeHandler = function removeHandler_0(){
  $removeHandler(this);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 530);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(531, 1, {1260:1}, SimpleEventBus$2);
_.execute_1 = function execute_23(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 531);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(324, 1, {1260:1}, SimpleEventBus$3);
_.execute_1 = function execute_24(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 324);
function $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$) {
    result = new SimpleEventBus;
    this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$;
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment(){
}

defineClass(534, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment);
_.singleton_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$ = null;
var Lcom_google_web_bindery_event_shared_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.google.web.bindery.event.shared', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 534);
function $containsEntry(this$static, entry){
  var key_0, ourValue, value_0;
  key_0 = entry.getKey();
  value_0 = entry.getValue_0();
  ourValue = this$static.get_4(key_0);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key_0)) {
    return false;
  }
  return true;
}

function $equals_0(this$static, obj){
  var entry, entry$iterator, otherMap;
  if (obj === this$static) {
    return true;
  }
  if (!instanceOf(obj, 56)) {
    return false;
  }
  otherMap = dynamicCast(obj, 56);
  if (this$static.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 39);
    if (!$containsEntry(this$static, entry)) {
      return false;
    }
  }
  return true;
}

function $implFindEntry(this$static, key_0, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), 39);
    k = entry.getKey();
    if (maskUndefined(key_0) === maskUndefined(k) || key_0 != null && equals_Ljava_lang_Object__Z__devirtual$(key_0, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue_0());
        iter.remove_0();
      }
      return entry;
    }
  }
  return null;
}

function $toString_2(this$static){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_1('{');
  comma = false;
  for (entry$iterator = this$static.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 39);
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_4(sb, $toString_3(this$static, entry.getKey()));
    sb.string += '=';
    $append_4(sb, $toString_3(this$static, entry.getValue_0()));
  }
  sb.string += '}';
  return sb.string;
}

function $toString_3(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue_0();
}

defineClass(1278, 1, $intern_42);
_.containsKey = function containsKey_1(key_0){
  return !!$implFindEntry(this, key_0, false);
}
;
_.equals$ = function equals_12(obj){
  return $equals_0(this, obj);
}
;
_.get_4 = function get_9(key_0){
  return getEntryValueOrNull($implFindEntry(this, key_0, false));
}
;
_.hashCode$ = function hashCode_14(){
  return hashCode_65(this.entrySet_0());
}
;
_.isEmpty_0 = function isEmpty_3(){
  return this.size_1() == 0;
}
;
_.put = function put_1(key_0, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.remove_3 = function remove_28(key_0){
  return getEntryValueOrNull($implFindEntry(this, key_0, true));
}
;
_.size_1 = function size_11(){
  return this.entrySet_0().size_1();
}
;
_.toString$ = function toString_12(){
  return $toString_2(this);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 1278);
function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate_0.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate_0.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

function AbstractHashMap(ignored, alsoIgnored){
  checkCriticalArgument(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument(alsoIgnored >= 0, 'Non-positive load factor');
  $reset(this);
}

defineClass(222, 1278, $intern_42);
_.clear_0 = function clear_2(){
  $reset(this);
}
;
_.containsKey = function containsKey_2(key_0){
  return isJavaString(key_0)?key_0 == null?!!$getEntry(this.hashCodeMap, null):!(this.stringMap.get_5(key_0) === undefined):!!$getEntry(this.hashCodeMap, key_0);
}
;
_.entrySet_0 = function entrySet_1(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_4 = function get_10(key_0){
  return isJavaString(key_0)?key_0 == null?getEntryValueOrNull($getEntry(this.hashCodeMap, null)):this.stringMap.get_5(key_0):getEntryValueOrNull($getEntry(this.hashCodeMap, key_0));
}
;
_.put = function put_2(key_0, value_0){
  return isJavaString(key_0)?key_0 == null?$put_3(this.hashCodeMap, null, value_0):this.stringMap.put_0(key_0, value_0):$put_3(this.hashCodeMap, key_0, value_0);
}
;
_.remove_3 = function remove_29(key_0){
  return isJavaString(key_0)?key_0 == null?$remove_19(this.hashCodeMap, null):this.stringMap.remove_4(key_0):$remove_19(this.hashCodeMap, key_0);
}
;
_.size_1 = function size_12(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 222);
function HashMap(){
  $reset(this);
}

function HashMap_0(ignored){
  AbstractHashMap.call(this, ignored, 0);
}

defineClass(27, 222, $intern_43, HashMap, HashMap_0);
_.equals = function equals_13(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode_0(key_0){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key_0);
  return ~~hashCode;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 27);
function $$init_0(this$static){
  this$static.head_0 = new LinkedHashMap$ChainEntry(this$static);
  this$static.map_0 = new HashMap;
}

function $clear_4(this$static){
  this$static.map_0.clear_0();
  this$static.head_0.prev = this$static.head_0;
  this$static.head_0.next = this$static.head_0;
}

function $containsKey(this$static, key_0){
  return this$static.map_0.containsKey(key_0);
}

function $get_6(this$static, key_0){
  var entry;
  entry = dynamicCast(this$static.map_0.get_4(key_0), 168);
  if (entry) {
    $recordAccess(this$static, entry);
    return entry.value_0;
  }
  return null;
}

function $put_2(this$static, key_0, value_0){
  var eldest, newEntry, old, oldValue;
  old = dynamicCast(this$static.map_0.get_4(key_0), 168);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this$static, key_0, value_0);
    this$static.map_0.put(key_0, newEntry);
    $addToEnd(newEntry);
    eldest = this$static.head_0.next;
    if (this$static.removeEldestEntry(eldest)) {
      $remove_21(eldest);
      this$static.map_0.remove_3(eldest.key);
    }
    return null;
  }
   else {
    oldValue = $setValue_2(old, value_0);
    $recordAccess(this$static, old);
    return oldValue;
  }
}

function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_21(entry);
    $addToEnd(entry);
  }
}

function $remove_14(this$static, key_0){
  var entry;
  entry = dynamicCast(this$static.map_0.remove_3(key_0), 168);
  if (entry) {
    $remove_21(entry);
    return entry.value_0;
  }
  return null;
}

function LinkedHashMap(){
  HashMap.call(this);
  $$init_0(this);
  this.head_0.prev = this.head_0;
  this.head_0.next = this.head_0;
}

defineClass(187, 27, $intern_43, LinkedHashMap);
_.clear_0 = function clear_3(){
  $clear_4(this);
}
;
_.containsKey = function containsKey_3(key_0){
  return $containsKey(this, key_0);
}
;
_.entrySet_0 = function entrySet_2(){
  return new LinkedHashMap$EntrySet(this);
}
;
_.get_4 = function get_11(key_0){
  return $get_6(this, key_0);
}
;
_.put = function put_3(key_0, value_0){
  return $put_2(this, key_0, value_0);
}
;
_.remove_3 = function remove_30(key_0){
  return $remove_14(this, key_0);
}
;
_.removeEldestEntry = function removeEldestEntry(eldest){
  return false;
}
;
_.size_1 = function size_13(){
  return this.map_0.size_1();
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 187);
function $encodeQueryString(decodedUrlComponent){
  var regexp;
  return throwIfNull('decodedURLComponent', decodedUrlComponent) , regexp = /%20/g , encodeURIComponent(decodedUrlComponent).replace(regexp, '+');
}

function ClientUrlUtils(){
}

defineClass(629, 1, {}, ClientUrlUtils);
var Lcom_gwtplatform_common_client_ClientUrlUtils_2_classLit = createForClass('com.gwtplatform.common.client', 'ClientUrlUtils', 629);
function CodeSplitProvider(provider){
  this.provider = provider;
}

defineClass(89, 1, {}, CodeSplitProvider);
_.get_0 = function get_12(callback){
  this.provider.get_0(callback);
}
;
var Lcom_gwtplatform_common_client_CodeSplitProvider_2_classLit = createForClass('com.gwtplatform.common.client', 'CodeSplitProvider', 89);
function StandardProvider(provider){
  this.provider = provider;
}

defineClass(626, 1, {}, StandardProvider);
_.get_0 = function get_13(callback){
  $onSuccess_1(callback, $get_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$_annotation$$none$$(this.provider.this$01));
}
;
var Lcom_gwtplatform_common_client_StandardProvider_2_classLit = createForClass('com.gwtplatform.common.client', 'StandardProvider', 626);
function $get_Key$type$com$gwtplatform$common$client$ClientUrlUtils$_annotation$$none$$(){
  var created;
  created = new ClientUrlUtils;
  return created;
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_0(){
}

defineClass(533, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_0);
var Lcom_gwtplatform_common_client_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.common.client', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 533);
function $get_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$) {
    result = $get_Key$type$com$gwtplatform$common$client$ClientUrlUtils$_annotation$$none$$($getFragment_com_gwtplatform_common_client(this$static.injector));
    this$static.singleton_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$;
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_1(injector){
  this.injector = injector;
}

defineClass(537, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_1);
_.singleton_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$ = null;
var Lcom_gwtplatform_common_shared_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.common.shared', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 537);
function AutobindDisable(){
  this.disable = false;
}

defineClass(618, 1, {}, AutobindDisable);
_.disable = false;
var Lcom_gwtplatform_mvp_client_AutobindDisable_2_classLit = createForClass('com.gwtplatform.mvp.client', 'AutobindDisable', 618);
function $clinit_DelayedBindRegistry(){
  $clinit_DelayedBindRegistry = emptyMethod;
  delayedBindObjects = new ArrayList;
}

function bind_0(ginjector){
  $clinit_DelayedBindRegistry();
  var delayedBindObject, delayedBindObject$iterator;
  for (delayedBindObject$iterator = new AbstractList$IteratorImpl(delayedBindObjects); delayedBindObject$iterator.i < delayedBindObject$iterator.this$01_0.size_1();) {
    delayedBindObject = (checkCriticalElement(delayedBindObject$iterator.i < delayedBindObject$iterator.this$01_0.size_1()) , dynamicCast(delayedBindObject$iterator.this$01_0.get_1(delayedBindObject$iterator.last = delayedBindObject$iterator.i++), 46));
    delayedBindObject.delayedBind(ginjector);
  }
}

var delayedBindObjects;
function $automaticBind(this$static, autobindDisable){
  if (!this$static.autoBind || autobindDisable.disable) {
    return;
  }
  this$static.bind_0();
}

function $bind(this$static){
  if (!this$static.bound.value_0) {
    this$static.onBind();
    this$static.bound.value_0 = true;
  }
}

function $registerHandler(this$static, handlerRegistration){
  $add_16(this$static.handlerRegistrations, handlerRegistration);
}

function HandlerContainerImpl(){
  this.bound = new HandlerContainerImpl$BindMonitor;
  this.handlerRegistrations = new ArrayList;
  this.autoBind = true;
}

defineClass(253, 1, {});
_.bind_0 = function bind_1(){
  $bind(this);
}
;
_.onBind = function onBind(){
}
;
_.autoBind = false;
var Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2_classLit = createForClass('com.gwtplatform.mvp.client', 'HandlerContainerImpl', 253);
function HandlerContainerImpl$BindMonitor(){
}

defineClass(456, 1, {}, HandlerContainerImpl$BindMonitor);
_.value_0 = false;
var Lcom_gwtplatform_mvp_client_HandlerContainerImpl$BindMonitor_2_classLit = createForClass('com.gwtplatform.mvp.client', 'HandlerContainerImpl/BindMonitor', 456);
function $clinit_PresenterWidget(){
  $clinit_PresenterWidget = emptyMethod;
  POPUP_SLOT = new Object_0;
}

function $addHandler_2(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler);
}

function $addRegisteredHandler(this$static, type_0, handler){
  $registerHandler(this$static, $doAdd(this$static.eventBus, type_0, handler));
}

function $adoptChild(this$static, slot, child){
  if (child.parent_0 != this$static) {
    !!child.parent_0 && $remove_18(child.parent_0.children, child);
    child.parent_0 = this$static;
    $add_17(this$static.children, child);
  }
  child.slot_0 = slot;
}

function $fireEvent_1(this$static, event_0){
  $fireEventFromSource(this$static.eventBus, event_0, this$static);
}

function $internalClearSlot(this$static, slot, dontRemove){
  var child, child$iterator;
  for (child$iterator = $iterator(new AbstractMap$1((new HashSet_1(this$static.children)).map_0)); child$iterator.val$outerIter2.hasNext();) {
    child = dynamicCast($next_5(child$iterator), 57);
    maskUndefined(child.slot_0) === maskUndefined(slot) && child != dontRemove && $orphan_0(child);
  }
}

function $internalHide(this$static){
  var child, child$iterator;
  if (!this$static.visible) {
    return;
  }
  for (child$iterator = $iterator(new AbstractMap$1(this$static.children.map_0)); child$iterator.val$outerIter2.hasNext();) {
    child = dynamicCast($next_5(child$iterator), 57);
    $internalHide(child);
  }
  if (maskUndefined(this$static.slot_0) === maskUndefined(POPUP_SLOT)) {
    throwClassCastExceptionUnlessNull(this$static.view).nullMethod();
    throwClassCastExceptionUnlessNull(this$static.view).nullMethod();
  }
  $unregisterVisibleHandlers(this$static);
  this$static.visible = false;
}

function $internalReset(this$static){
  var child, child$iterator;
  if (!this$static.visible) {
    return;
  }
  this$static.onReset();
  for (child$iterator = $iterator(new AbstractMap$1((new HashSet_1(this$static.children)).map_0)); child$iterator.val$outerIter2.hasNext();) {
    child = dynamicCast($next_5(child$iterator), 57);
    $internalReset(child);
  }
  maskUndefined(this$static.slot_0) === maskUndefined(POPUP_SLOT) && throwClassCastExceptionUnlessNull(this$static.view).nullMethod();
}

function $internalReveal(this$static){
  var child, child$iterator;
  if (this$static.visible) {
    return;
  }
  this$static.onReveal();
  this$static.visible = true;
  for (child$iterator = $iterator(new AbstractMap$1((new HashSet_1(this$static.children)).map_0)); child$iterator.val$outerIter2.hasNext();) {
    child = dynamicCast($next_5(child$iterator), 57);
    $internalReveal(child);
  }
  if (maskUndefined(this$static.slot_0) === maskUndefined(POPUP_SLOT)) {
    throwClassCastExceptionUnlessNull(this$static.view);
    null.nullMethod();
    throwClassCastExceptionUnlessNull(this$static.view).nullMethod();
  }
  $registerVisibleHandlers(this$static);
}

function $orphan_0(this$static){
  if (this$static.parent_0) {
    $internalHide(this$static);
    $remove_18(this$static.parent_0.children, this$static);
    this$static.parent_0 = null;
  }
  this$static.slot_0 = null;
}

function $registerVisibleHandlers(this$static){
  var handlerInformation$iterator, handlerRegistration;
  for (handlerInformation$iterator = new AbstractList$IteratorImpl(this$static.visibleHandlers); handlerInformation$iterator.i < handlerInformation$iterator.this$01_0.size_1();) {
    checkCriticalElement(handlerInformation$iterator.i < handlerInformation$iterator.this$01_0.size_1());
    throwClassCastExceptionUnlessNull(handlerInformation$iterator.this$01_0.get_1(handlerInformation$iterator.last = handlerInformation$iterator.i++));
    handlerRegistration = $addHandler_2(this$static, null.nullField, null.nullField);
    $add_16(this$static.visibleHandlerRegistrations, handlerRegistration);
  }
}

function $setInSlot(this$static, slot, child){
  if (!child) {
    $internalClearSlot(this$static, slot, null);
    this$static.view.setInSlot(slot, null);
    return;
  }
  $adoptChild(this$static, slot, child);
  $internalClearSlot(this$static, slot, child);
  this$static.view.setInSlot(slot, child);
  if (this$static.visible) {
    $internalReveal(child);
    $clinit_ResetPresentersEvent();
    $fireEvent_1(this$static, new ResetPresentersEvent);
  }
}

function $unregisterVisibleHandlers(this$static){
  var handlerRegistration, handlerRegistration$iterator;
  for (handlerRegistration$iterator = new AbstractList$IteratorImpl(this$static.visibleHandlerRegistrations); handlerRegistration$iterator.i < handlerRegistration$iterator.this$01_0.size_1();) {
    handlerRegistration = (checkCriticalElement(handlerRegistration$iterator.i < handlerRegistration$iterator.this$01_0.size_1()) , dynamicCast(handlerRegistration$iterator.this$01_0.get_1(handlerRegistration$iterator.last = handlerRegistration$iterator.i++), 1243));
    handlerRegistration.removeHandler();
  }
  this$static.visibleHandlerRegistrations.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}

function PresenterWidget(eventBus, view){
  $clinit_PresenterWidget();
  HandlerContainerImpl.call(this);
  this.visibleHandlers = new ArrayList;
  this.visibleHandlerRegistrations = new ArrayList;
  this.children = new HashSet;
  this.eventBus = eventBus;
  this.view = view;
}

defineClass(57, 253, $intern_44);
_.equals$ = function equals_25(obj){
  return this === obj;
}
;
_.fireEvent = function fireEvent_5(event_0){
  $fireEvent_1(this, event_0);
}
;
_.hashCode$ = function hashCode_25(){
  return getHashCode(this);
}
;
_.onReset = function onReset(){
}
;
_.onReveal = function onReveal(){
}
;
_.visible = false;
var POPUP_SLOT;
var Lcom_gwtplatform_mvp_client_PresenterWidget_2_classLit = createForClass('com.gwtplatform.mvp.client', 'PresenterWidget', 57);
function $forceReveal(this$static){
  if (this$static.visible) {
    return;
  }
  this$static.revealInParent();
}

function Presenter(eventBus, view, proxy){
  $clinit_PresenterWidget();
  Presenter_1.call(this, eventBus, view, proxy, null);
}

function Presenter_1(eventBus, view, proxy, slot){
  PresenterWidget.call(this, eventBus, view);
  this.proxy = proxy;
  this.slot = slot;
}

defineClass(75, 57, $intern_44);
_.bind_0 = function bind_2(){
  $bind(this);
  instanceOf(this.proxy, 80) && $bind_2(dynamicCast(this.proxy, 80).getHandlerContainer());
}
;
_.revealInParent = function revealInParent(){
  $fireEvent_1(this, new RevealContentEvent(this.slot, this));
}
;
var Lcom_gwtplatform_mvp_client_Presenter_2_classLit = createForClass('com.gwtplatform.mvp.client', 'Presenter', 75);
function $clinit_RootPresenter(){
  $clinit_RootPresenter = emptyMethod;
  $clinit_PresenterWidget();
  rootSlot = new Object_0;
}

function $onResetPresenters(this$static){
  if (!this$static.isResetting) {
    this$static.isResetting = true;
    $internalReset(this$static);
    this$static.isResetting = false;
  }
}

function RootPresenter(eventBus, view){
  $clinit_RootPresenter();
  PresenterWidget.call(this, eventBus, view);
  this.visible = true;
}

defineClass(455, 57, {6:1, 9:1, 15:1, 57:1, 1323:1, 1321:1, 1322:1}, RootPresenter);
_.onBind = function onBind_0(){
  $addRegisteredHandler(this, ($clinit_ResetPresentersEvent() , $clinit_ResetPresentersEvent() , type_1), this);
  $addRegisteredHandler(this, ($clinit_RevealRootContentEvent() , $clinit_RevealRootContentEvent() , TYPE_29), this);
  $addRegisteredHandler(this, ($clinit_RevealRootLayoutContentEvent() , $clinit_RevealRootLayoutContentEvent() , TYPE_30), this);
  $addRegisteredHandler(this, ($clinit_RevealRootPopupContentEvent() , $clinit_RevealRootPopupContentEvent() , TYPE_31), this);
  $addRegisteredHandler(this, (!TYPE_25 && (TYPE_25 = new GwtEvent$Type) , TYPE_25), this);
}
;
_.isResetting = false;
var rootSlot;
var Lcom_gwtplatform_mvp_client_RootPresenter_2_classLit = createForClass('com.gwtplatform.mvp.client', 'RootPresenter', 455);
function $asWidget(this$static){
  if (!this$static.widget_0) {
    throw new NullPointerException_0('widget cannot be null, you should call ViewImpl.initWidget() before.');
  }
  return this$static.widget_0;
}

defineClass(1283, 1, {15:1});
_.asWidget = function asWidget_1(){
  return $asWidget(this);
}
;
_.setInSlot = function setInSlot(slot, content_0){
}
;
var Lcom_gwtplatform_mvp_client_ViewImpl_2_classLit = createForClass('com.gwtplatform.mvp.client', 'ViewImpl', 1283);
function $ensureGlass(this$static){
  var style;
  if (!this$static.glass) {
    this$static.glass = $doc.createElement('div');
    style = this$static.glass.style;
    $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
    $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
    $setPropertyImpl(style, 'top', '0.0px');
    $setPropertyImpl(style, 'right', '0.0px');
    $setPropertyImpl(style, 'bottom', '0.0px');
    $setPropertyImpl(style, 'zIndex', '2147483647');
    $setPropertyImpl(style, 'backgroundColor', '#FFFFFF');
    style.opacity = 0;
  }
}

function $lockScreen(this$static){
  $ensureGlass(this$static);
  $appendChild($doc.body, this$static.glass);
}

function $unlockScreen(this$static){
  !!this$static.glass && $removeFromParent(this$static.glass);
}

function RootPresenter$RootView(){
}

defineClass(205, 1283, {15:1, 205:1}, RootPresenter$RootView);
_.asWidget = function asWidget_2(){
  return null;
}
;
_.setInSlot = function setInSlot_0(slot, content_0){
  if (this.usingRootLayoutPanel) {
    $clinit_RootPanel();
    $clear_1(get_2());
    $clear_1(get_1());
    $add_2(get_2(), get_1());
    !!content_0 && $add_9(get_1(), !content_0?null:content_0.view.asWidget());
  }
   else {
    $clear_1(get_1());
    $clinit_RootPanel();
    $clear_1(get_2());
    !!content_0 && $add_2(get_2(), !content_0?null:content_0.view.asWidget());
  }
}
;
_.usingRootLayoutPanel = false;
var Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2_classLit = createForClass('com.gwtplatform.mvp.client', 'RootPresenter/RootView', 205);
function $clinit_ViewWithUiHandlers(){
  $clinit_ViewWithUiHandlers = emptyMethod;
  $ensureNamesAreInitialized(Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit);
}

defineClass($intern_45, 1283, {15:1});
_.setUiHandlers = function setUiHandlers(uiHandlers){
  this.uiHandlers = uiHandlers;
}
;
var Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit = createForClass('com.gwtplatform.mvp.client', 'ViewWithUiHandlers', $intern_45);
function $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$) {
    result = new AutobindDisable;
    this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$;
}

function $get_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$) {
    result = new RootPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), new RootPresenter$RootView);
    $automaticBind(result, $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$(this$static));
    this$static.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$;
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_2(injector){
  this.injector = injector;
}

defineClass(316, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_2);
_.singleton_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$ = null;
_.singleton_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$ = null;
var Lcom_gwtplatform_mvp_client_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.mvp.client', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 316);
function $clinit_AsyncCallFailEvent(){
  $clinit_AsyncCallFailEvent = emptyMethod;
  TYPE_21 = new GwtEvent$Type;
}

function AsyncCallFailEvent(){
  $clinit_AsyncCallFailEvent();
}

defineClass(693, $intern_11, {}, AsyncCallFailEvent);
_.dispatch_0 = function dispatch_22(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_23(){
  return TYPE_21;
}
;
var TYPE_21;
var Lcom_gwtplatform_mvp_client_proxy_AsyncCallFailEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'AsyncCallFailEvent', 693);
function $clinit_AsyncCallStartEvent(){
  $clinit_AsyncCallStartEvent = emptyMethod;
  TYPE_22 = new GwtEvent$Type;
}

function AsyncCallStartEvent(){
  $clinit_AsyncCallStartEvent();
}

defineClass(695, $intern_11, {}, AsyncCallStartEvent);
_.dispatch_0 = function dispatch_23(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_24(){
  return TYPE_22;
}
;
var TYPE_22;
var Lcom_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'AsyncCallStartEvent', 695);
function $clinit_AsyncCallSucceedEvent(){
  $clinit_AsyncCallSucceedEvent = emptyMethod;
  TYPE_23 = new GwtEvent$Type;
}

function AsyncCallSucceedEvent(){
  $clinit_AsyncCallSucceedEvent();
}

defineClass(694, $intern_11, {}, AsyncCallSucceedEvent);
_.dispatch_0 = function dispatch_24(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_25(){
  return TYPE_23;
}
;
var TYPE_23;
var Lcom_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'AsyncCallSucceedEvent', 694);
var TYPE_24;
function $dispatch_3(this$static, handler){
  this$static.lock?$lockScreen(dynamicCast(handler.view, 205)):$unlockScreen(dynamicCast(handler.view, 205));
}

function LockInteractionEvent(lock){
  this.lock = lock;
}

defineClass(329, $intern_11, {}, LockInteractionEvent);
_.dispatch_0 = function dispatch_25(handler){
  $dispatch_3(this, dynamicCast(handler, 1323));
}
;
_.getAssociatedType_0 = function getAssociatedType_26(){
  return !TYPE_25 && (TYPE_25 = new GwtEvent$Type) , TYPE_25;
}
;
_.lock = false;
var TYPE_25;
var Lcom_gwtplatform_mvp_client_proxy_LockInteractionEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'LockInteractionEvent', 329);
function $clinit_NavigationEvent(){
  $clinit_NavigationEvent = emptyMethod;
  TYPE_26 = new GwtEvent$Type;
}

function NavigationEvent(){
  $clinit_NavigationEvent();
}

defineClass(327, $intern_11, {}, NavigationEvent);
_.dispatch_0 = function dispatch_26(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_27(){
  return TYPE_26;
}
;
var TYPE_26;
var Lcom_gwtplatform_mvp_client_proxy_NavigationEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'NavigationEvent', 327);
function $clinit_NavigationRefusedEvent(){
  $clinit_NavigationRefusedEvent = emptyMethod;
  TYPE_27 = new GwtEvent$Type;
}

function NavigationRefusedEvent(){
  $clinit_NavigationRefusedEvent();
}

defineClass(633, $intern_11, {}, NavigationRefusedEvent);
_.dispatch_0 = function dispatch_27(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_28(){
  return TYPE_27;
}
;
var TYPE_27;
var Lcom_gwtplatform_mvp_client_proxy_NavigationRefusedEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'NavigationRefusedEvent', 633);
function $checkLoading(this$static){
  if (this$static.state == ($clinit_NotifyingAsyncCallback$State() , INITIALIZED)) {
    ++counter;
    counter == 1 && ($clinit_AsyncCallStartEvent() , this$static.eventBus.fireEvent_0(new AsyncCallStartEvent));
    this$static.state = LOADING_0;
  }
}

function $onFailure_0(this$static, caught){
  if (this$static.state == ($clinit_NotifyingAsyncCallback$State() , LOADING_0)) {
    --counter;
    counter == 0 && ($clinit_AsyncCallFailEvent() , this$static.eventBus.fireEvent_0(new AsyncCallFailEvent));
  }
  this$static.state = FAILED;
  this$static.failure(caught);
}

function $onSuccess_1(this$static, result){
  if (this$static.state == ($clinit_NotifyingAsyncCallback$State() , LOADING_0)) {
    --counter;
    counter == 0 && ($clinit_AsyncCallSucceedEvent() , this$static.eventBus.fireEvent_0(new AsyncCallSucceedEvent));
  }
  this$static.state = SUCCEEDED;
  this$static.success(result);
}

function NotifyingAsyncCallback(eventBus){
  this.eventBus = eventBus;
  this.state = ($clinit_NotifyingAsyncCallback$State() , UNKNOWN);
}

defineClass(88, 1, {});
_.failure = function failure_0(caught){
}
;
var counter = 0;
var Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'NotifyingAsyncCallback', 88);
function $clinit_NotifyingAsyncCallback$State(){
  $clinit_NotifyingAsyncCallback$State = emptyMethod;
  UNKNOWN = new NotifyingAsyncCallback$State('UNKNOWN', 0);
  INITIALIZED = new NotifyingAsyncCallback$State('INITIALIZED', 1);
  LOADING_0 = new NotifyingAsyncCallback$State('LOADING', 2);
  SUCCEEDED = new NotifyingAsyncCallback$State('SUCCEEDED', 3);
  FAILED = new NotifyingAsyncCallback$State('FAILED', 4);
}

function NotifyingAsyncCallback$State(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_20(){
  $clinit_NotifyingAsyncCallback$State();
  return initValues(getClassLiteralForArray(Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_2_classLit, 1), $intern_2, 166, 0, [UNKNOWN, INITIALIZED, LOADING_0, SUCCEEDED, FAILED]);
}

defineClass(166, 7, {166:1, 3:1, 11:1, 7:1}, NotifyingAsyncCallback$State);
var FAILED, INITIALIZED, LOADING_0, SUCCEEDED, UNKNOWN;
var Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_2_classLit = createForEnum('com.gwtplatform.mvp.client.proxy', 'NotifyingAsyncCallback/State', 166, Ljava_lang_Enum_2_classLit, values_20);
function $equals_2(this$static, o){
  var nameToken, nameToken$array, nameToken$index, nameToken$max, place;
  if (instanceOf(o, 167)) {
    place = dynamicCast(o, 167);
    return equals_64(this$static.nameTokens, place.nameTokens);
  }
  if (instanceOf(o, 72)) {
    place = dynamicCast(o, 72);
    for (nameToken$array = this$static.nameTokens , nameToken$index = 0 , nameToken$max = nameToken$array.length; nameToken$index < nameToken$max; ++nameToken$index) {
      nameToken = nameToken$array[nameToken$index];
      if ($equals_3(nameToken, place.getNameToken())) {
        return true;
      }
    }
    return $equals_3(this$static.nameTokens[0], place.getNameToken());
  }
  return false;
}

function $matchesRequest(this$static, request){
  var nameToken, nameToken$array, nameToken$index, nameToken$max;
  for (nameToken$array = this$static.nameTokens , nameToken$index = 0 , nameToken$max = nameToken$array.length; nameToken$index < nameToken$max; ++nameToken$index) {
    nameToken = nameToken$array[nameToken$index];
    if ($matchesNameToken(request, nameToken)) {
      return true;
    }
  }
  return false;
}

function PlaceImpl(nameTokens){
  this.nameTokens = nameTokens;
}

defineClass(167, 1, $intern_46, PlaceImpl);
_.canReveal = function canReveal(){
  return true;
}
;
_.equals$ = function equals_26(o){
  return $equals_2(this, o);
}
;
_.getNameToken = function getNameToken(){
  return this.nameTokens[0];
}
;
_.hashCode$ = function hashCode_26(){
  return 17 * hashCode_64(this.nameTokens);
}
;
_.toString$ = function toString_23(){
  return this.nameTokens[0];
}
;
var Lcom_gwtplatform_mvp_client_proxy_PlaceImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceImpl', 167);
function $confirmLeaveState(this$static){
  var confirmed;
  if (this$static.onLeaveQuestion == null) {
    return true;
  }
  confirmed = confirm_0(this$static.onLeaveQuestion);
  if (confirmed) {
    $setOnLeaveConfirmation(this$static, null);
  }
   else {
    $clinit_NavigationRefusedEvent();
    $fireEvent_2(this$static, new NavigationRefusedEvent);
    newItem(this$static.currentHistoryToken, false);
  }
  return confirmed;
}

function $doRevealPlace(this$static, request, updateBrowserUrl){
  var requestEvent;
  requestEvent = new PlaceRequestInternalEvent(request, updateBrowserUrl);
  $fireEventFromSource(this$static.eventBus, requestEvent, this$static);
  if (requestEvent.handled) {
    if (!requestEvent.authorized) {
      $unlock(this$static);
      $illegalAccess(this$static, $toHistoryToken(this$static.tokenFormatter, this$static.placeHierarchy));
    }
  }
   else {
    $unlock(this$static);
    $error(this$static, $toHistoryToken(this$static.tokenFormatter, this$static.placeHierarchy));
  }
}

function $error(this$static){
  $startError(this$static);
  $revealPlace(this$static, this$static.defaultPlaceRequest, true);
  this$static.internalError = false;
}

function $fireEvent_2(this$static, event_0){
  $fireEventFromSource(this$static.eventBus, event_0, this$static);
}

function $getCurrentPlaceRequest(this$static){
  return this$static.placeHierarchy.array.length > 0?dynamicCast($get_7(this$static.placeHierarchy, this$static.placeHierarchy.array.length - 1), 144):$build(new PlaceRequest$Builder);
}

function $getLock(this$static){
  if (this$static.locked) {
    return false;
  }
  if (!$confirmLeaveState(this$static)) {
    return false;
  }
  $lock(this$static);
  return true;
}

function $handleTokenChange(this$static, historyToken){
  if (this$static.locked) {
    this$static.defferedNavigation = new PlaceManagerImpl$1(this$static, historyToken);
    return;
  }
  if (!$getLock(this$static)) {
    return;
  }
  try {
    if ($equals_3($trim(historyToken), '')) {
      $unlock(this$static);
      $revealPlace(this$static, this$static.defaultPlaceRequest, true);
    }
     else {
      this$static.placeHierarchy = $toPlaceRequestHierarchy(this$static.tokenFormatter, historyToken);
      $doRevealPlace(this$static, this$static.placeHierarchy.array.length > 0?dynamicCast($get_7(this$static.placeHierarchy, this$static.placeHierarchy.array.length - 1), 144):$build(new PlaceRequest$Builder), true);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 126)) {
      $unlock(this$static);
      $error(this$static);
      $clinit_NavigationEvent();
      $fireEvent_2(this$static, new NavigationEvent);
    }
     else 
      throw unwrap($e0);
  }
}

function $illegalAccess(this$static){
  $startError(this$static);
  $revealPlace(this$static, this$static.defaultPlaceRequest, true);
  this$static.internalError = false;
}

function $lock(this$static){
  if (!this$static.locked) {
    this$static.locked = true;
    $fireEvent_2(this$static, new LockInteractionEvent(true));
  }
}

function $revealPlace(this$static, request, updateBrowserUrl){
  if (this$static.locked) {
    this$static.defferedNavigation = new PlaceManagerImpl$2(this$static, request, updateBrowserUrl);
    return;
  }
  if (!$getLock(this$static)) {
    return;
  }
  this$static.placeHierarchy.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
  $add_16(this$static.placeHierarchy, request);
  $doRevealPlace(this$static, request, updateBrowserUrl);
}

function $setOnLeaveConfirmation(this$static, question){
  if (question == null && this$static.onLeaveQuestion == null) {
    return;
  }
  question != null && this$static.onLeaveQuestion == null && (this$static.windowClosingHandlerRegistration = (maybeInitializeCloseHandlers() , addHandler_0(($clinit_Window$ClosingEvent() , $clinit_Window$ClosingEvent() , TYPE_16), this$static)));
  question == null && this$static.onLeaveQuestion != null && $removeHandler(this$static.windowClosingHandlerRegistration.real);
  this$static.onLeaveQuestion = question;
}

function $startError(this$static){
  if (this$static.internalError) {
    throw new RuntimeException_0('Encountered repeated errors resulting in an infinite loop. Make sure all users have access to the pages revealed by revealErrorPlace and revealUnauthorizedPlace. (Note that the default implementations call revealDefaultPlace)');
  }
  this$static.internalError = true;
}

function $unlock(this$static){
  var navigation;
  if (this$static.locked) {
    this$static.locked = false;
    $fireEvent_2(this$static, new LockInteractionEvent(false));
    if (this$static.defferedNavigation) {
      navigation = this$static.defferedNavigation;
      this$static.defferedNavigation = null;
      navigation.execute_1();
    }
  }
}

function $updateHistory(this$static, request, updateBrowserUrl){
  var browserHistoryToken, historyToken;
  try {
    $set_5(this$static.placeHierarchy, this$static.placeHierarchy.array.length - 1, request);
    if (updateBrowserUrl) {
      historyToken = $toHistoryToken(this$static.tokenFormatter, this$static.placeHierarchy);
      browserHistoryToken = ($clinit_History() , $clinit_History() , token_0);
      (browserHistoryToken == null || !$equals_3(browserHistoryToken, historyToken)) && newItem(historyToken, false);
      this$static.currentHistoryToken = historyToken;
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 126))
      throw unwrap($e0);
  }
}

defineClass(323, 1, $intern_47);
_.fireEvent = function fireEvent_6(event_0){
  $fireEvent_2(this, event_0);
}
;
_.onValueChange = function onValueChange_0(event_0){
  $handleTokenChange(this, dynamicCastToString(event_0.value_0));
}
;
_.currentHistoryToken = '';
_.internalError = false;
_.locked = false;
var Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceManagerImpl', 323);
function PlaceManagerImpl$1(this$0, val$historyToken){
  this.this$01 = this$0;
  this.val$historyToken2 = val$historyToken;
}

defineClass(526, 1, {}, PlaceManagerImpl$1);
_.execute_1 = function execute_25(){
  $handleTokenChange(this.this$01, this.val$historyToken2);
}
;
var Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceManagerImpl/1', 526);
function PlaceManagerImpl$2(this$0, val$request, val$updateBrowserUrl){
  this.this$01 = this$0;
  this.val$request2 = val$request;
  this.val$updateBrowserUrl3 = val$updateBrowserUrl;
}

defineClass(527, 1, {}, PlaceManagerImpl$2);
_.execute_1 = function execute_26(){
  $revealPlace(this.this$01, this.val$request2, this.val$updateBrowserUrl3);
}
;
_.val$updateBrowserUrl3 = false;
var Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceManagerImpl/2', 527);
function $dispatch_4(this$static, handler){
  $onPlaceRequest(handler, this$static);
}

function PlaceRequestInternalEvent(request, updateBrowserHistory){
  this.request = request;
  this.updateBrowserHistory = updateBrowserHistory;
}

defineClass(628, $intern_11, {}, PlaceRequestInternalEvent);
_.dispatch_0 = function dispatch_28(handler){
  $dispatch_4(this, dynamicCast(handler, 1334));
}
;
_.getAssociatedType_0 = function getAssociatedType_29(){
  return !TYPE_28 && (TYPE_28 = new GwtEvent$Type) , TYPE_28;
}
;
_.authorized = true;
_.handled = false;
_.updateBrowserHistory = false;
var TYPE_28;
var Lcom_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceRequestInternalEvent', 628);
function PlaceWithGatekeeper(nameTokens, gatekeeper){
  PlaceImpl.call(this, nameTokens);
  this.gatekeeper = gatekeeper;
}

defineClass(97, 167, $intern_46, PlaceWithGatekeeper);
_.canReveal = function canReveal_0(){
  return this.gatekeeper.canReveal();
}
;
var Lcom_gwtplatform_mvp_client_proxy_PlaceWithGatekeeper_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'PlaceWithGatekeeper', 97);
function $bind_0(this$static, eventBus){
  this$static.eventBus = eventBus;
}

function $getPresenter(this$static, callback){
  callback.state = ($clinit_NotifyingAsyncCallback$State() , INITIALIZED);
  this$static.presenter.get_0(callback);
  $checkLoading(callback);
}

defineClass($intern_48, 1, $intern_12);
_.fireEvent = function fireEvent_7(event_0){
  $fireEventFromSource(this.eventBus, event_0, this);
}
;
var Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyImpl', $intern_48);
function $addDeferredCommand(command){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), command);
}

function $addRegisteredHandler_0(this$static, type_0, handler){
  var registration;
  registration = this$static.eventBus.addHandler(type_0, handler);
  $registerHandler_0(this$static.handlerContainer, registration);
}

function $bind_1(this$static, placeManager, eventBus){
  this$static.placeManager = placeManager;
  this$static.eventBus = eventBus;
  $addRegisteredHandler_0(this$static, (!TYPE_28 && (TYPE_28 = new GwtEvent$Type) , TYPE_28), new ProxyPlaceAbstract$1(this$static));
  $addRegisteredHandler_0(this$static, (!TYPE_24 && (TYPE_24 = new GwtEvent$Type) , TYPE_24), new ProxyPlaceAbstract$2);
}

function $fireEvent_3(this$static, event_0){
  this$static.eventBus.fireEventFromSource(event_0, this$static);
}

function $getPresenter_0(this$static, callback){
  $getPresenter(this$static.proxy, callback);
}

function $handleRequest(this$static, request, updateBrowserUrl){
  $getPresenter(this$static.proxy, new ProxyPlaceAbstract$3(this$static, this$static.eventBus, request, updateBrowserUrl));
}

function $manualReveal(this$static, presenter){
  !!this$static.placeManager.defferedNavigation || (presenter.visible?($clinit_ResetPresentersEvent() , $fireEvent_3(this$static, new ResetPresentersEvent)):$forceReveal(presenter));
  $unlock(this$static.placeManager);
}

function $matchesRequest_0(this$static, request){
  return $matchesRequest(this$static.place, request);
}

function $setPlace(this$static, place){
  this$static.place = place;
}

defineClass(539, 1, $intern_49);
_.equals$ = function equals_27(o){
  return $equals_2(this.place, o);
}
;
_.fireEvent = function fireEvent_8(event_0){
  $fireEvent_3(this, event_0);
}
;
_.getHandlerContainer = function getHandlerContainer(){
  return this.handlerContainer;
}
;
_.getNameToken = function getNameToken_0(){
  return this.place.nameTokens[0];
}
;
_.hashCode$ = function hashCode_27(){
  return 17 * hashCode_64(this.place.nameTokens);
}
;
_.toString$ = function toString_24(){
  return this.place.nameTokens[0];
}
;
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract', 539);
function $onPlaceRequest(this$static, event_0){
  var request;
  if (event_0.handled) {
    return;
  }
  request = event_0.request;
  if ($matchesRequest_0(this$static.this$01, request)) {
    event_0.handled = true;
    this$static.this$01.place.canReveal()?$handleRequest(this$static.this$01, request, event_0.updateBrowserHistory):(event_0.authorized = false);
  }
}

function ProxyPlaceAbstract$1(this$0){
  this.this$01 = this$0;
}

defineClass(543, 1, {6:1, 1334:1}, ProxyPlaceAbstract$1);
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract/1', 543);
function ProxyPlaceAbstract$2(){
}

defineClass(544, 1, {6:1}, ProxyPlaceAbstract$2);
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$2_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract/2', 544);
function ProxyPlaceAbstract$3(this$0, $anonymous0, val$request, val$updateBrowserUrl){
  this.this$01 = this$0;
  this.val$request3 = val$request;
  this.val$updateBrowserUrl4 = val$updateBrowserUrl;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(545, 88, {}, ProxyPlaceAbstract$3);
_.failure = function failure_1(caught){
  $unlock(this.this$01.placeManager);
}
;
_.success = function success(presenter){
  $addDeferredCommand(new ProxyPlaceAbstract$3$1(this, presenter, this.val$request3, this.val$updateBrowserUrl4));
}
;
_.val$updateBrowserUrl4 = false;
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract/3', 545);
function ProxyPlaceAbstract$3$1(this$1, val$presenter, val$request, val$updateBrowserUrl){
  this.this$11 = this$1;
  this.val$presenter2 = val$presenter;
  this.val$request3 = val$request;
  this.val$updateBrowserUrl4 = val$updateBrowserUrl;
}

defineClass(546, 1, {}, ProxyPlaceAbstract$3$1);
_.execute_1 = function execute_27(){
  var originalRequest;
  originalRequest = $getCurrentPlaceRequest(this.this$11.this$01.placeManager);
  originalRequest == $getCurrentPlaceRequest(this.this$11.this$01.placeManager) && $updateHistory(this.this$11.this$01.placeManager, this.val$request3, this.val$updateBrowserUrl4);
  $clinit_NavigationEvent();
  $fireEvent_2(this.this$11.this$01.placeManager, new NavigationEvent);
  $manualReveal(this.this$11.this$01, this.val$presenter2);
}
;
_.val$updateBrowserUrl4 = false;
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract/3/1', 546);
function $bind_2(this$static){
  if (this$static.wasBound) {
    $bind(this$static);
    $bind_1(this$static.this$01, this$static.this$01.placeManager, this$static.this$01.eventBus);
  }
}

function $registerHandler_0(this$static, handlerRegistration){
  $add_16(this$static.handlerRegistrations, handlerRegistration);
  this$static.wasBound = true;
}

function ProxyPlaceAbstract$ProxyHandlerContainer(this$0){
  this.this$01 = this$0;
  HandlerContainerImpl.call(this);
}

defineClass(542, 253, {}, ProxyPlaceAbstract$ProxyHandlerContainer);
_.bind_0 = function bind_3(){
  $bind_2(this);
}
;
_.wasBound = false;
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceAbstract/ProxyHandlerContainer', 542);
function ProxyPlaceImpl(){
  this.handlerContainer = new ProxyPlaceAbstract$ProxyHandlerContainer(this);
}

defineClass(87, 539, $intern_49);
var Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceImpl_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ProxyPlaceImpl', 87);
function $clinit_ResetPresentersEvent(){
  $clinit_ResetPresentersEvent = emptyMethod;
  type_1 = new GwtEvent$Type;
}

function ResetPresentersEvent(){
  $clinit_ResetPresentersEvent();
}

defineClass(328, $intern_11, {}, ResetPresentersEvent);
_.dispatch_0 = function dispatch_29(handler){
  $onResetPresenters(dynamicCast(handler, 1321));
}
;
_.getAssociatedType_0 = function getAssociatedType_30(){
  return type_1;
}
;
var type_1;
var Lcom_gwtplatform_mvp_client_proxy_ResetPresentersEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'ResetPresentersEvent', 328);
function $dispatch_5(this$static, handler){
  $getPresenter(handler.proxy, new RevealContentHandler$1(handler.eventBus, this$static));
}

function RevealContentEvent(type_0, content_0){
  this.type_0 = type_0;
  this.content_0 = content_0;
}

defineClass(84, $intern_11, {}, RevealContentEvent);
_.dispatch_0 = function dispatch_30(handler){
  $dispatch_5(this, dynamicCast(handler, 228));
}
;
_.getAssociatedType_0 = function getAssociatedType_31(){
  return this.type_0;
}
;
var Lcom_gwtplatform_mvp_client_proxy_RevealContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealContentEvent', 84);
function RevealContentHandler(eventBus, proxy){
  this.eventBus = eventBus;
  this.proxy = proxy;
}

defineClass(228, 1, {6:1, 228:1}, RevealContentHandler);
var Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealContentHandler', 228);
function RevealContentHandler$1($anonymous0, val$revealContentEvent){
  this.val$revealContentEvent3 = val$revealContentEvent;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(624, 88, {}, RevealContentHandler$1);
_.success = function success_0(presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new RevealContentHandler$1$1(presenter, this.val$revealContentEvent3));
}
;
var Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealContentHandler/1', 624);
function RevealContentHandler$1$1(val$presenter, val$revealContentEvent){
  this.val$presenter2 = val$presenter;
  this.val$revealContentEvent3 = val$revealContentEvent;
}

defineClass(625, 1, {}, RevealContentHandler$1$1);
_.execute_1 = function execute_28(){
  $forceReveal(this.val$presenter2);
  $setInSlot(this.val$presenter2, this.val$revealContentEvent3.type_0, this.val$revealContentEvent3.content_0);
}
;
var Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealContentHandler/1/1', 625);
function $clinit_RevealRootContentEvent(){
  $clinit_RevealRootContentEvent = emptyMethod;
  TYPE_29 = new GwtEvent$Type;
}

function $dispatch_6(this$static, handler){
  dynamicCast(handler.view, 205).usingRootLayoutPanel = false;
  $setInSlot(handler, ($clinit_RootPresenter() , rootSlot), this$static.content_0);
}

function RevealRootContentEvent(content_0){
  $clinit_RevealRootContentEvent();
  this.content_0 = content_0;
}

defineClass(630, $intern_11, {}, RevealRootContentEvent);
_.dispatch_0 = function dispatch_31(handler){
  $dispatch_6(this, dynamicCast(handler, 1322));
}
;
_.getAssociatedType_0 = function getAssociatedType_32(){
  return TYPE_29;
}
;
var TYPE_29;
var Lcom_gwtplatform_mvp_client_proxy_RevealRootContentEvent_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'RevealRootContentEvent', 630);
function $clinit_RevealRootLayoutContentEvent(){
  $clinit_RevealRootLayoutContentEvent = emptyMethod;
  TYPE_30 = new GwtEvent$Type;
}

var TYPE_30;
function $clinit_RevealRootPopupContentEvent(){
  $clinit_RevealRootPopupContentEvent = emptyMethod;
  TYPE_31 = new GwtEvent$Type;
}

var TYPE_31;
function $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$) {
    result = $get_Key$type$com$lemania$timetracking$client$place$TimeTrackingPlaceManager$_annotation$$none$$($getFragment_com_lemania_timetracking_client_place(this$static.injector));
    this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$;
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_3(injector){
  this.injector = injector;
}

defineClass(454, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_3);
_.singleton_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$ = null;
var Lcom_gwtplatform_mvp_client_proxy_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.mvp.client.proxy', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 454);
function $customEscape(this$static, string){
  var builder, ch_0, hierarchyChar, i, len, paramChar, valueChar;
  builder = new StringBuilder;
  len = string.length;
  hierarchyChar = this$static.hierarchySeparator.charCodeAt(0);
  paramChar = this$static.paramSeparator.charCodeAt(0);
  valueChar = this$static.valueSeparator.charCodeAt(0);
  for (i = 0; i < len; i++) {
    ch_0 = string.charCodeAt(i);
    ch_0 == 92?(builder.string += '\\3' , builder):ch_0 == hierarchyChar?(builder.string += '\\0' , builder):ch_0 == paramChar?(builder.string += '\\1' , builder):ch_0 == valueChar?(builder.string += '\\2' , builder):(builder.string += charToString(ch_0) , builder);
  }
  return $encodeQueryString(builder.string);
}

function $customUnescape(this$static, string){
  var builder, ch_0, ch2, i, len;
  builder = new StringBuilder;
  len = string.length;
  i = 0;
  while (i < len - 1) {
    ch_0 = string.charCodeAt(i);
    if (ch_0 == 92) {
      ++i;
      ch2 = string.charCodeAt(i);
      ch2 == 48?$append_4(builder, this$static.hierarchySeparator):ch2 == 49?$append_4(builder, this$static.paramSeparator):ch2 == 50?$append_4(builder, this$static.valueSeparator):ch2 == 51 && (builder.string += '\\' , builder);
    }
     else {
      builder.string += charToString(ch_0);
    }
    ++i;
  }
  if (i == len - 1) {
    ch_0 = string.charCodeAt(i);
    if (ch_0 == 92) {
      throw new TokenFormatException("Last character of string being unescaped cannot be '\\'.");
    }
    builder.string += charToString(ch_0);
  }
  return builder.string;
}

function $placeTokenToUnescapedString(this$static, placeRequest){
  var name_0, name$iterator, out, params, value_0;
  out = new StringBuilder;
  $append_4(out, $customEscape(this$static, placeRequest.nameToken));
  params = placeRequest.params?new AbstractMap$1(placeRequest.params):($clinit_Collections() , $clinit_Collections() , EMPTY_SET);
  if (params) {
    for (name$iterator = params.iterator(); name$iterator.hasNext();) {
      name_0 = dynamicCastToString(name$iterator.next_0());
      $append_4($append_4($append_4($append_4(out, this$static.paramSeparator), $customEscape(this$static, name_0)), this$static.valueSeparator), $customEscape(this$static, (value_0 = null , !!placeRequest.params && (value_0 = dynamicCastToString($get_6(placeRequest.params, name_0))) , value_0 == null && (value_0 = null) , value_0)));
    }
  }
  return out.string;
}

function $toHistoryToken(this$static, placeRequestHierarchy){
  var i, out;
  out = new StringBuilder;
  for (i = 0; i < placeRequestHierarchy.array.length; ++i) {
    i != 0 && $append_4(out, this$static.hierarchySeparator);
    $append_4(out, $placeTokenToUnescapedString(this$static, (checkElementIndex(i, placeRequestHierarchy.array.length) , dynamicCast(placeRequestHierarchy.array[i], 144))));
  }
  return out.string;
}

function $toPlaceRequestHierarchy(this$static, historyToken){
  var result, split_0, unescapedHistoryToken, unescapedPlaceToken, unescapedPlaceToken$index, unescapedPlaceToken$max, unescapedPlaceTokens, regexp;
  unescapedHistoryToken = (throwIfNull('encodedURLComponent', historyToken) , regexp = /\+/g , decodeURIComponent(historyToken.replace(regexp, '%20')));
  split_0 = $indexOf_1(unescapedHistoryToken, this$static.hierarchySeparator);
  result = new ArrayList;
  if (split_0 == -1) {
    $add_16(result, $unescapedStringToPlaceRequest(this$static, unescapedHistoryToken));
  }
   else {
    unescapedPlaceTokens = $split(unescapedHistoryToken, this$static.hierarchySeparator, 0);
    if (unescapedPlaceTokens.length == 0) {
      throw new TokenFormatException('Bad parameter: nothing in the history token.');
    }
    for (unescapedPlaceToken$index = 0 , unescapedPlaceToken$max = unescapedPlaceTokens.length; unescapedPlaceToken$index < unescapedPlaceToken$max; ++unescapedPlaceToken$index) {
      unescapedPlaceToken = unescapedPlaceTokens[unescapedPlaceToken$index];
      if (!unescapedPlaceToken.length) {
        throw new TokenFormatException("Bad parameter: Successive place tokens require a single '" + this$static.hierarchySeparator + "' between them.");
      }
      $add_16(result, $unescapedStringToPlaceRequest(this$static, unescapedPlaceToken));
    }
  }
  return result;
}

function $unescapedStringToPlaceRequest(this$static, unescapedPlaceToken){
  var key_0, param, paramToken, paramToken$index, paramToken$max, paramTokens, paramsChunk, reqBuilder, split_0, value_0;
  split_0 = $indexOf_1(unescapedPlaceToken, this$static.paramSeparator);
  if (split_0 == 0) {
    throw new TokenFormatException('Place history token is missing.');
  }
   else if (split_0 == -1) {
    return $build($nameToken(new PlaceRequest$Builder, $customUnescape(this$static, unescapedPlaceToken)));
  }
   else if (split_0 >= 0) {
    reqBuilder = $nameToken(new PlaceRequest$Builder, $customUnescape(this$static, unescapedPlaceToken.substr(0, split_0)));
    paramsChunk = __substr(unescapedPlaceToken, split_0 + 1, unescapedPlaceToken.length - (split_0 + 1));
    paramTokens = $split(paramsChunk, this$static.paramSeparator, 0);
    for (paramToken$index = 0 , paramToken$max = paramTokens.length; paramToken$index < paramToken$max; ++paramToken$index) {
      paramToken = paramTokens[paramToken$index];
      if (!paramToken.length) {
        throw new TokenFormatException("Bad parameter: Successive parameters require a single '" + this$static.paramSeparator + "' between them.");
      }
      param = $split(paramToken, this$static.valueSeparator, 0);
      if (param.length == 1) {
        if ($charAt(paramToken, paramToken.length - 1) != this$static.valueSeparator.charCodeAt(0)) {
          throw new TokenFormatException('Bad parameter: Need exactly one key and one value.');
        }
      }
       else if (param.length == 2) {
        if ($charAt(paramToken, paramToken.length - 1) == this$static.valueSeparator.charCodeAt(0)) {
          throw new TokenFormatException('Bad parameter: Need exactly one key and one value.');
        }
      }
       else {
        throw new TokenFormatException('Bad parameter: Need exactly one key and one value.');
      }
      key_0 = $customUnescape(this$static, param[0]);
      value_0 = param.length == 2?$customUnescape(this$static, param[1]):'';
      reqBuilder = (!reqBuilder.params && (reqBuilder.params = new LinkedHashMap) , value_0 != null && $put_2(reqBuilder.params, key_0, value_0) , reqBuilder);
    }
    return new PlaceRequest_0(reqBuilder.nameToken, reqBuilder.params);
  }
  return null;
}

function ParameterTokenFormatter(){
  this.hierarchySeparator = '/';
  this.paramSeparator = ';';
  this.valueSeparator = '=';
}

defineClass(325, 1, {}, ParameterTokenFormatter);
var Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'ParameterTokenFormatter', 325);
function $matchesNameToken(this$static, nameToken){
  if (this$static.nameToken == null || nameToken == null) {
    return false;
  }
  return $equals_3(this$static.nameToken, nameToken);
}

function PlaceRequest(nameToken){
  this.nameToken = nameToken;
  this.params = null;
}

function PlaceRequest_0(nameToken, params){
  this.nameToken = nameToken;
  this.params = params;
}

defineClass(144, 1, {144:1}, PlaceRequest, PlaceRequest_0);
_.equals$ = function equals_28(obj){
  var req;
  if (instanceOf(obj, 144)) {
    req = dynamicCast(obj, 144);
    if (this.nameToken == null || req.nameToken == null) {
      return false;
    }
    if (!$equals_3(this.nameToken, req.nameToken)) {
      return false;
    }
    return !this.params?!req.params:$equals_0(this.params, req.params);
  }
  return false;
}
;
_.hashCode$ = function hashCode_28(){
  if (this.nameToken == null) {
    throw new RuntimeException_0('Cannot compute hashcode of PlaceRequest with a null nameToken');
  }
  return 11 * (getHashCode_1(this.nameToken) + (!this.params?0:hashCode_65(new LinkedHashMap$EntrySet(this.params))));
}
;
_.toString$ = function toString_25(){
  return 'PlaceRequest(nameToken=' + this.nameToken + ', params=' + this.params + ')';
}
;
var Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'PlaceRequest', 144);
function $build(this$static){
  return new PlaceRequest_0(this$static.nameToken, this$static.params);
}

function $nameToken(this$static, nameToken){
  this$static.nameToken = nameToken;
  return this$static;
}

function PlaceRequest$Builder(){
}

defineClass(229, 1, {}, PlaceRequest$Builder);
var Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'PlaceRequest/Builder', 229);
function TokenFormatException(message){
  RuntimeException_0.call(this, message);
}

defineClass(126, 21, {126:1, 3:1, 42:1, 21:1, 20:1}, TokenFormatException);
var Lcom_gwtplatform_mvp_shared_proxy_TokenFormatException_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'TokenFormatException', 126);
function $get_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$) {
    result = new ParameterTokenFormatter($get_Key$type$com$gwtplatform$common$shared$UrlUtils$_annotation$$none$$($getFragment_com_gwtplatform_common_shared(this$static.injector)));
    this$static.singleton_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$;
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_4(injector){
  this.injector = injector;
}

defineClass(535, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_4);
_.singleton_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$ = null;
var Lcom_gwtplatform_mvp_shared_proxy_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.gwtplatform.mvp.shared.proxy', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 535);
function AdminGateKeeper(eventBus){
  this.eventBus = eventBus;
  $doAdd(this.eventBus, ($clinit_LoginAuthenticatedEvent() , $clinit_LoginAuthenticatedEvent() , TYPE_40), new AdminGateKeeper$1(this));
}

defineClass(620, 1, {}, AdminGateKeeper);
_.canReveal = function canReveal_1(){
  var loggedIn;
  loggedIn = false;
  !!this.currentUser && (loggedIn = this.currentUser.isAdmin && this.currentUser.isLoggedIn);
  return loggedIn;
}
;
_.currentUser = null;
var Lcom_lemania_timetracking_client_AdminGateKeeper_2_classLit = createForClass('com.lemania.timetracking.client', 'AdminGateKeeper', 620);
function AdminGateKeeper$1(this$0){
  this.this$01 = this$0;
}

defineClass(621, 1, $intern_50, AdminGateKeeper$1);
_.onLoginAuthenticated = function onLoginAuthenticated(event_0){
  this.this$01.currentUser = event_0.currentUser;
}
;
var Lcom_lemania_timetracking_client_AdminGateKeeper$1_2_classLit = createForClass('com.lemania.timetracking.client', 'AdminGateKeeper/1', 621);
function CurrentUser(){
}

defineClass(230, 1, {}, CurrentUser);
_.currentDay = 0;
_.currentMonth = 0;
_.currentYear = 0;
_.isAdmin = false;
_.isLoggedIn = false;
_.isReadOnly = false;
var Lcom_lemania_timetracking_client_CurrentUser_2_classLit = createForClass('com.lemania.timetracking.client', 'CurrentUser', 230);
function LoggedInGatekeeper(eventBus){
  this.eventBus = eventBus;
  $doAdd(this.eventBus, ($clinit_LoginAuthenticatedEvent() , $clinit_LoginAuthenticatedEvent() , TYPE_40), new LoggedInGatekeeper$1(this));
}

defineClass(622, 1, {}, LoggedInGatekeeper);
_.canReveal = function canReveal_2(){
  var loggedIn;
  loggedIn = false;
  !!this.currentUser && (loggedIn = this.currentUser.isLoggedIn);
  return loggedIn;
}
;
_.currentUser = null;
var Lcom_lemania_timetracking_client_LoggedInGatekeeper_2_classLit = createForClass('com.lemania.timetracking.client', 'LoggedInGatekeeper', 622);
function LoggedInGatekeeper$1(this$0){
  this.this$01 = this$0;
}

defineClass(623, 1, $intern_50, LoggedInGatekeeper$1);
_.onLoginAuthenticated = function onLoginAuthenticated_0(event_0){
  this.this$01.currentUser = event_0.currentUser;
}
;
var Lcom_lemania_timetracking_client_LoggedInGatekeeper$1_2_classLit = createForClass('com.lemania.timetracking.client', 'LoggedInGatekeeper/1', 623);
function $onModuleLoad_0(this$static){
  bind_0(this$static.ginjector);
  $handleTokenChange($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), ($clinit_History() , $clinit_History() , token_0));
}

function TimeTracking(){
  this.ginjector = new com_lemania_timetracking_client_gin_ClientGinjectorImpl;
}

defineClass(380, 1, {}, TimeTracking);
var Lcom_lemania_timetracking_client_TimeTracking_2_classLit = createForClass('com.lemania.timetracking.client', 'TimeTracking', 380);
function $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$(this$static){
  var result;
  result = new AdminGateKeeper($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$com$lemania$timetracking$client$LoggedInGatekeeper$_annotation$$none$$(this$static){
  var result;
  result = new LoggedInGatekeeper($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)));
  return result;
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_5(injector){
  this.injector = injector;
}

defineClass(532, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_5);
var Lcom_lemania_timetracking_client_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.lemania.timetracking.client', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 532);
function $clinit_ActionCompletedEvent(){
  $clinit_ActionCompletedEvent = emptyMethod;
  TYPE_32 = new GwtEvent$Type;
}

var TYPE_32;
function $clinit_ActionInProgressEvent(){
  $clinit_ActionInProgressEvent = emptyMethod;
  TYPE_33 = new GwtEvent$Type;
}

var TYPE_33;
function $clinit_AfterUserLogOutEvent(){
  $clinit_AfterUserLogOutEvent = emptyMethod;
  TYPE_34 = new GwtEvent$Type;
}

function AfterUserLogOutEvent(){
  $clinit_AfterUserLogOutEvent();
}

defineClass(320, $intern_11, {}, AfterUserLogOutEvent);
_.dispatch_0 = function dispatch_34(handler){
  dynamicCast(handler, 1251).onAfterUserLogOut(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_35(){
  return TYPE_34;
}
;
var TYPE_34;
var Lcom_lemania_timetracking_client_event_AfterUserLogOutEvent_2_classLit = createForClass('com.lemania.timetracking.client.event', 'AfterUserLogOutEvent', 320);
function $clinit_CoursAddedEvent(){
  $clinit_CoursAddedEvent = emptyMethod;
  TYPE_35 = new GwtEvent$Type;
}

var TYPE_35;
function $clinit_CoursesLoadedEvent(){
  $clinit_CoursesLoadedEvent = emptyMethod;
  TYPE_36 = new GwtEvent$Type;
}

var TYPE_36;
function $clinit_EcoleAddedEvent(){
  $clinit_EcoleAddedEvent = emptyMethod;
  TYPE_37 = new GwtEvent$Type;
}

var TYPE_37;
function $clinit_LoadAllProfessorLogsEvent(){
  $clinit_LoadAllProfessorLogsEvent = emptyMethod;
  TYPE_38 = new GwtEvent$Type;
}

var TYPE_38;
function $clinit_LogTypeAddedEvent(){
  $clinit_LogTypeAddedEvent = emptyMethod;
  TYPE_39 = new GwtEvent$Type;
}

var TYPE_39;
function $clinit_LoginAuthenticatedEvent(){
  $clinit_LoginAuthenticatedEvent = emptyMethod;
  TYPE_40 = new GwtEvent$Type;
}

function LoginAuthenticatedEvent(currentUser){
  $clinit_LoginAuthenticatedEvent();
  this.currentUser = currentUser;
}

defineClass(226, $intern_11, {}, LoginAuthenticatedEvent);
_.dispatch_0 = function dispatch_39(handler){
  dynamicCast(handler, 101).onLoginAuthenticated(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_40(){
  return TYPE_40;
}
;
var TYPE_40;
var Lcom_lemania_timetracking_client_event_LoginAuthenticatedEvent_2_classLit = createForClass('com.lemania.timetracking.client.event', 'LoginAuthenticatedEvent', 226);
function $clinit_UpdateTimeLogEvent(){
  $clinit_UpdateTimeLogEvent = emptyMethod;
  TYPE_41 = new GwtEvent$Type;
}

var TYPE_41;
function com_lemania_timetracking_client_gin_ClientGinjectorImpl(){
  this.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector;
  $initializeEagerSingletons(this.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector);
}

defineClass(393, 1, {}, com_lemania_timetracking_client_gin_ClientGinjectorImpl);
var Lcom_lemania_timetracking_client_gin_com_1lemania_1timetracking_1client_1gin_1ClientGinjectorImpl_2_classLit = createForClass('com.lemania.timetracking.client.gin', 'com_lemania_timetracking_client_gin_ClientGinjectorImpl', 393);
function $getFragment_com_google_web_bindery_event_shared(this$static){
  !this$static.fieldFragment_com$google$web$bindery$event$shared && (this$static.fieldFragment_com$google$web$bindery$event$shared = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment);
  return this$static.fieldFragment_com$google$web$bindery$event$shared;
}

function $getFragment_com_gwtplatform_common_client(this$static){
  !this$static.fieldFragment_com$gwtplatform$common$client && (this$static.fieldFragment_com$gwtplatform$common$client = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_0);
  return this$static.fieldFragment_com$gwtplatform$common$client;
}

function $getFragment_com_gwtplatform_common_shared(this$static){
  !this$static.fieldFragment_com$gwtplatform$common$shared && (this$static.fieldFragment_com$gwtplatform$common$shared = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_1(this$static));
  return this$static.fieldFragment_com$gwtplatform$common$shared;
}

function $getFragment_com_gwtplatform_mvp_client(this$static){
  !this$static.fieldFragment_com$gwtplatform$mvp$client && (this$static.fieldFragment_com$gwtplatform$mvp$client = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_2(this$static));
  return this$static.fieldFragment_com$gwtplatform$mvp$client;
}

function $getFragment_com_gwtplatform_mvp_client_proxy(this$static){
  !this$static.fieldFragment_com$gwtplatform$mvp$client$proxy && (this$static.fieldFragment_com$gwtplatform$mvp$client$proxy = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_3(this$static));
  return this$static.fieldFragment_com$gwtplatform$mvp$client$proxy;
}

function $getFragment_com_gwtplatform_mvp_shared_proxy(this$static){
  !this$static.fieldFragment_com$gwtplatform$mvp$shared$proxy && (this$static.fieldFragment_com$gwtplatform$mvp$shared$proxy = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_4(this$static));
  return this$static.fieldFragment_com$gwtplatform$mvp$shared$proxy;
}

function $getFragment_com_lemania_timetracking_client(this$static){
  !this$static.fieldFragment_com$lemania$timetracking$client && (this$static.fieldFragment_com$lemania$timetracking$client = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_5(this$static));
  return this$static.fieldFragment_com$lemania$timetracking$client;
}

function $getFragment_com_lemania_timetracking_client_gin(this$static){
  !this$static.fieldFragment_com$lemania$timetracking$client$gin && (this$static.fieldFragment_com$lemania$timetracking$client$gin = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_6);
  return this$static.fieldFragment_com$lemania$timetracking$client$gin;
}

function $getFragment_com_lemania_timetracking_client_place(this$static){
  !this$static.fieldFragment_com$lemania$timetracking$client$place && (this$static.fieldFragment_com$lemania$timetracking$client$place = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_7(this$static));
  return this$static.fieldFragment_com$lemania$timetracking$client$place;
}

function $getFragment_com_lemania_timetracking_client_presenter(this$static){
  !this$static.fieldFragment_com$lemania$timetracking$client$presenter && (this$static.fieldFragment_com$lemania$timetracking$client$presenter = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_8(this$static));
  return this$static.fieldFragment_com$lemania$timetracking$client$presenter;
}

function $getFragment_com_lemania_timetracking_client_rpttimebystatus(this$static){
  !this$static.fieldFragment_com$lemania$timetracking$client$rpttimebystatus && (this$static.fieldFragment_com$lemania$timetracking$client$rpttimebystatus = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_9(this$static));
  return this$static.fieldFragment_com$lemania$timetracking$client$rpttimebystatus;
}

function $getFragment_com_lemania_timetracking_client_view(this$static){
  !this$static.fieldFragment_com$lemania$timetracking$client$view && (this$static.fieldFragment_com$lemania$timetracking$client$view = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_10);
  return this$static.fieldFragment_com$lemania$timetracking$client$view;
}

function $initializeEagerSingletons(this$static){
  $get_Key$type$com$gwtplatform$mvp$client$RootPresenter$_annotation$$none$$((!this$static.fieldFragment_com$gwtplatform$mvp$client && (this$static.fieldFragment_com$gwtplatform$mvp$client = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_2(this$static)) , this$static.fieldFragment_com$gwtplatform$mvp$client));
  $initializeEagerSingletons_0((!this$static.fieldFragment_com$lemania$timetracking$client$presenter && (this$static.fieldFragment_com$lemania$timetracking$client$presenter = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_8(this$static)) , this$static.fieldFragment_com$lemania$timetracking$client$presenter));
  $get_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$MyProxy$_annotation$$none$$((!this$static.fieldFragment_com$lemania$timetracking$client$rpttimebystatus && (this$static.fieldFragment_com$lemania$timetracking$client$rpttimebystatus = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_9(this$static)) , this$static.fieldFragment_com$lemania$timetracking$client$rpttimebystatus));
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector(){
}

defineClass(405, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector);
_.fieldFragment_com$google$web$bindery$event$shared = null;
_.fieldFragment_com$gwtplatform$common$client = null;
_.fieldFragment_com$gwtplatform$common$shared = null;
_.fieldFragment_com$gwtplatform$mvp$client = null;
_.fieldFragment_com$gwtplatform$mvp$client$proxy = null;
_.fieldFragment_com$gwtplatform$mvp$shared$proxy = null;
_.fieldFragment_com$lemania$timetracking$client = null;
_.fieldFragment_com$lemania$timetracking$client$gin = null;
_.fieldFragment_com$lemania$timetracking$client$place = null;
_.fieldFragment_com$lemania$timetracking$client$presenter = null;
_.fieldFragment_com$lemania$timetracking$client$rpttimebystatus = null;
_.fieldFragment_com$lemania$timetracking$client$view = null;
var Lcom_lemania_timetracking_client_gin_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_2_classLit = createForClass('com.lemania.timetracking.client.gin', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector', 405);
function $get_Key$type$java$lang$String$_annotation$$com$lemania$timetracking$client$place$DefaultPlace$(){
  return '!homepage';
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_6(){
}

defineClass(538, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_6);
var Lcom_lemania_timetracking_client_gin_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.lemania.timetracking.client.gin', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 538);
function TimeTrackingPlaceManager(eventBus, tokenFormatter, defaultNameToken){
  this.placeHierarchy = new ArrayList;
  this.eventBus = eventBus;
  this.tokenFormatter = tokenFormatter;
  $clinit_History();
  $addValueChangeHandler(historyEventSource, this);
  this.defaultPlaceRequest = new PlaceRequest(defaultNameToken);
}

defineClass(525, 323, $intern_47, TimeTrackingPlaceManager);
var Lcom_lemania_timetracking_client_place_TimeTrackingPlaceManager_2_classLit = createForClass('com.lemania.timetracking.client.place', 'TimeTrackingPlaceManager', 525);
function $get_Key$type$com$lemania$timetracking$client$place$TimeTrackingPlaceManager$_annotation$$none$$(this$static){
  var result;
  result = new TimeTrackingPlaceManager($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_annotation$$none$$($getFragment_com_gwtplatform_mvp_shared_proxy(this$static.injector)), $get_Key$type$java$lang$String$_annotation$$com$lemania$timetracking$client$place$DefaultPlace$($getFragment_com_lemania_timetracking_client_gin(this$static.injector)));
  return result;
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_7(injector){
  this.injector = injector;
}

defineClass(524, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_7);
var Lcom_lemania_timetracking_client_place_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.lemania.timetracking.client.place', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 524);
function ContactPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(540, 87, $intern_51, ContactPresenterMyProxyImpl);
_.delayedBind = function delayedBind(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new ContactPresenterMyProxyImpl$WrappedProxy;
  $delayedBind(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['!contact']);
  $setPlace(this, new PlaceImpl(nameToken));
}
;
var Lcom_lemania_timetracking_client_presenter_ContactPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ContactPresenterMyProxyImpl', 540);
function $delayedBind(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$ContactPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function ContactPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(541, $intern_48, $intern_52, ContactPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_0(baseGinjector){
  $delayedBind(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_ContactPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ContactPresenterMyProxyImpl/WrappedProxy', 541);
function CoursAddPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(547, 87, $intern_51, CoursAddPresenterMyProxyImpl);
_.delayedBind = function delayedBind_1(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new CoursAddPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_0(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['coursadd']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
}
;
var Lcom_lemania_timetracking_client_presenter_CoursAddPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'CoursAddPresenterMyProxyImpl', 547);
function $delayedBind_0(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$CoursAddPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function CoursAddPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(548, $intern_48, $intern_52, CoursAddPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_2(baseGinjector){
  $delayedBind_0(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_CoursAddPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'CoursAddPresenterMyProxyImpl/WrappedProxy', 548);
function CoursPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(549, 87, $intern_53, CoursPresenterMyProxyImpl);
_.delayedBind = function delayedBind_3(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new CoursPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_1(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['!cours']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.eventBus.addHandler(($clinit_CoursAddedEvent() , $clinit_CoursAddedEvent() , TYPE_35), this);
}
;
var Lcom_lemania_timetracking_client_presenter_CoursPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'CoursPresenterMyProxyImpl', 549);
function $delayedBind_1(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$CoursPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function CoursPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(550, $intern_48, $intern_52, CoursPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_4(baseGinjector){
  $delayedBind_1(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_CoursPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'CoursPresenterMyProxyImpl/WrappedProxy', 550);
function EcoleAddPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(553, 87, $intern_51, EcoleAddPresenterMyProxyImpl);
_.delayedBind = function delayedBind_5(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new EcoleAddPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_2(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['!addecole']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
}
;
var Lcom_lemania_timetracking_client_presenter_EcoleAddPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'EcoleAddPresenterMyProxyImpl', 553);
function $delayedBind_2(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$EcoleAddPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function EcoleAddPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(554, $intern_48, $intern_52, EcoleAddPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_6(baseGinjector){
  $delayedBind_2(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_EcoleAddPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'EcoleAddPresenterMyProxyImpl/WrappedProxy', 554);
function EcolePresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(555, 87, $intern_54, EcolePresenterMyProxyImpl);
_.delayedBind = function delayedBind_7(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new EcolePresenterMyProxyImpl$WrappedProxy;
  $delayedBind_3(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['!ecolepage']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.eventBus.addHandler(($clinit_EcoleAddedEvent() , $clinit_EcoleAddedEvent() , TYPE_37), this);
}
;
var Lcom_lemania_timetracking_client_presenter_EcolePresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'EcolePresenterMyProxyImpl', 555);
function $delayedBind_3(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$EcolePresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function EcolePresenterMyProxyImpl$WrappedProxy(){
}

defineClass(556, $intern_48, $intern_52, EcolePresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_8(baseGinjector){
  $delayedBind_3(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_EcolePresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'EcolePresenterMyProxyImpl/WrappedProxy', 556);
function FrmPasswordPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(563, 87, $intern_55, FrmPasswordPresenterMyProxyImpl);
_.delayedBind = function delayedBind_9(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new FrmPasswordPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_4(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['password']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$LoggedInGatekeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.eventBus.addHandler(($clinit_LoginAuthenticatedEvent() , $clinit_LoginAuthenticatedEvent() , TYPE_40), this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_2(event_0){
  $getPresenter_0(this, new FrmPasswordPresenterMyProxyImpl$1(this.eventBus, event_0));
}
;
var Lcom_lemania_timetracking_client_presenter_FrmPasswordPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'FrmPasswordPresenterMyProxyImpl', 563);
function $success_1(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FrmPasswordPresenterMyProxyImpl$1$1(presenter, this$static.val$event3));
}

function FrmPasswordPresenterMyProxyImpl$1($anonymous0, val$event){
  this.val$event3 = val$event;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(565, 88, {}, FrmPasswordPresenterMyProxyImpl$1);
_.success = function success_3(presenter){
  $success_1(this, dynamicCast(presenter, 257));
}
;
var Lcom_lemania_timetracking_client_presenter_FrmPasswordPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'FrmPasswordPresenterMyProxyImpl/1', 565);
function FrmPasswordPresenterMyProxyImpl$1$1(val$presenter, val$event){
  this.val$presenter2 = val$presenter;
  this.val$event3 = val$event;
}

defineClass(566, 1, {}, FrmPasswordPresenterMyProxyImpl$1$1);
_.execute_1 = function execute_31(){
  this.val$presenter2.onLoginAuthenticated(this.val$event3);
}
;
var Lcom_lemania_timetracking_client_presenter_FrmPasswordPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'FrmPasswordPresenterMyProxyImpl/1/1', 566);
function $delayedBind_4(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function FrmPasswordPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(564, $intern_48, $intern_52, FrmPasswordPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_10(baseGinjector){
  $delayedBind_4(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_FrmPasswordPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'FrmPasswordPresenterMyProxyImpl/WrappedProxy', 564);
function HomePresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(567, 87, {6:1, 9:1, 46:1, 80:1, 72:1, 1251:1}, HomePresenterMyProxyImpl);
_.delayedBind = function delayedBind_11(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new HomePresenterMyProxyImpl$WrappedProxy;
  $delayedBind_5(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['!homepage']);
  $setPlace(this, new PlaceImpl(nameToken));
  this.eventBus.addHandler(($clinit_AfterUserLogOutEvent() , $clinit_AfterUserLogOutEvent() , TYPE_34), this);
}
;
_.onAfterUserLogOut = function onAfterUserLogOut_0(event_0){
  $getPresenter_0(this, new HomePresenterMyProxyImpl$1(this.eventBus, event_0));
}
;
var Lcom_lemania_timetracking_client_presenter_HomePresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'HomePresenterMyProxyImpl', 567);
function $success_2(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new HomePresenterMyProxyImpl$1$1(presenter, this$static.val$event3));
}

function HomePresenterMyProxyImpl$1($anonymous0, val$event){
  this.val$event3 = val$event;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(569, 88, {}, HomePresenterMyProxyImpl$1);
_.success = function success_4(presenter){
  $success_2(this, dynamicCast(presenter, 258));
}
;
var Lcom_lemania_timetracking_client_presenter_HomePresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'HomePresenterMyProxyImpl/1', 569);
function HomePresenterMyProxyImpl$1$1(val$presenter, val$event){
  this.val$presenter2 = val$presenter;
  this.val$event3 = val$event;
}

defineClass(570, 1, {}, HomePresenterMyProxyImpl$1$1);
_.execute_1 = function execute_32(){
  this.val$presenter2.onAfterUserLogOut(this.val$event3);
}
;
var Lcom_lemania_timetracking_client_presenter_HomePresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'HomePresenterMyProxyImpl/1/1', 570);
function $delayedBind_5(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$HomePresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function HomePresenterMyProxyImpl$WrappedProxy(){
}

defineClass(568, $intern_48, $intern_52, HomePresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_12(baseGinjector){
  $delayedBind_5(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_HomePresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'HomePresenterMyProxyImpl/WrappedProxy', 568);
function LogTypesAddPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(606, 87, $intern_51, LogTypesAddPresenterMyProxyImpl);
_.delayedBind = function delayedBind_13(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new LogTypesAddPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_6(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['!typesadd']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
}
;
var Lcom_lemania_timetracking_client_presenter_LogTypesAddPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'LogTypesAddPresenterMyProxyImpl', 606);
function $delayedBind_6(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function LogTypesAddPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(607, $intern_48, $intern_52, LogTypesAddPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_14(baseGinjector){
  $delayedBind_6(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_LogTypesAddPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'LogTypesAddPresenterMyProxyImpl/WrappedProxy', 607);
function LogTypesPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(608, 87, $intern_56, LogTypesPresenterMyProxyImpl);
_.delayedBind = function delayedBind_15(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new LogTypesPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_7(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['types']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.eventBus.addHandler(($clinit_LogTypeAddedEvent() , $clinit_LogTypeAddedEvent() , TYPE_39), this);
}
;
var Lcom_lemania_timetracking_client_presenter_LogTypesPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'LogTypesPresenterMyProxyImpl', 608);
function $delayedBind_7(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$LogTypesPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function LogTypesPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(609, $intern_48, $intern_52, LogTypesPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_16(baseGinjector){
  $delayedBind_7(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_LogTypesPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'LogTypesPresenterMyProxyImpl/WrappedProxy', 609);
function $clinit_MainPagePresenter(){
  $clinit_MainPagePresenter = emptyMethod;
  $clinit_PresenterWidget();
  TYPE_SetMainContent = new GwtEvent$Type;
}

function $logOut_0(this$static){
  !this$static.currentUser && (this$static.currentUser = new CurrentUser);
  this$static.currentUser.isLoggedIn = false;
  $doFire(this$static.eventBus, new LoginAuthenticatedEvent(this$static.currentUser), null);
  $doFire(this$static.eventBus, new AfterUserLogOutEvent, null);
}

function $onLoginAuthenticated(this$static, event_0){
  this$static.currentUser = event_0.currentUser;
  $initializeUi(dynamicCast(this$static.view, 181), this$static.currentUser);
}

function MainPagePresenter(eventBus, view, proxy){
  $clinit_MainPagePresenter();
  Presenter.call(this, eventBus, view, proxy);
}

defineClass(206, 75, $intern_57, MainPagePresenter);
_.onBind = function onBind_10(){
  dynamicCast(this.view, 181).setUiHandlers(this);
  $initializeUi(dynamicCast(this.view, 181), this.currentUser);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_3(event_0){
  $onLoginAuthenticated(this, event_0);
}
;
_.onReset = function onReset_3(){
  $initializeUi(dynamicCast(this.view, 181), this.currentUser);
}
;
_.revealInParent = function revealInParent_9(){
  $clinit_RevealRootContentEvent();
  $fireEvent_1(this, new RevealRootContentEvent(this));
}
;
var TYPE_SetMainContent;
var Lcom_lemania_timetracking_client_presenter_MainPagePresenter_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'MainPagePresenter', 206);
function MainPagePresenterMyProxyImpl(){
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(571, $intern_48, $intern_58, MainPagePresenterMyProxyImpl);
_.delayedBind = function delayedBind_17(baseGinjector){
  var revealContentHandler;
  this.ginjector = baseGinjector;
  $bind_0(this, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.presenter = new StandardProvider($get_Key$type$com$google$inject$Provider$com$lemania$timetracking$client$presenter$MainPagePresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  revealContentHandler = new RevealContentHandler(this.eventBus, this);
  $doAdd(this.eventBus, ($clinit_MainPagePresenter() , TYPE_SetMainContent), revealContentHandler);
  $doAdd(this.eventBus, ($clinit_LoginAuthenticatedEvent() , $clinit_LoginAuthenticatedEvent() , TYPE_40), this);
  $doAdd(this.eventBus, ($clinit_ActionInProgressEvent() , $clinit_ActionInProgressEvent() , TYPE_33), this);
  $doAdd(this.eventBus, ($clinit_ActionCompletedEvent() , $clinit_ActionCompletedEvent() , TYPE_32), this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_4(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$1(this.eventBus, event_0));
}
;
var Lcom_lemania_timetracking_client_presenter_MainPagePresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'MainPagePresenterMyProxyImpl', 571);
function $success_4(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new MainPagePresenterMyProxyImpl$1$1(presenter, this$static.val$event3));
}

function MainPagePresenterMyProxyImpl$1($anonymous0, val$event){
  this.val$event3 = val$event;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(572, 88, {}, MainPagePresenterMyProxyImpl$1);
_.success = function success_6(presenter){
  $success_4(this, dynamicCast(presenter, 206));
}
;
var Lcom_lemania_timetracking_client_presenter_MainPagePresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'MainPagePresenterMyProxyImpl/1', 572);
function MainPagePresenterMyProxyImpl$1$1(val$presenter, val$event){
  this.val$presenter2 = val$presenter;
  this.val$event3 = val$event;
}

defineClass(573, 1, {}, MainPagePresenterMyProxyImpl$1$1);
_.execute_1 = function execute_34(){
  $onLoginAuthenticated(this.val$presenter2, this.val$event3);
}
;
var Lcom_lemania_timetracking_client_presenter_MainPagePresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'MainPagePresenterMyProxyImpl/1/1', 573);
function ProfsAddPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(578, 87, $intern_51, ProfsAddPresenterMyProxyImpl);
_.delayedBind = function delayedBind_18(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new ProfsAddPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_8(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['!profsadd']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
}
;
var Lcom_lemania_timetracking_client_presenter_ProfsAddPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ProfsAddPresenterMyProxyImpl', 578);
function $delayedBind_8(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$ProfsAddPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function ProfsAddPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(579, $intern_48, $intern_52, ProfsAddPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_19(baseGinjector){
  $delayedBind_8(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_ProfsAddPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ProfsAddPresenterMyProxyImpl/WrappedProxy', 579);
function ProfsPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(580, 87, $intern_55, ProfsPresenterMyProxyImpl);
_.delayedBind = function delayedBind_20(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new ProfsPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_9(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['!profs']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$LoggedInGatekeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.eventBus.addHandler(($clinit_LoginAuthenticatedEvent() , $clinit_LoginAuthenticatedEvent() , TYPE_40), this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_6(event_0){
  $getPresenter_0(this, new ProfsPresenterMyProxyImpl$1(this.eventBus, event_0));
}
;
var Lcom_lemania_timetracking_client_presenter_ProfsPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ProfsPresenterMyProxyImpl', 580);
function $success_7(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new ProfsPresenterMyProxyImpl$1$1(presenter, this$static.val$event3));
}

function ProfsPresenterMyProxyImpl$1($anonymous0, val$event){
  this.val$event3 = val$event;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(582, 88, {}, ProfsPresenterMyProxyImpl$1);
_.success = function success_9(presenter){
  $success_7(this, dynamicCast(presenter, 227));
}
;
var Lcom_lemania_timetracking_client_presenter_ProfsPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ProfsPresenterMyProxyImpl/1', 582);
function ProfsPresenterMyProxyImpl$1$1(val$presenter, val$event){
  this.val$presenter2 = val$presenter;
  this.val$event3 = val$event;
}

defineClass(583, 1, {}, ProfsPresenterMyProxyImpl$1$1);
_.execute_1 = function execute_37(){
  this.val$presenter2.onLoginAuthenticated(this.val$event3);
}
;
var Lcom_lemania_timetracking_client_presenter_ProfsPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ProfsPresenterMyProxyImpl/1/1', 583);
function $delayedBind_9(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$ProfsPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function ProfsPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(581, $intern_48, $intern_52, ProfsPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_21(baseGinjector){
  $delayedBind_9(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_ProfsPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'ProfsPresenterMyProxyImpl/WrappedProxy', 581);
function RptTimeByDepartmentPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(584, 87, $intern_55, RptTimeByDepartmentPresenterMyProxyImpl);
_.delayedBind = function delayedBind_22(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new RptTimeByDepartmentPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_10(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['rptbydept']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$LoggedInGatekeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.eventBus.addHandler(($clinit_LoginAuthenticatedEvent() , $clinit_LoginAuthenticatedEvent() , TYPE_40), this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_8(event_0){
  $getPresenter_0(this, new RptTimeByDepartmentPresenterMyProxyImpl$1(this.eventBus, event_0));
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByDepartmentPresenterMyProxyImpl', 584);
function $success_8(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new RptTimeByDepartmentPresenterMyProxyImpl$1$1(presenter, this$static.val$event3));
}

function RptTimeByDepartmentPresenterMyProxyImpl$1($anonymous0, val$event){
  this.val$event3 = val$event;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(586, 88, {}, RptTimeByDepartmentPresenterMyProxyImpl$1);
_.success = function success_10(presenter){
  $success_8(this, dynamicCast(presenter, 259));
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByDepartmentPresenterMyProxyImpl/1', 586);
function RptTimeByDepartmentPresenterMyProxyImpl$1$1(val$presenter, val$event){
  this.val$presenter2 = val$presenter;
  this.val$event3 = val$event;
}

defineClass(587, 1, {}, RptTimeByDepartmentPresenterMyProxyImpl$1$1);
_.execute_1 = function execute_38(){
  this.val$presenter2.onLoginAuthenticated(this.val$event3);
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByDepartmentPresenterMyProxyImpl/1/1', 587);
function $delayedBind_10(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function RptTimeByDepartmentPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(585, $intern_48, $intern_52, RptTimeByDepartmentPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_23(baseGinjector){
  $delayedBind_10(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByDepartmentPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByDepartmentPresenterMyProxyImpl/WrappedProxy', 585);
function RptTimeByMonthPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(588, 87, $intern_55, RptTimeByMonthPresenterMyProxyImpl);
_.delayedBind = function delayedBind_24(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new RptTimeByMonthPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_11(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['rpttimebymonth']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.eventBus.addHandler(($clinit_LoginAuthenticatedEvent() , $clinit_LoginAuthenticatedEvent() , TYPE_40), this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_10(event_0){
  $getPresenter_0(this, new RptTimeByMonthPresenterMyProxyImpl$1(this.eventBus, event_0));
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByMonthPresenterMyProxyImpl', 588);
function $success_9(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new RptTimeByMonthPresenterMyProxyImpl$1$1(presenter, this$static.val$event3));
}

function RptTimeByMonthPresenterMyProxyImpl$1($anonymous0, val$event){
  this.val$event3 = val$event;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(590, 88, {}, RptTimeByMonthPresenterMyProxyImpl$1);
_.success = function success_11(presenter){
  $success_9(this, dynamicCast(presenter, 260));
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByMonthPresenterMyProxyImpl/1', 590);
function RptTimeByMonthPresenterMyProxyImpl$1$1(val$presenter, val$event){
  this.val$presenter2 = val$presenter;
  this.val$event3 = val$event;
}

defineClass(591, 1, {}, RptTimeByMonthPresenterMyProxyImpl$1$1);
_.execute_1 = function execute_39(){
  this.val$presenter2.onLoginAuthenticated(this.val$event3);
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByMonthPresenterMyProxyImpl/1/1', 591);
function $delayedBind_11(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function RptTimeByMonthPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(589, $intern_48, $intern_52, RptTimeByMonthPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_25(baseGinjector){
  $delayedBind_11(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByMonthPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByMonthPresenterMyProxyImpl/WrappedProxy', 589);
function RptTimeByProfPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(559, 87, $intern_55, RptTimeByProfPresenterMyProxyImpl);
_.delayedBind = function delayedBind_26(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new RptTimeByProfPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_12(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['extractdata']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$LoggedInGatekeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.eventBus.addHandler(($clinit_LoginAuthenticatedEvent() , $clinit_LoginAuthenticatedEvent() , TYPE_40), this);
  this.eventBus.addHandler(($clinit_CoursesLoadedEvent() , $clinit_CoursesLoadedEvent() , TYPE_36), this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_12(event_0){
  $getPresenter_0(this, new RptTimeByProfPresenterMyProxyImpl$1(this.eventBus, event_0));
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByProfPresenterMyProxyImpl', 559);
function $success_10(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new RptTimeByProfPresenterMyProxyImpl$1$1(presenter, this$static.val$event3));
}

function RptTimeByProfPresenterMyProxyImpl$1($anonymous0, val$event){
  this.val$event3 = val$event;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(561, 88, {}, RptTimeByProfPresenterMyProxyImpl$1);
_.success = function success_12(presenter){
  $success_10(this, dynamicCast(presenter, 256));
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByProfPresenterMyProxyImpl/1', 561);
function RptTimeByProfPresenterMyProxyImpl$1$1(val$presenter, val$event){
  this.val$presenter2 = val$presenter;
  this.val$event3 = val$event;
}

defineClass(562, 1, {}, RptTimeByProfPresenterMyProxyImpl$1$1);
_.execute_1 = function execute_40(){
  this.val$presenter2.onLoginAuthenticated(this.val$event3);
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByProfPresenterMyProxyImpl/1/1', 562);
function $delayedBind_12(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function RptTimeByProfPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(560, $intern_48, $intern_52, RptTimeByProfPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_27(baseGinjector){
  $delayedBind_12(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeByProfPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeByProfPresenterMyProxyImpl/WrappedProxy', 560);
function RptTimeBySchoolPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(592, 87, $intern_51, RptTimeBySchoolPresenterMyProxyImpl);
_.delayedBind = function delayedBind_28(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new RptTimeBySchoolPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_13(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['rptbyschool']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$LoggedInGatekeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeBySchoolPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeBySchoolPresenterMyProxyImpl', 592);
function $delayedBind_13(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function RptTimeBySchoolPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(593, $intern_48, $intern_52, RptTimeBySchoolPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_29(baseGinjector){
  $delayedBind_13(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_RptTimeBySchoolPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'RptTimeBySchoolPresenterMyProxyImpl/WrappedProxy', 593);
function SettingsPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(594, 87, $intern_51, SettingsPresenterMyProxyImpl);
_.delayedBind = function delayedBind_30(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new SettingsPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_14(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['settings']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
}
;
var Lcom_lemania_timetracking_client_presenter_SettingsPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'SettingsPresenterMyProxyImpl', 594);
function $delayedBind_14(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$SettingsPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function SettingsPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(595, $intern_48, $intern_52, SettingsPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_31(baseGinjector){
  $delayedBind_14(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_SettingsPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'SettingsPresenterMyProxyImpl/WrappedProxy', 595);
function TimeInputPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(596, 87, $intern_59, TimeInputPresenterMyProxyImpl);
_.delayedBind = function delayedBind_32(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new TimeInputPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_15(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['!timeinput']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$LoggedInGatekeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.eventBus.addHandler(($clinit_UpdateTimeLogEvent() , $clinit_UpdateTimeLogEvent() , TYPE_41), this);
  this.eventBus.addHandler(($clinit_LoginAuthenticatedEvent() , $clinit_LoginAuthenticatedEvent() , TYPE_40), this);
  this.eventBus.addHandler(($clinit_ActionCompletedEvent() , $clinit_ActionCompletedEvent() , TYPE_32), this);
  this.eventBus.addHandler(($clinit_LoadAllProfessorLogsEvent() , $clinit_LoadAllProfessorLogsEvent() , TYPE_38), this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_14(event_0){
  $getPresenter_0(this, new TimeInputPresenterMyProxyImpl$2(this.eventBus, event_0));
}
;
var Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'TimeInputPresenterMyProxyImpl', 596);
function $success_12(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new TimeInputPresenterMyProxyImpl$2$1(presenter, this$static.val$event3));
}

function TimeInputPresenterMyProxyImpl$2($anonymous0, val$event){
  this.val$event3 = val$event;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(600, 88, {}, TimeInputPresenterMyProxyImpl$2);
_.success = function success_14(presenter){
  $success_12(this, dynamicCast(presenter, 93));
}
;
var Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'TimeInputPresenterMyProxyImpl/2', 600);
function TimeInputPresenterMyProxyImpl$2$1(val$presenter, val$event){
  this.val$presenter2 = val$presenter;
  this.val$event3 = val$event;
}

defineClass(601, 1, {}, TimeInputPresenterMyProxyImpl$2$1);
_.execute_1 = function execute_42(){
  this.val$presenter2.onLoginAuthenticated(this.val$event3);
}
;
var Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'TimeInputPresenterMyProxyImpl/2/1', 601);
function $delayedBind_15(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$TimeInputPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function TimeInputPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(597, $intern_48, $intern_52, TimeInputPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_33(baseGinjector){
  $delayedBind_15(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'TimeInputPresenterMyProxyImpl/WrappedProxy', 597);
function UserManagementPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(612, 87, $intern_51, UserManagementPresenterMyProxyImpl);
_.delayedBind = function delayedBind_34(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new UserManagementPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_16(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['usermanagement']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$AdminGateKeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
}
;
var Lcom_lemania_timetracking_client_presenter_UserManagementPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'UserManagementPresenterMyProxyImpl', 612);
function $delayedBind_16(this$static, baseGinjector){
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$UserManagementPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_presenter(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
}

function UserManagementPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(613, $intern_48, $intern_52, UserManagementPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_35(baseGinjector){
  $delayedBind_16(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_presenter_UserManagementPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'UserManagementPresenterMyProxyImpl/WrappedProxy', 613);
function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$ContactPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$CoursAddPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$2(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$CoursPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$3(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$EcoleAddPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$4(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$EcolePresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$5(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$7(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$HomePresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$8(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$17(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$LogTypesPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$18(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$ProfsAddPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$10(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$ProfsPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$11(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$12(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$13(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$6(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$14(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$SettingsPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$15(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$TimeInputPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$16(this$static);
  return result;
}

function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$presenter$UserManagementPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$19(this$static);
  return result;
}

function $get_Key$type$com$google$inject$Provider$com$lemania$timetracking$client$presenter$MainPagePresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$9(this$static);
  return result;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$) {
    created = new ContactPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$) {
    created = new CoursAddPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$MyProxy$_annotation$$none$$) {
    created = new CoursPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$MyProxy$_annotation$$none$$) {
    created = new EcoleAddPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$MyProxy$_annotation$$none$$) {
    created = new EcolePresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$MyProxy$_annotation$$none$$) {
    created = new FrmPasswordPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$MyProxy$_annotation$$none$$) {
    created = new HomePresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$MyProxy$_annotation$$none$$) {
    created = new LogTypesAddPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$MyProxy$_annotation$$none$$) {
    created = new LogTypesPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$MyProxy$_annotation$$none$$) {
    created = new MainPagePresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$_annotation$$none$$) {
    result = new MainPagePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$view$MainPageView$_annotation$$none$$($getFragment_com_lemania_timetracking_client_view(this$static.injector)), $get_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$MyProxy$_annotation$$none$$(this$static));
    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$) {
    created = new ProfsAddPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$) {
    created = new ProfsPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$) {
    created = new RptTimeByDepartmentPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$MyProxy$_annotation$$none$$) {
    created = new RptTimeByMonthPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$MyProxy$_annotation$$none$$) {
    created = new RptTimeByProfPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$MyProxy$_annotation$$none$$) {
    created = new RptTimeBySchoolPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$) {
    created = new SettingsPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$) {
    created = new TimeInputPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$;
}

function $get_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$) {
    created = new UserManagementPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$;
}

function $initializeEagerSingletons_0(this$static){
  $get_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$MyProxy$_annotation$$none$$(this$static);
  $get_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$(this$static);
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_8(injector){
  this.injector = injector;
}

defineClass(317, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_8);
_.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$ContactPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursAddPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$CoursPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$EcoleAddPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$EcolePresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$FrmPasswordPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$HomePresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesAddPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$LogTypesPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$MainPagePresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsAddPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$ProfsPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByDepartmentPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByMonthPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeByProfPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$RptTimeBySchoolPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$SettingsPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$TimeInputPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$presenter$UserManagementPresenter$_annotation$$none$$ = null;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 317);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1(this$0){
  this.this$01 = this$0;
}

defineClass(415, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1);
_.get_0 = function get_14(callback){
  runAsync(1, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/1', 415);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(416, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1$1);
_.onFailure_0 = function onFailure_52(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$1$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/1/1', 416);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$10(this$0){
  this.this$01 = this$0;
}

defineClass(432, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$10);
_.get_0 = function get_15(callback){
  runAsync(9, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$10$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$10_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/10', 432);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$10$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(433, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$10$1);
_.onFailure_0 = function onFailure_53(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$10$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/10/1', 433);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$11(this$0){
  this.this$01 = this$0;
}

defineClass(434, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$11);
_.get_0 = function get_16(callback){
  runAsync(10, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$11$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$11_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/11', 434);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$11$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(435, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$11$1);
_.onFailure_0 = function onFailure_54(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$11$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/11/1', 435);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$12(this$0){
  this.this$01 = this$0;
}

defineClass(436, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$12);
_.get_0 = function get_17(callback){
  runAsync(11, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$12$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$12_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/12', 436);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$12$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(437, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$12$1);
_.onFailure_0 = function onFailure_55(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$12$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/12/1', 437);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$13(this$0){
  this.this$01 = this$0;
}

defineClass(438, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$13);
_.get_0 = function get_18(callback){
  runAsync(12, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$13$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$13_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/13', 438);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$13$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(439, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$13$1);
_.onFailure_0 = function onFailure_56(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$13$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/13/1', 439);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$14(this$0){
  this.this$01 = this$0;
}

defineClass(440, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$14);
_.get_0 = function get_19(callback){
  runAsync(13, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$14$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$14_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/14', 440);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$14$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(441, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$14$1);
_.onFailure_0 = function onFailure_57(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$14$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/14/1', 441);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$15(this$0){
  this.this$01 = this$0;
}

defineClass(442, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$15);
_.get_0 = function get_20(callback){
  runAsync(14, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$15$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$15_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/15', 442);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$15$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(443, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$15$1);
_.onFailure_0 = function onFailure_58(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$15$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/15/1', 443);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$16(this$0){
  this.this$01 = this$0;
}

defineClass(444, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$16);
_.get_0 = function get_21(callback){
  runAsync(15, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$16$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$16_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/16', 444);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$16$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(445, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$16$1);
_.onFailure_0 = function onFailure_59(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$16$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/16/1', 445);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$17(this$0){
  this.this$01 = this$0;
}

defineClass(446, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$17);
_.get_0 = function get_22(callback){
  runAsync(16, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$17$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$17_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/17', 446);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$17$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(447, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$17$1);
_.onFailure_0 = function onFailure_60(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$17$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/17/1', 447);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$18(this$0){
  this.this$01 = this$0;
}

defineClass(448, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$18);
_.get_0 = function get_23(callback){
  runAsync(17, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$18$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$18_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/18', 448);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$18$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(449, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$18$1);
_.onFailure_0 = function onFailure_61(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$18$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/18/1', 449);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$19(this$0){
  this.this$01 = this$0;
}

defineClass(450, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$19);
_.get_0 = function get_24(callback){
  runAsync(18, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$19$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$19_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/19', 450);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$19$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(451, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$19$1);
_.onFailure_0 = function onFailure_62(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$19$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/19/1', 451);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$2(this$0){
  this.this$01 = this$0;
}

defineClass(417, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$2);
_.get_0 = function get_25(callback){
  runAsync(2, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$2$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/2', 417);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$2$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(418, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$2$1);
_.onFailure_0 = function onFailure_63(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$2$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/2/1', 418);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$3(this$0){
  this.this$01 = this$0;
}

defineClass(419, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$3);
_.get_0 = function get_26(callback){
  runAsync(3, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$3$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/3', 419);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$3$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(420, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$3$1);
_.onFailure_0 = function onFailure_64(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$3$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/3/1', 420);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$4(this$0){
  this.this$01 = this$0;
}

defineClass(421, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$4);
_.get_0 = function get_27(callback){
  runAsync(4, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$4$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$4_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/4', 421);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$4$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(422, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$4$1);
_.onFailure_0 = function onFailure_65(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$4$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/4/1', 422);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$5(this$0){
  this.this$01 = this$0;
}

defineClass(423, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$5);
_.get_0 = function get_28(callback){
  runAsync(5, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$5$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$5_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/5', 423);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$5$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(424, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$5$1);
_.onFailure_0 = function onFailure_66(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$5$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/5/1', 424);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$6(this$0){
  this.this$01 = this$0;
}

defineClass(425, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$6);
_.get_0 = function get_29(callback){
  runAsync(6, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$6$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$6_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/6', 425);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$6$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(426, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$6$1);
_.onFailure_0 = function onFailure_67(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$6$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/6/1', 426);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$7(this$0){
  this.this$01 = this$0;
}

defineClass(427, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$7);
_.get_0 = function get_30(callback){
  runAsync(7, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$7$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$7_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/7', 427);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$7$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(428, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$7$1);
_.onFailure_0 = function onFailure_68(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$7$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/7/1', 428);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$8(this$0){
  this.this$01 = this$0;
}

defineClass(429, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$8);
_.get_0 = function get_31(callback){
  runAsync(8, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$8$1(this, callback));
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$8_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/8', 429);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$8$1(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(430, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$8$1);
_.onFailure_0 = function onFailure_69(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$8$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/8/1', 430);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$9(this$0){
  this.this$01 = this$0;
}

defineClass(431, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$9);
var Lcom_lemania_timetracking_client_presenter_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$9_2_classLit = createForClass('com.lemania.timetracking.client.presenter', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/9', 431);
function $clinit_RptTimeByStatusPresenter(){
  $clinit_RptTimeByStatusPresenter = emptyMethod;
  $clinit_PresenterWidget();
  SLOT_RptTimeByStatus = new GwtEvent$Type;
}

var SLOT_RptTimeByStatus;
function RptTimeByStatusPresenterMyProxyImpl(){
  ProxyPlaceImpl.call(this);
  $clinit_DelayedBindRegistry();
  $add_16(delayedBindObjects, this);
}

defineClass(614, 87, $intern_55, RptTimeByStatusPresenterMyProxyImpl);
_.delayedBind = function delayedBind_36(baseGinjector){
  var nameToken, wrappedProxy;
  this.ginjector = baseGinjector;
  $bind_1(this, $get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)), $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  wrappedProxy = new RptTimeByStatusPresenterMyProxyImpl$WrappedProxy;
  $delayedBind_17(wrappedProxy, this.ginjector);
  this.proxy = wrappedProxy;
  nameToken = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['rptbystatus']);
  $setPlace(this, new PlaceWithGatekeeper(nameToken, $get_Key$type$com$lemania$timetracking$client$LoggedInGatekeeper$_annotation$$none$$($getFragment_com_lemania_timetracking_client(this.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this.eventBus.addHandler(($clinit_LoginAuthenticatedEvent() , $clinit_LoginAuthenticatedEvent() , TYPE_40), this);
}
;
_.onLoginAuthenticated = function onLoginAuthenticated_16(event_0){
  $getPresenter_0(this, new RptTimeByStatusPresenterMyProxyImpl$1(this.eventBus, event_0));
}
;
var Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusPresenterMyProxyImpl_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus', 'RptTimeByStatusPresenterMyProxyImpl', 614);
function $success_15(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new RptTimeByStatusPresenterMyProxyImpl$1$1(presenter, this$static.val$event3));
}

function RptTimeByStatusPresenterMyProxyImpl$1($anonymous0, val$event){
  this.val$event3 = val$event;
  NotifyingAsyncCallback.call(this, $anonymous0);
}

defineClass(616, 88, {}, RptTimeByStatusPresenterMyProxyImpl$1);
_.success = function success_17(presenter){
  $success_15(this, dynamicCast(presenter, 262));
}
;
var Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusPresenterMyProxyImpl$1_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus', 'RptTimeByStatusPresenterMyProxyImpl/1', 616);
function RptTimeByStatusPresenterMyProxyImpl$1$1(val$presenter, val$event){
  this.val$presenter2 = val$presenter;
  this.val$event3 = val$event;
}

defineClass(617, 1, {}, RptTimeByStatusPresenterMyProxyImpl$1$1);
_.execute_1 = function execute_45(){
  this.val$presenter2.onLoginAuthenticated(this.val$event3);
}
;
var Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusPresenterMyProxyImpl$1$1_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus', 'RptTimeByStatusPresenterMyProxyImpl/1/1', 617);
function $delayedBind_17(this$static, baseGinjector){
  var revealContentHandler;
  this$static.ginjector = baseGinjector;
  $bind_0(this$static, ($get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client_proxy(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)) , $get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector))));
  this$static.presenter = new CodeSplitProvider($get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$$_annotation$$none$$($getFragment_com_lemania_timetracking_client_rpttimebystatus(this$static.ginjector.fieldcom_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector)));
  revealContentHandler = new RevealContentHandler(this$static.eventBus, this$static);
  $doAdd(this$static.eventBus, ($clinit_RptTimeByStatusPresenter() , SLOT_RptTimeByStatus), revealContentHandler);
}

function RptTimeByStatusPresenterMyProxyImpl$WrappedProxy(){
}

defineClass(615, $intern_48, $intern_52, RptTimeByStatusPresenterMyProxyImpl$WrappedProxy);
_.delayedBind = function delayedBind_37(baseGinjector){
  $delayedBind_17(this, baseGinjector);
}
;
var Lcom_lemania_timetracking_client_rpttimebystatus_RptTimeByStatusPresenterMyProxyImpl$WrappedProxy_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus', 'RptTimeByStatusPresenterMyProxyImpl/WrappedProxy', 615);
function $get_Key$type$com$google$gwt$inject$client$AsyncProvider$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$$_annotation$$none$$(this$static){
  var result;
  result = new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1_0(this$static);
  return result;
}

function $get_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$MyProxy$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$MyProxy$_annotation$$none$$) {
    created = new RptTimeByStatusPresenterMyProxyImpl;
    this$static.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$MyProxy$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$MyProxy$_annotation$$none$$;
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_9(injector){
  this.injector = injector;
}

defineClass(318, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_9);
_.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$MyProxy$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusPresenter$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$rpttimebystatus$RptTimeByStatusView$_annotation$$none$$ = null;
var Lcom_lemania_timetracking_client_rpttimebystatus_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 318);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1_0(this$0){
  this.this$01 = this$0;
}

defineClass(452, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1_0);
_.get_0 = function get_32(callback){
  runAsync(19, new com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1$1_0(this, callback));
}
;
var Lcom_lemania_timetracking_client_rpttimebystatus_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$1_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/1', 452);
function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1$1_0(this$1, val$callback){
  this.this$11 = this$1;
  this.val$callback2 = val$callback;
}

defineClass(453, 1, $intern_60, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment$1$1_0);
_.onFailure_0 = function onFailure_71(ex){
  $onFailure_0(this.val$callback2, ex);
}
;
var Lcom_lemania_timetracking_client_rpttimebystatus_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment$1$1_2_classLit = createForClass('com.lemania.timetracking.client.rpttimebystatus', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment/1/1', 453);
function $initializeUi(this$static, currentUser){
  if (!!currentUser && currentUser.isLoggedIn) {
    $setText_0(this$static.txtWelcome, 'Vous \xEAtes connect\xE9(e), ' + currentUser.fullName + ' !');
    $setText_1(this$static.cmdLogout, 'D\xE9connexion');
    $setText_0(this$static.lblCurrentMonth, 'Le mois actuel:  ' + ('' + currentUser.currentMonth) + '/' + ('' + currentUser.currentYear));
    $add_5(this$static.dockPanel, this$static.treeMenu, ($clinit_DockPanel() , WEST));
    $setCellWidth(this$static.treeMenu, '250px');
  }
   else {
    $setText_0(this$static.txtWelcome, '');
    $setText_1(this$static.cmdLogout, '');
    $setText_0(this$static.lblCurrentMonth, '');
    $remove_5(this$static.dockPanel, this$static.treeMenu);
  }
  $setVisible_0(this$static.imgProgressBar, false);
}

function $onButtonClick(this$static){
  $setVisible_0(this$static.treeMenu, !$isVisible(this$static.treeMenu));
  if ($isVisible(this$static.treeMenu)) {
    $add_5(this$static.dockPanel, this$static.treeMenu, ($clinit_DockPanel() , WEST));
    $setCellWidth(this$static.treeMenu, '250px');
  }
   else {
    $remove_5(this$static.dockPanel, this$static.treeMenu);
  }
}

function $onCmdContactClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , $clinit_History() , newItem('!contact', true));
}

function $onCmdCoursAddClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , newItem('coursadd', true));
}

function $onCmdCoursClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , newItem('!cours', true));
}

function $onCmdEcoleAddClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , newItem('!addecole', true));
}

function $onCmdEcolePageClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , newItem('!ecolepage', true));
}

function $onCmdExtractDataClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , $clinit_History() , newItem('extractdata', true));
}

function $onCmdHomepageClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , newItem('!homepage', true));
}

function $onCmdLogoutClicked(this$static){
  !!this$static.uiHandlers && $logOut_0(dynamicCast(this$static.uiHandlers, 96));
}

function $onCmdPasswordClick(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , $clinit_History() , newItem('password', true));
}

function $onCmdProfsAddClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , newItem('!profsadd', true));
}

function $onCmdProfsClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , newItem('!profs', true));
}

function $onCmdRptByDeptClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , $clinit_History() , newItem('rptbydept', true));
}

function $onCmdRptBySchoolClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , $clinit_History() , newItem('rpttimebymonth', true));
}

function $onCmdRptByStatusClick(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , $clinit_History() , newItem('rptbystatus', true));
}

function $onCmdSettingsClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , $clinit_History() , newItem('settings', true));
}

function $onCmdTimeInputClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , newItem('!timeinput', true));
}

function $onCmdTypesAddClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , newItem('!typesadd', true));
}

function $onCmdTypesClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , newItem('types', true));
}

function $onCmdUserMgtClicked(this$static){
  !!this$static.uiHandlers && (dynamicCast(this$static.uiHandlers, 96) , $clinit_History() , newItem('usermanagement', true));
}

function MainPageView(){
  $clinit_ViewWithUiHandlers();
  this.widget = $build_f_FlowPanel1(new MainPageView_MainPageViewUiBinderImpl$Widgets(this));
}

defineClass(696, $intern_45, {15:1, 181:1}, MainPageView);
_.asWidget = function asWidget_12(){
  return this.widget;
}
;
_.setInSlot = function setInSlot_1(slot, content_0){
  maskUndefined(slot) === maskUndefined(($clinit_MainPagePresenter() , TYPE_SetMainContent))?($clear_2(this.mainContentPanel) , !!content_0 && $add_0(this.mainContentPanel, content_0)):undefined;
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView', 696);
function $build_f_FlowPanel1(this$static){
  var f_FlowPanel1, dockPanel, f_HorizontalPanel2, f_HorizontalPanel5, f_HorizontalPanel15, f_Image3, lblCurrentMonth, txtWelcome, cmdLogout, button, imgProgressBar, f_Label16;
  f_FlowPanel1 = new FlowPanel;
  $add_6(f_FlowPanel1, (dockPanel = new DockPanel , $add_5(dockPanel, (f_HorizontalPanel2 = new HorizontalPanel , $setVerticalAlignment(f_HorizontalPanel2, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , $add_8(f_HorizontalPanel2, (f_Image3 = new Image_0 , ($clinit_DOM() , f_Image3.element).style['width'] = '' , $setUrl(f_Image3, ($clinit_UriUtils() , new SafeUriString('images/logo.jpg'))) , f_Image3)) , $add_8(f_HorizontalPanel2, (lblCurrentMonth = new Label , this$static.owner.lblCurrentMonth = lblCurrentMonth , lblCurrentMonth)) , $add_8(f_HorizontalPanel2, (txtWelcome = new Label , $setAutoHorizontalAlignment(txtWelcome, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT)) , txtWelcome.element.style['width'] = '' , this$static.owner.txtWelcome = txtWelcome , txtWelcome)) , $add_8(f_HorizontalPanel2, new Label) , $add_8(f_HorizontalPanel2, (cmdLogout = new Hyperlink , $setTargetHistoryToken(cmdLogout, 'newHistoryToken') , cmdLogout.element.style['width'] = '' , $addHandler_0(cmdLogout, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , this$static.owner.cmdLogout = cmdLogout , cmdLogout)) , f_HorizontalPanel2.element.style['height'] = '54px' , undefined , f_HorizontalPanel2.element.style['width'] = '100%' , f_HorizontalPanel2), ($clinit_DockPanel() , NORTH)) , $add_5(dockPanel, (f_HorizontalPanel5 = new HorizontalPanel , $setVerticalAlignment(f_HorizontalPanel5, ALIGN_MIDDLE) , $add_8(f_HorizontalPanel5, (button = new Button , $setClassName(button.element, 'hidemenu') , $setInnerText(button.element, 'Afficher/ Cacher le menu') , $addDomHandler(button, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames18, (null , TYPE_0)) , button)) , $add_8(f_HorizontalPanel5, (imgProgressBar = new Image_0 , imgProgressBar.element.style['height'] = '25px' , imgProgressBar.element.style['width'] = '' , $setUrl(imgProgressBar, new SafeUriString('images/13.GIF')) , this$static.owner.imgProgressBar = imgProgressBar , imgProgressBar)) , f_HorizontalPanel5.element.style['height'] = '30px' , undefined , f_HorizontalPanel5.element.style['width'] = '480px' , f_HorizontalPanel5), NORTH) , $add_5(dockPanel, this$static.treeMenu, WEST) , $setCellWidth(this$static.treeMenu, '10%') , $setCellHeight(this$static.treeMenu) , $add_5(dockPanel, this$static.mainContentPanel, CENTER_0) , $setCellWidth(this$static.mainContentPanel, '') , $add_5(dockPanel, (f_HorizontalPanel15 = new HorizontalPanel , $setHorizontalAlignment_0(f_HorizontalPanel15, ALIGN_LEFT) , $add_8(f_HorizontalPanel15, (f_Label16 = new Label , $setTextOrHtml(f_Label16.directionalTextHelper, 'Copyright \xA9 Ecole L\xE9mania', false) , $updateHorizontalAlignment(f_Label16) , f_Label16)) , f_HorizontalPanel15.element.style['width'] = '100%' , f_HorizontalPanel15), SOUTH) , dockPanel.element.style['height'] = '100%' , dockPanel.element.style['width'] = '100%' , $setPropertyInt(dockPanel.table, 'cellSpacing', 5) , this$static.owner.dockPanel = dockPanel , dockPanel));
  f_FlowPanel1.element.style['height'] = '100%';
  f_FlowPanel1.element.style['width'] = '100%';
  return f_FlowPanel1;
}

function MainPageView_MainPageViewUiBinderImpl$Widgets(owner){
  var cmdHomepage, sb, f_TreeItem6, cmdTimeInput, sb_0, cmdPassword, f_TreeItem7, cmdRptByDept, sb_1, cmdExtractData, sb_2, cmdRptByStatus, sb_3, cmdRptByMonth, sb_4, f_TreeItem8, f_TreeItem9, f_TreeItem10, cmdCours, sb_5, cmdCoursAdd, sb_6, f_TreeItem11, cmdEcolePage, sb_7, cmdEcoleAdd, f_TreeItem12, cmdTypes, cmdTypesAdd, sb_8, f_TreeItem13, cmdUserMgt, cmdSettings, cmdContact, sb_9, f_Image14, cmdProfs, cmdProfsAdd;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new MainPageView_MainPageViewUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new MainPageView_MainPageViewUiBinderImpl$Widgets$2(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new MainPageView_MainPageViewUiBinderImpl$Widgets$3(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new MainPageView_MainPageViewUiBinderImpl$Widgets$4(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new MainPageView_MainPageViewUiBinderImpl$Widgets$5(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new MainPageView_MainPageViewUiBinderImpl$Widgets$6(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new MainPageView_MainPageViewUiBinderImpl$Widgets$7(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8 = new MainPageView_MainPageViewUiBinderImpl$Widgets$8(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9 = new MainPageView_MainPageViewUiBinderImpl$Widgets$9(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10 = new MainPageView_MainPageViewUiBinderImpl$Widgets$10(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11 = new MainPageView_MainPageViewUiBinderImpl$Widgets$11(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12 = new MainPageView_MainPageViewUiBinderImpl$Widgets$12(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13 = new MainPageView_MainPageViewUiBinderImpl$Widgets$13(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14 = new MainPageView_MainPageViewUiBinderImpl$Widgets$14(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames15 = new MainPageView_MainPageViewUiBinderImpl$Widgets$15(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames16 = new MainPageView_MainPageViewUiBinderImpl$Widgets$16(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames17 = new MainPageView_MainPageViewUiBinderImpl$Widgets$17(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames18 = new MainPageView_MainPageViewUiBinderImpl$Widgets$18(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames19 = new MainPageView_MainPageViewUiBinderImpl$Widgets$19(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames20 = new MainPageView_MainPageViewUiBinderImpl$Widgets$20(this);
  this.owner = owner;
  this.treeMenu = new Tree;
  $addItem_0(this.treeMenu, (cmdHomepage = new Button , $setHTML(cmdHomepage, (sb = new StringBuilder , sb.string += 'ACCUEIL' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , $setClassName(($clinit_DOM() , cmdHomepage.element), 'button-normal') , cmdHomepage.element.style['height'] = '' , cmdHomepage.element.style['width'] = '220px' , $addDomHandler(cmdHomepage, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cmdHomepage));
  $addItem(this.treeMenu, (f_TreeItem6 = new TreeItem , $addItem_2(f_TreeItem6, (cmdTimeInput = new Button , $setHTML(cmdTimeInput, (sb_0 = new StringBuilder , sb_0.string += 'Mettre des heures' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , $setClassName(cmdTimeInput.element, 'button-highlight') , $setInnerText(cmdTimeInput.element, 'SAISIR DES HEURES') , cmdTimeInput.element.style['width'] = '200px' , $addDomHandler(cmdTimeInput, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_0)) , cmdTimeInput)) , $addItem_2(f_TreeItem6, (cmdPassword = new Button , $setClassName(cmdPassword.element, 'button-normal') , $setInnerText(cmdPassword.element, 'Changer le MDP') , cmdPassword.element.style['width'] = '200px' , $addDomHandler(cmdPassword, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames19, (null , TYPE_0)) , cmdPassword)) , $setWidget_2(f_TreeItem6, null) , $setInnerText(f_TreeItem6.contentElem, 'Mon compte') , $setState_0(f_TreeItem6, true) , f_TreeItem6));
  $addItem(this.treeMenu, (f_TreeItem7 = new TreeItem , $addItem_2(f_TreeItem7, (cmdRptByDept = new Button , $setHTML(cmdRptByDept, (sb_1 = new StringBuilder , sb_1.string += 'Par d\xE9partements' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , $setClassName(cmdRptByDept.element, 'button-normal') , $setInnerText(cmdRptByDept.element, 'Par d\xE9partement') , cmdRptByDept.element.style['width'] = '200px' , $addDomHandler(cmdRptByDept, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames15, (null , TYPE_0)) , cmdRptByDept)) , $addItem_2(f_TreeItem7, (cmdExtractData = new Button , $setHTML(cmdExtractData, (sb_2 = new StringBuilder , sb_2.string += 'Par professeurs' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , $setClassName(cmdExtractData.element, 'button-normal') , $setInnerText(cmdExtractData.element, 'Par professeur') , cmdExtractData.element.style['width'] = '200px' , $addDomHandler(cmdExtractData, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11, (null , TYPE_0)) , cmdExtractData)) , $addItem_2(f_TreeItem7, (cmdRptByStatus = new Button , $setHTML(cmdRptByStatus, (sb_3 = new StringBuilder , sb_3.string += 'Par responsable' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , $setClassName(cmdRptByStatus.element, 'button-normal') , $setInnerText(cmdRptByStatus.element, 'Par responsable') , cmdRptByStatus.element.style['width'] = '200px' , $addDomHandler(cmdRptByStatus, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames20, (null , TYPE_0)) , cmdRptByStatus)) , $addItem_2(f_TreeItem7, (cmdRptByMonth = new Button , $setHTML(cmdRptByMonth, (sb_4 = new StringBuilder , sb_4.string += 'Par mois - Compta' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html) , $setClassName(cmdRptByMonth.element, 'button-normal') , cmdRptByMonth.element.style['width'] = '200px' , $addDomHandler(cmdRptByMonth, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames16, (null , TYPE_0)) , cmdRptByMonth)) , $setWidget_2(f_TreeItem7, null) , $setInnerText(f_TreeItem7.contentElem, 'Statistiques') , $setState_0(f_TreeItem7, true) , f_TreeItem7));
  $addItem(this.treeMenu, (f_TreeItem8 = new TreeItem , $addItem_1(f_TreeItem8, (f_TreeItem9 = new TreeItem , $addItem_2(f_TreeItem9, (cmdProfs = new Button , $setClassName(cmdProfs.element, 'button-normal') , $setInnerText(cmdProfs.element, 'Liste des professeurs') , cmdProfs.element.style['width'] = '180px' , $addDomHandler(cmdProfs, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9, (null , TYPE_0)) , cmdProfs)) , $addItem_2(f_TreeItem9, (cmdProfsAdd = new Button , $setClassName(cmdProfsAdd.element, 'button-normal') , $setInnerText(cmdProfsAdd.element, 'Ajouter un professeur') , cmdProfsAdd.element.style['width'] = '180px' , $addDomHandler(cmdProfsAdd, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10, (null , TYPE_0)) , cmdProfsAdd)) , $setWidget_2(f_TreeItem9, null) , $setInnerText(f_TreeItem9.contentElem, 'Professeurs') , $setState_0(f_TreeItem9, true) , f_TreeItem9)) , $addItem_1(f_TreeItem8, (f_TreeItem10 = new TreeItem , $addItem_2(f_TreeItem10, (cmdCours = new Button , $setHTML(cmdCours, (sb_5 = new StringBuilder , sb_5.string += 'Liste de cours' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html) , $setClassName(cmdCours.element, 'button-normal') , $setInnerText(cmdCours.element, 'Liste des d\xE9partements') , cmdCours.element.style['width'] = '180px' , $addDomHandler(cmdCours, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, (null , TYPE_0)) , cmdCours)) , $addItem_2(f_TreeItem10, (cmdCoursAdd = new Button , $setHTML(cmdCoursAdd, (sb_6 = new StringBuilder , sb_6.string += 'Ajouter un cours' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_6.string)).html) , $setClassName(cmdCoursAdd.element, 'button-normal') , $setInnerText(cmdCoursAdd.element, 'Ajouter un d\xE9partement') , cmdCoursAdd.element.style['width'] = '180px' , $addDomHandler(cmdCoursAdd, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, (null , TYPE_0)) , cmdCoursAdd)) , $setWidget_2(f_TreeItem10, null) , $setInnerText(f_TreeItem10.contentElem, 'D\xE9partements') , f_TreeItem10)) , $addItem_1(f_TreeItem8, (f_TreeItem11 = new TreeItem , $addItem_2(f_TreeItem11, (cmdEcolePage = new Button , $setHTML(cmdEcolePage, (sb_7 = new StringBuilder , sb_7.string += "Liste d'\xE9coles" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_7.string)).html) , $setClassName(cmdEcolePage.element, 'button-normal') , $setInnerText(cmdEcolePage.element, 'Liste des \xE9coles') , cmdEcolePage.element.style['width'] = '180px' , $addDomHandler(cmdEcolePage, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_0)) , cmdEcolePage)) , $addItem_2(f_TreeItem11, (cmdEcoleAdd = new Button , $setClassName(cmdEcoleAdd.element, 'button-normal') , $setInnerText(cmdEcoleAdd.element, 'Ajouter une \xE9cole') , cmdEcoleAdd.element.style['width'] = '180px' , $addDomHandler(cmdEcoleAdd, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_0)) , cmdEcoleAdd)) , $setWidget_2(f_TreeItem11, null) , $setInnerText(f_TreeItem11.contentElem, 'Ecoles') , f_TreeItem11)) , $addItem_1(f_TreeItem8, (f_TreeItem12 = new TreeItem , $addItem_2(f_TreeItem12, (cmdTypes = new Button , $setClassName(cmdTypes.element, 'button-normal') , $setInnerText(cmdTypes.element, 'Liste des types') , cmdTypes.element.style['width'] = '180px' , $addDomHandler(cmdTypes, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, (null , TYPE_0)) , cmdTypes)) , $addItem_2(f_TreeItem12, (cmdTypesAdd = new Button , $setHTML(cmdTypesAdd, (sb_8 = new StringBuilder , sb_8.string += 'Ajouter un type' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_8.string)).html) , $setClassName(cmdTypesAdd.element, 'button-normal') , cmdTypesAdd.element.style['width'] = '180px' , $addDomHandler(cmdTypesAdd, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8, (null , TYPE_0)) , cmdTypesAdd)) , $setWidget_2(f_TreeItem12, null) , $setInnerText(f_TreeItem12.contentElem, "Types d'heure") , f_TreeItem12)) , $addItem_1(f_TreeItem8, (f_TreeItem13 = new TreeItem , $addItem_2(f_TreeItem13, (cmdUserMgt = new Button , $setClassName(cmdUserMgt.element, 'button-normal') , $setInnerText(cmdUserMgt.element, 'Gestion des utilisateurs') , cmdUserMgt.element.style['width'] = '180px' , $addDomHandler(cmdUserMgt, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14, (null , TYPE_0)) , cmdUserMgt)) , $addItem_2(f_TreeItem13, (cmdSettings = new Button , $setClassName(cmdSettings.element, 'button-normal') , $setInnerText(cmdSettings.element, "Bloquer l'acc\xE8s") , cmdSettings.element.style['width'] = '180px' , $addDomHandler(cmdSettings, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames17, (null , TYPE_0)) , cmdSettings)) , $setWidget_2(f_TreeItem13, null) , $setInnerText(f_TreeItem13.contentElem, "Gestion d'acc\xE8s") , f_TreeItem13)) , $setWidget_2(f_TreeItem8, null) , $setInnerText(f_TreeItem8.contentElem, 'Information de base') , $setState_0(f_TreeItem8, true) , f_TreeItem8));
  $addItem_0(this.treeMenu, (cmdContact = new Button , $setHTML(cmdContact, (sb_9 = new StringBuilder , sb_9.string += 'Contact' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_9.string)).html) , $setClassName(cmdContact.element, 'button-normal') , $addDomHandler(cmdContact, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12, (null , TYPE_0)) , cmdContact));
  $addItem_0(this.treeMenu, (f_Image14 = new Image_0 , $setUrl(f_Image14, ($clinit_UriUtils() , new SafeUriString('images/appengine-silver-120x30.gif'))) , f_Image14));
  $setStyleName(this.treeMenu, 'sideBar');
  $setHeight_0(this.treeMenu, '');
  this.treeMenu.isAnimationEnabled = true;
  $setWidth_0(this.treeMenu, '250px');
  this.owner.treeMenu = this.treeMenu;
  this.mainContentPanel = new FlowPanel;
  $setStyleName(this.mainContentPanel, 'paneMain');
  $setHeight_0(this.mainContentPanel, '');
  $setWidth_0(this.mainContentPanel, '100%');
  this.owner.mainContentPanel = this.mainContentPanel;
}

defineClass(857, 1, {}, MainPageView_MainPageViewUiBinderImpl$Widgets);
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets', 857);
function MainPageView_MainPageViewUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(858, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$1);
_.onClick = function onClick_7(event_0){
  $onCmdHomepageClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$1_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/1', 858);
function MainPageView_MainPageViewUiBinderImpl$Widgets$10(this$1){
  this.this$11 = this$1;
}

defineClass(867, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$10);
_.onClick = function onClick_8(event_0){
  $onCmdProfsAddClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$10_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/10', 867);
function MainPageView_MainPageViewUiBinderImpl$Widgets$11(this$1){
  this.this$11 = this$1;
}

defineClass(868, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$11);
_.onClick = function onClick_9(event_0){
  $onCmdExtractDataClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$11_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/11', 868);
function MainPageView_MainPageViewUiBinderImpl$Widgets$12(this$1){
  this.this$11 = this$1;
}

defineClass(869, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$12);
_.onClick = function onClick_10(event_0){
  $onCmdContactClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$12_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/12', 869);
function MainPageView_MainPageViewUiBinderImpl$Widgets$13(this$1){
  this.this$11 = this$1;
}

defineClass(870, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$13);
_.onClick = function onClick_11(event_0){
  $onCmdLogoutClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$13_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/13', 870);
function MainPageView_MainPageViewUiBinderImpl$Widgets$14(this$1){
  this.this$11 = this$1;
}

defineClass(871, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$14);
_.onClick = function onClick_12(event_0){
  $onCmdUserMgtClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$14_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/14', 871);
function MainPageView_MainPageViewUiBinderImpl$Widgets$15(this$1){
  this.this$11 = this$1;
}

defineClass(872, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$15);
_.onClick = function onClick_13(event_0){
  $onCmdRptByDeptClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$15_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/15', 872);
function MainPageView_MainPageViewUiBinderImpl$Widgets$16(this$1){
  this.this$11 = this$1;
}

defineClass(873, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$16);
_.onClick = function onClick_14(event_0){
  $onCmdRptBySchoolClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$16_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/16', 873);
function MainPageView_MainPageViewUiBinderImpl$Widgets$17(this$1){
  this.this$11 = this$1;
}

defineClass(874, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$17);
_.onClick = function onClick_15(event_0){
  $onCmdSettingsClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$17_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/17', 874);
function MainPageView_MainPageViewUiBinderImpl$Widgets$18(this$1){
  this.this$11 = this$1;
}

defineClass(875, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$18);
_.onClick = function onClick_16(event_0){
  $onButtonClick(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$18_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/18', 875);
function MainPageView_MainPageViewUiBinderImpl$Widgets$19(this$1){
  this.this$11 = this$1;
}

defineClass(876, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$19);
_.onClick = function onClick_17(event_0){
  $onCmdPasswordClick(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$19_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/19', 876);
function MainPageView_MainPageViewUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(859, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$2);
_.onClick = function onClick_18(event_0){
  $onCmdEcolePageClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$2_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/2', 859);
function MainPageView_MainPageViewUiBinderImpl$Widgets$20(this$1){
  this.this$11 = this$1;
}

defineClass(877, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$20);
_.onClick = function onClick_19(event_0){
  $onCmdRptByStatusClick(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$20_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/20', 877);
function MainPageView_MainPageViewUiBinderImpl$Widgets$3(this$1){
  this.this$11 = this$1;
}

defineClass(860, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$3);
_.onClick = function onClick_20(event_0){
  $onCmdEcoleAddClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$3_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/3', 860);
function MainPageView_MainPageViewUiBinderImpl$Widgets$4(this$1){
  this.this$11 = this$1;
}

defineClass(861, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$4);
_.onClick = function onClick_21(event_0){
  $onCmdTimeInputClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$4_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/4', 861);
function MainPageView_MainPageViewUiBinderImpl$Widgets$5(this$1){
  this.this$11 = this$1;
}

defineClass(862, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$5);
_.onClick = function onClick_22(event_0){
  $onCmdCoursClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$5_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/5', 862);
function MainPageView_MainPageViewUiBinderImpl$Widgets$6(this$1){
  this.this$11 = this$1;
}

defineClass(863, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$6);
_.onClick = function onClick_23(event_0){
  $onCmdCoursAddClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$6_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/6', 863);
function MainPageView_MainPageViewUiBinderImpl$Widgets$7(this$1){
  this.this$11 = this$1;
}

defineClass(864, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$7);
_.onClick = function onClick_24(event_0){
  $onCmdTypesClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$7_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/7', 864);
function MainPageView_MainPageViewUiBinderImpl$Widgets$8(this$1){
  this.this$11 = this$1;
}

defineClass(865, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$8);
_.onClick = function onClick_25(event_0){
  $onCmdTypesAddClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$8_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/8', 865);
function MainPageView_MainPageViewUiBinderImpl$Widgets$9(this$1){
  this.this$11 = this$1;
}

defineClass(866, 1, $intern_61, MainPageView_MainPageViewUiBinderImpl$Widgets$9);
_.onClick = function onClick_26(event_0){
  $onCmdProfsClicked(this.this$11.owner);
}
;
var Lcom_lemania_timetracking_client_view_MainPageView_1MainPageViewUiBinderImpl$Widgets$9_2_classLit = createForClass('com.lemania.timetracking.client.view', 'MainPageView_MainPageViewUiBinderImpl/Widgets/9', 866);
function $get_Key$type$com$lemania$timetracking$client$view$MainPageView$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$lemania$timetracking$client$view$MainPageView$_annotation$$none$$) {
    created = new MainPageView;
    this$static.singleton_Key$type$com$lemania$timetracking$client$view$MainPageView$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$lemania$timetracking$client$view$MainPageView$_annotation$$none$$;
}

function com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_10(){
}

defineClass(536, 1, {}, com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment_10);
_.singleton_Key$type$com$lemania$timetracking$client$view$ContactView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$CoursAddView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$CoursView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$EcoleAddView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$EcoleView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$FrmPasswordView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$HomeView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesAddView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$LogTypesView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$MainPageView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$ProfsAddView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$ProfsView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByDepartmentView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByMonthView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeByProfView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$RptTimeBySchoolView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$SettingsView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$TimeInputView$_annotation$$none$$ = null;
_.singleton_Key$type$com$lemania$timetracking$client$view$UserManagementView$_annotation$$none$$ = null;
var Lcom_lemania_timetracking_client_view_com_1lemania_1timetracking_1client_1gin_1ClientGinjector_1ClientGinjectorGinjector_1fragment_2_classLit = createForClass('com.lemania.timetracking.client.view', 'com_lemania_timetracking_client_gin_ClientGinjector_ClientGinjectorGinjector_fragment', 536);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(248, 1, {});
_.toString$ = function toString_41(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 248);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(52, 21, $intern_62, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 52);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(204, 21, $intern_3, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 204);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE_1 = new Boolean_0(false);
  TRUE_1 = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

defineClass(48, 1, {3:1, 48:1, 11:1}, Boolean_0);
_.equals$ = function equals_52(o){
  return instanceOf(o, 48) && dynamicCast(o, 48).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_52(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_42(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE_1, TRUE_1;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 48);
defineClass(143, 1, {3:1, 143:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 143);
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(182, 21, $intern_3, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 182);
function isNaN_0(x_0){
  return isNaN(x_0);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(61, 21, $intern_3, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 61);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(55, 21, $intern_3, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 55);
function Integer(value_0){
  this.value_0 = value_0;
}

function valueOf_1(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_2)[rebase];
    !result && (result = boxedValues_2[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(65, 143, {3:1, 11:1, 65:1, 143:1}, Integer);
_.equals$ = function equals_57(o){
  return instanceOf(o, 65) && dynamicCast(o, 65).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_57(){
  return this.value_0;
}
;
_.toString$ = function toString_48(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 65);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_2 = initDim(Ljava_lang_Integer_2_classLit, $intern_2, 65, 256, 0, 1);
}

var boxedValues_2;
function cos_0(x_0){
  return Math.cos(x_0);
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(60, 21, $intern_3, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 60);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals_3(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf_1(this$static, str){
  return this$static.indexOf(str);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_2, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_1(str){
  $clinit_String$HashCache();
  var key_0 = ':' + str;
  var result = front[key_0];
  if (result != null) {
    return result;
  }
  result = back_0[key_0];
  result == null && (result = compute(str));
  increment();
  return front[key_0] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append_4(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(19, 248, {1320:1}, StringBuilder, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 19);
function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(51, 21, $intern_63, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 51);
function $contains(this$static, o){
  if (instanceOf(o, 39)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 39));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(384, $intern_38, $intern_39, AbstractHashMap$EntrySet);
_.contains = function contains_4(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_16(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_2 = function remove_36(entry){
  var key_0;
  if ($contains(this, entry)) {
    key_0 = dynamicCast(entry, 39).getKey();
    this.this$01.remove_3(key_0);
    return true;
  }
  return false;
}
;
_.size_1 = function size_18(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 384);
function $hasNext_1(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(385, 1, $intern_35, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_10(){
  return $hasNext_1(this);
}
;
_.next_0 = function next_11(){
  return checkStructuralChange(this.this$01, this) , checkCriticalElement($hasNext_1(this)) , this.last = this.current , dynamicCast(this.current.next_0(), 39);
}
;
_.remove_0 = function remove_37(){
  checkState(!!this.last);
  checkStructuralChange(this.this$01, this);
  this.last.remove_0();
  this.last = null;
  recordLastKnownStructure(this.this$01, this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 385);
function $hasNext_2(this$static){
  return this$static.i < this$static.this$01_0.size_1();
}

function $next_4(this$static){
  checkCriticalElement(this$static.i < this$static.this$01_0.size_1());
  return this$static.this$01_0.get_1(this$static.last = this$static.i++);
}

function $remove_15(this$static){
  checkState(this$static.last != -1);
  this$static.this$01_0.remove_1(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(67, 1, $intern_35, AbstractList$IteratorImpl);
_.hasNext = function hasNext_11(){
  return $hasNext_2(this);
}
;
_.next_0 = function next_12(){
  return $next_4(this);
}
;
_.remove_0 = function remove_38(){
  $remove_15(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 67);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(224, 67, $intern_64, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious_1(){
  return this.i > 0;
}
;
_.previous = function previous_2(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 224);
function $iterator(this$static){
  var outerIter;
  outerIter = this$static.this$01.entrySet_0().iterator();
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(109, $intern_38, $intern_39, AbstractMap$1);
_.contains = function contains_5(key_0){
  return this.this$01.containsKey(key_0);
}
;
_.iterator = function iterator_17(){
  return $iterator(this);
}
;
_.remove_2 = function remove_40(key_0){
  if (this.this$01.containsKey(key_0)) {
    this.this$01.remove_3(key_0);
    return true;
  }
  return false;
}
;
_.size_1 = function size_20(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 109);
function $next_5(this$static){
  var entry;
  entry = dynamicCast(this$static.val$outerIter2.next_0(), 39);
  return entry.getKey();
}

function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(387, 1, $intern_35, AbstractMap$1$1);
_.hasNext = function hasNext_12(){
  return this.val$outerIter2.hasNext();
}
;
_.next_0 = function next_13(){
  return $next_5(this);
}
;
_.remove_0 = function remove_41(){
  this.val$outerIter2.remove_0();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 387);
function $setValue_2(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(386, 1, $intern_65);
_.equals$ = function equals_62(other){
  var entry;
  if (!instanceOf(other, 39)) {
    return false;
  }
  entry = dynamicCast(other, 39);
  return equals_69(this.key, entry.getKey()) && equals_69(this.value_0, entry.getValue_0());
}
;
_.getKey = function getKey_2(){
  return this.key;
}
;
_.getValue_0 = function getValue_38(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_62(){
  return hashCode_71(this.key) ^ hashCode_71(this.value_0);
}
;
_.setValue = function setValue_2(value_0){
  return $setValue_2(this, value_0);
}
;
_.toString$ = function toString_53(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 386);
function AbstractMap$SimpleEntry(key_0, value_0){
  this.key = key_0;
  this.value_0 = value_0;
}

defineClass(249, 386, $intern_65, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 249);
defineClass(1282, 1, $intern_65);
_.equals$ = function equals_63(other){
  var entry;
  if (!instanceOf(other, 39)) {
    return false;
  }
  entry = dynamicCast(other, 39);
  return equals_69(this.getKey(), entry.getKey()) && equals_69(this.getValue_0(), entry.getValue_0());
}
;
_.hashCode$ = function hashCode_63(){
  return hashCode_71(this.getKey()) ^ hashCode_71(this.getValue_0());
}
;
_.toString$ = function toString_54(){
  return this.getKey() + '=' + this.getValue_0();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 1282);
function $$init_18(this$static){
  this$static.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}

function $add_15(this$static, index_0, o){
  checkPositionIndex(index_0, this$static.array.length);
  splice_0(this$static.array, index_0, 0, o);
}

function $add_16(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $addAll_1(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  $insertAt(this$static, this$static.array.length, cArray);
  return true;
}

function $get_7(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_2(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_69(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $insertAt(this$static, index_0, values){
  nativeArraySplice(values, 0, this$static.array, index_0, values.length, false);
}

function $remove_16(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_17(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_1(i);
  return true;
}

function $set_5(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function $toArray(this$static){
  return cloneSubrange(this$static.array, this$static.array.length);
}

function $toArray_0(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = createFrom(out, size_0));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  $$init_18(this);
}

function ArrayList_1(c){
  $$init_18(this);
  $insertAt(this, 0, c.toArray());
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(30, $intern_40, $intern_66, ArrayList, ArrayList_1);
_.add_0 = function add_16(index_0, o){
  $add_15(this, index_0, o);
}
;
_.add_1 = function add_17(o){
  return $add_16(this, o);
}
;
_.contains = function contains_7(o){
  return $indexOf_2(this, o, 0) != -1;
}
;
_.get_1 = function get_36(index_0){
  return $get_7(this, index_0);
}
;
_.isEmpty_0 = function isEmpty_8(){
  return this.array.length == 0;
}
;
_.remove_1 = function remove_43(index_0){
  return $remove_16(this, index_0);
}
;
_.remove_2 = function remove_44(o){
  return $remove_17(this, o);
}
;
_.size_1 = function size_22(){
  return this.array.length;
}
;
_.toArray = function toArray_9(){
  return $toArray(this);
}
;
_.toArray_0 = function toArray_10(out){
  return $toArray_0(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 30);
function equals_64(array1, array2){
  var i, val1, val2;
  if (maskUndefined(array1) === maskUndefined(array2)) {
    return true;
  }
  if (array1 == null || array2 == null) {
    return false;
  }
  if (array1.length != array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; ++i) {
    val1 = array1[i];
    val2 = array2[i];
    if (!(val1 == val2 || val1 != null && $equals_3(val1, val2))) {
      return false;
    }
  }
  return true;
}

function hashCode_64(a){
  var e, e$index, e$max, hashCode;
  if (a == null) {
    return 0;
  }
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?getHashCode_1(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var Ljava_util_Collection_2_classLit = createForInterface('java.util', 'Collection');
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
  EMPTY_MAP = new Collections$EmptyMap;
  EMPTY_SET = new Collections$EmptySet;
}

function hashCode_65(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_66(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var EMPTY_LIST, EMPTY_MAP, EMPTY_SET;
function Collections$EmptyList(){
}

defineClass(394, $intern_40, $intern_66, Collections$EmptyList);
_.contains = function contains_8(object){
  return false;
}
;
_.get_1 = function get_37(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_19(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_4;
}
;
_.listIterator = function listIterator_5(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_4;
}
;
_.size_1 = function size_23(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 394);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_4 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(395, 1, $intern_64, Collections$EmptyListIterator);
_.hasNext = function hasNext_14(){
  return false;
}
;
_.hasPrevious = function hasPrevious_2(){
  return false;
}
;
_.next_0 = function next_15(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_3(){
  throw new NoSuchElementException;
}
;
_.remove_0 = function remove_45(){
  throw new IllegalStateException;
}
;
var INSTANCE_4;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 395);
function Collections$EmptyMap(){
}

defineClass(397, 1278, $intern_43, Collections$EmptyMap);
_.containsKey = function containsKey_5(key_0){
  return false;
}
;
_.entrySet_0 = function entrySet_4(){
  return $clinit_Collections() , EMPTY_SET;
}
;
_.get_4 = function get_38(key_0){
  return null;
}
;
_.size_1 = function size_24(){
  return 0;
}
;
var Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', 397);
function Collections$EmptySet(){
}

defineClass(396, $intern_38, $intern_67, Collections$EmptySet);
_.contains = function contains_9(object){
  return false;
}
;
_.iterator = function iterator_20(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_4;
}
;
_.size_1 = function size_25(){
  return 0;
}
;
var Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 396);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(627, 21, $intern_3, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 627);
function $add_17(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return this$static.map_0.containsKey(o);
}

function $remove_18(this$static, o){
  return this$static.map_0.remove_3(o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_1(c){
  this.map_0 = new HashMap_0(c.map_0.size_1());
  $addAll_0(this, c);
}

defineClass(31, $intern_38, $intern_67, HashSet, HashSet_1);
_.add_1 = function add_20(o){
  return $add_17(this, o);
}
;
_.contains = function contains_13(o){
  return $contains_0(this, o);
}
;
_.isEmpty_0 = function isEmpty_12(){
  return this.map_0.size_1() == 0;
}
;
_.iterator = function iterator_23(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.remove_2 = function remove_51(o){
  return $remove_18(this, o);
}
;
_.size_1 = function size_29(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_58(){
  return $toString_1(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 31);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key_0){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key_0 == null?'0':'' + this$static.host.getHashCode(key_0)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals(key_0, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_3(this$static, key_0, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key_0 == null?'0':'' + this$static.host.getHashCode(key_0));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals(key_0, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key_0, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_19(this$static, key_0){
  var chain, entry, hashCode, i;
  hashCode = key_0 == null?'0':'' + this$static.host.getHashCode(key_0);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this$static.host.equals(key_0, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue_0();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(315, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 315);
function $hasNext_3(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_2, 39, 0, 0, 1);
}

defineClass(411, 1, $intern_35, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_17(){
  return $hasNext_3(this);
}
;
_.next_0 = function next_18(){
  return checkCriticalElement($hasNext_3(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove_0 = function remove_52(){
  checkState(!!this.lastEntry);
  $remove_19(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 411);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(409, 315, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 409);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(410, 30, $intern_66, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_1 = function remove_53(index_0){
  var removed;
  return removed = dynamicCast($remove_16(this, index_0), 39) , $remove_19(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 410);
function InternalJsMapFactory(){
}

defineClass(406, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 406);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate_0 = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate_0;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(408, 406, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 408);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(407, 406, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 407);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_4(this$static, key_0, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key_0];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_6(this$static, key_0, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_20(this$static, key_0){
  var value_0;
  value_0 = this$static.backingMap[key_0];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key_0];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_6(this$static, key_0, value_0){
  this$static.backingMap[key_0] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(251, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_5 = function get_42(key_0){
  return this.backingMap[key_0];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key_0){
  return new InternalJsStringMap$2(this, key_0);
}
;
_.put_0 = function put_6(key_0, value_0){
  return $put_4(this, key_0, value_0);
}
;
_.remove_4 = function remove_54(key_0){
  return $remove_20(this, key_0);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 251);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(404, 1, $intern_35, InternalJsStringMap$1);
_.hasNext = function hasNext_18(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_19(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove_0 = function remove_55(){
  checkState(this.last != -1);
  this.this$01.remove_4(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 404);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(314, 1282, $intern_65, InternalJsStringMap$2);
_.getKey = function getKey_4(){
  return this.val$key2;
}
;
_.getValue_0 = function getValue_40(){
  return this.this$01.get_5(this.val$key2);
}
;
_.setValue = function setValue_4(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 314);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(401, 251, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key_0 in this.backingMap) {
    if (key_0.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key_0.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_5 = function get_43(key_0){
  return this.backingMap[':' + key_0];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_7(key_0, value_0){
  return $put_4(this, ':' + key_0, value_0);
}
;
_.remove_4 = function remove_56(key_0){
  return $remove_20(this, ':' + key_0);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 401);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(403, 30, $intern_66, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_1 = function remove_57(index_0){
  var removed;
  return removed = dynamicCast($remove_16(this, index_0), 39) , $remove_20(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 403);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(402, 251, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 402);
var Ljava_util_Iterator_2_classLit = createForInterface('java.util', 'Iterator');
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$01.head_0.prev;
  this$static.prev = tail;
  this$static.next = this$static.this$01.head_0;
  tail.next = this$static.this$01.head_0.prev = this$static;
}

function $remove_21(this$static){
  this$static.next.prev = this$static.prev;
  this$static.prev.next = this$static.next;
  this$static.next = this$static.prev = null;
}

function LinkedHashMap$ChainEntry(this$0){
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key_0, value_0){
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key_0, value_0);
}

defineClass(168, 249, {168:1, 39:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 168);
function $contains_1(this$static, o){
  if (instanceOf(o, 39)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 39));
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(331, $intern_38, $intern_39, LinkedHashMap$EntrySet);
_.contains = function contains_14(o){
  return $contains_1(this, o);
}
;
_.iterator = function iterator_24(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.remove_2 = function remove_58(entry){
  var key_0;
  if ($contains_1(this, entry)) {
    key_0 = dynamicCast(entry, 39).getKey();
    $remove_14(this.this$01, key_0);
    return true;
  }
  return false;
}
;
_.size_1 = function size_30(){
  return this.this$01.map_0.size_1();
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 331);
function LinkedHashMap$EntrySet$EntryIterator(this$1){
  this.this$11 = this$1;
  this.next = this$1.this$01.head_0.next;
  recordLastKnownStructure(this$1.this$01.map_0, this);
}

defineClass(634, 1, $intern_35, LinkedHashMap$EntrySet$EntryIterator);
_.hasNext = function hasNext_19(){
  return this.next != this.this$11.this$01.head_0;
}
;
_.next_0 = function next_20(){
  return checkStructuralChange(this.this$11.this$01.map_0, this) , checkCriticalElement(this.next != this.this$11.this$01.head_0) , this.last = this.next , this.next = this.next.next , this.last;
}
;
_.remove_0 = function remove_59(){
  checkState(!!this.last);
  checkStructuralChange(this.this$11.this$01.map_0, this);
  $remove_21(this.last);
  this.this$11.this$01.map_0.remove_3(this.last.key);
  recordLastKnownStructure(this.this$11.this$01.map_0, this);
  this.last = null;
}
;
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 634);
var Ljava_util_List_2_classLit = createForInterface('java.util', 'List');
var Ljava_util_ListIterator_2_classLit = createForInterface('java.util', 'ListIterator');
var Ljava_util_Map_2_classLit = createForInterface('java.util', 'Map');
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(125, 21, $intern_3, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 125);
function equals_69(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_71(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

var Ljava_util_Set_2_classLit = createForInterface('java.util', 'Set');
var I_classLit = createForPrimitive('int', 'I'), Z_classLit = createForPrimitive('boolean', 'Z'), Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler'), Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback'), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 1267), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 1269), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 1272), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry'), Ljava_util_Map_2_classLit = createForInterface('java.util', 'Map'), Ljava_util_List_2_classLit = createForInterface('java.util', 'List'), Ljava_util_Set_2_classLit = createForInterface('java.util', 'Set'), Lcom_google_gwt_user_client_ui_IsWidget_2_classLit = createForInterface('com.google.gwt.user.client.ui', 'IsWidget'), Ljava_util_Iterator_2_classLit = createForInterface('java.util', 'Iterator'), Ljava_util_ListIterator_2_classLit = createForInterface('java.util', 'ListIterator'), Ljava_util_Collection_2_classLit = createForInterface('java.util', 'Collection');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'fr'], ['user.agent', 'gecko1_8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=timetracking-0.js

