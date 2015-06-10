defineSeed(1, -1, CM$);
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
function $onBrowserEvent(this$static, context, parent_0, value_0, event_0, valueUpdater){
  var eventType;
  eventType = event_0.type;
  $equals_3('keydown', eventType) && $eventGetKeyCode(event_0) == 13 && this$static.onEnterKeyDown(context, parent_0, value_0, event_0, valueUpdater);
}

function $setValue(this$static, context, parent_0, value_0){
  var sb;
  sb = new SafeHtmlBuilder_0;
  $render_1(this$static, context, value_0, sb);
  $setInnerHTML(parent_0, (new SafeHtmlString_0(sb.sb.impl.string)).html);
}

function AbstractCell_0(consumedEvents){
  var event_0, event$index, event$max, events;
  events = null;
  if (consumedEvents != null && consumedEvents.length > 0) {
    events = new HashSet_0;
    for (event$index = 0 , event$max = consumedEvents.length; event$index < event$max; ++event$index) {
      event_0 = consumedEvents[event$index];
      $add_17(events, event_0);
    }
  }
  !!events && (this.consumedEvents = ($clinit_Collections() , new Collections$UnmodifiableSet_0(events)));
}

defineSeed(84, 1, {});
_.dependsOnSelection_0 = function dependsOnSelection(){
  return false;
}
;
_.handlesSelection_0 = function handlesSelection(){
  return false;
}
;
_.isEditing_0 = function isEditing_0(context, parent_0, value_0){
  return false;
}
;
_.onBrowserEvent = function onBrowserEvent(context, parent_0, value_0, event_0, valueUpdater){
  $onBrowserEvent(this, context, parent_0, value_0, event_0, valueUpdater);
}
;
_.onEnterKeyDown = function onEnterKeyDown(context, parent_0, value_0, event_0, valueUpdater){
}
;
_.resetFocus = function resetFocus(context, parent_0, value_0){
  return false;
}
;
function $clearViewData(this$static, key_0){
  key_0 != null && this$static.viewDataMap.remove_3(key_0);
}

function $getViewData(this$static, key_0){
  return key_0 == null?null:this$static.viewDataMap.get_2(key_0);
}

function $setViewData(this$static, key_0, viewData){
  if (key_0 == null) {
    return;
  }
  viewData == null?key_0 != null && this$static.viewDataMap.remove_3(key_0):this$static.viewDataMap.put(key_0, viewData);
}

function AbstractEditableCell_0(consumedEvents){
  AbstractCell_0.call(this, consumedEvents);
  this.viewDataMap = new HashMap_0;
}

defineSeed(85, 84, {});
function $render(this$static, context, data_0, sb){
  data_0 == null?this$static.render_0(context, null, sb):this$static.render_0(context, $render_2(dynamicCast(data_0, Q$String)), sb);
}

function AbstractSafeHtmlCell_0(renderer, consumedEvents){
  AbstractCell_0.call(this, consumedEvents);
  if (!renderer) {
    throw new IllegalArgumentException_1('renderer == null');
  }
}

defineSeed(86, 84, {});
_.render = function render(context, data_0, sb){
  $render(this, context, data_0, sb);
}
;
function Cell$Context_0(index_0, column, key_0){
  Cell$Context_1.call(this, index_0, column, key_0, 0);
}

function Cell$Context_1(index_0, column, key_0, subindex){
  this.index_0 = index_0;
  this.column = column;
  this.key = key_0;
  this.subindex = subindex;
}

defineSeed(88, 1, {}, Cell$Context_0, Cell$Context_1);
_.column = 0;
_.index_0 = 0;
_.subindex = 0;
function $clinit_CheckboxCell(){
  $clinit_CheckboxCell = nullMethod;
  INPUT_CHECKED = ($clinit_SafeHtmlUtils() , new SafeHtmlString_0('<input type="checkbox" tabindex="-1" checked/>'));
  INPUT_UNCHECKED = new SafeHtmlString_0('<input type="checkbox" tabindex="-1"/>');
}

function $onBrowserEvent_1(this$static, context, parent_0, value_0, event_0, valueUpdater){
  var enterPressed, input_0, isChecked, type_0;
  type_0 = event_0.type;
  enterPressed = $equals_3('keydown', type_0) && $eventGetKeyCode(event_0) == 13;
  if ($equals_3('change', type_0) || enterPressed) {
    input_0 = parent_0.firstChild;
    isChecked = ($clinit_Boolean() , $isChecked(input_0)?TRUE_1:FALSE_1);
    if (enterPressed && (this$static.handlesSelection || !this$static.dependsOnSelection)) {
      isChecked = isChecked.value_0?FALSE_1:TRUE_1;
      $setChecked(input_0, isChecked.value_0);
    }
    value_0 != isChecked && !this$static.dependsOnSelection?$setViewData(this$static, context.key, isChecked):$clearViewData(this$static, context.key);
    !!valueUpdater && valueUpdater.update_0(isChecked);
  }
}

function $render_0(this$static, context, value_0, sb){
  var key_0, viewData;
  key_0 = context.key;
  viewData = dynamicCast(key_0 == null?null:this$static.viewDataMap.get_2(key_0), Q$Boolean);
  if (!!viewData && !!value_0 && value_0.value_0 == viewData.value_0) {
    key_0 != null && this$static.viewDataMap.remove_3(key_0);
    viewData = null;
  }
  !!value_0 && (viewData?viewData:value_0).value_0?$append_5(sb, INPUT_CHECKED):$append_5(sb, INPUT_UNCHECKED);
}

function CheckboxCell_0(){
  $clinit_CheckboxCell();
  AbstractEditableCell_0.call(this, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['change', 'keydown']));
  this.dependsOnSelection = false;
  this.handlesSelection = false;
}

defineSeed(89, 85, {}, CheckboxCell_0);
_.dependsOnSelection_0 = function dependsOnSelection_0(){
  return this.dependsOnSelection;
}
;
_.handlesSelection_0 = function handlesSelection_0(){
  return this.handlesSelection;
}
;
_.isEditing_0 = function isEditing_1(context, parent_0, value_0){
  return dynamicCast(value_0, Q$Boolean) , false;
}
;
_.onBrowserEvent = function onBrowserEvent_1(context, parent_0, value_0, event_0, valueUpdater){
  $onBrowserEvent_1(this, context, parent_0, dynamicCast(value_0, Q$Boolean), event_0, valueUpdater);
}
;
_.render = function render_1(context, value_0, sb){
  $render_0(this, context, dynamicCast(value_0, Q$Boolean), sb);
}
;
_.dependsOnSelection = false;
_.handlesSelection = false;
var INPUT_CHECKED, INPUT_UNCHECKED;
function $clearInput(input_0){
  input_0.selectionEnd?(input_0.selectionEnd = input_0.selectionStart):$doc.selection && $doc.selection.clear();
}

function $commit(this$static, context, parent_0, viewData, valueUpdater){
  var value_0;
  value_0 = $updateViewData(parent_0, viewData, false);
  $clearInput(parent_0.firstChild);
  $setValue(this$static, context, parent_0, viewData.original);
  !!valueUpdater && valueUpdater.update_0(value_0);
}

function $editEvent(this$static, context, parent_0, value_0, viewData, event_0, valueUpdater){
  var eventTarget, keyCode, keyDown, keyUp, originalText, target, type_0;
  type_0 = event_0.type;
  keyUp = $equals_3('keyup', type_0);
  keyDown = $equals_3('keydown', type_0);
  if (keyUp || keyDown) {
    keyCode = $eventGetKeyCode(event_0);
    if (keyUp && keyCode == 13) {
      $commit(this$static, context, parent_0, viewData, valueUpdater);
    }
     else if (keyUp && keyCode == 27) {
      originalText = viewData.original;
      if (viewData.isEditingAgain) {
        viewData.text_0 = originalText;
        $setEditing(viewData, false);
      }
       else {
        $setViewData(this$static, context.key, null);
      }
      $clearInput(parent_0.firstChild);
      $setValue(this$static, context, parent_0, value_0);
    }
     else {
      $updateViewData(parent_0, viewData, true);
    }
  }
   else if ($equals_3('blur', type_0)) {
    eventTarget = event_0.srcElement;
    if (is_0(eventTarget)) {
      target = eventTarget;
      $equals_3('input', $getTagName(target).toLowerCase()) && $commit(this$static, context, parent_0, viewData, valueUpdater);
    }
  }
}

function $isEditing(this$static, context){
  var viewData;
  viewData = dynamicCast($getViewData(this$static, context.key), Q$EditTextCell$ViewData);
  return !!viewData && viewData.isEditing;
}

function $onBrowserEvent_2(this$static, context, parent_0, value_0, event_0, valueUpdater){
  var enterPressed, key_0, keyCode, type_0, viewData, input_0;
  key_0 = context.key;
  viewData = dynamicCast(key_0 == null?null:this$static.viewDataMap.get_2(key_0), Q$EditTextCell$ViewData);
  if (!!viewData && viewData.isEditing) {
    $editEvent(this$static, context, parent_0, value_0, viewData, event_0, valueUpdater);
  }
   else {
    type_0 = event_0.type;
    keyCode = $eventGetKeyCode(event_0);
    enterPressed = $equals_3('keyup', type_0) && keyCode == 13;
    if ($equals_3('click', type_0) || enterPressed) {
      if (!viewData) {
        viewData = new EditTextCell$ViewData_0(value_0);
        $setViewData(this$static, key_0, viewData);
      }
       else {
        $setEditing(viewData, true);
      }
      $setValue(this$static, context, parent_0, value_0);
      input_0 = parent_0.firstChild;
      $focus(input_0);
      input_0.select();
    }
  }
}

function $render_1(this$static, context, value_0, sb){
  var key_0, text_0, toRender, viewData, sb_0;
  key_0 = context.key;
  viewData = dynamicCast(key_0 == null?null:this$static.viewDataMap.get_2(key_0), Q$EditTextCell$ViewData);
  if (!!viewData && !viewData.isEditing && value_0 != null && $equals_3(value_0, viewData.text_0)) {
    key_0 != null && this$static.viewDataMap.remove_3(key_0);
    viewData = null;
  }
  toRender = value_0;
  if (viewData) {
    text_0 = viewData.text_0;
    if (viewData.isEditing) {
      $append_5(sb, (sb_0 = new StringBuilder_0 , $append_2(sb_0.impl, '<input type="text" value="') , $append_11(sb_0, htmlEscape(text_0)) , $append_2(sb_0.impl, '" tabindex="-1"><\/input>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)));
      return;
    }
     else {
      toRender = text_0;
    }
  }
  toRender != null && $trim(toRender).length > 0?$append_5(sb, toRender == null?($clinit_SafeHtmlUtils() , EMPTY_SAFE_HTML):($clinit_SafeHtmlUtils() , new SafeHtmlString_0(htmlEscape(toRender)))):($append_11(sb.sb, '\xA0') , sb);
}

function $resetFocus(this$static, context, parent_0){
  if ($isEditing(this$static, context)) {
    $focus(parent_0.firstChild);
    return true;
  }
  return false;
}

function $updateViewData(parent_0, viewData, isEditing){
  var input_0, value_0;
  input_0 = parent_0.firstChild;
  value_0 = input_0.value;
  viewData.text_0 = value_0;
  $setEditing(viewData, isEditing);
  return value_0;
}

function EditTextCell_0(){
  EditTextCell_1.call(this, (!instance_2 && (instance_2 = new SimpleSafeHtmlRenderer_0) , instance_2));
}

function EditTextCell_1(renderer){
  AbstractEditableCell_0.call(this, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['click', 'keyup', 'keydown', 'blur']));
  !template && (template = new EditTextCell_TemplateImpl_0);
  if (!renderer) {
    throw new IllegalArgumentException_1('renderer == null');
  }
}

defineSeed(90, 85, {}, EditTextCell_0);
_.isEditing_0 = function isEditing_2(context, parent_0, value_0){
  return $isEditing(this, context, dynamicCast(value_0, Q$String));
}
;
_.onBrowserEvent = function onBrowserEvent_2(context, parent_0, value_0, event_0, valueUpdater){
  $onBrowserEvent_2(this, context, parent_0, dynamicCast(value_0, Q$String), event_0, valueUpdater);
}
;
_.render = function render_2(context, value_0, sb){
  $render_1(this, context, dynamicCast(value_0, Q$String), sb);
}
;
_.resetFocus = function resetFocus_0(context, parent_0, value_0){
  return $resetFocus(this, context, parent_0, dynamicCast(value_0, Q$String));
}
;
var template;
function $equalsOrBothNull(o1, o2){
  return o1 == null?o2 == null:$equals_3(o1, o2);
}

function $setEditing(this$static, isEditing){
  var wasEditing;
  wasEditing = this$static.isEditing;
  this$static.isEditing = isEditing;
  if (!wasEditing && isEditing) {
    this$static.isEditingAgain = true;
    this$static.original = this$static.text_0;
  }
}

function EditTextCell$ViewData_0(text_0){
  this.original = text_0;
  this.text_0 = text_0;
  this.isEditing = true;
  this.isEditingAgain = false;
}

defineSeed(91, 1, makeCastMap([Q$EditTextCell$ViewData]), EditTextCell$ViewData_0);
_.equals$ = function equals_1(o){
  var vd;
  if (o == null) {
    return false;
  }
  vd = dynamicCast(o, Q$EditTextCell$ViewData);
  return $equalsOrBothNull(this.original, vd.original) && $equalsOrBothNull(this.text_0, vd.text_0) && this.isEditing == vd.isEditing && this.isEditingAgain == vd.isEditingAgain;
}
;
_.hashCode$ = function hashCode_2(){
  return getHashCode_1(this.original) + getHashCode_1(this.text_0) + (($clinit_Boolean() , this.isEditing?TRUE_1:FALSE_1).value_0?1231:1237) * 29 + ((this.isEditingAgain?TRUE_1:FALSE_1).value_0?1231:1237);
}
;
_.isEditing = false;
_.isEditingAgain = false;
function EditTextCell_TemplateImpl_0(){
}

defineSeed(92, 1, {}, EditTextCell_TemplateImpl_0);
function TextCell_0(){
  AbstractSafeHtmlCell_0.call(this, (!instance_2 && (instance_2 = new SimpleSafeHtmlRenderer_0) , instance_2), initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, []));
}

defineSeed(93, 86, {}, TextCell_0);
_.render_0 = function render_3(context, value_0, sb){
  !!value_0 && ($append_11(sb.sb, value_0.html) , sb);
}
;
function $elapsedMillis(this$static){
  return currentTimeMillis() - this$static.start_0;
}

function $initCause(this$static, cause){
  if (this$static.cause) {
    throw new IllegalStateException_1("Can't overwrite cause");
  }
  if (cause == this$static) {
    throw new IllegalArgumentException_1('Self-causation not permitted');
  }
  this$static.cause = cause;
  return this$static;
}

function RuntimeException_3(cause){
  this.detailMessage = !cause?null:$toString(cause);
  this.cause = cause;
  $fillInStackTrace();
}

defineSeed(97, 98, makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]), RuntimeException_3);
function $push_0(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $push_1(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $setLength(this$static, newLength){
  this$static.length = newLength;
}

function create(milliseconds){
  return new Date(milliseconds);
}

function $clinit_JsonUtils(){
  $clinit_JsonUtils = nullMethod;
  escapeTable = initEscapeTable();
  hasJsonParse = typeof JSON == 'object' && typeof JSON.parse == 'function';
}

function escapeChar(c){
  var lookedUp = escapeTable[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeJsonForEval(toEscape){
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return escapeChar(x_0);
  }
  );
  return s;
}

function escapeValue(toEscape){
  $clinit_JsonUtils();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0);
  }
  );
  return '"' + s + '"';
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

function safeEval(json){
  $clinit_JsonUtils();
  var v;
  if (hasJsonParse) {
    try {
      return JSON.parse(json);
    }
     catch (e) {
      return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
    }
  }
   else {
    if (/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(json.replace(/"(\\.|[^"\\])*"/g, ''))) {
      return throwIllegalArgumentException('Illegal character in JSON string', json);
    }
    json = escapeJsonForEval(json);
    try {
      return eval('(' + json + ')');
    }
     catch (e) {
      return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
    }
  }
}

function throwIllegalArgumentException(message, data_0){
  throw new IllegalArgumentException_1(message + '\n' + data_0);
}

var escapeTable, hasJsonParse = false;
function $append(this$static, x_0){
  this$static.string += x_0;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
}

function $append_1(this$static, x_0){
  this$static.string += x_0;
}

function $append_3(this$static, x_0){
  this$static.string += x_0;
}

function $replace(this$static, start_0, end, toInsert){
  this$static.string = $substring_0(this$static.string, 0, start_0) + toInsert + $substring(this$static.string, end);
}

function get_0(instance, key_0){
  if (instance.expando$) {
    return instance.expando$[':' + key_0];
  }
  return null;
}

function setNative(instance, key_0, value_0){
  !instance.expando$ && (instance.expando$ = {});
  instance.expando$[':' + key_0] = value_0;
}

function $html(this$static, html){
  $html_0(this$static.delegate_0, html);
  return this$static.returnBuilder;
}

defineSeed(132, 1, {});
_.html_0 = function html_0(html){
  return $html(this, html);
}
;
_.isEndTagForbidden = false;
defineSeed(133, 1, {});
function $assertCanAddStylePropertyImpl(this$static){
  $assertStartTagOpen(this$static, 'Style properties cannot be added after appending HTML or adding a child element.');
  if (this$static.isStyleClosed) {
    throw new IllegalStateException_1('Style properties must be added at the same time. If you already added style properties, you cannot add more after adding non-style attributes.');
  }
  if (!this$static.isStyleOpen) {
    this$static.isStyleOpen = true;
    $append_11(this$static.sb, ' style="');
  }
}

function $assertEndTagNotForbidden(this$static, operation){
  if ($peek_0(this$static.stack_0).builder.isEndTagForbidden) {
    throw new UnsupportedOperationException_1($peek_0(this$static.stack_0).tagName_0 + ' does not support ' + operation);
  }
}

function $assertStartTagOpen(this$static, message){
  if (!this$static.isStartTagOpen) {
    throw new IllegalStateException_1(message);
  }
}

function $assertValidTagName(tagName){
  if (!$test(HTML_TAG_REGEX, tagName)) {
    throw new IllegalArgumentException_1('The specified tag name is invalid: ' + tagName);
  }
}

function $end(this$static){
  $endImpl(this$static, $peek_0(this$static.stack_0).tagName_0);
}

function $end_0(this$static, tagName){
  var topItem;
  topItem = $peek_0(this$static.stack_0).tagName_0;
  if (!$equalsIgnoreCase(topItem, tagName)) {
    throw new IllegalStateException_1('Specified tag "' + tagName + '" does not match the current element "' + topItem + '"');
  }
  $endImpl(this$static, topItem);
}

function $endAllTags(this$static){
  while (this$static.stack_0.top_0) {
    $endImpl(this$static, $peek_0(this$static.stack_0).tagName_0);
  }
}

function $endImpl(this$static, tagName){
  $maybeCloseStartTag(this$static);
  $peek_0(this$static.stack_0).builder.isEndTagForbidden?$append_11(this$static.sb, ' />'):$append_11($append_11($append_11(this$static.sb, '<\/'), tagName), '>');
  this$static.isStartTagOpen = false;
  this$static.isStyleClosed = true;
  $pop(this$static.stack_0);
  this$static.isHtmlOrTextAdded = false;
}

function $endStyle(this$static){
  if (!this$static.isStyleOpen) {
    throw new IllegalStateException_1("Attempting to close a style attribute, but the style attribute isn't open");
  }
  $maybeCloseStyleAttribute(this$static);
}

function $html_0(this$static, html){
  $assertStartTagOpen(this$static, 'html cannot be set on an element that already contains other content or elements.');
  $maybeCloseStartTag(this$static);
  $assertEndTagNotForbidden(this$static, 'html');
  this$static.isHtmlOrTextAdded = true;
  $append_11(this$static.sb, html.html);
}

function $maybeCloseStartTag(this$static){
  $maybeCloseStyleAttribute(this$static);
  if (this$static.isStartTagOpen) {
    this$static.isStartTagOpen = false;
    $peek_0(this$static.stack_0).builder.isEndTagForbidden || $append_11(this$static.sb, '>');
  }
}

function $maybeCloseStyleAttribute(this$static){
  if (this$static.isStyleOpen) {
    this$static.isStyleOpen = false;
    this$static.isStyleClosed = true;
    $append_11(this$static.sb, '"');
  }
}

function $onStart(this$static, tagName, builder){
  if (this$static.isEmpty) {
    this$static.isEmpty = false;
  }
   else if (!this$static.stack_0.top_0) {
    throw new IllegalStateException_1('You can only build one top level element.');
  }
   else {
    $assertEndTagNotForbidden(this$static, 'child elements');
    if ($peek_0(this$static.stack_0).builder.isEndTagForbidden) {
      throw new UnsupportedOperationException_1($peek_0(this$static.stack_0).tagName_0 + ' does not support child elements.');
    }
  }
  if (this$static.isHtmlOrTextAdded) {
    throw new IllegalStateException_1('Cannot append an element after setting text of html.');
  }
  $assertValidTagName(tagName);
  $maybeCloseStartTag(this$static);
  $push_2(this$static.stack_0, builder, tagName);
  this$static.isStartTagOpen = true;
  this$static.isStyleOpen = false;
  this$static.isStyleClosed = false;
  this$static.isHtmlOrTextAdded = false;
}

defineSeed(134, 1, {});
_.isEmpty = true;
_.isHtmlOrTextAdded = false;
_.isStartTagOpen = false;
_.isStyleClosed = false;
_.isStyleOpen = false;
var HTML_TAG_REGEX;
function $assertNotEmpty(this$static){
  if (!this$static.top_0) {
    throw new IllegalStateException_1('There are no elements on the stack.');
  }
}

function $peek_0(this$static){
  $assertNotEmpty(this$static);
  return this$static.top_0;
}

function $pop(this$static){
  var toRet;
  $assertNotEmpty(this$static);
  toRet = this$static.top_0;
  this$static.top_0 = this$static.top_0.next;
  --this$static.size_0;
  return toRet;
}

function $push_2(this$static, builder, tagName){
  var node;
  node = new ElementBuilderImpl$StackNode_0(tagName, builder);
  node.next = this$static.top_0;
  this$static.top_0 = node;
  ++this$static.size_0;
}

function ElementBuilderImpl$FastPeekStack_0(){
}

defineSeed(135, 1, {}, ElementBuilderImpl$FastPeekStack_0);
_.size_0 = 0;
function ElementBuilderImpl$StackNode_0(tagName, builder){
  this.builder = builder;
  this.tagName_0 = tagName;
}

defineSeed(136, 1, {}, ElementBuilderImpl$StackNode_0);
function HtmlBuilderFactory_0(){
}

defineSeed(137, 133, {}, HtmlBuilderFactory_0);
var instance_0;
function $asSafeHtml(this$static){
  $endAllTags(this$static);
  return $clinit_SafeHtmlUtils() , new SafeHtmlString_0(this$static.sb.impl.string);
}

function $attribute(this$static, name_0, value_0){
  $trustedAttribute(this$static, htmlEscape(name_0), value_0);
}

function $attribute_0(this$static, name_0, value_0){
  $trustedAttribute_0(this$static, htmlEscape(name_0), value_0);
}

function $startDiv(this$static){
  $trustedStart(this$static, 'div', this$static.divBuilder);
  return this$static.divBuilder;
}

function $startTD(this$static){
  $trustedStart(this$static, 'td', this$static.tableCellBuilder);
  return this$static.tableCellBuilder;
}

function $startTH(this$static){
  $trustedStart(this$static, 'th', this$static.tableCellBuilder);
  return this$static.tableCellBuilder;
}

function $startTR(this$static){
  $trustedStart(this$static, 'tr', this$static.tableRowBuilder);
  return this$static.tableRowBuilder;
}

function $startTableSection(this$static, tagName){
  !this$static.tableSectionBuilder && (this$static.tableSectionBuilder = new HtmlTableSectionBuilder_0(this$static));
  $trustedStart(this$static, tagName, this$static.tableSectionBuilder);
  return this$static.tableSectionBuilder;
}

function $styleProperty(this$static, style){
  $assertCanAddStylePropertyImpl(this$static);
  $append_11(this$static.sb, style.css);
  return this$static.stylesBuilder;
}

function $trustedAttribute(this$static, name_0, value_0){
  $assertStartTagOpen(this$static, 'Attributes cannot be added after appending HTML or adding a child element.');
  $maybeCloseStyleAttribute(this$static);
  $append_11($append_9($append_11($append_11($append_11(this$static.sb, ' '), name_0), '="'), value_0), '"');
}

function $trustedAttribute_0(this$static, name_0, value_0){
  $assertStartTagOpen(this$static, 'Attributes cannot be added after appending HTML or adding a child element.');
  $maybeCloseStyleAttribute(this$static);
  $append_11($append_11($append_11($append_11($append_11(this$static.sb, ' '), name_0), '="'), htmlEscape(value_0)), '"');
}

function $trustedStart(this$static, tagName, builder){
  $onStart(this$static, tagName, builder);
  $append_11($append_11(this$static.sb, '<'), tagName);
}

function HtmlBuilderImpl_0(){
  this.stack_0 = new ElementBuilderImpl$FastPeekStack_0;
  !HTML_TAG_REGEX && (HTML_TAG_REGEX = new RegExp('^[a-z][a-z0-9]*$', 'i'));
  this.divBuilder = new HtmlDivBuilder_0(this);
  new HtmlElementBuilder_0(this);
  new HtmlInputBuilder_0(this);
  new HtmlLIBuilder_0(this);
  new HtmlOptionBuilder_0(this);
  new HtmlSpanBuilder_0(this);
  this.stylesBuilder = new HtmlStylesBuilder_0(this);
  this.tableCellBuilder = new HtmlTableCellBuilder_0(this);
  this.tableRowBuilder = new HtmlTableRowBuilder_0(this);
  this.sb = new StringBuilder_0;
}

defineSeed(138, 134, {}, HtmlBuilderImpl_0);
function $attribute_1(this$static, name_0, value_0){
  $attribute(this$static.delegate, name_0, value_0);
  return this$static.returnBuilder;
}

function $className(this$static, className){
  return $trustedAttribute_0(this$static.delegate, 'class', className) , this$static.returnBuilder;
}

function HtmlElementBuilderBase_0(delegate){
  HtmlElementBuilderBase_1.call(this, delegate, false);
}

function HtmlElementBuilderBase_1(delegate, isEndTagForbidden){
  this.delegate_0 = delegate;
  this.isEndTagForbidden = isEndTagForbidden;
  this.returnBuilder = this;
  this.delegate = delegate;
}

defineSeed(140, 132, {});
function HtmlDivBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(139, 140, {}, HtmlDivBuilder_0);
function HtmlElementBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(141, 140, {}, HtmlElementBuilder_0);
function HtmlInputBuilder_0(delegate){
  HtmlElementBuilderBase_1.call(this, delegate, true);
}

defineSeed(142, 140, {}, HtmlInputBuilder_0);
function HtmlLIBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(143, 140, {}, HtmlLIBuilder_0);
function HtmlOptionBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(144, 140, {}, HtmlOptionBuilder_0);
function HtmlSpanBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(145, 140, {}, HtmlSpanBuilder_0);
function $left(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('left:0.0px;'));
}

function $lineHeight(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('line-height:0.0px;'));
}

function $marginTop(this$static, value_0){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('margin-top:' + value_0 + 'px;'));
}

function $outlineStyle(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('outline-style:none;'));
}

function $paddingLeft(this$static, value_0){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('padding-left:' + value_0 + 'px;'));
}

function $position(this$static, value_0){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('position:' + value_0.getCssName() + ';'));
}

function $top(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('top:50.0%;'));
}

function $trustedProperty(this$static, name_0){
  name_0 = toHyphenatedForm(name_0);
  return $styleProperty(this$static.delegate, new SafeStylesString_0(name_0 + ':1;'));
}

function HtmlStylesBuilder_0(delegate){
  this.delegate = delegate;
}

function toHyphenatedForm(name_0){
  var hyphenated, matches, word;
  if (!camelCaseWord) {
    camelCaseMap = new HtmlStylesBuilder$FastStringMapClient_0;
    camelCaseWord = new RegExp('([A-Za-z])([^A-Z]*)', 'g');
    caseWord = new RegExp('[A-Z]([^A-Z]*)');
  }
  if (name_0.indexOf('-') != -1) {
    return name_0;
  }
  hyphenated = $get_0(camelCaseMap, name_0);
  if (hyphenated == null) {
    hyphenated = '';
    while (matches = $exec(camelCaseWord, name_0)) {
      word = matches[0];
      if (!$exec(caseWord, word)) {
        hyphenated += word;
      }
       else {
        hyphenated += '-' + matches[1].toLowerCase();
        matches.length > 1 && (hyphenated += matches[2]);
      }
    }
    $put(camelCaseMap, name_0, hyphenated);
  }
  return hyphenated;
}

defineSeed(146, 1, {}, HtmlStylesBuilder_0);
var camelCaseMap, camelCaseWord, caseWord;
function $get_0(this$static, key_0){
  return this$static.map_0[key_0] || null;
}

function $put(this$static, key_0, value_0){
  this$static.map_0[key_0] = value_0;
}

function HtmlStylesBuilder$FastStringMapClient_0(){
  this.map_0 = {};
}

defineSeed(147, 1, {}, HtmlStylesBuilder$FastStringMapClient_0);
function $colSpan(this$static, colSpan){
  return $trustedAttribute(this$static.delegate, 'colSpan', colSpan) , dynamicCast(this$static.returnBuilder, Q$TableCellBuilder);
}

function HtmlTableCellBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(148, 140, makeCastMap([Q$TableCellBuilder]), HtmlTableCellBuilder_0);
function $html_1(){
  throw new UnsupportedOperationException_1('Table row elements do not support setting inner html or text. Use startTD/startTH() instead to append a table cell to the section.');
}

function HtmlTableRowBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(149, 140, {}, HtmlTableRowBuilder_0);
_.html_0 = function html_1(html){
  return $html_1();
}
;
function $html_2(){
  throw new UnsupportedOperationException_1('Table section elements do not support setting inner html or text. Use startTR() instead to append a table row to the section.');
}

function HtmlTableSectionBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(150, 140, {}, HtmlTableSectionBuilder_0);
_.html_0 = function html_2(html){
  return $html_2();
}
;
function $getChild(this$static, index_0){
  return this$static.childNodes[index_0];
}

function $replaceChild(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $focus(this$static){
  this$static.focus();
}

function $getSubPixelScrollWidth(this$static){
  return this$static.scrollWidth || 0;
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function $createCheckInputElement(doc){
  var e = doc.createElement('INPUT');
  e.type = 'checkbox';
  e.value = 'on';
  return e;
}

function $createInputElement(doc, type_0){
  var e = doc.createElement('INPUT');
  e.type = type_0;
  return e;
}

function $eventGetSubPixelClientX(evt){
  return evt.clientX || 0;
}

function $eventGetSubPixelClientY(evt){
  return evt.clientY || 0;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $selectClear(select){
  select.options.length = 0;
}

function $touchGetSubPixelPageX(touch){
  return touch.pageX || 0;
}

function $touchGetSubPixelPageY(touch){
  return touch.pageY || 0;
}

function $getAttribute(elem, name_0){
  var attr = elem.getAttribute(name_0);
  return attr == null?'':attr + '';
}

function $getTagName(elem){
  var scopeName, tagName;
  tagName = elem.tagName;
  scopeName = elem.scopeName;
  if (scopeName == null || $equalsIgnoreCase('html', scopeName)) {
    return tagName;
  }
  return scopeName + ':' + tagName;
}

function $selectAdd(select, option, before){
  before?select.add(option, before.index):select.add(option);
}

function $setScrollLeft(elem, left){
  $isRTL(elem) && (left = -left);
  elem.scrollLeft = left;
}

function $getBodyOffsetLeft(this$static){
  return ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientLeft;
}

function $getBodyOffsetTop(this$static){
  return ($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientTop;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getScrollHeight(this$static){
  return (($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function $getScrollLeft_0(this$static){
  return $getScrollLeft($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body);
}

function $getScrollTop(this$static){
  return (($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollTop || 0) | 0;
}

function $getScrollWidth(this$static){
  return (($equals_3(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $isChecked(this$static){
  return !!this$static.checked;
}

function $isDefaultChecked(this$static){
  return !!this$static.defaultChecked;
}

function $setChecked(this$static, checked){
  this$static.checked = checked;
}

function $setDefaultChecked(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function $setDisabled(this$static, disabled){
  this$static.disabled = disabled;
}

function $setHtmlFor(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function $setSelectedIndex(this$static, index_0){
  this$static.selectedIndex = index_0;
}

function $clinit_Style$OutlineStyle(){
  $clinit_Style$OutlineStyle = nullMethod;
  NONE_0 = new Style$OutlineStyle$1_0;
  DASHED = new Style$OutlineStyle$2_0;
  DOTTED = new Style$OutlineStyle$3_0;
  DOUBLE = new Style$OutlineStyle$4_0;
  GROOVE = new Style$OutlineStyle$5_0;
  INSET = new Style$OutlineStyle$6_0;
  OUTSET = new Style$OutlineStyle$7_0;
  RIDGE = new Style$OutlineStyle$8_0;
  SOLID = new Style$OutlineStyle$9_0;
  $VALUES_2 = initValues(_3Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$OutlineStyle, [NONE_0, DASHED, DOTTED, DOUBLE, GROOVE, INSET, OUTSET, RIDGE, SOLID]);
}

function Style$OutlineStyle_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$OutlineStyle();
  return $VALUES_2;
}

defineSeed(174, 31, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_2, DASHED, DOTTED, DOUBLE, GROOVE, INSET, NONE_0, OUTSET, RIDGE, SOLID;
function Style$OutlineStyle$1_0(){
  Style$OutlineStyle_0.call(this, 'NONE', 0);
}

defineSeed(175, 174, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$1_0);
function Style$OutlineStyle$2_0(){
  Style$OutlineStyle_0.call(this, 'DASHED', 1);
}

defineSeed(176, 174, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$2_0);
function Style$OutlineStyle$3_0(){
  Style$OutlineStyle_0.call(this, 'DOTTED', 2);
}

defineSeed(177, 174, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$3_0);
function Style$OutlineStyle$4_0(){
  Style$OutlineStyle_0.call(this, 'DOUBLE', 3);
}

defineSeed(178, 174, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$4_0);
function Style$OutlineStyle$5_0(){
  Style$OutlineStyle_0.call(this, 'GROOVE', 4);
}

defineSeed(179, 174, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$5_0);
function Style$OutlineStyle$6_0(){
  Style$OutlineStyle_0.call(this, 'INSET', 5);
}

defineSeed(180, 174, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$6_0);
function Style$OutlineStyle$7_0(){
  Style$OutlineStyle_0.call(this, 'OUTSET', 6);
}

defineSeed(181, 174, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$7_0);
function Style$OutlineStyle$8_0(){
  Style$OutlineStyle_0.call(this, 'RIDGE', 7);
}

defineSeed(182, 174, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$8_0);
function Style$OutlineStyle$9_0(){
  Style$OutlineStyle_0.call(this, 'SOLID', 8);
}

defineSeed(183, 174, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$9_0);
defineSeed(185, 184, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName(){
  return 'visible';
}
;
defineSeed(186, 184, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_0(){
  return 'hidden';
}
;
defineSeed(187, 184, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_1(){
  return 'scroll';
}
;
defineSeed(188, 184, makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_2(){
  return 'auto';
}
;
defineSeed(190, 189, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_3(){
  return 'static';
}
;
defineSeed(191, 189, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_4(){
  return 'relative';
}
;
defineSeed(192, 189, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_5(){
  return 'absolute';
}
;
defineSeed(193, 189, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_6(){
  return 'fixed';
}
;
function $clinit_Style$TableLayout(){
  $clinit_Style$TableLayout = nullMethod;
  AUTO_0 = new Style$TableLayout$1_0;
  FIXED_0 = new Style$TableLayout$2_0;
  $VALUES_5 = initValues(_3Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Style$TableLayout, [AUTO_0, FIXED_0]);
}

function Style$TableLayout_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$TableLayout();
  return $VALUES_5;
}

defineSeed(194, 31, makeCastMap([Q$Style$HasCssName, Q$Style$TableLayout, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_5, AUTO_0, FIXED_0;
function Style$TableLayout$1_0(){
  Style$TableLayout_0.call(this, 'AUTO', 0);
}

defineSeed(195, 194, makeCastMap([Q$Style$HasCssName, Q$Style$TableLayout, Q$Serializable, Q$Comparable, Q$Enum]), Style$TableLayout$1_0);
function Style$TableLayout$2_0(){
  Style$TableLayout_0.call(this, 'FIXED', 1);
}

defineSeed(196, 194, makeCastMap([Q$Style$HasCssName, Q$Style$TableLayout, Q$Serializable, Q$Comparable, Q$Enum]), Style$TableLayout$2_0);
function $clinit_StyleInjector(){
  $clinit_StyleInjector = nullMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1_0;
}

function flush(){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInjectAtStart && (toReturn = maybeReturn);
    $setLength(toInjectAtStart, 0);
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInject && (toReturn = maybeReturn);
    $setLength(toInject, 0);
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheetAtEnd(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInjectAtEnd && (toReturn = maybeReturn);
    $setLength(toInjectAtEnd, 0);
  }
  needsInjection = false;
  return toReturn;
}

function schedule(){
  $clinit_StyleInjector();
  if (!needsInjection) {
    needsInjection = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function StyleInjector$1_0(){
}

defineSeed(223, 1, {}, StyleInjector$1_0);
_.execute_0 = function execute_3(){
  ($clinit_StyleInjector() , needsInjection) && flush();
}
;
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = nullMethod;
  $clinit_StyleInjector$StyleInjectorImplIE();
}

function $clinit_StyleInjector$StyleInjectorImplIE(){
  $clinit_StyleInjector$StyleInjectorImplIE = nullMethod;
  $clinit_StyleInjector$StyleInjectorImpl();
  styleSheetLengths = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 30, 1);
}

function $appendToStyleSheet(idx, contents, append){
  var style;
  style = $doc.styleSheets[idx];
  append?(style.cssText += contents , undefined):(style.cssText = contents + style.cssText , undefined);
  return style;
}

function $createNewStyleSheet(contents){
  var style;
  style = $doc.createStyleSheet();
  style.cssText = contents;
  return style;
}

function $injectStyleSheet(contents){
  var i, len, numStyles, shortestIdx, shortestLen;
  numStyles = getDocumentStyleCount();
  if (numStyles < 30) {
    return $createNewStyleSheet(contents);
  }
   else {
    shortestLen = 2147483647;
    shortestIdx = -1;
    for (i = 0; i < numStyles; i++) {
      len = styleSheetLengths[i];
      len == 0 && (len = styleSheetLengths[i] = $doc.styleSheets[i].cssText.length);
      if (len <= shortestLen) {
        shortestLen = len;
        shortestIdx = i;
      }
    }
    styleSheetLengths[shortestIdx] += contents.length;
    return $appendToStyleSheet(shortestIdx, contents, true);
  }
}

function $injectStyleSheetAtEnd(contents){
  var documentStyleCount;
  documentStyleCount = getDocumentStyleCount();
  if (documentStyleCount == 0) {
    return $createNewStyleSheet(contents);
  }
  return $appendToStyleSheet(documentStyleCount - 1, contents, true);
}

function $injectStyleSheetAtStart(contents){
  if (getDocumentStyleCount() == 0) {
    return $createNewStyleSheet(contents);
  }
  return $appendToStyleSheet(0, contents, false);
}

function getDocumentStyleCount(){
  return $doc.styleSheets.length;
}

var styleSheetLengths;
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = nullMethod;
  TYPE = new DomEvent$Type_0('change', new ChangeEvent_0);
}

function ChangeEvent_0(){
}

defineSeed(230, 231, {}, ChangeEvent_0);
_.dispatch_0 = function dispatch_0(handler){
  dynamicCast(handler, Q$ChangeHandler).onChange(this);
}
;
_.getAssociatedType_1 = function getAssociatedType_1(){
  return TYPE;
}
;
var TYPE;
function $clinit_ScrollEvent(){
  $clinit_ScrollEvent = nullMethod;
  TYPE_4 = new DomEvent$Type_0('scroll', new ScrollEvent_0);
}

function ScrollEvent_0(){
}

defineSeed(247, 231, {}, ScrollEvent_0);
_.dispatch_0 = function dispatch_5(handler){
  dynamicCast(handler, Q$ScrollHandler).onScroll(this);
}
;
_.getAssociatedType_1 = function getAssociatedType_6(){
  return TYPE_4;
}
;
var TYPE_4;
defineSeed(249, 236, {});
var impl_0;
function $clinit_TouchCancelEvent(){
  $clinit_TouchCancelEvent = nullMethod;
  TYPE_5 = new DomEvent$Type_0('touchcancel', new TouchCancelEvent_0);
}

function TouchCancelEvent_0(){
}

defineSeed(248, 249, {}, TouchCancelEvent_0);
_.dispatch_0 = function dispatch_6(handler){
  $onTouchEnd(dynamicCast(handler, Q$TouchCancelHandler).this$0);
}
;
_.getAssociatedType_1 = function getAssociatedType_7(){
  return TYPE_5;
}
;
var TYPE_5;
function $clinit_TouchEndEvent(){
  $clinit_TouchEndEvent = nullMethod;
  TYPE_6 = new DomEvent$Type_0('touchend', new TouchEndEvent_0);
}

function TouchEndEvent_0(){
}

defineSeed(250, 249, {}, TouchEndEvent_0);
_.dispatch_0 = function dispatch_7(handler){
  $onTouchEnd(dynamicCast(handler, Q$TouchEndHandler).this$0);
}
;
_.getAssociatedType_1 = function getAssociatedType_8(){
  return TYPE_6;
}
;
var TYPE_6;
function TouchEvent$TouchSupportDetector_0(){
  var elem;
  this.isSupported = (elem = document.createElement('div') , elem.setAttribute('ontouchstart', 'return;') , typeof elem.ontouchstart == 'function');
}

defineSeed(251, 1, {}, TouchEvent$TouchSupportDetector_0);
_.isSupported = false;
function $clinit_TouchMoveEvent(){
  $clinit_TouchMoveEvent = nullMethod;
  TYPE_7 = new DomEvent$Type_0('touchmove', new TouchMoveEvent_0);
}

function $dispatch_0(this$static, handler){
  $onTouchMove(handler.this$0, this$static);
}

function TouchMoveEvent_0(){
}

defineSeed(252, 249, {}, TouchMoveEvent_0);
_.dispatch_0 = function dispatch_8(handler){
  $dispatch_0(this, dynamicCast(handler, Q$TouchMoveHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_9(){
  return TYPE_7;
}
;
var TYPE_7;
function $clinit_TouchStartEvent(){
  $clinit_TouchStartEvent = nullMethod;
  TYPE_8 = new DomEvent$Type_0('touchstart', new TouchStartEvent_0);
}

function $dispatch_1(this$static, handler){
  $onTouchStart(handler.this$0, this$static);
}

function TouchStartEvent_0(){
}

defineSeed(253, 249, {}, TouchStartEvent_0);
_.dispatch_0 = function dispatch_9(handler){
  $dispatch_1(this, dynamicCast(handler, Q$TouchStartHandler));
}
;
_.getAssociatedType_1 = function getAssociatedType_10(){
  return TYPE_8;
}
;
var TYPE_8;
function $cancel_2(this$static){
  var xmlHttp;
  if (this$static.xmlHttpRequest) {
    xmlHttp = this$static.xmlHttpRequest;
    this$static.xmlHttpRequest = null;
    $clearOnReadyStateChange(xmlHttp);
    xmlHttp.abort();
    this$static.timeoutMillis > 0 && clearTimeout0(this$static.timerId);
  }
}

function $fireOnResponseReceived(this$static, callback){
  var errorMsg, exception, response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  this$static.timeoutMillis > 0 && clearTimeout0(this$static.timerId);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  errorMsg = $getBrowserSpecificFailure(xhr);
  if (errorMsg != null) {
    exception = new RuntimeException_1(errorMsg);
    $onTransportFailure_0(callback.val$receiver, new ServerFailure_0(exception.getMessage()));
  }
   else {
    response = new Request$RequestImplIE6To9$1_0(xhr);
    $onResponseReceived(callback, response);
  }
}

function $getBrowserSpecificFailure(xhr){
  try {
    if (xhr.status === undefined) {
      return 'XmlHttpRequest.status == undefined, please see Safari bug http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';
    }
    return null;
  }
   catch (e) {
    return 'Unable to read XmlHttpRequest.status; likely causes are a networking error or bad cross-domain request. Please see https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more details';
  }
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  if (!xmlHttpRequest) {
    throw new NullPointerException_0;
  }
  if (!callback) {
    throw new NullPointerException_0;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException_0;
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0?(this.timerId = createTimeout(this, callback, timeoutMillis)):(this.timerId = 0);
}

function createTimeout(request, callback, timeoutMillis){
  return setTimeout_0($entry(function(){
    request.fireOnTimeout(callback);
  }
  ), timeoutMillis);
}

defineSeed(265, 1, {}, Request_0);
_.fireOnTimeout = function fireOnTimeout(callback){
  if (!this.xmlHttpRequest) {
    return;
  }
  $cancel_2(this);
  $onError(callback, new RequestTimeoutException_0(this.timeoutMillis));
}
;
_.timeoutMillis = 0;
_.timerId = 0;
defineSeed(268, 1, {});
defineSeed(267, 268, {});
function $getStatusCode(this$static){
  var statusCode;
  statusCode = this$static.xmlHttpRequest.status;
  return statusCode == 1223?204:statusCode;
}

function Request$RequestImplIE6To9$1_0($anonymous0){
  this.xmlHttpRequest = $anonymous0;
}

defineSeed(266, 267, {}, Request$RequestImplIE6To9$1_0);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = nullMethod;
  new RequestBuilder$Method_0('DELETE');
  new RequestBuilder$Method_0('GET');
  new RequestBuilder$Method_0('HEAD');
  POST = new RequestBuilder$Method_0('POST');
  new RequestBuilder$Method_0('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = create_3();
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$JavaScriptException)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException_0(this$static.url_0);
      $initCause(requestPermissionException, new RequestException_0(($ensureInit(e) , e.message_0)));
      throw requestPermissionException;
    }
     else 
      throw unwrap($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1_0(request, callback));
  try {
    $send(xmlHttpRequest, requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, Q$JavaScriptException)) {
      e = $e1;
      throw new RequestException_0(($ensureInit(e) , e.message_0));
    }
     else 
      throw unwrap($e1);
  }
  return request;
}

function $setCallback(this$static, callback){
  throwIfNull('callback', callback);
  this$static.callback = callback;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap_0);
  this$static.headers.put(header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_1() > 0) {
    for (header$iterator = this$static.headers.entrySet_0().iterator(); header$iterator.hasNext();) {
      header = dynamicCast(header$iterator.next_0(), Q$Map$Entry);
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCast(header.getKey(), Q$String), dynamicCast(header.getValue_0(), Q$String));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, Q$JavaScriptException)) {
          e = $e0;
          throw new RequestException_0(($ensureInit(e) , e.message_0));
        }
         else 
          throw unwrap($e0);
      }
    }
  }
   else {
    $setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder_0(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_1.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_1(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineSeed(269, 1, {}, RequestBuilder_0);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
function RequestBuilder$1_0(val$request, val$callback){
  this.val$request = val$request;
  this.val$callback = val$callback;
}

defineSeed(270, 1, {}, RequestBuilder$1_0);
_.onReadyStateChange = function onReadyStateChange_0(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request, this.val$callback);
  }
}
;
function RequestBuilder$Method_0(name_0){
  this.name_0 = name_0;
}

defineSeed(271, 1, {}, RequestBuilder$Method_0);
_.toString$ = function toString_5(){
  return this.name_0;
}
;
function RequestException_0(message){
  Exception_0.call(this, message);
}

defineSeed(272, 98, makeCastMap([Q$RequestException, Q$Serializable, Q$Exception, Q$Throwable]), RequestException_0);
function RequestPermissionException_0(url_0){
  RequestException_0.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineSeed(273, 272, makeCastMap([Q$RequestException, Q$Serializable, Q$Exception, Q$Throwable]), RequestPermissionException_0);
function RequestTimeoutException_0(timeoutMillis){
  RequestException_0.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineSeed(274, 272, makeCastMap([Q$RequestException, Q$Serializable, Q$Exception, Q$Throwable]), RequestTimeoutException_0);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_1(name_0 + ' cannot be empty');
  }
}

function AutoDirectionHandler_0(){
}

defineSeed(277, 1, makeCastMap([Q$EventHandler]), AutoDirectionHandler_0);
function dynamicCastAllowJso(src_0, dstId){
  if (src_0 != null && !(src_0.typeMarker$ != nullMethod && !canCast(src_0, 1)) && !canCastUnsafe(src_0, dstId)) {
    throw new ClassCastException_0;
  }
  return src_0;
}

function instanceOfOrJso(src_0, dstId){
  return src_0 != null && (src_0.typeMarker$ != nullMethod && !canCast(src_0, 1) || canCast(src_0, dstId));
}

function round_byte(x_0){
  return round_int(x_0) << 24 >> 24;
}

function round_short(x_0){
  return round_int(x_0) << 16 >> 16;
}

function create_0(value_0){
  var a0, a1, a2;
  a0 = value_0 & 4194303;
  a1 = value_0 >> 22 & 4194303;
  a2 = value_0 < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create_1(a){
  return create0(a.l, a.m, a.h);
}

function create0(l_0, m_0, h_0){
  return {l:l_0, m:m_0, h:h_0};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException_0;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == 524288 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == 524288 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_1(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == 524288 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_1(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    setH(bshift, a2 >>> 1);
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & 4194303;
  neg1 = ~a.m + (neg0 == 0?1:0) & 4194303;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h_0, l_0, m_0;
  l_0 = a.l;
  if ((l_0 & l_0 - 1) != 0) {
    return -1;
  }
  m_0 = a.m;
  if ((m_0 & m_0 - 1) != 0) {
    return -1;
  }
  h_0 = a.h;
  if ((h_0 & h_0 - 1) != 0) {
    return -1;
  }
  if (h_0 == 0 && m_0 == 0 && l_0 == 0) {
    return -1;
  }
  if (h_0 == 0 && m_0 == 0 && l_0 != 0) {
    return numberOfTrailingZeros(l_0);
  }
  if (h_0 == 0 && m_0 != 0 && l_0 == 0) {
    return numberOfTrailingZeros(m_0) + 22;
  }
  if (h_0 != 0 && m_0 == 0 && l_0 == 0) {
    return numberOfTrailingZeros(h_0) + 44;
  }
  return -1;
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
  return a.l + a.m * 4194304 + a.h * 17592186044416;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  setL(a, sum0 & 4194303);
  setM(a, sum1 & 4194303);
  setH(a, sum2 & 1048575);
  return true;
}

var remainder;
function add_1(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return {l:sum0 & 4194303, m:sum1 & 4194303, h:sum2 & 1048575};
}

function and(a, b){
  return {l:a.l & b.l, m:a.m & b.m, h:a.h & b.h};
}

function div_0(a, b){
  return divMod(a, b, false);
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
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
  if (value_0 >= 17592186044416) {
    a2 = round_int(value_0 / 17592186044416);
    value_0 -= a2 * 17592186044416;
  }
  a1 = 0;
  if (value_0 >= 4194304) {
    a1 = round_int(value_0 / 4194304);
    value_0 -= a1 * 4194304;
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
    boxedValues == null && (boxedValues = initDim(_3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$LongLibBase$LongEmul, 256, 0));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_0(value_0));
    return result;
  }
  return create_0(value_0);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function lt(a, b){
  return !gte_0(a, b);
}

function lte(a, b){
  return !gt(a, b);
}

function mod(a, b){
  divMod(a, b, true);
  return remainder;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & 4194303;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= 4194303;
  c2 += c1 >> 22;
  c1 &= 4194303;
  c2 &= 1048575;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & 4194303;
  neg1 = ~a.m + (neg0 == 0?1:0) & 4194303;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  return create0(neg0, neg1, neg2);
}

function neq(a, b){
  return a.l != b.l || a.m != b.m || a.h != b.h;
}

function or(a, b){
  return {l:a.l | b.l, m:a.m | b.m, h:a.h | b.h};
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & 4194303, m:res1 & 4194303, h:res2 & 1048575};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & 524288) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?1048575:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?1048575:0;
    res1 = negative?4194303:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & 4194303, m:res1 & 4194303, h:res2 & 1048575};
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & 1048575;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & 4194303, m:res1 & 4194303, h:res2 & 1048575};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & 4194303, m:sum1 & 4194303, h:sum2 & 1048575};
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return -9223372036854775808;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * 4194304 + a.h * 17592186044416;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_6(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == 524288 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_6(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = nullMethod;
  MAX_VALUE = create0(4194303, 4194303, 524287);
  MIN_VALUE = create0(0, 0, 524288);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function $setBottomHeight(this$static, bottomUnit, height, heightUnit){
  this$static.setTargetBottom = this$static.setTargetHeight = true;
  this$static.setTargetTop = false;
  this$static.targetBottom = 0;
  this$static.targetHeight = height;
  this$static.targetBottomUnit = bottomUnit;
  this$static.targetHeightUnit = heightUnit;
}

function $setLeftRight(this$static, left, leftUnit, right, rightUnit){
  this$static.setTargetLeft = this$static.setTargetRight = true;
  this$static.setTargetWidth = false;
  this$static.targetLeft = left;
  this$static.targetRight = right;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetRightUnit = rightUnit;
}

function $setLeftWidth(this$static, leftUnit, width_0, widthUnit){
  this$static.setTargetLeft = this$static.setTargetWidth = true;
  this$static.setTargetRight = false;
  this$static.targetLeft = 0;
  this$static.targetWidth = width_0;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setRightWidth(this$static, rightUnit, width_0, widthUnit){
  this$static.setTargetRight = this$static.setTargetWidth = true;
  this$static.setTargetLeft = false;
  this$static.targetRight = 0;
  this$static.targetWidth = width_0;
  this$static.targetRightUnit = rightUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setTopBottom(this$static, topUnit, bottom, bottomUnit){
  this$static.setTargetTop = this$static.setTargetBottom = true;
  this$static.setTargetHeight = false;
  this$static.targetTop = 0;
  this$static.targetBottom = bottom;
  this$static.targetTopUnit = topUnit;
  this$static.targetBottomUnit = bottomUnit;
}

function $setVisible(this$static, visible){
  this$static.visible = visible;
}

function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $test(this$static, input_0){
  return this$static.test(input_0);
}

function getInlineBlockStyle(){
  var style;
  style = (!instance_1 && (instance_1 = new CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator_0) , $clinit_CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator$inlineBlockStyleInitializer() , inlineBlockStyle);
  $ensureInjected(style);
  return 'GPBYFDEH';
}

var instance_1;
function CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator_0(){
}

defineSeed(300, 1, {}, CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator_0);
var inlineBlockStyle;
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_1(toInject, '.GPBYFDEH{position:relative;display:inline-block;}');
    schedule();
    return true;
  }
  return false;
}

function CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator$1_0(){
}

defineSeed(301, 1, {}, CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator$inlineBlockStyleInitializer(){
  $clinit_CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator$inlineBlockStyleInitializer = nullMethod;
  inlineBlockStyle = new CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator$1_0;
}

function $append_5(this$static, html){
  $append_11(this$static.sb, html.asString());
  return this$static;
}

function SafeHtmlBuilder_0(){
  this.sb = new StringBuilder_0;
}

defineSeed(308, 1, {}, SafeHtmlBuilder_0);
defineSeed(313, 1, {});
function $render_2(object){
  return object == null?($clinit_SafeHtmlUtils() , EMPTY_SAFE_HTML):($clinit_SafeHtmlUtils() , new SafeHtmlString_0(htmlEscape(object)));
}

function SimpleSafeHtmlRenderer_0(){
}

defineSeed(314, 1, {}, SimpleSafeHtmlRenderer_0);
var instance_2;
function PassthroughParser_0(){
}

defineSeed(315, 1, {}, PassthroughParser_0);
var INSTANCE_1;
function PassthroughRenderer_0(){
}

defineSeed(316, 313, {}, PassthroughRenderer_0);
var INSTANCE_2;
function $calcNewVelocity(initialVelocity, decelFactor, oldVelocity, minDecel){
  var maxVelocityX, minVelocityX, newVelocity;
  newVelocity = initialVelocity * decelFactor;
  if (oldVelocity >= 0) {
    maxVelocityX = 0 > oldVelocity - minDecel?0:oldVelocity - minDecel;
    newVelocity = newVelocity < maxVelocityX?newVelocity:maxVelocityX;
  }
   else {
    minVelocityX = 0 < oldVelocity + minDecel?0:oldVelocity + minDecel;
    newVelocity = newVelocity > minVelocityX?newVelocity:minVelocityX;
  }
  return newVelocity;
}

function $updateState(state){
  var decelFactor, dist, elapsedMillis, ellapsedMillis, initialVelocity, minDecel, newVelocity, newVelocityX, newVelocityY, oldVelocity, position, totalEllapsedMillis;
  ellapsedMillis = state.elapsedMillis;
  totalEllapsedMillis = state.cumulativeElapsedMillis;
  initialVelocity = state.initialVelocity;
  oldVelocity = state.velocity;
  decelFactor = pow_0(0.9993, totalEllapsedMillis);
  minDecel = ellapsedMillis * 5.0E-4;
  newVelocityX = $calcNewVelocity(initialVelocity.x_0, decelFactor, oldVelocity.x_0, minDecel);
  newVelocityY = $calcNewVelocity(initialVelocity.y_0, decelFactor, oldVelocity.y_0, minDecel);
  newVelocity = new Point_0(newVelocityX, newVelocityY);
  state.velocity = newVelocity;
  elapsedMillis = state.elapsedMillis;
  dist = $mult(newVelocity, new Point_0(elapsedMillis, elapsedMillis));
  position = state.position;
  $setPosition(state, new Point_0(position.x_0 + dist.x_0, position.y_0 + dist.y_0));
  if (abs_0(newVelocity.x_0) < 0.02 && abs_0(newVelocity.y_0) < 0.02) {
    return false;
  }
  return true;
}

function DefaultMomentum_0(){
}

defineSeed(317, 1, {}, DefaultMomentum_0);
function $setCumulativeElapsedMillis(this$static, cumulativeElapsedMillis){
  this$static.cumulativeElapsedMillis = cumulativeElapsedMillis;
}

function $setElapsedMillis(this$static, elapsedMillis){
  this$static.elapsedMillis = elapsedMillis;
}

function $setPosition(this$static, position){
  this$static.position = position;
}

function Momentum$State_0(initialPosition, initialVelocity){
  this.initialVelocity = initialVelocity;
  this.position = new Point_1(initialPosition);
  this.velocity = new Point_1(initialVelocity);
}

defineSeed(318, 1, {}, Momentum$State_0);
_.cumulativeElapsedMillis = 0;
_.elapsedMillis = 0;
function $minus(this$static, c){
  return new Point_0(this$static.x_0 - c.x_0, this$static.y_0 - c.y_0);
}

function $mult(this$static, c){
  return new Point_0(this$static.x_0 * c.x_0, this$static.y_0 * c.y_0);
}

function $plus(this$static, c){
  return new Point_0(this$static.x_0 + c.x_0, this$static.y_0 + c.y_0);
}

function Point_0(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

function Point_1(c){
  Point_0.call(this, c.x_0, c.y_0);
}

defineSeed(319, 1, makeCastMap([Q$Point]), Point_0, Point_1);
_.equals$ = function equals_6(obj){
  var c;
  if (!instanceOf(obj, Q$Point)) {
    return false;
  }
  c = dynamicCast(obj, Q$Point);
  return this.x_0 == c.x_0 && this.y_0 == c.y_0;
}
;
_.hashCode$ = function hashCode_8(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString$ = function toString_8(){
  return 'Point(' + this.x_0 + ',' + this.y_0 + ')';
}
;
_.x_0 = 0;
_.y_0 = 0;
function $calculateEndVelocity(from, to){
  var dist, time;
  time = to.time - from.time;
  if (time <= 0) {
    return null;
  }
  dist = $minus(from.point, to.point);
  return new Point_0(dist.x_0 / time, dist.y_0 / time);
}

function $cancelAll(this$static){
  this$static.touching = false;
  this$static.dragging = false;
  this$static.momentumCommand = null;
}

function $getTouchFromEvent(event_0){
  var touches;
  touches = event_0.nativeEvent.touches;
  return touches.length > 0?touches[0]:null;
}

function $getWidgetScrollPosition(this$static){
  return new Point_0($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
}

function $hitTest(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = new Point_0(point1.x_0 - point2.x_0, point1.y_0 - point2.y_0);
  absDiffX = abs_0(diff.x_0);
  absDiffY = abs_0(diff.y_0);
  return absDiffX <= 25 && absDiffY <= 25;
}

function $isClickScrollTriggeringTouch(this$static, clickPoint){
  if (this$static.recentScrollTriggeringTouchPosition.point) {
    return $hitTest(clickPoint, this$static.recentScrollTriggeringTouchPosition.point);
  }
  return false;
}

function $isClickTouchPositionDuringMomentum(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = currentTimeMillis();
  same = false;
  for (point$iterator = new AbstractList$IteratorImpl_0(this$static.touchPositionsDuringMomentum); point$iterator.i < point$iterator.this$0_0.size_1();) {
    point = dynamicCast($next_4(point$iterator), Q$TouchScroller$TemporalPoint);
    if (currentTime - point.time <= 2500 && $hitTest(clickPoint, point.point)) {
      same = true;
      break;
    }
  }
  return same;
}

function $onDragEnd(this$static){
  var endVelocity;
  if (!this$static.momentum) {
    return;
  }
  endVelocity = $calculateEndVelocity(this$static.recentTouchPosition, this$static.lastTouchPosition);
  if (endVelocity) {
    this$static.momentumCommand = new TouchScroller$MomentumCommand_0(this$static, endVelocity);
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumCommand), 16);
  }
}

function $onTouchEnd(this$static){
  if (!this$static.touching) {
    return;
  }
  this$static.touching = false;
  if (this$static.dragging) {
    this$static.dragging = false;
    $onDragEnd(this$static);
  }
}

function $onTouchMove(this$static, event_0){
  var absDiffX, absDiffY, diff, hMax, hMin, hPosition, touch, touchPoint, touchTime, trackingTime, vMax, vPosition, diff_0, curScrollPosition;
  if (!this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  touchPoint = new Point_0($touchGetSubPixelPageX(touch) | 0, $touchGetSubPixelPageY(touch) | 0);
  touchTime = currentTimeMillis();
  $setTemporalPoint(this$static.lastTouchPosition, touchPoint, touchTime);
  if (!this$static.dragging) {
    diff = $minus(touchPoint, this$static.startTouchPosition);
    absDiffX = abs_0(diff.x_0);
    absDiffY = abs_0(diff.y_0);
    if (absDiffX > 5 || absDiffY > 5) {
      $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, this$static.recentTouchPosition.point, this$static.recentTouchPosition.time);
      if (absDiffX > absDiffY) {
        hPosition = $getHorizontalScrollPosition(this$static.widget);
        hMin = $getMinimumHorizontalScrollPosition(this$static.widget);
        hMax = $getMaximumHorizontalScrollPosition(this$static.widget);
        if (diff.x_0 < 0 && hMax <= hPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.x_0 > 0 && hMin >= hPosition) {
          $cancelAll(this$static);
          return;
        }
      }
       else {
        vPosition = $getVerticalScrollPosition(this$static.widget);
        vMax = $getMaximumVerticalScrollPosition(this$static.widget);
        if (diff.y_0 < 0 && vMax <= vPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.y_0 > 0 && 0 >= vPosition) {
          $cancelAll(this$static);
          return;
        }
      }
      this$static.dragging = true;
    }
  }
  $eventPreventDefault(event_0.nativeEvent);
  if (this$static.dragging) {
    diff_0 = $minus(this$static.startTouchPosition, this$static.lastTouchPosition.point);
    curScrollPosition = $plus(this$static.startScrollPosition, diff_0);
    $setHorizontalScrollPosition(this$static.widget, round_int(curScrollPosition.x_0));
    $setVerticalScrollPosition(this$static.widget, round_int(curScrollPosition.y_0));
    trackingTime = touchTime - this$static.recentTouchPosition.time;
    if (trackingTime > 200 && !!this$static.recentTouchPositionOnDeck) {
      $setTemporalPoint(this$static.recentTouchPosition, this$static.recentTouchPositionOnDeck.point, this$static.recentTouchPositionOnDeck.time);
      this$static.recentTouchPositionOnDeck = null;
    }
     else 
      trackingTime > 100 && !this$static.recentTouchPositionOnDeck && (this$static.recentTouchPositionOnDeck = new TouchScroller$TemporalPoint_1(touchPoint, touchTime));
  }
}

function $onTouchStart(this$static, event_0){
  var startTouchTime, touch;
  $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, null, 0);
  if (this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  this$static.startTouchPosition = new Point_0($touchGetSubPixelPageX(touch) | 0, $touchGetSubPixelPageY(touch) | 0);
  startTouchTime = currentTimeMillis();
  $setTemporalPoint(this$static.recentTouchPosition, this$static.startTouchPosition, startTouchTime);
  $setTemporalPoint(this$static.lastTouchPosition, this$static.startTouchPosition, startTouchTime);
  this$static.recentTouchPositionOnDeck = null;
  if (this$static.momentumCommand) {
    $add_16(this$static.touchPositionsDuringMomentum, new TouchScroller$TemporalPoint_1(this$static.startTouchPosition, startTouchTime));
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumTouchRemovalCommand), 2500);
  }
  this$static.startScrollPosition = new Point_0($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
  $cancelAll(this$static);
  this$static.touching = true;
}

function $removeAttachHandler(this$static){
  if (this$static.attachHandlerReg) {
    $removeHandler(this$static.attachHandlerReg.real);
    this$static.attachHandlerReg = null;
  }
}

function $removeBustClickHandler(this$static){
  if (this$static.bustClickHandlerReg) {
    $removeHandler(this$static.bustClickHandlerReg.real);
    this$static.bustClickHandlerReg = null;
  }
}

function $setMomentum(this$static, momentum){
  this$static.momentum = momentum;
  !momentum && (this$static.momentumCommand = null);
}

function $setTargetWidget(this$static, widget){
  var reg, reg$iterator;
  if (this$static.widget == widget) {
    return;
  }
  $cancelAll(this$static);
  for (reg$iterator = new AbstractList$IteratorImpl_0(this$static.handlerRegs); reg$iterator.i < reg$iterator.this$0_0.size_1();) {
    reg = dynamicCast($next_4(reg$iterator), Q$HandlerRegistration);
    $removeHandler(reg.real);
  }
  $clear_5(this$static.handlerRegs);
  $removeAttachHandler(this$static);
  $removeBustClickHandler(this$static);
  this$static.widget = widget;
  if (widget) {
    widget.attached && ($removeBustClickHandler(this$static) , this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6_0(this$static)));
    this$static.attachHandlerReg = $addHandler_0(widget, new TouchScroller$1_0(this$static), (!TYPE_9 && (TYPE_9 = new GwtEvent$Type_0) , TYPE_9));
    $add_16(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$2_0(this$static), ($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_8)));
    $add_16(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$3_0(this$static), ($clinit_TouchMoveEvent() , $clinit_TouchMoveEvent() , TYPE_7)));
    $add_16(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$4_0(this$static), ($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_6)));
    $add_16(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$5_0(this$static), ($clinit_TouchCancelEvent() , $clinit_TouchCancelEvent() , TYPE_5)));
  }
}

function $setWidgetScrollPosition(this$static, position){
  $setHorizontalScrollPosition(this$static.widget, round_int(position.x_0));
  $setVerticalScrollPosition(this$static.widget, round_int(position.y_0));
}

function $setupBustClickHandler(this$static){
  $removeBustClickHandler(this$static);
  this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6_0(this$static));
}

function TouchScroller_0(){
  this.handlerRegs = new ArrayList_0;
  this.lastTouchPosition = new TouchScroller$TemporalPoint_0;
  this.recentTouchPosition = new TouchScroller$TemporalPoint_0;
  this.recentScrollTriggeringTouchPosition = new TouchScroller$TemporalPoint_0;
  this.touchPositionsDuringMomentum = new ArrayList_0;
  this.momentumTouchRemovalCommand = new TouchScroller$MomentumTouchRemovalCommand_0(this);
  $setMomentum(this, new DefaultMomentum_0);
}

defineSeed(320, 1, {}, TouchScroller_0);
_.dragging = false;
_.touching = false;
var isSupported;
function TouchScroller$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(321, 1, makeCastMap([Q$AttachEvent$Handler, Q$EventHandler]), TouchScroller$1_0);
_.onAttachOrDetach = function onAttachOrDetach(event_0){
  event_0.attached?$setupBustClickHandler(this.this$0):$removeBustClickHandler(this.this$0);
}
;
function TouchScroller$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(322, 1, makeCastMap([Q$TouchStartHandler, Q$EventHandler]), TouchScroller$2_0);
function TouchScroller$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(323, 1, makeCastMap([Q$TouchMoveHandler, Q$EventHandler]), TouchScroller$3_0);
function TouchScroller$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(324, 1, makeCastMap([Q$TouchEndHandler, Q$EventHandler]), TouchScroller$4_0);
function TouchScroller$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(325, 1, makeCastMap([Q$TouchCancelHandler, Q$EventHandler]), TouchScroller$5_0);
function TouchScroller$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(326, 1, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), TouchScroller$6_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  var clickPoint;
  if (1 == $getTypeInt(event_0.nativeEvent)) {
    clickPoint = new Point_0($eventGetSubPixelClientX(event_0.nativeEvent) | 0, $eventGetSubPixelClientY(event_0.nativeEvent) | 0);
    if ($isClickScrollTriggeringTouch(this.this$0, clickPoint) || $isClickTouchPositionDuringMomentum(this.this$0, clickPoint)) {
      event_0.isCanceled = true;
      $eventStopPropagation(event_0.nativeEvent);
      $eventPreventDefault(event_0.nativeEvent);
    }
  }
}
;
function $finish(this$static){
  if (this$static.windowResizeHandler) {
    $removeHandler(this$static.windowResizeHandler.real);
    this$static.windowResizeHandler = null;
  }
  this$static == this$static.this$0.momentumCommand && (this$static.this$0.momentumCommand = null);
}

function TouchScroller$MomentumCommand_0(this$0, endVelocity){
  this.this$0 = this$0;
  this.duration = new Duration_0;
  this.initialPosition = $getWidgetScrollPosition(this.this$0);
  this.state = new Momentum$State_0(this.initialPosition, endVelocity);
  this.windowResizeHandler = addResizeHandler(new TouchScroller$MomentumCommand$1_0(this));
}

defineSeed(327, 1, {}, TouchScroller$MomentumCommand_0);
_.execute = function execute_4(){
  var cumulativeElapsedMillis, hMax, hMin, hPos, notDone, vMax, vPos;
  if (this != this.this$0.momentumCommand) {
    $finish(this);
    return false;
  }
  cumulativeElapsedMillis = $elapsedMillis(this.duration);
  $setElapsedMillis(this.state, cumulativeElapsedMillis - this.lastElapsedMillis);
  this.lastElapsedMillis = cumulativeElapsedMillis;
  $setCumulativeElapsedMillis(this.state, cumulativeElapsedMillis);
  notDone = $updateState(this.state);
  notDone || $finish(this);
  $setWidgetScrollPosition(this.this$0, this.state.position);
  hPos = round_int(this.state.position.x_0);
  hMin = $getMinimumHorizontalScrollPosition(this.this$0.widget);
  hMax = $getMaximumHorizontalScrollPosition(this.this$0.widget);
  vMax = $getMaximumVerticalScrollPosition(this.this$0.widget);
  vPos = round_int(this.state.position.y_0);
  if ((vMax <= vPos || 0 >= vPos) && (hMax <= hPos || hMin >= hPos)) {
    $finish(this);
    return false;
  }
  return notDone;
}
;
_.lastElapsedMillis = 0;
function TouchScroller$MomentumCommand$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(328, 1, makeCastMap([Q$ResizeHandler, Q$EventHandler]), TouchScroller$MomentumCommand$1_0);
_.onResize = function onResize(event_0){
  $finish(this.this$1);
}
;
function TouchScroller$MomentumTouchRemovalCommand_0(this$0){
  this.this$0 = this$0;
}

defineSeed(329, 1, {}, TouchScroller$MomentumTouchRemovalCommand_0);
_.execute = function execute_5(){
  var currentTime, iter, point;
  currentTime = currentTimeMillis();
  iter = new AbstractList$IteratorImpl_0(this.this$0.touchPositionsDuringMomentum);
  while (iter.i < iter.this$0_0.size_1()) {
    point = dynamicCast($next_4(iter), Q$TouchScroller$TemporalPoint);
    currentTime - point.time >= 2500 && $remove_16(iter);
  }
  return this.this$0.touchPositionsDuringMomentum.size_0 != 0;
}
;
function $setTemporalPoint(this$static, point, time){
  this$static.point = point;
  this$static.time = time;
}

function TouchScroller$TemporalPoint_0(){
}

function TouchScroller$TemporalPoint_1(point, time){
  this.point = point;
  this.time = time;
}

defineSeed(330, 1, makeCastMap([Q$TouchScroller$TemporalPoint]), TouchScroller$TemporalPoint_0, TouchScroller$TemporalPoint_1);
_.time = 0;
function $get_1(this$static){
  if (!this$static.element) {
    this$static.element = $getElementById($doc, this$static.domId);
    if (!this$static.element) {
      throw new RuntimeException_1('Cannot find element with id "' + this$static.domId + '". Perhaps it is not attached to the document body.');
    }
    $removeAttribute(this$static.element, 'id');
  }
  return this$static.element;
}

function LazyDomElement_0(domId){
  this.domId = domId;
}

defineSeed(331, 1, {}, LazyDomElement_0);
function attachToDom(element){
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(element);
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment_0(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = $createElement($doc, 'div');
    setVisible(hiddenDiv, false);
    $appendChild(getBodyElement(), hiddenDiv);
  }
}

function fromHtml(html){
  var newbie;
  ensureHiddenDiv();
  $setInnerHTML(hiddenDiv, html);
  newbie = $getFirstChildElement(hiddenDiv);
  $removeChild(newbie.parentNode, newbie);
  return newbie;
}

function orphan(node){
  $removeChild(node.parentNode, node);
}

var hiddenDiv;
function UiBinderUtil$TempAttachment_0(origParent, origSibling, element){
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineSeed(333, 1, {}, UiBinderUtil$TempAttachment_0);
function $resolvePotentialElement(){
  throw new UnsupportedOperationException_0;
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(($clinit_DOM() , this$static.element), style, add_0);
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = elem.className;
  spaceIdx = $indexOf_1(fullClassName, fromCodePoint(32));
  if (spaceIdx >= 0) {
    return $substring_0(fullClassName, 0, spaceIdx);
  }
  return fullClassName;
}

defineSeed(338, 1, makeCastMap([Q$HasVisibility, Q$UIObject]));
_.getOffsetHeight = function getOffsetHeight(){
  return $getPropertyInt(($clinit_DOM() , this.element), 'offsetHeight');
}
;
_.getOffsetWidth = function getOffsetWidth(){
  return $getPropertyInt(($clinit_DOM() , this.element), 'offsetWidth');
}
;
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.setHeight_0 = function setHeight(height){
  $setHeight_0(this, height);
}
;
_.setWidth_0 = function setWidth(width_0){
  $setWidth_0(this, width_0);
}
;
defineSeed(337, 338, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.asWidget = function asWidget(){
  return this;
}
;
function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw new IllegalStateException_1('Composite.initWidget() may only be called once.');
  }
  $removeFromParent_0(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  isPotential(elem) && $setResolver(($clinit_PotentialElement() , elem), this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function $isAttached(this$static){
  if (this$static.widget) {
    return this$static.widget.attached;
  }
  return false;
}

defineSeed(336, 337, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.isAttached_0 = function isAttached_0(){
  return $isAttached(this);
}
;
_.onAttach = function onAttach_0(){
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach_0(this.widget);
  $clinit_DOM();
  setEventListener_0(this.element, this);
  fire_0(this, true);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_4(event_0){
  $onBrowserEvent_3(this, event_0);
  $onBrowserEvent_3(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  try {
    this.onUnload();
    fire_0(this, false);
  }
   finally {
    $onDetach_0(this.widget);
  }
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, $resolvePotentialElement());
  return $clinit_DOM() , this.element;
}
;
function $addCellPreviewHandler(this$static, handler){
  return $addCellPreviewHandler_0(this$static.presenter, handler);
}

function $addRangeChangeHandler(this$static, handler){
  return $addRangeChangeHandler_0(this$static.presenter, handler);
}

function $cellConsumesEventType(cell, eventType){
  var consumedEvents;
  consumedEvents = cell.consumedEvents;
  return !!consumedEvents && consumedEvents.contains_0(eventType);
}

function $checkRowBounds(this$static, row){
  if (!(row >= 0 && row < $getVisibleItemCount(this$static.presenter))) {
    throw new IndexOutOfBoundsException_1('Row index: ' + row + ', Row size: ' + $getCurrentState(this$static.presenter).rowCount);
  }
}

function $setFocus(this$static, focused){
  var elem;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static));
  !!elem && (focused?$focus(elem):$blur(elem));
}

function $setFocusable(this$static, elem, focusable){
  if (focusable) {
    $setTabIndex(elem, this$static.tabIndex_0);
  }
   else {
    $setTabIndex(elem, -1);
    $removeAttribute(elem, 'tabIndex');
    $removeAttribute(elem, 'accessKey');
  }
}

function $setKeyboardSelectionHandler(this$static, keyboardSelectionReg){
  if (this$static.keyboardSelectionReg) {
    $removeHandler(this$static.keyboardSelectionReg.real);
    this$static.keyboardSelectionReg = null;
  }
  !!keyboardSelectionReg && (this$static.keyboardSelectionReg = $addCellPreviewHandler_0(this$static.presenter, keyboardSelectionReg));
}

function $setKeyboardSelectionPolicy(this$static, policy){
  $setKeyboardSelectionPolicy_0(this$static.presenter, policy);
}

function $setRowCount(this$static, count){
  $setRowCount_1(this$static.presenter, count, true);
}

function $setRowCount_0(this$static, size_0, isExact){
  $setRowCount_1(this$static.presenter, size_0, isExact);
}

function $setRowData(this$static, start_0, values){
  $setRowData_1(this$static.presenter, start_0, values);
}

function $setRowData_0(this$static, values){
  $setRowCount(this$static, values.size_1());
  $setVisibleRange(this$static, new Range_1(0, values.size_1()));
  $setRowData_1(this$static.presenter, 0, values);
}

function $setSelectionModel(this$static, selectionModel){
  $setSelectionModel_0(this$static.presenter, selectionModel);
}

function $setVisibleRange(this$static, range){
  $setVisibleRange_0(this$static.presenter, range, false);
}

defineSeed(335, 336, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasData]));
_.getVisibleRange = function getVisibleRange(){
  return $getVisibleRange(this.presenter);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_5(event_0){
  var eventTarget, eventType, target;
  !impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0);
  $onBrowserEvent_4(impl_1, this, event_0);
  if (this.isRefreshing) {
    return;
  }
  eventTarget = event_0.srcElement;
  if (!is_0(eventTarget)) {
    return;
  }
  target = eventTarget;
  if (!isOrHasChildImpl(($clinit_DOM() , this.element), eventTarget)) {
    return;
  }
  $onBrowserEvent_3(this, event_0);
  $onBrowserEvent_3(this.widget, event_0);
  eventType = event_0.type;
  if ($equals_3('focus', eventType)) {
    this.isFocused = true;
    $onFocus(this);
  }
   else if ($equals_3('blur', eventType)) {
    this.isFocused = false;
    $onBlur(this);
  }
   else 
    $equals_3('keydown', eventType)?(this.isFocused = true):$equals_3('mousedown', eventType) && (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $isFocusable(impl_1, target)) && (this.isFocused = true);
  $onBrowserEvent2(this, event_0);
}
;
_.onUnload = function onUnload_0(){
  this.isFocused = false;
}
;
_.setFocus = function setFocus(focused){
  $setFocus(this, focused);
}
;
_.setRowCount = function setRowCount(size_0, isExact){
  $setRowCount_0(this, size_0, isExact);
}
;
_.setRowData = function setRowData(start_0, values){
  $setRowData(this, start_0, values);
}
;
_.isFocused = false;
_.isRefreshing = false;
_.tabIndex_0 = 0;
function $addColumn(this$static, col, headerString){
  $insertColumn(this$static, this$static.columns.size_0, col, new TextHeader_0(headerString));
}

function $buildRowValues(this$static, values, start_0, isRebuildingAllRows){
  var end, i, length_0, tableSectionBuilder, value_0;
  length_0 = values.size_1();
  end = start_0 + length_0;
  $start(this$static.tableBuilder, isRebuildingAllRows);
  for (i = start_0; i < end; i++) {
    value_0 = values.get_1(i - start_0);
    $buildRow(this$static.tableBuilder, value_0, i);
  }
  $coalesceCellProperties(this$static);
  tableSectionBuilder = $finish_0(this$static.tableBuilder);
  return tableSectionToSafeHtml(tableSectionBuilder);
}

function $checkColumnBounds(this$static, col){
  if (col < 0 || col >= this$static.columns.size_0) {
    throw new IndexOutOfBoundsException_1('Column index is out of bounds: ' + col);
  }
}

function $coalesceCellProperties(this$static){
  var cell, column, column$iterator;
  this$static.handlesSelection = false;
  this$static.isInteractive = false;
  for (column$iterator = $iterator_0($values(this$static.tableBuilder.idToCellMap)); column$iterator.val$outerIter.hasNext();) {
    column = dynamicCast($next_6(column$iterator), Q$HasCell);
    cell = column.getCell();
    cell.dependsOnSelection_0();
    cell.handlesSelection_0() && (this$static.handlesSelection = true);
    isColumnInteractive(column) && (this$static.isInteractive = true);
  }
}

function $createHeaders(this$static, isFooter){
  var section;
  section = isFooter?$buildFooter(this$static.footerBuilder):$buildHeader(this$static.headerBuilder);
  if (section) {
    $replaceAllRows(TABLE_IMPL, this$static, isFooter?this$static.tableFooter.section:this$static.tableHeader.section, tableSectionToSafeHtml(section));
    isFooter?$setFooterWidget(this$static.headerPanel, this$static.tableFooterContainer):$setHeaderWidget(this$static.headerPanel, this$static.tableHeaderContainer);
  }
   else {
    isFooter?$setFooterWidget(this$static.headerPanel, null):$setHeaderWidget(this$static.headerPanel, null);
  }
}

function $fireEventToCell(this$static, event_0, eventType, parentElem, rowValue, context, column){
  var cell, cellValue, cellWasEditing, col, fieldUpdater, index_0, valueUpdater, index_1, valueUpdater_0;
  cell = column.getCell();
  if (!$cellConsumesEventType(cell, eventType)) {
    return;
  }
  cellValue = column.getValue(rowValue);
  cellWasEditing = cell.isEditing_0(context, parentElem, cellValue);
  if (instanceOf(column, Q$Column)) {
    col = dynamicCast(column, Q$Column);
    index_1 = context.index_0;
    valueUpdater_0 = !col.fieldUpdater?null:new Column$1_0(col, index_1, rowValue);
    col.cell.onBrowserEvent(context, parentElem, col.getValue(rowValue), event_0, valueUpdater_0);
  }
   else {
    fieldUpdater = column.getFieldUpdater();
    index_0 = context.index_0;
    valueUpdater = !fieldUpdater?null:new AbstractCellTable$3_0(fieldUpdater, index_0, rowValue);
    cell.onBrowserEvent(context, parentElem, cellValue, event_0, valueUpdater);
  }
  this$static.cellIsEditing = cell.isEditing_0(context, parentElem, cellValue);
  cellWasEditing && !this$static.cellIsEditing && (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $resetFocus_1(new AbstractCellTable$4_0(this$static)));
}

function $getColumn(this$static, col){
  $checkColumnBounds(this$static, col);
  return dynamicCast($get_8(this$static.columns, col), Q$Column);
}

function $getFooter(this$static, index_0){
  return dynamicCast($get_8(this$static.footers, index_0), Q$Header);
}

function $getHeader(this$static, index_0){
  return dynamicCast($get_8(this$static.headers, index_0), Q$Header);
}

function $getKeyboardSelectedColumn(this$static){
  return ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn;
}

function $getKeyboardSelectedElement(td){
  var firstChild;
  if (!td) {
    return null;
  }
  if ($getCellId(td) != null) {
    return td;
  }
  firstChild = $getFirstChildElement(td);
  if (!!firstChild && td.childNodes.length == 1 && $equalsIgnoreCase('div', $getTagName(firstChild))) {
    return firstChild;
  }
  return td;
}

function $getKeyboardSelectedSubRow(this$static){
  return ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedSubrow;
}

function $getKeyboardSelectedTableCellElement(this$static){
  var cellCount, colIndex, column, rowIndex, tr;
  colIndex = ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn;
  if (colIndex < 0) {
    return null;
  }
  rowIndex = $getKeyboardSelectedRow(this$static.presenter);
  if (rowIndex < 0 || rowIndex >= this$static.tableData.section.rows.length) {
    return null;
  }
  tr = $getSubRowElement(this$static, rowIndex + $getVisibleRange(this$static.presenter).start_0, this$static.keyboardSelectedSubrow);
  if (tr) {
    cellCount = tr.cells.length;
    if (cellCount > 0) {
      column = colIndex < cellCount - 1?colIndex:cellCount - 1;
      return tr.cells[column];
    }
  }
  return null;
}

function $getSubRowElement(this$static, absRow, subrow){
  var curRow, domIndex, frameEnd, frameStart, offset, relRow, rowCount, rowValueIndex, rows_0, subrowIndex, subrowValueIndex;
  relRow = absRow - $getVisibleRange(this$static.presenter).start_0;
  $checkRowBounds(this$static, relRow);
  rows_0 = this$static.tableData.section.rows;
  rowCount = rows_0.length;
  if (rowCount == 0) {
    return null;
  }
  frameStart = 0;
  frameEnd = rowCount - 1;
  domIndex = relRow < frameEnd?relRow:frameEnd;
  while (domIndex >= frameStart && domIndex <= frameEnd) {
    curRow = rows_0[domIndex];
    rowValueIndex = $getRowValueIndex(this$static.tableBuilder, curRow);
    if (rowValueIndex == absRow) {
      subrowValueIndex = $getSubrowValueIndex(curRow);
      if (subrow != subrowValueIndex) {
        offset = subrow - subrowValueIndex;
        subrowIndex = domIndex + offset;
        if (subrowIndex >= rows_0.length) {
          return null;
        }
        curRow = rows_0[subrowIndex];
        if ($getRowValueIndex(this$static.tableBuilder, curRow) != absRow) {
          return null;
        }
      }
      return curRow;
    }
     else 
      rowValueIndex > absRow?(frameEnd = domIndex - 1):(frameStart = domIndex + 1);
    domIndex = ~~((frameStart + frameEnd) / 2);
  }
  return null;
}

function $insertColumn(this$static, beforeIndex, col, header){
  var cellEvents, consumedEvents, headerEvents;
  beforeIndex != this$static.columns.size_0 && $checkColumnBounds(this$static, beforeIndex);
  $add_15(this$static.headers, beforeIndex, header);
  $add_15(this$static.footers, beforeIndex, null);
  $add_15(this$static.columns, beforeIndex, col);
  beforeIndex <= this$static.keyboardSelectedColumn && (this$static.keyboardSelectedColumn = min_0(this$static.keyboardSelectedColumn + 1, this$static.columns.size_0 - 1));
  isColumnInteractive(col) && (this$static.keyboardSelectedColumn >= this$static.columns.size_0 || !isColumnInteractive(dynamicCast($get_8(this$static.columns, this$static.keyboardSelectedColumn), Q$HasCell))) && (this$static.keyboardSelectedColumn = beforeIndex);
  consumedEvents = new HashSet_0;
  cellEvents = col.cell.consumedEvents;
  !!cellEvents && $addAll_0(consumedEvents, cellEvents);
  if (header) {
    headerEvents = header.cell.consumedEvents;
    !!headerEvents && $addAll_0(consumedEvents, headerEvents);
  }
  $sinkEvents_0((!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , impl_1), this$static, consumedEvents);
  this$static.headersDirty = true;
  this$static.columnWidthsDirty = true;
  $ensurePendingState(this$static.presenter).redrawRequired = true;
}

function $onBlur(this$static){
  var td, tr;
  td = $getKeyboardSelectedTableCellElement(this$static);
  if (td) {
    tr = $getParentElement(td);
    $removeClassName(td, 'GPBYFDELG');
    $setRowStyleName(tr, 'GPBYFDEMG', 'GPBYFDENG', false);
  }
}

function $onBrowserEvent2(this$static, event_0){
  var absRow, cellParent, clientX, clientY, col, column, columnParent, context, cur, eventTarget, eventType, footerColumnParent, footerParent, header, headerColumnParent, headerIndex, headerParent, isHeader, isSelect, isSelectionHandled, maybeTableCell, previewEvent, relRow, rowBottom, rowHeight, rowLeft, rowRight, rowTop, rowWidth, subrow, tagName, target, targetTableCell, targetTableRow, targetTableSection, tbody, tfoot, thead, unhover, value_0;
  eventTarget = event_0.srcElement;
  if (!is_0(eventTarget)) {
    return;
  }
  target = event_0.srcElement;
  tbody = this$static.tableData.section;
  tfoot = this$static.tableFooter.section;
  thead = this$static.tableHeader.section;
  targetTableSection = null;
  targetTableCell = null;
  cellParent = null;
  headerParent = null;
  headerColumnParent = null;
  footerParent = null;
  footerColumnParent = null;
  maybeTableCell = null;
  cur = target;
  $equalsIgnoreCase('td', $getTagName(target)) && $getCellId($getFirstChildElement(target)) != null && (cur = $getFirstChildElement(target));
  while (!!cur && !targetTableSection) {
    if (cur == tbody || cur == tfoot || cur == thead) {
      targetTableSection = cur;
      if (maybeTableCell) {
        targetTableCell = maybeTableCell;
        break;
      }
    }
    tagName = $getTagName(cur);
    ($equalsIgnoreCase('td', tagName) || $equalsIgnoreCase('th', tagName)) && (maybeTableCell = cur);
    !cellParent && $getCellId(cur) != null && (cellParent = cur);
    !headerParent && $getElementAttribute(cur, '__gwt_header') != null && (headerParent = cur);
    !footerParent && $getElementAttribute(cur, '__gwt_header') != null && (footerParent = cur);
    !headerColumnParent && $getElementAttribute(cur, '__gwt_column') != null && (headerColumnParent = cur);
    !footerColumnParent && $getElementAttribute(cur, '__gwt_column') != null && (footerColumnParent = cur);
    cur = $getParentElement(cur);
  }
  if (!targetTableCell) {
    return;
  }
  this$static.legacyRenderRowValues && (cellParent = $getFirstChildElement(targetTableCell));
  targetTableRow = $getParentElement(targetTableCell);
  eventType = event_0.type;
  isSelect = $equals_3('click', eventType) || $equals_3('keydown', eventType) && $eventGetKeyCode(event_0) == 13;
  col = targetTableCell.cellIndex;
  if (targetTableSection == thead || targetTableSection == tfoot) {
    isHeader = targetTableSection == thead;
    headerParent = isHeader?headerParent:footerParent;
    columnParent = isHeader?headerColumnParent:footerColumnParent;
    if (headerParent) {
      header = isHeader?$getHeader_0(this$static.headerBuilder, headerParent):$getHeader_0(this$static.footerBuilder, footerParent);
      if (header) {
        headerIndex = isHeader?__parseAndValidateInt($getAttribute(targetTableRow, '__gwt_header_row')):__parseAndValidateInt($getAttribute(targetTableRow, '__gwt_header_row'));
        context = new Cell$Context_0(headerIndex, col, header.text_0);
        $cellConsumesEventType(header.cell, eventType) && $onBrowserEvent(header.cell, context, headerParent, header.text_0, event_0, header.updater);
      }
    }
    isSelect && !!columnParent && (isHeader?$getColumn_1(this$static.headerBuilder, columnParent):$getColumn_1(this$static.footerBuilder, columnParent));
  }
   else if (targetTableSection == tbody) {
    absRow = $getRowValueIndex(this$static.tableBuilder, targetTableRow);
    relRow = absRow - $getVisibleRange(this$static.presenter).start_0;
    subrow = $getSubrowValueIndex(targetTableRow);
    if (!this$static.skipRowHoverCheck) {
      if ($equals_3('mouseover', eventType)) {
        !!this$static.hoveringRow && isOrHasChildImpl(this$static.tableData.section, this$static.hoveringRow) && $setRowHover(this$static, this$static.hoveringRow, false);
        this$static.hoveringRow = targetTableRow;
        $setRowHover(this$static, this$static.hoveringRow, true);
      }
       else if ($equals_3('mouseout', eventType) && !!this$static.hoveringRow) {
        unhover = true;
        if (!this$static.skipRowHoverFloatElementCheck) {
          clientX = ($eventGetSubPixelClientX(event_0) | 0) + $getScrollLeft_0($doc);
          clientY = ($eventGetSubPixelClientY(event_0) | 0) + $getScrollTop($doc);
          rowLeft = $getAbsoluteLeft(this$static.hoveringRow);
          rowTop = $getAbsoluteTop(this$static.hoveringRow);
          rowWidth = $getSubPixelOffsetWidth(this$static.hoveringRow) | 0;
          rowHeight = $getSubPixelOffsetHeight(this$static.hoveringRow) | 0;
          rowBottom = rowTop + rowHeight;
          rowRight = rowLeft + rowWidth;
          unhover = clientX < rowLeft || clientX > rowRight || clientY < rowTop || clientY > rowBottom;
        }
        if (unhover) {
          $setRowHover(this$static, this$static.hoveringRow, false);
          this$static.hoveringRow = null;
        }
      }
    }
    if (!(relRow >= 0 && relRow < $getVisibleItemCount(this$static.presenter))) {
      return;
    }
    isSelectionHandled = this$static.handlesSelection || ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , BOUND_TO_SELECTION) == this$static.presenter.keyboardSelectionPolicy;
    value_0 = ($checkRowBounds(this$static, relRow) , $getVisibleItem(this$static.presenter, relRow));
    context = new Cell$Context_1(absRow, col, value_0, subrow);
    previewEvent = fire_5(this$static, event_0, this$static, context, value_0, this$static.cellIsEditing, isSelectionHandled);
    if (!!cellParent && !previewEvent.isCanceled) {
      this$static.legacyRenderRowValues?(column = dynamicCast($get_8(this$static.columns, col), Q$HasCell)):(column = $getColumn_0(this$static.tableBuilder, cellParent));
      !!column && $fireEventToCell(this$static, event_0, eventType, cellParent, value_0, context, column);
    }
  }
}

function $onFocus(this$static){
  var td, tr;
  td = $getKeyboardSelectedTableCellElement(this$static);
  if (td) {
    tr = $getParentElement(td);
    $addClassName(td, 'GPBYFDELG');
    $setRowStyleName(tr, 'GPBYFDEMG', 'GPBYFDENG', true);
  }
}

function $refreshColumnWidths(this$static){
  var columnCount, i, width_0;
  columnCount = max_0(this$static.columns.size_0, this$static.maxColumnIndex + 1);
  for (i = 0; i < columnCount; i++) {
    $doSetColumnWidth(this$static, i, (width_0 = null , this$static.columns.size_0 > i && (width_0 = dynamicCast(this$static.columnWidths.get_2($get_8(this$static.columns, i)), Q$String)) , width_0 == null && (width_0 = dynamicCast(this$static.columnWidthsByIndex.get_2(valueOf_1(i)), Q$String)) , width_0));
  }
}

function $refreshHeadersAndColumnsImpl(this$static){
  var wereHeadersDirty, columnCount;
  if (this$static.columnWidthsDirty) {
    this$static.columnWidthsDirty = false;
    $refreshColumnWidths(this$static);
    columnCount = max_0(this$static.columns.size_0, this$static.maxColumnIndex + 1);
    $hideUnusedColumns(this$static.tableHeader, columnCount);
    $hideUnusedColumns(this$static.tableData, columnCount);
    $hideUnusedColumns(this$static.tableFooter, columnCount);
  }
  wereHeadersDirty = this$static.headersDirty;
  this$static.headersDirty = false;
  (wereHeadersDirty || !this$static.headerRefreshDisabled) && $createHeaders(this$static, false);
  (wereHeadersDirty || !this$static.footerRefreshDisabled) && $createHeaders(this$static, true);
}

function $replaceAllChildren(this$static, values, html){
  $refreshHeadersAndColumnsImpl(this$static);
  (!html || !this$static.legacyRenderRowValues) && (html = $buildRowValues(this$static, values, $getVisibleRange(this$static.presenter).start_0, true));
  $replaceAllRows(TABLE_IMPL, this$static, this$static.tableData.section, (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $processHtml(impl_1, html)));
}

function $replaceChildren(this$static, values, start_0, html){
  $refreshHeadersAndColumnsImpl(this$static);
  (!html || !this$static.legacyRenderRowValues) && (html = $buildRowValues(this$static, values, $getVisibleRange(this$static.presenter).start_0 + start_0, false));
  $replaceChildren_0(TABLE_IMPL, this$static, this$static.tableData.section, (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $processHtml(impl_1, html)), start_0, values.size_0);
}

function $resetFocusOnCell(this$static){
  var col, column, context, elem, row, value_0, cellValue, cell;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static));
  if (!elem) {
    return false;
  }
  row = $getKeyboardSelectedRow(this$static.presenter);
  col = ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn;
  value_0 = ($checkRowBounds(this$static, row) , $getVisibleItem(this$static.presenter, row));
  context = new Cell$Context_0(row + $getVisibleRange(this$static.presenter).start_0, col, value_0);
  column = $getColumn_0(this$static.tableBuilder, elem);
  if (!column) {
    return false;
  }
  cellValue = column.getValue(value_0);
  cell = column.getCell();
  cell.resetFocus(context, elem, cellValue);
  return false;
}

function $setColumnWidth_0(this$static, column, width_0){
  this$static.columnWidths.put(column, width_0);
  $updateColumnWidthImpl(this$static, column, width_0);
}

function $setKeyboardSelected(this$static, index_0, selected, stealFocus){
  var cells_0, focusable, i, isKeyboardSelected, keyboardColumn, subrow, td, tr, updatedSelection;
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy || !(index_0 >= 0 && index_0 < $getVisibleItemCount(this$static.presenter))) {
    return;
  }
  subrow = this$static.lastKeyboardSelectedSubrow;
  if (selected) {
    subrow = this$static.keyboardSelectedSubrow;
    this$static.lastKeyboardSelectedSubrow = this$static.keyboardSelectedSubrow;
  }
  tr = $getSubRowElement(this$static, index_0 + $getVisibleRange(this$static.presenter).start_0, subrow);
  if (!tr) {
    return;
  }
  updatedSelection = !selected || this$static.isFocused || stealFocus;
  $setRowStyleName(tr, 'GPBYFDEMG', 'GPBYFDENG', selected);
  cells_0 = tr.cells;
  keyboardColumn = min_0(DISABLED == this$static.presenter.keyboardSelectionPolicy?-1:this$static.keyboardSelectedColumn, cells_0.length - 1);
  for (i = 0; i < cells_0.length; i++) {
    td = cells_0[i];
    isKeyboardSelected = i == keyboardColumn;
    setStyleName(td, 'GPBYFDELG', updatedSelection && selected && isKeyboardSelected);
    focusable = $getKeyboardSelectedElement(td);
    $setFocusable(this$static, focusable, selected && isKeyboardSelected);
    selected && stealFocus && !this$static.cellIsEditing && isKeyboardSelected && (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $resetFocus_1(new AbstractCellTable$2_0(focusable)));
  }
}

function $setKeyboardSelectedColumn(this$static, column, stealFocus){
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.presenter.keyboardSelectionPolicy) {
    return;
  }
  this$static.keyboardSelectedColumn = column;
  $setKeyboardSelectedRow(this$static, $getKeyboardSelectedRow(this$static.presenter), this$static.keyboardSelectedSubrow, stealFocus);
}

function $setKeyboardSelectedRow(this$static, row, subrow, stealFocus){
  this$static.keyboardSelectedSubrow = subrow;
  $setKeyboardSelectedRow_2(this$static.presenter, row, stealFocus, true);
}

function $setKeyboardSelectedRow_0(this$static, row, stealFocus){
  this$static.keyboardSelectedSubrow = 0;
  $setKeyboardSelectedRow_2(this$static.presenter, row, stealFocus, true);
}

function $setRowHover(this$static, tr, isHovering){
  this$static.skipRowHoverStyleUpdate || $setRowStyleName(tr, 'GPBYFDEJG', 'GPBYFDEKG', isHovering);
  new RowHoverEvent_0;
}

function $setRowStyleName(tr, rowStyle, cellStyle, add_0){
  var cells_0, i;
  setStyleName(tr, rowStyle, add_0);
  cells_0 = tr.cells;
  for (i = 0; i < cells_0.length; i++) {
    setStyleName(cells_0[i], cellStyle, add_0);
  }
}

function $updateColumnWidthImpl(this$static, column, width_0){
  var columnCount, i;
  columnCount = this$static.columns.size_0;
  for (i = 0; i < columnCount; i++) {
    $get_8(this$static.columns, i) === column && $doSetColumnWidth(this$static, i, width_0);
  }
}

function AbstractCellTable_0(widget){
  var eventTypes, eventTypes_0;
  $initWidget(this, widget);
  this.presenter = new HasDataPresenter_0(this, new AbstractHasData$View_0(this));
  eventTypes = new HashSet_0;
  $add_17(eventTypes, 'focus');
  $add_17(eventTypes, 'blur');
  $add_17(eventTypes, 'keydown');
  $add_17(eventTypes, 'keyup');
  $add_17(eventTypes, 'click');
  $add_17(eventTypes, 'mousedown');
  $sinkEvents_0((!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , impl_1), this, eventTypes);
  $addCellPreviewHandler(this, new DefaultSelectionEventManager_0);
  $setKeyboardSelectionHandler(this, new AbstractHasData$DefaultKeyboardSelectionHandler_0(this));
  this.columns = new ArrayList_0;
  this.columnWidths = new HashMap_0;
  this.columnWidthsByIndex = new HashMap_0;
  this.maxColumnIndex = -1;
  this.footers = new ArrayList_0;
  this.headers = new ArrayList_0;
  this.keyboardSelectedColumn = 0;
  this.keyboardSelectedSubrow = 0;
  this.lastKeyboardSelectedSubrow = 0;
  this.legacyRenderRowValues = true;
  this.sortList = new ColumnSortList_0;
  !TABLE_IMPL && (TABLE_IMPL = new AbstractCellTable$ImplTrident_0);
  !template_0 && (template_0 = new AbstractCellTable_TemplateImpl_0);
  $setClassName(($clinit_DOM() , this.element), 'GPBYFDEIH');
  eventTypes_0 = new HashSet_0;
  $add_17(eventTypes_0, 'mouseover');
  $add_17(eventTypes_0, 'mouseout');
  $sinkEvents_0((!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , impl_1), this, eventTypes_0);
  this.tableBuilder = new DefaultCellTableBuilder_0(this);
  this.headerBuilder = new DefaultHeaderOrFooterBuilder_0(this, false);
  this.footerBuilder = new DefaultHeaderOrFooterBuilder_0(this, true);
  $setKeyboardSelectionHandler(this, new AbstractCellTable$CellTableKeyboardSelectionHandler_0(this));
}

function isColumnInteractive(column){
  var consumedEvents;
  consumedEvents = column.getCell().consumedEvents;
  return !!consumedEvents && consumedEvents.coll.size_1() > 0;
}

function tableSectionToSafeHtml(section){
  var rawHtml;
  if (!section) {
    throw new IllegalArgumentException_1('Only HtmlTableSectionBuilder is supported at this time');
  }
  rawHtml = $asSafeHtml(section.delegate).html;
  rawHtml = $substring_0(rawHtml, 7, rawHtml.length - 8);
  return $clinit_SafeHtmlUtils() , new SafeHtmlString_0(rawHtml);
}

defineSeed(334, 335, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasData]));
_.cellIsEditing = false;
_.columnWidthsDirty = false;
_.footerRefreshDisabled = false;
_.handlesSelection = false;
_.headerRefreshDisabled = false;
_.headersDirty = false;
_.isInteractive = false;
_.keyboardSelectedColumn = 0;
_.keyboardSelectedSubrow = 0;
_.lastKeyboardSelectedSubrow = 0;
_.legacyRenderRowValues = false;
_.maxColumnIndex = 0;
_.skipRowHoverCheck = false;
_.skipRowHoverFloatElementCheck = false;
_.skipRowHoverStyleUpdate = false;
var TABLE_IMPL, template_0;
function AbstractCellTable$2_0(val$focusable){
  this.val$focusable = val$focusable;
}

defineSeed(339, 1, {}, AbstractCellTable$2_0);
_.execute_0 = function execute_6(){
  $focus(this.val$focusable);
}
;
function AbstractCellTable$3_0(val$fieldUpdater, val$index, val$rowValue){
  this.val$fieldUpdater = val$fieldUpdater;
  this.val$index = val$index;
  this.val$rowValue = val$rowValue;
}

defineSeed(340, 1, {}, AbstractCellTable$3_0);
_.update_0 = function update(value_0){
  this.val$fieldUpdater.update(this.val$index, this.val$rowValue, value_0);
}
;
_.val$index = 0;
function AbstractCellTable$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(341, 1, {}, AbstractCellTable$4_0);
_.execute_0 = function execute_7(){
  $setFocus(this.this$0, true);
}
;
function $onCellPreview(this$static, event_0){
  var eventType, isFocusable, nativeEvent, relRow, target, keyboardPagingPolicy, keyboardPagingPolicy_0;
  nativeEvent = event_0.nativeEvent;
  eventType = event_0.nativeEvent.type;
  if ($equals_3('keydown', eventType) && !event_0.isCellEditing) {
    switch ($eventGetKeyCode(nativeEvent)) {
      case 40:
        $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) + 1);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 38:
        $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) - 1);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 34:
        keyboardPagingPolicy = this$static.display_0.presenter.keyboardPagingPolicy;
        ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == keyboardPagingPolicy?$setKeyboardSelectedRow_1(this$static, $getVisibleRange(this$static.display_0.presenter).length_0):INCREASE_RANGE == keyboardPagingPolicy && $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) + 30);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 33:
        keyboardPagingPolicy_0 = this$static.display_0.presenter.keyboardPagingPolicy;
        ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == keyboardPagingPolicy_0?$setKeyboardSelectedRow_1(this$static, -$getVisibleRange(this$static.display_0.presenter).length_0):INCREASE_RANGE == keyboardPagingPolicy_0 && $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) - 30);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 36:
        $setKeyboardSelectedRow_1(this$static, -$getVisibleRange(this$static.display_0.presenter).start_0);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 35:
        $setKeyboardSelectedRow_1(this$static, $getCurrentState(this$static.display_0.presenter).rowCount - 1);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      case 32:
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
    }
  }
   else if ($equals_3('click', eventType)) {
    relRow = event_0.context.index_0 - $getVisibleRange(this$static.display_0.presenter).start_0;
    target = event_0.nativeEvent.srcElement;
    isFocusable = (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $isFocusable(impl_1, target));
    $setKeyboardSelectedRow_0(this$static.display_0, relRow, !isFocusable);
  }
   else if ($equals_3('focus', eventType)) {
    relRow = event_0.context.index_0 - $getVisibleRange(this$static.display_0.presenter).start_0;
    if ($getKeyboardSelectedRow(this$static.display_0.presenter) != relRow) {
      $setKeyboardSelectedRow_0(this$static.display_0, relRow, false);
      return;
    }
  }
}

function $setKeyboardSelectedRow_1(this$static, row){
  $setKeyboardSelectedRow_0(this$static.display_0, row, true);
}

function AbstractHasData$DefaultKeyboardSelectionHandler_0(display){
  this.display_0 = display;
}

defineSeed(343, 1, makeCastMap([Q$EventHandler, Q$CellPreviewEvent$Handler]), AbstractHasData$DefaultKeyboardSelectionHandler_0);
_.onCellPreview = function onCellPreview(event_0){
  $onCellPreview(this, event_0);
}
;
function $findInteractiveColumn(this$static, start_0, reverse){
  var i, i0;
  if (this$static.table.isInteractive) {
    if (reverse) {
      for (i0 = start_0 - 1; i0 >= 0; i0--) {
        if (isColumnInteractive($getColumn(this$static.table, i0))) {
          return i0;
        }
      }
      for (i = this$static.table.columns.size_0 - 1; i >= start_0; i--) {
        if (isColumnInteractive($getColumn(this$static.table, i))) {
          return i;
        }
      }
    }
     else {
      for (i0 = start_0 + 1; i0 < this$static.table.columns.size_0; i0++) {
        if (isColumnInteractive($getColumn(this$static.table, i0))) {
          return i0;
        }
      }
      for (i = 0; i <= start_0; i++) {
        if (isColumnInteractive($getColumn(this$static.table, i))) {
          return i;
        }
      }
    }
  }
   else {
    return 0;
  }
  return 0;
}

function AbstractCellTable$CellTableKeyboardSelectionHandler_0(table){
  AbstractHasData$DefaultKeyboardSelectionHandler_0.call(this, table);
  this.table = table;
}

defineSeed(342, 343, makeCastMap([Q$EventHandler, Q$CellPreviewEvent$Handler]), AbstractCellTable$CellTableKeyboardSelectionHandler_0);
_.onCellPreview = function onCellPreview_0(event_0){
  var col, eventType, keyCode, nativeEvent, nextColumn, oldColumn, oldRow, prevColumn, relRow, stealFocus, subrow, target;
  nativeEvent = event_0.nativeEvent;
  eventType = event_0.nativeEvent.type;
  if ($equals_3('keydown', eventType) && !event_0.isCellEditing) {
    oldRow = $getKeyboardSelectedRow(this.table.presenter);
    oldColumn = $getKeyboardSelectedColumn(this.table);
    keyCode = $eventGetKeyCode(nativeEvent);
    if (keyCode == 39) {
      nextColumn = $findInteractiveColumn(this, oldColumn, false);
      if (nextColumn <= oldColumn) {
        $setKeyboardSelectedRow_0(this.table, oldRow + 1, true);
        if ($getKeyboardSelectedRow(this.table.presenter) != oldRow) {
          $setKeyboardSelectedColumn(this.table, nextColumn, true);
          event_0.isCanceled = true;
          $eventPreventDefault(event_0.nativeEvent);
          return;
        }
      }
       else {
        $setKeyboardSelectedColumn(this.table, nextColumn, true);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      }
    }
     else if (keyCode == 37) {
      prevColumn = $findInteractiveColumn(this, oldColumn, true);
      if (prevColumn >= oldColumn) {
        $setKeyboardSelectedRow_0(this.table, oldRow - 1, true);
        if ($getKeyboardSelectedRow(this.table.presenter) != oldRow) {
          $setKeyboardSelectedColumn(this.table, prevColumn, true);
          event_0.isCanceled = true;
          $eventPreventDefault(event_0.nativeEvent);
          return;
        }
      }
       else {
        $setKeyboardSelectedColumn(this.table, prevColumn, true);
        event_0.isCanceled = true;
        $eventPreventDefault(event_0.nativeEvent);
        return;
      }
    }
  }
   else if ($equals_3('click', eventType) || $equals_3('focus', eventType)) {
    col = event_0.context.column;
    relRow = event_0.context.index_0 - $getVisibleRange(this.table.presenter).start_0;
    subrow = event_0.context.subindex;
    if ($getKeyboardSelectedColumn(this.table) != col || $getKeyboardSelectedRow(this.table.presenter) != relRow || $getKeyboardSelectedSubRow(this.table) != subrow) {
      stealFocus = false;
      if ($equals_3('click', eventType)) {
        target = event_0.nativeEvent.srcElement;
        stealFocus = (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , !$isFocusable(impl_1, target));
      }
      $setKeyboardSelectedRow(this.table, relRow, subrow, stealFocus);
      $setKeyboardSelectedColumn(this.table, col, stealFocus);
    }
    return;
  }
  $onCellPreview(this, event_0);
}
;
function $convertToSectionElement(this$static, table, sectionTag, rowHtml){
  var tableElem, sb, sb_0, sb_1;
  $clinit_DOM();
  setEventListener_0(this$static.tmpElem, table);
  sectionTag = sectionTag.toLowerCase();
  if ($equals_3('tbody', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb = new StringBuilder_0 , $append_2(sb.impl, '<table><tbody>') , $append_11(sb, rowHtml.html) , $append_2(sb.impl, '<\/tbody><\/table>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string)).html);
  }
   else if ($equals_3('thead', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb_0 = new StringBuilder_0 , $append_2(sb_0.impl, '<table><thead>') , $append_11(sb_0, rowHtml.html) , $append_2(sb_0.impl, '<\/thead><\/table>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_0.impl.string)).html);
  }
   else if ($equals_3('tfoot', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb_1 = new StringBuilder_0 , $append_2(sb_1.impl, '<table><tfoot>') , $append_11(sb_1, rowHtml.html) , $append_2(sb_1.impl, '<\/tfoot><\/table>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb_1.impl.string)).html);
  }
   else {
    throw new IllegalArgumentException_1('Invalid table section tag: ' + sectionTag);
  }
  tableElem = $getFirstChildElement(this$static.tmpElem);
  setEventListener_0(this$static.tmpElem, null);
  if ($equals_3('tbody', sectionTag)) {
    return tableElem.tBodies[0];
  }
   else if ($equals_3('thead', sectionTag)) {
    return tableElem.tHead;
  }
   else if ($equals_3('tfoot', sectionTag)) {
    return tableElem.tFoot;
  }
   else {
    throw new IllegalArgumentException_1('Invalid table section tag: ' + sectionTag);
  }
}

function $replaceAllRows(this$static, table, section, html){
  $isAttached(table) || ($clinit_DOM() , setEventListener_0(table.element, table));
  $getParentElement(section);
  $getNextSiblingElement(section);
  $replaceAllRowsImplLegacy(this$static, table, section, html);
  $isAttached(table) || ($clinit_DOM() , setEventListener_0(table.element, null));
}

function $replaceChildren_0(this$static, table, section, html, startIndex, childCount){
  var absEndIndex, count, insertBefore, newChild, newSection, next;
  $isAttached(table) || ($clinit_DOM() , setEventListener_0(table.element, table));
  $getParentElement(section);
  $getNextSiblingElement(section);
  absEndIndex = $getVisibleRange(table.presenter).start_0 + startIndex + childCount;
  insertBefore = $getSubRowElement(table, startIndex + $getVisibleRange(table.presenter).start_0, 0);
  if (table.legacyRenderRowValues) {
    count = 0;
    while (!!insertBefore && count < childCount) {
      next = $getNextSiblingElement(insertBefore);
      section.removeChild(insertBefore);
      insertBefore = !next?null:next;
      ++count;
    }
  }
   else {
    while (!!insertBefore && $getRowValueIndex(table.tableBuilder, insertBefore) < absEndIndex) {
      next = $getNextSiblingElement(insertBefore);
      section.removeChild(insertBefore);
      insertBefore = !next?null:next;
    }
  }
  newSection = $convertToSectionElement(this$static, table, $getTagName(section), html);
  newChild = $getFirstChildElement(newSection);
  while (newChild) {
    next = $getNextSiblingElement(newChild);
    section.insertBefore(newChild, insertBefore);
    newChild = next;
  }
  $isAttached(table) || ($clinit_DOM() , setEventListener_0(table.element, null));
}

defineSeed(344, 1, {});
function $replaceAllRowsImplLegacy(this$static, table, section, html){
  var child, newSection, next;
  child = $getFirstChildElement(section);
  while (child) {
    next = $getNextSiblingElement(child);
    section.removeChild(child);
    child = next;
  }
  newSection = $convertToSectionElement(this$static, table, $getTagName(section), html);
  child = $getFirstChildElement(newSection);
  while (child) {
    next = $getNextSiblingElement(child);
    section.appendChild(child);
    child = next;
  }
}

function AbstractCellTable$ImplTrident_0(){
  this.tmpElem = $createElement($doc, 'div');
}

defineSeed(345, 344, {}, AbstractCellTable$ImplTrident_0);
function $buildRow(this$static, rowValue, absRowIndex){
  this$static.rowIndex = absRowIndex;
  this$static.subrowIndex = 0;
  $buildRowImpl(this$static, rowValue, absRowIndex);
}

function $finish_0(this$static){
  while (this$static.tbody.delegate_0.stack_0.size_0 > 0) {
    $end_0(this$static.tbody.delegate_0, 'tbody');
  }
  return this$static.tbody;
}

function $getCellId(elem){
  var cellId;
  if (!elem) {
    return null;
  }
  cellId = $getAttribute(elem, '__gwt_cell');
  return cellId == null || cellId.length == 0?null:cellId;
}

function $getColumn_0(this$static, elem){
  var cellId;
  cellId = $getCellId(elem);
  return cellId == null?null:dynamicCast(this$static.idToCellMap.get_2(cellId), Q$HasCell);
}

function $getRowValueIndex(this$static, row){
  try {
    return __parseAndValidateInt($getAttribute(row, '__gwt_row'));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$NumberFormatException)) {
      return row.sectionRowIndex + $getVisibleRange(this$static.cellTable.presenter).start_0;
    }
     else 
      throw unwrap($e0);
  }
}

function $getSubrowValueIndex(row){
  try {
    return __parseAndValidateInt($getAttribute(row, '__gwt_subrow'));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$NumberFormatException)) {
      return 0;
    }
     else 
      throw unwrap($e0);
  }
}

function $renderCell(this$static, builder, context, column, rowValue){
  var cellBuilder, cellId;
  cellId = dynamicCast(this$static.cellToIdMap.get_2(column), Q$String);
  if (cellId == null) {
    cellId = 'cell-' + $createUniqueId($doc);
    this$static.idToCellMap.put(cellId, column);
    this$static.cellToIdMap.put(column, cellId);
  }
  $attribute_0(builder.delegate, '__gwt_cell', cellId);
  cellBuilder = new SafeHtmlBuilder_0;
  column?column.cell.render(context, column.getValue(rowValue), cellBuilder):null.nullMethod(null.nullMethod());
  $html(builder, new SafeHtmlString_0(cellBuilder.sb.impl.string));
}

function $start(this$static, isRebuildingAllRows){
  this$static.tbody = $startTableSection((!instance_0 && (instance_0 = new HtmlBuilderFactory_0) , new HtmlBuilderImpl_0), 'tbody');
  if (isRebuildingAllRows) {
    this$static.cellToIdMap.clear_0();
    this$static.idToCellMap.clear_0();
  }
}

function $startRow(this$static){
  var row;
  while (this$static.tbody.delegate_0.stack_0.size_0 > 1) {
    $end(this$static.tbody.delegate_0);
  }
  if (this$static.tbody.delegate_0.stack_0.size_0 < 1) {
    throw new IllegalStateException_1('Cannot start a row.  Did you call TableRowBuilder.end() too many times?');
  }
  row = $startTR(this$static.tbody.delegate);
  $attribute_1(row, '__gwt_row', this$static.rowIndex);
  $attribute_1(row, '__gwt_subrow', this$static.subrowIndex);
  ++this$static.subrowIndex;
  return row;
}

defineSeed(346, 1, {});
_.rowIndex = 0;
_.subrowIndex = 0;
function AbstractCellTable_TemplateImpl_0(){
}

defineSeed(347, 1, {}, AbstractCellTable_TemplateImpl_0);
function $addHandler_1(this$static, handler, type_0){
  return $addHandler_0(this$static.hasData, handler, type_0);
}

function $renderRowValues(this$static){
  var sb;
  try {
    sb = new SafeHtmlBuilder_0;
    this$static.hasData.legacyRenderRowValues = false;
    return new SafeHtmlString_0(sb.sb.impl.string);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$UnsupportedOperationException)) {
      return null;
    }
     else 
      throw unwrap($e0);
  }
}

function $replaceAllChildren_0(this$static, values, stealFocus){
  var elem, html;
  html = $renderRowValues(this$static, $getVisibleRange(this$static.hasData.presenter));
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  this$static.wasFocused = this$static.hasData.isFocused;
  this$static.hasData.isRefreshing = true;
  $replaceAllChildren(this$static.hasData, values, html);
  this$static.hasData.isRefreshing = false;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.hasData));
  if (elem) {
    $setFocusable(this$static.hasData, elem, true);
    this$static.hasData.isFocused && $onFocus(this$static.hasData);
  }
  $fireEvent_0(this$static.hasData, new AbstractHasData$View$2_0(unmodifiableList($getCurrentState(this$static.hasData.presenter).rowData)));
}

function $replaceChildren_1(this$static, values, start_0, stealFocus){
  var elem, html;
  html = $renderRowValues(this$static, $getVisibleRange(this$static.hasData.presenter).start_0 + start_0);
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  this$static.wasFocused = this$static.hasData.isFocused;
  this$static.hasData.isRefreshing = true;
  $replaceChildren(this$static.hasData, values, start_0, html);
  this$static.hasData.isRefreshing = false;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.hasData));
  if (elem) {
    $setFocusable(this$static.hasData, elem, true);
    this$static.hasData.isFocused && $onFocus(this$static.hasData);
  }
  $fireEvent_0(this$static.hasData, new AbstractHasData$View$2_0(unmodifiableList($getCurrentState(this$static.hasData.presenter).rowData)));
}

function $resetFocus_0(this$static){
  this$static.wasFocused && (!impl_1 && (impl_1 = new CellBasedWidgetImplTrident_0) , $resetFocus_1(new AbstractHasData$View$1_0(this$static)));
}

function $setKeyboardSelected_0(this$static, index_0, seleted, stealFocus){
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  $setKeyboardSelected(this$static.hasData, index_0, seleted, stealFocus);
}

function $setLoadingState(this$static, state){
  this$static.hasData.isRefreshing = true;
  $onLoadingStateChanged(this$static.hasData, state);
  this$static.hasData.isRefreshing = false;
}

function AbstractHasData$View_0(hasData){
  this.hasData = hasData;
}

defineSeed(348, 1, {}, AbstractHasData$View_0);
_.wasFocused = false;
function AbstractHasData$View$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(349, 1, {}, AbstractHasData$View$1_0);
_.execute_0 = function execute_8(){
  var elem;
  if (!$resetFocusOnCell(this.this$1.hasData)) {
    elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this.this$1.hasData));
    !!elem && $focus(elem);
  }
}
;
function AbstractHasData$View$2_0($anonymous0){
  ValueChangeEvent_0.call(this, $anonymous0);
}

defineSeed(350, 257, {}, AbstractHasData$View$2_0);
function $buildFooter(this$static){
  if (!this$static.isFooter) {
    throw new UnsupportedOperationException_1('Cannot build footer because this builder is designated to build a header');
  }
  return $buildHeaderOrFooter(this$static);
}

function $buildHeader(this$static){
  if (this$static.isFooter) {
    throw new UnsupportedOperationException_1('Cannot build header because this builder is designated to build a footer');
  }
  return $buildHeaderOrFooter(this$static);
}

function $buildHeaderOrFooter(this$static){
  this$static.section = this$static.isFooter?$startTableSection((!instance_0 && (instance_0 = new HtmlBuilderFactory_0) , new HtmlBuilderImpl_0), 'tfoot'):$startTableSection((!instance_0 && (instance_0 = new HtmlBuilderFactory_0) , new HtmlBuilderImpl_0), 'thead');
  $clear_0(this$static.idToHeaderMap);
  this$static.idToColumnMap.clear_0();
  this$static.rowIndex = 0;
  if (!$buildHeaderOrFooterImpl(this$static)) {
    return null;
  }
  while (this$static.section.delegate_0.stack_0.size_0 > 0) {
    $end(this$static.section.delegate_0);
  }
  return this$static.section;
}

function $enableColumnHandlers(this$static, builder, column){
  var columnId;
  columnId = 'column-' + $createUniqueId($doc);
  this$static.idToColumnMap.put(columnId, column);
  $attribute_0(builder.delegate, '__gwt_column', columnId);
}

function $getColumn_1(this$static, elem){
  var cellId;
  cellId = $getElementAttribute(elem, '__gwt_column');
  return cellId == null?null:dynamicCast(this$static.idToColumnMap.get_2(cellId), Q$Column);
}

function $getElementAttribute(elem, attribute){
  var value_0;
  if (!elem) {
    return null;
  }
  value_0 = $getAttribute(elem, attribute);
  return value_0 == null || value_0.length == 0?null:value_0;
}

function $getHeader_0(this$static, elem){
  var headerId;
  headerId = $getElementAttribute(elem, '__gwt_header');
  return headerId == null?null:dynamicCast($getValue(this$static.idToHeaderMap, headerId), Q$Header);
}

function $getSortIcon(this$static){
  var proto;
  if (!this$static.sortDescIconHtml) {
    proto = create_2(($clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridSortDescendingInitializer() , dataGridSortDescending));
    this$static.sortDescIconHtml = ($clinit_SafeHtmlUtils() , new SafeHtmlString_0($getSafeHtml(proto.url_0, proto.left_0, proto.top_0, proto.width_0, proto.height_0).html));
  }
  return this$static.sortDescIconHtml;
}

function $renderHeader(this$static, out, context, header){
  var headerId, sb;
  headerId = dynamicCast($getKey(this$static.idToHeaderMap, header), Q$String);
  if (headerId == null) {
    headerId = 'header-' + $createUniqueId($doc);
    $put_0(this$static.idToHeaderMap, headerId, header);
  }
  $attribute_0(out.delegate, '__gwt_header', headerId);
  sb = new SafeHtmlBuilder_0;
  $render(header.cell, context, header.text_0, sb);
  out.html_0(new SafeHtmlString_0(sb.sb.impl.string));
}

function $renderSortableHeader(this$static, out, context, header, isSorted){
  var halfHeight, headerContainer, iconWidth, imageHolder, outerDiv, style;
  headerContainer = out;
  isSorted = isSorted && !this$static.isFooter;
  if (isSorted) {
    iconWidth = this$static.sortDescIconWidth;
    halfHeight = this$static.sortDescIconHalfHeight;
    outerDiv = $startDiv(out.delegate);
    style = $trustedProperty($position(outerDiv.delegate_0.stylesBuilder, ($clinit_Style$Position() , RELATIVE)), 'zoom');
    $paddingLeft(style, iconWidth, $clinit_Style$Unit());
    $endStyle(style.delegate);
    imageHolder = $startDiv(outerDiv.delegate);
    style = $marginTop($lineHeight($top($position(outerDiv.delegate_0.stylesBuilder, ABSOLUTE), $clinit_Style$Unit()), $clinit_Style$Unit()), -halfHeight, $clinit_Style$Unit());
    $left(style, $clinit_Style$Unit());
    $endStyle(style.delegate);
    $html(imageHolder, $getSortIcon(this$static));
    $end_0(imageHolder.delegate_0, 'div');
    headerContainer = $startDiv(outerDiv.delegate);
  }
  $renderHeader(this$static, headerContainer, context, header);
  if (isSorted) {
    $end_0(headerContainer.delegate_0, 'div');
    $end_0(headerContainer.delegate_0, 'div');
  }
}

function $startRow_0(this$static){
  var row;
  while (this$static.section.delegate_0.stack_0.size_0 > 1) {
    $end(this$static.section.delegate_0);
  }
  if (this$static.section.delegate_0.stack_0.size_0 < 1) {
    throw new IllegalStateException_1('Cannot start a row.  Did you call TableRowBuilder.end() too many times?');
  }
  row = $startTR(this$static.section.delegate);
  $attribute_1(row, '__gwt_header_row', this$static.rowIndex);
  ++this$static.rowIndex;
  return row;
}

function AbstractHeaderOrFooterBuilder_0(table, isFooter){
  var asc, desc;
  this.idToColumnMap = new HashMap_0;
  this.idToHeaderMap = new AbstractHeaderOrFooterBuilder$TwoWayHashMap_0;
  this.isFooter = isFooter;
  this.table = table;
  asc = ($clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridSortAscendingInitializer() , dataGridSortAscending);
  desc = ($clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridSortDescendingInitializer() , dataGridSortDescending);
  !!asc && toInt(fromDouble(round0(asc.height_0 / 2)));
  if (desc) {
    this.sortDescIconWidth = desc.width_0 + 6;
    this.sortDescIconHalfHeight = toInt(fromDouble(round0(desc.height_0 / 2)));
  }
   else {
    this.sortDescIconWidth = 0;
    this.sortDescIconHalfHeight = 0;
  }
}

defineSeed(351, 1, {});
_.isFooter = false;
_.rowIndex = 0;
_.sortDescIconHalfHeight = 0;
_.sortDescIconWidth = 0;
function $clear_0(this$static){
  this$static.keyToValue.clear_0();
  this$static.valueToKey.clear_0();
}

function $getKey(this$static, value_0){
  return this$static.valueToKey.get_2(value_0);
}

function $getValue(this$static, key_0){
  return this$static.keyToValue.get_2(key_0);
}

function $put_0(this$static, key_0, value_0){
  this$static.keyToValue.put(key_0, value_0);
  this$static.valueToKey.put(value_0, key_0);
}

function AbstractHeaderOrFooterBuilder$TwoWayHashMap_0(){
  this.keyToValue = new HashMap_0;
  this.valueToKey = new HashMap_0;
}

defineSeed(352, 1, {}, AbstractHeaderOrFooterBuilder$TwoWayHashMap_0);
function $sinkEvents_0(this$static, widget, typeNames){
  var eventsToSink, typeInt, typeName, typeName$iterator;
  if (!typeNames) {
    return;
  }
  eventsToSink = 0;
  for (typeName$iterator = $iterator($keySet(typeNames.map_0)); typeName$iterator.val$outerIter.hasNext();) {
    typeName = dynamicCast($next_5(typeName$iterator), Q$String);
    typeInt = $eventGetTypeInt(($clinit_DOM() , typeName));
    if (typeInt < 0) {
      widget.element;
    }
     else {
      typeInt = $sinkEvent(this$static, widget, typeName);
      typeInt > 0 && (eventsToSink |= typeInt);
    }
  }
  eventsToSink > 0 && (widget.eventsToSink == -1?sinkEvents_0(($clinit_DOM() , widget.element), eventsToSink | (widget.element.__eventBits || 0)):(widget.eventsToSink |= eventsToSink));
}

defineSeed(353, 1, {});
var impl_1;
function $initFocusEventSystem(){
  dispatchFocusEvent = $entry(function(){
    handleNonBubblingEvent($wnd.event);
  }
  );
}

function $initLoadEvents(moduleName){
  !$wnd.__gwt_CellBasedWidgetImplLoadListeners && ($wnd.__gwt_CellBasedWidgetImplLoadListeners = new Array);
  $wnd.__gwt_CellBasedWidgetImplLoadListeners[moduleName] = $entry(function(){
    handleNonBubblingEvent($wnd.event);
  }
  );
}

function $isFocusable(this$static, elem){
  var attrNode;
  return $contains_1(this$static.focusableTypes, $getTagName(elem).toLowerCase()) || (attrNode = elem.getAttributeNode('tabIndex') , attrNode != null && attrNode.specified?elem.tabIndex:-1) >= 0;
}

function $onBrowserEvent_4(this$static, widget, event_0){
  var eventTarget, target, type_0;
  type_0 = event_0.type.toLowerCase();
  if ($equals_3('focus', type_0) || $equals_3('blur', type_0) || $equals_3('change', type_0)) {
    eventTarget = event_0.srcElement;
    if (is_0(eventTarget)) {
      target = eventTarget;
      target != ($clinit_DOM() , widget.element) && setEventListener_0(target, null);
    }
  }
  !!focusedInput && $equals_3('change', type_0) && (focusedInputValue = getInputValue(focusedInput));
  !!focusedInput && !focusedInputChangesOnBlurOnly && $contains_1(this$static.changeEventTriggers, type_0) && $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new CellBasedWidgetImplTrident$1_0(widget));
}

function $processHtml(this$static, html){
  var htmlString, listener, moduleName;
  if (this$static.loadEventsInitialized && !!html) {
    moduleName = $moduleName;
    listener = '__gwt_CellBasedWidgetImplLoadListeners["' + moduleName + '"]();';
    htmlString = html.html;
    htmlString = $replaceAll(htmlString, '(<img)([\\s/>])', "<img onload='" + listener + "' onerror='" + listener + "'$2");
    html = ($clinit_SafeHtmlUtils() , new SafeHtmlString_0(htmlString));
  }
  return html;
}

function $resetFocus_1(command){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), command);
}

function $sinkEvent(this$static, widget, typeName){
  var elem, eventsToSink, trigger, trigger$iterator;
  if ($equals_3('change', typeName) || $equals_3('focus', typeName) || $equals_3('blur', typeName)) {
    !dispatchFocusEvent && $initFocusEventSystem();
    eventsToSink = 0;
    elem = ($clinit_DOM() , widget.element);
    if (!$equals_3('true', $getAttribute(elem, '__gwtCellBasedWidgetImplDispatchingFocus'))) {
      $setAttribute(elem, '__gwtCellBasedWidgetImplDispatchingFocus', 'true');
      elem.attachEvent('onfocusin', dispatchFocusEvent);
      elem.attachEvent('onfocusout', dispatchFocusEvent);
      for (trigger$iterator = $iterator($keySet(this$static.changeEventTriggers.map_0)); trigger$iterator.val$outerIter.hasNext();) {
        trigger = dynamicCast($next_5(trigger$iterator), Q$String);
        eventsToSink |= $eventGetTypeInt(trigger);
      }
    }
    return eventsToSink;
  }
   else if ($equals_3('load', typeName) || $equals_3('error', typeName)) {
    if (!this$static.loadEventsInitialized) {
      this$static.loadEventsInitialized = true;
      $initLoadEvents($moduleName);
    }
    return -1;
  }
   else {
    return $eventGetTypeInt(($clinit_DOM() , typeName));
  }
}

function CellBasedWidgetImplTrident_0(){
  this.focusableTypes = new HashSet_0;
  $add_17(this.focusableTypes, 'select');
  $add_17(this.focusableTypes, 'input');
  $add_17(this.focusableTypes, 'textarea');
  $add_17(this.focusableTypes, 'option');
  $add_17(this.focusableTypes, 'button');
  $add_17(this.focusableTypes, 'label');
  if (!inputTypes) {
    inputTypes = new HashSet_0;
    $add_17(inputTypes, 'select');
    $add_17(inputTypes, 'input');
    $add_17(inputTypes, 'textarea');
  }
  this.changeEventTriggers = new HashSet_0;
  $add_17(this.changeEventTriggers, 'mouseup');
  $add_17(this.changeEventTriggers, 'mousewheel');
}

function dispatchCellEvent(widget, target, eventBits, event_0){
  if (!isOrHasChildImpl(($clinit_DOM() , widget.element), target)) {
    return;
  }
  setEventListener_0(target, widget);
  sinkEvents_0(target, eventBits | $getEventsSunk(target));
  !!event_0 && $dispatchEvent(target, event_0);
}

function getInputValue(elem){
  if (isCheckbox(elem)) {
    return $clinit_Boolean() , $isChecked(elem)?TRUE_1:FALSE_1;
  }
  return elem.value;
}

function handleNonBubblingEvent(event_0){
  var curElem, eventTarget, listener, tagName, target, type_0, widget;
  eventTarget = event_0.srcElement;
  if (!is_0(eventTarget)) {
    return;
  }
  target = eventTarget;
  curElem = target;
  listener = ($clinit_DOM() , getEventListener_0(target));
  while (!!curElem && !listener) {
    curElem = $getParentElement(curElem);
    listener = !curElem?null:getEventListener_0(curElem);
  }
  if (!instanceOf(listener, Q$Widget)) {
    return;
  }
  widget = dynamicCast(listener, Q$Widget);
  if (target == widget.element) {
    return;
  }
  type_0 = event_0.type;
  if ($equals_3('focusin', type_0)) {
    tagName = $getTagName(target).toLowerCase();
    if ($contains_1(inputTypes, tagName)) {
      focusedInput = target;
      focusedInputValue = getInputValue(target);
      focusedInputChangesOnBlurOnly = !$equals_3('select', tagName) && !isCheckbox(target);
    }
    dispatchCellEvent(widget, target, 2048, null);
  }
   else if ($equals_3('focusout', type_0)) {
    maybeFireChangeEvent(widget);
    focusedInput = null;
    $createHtmlEvent($doc, 'focus');
    dispatchCellEvent(widget, target, 4096, null);
  }
   else 
    ($equals_3('load', type_0) || $equals_3('error', type_0)) && dispatchEvent_1(event_0, widget.element, listener);
}

function isCheckbox(elem){
  var inputType;
  if (!elem || !$equalsIgnoreCase('input', $getTagName(elem))) {
    return false;
  }
  inputType = elem.type.toLowerCase();
  return $equals_3('checkbox', inputType) || $equals_3('radio', inputType);
}

function maybeFireChangeEvent(widget){
  var changeEvent, newValue, target;
  if (!focusedInput) {
    return;
  }
  newValue = getInputValue(focusedInput);
  if (!equals__devirtual$(newValue, focusedInputValue)) {
    focusedInputValue = newValue;
    target = focusedInput;
    changeEvent = $createHtmlEvent($doc, 'change');
    dispatchCellEvent(widget, target, 1024, changeEvent);
  }
}

defineSeed(354, 353, {}, CellBasedWidgetImplTrident_0);
_.loadEventsInitialized = false;
var dispatchFocusEvent, focusedInput, focusedInputChangesOnBlurOnly = false, focusedInputValue, inputTypes;
function CellBasedWidgetImplTrident$1_0(val$widget){
  this.val$widget = val$widget;
}

defineSeed(355, 1, {}, CellBasedWidgetImplTrident$1_0);
_.execute_0 = function execute_9(){
  maybeFireChangeEvent(this.val$widget);
}
;
function $setFieldUpdater(this$static, fieldUpdater){
  this$static.fieldUpdater = fieldUpdater;
}

function Column_0(cell){
  this.cell = cell;
}

defineSeed(356, 1, makeCastMap([Q$HasCell, Q$Column]));
_.getCell = function getCell(){
  return this.cell;
}
;
_.getFieldUpdater = function getFieldUpdater(){
  return this.fieldUpdater;
}
;
function Column$1_0(this$0, val$index, val$object){
  this.this$0 = this$0;
  this.val$index = val$index;
  this.val$object = val$object;
}

defineSeed(357, 1, {}, Column$1_0);
_.update_0 = function update_0(value_0){
  this.this$0.fieldUpdater.update(this.val$index, this.val$object, value_0);
}
;
_.val$index = 0;
function ColumnSortList_0(){
  this.infos = new ArrayList_0;
}

defineSeed(358, 1, makeCastMap([Q$ColumnSortList]), ColumnSortList_0);
_.equals$ = function equals_7(obj){
  var other;
  if (obj === this) {
    return true;
  }
   else if (!instanceOf(obj, Q$ColumnSortList)) {
    return false;
  }
  other = dynamicCast(obj, Q$ColumnSortList);
  return $equals(this.infos, other.infos);
}
;
_.hashCode$ = function hashCode_9(){
  return 31 * $hashCode(this.infos) + 13;
}
;
function $doSetColumnWidth(this$static, column, width_0){
  if (width_0 == null) {
    $ensureTableColElement(this$static.tableData, column).style['width'] = '';
    $ensureTableColElement(this$static.tableHeader, column).style['width'] = '';
    $ensureTableColElement(this$static.tableFooter, column).style['width'] = '';
  }
   else {
    $ensureTableColElement(this$static.tableData, column).style['width'] = width_0;
    $ensureTableColElement(this$static.tableHeader, column).style['width'] = width_0;
    $ensureTableColElement(this$static.tableFooter, column).style['width'] = width_0;
  }
}

function $onLoadingStateChanged(this$static, state){
  var message;
  message = this$static.tableData;
  state == ($clinit_LoadingStateChangeEvent$LoadingState() , LOADING)?(message = this$static.loadingIndicatorContainer):state == LOADED && $isEmpty_0(this$static.presenter) && (message = this$static.emptyTableWidgetContainer);
  $setWidget_0(this$static.tableDataScroller, message);
  $fireEvent_0(this$static, new LoadingStateChangeEvent_0);
}

function DataGrid_0(){
  DataGrid_1.call(this, !DEFAULT_RESOURCES && (DEFAULT_RESOURCES = new DataGrid_Resources_fr_InlineClientBundleGenerator_0));
}

function DataGrid_1(){
  DataGrid_2.call(this, createDefaultLoadingIndicator());
}

function DataGrid_2(loadingIndicator){
  AbstractCellTable_0.call(this, new HeaderPanel_0, new DataGrid$ResourcesAdapter_0);
  this.headerPanel = this.widget;
  this.style_0 = ($clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridStyleInitializer() , dataGridStyle);
  $ensureInjected_0(this.style_0);
  this.tableHeader = new DataGrid$TableWidget_0;
  this.tableHeader.section = this.tableHeader.tableElem.createTHead();
  this.tableFooter = new DataGrid$TableWidget_0;
  this.tableFooter.section = this.tableFooter.tableElem.createTFoot();
  this.tableHeaderContainer = new SimplePanel_2(this.tableHeader);
  this.tableFooterContainer = new SimplePanel_2(this.tableFooter);
  $setHeaderWidget(this.headerPanel, this.tableHeaderContainer);
  this.tableHeaderScroller = $getParentElement($getElement(this.tableHeaderContainer));
  $setFooterWidget(this.headerPanel, this.tableFooterContainer);
  this.tableFooterScroller = $getParentElement($getElement(this.tableFooterContainer));
  this.tableHeaderScroller.style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  this.tableFooterScroller.style['overflow'] = 'hidden';
  this.tableData = new DataGrid$TableWidget_0;
  if (this.tableData.tableElem.tBodies.length > 0) {
    this.tableData.section = this.tableData.tableElem.tBodies[0];
  }
   else {
    this.tableData.section = $createElement($doc, 'tbody');
    $appendChild(this.tableData.tableElem, this.tableData.section);
  }
  this.tableDataScroller = new CustomScrollPanel_1(this.tableData);
  $setHeight_0(this.tableDataScroller, '100%');
  $setContentWidget(this.headerPanel, this.tableDataScroller);
  this.tableDataContainer = $getParentElement($getElement(this.tableData));
  this.tableDataContainer.style['display'] = ($clinit_Style$Display() , 'block');
  this.emptyTableWidgetContainer = new FlexTable_0;
  $setAttribute($getElement(this.emptyTableWidgetContainer), 'align', 'center');
  this.loadingIndicatorContainer = new FlexTable_0;
  $setAttribute($getElement(this.loadingIndicatorContainer), 'align', 'center');
  $setWidget_1(this.loadingIndicatorContainer, 0, 0, loadingIndicator);
  $addScrollHandler_0(this.tableDataScroller, new DataGrid$1_0(this));
}

function createDefaultLoadingIndicator(){
  var image, loadingImg;
  loadingImg = ($clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridLoadingInitializer() , dataGridLoading);
  if (!loadingImg) {
    return null;
  }
  image = new Image_2(loadingImg);
  ($clinit_DOM() , image.element).style['marginTop'] = 30 + ($clinit_Style$Unit() , 'px');
  return image;
}

defineSeed(359, 334, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasVisibility, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$HasData]), DataGrid_0);
_.onResize_0 = function onResize_0(){
  $scheduledLayout(this.headerPanel);
}
;
var DEFAULT_RESOURCES;
function DataGrid$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(360, 1, makeCastMap([Q$ScrollHandler, Q$EventHandler]), DataGrid$1_0);
_.onScroll = function onScroll(event_0){
  var scrollLeft;
  scrollLeft = $getScrollLeft($getScrollableElement(this.this$0.tableDataScroller));
  $setScrollLeft(this.this$0.tableHeaderScroller, scrollLeft);
  $setScrollLeft(this.this$0.tableFooterScroller, scrollLeft);
}
;
function DataGrid$ResourcesAdapter_0(){
  $clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridStyleInitializer();
}

defineSeed(361, 1, {}, DataGrid$ResourcesAdapter_0);
function $ensureTableColElement(this$static, index_0){
  var i;
  for (i = this$static.colgroup.childNodes.length; i <= index_0; i++) {
    $appendChild(this$static.colgroup, $createElement($doc, 'col'));
  }
  return $getChild(this$static.colgroup, index_0);
}

function $hideUnusedColumns(this$static, start_0){
  var colCount, i;
  colCount = this$static.colgroup.childNodes.length;
  for (i = start_0; i < colCount; i++) {
    $setPropertyImpl($ensureTableColElement(this$static, i).style, 'width', '0px');
  }
}

function DataGrid$TableWidget_0(){
  this.tableElem = $createElement($doc, 'table');
  this.tableElem.cellSpacing = 0;
  this.tableElem.style['tableLayout'] = ($clinit_Style$TableLayout() , 'fixed');
  this.tableElem.style['width'] = 100 + ($clinit_Style$Unit() , '%');
  $setElement(this, this.tableElem);
  this.colgroup = $createElement($doc, 'colgroup');
  $appendChild(this.tableElem, this.colgroup);
}

defineSeed(362, 337, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), DataGrid$TableWidget_0);
function DataGrid_Resources_fr_InlineClientBundleGenerator_0(){
}

defineSeed(363, 1, {}, DataGrid_Resources_fr_InlineClientBundleGenerator_0);
var dataGridLoading, dataGridSortAscending, dataGridSortDescending, dataGridStyle;
function $ensureInjected_0(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_1(toInject, '.GPBYFDEHG{border-top:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;white-space:nowrap;}.GPBYFDEIG{border-bottom:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;white-space:nowrap;}.GPBYFDEBG{padding:2px 15px;overflow:hidden;}.GPBYFDEFH{cursor:pointer;cursor:hand;}.GPBYFDEFH:hover{color:#6c6b6b;}.GPBYFDECG{background:#fff;}.GPBYFDEDG{border:2px solid #fff;}.GPBYFDEBH{background:#f3f7fb;}.GPBYFDECH{border:2px solid #f3f7fb;}.GPBYFDEJG{background:#eee;}.GPBYFDEKG{border:2px solid #eee;}.GPBYFDEMG{background:#ffc;}.GPBYFDENG{border:2px solid #ffc;}.GPBYFDEDH{background:#628cd5;color:white;height:auto;overflow:auto;}.GPBYFDEEH{border:2px solid #628cd5;}.GPBYFDELG{border:2px solid #d7dde8;}');
    schedule();
    return true;
  }
  return false;
}

function DataGrid_Resources_fr_InlineClientBundleGenerator$1_0(){
}

defineSeed(364, 1, {}, DataGrid_Resources_fr_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridLoadingInitializer(){
  $clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridLoadingInitializer = nullMethod;
  dataGridLoading = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/gif;base64,R0lGODlhKwALAPEAAP///0tKSqampktKSiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAKwALAAACMoSOCMuW2diD88UKG95W88uF4DaGWFmhZid93pq+pwxnLUnXh8ou+sSz+T64oCAyTBUAACH5BAkKAAAALAAAAAArAAsAAAI9xI4IyyAPYWOxmoTHrHzzmGHe94xkmJifyqFKQ0pwLLgHa82xrekkDrIBZRQab1jyfY7KTtPimixiUsevAAAh+QQJCgAAACwAAAAAKwALAAACPYSOCMswD2FjqZpqW9xv4g8KE7d54XmMpNSgqLoOpgvC60xjNonnyc7p+VKamKw1zDCMR8rp8pksYlKorgAAIfkECQoAAAAsAAAAACsACwAAAkCEjgjLltnYmJS6Bxt+sfq5ZUyoNJ9HHlEqdCfFrqn7DrE2m7Wdj/2y45FkQ13t5itKdshFExC8YCLOEBX6AhQAADsAAAAAAAAAAAA=')), 43, 11);
}

function $clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridSortAscendingInitializer(){
  $clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridSortAscendingInitializer = nullMethod;
  dataGridSortAscending = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAiklEQVR42mNgwALyKrumFRf3iDAQAvmVXVVAxf/zKjq341WYV95hk1fZ+R+MK8C4HqtCkLW5FZ2PQYpyK6AaKjv/5VV1OmIozq3s3AFR0AXFUNMrO5/lV7WKI6yv6mxCksSGDyTU13Mw5JV2qeaWd54FWn0BRAMlLgPZl/NAuBKMz+dWdF0H2hwCAPwcZIjfOFLHAAAAAElFTkSuQmCC')), 11, 7);
}

function $clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridSortDescendingInitializer(){
  $clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridSortDescendingInitializer = nullMethod;
  dataGridSortDescending = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAiklEQVR42mPIrewMya3oup5X2XkeiC/nVXRezgViEDu3vPMskH0BROeVdqkyJNTXcwAlDgDxfwxcAaWrOpsYYCC/qlUcKPgMLlnZBcWd/4E272BAB0DdjkDJf2AFFRBTgfTj4uIeEQZsAKigHmE6EJd32DDgA0DF20FOyK/sqmIgBEDWAhVPwyYHAJAqZIiNwsHKAAAAAElFTkSuQmCC')), 11, 7);
}

function $clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridStyleInitializer(){
  $clinit_DataGrid_Resources_fr_InlineClientBundleGenerator$dataGridStyleInitializer = nullMethod;
  dataGridStyle = new DataGrid_Resources_fr_InlineClientBundleGenerator$1_0;
}

function $buildRowImpl(this$static, rowValue, absRowIndex){
  var column, columnCount, context, curColumn, div, isEven, isSelected, selectionModel, td, tdClasses, tr, trClasses;
  selectionModel = this$static.cellTable.presenter.selectionModel;
  isSelected = !(!selectionModel || rowValue == null) && $isSelected(selectionModel, rowValue);
  isEven = absRowIndex % 2 == 0;
  trClasses = new StringBuilder_2(isEven?this$static.evenRowStyle:this$static.oddRowStyle);
  isSelected && $append_11(trClasses, this$static.selectedRowStyle);
  tr = $startRow(this$static);
  $className(tr, trClasses.impl.string);
  columnCount = this$static.cellTable.columns.size_0;
  for (curColumn = 0; curColumn < columnCount; curColumn++) {
    column = $getColumn(this$static.cellTable, curColumn);
    tdClasses = new StringBuilder_2(this$static.cellStyle);
    $append_11(tdClasses, isEven?this$static.evenCellStyle:this$static.oddCellStyle);
    curColumn == 0 && $append_11(tdClasses, this$static.firstColumnStyle);
    isSelected && $append_11(tdClasses, this$static.selectedCellStyle);
    curColumn == columnCount - 1 && $append_11(tdClasses, this$static.lastColumnStyle);
    context = new Cell$Context_0(absRowIndex, curColumn, rowValue);
    td = $startTD(tr.delegate);
    $className(td, tdClasses.impl.string);
    div = $startDiv(td.delegate);
    $endStyle($outlineStyle(div.delegate_0.stylesBuilder, $clinit_Style$OutlineStyle()).delegate);
    $renderCell(this$static, div, context, column, rowValue);
    $end_0(div.delegate_0, 'div');
    $end_0(td.delegate_0, 'td');
  }
  $end_0(tr.delegate_0, 'tr');
}

function DefaultCellTableBuilder_0(cellTable){
  this.idToCellMap = new HashMap_0;
  this.cellToIdMap = new HashMap_0;
  this.cellTable = cellTable;
  this.evenRowStyle = 'GPBYFDECG';
  this.oddRowStyle = 'GPBYFDEBH';
  this.selectedRowStyle = ' GPBYFDEDH';
  this.cellStyle = 'GPBYFDEBG';
  this.evenCellStyle = ' GPBYFDEDG';
  this.oddCellStyle = ' GPBYFDECH';
  this.firstColumnStyle = ' GPBYFDEEG';
  this.lastColumnStyle = ' GPBYFDEOG';
  this.selectedCellStyle = ' GPBYFDEEH';
}

defineSeed(369, 346, {}, DefaultCellTableBuilder_0);
function $appendExtraStyles(header){
  if (!header) {
    return;
  }
}

function $buildHeaderOrFooterImpl(this$static){
  var className, classesBuilder, column, columnCount, context, curColumn, hasHeader, header, i, isFooter, prevColspan, prevHeader, sortList, table, th, th0, tr;
  table = this$static.table;
  isFooter = this$static.isFooter;
  columnCount = table.columns.size_0;
  if (columnCount == 0) {
    return false;
  }
  hasHeader = false;
  for (i = 0; i < columnCount; i++) {
    if (this$static.isFooter?$getFooter(this$static.table, i):$getHeader(this$static.table, i)) {
      hasHeader = true;
      break;
    }
  }
  if (!hasHeader) {
    return false;
  }
  sortList = table.sortList;
  sortList.infos.size_0 == 0?null:throwClassCastExceptionUnlessNull($get_8(sortList.infos, 0));
  className = this$static.isFooter?'GPBYFDEHG':'GPBYFDEIG';
  prevHeader = this$static.isFooter?$getFooter(this$static.table, 0):$getHeader(this$static.table, 0);
  column = $getColumn(this$static.table, 0);
  prevColspan = 1;
  classesBuilder = new StringBuilder_2(className);
  $append_2(classesBuilder.impl, ' ' + (isFooter?'GPBYFDEFG':'GPBYFDEGG'));
  tr = $startRow_0(this$static);
  for (curColumn = 1; curColumn < columnCount; curColumn++) {
    header = this$static.isFooter?$getFooter(this$static.table, curColumn):$getHeader(this$static.table, curColumn);
    if (header != prevHeader) {
      $appendExtraStyles(prevHeader);
      th0 = dynamicCast($className($colSpan($startTH(tr.delegate), prevColspan), classesBuilder.impl.string), Q$TableCellBuilder);
      $enableColumnHandlers(this$static, th0, column);
      if (prevHeader) {
        context = new Cell$Context_0(0, curColumn - prevColspan, prevHeader.text_0);
        $renderSortableHeader(this$static, th0, context, prevHeader, false);
      }
      $end_0(th0.delegate_0, 'th');
      prevHeader = header;
      prevColspan = 1;
      classesBuilder = new StringBuilder_2(className);
    }
     else {
      ++prevColspan;
    }
    column = ($checkColumnBounds(table, curColumn) , dynamicCast($get_8(table.columns, curColumn), Q$Column));
  }
  $append_11(($append_2(classesBuilder.impl, ' ') , classesBuilder), isFooter?'GPBYFDEPG':'GPBYFDEAH');
  $appendExtraStyles(prevHeader);
  th = dynamicCast($className($colSpan($startTH(tr.delegate), prevColspan), classesBuilder.impl.string), Q$TableCellBuilder);
  $enableColumnHandlers(this$static, th, column);
  if (prevHeader) {
    context = new Cell$Context_0(0, curColumn - prevColspan, prevHeader.text_0);
    $renderSortableHeader(this$static, th, context, prevHeader, false);
  }
  $end_0(th.delegate_0, 'th');
  $end_0(tr.delegate_0, 'tr');
  return true;
}

function DefaultHeaderOrFooterBuilder_0(table, isFooter){
  AbstractHeaderOrFooterBuilder_0.call(this, table, isFooter);
}

defineSeed(370, 351, {}, DefaultHeaderOrFooterBuilder_0);
function $addCellPreviewHandler_0(this$static, handler){
  return $addHandler_1(this$static.view, handler, (!TYPE_17 && (TYPE_17 = new GwtEvent$Type_0) , TYPE_17));
}

function $addRangeChangeHandler_0(this$static, handler){
  return $addHandler_1(this$static.view, handler, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type_0) , TYPE_18));
}

function $calculateModifiedRanges(modifiedRows, pageStart, pageEnd){
  var diff, i, index_0, maxDiff, rangeEnd0, rangeEnd1, rangeLength0, rangeLength1, rangeStart0, rangeStart1, toRet;
  sortJsArrayInteger(modifiedRows);
  rangeStart0 = -1;
  rangeEnd0 = -1;
  rangeStart1 = -1;
  rangeEnd1 = -1;
  maxDiff = 0;
  for (i = 0; i < modifiedRows.length; i++) {
    index_0 = modifiedRows[i];
    if (index_0 < pageStart || index_0 >= pageEnd) {
      continue;
    }
     else if (rangeStart0 == -1) {
      rangeStart0 = index_0;
      rangeEnd0 = index_0;
    }
     else if (rangeStart1 == -1) {
      maxDiff = index_0 - rangeEnd0;
      rangeStart1 = index_0;
      rangeEnd1 = index_0;
    }
     else {
      diff = index_0 - rangeEnd1;
      if (diff > maxDiff) {
        rangeEnd0 = rangeEnd1;
        rangeStart1 = index_0;
        rangeEnd1 = index_0;
        maxDiff = diff;
      }
       else {
        rangeEnd1 = index_0;
      }
    }
  }
  rangeEnd0 += 1;
  rangeEnd1 += 1;
  if (rangeStart1 == rangeEnd0) {
    rangeEnd0 = rangeEnd1;
    rangeStart1 = -1;
    rangeEnd1 = -1;
  }
  toRet = new ArrayList_0;
  if (rangeStart0 != -1) {
    rangeLength0 = rangeEnd0 - rangeStart0;
    $add_16(toRet, new Range_1(rangeStart0, rangeLength0));
  }
  if (rangeStart1 != -1) {
    rangeLength1 = rangeEnd1 - rangeStart1;
    $add_16(toRet, new Range_1(rangeStart1, rangeLength1));
  }
  return toRet;
}

function $clearSelectionModel(this$static){
  if (this$static.selectionHandler) {
    $removeHandler(this$static.selectionHandler.real);
    this$static.selectionHandler = null;
  }
  this$static.selectionModel = null;
}

function $ensurePendingState(this$static){
  !this$static.pendingState && (this$static.pendingState = new HasDataPresenter$PendingState_0(this$static.state));
  this$static.pendingStateCommand = new HasDataPresenter$2_0(this$static);
  $scheduleFinally_0(this$static.pendingStateCommand);
  return this$static.pendingState;
}

function $findIndexOfBestMatch(state, value_0, initialIndex){
  var bestMatchDiff, bestMatchIndex, curValue, diff, i, rowDataCount;
  if (value_0 == null) {
    return -1;
  }
  bestMatchIndex = -1;
  bestMatchDiff = 2147483647;
  rowDataCount = state.rowData.size_0;
  for (i = 0; i < rowDataCount; i++) {
    curValue = $get_8(state.rowData, i);
    if (equals__devirtual$(value_0, curValue)) {
      diff = initialIndex - i < 0?-(initialIndex - i):initialIndex - i;
      if (diff < bestMatchDiff) {
        bestMatchIndex = i;
        bestMatchDiff = diff;
      }
    }
  }
  return bestMatchIndex;
}

function $getCurrentState(this$static){
  return !this$static.pendingState?this$static.state:this$static.pendingState;
}

function $getKeyboardSelectedRow(this$static){
  return ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.keyboardSelectionPolicy?-1:(!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRow;
}

function $getVisibleItem(this$static, indexOnPage){
  return $getRowDataValue(!this$static.pendingState?this$static.state:this$static.pendingState, indexOnPage);
}

function $getVisibleItemCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0;
}

function $getVisibleRange(this$static){
  return new Range_1((!this$static.pendingState?this$static.state:this$static.pendingState).pageStart, (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize);
}

function $isEmpty_0(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact && (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount == 0;
}

function $resolvePendingState(this$static, modifiedRows){
  var absStart, bestMatchIndex, e, i, isSelected, keyboardRowChanged, length_0, modifiedRanges, newSelectedRow, newState, newValue, newValueWasSelected, newlySelectedRows, oldPageSize, oldPageStart, oldRowDataCount, oldSelectedRow, oldState, oldValue, oldValueWasSelected, pageEnd, pageSize, pageStart, range, range$iterator, range0, range1, redrawRequired, relStart, replaceDiff, replaceValues, replacedEmptyRange, replacedRange, replacedRange$iterator, rowDataCount, rowValue, start_0, wasSelected, cacheSize, curPageSize;
  this$static.pendingStateCommand = null;
  if (this$static.isResolvingState) {
    return false;
  }
  this$static.isResolvingState = true;
  if (!this$static.pendingState) {
    this$static.isResolvingState = false;
    this$static.pendingStateLoop = 0;
    return false;
  }
  ++this$static.pendingStateLoop;
  if (this$static.pendingStateLoop > 10) {
    this$static.isResolvingState = false;
    this$static.pendingStateLoop = 0;
    throw new IllegalStateException_1('A possible infinite loop has been detected in a Cell Widget. This usually happens when your SelectionModel triggers a SelectionChangeEvent when SelectionModel.isSelection() is called, which causes the table to redraw continuously.');
  }
  oldState = this$static.state;
  newState = this$static.pendingState;
  this$static.state = this$static.pendingState;
  this$static.pendingState = null;
  !modifiedRows && (modifiedRows = []);
  pageStart = newState.pageStart;
  pageSize = newState.pageSize;
  pageEnd = pageStart + pageSize;
  rowDataCount = newState.rowData.size_0;
  newState.keyboardSelectedRow = max_0(0, min_0(newState.keyboardSelectedRow, rowDataCount - 1));
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.keyboardSelectionPolicy) {
    newState.keyboardSelectedRow = 0;
    newState.keyboardSelectedRowValue = null;
  }
   else if (newState.keyboardSelectedRowChanged) {
    newState.keyboardSelectedRowValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
  }
   else if (newState.keyboardSelectedRowValue != null) {
    bestMatchIndex = $findIndexOfBestMatch(newState, newState.keyboardSelectedRowValue, newState.keyboardSelectedRow);
    if (bestMatchIndex >= 0) {
      newState.keyboardSelectedRow = bestMatchIndex;
      newState.keyboardSelectedRowValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
    }
     else {
      newState.keyboardSelectedRow = 0;
      newState.keyboardSelectedRowValue = null;
    }
  }
  try {
    if (BOUND_TO_SELECTION == this$static.keyboardSelectionPolicy && !!this$static.selectionModel && newState.viewTouched) {
      oldValue = oldState.selectedValue;
      newValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
      if (newValue != null) {
        oldValueWasSelected = oldValue != null && $isSelected(this$static.selectionModel, oldValue);
        newValueWasSelected = newValue != null && $isSelected(this$static.selectionModel, newValue);
        if (equals__devirtual$(newValue, oldValue)) {
          newValueWasSelected || (newState.selectedValue = null);
        }
         else {
          oldValueWasSelected && this$static.selectionModel.setSelected(oldValue, false);
          newState.selectedValue = newValue;
          newValue != null && !newValueWasSelected && this$static.selectionModel.setSelected(newValue, true);
        }
      }
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$RuntimeException)) {
      e = $e0;
      this$static.isResolvingState = false;
      this$static.pendingStateLoop = 0;
      throw unwrap(e);
    }
     else 
      throw unwrap($e0);
  }
  keyboardRowChanged = newState.keyboardSelectedRowChanged || oldState.keyboardSelectedRow != newState.keyboardSelectedRow || oldState.keyboardSelectedRowValue == null && newState.keyboardSelectedRowValue != null;
  newlySelectedRows = new HashSet_0;
  try {
    for (i = pageStart; i < pageStart + rowDataCount; i++) {
      rowValue = $get_8(newState.rowData, i - pageStart);
      isSelected = rowValue != null && !!this$static.selectionModel && $isSelected(this$static.selectionModel, rowValue);
      wasSelected = $contains_1(oldState.selectedRows, valueOf_1(i));
      if (isSelected) {
        $add_17(newState.selectedRows, valueOf_1(i));
        $add_17(newlySelectedRows, valueOf_1(i));
        wasSelected || $push_0(modifiedRows, i);
      }
       else 
        wasSelected && $push_0(modifiedRows, i);
    }
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, Q$RuntimeException)) {
      e = $e1;
      this$static.isResolvingState = false;
      this$static.pendingStateLoop = 0;
      throw unwrap(e);
    }
     else 
      throw unwrap($e1);
  }
  replacedEmptyRange = false;
  for (replacedRange$iterator = new AbstractList$IteratorImpl_0(newState.replacedRanges); replacedRange$iterator.i < replacedRange$iterator.this$0_0.size_1();) {
    replacedRange = dynamicCast($next_4(replacedRange$iterator), Q$Range);
    start_0 = replacedRange.start_0;
    length_0 = replacedRange.length_0;
    length_0 == 0 && (replacedEmptyRange = true);
    for (i = start_0; i < start_0 + length_0; i++) {
      $push_0(modifiedRows, i);
    }
  }
  if (modifiedRows.length > 0 && keyboardRowChanged) {
    $push_0(modifiedRows, oldState.keyboardSelectedRow);
    $push_0(modifiedRows, newState.keyboardSelectedRow);
  }
  if (this$static.pendingState) {
    this$static.isResolvingState = false;
    this$static.pendingState.selectedValue = newState.selectedValue;
    $addAll_0(this$static.pendingState.selectedRows, newlySelectedRows);
    keyboardRowChanged && (this$static.pendingState.keyboardSelectedRowChanged = true);
    newState.keyboardStealFocus && (this$static.pendingState.keyboardStealFocus = true);
    $push_0(modifiedRows, oldState.keyboardSelectedRow);
    $push_0(modifiedRows, newState.keyboardSelectedRow);
    if ($resolvePendingState(this$static, modifiedRows)) {
      return true;
    }
  }
  modifiedRanges = $calculateModifiedRanges(modifiedRows, pageStart, pageEnd);
  range0 = modifiedRanges.size_0 > 0?(checkIndex(0, modifiedRanges.size_0) , dynamicCast(modifiedRanges.array[0], Q$Range)):null;
  range1 = modifiedRanges.size_0 > 1?(checkIndex(1, modifiedRanges.size_0) , dynamicCast(modifiedRanges.array[1], Q$Range)):null;
  replaceDiff = 0;
  for (range$iterator = new AbstractList$IteratorImpl_0(modifiedRanges); range$iterator.i < range$iterator.this$0_0.size_1();) {
    range = dynamicCast($next_4(range$iterator), Q$Range);
    replaceDiff += range.length_0;
  }
  oldPageStart = oldState.pageStart;
  oldPageSize = oldState.pageSize;
  oldRowDataCount = oldState.rowData.size_0;
  redrawRequired = newState.redrawRequired;
  pageStart != oldPageStart?(redrawRequired = true):rowDataCount < oldRowDataCount?(redrawRequired = true):!range1 && !!range0 && range0.start_0 == pageStart && (replaceDiff >= oldRowDataCount || replaceDiff > oldPageSize)?(redrawRequired = true):replaceDiff >= 5 && replaceDiff > 0.3 * oldRowDataCount?(redrawRequired = true):replacedEmptyRange && oldRowDataCount == 0 && (redrawRequired = true);
  cacheSize = (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0;
  curPageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact?min_0((!this$static.pendingState?this$static.state:this$static.pendingState).pageSize, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount - (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart):(!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  cacheSize >= curPageSize?$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , LOADED)):cacheSize == 0?$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , LOADING)):$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , PARTIALLY_LOADED));
  try {
    if (redrawRequired) {
      new SafeHtmlBuilder_0;
      $replaceAllChildren_0(this$static.view, newState.rowData, newState.keyboardStealFocus);
      $resetFocus_0(this$static.view);
    }
     else if (range0) {
      absStart = range0.start_0;
      relStart = absStart - pageStart;
      new SafeHtmlBuilder_0;
      replaceValues = new AbstractList$SubList_0(newState.rowData, relStart, relStart + range0.length_0);
      $replaceChildren_1(this$static.view, replaceValues, relStart, newState.keyboardStealFocus);
      if (range1) {
        absStart = range1.start_0;
        relStart = absStart - pageStart;
        new SafeHtmlBuilder_0;
        replaceValues = new AbstractList$SubList_0(newState.rowData, relStart, relStart + range1.length_0);
        $replaceChildren_1(this$static.view, replaceValues, relStart, newState.keyboardStealFocus);
      }
      $resetFocus_0(this$static.view);
    }
     else if (keyboardRowChanged) {
      oldSelectedRow = oldState.keyboardSelectedRow;
      oldSelectedRow >= 0 && oldSelectedRow < rowDataCount && $setKeyboardSelected_0(this$static.view, oldSelectedRow, false, false);
      newSelectedRow = newState.keyboardSelectedRow;
      newSelectedRow >= 0 && newSelectedRow < rowDataCount && $setKeyboardSelected_0(this$static.view, newSelectedRow, true, newState.keyboardStealFocus);
    }
  }
   catch ($e2) {
    $e2 = wrap($e2);
    if (instanceOf($e2, Q$Error)) {
      e = $e2;
      throw new RuntimeException_3(e);
    }
     else 
      throw unwrap($e2);
  }
   finally {
    this$static.isResolvingState = false;
  }
  $resolvePendingState(this$static, null);
  return true;
}

function $scheduleFinally_0(command){
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), command);
}

function $setKeyboardSelectedRow_2(this$static, index_0, stealFocus, forceUpdate){
  var absIndex, newPageSize, newPageStart, pageSize, pageStart, pending, rowCount, shift_0;
  if (($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , DISABLED) == this$static.keyboardSelectionPolicy) {
    return;
  }
  this$static.keyboardPagingPolicy.isLimitedToRange && (index_0 = max_0(0, min_0(index_0, (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0 - 1)));
  $ensurePendingState(this$static).viewTouched = true;
  if (!forceUpdate && (DISABLED == this$static.keyboardSelectionPolicy?-1:(!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRow) == index_0 && (DISABLED == this$static.keyboardSelectionPolicy?null:(!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRowValue) != null) {
    return;
  }
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  rowCount = (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
  absIndex = pageStart + index_0;
  absIndex >= rowCount && (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact && (absIndex = rowCount - 1);
  index_0 = (0 > absIndex?0:absIndex) - pageStart;
  this$static.keyboardPagingPolicy.isLimitedToRange && (index_0 = 0 > (index_0 < pageSize - 1?index_0:pageSize - 1)?0:index_0 < pageSize - 1?index_0:pageSize - 1);
  newPageStart = pageStart;
  newPageSize = pageSize;
  pending = $ensurePendingState(this$static);
  pending.keyboardSelectedRow = 0;
  pending.keyboardSelectedRowValue = null;
  pending.keyboardSelectedRowChanged = true;
  if (index_0 >= 0 && index_0 < pageSize) {
    pending.keyboardSelectedRow = index_0;
    pending.keyboardSelectedRowValue = index_0 < pending.rowData.size_0?$getRowDataValue($ensurePendingState(this$static), index_0):null;
    pending.keyboardStealFocus = stealFocus;
    return;
  }
   else if (($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == this$static.keyboardPagingPolicy) {
    while (index_0 < 0) {
      shift_0 = pageSize < newPageStart?pageSize:newPageStart;
      newPageStart -= shift_0;
      index_0 += shift_0;
    }
    while (index_0 >= pageSize) {
      newPageStart += pageSize;
      index_0 -= pageSize;
    }
  }
   else if (INCREASE_RANGE == this$static.keyboardPagingPolicy) {
    while (index_0 < 0) {
      shift_0 = 30 < newPageStart?30:newPageStart;
      newPageSize += shift_0;
      newPageStart -= shift_0;
      index_0 += shift_0;
    }
    while (index_0 >= newPageSize) {
      newPageSize += 30;
    }
    if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact) {
      newPageSize = newPageSize < rowCount - newPageStart?newPageSize:rowCount - newPageStart;
      index_0 >= rowCount && (index_0 = rowCount - 1);
    }
  }
  if (newPageStart != pageStart || newPageSize != pageSize) {
    pending.keyboardSelectedRow = index_0;
    $setVisibleRange_0(this$static, new Range_1(newPageStart, newPageSize), false);
  }
}

function $setKeyboardSelectionPolicy_0(this$static, policy){
  if (!policy) {
    throw new NullPointerException_1('KeyboardSelectionPolicy cannot be null');
  }
  this$static.keyboardSelectionPolicy = policy;
}

function $setRowCount_1(this$static, count, isExact){
  if (count == (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount && isExact == (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact) {
    return;
  }
  $ensurePendingState(this$static).rowCount = count;
  $ensurePendingState(this$static).rowCountIsExact = isExact;
  $updateCachedData(this$static);
}

function $setRowData_1(this$static, start_0, values){
  var boundedEnd, boundedStart, cacheOffset, dataIndex, i, i0, pageEnd, pageStart, pending, value_0, valuesEnd, valuesLength;
  valuesLength = values.size_1();
  valuesEnd = start_0 + valuesLength;
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageEnd = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart + (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  boundedStart = start_0 > pageStart?start_0:pageStart;
  boundedEnd = valuesEnd < pageEnd?valuesEnd:pageEnd;
  if (start_0 != pageStart && boundedStart >= boundedEnd) {
    return;
  }
  pending = $ensurePendingState(this$static);
  cacheOffset = max_0(0, boundedStart - pageStart - (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0);
  for (i0 = 0; i0 < cacheOffset; i0++) {
    $add_16(pending.rowData, null);
  }
  for (i = boundedStart; i < boundedEnd; i++) {
    value_0 = values.get_1(i - start_0);
    dataIndex = i - pageStart;
    dataIndex < (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0?$set_5(pending.rowData, dataIndex, value_0):$add_16(pending.rowData, value_0);
  }
  $add_16(pending.replacedRanges, new Range_1(boundedStart - cacheOffset, boundedEnd - (boundedStart - cacheOffset)));
  valuesEnd > (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount && $setRowCount_1(this$static, valuesEnd, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact);
}

function $setSelectionModel_0(this$static, selectionModel){
  $clearSelectionModel(this$static);
  this$static.selectionModel = selectionModel;
  !!selectionModel && (this$static.selectionHandler = $addSelectionChangeHandler(selectionModel, new HasDataPresenter$1_0(this$static)));
  $ensurePendingState(this$static);
}

function $setVisibleRange_0(this$static, range, clearData){
  var decrease, i, increase, length_0, pageSize, pageSizeChanged, pageStart, pageStartChanged, pending, start_0;
  start_0 = range.start_0;
  length_0 = range.length_0;
  if (start_0 < 0) {
    throw new IllegalArgumentException_1('Range start cannot be less than 0');
  }
  if (length_0 < 0) {
    throw new IllegalArgumentException_1('Range length cannot be less than 0');
  }
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  pageStartChanged = pageStart != start_0;
  if (pageStartChanged) {
    pending = $ensurePendingState(this$static);
    if (!clearData) {
      if (start_0 > pageStart) {
        increase = start_0 - pageStart;
        if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0 > increase) {
          for (i = 0; i < increase; i++) {
            $remove_17(pending.rowData, 0);
          }
        }
         else {
          $clear_5(pending.rowData);
        }
      }
       else {
        decrease = pageStart - start_0;
        if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0 > 0 && decrease < pageSize) {
          for (i = 0; i < decrease; i++) {
            $add_15(pending.rowData, 0, null);
          }
          $add_16(pending.replacedRanges, new Range_1(start_0, start_0 + decrease - start_0));
        }
         else {
          $clear_5(pending.rowData);
        }
      }
    }
    pending.pageStart = start_0;
  }
  pageSizeChanged = pageSize != length_0;
  pageSizeChanged && ($ensurePendingState(this$static).pageSize = length_0);
  clearData && $clear_5($ensurePendingState(this$static).rowData);
  $updateCachedData(this$static);
  (pageStartChanged || pageSizeChanged) && fire_6(this$static.display_0, new Range_1((!this$static.pendingState?this$static.state:this$static.pendingState).pageStart, (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize));
}

function $updateCachedData(this$static){
  var expectedLastIndex, lastIndex, pageStart;
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  expectedLastIndex = max_0(0, min_0((!this$static.pendingState?this$static.state:this$static.pendingState).pageSize, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount - pageStart));
  lastIndex = (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.size_0 - 1;
  while (lastIndex >= expectedLastIndex) {
    $remove_17($ensurePendingState(this$static).rowData, lastIndex);
    --lastIndex;
  }
}

function HasDataPresenter_0(display, view){
  this.keyboardPagingPolicy = ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE);
  this.keyboardSelectionPolicy = ($clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy() , ENABLED);
  this.display_0 = display;
  this.view = view;
  this.state = new HasDataPresenter$DefaultState_0(50);
}

function sortJsArrayInteger(array){
  array.sort(function(x_0, y_0){
    return x_0 - y_0;
  }
  );
}

defineSeed(371, 1, makeCastMap([Q$HasHandlers, Q$HasData]), HasDataPresenter_0);
_.fireEvent_0 = function fireEvent_2(event_0){
  throw new UnsupportedOperationException_0;
}
;
_.getVisibleRange = function getVisibleRange_0(){
  return $getVisibleRange(this);
}
;
_.setRowCount = function setRowCount_0(count, isExact){
  $setRowCount_1(this, count, isExact);
}
;
_.setRowData = function setRowData_0(start_0, values){
  $setRowData_1(this, start_0, values);
}
;
_.isResolvingState = false;
_.pendingStateLoop = 0;
function HasDataPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(372, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), HasDataPresenter$1_0);
_.onSelectionChange = function onSelectionChange(event_0){
  $ensurePendingState(this.this$0);
}
;
function HasDataPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(373, 1, {}, HasDataPresenter$2_0);
_.execute_0 = function execute_10(){
  this.this$0.pendingStateCommand == this && $resolvePendingState(this.this$0, null);
}
;
function $getRowDataValue(this$static, index_0){
  return $get_8(this$static.rowData, index_0);
}

function HasDataPresenter$DefaultState_0(pageSize){
  this.rowData = new ArrayList_0;
  this.selectedRows = new HashSet_0;
  this.pageSize = pageSize;
}

defineSeed(374, 1, {}, HasDataPresenter$DefaultState_0);
_.keyboardSelectedRow = 0;
_.keyboardSelectedRowValue = null;
_.pageSize = 0;
_.pageStart = 0;
_.rowCount = 0;
_.rowCountIsExact = false;
_.selectedValue = null;
_.viewTouched = false;
function HasDataPresenter$PendingState_0(state){
  var i, rowDataSize;
  HasDataPresenter$DefaultState_0.call(this, state.pageSize);
  this.keyboardStealFocus = false;
  this.redrawRequired = false;
  this.replacedRanges = new ArrayList_0;
  this.keyboardSelectedRow = state.keyboardSelectedRow;
  this.keyboardSelectedRowValue = state.keyboardSelectedRowValue;
  this.pageSize = state.pageSize;
  this.pageStart = state.pageStart;
  this.rowCount = state.rowCount;
  this.rowCountIsExact = state.rowCountIsExact;
  this.selectedValue = state.selectedValue;
  this.viewTouched = state.viewTouched;
  rowDataSize = state.rowData.size_0;
  for (i = 0; i < rowDataSize; i++) {
    $add_16(this.rowData, $get_8(state.rowData, i));
  }
}

defineSeed(375, 374, {}, HasDataPresenter$PendingState_0);
_.keyboardSelectedRowChanged = false;
_.keyboardStealFocus = false;
_.redrawRequired = false;
function $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy(){
  $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy = nullMethod;
  CURRENT_PAGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy_0('CURRENT_PAGE', 0, true);
  CHANGE_PAGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy_0('CHANGE_PAGE', 1, false);
  INCREASE_RANGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy_0('INCREASE_RANGE', 2, false);
  $VALUES_11 = initValues(_3Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$HasKeyboardPagingPolicy$KeyboardPagingPolicy, [CURRENT_PAGE, CHANGE_PAGE, INCREASE_RANGE]);
}

function HasKeyboardPagingPolicy$KeyboardPagingPolicy_0(enum$name, enum$ordinal, isLimitedToRange){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.isLimitedToRange = isLimitedToRange;
}

function values_12(){
  $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy();
  return $VALUES_11;
}

defineSeed(376, 31, makeCastMap([Q$HasKeyboardPagingPolicy$KeyboardPagingPolicy, Q$Serializable, Q$Comparable, Q$Enum]), HasKeyboardPagingPolicy$KeyboardPagingPolicy_0);
_.isLimitedToRange = false;
var $VALUES_11, CHANGE_PAGE, CURRENT_PAGE, INCREASE_RANGE;
function $clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy(){
  $clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy = nullMethod;
  DISABLED = new HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_0('DISABLED', 0);
  ENABLED = new HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_0('ENABLED', 1);
  BOUND_TO_SELECTION = new HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_0('BOUND_TO_SELECTION', 2);
  $VALUES_12 = initValues(_3Lcom_google_gwt_user_cellview_client_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$HasKeyboardSelectionPolicy$KeyboardSelectionPolicy, [DISABLED, ENABLED, BOUND_TO_SELECTION]);
}

function HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy();
  return $VALUES_12;
}

defineSeed(377, 31, makeCastMap([Q$HasKeyboardSelectionPolicy$KeyboardSelectionPolicy, Q$Serializable, Q$Comparable, Q$Enum]), HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_0);
var $VALUES_12, BOUND_TO_SELECTION, DISABLED, ENABLED;
function Header_0(cell){
  this.cell = cell;
}

defineSeed(378, 1, makeCastMap([Q$Header]));
function $clinit_LoadingStateChangeEvent(){
  $clinit_LoadingStateChangeEvent = nullMethod;
  TYPE_13 = new GwtEvent$Type_0;
}

function LoadingStateChangeEvent_0(){
  $clinit_LoadingStateChangeEvent();
}

defineSeed(379, 232, {}, LoadingStateChangeEvent_0);
_.dispatch_0 = function dispatch_14(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_15(){
  return TYPE_13;
}
;
var TYPE_13;
function LoadingStateChangeEvent$DefaultLoadingState_0(){
}

defineSeed(380, 1, {}, LoadingStateChangeEvent$DefaultLoadingState_0);
function $clinit_LoadingStateChangeEvent$LoadingState(){
  $clinit_LoadingStateChangeEvent$LoadingState = nullMethod;
  LOADING = new LoadingStateChangeEvent$DefaultLoadingState_0;
  PARTIALLY_LOADED = new LoadingStateChangeEvent$DefaultLoadingState_0;
  LOADED = new LoadingStateChangeEvent$DefaultLoadingState_0;
}

var LOADED, LOADING, PARTIALLY_LOADED;
function RowHoverEvent_0(){
}

defineSeed(381, 232, {}, RowHoverEvent_0);
_.dispatch_0 = function dispatch_15(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType_0 = function getAssociatedType_16(){
  return TYPE_14;
}
;
var TYPE_14;
function TextColumn_0(){
  Column_0.call(this, new TextCell_0);
}

defineSeed(382, 356, makeCastMap([Q$HasCell, Q$Column]));
function TextHeader_0(text_0){
  Header_0.call(this, new TextCell_0);
  this.text_0 = text_0;
}

defineSeed(383, 378, makeCastMap([Q$Header]), TextHeader_0);
function $getTypeInt(this$static){
  return $clinit_DOM() , $eventGetTypeInt(this$static.type);
}

function addNativePreviewHandler(handler){
  $clinit_DOM();
  $maybeInitializeEventSystem(impl_2);
  !TYPE_15 && (TYPE_15 = new GwtEvent$Type_0);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_1(null, true);
    singleton = new Event$NativePreviewEvent_0;
  }
  return $addHandler(handlers_0, TYPE_15, handler);
}

function getEventsSunk(elem){
  return $clinit_DOM() , $getEventsSunk(elem);
}

function setEventListener(elem, listener){
  $clinit_DOM();
  setEventListener_0(elem, listener);
}

function sinkEvents_1(elem, eventBits){
  $clinit_DOM();
  $sinkEvents_1(impl_2, elem, eventBits);
}

function Event$NativePreviewEvent_0(){
}

defineSeed(388, 232, {}, Event$NativePreviewEvent_0);
_.dispatch_0 = function dispatch_16(handler){
  dynamicCast(handler, Q$Event$NativePreviewHandler).onPreviewNativeEvent(this);
  singleton.isFirstHandler = false;
}
;
_.getAssociatedType_0 = function getAssociatedType_17(){
  return TYPE_15;
}
;
_.isCanceled_0 = function isCanceled(){
  return this.isCanceled;
}
;
_.isConsumed_0 = function isConsumed(){
  return this.isConsumed;
}
;
_.revive = function revive_0(){
  this.dead = false;
  this.source = null;
  this.isCanceled = false;
  this.isConsumed = false;
  this.isFirstHandler = true;
  this.nativeEvent = null;
}
;
_.setNativeEvent = function setNativeEvent(nativeEvent){
  this.nativeEvent = nativeEvent;
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
function addValueChangeHandler(handler){
  $clinit_History();
  return impl_3?$addValueChangeHandler(impl_3, handler):null;
}

function alert_0(msg){
  $wnd.alert(msg);
}

function $get_2(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  if (index_0 < 0) {
    return null;
  }
  return dynamicCast($get_8(this$static.uiObjectList, index_0), Q$UIObject);
}

function $put_1(this$static, uiObject){
  var index_0;
  if (!this$static.freeList) {
    index_0 = this$static.uiObjectList.size_0;
    $add_16(this$static.uiObjectList, uiObject);
  }
   else {
    index_0 = this$static.freeList.index_0;
    $set_5(this$static.uiObjectList, index_0, uiObject);
    this$static.freeList = this$static.freeList.next;
  }
  ($clinit_DOM() , uiObject.element)['__uiObjectID'] = index_0;
}

function $removeByElement(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  elem['__uiObjectID'] = null;
  $set_5(this$static.uiObjectList, index_0, null);
  this$static.freeList = new ElementMapperImpl$FreeNode_0(index_0, this$static.freeList);
}

function ElementMapperImpl_0(){
  this.uiObjectList = new ArrayList_0;
}

function getIndex(elem){
  var index_0 = elem['__uiObjectID'];
  return index_0 == null?-1:index_0;
}

defineSeed(398, 1, {}, ElementMapperImpl_0);
_.freeList = null;
function ElementMapperImpl$FreeNode_0(index_0, next){
  this.index_0 = index_0;
  this.next = next;
}

defineSeed(399, 1, {}, ElementMapperImpl$FreeNode_0);
_.index_0 = 0;
function $addScrollHandler(this$static, handler){
  sinkEvents_1(this$static.getScrollableElement(), 16384);
  return $addHandler_0(this$static, handler, ($clinit_ScrollEvent() , $clinit_ScrollEvent() , TYPE_4));
}

function maybeRecalculateNativeScrollbarSize(){
  var content_0, scrollable;
  if (nativeHeight > -1) {
    return;
  }
  scrollable = $createElement($doc, 'div');
  $setPropertyImpl(scrollable.style, 'position', ($clinit_Style$Position() , 'absolute'));
  scrollable.style['top'] = -1000 + ($clinit_Style$Unit() , 'px');
  scrollable.style['left'] = '-1000px';
  scrollable.style['height'] = '100px';
  scrollable.style['width'] = '100px';
  $setPropertyImpl(scrollable.style, 'overflow', ($clinit_Style$Overflow() , 'scroll'));
  $setPropertyImpl(scrollable.style, 'direction', 'rtl');
  $appendChild($doc.body, scrollable);
  content_0 = $createElement($doc, 'div');
  $setInnerText(content_0, 'content');
  scrollable.appendChild(content_0);
  nativeHeight = ($getSubPixelOffsetHeight(scrollable) | 0) - (scrollable.clientHeight | 0);
  nativeWidth = ($getSubPixelOffsetWidth(scrollable) | 0) - (scrollable.clientWidth | 0);
  nativeRtl = $getAbsoluteLeft(content_0) > $getAbsoluteLeft(scrollable);
  $removeFromParent(scrollable);
}

defineSeed(409, 337, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.onAttach = function onAttach_1(){
  $onAttach(this);
  setEventListener(this.getScrollableElement(), this);
}
;
_.onDetach = function onDetach_1(){
  setEventListener(this.getScrollableElement(), null);
  $onDetach(this);
}
;
var nativeHeight = -1, nativeRtl = false, nativeWidth = -1;
function tryCommand(c, widgets){
  $clinit_AttachDetachException();
  var caught, e, w, w$index, w$max;
  caught = null;
  for (w$index = 0 , w$max = widgets.length; w$index < w$max; ++w$index) {
    w = widgets[w$index];
    try {
      !!w && c.execute_1(w.asWidget());
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, Q$Throwable)) {
        e = $e0;
        !caught && (caught = new HashSet_0);
        $add_17(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException_0(caught);
  }
}

function $setEnabled(this$static, enabled){
  ($clinit_DOM() , this$static.element)['disabled'] = !enabled;
}

defineSeed(415, 337, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.setEnabled = function setEnabled(enabled){
  $setEnabled(this, enabled);
}
;
function $getValue_0(this$static){
  return this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE_1:FALSE_1):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE_1:FALSE_1);
}

function $setValue_1(this$static, value_0){
  var oldValue;
  !value_0 && (value_0 = ($clinit_Boolean() , FALSE_1));
  oldValue = this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE_1:FALSE_1):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE_1:FALSE_1);
  $setChecked(this$static.inputElem, value_0.value_0);
  $setDefaultChecked(this$static.inputElem, value_0.value_0);
  if (!!oldValue && oldValue.value_0 == value_0.value_0) {
    return;
  }
}

function CheckBox_0(){
  CheckBox_1.call(this, ($clinit_DOM() , $createCheckInputElement($doc)));
  $setClassName(this.element, 'gwt-CheckBox');
}

function CheckBox_1(elem){
  var uid;
  ButtonBase_0.call(this, ($clinit_DOM() , $createElement($doc, 'span')));
  this.inputElem = elem;
  this.labelElem = $createElement($doc, 'label');
  $appendChild(this.element, this.inputElem);
  $appendChild(this.element, this.labelElem);
  uid = $createUniqueId($doc);
  $setPropertyString(this.inputElem, 'id', uid);
  $setHtmlFor(this.labelElem, uid);
  this.directionalTextHelper = new DirectionalTextHelper_0(this.labelElem);
  !!this.inputElem && $setTabIndex(this.inputElem, 0);
}

defineSeed(417, 414, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$CheckBox, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), CheckBox_0);
_.getTabIndex = function getTabIndex_0(){
  return this.inputElem.tabIndex;
}
;
_.onLoad = function onLoad_1(){
  $clinit_DOM();
  setEventListener_0(this.inputElem, this);
}
;
_.onUnload = function onUnload_1(){
  $clinit_DOM();
  setEventListener_0(this.inputElem, null);
  $setValue_1(this, this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE_1:FALSE_1):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE_1:FALSE_1));
}
;
_.setEnabled = function setEnabled_0(enabled){
  $setDisabled(this.inputElem, !enabled);
  enabled?$setStyleName_0(this, getStylePrimaryName(($clinit_DOM() , this.element)) + '-disabled', false):$setStyleName_0(this, getStylePrimaryName(($clinit_DOM() , this.element)) + '-disabled', true);
}
;
_.setFocus = function setFocus_1(focused){
  focused?$focus(this.inputElem):$blur(this.inputElem);
}
;
_.setTabIndex = function setTabIndex_0(index_0){
  !!this.inputElem && $setTabIndex(this.inputElem, index_0);
}
;
_.sinkEvents = function sinkEvents_2(eventBitsToAdd){
  this.eventsToSink == -1?sinkEvents_1(this.inputElem, eventBitsToAdd | getEventsSunk(this.inputElem)):this.eventsToSink == -1?sinkEvents_0(($clinit_DOM() , this.element), eventBitsToAdd | (this.element.__eventBits || 0)):(this.eventsToSink |= eventBitsToAdd);
}
;
function $add_3(this$static, w){
  if (this$static.widget) {
    throw new IllegalStateException_1('SimplePanel can only contain one child widget');
  }
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $remove_3(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), ($clinit_DOM() , w.element));
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent_0(w);
  !!this$static.widget && this$static.remove(this$static.widget);
  this$static.widget = w;
  if (w) {
    $clinit_DOM();
    appendChild(this$static.getContainerElement(), $getElement(this$static.widget));
    $setParent(w, this$static);
  }
}

function SimplePanel_0(){
  SimplePanel_1.call(this, ($clinit_DOM() , $createElement($doc, 'div')));
}

function SimplePanel_1(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

function SimplePanel_2(child){
  SimplePanel_0.call(this);
  this.setWidget(child);
}

defineSeed(421, 407, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), SimplePanel_2);
_.getContainerElement = function getContainerElement(){
  return $clinit_DOM() , this.element;
}
;
_.iterator = function iterator_1(){
  return new SimplePanel$1_0(this);
}
;
_.remove = function remove_2(w){
  return $remove_3(this, w);
}
;
_.setWidget = function setWidget(w){
  $setWidget(this, w);
}
;
function $addScrollHandler_0(this$static, handler){
  sinkEvents_1(($clinit_DOM() , this$static.scrollableElem), 16384);
  return $addHandler_0(this$static, handler, ($clinit_ScrollEvent() , $clinit_ScrollEvent() , TYPE_4));
}

function $getHorizontalScrollPosition(this$static){
  return $getScrollLeft(($clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumHorizontalScrollPosition(this$static){
  return $getMaximumHorizontalScrollPosition_0((!impl_4 && (impl_4 = new ScrollImpl$ScrollImplTrident_0) , $clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumVerticalScrollPosition(this$static){
  return ((($clinit_DOM() , this$static.scrollableElem).scrollHeight || 0) | 0) - (this$static.scrollableElem.clientHeight | 0);
}

function $getMinimumHorizontalScrollPosition(this$static){
  return $getMinimumHorizontalScrollPosition_0((!impl_4 && (impl_4 = new ScrollImpl$ScrollImplTrident_0) , $clinit_DOM() , this$static.scrollableElem));
}

function $getScrollableElement(this$static){
  return $clinit_DOM() , this$static.scrollableElem;
}

function $getVerticalScrollPosition(this$static){
  return (($clinit_DOM() , this$static.scrollableElem).scrollTop || 0) | 0;
}

function $onResize(this$static){
  var child;
  child = this$static.widget;
  !!child && instanceOf(child, Q$RequiresResize) && dynamicCast(child, Q$RequiresResize).onResize_0();
}

function $setHorizontalScrollPosition(this$static, position){
  $setScrollLeft(($clinit_DOM() , this$static.scrollableElem), position);
}

function $setTouchScrollingDisabled(this$static){
  var scroller, ua;
  if (this$static.touchScroller) {
    return false;
  }
  this$static.touchScroller = (scroller = (!isSupported && (isSupported = ($clinit_Boolean() , !impl_0 && (impl_0 = new TouchEvent$TouchSupportDetector_0) , impl_0.isSupported && !(ua = navigator.userAgent.toLowerCase() , /android ([3-9]+)\.([0-9]+)/.exec(ua) != null)?TRUE_1:FALSE_1)) , isSupported.value_0?new TouchScroller_0:null) , !!scroller && $setTargetWidget(scroller, this$static) , scroller);
  return !this$static.touchScroller;
}

function $setVerticalScrollPosition(this$static, position){
  $setScrollTop(($clinit_DOM() , this$static.scrollableElem), position);
}

function ScrollPanel_0(root, scrollable, container){
  SimplePanel_1.call(this, root);
  this.scrollableElem = scrollable;
  this.containerElem = container;
  this.setAlwaysShowScrollBars(false);
  this.scrollableElem.style['position'] = ($clinit_Style$Position() , 'relative');
  this.containerElem.style['position'] = 'relative';
  $setPropertyImpl(this.scrollableElem.style, 'zoom', '1');
  $setPropertyImpl(this.containerElem.style, 'zoom', '1');
  $setTouchScrollingDisabled(this);
  !impl_4 && (impl_4 = new ScrollImpl$ScrollImplTrident_0);
  $initialize(this.scrollableElem, this.containerElem);
}

defineSeed(420, 421, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Iterable]));
_.getContainerElement = function getContainerElement_0(){
  return $clinit_DOM() , this.containerElem;
}
;
_.onAttach = function onAttach_3(){
  $onAttach(this);
  setEventListener(($clinit_DOM() , this.scrollableElem), this);
}
;
_.onDetach = function onDetach_2(){
  setEventListener(($clinit_DOM() , this.scrollableElem), null);
  $onDetach(this);
}
;
_.onResize_0 = function onResize_2(){
  $onResize(this);
}
;
_.setAlwaysShowScrollBars = function setAlwaysShowScrollBars(alwaysShow){
  ($clinit_DOM() , this.scrollableElem).style['overflow'] = (alwaysShow?($clinit_Style$Overflow() , SCROLL):($clinit_Style$Overflow() , AUTO)).getCssName();
}
;
_.setHeight_0 = function setHeight_0(height){
  ($clinit_DOM() , this.element).style['height'] = height;
}
;
_.setWidth_0 = function setWidth_0(width_0){
  ($clinit_DOM() , this.element).style['width'] = width_0;
}
;
function $add_4(this$static, w, toReplace, layer){
  var toRet;
  if (w == toReplace) {
    return layer;
  }
  !!w && $removeFromParent_0(w);
  !!toReplace && $remove_4(this$static, !toReplace?null:toReplace);
  toRet = null;
  if (w) {
    toRet = $attachChild(this$static.layout, ($clinit_DOM() , w.element), null);
    $setParent(w, this$static);
  }
  return toRet;
}

function $maybeUpdateScrollbarPositions(this$static){
  var hPos, vPos;
  if (!this$static.attached) {
    return;
  }
  if (this$static.hScrollbar) {
    hPos = $getScrollLeft(($clinit_DOM() , this$static.scrollableElem));
    $getScrollLeft(this$static.hScrollbar.scrollable) != hPos && $setHorizontalScrollPosition_0(this$static.hScrollbar, hPos);
  }
  if (this$static.vScrollbar) {
    vPos = (($clinit_DOM() , this$static.scrollableElem).scrollTop || 0) | 0;
    ((this$static.vScrollbar.scrollable.scrollTop || 0) | 0) != vPos && $setVerticalScrollPosition_0(this$static.vScrollbar, vPos);
  }
  $getScrollLeft(($clinit_DOM() , this$static.element)) != 0 && $setScrollLeft(this$static.element, 0);
  ((this$static.element.scrollTop || 0) | 0) != 0 && $setScrollTop(this$static.element, 0);
}

function $maybeUpdateScrollbars(this$static){
  var contentHeight, contentWidth, isRtl, realScrollbarHeight, realScrollbarWidth, w;
  if (!this$static.attached) {
    return;
  }
  w = this$static.widget;
  contentHeight = !w?0:w.getOffsetHeight();
  contentWidth = !w?0:w.getOffsetWidth();
  realScrollbarHeight = 0;
  realScrollbarWidth = 0;
  !!this$static.hScrollbar && (this$static.alwaysShowScrollbars || (($clinit_DOM() , this$static.element).clientWidth | 0) < contentWidth) && (realScrollbarHeight = this$static.hScrollbarHeight);
  !!this$static.vScrollbar && (this$static.alwaysShowScrollbars || (($clinit_DOM() , this$static.element).clientHeight | 0) < contentHeight) && (realScrollbarWidth = this$static.vScrollbarWidth);
  if (w) {
    if (realScrollbarHeight > 0) {
      ($clinit_DOM() , w.element).style['marginBottom'] = realScrollbarHeight + ($clinit_Style$Unit() , 'px');
      contentHeight += realScrollbarHeight;
    }
     else {
      ($clinit_DOM() , w.element).style['marginBottom'] = '';
    }
  }
  isRtl = (!impl_4 && (impl_4 = new ScrollImpl$ScrollImplTrident_0) , $isRtl(($clinit_DOM() , this$static.scrollableElem)));
  if (realScrollbarHeight > 0) {
    $setVisible(this$static.hScrollbarLayer, true);
    isRtl?$setLeftRight(this$static.hScrollbarLayer, realScrollbarWidth, ($clinit_Style$Unit() , PX), 0, PX):$setLeftRight(this$static.hScrollbarLayer, 0, ($clinit_Style$Unit() , PX), realScrollbarWidth, PX);
    $setBottomHeight(this$static.hScrollbarLayer, ($clinit_Style$Unit() , PX), realScrollbarHeight, PX);
    $setScrollWidth(this$static.hScrollbar, 0 > contentWidth - realScrollbarWidth?0:contentWidth - realScrollbarWidth);
  }
   else 
    !!this$static.hScrollbarLayer && $setVisible(this$static.hScrollbarLayer, false);
  if (realScrollbarWidth > 0) {
    $setVisible(this$static.vScrollbarLayer, true);
    $setTopBottom(this$static.vScrollbarLayer, ($clinit_Style$Unit() , PX), realScrollbarHeight, PX);
    isRtl?$setLeftWidth(this$static.vScrollbarLayer, PX, realScrollbarWidth, PX):$setRightWidth(this$static.vScrollbarLayer, PX, realScrollbarWidth, PX);
    $setScrollHeight(this$static.vScrollbar, 0 > contentHeight - realScrollbarHeight?0:contentHeight - realScrollbarHeight);
  }
   else 
    !!this$static.vScrollbarLayer && $setVisible(this$static.vScrollbarLayer, false);
  $setBottomHeight(this$static.cornerLayer, ($clinit_Style$Unit() , PX), realScrollbarHeight, PX);
  isRtl?$setLeftWidth(this$static.cornerLayer, PX, realScrollbarWidth, PX):$setRightWidth(this$static.cornerLayer, PX, realScrollbarWidth, PX);
  $setVisible(this$static.cornerLayer, this$static.hScrollbarHeight > 0 && this$static.vScrollbarWidth > 0);
  $layout(this$static.layout, 0, null);
  $maybeUpdateScrollbarPositions(this$static);
}

function $onResize_0(this$static){
  $maybeUpdateScrollbars(this$static);
  $onResize(this$static);
}

function $remove_4(this$static, w){
  var hScrollbarWidget, toRet, vScrollbarWidget;
  if (w.parent_0 != this$static) {
    return false;
  }
  if (w == this$static.widget) {
    toRet = $remove_3(this$static, w);
    $maybeUpdateScrollbars(this$static);
    return toRet;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeFromParent(($clinit_DOM() , w.element));
    hScrollbarWidget = !this$static.hScrollbar?null:this$static.hScrollbar;
    vScrollbarWidget = !this$static.vScrollbar?null:this$static.vScrollbar;
    if (w == hScrollbarWidget) {
      this$static.hScrollbar = null;
      $removeHandler(this$static.hScrollbarHandler.real);
      this$static.hScrollbarHandler = null;
      $removeChild_0(this$static.layout, this$static.hScrollbarLayer);
      this$static.hScrollbarLayer = null;
    }
     else if (w == vScrollbarWidget) {
      this$static.vScrollbar = null;
      $removeHandler(this$static.vScrollbarHandler.real);
      this$static.vScrollbarHandler = null;
      $removeChild_0(this$static.layout, this$static.vScrollbarLayer);
      this$static.vScrollbarLayer = null;
    }
  }
  $maybeUpdateScrollbars(this$static);
  return true;
}

function $setAlwaysShowScrollBars(this$static, alwaysShow){
  if (this$static.alwaysShowScrollbars != alwaysShow) {
    this$static.alwaysShowScrollbars = alwaysShow;
    $maybeUpdateScrollbars(this$static);
  }
}

function $setHorizontalScrollbar(this$static, scrollbar, height){
  this$static.hScrollbarLayer = $add_4(this$static, scrollbar, this$static.hScrollbar, this$static.hScrollbarLayer);
  this$static.hScrollbar = scrollbar;
  this$static.hScrollbarHeight = height;
  !!scrollbar && (this$static.hScrollbarHandler = $addScrollHandler(scrollbar, new CustomScrollPanel$2_0(this$static, scrollbar)));
  $maybeUpdateScrollbars(this$static);
}

function $setVerticalScrollbar(this$static, scrollbar, width_0){
  this$static.vScrollbarLayer = $add_4(this$static, scrollbar, this$static.vScrollbar, this$static.vScrollbarLayer);
  this$static.vScrollbar = scrollbar;
  this$static.vScrollbarWidth = width_0;
  !!scrollbar && (this$static.vScrollbarHandler = $addScrollHandler(scrollbar, new CustomScrollPanel$3_0(this$static, scrollbar)));
  $maybeUpdateScrollbars(this$static);
}

function $setWidget_0(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  $setWidget(this$static, w);
  $maybeUpdateScrollbars(this$static);
}

function CustomScrollPanel_0(){
  var containerElem, containerResizeDelegate, scrollable, style;
  ScrollPanel_0.call(this, ($clinit_DOM() , $createElement($doc, 'div')), $createElement($doc, 'div'), $createElement($doc, 'div'));
  this.containerResizeImpl = new ResizeLayoutPanel$ImplTrident_0;
  this.ignoreContentUntil = 0;
  this.ignoreScrollbarsUntil = 0;
  style = ($clinit_CustomScrollPanel_Resources_fr_InlineClientBundleGenerator$customScrollPanelStyleInitializer() , customScrollPanelStyle);
  $ensureInjected_1(style);
  $setClassName(this.element, 'GPBYFDEMH');
  this.layout = new Layout_0(this.element);
  containerElem = this.containerElem;
  $setClassName(containerElem, getInlineBlockStyle());
  scrollable = this.scrollableElem;
  $setPropertyImpl(scrollable.style, 'overflow', ($clinit_Style$Overflow() , 'scroll'));
  scrollable.appendChild(containerElem);
  this.scrollableLayer = $attachChild(this.layout, scrollable, null);
  this.element.style['overflow'] = 'hidden';
  this.cornerElem = $createElement($doc, 'div');
  $addClassName(this.cornerElem, 'GPBYFDENH');
  this.cornerLayer = $attachChild(this.layout, this.cornerElem, null);
  $setHorizontalScrollbar(this, new NativeHorizontalScrollbar_0, (maybeRecalculateNativeScrollbarSize() , nativeHeight));
  $setVerticalScrollbar(this, new NativeVerticalScrollbar_0, (maybeRecalculateNativeScrollbarSize() , nativeWidth));
  containerResizeDelegate = new CustomScrollPanel$1_0(this);
  $init_1(this.containerResizeImpl, this.containerElem, containerResizeDelegate);
  sinkEvents_1(this.element, 16384);
  sinkEvents_1(this.scrollableElem, 16384);
}

function CustomScrollPanel_1(child){
  CustomScrollPanel_0.call(this, !DEFAULT_RESOURCES_0 && (DEFAULT_RESOURCES_0 = new CustomScrollPanel_Resources_fr_InlineClientBundleGenerator_0));
  $setWidget_0(this, child);
}

defineSeed(419, 420, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Iterable]), CustomScrollPanel_1);
_.doAttachChildren = function doAttachChildren_1(){
  tryCommand(($clinit_AttachDetachException() , attachCommand), initValues(_3Lcom_google_gwt_user_client_ui_IsWidget_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$IsWidget, [this.widget, this.hScrollbar, this.vScrollbar]));
}
;
_.doDetachChildren = function doDetachChildren_1(){
  tryCommand(($clinit_AttachDetachException() , detachCommand), initValues(_3Lcom_google_gwt_user_client_ui_IsWidget_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$IsWidget, [this.widget, this.hScrollbar, this.vScrollbar]));
}
;
_.onAttach = function onAttach_4(){
  $onAttach(this);
  setEventListener(($clinit_DOM() , this.scrollableElem), this);
  $onAttach_1(this.containerResizeImpl);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_6(event_0){
  var curTime;
  if (16384 == ($clinit_DOM() , $eventGetTypeInt(event_0.type))) {
    curTime = currentTimeMillis();
    if (curTime > this.ignoreContentUntil) {
      this.ignoreScrollbarsUntil = curTime + 500;
      $maybeUpdateScrollbarPositions(this);
    }
  }
  $onBrowserEvent_3(this, event_0);
}
;
_.onDetach = function onDetach_3(){
  setEventListener(($clinit_DOM() , this.scrollableElem), null);
  $onDetach(this);
  $onDetach_1(this.containerResizeImpl);
  $removeLayerRefs(this.layout.parentElem);
}
;
_.onLoad = function onLoad_2(){
  var barWidth, barHeight;
  barWidth = (maybeRecalculateNativeScrollbarSize() , nativeWidth);
  barHeight = (maybeRecalculateNativeScrollbarSize() , nativeHeight);
  $setTopBottom(this.scrollableLayer, ($clinit_Style$Unit() , PX), -barHeight, PX);
  maybeRecalculateNativeScrollbarSize();
  nativeRtl && (!impl_4 && (impl_4 = new ScrollImpl$ScrollImplTrident_0) , $isRtl(($clinit_DOM() , this.scrollableElem)))?$setLeftRight(this.scrollableLayer, -barWidth, PX, 0, PX):$setLeftRight(this.scrollableLayer, 0, PX, -barWidth, PX);
  $layout(this.layout, 0, null);
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new CustomScrollPanel$4_0(this));
}
;
_.onResize_0 = function onResize_3(){
  $onResize_0(this);
}
;
_.remove = function remove_3(w){
  return $remove_4(this, w);
}
;
_.setAlwaysShowScrollBars = function setAlwaysShowScrollBars_0(alwaysShow){
  $setAlwaysShowScrollBars(this, alwaysShow);
}
;
_.setWidget = function setWidget_0(w){
  $setWidget_0(this, w);
}
;
_.alwaysShowScrollbars = false;
_.hScrollbarHeight = 0;
_.ignoreContentUntil = 0;
_.ignoreScrollbarsUntil = 0;
_.vScrollbarWidth = 0;
var DEFAULT_RESOURCES_0;
function CustomScrollPanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(422, 1, {}, CustomScrollPanel$1_0);
_.onResize_0 = function onResize_4(){
  $maybeUpdateScrollbars(this.this$0);
}
;
function CustomScrollPanel$2_0(this$0, val$scrollbar){
  this.this$0 = this$0;
  this.val$scrollbar = val$scrollbar;
}

defineSeed(423, 1, makeCastMap([Q$ScrollHandler, Q$EventHandler]), CustomScrollPanel$2_0);
_.onScroll = function onScroll_0(event_0){
  var curTime, hPos;
  curTime = currentTimeMillis();
  if (curTime > this.this$0.ignoreScrollbarsUntil) {
    this.this$0.ignoreContentUntil = curTime + 500;
    hPos = $getScrollLeft(this.val$scrollbar.scrollable);
    $getScrollLeft(($clinit_DOM() , this.this$0.scrollableElem)) != hPos && $setHorizontalScrollPosition(this.this$0, hPos);
  }
}
;
function CustomScrollPanel$3_0(this$0, val$scrollbar){
  this.this$0 = this$0;
  this.val$scrollbar = val$scrollbar;
}

defineSeed(424, 1, makeCastMap([Q$ScrollHandler, Q$EventHandler]), CustomScrollPanel$3_0);
_.onScroll = function onScroll_1(event_0){
  var curTime, vPos;
  curTime = currentTimeMillis();
  if (curTime > this.this$0.ignoreScrollbarsUntil) {
    this.this$0.ignoreContentUntil = curTime + 500;
    vPos = (this.val$scrollbar.scrollable.scrollTop || 0) | 0;
    (($clinit_DOM() , this.this$0.scrollableElem).scrollTop || 0) | 0;
    ((this.this$0.scrollableElem.scrollTop || 0) | 0) != vPos && $setVerticalScrollPosition(this.this$0, vPos);
  }
}
;
function CustomScrollPanel$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(425, 1, {}, CustomScrollPanel$4_0);
_.execute_0 = function execute_16(){
  $maybeUpdateScrollbars(this.this$0);
}
;
function CustomScrollPanel_Resources_fr_InlineClientBundleGenerator_0(){
}

defineSeed(426, 1, {}, CustomScrollPanel_Resources_fr_InlineClientBundleGenerator_0);
var customScrollPanelStyle;
function $ensureInjected_1(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_1(toInject, '.GPBYFDENH{background:#efefef;}');
    schedule();
    return true;
  }
  return false;
}

function CustomScrollPanel_Resources_fr_InlineClientBundleGenerator$1_0(){
}

defineSeed(427, 1, {}, CustomScrollPanel_Resources_fr_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_CustomScrollPanel_Resources_fr_InlineClientBundleGenerator$customScrollPanelStyleInitializer(){
  $clinit_CustomScrollPanel_Resources_fr_InlineClientBundleGenerator$customScrollPanelStyleInitializer = nullMethod;
  customScrollPanelStyle = new CustomScrollPanel_Resources_fr_InlineClientBundleGenerator$1_0;
}

function $next(this$static){
  var i, w;
  for (i = this$static.index_0 + 1; i < this$static.widgetCount; i++) {
    this$static.index_0 = i;
    w = $get_3(this$static.provider, i);
    if (w) {
      return w;
    }
  }
  throw new NoSuchElementException_0;
}

function FiniteWidgetIterator_0(provider){
  this.provider = provider;
  this.widgetCount = 3;
}

defineSeed(434, 1, makeCastMap([Q$Iterator]), FiniteWidgetIterator_0);
_.hasNext = function hasNext(){
  var i, w;
  for (i = this.index_0 + 1; i < this.widgetCount; i++) {
    w = $get_3(this.provider, i);
    if (w) {
      return true;
    }
  }
  return false;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_0 = function remove_5(){
  var w;
  if (this.index_0 < 0 || this.index_0 >= this.widgetCount) {
    throw new IllegalStateException_0;
  }
  w = $get_3(this.provider, this.index_0);
  if (!w) {
    throw new IllegalStateException_1('Widget was already removed.');
  }
  $removeFromParent_0(w);
}
;
_.index_0 = -1;
_.widgetCount = 0;
function $addCells(tbody, row, num){
  var i, rowElem, tdElement;
  rowElem = tbody.children[row];
  for (i = 0; i < num; i++) {
    tdElement = $createElement($doc, 'td');
    rowElem.appendChild(tdElement);
  }
}

function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds_0(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_1('Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = this$static.getCellCount(row);
  if (cellSize <= column) {
    throw new IndexOutOfBoundsException_1('Column index: ' + column + ', Column size: ' + this$static.getCellCount(row));
  }
}

function $checkRowBounds_0(this$static, row){
  var rowSize;
  rowSize = this$static.getRowCount();
  if (row >= rowSize || row < 0) {
    throw new IndexOutOfBoundsException_1('Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $cleanCell(this$static, row, column, clearInnerHTML){
  var td;
  td = $getRawElement(this$static.cellFormatter, row, column);
  $internalClearCell(this$static, ($clinit_DOM() , td), clearInnerHTML);
  return td;
}

function $getDOMCellCount(tableBody, row){
  var rowElement;
  rowElement = tableBody.children[row];
  return rowElement.children.length;
}

function $getDOMRowCount(this$static){
  return ($clinit_DOM() , this$static.bodyElem).children.length;
}

function $getDOMRowCount_0(tbody){
  return ($clinit_DOM() , tbody).children.length;
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = ($clinit_DOM() , $clinit_DOM() , $getFirstChildElement(td));
  widget = null;
  !!maybeChild && (widget = dynamicCast($get_2(this$static.widgetMap, maybeChild), Q$Widget));
  if (widget) {
    $remove_6(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && $setInnerHTML(td, '');
    return false;
  }
}

function $remove_6(this$static, widget){
  var elem;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = ($clinit_DOM() , widget.element);
    $removeChild($getParentElement(elem), elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount;
  columnCount = this$static.getCellCount(row);
  for (column = 0; column < columnCount; ++column) {
    $cleanCell(this$static, row, column, false);
  }
  $removeChild(this$static.bodyElem, $getRow(this$static.bodyElem, row));
}

function $setCellFormatter(this$static, cellFormatter){
  this$static.cellFormatter = cellFormatter;
}

function $setColumnFormatter(this$static, formatter){
  !!this$static.columnFormatter && (formatter.columnGroup = this$static.columnFormatter.columnGroup);
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setText(this$static, row, column, text_0){
  var td;
  $prepareCell(this$static, row, column);
  td = $cleanCell(this$static, row, column, text_0 == null);
  text_0 != null && $setInnerText(td, text_0);
}

function $setWidget_1(this$static, row, column, widget){
  var td;
  this$static.prepareCell(row, column);
  td = $cleanCell(this$static, row, column, true);
  if (widget) {
    $removeFromParent_0(widget);
    $put_1(this$static.widgetMap, widget);
    $clinit_DOM();
    $appendChild(td, ($clinit_PotentialElement() , $resolve(widget.element)));
    $setParent(widget, this$static);
  }
}

function HTMLTable_0(){
  this.widgetMap = new ElementMapperImpl_0;
  this.tableElem = ($clinit_DOM() , $createElement($doc, 'table'));
  this.bodyElem = $createElement($doc, 'tbody');
  $appendChild(this.tableElem, ($clinit_PotentialElement() , $resolve(this.bodyElem)));
  $setElement(this, this.tableElem);
}

defineSeed(436, 407, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]));
_.iterator = function iterator_2(){
  return new HTMLTable$1_0(this);
}
;
_.remove = function remove_6(widget){
  return $remove_6(this, widget);
}
;
function $getCellCount(this$static, row){
  $checkRowBounds_0(this$static, row);
  return $getDOMCellCount(($clinit_DOM() , this$static.bodyElem), row);
}

function $prepareCell(this$static, row, column){
  var cellCount, required;
  $prepareRow(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_1('Cannot create a column with a negative index: ' + column);
  }
  cellCount = ($checkRowBounds_0(this$static, row) , $getDOMCellCount(($clinit_DOM() , this$static.bodyElem), row));
  required = column + 1 - cellCount;
  required > 0 && $addCells(this$static.bodyElem, row, required);
}

function $prepareRow(this$static, row){
  var i, rowCount, tr;
  if (row < 0) {
    throw new IndexOutOfBoundsException_1('Cannot create a row with a negative index: ' + row);
  }
  rowCount = $getDOMRowCount_0(this$static.bodyElem);
  for (i = rowCount; i <= row; i++) {
    i != $getDOMRowCount_0(this$static.bodyElem) && $checkRowBounds_0(this$static, i);
    tr = ($clinit_DOM() , $createElement($doc, 'tr'));
    insertChild(this$static.bodyElem, tr, i);
  }
}

function $removeAllRows(this$static){
  var i, numRows;
  numRows = $getDOMRowCount_0(this$static.bodyElem);
  for (i = 0; i < numRows; i++) {
    $removeRow(this$static, 0);
  }
}

function FlexTable_0(){
  HTMLTable_0.call(this);
  $setCellFormatter(this, new FlexTable$FlexCellFormatter_0(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter_0(this));
}

defineSeed(435, 436, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), FlexTable_0);
_.getCellCount = function getCellCount(row){
  return $getCellCount(this, row);
}
;
_.getRowCount = function getRowCount(){
  return $getDOMRowCount_0(this.bodyElem);
}
;
_.prepareCell = function prepareCell(row, column){
  $prepareCell(this, row, column);
}
;
function $addStyleName(this$static, row, column, styleName){
  var td;
  this$static.this$0.prepareCell(row, column);
  td = $getCellElement(this$static.this$0.bodyElem, row, column);
  setStyleName(td, styleName, true);
}

function $getCellElement(tbody, row, col){
  return $getCells(tbody.children[row])[col];
}

function $getElement_0(this$static, row, column){
  $checkCellBounds(this$static.this$0, row, column);
  return $clinit_DOM() , $getCellElement(this$static.this$0.bodyElem, row, column);
}

function $getRawElement(this$static, row, column){
  return $getCellElement(this$static.this$0.bodyElem, row, column);
}

function HTMLTable$CellFormatter_0(this$0){
  this.this$0 = this$0;
}

defineSeed(438, 1, {}, HTMLTable$CellFormatter_0);
function FlexTable$FlexCellFormatter_0(this$0){
  HTMLTable$CellFormatter_0.call(this, this$0);
}

defineSeed(437, 438, makeCastMap([Q$FlexTable$FlexCellFormatter]), FlexTable$FlexCellFormatter_0);
function $prepareRow_0(this$static, row){
  if (row < 0) {
    throw new IndexOutOfBoundsException_1('Cannot access a row with a negative index: ' + row);
  }
  if (row >= this$static.numRows) {
    throw new IndexOutOfBoundsException_1('Row index: ' + row + ', Row size: ' + this$static.numRows);
  }
}

function $removeRow_0(this$static, row){
  $removeRow(this$static, row);
  --this$static.numRows;
}

function $resizeColumns(this$static, columns){
  var i, j, td, tr, tr_0, td_0, td_1;
  if (this$static.numColumns == columns) {
    return;
  }
  if (columns < 0) {
    throw new IndexOutOfBoundsException_1('Cannot set number of columns to ' + columns);
  }
  if (this$static.numColumns > columns) {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns - 1; j >= columns; j--) {
        $checkCellBounds(this$static, i, j);
        td = $cleanCell(this$static, i, j, false);
        tr = $getRow(this$static.bodyElem, i);
        tr.removeChild(td);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns; j < columns; j++) {
        tr_0 = $getRow(this$static.bodyElem, i);
        td_0 = (td_1 = ($clinit_DOM() , $createElement($doc, 'td')) , $setInnerHTML(td_1, '&nbsp;') , $clinit_DOM() , td_1);
        $insertChild(tr_0, ($clinit_PotentialElement() , $resolve(td_0)), j);
      }
    }
  }
  this$static.numColumns = columns;
  $resizeColumnGroup(this$static.columnFormatter, columns, false);
}

function $resizeRows(this$static, rows_0){
  if (this$static.numRows == rows_0) {
    return;
  }
  if (rows_0 < 0) {
    throw new IndexOutOfBoundsException_1('Cannot set number of rows to ' + rows_0);
  }
  if (this$static.numRows < rows_0) {
    addRows(($clinit_DOM() , this$static.bodyElem), rows_0 - this$static.numRows, this$static.numColumns);
    this$static.numRows = rows_0;
  }
   else {
    while (this$static.numRows > rows_0) {
      $removeRow_0(this$static, this$static.numRows - 1);
    }
  }
}

function Grid_0(){
  HTMLTable_0.call(this);
  $setCellFormatter(this, new HTMLTable$CellFormatter_0(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter_0(this));
}

function addRows(table, rows_0, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows_0; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

defineSeed(440, 436, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), Grid_0);
_.getCellCount = function getCellCount_0(row){
  return this.numColumns;
}
;
_.getRowCount = function getRowCount_0(){
  return this.numRows;
}
;
_.prepareCell = function prepareCell_0(row, column){
  $prepareRow_0(this, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_1('Cannot access a column with a negative index: ' + column);
  }
  if (column >= this.numColumns) {
    throw new IndexOutOfBoundsException_1('Column index: ' + column + ', Column size: ' + this.numColumns);
  }
}
;
_.numColumns = 0;
_.numRows = 0;
function $addAndReplaceElement(this$static, widget, toReplace){
  var children, next, toRemove;
  if (toReplace == ($clinit_DOM() , widget.element)) {
    return;
  }
  $removeFromParent_0(widget);
  toRemove = null;
  children = new WidgetCollection$WidgetIterator_0(this$static.children_0);
  while (children.index_0 < children.this$0.size_0) {
    next = $next_2(children);
    if (isOrHasChildImpl(toReplace, next.element)) {
      if (next.element == toReplace) {
        toRemove = next;
        break;
      }
      $remove_11(children);
    }
  }
  $add_11(this$static.children_0, widget);
  if (!toRemove) {
    $replaceChild(toReplace.parentNode, widget.element, toReplace);
  }
   else {
    $insertBefore(toReplace.parentNode, widget.element, toReplace);
    $remove_1(this$static, toRemove);
  }
  $setParent(widget, this$static);
}

function HTMLPanel_0(html){
  ComplexPanel_0.call(this);
  $setElement(this, $createElement($doc, 'div'));
  $setInnerHTML(($clinit_DOM() , this.element), html);
}

defineSeed(444, 406, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), HTMLPanel_0);
function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.size_0) {
    if ($get_8(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next_0(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.size_0) {
    throw new NoSuchElementException_0;
  }
  result = dynamicCast($get_8(this$static.widgetList, this$static.nextIndex), Q$Widget);
  this$static.lastIndex_0 = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function HTMLTable$1_0(this$0){
  this.this$0 = this$0;
  this.widgetList = this.this$0.widgetMap.uiObjectList;
  $findNext(this);
}

defineSeed(445, 1, makeCastMap([Q$Iterator]), HTMLTable$1_0);
_.hasNext = function hasNext_0(){
  return this.nextIndex < this.widgetList.size_0;
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove_0 = function remove_7(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw new IllegalStateException_0;
  }
  w = dynamicCast($get_8(this.widgetList, this.lastIndex_0), Q$Widget);
  $removeFromParent_0(w);
  this.lastIndex_0 = -1;
}
;
_.lastIndex_0 = -1;
_.nextIndex = -1;
function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = ($clinit_DOM() , $createElement($doc, 'colgroup'));
    insertChild(this$static.this$0.tableElem, this$static.columnGroup, 0);
    $appendChild(this$static.columnGroup, ($clinit_PotentialElement() , $resolve($createElement($doc, 'col'))));
  }
}

function $resizeColumnGroup(this$static, columns, growOnly){
  var i, num;
  columns = columns > 1?columns:1;
  num = this$static.columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; i++) {
      $appendChild(this$static.columnGroup, $createElement($doc, 'col'));
    }
  }
   else if (!growOnly && num > columns) {
    for (i = num; i > columns; i--) {
      $removeChild(this$static.columnGroup, this$static.columnGroup.lastChild);
    }
  }
}

function HTMLTable$ColumnFormatter_0(this$0){
  this.this$0 = this$0;
}

defineSeed(446, 1, {}, HTMLTable$ColumnFormatter_0);
function $getCells(row){
  return row.children;
}

function $getRow(tbody, row){
  return $getRow_0(($clinit_DOM() , tbody), row);
}

function $getRow_0(tbody, row){
  return $clinit_DOM() , tbody.children[row];
}

function $add_7(this$static, w, toReplace, container){
  if (w == toReplace) {
    return;
  }
  !!w && $removeFromParent_0(w);
  !!toReplace && $remove_7(this$static, toReplace);
  if (w) {
    $appendChild(container, ($clinit_DOM() , w.element));
    $setParent(w, this$static);
  }
}

function $createContainer(){
  var container;
  container = $createElement($doc, 'div');
  $setPropertyImpl(container.style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(container.style, 'display', ($clinit_Style$Display() , 'none'));
  container.style['left'] = 0 + ($clinit_Style$Unit() , 'px');
  container.style['width'] = '100%';
  return container;
}

function $forceLayout(this$static){
  var height, remainingHeight;
  if (!this$static.attached || !this$static.content_0) {
    return;
  }
  remainingHeight = ($clinit_DOM() , this$static.element).clientHeight | 0;
  if (this$static.header) {
    height = max_0(0, $getSubPixelOffsetHeight(this$static.headerContainer) | 0);
    remainingHeight -= height;
    this$static.contentContainer.style['top'] = height + ($clinit_Style$Unit() , 'px');
  }
   else {
    this$static.contentContainer.style['top'] = 0 + ($clinit_Style$Unit() , 'px');
  }
  !!this$static.footer && (remainingHeight -= $getSubPixelOffsetHeight(this$static.footerContainer) | 0);
  this$static.contentContainer.style['height'] = (0 > remainingHeight?0:remainingHeight) + ($clinit_Style$Unit() , 'px');
  !!this$static.content_0 && $onResize_0(this$static.content_0);
}

function $onAttach_0(this$static){
  $onAttach(this$static);
  $onAttach_1(this$static.headerImpl);
  $onAttach_1(this$static.footerImpl);
  $scheduledLayout(this$static);
}

function $onDetach_0(this$static){
  $onDetach(this$static);
  $onDetach_1(this$static.headerImpl);
  $onDetach_1(this$static.footerImpl);
}

function $remove_7(this$static, w){
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeFromParent(($clinit_DOM() , w.element));
    if (w == this$static.content_0) {
      this$static.content_0 = null;
      this$static.contentContainer.style['display'] = ($clinit_Style$Display() , 'none');
    }
     else if (w == this$static.header) {
      this$static.header = null;
      this$static.headerContainer.style['display'] = ($clinit_Style$Display() , 'none');
    }
     else if (w == this$static.footer) {
      this$static.footer = null;
      this$static.footerContainer.style['display'] = ($clinit_Style$Display() , 'none');
    }
  }
  return true;
}

function $scheduledLayout(this$static){
  if (this$static.attached && !this$static.layoutScheduled) {
    this$static.layoutScheduled = true;
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), this$static.layoutCmd);
  }
}

function $setContentWidget(this$static, w){
  $setPropertyImpl(this$static.contentContainer.style, 'display', '');
  $add_7(this$static, w, this$static.content_0, this$static.contentContainer);
  this$static.content_0 = w;
  $scheduledLayout(this$static);
}

function $setFooterWidget(this$static, w){
  $setPropertyImpl(this$static.footerContainer.style, 'display', '');
  $add_7(this$static, w, this$static.footer, this$static.footerContainer);
  this$static.footer = w;
  $scheduledLayout(this$static);
}

function $setHeaderWidget(this$static, w){
  $setPropertyImpl(this$static.headerContainer.style, 'display', '');
  $add_7(this$static, w, this$static.header, this$static.headerContainer);
  this$static.header = w;
  $scheduledLayout(this$static);
}

function HeaderPanel_0(){
  var elem, resizeDelegate;
  this.footerImpl = new ResizeLayoutPanel$ImplTrident_0;
  this.headerImpl = new ResizeLayoutPanel$ImplTrident_0;
  this.layoutCmd = new HeaderPanel$1_0(this);
  elem = $createElement($doc, 'div');
  $setPropertyImpl(elem.style, 'position', ($clinit_Style$Position() , 'relative'));
  $setPropertyImpl(elem.style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));
  $setElement_0(this, ($clinit_DOM() , elem));
  resizeDelegate = new HeaderPanel$2_0(this);
  this.headerContainer = $createContainer();
  this.headerContainer.style['top'] = 0 + ($clinit_Style$Unit() , 'px');
  $init_1(this.headerImpl, this.headerContainer, resizeDelegate);
  $appendChild(elem, this.headerContainer);
  this.footerContainer = $createContainer();
  this.footerContainer.style['bottom'] = '0px';
  $init_1(this.footerImpl, this.footerContainer, resizeDelegate);
  $appendChild(elem, this.footerContainer);
  this.contentContainer = $createContainer();
  this.contentContainer.style['overflow'] = 'hidden';
  this.contentContainer.style['top'] = '0px';
  this.contentContainer.style['height'] = '0px';
  $appendChild(elem, this.contentContainer);
}

defineSeed(452, 407, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$RequiresResize, Q$UIObject, Q$Widget, Q$Iterable]), HeaderPanel_0);
_.iterator = function iterator_3(){
  return new FiniteWidgetIterator_0(new HeaderPanel$WidgetProviderImpl_0(this));
}
;
_.onAttach = function onAttach_5(){
  $onAttach_0(this);
}
;
_.onDetach = function onDetach_4(){
  $onDetach_0(this);
}
;
_.onResize_0 = function onResize_5(){
  $scheduledLayout(this);
}
;
_.remove = function remove_8(w){
  return $remove_7(this, w);
}
;
_.layoutScheduled = false;
function HeaderPanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(453, 1, {}, HeaderPanel$1_0);
_.execute_0 = function execute_17(){
  this.this$0.layoutScheduled = false;
  $forceLayout(this.this$0);
}
;
function HeaderPanel$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(454, 1, {}, HeaderPanel$2_0);
_.onResize_0 = function onResize_6(){
  $scheduledLayout(this.this$0);
}
;
function $get_3(this$static, index_0){
  switch (index_0) {
    case 0:
      return this$static.this$0.header;
    case 1:
      return this$static.this$0.content_0;
    case 2:
      return this$static.this$0.footer;
  }
  throw new ArrayIndexOutOfBoundsException_0(index_0);
}

function HeaderPanel$WidgetProviderImpl_0(this$0){
  this.this$0 = this$0;
}

defineSeed(455, 1, {}, HeaderPanel$WidgetProviderImpl_0);
function Image_2(resource){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState_2(this, resource.url_0, resource.width_0, resource.height_0));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Image');
}

defineSeed(458, 337, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), Image_2);
function Image$UnclippedState_2(image, url_0, width_0, height){
  Image$UnclippedState_1.call(this, image, url_0);
  $setWidth(($clinit_DOM() , image.element), width_0);
  $setHeight(image.element, height);
}

defineSeed(462, 460, {}, Image$UnclippedState_2);
function $checkIndex(this$static, index_0){
  if (index_0 < 0 || index_0 >= ($clinit_DOM() , this$static.element).options.length) {
    throw new IndexOutOfBoundsException_0;
  }
}

function $getItemText(this$static, index_0){
  $checkIndex(this$static, index_0);
  return $getOptionText(($clinit_DOM() , this$static.element).options[index_0]);
}

function $getOptionText(option){
  var text_0, node;
  text_0 = option.text;
  (node = option.getAttributeNode('bidiwrapped') , !!(node && node.specified)) && text_0.length > 1 && (text_0 = $substring_0(text_0, 1, text_0.length - 1));
  return text_0;
}

function $getSelectElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $getValue_1(this$static, index_0){
  $checkIndex(this$static, index_0);
  return ($clinit_DOM() , this$static.element).options[index_0].value;
}

function $insertItem(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = ($clinit_DOM() , this$static.element);
  option = $createElement($doc, 'option');
  option.text = item_0;
  $removeAttribute(option, 'bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    $selectAdd(select, option, null);
  }
   else {
    before = select.options[index_0];
    $selectAdd(select, option, before);
  }
}

function $setSelectedIndex_0(this$static, index_0){
  $setSelectedIndex(($clinit_DOM() , this$static.element), index_0);
}

function ListBox_0(){
  var html;
  FocusWidget_0.call(this, (html = '<SELECT>' , $doc.createElement(html)));
  $setClassName(($clinit_DOM() , this.element), 'gwt-ListBox');
}

defineSeed(466, 415, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), ListBox_0);
function $setHorizontalScrollPosition_0(this$static, position){
  $setScrollLeft(this$static.scrollable, position);
}

function $setScrollWidth(this$static, width_0){
  this$static.contentDiv.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
}

function NativeHorizontalScrollbar_0(){
  var style;
  $setElement(this, $build_f_div1(new NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Widgets_0(this)));
  $addClassName(($clinit_DOM() , this.element), getInlineBlockStyle());
  $setHeight_0(this, (maybeRecalculateNativeScrollbarSize() , nativeHeight) + 'px');
  style = ($clinit_NativeHorizontalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$nativeHorizontalScrollbarStyleInitializer() , nativeHorizontalScrollbarStyle);
  $ensureInjected_3(style);
  $addClassName(this.scrollable, 'GPBYFDEOH');
  !impl_4 && (impl_4 = new ScrollImpl$ScrollImplTrident_0);
  $initialize(this.scrollable, this.contentDiv);
}

defineSeed(467, 409, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), NativeHorizontalScrollbar_0);
_.getScrollableElement = function getScrollableElement(){
  return this.scrollable;
}
;
function $build_f_div1(this$static){
  var attachRecord20, f_div1, scrollable, contentDiv;
  f_div1 = fromHtml($html1(this$static.domId0, this$static.domId1).html);
  attachRecord20 = attachToDom(f_div1);
  scrollable = $get_1(new LazyDomElement_0(this$static.domId0));
  this$static.owner.scrollable = scrollable;
  contentDiv = $get_1(new LazyDomElement_0(this$static.domId1));
  this$static.owner.contentDiv = contentDiv;
  attachRecord20.origParent?$insertBefore(attachRecord20.origParent, attachRecord20.element, attachRecord20.origSibling):orphan(attachRecord20.element);
  return f_div1;
}

function NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.style_0 = (new NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator_0 , $clinit_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$styleInitializer() , style_0);
  $ensureInjected_2(this.style_0);
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
}

defineSeed(468, 1, {}, NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Widgets_0);
function NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator_0(){
}

defineSeed(469, 1, {}, NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator_0);
var style_0;
function $ensureInjected_2(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_1(toInject, '.GPBYFDEGI{position:relative;overflow:hidden;}.GPBYFDEFI{position:absolute;left:0;bottom:0;width:100%;height:100px;overflow:auto;overflow-x:scroll;overflow-y:hidden;}.GPBYFDEEI{height:1px;}');
    schedule();
    return true;
  }
  return false;
}

function NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$1_0(){
}

defineSeed(470, 1, {}, NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$styleInitializer(){
  $clinit_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_0 = new NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$1_0;
}

function $html1(arg2, arg4){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<div class='");
  $append_11(sb, htmlEscape('GPBYFDEGI'));
  $append_2(sb.impl, "'><div class='");
  $append_11(sb, htmlEscape('GPBYFDEFI'));
  $append_2(sb.impl, "' id='");
  $append_11(sb, htmlEscape(arg2));
  $append_2(sb.impl, "'> <div class='");
  $append_11(sb, htmlEscape('GPBYFDEEI'));
  $append_2(sb.impl, "' id='");
  $append_11(sb, htmlEscape(arg4));
  $append_2(sb.impl, "'><\/div> <\/div><\/div>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

var nativeHorizontalScrollbarStyle;
function $ensureInjected_3(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_1(toInject, '.GPBYFDEOH{opacity:0.7;filter:alpha(opacity = 70);-webkit-transition:opacity 350ms;-moz-transition:opacity 350ms;-o-transition:opacity 350ms;transition:opacity 350ms;}.GPBYFDEOH:hover{opacity:1;filter:alpha(opacity = 100);}');
    schedule();
    return true;
  }
  return false;
}

function NativeHorizontalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$1_0(){
}

defineSeed(474, 1, {}, NativeHorizontalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_NativeHorizontalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$nativeHorizontalScrollbarStyleInitializer(){
  $clinit_NativeHorizontalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$nativeHorizontalScrollbarStyleInitializer = nullMethod;
  nativeHorizontalScrollbarStyle = new NativeHorizontalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$1_0;
}

function $setScrollHeight(this$static, height){
  this$static.contentDiv.style['height'] = height + ($clinit_Style$Unit() , 'px');
}

function $setVerticalScrollPosition_0(this$static, position){
  $setScrollTop(this$static.scrollable, position);
}

function NativeVerticalScrollbar_0(){
  var style;
  $setElement(this, $build_f_div1_0(new NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Widgets_0(this)));
  $addClassName(($clinit_DOM() , this.element), getInlineBlockStyle());
  $setWidth_0(this, (maybeRecalculateNativeScrollbarSize() , nativeWidth) + 'px');
  style = ($clinit_NativeVerticalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$nativeVerticalScrollbarStyleInitializer() , nativeVerticalScrollbarStyle);
  $ensureInjected_5(style);
  $addClassName(this.scrollable, 'GPBYFDEAI');
  !impl_4 && (impl_4 = new ScrollImpl$ScrollImplTrident_0);
  $initialize(this.scrollable, this.contentDiv);
}

defineSeed(476, 409, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), NativeVerticalScrollbar_0);
_.getScrollableElement = function getScrollableElement_0(){
  return this.scrollable;
}
;
function $build_f_div1_0(this$static){
  var attachRecord21, f_div1, scrollable, contentDiv;
  f_div1 = fromHtml($html1_0(this$static.domId0, this$static.domId1).html);
  attachRecord21 = attachToDom(f_div1);
  scrollable = $get_1(new LazyDomElement_0(this$static.domId0));
  this$static.owner.scrollable = scrollable;
  contentDiv = $get_1(new LazyDomElement_0(this$static.domId1));
  this$static.owner.contentDiv = contentDiv;
  attachRecord21.origParent?$insertBefore(attachRecord21.origParent, attachRecord21.element, attachRecord21.origSibling):orphan(attachRecord21.element);
  return f_div1;
}

function NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Widgets_0(owner){
  this.owner = owner;
  this.style_0 = (new NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator_0 , $clinit_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$styleInitializer() , style_1);
  $ensureInjected_4(this.style_0);
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
}

defineSeed(477, 1, {}, NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Widgets_0);
function NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator_0(){
}

defineSeed(478, 1, {}, NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator_0);
var style_1;
function $ensureInjected_4(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_1(toInject, '.GPBYFDEII{position:relative;overflow:hidden;direction:ltr;}.GPBYFDEHI{position:absolute;top:0;right:0;height:100%;width:100px;overflow-y:scroll;overflow-x:hidden;}');
    schedule();
    return true;
  }
  return false;
}

function NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$1_0(){
}

defineSeed(479, 1, {}, NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$styleInitializer(){
  $clinit_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$styleInitializer = nullMethod;
  style_1 = new NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$1_0;
}

function $html1_0(arg2, arg3){
  var sb;
  sb = new StringBuilder_0;
  $append_2(sb.impl, "<div class='");
  $append_11(sb, htmlEscape('GPBYFDEII'));
  $append_2(sb.impl, "'><div class='");
  $append_11(sb, htmlEscape('GPBYFDEHI'));
  $append_2(sb.impl, "' id='");
  $append_11(sb, htmlEscape(arg2));
  $append_2(sb.impl, "'> <div id='");
  $append_11(sb, htmlEscape(arg3));
  $append_2(sb.impl, "'><\/div> <\/div><\/div>");
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0(sb.impl.string);
}

var nativeVerticalScrollbarStyle;
function $ensureInjected_5(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_1(toInject, '.GPBYFDEAI{opacity:0.7;filter:alpha(opacity = 70);-webkit-transition:opacity 350ms;-moz-transition:opacity 350ms;-o-transition:opacity 350ms;transition:opacity 350ms;}.GPBYFDEAI:hover{opacity:1;filter:alpha(opacity = 100);}');
    schedule();
    return true;
  }
  return false;
}

function NativeVerticalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$1_0(){
}

defineSeed(483, 1, {}, NativeVerticalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_NativeVerticalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$nativeVerticalScrollbarStyleInitializer(){
  $clinit_NativeVerticalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$nativeVerticalScrollbarStyleInitializer = nullMethod;
  nativeVerticalScrollbarStyle = new NativeVerticalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$1_0;
}

function $setText_2(this$static, text_0){
  ($clinit_DOM() , this$static.element)['value'] = text_0 != null?text_0:'';
}

function ValueBoxBase_0(elem){
  FocusWidget_0.call(this, elem);
  new AutoDirectionHandler_0;
}

defineSeed(488, 415, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.onBrowserEvent_0 = function onBrowserEvent_9(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent_3(this, event_0):$onBrowserEvent_3(this, event_0);
}
;
_.onLoad = function onLoad_4(){
}
;
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = nullMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase_0(elem){
  ValueBoxBase_0.call(this, elem, (!INSTANCE_2 && (INSTANCE_2 = new PassthroughRenderer_0) , !INSTANCE_1 && (INSTANCE_1 = new PassthroughParser_0)));
}

defineSeed(487, 488, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
function TextBox_0(){
  $clinit_TextBoxBase();
  TextBox_1.call(this, $createInputElement($doc, 'text'), 'gwt-TextBox');
}

function TextBox_1(element, styleName){
  TextBoxBase_0.call(this, element);
  styleName != null && $setClassName(($clinit_DOM() , this.element), styleName);
}

defineSeed(486, 487, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$TextBox, Q$UIObject, Q$Widget]), TextBox_0);
function $center(this$static){
  var elem, initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    $setVisible_1(this$static, false);
    this$static.isAnimationEnabled = false;
    $show(this$static);
  }
  elem = ($clinit_DOM() , this$static.element);
  elem.style['left'] = 0 + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = '0px';
  left = $getClientWidth($doc) - $getPropertyInt(this$static.element, 'offsetWidth') >> 1;
  top_0 = $getClientHeight($doc) - $getPropertyInt(this$static.element, 'offsetHeight') >> 1;
  $setPopupPosition(this$static, max_0($getScrollLeft_0($doc) + left, 0), max_0($getScrollTop($doc) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      $setClip(this$static.element, 'rect(0px, 0px, 0px, 0px)');
      $setVisible_1(this$static, true);
      $run(this$static.resizeAnimation, 200, currentTimeMillis());
    }
     else {
      $setVisible_1(this$static, true);
    }
  }
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (is_0(target)) {
    return isOrHasChildImpl(($clinit_DOM() , this$static.element), target);
  }
  return false;
}

function $getOffsetHeight(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetHeight');
}

function $getOffsetWidth(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetWidth');
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_1(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight_0(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth_0(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type_0 = ($clinit_DOM() , $eventGetTypeInt(nativeEvent.type));
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        $eventGetKeyCode(nativeEvent) & 65535;
        ($eventGetShiftKey(nativeEvent)?1:0) | ($eventGetMetaKey(nativeEvent)?8:0) | ($eventGetCtrlKey(nativeEvent)?2:0) | ($eventGetAltKey(nativeEvent)?4:0);
        return;
      }

    case 4:
    case 1048576:
      if (sCaptureElem != null) {
        event_0.isConsumed = true;
        return;
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        $hide(this$static);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case 4194304:
      {
        if (sCaptureElem != null) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.srcElement;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  elem = ($clinit_DOM() , this$static.element);
  elem.style['left'] = left + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setVisible_1(this$static, visible){
  ($clinit_DOM() , this$static.element).style['visibility'] = visible?'visible':'hidden';
  this$static.element;
  !!this$static.glass && (this$static.glass.style['visibility'] = visible?'visible':'hidden' , undefined);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent_0(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3_0(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4_0(this$static));
  }
}

function PopupPanel_0(){
  SimplePanel_0.call(this);
  this.glassResizer = new PopupPanel$1_0(this);
  this.isAnimationEnabled = false;
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation_0(this);
  this.topPosition = -1;
  $appendChild(($clinit_DOM() , this.element), $createElement($doc, 'div'));
  $setPopupPosition(this, 0, 0);
  $getParentElement($getFirstChildElement(this.element)).className = 'gwt-PopupPanel';
  $getFirstChildElement(this.element).className = 'popupContent';
}

defineSeed(489, 421, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), PopupPanel_0);
_.getContainerElement = function getContainerElement_1(){
  return $clinit_DOM() , $getFirstChildElement(this.element);
}
;
_.getOffsetHeight = function getOffsetHeight_0(){
  return $getOffsetHeight(this);
}
;
_.getOffsetWidth = function getOffsetWidth_0(){
  return $getOffsetWidth(this);
}
;
_.getStyleElement = function getStyleElement_0(){
  return $getParentElement(($clinit_DOM() , $getFirstChildElement(this.element)));
}
;
_.onUnload = function onUnload_2(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight_0 = function setHeight_1(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}
;
_.setWidget = function setWidget_1(w){
  $setWidget(this, w);
  $maybeUpdateSize(this);
}
;
_.setWidth_0 = function setWidth_1(width_0){
  this.desiredWidth = width_0;
  $maybeUpdateSize(this);
  width_0.length == 0 && (this.desiredWidth = null);
}
;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = 0;
_.modal = false;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = 0;
function $onResize_2(this$static){
  var height, style, width_0, winHeight, winWidth;
  style = this$static.this$0.glass.style;
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  $setPropertyImpl(style, 'display', ($clinit_Style$Display() , 'none'));
  style['width'] = 0 + ($clinit_Style$Unit() , 'px');
  style['height'] = '0px';
  width_0 = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  style['width'] = (width_0 > winWidth?width_0:winWidth) + 'px';
  style['height'] = (height > winHeight?height:winHeight) + 'px';
  $setPropertyImpl(style, 'display', 'block');
}

function PopupPanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(490, 1, makeCastMap([Q$ResizeHandler, Q$EventHandler]), PopupPanel$1_0);
_.onResize = function onResize_8(event_0){
  $onResize_2(this);
}
;
function PopupPanel$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(491, 1, makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]), PopupPanel$3_0);
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  $previewNativeEvent(this.this$0, event_0);
}
;
function PopupPanel$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(492, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), PopupPanel$4_0);
_.onValueChange = function onValueChange(event_0){
  this.this$0.autoHideOnHistoryEvents && $hide(this.this$0);
}
;
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize_2(this$static.curPanel.glassResizer);
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_2(($clinit_RootPanel() , get_2()), this$static.curPanel);
    $getElement(this$static.curPanel);
  }
  $setClip($getElement(this$static.curPanel), 'rect(auto, auto, auto, auto)');
  $setPropertyImpl($getElement(this$static.curPanel).style, 'overflow', 'visible');
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    $setPropertyImpl($getElement(this$static.curPanel).style, 'position', 'absolute');
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_2(($clinit_RootPanel() , get_2()), this$static.curPanel);
    $getElement(this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_2(($clinit_RootPanel() , get_2()), this$static.curPanel);
    $getElement(this$static.curPanel);
  }
  $setPropertyImpl($getElement(this$static.curPanel).style, 'overflow', 'visible');
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight_0);
  width_0 = round_int(progress * this$static.offsetWidth_0);
  switch (0) {
    case 2:
    case 0:
      top_0 = this$static.offsetHeight_0 - height >> 1;
      left = this$static.offsetWidth_0 - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
  }
  $setClip($getElement(this$static.curPanel), 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState(this$static, showing, isUnloading){
  var animate;
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  if (this$static.showTimer) {
    $cancel_0(this$static.showTimer);
    this$static.showTimer = null;
    $onComplete(this$static);
  }
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  animate = !isUnloading && this$static.curPanel.isAnimationEnabled;
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      $setPropertyImpl($getElement(this$static.curPanel).style, 'position', 'absolute');
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      $setClip($getElement(this$static.curPanel), 'rect(0px, 0px, 0px, 0px)');
      $add_2(($clinit_RootPanel() , get_2()), this$static.curPanel);
      $getElement(this$static.curPanel);
      this$static.showTimer = new PopupPanel$ResizeAnimation$1_0(this$static);
      $schedule(this$static.showTimer, 1);
    }
     else {
      $run(this$static, 200, currentTimeMillis());
    }
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function PopupPanel$ResizeAnimation_0(panel){
  Animation_0.call(this);
  this.curPanel = null;
  this.offsetWidth_0 = -1;
  this.curPanel = panel;
}

defineSeed(493, 3, {}, PopupPanel$ResizeAnimation_0);
_.onComplete = function onComplete_1(){
  $onComplete(this);
}
;
_.onStart = function onStart_0(){
  this.offsetHeight_0 = $getOffsetHeight(this.curPanel);
  this.offsetWidth_0 = $getOffsetWidth(this.curPanel);
  $setPropertyImpl($getElement(this.curPanel).style, 'overflow', 'hidden');
  $onUpdate(this, (1 + cos_0(3.141592653589793)) / 2);
}
;
_.onUpdate = function onUpdate_0(progress){
  $onUpdate(this, progress);
}
;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = 0;
_.showing = false;
function PopupPanel$ResizeAnimation$1_0(this$1){
  this.this$1 = this$1;
  Timer_0.call(this);
}

defineSeed(494, 10, {}, PopupPanel$ResizeAnimation$1_0);
_.run = function run_0(){
  this.this$1.showTimer = null;
  $run(this.this$1, 200, currentTimeMillis());
}
;
function $setResolver(this$static, resolver){
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function isPotential(o){
  $clinit_PotentialElement();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

defineSeed(496, 1, {});
_.handleResize = function handleResize_0(){
  this.isAttached && !!this.delegate && this.delegate.onResize_0();
}
;
_.isAttached = false;
function $init_1(this$static, elem, delegate){
  this$static.parent_0 = elem;
  this$static.delegate = delegate;
  $initResizeEventListener(elem);
}

function $initResizeEventListener(elem){
  var theElem = elem;
  var handleResize = $entry(function(){
    theElem.__resizeImpl && theElem.__resizeImpl.handleResize();
  }
  );
  elem.attachEvent('onresize', handleResize);
}

function $onAttach_1(this$static){
  this$static.isAttached = true;
  $setResizeEventListener(this$static.parent_0, this$static);
}

function $onDetach_1(this$static){
  this$static.isAttached = false;
  $setResizeEventListener(this$static.parent_0, null);
}

function $setResizeEventListener(elem, listener){
  elem.__resizeImpl = listener;
}

function ResizeLayoutPanel$ImplTrident_0(){
}

defineSeed(497, 496, {}, ResizeLayoutPanel$ImplTrident_0);
function $getMaximumHorizontalScrollPosition_0(scrollable){
  return $isRtl(scrollable)?0:($getSubPixelScrollWidth(scrollable) | 0) - (scrollable.clientWidth | 0);
}

function $getMinimumHorizontalScrollPosition_0(scrollable){
  return $isRtl(scrollable)?(scrollable.clientWidth | 0) - ($getSubPixelScrollWidth(scrollable) | 0):0;
}

defineSeed(504, 1, {});
var impl_4;
function $initialize(scrollable, container){
  scrollable.__lastScrollTop = scrollable.__lastScrollLeft = 0;
  scrollable.attachEvent('onscroll', scrollHandler);
  scrollable.attachEvent('onresize', resizeHandler);
  container.attachEvent('onresize', resizeHandler);
  container.__isScrollContainer = true;
}

function $isRtl(scrollable){
  return scrollable.currentStyle.direction == 'rtl';
}

function ScrollImpl$ScrollImplTrident_0(){
  initStaticHandlers();
}

function initStaticHandlers(){
  scrollHandler = function(){
    var scrollableElem = $wnd.event.srcElement;
    scrollableElem.__lastScrollTop = scrollableElem.scrollTop;
    scrollableElem.__lastScrollLeft = scrollableElem.scrollLeft;
  }
  ;
  resizeHandler = function(){
    var scrollableElem = $wnd.event.srcElement;
    scrollableElem.__isScrollContainer && (scrollableElem = scrollableElem.parentNode);
    setTimeout($entry(function(){
      if (scrollableElem.scrollTop != scrollableElem.__lastScrollTop || scrollableElem.scrollLeft != scrollableElem.__lastScrollLeft) {
        scrollableElem.__lastScrollTop = scrollableElem.scrollTop;
        scrollableElem.__lastScrollLeft = scrollableElem.scrollLeft;
        triggerScrollEvent(scrollableElem);
      }
    }
    ), 1);
  }
  ;
}

function triggerScrollEvent(elem){
  $dispatchEvent(elem, $createHtmlEvent($doc, 'scroll'));
}

defineSeed(505, 504, {}, ScrollImpl$ScrollImplTrident_0);
var resizeHandler, scrollHandler;
function $getValue_2(this$static){
  var propName;
  propName = this$static.attached?'checked':'defaultChecked';
  return $clinit_Boolean() , ($clinit_DOM() , this$static.element)[propName]?TRUE_1:FALSE_1;
}

function $setValue_2(this$static, value_0){
  !value_0 && (value_0 = ($clinit_Boolean() , FALSE_1));
  $setChecked(($clinit_DOM() , this$static.element), value_0.value_0);
  $setDefaultChecked(this$static.element, value_0.value_0);
}

function SimpleCheckBox_0(){
  SimpleCheckBox_1.call(this, $createCheckInputElement($doc));
}

function SimpleCheckBox_1(element){
  $setElement_0(this, ($clinit_DOM() , element));
  $setClassName(this.element, 'gwt-SimpleCheckBox');
}

defineSeed(506, 415, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), SimpleCheckBox_0);
_.onUnload = function onUnload_3(){
  $setValue_2(this, $getValue_2(this));
}
;
_.setEnabled = function setEnabled_1(enabled){
  ($clinit_DOM() , this.element)['disabled'] = !enabled;
  enabled?$setStyleName_0(this, getStylePrimaryName(this.element) + '-disabled', false):$setStyleName_0(this, getStylePrimaryName(this.element) + '-disabled', true);
}
;
function $next_1(this$static){
  if (!this$static.hasElement || !this$static.this$0.widget) {
    throw new NoSuchElementException_0;
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$0.widget;
}

function SimplePanel$1_0(this$0){
  this.this$0 = this$0;
  this.hasElement = !!this.this$0.widget;
}

defineSeed(507, 1, makeCastMap([Q$Iterator]), SimplePanel$1_0);
_.hasNext = function hasNext_1(){
  return this.hasElement;
}
;
_.next_0 = function next_2(){
  return $next_1(this);
}
;
_.remove_0 = function remove_11(){
  !!this.returned && this.this$0.remove(this.returned);
}
;
_.hasElement = false;
_.returned = null;
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = nullMethod;
  CENTER_1 = new ValueBoxBase$TextAlignment$1_0;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2_0;
  LEFT_0 = new ValueBoxBase$TextAlignment$3_0;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4_0;
  $VALUES_13 = initValues(_3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$ValueBoxBase$TextAlignment, [CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

function ValueBoxBase$TextAlignment_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_ValueBoxBase$TextAlignment();
  return $VALUES_13;
}

defineSeed(519, 31, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_13, CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0;
function ValueBoxBase$TextAlignment$1_0(){
  ValueBoxBase$TextAlignment_0.call(this, 'CENTER', 0);
}

defineSeed(520, 519, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$1_0);
function ValueBoxBase$TextAlignment$2_0(){
  ValueBoxBase$TextAlignment_0.call(this, 'JUSTIFY', 1);
}

defineSeed(521, 519, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$2_0);
function ValueBoxBase$TextAlignment$3_0(){
  ValueBoxBase$TextAlignment_0.call(this, 'LEFT', 2);
}

defineSeed(522, 519, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$3_0);
function ValueBoxBase$TextAlignment$4_0(){
  ValueBoxBase$TextAlignment_0.call(this, 'RIGHT', 3);
}

defineSeed(523, 519, makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]), ValueBoxBase$TextAlignment$4_0);
function $add_10(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_DOM() , $createElement($doc, 'tr'));
  td = (td_0 = $createElement($doc, 'td') , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, ($clinit_PotentialElement() , $resolve(td)));
  appendChild(this$static.body_0, tr);
  $add_1(this$static, w, td);
}

function $setHorizontalAlignment_1(this$static, align_0){
  this$static.horzAlign = align_0;
}

function VerticalPanel_0(){
  CellPanel_0.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyString(($clinit_DOM() , this.table), 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineSeed(524, 416, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$UIObject, Q$Widget, Q$Iterable]), VerticalPanel_0);
_.remove = function remove_13(w){
  var removed, td;
  td = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove_1(this, w);
  removed && $removeChild(this.body_0, $getParentElement(td));
  return removed;
}
;
function $setClip(popup, rect){
  $setPropertyImpl(popup.style, 'clip', rect);
}

function $addDataDisplay(this$static, display){
  var handler;
  if (!display) {
    throw new IllegalArgumentException_1('display cannot be null');
  }
   else if ($contains_1(this$static.displays, display)) {
    throw new IllegalStateException_1('The specified display has already been added to this adapter.');
  }
  $add_17(this$static.displays, display);
  handler = $addRangeChangeHandler(display, new AbstractDataProvider$1_0(this$static, display));
  this$static.rangeChangeHandlers.put(display, handler);
  this$static.lastRowCount >= 0 && $setRowCount_0(display, this$static.lastRowCount, this$static.lastRowCountExact);
  $onRangeChanged(this$static, display);
}

function $updateRowCount(this$static, count){
  var display, display$iterator;
  this$static.lastRowCount = count;
  this$static.lastRowCountExact = true;
  for (display$iterator = $iterator($keySet(this$static.displays.map_0)); display$iterator.val$outerIter.hasNext();) {
    display = dynamicCast($next_5(display$iterator), Q$HasData);
    display.setRowCount(count, true);
  }
}

function $updateRowData(this$static, start_0, values){
  var display, display$iterator;
  for (display$iterator = $iterator($keySet(this$static.displays.map_0)); display$iterator.val$outerIter.hasNext();) {
    display = dynamicCast($next_5(display$iterator), Q$HasData);
    $updateRowData_0(display, start_0, values);
  }
}

function $updateRowData_0(display, start_0, values){
  var curEnd, curLength, curStart, end, range, realEnd, realLength, realStart, realValues;
  end = start_0 + values.size_1();
  range = display.getVisibleRange();
  curStart = range.start_0;
  curLength = range.length_0;
  curEnd = curStart + curLength;
  if (start_0 == curStart || curStart < end && curEnd > start_0) {
    realStart = curStart < start_0?start_0:curStart;
    realEnd = curEnd > end?end:curEnd;
    realLength = realEnd - realStart;
    realValues = values.subList(realStart - start_0, realStart - start_0 + realLength);
    display.setRowData(realStart, realValues);
  }
}

defineSeed(541, 1, {});
_.lastRowCount = -1;
_.lastRowCountExact = false;
function AbstractDataProvider$1_0(this$0, val$display){
  this.this$0 = this$0;
  this.val$display = val$display;
}

defineSeed(542, 1, makeCastMap([Q$EventHandler, Q$RangeChangeEvent$Handler]), AbstractDataProvider$1_0);
function CellPreviewEvent_0(nativeEvent, display, context, value_0, isCellEditing, isSelectionHandled){
  this.nativeEvent = nativeEvent;
  this.display_0 = display;
  this.context = context;
  this.value_0 = value_0;
  this.isCellEditing = isCellEditing;
  this.isSelectionHandled = isSelectionHandled;
}

function fire_5(source, nativeEvent, display, context, value_0, isCellEditing, isSelectionHandled){
  var event_0;
  event_0 = new CellPreviewEvent_0(nativeEvent, display, context, value_0, isCellEditing, isSelectionHandled);
  !!TYPE_17 && !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  return event_0;
}

defineSeed(543, 232, {}, CellPreviewEvent_0);
_.dispatch_0 = function dispatch_18(handler){
  dynamicCast(handler, Q$CellPreviewEvent$Handler).onCellPreview(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_19(){
  return TYPE_17;
}
;
_.isCanceled = false;
_.isCellEditing = false;
_.isSelectionHandled = false;
var TYPE_17;
function $handleSelectionEvent(event_0, action, selectionModel){
  var keyCode, nativeEvent, type_0, value_0;
  value_0 = event_0.value_0;
  if (action) {
    switch (action.ordinal) {
      case 4:
        return;
      case 1:
        selectionModel.setSelected(value_0, true);
        return;
      case 2:
        selectionModel.setSelected(value_0, false);
        return;
      case 3:
        selectionModel.setSelected(value_0, !$isSelected(selectionModel, value_0));
        return;
    }
  }
  nativeEvent = event_0.nativeEvent;
  type_0 = nativeEvent.type;
  if ($equals_3('click', type_0)) {
    $eventGetCtrlKey(nativeEvent) || $eventGetMetaKey(nativeEvent)?selectionModel.setSelected(value_0, !$isSelected(selectionModel, value_0)):selectionModel.setSelected(value_0, true);
  }
   else if ($equals_3('keyup', type_0)) {
    keyCode = $eventGetKeyCode(nativeEvent);
    keyCode == 32 && selectionModel.setSelected(value_0, !$isSelected(selectionModel, value_0));
  }
}

function DefaultSelectionEventManager_0(){
}

defineSeed(544, 1, makeCastMap([Q$EventHandler, Q$CellPreviewEvent$Handler]), DefaultSelectionEventManager_0);
_.onCellPreview = function onCellPreview_1(event_0){
  var action, display, selectionModel;
  if (event_0.isCellEditing || event_0.isSelectionHandled) {
    return;
  }
  display = event_0.display_0;
  selectionModel = display.presenter.selectionModel;
  if (!selectionModel) {
    return;
  }
  action = ($clinit_DefaultSelectionEventManager$SelectAction() , DEFAULT_0);
  $handleSelectionEvent(event_0, action, selectionModel);
}
;
function $clinit_DefaultSelectionEventManager$SelectAction(){
  $clinit_DefaultSelectionEventManager$SelectAction = nullMethod;
  DEFAULT_0 = new DefaultSelectionEventManager$SelectAction_0('DEFAULT', 0);
  SELECT = new DefaultSelectionEventManager$SelectAction_0('SELECT', 1);
  DESELECT = new DefaultSelectionEventManager$SelectAction_0('DESELECT', 2);
  TOGGLE = new DefaultSelectionEventManager$SelectAction_0('TOGGLE', 3);
  IGNORE = new DefaultSelectionEventManager$SelectAction_0('IGNORE', 4);
  $VALUES_14 = initValues(_3Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$DefaultSelectionEventManager$SelectAction, [DEFAULT_0, SELECT, DESELECT, TOGGLE, IGNORE]);
}

function DefaultSelectionEventManager$SelectAction_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_15(){
  $clinit_DefaultSelectionEventManager$SelectAction();
  return $VALUES_14;
}

defineSeed(545, 31, makeCastMap([Q$DefaultSelectionEventManager$SelectAction, Q$Serializable, Q$Comparable, Q$Enum]), DefaultSelectionEventManager$SelectAction_0);
var $VALUES_14, DEFAULT_0, DESELECT, IGNORE, SELECT, TOGGLE;
function $onRangeChanged(this$static, display){
  var size_0;
  size_0 = this$static.listWrapper.list.size_1();
  size_0 > 0 && $updateRowData_0(display, 0, this$static.listWrapper);
}

function ListDataProvider_0(){
  ListDataProvider_1.call(this, new ArrayList_0);
}

function ListDataProvider_1(listToWrap){
  this.displays = new HashSet_0;
  this.rangeChangeHandlers = new HashMap_0;
  this.listWrapper = new ListDataProvider$ListWrapper_0(this, listToWrap);
}

defineSeed(546, 541, {}, ListDataProvider_0);
function $clear_3(this$static){
  this$static.list.clear_0();
  this$static.minModified = this$static.maxModified = 0;
  this$static.modified = true;
  $flush(this$static);
}

function $flush(this$static){
  if (this$static.delegate) {
    this$static.delegate.minModified = min_0(this$static.minModified + this$static.offset, this$static.delegate.minModified);
    this$static.delegate.maxModified = max_0(this$static.maxModified + this$static.offset, this$static.delegate.maxModified);
    this$static.delegate.modified = this$static.modified || this$static.delegate.modified;
    $flush(this$static.delegate);
    return;
  }
  this$static.flushCancelled = false;
  if (!this$static.flushPending) {
    this$static.flushPending = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), this$static.flushCommand);
  }
}

function $flushNow(this$static){
  var newSize;
  this$static.flushPending && (this$static.flushCancelled = true);
  if (this$static.this$0.listWrapper != this$static) {
    return;
  }
  newSize = this$static.list.size_1();
  if (this$static.curSize != newSize) {
    this$static.curSize = newSize;
    $updateRowCount(this$static.this$0, this$static.curSize);
  }
  if (this$static.modified) {
    $updateRowData(this$static.this$0, this$static.minModified, this$static.list.subList(this$static.minModified, this$static.maxModified));
    this$static.modified = false;
  }
  this$static.minModified = 2147483647;
  this$static.maxModified = -2147483648;
}

function $get_4(this$static, index_0){
  return this$static.list.get_1(index_0);
}

function $remove_12(this$static, index_0){
  var e, toRet;
  try {
    toRet = this$static.list.remove_1(index_0);
    this$static.minModified = min_0(this$static.minModified, index_0);
    this$static.maxModified = this$static.list.size_1();
    this$static.modified = true;
    $flush(this$static);
    return toRet;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$IndexOutOfBoundsException)) {
      e = $e0;
      throw new IndexOutOfBoundsException_1(e.detailMessage);
    }
     else 
      throw unwrap($e0);
  }
}

function ListDataProvider$ListWrapper_0(this$0, list){
  ListDataProvider$ListWrapper_1.call(this, this$0, list, null, 0);
  $updateRowCount(this$0, list.size_0);
}

function ListDataProvider$ListWrapper_1(this$0, list, delegate, offset){
  this.this$0 = this$0;
  this.flushCommand = new ListDataProvider$ListWrapper$1_0(this);
  this.list = list;
  this.delegate = delegate;
  this.offset = offset;
}

defineSeed(547, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]), ListDataProvider$ListWrapper_0, ListDataProvider$ListWrapper_1);
_.add_1 = function add_3(e){
  var toRet;
  toRet = this.list.add_1(e);
  this.minModified = min_0(this.minModified, this.list.size_1() - 1);
  this.maxModified = this.list.size_1();
  this.modified = true;
  $flush(this);
  return toRet;
}
;
_.clear_0 = function clear_0(){
  $clear_3(this);
}
;
_.contains_0 = function contains(o){
  return this.list.contains_0(o);
}
;
_.equals$ = function equals_8(o){
  return this.list.equals$(o);
}
;
_.get_1 = function get_3(index_0){
  return $get_4(this, index_0);
}
;
_.hashCode$ = function hashCode_10(){
  return this.list.hashCode$();
}
;
_.indexOf_0 = function indexOf(o){
  return this.list.indexOf_0(o);
}
;
_.isEmpty_0 = function isEmpty(){
  return this.list.isEmpty_0();
}
;
_.iterator = function iterator_6(){
  return new ListDataProvider$ListWrapper$WrappedListIterator_0(this);
}
;
_.listIterator = function listIterator(){
  return new ListDataProvider$ListWrapper$WrappedListIterator_0(this);
}
;
_.listIterator_0 = function listIterator_0(index_0){
  return new ListDataProvider$ListWrapper$WrappedListIterator_1(this, index_0);
}
;
_.remove_1 = function remove_16(index_0){
  return $remove_12(this, index_0);
}
;
_.remove_2 = function remove_17(o){
  var index_0;
  index_0 = this.list.indexOf_0(o);
  if (index_0 == -1) {
    return false;
  }
  $remove_12(this, index_0);
  return true;
}
;
_.size_1 = function size_1(){
  return this.list.size_1();
}
;
_.subList = function subList(fromIndex, toIndex){
  return new ListDataProvider$ListWrapper_1(this.this$0, this.list.subList(fromIndex, toIndex), this, fromIndex);
}
;
_.toArray = function toArray(){
  return this.list.toArray();
}
;
_.curSize = 0;
_.flushCancelled = false;
_.flushPending = false;
_.maxModified = -2147483648;
_.minModified = 2147483647;
_.modified = false;
_.offset = 0;
function ListDataProvider$ListWrapper$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(548, 1, {}, ListDataProvider$ListWrapper$1_0);
_.execute_0 = function execute_21(){
  this.this$1.flushPending = false;
  if (this.this$1.flushCancelled) {
    this.this$1.flushCancelled = false;
    return;
  }
  $flushNow(this.this$1);
}
;
function $$init(this$static){
}

function ListDataProvider$ListWrapper$WrappedListIterator_0(this$1){
  this.this$1 = this$1;
  $$init(this);
}

function ListDataProvider$ListWrapper$WrappedListIterator_1(this$1, start_0){
  var size_0;
  this.this$1 = this$1;
  $$init(this);
  size_0 = this$1.list.size_1();
  if (start_0 < 0 || start_0 > size_0) {
    throw new IndexOutOfBoundsException_1('Index: ' + start_0 + ', Size: ' + size_0);
  }
  this.i = start_0;
}

defineSeed(549, 1, makeCastMap([Q$Iterator, Q$ListIterator]), ListDataProvider$ListWrapper$WrappedListIterator_0, ListDataProvider$ListWrapper$WrappedListIterator_1);
_.hasNext = function hasNext_4(){
  return this.i < this.this$1.list.size_1();
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.next_0 = function next_5(){
  if (this.i >= this.this$1.list.size_1()) {
    throw new NoSuchElementException_0;
  }
  return $get_4(this.this$1, this.last = this.i++);
}
;
_.previous = function previous_0(){
  if (this.i <= 0) {
    throw new NoSuchElementException_0;
  }
  return $get_4(this.this$1, this.last = --this.i);
}
;
_.remove_0 = function remove_18(){
  if (this.last < 0) {
    throw new IllegalStateException_1('Cannot call add/remove more than once per call to next/previous.');
  }
  $remove_12(this.this$1, this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
function Range_1(start_0, length_0){
  this.start_0 = start_0;
  this.length_0 = length_0;
}

defineSeed(550, 1, makeCastMap([Q$Range, Q$Serializable]), Range_1);
_.equals$ = function equals_9(o){
  var r;
  if (!instanceOf(o, Q$Range)) {
    return false;
  }
  r = dynamicCast(o, Q$Range);
  return this.start_0 == r.start_0 && this.length_0 == r.length_0;
}
;
_.hashCode$ = function hashCode_11(){
  return this.length_0 * 31 ^ this.start_0;
}
;
_.toString$ = function toString_10(){
  return 'Range(' + this.start_0 + ',' + this.length_0 + ')';
}
;
_.length_0 = 0;
_.start_0 = 0;
function $dispatch_2(handler){
  $onRangeChanged(handler.this$0, handler.val$display);
}

function RangeChangeEvent_0(){
}

function fire_6(source){
  var event_0;
  if (TYPE_18) {
    event_0 = new RangeChangeEvent_0;
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineSeed(551, 232, {}, RangeChangeEvent_0);
_.dispatch_0 = function dispatch_19(handler){
  $dispatch_2(dynamicCast(handler, Q$RangeChangeEvent$Handler));
}
;
_.getAssociatedType_0 = function getAssociatedType_20(){
  return TYPE_18;
}
;
var TYPE_18;
function SelectionChangeEvent_0(){
}

function fire_7(source){
  var event_0;
  if (TYPE_19) {
    event_0 = new SelectionChangeEvent_0;
    $fireEvent(source.handlerManager, event_0);
  }
}

defineSeed(552, 232, {}, SelectionChangeEvent_0);
_.dispatch_0 = function dispatch_20(handler){
  dynamicCast(handler, Q$SelectionChangeEvent$Handler).onSelectionChange(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_21(){
  return TYPE_19;
}
;
var TYPE_19;
function $addSelectionChangeHandler(this$static, handler){
  return $addHandler(this$static.handlerManager, (!TYPE_19 && (TYPE_19 = new GwtEvent$Type_0) , TYPE_19), handler);
}

function $scheduleSelectionChangeEvent(this$static){
  this$static.isEventCancelled = false;
  if (!this$static.isEventScheduled) {
    this$static.isEventScheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), new SelectionModel$AbstractSelectionModel$1_0(this$static));
  }
}

defineSeed(553, 1, makeCastMap([Q$HasHandlers]));
_.fireEvent_0 = function fireEvent_4(event_0){
  $fireEvent(this.handlerManager, event_0);
}
;
_.isEventCancelled = false;
_.isEventScheduled = false;
function SelectionModel$AbstractSelectionModel$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(554, 1, {}, SelectionModel$AbstractSelectionModel$1_0);
_.execute_0 = function execute_22(){
  this.this$1.isEventScheduled = false;
  if (this.this$1.isEventCancelled) {
    this.this$1.isEventCancelled = false;
    return;
  }
  $fireSelectionChangeEvent(this.this$1);
}
;
function $equalsOrBothNull_0(a, b){
  return a == null?b == null:equals__devirtual$(a, b);
}

function $fireSelectionChangeEvent(this$static){
  this$static.isEventScheduled && (this$static.isEventCancelled = true);
  $resolveChanges(this$static);
}

function $getSelectedObject(this$static){
  $resolveChanges(this$static);
  return this$static.curSelection;
}

function $isSelected(this$static, item_0){
  $resolveChanges(this$static);
  if (this$static.curSelection == null || this$static.curKey == null || item_0 == null) {
    return false;
  }
  return equals__devirtual$(this$static.curKey, item_0);
}

function $resolveChanges(this$static){
  var changed, key_0, sameKey;
  if (!this$static.newSelectedPending) {
    return;
  }
  key_0 = this$static.newSelectedItem;
  sameKey = $equalsOrBothNull_0(this$static.curKey, key_0);
  changed = false;
  if (this$static.newSelected) {
    changed = !sameKey;
    this$static.curSelection = this$static.newSelectedItem;
    this$static.curKey = key_0;
  }
   else if (sameKey) {
    changed = true;
    this$static.curSelection = null;
    this$static.curKey = null;
  }
  this$static.newSelectedItem = null;
  this$static.newSelectedPending = false;
  changed && fire_7(this$static);
}

function $setSelected_0(this$static, item_0, selected){
  var oldKey;
  if (!selected) {
    oldKey = this$static.newSelectedPending?this$static.newSelectedItem:this$static.curKey;
    if (!(oldKey == null?item_0 == null:equals__devirtual$(oldKey, item_0))) {
      return;
    }
  }
  this$static.newSelectedItem = item_0;
  this$static.newSelected = selected;
  this$static.newSelectedPending = true;
  $scheduleSelectionChangeEvent(this$static);
}

function SingleSelectionModel_0(){
  this.handlerManager = new HandlerManager_0(this);
  this.newSelectedItem = null;
}

defineSeed(555, 553, makeCastMap([Q$HasHandlers]), SingleSelectionModel_0);
_.setSelected = function setSelected(item_0, selected){
  $setSelected_0(this, item_0, selected);
}
;
_.newSelected = false;
_.newSelectedPending = false;
function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $create(this$static, clazz){
  $maybeInitializeCreatorMap(this$static);
  return $create_0(this$static.creatorMap, clazz, this$static);
}

function $maybeInitializeCreatorMap(this$static){
  if (!this$static.creatorMap) {
    this$static.creatorMap = {};
    this$static.initializeCreatorMap(this$static.creatorMap);
  }
}

function $maybeInitializeEnumMap(this$static){
  if (!this$static.enumToStringMap) {
    this$static.enumToStringMap = new HashMap_0;
    this$static.stringsToEnumsMap = new HashMap_0;
    this$static.initializeEnumMap();
  }
}

defineSeed(557, 1, makeCastMap([Q$EnumMap]));
_.create = function create_4(clazz){
  return $create(this, clazz);
}
;
_.getEnum = function getEnum(clazz, token){
  var e, e$iterator, list, clazz_0, superclass;
  $maybeInitializeEnumMap(this);
  list = dynamicCast(this.stringsToEnumsMap.get_2(token), Q$List);
  if (!list) {
    throw new IllegalArgumentException_1(token);
  }
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = dynamicCast(e$iterator.next_0(), Q$Enum);
    if ((clazz_0 = e.___clazz$ , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass) == clazz) {
      return e;
    }
  }
  throw new IllegalArgumentException_1(clazz.typeName);
}
;
_.getToken = function getToken(e){
  var toReturn;
  $maybeInitializeEnumMap(this);
  toReturn = dynamicCast(this.enumToStringMap.get_2(e), Q$String);
  if (toReturn == null) {
    throw new IllegalArgumentException_1(e.name_0);
  }
  return toReturn;
}
;
function $getElementType(this$static){
  if (this$static.paramTypes == null || this$static.paramTypes.length < 2) {
    return null;
  }
  if (Ljava_util_List_2_classLit == this$static.paramTypes[0] || Ljava_util_Set_2_classLit == this$static.paramTypes[0]) {
    return this$static.paramTypes[1];
  }
  return null;
}

function $getKeyType(this$static){
  if (this$static.paramTypes == null || this$static.paramTypes.length < 3) {
    return null;
  }
  if (Ljava_util_Map_2_classLit == this$static.paramTypes[0]) {
    return this$static.paramTypes[1];
  }
  return null;
}

function $getValueType(this$static){
  if (this$static.paramTypes == null || this$static.paramTypes.length < 3) {
    return null;
  }
  if (Ljava_util_Map_2_classLit == this$static.paramTypes[0]) {
    return this$static.paramTypes[2];
  }
  return null;
}

function $set_2(this$static, value_0){
  $call(this$static.setter, this$static.instance, value_0);
}

function $traverse(this$static, visitor, count){
  var i, paramCount, type_0;
  if (this$static.simpleType) {
    visitor.endVisitType(this$static.simpleType);
    return 0;
  }
  type_0 = this$static.paramTypes[count];
  paramCount = this$static.paramCounts[count];
  ++count;
  for (i = 0; i < paramCount; i++) {
    count = $traverse(this$static, visitor, count);
  }
  visitor.endVisitType(type_0);
  return count;
}

function ClientPropertyContext_0(instance, setter, type_0){
  this.instance = instance;
  this.setter = setter;
  this.simpleType = type_0;
  this.paramTypes = null;
  this.paramCounts = null;
}

function ClientPropertyContext_1(instance, setter, types, paramCounts){
  this.instance = instance;
  this.setter = setter;
  this.simpleType = null;
  this.paramTypes = types;
  this.paramCounts = paramCounts;
}

defineSeed(558, 1, {}, ClientPropertyContext_0, ClientPropertyContext_1);
function $call(this$static, instance, value_0){
  this$static.call(instance, value_0);
}

function beanSetter(bean, key_0){
  return function(value_0){
    bean.setProperty(key_0, value_0);
  }
  ;
}

function $add_12(this$static, clazz, constructors){
  this$static[clazz.typeName] = constructors;
}

function $create_0(this$static, clazz, factory){
  var arr;
  arr = this$static[clazz.typeName];
  if (!!arr && !!arr[0]) {
    return arr[0](factory, null);
  }
  return null;
}

function $assign(this$static, parent_0, index_0){
  $isString(this$static)?$assign0_0(parent_0, index_0, this$static.__s):$assign0(parent_0, index_0, this$static);
}

function $assign_0(this$static, parent_0, index_0){
  $isString(this$static)?(parent_0[index_0] = this$static.__s , undefined):(parent_0[index_0] = this$static , undefined);
}

function $assign0(parent_0, index_0, value_0){
  parent_0[index_0] = value_0;
}

function $assign0_0(parent_0, index_0, value_0){
  parent_0[index_0] = value_0;
}

function $getPayload(this$static){
  var sb;
  if ($isString(this$static)) {
    return escapeValue(this$static.__s);
  }
  if (stringifyFastSupported()) {
    return $stringifyFast(this$static);
  }
  return sb = new StringBuilder_0 , $stringifySlow(this$static, sb) , sb.impl.string;
}

function $getPropertyKeys(this$static){
  var toReturn;
  toReturn = new ArrayList_0;
  $getPropertyKeys0(this$static, toReturn);
  return $clinit_Collections() , toReturn?new Collections$UnmodifiableRandomAccessList_0(toReturn):new Collections$UnmodifiableList_0(null);
}

function $getPropertyKeys0(this$static, list){
  for (key in this$static) {
    this$static.hasOwnProperty(key) && list.add_1(key);
  }
}

function $getRaw(this$static, index_0){
  _ = this$static[index_0];
  if (_ == null) {
    return null;
  }
  if (isUnwrappedString(_)) {
    return {__s:_};
  }
  return Object(_);
}

function $getRaw_0(this$static, index_0){
  _ = this$static[index_0];
  if (_ == null) {
    return null;
  }
  if (isUnwrappedString(_)) {
    return {__s:_};
  }
  return Object(_);
}

function $getReified(this$static, key_0){
  return this$static.__reified && this$static.__reified[':' + key_0];
}

function $isIndexed(this$static){
  return Object.prototype.toString.call(this$static) == '[object Array]';
}

function $isNull(this$static, index_0){
  return this$static[index_0] == null;
}

function $isNumber(this$static){
  return Object.prototype.toString.call(this$static) == '[object Number]';
}

function $isReified(this$static, key_0){
  return !!(this$static.__reified && this$static.__reified.hasOwnProperty(':' + key_0));
}

function $isString(this$static){
  return this$static && this$static.__s != null;
}

function $setReified(this$static, key_0, object){
  (this$static.__reified || (this$static.__reified = function(){
  }
  ))[':' + key_0] = object;
}

function $setSize(this$static, size_0){
  this$static.length = size_0;
}

function $stringifyFast(this$static){
  return $wnd.JSON.stringify(this$static, function(key_0, value_0){
    if (key_0 == '$H') {
      return;
    }
    return value_0;
  }
  );
}

function $stringifySlow(this$static, sb){
  var i, j, key_0, key$iterator, needsComma, value_0;
  if (this$static == ($clinit_Splittable() , NULL)) {
    $append_2(sb.impl, 'null');
    return;
  }
  if (Object.prototype.toString.call(this$static) == '[object Boolean]') {
    $append_3(sb.impl, this$static == true);
    return;
  }
  if ($isNumber(this$static)) {
    $append_8(sb, Number(this$static));
    return;
  }
  if ($isString(this$static)) {
    $append_11(sb, escapeValue(this$static.__s));
    return;
  }
  if ($isIndexed(this$static)) {
    $append_2(sb.impl, '[');
    for (i = 0 , j = this$static.length; i < j; i++) {
      i > 0 && ($append_2(sb.impl, ',') , sb);
      $stringifySlow($getRaw(this$static, i), sb);
    }
    $append_2(sb.impl, ']');
    return;
  }
  $append_2(sb.impl, '{');
  needsComma = false;
  for (key$iterator = new Collections$UnmodifiableCollectionIterator_0($getPropertyKeys(this$static).coll.iterator()); key$iterator.it.hasNext();) {
    key_0 = dynamicCast(key$iterator.it.next_0(), Q$String);
    needsComma?($append_2(sb.impl, ',') , sb):(needsComma = true);
    value_0 = $getRaw_0(this$static, key_0);
    if (!(Object.prototype.toString.call(value_0) == '[object Function]')) {
      if ($equals_3('$H', key_0)) {
        continue;
      }
      $append_11(sb, escapeValue(key_0));
      $append_2(sb.impl, ':');
      $stringifySlow(value_0, sb);
    }
  }
  $append_2(sb.impl, '}');
}

function create0_0(object){
  return Number(object);
}

function create0_1(object){
  return Boolean(object);
}

function isUnwrappedString(obj){
  return Object.prototype.toString.call(obj) == '[object String]';
}

function stringifyFastSupported(){
  if (stringifyFastTested) {
    return stringifyFastResult;
  }
  stringifyFastTested = true;
  return stringifyFastResult = stringifyFastSupported0();
}

function stringifyFastSupported0(){
  return $wnd.JSON && $wnd.JSON.stringify && $wnd.JSON.stringify({b:function(){
  }
  }) == '{}';
}

var stringifyFastResult = false, stringifyFastTested = false;
function decode(factory, clazz, data_0){
  return doDecode(new AutoBeanCodexImpl$EncodeState_0(factory, null), clazz, data_0);
}

function decode_0(factory, clazz, payload){
  var data_0;
  data_0 = split_1(payload);
  return doDecode(new AutoBeanCodexImpl$EncodeState_0(factory, null), clazz, data_0);
}

function encode(bean){
  var sb, state;
  if (!bean) {
    return $clinit_Splittable() , NULL;
  }
  sb = new StringBuilder_0;
  state = new AutoBeanCodexImpl$EncodeState_0(bean.factory, sb);
  doEncode(state, bean);
  return split_1(sb.impl.string);
}

function diff_1(a, b){
  var toReturn;
  if (a == b) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_MAP;
  }
  toReturn = getAllProperties(b);
  a.accept(new AutoBeanUtils$1_0(toReturn));
  return toReturn;
}

function getAllProperties(bean){
  var toReturn;
  toReturn = new LinkedHashMap_0;
  bean.accept(new AutoBeanUtils$2_0(toReturn));
  return toReturn;
}

function getAutoBean(delegate){
  return delegate == null?null:dynamicCast(get_0(delegate, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean);
}

defineSeed(565, 1, {});
_.endVisit = function endVisit(bean, ctx){
}
;
_.visit = function visit(bean, ctx){
  return true;
}
;
_.visitCollectionProperty = function visitCollectionProperty(propertyName, value_0, ctx){
  return this.visitReferenceProperty(propertyName, value_0, ctx);
}
;
_.visitReferenceProperty = function visitReferenceProperty(propertyName, value_0, ctx){
  return true;
}
;
_.visitValueProperty = function visitValueProperty(propertyName, value_0, ctx){
  return true;
}
;
function $equal(this$static, propertyName, previousValue){
  var currentValue;
  currentValue = $get_7(this$static.val$toReturn, propertyName);
  return previousValue == null && currentValue == null || previousValue != null && equals__devirtual$(previousValue, currentValue);
}

function AutoBeanUtils$1_0(val$toReturn){
  this.val$toReturn = val$toReturn;
}

defineSeed(564, 565, {}, AutoBeanUtils$1_0);
_.visitReferenceProperty = function visitReferenceProperty_0(propertyName, previousValue, ctx){
  $containsKey(this.val$toReturn, propertyName)?(!previousValue && $get_7(this.val$toReturn, propertyName) == null || !!previousValue && $equal(this, propertyName, previousValue.as())) && $remove_15(this.val$toReturn, propertyName):$put_3(this.val$toReturn, propertyName, null);
  return false;
}
;
_.visitValueProperty = function visitValueProperty_0(propertyName, previousValue, ctx){
  $containsKey(this.val$toReturn, propertyName)?$equal(this, propertyName, previousValue) && $remove_15(this.val$toReturn, propertyName):$put_3(this.val$toReturn, propertyName, null);
  return false;
}
;
function AutoBeanUtils$2_0(val$toReturn){
  this.val$toReturn = val$toReturn;
}

defineSeed(566, 565, {}, AutoBeanUtils$2_0);
_.visitReferenceProperty = function visitReferenceProperty_1(propertyName, value_0, ctx){
  $put_3(this.val$toReturn, propertyName, !value_0?null:value_0.as());
  return false;
}
;
_.visitValueProperty = function visitValueProperty_1(propertyName, value_0, ctx){
  $put_3(this.val$toReturn, propertyName, value_0);
  return false;
}
;
defineSeed(567, 1, {});
_.endVisitType = function endVisitType(type_0){
}
;
function $clinit_Splittable(){
  $clinit_Splittable = nullMethod;
  NULL = null;
}

var NULL;
function $clinit_ValueCodex(){
  $clinit_ValueCodex = nullMethod;
  var t, t$array, t$index, t$max, temp;
  temp = new HashMap_0;
  for (t$array = ($clinit_ValueCodex$Type() , $clinit_ValueCodex$Type() , $VALUES_15) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    temp.put(t.type_0, t);
    !!t.primitiveType && temp.put(t.primitiveType, t);
  }
  $clinit_Collections();
  new Collections$UnmodifiableSet_0($keySet(temp));
  TYPES_BY_CLASS = new Collections$UnmodifiableMap_0(temp);
}

function canDecode(clazz){
  $clinit_ValueCodex();
  if (findType(clazz)) {
    return true;
  }
  return false;
}

function decode_1(clazz, split_0){
  $clinit_ValueCodex();
  if (!split_0 || split_0 == ($clinit_Splittable() , NULL)) {
    return null;
  }
  return getTypeOrDie(clazz).decode(clazz, split_0);
}

function encode_0(clazz, obj){
  $clinit_ValueCodex();
  if (obj == null) {
    return $clinit_Splittable() , NULL;
  }
  return getTypeOrDie(clazz).encode(obj);
}

function encode_1(obj){
  $clinit_ValueCodex();
  var maybe, maybe$array, maybe$index, maybe$max, t;
  if (obj == null) {
    return $clinit_Splittable() , NULL;
  }
  t = findType(getClass__devirtual$(obj));
  if (!t) {
    for (maybe$array = ($clinit_ValueCodex$Type() , $clinit_ValueCodex$Type() , $VALUES_15) , maybe$index = 0 , maybe$max = maybe$array.length; maybe$index < maybe$max; ++maybe$index) {
      maybe = maybe$array[maybe$index];
      if (maybe.canUpcast(obj)) {
        t = maybe;
        break;
      }
    }
  }
  if (!t) {
    throw new UnsupportedOperationException_1(getClass__devirtual$(obj).typeName);
  }
  return t.encode(obj);
}

function findType(clazz){
  if ((clazz.modifiers & 8) != 0) {
    return $clinit_ValueCodex$Type() , ENUM;
  }
  return dynamicCast($get_9(TYPES_BY_CLASS, clazz), Q$ValueCodex$Type);
}

function getTypeOrDie(clazz){
  var toReturn;
  toReturn = findType(clazz);
  if (!toReturn) {
    throw new UnsupportedOperationException_1(clazz.typeName);
  }
  return toReturn;
}

function getUninitializedFieldValue(clazz){
  $clinit_ValueCodex();
  var type_0;
  type_0 = getTypeOrDie(clazz);
  if (clazz == type_0.primitiveType) {
    return type_0.defaultValue;
  }
  return null;
}

var TYPES_BY_CLASS;
function $clinit_ValueCodex$Type(){
  $clinit_ValueCodex$Type = nullMethod;
  BIG_DECIMAL = new ValueCodex$Type$1_0(Ljava_math_BigDecimal_2_classLit);
  BIG_INTEGER = new ValueCodex$Type$2_0(Ljava_math_BigInteger_2_classLit);
  BOOLEAN = new ValueCodex$Type$3_0(Ljava_lang_Boolean_2_classLit, Z_classLit, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
  BYTE = new ValueCodex$Type$4_0(Ljava_lang_Byte_2_classLit, B_classLit, valueOf(0));
  CHARACTER = new ValueCodex$Type$5_0(Ljava_lang_Character_2_classLit, C_classLit, valueOf_0(0));
  DATE = new ValueCodex$Type$6_0(Ljava_util_Date_2_classLit);
  DOUBLE_0 = new ValueCodex$Type$7_0(Ljava_lang_Double_2_classLit, D_classLit, new Double_0(0));
  ENUM = new ValueCodex$Type$8_0(Ljava_lang_Enum_2_classLit);
  FLOAT = new ValueCodex$Type$9_0(Ljava_lang_Float_2_classLit, F_classLit, new Float_0(0));
  INTEGER = new ValueCodex$Type$10_0(Ljava_lang_Integer_2_classLit, I_classLit, valueOf_1(0));
  LONG = new ValueCodex$Type$11_0(Ljava_lang_Long_2_classLit, J_classLit, valueOf_2(P0_longLit));
  SHORT = new ValueCodex$Type$12_0(Ljava_lang_Short_2_classLit, S_classLit, valueOf_3(0));
  STRING = new ValueCodex$Type$13_0(Ljava_lang_String_2_classLit);
  SPLITTABLE = new ValueCodex$Type$14_0(Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit);
  VOID = new ValueCodex$Type$15_0(Ljava_lang_Void_2_classLit, V_classLit);
  $VALUES_15 = initValues(_3Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$ValueCodex$Type, [BIG_DECIMAL, BIG_INTEGER, BOOLEAN, BYTE, CHARACTER, DATE, DOUBLE_0, ENUM, FLOAT, INTEGER, LONG, SHORT, STRING, SPLITTABLE, VOID]);
}

function ValueCodex$Type_0(enum$name, enum$ordinal, objectType){
  ValueCodex$Type_1.call(this, enum$name, enum$ordinal, objectType, null, null);
}

function ValueCodex$Type_1(enum$name, enum$ordinal, objectType, primitiveType, defaultValue){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.type_0 = objectType;
  this.primitiveType = primitiveType;
  this.defaultValue = defaultValue;
}

function values_16(){
  $clinit_ValueCodex$Type();
  return $VALUES_15;
}

defineSeed(569, 31, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]));
_.canUpcast = function canUpcast(value_0){
  return false;
}
;
var $VALUES_15, BIG_DECIMAL, BIG_INTEGER, BOOLEAN, BYTE, CHARACTER, DATE, DOUBLE_0, ENUM, FLOAT, INTEGER, LONG, SHORT, SPLITTABLE, STRING, VOID;
function ValueCodex$Type$1_0($anonymous0){
  ValueCodex$Type_0.call(this, 'BIG_DECIMAL', 0, $anonymous0);
}

defineSeed(570, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$1_0);
_.canUpcast = function canUpcast_0(value_0){
  return instanceOf(value_0, Q$BigDecimal);
}
;
_.decode = function decode_2(clazz, value_0){
  return new BigDecimal_1(value_0.__s);
}
;
_.encode = function encode_2(value_0){
  return {__s:$toString_2(dynamicCast(value_0, Q$BigDecimal))};
}
;
function ValueCodex$Type$10_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'INTEGER', 9, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(571, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$10_0);
_.decode = function decode_3(clazz, value_0){
  return valueOf_1(round_int(Number(value_0)));
}
;
_.encode = function encode_3(value_0){
  return create0_0(dynamicCast(value_0, Q$Integer).value_0);
}
;
function $decode(value_0){
  if ($isNumber(value_0)) {
    return valueOf_2(fromDouble(Number(value_0)));
  }
  return valueOf_2(__parseAndValidateLong(value_0.__s));
}

function ValueCodex$Type$11_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'LONG', 10, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(572, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$11_0);
_.decode = function decode_4(clazz, value_0){
  return $decode(value_0);
}
;
_.encode = function encode_4(value_0){
  return {__s:'' + dynamicCast(value_0, Q$Long)};
}
;
function ValueCodex$Type$12_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'SHORT', 11, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(573, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$12_0);
_.decode = function decode_5(clazz, value_0){
  return valueOf_3(round_short(Number(value_0)));
}
;
_.encode = function encode_5(value_0){
  return create0_0(dynamicCast(value_0, Q$Short).value_0);
}
;
function ValueCodex$Type$13_0($anonymous0){
  ValueCodex$Type_0.call(this, 'STRING', 12, $anonymous0);
}

defineSeed(574, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$13_0);
_.decode = function decode_6(clazz, value_0){
  return value_0.__s;
}
;
_.encode = function encode_6(value_0){
  return {__s:dynamicCast(value_0, Q$String)};
}
;
function ValueCodex$Type$14_0($anonymous0){
  ValueCodex$Type_0.call(this, 'SPLITTABLE', 13, $anonymous0);
}

defineSeed(575, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$14_0);
_.decode = function decode_7(clazz, value_0){
  return value_0;
}
;
_.encode = function encode_7(value_0){
  return dynamicCastJso(value_0);
}
;
function ValueCodex$Type$15_0($anonymous0, $anonymous1){
  ValueCodex$Type_1.call(this, 'VOID', 14, $anonymous0, $anonymous1, null);
}

defineSeed(576, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$15_0);
_.decode = function decode_8(clazz, value_0){
  return null;
}
;
_.encode = function encode_8(value_0){
  return null;
}
;
function ValueCodex$Type$2_0($anonymous0){
  ValueCodex$Type_0.call(this, 'BIG_INTEGER', 1, $anonymous0);
}

defineSeed(577, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$2_0);
_.canUpcast = function canUpcast_1(value_0){
  return instanceOf(value_0, Q$BigInteger);
}
;
_.decode = function decode_9(clazz, value_0){
  return new BigInteger_4(value_0.__s);
}
;
_.encode = function encode_9(value_0){
  return {__s:toDecimalScaledString_0(dynamicCast(value_0, Q$BigInteger), 0)};
}
;
function ValueCodex$Type$3_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'BOOLEAN', 2, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(578, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$3_0);
_.decode = function decode_10(clazz, value_0){
  return $clinit_Boolean() , value_0 == true?TRUE_1:FALSE_1;
}
;
_.encode = function encode_10(value_0){
  return create0_1(dynamicCast(value_0, Q$Boolean).value_0);
}
;
function ValueCodex$Type$4_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'BYTE', 3, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(579, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$4_0);
_.decode = function decode_11(clazz, value_0){
  return valueOf(round_byte(Number(value_0)));
}
;
_.encode = function encode_11(value_0){
  return create0_0(dynamicCast(value_0, Q$Byte).value_0);
}
;
function ValueCodex$Type$5_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'CHARACTER', 4, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(580, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$5_0);
_.decode = function decode_12(clazz, value_0){
  return valueOf_0(value_0.__s.charCodeAt(0));
}
;
_.encode = function encode_12(value_0){
  return {__s:'' + dynamicCast(value_0, Q$Character)};
}
;
function $decode_0(value_0){
  if ($isNumber(value_0)) {
    return new Date_1(fromDouble(Number(value_0)));
  }
  return tryParseDate(value_0.__s);
}

function ValueCodex$Type$6_0($anonymous0){
  ValueCodex$Type_0.call(this, 'DATE', 5, $anonymous0);
}

defineSeed(581, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$6_0);
_.canUpcast = function canUpcast_2(value_0){
  return instanceOf(value_0, Q$Date);
}
;
_.decode = function decode_13(clazz, value_0){
  return $decode_0(value_0);
}
;
_.encode = function encode_13(value_0){
  return {__s:'' + toString_6(fromDouble(dynamicCast(value_0, Q$Date).jsdate.getTime()))};
}
;
function ValueCodex$Type$7_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'DOUBLE', 6, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(582, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$7_0);
_.decode = function decode_14(clazz, value_0){
  return new Double_0(Number(value_0));
}
;
_.encode = function encode_14(value_0){
  return create0_0(dynamicCast(value_0, Q$Double).value_0);
}
;
function ValueCodex$Type$8_0($anonymous0){
  ValueCodex$Type_0.call(this, 'ENUM', 7, $anonymous0);
}

defineSeed(583, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$8_0);
_.canUpcast = function canUpcast_3(value_0){
  return instanceOf(value_0, Q$Enum);
}
;
_.decode = function decode_15(clazz, value_0){
  return dynamicCast($getEnumConstants(clazz)[round_int(Number(value_0))], Q$Enum);
}
;
_.encode = function encode_15(value_0){
  return create0_0(dynamicCast(value_0, Q$Enum).ordinal);
}
;
function ValueCodex$Type$9_0($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_1.call(this, 'FLOAT', 8, $anonymous0, $anonymous1, $anonymous2);
}

defineSeed(584, 569, makeCastMap([Q$ValueCodex$Type, Q$Serializable, Q$Comparable, Q$Enum]), ValueCodex$Type$9_0);
_.decode = function decode_16(clazz, value_0){
  return new Float_0(Number(value_0));
}
;
_.encode = function encode_16(value_0){
  return create0_0(dynamicCast(value_0, Q$Float).value_0);
}
;
function $checkFrozen(this$static){
  if (this$static.frozen) {
    throw new IllegalStateException_1('The AutoBean has been frozen');
  }
}

function $checkWrapped(this$static){
  if (this$static.wrapped == null && !this$static.usingSimplePeer) {
    throw new IllegalStateException_1('The AutoBean has been unwrapped');
  }
}

function $getOrReify(this$static, propertyName){
  var coder, temp, toReturn;
  $checkWrapped(this$static);
  if ($isReified(this$static.data_0, propertyName)) {
    temp = $getReified(this$static.data_0, propertyName);
    return temp;
  }
  if (this$static.data_0[propertyName] == null) {
    return null;
  }
  $setReified(this$static.data_0, propertyName, null);
  coder = doCoderFor(this$static, propertyName);
  toReturn = coder.decode_0(new AutoBeanCodexImpl$EncodeState_0(this$static.factory, null), $getRaw_0(this$static.data_0, propertyName));
  $setReified(this$static.data_0, propertyName, toReturn);
  return toReturn;
}

function $getTag(this$static, tagName){
  return !this$static.tags?null:this$static.tags.get_2(tagName);
}

function $getWrapped(this$static){
  $checkWrapped(this$static);
  return this$static.wrapped;
}

function $setData(this$static, data_0){
  this$static.data_0 = data_0;
  this$static.wrapped = this$static.createSimplePeer();
}

function $setProperty(this$static, propertyName, value_0){
  var backing, coder;
  $checkWrapped(this$static);
  $checkFrozen(this$static);
  $setReified(this$static.data_0, propertyName, value_0);
  if (value_0 == null) {
    $assign_0(($clinit_Splittable() , NULL), this$static.data_0, propertyName);
    return;
  }
  coder = doCoderFor(this$static, propertyName);
  backing = coder.extractSplittable(new AutoBeanCodexImpl$EncodeState_0(this$static.factory, null), value_0);
  !backing?$setReified(this$static.data_0, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)):$assign_0(backing, this$static.data_0, propertyName);
}

function $traverse_0(this$static, visitor, ctx){
  if (!$add_17(ctx.seen, this$static)) {
    return;
  }
  visitor.visit(this$static, ctx) && this$static.traverseProperties(visitor, ctx);
  visitor.endVisit(this$static, ctx);
}

function AbstractAutoBean_0(factory){
  AbstractAutoBean_1.call(this, factory, {});
}

function AbstractAutoBean_1(factory, data_0){
  this.data_0 = data_0;
  this.factory = factory;
  this.usingSimplePeer = true;
  this.wrapped = this.createSimplePeer();
}

function AbstractAutoBean_2(wrapped, factory){
  this.factory = factory;
  this.usingSimplePeer = false;
  this.data_0 = null;
  this.wrapped = wrapped;
  setNative(wrapped, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(585, 1, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]));
_.accept = function accept(visitor){
  $traverse_0(this, visitor, new AbstractAutoBean$OneShotContext_0);
}
;
_.createSimplePeer = function createSimplePeer(){
  throw new UnsupportedOperationException_0;
}
;
_.getFactory = function getFactory(){
  return this.factory;
}
;
_.getSplittable = function getSplittable(){
  return this.data_0;
}
;
_.getTag = function getTag(tagName){
  return $getTag(this, tagName);
}
;
_.isFrozen = function isFrozen(){
  return this.frozen;
}
;
_.setFrozen = function setFrozen(frozen){
  this.frozen = frozen;
}
;
_.setProperty = function setProperty(propertyName, value_0){
  $setProperty(this, propertyName, value_0);
}
;
_.setTag = function setTag(tagName, value_0){
  !this.tags && (this.tags = new HashMap_0);
  this.tags.put(tagName, value_0);
}
;
_.frozen = false;
_.usingSimplePeer = false;
function AbstractAutoBean$OneShotContext_0(){
  this.seen = new HashSet_0;
}

defineSeed(586, 1, {}, AbstractAutoBean$OneShotContext_0);
function $clinit_AutoBeanCodexImpl(){
  $clinit_AutoBeanCodexImpl = nullMethod;
  coderFor = new HashMap_0;
  coders = new HashMap_0;
}

function doCoderFor(bean, propertyName){
  $clinit_AutoBeanCodexImpl();
  var key_0, toReturn;
  key_0 = bean.getType_0().typeName + ':' + propertyName;
  toReturn = dynamicCast(coderFor.get_2(key_0), Q$AutoBeanCodexImpl$Coder);
  if (!toReturn) {
    $traverse_0(bean, new AutoBeanCodexImpl$PropertyCoderCreator_0, new AbstractAutoBean$OneShotContext_0);
    toReturn = dynamicCast(coderFor.get_2(key_0), Q$AutoBeanCodexImpl$Coder);
    if (!toReturn) {
      throw new IllegalArgumentException_1(propertyName);
    }
  }
  return toReturn;
}

function doDecode(state, clazz, data_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast($getReified(data_0, Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit.typeName), Q$AutoBean);
  if (toReturn) {
    return toReturn;
  }
  toReturn = state.factory.create(clazz);
  $setReified(data_0, Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit.typeName, toReturn);
  if (!toReturn) {
    throw new IllegalArgumentException_1(clazz.typeName);
  }
  $setData(dynamicCast(toReturn, Q$AbstractAutoBean), data_0);
  return toReturn;
}

function doEncode(state, bean){
  $clinit_AutoBeanCodexImpl();
  var e, ex;
  e = new AutoBeanCodexImpl$PropertyGetter_0(state);
  try {
    bean.accept(e);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, Q$AutoBeanCodexImpl$HaltException)) {
      ex = $e0;
      throw unwrap(dynamicCast(ex.cause, Q$RuntimeException));
    }
     else 
      throw unwrap($e0);
  }
}

function enumCoder(type_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(coders.get_2(type_0), Q$AutoBeanCodexImpl$Coder);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$EnumCoder_0(type_0);
    coders.put(type_0, toReturn);
  }
  return toReturn;
}

function key_1(bean, propertyName){
  $clinit_AutoBeanCodexImpl();
  return bean.getType_0().typeName + ':' + propertyName;
}

function objectCoder(type_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(coders.get_2(type_0), Q$AutoBeanCodexImpl$Coder);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$ObjectCoder_0(type_0);
    coders.put(type_0, toReturn);
  }
  return toReturn;
}

function tryExtractSplittable(value_0){
  var maybeJsoInvocation;
  $clinit_AutoBeanCodexImpl();
  var bean;
  bean = value_0 == null?null:dynamicCast(get_0(value_0, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean);
  if (instanceOfOrJso(bean, Q$HasSplittable)) {
    return maybeJsoInvocation = dynamicCastAllowJso(bean, Q$HasSplittable) , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.getSplittable():maybeJsoInvocation;
  }
  return null;
}

function valueCoder_0(type_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(coders.get_2(type_0), Q$AutoBeanCodexImpl$Coder);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$ValueCoder_0(type_0);
    coders.put(type_0, toReturn);
  }
  return toReturn;
}

var coderFor, coders;
function AutoBeanCodexImpl$CoderCreator_0(){
  this.stack_0 = new Stack_0;
}

defineSeed(588, 567, {}, AutoBeanCodexImpl$CoderCreator_0);
_.endVisitType = function endVisitType_0(type_0){
  Ljava_util_List_2_classLit == type_0 || Ljava_util_Set_2_classLit == type_0?$add_18(this.stack_0, ($clinit_AutoBeanCodexImpl() , new AutoBeanCodexImpl$CollectionCoder_0(type_0, dynamicCast($pop_0(this.stack_0), Q$AutoBeanCodexImpl$Coder)))):Ljava_util_Map_2_classLit == type_0?$add_18(this.stack_0, ($clinit_AutoBeanCodexImpl() , new AutoBeanCodexImpl$MapCoder_0(dynamicCast($pop_0(this.stack_0), Q$AutoBeanCodexImpl$Coder), dynamicCast($pop_0(this.stack_0), Q$AutoBeanCodexImpl$Coder)))):Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit == type_0?$add_18(this.stack_0, ($clinit_AutoBeanCodexImpl() , $clinit_AutoBeanCodexImpl$SplittableCoder() , INSTANCE_3)):$getEnumConstants(type_0) != null?$add_18(this.stack_0, enumCoder(type_0)):canDecode(type_0)?$push_3(this.stack_0, valueCoder_0(type_0)):$push_3(this.stack_0, objectCoder(type_0));
}
;
function $encode(this$static, state, value_0){
  var it;
  if (value_0 == null) {
    $append_11(state.sb, 'null');
    return;
  }
  it = dynamicCast(value_0, Q$Collection).iterator();
  $append_11(state.sb, '[');
  if (it.hasNext()) {
    this$static.elementDecoder.encode_0(state, it.next_0());
    while (it.hasNext()) {
      $append_11(state.sb, ',');
      this$static.elementDecoder.encode_0(state, it.next_0());
    }
  }
  $append_11(state.sb, ']');
}

function AutoBeanCodexImpl$CollectionCoder_0(type_0, elementDecoder){
  this.elementDecoder = elementDecoder;
  this.type_0 = type_0;
}

defineSeed(589, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder]), AutoBeanCodexImpl$CollectionCoder_0);
_.decode_0 = function decode_17(state, data_0){
  var collection;
  if (Ljava_util_List_2_classLit == this.type_0) {
    collection = new SplittableList_0(data_0, this.elementDecoder, state);
  }
   else if (Ljava_util_Set_2_classLit == this.type_0) {
    collection = new SplittableSet_0(data_0, this.elementDecoder, state);
  }
   else {
    throw new RuntimeException_1(this.type_0.typeName);
  }
  return collection;
}
;
_.encode_0 = function encode_17(state, value_0){
  $encode(this, state, value_0);
}
;
_.extractSplittable = function extractSplittable(state, value_0){
  return tryExtractSplittable(value_0);
}
;
function AutoBeanCodexImpl$EncodeState_0(factory, sb){
  this.factory = factory;
  this.enumMap = instanceOf(factory, Q$EnumMap)?dynamicCast(factory, Q$EnumMap):null;
  this.sb = sb;
  this.seen = !sb?null:new Stack_0;
}

defineSeed(590, 1, {}, AutoBeanCodexImpl$EncodeState_0);
function AutoBeanCodexImpl$EnumCoder_0(type_0){
  this.type_0 = type_0;
}

defineSeed(591, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder]), AutoBeanCodexImpl$EnumCoder_0);
_.decode_0 = function decode_18(state, data_0){
  return state.enumMap.getEnum(this.type_0, data_0.__s);
}
;
_.encode_0 = function encode_18(state, value_0){
  if (value_0 == null) {
    $append_11(state.sb, 'null');
    return;
  }
  $append_11(state.sb, escapeValue(state.enumMap.getToken(dynamicCast(value_0, Q$Enum))));
}
;
_.extractSplittable = function extractSplittable_0(state, value_0){
  return split_1(escapeValue(state.enumMap.getToken(dynamicCast(value_0, Q$Enum))));
}
;
function AutoBeanCodexImpl$HaltException_0(cause){
  RuntimeException_3.call(this, cause);
}

defineSeed(592, 97, makeCastMap([Q$AutoBeanCodexImpl$HaltException, Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]), AutoBeanCodexImpl$HaltException_0);
function AutoBeanCodexImpl$MapCoder_0(valueDecoder, keyDecoder){
  this.keyDecoder = keyDecoder;
  this.valueDecoder = valueDecoder;
}

defineSeed(593, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder]), AutoBeanCodexImpl$MapCoder_0);
_.decode_0 = function decode_19(state, data_0){
  var toReturn;
  $isIndexed(data_0)?(toReturn = new SplittableComplexMap_0(data_0, this.keyDecoder, this.valueDecoder, state)):(toReturn = new SplittableSimpleMap_0(data_0, this.keyDecoder, this.valueDecoder, state));
  return toReturn;
}
;
_.encode_0 = function encode_19(state, value_0){
  var entry, entry$iterator, first, isSimpleMap, keys_0, map_0, mapKey, mapValue, values;
  if (value_0 == null) {
    $append_11(state.sb, 'null');
    return;
  }
  map_0 = dynamicCast(value_0, Q$Map);
  isSimpleMap = instanceOf(this.keyDecoder, Q$AutoBeanCodexImpl$ValueCoder);
  if (isSimpleMap) {
    first = true;
    $append_11(state.sb, '{');
    for (entry$iterator = map_0.entrySet_0().iterator(); entry$iterator.hasNext();) {
      entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
      mapKey = entry.getKey();
      if (mapKey == null) {
        continue;
      }
      mapValue = entry.getValue_0();
      first?(first = false):$append_11(state.sb, ',');
      this.keyDecoder.encode_0(state, mapKey);
      $append_11(state.sb, ':');
      mapValue == null?$append_11(state.sb, 'null'):this.valueDecoder.encode_0(state, mapValue);
    }
    $append_11(state.sb, '}');
  }
   else {
    keys_0 = new ArrayList_1(map_0.size_1());
    values = new ArrayList_1(map_0.size_1());
    for (entry$iterator = map_0.entrySet_0().iterator(); entry$iterator.hasNext();) {
      entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
      $add_16(keys_0, entry.getKey());
      $add_16(values, entry.getValue_0());
    }
    $append_11(state.sb, '[');
    $clinit_AutoBeanCodexImpl();
    $encode(new AutoBeanCodexImpl$CollectionCoder_0(Ljava_util_List_2_classLit, this.keyDecoder), state, keys_0);
    $append_11(state.sb, ',');
    $encode(new AutoBeanCodexImpl$CollectionCoder_0(Ljava_util_List_2_classLit, this.valueDecoder), state, values);
    $append_11(state.sb, ']');
  }
}
;
_.extractSplittable = function extractSplittable_1(state, value_0){
  return tryExtractSplittable(value_0);
}
;
function AutoBeanCodexImpl$ObjectCoder_0(type_0){
  this.type_0 = type_0;
}

defineSeed(594, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder]), AutoBeanCodexImpl$ObjectCoder_0);
_.decode_0 = function decode_20(state, data_0){
  var bean;
  bean = doDecode(state, this.type_0, data_0);
  return !bean?null:bean.as();
}
;
_.encode_0 = function encode_20(state, value_0){
  if (value_0 == null) {
    $append_11(state.sb, 'null');
    return;
  }
  doEncode(state, value_0 == null?null:dynamicCast(get_0(value_0, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean));
}
;
_.extractSplittable = function extractSplittable_2(state, value_0){
  return tryExtractSplittable(value_0);
}
;
function $maybeCreateCoder(this$static, propertyName, ctx){
  var creator;
  creator = new AutoBeanCodexImpl$CoderCreator_0;
  $traverse(ctx, creator, 0);
  ($clinit_AutoBeanCodexImpl() , coderFor).put(key_1(this$static.bean, propertyName), dynamicCast($pop_0(creator.stack_0), Q$AutoBeanCodexImpl$Coder));
}

function AutoBeanCodexImpl$PropertyCoderCreator_0(){
}

defineSeed(595, 565, {}, AutoBeanCodexImpl$PropertyCoderCreator_0);
_.visit = function visit_0(bean, ctx){
  this.bean = bean;
  return true;
}
;
_.visitReferenceProperty = function visitReferenceProperty_2(propertyName, value_0, ctx){
  $maybeCreateCoder(this, propertyName, ctx);
  return false;
}
;
_.visitValueProperty = function visitValueProperty_2(propertyName, value_0, ctx){
  $maybeCreateCoder(this, propertyName, ctx);
  return false;
}
;
function $encodeProperty(this$static, propertyName, value_0, ctx){
  var decoder, pd;
  pd = new AutoBeanCodexImpl$CoderCreator_0;
  $traverse(ctx, pd, 0);
  decoder = dynamicCast($pop_0(pd.stack_0), Q$AutoBeanCodexImpl$Coder);
  this$static.first?(this$static.first = false):$append_11(this$static.state.sb, ',');
  $append_11(this$static.state.sb, escapeValue(propertyName));
  $append_11(this$static.state.sb, ':');
  decoder.encode_0(this$static.state, value_0);
}

function AutoBeanCodexImpl$PropertyGetter_0(state){
  this.state = state;
}

defineSeed(596, 565, {}, AutoBeanCodexImpl$PropertyGetter_0);
_.endVisit = function endVisit_0(bean, ctx){
  $append_11(this.state.sb, '}');
  $pop_0(this.state.seen);
}
;
_.visit = function visit_1(bean, ctx){
  if ($contains_2(this.state.seen, bean)) {
    throw new AutoBeanCodexImpl$HaltException_0(new UnsupportedOperationException_1('Cycles not supported'));
  }
  $add_18(this.state.seen, bean);
  $append_11(this.state.sb, '{');
  return true;
}
;
_.visitReferenceProperty = function visitReferenceProperty_3(propertyName, value_0, ctx){
  !!value_0 && $encodeProperty(this, propertyName, value_0.as(), ctx);
  return false;
}
;
_.visitValueProperty = function visitValueProperty_3(propertyName, value_0, ctx){
  value_0 != null && !equals__devirtual$(value_0, getUninitializedFieldValue(!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType)) && $encodeProperty(this, propertyName, value_0, ctx);
  return false;
}
;
_.first = true;
function $clinit_AutoBeanCodexImpl$SplittableCoder(){
  $clinit_AutoBeanCodexImpl$SplittableCoder = nullMethod;
  INSTANCE_3 = new AutoBeanCodexImpl$SplittableCoder_0;
}

function AutoBeanCodexImpl$SplittableCoder_0(){
}

defineSeed(597, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder]), AutoBeanCodexImpl$SplittableCoder_0);
_.decode_0 = function decode_21(state, data_0){
  return data_0;
}
;
_.encode_0 = function encode_21(state, value_0){
  if (value_0 == null) {
    $append_11(state.sb, 'null');
    return;
  }
  $append_11(state.sb, $getPayload(dynamicCastJso(value_0)));
}
;
_.extractSplittable = function extractSplittable_3(state, value_0){
  return dynamicCastJso(value_0);
}
;
var INSTANCE_3;
function AutoBeanCodexImpl$ValueCoder_0(type_0){
  this.type_0 = type_0;
}

defineSeed(598, 1, makeCastMap([Q$AutoBeanCodexImpl$Coder, Q$AutoBeanCodexImpl$ValueCoder]), AutoBeanCodexImpl$ValueCoder_0);
_.decode_0 = function decode_22(state, propertyValue){
  if (!propertyValue || propertyValue == ($clinit_Splittable() , NULL)) {
    return getUninitializedFieldValue(this.type_0);
  }
  return decode_1(this.type_0, propertyValue);
}
;
_.encode_0 = function encode_22(state, value_0){
  $append_11(state.sb, $getPayload(encode_0(this.type_0, value_0)));
}
;
_.extractSplittable = function extractSplittable_4(state, value_0){
  return encode_0(this.type_0, value_0);
}
;
function SplittableComplexMap_0(data_0, keyCoder, valueCoder, state){
  this.data_0 = data_0;
  this.keys_0 = new SplittableList_0($getRaw(data_0, 0), keyCoder, state);
  this.values = new SplittableList_0($getRaw(data_0, 1), valueCoder, state);
}

defineSeed(599, 1, makeCastMap([Q$Map]), SplittableComplexMap_0);
_.containsKey = function containsKey(key_0){
  return $contains(this.keys_0, key_0);
}
;
_.entrySet_0 = function entrySet_0(){
  return new SplittableComplexMap$1_0(this);
}
;
_.get_2 = function get_4(key_0){
  var idx;
  idx = $indexOf_0(this.keys_0, key_0);
  if (idx == -1) {
    return null;
  }
  return $get_5(this.values, idx);
}
;
_.getSplittable = function getSplittable_0(){
  return this.data_0;
}
;
_.isEmpty_0 = function isEmpty_0(){
  return this.keys_0.data_0.length == 0;
}
;
_.keySet_0 = function keySet(){
  return new SplittableComplexMap$2_0(this);
}
;
_.put = function put(key_0, value_0){
  var idx;
  idx = $indexOf_0(this.keys_0, key_0);
  if (idx == -1) {
    $add_13(this.keys_0, key_0);
    $add_13(this.values, value_0);
    return null;
  }
  return $set_3(this.values, idx, value_0);
}
;
_.remove_3 = function remove_19(key_0){
  var idx;
  idx = $indexOf_0(this.keys_0, key_0);
  if (idx == -1) {
    return null;
  }
  $remove_14(this.keys_0, idx);
  return $remove_14(this.values, idx);
}
;
_.size_1 = function size_2(){
  return this.keys_0.data_0.length;
}
;
function $addAll_0(this$static, c){
  var changed, iter;
  iter = c.iterator();
  changed = false;
  while (iter.hasNext()) {
    this$static.add_1(iter.next_0()) && (changed = true);
  }
  return changed;
}

defineSeed(602, 1, makeCastMap([Q$Iterable, Q$Collection]));
_.addAll = function addAll_0(c){
  return $addAll_0(this, c);
}
;
function SplittableComplexMap$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(600, 601, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), SplittableComplexMap$1_0);
_.iterator = function iterator_7(){
  return new SplittableComplexMap$1$1_0(this);
}
;
_.size_1 = function size_3(){
  return this.this$0.keys_0.data_0.length;
}
;
function SplittableComplexMap$1$1_0(this$1){
  this.this$1 = this$1;
  this.keyIt = new AbstractList$IteratorImpl_0(this.this$1.this$0.keys_0);
  this.valueIt = new AbstractList$ListIteratorImpl_0(this.this$1.this$0.values, 0);
}

defineSeed(603, 1, makeCastMap([Q$Iterator]), SplittableComplexMap$1$1_0);
_.hasNext = function hasNext_5(){
  return $hasNext_1(this.keyIt);
}
;
_.next_0 = function next_6(){
  return new SplittableComplexMap$1$1$1_0(this);
}
;
_.remove_0 = function remove_21(){
  $remove_16(this.keyIt);
  $remove_16(this.valueIt);
}
;
function SplittableComplexMap$1$1$1_0(this$2){
  this.this$2 = this$2;
  this.key = $next_4(this.this$2.keyIt);
  this.value_0 = $next_4(this.this$2.valueIt);
}

defineSeed(604, 1, makeCastMap([Q$Map$Entry]), SplittableComplexMap$1$1$1_0);
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue_0 = function getValue(){
  return this.value_0;
}
;
_.setValue = function setValue(value_0){
  $set_4(this.this$2.valueIt, value_0);
  return value_0;
}
;
function SplittableComplexMap$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(605, 601, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), SplittableComplexMap$2_0);
_.iterator = function iterator_8(){
  return new AbstractList$IteratorImpl_0(this.this$0.keys_0);
}
;
_.size_1 = function size_4(){
  return this.this$0.keys_0.data_0.length;
}
;
function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (toFind == null?this$static.get_1(i) == null:equals__devirtual$(toFind, this$static.get_1(i))) {
      return i;
    }
  }
  return -1;
}

defineSeed(607, 602, makeCastMap([Q$Iterable, Q$Collection, Q$List]));
_.indexOf_0 = function indexOf_0(toFind){
  return $indexOf_0(this, toFind);
}
;
_.set_0 = function set_2(index_0, o){
  throw new UnsupportedOperationException_1('Set not supported on this list');
}
;
_.subList = function subList_0(fromIndex, toIndex){
  return new AbstractList$SubList_0(this, fromIndex, toIndex);
}
;
function $get_5(this$static, index_0){
  var toReturn;
  if ($isReified(this$static.data_0, '' + index_0)) {
    toReturn = $getReified(this$static.data_0, '' + index_0);
    return toReturn;
  }
  return reify(this$static.state, this$static.data_0, index_0, this$static.elementCoder);
}

function $remove_14(this$static, index_0){
  var i, newSize, toReturn;
  toReturn = $get_5(this$static, index_0);
  newSize = this$static.data_0.length - 1;
  for (i = index_0; i < newSize; i++) {
    $assign($getRaw(this$static.data_0, i + 1), this$static.data_0, i);
    $setReified(this$static.data_0, '' + i, $getReified(this$static.data_0, '' + (i + 1)));
  }
  $setSize(this$static.data_0, newSize);
  return toReturn;
}

function $set_3(this$static, index_0, element){
  var previous;
  previous = $get_5(this$static, index_0);
  set_4(this$static.state, this$static.data_0, index_0, this$static.elementCoder, element);
  return previous;
}

function SplittableList_0(data_0, elementCoder, state){
  this.data_0 = data_0;
  this.elementCoder = elementCoder;
  this.state = state;
}

function reify(state, data_0, index_0, coder){
  var toReturn;
  if ($isNull(data_0, index_0)) {
    return null;
  }
  toReturn = coder.decode_0(state, $getRaw(data_0, index_0));
  $setReified(data_0, '' + index_0, toReturn);
  return toReturn;
}

function set_4(state, data_0, index_0, coder, value_0){
  var backing;
  $setReified(data_0, '' + index_0, value_0);
  if (value_0 == null) {
    $assign(($clinit_Splittable() , NULL), data_0, index_0);
    return;
  }
  backing = coder.extractSplittable(state, value_0);
  !backing?$setReified(data_0, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)):$isString(backing)?$assign0_0(data_0, index_0, backing.__s):$assign0(data_0, index_0, backing);
}

defineSeed(606, 607, makeCastMap([Q$Iterable, Q$Collection, Q$List]), SplittableList_0);
_.add_0 = function add_7(index_0, element){
  set_4(this.state, this.data_0, index_0, this.elementCoder, element);
}
;
_.get_1 = function get_5(index_0){
  return $get_5(this, index_0);
}
;
_.getSplittable = function getSplittable_1(){
  return this.data_0;
}
;
_.remove_1 = function remove_23(index_0){
  return $remove_14(this, index_0);
}
;
_.set_0 = function set_3(index_0, element){
  return $set_3(this, index_0, element);
}
;
_.size_1 = function size_5(){
  return this.data_0.length;
}
;
function SplittableSet_0(data_0, elementCoder, state){
  this.data_0 = new SplittableList_0(data_0, elementCoder, state);
}

defineSeed(608, 601, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), SplittableSet_0);
_.add_1 = function add_8(e){
  if (!$contains(this.data_0, e)) {
    $add_13(this.data_0, e);
    return true;
  }
  return false;
}
;
_.getSplittable = function getSplittable_2(){
  return this.data_0.data_0;
}
;
_.iterator = function iterator_10(){
  return new AbstractList$IteratorImpl_0(this.data_0);
}
;
_.remove_2 = function remove_24(o){
  return $remove_13(this.data_0, o);
}
;
_.size_1 = function size_6(){
  return this.data_0.data_0.length;
}
;
function $get_6(this$static, key_0){
  var encodedKey;
  encodedKey = this$static.keyCoder.extractSplittable(this$static.state, key_0).__s;
  return $getRaw_1(this$static, encodedKey);
}

function $getRaw_1(this$static, encodedKey){
  var toReturn, toReturn0, value_0;
  if ($isReified(this$static.reified, encodedKey)) {
    toReturn0 = $getReified(this$static.reified, encodedKey);
    return toReturn0;
  }
  if (this$static.data_0[encodedKey] == null) {
    return null;
  }
  value_0 = $getRaw_0(this$static.data_0, encodedKey);
  toReturn = this$static.valueCoder.decode_0(this$static.state, value_0);
  $setReified(this$static.reified, encodedKey, toReturn);
  return toReturn;
}

function $put_2(this$static, key_0, value_0){
  var encodedKey, encodedValue, toReturn;
  toReturn = $get_6(this$static, key_0);
  encodedKey = this$static.keyCoder.extractSplittable(this$static.state, key_0).__s;
  $setReified(this$static.reified, encodedKey, value_0);
  encodedValue = this$static.valueCoder.extractSplittable(this$static.state, value_0);
  !encodedValue?$setReified(this$static.reified, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)):$assign_0(encodedValue, this$static.data_0, encodedKey);
  return toReturn;
}

function SplittableSimpleMap_0(data_0, keyCoder, valueCoder, state){
  this.reified = {};
  this.data_0 = data_0;
  this.keyCoder = keyCoder;
  this.state = state;
  this.valueCoder = valueCoder;
}

defineSeed(609, 1, makeCastMap([Q$Map]), SplittableSimpleMap_0);
_.containsKey = function containsKey_0(key_0){
  var encodedKey;
  encodedKey = this.keyCoder.extractSplittable(this.state, key_0).__s;
  return !(this.data_0[encodedKey] === undefined) || $isReified(this.reified, encodedKey);
}
;
_.entrySet_0 = function entrySet_1(){
  return new SplittableSimpleMap$1_0(this);
}
;
_.get_2 = function get_6(key_0){
  return $get_6(this, key_0);
}
;
_.getSplittable = function getSplittable_3(){
  return this.data_0;
}
;
_.isEmpty_0 = function isEmpty_2(){
  return $getPropertyKeys(this.data_0).list.isEmpty_0();
}
;
_.keySet_0 = function keySet_0(){
  return new SplittableSimpleMap$2_0(this);
}
;
_.put = function put_0(key_0, value_0){
  return $put_2(this, key_0, value_0);
}
;
_.remove_3 = function remove_25(key_0){
  var encodedKey, toReturn;
  toReturn = $get_6(this, key_0);
  encodedKey = this.keyCoder.extractSplittable(this.state, key_0).__s;
  $setReified(this.reified, encodedKey, null);
  $assign_0(($clinit_Splittable() , NULL), this.data_0, encodedKey);
  return toReturn;
}
;
_.size_1 = function size_7(){
  return $getPropertyKeys(this.data_0).coll.size_1();
}
;
function SplittableSimpleMap$1_0(this$0){
  this.this$0 = this$0;
  this.keys_0 = $getPropertyKeys(this.this$0.data_0);
}

defineSeed(610, 601, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), SplittableSimpleMap$1_0);
_.iterator = function iterator_11(){
  return new SplittableSimpleMap$1$1_0(this);
}
;
_.size_1 = function size_8(){
  return this.keys_0.coll.size_1();
}
;
function SplittableSimpleMap$1$1_0(this$1){
  this.this$1 = this$1;
  this.keyIterator = new Collections$UnmodifiableCollectionIterator_0(this.this$1.keys_0.coll.iterator());
}

defineSeed(611, 1, makeCastMap([Q$Iterator]), SplittableSimpleMap$1$1_0);
_.hasNext = function hasNext_6(){
  return this.keyIterator.it.hasNext();
}
;
_.next_0 = function next_7(){
  return this.encodedKey = dynamicCast(this.keyIterator.it.next_0(), Q$String) , new SplittableSimpleMap$1$1$1_0(this);
}
;
_.remove_0 = function remove_26(){
  $assign_0(($clinit_Splittable() , NULL), this.this$1.this$0.data_0, this.encodedKey);
  $setReified(this.this$1.this$0.reified, this.encodedKey, null);
}
;
function SplittableSimpleMap$1$1$1_0(this$2){
  this.this$2 = this$2;
  this.key = this.this$2.this$1.this$0.keyCoder.decode_0(this.this$2.this$1.this$0.state, split_1(escapeValue(this.this$2.encodedKey)));
  this.value_0 = this.this$2.this$1.this$0.valueCoder.decode_0(this.this$2.this$1.this$0.state, $getRaw_0(this.this$2.this$1.this$0.data_0, this.this$2.encodedKey));
}

defineSeed(612, 1, makeCastMap([Q$Map$Entry]), SplittableSimpleMap$1$1$1_0);
_.getKey = function getKey_0(){
  return this.key;
}
;
_.getValue_0 = function getValue_0(){
  return this.value_0;
}
;
_.setValue = function setValue_0(newValue){
  return $put_2(this.this$2.this$1.this$0, this.key, newValue);
}
;
function SplittableSimpleMap$2_0(this$0){
  this.this$0 = this$0;
  this.keys_0 = $getPropertyKeys(this.this$0.data_0);
}

defineSeed(613, 601, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), SplittableSimpleMap$2_0);
_.iterator = function iterator_12(){
  return new SplittableSimpleMap$2$1_0(this);
}
;
_.size_1 = function size_9(){
  return this.keys_0.coll.size_1();
}
;
function SplittableSimpleMap$2$1_0(this$1){
  this.this$1 = this$1;
  this.it = new Collections$UnmodifiableCollectionIterator_0(this.this$1.keys_0.coll.iterator());
}

defineSeed(614, 1, makeCastMap([Q$Iterator]), SplittableSimpleMap$2$1_0);
_.hasNext = function hasNext_7(){
  return this.it.it.hasNext();
}
;
_.next_0 = function next_8(){
  var toReturn;
  this.lastEncodedKey = dynamicCast(this.it.it.next_0(), Q$String);
  toReturn = this.this$1.this$0.keyCoder.decode_0(this.this$1.this$0.state, split_1(escapeValue(this.lastEncodedKey)));
  return toReturn;
}
;
_.remove_0 = function remove_27(){
  $assign_0(($clinit_Splittable() , NULL), this.this$1.this$0.data_0, this.lastEncodedKey);
  $setReified(this.this$1.this$0.reified, this.lastEncodedKey, null);
}
;
function split_1(payload){
  var c, isSimple, toReturn;
  c = payload.charCodeAt(0);
  isSimple = c != 123 && c != 91;
  isSimple && (payload = '[' + payload + ']');
  toReturn = safeEval(payload);
  isSimple && (toReturn = $getRaw(toReturn, 0));
  return toReturn;
}

function tryParseDate(date){
  var js;
  try {
    return new Date_1(__parseAndValidateLong(date));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, Q$NumberFormatException))
      throw unwrap($e0);
  }
  try {
    js = new Date(date);
    return new Date_1(fromDouble(js.getTime()));
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (!instanceOf($e1, Q$JavaScriptException))
      throw unwrap($e1);
  }
  return null;
}

function $send_0(this$static, payload, receiver){
  var builder;
  builder = new RequestBuilder_0(($clinit_RequestBuilder() , POST), this$static.requestUrl);
  $setHeader(builder, 'Content-Type', 'application/json; charset=utf-8');
  $setHeader(builder, 'pageurl', $wnd.location.href);
  $setHeader(builder, 'X-GWT-Permutation', $strongName);
  builder.requestData = payload;
  $setCallback(builder, new DefaultRequestTransport$1_0(receiver));
  try {
    throwIfNull('callback', builder.callback);
    $doSend(builder, builder.requestData, builder.callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw unwrap($e0);
  }
}

function DefaultRequestTransport_0(){
  var s, i;
  this.requestUrl = (s = $doc.location.href , i = s.indexOf('#') , i != -1 && (s = s.substring(0, i)) , i = s.indexOf('?') , i != -1 && (s = s.substring(0, i)) , i = s.lastIndexOf('/') , i != -1 && (s = s.substring(0, i)) , s.length > 0?s + '/':'') + 'gwtRequest';
}

defineSeed(620, 1, {}, DefaultRequestTransport_0);
function $onError(this$static, exception){
  $onTransportFailure_0(this$static.val$receiver, new ServerFailure_0(exception.detailMessage));
}

function $onResponseReceived(this$static, response){
  var message, text_0;
  if (200 == $getStatusCode(response)) {
    text_0 = response.xmlHttpRequest.responseText;
    $onTransportSuccess_0(this$static.val$receiver, text_0);
  }
   else {
    message = 'Server Error ' + $getStatusCode(response) + ' ' + response.xmlHttpRequest.responseText;
    $onTransportFailure_0(this$static.val$receiver, new ServerFailure_0(message));
  }
}

function DefaultRequestTransport$1_0(val$receiver){
  this.val$receiver = val$receiver;
}

defineSeed(621, 1, {}, DefaultRequestTransport$1_0);
function $allocateId(this$static, clazz){
  var toReturn;
  toReturn = $createId(this$static, clazz, this$static.ephemeralIds.size_1() + 1);
  this$static.ephemeralIds.put($getHistoryToken(this$static, toReturn), toReturn);
  return toReturn;
}

function $createId(this$static, clazz, clientId){
  var temp, toReturn;
  if (this$static.isValueType(clazz)) {
    toReturn = new SimpleProxyId_0(clazz, clientId);
  }
   else {
    temp = new SimpleEntityProxyId_0(clazz, clientId);
    toReturn = temp;
  }
  return toReturn;
}

function $createId_0(this$static, clazz, serverId){
  var temp, toReturn;
  if (this$static.isValueType(clazz)) {
    toReturn = new SimpleProxyId_1(clazz, serverId);
  }
   else {
    temp = new SimpleEntityProxyId_1(clazz, serverId);
    toReturn = temp;
  }
  return toReturn;
}

function $getHistoryToken(this$static, proxy){
  var token;
  token = this$static.getTypeToken(proxy.proxyClass);
  return proxy.encodedAddress == null?proxy.clientId + '@1@' + token:proxy.syntheticId > 0?proxy.syntheticId + '@2@' + token:proxy.encodedAddress + '@0@' + token;
}

function $getId(this$static, typeToken, serverId, clientId){
  var clazz, clazz0, ephemeralKey, serverKey, serverKey0, toReturn, toReturn0;
  if (clientId > 0) {
    ephemeralKey = clientId + '@1@' + typeToken;
    toReturn0 = dynamicCast(this$static.ephemeralIds.get_2(ephemeralKey), Q$SimpleProxyId);
    if (!toReturn0) {
      clazz0 = this$static.getTypeFromToken(typeToken);
      toReturn0 = $createId(this$static, clazz0, clientId);
      this$static.ephemeralIds.put(ephemeralKey, toReturn0);
    }
    if (toReturn0.encodedAddress == null) {
      if (serverId != null) {
        $setServerId(toReturn0, serverId);
        serverKey0 = serverId + '@0@' + typeToken;
        this$static.ephemeralIds.put(serverKey0, toReturn0);
      }
    }
    return toReturn0;
  }
  serverKey = serverId + '@0@' + typeToken;
  toReturn = dynamicCast(this$static.ephemeralIds.get_2(serverKey), Q$SimpleProxyId);
  if (toReturn) {
    return toReturn;
  }
  clazz = this$static.getTypeFromToken(typeToken);
  return $createId_0(this$static, clazz, serverId);
}

defineSeed(624, 1, {});
function $hasVersionChanged(this$static, id_0, observedVersion){
  var existingVersion, key_0, toReturn;
  key_0 = $getHistoryToken(this$static, id_0);
  existingVersion = dynamicCast($get_7(this$static.version, key_0), Q$String);
  toReturn = existingVersion == null || !$equals_3(existingVersion, observedVersion);
  toReturn && $put_3(this$static.version, key_0, observedVersion);
  return toReturn;
}

function $initialize_0(this$static, eventBus, transport){
  this$static.eventBus = eventBus;
  this$static.transport = transport;
}

defineSeed(623, 624, {});
function AbstractClientRequestFactory_0(){
  this.ephemeralIds = new HashMap_0;
  this.version = new AbstractRequestFactory$1_0;
}

defineSeed(622, 623, {});
function $clinit_EntityProxyChange(){
  $clinit_EntityProxyChange = nullMethod;
  TYPE_20 = new Event$Type_0;
}

function EntityProxyChange_0(){
  $clinit_EntityProxyChange();
}

defineSeed(625, 233, {}, EntityProxyChange_0);
_.dispatch = function dispatch_21(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_22(){
  return TYPE_20;
}
;
var TYPE_20;
defineSeed(627, 1, makeCastMap([Q$Receiver]));
_.onConstraintViolation = function onConstraintViolation(violations){
  var converted, v$iterator;
  converted = new HashSet_0;
  for (v$iterator = violations.iterator(); v$iterator.hasNext();) {
    dynamicCast(v$iterator.next_0(), Q$ConstraintViolation);
    $add_17(converted, new Receiver$1_0);
  }
  this.onViolation(($clinit_Collections() , new Collections$UnmodifiableSet_0(converted)));
}
;
_.onFailure_0 = function onFailure(error){
  if (error.fatal) {
    throw new RuntimeException_1(error.message_0);
  }
}
;
_.onViolation = function onViolation(errors){
  errors.isEmpty_0() || this.onFailure_0(new ServerFailure_0('The call failed on the server due to a ConstraintViolation'));
}
;
function $add_14(this$static, receiver){
  if (!receiver) {
    throw new IllegalArgumentException_0;
  }
  !this$static.toCall && (this$static.toCall = new ArrayList_0);
  $add_16(this$static.toCall, receiver);
}

function $finish_1(this$static){
  var causes;
  if (this$static.toThrow) {
    causes = this$static.toThrow;
    this$static.toThrow = null;
    throw new UmbrellaException_1(causes);
  }
}

function FanoutReceiver_0(){
}

defineSeed(626, 627, makeCastMap([Q$Receiver]), FanoutReceiver_0);
_.onConstraintViolation = function onConstraintViolation_0(violations){
  var r, r$iterator, t;
  try {
    if (this.toCall) {
      for (r$iterator = new AbstractList$IteratorImpl_0(this.toCall); r$iterator.i < r$iterator.this$0_0.size_1();) {
        r = dynamicCast($next_4(r$iterator), Q$Receiver);
        try {
          r.onConstraintViolation(violations);
        }
         catch ($e0) {
          $e0 = wrap($e0);
          if (instanceOf($e0, Q$Throwable)) {
            t = $e0;
            !this.toThrow && (this.toThrow = new LinkedHashSet_0);
            $add_17(this.toThrow, t);
          }
           else 
            throw unwrap($e0);
        }
      }
    }
  }
   finally {
    $finish_1(this);
  }
}
;
_.onFailure_0 = function onFailure_0(error){
  var r, r$iterator, t;
  try {
    if (this.toCall) {
      for (r$iterator = new AbstractList$IteratorImpl_0(this.toCall); r$iterator.i < r$iterator.this$0_0.size_1();) {
        r = dynamicCast($next_4(r$iterator), Q$Receiver);
        try {
          r.onFailure_0(error);
        }
         catch ($e0) {
          $e0 = wrap($e0);
          if (instanceOf($e0, Q$Throwable)) {
            t = $e0;
            !this.toThrow && (this.toThrow = new LinkedHashSet_0);
            $add_17(this.toThrow, t);
          }
           else 
            throw unwrap($e0);
        }
      }
    }
  }
   finally {
    $finish_1(this);
  }
}
;
_.onSuccess_0 = function onSuccess(response){
  var r, r$iterator, t;
  try {
    if (this.toCall) {
      for (r$iterator = new AbstractList$IteratorImpl_0(this.toCall); r$iterator.i < r$iterator.this$0_0.size_1();) {
        r = dynamicCast($next_4(r$iterator), Q$Receiver);
        try {
          r.onSuccess_0(response);
        }
         catch ($e0) {
          $e0 = wrap($e0);
          if (instanceOf($e0, Q$Throwable)) {
            t = $e0;
            !this.toThrow && (this.toThrow = new LinkedHashSet_0);
            $add_17(this.toThrow, t);
          }
           else 
            throw unwrap($e0);
        }
      }
    }
  }
   finally {
    $finish_1(this);
  }
}
;
_.onViolation = function onViolation_0(errors){
  var r, r$iterator, t;
  try {
    if (this.toCall) {
      for (r$iterator = new AbstractList$IteratorImpl_0(this.toCall); r$iterator.i < r$iterator.this$0_0.size_1();) {
        r = dynamicCast($next_4(r$iterator), Q$Receiver);
        try {
          r.onViolation(errors);
        }
         catch ($e0) {
          $e0 = wrap($e0);
          if (instanceOf($e0, Q$Throwable)) {
            t = $e0;
            !this.toThrow && (this.toThrow = new LinkedHashSet_0);
            $add_17(this.toThrow, t);
          }
           else 
            throw unwrap($e0);
        }
      }
    }
  }
   finally {
    $finish_1(this);
  }
}
;
function Receiver$1_0(){
}

defineSeed(628, 1, {}, Receiver$1_0);
function ServerFailure_0(message){
  ServerFailure_1.call(this, message, true);
}

function ServerFailure_1(message, fatal){
  this.message_0 = message;
  this.fatal = fatal;
}

defineSeed(629, 1, {}, ServerFailure_0, ServerFailure_1);
_.fatal = false;
function $clinit_WriteOperation(){
  $clinit_WriteOperation = nullMethod;
  PERSIST = new WriteOperation_0('PERSIST', 0);
  UPDATE = new WriteOperation_0('UPDATE', 1);
  DELETE = new WriteOperation_0('DELETE', 2);
  $VALUES_16 = initValues(_3Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$WriteOperation, [PERSIST, UPDATE, DELETE]);
}

function WriteOperation_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_17(){
  $clinit_WriteOperation();
  return $VALUES_16;
}

defineSeed(630, 31, makeCastMap([Q$WriteOperation, Q$Serializable, Q$Comparable, Q$Enum]), WriteOperation_0);
var $VALUES_16, DELETE, PERSIST, UPDATE;
function $fire(this$static, receiver){
  this$static.receiver = receiver;
  $fire_0(this$static.requestContext);
}

function $onFail(this$static, failure){
  !!this$static.receiver && this$static.receiver.onFailure_0(failure);
}

function $onSuccess(this$static, split_0){
  var result;
  if (this$static.receiver) {
    result = decode_23(this$static.requestContext, this$static.requestData.returnType, this$static.requestData.elementType, split_0);
    this$static.receiver.onSuccess_0(result);
  }
}

function AbstractRequest_0(requestContext){
  this.propertyRefs = new HashSet_0;
  this.requestContext = requestContext;
}

defineSeed(631, 1, makeCastMap([Q$AbstractRequest]));
function $clinit_AbstractRequestContext(){
  $clinit_AbstractRequestContext = nullMethod;
  DELETE_ONLY = initValues(_3Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$WriteOperation, [($clinit_WriteOperation() , DELETE)]);
  PERSIST_AND_UPDATE = initValues(_3Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$WriteOperation, [PERSIST, UPDATE]);
  UPDATE_ONLY = initValues(_3Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$WriteOperation, [UPDATE]);
}

function $allocateSyntheticId(this$static, typeToken, syntheticId){
  var toReturn;
  toReturn = dynamicCast(this$static.state.syntheticIds.get_2(valueOf_1(syntheticId)), Q$SimpleProxyId);
  if (!toReturn) {
    toReturn = $allocateId(this$static.state.requestFactory, this$static.state.requestFactory.getTypeFromToken(typeToken));
    this$static.state.syntheticIds.put(valueOf_1(syntheticId), toReturn);
  }
  return toReturn;
}

function $checkLocked(this$static){
  if (this$static.state.locked) {
    throw new IllegalStateException_1('A request is already in progress');
  }
}

function $checkStreamsNotCrossed(this$static, object){
  var bean, otherState;
  bean = !object?null:dynamicCast(get_0(object, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean);
  if (!bean) {
    throw new IllegalArgumentException_1(object.___clazz$.typeName);
  }
  otherState = dynamicCast(bean.getTag('requestContext'), Q$AbstractRequestContext$State);
  if (!bean.isFrozen() && otherState != this$static.state) {
    throw new IllegalArgumentException_1('Attempting to edit an EntityProxy previously edited by another RequestContext');
  }
  return bean;
}

function $create_1(this$static, clazz){
  var created, id_0;
  $checkLocked(this$static);
  id_0 = $allocateId(this$static.state.requestFactory, clazz);
  created = $createProxy(this$static, clazz, id_0, false);
  return $takeOwnership(this$static, created);
}

function $createProxy(this$static, clazz, id_0, useAppendedContexts){
  var created, ctx, ctx$iterator;
  created = null;
  if (useAppendedContexts) {
    for (ctx$iterator = this$static.state.appendedContexts.iterator(); ctx$iterator.hasNext();) {
      ctx = dynamicCast(ctx$iterator.next_0(), Q$AbstractRequestContext);
      created = $create(ctx.getAutoBeanFactory(), clazz);
      if (created) {
        break;
      }
    }
  }
   else {
    created = $create(this$static.getAutoBeanFactory(), clazz);
  }
  if (created) {
    created.setTag('stableId', id_0);
    return created;
  }
  throw new IllegalArgumentException_1('Unknown proxy type ' + clazz.typeName);
}

function $doFire_0(this$static, receiver){
  var finalReceiver, payload;
  if (this$static.state.fireDisabled) {
    if (receiver) {
      !this$static.state.fanout && (this$static.state.fanout = new FanoutReceiver_0);
      $add_14(this$static.state.fanout, receiver);
    }
    return;
  }
   else if (this$static.state.fanout) {
    !!receiver && $add_14(this$static.state.fanout, receiver);
    finalReceiver = this$static.state.fanout;
  }
   else {
    finalReceiver = receiver;
  }
  $checkLocked(this$static);
  this$static.state.locked = true;
  $freezeEntities(this$static, true);
  payload = $makePayload(this$static.state.dialect);
  $send_1(this$static.state.requestFactory.transport, payload, new AbstractRequestContext$5_0(this$static, finalReceiver));
}

function $editProxy(this$static, object){
  var bean, parent_0, previouslySeen, clone;
  bean = $checkStreamsNotCrossed(this$static, object);
  $checkLocked(this$static);
  previouslySeen = dynamicCast($get_7(this$static.state.editedProxies, dynamicCast(bean.getTag('stableId'), Q$SimpleProxyId)), Q$AutoBean);
  if (!!previouslySeen && !previouslySeen.isFrozen()) {
    return dynamicCast(previouslySeen.as(), Q$BaseProxy);
  }
  parent_0 = bean;
  bean = (clone = bean.getFactory().create(bean.getType_0()) , clone.setTag('stableId', bean.getTag('stableId')) , clone.setTag('version', bean.getTag('version')) , $takeOwnership(this$static, clone) , clone.accept(new AbstractRequestContext$4_0(this$static, bean)) , clone);
  bean.setTag('parentObject', parent_0);
  return dynamicCast(bean.as(), Q$BaseProxy);
}

function $fail(this$static, receiver, failure){
  var causes, request, request$iterator, t;
  $freezeEntities(this$static, false);
  this$static.state.locked = false;
  causes = null;
  for (request$iterator = new AbstractList$IteratorImpl_0(new ArrayList_2(this$static.state.invocations)); request$iterator.i < request$iterator.this$0_0.size_1();) {
    request = dynamicCast($next_4(request$iterator), Q$AbstractRequest);
    try {
      !!request.receiver && request.receiver.onFailure_0(failure);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, Q$Throwable)) {
        t = $e0;
        !causes && (causes = new HashSet_0);
        $add_17(causes, t);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (receiver) {
    try {
      receiver.onFailure_0(failure);
    }
     catch ($e1) {
      $e1 = wrap($e1);
      if (instanceOf($e1, Q$Throwable)) {
        t = $e1;
        !causes && (causes = new HashSet_0);
        $add_17(causes, t);
      }
       else 
        throw unwrap($e1);
    }
  }
  if (causes) {
    throw new UmbrellaException_1(causes);
  }
}

function $fire_0(this$static){
  var needsReceiver, request, request$iterator;
  needsReceiver = true;
  for (request$iterator = new AbstractList$IteratorImpl_0(this$static.state.invocations); request$iterator.i < request$iterator.this$0_0.size_1();) {
    request = dynamicCast($next_4(request$iterator), Q$AbstractRequest);
    if (request.receiver) {
      needsReceiver = false;
      break;
    }
  }
  needsReceiver?$doFire_0(this$static, new AbstractRequestContext$2_0):$doFire_0(this$static, null);
}

function $freezeEntities(this$static, frozen){
  var bean, bean$iterator;
  for (bean$iterator = $iterator_0($values(this$static.state.editedProxies)); bean$iterator.val$outerIter.hasNext();) {
    bean = dynamicCast($next_6(bean$iterator), Q$AutoBean);
    bean.setFrozen(frozen);
  }
}

function $getId_0(this$static, op){
  if (($clinit_IdMessage$Strength() , SYNTHETIC) == op.getStrength()) {
    return $allocateSyntheticId(this$static, op.getTypeToken_0(), op.getSyntheticId());
  }
  return $getId(this$static.state.requestFactory, op.getTypeToken_0(), op.getServerId(), op.getClientId());
}

function $getProxyForReturnPayloadGraph(this$static, id_0){
  var bean, proxyClass;
  bean = dynamicCast(this$static.state.returnedProxies.get_2(id_0), Q$AutoBean);
  if (!bean) {
    proxyClass = id_0.proxyClass;
    bean = $createProxy(this$static, proxyClass, id_0, true);
    this$static.state.returnedProxies.put(id_0, bean);
  }
  return bean;
}

function $isEntityType(this$static, clazz){
  return this$static.state.requestFactory.isEntityType(clazz);
}

function $isValueType(this$static, clazz){
  return this$static.state.requestFactory.isValueType(clazz);
}

function $makeOperationMessage(this$static, stableId, proxyBean){
  var diff, entry, entry$iterator, operation, parent_0, propertyMap, toReturn, version;
  toReturn = new OperationMessageAutoBean_0(($clinit_MessageFactoryHolder() , FACTORY));
  operation = toReturn.shim;
  $setTypeToken_0(operation, this$static.state.requestFactory.getTypeToken(stableId.proxyClass));
  if (stableId.encodedAddress == null) {
    parent_0 = $createProxy(this$static, stableId.proxyClass, stableId, true);
    $setOperation_0(operation, ($clinit_WriteOperation() , PERSIST));
    $setClientId_0(operation, stableId.clientId);
    $setStrength_0(operation, ($clinit_IdMessage$Strength() , EPHEMERAL));
  }
   else if (stableId.syntheticId > 0) {
    parent_0 = $createProxy(this$static, stableId.proxyClass, stableId, true);
    $setOperation_0(operation, ($clinit_WriteOperation() , PERSIST));
    $setSyntheticId_0(operation, stableId.syntheticId);
    $setStrength_0(operation, ($clinit_IdMessage$Strength() , SYNTHETIC));
  }
   else {
    parent_0 = dynamicCast(proxyBean.getTag('parentObject'), Q$AutoBean);
    $setServerId_1(operation, stableId.encodedAddress);
    $setOperation_0(operation, ($clinit_WriteOperation() , UPDATE));
  }
  version = dynamicCast(proxyBean.getTag('version'), Q$String);
  version != null && dynamicCast($getWrapped(operation.this$0), Q$OperationMessage).setVersion(version);
  diff = ($clinit_Collections() , $clinit_Collections() , EMPTY_MAP);
  $isEntityType(this$static, stableId.proxyClass)?(diff = diff_1(parent_0, proxyBean)):$isValueType(this$static, stableId.proxyClass) && (diff = getAllProperties(proxyBean));
  if (diff.size_1() != 0) {
    propertyMap = new HashMap_0;
    for (entry$iterator = diff.entrySet_0().iterator(); entry$iterator.hasNext();) {
      entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
      propertyMap.put(dynamicCast(entry.getKey(), Q$String), encode_23(this$static, entry.getValue_0()));
    }
    dynamicCast($getWrapped(operation.this$0), Q$OperationMessage).setPropertyMap(propertyMap);
  }
  return toReturn;
}

function $makePayloadInvocations(this$static){
  var data_0, f, invocation, invocation$iterator, invocationMessages, message, param, param$array, param$index, param$max, parameters, refsToSend;
  f = ($clinit_MessageFactoryHolder() , FACTORY);
  invocationMessages = new ArrayList_0;
  for (invocation$iterator = new AbstractList$IteratorImpl_0(this$static.state.invocations); invocation$iterator.i < invocation$iterator.this$0_0.size_1();) {
    invocation = dynamicCast($next_4(invocation$iterator), Q$AbstractRequest);
    data_0 = (!invocation.requestData && (invocation.requestData = invocation.makeRequestData()) , invocation.requestData);
    message = (new InvocationMessageAutoBean_0(f)).shim;
    $setOperation(message, data_0.operation);
    refsToSend = data_0.propertyRefs;
    refsToSend.map_0.size_1() == 0 || dynamicCast($getWrapped(message.this$0), Q$InvocationMessage).setPropertyRefs(refsToSend);
    parameters = new ArrayList_1(data_0.parameters.length);
    for (param$array = data_0.parameters , param$index = 0 , param$max = param$array.length; param$index < param$max; ++param$index) {
      param = param$array[param$index];
      $add_16(parameters, encode_23(this$static, param));
    }
    parameters.size_0 == 0 || dynamicCast($getWrapped(message.this$0), Q$InvocationMessage).setParameters(parameters);
    setCheck(invocationMessages.array, invocationMessages.size_0++, message);
  }
  return invocationMessages;
}

function $makePayloadOperations(this$static){
  var currentView, currentView$iterator, operation, operations;
  this$static.state.diffing = true;
  try {
    operations = new ArrayList_0;
    for (currentView$iterator = $iterator_0($values(this$static.state.editedProxies)); currentView$iterator.val$outerIter.hasNext();) {
      currentView = dynamicCast($next_6(currentView$iterator), Q$AutoBean);
      operation = $makeOperationMessage(this$static, dynamicCast(currentView.getTag('stableId'), Q$SimpleProxyId), currentView).shim;
      setCheck(operations.array, operations.size_0++, operation);
    }
    return operations;
  }
   finally {
    this$static.state.diffing = false;
  }
}

function $processReturnOperation(this$static, id_0, op, operations){
  var properties, proxy, toMutate, writeOperation, writeOperation$index, writeOperation$max;
  toMutate = $getProxyForReturnPayloadGraph(this$static, id_0);
  toMutate.setTag('version', op.getVersion());
  properties = op.getPropertyMap();
  !!properties && toMutate.accept(new AbstractRequestContext$3_0(this$static, properties));
  toMutate.setTag('parentObject', toMutate);
  toMutate.setTag('requestContext', null);
  toMutate.setFrozen(true);
  proxy = dynamicCast(toMutate.as(), Q$BaseProxy);
  if (operations != null && this$static.state.requestFactory.isEntityType(id_0.proxyClass)) {
    for (writeOperation$index = 0 , writeOperation$max = operations.length; writeOperation$index < writeOperation$max; ++writeOperation$index) {
      writeOperation = operations[writeOperation$index];
      if (writeOperation == ($clinit_WriteOperation() , UPDATE) && !$hasVersionChanged(this$static.state.requestFactory, id_0, op.getVersion())) {
        continue;
      }
      $fireEventFromSource(this$static.state.requestFactory.eventBus, new EntityProxyChange_0(dynamicCast(proxy, Q$EntityProxy)), id_0.proxyClass);
    }
  }
  return proxy;
}

function $processReturnOperations(this$static, response){
  var effect, id_0, op, op$iterator, ops, toPropagate;
  ops = response.getOperations();
  if (!ops) {
    return;
  }
  for (op$iterator = ops.iterator(); op$iterator.hasNext();) {
    op = dynamicCast(op$iterator.next_0(), Q$OperationMessage);
    id_0 = $getId_0(this$static, op);
    toPropagate = null;
    effect = op.getOperation_0();
    if (effect) {
      switch (effect.ordinal) {
        case 2:
          toPropagate = DELETE_ONLY;
          break;
        case 0:
          toPropagate = PERSIST_AND_UPDATE;
          break;
        case 1:
          toPropagate = UPDATE_ONLY;
          break;
        default:throw new RuntimeException_1(effect.name_0);
      }
    }
    $processReturnOperation(this$static, id_0, op, toPropagate);
  }
}

function $retainArg(this$static, arg){
  var o, o$iterator;
  if (instanceOf(arg, Q$Iterable)) {
    for (o$iterator = dynamicCast(arg, Q$Iterable).iterator(); o$iterator.hasNext();) {
      o = o$iterator.next_0();
      $retainArg(this$static, o);
    }
  }
   else 
    instanceOf(arg, Q$BaseProxy) && $editProxy(this$static, dynamicCast(arg, Q$BaseProxy));
}

function $setState_1(this$static, state){
  this$static.state = state;
  $addContext(state, this$static);
}

function $takeOwnership(this$static, bean){
  $put_3(this$static.state.editedProxies, dynamicCast(bean.getTag('stableId'), Q$SimpleProxyId), bean);
  bean.setTag('requestContext', this$static.state);
  return dynamicCast(bean.as(), Q$BaseProxy);
}

function $violation(this$static, receiver, errors){
  var causes, request, request$iterator, t;
  $freezeEntities(this$static, false);
  this$static.state.locked = false;
  causes = null;
  for (request$iterator = new AbstractList$IteratorImpl_0(new ArrayList_2(this$static.state.invocations)); request$iterator.i < request$iterator.this$0_0.size_1();) {
    request = dynamicCast($next_4(request$iterator), Q$AbstractRequest);
    try {
      !!request.receiver && request.receiver.onConstraintViolation(errors);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, Q$Throwable)) {
        t = $e0;
        !causes && (causes = new HashSet_0);
        $add_17(causes, t);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (receiver) {
    try {
      receiver.onConstraintViolation(errors);
    }
     catch ($e1) {
      $e1 = wrap($e1);
      if (instanceOf($e1, Q$Throwable)) {
        t = $e1;
        !causes && (causes = new HashSet_0);
        $add_17(causes, t);
      }
       else 
        throw unwrap($e1);
    }
  }
  if (causes) {
    throw new UmbrellaException_1(causes);
  }
}

function AbstractRequestContext_0(factory){
  $setState_1(this, new AbstractRequestContext$State_0(factory, new AbstractRequestContext$StandardPayloadDialect_0(this), this));
}

defineSeed(632, 1, makeCastMap([Q$AbstractRequestContext]));
_.getBeanForPayload = function getBeanForPayload(serializedProxyId){
  var id_0, ref;
  ref = dynamicCast(decode(($clinit_MessageFactoryHolder() , FACTORY), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit, serializedProxyId).as(), Q$IdMessage);
  id_0 = $getId_0(this, ref);
  return $getProxyForReturnPayloadGraph(this, id_0);
}
;
_.getSerializedProxyId = function getSerializedProxyId(stableId){
  var bean, ref;
  bean = new IdMessageAutoBean_0(($clinit_MessageFactoryHolder() , FACTORY));
  ref = bean.shim;
  $setServerId_0(ref, stableId.encodedAddress);
  $setTypeToken(ref, this.state.requestFactory.getTypeToken(stableId.proxyClass));
  if (stableId.syntheticId > 0) {
    $setStrength(ref, ($clinit_IdMessage$Strength() , SYNTHETIC));
    $setSyntheticId(ref, stableId.syntheticId);
  }
   else if (stableId.encodedAddress == null) {
    $setStrength(ref, ($clinit_IdMessage$Strength() , EPHEMERAL));
    $setClientId(ref, stableId.clientId);
  }
  return encode(bean);
}
;
_.isEntityType = function isEntityType(clazz){
  return $isEntityType(this, clazz);
}
;
_.isValueType = function isValueType(clazz){
  return $isValueType(this, clazz);
}
;
var DELETE_ONLY, PERSIST_AND_UPDATE, UPDATE_ONLY;
function AbstractRequestContext$2_0(){
}

defineSeed(633, 627, makeCastMap([Q$Receiver]), AbstractRequestContext$2_0);
_.onSuccess_0 = function onSuccess_0(response){
  throwClassCastExceptionUnlessNull(response);
}
;
function AbstractRequestContext$3_0(this$0, val$properties){
  this.this$0 = this$0;
  this.val$properties = val$properties;
}

defineSeed(634, 565, {}, AbstractRequestContext$3_0);
_.visitReferenceProperty = function visitReferenceProperty_4(propertyName, value_0, ctx){
  var decoded, elementType, keyType, raw, valueType;
  if (ctx.setter) {
    if (this.val$properties.containsKey(propertyName)) {
      raw = dynamicCastJso(this.val$properties.get_2(propertyName));
      if ((!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType) == Ljava_util_Map_2_classLit) {
        keyType = $getKeyType(ctx);
        valueType = $getValueType(ctx);
        decoded = decode_24(this.this$0, !ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType, keyType, valueType, raw);
      }
       else {
        elementType = ctx?$getElementType(ctx):null;
        decoded = decode_23(this.this$0, !ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType, elementType, raw);
      }
      $call(ctx.setter, ctx.instance, decoded);
    }
  }
  return false;
}
;
_.visitValueProperty = function visitValueProperty_4(propertyName, value_0, ctx){
  var decoded, raw;
  if (ctx.setter) {
    if (this.val$properties.containsKey(propertyName)) {
      raw = dynamicCastJso(this.val$properties.get_2(propertyName));
      decoded = decode_1(!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType, raw);
      decoded != null && Ljava_util_Date_2_classLit == (!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType) && (decoded = new DatePoser_0(dynamicCast(decoded, Q$Date)));
      $call(ctx.setter, ctx.instance, decoded);
    }
  }
  return false;
}
;
function AbstractRequestContext$4_0(this$0, val$toClone){
  this.this$0 = this$0;
  this.val$toClone = val$toClone;
  this.values = getAllProperties(this.val$toClone);
}

defineSeed(635, 565, {}, AbstractRequestContext$4_0);
_.visitCollectionProperty = function visitCollectionProperty_0(propertyName, value_0, ctx){
  var collection, o, o$iterator;
  value_0 = getAutoBean(dynamicCast($get_7(this.values, propertyName), Q$Collection));
  if (value_0) {
    if (Ljava_util_List_2_classLit == (!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType)) {
      collection = new ArrayList_0;
    }
     else if (Ljava_util_Set_2_classLit == (!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType)) {
      collection = new HashSet_0;
    }
     else {
      throw new IllegalArgumentException_1((!ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType).typeName);
    }
    if ($isValueType(this.this$0, $getElementType(ctx)) || $isEntityType(this.this$0, $getElementType(ctx))) {
      for (o$iterator = dynamicCast(value_0.as(), Q$Collection).iterator(); o$iterator.hasNext();) {
        o = o$iterator.next_0();
        o == null?collection.add_1(null):collection.add_1($editProxy(this.this$0, dynamicCast(o, Q$BaseProxy)));
      }
    }
     else {
      collection.addAll(dynamicCast(value_0.as(), Q$Collection));
    }
    $call(ctx.setter, ctx.instance, collection);
  }
  return false;
}
;
_.visitReferenceProperty = function visitReferenceProperty_5(propertyName, value_0, ctx){
  value_0 = getAutoBean($get_7(this.values, propertyName));
  !!value_0 && ($isValueType(this.this$0, !ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType) || $isEntityType(this.this$0, !ctx.simpleType?ctx.paramTypes[0]:ctx.simpleType)?$set_2(ctx, $editProxy(this.this$0, dynamicCast(value_0.as(), Q$BaseProxy))):$set_2(ctx, value_0.as()));
  return false;
}
;
_.visitValueProperty = function visitValueProperty_5(propertyName, value_0, ctx){
  $set_2(ctx, $get_7(this.values, propertyName));
  return false;
}
;
function $onTransportFailure(this$static, failure){
  $fail(this$static.this$0, this$static.val$finalReceiver, failure);
}

function $onTransportSuccess(this$static, payload){
  $processPayload(this$static.this$0.state.dialect, this$static.val$finalReceiver, payload);
}

function AbstractRequestContext$5_0(this$0, val$finalReceiver){
  this.this$0 = this$0;
  this.val$finalReceiver = val$finalReceiver;
}

defineSeed(636, 1, {}, AbstractRequestContext$5_0);
function $clinit_AbstractRequestContext$Dialect(){
  $clinit_AbstractRequestContext$Dialect = nullMethod;
  STANDARD = new AbstractRequestContext$Dialect$1_0;
  JSON_RPC = new AbstractRequestContext$Dialect$2_0;
  $VALUES_17 = initValues(_3Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$AbstractRequestContext$Dialect, [STANDARD, JSON_RPC]);
}

function AbstractRequestContext$Dialect_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_18(){
  $clinit_AbstractRequestContext$Dialect();
  return $VALUES_17;
}

defineSeed(637, 31, makeCastMap([Q$AbstractRequestContext$Dialect, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_17, JSON_RPC, STANDARD;
function AbstractRequestContext$Dialect$1_0(){
  AbstractRequestContext$Dialect_0.call(this, 'STANDARD', 0);
}

defineSeed(638, 637, makeCastMap([Q$AbstractRequestContext$Dialect, Q$Serializable, Q$Comparable, Q$Enum]), AbstractRequestContext$Dialect$1_0);
function AbstractRequestContext$Dialect$2_0(){
  AbstractRequestContext$Dialect_0.call(this, 'JSON_RPC', 1);
}

defineSeed(639, 637, makeCastMap([Q$AbstractRequestContext$Dialect, Q$Serializable, Q$Comparable, Q$Enum]), AbstractRequestContext$Dialect$2_0);
function $findEditedProxy(this$static, idMessage){
  var rootId, stub;
  rootId = $getId_0(this$static.this$0, idMessage);
  stub = $getProxyForReturnPayloadGraph(this$static.this$0, rootId);
  return dynamicCast($get_7(this$static.this$0.state.editedProxies, dynamicCast(stub.getTag('stableId'), Q$SimpleProxyId)), Q$AutoBean);
}

function AbstractRequestContext$MyConstraintViolation_0(this$0, msg){
  var leafProxy, rootProxy;
  this.this$0 = this$0;
  leafProxy = $findEditedProxy(this, msg.getLeafBeanId());
  !leafProxy?null:dynamicCast(leafProxy.as(), Q$BaseProxy);
  msg.getMessage();
  msg.getMessageTemplate();
  msg.getPath();
  rootProxy = $findEditedProxy(this, msg.getRootBeanId());
  rootProxy.getType_0();
  dynamicCast(rootProxy.as(), Q$BaseProxy);
}

defineSeed(640, 1, makeCastMap([Q$ConstraintViolation]), AbstractRequestContext$MyConstraintViolation_0);
function $addInvocation(this$static, request){
  var arg, arg$array, arg$index, arg$max;
  $add_16(this$static.this$0.state.invocations, request);
  for (arg$array = (!request.requestData && (request.requestData = request.makeRequestData()) , request.requestData).parameters , arg$index = 0 , arg$max = arg$array.length; arg$index < arg$max; ++arg$index) {
    arg = arg$array[arg$index];
    $retainArg(this$static.this$0, arg);
  }
}

function $makePayload(this$static){
  var bean, f, invocationMessages, operations, requestMessage;
  f = ($clinit_MessageFactoryHolder() , FACTORY);
  operations = $makePayloadOperations(this$static.this$0);
  invocationMessages = $makePayloadInvocations(this$static.this$0);
  bean = new RequestMessageAutoBean_0(f);
  requestMessage = bean.shim;
  $setRequestFactory(requestMessage, this$static.this$0.state.requestFactory.getFactoryTypeToken());
  invocationMessages.size_0 == 0 || dynamicCast($getWrapped(requestMessage.this$0), Q$RequestMessage).setInvocations(invocationMessages);
  operations.size_0 == 0 || dynamicCast($getWrapped(requestMessage.this$0), Q$RequestMessage).setOperations(operations);
  return $getPayload(encode(bean));
}

function $processPayload(this$static, receiver, payload){
  var causes, errors, fail, failure, i, j, message, message$iterator, response, t;
  response = dynamicCast(decode_0(($clinit_MessageFactoryHolder() , FACTORY), Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessage_2_classLit, payload).as(), Q$ResponseMessage);
  if (response.getGeneralFailure()) {
    failure = response.getGeneralFailure();
    fail = new ServerFailure_1(failure.getMessage(), (failure.getExceptionType() , failure.getStackTrace() , failure.isFatal()));
    $fail(this$static.this$0, receiver, fail);
    return;
  }
  if (response.getViolations()) {
    errors = new HashSet_0;
    for (message$iterator = response.getViolations().iterator(); message$iterator.hasNext();) {
      message = dynamicCast(message$iterator.next_0(), Q$ViolationMessage);
      $add_17(errors, new AbstractRequestContext$MyConstraintViolation_0(this$static.this$0, message));
    }
    $violation(this$static.this$0, receiver, errors);
    return;
  }
  $processReturnOperations(this$static.this$0, response);
  causes = null;
  for (i = 0 , j = this$static.this$0.state.invocations.size_0; i < j; i++) {
    try {
      if (dynamicCast(response.getStatusCodes().get_1(i), Q$Boolean).value_0) {
        $onSuccess(dynamicCast($get_8(this$static.this$0.state.invocations, i), Q$AbstractRequest), dynamicCastJso(response.getInvocationResults().get_1(i)));
      }
       else {
        failure = dynamicCast(decode(FACTORY, Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage_2_classLit, dynamicCastJso(response.getInvocationResults().get_1(i))).as(), Q$ServerFailureMessage);
        $onFail(dynamicCast($get_8(this$static.this$0.state.invocations, i), Q$AbstractRequest), new ServerFailure_1(failure.getMessage(), (failure.getExceptionType() , failure.getStackTrace() , failure.isFatal())));
      }
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, Q$Throwable)) {
        t = $e0;
        !causes && (causes = new HashSet_0);
        $add_17(causes, t);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (receiver) {
    try {
      receiver.onSuccess_0(null);
    }
     catch ($e1) {
      $e1 = wrap($e1);
      if (instanceOf($e1, Q$Throwable)) {
        t = $e1;
        !causes && (causes = new HashSet_0);
        $add_17(causes, t);
      }
       else 
        throw unwrap($e1);
    }
  }
  $clear_4(this$static.this$0.state.editedProxies);
  $clear_5(this$static.this$0.state.invocations);
  this$static.this$0.state.returnedProxies.clear_0();
  if (causes) {
    throw new UmbrellaException_1(causes);
  }
}

function AbstractRequestContext$StandardPayloadDialect_0(this$0){
  this.this$0 = this$0;
}

defineSeed(641, 1, {}, AbstractRequestContext$StandardPayloadDialect_0);
function $addContext(this$static, ctx){
  var set_0;
  if (!this$static.appendedContexts) {
    this$static.appendedContexts = ($clinit_Collections() , set_0 = new HashSet_1 , $add_17(set_0, ctx) , new Collections$UnmodifiableSet_0(set_0));
  }
   else {
    this$static.appendedContexts.size_1() == 1 && (this$static.appendedContexts = new LinkedHashSet_1(this$static.appendedContexts));
    this$static.appendedContexts.add_1(ctx);
  }
}

function AbstractRequestContext$State_0(requestFactory, dialect, canonical){
  this.invocations = new ArrayList_0;
  this.editedProxies = new LinkedHashMap_0;
  this.returnedProxies = new HashMap_0;
  this.syntheticIds = new HashMap_0;
  this.requestFactory = requestFactory;
  this.canonical = canonical;
  this.dialect = dialect;
}

defineSeed(642, 1, makeCastMap([Q$AbstractRequestContext$State]), AbstractRequestContext$State_0);
_.diffing = false;
_.fireDisabled = false;
_.locked = false;
defineSeed(647, 1, makeCastMap([Q$Map]));
_.keySet_0 = function keySet_1(){
  return $keySet(this);
}
;
function AbstractHashMap_0(ignored, alsoIgnored){
  $clearImpl(this);
  if (ignored < 0 || alsoIgnored < 0) {
    throw new IllegalArgumentException_1('initial capacity was negative or load factor was non-positive');
  }
}

function HashMap_1(){
  AbstractHashMap_0.call(this, 1, 0);
}

function HashMap_2(){
  AbstractHashMap_0.call(this, 16, 0.75);
}

defineSeed(645, 646, makeCastMap([Q$Serializable, Q$Map]), HashMap_1);
function LinkedHashMap_1(){
  HashMap_2.call(this);
  $$init_0(this);
}

defineSeed(644, 645, makeCastMap([Q$Serializable, Q$Map]), LinkedHashMap_1);
function AbstractRequestFactory$1_0(){
  HashMap_2.call(this);
  $$init_0(this);
  this.accessOrder = true;
}

defineSeed(643, 644, makeCastMap([Q$Serializable, Q$Map]), AbstractRequestFactory$1_0);
_.removeEldestEntry = function removeEldestEntry_0(eldest){
  return this.map_0.size_1() > 10000;
}
;
function __intercept(bean, returnValue_0){
  var context, otherBean, toReturn;
  context = requestContext_0(bean);
  if (!context || context.state.locked || context.state.diffing) {
    return returnValue_0;
  }
  if (instanceOf(returnValue_0, Q$BaseProxy)) {
    toReturn = $editProxy(context, dynamicCast(returnValue_0, Q$BaseProxy));
    return toReturn;
  }
  instanceOf(returnValue_0, Q$Poser) && (dynamicCast(returnValue_0, Q$Poser) , undefined);
  otherBean = returnValue_0 == null?null:dynamicCast(get_0(returnValue_0, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean);
  !!otherBean && otherBean.setTag('requestContext', !bean.tags?null:bean.tags.get_2('requestContext'));
  return returnValue_0;
}

function requestContext_0(bean){
  var state;
  state = dynamicCast(bean.getTag('requestContext'), Q$AbstractRequestContext$State);
  return !state?null:state.canonical;
}

function decode_23(source, type_0, elementType, split_0){
  var collection, element, i, j;
  if (!split_0 || split_0 == ($clinit_Splittable() , NULL)) {
    return null;
  }
  if (elementType) {
    if (Ljava_util_List_2_classLit == type_0) {
      collection = new ArrayList_0;
    }
     else if (Ljava_util_Set_2_classLit == type_0) {
      collection = new HashSet_0;
    }
     else {
      throw new UnsupportedOperationException_0;
    }
    if (canDecode(elementType)) {
      for (i = 0 , j = split_0.length; i < j; i++) {
        if ($isNull(split_0, i)) {
          collection.add_1(null);
        }
         else {
          element = decode_1(elementType, $getRaw(split_0, i));
          collection.add_1(element);
        }
      }
    }
     else {
      for (i = 0 , j = split_0.length; i < j; i++) {
        if ($isNull(split_0, i)) {
          collection.add_1(null);
        }
         else {
          element = decode_23(source, elementType, null, $getRaw(split_0, i));
          collection.add_1(element);
        }
      }
    }
    return collection;
  }
  if (source.isEntityType(type_0) || source.isValueType(type_0) || Lcom_google_web_bindery_requestfactory_shared_EntityProxyId_2_classLit == type_0) {
    return source.getBeanForPayload(split_0).as();
  }
  return decode_1(type_0, split_0);
}

function decode_24(source, type_0, keyType, valueType, split_0){
  var i, key_0, keys_0, map_0, propertyKey, propertyKey$iterator, size_0, value_0, valueSplit, values;
  if (!split_0 || split_0 == ($clinit_Splittable() , NULL)) {
    return null;
  }
  if (Ljava_util_Map_2_classLit != type_0) {
    throw new UnsupportedOperationException_0;
  }
  map_0 = new HashMap_0;
  if (canDecode(keyType) || !$isIndexed(split_0)) {
    keys_0 = $getPropertyKeys(split_0);
    for (propertyKey$iterator = new Collections$UnmodifiableCollectionIterator_0(keys_0.coll.iterator()); propertyKey$iterator.it.hasNext();) {
      propertyKey = dynamicCast(propertyKey$iterator.it.next_0(), Q$String);
      key_0 = keyType == Ljava_lang_String_2_classLit?propertyKey:decode_1(keyType, split_1(propertyKey));
      if (split_0[propertyKey] == null) {
        map_0.put(key_0, null);
      }
       else {
        valueSplit = $getRaw_0(split_0, propertyKey);
        canDecode(valueType)?(value_0 = decode_1(valueType, valueSplit)):(value_0 = decode_23(source, valueType, null, valueSplit));
        map_0.put(key_0, value_0);
      }
    }
  }
   else {
    if (split_0.length != 2) {
      throw new UnsupportedOperationException_0;
    }
    keys_0 = dynamicCast(decode_23(source, Ljava_util_List_2_classLit, keyType, $getRaw(split_0, 0)), Q$List);
    values = dynamicCast(decode_23(source, Ljava_util_List_2_classLit, valueType, $getRaw(split_0, 1)), Q$List);
    if (keys_0.size_1() != values.size_1()) {
      throw new UnsupportedOperationException_0;
    }
    for (i = 0 , size_0 = keys_0.size_1(); i < size_0; i++) {
      map_0.put(keys_0.get_1(i), values.get_1(i));
    }
  }
  return map_0;
}

function encode_23(source, value_0){
  var autoBean, encodedKey, entry, entry$iterator, first, isSimpleMap, keys_0, map_0, mapKey, mapValue, sb, toReturn, val, val$iterator, values;
  if (value_0 == null) {
    return $clinit_Splittable() , NULL;
  }
  instanceOf(value_0, Q$Poser) && (value_0 = new Date_1(fromDouble(dynamicCast(dynamicCast(value_0, Q$Poser), Q$DatePoser).jsdate.getTime())));
  if (instanceOf(value_0, Q$Iterable)) {
    toReturn = new StringBuffer_0;
    $appendNonNull(toReturn.impl, '[');
    first = true;
    for (val$iterator = dynamicCast(value_0, Q$Iterable).iterator(); val$iterator.hasNext();) {
      val = val$iterator.next_0();
      first?(first = false):($appendNonNull(toReturn.impl, ',') , toReturn);
      val == null?($append_2(toReturn.impl, 'null') , toReturn):$append_6(toReturn, $getPayload(encode_23(source, val)));
    }
    $appendNonNull(toReturn.impl, ']');
    return split_1(toReturn.impl.string);
  }
  if (instanceOf(value_0, Q$Map)) {
    map_0 = dynamicCast(value_0, Q$Map);
    sb = new StringBuilder_0;
    if (map_0.containsKey(null)) {
      throw new IllegalArgumentException_1('null Map keys are not supported');
    }
    isSimpleMap = map_0.isEmpty_0() || canDecode(getClass__devirtual$(map_0.keySet_0().iterator().next_0()));
    if (isSimpleMap) {
      first = true;
      $append_2(sb.impl, '{');
      for (entry$iterator = map_0.entrySet_0().iterator(); entry$iterator.hasNext();) {
        entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
        mapKey = entry.getKey();
        if (mapKey == null) {
          continue;
        }
        mapValue = entry.getValue_0();
        first?(first = false):($append_2(sb.impl, ',') , sb);
        encodedKey = getClass__devirtual$(mapKey) == Ljava_lang_String_2_classLit?dynamicCast(mapKey, Q$String):$getPayload(encode_23(source, mapKey));
        $append_11(sb, escapeValue(encodedKey));
        $append_2(sb.impl, ':');
        mapValue == null?($append_2(sb.impl, 'null') , sb):$append_11(sb, $getPayload(encode_23(source, mapValue)));
      }
      $append_2(sb.impl, '}');
    }
     else {
      keys_0 = new ArrayList_1(map_0.size_1());
      values = new ArrayList_1(map_0.size_1());
      for (entry$iterator = map_0.entrySet_0().iterator(); entry$iterator.hasNext();) {
        entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
        $add_16(keys_0, entry.getKey());
        $add_16(values, entry.getValue_0());
      }
      $append_2(sb.impl, '[');
      $append_11(sb, $getPayload(encode_23(source, keys_0)));
      $append_2(sb.impl, ',');
      $append_11(sb, $getPayload(encode_23(source, values)));
      $append_2(sb.impl, ']');
    }
    return split_1(sb.impl.string);
  }
  if (instanceOf(value_0, Q$BaseProxy)) {
    autoBean = getAutoBean(dynamicCast(value_0, Q$BaseProxy));
    value_0 = dynamicCast(autoBean.getTag('stableId'), Q$SimpleProxyId);
  }
  if (instanceOf(value_0, Q$SimpleProxyId)) {
    return source.getSerializedProxyId(dynamicCast(value_0, Q$SimpleProxyId));
  }
  return encode_1(value_0);
}

function equals_14(bean, o){
  var other;
  if (!instanceOf(o, Q$EntityProxy)) {
    return false;
  }
  other = getAutoBean(dynamicCast(o, Q$EntityProxy));
  if (!other) {
    return false;
  }
  return $equals_1(dynamicCast(!bean.tags?null:bean.tags.get_2('stableId'), Q$SimpleEntityProxyId), dynamicCast(other.getTag('stableId'), Q$SimpleEntityProxyId)) && nonDiffingRequestContext(bean) == nonDiffingRequestContext(other);
}

function nonDiffingRequestContext(bean){
  var context;
  context = requestContext_0(bean);
  !!context && context.state.diffing && (context = null);
  return context;
}

function $clinit_MessageFactoryHolder(){
  $clinit_MessageFactoryHolder = nullMethod;
  FACTORY = new MessageFactoryImpl_0;
}

var FACTORY;
function RequestData_0(operation, parameters, propertyRefs, returnType, elementType){
  this.operation = operation;
  this.parameters = parameters;
  this.returnType = returnType;
  this.elementType = elementType;
  this.propertyRefs = propertyRefs;
}

defineSeed(651, 1, {}, RequestData_0);
function $equals_1(this$static, o){
  var other;
  if (this$static === o) {
    return true;
  }
  if (!instanceOf(o, Q$SimpleProxyId)) {
    return false;
  }
  other = dynamicCast(o, Q$SimpleProxyId);
  if (this$static.proxyClass != other.proxyClass) {
    return false;
  }
  if (this$static.clientId != -1 && this$static.clientId == other.clientId) {
    return true;
  }
  if (this$static.encodedAddress != null && $equals_3(this$static.encodedAddress, other.encodedAddress)) {
    return true;
  }
  return false;
}

function $setServerId(this$static, encodedAddress){
  if (this$static.encodedAddress != null) {
    throw new IllegalStateException_0;
  }
  this$static.encodedAddress = encodedAddress;
}

function SimpleProxyId_0(proxyClass, clientId){
  this.clientId = clientId;
  this.proxyClass = proxyClass;
  this.hashCode = clientId;
}

function SimpleProxyId_1(proxyClass, encodedAddress){
  $setServerId(this, encodedAddress);
  this.clientId = -1;
  this.hashCode = getHashCode_1(encodedAddress);
  this.proxyClass = proxyClass;
}

defineSeed(653, 1, makeCastMap([Q$SimpleProxyId]), SimpleProxyId_0, SimpleProxyId_1);
_.equals$ = function equals_15(o){
  return $equals_1(this, o);
}
;
_.hashCode$ = function hashCode_15(){
  return this.hashCode;
}
;
_.toString$ = function toString_13(){
  return this.encodedAddress == null?this.clientId + '@1@' + this.proxyClass.typeName:this.syntheticId > 0?this.syntheticId + '@2@' + this.proxyClass.typeName:this.encodedAddress + '@0@' + this.proxyClass.typeName;
}
;
_.clientId = 0;
_.hashCode = 0;
_.syntheticId = 0;
function SimpleEntityProxyId_0(proxyClass, clientId){
  SimpleProxyId_0.call(this, proxyClass, clientId);
}

function SimpleEntityProxyId_1(proxyClass, encodedAddress){
  SimpleProxyId_1.call(this, proxyClass, encodedAddress);
}

defineSeed(652, 653, makeCastMap([Q$SimpleEntityProxyId, Q$SimpleProxyId]), SimpleEntityProxyId_0, SimpleEntityProxyId_1);
function Date_1(date){
  this.jsdate = create(toDouble(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineSeed(655, 1, makeCastMap([Q$Serializable, Q$Comparable, Q$Date]), Date_1);
_.equals$ = function equals_16(obj){
  return instanceOf(obj, Q$Date) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, Q$Date).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_16(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_14(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
function DatePoser_0(copy){
  Date_1.call(this, fromDouble(copy.jsdate.getTime()));
}

defineSeed(654, 655, makeCastMap([Q$Poser, Q$DatePoser, Q$Serializable, Q$Comparable, Q$Date]), DatePoser_0);
function $clinit_IdMessage$Strength(){
  $clinit_IdMessage$Strength = nullMethod;
  PERSISTED = new IdMessage$Strength_0('PERSISTED', 0);
  EPHEMERAL = new IdMessage$Strength_0('EPHEMERAL', 1);
  SYNTHETIC = new IdMessage$Strength_0('SYNTHETIC', 2);
  $VALUES_18 = initValues(_3Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$IdMessage$Strength, [PERSISTED, EPHEMERAL, SYNTHETIC]);
}

function IdMessage$Strength_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_19(){
  $clinit_IdMessage$Strength();
  return $VALUES_18;
}

defineSeed(656, 31, makeCastMap([Q$IdMessage$Strength, Q$Serializable, Q$Comparable, Q$Enum]), IdMessage$Strength_0);
var $VALUES_18, EPHEMERAL, PERSISTED, SYNTHETIC;
function $$init_1(this$static){
  this$static.shim = new IdMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function IdMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_1(this);
}

function IdMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_1(this);
}

defineSeed(657, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), IdMessageAutoBean_0, IdMessageAutoBean_1);
_.as = function as_0(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_0(){
  return new IdMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_8(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = $getStrength(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'R'), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit);
  visitor.visitValueProperty('R', value_0, propertyContext);
  value_0 = valueOf_1($getClientId(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'C'), I_classLit);
  visitor.visitValueProperty('C', value_0, propertyContext);
  value_0 = valueOf_1($getSyntheticId(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'Y'), I_classLit);
  visitor.visitValueProperty('Y', value_0, propertyContext);
  value_0 = $getServerId(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'S'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('S', value_0, propertyContext);
  value_0 = $getTypeToken(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'T'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('T', value_0, propertyContext);
}
;
function $getClientId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).getClientId();
  return toReturn;
}

function $getServerId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).getServerId();
  return toReturn;
}

function $getStrength(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).getStrength();
  return toReturn;
}

function $getSyntheticId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).getSyntheticId();
  return toReturn;
}

function $getTypeToken(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).getTypeToken_0();
  return toReturn;
}

function $setClientId(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).setClientId(value_0);
  valueOf_1(value_0);
}

function $setServerId_0(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).setServerId(value_0);
}

function $setStrength(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).setStrength(value_0);
}

function $setSyntheticId(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).setSyntheticId(value_0);
  valueOf_1(value_0);
}

function $setTypeToken(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$IdMessage).setTypeToken(value_0);
}

function IdMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(658, 1, makeCastMap([Q$IdMessage]), IdMessageAutoBean$1_0);
_.equals$ = function equals_17(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$IdMessage).equals$(o);
}
;
_.getClientId = function getClientId(){
  return $getClientId(this);
}
;
_.getServerId = function getServerId(){
  return $getServerId(this);
}
;
_.getStrength = function getStrength(){
  return $getStrength(this);
}
;
_.getSyntheticId = function getSyntheticId(){
  return $getSyntheticId(this);
}
;
_.getTypeToken_0 = function getTypeToken(){
  return $getTypeToken(this);
}
;
_.hashCode$ = function hashCode_17(){
  return dynamicCast($getWrapped(this.this$0), Q$IdMessage).hashCode$();
}
;
_.setClientId = function setClientId(value_0){
  $setClientId(this, value_0);
}
;
_.setServerId = function setServerId(value_0){
  $setServerId_0(this, value_0);
}
;
_.setStrength = function setStrength(value_0){
  $setStrength(this, value_0);
}
;
_.setSyntheticId = function setSyntheticId(value_0){
  $setSyntheticId(this, value_0);
}
;
_.setTypeToken = function setTypeToken(value_0){
  $setTypeToken(this, value_0);
}
;
_.toString$ = function toString_15(){
  return dynamicCast($getWrapped(this.this$0), Q$IdMessage).toString$();
}
;
function IdMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(659, 1, makeCastMap([Q$IdMessage]), IdMessageAutoBean$2_0);
_.getClientId = function getClientId_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'C'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getServerId = function getServerId_0(){
  return dynamicCast($getOrReify(this.this$0, 'S'), Q$String);
}
;
_.getStrength = function getStrength_0(){
  return dynamicCast($getOrReify(this.this$0, 'R'), Q$IdMessage$Strength);
}
;
_.getSyntheticId = function getSyntheticId_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'Y'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTypeToken_0 = function getTypeToken_0(){
  return dynamicCast($getOrReify(this.this$0, 'T'), Q$String);
}
;
_.setClientId = function setClientId_0(value_0){
  $setProperty(this.this$0, 'C', valueOf_1(value_0));
}
;
_.setServerId = function setServerId_0(value_0){
  $setProperty(this.this$0, 'S', value_0);
}
;
_.setStrength = function setStrength_0(value_0){
  $setProperty(this.this$0, 'R', value_0);
}
;
_.setSyntheticId = function setSyntheticId_0(value_0){
  $setProperty(this.this$0, 'Y', valueOf_1(value_0));
}
;
_.setTypeToken = function setTypeToken_0(value_0){
  $setProperty(this.this$0, 'T', value_0);
}
;
function $$init_2(this$static){
  this$static.shim = new InvocationMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function InvocationMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_2(this);
}

function InvocationMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_2(this);
}

defineSeed(660, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), InvocationMessageAutoBean_0, InvocationMessageAutoBean_1);
_.as = function as_1(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_1(){
  return new InvocationMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_9(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_0(visitor, ctx){
  var as, bean, propertyContext, value_0;
  as = this.shim;
  value_0 = $getOperation(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'O'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('O', value_0, propertyContext);
  bean = dynamicCast(getAutoBean($getParameters(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'P'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('P', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getPropertyRefs(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'R'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_Set_2_classLit, Ljava_lang_String_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('R', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getOperation(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$InvocationMessage).getOperation();
  return toReturn;
}

function $getParameters(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$InvocationMessage).getParameters();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getPropertyRefs(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$InvocationMessage).getPropertyRefs();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Set)):(toReturn = (new SetAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $setOperation(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$InvocationMessage).setOperation(value_0);
}

function InvocationMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(661, 1, makeCastMap([Q$InvocationMessage]), InvocationMessageAutoBean$1_0);
_.equals$ = function equals_18(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$InvocationMessage).equals$(o);
}
;
_.getOperation = function getOperation(){
  return $getOperation(this);
}
;
_.getParameters = function getParameters(){
  return $getParameters(this);
}
;
_.getPropertyRefs = function getPropertyRefs(){
  return $getPropertyRefs(this);
}
;
_.hashCode$ = function hashCode_18(){
  return dynamicCast($getWrapped(this.this$0), Q$InvocationMessage).hashCode$();
}
;
_.setOperation = function setOperation(value_0){
  $setOperation(this, value_0);
}
;
_.setParameters = function setParameters(value_0){
  dynamicCast($getWrapped(this.this$0), Q$InvocationMessage).setParameters(value_0);
}
;
_.setPropertyRefs = function setPropertyRefs(value_0){
  dynamicCast($getWrapped(this.this$0), Q$InvocationMessage).setPropertyRefs(value_0);
}
;
_.toString$ = function toString_16(){
  return dynamicCast($getWrapped(this.this$0), Q$InvocationMessage).toString$();
}
;
function InvocationMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(662, 1, makeCastMap([Q$InvocationMessage]), InvocationMessageAutoBean$2_0);
_.getOperation = function getOperation_0(){
  return dynamicCast($getOrReify(this.this$0, 'O'), Q$String);
}
;
_.getParameters = function getParameters_0(){
  return dynamicCast($getOrReify(this.this$0, 'P'), Q$List);
}
;
_.getPropertyRefs = function getPropertyRefs_0(){
  return dynamicCast($getOrReify(this.this$0, 'R'), Q$Set);
}
;
_.setOperation = function setOperation_0(value_0){
  $setProperty(this.this$0, 'O', value_0);
}
;
_.setParameters = function setParameters_0(value_0){
  $setProperty(this.this$0, 'P', value_0);
}
;
_.setPropertyRefs = function setPropertyRefs_0(value_0){
  $setProperty(this.this$0, 'R', value_0);
}
;
function $$init_3(this$static){
  this$static.shim = new JsonRpcRequestAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function JsonRpcRequestAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_3(this);
}

function JsonRpcRequestAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_3(this);
}

defineSeed(663, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), JsonRpcRequestAutoBean_0, JsonRpcRequestAutoBean_1);
_.as = function as_2(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_2(){
  return new JsonRpcRequestAutoBean$2_0(this);
}
;
_.getType_0 = function getType_10(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequest_2_classLit;
}
;
_.traverseProperties = function traverseProperties_1(visitor, ctx){
  var as, bean, propertyContext, value_0;
  as = this.shim;
  value_0 = valueOf_1($getId_1(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), I_classLit);
  visitor.visitValueProperty('id', value_0, propertyContext);
  value_0 = $getApiVersion(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'apiVersion'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('apiVersion', value_0, propertyContext);
  value_0 = $getMethod(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'method'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('method', value_0, propertyContext);
  value_0 = $getVersion(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'jsonrpc'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('jsonrpc', value_0, propertyContext);
  bean = dynamicCast(getAutoBean($getParams(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'params'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_Map_2_classLit, Ljava_lang_String_2_classLit, Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [2, 0, 0]));
  visitor.visitReferenceProperty('params', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getApiVersion(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$JsonRpcRequest).getApiVersion();
  return toReturn;
}

function $getId_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$JsonRpcRequest).getId();
  return toReturn;
}

function $getMethod(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$JsonRpcRequest).getMethod();
  return toReturn;
}

function $getParams(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$JsonRpcRequest).getParams();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Map)):(toReturn = (new MapAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getVersion(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$JsonRpcRequest).getVersion();
  return toReturn;
}

function JsonRpcRequestAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(664, 1, makeCastMap([Q$JsonRpcRequest]), JsonRpcRequestAutoBean$1_0);
_.equals$ = function equals_19(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$JsonRpcRequest).equals$(o);
}
;
_.getApiVersion = function getApiVersion(){
  return $getApiVersion(this);
}
;
_.getId = function getId(){
  return $getId_1(this);
}
;
_.getMethod = function getMethod(){
  return $getMethod(this);
}
;
_.getParams = function getParams(){
  return $getParams(this);
}
;
_.getVersion = function getVersion(){
  return $getVersion(this);
}
;
_.hashCode$ = function hashCode_19(){
  return dynamicCast($getWrapped(this.this$0), Q$JsonRpcRequest).hashCode$();
}
;
_.toString$ = function toString_17(){
  return dynamicCast($getWrapped(this.this$0), Q$JsonRpcRequest).toString$();
}
;
function JsonRpcRequestAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(665, 1, makeCastMap([Q$JsonRpcRequest]), JsonRpcRequestAutoBean$2_0);
_.getApiVersion = function getApiVersion_0(){
  return dynamicCast($getOrReify(this.this$0, 'apiVersion'), Q$String);
}
;
_.getId = function getId_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'id'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getMethod = function getMethod_0(){
  return dynamicCast($getOrReify(this.this$0, 'method'), Q$String);
}
;
_.getParams = function getParams_0(){
  return dynamicCast($getOrReify(this.this$0, 'params'), Q$Map);
}
;
_.getVersion = function getVersion_0(){
  return dynamicCast($getOrReify(this.this$0, 'jsonrpc'), Q$String);
}
;
function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_IdMessage(){
  return [function(factory){
    return new IdMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new IdMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_InvocationMessage(){
  return [function(factory){
    return new InvocationMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new InvocationMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_JsonRpcRequest(){
  return [function(factory){
    return new JsonRpcRequestAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new JsonRpcRequestAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_OperationMessage(){
  return [function(factory){
    return new OperationMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new OperationMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_RequestMessage(){
  return [function(factory){
    return new RequestMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new RequestMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ResponseMessage(){
  return [function(factory){
    return new ResponseMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new ResponseMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage(){
  return [function(factory){
    return new ServerFailureMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new ServerFailureMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ViolationMessage(){
  return [function(factory){
    return new ViolationMessageAutoBean_0(factory);
  }
  , function(factory, wrapped){
    return new ViolationMessageAutoBean_1(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Collection(){
  return [undefined, function(factory, wrapped){
    return new CollectionAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Iterator(){
  return [undefined, function(factory, wrapped){
    return new IteratorAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_List(){
  return [undefined, function(factory, wrapped){
    return new ListAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_ListIterator(){
  return [undefined, function(factory, wrapped){
    return new ListIteratorAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Map(){
  return [undefined, function(factory, wrapped){
    return new MapAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Map_Entry(){
  return [undefined, function(factory, wrapped){
    return new Map_EntryAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Set(){
  return [undefined, function(factory, wrapped){
    return new SetAutoBean_0(factory, wrapped);
  }
  ];
}

function MessageFactoryImpl_0(){
}

defineSeed(666, 557, makeCastMap([Q$EnumMap]), MessageFactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap(map_0){
  $add_12(map_0, Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage());
  $add_12(map_0, Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_IdMessage());
  $add_12(map_0, Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_InvocationMessage());
  $add_12(map_0, Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequest_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_JsonRpcRequest());
  $add_12(map_0, Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_OperationMessage());
  $add_12(map_0, Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_RequestMessage());
  $add_12(map_0, Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ResponseMessage());
  $add_12(map_0, Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessage_2_classLit, $getConstructors_com_google_web_bindery_requestfactory_shared_messages_ViolationMessage());
  $add_12(map_0, Ljava_util_List_2_classLit, $getConstructors_java_util_List());
  $add_12(map_0, Ljava_util_Set_2_classLit, $getConstructors_java_util_Set());
  $add_12(map_0, Ljava_util_Map_2_classLit, $getConstructors_java_util_Map());
  $add_12(map_0, Ljava_util_Iterator_2_classLit, $getConstructors_java_util_Iterator());
  $add_12(map_0, Ljava_util_ListIterator_2_classLit, $getConstructors_java_util_ListIterator());
  $add_12(map_0, Ljava_util_Map$Entry_2_classLit, $getConstructors_java_util_Map_Entry());
  $add_12(map_0, Ljava_util_Collection_2_classLit, $getConstructors_java_util_Collection());
}
;
_.initializeEnumMap = function initializeEnumMap(){
  this.enumToStringMap.put(($clinit_IdMessage$Strength() , PERSISTED), '0');
  this.enumToStringMap.put(EPHEMERAL, '1');
  this.enumToStringMap.put(SYNTHETIC, '2');
  this.enumToStringMap.put(($clinit_WriteOperation() , PERSIST), 'PERSIST');
  this.enumToStringMap.put(UPDATE, 'UPDATE');
  this.enumToStringMap.put(DELETE, 'DELETE');
  this.stringsToEnumsMap.put('UPDATE', ($clinit_Collections() , new Collections$SingletonList_0(UPDATE)));
  this.stringsToEnumsMap.put('2', new Collections$SingletonList_0(SYNTHETIC));
  this.stringsToEnumsMap.put('1', new Collections$SingletonList_0(EPHEMERAL));
  this.stringsToEnumsMap.put('0', new Collections$SingletonList_0(PERSISTED));
  this.stringsToEnumsMap.put('DELETE', new Collections$SingletonList_0(DELETE));
  this.stringsToEnumsMap.put('PERSIST', new Collections$SingletonList_0(PERSIST));
}
;
function $$init_4(this$static){
  this$static.shim = new OperationMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function OperationMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_4(this);
}

function OperationMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_4(this);
}

defineSeed(667, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), OperationMessageAutoBean_0, OperationMessageAutoBean_1);
_.as = function as_3(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_3(){
  return new OperationMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_11(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_2(visitor, ctx){
  var as, bean, propertyContext, value_0;
  as = this.shim;
  value_0 = $getOperation_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'O'), Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit);
  visitor.visitValueProperty('O', value_0, propertyContext);
  value_0 = $getStrength_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'R'), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit);
  visitor.visitValueProperty('R', value_0, propertyContext);
  value_0 = valueOf_1($getClientId_0(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'C'), I_classLit);
  visitor.visitValueProperty('C', value_0, propertyContext);
  value_0 = valueOf_1($getSyntheticId_0(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'Y'), I_classLit);
  visitor.visitValueProperty('Y', value_0, propertyContext);
  value_0 = $getServerId_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'S'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('S', value_0, propertyContext);
  value_0 = $getTypeToken_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'T'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('T', value_0, propertyContext);
  value_0 = $getVersion_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'V'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('V', value_0, propertyContext);
  bean = dynamicCast(getAutoBean($getPropertyMap(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'P'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_Map_2_classLit, Ljava_lang_String_2_classLit, Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [2, 0, 0]));
  visitor.visitReferenceProperty('P', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getClientId_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getClientId();
  return toReturn;
}

function $getOperation_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getOperation_0();
  return toReturn;
}

function $getPropertyMap(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getPropertyMap();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Map)):(toReturn = (new MapAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getServerId_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getServerId();
  return toReturn;
}

function $getStrength_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getStrength();
  return toReturn;
}

function $getSyntheticId_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getSyntheticId();
  return toReturn;
}

function $getTypeToken_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getTypeToken_0();
  return toReturn;
}

function $getVersion_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).getVersion();
  return toReturn;
}

function $setClientId_0(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setClientId(value_0);
  valueOf_1(value_0);
}

function $setOperation_0(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setOperation_0(value_0);
}

function $setServerId_1(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setServerId(value_0);
}

function $setStrength_0(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setStrength(value_0);
}

function $setSyntheticId_0(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setSyntheticId(value_0);
  valueOf_1(value_0);
}

function $setTypeToken_0(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$OperationMessage).setTypeToken(value_0);
}

function OperationMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(668, 1, makeCastMap([Q$IdMessage, Q$OperationMessage]), OperationMessageAutoBean$1_0);
_.equals$ = function equals_20(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$OperationMessage).equals$(o);
}
;
_.getClientId = function getClientId_1(){
  return $getClientId_0(this);
}
;
_.getOperation_0 = function getOperation_1(){
  return $getOperation_0(this);
}
;
_.getPropertyMap = function getPropertyMap(){
  return $getPropertyMap(this);
}
;
_.getServerId = function getServerId_1(){
  return $getServerId_0(this);
}
;
_.getStrength = function getStrength_1(){
  return $getStrength_0(this);
}
;
_.getSyntheticId = function getSyntheticId_1(){
  return $getSyntheticId_0(this);
}
;
_.getTypeToken_0 = function getTypeToken_1(){
  return $getTypeToken_0(this);
}
;
_.getVersion = function getVersion_1(){
  return $getVersion_0(this);
}
;
_.hashCode$ = function hashCode_20(){
  return dynamicCast($getWrapped(this.this$0), Q$OperationMessage).hashCode$();
}
;
_.setClientId = function setClientId_1(value_0){
  $setClientId_0(this, value_0);
}
;
_.setOperation_0 = function setOperation_1(value_0){
  $setOperation_0(this, value_0);
}
;
_.setPropertyMap = function setPropertyMap(map_0){
  dynamicCast($getWrapped(this.this$0), Q$OperationMessage).setPropertyMap(map_0);
}
;
_.setServerId = function setServerId_1(value_0){
  $setServerId_1(this, value_0);
}
;
_.setStrength = function setStrength_1(value_0){
  $setStrength_0(this, value_0);
}
;
_.setSyntheticId = function setSyntheticId_1(value_0){
  $setSyntheticId_0(this, value_0);
}
;
_.setTypeToken = function setTypeToken_1(value_0){
  $setTypeToken_0(this, value_0);
}
;
_.setVersion = function setVersion(version){
  dynamicCast($getWrapped(this.this$0), Q$OperationMessage).setVersion(version);
}
;
_.toString$ = function toString_18(){
  return dynamicCast($getWrapped(this.this$0), Q$OperationMessage).toString$();
}
;
function OperationMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(669, 1, makeCastMap([Q$IdMessage, Q$OperationMessage]), OperationMessageAutoBean$2_0);
_.getClientId = function getClientId_2(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'C'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getOperation_0 = function getOperation_2(){
  return dynamicCast($getOrReify(this.this$0, 'O'), Q$WriteOperation);
}
;
_.getPropertyMap = function getPropertyMap_0(){
  return dynamicCast($getOrReify(this.this$0, 'P'), Q$Map);
}
;
_.getServerId = function getServerId_2(){
  return dynamicCast($getOrReify(this.this$0, 'S'), Q$String);
}
;
_.getStrength = function getStrength_2(){
  return dynamicCast($getOrReify(this.this$0, 'R'), Q$IdMessage$Strength);
}
;
_.getSyntheticId = function getSyntheticId_2(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'Y'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTypeToken_0 = function getTypeToken_2(){
  return dynamicCast($getOrReify(this.this$0, 'T'), Q$String);
}
;
_.getVersion = function getVersion_2(){
  return dynamicCast($getOrReify(this.this$0, 'V'), Q$String);
}
;
_.setClientId = function setClientId_2(value_0){
  $setProperty(this.this$0, 'C', valueOf_1(value_0));
}
;
_.setOperation_0 = function setOperation_2(value_0){
  $setProperty(this.this$0, 'O', value_0);
}
;
_.setPropertyMap = function setPropertyMap_0(map_0){
  $setProperty(this.this$0, 'P', map_0);
}
;
_.setServerId = function setServerId_2(value_0){
  $setProperty(this.this$0, 'S', value_0);
}
;
_.setStrength = function setStrength_2(value_0){
  $setProperty(this.this$0, 'R', value_0);
}
;
_.setSyntheticId = function setSyntheticId_2(value_0){
  $setProperty(this.this$0, 'Y', valueOf_1(value_0));
}
;
_.setTypeToken = function setTypeToken_2(value_0){
  $setProperty(this.this$0, 'T', value_0);
}
;
_.setVersion = function setVersion_0(version){
  $setProperty(this.this$0, 'V', version);
}
;
function $$init_5(this$static){
  this$static.shim = new RequestMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function RequestMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_5(this);
}

function RequestMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_5(this);
}

defineSeed(670, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), RequestMessageAutoBean_0, RequestMessageAutoBean_1);
_.as = function as_4(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_4(){
  return new RequestMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_12(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_3(visitor, ctx){
  var as, bean, propertyContext, value_0;
  as = this.shim;
  value_0 = $getRequestFactory(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'F'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('F', value_0, propertyContext);
  value_0 = $getVersion_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'V'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('V', value_0, propertyContext);
  bean = dynamicCast(getAutoBean($getInvocations(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'I'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessage_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('I', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getOperations(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'O'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessage_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('O', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getInvocations(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$RequestMessage).getInvocations();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getOperations(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$RequestMessage).getOperations();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getRequestFactory(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$RequestMessage).getRequestFactory();
  return toReturn;
}

function $getVersion_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$RequestMessage).getVersion();
  return toReturn;
}

function $setRequestFactory(this$static, value_0){
  dynamicCast($getWrapped(this$static.this$0), Q$RequestMessage).setRequestFactory(value_0);
}

function RequestMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(671, 1, makeCastMap([Q$RequestMessage]), RequestMessageAutoBean$1_0);
_.equals$ = function equals_21(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$RequestMessage).equals$(o);
}
;
_.getInvocations = function getInvocations(){
  return $getInvocations(this);
}
;
_.getOperations = function getOperations(){
  return $getOperations(this);
}
;
_.getRequestFactory = function getRequestFactory(){
  return $getRequestFactory(this);
}
;
_.getVersion = function getVersion_3(){
  return $getVersion_1(this);
}
;
_.hashCode$ = function hashCode_21(){
  return dynamicCast($getWrapped(this.this$0), Q$RequestMessage).hashCode$();
}
;
_.setInvocations = function setInvocations(value_0){
  dynamicCast($getWrapped(this.this$0), Q$RequestMessage).setInvocations(value_0);
}
;
_.setOperations = function setOperations(value_0){
  dynamicCast($getWrapped(this.this$0), Q$RequestMessage).setOperations(value_0);
}
;
_.setRequestFactory = function setRequestFactory(value_0){
  $setRequestFactory(this, value_0);
}
;
_.setVersion = function setVersion_1(version){
  dynamicCast($getWrapped(this.this$0), Q$RequestMessage).setVersion(version);
}
;
_.toString$ = function toString_19(){
  return dynamicCast($getWrapped(this.this$0), Q$RequestMessage).toString$();
}
;
function RequestMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(672, 1, makeCastMap([Q$RequestMessage]), RequestMessageAutoBean$2_0);
_.getInvocations = function getInvocations_0(){
  return dynamicCast($getOrReify(this.this$0, 'I'), Q$List);
}
;
_.getOperations = function getOperations_0(){
  return dynamicCast($getOrReify(this.this$0, 'O'), Q$List);
}
;
_.getRequestFactory = function getRequestFactory_0(){
  return dynamicCast($getOrReify(this.this$0, 'F'), Q$String);
}
;
_.getVersion = function getVersion_4(){
  return dynamicCast($getOrReify(this.this$0, 'V'), Q$String);
}
;
_.setInvocations = function setInvocations_0(value_0){
  $setProperty(this.this$0, 'I', value_0);
}
;
_.setOperations = function setOperations_0(value_0){
  $setProperty(this.this$0, 'O', value_0);
}
;
_.setRequestFactory = function setRequestFactory_0(value_0){
  $setProperty(this.this$0, 'F', value_0);
}
;
_.setVersion = function setVersion_2(version){
  $setProperty(this.this$0, 'V', version);
}
;
function $$init_6(this$static){
  this$static.shim = new ResponseMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ResponseMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_6(this);
}

function ResponseMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_6(this);
}

defineSeed(673, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ResponseMessageAutoBean_0, ResponseMessageAutoBean_1);
_.as = function as_5(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_5(){
  return new ResponseMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_13(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_4(visitor, ctx){
  var as, bean, propertyContext, value_0;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getGeneralFailure(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'F'), Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage_2_classLit);
  visitor.visitReferenceProperty('F', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  value_0 = $getVersion_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'V'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('V', value_0, propertyContext);
  bean = dynamicCast(getAutoBean($getInvocationResults(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'I'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('I', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getOperations_0(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'O'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessage_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('O', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getViolations(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'X'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessage_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('X', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getStatusCodes(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_1(as, beanSetter(this, 'S'), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Class, [Ljava_util_List_2_classLit, Ljava_lang_Boolean_2_classLit]), initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 0]));
  visitor.visitCollectionProperty('S', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getGeneralFailure(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getGeneralFailure();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$ServerFailureMessage)):(toReturn = (new ServerFailureMessageAutoBean_1(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getInvocationResults(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getInvocationResults();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getOperations_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getOperations();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getStatusCodes(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getStatusCodes();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getVersion_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getVersion();
  return toReturn;
}

function $getViolations(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ResponseMessage).getViolations();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function ResponseMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(674, 1, makeCastMap([Q$ResponseMessage]), ResponseMessageAutoBean$1_0);
_.equals$ = function equals_22(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ResponseMessage).equals$(o);
}
;
_.getGeneralFailure = function getGeneralFailure(){
  return $getGeneralFailure(this);
}
;
_.getInvocationResults = function getInvocationResults(){
  return $getInvocationResults(this);
}
;
_.getOperations = function getOperations_1(){
  return $getOperations_0(this);
}
;
_.getStatusCodes = function getStatusCodes(){
  return $getStatusCodes(this);
}
;
_.getVersion = function getVersion_5(){
  return $getVersion_2(this);
}
;
_.getViolations = function getViolations(){
  return $getViolations(this);
}
;
_.hashCode$ = function hashCode_22(){
  return dynamicCast($getWrapped(this.this$0), Q$ResponseMessage).hashCode$();
}
;
_.setVersion = function setVersion_3(version){
  dynamicCast($getWrapped(this.this$0), Q$ResponseMessage).setVersion(version);
}
;
_.toString$ = function toString_20(){
  return dynamicCast($getWrapped(this.this$0), Q$ResponseMessage).toString$();
}
;
function ResponseMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(675, 1, makeCastMap([Q$ResponseMessage]), ResponseMessageAutoBean$2_0);
_.getGeneralFailure = function getGeneralFailure_0(){
  return dynamicCast($getOrReify(this.this$0, 'F'), Q$ServerFailureMessage);
}
;
_.getInvocationResults = function getInvocationResults_0(){
  return dynamicCast($getOrReify(this.this$0, 'I'), Q$List);
}
;
_.getOperations = function getOperations_2(){
  return dynamicCast($getOrReify(this.this$0, 'O'), Q$List);
}
;
_.getStatusCodes = function getStatusCodes_0(){
  return dynamicCast($getOrReify(this.this$0, 'S'), Q$List);
}
;
_.getVersion = function getVersion_6(){
  return dynamicCast($getOrReify(this.this$0, 'V'), Q$String);
}
;
_.getViolations = function getViolations_0(){
  return dynamicCast($getOrReify(this.this$0, 'X'), Q$List);
}
;
_.setVersion = function setVersion_4(version){
  $setProperty(this.this$0, 'V', version);
}
;
function $$init_7(this$static){
  this$static.shim = new ServerFailureMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ServerFailureMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_7(this);
}

function ServerFailureMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_7(this);
}

defineSeed(676, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ServerFailureMessageAutoBean_0, ServerFailureMessageAutoBean_1);
_.as = function as_6(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_6(){
  return new ServerFailureMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_14(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_5(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $isFatal(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'F'), Z_classLit);
  visitor.visitValueProperty('F', value_0, propertyContext);
  value_0 = $getExceptionType(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'X'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('X', value_0, propertyContext);
  value_0 = $getMessage(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'M'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('M', value_0, propertyContext);
  value_0 = $getStackTrace(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'S'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('S', value_0, propertyContext);
}
;
function $getExceptionType(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ServerFailureMessage).getExceptionType();
  return toReturn;
}

function $getMessage(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ServerFailureMessage).getMessage();
  return toReturn;
}

function $getStackTrace(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ServerFailureMessage).getStackTrace();
  return toReturn;
}

function $isFatal(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ServerFailureMessage).isFatal();
  return toReturn;
}

function ServerFailureMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(677, 1, makeCastMap([Q$ServerFailureMessage]), ServerFailureMessageAutoBean$1_0);
_.equals$ = function equals_23(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ServerFailureMessage).equals$(o);
}
;
_.getExceptionType = function getExceptionType(){
  return $getExceptionType(this);
}
;
_.getMessage = function getMessage_1(){
  return $getMessage(this);
}
;
_.getStackTrace = function getStackTrace(){
  return $getStackTrace(this);
}
;
_.hashCode$ = function hashCode_23(){
  return dynamicCast($getWrapped(this.this$0), Q$ServerFailureMessage).hashCode$();
}
;
_.isFatal = function isFatal(){
  return $isFatal(this);
}
;
_.toString$ = function toString_21(){
  return dynamicCast($getWrapped(this.this$0), Q$ServerFailureMessage).toString$();
}
;
function ServerFailureMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(678, 1, makeCastMap([Q$ServerFailureMessage]), ServerFailureMessageAutoBean$2_0);
_.getExceptionType = function getExceptionType_0(){
  return dynamicCast($getOrReify(this.this$0, 'X'), Q$String);
}
;
_.getMessage = function getMessage_2(){
  return dynamicCast($getOrReify(this.this$0, 'M'), Q$String);
}
;
_.getStackTrace = function getStackTrace_0(){
  return dynamicCast($getOrReify(this.this$0, 'S'), Q$String);
}
;
_.isFatal = function isFatal_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'F'), Q$Boolean);
  return !!toReturn && toReturn.value_0;
}
;
function $$init_8(this$static){
  this$static.shim = new ViolationMessageAutoBean$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ViolationMessageAutoBean_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_8(this);
}

function ViolationMessageAutoBean_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_8(this);
}

defineSeed(679, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ViolationMessageAutoBean_0, ViolationMessageAutoBean_1);
_.as = function as_7(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_7(){
  return new ViolationMessageAutoBean$2_0(this);
}
;
_.getType_0 = function getType_15(){
  return Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessage_2_classLit;
}
;
_.traverseProperties = function traverseProperties_6(visitor, ctx){
  var as, bean, propertyContext, value_0;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getLeafBeanId(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'L'), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit);
  visitor.visitReferenceProperty('L', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getRootBeanId(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'R'), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit);
  visitor.visitReferenceProperty('R', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  value_0 = $getMessage_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'M'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('M', value_0, propertyContext);
  value_0 = $getMessageTemplate(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'T'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('T', value_0, propertyContext);
  value_0 = $getPath(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'P'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('P', value_0, propertyContext);
}
;
function $getLeafBeanId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ViolationMessage).getLeafBeanId();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$IdMessage)):(toReturn = (new IdMessageAutoBean_1(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function $getMessage_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ViolationMessage).getMessage();
  return toReturn;
}

function $getMessageTemplate(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ViolationMessage).getMessageTemplate();
  return toReturn;
}

function $getPath(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ViolationMessage).getPath();
  return toReturn;
}

function $getRootBeanId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ViolationMessage).getRootBeanId();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$IdMessage)):(toReturn = (new IdMessageAutoBean_1(this$static.this$0.factory, toReturn)).shim));
  return toReturn;
}

function ViolationMessageAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(680, 1, makeCastMap([Q$ViolationMessage]), ViolationMessageAutoBean$1_0);
_.equals$ = function equals_24(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ViolationMessage).equals$(o);
}
;
_.getLeafBeanId = function getLeafBeanId(){
  return $getLeafBeanId(this);
}
;
_.getMessage = function getMessage_3(){
  return $getMessage_0(this);
}
;
_.getMessageTemplate = function getMessageTemplate(){
  return $getMessageTemplate(this);
}
;
_.getPath = function getPath(){
  return $getPath(this);
}
;
_.getRootBeanId = function getRootBeanId(){
  return $getRootBeanId(this);
}
;
_.hashCode$ = function hashCode_24(){
  return dynamicCast($getWrapped(this.this$0), Q$ViolationMessage).hashCode$();
}
;
_.toString$ = function toString_22(){
  return dynamicCast($getWrapped(this.this$0), Q$ViolationMessage).toString$();
}
;
function ViolationMessageAutoBean$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(681, 1, makeCastMap([Q$ViolationMessage]), ViolationMessageAutoBean$2_0);
_.getLeafBeanId = function getLeafBeanId_0(){
  return dynamicCast($getOrReify(this.this$0, 'L'), Q$IdMessage);
}
;
_.getMessage = function getMessage_4(){
  return dynamicCast($getOrReify(this.this$0, 'M'), Q$String);
}
;
_.getMessageTemplate = function getMessageTemplate_0(){
  return dynamicCast($getOrReify(this.this$0, 'T'), Q$String);
}
;
_.getPath = function getPath_0(){
  return dynamicCast($getOrReify(this.this$0, 'P'), Q$String);
}
;
_.getRootBeanId = function getRootBeanId_0(){
  return dynamicCast($getOrReify(this.this$0, 'R'), Q$IdMessage);
}
;
defineSeed(692, 689, makeCastMap([Q$HasHandlers, Q$IsWidget, Q$PresenterWidget]));
_.asWidget = function asWidget_0(){
  return !this.view?null:this.view.asWidget();
}
;
function isValidUserName(userName){
  if (userName == null)
    return false;
  return userName.length >= 6;
}

function ActionCompletedEvent_0(){
  $clinit_ActionCompletedEvent();
}

defineSeed(743, 232, {}, ActionCompletedEvent_0);
_.dispatch_0 = function dispatch_32(handler){
  dynamicCast(handler, Q$ActionCompletedEvent$ActionCompletedHandler).onActionCompleted(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_33(){
  return TYPE_32;
}
;
function ActionInProgressEvent_0(){
  $clinit_ActionInProgressEvent();
}

defineSeed(744, 232, {}, ActionInProgressEvent_0);
_.dispatch_0 = function dispatch_33(handler){
  dynamicCast(handler, Q$ActionInProgressEvent$ActionInProgressHandler).onActionInProgress(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_34(){
  return TYPE_33;
}
;
function $onActionCompleted(this$static){
  $showProgressBar(dynamicCast(this$static.view, Q$MainPagePresenter$MyView), false);
  $enableMainPanel(dynamicCast(this$static.view, Q$MainPagePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
}

function $onActionInProgress(this$static){
  $showProgressBar(dynamicCast(this$static.view, Q$MainPagePresenter$MyView), true);
  $enableMainPanel(dynamicCast(this$static.view, Q$MainPagePresenter$MyView), ($clinit_Boolean() , $clinit_Boolean() , FALSE_1));
}

defineSeed(812, 691, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$IsWidget, Q$PresenterWidget, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$MainPagePresenter, Q$MainPageUiHandler]));
_.onActionCompleted = function onActionCompleted(event_0){
  $onActionCompleted(this);
}
;
_.onActionInProgress = function onActionInProgress(event_0){
  $onActionInProgress(this);
}
;
defineSeed(813, 713, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$ActionCompletedEvent$ActionCompletedHandler, Q$ActionInProgressEvent$ActionInProgressHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler]));
_.onActionCompleted = function onActionCompleted_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$3_0(this.eventBus, event_0));
}
;
_.onActionInProgress = function onActionInProgress_0(event_0){
  $getPresenter(this, new MainPagePresenterMyProxyImpl$2_0(this.eventBus, event_0));
}
;
function $success_5(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$2$1_0(presenter, this$static.val$event));
}

function MainPagePresenterMyProxyImpl$2_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(816, 705, {}, MainPagePresenterMyProxyImpl$2_0);
_.success = function success_7(presenter){
  $success_5(this, dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$2$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(817, 1, {}, MainPagePresenterMyProxyImpl$2$1_0);
_.execute_0 = function execute_35(){
  $onActionInProgress(this.val$presenter);
}
;
function $success_6(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new MainPagePresenterMyProxyImpl$3$1_0(presenter, this$static.val$event));
}

function MainPagePresenterMyProxyImpl$3_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(818, 705, {}, MainPagePresenterMyProxyImpl$3_0);
_.success = function success_8(presenter){
  $success_6(this, dynamicCast(presenter, Q$MainPagePresenter));
}
;
function MainPagePresenterMyProxyImpl$3$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(819, 1, {}, MainPagePresenterMyProxyImpl$3$1_0);
_.execute_0 = function execute_36(){
  $onActionCompleted(this.val$presenter);
}
;
function $onActionCompleted_0(this$static){
  !!this$static.currentUser && $initializeUI(dynamicCast(this$static.view, Q$TimeInputPresenter$MyView), this$static.currentUser.isAdmin);
}

defineSeed(876, 720, makeCastMap([Q$EventHandler, Q$HasHandlers, Q$DelayedBind, Q$HasHandlerContainer, Q$Place, Q$ActionCompletedEvent$ActionCompletedHandler, Q$LoadAllProfessorLogsEvent$LoadAllProfessorLogsHandler, Q$LoginAuthenticatedEvent$LoginAuthenticatedHandler, Q$UpdateTimeLogEvent$UpdateTimeLogHandler]));
_.onActionCompleted = function onActionCompleted_2(event_0){
  $getPresenter_0(this, new TimeInputPresenterMyProxyImpl$3_0(this.eventBus, event_0));
}
;
function $success_13(this$static, presenter){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), new TimeInputPresenterMyProxyImpl$3$1_0(presenter, this$static.val$event));
}

function TimeInputPresenterMyProxyImpl$3_0($anonymous0, val$event){
  this.val$event = val$event;
  NotifyingAsyncCallback_0.call(this, $anonymous0);
}

defineSeed(881, 705, {}, TimeInputPresenterMyProxyImpl$3_0);
_.success = function success_15(presenter){
  $success_13(this, dynamicCast(presenter, Q$TimeInputPresenter));
}
;
function TimeInputPresenterMyProxyImpl$3$1_0(val$presenter, val$event){
  this.val$presenter = val$presenter;
  this.val$event = val$event;
}

defineSeed(882, 1, {}, TimeInputPresenterMyProxyImpl$3$1_0);
_.execute_0 = function execute_43(){
  $onActionCompleted_0(this.val$presenter);
}
;
function $enableAllChildren(this$static, enable, widget){
  var iter, nextWidget;
  if (instanceOf(widget, Q$HasWidgets)) {
    iter = dynamicCast(widget, Q$HasWidgets).iterator();
    while (iter.hasNext()) {
      nextWidget = dynamicCast(iter.next_0(), Q$Widget);
      $enableAllChildren(this$static, enable, nextWidget);
      instanceOf(nextWidget, Q$FocusWidget) && dynamicCast(nextWidget, Q$FocusWidget).setEnabled(enable);
    }
  }
}

function $enableMainPanel(this$static, enabled){
  $enableAllChildren(this$static, enabled.value_0, this$static.mainContentPanel);
}

function $showProgressBar(this$static, visible){
  $setVisible_0(this$static.imgProgressBar, visible);
}

function $initializeUI(this$static, isAdmin){
  $setEnabled(this$static.lstMonth, isAdmin);
  $setEnabled(this$static.lstYear, isAdmin);
}

function $$init_10(this$static){
  this$static.shim = new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_10(this);
}

function CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_10(this);
}

defineSeed(1154, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_9(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_9(){
  return new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_17(){
  return Lcom_lemania_timetracking_shared_CoursProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_8(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = $getCoursActif(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'coursActif'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('coursActif', value_0, propertyContext);
  value_0 = $getId_3(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value_0, propertyContext);
  value_0 = $getCoursNom(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'coursNom'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('coursNom', value_0, propertyContext);
  value_0 = $getSchoolName_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolName', value_0, propertyContext);
}
;
function $getCoursActif(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$CoursProxy).getCoursActif();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getCoursNom(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$CoursProxy).getCoursNom();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$CoursProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getSchoolName_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$CoursProxy).getSchoolName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1155, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$CoursProxy]), CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_30(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$CoursProxy).equals$(o);
}
;
_.getCoursActif = function getCoursActif(){
  return $getCoursActif(this);
}
;
_.getCoursNom = function getCoursNom(){
  return $getCoursNom(this);
}
;
_.getId_0 = function getId_3(){
  return $getId_3(this);
}
;
_.getSchoolName = function getSchoolName_1(){
  return $getSchoolName_0(this);
}
;
_.hashCode$ = function hashCode_30(){
  return dynamicCast($getWrapped(this.this$0), Q$CoursProxy).hashCode$();
}
;
_.setCoursActif = function setCoursActif(status_0){
  dynamicCast($getWrapped(this.this$0), Q$CoursProxy).setCoursActif(status_0);
}
;
_.setCoursNom = function setCoursNom(name_0){
  dynamicCast($getWrapped(this.this$0), Q$CoursProxy).setCoursNom(name_0);
}
;
_.toString$ = function toString_27(){
  return dynamicCast($getWrapped(this.this$0), Q$CoursProxy).toString$();
}
;
function CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1156, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$CoursProxy]), CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_31(other){
  return equals_14(this.this$0, other);
}
;
_.getCoursActif = function getCoursActif_0(){
  return dynamicCast($getOrReify(this.this$0, 'coursActif'), Q$Boolean);
}
;
_.getCoursNom = function getCoursNom_0(){
  return dynamicCast($getOrReify(this.this$0, 'coursNom'), Q$String);
}
;
_.getId_0 = function getId_4(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getSchoolName = function getSchoolName_2(){
  return dynamicCast($getOrReify(this.this$0, 'schoolName'), Q$String);
}
;
_.hashCode$ = function hashCode_31(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setCoursActif = function setCoursActif_0(status_0){
  $setProperty(this.this$0, 'coursActif', status_0);
}
;
_.setCoursNom = function setCoursNom_0(name_0){
  $setProperty(this.this$0, 'coursNom', name_0);
}
;
function $$init_11(this$static){
  this$static.shim = new EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_11(this);
}

function EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_11(this);
}

defineSeed(1157, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_10(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_10(){
  return new EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_18(){
  return Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_9(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = $getSchoolStatus(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolStatus'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('schoolStatus', value_0, propertyContext);
  value_0 = $getId_4(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value_0, propertyContext);
  value_0 = $getSchoolAddress(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolAddress'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolAddress', value_0, propertyContext);
  value_0 = $getSchoolName_1(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolName', value_0, propertyContext);
}
;
function $getId_4(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EcoleProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getSchoolAddress(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EcoleProxy).getSchoolAddress();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSchoolName_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EcoleProxy).getSchoolName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSchoolStatus(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$EcoleProxy).getSchoolStatus();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1158, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EcoleProxy]), EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_32(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).equals$(o);
}
;
_.getId_0 = function getId_5(){
  return $getId_4(this);
}
;
_.getSchoolAddress = function getSchoolAddress(){
  return $getSchoolAddress(this);
}
;
_.getSchoolName = function getSchoolName_3(){
  return $getSchoolName_1(this);
}
;
_.getSchoolStatus = function getSchoolStatus(){
  return $getSchoolStatus(this);
}
;
_.hashCode$ = function hashCode_32(){
  return dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).hashCode$();
}
;
_.setSchoolStatus = function setSchoolStatus(active){
  dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).setSchoolStatus(active);
}
;
_.toString$ = function toString_28(){
  return dynamicCast($getWrapped(this.this$0), Q$EcoleProxy).toString$();
}
;
function EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1159, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$EcoleProxy]), EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_33(other){
  return equals_14(this.this$0, other);
}
;
_.getId_0 = function getId_6(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getSchoolAddress = function getSchoolAddress_0(){
  return dynamicCast($getOrReify(this.this$0, 'schoolAddress'), Q$String);
}
;
_.getSchoolName = function getSchoolName_4(){
  return dynamicCast($getOrReify(this.this$0, 'schoolName'), Q$String);
}
;
_.getSchoolStatus = function getSchoolStatus_0(){
  return dynamicCast($getOrReify(this.this$0, 'schoolStatus'), Q$Boolean);
}
;
_.hashCode$ = function hashCode_33(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setSchoolStatus = function setSchoolStatus_0(active){
  $setProperty(this.this$0, 'schoolStatus', active);
}
;
function $$init_12(this$static){
  this$static.shim = new LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_12(this);
}

function LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_12(this);
}

defineSeed(1160, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_11(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_11(){
  return new LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_19(){
  return Lcom_lemania_timetracking_shared_LogProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_10(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $isApproved(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'approved'), Z_classLit);
  visitor.visitValueProperty('approved', value_0, propertyContext);
  value_0 = new Double_0($getHour(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'hour'), D_classLit);
  visitor.visitValueProperty('hour', value_0, propertyContext);
  value_0 = valueOf_1($getMonth(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'month'), I_classLit);
  visitor.visitValueProperty('month', value_0, propertyContext);
  value_0 = valueOf_1($getYear(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'year'), I_classLit);
  visitor.visitValueProperty('year', value_0, propertyContext);
  value_0 = $getId_5(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value_0, propertyContext);
  value_0 = $getCourseId(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'courseId'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('courseId', value_0, propertyContext);
  value_0 = $getCourseName_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'courseName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('courseName', value_0, propertyContext);
  value_0 = $getMemo(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'memo'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('memo', value_0, propertyContext);
  value_0 = $getModifyDate(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'modifyDate'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('modifyDate', value_0, propertyContext);
  value_0 = $getProfName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profName', value_0, propertyContext);
  value_0 = $getSchoolName_2(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'schoolName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('schoolName', value_0, propertyContext);
  value_0 = $getTypeId(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'typeId'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('typeId', value_0, propertyContext);
  value_0 = $getTypeName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'typeName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('typeName', value_0, propertyContext);
}
;
function $getCourseId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getCourseId();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getCourseName_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getCourseName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getHour(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getHour();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getId_5(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getMemo(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getMemo();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getModifyDate(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getModifyDate();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getMonth(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getMonth_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getProfName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getProfName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getSchoolName_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getSchoolName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getTypeId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getTypeId();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getTypeName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getTypeName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getYear(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).getYear();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $isApproved(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogProxy).isApproved();
  toReturn = dynamicCast(__intercept(this$static.this$0, ($clinit_Boolean() , toReturn?TRUE_1:FALSE_1)), Q$Boolean).value_0;
  return toReturn;
}

function LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1161, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$LogProxy]), LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_34(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$LogProxy).equals$(o);
}
;
_.getCourseId = function getCourseId(){
  return $getCourseId(this);
}
;
_.getCourseName = function getCourseName_1(){
  return $getCourseName_0(this);
}
;
_.getHour = function getHour(){
  return $getHour(this);
}
;
_.getId_0 = function getId_7(){
  return $getId_5(this);
}
;
_.getMemo = function getMemo(){
  return $getMemo(this);
}
;
_.getModifyDate = function getModifyDate(){
  return $getModifyDate(this);
}
;
_.getMonth_0 = function getMonth(){
  return $getMonth(this);
}
;
_.getProfName = function getProfName(){
  return $getProfName(this);
}
;
_.getSchoolName = function getSchoolName_5(){
  return $getSchoolName_2(this);
}
;
_.getTypeId = function getTypeId(){
  return $getTypeId(this);
}
;
_.getTypeName = function getTypeName(){
  return $getTypeName(this);
}
;
_.getYear = function getYear(){
  return $getYear(this);
}
;
_.hashCode$ = function hashCode_34(){
  return dynamicCast($getWrapped(this.this$0), Q$LogProxy).hashCode$();
}
;
_.isApproved = function isApproved(){
  return $isApproved(this);
}
;
_.toString$ = function toString_29(){
  return dynamicCast($getWrapped(this.this$0), Q$LogProxy).toString$();
}
;
function LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1162, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$LogProxy]), LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_35(other){
  return equals_14(this.this$0, other);
}
;
_.getCourseId = function getCourseId_0(){
  return dynamicCast($getOrReify(this.this$0, 'courseId'), Q$String);
}
;
_.getCourseName = function getCourseName_2(){
  return dynamicCast($getOrReify(this.this$0, 'courseName'), Q$String);
}
;
_.getHour = function getHour_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'hour'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getId_0 = function getId_8(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getMemo = function getMemo_0(){
  return dynamicCast($getOrReify(this.this$0, 'memo'), Q$String);
}
;
_.getModifyDate = function getModifyDate_0(){
  return dynamicCast($getOrReify(this.this$0, 'modifyDate'), Q$String);
}
;
_.getMonth_0 = function getMonth_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'month'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getProfName = function getProfName_0(){
  return dynamicCast($getOrReify(this.this$0, 'profName'), Q$String);
}
;
_.getSchoolName = function getSchoolName_6(){
  return dynamicCast($getOrReify(this.this$0, 'schoolName'), Q$String);
}
;
_.getTypeId = function getTypeId_0(){
  return dynamicCast($getOrReify(this.this$0, 'typeId'), Q$String);
}
;
_.getTypeName = function getTypeName_0(){
  return dynamicCast($getOrReify(this.this$0, 'typeName'), Q$String);
}
;
_.getYear = function getYear_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'year'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.hashCode$ = function hashCode_35(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.isApproved = function isApproved_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'approved'), Q$Boolean);
  return !!toReturn && toReturn.value_0;
}
;
function $$init_13(this$static){
  this$static.shim = new LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_13(this);
}

function LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_13(this);
}

defineSeed(1163, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_12(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_12(){
  return new LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_20(){
  return Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_11(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = valueOf_1($getOrderNumber(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'orderNumber'), I_classLit);
  visitor.visitValueProperty('orderNumber', value_0, propertyContext);
  value_0 = $getLogTypeActive(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'logTypeActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('logTypeActive', value_0, propertyContext);
  value_0 = $getId_6(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value_0, propertyContext);
  value_0 = $getLogTypeName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'logTypeName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('logTypeName', value_0, propertyContext);
}
;
function $getId_6(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogTypeProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getLogTypeActive(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogTypeProxy).getLogTypeActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getLogTypeName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogTypeProxy).getLogTypeName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getOrderNumber(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$LogTypeProxy).getOrderNumber();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1164, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$LogTypeProxy]), LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_36(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$LogTypeProxy).equals$(o);
}
;
_.getId_0 = function getId_9(){
  return $getId_6(this);
}
;
_.getLogTypeActive = function getLogTypeActive(){
  return $getLogTypeActive(this);
}
;
_.getLogTypeName = function getLogTypeName(){
  return $getLogTypeName(this);
}
;
_.getOrderNumber = function getOrderNumber(){
  return $getOrderNumber(this);
}
;
_.hashCode$ = function hashCode_36(){
  return dynamicCast($getWrapped(this.this$0), Q$LogTypeProxy).hashCode$();
}
;
_.setLogTypeActive = function setLogTypeActive(status_0){
  dynamicCast($getWrapped(this.this$0), Q$LogTypeProxy).setLogTypeActive(status_0);
}
;
_.setLogTypeName = function setLogTypeName(typeName){
  dynamicCast($getWrapped(this.this$0), Q$LogTypeProxy).setLogTypeName(typeName);
}
;
_.toString$ = function toString_30(){
  return dynamicCast($getWrapped(this.this$0), Q$LogTypeProxy).toString$();
}
;
function LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1165, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$LogTypeProxy]), LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_37(other){
  return equals_14(this.this$0, other);
}
;
_.getId_0 = function getId_10(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getLogTypeActive = function getLogTypeActive_0(){
  return dynamicCast($getOrReify(this.this$0, 'logTypeActive'), Q$Boolean);
}
;
_.getLogTypeName = function getLogTypeName_0(){
  return dynamicCast($getOrReify(this.this$0, 'logTypeName'), Q$String);
}
;
_.getOrderNumber = function getOrderNumber_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'orderNumber'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.hashCode$ = function hashCode_37(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setLogTypeActive = function setLogTypeActive_0(status_0){
  $setProperty(this.this$0, 'logTypeActive', status_0);
}
;
_.setLogTypeName = function setLogTypeName_0(typeName){
  $setProperty(this.this$0, 'logTypeName', typeName);
}
;
function $$init_14(this$static){
  this$static.shim = new ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_14(this);
}

function ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_14(this);
}

defineSeed(1166, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_13(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_13(){
  return new ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_21(){
  return Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_12(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = new Double_0($getFee_01(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_01'), D_classLit);
  visitor.visitValueProperty('fee_01', value_0, propertyContext);
  value_0 = new Double_0($getFee_02(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_02'), D_classLit);
  visitor.visitValueProperty('fee_02', value_0, propertyContext);
  value_0 = new Double_0($getFee_03(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_03'), D_classLit);
  visitor.visitValueProperty('fee_03', value_0, propertyContext);
  value_0 = new Double_0($getFee_04(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_04'), D_classLit);
  visitor.visitValueProperty('fee_04', value_0, propertyContext);
  value_0 = new Double_0($getFee_05(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_05'), D_classLit);
  visitor.visitValueProperty('fee_05', value_0, propertyContext);
  value_0 = new Double_0($getFee_06(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_06'), D_classLit);
  visitor.visitValueProperty('fee_06', value_0, propertyContext);
  value_0 = new Double_0($getFee_07(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_07'), D_classLit);
  visitor.visitValueProperty('fee_07', value_0, propertyContext);
  value_0 = new Double_0($getFee_08(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_08'), D_classLit);
  visitor.visitValueProperty('fee_08', value_0, propertyContext);
  value_0 = new Double_0($getFee_09(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_09'), D_classLit);
  visitor.visitValueProperty('fee_09', value_0, propertyContext);
  value_0 = new Double_0($getFee_10(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_10'), D_classLit);
  visitor.visitValueProperty('fee_10', value_0, propertyContext);
  value_0 = new Double_0($getFee_11(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_11'), D_classLit);
  visitor.visitValueProperty('fee_11', value_0, propertyContext);
  value_0 = new Double_0($getFee_12(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fee_12'), D_classLit);
  visitor.visitValueProperty('fee_12', value_0, propertyContext);
  value_0 = new Double_0($getTotal_01(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_01'), D_classLit);
  visitor.visitValueProperty('total_01', value_0, propertyContext);
  value_0 = new Double_0($getTotal_02(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_02'), D_classLit);
  visitor.visitValueProperty('total_02', value_0, propertyContext);
  value_0 = new Double_0($getTotal_03(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_03'), D_classLit);
  visitor.visitValueProperty('total_03', value_0, propertyContext);
  value_0 = new Double_0($getTotal_04(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_04'), D_classLit);
  visitor.visitValueProperty('total_04', value_0, propertyContext);
  value_0 = new Double_0($getTotal_05(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_05'), D_classLit);
  visitor.visitValueProperty('total_05', value_0, propertyContext);
  value_0 = new Double_0($getTotal_06(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_06'), D_classLit);
  visitor.visitValueProperty('total_06', value_0, propertyContext);
  value_0 = new Double_0($getTotal_07(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_07'), D_classLit);
  visitor.visitValueProperty('total_07', value_0, propertyContext);
  value_0 = new Double_0($getTotal_08(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_08'), D_classLit);
  visitor.visitValueProperty('total_08', value_0, propertyContext);
  value_0 = new Double_0($getTotal_09(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_09'), D_classLit);
  visitor.visitValueProperty('total_09', value_0, propertyContext);
  value_0 = new Double_0($getTotal_10(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_10'), D_classLit);
  visitor.visitValueProperty('total_10', value_0, propertyContext);
  value_0 = new Double_0($getTotal_11(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_11'), D_classLit);
  visitor.visitValueProperty('total_11', value_0, propertyContext);
  value_0 = new Double_0($getTotal_12(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'total_12'), D_classLit);
  visitor.visitValueProperty('total_12', value_0, propertyContext);
  value_0 = $getProfActive(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profActive'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('profActive', value_0, propertyContext);
  value_0 = $getId_7(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value_0, propertyContext);
  value_0 = $getLogModifyDate(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'logModifyDate'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('logModifyDate', value_0, propertyContext);
  value_0 = $getManagerName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'managerName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('managerName', value_0, propertyContext);
  value_0 = $getProfName_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'profName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('profName', value_0, propertyContext);
}
;
function $getFee_01(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_01();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_02(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_02();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_03(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_03();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_04(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_04();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_05(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_05();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_06(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_06();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_07(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_07();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_08(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_08();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_09(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_09();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_10(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_10();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_11(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_11();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getFee_12(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getFee_12();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getId_7(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getLogModifyDate(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getLogModifyDate();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getManagerName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getManagerName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getProfActive(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getProfActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getProfName_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getProfName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getTotal_01(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_01();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_02(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_02();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_03(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_03();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_04(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_04();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_05(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_05();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_06(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_06();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_07(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_07();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_08(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_08();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_09(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_09();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_10(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_10();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_11(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_11();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function $getTotal_12(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ProfessorProxy).getTotal_12();
  toReturn = dynamicCast(__intercept(this$static.this$0, new Double_0(toReturn)), Q$Double).value_0;
  return toReturn;
}

function ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1167, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfessorProxy]), ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_38(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).equals$(o);
}
;
_.getFee_01 = function getFee_01(){
  return $getFee_01(this);
}
;
_.getFee_02 = function getFee_02(){
  return $getFee_02(this);
}
;
_.getFee_03 = function getFee_03(){
  return $getFee_03(this);
}
;
_.getFee_04 = function getFee_04(){
  return $getFee_04(this);
}
;
_.getFee_05 = function getFee_05(){
  return $getFee_05(this);
}
;
_.getFee_06 = function getFee_06(){
  return $getFee_06(this);
}
;
_.getFee_07 = function getFee_07(){
  return $getFee_07(this);
}
;
_.getFee_08 = function getFee_08(){
  return $getFee_08(this);
}
;
_.getFee_09 = function getFee_09(){
  return $getFee_09(this);
}
;
_.getFee_10 = function getFee_10(){
  return $getFee_10(this);
}
;
_.getFee_11 = function getFee_11(){
  return $getFee_11(this);
}
;
_.getFee_12 = function getFee_12(){
  return $getFee_12(this);
}
;
_.getId_0 = function getId_11(){
  return $getId_7(this);
}
;
_.getLogModifyDate = function getLogModifyDate(){
  return $getLogModifyDate(this);
}
;
_.getManagerName = function getManagerName(){
  return $getManagerName(this);
}
;
_.getProfActive = function getProfActive(){
  return $getProfActive(this);
}
;
_.getProfName = function getProfName_1(){
  return $getProfName_0(this);
}
;
_.getTotal_01 = function getTotal_01(){
  return $getTotal_01(this);
}
;
_.getTotal_02 = function getTotal_02(){
  return $getTotal_02(this);
}
;
_.getTotal_03 = function getTotal_03(){
  return $getTotal_03(this);
}
;
_.getTotal_04 = function getTotal_04(){
  return $getTotal_04(this);
}
;
_.getTotal_05 = function getTotal_05(){
  return $getTotal_05(this);
}
;
_.getTotal_06 = function getTotal_06(){
  return $getTotal_06(this);
}
;
_.getTotal_07 = function getTotal_07(){
  return $getTotal_07(this);
}
;
_.getTotal_08 = function getTotal_08(){
  return $getTotal_08(this);
}
;
_.getTotal_09 = function getTotal_09(){
  return $getTotal_09(this);
}
;
_.getTotal_10 = function getTotal_10(){
  return $getTotal_10(this);
}
;
_.getTotal_11 = function getTotal_11(){
  return $getTotal_11(this);
}
;
_.getTotal_12 = function getTotal_12(){
  return $getTotal_12(this);
}
;
_.hashCode$ = function hashCode_38(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).hashCode$();
}
;
_.setProfActive = function setProfActive(profActive){
  dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).setProfActive(profActive);
}
;
_.toString$ = function toString_31(){
  return dynamicCast($getWrapped(this.this$0), Q$ProfessorProxy).toString$();
}
;
function ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1168, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$ProfessorProxy]), ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_39(other){
  return equals_14(this.this$0, other);
}
;
_.getFee_01 = function getFee_01_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_01'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_02 = function getFee_02_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_02'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_03 = function getFee_03_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_03'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_04 = function getFee_04_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_04'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_05 = function getFee_05_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_05'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_06 = function getFee_06_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_06'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_07 = function getFee_07_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_07'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_08 = function getFee_08_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_08'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_09 = function getFee_09_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_09'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_10 = function getFee_10_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_10'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_11 = function getFee_11_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_11'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getFee_12 = function getFee_12_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'fee_12'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getId_0 = function getId_12(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getLogModifyDate = function getLogModifyDate_0(){
  return dynamicCast($getOrReify(this.this$0, 'logModifyDate'), Q$String);
}
;
_.getManagerName = function getManagerName_0(){
  return dynamicCast($getOrReify(this.this$0, 'managerName'), Q$String);
}
;
_.getProfActive = function getProfActive_0(){
  return dynamicCast($getOrReify(this.this$0, 'profActive'), Q$Boolean);
}
;
_.getProfName = function getProfName_2(){
  return dynamicCast($getOrReify(this.this$0, 'profName'), Q$String);
}
;
_.getTotal_01 = function getTotal_01_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_01'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_02 = function getTotal_02_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_02'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_03 = function getTotal_03_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_03'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_04 = function getTotal_04_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_04'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_05 = function getTotal_05_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_05'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_06 = function getTotal_06_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_06'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_07 = function getTotal_07_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_07'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_08 = function getTotal_08_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_08'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_09 = function getTotal_09_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_09'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_10 = function getTotal_10_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_10'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_11 = function getTotal_11_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_11'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.getTotal_12 = function getTotal_12_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'total_12'), Q$Double);
  return !toReturn?0:toReturn.value_0;
}
;
_.hashCode$ = function hashCode_39(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
_.setProfActive = function setProfActive_0(profActive){
  $setProperty(this.this$0, 'profActive', profActive);
}
;
function $$init_15(this$static){
  this$static.shim = new SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_15(this);
}

function SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_15(this);
}

defineSeed(1169, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_14(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_14(){
  return new SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_22(){
  return Lcom_lemania_timetracking_shared_SettingOptionProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_13(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = $getOptionName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'optionName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('optionName', value_0, propertyContext);
  value_0 = $getOptionValue(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'optionValue'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('optionValue', value_0, propertyContext);
}
;
function $getOptionName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$SettingOptionProxy).getOptionName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getOptionValue(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$SettingOptionProxy).getOptionValue();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1170, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$SettingOptionProxy]), SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_40(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$SettingOptionProxy).equals$(o);
}
;
_.getOptionName = function getOptionName(){
  return $getOptionName(this);
}
;
_.getOptionValue = function getOptionValue(){
  return $getOptionValue(this);
}
;
_.hashCode$ = function hashCode_40(){
  return dynamicCast($getWrapped(this.this$0), Q$SettingOptionProxy).hashCode$();
}
;
_.toString$ = function toString_32(){
  return dynamicCast($getWrapped(this.this$0), Q$SettingOptionProxy).toString$();
}
;
function SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1171, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$SettingOptionProxy]), SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_41(other){
  return equals_14(this.this$0, other);
}
;
_.getOptionName = function getOptionName_0(){
  return dynamicCast($getOrReify(this.this$0, 'optionName'), Q$String);
}
;
_.getOptionValue = function getOptionValue_0(){
  return dynamicCast($getOrReify(this.this$0, 'optionValue'), Q$String);
}
;
_.hashCode$ = function hashCode_41(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
function $$init_16(this$static){
  this$static.shim = new UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$static);
  setNative(this$static.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this$static);
}

function UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory){
  AbstractAutoBean_0.call(this, factory);
  $$init_16(this);
}

function UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  $$init_16(this);
}

defineSeed(1172, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0, UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1);
_.as = function as_15(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_15(){
  return new UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this);
}
;
_.getType_0 = function getType_23(){
  return Lcom_lemania_timetracking_shared_UserProxy_2_classLit;
}
;
_.traverseProperties = function traverseProperties_14(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = valueOf_1($getCurrentDay(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'currentDay'), I_classLit);
  visitor.visitValueProperty('currentDay', value_0, propertyContext);
  value_0 = valueOf_1($getCurrentMonth(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'currentMonth'), I_classLit);
  visitor.visitValueProperty('currentMonth', value_0, propertyContext);
  value_0 = valueOf_1($getCurrentYear(as));
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'currentYear'), I_classLit);
  visitor.visitValueProperty('currentYear', value_0, propertyContext);
  value_0 = $getActive_0(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'active'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('active', value_0, propertyContext);
  value_0 = $getAdmin(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'admin'), Ljava_lang_Boolean_2_classLit);
  visitor.visitValueProperty('admin', value_0, propertyContext);
  value_0 = $getId_8(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'id'), Ljava_lang_Long_2_classLit);
  visitor.visitValueProperty('id', value_0, propertyContext);
  value_0 = $getEmail(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'email'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('email', value_0, propertyContext);
  value_0 = $getFullName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'fullName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('fullName', value_0, propertyContext);
  value_0 = $getPassword(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'password'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('password', value_0, propertyContext);
  value_0 = $getUserName(as);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'userName'), Ljava_lang_String_2_classLit);
  visitor.visitValueProperty('userName', value_0, propertyContext);
}
;
function $getActive_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getActive();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getAdmin(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getAdmin();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Boolean);
  return toReturn;
}

function $getCurrentDay(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getCurrentDay();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getCurrentMonth(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getCurrentMonth();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getCurrentYear(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getCurrentYear();
  toReturn = dynamicCast(__intercept(this$static.this$0, valueOf_1(toReturn)), Q$Integer).value_0;
  return toReturn;
}

function $getEmail(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getEmail();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getFullName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getFullName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getId_8(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getId_0();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$Long);
  return toReturn;
}

function $getPassword(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getPassword();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function $getUserName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$UserProxy).getUserName();
  toReturn = dynamicCast(__intercept(this$static.this$0, toReturn), Q$String);
  return toReturn;
}

function UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1173, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$UserProxy]), UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1_0);
_.equals$ = function equals_42(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$UserProxy).equals$(o);
}
;
_.getActive = function getActive_1(){
  return $getActive_0(this);
}
;
_.getAdmin = function getAdmin(){
  return $getAdmin(this);
}
;
_.getCurrentDay = function getCurrentDay(){
  return $getCurrentDay(this);
}
;
_.getCurrentMonth = function getCurrentMonth(){
  return $getCurrentMonth(this);
}
;
_.getCurrentYear = function getCurrentYear(){
  return $getCurrentYear(this);
}
;
_.getEmail = function getEmail(){
  return $getEmail(this);
}
;
_.getFullName = function getFullName(){
  return $getFullName(this);
}
;
_.getId_0 = function getId_13(){
  return $getId_8(this);
}
;
_.getPassword = function getPassword(){
  return $getPassword(this);
}
;
_.getUserName = function getUserName(){
  return $getUserName(this);
}
;
_.hashCode$ = function hashCode_42(){
  return dynamicCast($getWrapped(this.this$0), Q$UserProxy).hashCode$();
}
;
_.toString$ = function toString_33(){
  return dynamicCast($getWrapped(this.this$0), Q$UserProxy).toString$();
}
;
function UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1174, 1, makeCastMap([Q$BaseProxy, Q$EntityProxy, Q$UserProxy]), UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2_0);
_.equals$ = function equals_43(other){
  return equals_14(this.this$0, other);
}
;
_.getActive = function getActive_2(){
  return dynamicCast($getOrReify(this.this$0, 'active'), Q$Boolean);
}
;
_.getAdmin = function getAdmin_0(){
  return dynamicCast($getOrReify(this.this$0, 'admin'), Q$Boolean);
}
;
_.getCurrentDay = function getCurrentDay_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'currentDay'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getCurrentMonth = function getCurrentMonth_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'currentMonth'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getCurrentYear = function getCurrentYear_0(){
  var toReturn;
  toReturn = dynamicCast($getOrReify(this.this$0, 'currentYear'), Q$Integer);
  return !toReturn?0:toReturn.value_0;
}
;
_.getEmail = function getEmail_0(){
  return dynamicCast($getOrReify(this.this$0, 'email'), Q$String);
}
;
_.getFullName = function getFullName_0(){
  return dynamicCast($getOrReify(this.this$0, 'fullName'), Q$String);
}
;
_.getId_0 = function getId_14(){
  return dynamicCast($getOrReify(this.this$0, 'id'), Q$Long);
}
;
_.getPassword = function getPassword_0(){
  return dynamicCast($getOrReify(this.this$0, 'password'), Q$String);
}
;
_.getUserName = function getUserName_0(){
  return dynamicCast($getOrReify(this.this$0, 'userName'), Q$String);
}
;
_.hashCode$ = function hashCode_43(){
  return dynamicCast($getTag(this.this$0, 'stableId'), Q$SimpleEntityProxyId).hashCode;
}
;
function $clinit_CoursRequestFactoryImpl(){
  $clinit_CoursRequestFactoryImpl = nullMethod;
  tokensToTypes_1 = new HashMap_0;
  typesToTokens_1 = new HashMap_0;
  entityProxyTypes_1 = new HashSet_0;
  valueProxyTypes_1 = new HashSet_0;
  tokensToTypes_1.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_1.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_17(entityProxyTypes_1, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_1.put('9A6Z0BBecsT3KkZYCXf_ZkIbd8M=', Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
  typesToTokens_1.put(Lcom_lemania_timetracking_shared_CoursProxy_2_classLit, '9A6Z0BBecsT3KkZYCXf_ZkIbd8M=');
  $add_17(entityProxyTypes_1, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}

function CoursRequestFactoryImpl_0(){
  $clinit_CoursRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1185, 622, {}, CoursRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_1(){
  return 'com.lemania.timetracking.shared.service.CoursRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_1(typeToken){
  return dynamicCast(tokensToTypes_1.get_2(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_5(type_0){
  return dynamicCast(typesToTokens_1.get_2(type_0), Q$String);
}
;
_.isEntityType = function isEntityType_2(type_0){
  return $contains_1(entityProxyTypes_1, type_0);
}
;
_.isValueType = function isValueType_2(type_0){
  return $contains_1(valueProxyTypes_1, type_0);
}
;
var entityProxyTypes_1, tokensToTypes_1, typesToTokens_1, valueProxyTypes_1;
function $listAll_0(this$static, ecoleId){
  var x_0;
  x_0 = new CoursRequestFactory_CoursRequestContextImpl$3X_0(this$static, ecoleId);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function CoursRequestFactory_CoursRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1186, 632, makeCastMap([Q$AbstractRequestContext]), CoursRequestFactory_CoursRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_1(){
  return !FACTORY_2 && (FACTORY_2 = new CoursRequestFactory_CoursRequestContextImpl_FactoryImpl_0) , FACTORY_2;
}
;
var FACTORY_2;
function CoursRequestFactory_CoursRequestContextImpl$3X_0(this$0, val$ecoleId){
  this.val$ecoleId = val$ecoleId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1187, 631, makeCastMap([Q$AbstractRequest]), CoursRequestFactory_CoursRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_3(){
  return new RequestData_0('BLIV222KyyIVKvUHXh4RiZPB5Sg=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$ecoleId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}
;
function $getConstructors_com_lemania_timetracking_shared_CoursProxy(){
  return [function(factory){
    return new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function CoursRequestFactory_CoursRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1190, 557, makeCastMap([Q$EnumMap]), CoursRequestFactory_CoursRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_2(map_0){
  $add_12(map_0, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_CoursProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_2(){
}
;
function $clinit_EcoleRequestFactoryImpl(){
  $clinit_EcoleRequestFactoryImpl = nullMethod;
  tokensToTypes_2 = new HashMap_0;
  typesToTokens_2 = new HashMap_0;
  entityProxyTypes_2 = new HashSet_0;
  valueProxyTypes_2 = new HashSet_0;
  tokensToTypes_2.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_2.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_17(entityProxyTypes_2, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_2.put('wEmO7GIXGVmYnHTr$bRzd1vhTHM=', Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit);
  typesToTokens_2.put(Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit, 'wEmO7GIXGVmYnHTr$bRzd1vhTHM=');
  $add_17(entityProxyTypes_2, Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit);
}

function EcoleRequestFactoryImpl_0(){
  $clinit_EcoleRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1191, 622, {}, EcoleRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_2(){
  return 'com.lemania.timetracking.shared.service.EcoleRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_2(typeToken){
  return dynamicCast(tokensToTypes_2.get_2(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_6(type_0){
  return dynamicCast(typesToTokens_2.get_2(type_0), Q$String);
}
;
_.isEntityType = function isEntityType_3(type_0){
  return $contains_1(entityProxyTypes_2, type_0);
}
;
_.isValueType = function isValueType_3(type_0){
  return $contains_1(valueProxyTypes_2, type_0);
}
;
var entityProxyTypes_2, tokensToTypes_2, typesToTokens_2, valueProxyTypes_2;
function $listAll_1(this$static){
  var x_0;
  x_0 = new EcoleRequestFactory_EcoleRequestContextImpl$2X_0(this$static);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function $listAllActive(this$static){
  var x_0;
  x_0 = new EcoleRequestFactory_EcoleRequestContextImpl$3X_0(this$static);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function EcoleRequestFactory_EcoleRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1192, 632, makeCastMap([Q$AbstractRequestContext]), EcoleRequestFactory_EcoleRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_2(){
  return !FACTORY_3 && (FACTORY_3 = new EcoleRequestFactory_EcoleRequestContextImpl_FactoryImpl_0) , FACTORY_3;
}
;
var FACTORY_3;
function EcoleRequestFactory_EcoleRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1193, 631, makeCastMap([Q$AbstractRequest]), EcoleRequestFactory_EcoleRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_6(){
  return new RequestData_0('8ASuoEZfzTuorFp4rjYOW8w8jYg=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit);
}
;
function EcoleRequestFactory_EcoleRequestContextImpl$3X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1194, 631, makeCastMap([Q$AbstractRequest]), EcoleRequestFactory_EcoleRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_7(){
  return new RequestData_0('q9tJw8kUfOpa_O6NMFAN2GJze$o=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit);
}
;
function $getConstructors_com_lemania_timetracking_shared_EcoleProxy(){
  return [function(factory){
    return new EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function EcoleRequestFactory_EcoleRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1197, 557, makeCastMap([Q$EnumMap]), EcoleRequestFactory_EcoleRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_3(map_0){
  $add_12(map_0, Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_EcoleProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_3(){
}
;
function $send_1(this$static, payload, receiver){
  var myReceiver;
  myReceiver = new EventSourceRequestTransport$1_0(this$static, receiver);
  try {
    $send_0(this$static.wrapped, payload, myReceiver);
  }
   finally {
    $doFire(this$static.eventBus, new ActionInProgressEvent_0, null);
  }
}

function EventSourceRequestTransport_0(eventBus){
  EventSourceRequestTransport_1.call(this, eventBus, new DefaultRequestTransport_0);
}

function EventSourceRequestTransport_1(eventBus, wrapped){
  this.eventBus = eventBus;
  this.wrapped = wrapped;
}

defineSeed(1198, 1, {}, EventSourceRequestTransport_0);
function $onTransportFailure_0(this$static, failure){
  try {
    $onTransportFailure(this$static.val$receiver, failure);
  }
   finally {
    $doFire(this$static.this$0.eventBus, new ActionCompletedEvent_0, null);
  }
}

function $onTransportSuccess_0(this$static, payload){
  try {
    $onTransportSuccess(this$static.val$receiver, payload);
  }
   finally {
    $doFire(this$static.this$0.eventBus, new ActionCompletedEvent_0, null);
  }
}

function EventSourceRequestTransport$1_0(this$0, val$receiver){
  this.this$0 = this$0;
  this.val$receiver = val$receiver;
}

defineSeed(1199, 1, {}, EventSourceRequestTransport$1_0);
function $clinit_LogRequestFactoryImpl(){
  $clinit_LogRequestFactoryImpl = nullMethod;
  tokensToTypes_3 = new HashMap_0;
  typesToTokens_3 = new HashMap_0;
  entityProxyTypes_3 = new HashSet_0;
  valueProxyTypes_3 = new HashSet_0;
  tokensToTypes_3.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_3.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_17(entityProxyTypes_3, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_3.put('16SpWH2YVyznesd8b4Pdep_GTzI=', Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
  typesToTokens_3.put(Lcom_lemania_timetracking_shared_LogProxy_2_classLit, '16SpWH2YVyznesd8b4Pdep_GTzI=');
  $add_17(entityProxyTypes_3, Lcom_lemania_timetracking_shared_LogProxy_2_classLit);
}

function LogRequestFactoryImpl_0(){
  $clinit_LogRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1200, 622, {}, LogRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_3(){
  return 'com.lemania.timetracking.shared.service.LogRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_3(typeToken){
  return dynamicCast(tokensToTypes_3.get_2(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_7(type_0){
  return dynamicCast(typesToTokens_3.get_2(type_0), Q$String);
}
;
_.isEntityType = function isEntityType_4(type_0){
  return $contains_1(entityProxyTypes_3, type_0);
}
;
_.isValueType = function isValueType_4(type_0){
  return $contains_1(valueProxyTypes_3, type_0);
}
;
var entityProxyTypes_3, tokensToTypes_3, typesToTokens_3, valueProxyTypes_3;
function LogRequestFactory_LogRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1201, 632, makeCastMap([Q$AbstractRequestContext]), LogRequestFactory_LogRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_3(){
  return !FACTORY_4 && (FACTORY_4 = new LogRequestFactory_LogRequestContextImpl_FactoryImpl_0) , FACTORY_4;
}
;
var FACTORY_4;
function $getConstructors_com_lemania_timetracking_shared_LogProxy(){
  return [function(factory){
    return new LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function LogRequestFactory_LogRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1209, 557, makeCastMap([Q$EnumMap]), LogRequestFactory_LogRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_4(map_0){
  $add_12(map_0, Lcom_lemania_timetracking_shared_LogProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_LogProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_4(){
}
;
function $clinit_LogTypeRequestFactoryImpl(){
  $clinit_LogTypeRequestFactoryImpl = nullMethod;
  tokensToTypes_4 = new HashMap_0;
  typesToTokens_4 = new HashMap_0;
  entityProxyTypes_4 = new HashSet_0;
  valueProxyTypes_4 = new HashSet_0;
  tokensToTypes_4.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_4.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_17(entityProxyTypes_4, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_4.put('ML1FfLRPAgqTS9_67fKg1FOfeok=', Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit);
  typesToTokens_4.put(Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit, 'ML1FfLRPAgqTS9_67fKg1FOfeok=');
  $add_17(entityProxyTypes_4, Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit);
}

function LogTypeRequestFactoryImpl_0(){
  $clinit_LogTypeRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1210, 622, {}, LogTypeRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_4(){
  return 'com.lemania.timetracking.shared.service.LogTypeRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_4(typeToken){
  return dynamicCast(tokensToTypes_4.get_2(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_8(type_0){
  return dynamicCast(typesToTokens_4.get_2(type_0), Q$String);
}
;
_.isEntityType = function isEntityType_5(type_0){
  return $contains_1(entityProxyTypes_4, type_0);
}
;
_.isValueType = function isValueType_5(type_0){
  return $contains_1(valueProxyTypes_4, type_0);
}
;
var entityProxyTypes_4, tokensToTypes_4, typesToTokens_4, valueProxyTypes_4;
function LogTypeRequestFactory_LogTypeRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1211, 632, makeCastMap([Q$AbstractRequestContext]), LogTypeRequestFactory_LogTypeRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_4(){
  return !FACTORY_5 && (FACTORY_5 = new LogTypeRequestFactory_LogTypeRequestContextImpl_FactoryImpl_0) , FACTORY_5;
}
;
var FACTORY_5;
function $getConstructors_com_lemania_timetracking_shared_LogTypeProxy(){
  return [function(factory){
    return new LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function LogTypeRequestFactory_LogTypeRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1215, 557, makeCastMap([Q$EnumMap]), LogTypeRequestFactory_LogTypeRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_5(map_0){
  $add_12(map_0, Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_LogTypeProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_5(){
}
;
function $clinit_ProfessorRequestFactoryImpl(){
  $clinit_ProfessorRequestFactoryImpl = nullMethod;
  tokensToTypes_5 = new HashMap_0;
  typesToTokens_5 = new HashMap_0;
  entityProxyTypes_5 = new HashSet_0;
  valueProxyTypes_5 = new HashSet_0;
  tokensToTypes_5.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_5.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_17(entityProxyTypes_5, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_5.put('QVZ$sjfjvTS6fRjG5V4DJUTmz2M=', Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
  typesToTokens_5.put(Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit, 'QVZ$sjfjvTS6fRjG5V4DJUTmz2M=');
  $add_17(entityProxyTypes_5, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
  tokensToTypes_5.put('9A6Z0BBecsT3KkZYCXf_ZkIbd8M=', Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
  typesToTokens_5.put(Lcom_lemania_timetracking_shared_CoursProxy_2_classLit, '9A6Z0BBecsT3KkZYCXf_ZkIbd8M=');
  $add_17(entityProxyTypes_5, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}

function ProfessorRequestFactoryImpl_0(){
  $clinit_ProfessorRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1216, 622, {}, ProfessorRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_5(){
  return 'com.lemania.timetracking.shared.service.ProfessorRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_5(typeToken){
  return dynamicCast(tokensToTypes_5.get_2(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_9(type_0){
  return dynamicCast(typesToTokens_5.get_2(type_0), Q$String);
}
;
_.isEntityType = function isEntityType_6(type_0){
  return $contains_1(entityProxyTypes_5, type_0);
}
;
_.isValueType = function isValueType_6(type_0){
  return $contains_1(valueProxyTypes_5, type_0);
}
;
var entityProxyTypes_5, tokensToTypes_5, typesToTokens_5, valueProxyTypes_5;
function $listAllActive_0(this$static, active){
  var x_0;
  x_0 = new ProfessorRequestFactory_ProfessorRequestContextImpl$3X_0(this$static, active);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function ProfessorRequestFactory_ProfessorRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1217, 632, makeCastMap([Q$AbstractRequestContext]), ProfessorRequestFactory_ProfessorRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_5(){
  return !FACTORY_6 && (FACTORY_6 = new ProfessorRequestFactory_ProfessorRequestContextImpl_FactoryImpl_0) , FACTORY_6;
}
;
var FACTORY_6;
function ProfessorRequestFactory_ProfessorRequestContextImpl$3X_0(this$0, val$active){
  this.val$active = val$active;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1220, 631, makeCastMap([Q$AbstractRequest]), ProfessorRequestFactory_ProfessorRequestContextImpl$3X_0);
_.makeRequestData = function makeRequestData_22(){
  return new RequestData_0('oY1IS4WJEW8Vu8$ZlpCgUnGA1AI=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$active]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit);
}
;
function $getConstructors_com_lemania_timetracking_shared_CoursProxy_0(){
  return [function(factory){
    return new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_lemania_timetracking_shared_ProfessorProxy(){
  return [function(factory){
    return new ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function ProfessorRequestFactory_ProfessorRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1224, 557, makeCastMap([Q$EnumMap]), ProfessorRequestFactory_ProfessorRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_6(map_0){
  $add_12(map_0, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_CoursProxy_0());
  $add_12(map_0, Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_ProfessorProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_6(){
}
;
function $clinit_SettingOptionRequestFactoryImpl(){
  $clinit_SettingOptionRequestFactoryImpl = nullMethod;
  tokensToTypes_6 = new HashMap_0;
  typesToTokens_6 = new HashMap_0;
  entityProxyTypes_6 = new HashSet_0;
  valueProxyTypes_6 = new HashSet_0;
  tokensToTypes_6.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_6.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_17(entityProxyTypes_6, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_6.put('XExGMRoBOuid61Pt3s2oU9wTiXw=', Lcom_lemania_timetracking_shared_SettingOptionProxy_2_classLit);
  typesToTokens_6.put(Lcom_lemania_timetracking_shared_SettingOptionProxy_2_classLit, 'XExGMRoBOuid61Pt3s2oU9wTiXw=');
  $add_17(entityProxyTypes_6, Lcom_lemania_timetracking_shared_SettingOptionProxy_2_classLit);
}

function SettingOptionRequestFactoryImpl_0(){
  $clinit_SettingOptionRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1225, 622, {}, SettingOptionRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_6(){
  return 'com.lemania.timetracking.shared.service.SettingOptionRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_6(typeToken){
  return dynamicCast(tokensToTypes_6.get_2(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_10(type_0){
  return dynamicCast(typesToTokens_6.get_2(type_0), Q$String);
}
;
_.isEntityType = function isEntityType_7(type_0){
  return $contains_1(entityProxyTypes_6, type_0);
}
;
_.isValueType = function isValueType_7(type_0){
  return $contains_1(valueProxyTypes_6, type_0);
}
;
var entityProxyTypes_6, tokensToTypes_6, typesToTokens_6, valueProxyTypes_6;
function $listAll_3(this$static){
  var x_0;
  x_0 = new SettingOptionRequestFactory_SettingOptionRequestContextImpl$2X_0(this$static);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function SettingOptionRequestFactory_SettingOptionRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1226, 632, makeCastMap([Q$AbstractRequestContext]), SettingOptionRequestFactory_SettingOptionRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_6(){
  return !FACTORY_7 && (FACTORY_7 = new SettingOptionRequestFactory_SettingOptionRequestContextImpl_FactoryImpl_0) , FACTORY_7;
}
;
var FACTORY_7;
function SettingOptionRequestFactory_SettingOptionRequestContextImpl$2X_0(this$0){
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1227, 631, makeCastMap([Q$AbstractRequest]), SettingOptionRequestFactory_SettingOptionRequestContextImpl$2X_0);
_.makeRequestData = function makeRequestData_26(){
  return new RequestData_0('FraVUXZHouisEv8pV$yhCOfbRV0=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, []), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_SettingOptionProxy_2_classLit);
}
;
function $getConstructors_com_lemania_timetracking_shared_SettingOptionProxy(){
  return [function(factory){
    return new SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function SettingOptionRequestFactory_SettingOptionRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1229, 557, makeCastMap([Q$EnumMap]), SettingOptionRequestFactory_SettingOptionRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_7(map_0){
  $add_12(map_0, Lcom_lemania_timetracking_shared_SettingOptionProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_SettingOptionProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_7(){
}
;
function $clinit_UserRequestFactoryImpl(){
  $clinit_UserRequestFactoryImpl = nullMethod;
  tokensToTypes_7 = new HashMap_0;
  typesToTokens_7 = new HashMap_0;
  entityProxyTypes_7 = new HashSet_0;
  valueProxyTypes_7 = new HashSet_0;
  tokensToTypes_7.put('w1Qg$YHpDaNcHrR5HZ$23y518nA=', Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  typesToTokens_7.put(Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit, 'w1Qg$YHpDaNcHrR5HZ$23y518nA=');
  $add_17(entityProxyTypes_7, Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit);
  tokensToTypes_7.put('xkktZ4bhcx2gajD5uxoicWtJ63A=', Lcom_lemania_timetracking_shared_UserProxy_2_classLit);
  typesToTokens_7.put(Lcom_lemania_timetracking_shared_UserProxy_2_classLit, 'xkktZ4bhcx2gajD5uxoicWtJ63A=');
  $add_17(entityProxyTypes_7, Lcom_lemania_timetracking_shared_UserProxy_2_classLit);
  tokensToTypes_7.put('9A6Z0BBecsT3KkZYCXf_ZkIbd8M=', Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
  typesToTokens_7.put(Lcom_lemania_timetracking_shared_CoursProxy_2_classLit, '9A6Z0BBecsT3KkZYCXf_ZkIbd8M=');
  $add_17(entityProxyTypes_7, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}

function UserRequestFactoryImpl_0(){
  $clinit_UserRequestFactoryImpl();
  AbstractClientRequestFactory_0.call(this);
}

defineSeed(1230, 622, {}, UserRequestFactoryImpl_0);
_.getFactoryTypeToken = function getFactoryTypeToken_7(){
  return 'com.lemania.timetracking.shared.service.UserRequestFactory';
}
;
_.getTypeFromToken = function getTypeFromToken_7(typeToken){
  return dynamicCast(tokensToTypes_7.get_2(typeToken), Q$Class);
}
;
_.getTypeToken = function getTypeToken_11(type_0){
  return dynamicCast(typesToTokens_7.get_2(type_0), Q$String);
}
;
_.isEntityType = function isEntityType_8(type_0){
  return $contains_1(entityProxyTypes_7, type_0);
}
;
_.isValueType = function isValueType_8(type_0){
  return $contains_1(valueProxyTypes_7, type_0);
}
;
var entityProxyTypes_7, tokensToTypes_7, typesToTokens_7, valueProxyTypes_7;
function $getDepartments(this$static, userId){
  var x_0;
  x_0 = new UserRequestFactory_UserRequestContextImpl$5X_0(this$static, userId);
  $addInvocation(this$static.state.dialect, x_0);
  return x_0;
}

function UserRequestFactory_UserRequestContextImpl_0(requestFactory){
  $clinit_AbstractRequestContext();
  AbstractRequestContext_0.call(this, requestFactory, $clinit_AbstractRequestContext$Dialect());
}

defineSeed(1231, 632, makeCastMap([Q$AbstractRequestContext]), UserRequestFactory_UserRequestContextImpl_0);
_.getAutoBeanFactory = function getAutoBeanFactory_7(){
  return !FACTORY_8 && (FACTORY_8 = new UserRequestFactory_UserRequestContextImpl_FactoryImpl_0) , FACTORY_8;
}
;
var FACTORY_8;
function UserRequestFactory_UserRequestContextImpl$5X_0(this$0, val$userId){
  this.val$userId = val$userId;
  AbstractRequest_0.call(this, this$0);
}

defineSeed(1237, 631, makeCastMap([Q$AbstractRequest]), UserRequestFactory_UserRequestContextImpl$5X_0);
_.makeRequestData = function makeRequestData_33(){
  return new RequestData_0('I1lBOSuCVYDw1Q0QreANcbgT824=', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [this.val$userId]), this.propertyRefs, Ljava_util_List_2_classLit, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit);
}
;
function $getConstructors_com_lemania_timetracking_shared_CoursProxy_1(){
  return [function(factory){
    return new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function $getConstructors_com_lemania_timetracking_shared_UserProxy(){
  return [function(factory){
    return new UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_0(factory);
  }
  , function(factory, wrapped){
    return new UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory_1(factory, wrapped);
  }
  ];
}

function UserRequestFactory_UserRequestContextImpl_FactoryImpl_0(){
}

defineSeed(1240, 557, makeCastMap([Q$EnumMap]), UserRequestFactory_UserRequestContextImpl_FactoryImpl_0);
_.initializeCreatorMap = function initializeCreatorMap_8(map_0){
  $add_12(map_0, Lcom_lemania_timetracking_shared_CoursProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_CoursProxy_1());
  $add_12(map_0, Lcom_lemania_timetracking_shared_UserProxy_2_classLit, $getConstructors_com_lemania_timetracking_shared_UserProxy());
}
;
_.initializeEnumMap = function initializeEnumMap_8(){
}
;
function CollectionAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new CollectionAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1241, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), CollectionAutoBean_0);
_.as = function as_16(){
  return this.shim;
}
;
_.getType_0 = function getType_24(){
  return Ljava_util_Collection_2_classLit;
}
;
_.traverseProperties = function traverseProperties_15(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $isEmpty_1(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'empty'), Z_classLit);
  visitor.visitValueProperty('empty', value_0, propertyContext);
}
;
function $isEmpty_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Collection).isEmpty_0();
  return toReturn;
}

function CollectionAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1242, 1, makeCastMap([Q$Iterable, Q$Collection]), CollectionAutoBean$1_0);
_.add_1 = function add_9(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Collection).add_1(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.contains_0 = function contains_1(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Collection).contains_0(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.equals$ = function equals_44(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$Collection).equals$(o);
}
;
_.hashCode$ = function hashCode_44(){
  return dynamicCast($getWrapped(this.this$0), Q$Collection).hashCode$();
}
;
_.isEmpty_0 = function isEmpty_4(){
  return $isEmpty_1(this);
}
;
_.iterator = function iterator_13(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Collection).iterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Iterator)):(toReturn = (new IteratorAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.size_1 = function size_13(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Collection).size_1();
  valueOf_1(toReturn);
  return toReturn;
}
;
_.toArray = function toArray_2(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Collection).toArray();
  return toReturn;
}
;
_.toString$ = function toString_34(){
  return dynamicCast($getWrapped(this.this$0), Q$Collection).toString$();
}
;
function IteratorAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new IteratorAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1243, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), IteratorAutoBean_0);
_.as = function as_17(){
  return this.shim;
}
;
_.getType_0 = function getType_25(){
  return Ljava_util_Iterator_2_classLit;
}
;
_.traverseProperties = function traverseProperties_16(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $hasNext(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'next'), Z_classLit);
  visitor.visitValueProperty('next', value_0, propertyContext);
}
;
function $hasNext(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Iterator).hasNext();
  return toReturn;
}

function IteratorAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1244, 1, makeCastMap([Q$Iterator]), IteratorAutoBean$1_0);
_.equals$ = function equals_45(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$Iterator).equals$(o);
}
;
_.hasNext = function hasNext_8(){
  return $hasNext(this);
}
;
_.hashCode$ = function hashCode_45(){
  return dynamicCast($getWrapped(this.this$0), Q$Iterator).hashCode$();
}
;
_.next_0 = function next_9(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Iterator).next_0();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.remove_0 = function remove_31(){
  dynamicCast($getWrapped(this.this$0), Q$Iterator).remove_0();
}
;
_.toString$ = function toString_35(){
  return dynamicCast($getWrapped(this.this$0), Q$Iterator).toString$();
}
;
function ListAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new ListAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1245, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ListAutoBean_0);
_.as = function as_18(){
  return this.shim;
}
;
_.getType_0 = function getType_26(){
  return Ljava_util_List_2_classLit;
}
;
_.traverseProperties = function traverseProperties_17(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $isEmpty_2(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'empty'), Z_classLit);
  visitor.visitValueProperty('empty', value_0, propertyContext);
}
;
function $isEmpty_2(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$List).isEmpty_0();
  return toReturn;
}

function ListAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1246, 1, makeCastMap([Q$Iterable, Q$Collection, Q$List]), ListAutoBean$1_0);
_.add_1 = function add_11(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).add_1(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.clear_0 = function clear_4(){
  dynamicCast($getWrapped(this.this$0), Q$List).clear_0();
}
;
_.contains_0 = function contains_2(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).contains_0(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.equals$ = function equals_46(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$List).equals$(o);
}
;
_.get_1 = function get_31(index_0){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).get_1(index_0);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(index_0)]);
  return toReturn;
}
;
_.hashCode$ = function hashCode_46(){
  return dynamicCast($getWrapped(this.this$0), Q$List).hashCode$();
}
;
_.indexOf_0 = function indexOf_1(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).indexOf_0(o);
  valueOf_1(toReturn);
  return toReturn;
}
;
_.isEmpty_0 = function isEmpty_5(){
  return $isEmpty_2(this);
}
;
_.iterator = function iterator_14(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).iterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Iterator)):(toReturn = (new IteratorAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.listIterator = function listIterator_3(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).listIterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$ListIterator)):(toReturn = (new ListIteratorAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.listIterator_0 = function listIterator_4(from){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).listIterator_0(from);
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$ListIterator)):(toReturn = (new ListIteratorAutoBean_0(this.this$0.factory, toReturn)).shim));
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(from)]);
  return toReturn;
}
;
_.remove_1 = function remove_32(index_0){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).remove_1(index_0);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(index_0)]);
  return toReturn;
}
;
_.remove_2 = function remove_33(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).remove_2(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.size_1 = function size_14(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).size_1();
  valueOf_1(toReturn);
  return toReturn;
}
;
_.subList = function subList_1(fromIndex, toIndex){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).subList(fromIndex, toIndex);
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$List)):(toReturn = (new ListAutoBean_0(this.this$0.factory, toReturn)).shim));
  initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [valueOf_1(fromIndex), valueOf_1(toIndex)]);
  return toReturn;
}
;
_.toArray = function toArray_3(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$List).toArray();
  return toReturn;
}
;
_.toString$ = function toString_36(){
  return dynamicCast($getWrapped(this.this$0), Q$List).toString$();
}
;
function ListIteratorAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new ListIteratorAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1247, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), ListIteratorAutoBean_0);
_.as = function as_19(){
  return this.shim;
}
;
_.getType_0 = function getType_27(){
  return Ljava_util_ListIterator_2_classLit;
}
;
_.traverseProperties = function traverseProperties_18(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $hasNext_0(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'next'), Z_classLit);
  visitor.visitValueProperty('next', value_0, propertyContext);
  value_0 = $hasPrevious(as)?TRUE_1:FALSE_1;
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'previous'), Z_classLit);
  visitor.visitValueProperty('previous', value_0, propertyContext);
}
;
function $hasNext_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ListIterator).hasNext();
  return toReturn;
}

function $hasPrevious(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$ListIterator).hasPrevious();
  return toReturn;
}

function ListIteratorAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1248, 1, makeCastMap([Q$Iterator, Q$ListIterator]), ListIteratorAutoBean$1_0);
_.equals$ = function equals_47(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$ListIterator).equals$(o);
}
;
_.hasNext = function hasNext_9(){
  return $hasNext_0(this);
}
;
_.hasPrevious = function hasPrevious_0(){
  return $hasPrevious(this);
}
;
_.hashCode$ = function hashCode_47(){
  return dynamicCast($getWrapped(this.this$0), Q$ListIterator).hashCode$();
}
;
_.next_0 = function next_10(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$ListIterator).next_0();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.previous = function previous_1(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$ListIterator).previous();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.remove_0 = function remove_34(){
  dynamicCast($getWrapped(this.this$0), Q$ListIterator).remove_0();
}
;
_.toString$ = function toString_37(){
  return dynamicCast($getWrapped(this.this$0), Q$ListIterator).toString$();
}
;
function MapAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new MapAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1249, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), MapAutoBean_0);
_.as = function as_20(){
  return this.shim;
}
;
_.getType_0 = function getType_28(){
  return Ljava_util_Map_2_classLit;
}
;
_.traverseProperties = function traverseProperties_19(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $isEmpty_3(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'empty'), Z_classLit);
  visitor.visitValueProperty('empty', value_0, propertyContext);
}
;
function $isEmpty_3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Map).isEmpty_0();
  return toReturn;
}

function MapAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1250, 1, makeCastMap([Q$Map]), MapAutoBean$1_0);
_.containsKey = function containsKey_4(key_0){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).containsKey(key_0);
  $clinit_Boolean();
  return toReturn;
}
;
_.entrySet_0 = function entrySet_4(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).entrySet_0();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Set)):(toReturn = (new SetAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.equals$ = function equals_48(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$Map).equals$(o);
}
;
_.get_2 = function get_32(key_0){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).get_2(key_0);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.hashCode$ = function hashCode_48(){
  return dynamicCast($getWrapped(this.this$0), Q$Map).hashCode$();
}
;
_.isEmpty_0 = function isEmpty_6(){
  return $isEmpty_3(this);
}
;
_.keySet_0 = function keySet_2(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).keySet_0();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Set)):(toReturn = (new SetAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.put = function put_4(key_0, value_0){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).put(key_0, value_0);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.remove_3 = function remove_35(key_0){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).remove_3(key_0);
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}
;
_.size_1 = function size_15(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Map).size_1();
  valueOf_1(toReturn);
  return toReturn;
}
;
_.toString$ = function toString_38(){
  return dynamicCast($getWrapped(this.this$0), Q$Map).toString$();
}
;
function Map_EntryAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new Map_EntryAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1251, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), Map_EntryAutoBean_0);
_.as = function as_21(){
  return this.shim;
}
;
_.getType_0 = function getType_29(){
  return Ljava_util_Map$Entry_2_classLit;
}
;
_.traverseProperties = function traverseProperties_20(visitor, ctx){
  var as, bean, propertyContext;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getKey_0(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'key'), Ljava_lang_Object_2_classLit);
  visitor.visitReferenceProperty('key', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  bean = dynamicCast(getAutoBean($getValue_3(as)), Q$AbstractAutoBean);
  propertyContext = new ClientPropertyContext_0(as, as.setValue, Ljava_lang_Object_2_classLit);
  visitor.visitReferenceProperty('value', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
function $getKey_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Map$Entry).getKey();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}

function $getValue_3(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Map$Entry).getValue_0();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as());
  return toReturn;
}

function Map_EntryAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1252, 1, makeCastMap([Q$Map$Entry]), Map_EntryAutoBean$1_0);
_.equals$ = function equals_49(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$Map$Entry).equals$(o);
}
;
_.getKey = function getKey_1(){
  return $getKey_0(this);
}
;
_.getValue_0 = function getValue_37(){
  return $getValue_3(this);
}
;
_.hashCode$ = function hashCode_49(){
  return dynamicCast($getWrapped(this.this$0), Q$Map$Entry).hashCode$();
}
;
_.setValue = function setValue_1(value_0){
  dynamicCast($getWrapped(this.this$0), Q$Map$Entry).setValue(value_0);
  return this;
}
;
_.toString$ = function toString_39(){
  return dynamicCast($getWrapped(this.this$0), Q$Map$Entry).toString$();
}
;
function SetAutoBean_0(factory, wrapped){
  AbstractAutoBean_2.call(this, wrapped, factory);
  this.shim = new SetAutoBean$1_0(this);
  setNative(this.shim, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName, this);
}

defineSeed(1253, 585, makeCastMap([Q$AutoBean, Q$AbstractAutoBean, Q$HasSplittable]), SetAutoBean_0);
_.as = function as_22(){
  return this.shim;
}
;
_.getType_0 = function getType_30(){
  return Ljava_util_Set_2_classLit;
}
;
_.traverseProperties = function traverseProperties_21(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $isEmpty_4(as)?TRUE_1:FALSE_1);
  propertyContext = new ClientPropertyContext_0(as, beanSetter(this, 'empty'), Z_classLit);
  visitor.visitValueProperty('empty', value_0, propertyContext);
}
;
function $isEmpty_4(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$0), Q$Set).isEmpty_0();
  return toReturn;
}

function SetAutoBean$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1254, 1, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), SetAutoBean$1_0);
_.add_1 = function add_12(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Set).add_1(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.contains_0 = function contains_3(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Set).contains_0(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.equals$ = function equals_50(o){
  return this === o || dynamicCast($getWrapped(this.this$0), Q$Set).equals$(o);
}
;
_.hashCode$ = function hashCode_50(){
  return dynamicCast($getWrapped(this.this$0), Q$Set).hashCode$();
}
;
_.isEmpty_0 = function isEmpty_7(){
  return $isEmpty_4(this);
}
;
_.iterator = function iterator_15(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Set).iterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), Q$AutoBean)).as(), Q$Iterator)):(toReturn = (new IteratorAutoBean_0(this.this$0.factory, toReturn)).shim));
  return toReturn;
}
;
_.size_1 = function size_16(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Set).size_1();
  valueOf_1(toReturn);
  return toReturn;
}
;
_.toArray = function toArray_4(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$0), Q$Set).toArray();
  return toReturn;
}
;
_.toString$ = function toString_40(){
  return dynamicCast($getWrapped(this.this$0), Q$Set).toString$();
}
;
function ArithmeticException_0(){
  RuntimeException_1.call(this, 'divide by zero');
}

defineSeed(1255, 97, makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]), ArithmeticException_0);
function ArrayIndexOutOfBoundsException_0(index_0){
  IndexOutOfBoundsException_1.call(this, 'Array index ' + index_0 + ' out of range');
}

defineSeed(1256, 1257, makeCastMap([Q$Serializable, Q$Exception, Q$IndexOutOfBoundsException, Q$RuntimeException, Q$Throwable]), ArrayIndexOutOfBoundsException_0);
function ArrayStoreException_1(message){
  RuntimeException_1.call(this, message);
}

defineSeed(1258, 97, makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]), ArrayStoreException_1);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException_0('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException_0('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new NumberFormatException_0('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw new NumberFormatException_0('For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseAndValidateLong(s){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw new NumberFormatException_0('null');
  }
  orig = s;
  length_0 = s.length;
  negative = false;
  if (length_0 > 0) {
    c = s.charCodeAt(0);
    if (c == 45 || c == 43) {
      s = $substring(s, 1);
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw new NumberFormatException_0('For input string: "' + orig + '"');
  }
  while (s.length > 0 && s.charCodeAt(0) == 48) {
    s = $substring(s, 1);
    --length_0;
  }
  if (length_0 > ($clinit_Number$__ParseLong() , maxLengthForRadix)[10]) {
    throw new NumberFormatException_0('For input string: "' + orig + '"');
  }
  for (i = 0; i < length_0; i++) {
    c = s.charCodeAt(i);
    if (c >= 48 && c < 58) {
      continue;
    }
    if (c >= 97 && c < 97) {
      continue;
    }
    if (c >= 65 && c < 65) {
      continue;
    }
    throw new NumberFormatException_0('For input string: "' + orig + '"');
  }
  toReturn = P0_longLit;
  maxDigits = maxDigitsForRadix[10];
  radixPower = fromInt(maxDigitsRadixPower[10]);
  minValue = neg(maxValueForRadix[10]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = fromInt(-__parseInt($substring_0(s, 0, head), 10));
    s = $substring(s, head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = __parseInt($substring_0(s, 0, maxDigits), 10);
    s = $substring(s, maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (lt(toReturn, minValue)) {
        throw new NumberFormatException_0(s);
      }
      toReturn = mul(toReturn, radixPower);
    }
    toReturn = sub_0(toReturn, fromInt(head));
  }
  if (gt(toReturn, P0_longLit)) {
    throw new NumberFormatException_0('For input string: "' + orig + '"');
  }
  if (!negative) {
    toReturn = neg(toReturn);
    if (lt(toReturn, P0_longLit)) {
      throw new NumberFormatException_0('For input string: "' + orig + '"');
    }
  }
  return toReturn;
}

function __parseInt(s, radix){
  return parseInt(s, radix);
}

function Byte_0(value_0){
  this.value_0 = value_0;
}

function valueOf(b){
  var rebase, result;
  rebase = b + 128;
  result = ($clinit_Byte$BoxedValues() , boxedValues_0)[rebase];
  !result && (result = boxedValues_0[rebase] = new Byte_0(b));
  return result;
}

defineSeed(1260, 1261, makeCastMap([Q$Serializable, Q$Byte, Q$Comparable, Q$Number]), Byte_0);
_.equals$ = function equals_52(o){
  return instanceOf(o, Q$Byte) && dynamicCast(o, Q$Byte).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_52(){
  return this.value_0;
}
;
_.toString$ = function toString_42(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = nullMethod;
  boxedValues_0 = initDim(_3Ljava_lang_Byte_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Byte, 256, 0);
}

var boxedValues_0;
function Character_0(value_0){
  this.value_0 = value_0;
}

function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function valueOf_0(c){
  var result;
  if (c < 128) {
    result = ($clinit_Character$BoxedValues() , boxedValues_1)[c];
    !result && (result = boxedValues_1[c] = new Character_0(c));
    return result;
  }
  return new Character_0(c);
}

defineSeed(1263, 1, makeCastMap([Q$Serializable, Q$Character, Q$Comparable]), Character_0);
_.equals$ = function equals_53(o){
  return instanceOf(o, Q$Character) && dynamicCast(o, Q$Character).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_53(){
  return this.value_0;
}
;
_.toString$ = function toString_43(){
  return valueOf_4(this.value_0);
}
;
_.value_0 = 0;
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = nullMethod;
  boxedValues_1 = initDim(_3Ljava_lang_Character_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Character, 128, 0);
}

var boxedValues_1;
function $getEnumConstants(this$static){
  return this$static.enumConstantsFunc && this$static.enumConstantsFunc();
}

function Double_0(value_0){
  this.value_0 = value_0;
}

function isNaN_0(x_0){
  return isNaN(x_0);
}

defineSeed(1267, 1261, makeCastMap([Q$Serializable, Q$Comparable, Q$Double, Q$Number]), Double_0);
_.equals$ = function equals_54(o){
  return instanceOf(o, Q$Double) && dynamicCast(o, Q$Double).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_54(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_45(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
function Float_0(value_0){
  this.value_0 = value_0;
}

defineSeed(1268, 1261, makeCastMap([Q$Serializable, Q$Comparable, Q$Float, Q$Number]), Float_0);
_.equals$ = function equals_55(o){
  return instanceOf(o, Q$Float) && dynamicCast(o, Q$Float).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_55(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_46(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
function IllegalArgumentException_0(){
  RuntimeException_0.call(this);
}

defineSeed(1269, 97, makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]), IllegalArgumentException_0);
function numberOfLeadingZeros_0(i){
  var m_0, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m_0 = y_0 >> 16 & 16;
    n = 16 - m_0;
    i = i >> m_0;
    y_0 = i - 256;
    m_0 = y_0 >> 16 & 8;
    n += m_0;
    i <<= m_0;
    y_0 = i - 4096;
    m_0 = y_0 >> 16 & 4;
    n += m_0;
    i <<= m_0;
    y_0 = i - 16384;
    m_0 = y_0 >> 16 & 2;
    n += m_0;
    i <<= m_0;
    y_0 = i >> 14;
    m_0 = y_0 & ~(y_0 >> 1);
    return n + 2 - m_0;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function Long_0(value_0){
  this.value_0 = value_0;
}

function valueOf_2(i){
  var rebase, result;
  if (gt(i, N81_longLit) && lt(i, P80_longLit)) {
    rebase = toInt(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_3)[rebase];
    !result && (result = boxedValues_3[rebase] = new Long_0(i));
    return result;
  }
  return new Long_0(i);
}

defineSeed(1273, 1261, makeCastMap([Q$Serializable, Q$Comparable, Q$Long, Q$Number]), Long_0);
_.equals$ = function equals_57(o){
  return instanceOf(o, Q$Long) && eq(dynamicCast(o, Q$Long).value_0, this.value_0);
}
;
_.hashCode$ = function hashCode_57(){
  return toInt(this.value_0);
}
;
_.toString$ = function toString_48(){
  return '' + toString_6(this.value_0);
}
;
_.value_0 = P0_longLit;
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = nullMethod;
  boxedValues_3 = initDim(_3Ljava_lang_Long_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Long, 256, 0);
}

var boxedValues_3;
function abs_0(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function floor_0(x_0){
  return Math.floor(x_0);
}

function pow_0(x_0, exp_0){
  return Math.pow(x_0, exp_0);
}

function round0(x_0){
  return Math.round(x_0);
}

function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = nullMethod;
  var i;
  maxDigitsForRadix = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  maxDigitsRadixPower = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 37, 1);
  maxLengthForRadix = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  maxValueForRadix = initDim(_3J_classLit, makeCastMap([Q$Serializable]), -1, 37, 3);
  for (i = 2; i <= 36; i++) {
    maxDigitsRadixPower[i] = round_int(pow_0(i, maxDigitsForRadix[i]));
    maxValueForRadix[i] = div_0(P7fffffffffffffff_longLit, fromInt(maxDigitsRadixPower[i]));
  }
}

var maxDigitsForRadix, maxDigitsRadixPower, maxLengthForRadix, maxValueForRadix;
function NumberFormatException_0(message){
  IllegalArgumentException_1.call(this, message);
}

defineSeed(1279, 1269, makeCastMap([Q$Serializable, Q$Exception, Q$NumberFormatException, Q$RuntimeException, Q$Throwable]), NumberFormatException_0);
function Short_0(value_0){
  this.value_0 = value_0;
}

function valueOf_3(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = ($clinit_Short$BoxedValues() , boxedValues_4)[rebase];
    !result && (result = boxedValues_4[rebase] = new Short_0(s));
    return result;
  }
  return new Short_0(s);
}

defineSeed(1280, 1261, makeCastMap([Q$Serializable, Q$Comparable, Q$Number, Q$Short]), Short_0);
_.equals$ = function equals_58(o){
  return instanceOf(o, Q$Short) && dynamicCast(o, Q$Short).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_58(){
  return this.value_0;
}
;
_.toString$ = function toString_49(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = nullMethod;
  boxedValues_4 = initDim(_3Ljava_lang_Short_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Short, 256, 0);
}

var boxedValues_4;
function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function __checkBounds(legalCount, start_0, end){
  if (start_0 < 0) {
    throw new StringIndexOutOfBoundsException_0(start_0);
  }
  if (end < start_0) {
    throw new StringIndexOutOfBoundsException_0(end - start_0);
  }
  if (end > legalCount) {
    throw new StringIndexOutOfBoundsException_0(end);
  }
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = $substring_0(replaceStr, 0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = $substring_0(replaceStr, 0, pos) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function valueOf_5(x_0, offset, count){
  var end;
  end = offset + count;
  __checkBounds(x_0.length, offset, end);
  return __valueOf(x_0, offset, end);
}

function $append_7(this$static, x_0){
  $appendNonNull(this$static.impl, valueOf_4(x_0));
  return this$static;
}

function $append_8(this$static, x_0){
  $append(this$static.impl, x_0);
  return this$static;
}

function $append_9(this$static, x_0){
  $append_0(this$static.impl, x_0);
  return this$static;
}

function $append_10(this$static, x_0, start_0, end){
  x_0 == null && (x_0 = 'null');
  $append_1(this$static.impl, $substring_0(x_0, start_0, end));
  return this$static;
}

function $insert_1(this$static, index_0, x_0){
  return $replace(this$static.impl, index_0, index_0, x_0) , this$static;
}

function StringBuilder_1(){
  $$init_17(this);
}

defineSeed(1285, 1, makeCastMap([Q$CharSequence]), StringBuilder_1);
function StringIndexOutOfBoundsException_0(index_0){
  IndexOutOfBoundsException_1.call(this, 'String index out of range: ' + index_0);
}

defineSeed(1286, 1257, makeCastMap([Q$Serializable, Q$Exception, Q$IndexOutOfBoundsException, Q$RuntimeException, Q$Throwable]), StringIndexOutOfBoundsException_0);
function arraycopy(src_0, srcOfs, dest, destOfs, len){
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  if (src_0 == null || dest == null) {
    throw new NullPointerException_0;
  }
  srcType = src_0.___clazz$;
  destType = dest.___clazz$;
  if ((srcType.modifiers & 4) == 0 || (destType.modifiers & 4) == 0) {
    throw new ArrayStoreException_1('Must be array types');
  }
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  if (!((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0)) {
    throw new ArrayStoreException_1('Array types must match');
  }
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException_0;
  }
  if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
    srcArray = dynamicCast(src_0, Q$Object_$1);
    destArray = dynamicCast(dest, Q$Object_$1);
    if (src_0 === dest && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else {
    Array.prototype.splice.apply(dest, [destOfs, len].concat(src_0.slice(srcOfs, srcOfs + len)));
  }
}

function $clinit_BigDecimal(){
  $clinit_BigDecimal = nullMethod;
  var i, j, j0;
  new BigDecimal_0(P1_longLit, 0);
  new BigDecimal_0(Pa_longLit, 0);
  new BigDecimal_0(P0_longLit, 0);
  BI_SCALED_BY_ZERO = initDim(_3Ljava_math_BigDecimal_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigDecimal, 11, 0);
  CH_ZEROS = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, 100, 1);
  DOUBLE_FIVE_POW = initValues(_3D_classLit, makeCastMap([Q$Serializable]), -1, [1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125, 6103515625, 30517578125, 152587890625, 762939453125, 3814697265625, 19073486328125, 95367431640625, 476837158203125, 2384185791015625]);
  DOUBLE_FIVE_POW_BIT_LENGTH = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, DOUBLE_FIVE_POW.length, 1);
  DOUBLE_TEN_POW = initValues(_3D_classLit, makeCastMap([Q$Serializable]), -1, [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1000000000000, 10000000000000, 100000000000000, 1000000000000000, 10000000000000000]);
  DOUBLE_TEN_POW_BIT_LENGTH = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, DOUBLE_TEN_POW.length, 1);
  ZERO_SCALED_BY = initDim(_3Ljava_math_BigDecimal_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigDecimal, 11, 0);
  i = 0;
  for (; i < ZERO_SCALED_BY.length; i++) {
    BI_SCALED_BY_ZERO[i] = new BigDecimal_0(fromInt(i), 0);
    ZERO_SCALED_BY[i] = new BigDecimal_0(P0_longLit, i);
    CH_ZEROS[i] = 48;
  }
  for (; i < CH_ZEROS.length; i++) {
    CH_ZEROS[i] = 48;
  }
  for (j0 = 0; j0 < DOUBLE_FIVE_POW_BIT_LENGTH.length; j0++) {
    DOUBLE_FIVE_POW_BIT_LENGTH[j0] = bitLength(DOUBLE_FIVE_POW[j0]);
  }
  for (j = 0; j < DOUBLE_TEN_POW_BIT_LENGTH.length; j++) {
    DOUBLE_TEN_POW_BIT_LENGTH[j] = bitLength(DOUBLE_TEN_POW[j]);
  }
  $clinit_Multiplication();
}

function $initFrom(this$static, val){
  var begin, ch_0, i, last, offset, scaleString, unscaled, unscaledBuffer;
  begin = 0;
  offset = 0;
  last = val.length;
  unscaledBuffer = new StringBuilder_1(val.length);
  if (0 < last && val.charCodeAt(0) == 43) {
    ++offset;
    ++begin;
    if (offset < last && (val.charCodeAt(offset) == 43 || val.charCodeAt(offset) == 45)) {
      throw new NumberFormatException_0('For input string: "' + val + '"');
    }
  }
  while (offset < last && val.charCodeAt(offset) != 46 && val.charCodeAt(offset) != 101 && val.charCodeAt(offset) != 69) {
    ++offset;
  }
  $append_10(unscaledBuffer, val, begin, offset);
  if (offset < last && val.charCodeAt(offset) == 46) {
    ++offset;
    begin = offset;
    while (offset < last && val.charCodeAt(offset) != 101 && val.charCodeAt(offset) != 69) {
      ++offset;
    }
    this$static.scale = offset - begin;
    $append_10(unscaledBuffer, val, begin, offset);
  }
   else {
    this$static.scale = 0;
  }
  if (offset < last && (val.charCodeAt(offset) == 101 || val.charCodeAt(offset) == 69)) {
    ++offset;
    begin = offset;
    if (offset < last && val.charCodeAt(offset) == 43) {
      ++offset;
      offset < last && val.charCodeAt(offset) != 45 && ++begin;
    }
    scaleString = $substring_0(val, begin, last);
    this$static.scale = this$static.scale - __parseAndValidateInt(scaleString);
    if (this$static.scale != round_int(this$static.scale)) {
      throw new NumberFormatException_0('Scale out of range.');
    }
  }
  unscaled = unscaledBuffer.impl.string;
  if (unscaled.length < 16) {
    this$static.smallValue = parseUnscaled(unscaled);
    if (isNaN_0(this$static.smallValue)) {
      throw new NumberFormatException_0('For input string: "' + val + '"');
    }
    this$static.bitLength = bitLength(this$static.smallValue);
  }
   else {
    $setUnscaledValue(this$static, new BigInteger_4(unscaled));
  }
  this$static.precision = unscaledBuffer.impl.string.length;
  for (i = 0; i < unscaledBuffer.impl.string.length; ++i) {
    ch_0 = $charAt(unscaledBuffer.impl.string, i);
    if (ch_0 != 45 && ch_0 != 48) {
      break;
    }
    --this$static.precision;
  }
  this$static.precision == 0 && (this$static.precision = 1);
}

function $setUnscaledValue(this$static, unscaledValue){
  var value_0;
  this$static.intVal = unscaledValue;
  this$static.bitLength = bitLength_1(unscaledValue);
  this$static.bitLength < 54 && (this$static.smallValue = toDouble((value_0 = unscaledValue.numberLength > 1?or(shl(fromInt(unscaledValue.digits[1]), 32), and(fromInt(unscaledValue.digits[0]), Pffffffff_longLit)):and(fromInt(unscaledValue.digits[0]), Pffffffff_longLit) , mul(fromInt(unscaledValue.sign), value_0))));
}

function $toString_2(this$static){
  var begin, end, exponent, intString, result;
  if (this$static.toStringImage != null) {
    return this$static.toStringImage;
  }
  if (this$static.bitLength < 32) {
    this$static.toStringImage = toDecimalScaledString(fromDouble(this$static.smallValue), round_int(this$static.scale));
    return this$static.toStringImage;
  }
  intString = toDecimalScaledString_0((!this$static.intVal && (this$static.intVal = valueOf_6(this$static.smallValue)) , this$static.intVal), 0);
  if (this$static.scale == 0) {
    return intString;
  }
  begin = (!this$static.intVal && (this$static.intVal = valueOf_6(this$static.smallValue)) , this$static.intVal).sign < 0?2:1;
  end = intString.length;
  exponent = -this$static.scale + end - begin;
  result = new StringBuilder_0;
  $append_2(result.impl, intString);
  if (this$static.scale > 0 && exponent >= -6) {
    if (exponent >= 0) {
      $insert_1(result, end - round_int(this$static.scale), '.');
    }
     else {
      $replace(result.impl, begin - 1, begin - 1, '0.');
      $insert_1(result, begin + 1, valueOf_5(CH_ZEROS, 0, -round_int(exponent) - 1));
    }
  }
   else {
    if (end - begin >= 1) {
      $replace(result.impl, begin, begin, '.');
      ++end;
    }
    $replace(result.impl, end, end, 'E');
    exponent > 0 && $insert_1(result, ++end, '+');
    $insert_1(result, ++end, '' + toString_6(fromDouble(exponent)));
  }
  this$static.toStringImage = result.impl.string;
  return this$static.toStringImage;
}

function BigDecimal_0(smallValue, scale){
  this.scale = scale;
  this.bitLength = bitLength_0(smallValue);
  this.bitLength < 54?(this.smallValue = toDouble(smallValue)):(this.intVal = valueOf_7(smallValue));
}

function BigDecimal_1(val){
  $clinit_BigDecimal();
  $initFrom(this, val);
}

function bitLength(value_0){
  var negative, result;
  if (value_0 > -140737488355328 && value_0 < 140737488355328) {
    if (value_0 == 0) {
      return 0;
    }
    negative = value_0 < 0;
    negative && (value_0 = -value_0);
    result = round_int(floor_0(Math.log(value_0) / 0.6931471805599453));
    (!negative || value_0 != pow_0(2, result)) && ++result;
    return result;
  }
  return bitLength_0(fromDouble(value_0));
}

function bitLength_0(value_0){
  var high;
  lt(value_0, P0_longLit) && (value_0 = {l:~value_0.l & 4194303, m:~value_0.m & 4194303, h:~value_0.h & 1048575});
  return 64 - (high = toInt(shr(value_0, 32)) , high != 0?numberOfLeadingZeros_0(high):numberOfLeadingZeros_0(toInt(value_0)) + 32);
}

function parseUnscaled(str){
  var unscaledRegex = unscaledRegex_0;
  !unscaledRegex && (unscaledRegex = unscaledRegex_0 = /^[+-]?\d*$/i);
  if (unscaledRegex.test(str)) {
    return parseInt(str, 10);
  }
   else {
    return Number.NaN;
  }
}

defineSeed(1289, 1261, makeCastMap([Q$Serializable, Q$Comparable, Q$Number, Q$BigDecimal]), BigDecimal_0, BigDecimal_1);
_.equals$ = function equals_60(x_0){
  var x1;
  if (this === x_0) {
    return true;
  }
  if (instanceOf(x_0, Q$BigDecimal)) {
    x1 = dynamicCast(x_0, Q$BigDecimal);
    return x1.scale == this.scale && (this.bitLength < 54?x1.smallValue == this.smallValue:$equals_4(this.intVal, x1.intVal));
  }
  return false;
}
;
_.hashCode$ = function hashCode_60(){
  var longValue;
  if (this.hashCode != 0) {
    return this.hashCode;
  }
  if (this.bitLength < 54) {
    longValue = fromDouble(this.smallValue);
    this.hashCode = toInt(and(longValue, N1_longLit));
    this.hashCode = 33 * this.hashCode + toInt(and(shr(longValue, 32), N1_longLit));
    this.hashCode = 17 * this.hashCode + round_int(this.scale);
    return this.hashCode;
  }
  this.hashCode = 17 * $hashCode_1(this.intVal) + round_int(this.scale);
  return this.hashCode;
}
;
_.toString$ = function toString_53(){
  return $toString_2(this);
}
;
_.bitLength = 0;
_.hashCode = 0;
_.precision = 0;
_.scale = 0;
_.smallValue = 0;
var BI_SCALED_BY_ZERO, CH_ZEROS, DOUBLE_FIVE_POW, DOUBLE_FIVE_POW_BIT_LENGTH, DOUBLE_TEN_POW, DOUBLE_TEN_POW_BIT_LENGTH, ZERO_SCALED_BY, unscaledRegex_0;
function $clinit_BigInteger(){
  $clinit_BigInteger = nullMethod;
  var i;
  ONE_0 = new BigInteger_1(1, 1);
  TEN = new BigInteger_1(1, 10);
  ZERO_0 = new BigInteger_1(0, 0);
  MINUS_ONE = new BigInteger_1(-1, 1);
  SMALL_VALUES = initValues(_3Ljava_math_BigInteger_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigInteger, [ZERO_0, ONE_0, new BigInteger_1(1, 2), new BigInteger_1(1, 3), new BigInteger_1(1, 4), new BigInteger_1(1, 5), new BigInteger_1(1, 6), new BigInteger_1(1, 7), new BigInteger_1(1, 8), new BigInteger_1(1, 9), TEN]);
  TWO_POWS = initDim(_3Ljava_math_BigInteger_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigInteger, 32, 0);
  for (i = 0; i < TWO_POWS.length; i++) {
    TWO_POWS[i] = valueOf_7(shl(P1_longLit, i));
  }
}

function $$init_18(this$static){
}

function $cutOffLeadingZeroes(this$static){
  while (this$static.numberLength > 0 && this$static.digits[--this$static.numberLength] == 0) {
  }
  this$static.digits[this$static.numberLength++] == 0 && (this$static.sign = 0);
}

function $equals_4(this$static, x_0){
  var x1;
  if (this$static === x_0) {
    return true;
  }
  if (instanceOf(x_0, Q$BigInteger)) {
    x1 = dynamicCast(x_0, Q$BigInteger);
    return this$static.sign == x1.sign && this$static.numberLength == x1.numberLength && $equalsArrays(this$static, x1.digits);
  }
  return false;
}

function $equalsArrays(this$static, b){
  var i;
  for (i = this$static.numberLength - 1; i >= 0 && this$static.digits[i] == b[i]; i--) {
  }
  return i < 0;
}

function $getFirstNonzeroDigit(this$static){
  var i;
  if (this$static.firstNonzeroDigit == -2) {
    if (this$static.sign == 0) {
      i = -1;
    }
     else {
      for (i = 0; this$static.digits[i] == 0; i++) {
      }
    }
    this$static.firstNonzeroDigit = i;
  }
  return this$static.firstNonzeroDigit;
}

function $hashCode_1(this$static){
  var i;
  if (this$static.hashCode != 0) {
    return this$static.hashCode;
  }
  for (i = 0; i < this$static.digits.length; i++) {
    this$static.hashCode = this$static.hashCode * 33 + (this$static.digits[i] & -1);
  }
  this$static.hashCode = this$static.hashCode * this$static.sign;
  return this$static.hashCode;
}

function $multiply(this$static, val){
  if (val.sign == 0) {
    return ZERO_0;
  }
  if (this$static.sign == 0) {
    return ZERO_0;
  }
  return $clinit_Multiplication() , karatsuba(this$static, val);
}

function $shiftLeft(this$static, n){
  if (n == 0 || this$static.sign == 0) {
    return this$static;
  }
  return n > 0?shiftLeft(this$static, n):shiftRight(this$static, -n);
}

function $shiftRight(this$static, n){
  if (n == 0 || this$static.sign == 0) {
    return this$static;
  }
  return n > 0?shiftRight(this$static, n):shiftLeft(this$static, -n);
}

function BigInteger_0(sign, val){
  this.sign = sign;
  if (val < 4294967296) {
    this.numberLength = 1;
    this.digits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [~~val]);
  }
   else {
    this.numberLength = 2;
    this.digits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [~~(val % 4294967296), ~~(val / 4294967296)]);
  }
}

function BigInteger_1(sign, value_0){
  $clinit_BigInteger();
  $$init_18(this);
  this.sign = sign;
  this.numberLength = 1;
  this.digits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [value_0]);
}

function BigInteger_2(sign, numberLength, digits){
  $clinit_BigInteger();
  $$init_18(this);
  this.sign = sign;
  this.numberLength = numberLength;
  this.digits = digits;
}

function BigInteger_3(sign, val){
  $$init_18(this);
  this.sign = sign;
  if (eq(and(val, N100000000_longLit), P0_longLit)) {
    this.numberLength = 1;
    this.digits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [toInt(val)]);
  }
   else {
    this.numberLength = 2;
    this.digits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [toInt(val), toInt(shr(val, 32))]);
  }
}

function BigInteger_4(val){
  $clinit_BigInteger();
  BigInteger_5.call(this, val);
}

function BigInteger_5(val){
  if (val == null) {
    throw new NullPointerException_0;
  }
  if (val.length == 0) {
    throw new NumberFormatException_0('Zero length BigInteger');
  }
  setFromString(this, val);
}

function setFromString(bi, val){
  var bigRadix, bigRadixDigit, bigRadixDigitsLength, charsPerInt, digitIndex, digits, endChar, newDigit, sign, startChar, stringLength, substrEnd, substrStart, topChars;
  stringLength = val.length;
  endChar = stringLength;
  if (val.charCodeAt(0) == 45) {
    sign = -1;
    startChar = 1;
    --stringLength;
  }
   else {
    sign = 1;
    startChar = 0;
  }
  charsPerInt = ($clinit_Conversion() , digitFitInInt)[10];
  bigRadixDigitsLength = ~~(stringLength / charsPerInt);
  topChars = stringLength % charsPerInt;
  topChars != 0 && ++bigRadixDigitsLength;
  digits = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, bigRadixDigitsLength, 1);
  bigRadix = bigRadices[8];
  digitIndex = 0;
  substrEnd = startChar + (topChars == 0?charsPerInt:topChars);
  for (substrStart = startChar; substrStart < endChar; substrStart = substrEnd , substrEnd = substrEnd + charsPerInt) {
    bigRadixDigit = __parseAndValidateInt($substring_0(val, substrStart, substrEnd));
    newDigit = ($clinit_Multiplication() , multiplyByInt(digits, digits, digitIndex, bigRadix));
    newDigit += inplaceAdd(digits, digitIndex, bigRadixDigit);
    digits[digitIndex++] = newDigit;
  }
  bi.sign = sign;
  bi.numberLength = digitIndex;
  bi.digits = digits;
  $cutOffLeadingZeroes(bi);
}

function valueOf_6(val){
  $clinit_BigInteger();
  if (val < 0) {
    if (val != -1) {
      return new BigInteger_0(-1, -val);
    }
    return MINUS_ONE;
  }
   else 
    return val <= 10?SMALL_VALUES[round_int(val)]:new BigInteger_0(1, val);
}

function valueOf_7(val){
  $clinit_BigInteger();
  if (lt(val, P0_longLit)) {
    if (neq(val, N1_longLit)) {
      return new BigInteger_3(-1, neg(val));
    }
    return MINUS_ONE;
  }
   else 
    return lte(val, Pa_longLit)?SMALL_VALUES[toInt(val)]:new BigInteger_3(1, val);
}

defineSeed(1290, 1261, makeCastMap([Q$Serializable, Q$Comparable, Q$Number, Q$BigInteger]), BigInteger_0, BigInteger_1, BigInteger_2, BigInteger_3, BigInteger_4);
_.equals$ = function equals_61(x_0){
  return $equals_4(this, x_0);
}
;
_.hashCode$ = function hashCode_61(){
  return $hashCode_1(this);
}
;
_.toString$ = function toString_54(){
  return toDecimalScaledString_0(this, 0);
}
;
_.firstNonzeroDigit = -2;
_.hashCode = 0;
_.numberLength = 0;
_.sign = 0;
var MINUS_ONE, ONE_0, SMALL_VALUES, TEN, TWO_POWS, ZERO_0;
function bitLength_1(val){
  var bLength, highDigit, i;
  if (val.sign == 0) {
    return 0;
  }
  bLength = val.numberLength << 5;
  highDigit = val.digits[val.numberLength - 1];
  if (val.sign < 0) {
    i = $getFirstNonzeroDigit(val);
    i == val.numberLength - 1 && (highDigit = ~~(highDigit - 1));
  }
  bLength -= numberOfLeadingZeros_0(highDigit);
  return bLength;
}

function shiftLeft(source, count){
  var intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  resLength = source.numberLength + intCount + (count == 0?0:1);
  resDigits = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, resLength, 1);
  shiftLeft_0(resDigits, source.digits, intCount, count);
  result = new BigInteger_2(source.sign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function shiftLeft_0(result, source, intCount, count){
  var i, i0, rightShiftCount;
  if (count == 0) {
    arraycopy(source, 0, result, intCount, result.length - intCount);
  }
   else {
    rightShiftCount = 32 - count;
    result[result.length - 1] = 0;
    for (i0 = result.length - 1; i0 > intCount; i0--) {
      result[i0] |= source[i0 - intCount - 1] >>> rightShiftCount;
      result[i0 - 1] = source[i0 - intCount - 1] << count;
    }
  }
  for (i = 0; i < intCount; i++) {
    result[i] = 0;
  }
}

function shiftLeftOneBit(result, source, srcLen){
  var carry, i, val;
  carry = 0;
  for (i = 0; i < srcLen; i++) {
    val = source[i];
    result[i] = val << 1 | carry;
    carry = val >>> 31;
  }
  carry != 0 && (result[srcLen] = carry);
}

function shiftRight(source, count){
  var i, intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  if (intCount >= source.numberLength) {
    return source.sign < 0?($clinit_BigInteger() , MINUS_ONE):($clinit_BigInteger() , ZERO_0);
  }
  resLength = source.numberLength - intCount;
  resDigits = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, resLength + 1, 1);
  shiftRight_0(resDigits, resLength, source.digits, intCount, count);
  if (source.sign < 0) {
    for (i = 0; i < intCount && source.digits[i] == 0; i++) {
    }
    if (i < intCount || count > 0 && source.digits[i] << 32 - count != 0) {
      for (i = 0; i < resLength && resDigits[i] == -1; i++) {
        resDigits[i] = 0;
      }
      i == resLength && ++resLength;
      ++resDigits[i];
    }
  }
  result = new BigInteger_2(source.sign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function shiftRight_0(result, resultLen, source, intCount, count){
  var allZero, i, leftShiftCount;
  allZero = true;
  for (i = 0; i < intCount; i++) {
    allZero = allZero & source[i] == 0;
  }
  if (count == 0) {
    arraycopy(source, intCount, result, 0, resultLen);
  }
   else {
    leftShiftCount = 32 - count;
    allZero = allZero & source[i] << leftShiftCount == 0;
    for (i = 0; i < resultLen - 1; i++) {
      result[i] = source[i + intCount] >>> count | source[i + intCount + 1] << leftShiftCount;
    }
    result[i] = source[i + intCount] >>> count;
    ++i;
  }
  return allZero;
}

function $clinit_Conversion(){
  $clinit_Conversion = nullMethod;
  bigRadices = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-2147483648, 1162261467, 1073741824, 1220703125, 362797056, 1977326743, 1073741824, 387420489, 1000000000, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, 1073741824, 1291467969, 1544804416, 1838265625, 60466176]);
  digitFitInInt = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [-1, -1, 31, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
}

function divideLongByBillion(a){
  var aPos, quot, rem;
  if (gte_0(a, P0_longLit)) {
    quot = div_0(a, P3b9aca00_longLit);
    rem = mod(a, P3b9aca00_longLit);
  }
   else {
    aPos = shru(a, 1);
    quot = div_0(aPos, P1dcd6500_longLit);
    rem = mod(aPos, P1dcd6500_longLit);
    rem = add_1(shl(rem, 1), and(a, P1_longLit));
  }
  return or(shl(rem, 32), and(quot, Pffffffff_longLit));
}

function toDecimalScaledString(value_0, scale){
  $clinit_Conversion();
  var currentChar, exponent, insertPoint, j, j0, negNumber, prev, result, result1, result10, startPoint, v;
  negNumber = lt(value_0, P0_longLit);
  negNumber && (value_0 = neg(value_0));
  if (eq(value_0, P0_longLit)) {
    switch (scale) {
      case 0:
        return '0';
      case 1:
        return '0.0';
      case 2:
        return '0.00';
      case 3:
        return '0.000';
      case 4:
        return '0.0000';
      case 5:
        return '0.00000';
      case 6:
        return '0.000000';
      default:result10 = new StringBuilder_0;
        scale < 0?($append_2(result10.impl, '0E+') , result10):($append_2(result10.impl, '0E') , result10);
        $append_2(result10.impl, scale == -2147483648?'2147483648':'' + -scale);
        return result10.impl.string;
    }
  }
  result = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, 19, 1);
  currentChar = 18;
  v = value_0;
  do {
    prev = v;
    v = div_0(v, Pa_longLit);
    result[--currentChar] = toInt(add_1(P30_longLit, sub_0(prev, mul(v, Pa_longLit)))) & 65535;
  }
   while (neq(v, P0_longLit));
  exponent = sub_0(sub_0(sub_0(P12_longLit, fromInt(currentChar)), fromInt(scale)), P1_longLit);
  if (scale == 0) {
    negNumber && (result[--currentChar] = 45);
    return valueOf_5(result, currentChar, 18 - currentChar);
  }
  if (scale > 0 && gte_0(exponent, N6_longLit)) {
    if (gte_0(exponent, P0_longLit)) {
      insertPoint = currentChar + toInt(exponent);
      for (j0 = 17; j0 >= insertPoint; j0--) {
        result[j0 + 1] = result[j0];
      }
      result[++insertPoint] = 46;
      negNumber && (result[--currentChar] = 45);
      return valueOf_5(result, currentChar, 18 - currentChar + 1);
    }
    for (j = 2; lt(fromInt(j), add_1(neg(exponent), P1_longLit)); j++) {
      result[--currentChar] = 48;
    }
    result[--currentChar] = 46;
    result[--currentChar] = 48;
    negNumber && (result[--currentChar] = 45);
    return valueOf_5(result, currentChar, 18 - currentChar);
  }
  startPoint = currentChar + 1;
  result1 = new StringBuilder_1;
  negNumber && ($appendNonNull(result1.impl, '-') , result1);
  if (18 - startPoint >= 1) {
    $append_7(result1, result[currentChar]);
    $appendNonNull(result1.impl, '.');
    $appendNonNull(result1.impl, valueOf_5(result, currentChar + 1, 18 - currentChar - 1));
  }
   else {
    $appendNonNull(result1.impl, valueOf_5(result, currentChar, 18 - currentChar));
  }
  $appendNonNull(result1.impl, 'E');
  gt(exponent, P0_longLit) && ($appendNonNull(result1.impl, '+') , result1);
  $append_2(result1.impl, '' + toString_6(exponent));
  return result1.impl.string;
}

function toDecimalScaledString_0(val, scale){
  $clinit_Conversion();
  var currentChar, delta, digits, exponent, highDigit, i, i1, insertPoint, j, j0, negNumber, numberLength, prev, previous, res, resDigit, resLengthInChars, result, result1, result10, result11, sign, startPoint, temp, temp1, tempLen, v;
  sign = val.sign;
  numberLength = val.numberLength;
  digits = val.digits;
  if (sign == 0) {
    switch (scale) {
      case 0:
        return '0';
      case 1:
        return '0.0';
      case 2:
        return '0.00';
      case 3:
        return '0.000';
      case 4:
        return '0.0000';
      case 5:
        return '0.00000';
      case 6:
        return '0.000000';
      default:result10 = new StringBuilder_0;
        scale < 0?($append_2(result10.impl, '0E+') , result10):($append_2(result10.impl, '0E') , result10);
        $append_0(result10.impl, -scale);
        return result10.impl.string;
    }
  }
  resLengthInChars = numberLength * 10 + 1 + 7;
  result = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, resLengthInChars + 1, 1);
  currentChar = resLengthInChars;
  if (numberLength == 1) {
    highDigit = digits[0];
    if (highDigit < 0) {
      v = and(fromInt(highDigit), Pffffffff_longLit);
      do {
        prev = v;
        v = div_0(v, Pa_longLit);
        result[--currentChar] = 48 + toInt(sub_0(prev, mul(v, Pa_longLit))) & 65535;
      }
       while (neq(v, P0_longLit));
    }
     else {
      v = highDigit;
      do {
        prev = v;
        v = ~~(v / 10);
        result[--currentChar] = 48 + (prev - v * 10) & 65535;
      }
       while (v != 0);
    }
  }
   else {
    temp = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, numberLength, 1);
    tempLen = numberLength;
    arraycopy(digits, 0, temp, 0, numberLength);
    BIG_LOOP: while (true) {
      result11 = P0_longLit;
      for (i1 = tempLen - 1; i1 >= 0; i1--) {
        temp1 = add_1(shl(result11, 32), and(fromInt(temp[i1]), Pffffffff_longLit));
        res = divideLongByBillion(temp1);
        temp[i1] = toInt(res);
        result11 = fromInt(toInt(shr(res, 32)));
      }
      resDigit = toInt(result11);
      previous = currentChar;
      do {
        result[--currentChar] = 48 + resDigit % 10 & 65535;
      }
       while ((resDigit = ~~(resDigit / 10)) != 0 && currentChar != 0);
      delta = 9 - previous + currentChar;
      for (i = 0; i < delta && currentChar > 0; i++) {
        result[--currentChar] = 48;
      }
      j = tempLen - 1;
      for (; temp[j] == 0; j--) {
        if (j == 0) {
          break BIG_LOOP;
        }
      }
      tempLen = j + 1;
    }
    while (result[currentChar] == 48) {
      ++currentChar;
    }
  }
  negNumber = sign < 0;
  exponent = resLengthInChars - currentChar - scale - 1;
  if (scale == 0) {
    negNumber && (result[--currentChar] = 45);
    return valueOf_5(result, currentChar, resLengthInChars - currentChar);
  }
  if (scale > 0 && exponent >= -6) {
    if (exponent >= 0) {
      insertPoint = currentChar + exponent;
      for (j0 = resLengthInChars - 1; j0 >= insertPoint; j0--) {
        result[j0 + 1] = result[j0];
      }
      result[++insertPoint] = 46;
      negNumber && (result[--currentChar] = 45);
      return valueOf_5(result, currentChar, resLengthInChars - currentChar + 1);
    }
    for (j = 2; j < -exponent + 1; j++) {
      result[--currentChar] = 48;
    }
    result[--currentChar] = 46;
    result[--currentChar] = 48;
    negNumber && (result[--currentChar] = 45);
    return valueOf_5(result, currentChar, resLengthInChars - currentChar);
  }
  startPoint = currentChar + 1;
  result1 = new StringBuilder_1;
  negNumber && ($appendNonNull(result1.impl, '-') , result1);
  if (resLengthInChars - startPoint >= 1) {
    $append_7(result1, result[currentChar]);
    $appendNonNull(result1.impl, '.');
    $appendNonNull(result1.impl, valueOf_5(result, currentChar + 1, resLengthInChars - currentChar - 1));
  }
   else {
    $appendNonNull(result1.impl, valueOf_5(result, currentChar, resLengthInChars - currentChar));
  }
  $appendNonNull(result1.impl, 'E');
  exponent > 0 && ($appendNonNull(result1.impl, '+') , result1);
  $append_2(result1.impl, '' + exponent);
  return result1.impl.string;
}

var bigRadices, digitFitInInt;
function add_13(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, res0, resDigits, resSign, valueHi, valueLo;
  op1Sign = op1.sign;
  op2Sign = op2.sign;
  if (op1Sign == 0) {
    return op2;
  }
  if (op2Sign == 0) {
    return op1;
  }
  op1Len = op1.numberLength;
  op2Len = op2.numberLength;
  if (op1Len + op2Len == 2) {
    a = and(fromInt(op1.digits[0]), Pffffffff_longLit);
    b = and(fromInt(op2.digits[0]), Pffffffff_longLit);
    if (op1Sign == op2Sign) {
      res0 = add_1(a, b);
      valueLo = toInt(res0);
      valueHi = toInt(shru(res0, 32));
      return valueHi == 0?new BigInteger_1(op1Sign, valueLo):new BigInteger_2(op1Sign, 2, initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [valueLo, valueHi]));
    }
    return valueOf_7(op1Sign < 0?sub_0(b, a):sub_0(a, b));
  }
   else if (op1Sign == op2Sign) {
    resSign = op1Sign;
    resDigits = op1Len >= op2Len?add_14(op1.digits, op1Len, op2.digits, op2Len):add_14(op2.digits, op2Len, op1.digits, op1Len);
  }
   else {
    cmp = op1Len != op2Len?op1Len > op2Len?1:-1:compareArrays(op1.digits, op2.digits, op1Len);
    if (cmp == 0) {
      return $clinit_BigInteger() , ZERO_0;
    }
    if (cmp == 1) {
      resSign = op1Sign;
      resDigits = subtract_0(op1.digits, op1Len, op2.digits, op2Len);
    }
     else {
      resSign = op2Sign;
      resDigits = subtract_0(op2.digits, op2Len, op1.digits, op1Len);
    }
  }
  res = new BigInteger_2(resSign, resDigits.length, resDigits);
  $cutOffLeadingZeroes(res);
  return res;
}

function add_14(a, aSize, b, bSize){
  var res;
  res = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, aSize + 1, 1);
  add_15(res, a, aSize, b, bSize);
  return res;
}

function add_15(res, a, aSize, b, bSize){
  var carry, i;
  carry = add_1(and(fromInt(a[0]), Pffffffff_longLit), and(fromInt(b[0]), Pffffffff_longLit));
  res[0] = toInt(carry);
  carry = shr(carry, 32);
  if (aSize >= bSize) {
    for (i = 1; i < bSize; i++) {
      carry = add_1(carry, add_1(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(b[i]), Pffffffff_longLit)));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
    for (; i < aSize; i++) {
      carry = add_1(carry, and(fromInt(a[i]), Pffffffff_longLit));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
  }
   else {
    for (i = 1; i < aSize; i++) {
      carry = add_1(carry, add_1(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(b[i]), Pffffffff_longLit)));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
    for (; i < bSize; i++) {
      carry = add_1(carry, and(fromInt(b[i]), Pffffffff_longLit));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
  }
  neq(carry, P0_longLit) && (res[i] = toInt(carry));
}

function compareArrays(a, b, size_0){
  var i;
  for (i = size_0 - 1; i >= 0 && a[i] == b[i]; i--) {
  }
  return i < 0?0:lt(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(b[i]), Pffffffff_longLit))?-1:1;
}

function inplaceAdd(a, aSize, addend){
  var carry, i;
  carry = and(fromInt(addend), Pffffffff_longLit);
  for (i = 0; neq(carry, P0_longLit) && i < aSize; i++) {
    carry = add_1(carry, and(fromInt(a[i]), Pffffffff_longLit));
    a[i] = toInt(carry);
    carry = shr(carry, 32);
  }
  return toInt(carry);
}

function subtract(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, resDigits, resSign;
  op1Sign = op1.sign;
  op2Sign = op2.sign;
  if (op2Sign == 0) {
    return op1;
  }
  if (op1Sign == 0) {
    return op2.sign == 0?op2:new BigInteger_2(-op2.sign, op2.numberLength, op2.digits);
  }
  op1Len = op1.numberLength;
  op2Len = op2.numberLength;
  if (op1Len + op2Len == 2) {
    a = and(fromInt(op1.digits[0]), Pffffffff_longLit);
    b = and(fromInt(op2.digits[0]), Pffffffff_longLit);
    op1Sign < 0 && (a = neg(a));
    op2Sign < 0 && (b = neg(b));
    return valueOf_7(sub_0(a, b));
  }
  cmp = op1Len != op2Len?op1Len > op2Len?1:-1:compareArrays(op1.digits, op2.digits, op1Len);
  if (cmp == -1) {
    resSign = -op2Sign;
    resDigits = op1Sign == op2Sign?subtract_0(op2.digits, op2Len, op1.digits, op1Len):add_14(op2.digits, op2Len, op1.digits, op1Len);
  }
   else {
    resSign = op1Sign;
    if (op1Sign == op2Sign) {
      if (cmp == 0) {
        return $clinit_BigInteger() , ZERO_0;
      }
      resDigits = subtract_0(op1.digits, op1Len, op2.digits, op2Len);
    }
     else {
      resDigits = add_14(op1.digits, op1Len, op2.digits, op2Len);
    }
  }
  res = new BigInteger_2(resSign, resDigits.length, resDigits);
  $cutOffLeadingZeroes(res);
  return res;
}

function subtract_0(a, aSize, b, bSize){
  var res;
  res = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, aSize, 1);
  subtract_1(res, a, aSize, b, bSize);
  return res;
}

function subtract_1(res, a, aSize, b, bSize){
  var borrow, i;
  borrow = P0_longLit;
  for (i = 0; i < bSize; i++) {
    borrow = add_1(borrow, sub_0(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(b[i]), Pffffffff_longLit)));
    res[i] = toInt(borrow);
    borrow = shr(borrow, 32);
  }
  for (; i < aSize; i++) {
    borrow = add_1(borrow, and(fromInt(a[i]), Pffffffff_longLit));
    res[i] = toInt(borrow);
    borrow = shr(borrow, 32);
  }
}

function $clinit_Multiplication(){
  $clinit_Multiplication = nullMethod;
  var fivePow, i;
  bigFivePows = initDim(_3Ljava_math_BigInteger_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigInteger, 32, 0);
  bigTenPows = initDim(_3Ljava_math_BigInteger_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$BigInteger, 32, 0);
  fivePow = P1_longLit;
  for (i = 0; i <= 18; i++) {
    bigFivePows[i] = valueOf_7(fivePow);
    bigTenPows[i] = valueOf_7(shl(fivePow, i));
    fivePow = mul(fivePow, P5_longLit);
  }
  for (; i < bigTenPows.length; i++) {
    bigFivePows[i] = $multiply(bigFivePows[i - 1], bigFivePows[1]);
    bigTenPows[i] = $multiply(bigTenPows[i - 1], ($clinit_BigInteger() , TEN));
  }
}

function karatsuba(op1, op2){
  $clinit_Multiplication();
  var lower, lowerOp1, lowerOp2, middle, ndiv2, temp, upper, upperOp1, upperOp2;
  if (op2.numberLength > op1.numberLength) {
    temp = op1;
    op1 = op2;
    op2 = temp;
  }
  if (op2.numberLength < 63) {
    return multiplyPAP(op1, op2);
  }
  ndiv2 = (op1.numberLength & -2) << 4;
  upperOp1 = $shiftRight(op1, ndiv2);
  upperOp2 = $shiftRight(op2, ndiv2);
  lowerOp1 = subtract(op1, $shiftLeft(upperOp1, ndiv2));
  lowerOp2 = subtract(op2, $shiftLeft(upperOp2, ndiv2));
  upper = karatsuba(upperOp1, upperOp2);
  lower = karatsuba(lowerOp1, lowerOp2);
  middle = karatsuba(subtract(upperOp1, lowerOp1), subtract(lowerOp2, upperOp2));
  middle = add_13(add_13(middle, upper), lower);
  middle = $shiftLeft(middle, ndiv2);
  upper = $shiftLeft(upper, ndiv2 << 1);
  return add_13(add_13(upper, middle), lower);
}

function multArraysPAP(aDigits, aLen, bDigits, bLen, resDigits){
  if (aLen == 0 || bLen == 0) {
    return;
  }
  aLen == 1?(resDigits[bLen] = multiplyByInt(resDigits, bDigits, bLen, aDigits[0])):bLen == 1?(resDigits[aLen] = multiplyByInt(resDigits, aDigits, aLen, bDigits[0])):multPAP(aDigits, bDigits, resDigits, aLen, bLen);
}

function multPAP(a, b, t, aLen, bLen){
  var aI, carry, i, j;
  if (maskUndefined(a) === maskUndefined(b) && aLen == bLen) {
    square(a, aLen, t);
    return;
  }
  for (i = 0; i < aLen; i++) {
    carry = P0_longLit;
    aI = a[i];
    for (j = 0; j < bLen; j++) {
      carry = add_1(add_1(mul(and(fromInt(aI), Pffffffff_longLit), and(fromInt(b[j]), Pffffffff_longLit)), and(fromInt(t[i + j]), Pffffffff_longLit)), and(fromInt(toInt(carry)), Pffffffff_longLit));
      t[i + j] = toInt(carry);
      carry = shru(carry, 32);
    }
    t[i + bLen] = toInt(carry);
  }
}

function multiplyByInt(res, a, aSize, factor){
  $clinit_Multiplication();
  var carry, i;
  carry = P0_longLit;
  for (i = 0; i < aSize; i++) {
    carry = add_1(mul(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(factor), Pffffffff_longLit)), and(fromInt(toInt(carry)), Pffffffff_longLit));
    res[i] = toInt(carry);
    carry = shru(carry, 32);
  }
  return toInt(carry);
}

function multiplyPAP(a, b){
  var aDigits, aLen, bDigits, bLen, resDigits, resLength, resSign, result, val, valueHi, valueLo;
  aLen = a.numberLength;
  bLen = b.numberLength;
  resLength = aLen + bLen;
  resSign = a.sign != b.sign?-1:1;
  if (resLength == 2) {
    val = mul(and(fromInt(a.digits[0]), Pffffffff_longLit), and(fromInt(b.digits[0]), Pffffffff_longLit));
    valueLo = toInt(val);
    valueHi = toInt(shru(val, 32));
    return valueHi == 0?new BigInteger_1(resSign, valueLo):new BigInteger_2(resSign, 2, initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [valueLo, valueHi]));
  }
  aDigits = a.digits;
  bDigits = b.digits;
  resDigits = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, resLength, 1);
  multArraysPAP(aDigits, aLen, bDigits, bLen, resDigits);
  result = new BigInteger_2(resSign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function square(a, aLen, res){
  var carry, i, i0, index_0, j;
  for (i0 = 0; i0 < aLen; i0++) {
    carry = P0_longLit;
    for (j = i0 + 1; j < aLen; j++) {
      carry = add_1(add_1(mul(and(fromInt(a[i0]), Pffffffff_longLit), and(fromInt(a[j]), Pffffffff_longLit)), and(fromInt(res[i0 + j]), Pffffffff_longLit)), and(fromInt(toInt(carry)), Pffffffff_longLit));
      res[i0 + j] = toInt(carry);
      carry = shru(carry, 32);
    }
    res[i0 + aLen] = toInt(carry);
  }
  shiftLeftOneBit(res, res, aLen << 1);
  carry = P0_longLit;
  for (i = 0 , index_0 = 0; i < aLen; ++i , index_0++) {
    carry = add_1(add_1(mul(and(fromInt(a[i]), Pffffffff_longLit), and(fromInt(a[i]), Pffffffff_longLit)), and(fromInt(res[index_0]), Pffffffff_longLit)), and(fromInt(toInt(carry)), Pffffffff_longLit));
    res[index_0] = toInt(carry);
    carry = shru(carry, 32);
    ++index_0;
    carry = add_1(carry, and(fromInt(res[index_0]), Pffffffff_longLit));
    res[index_0] = toInt(carry);
    carry = shru(carry, 32);
  }
  return res;
}

var bigFivePows, bigTenPows;
function $set_4(this$static, o){
  if (this$static.last == -1) {
    throw new IllegalStateException_0;
  }
  this$static.this$0.set_0(this$static.last, o);
}

function AbstractList$SubList_0(wrapped, fromIndex, toIndex){
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
  if (fromIndex > toIndex) {
    throw new IllegalArgumentException_1('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
  }
  if (fromIndex < 0) {
    throw new IndexOutOfBoundsException_1('fromIndex: ' + fromIndex + ' < 0');
  }
  if (toIndex > wrapped.size_1()) {
    throw new IndexOutOfBoundsException_1('toIndex: ' + toIndex + ' > wrapped.size() ' + wrapped.size_1());
  }
}

defineSeed(1302, 607, makeCastMap([Q$Iterable, Q$Collection, Q$List]), AbstractList$SubList_0);
_.add_0 = function add_16(index_0, element){
  checkIndex(index_0, this.size_0 + 1);
  ++this.size_0;
  this.wrapped.add_0(this.fromIndex + index_0, element);
}
;
_.get_1 = function get_33(index_0){
  checkIndex(index_0, this.size_0);
  return this.wrapped.get_1(this.fromIndex + index_0);
}
;
_.remove_1 = function remove_39(index_0){
  var result;
  checkIndex(index_0, this.size_0);
  result = this.wrapped.remove_1(this.fromIndex + index_0);
  --this.size_0;
  return result;
}
;
_.set_0 = function set_6(index_0, element){
  checkIndex(index_0, this.size_0);
  return this.wrapped.set_0(this.fromIndex + index_0, element);
}
;
_.size_1 = function size_18(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
defineSeed(1307, 607, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List]));
_.addAll = function addAll_2(c){
  return $addAll_1(this, c);
}
;
_.indexOf_0 = function indexOf_2(o){
  return $indexOf_2(this, o, 0);
}
;
_.set_0 = function set_7(index_0, o){
  return $set_5(this, index_0, o);
}
;
function unmodifiableList(list){
  $clinit_Collections();
  return list?new Collections$UnmodifiableRandomAccessList_0(list):new Collections$UnmodifiableList_0(null);
}

defineSeed(1311, 647, makeCastMap([Q$Serializable, Q$Map]));
_.keySet_0 = function keySet_3(){
  return $clinit_Collections() , EMPTY_SET;
}
;
function Collections$SingletonList_0(element){
  this.element = element;
}

defineSeed(1314, 607, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List]), Collections$SingletonList_0);
_.contains_0 = function contains_10(item_0){
  return equalsWithNullCheck(this.element, item_0);
}
;
_.get_1 = function get_37(index_0){
  if (index_0 == 0) {
    return this.element;
  }
   else {
    throw new IndexOutOfBoundsException_0;
  }
}
;
_.size_1 = function size_25(){
  return 1;
}
;
function Collections$UnmodifiableCollection_0(coll){
  this.coll = coll;
}

defineSeed(1315, 1, makeCastMap([Q$Iterable, Q$Collection]));
_.add_1 = function add_19(o){
  throw new UnsupportedOperationException_0;
}
;
_.clear_0 = function clear_6(){
  throw new UnsupportedOperationException_0;
}
;
_.contains_0 = function contains_11(o){
  return this.coll.contains_0(o);
}
;
_.isEmpty_0 = function isEmpty_9(){
  return this.coll.isEmpty_0();
}
;
_.iterator = function iterator_20(){
  return new Collections$UnmodifiableCollectionIterator_0(this.coll.iterator());
}
;
_.remove_2 = function remove_45(o){
  throw new UnsupportedOperationException_0;
}
;
_.size_1 = function size_26(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_7(){
  return this.coll.toArray();
}
;
_.toString$ = function toString_56(){
  return this.coll.toString$();
}
;
function Collections$UnmodifiableCollectionIterator_0(it){
  this.it = it;
}

defineSeed(1316, 1, makeCastMap([Q$Iterator]), Collections$UnmodifiableCollectionIterator_0);
_.hasNext = function hasNext_15(){
  return this.it.hasNext();
}
;
_.next_0 = function next_16(){
  return this.it.next_0();
}
;
_.remove_0 = function remove_46(){
  throw new UnsupportedOperationException_0;
}
;
function Collections$UnmodifiableList_0(list){
  Collections$UnmodifiableCollection_0.call(this, list);
  this.list = list;
}

defineSeed(1317, 1315, makeCastMap([Q$Iterable, Q$Collection, Q$List]), Collections$UnmodifiableList_0);
_.equals$ = function equals_64(o){
  return this.list.equals$(o);
}
;
_.get_1 = function get_38(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode$ = function hashCode_64(){
  return this.list.hashCode$();
}
;
_.indexOf_0 = function indexOf_3(o){
  return this.list.indexOf_0(o);
}
;
_.isEmpty_0 = function isEmpty_10(){
  return this.list.isEmpty_0();
}
;
_.listIterator = function listIterator_5(){
  return new Collections$UnmodifiableListIterator_0(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_6(from){
  return new Collections$UnmodifiableListIterator_0(this.list.listIterator_0(from));
}
;
_.remove_1 = function remove_47(index_0){
  throw new UnsupportedOperationException_0;
}
;
_.subList = function subList_2(fromIndex, toIndex){
  return new Collections$UnmodifiableList_0(this.list.subList(fromIndex, toIndex));
}
;
function Collections$UnmodifiableListIterator_0(lit){
  Collections$UnmodifiableCollectionIterator_0.call(this, lit);
  this.lit = lit;
}

defineSeed(1318, 1316, makeCastMap([Q$Iterator, Q$ListIterator]), Collections$UnmodifiableListIterator_0);
_.hasPrevious = function hasPrevious_2(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_3(){
  return this.lit.previous();
}
;
function $get_9(this$static, key_0){
  return this$static.map_0.get_2(key_0);
}

function Collections$UnmodifiableMap_0(map_0){
  this.map_0 = map_0;
}

defineSeed(1319, 1, makeCastMap([Q$Map]), Collections$UnmodifiableMap_0);
_.containsKey = function containsKey_6(key_0){
  return this.map_0.containsKey(key_0);
}
;
_.entrySet_0 = function entrySet_6(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet_0(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_65(o){
  return $equals_0(this.map_0, o);
}
;
_.get_2 = function get_39(key_0){
  return $get_9(this, key_0);
}
;
_.hashCode$ = function hashCode_65(){
  return $hashCode_0(this.map_0);
}
;
_.isEmpty_0 = function isEmpty_11(){
  return this.map_0.size_1() == 0;
}
;
_.keySet_0 = function keySet_4(){
  !this.keySet && (this.keySet = new Collections$UnmodifiableSet_0($keySet(this.map_0)));
  return this.keySet;
}
;
_.put = function put_5(key_0, value_0){
  throw new UnsupportedOperationException_0;
}
;
_.remove_3 = function remove_48(key_0){
  throw new UnsupportedOperationException_0;
}
;
_.size_1 = function size_27(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_57(){
  return $toString_1(this.map_0);
}
;
function Collections$UnmodifiableSet_0(set_0){
  Collections$UnmodifiableCollection_0.call(this, set_0);
}

defineSeed(1321, 1315, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), Collections$UnmodifiableSet_0);
_.equals$ = function equals_66(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_66(){
  return this.coll.hashCode$();
}
;
function $wrap(array, size_0){
  var i;
  for (i = 0; i < size_0; ++i) {
    setCheck(array, i, new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_0(dynamicCast(array[i], Q$Map$Entry)));
  }
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet_0(s){
  Collections$UnmodifiableSet_0.call(this, s);
}

defineSeed(1320, 1321, makeCastMap([Q$Iterable, Q$Collection, Q$Set]), Collections$UnmodifiableMap$UnmodifiableEntrySet_0);
_.contains_0 = function contains_12(o){
  return this.coll.contains_0(o);
}
;
_.iterator = function iterator_21(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1_0(it);
}
;
_.toArray = function toArray_8(){
  var array;
  array = this.coll.toArray();
  $wrap(array, array.length);
  return array;
}
;
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1_0(val$it){
  this.val$it = val$it;
}

defineSeed(1322, 1, makeCastMap([Q$Iterator]), Collections$UnmodifiableMap$UnmodifiableEntrySet$1_0);
_.hasNext = function hasNext_16(){
  return this.val$it.hasNext();
}
;
_.next_0 = function next_17(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_0(dynamicCast(this.val$it.next_0(), Q$Map$Entry));
}
;
_.remove_0 = function remove_49(){
  throw new UnsupportedOperationException_0;
}
;
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_0(entry){
  this.entry = entry;
}

defineSeed(1323, 1, makeCastMap([Q$Map$Entry]), Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_0);
_.equals$ = function equals_67(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_4(){
  return this.entry.getKey();
}
;
_.getValue_0 = function getValue_40(){
  return this.entry.getValue_0();
}
;
_.hashCode$ = function hashCode_67(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_4(value_0){
  throw new UnsupportedOperationException_0;
}
;
_.toString$ = function toString_58(){
  return this.entry.toString$();
}
;
function Collections$UnmodifiableRandomAccessList_0(list){
  Collections$UnmodifiableList_0.call(this, list);
}

defineSeed(1324, 1317, makeCastMap([Q$Iterable, Q$Collection, Q$List]), Collections$UnmodifiableRandomAccessList_0);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = nullMethod;
  DAYS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$String, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function EmptyStackException_0(){
  RuntimeException_0.call(this);
}

defineSeed(1326, 97, makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]), EmptyStackException_0);
function HashSet_1(){
  this.map_0 = new HashMap_1;
}

function HashSet_2(map_0){
  this.map_0 = map_0;
}

defineSeed(1327, 601, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$Set]), HashSet_1);
function LinkedHashSet_0(){
  HashSet_2.call(this, new LinkedHashMap_1);
}

function LinkedHashSet_1(c){
  HashSet_2.call(this, new LinkedHashMap_1);
  $addAll_0(this, c);
}

defineSeed(1332, 1327, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$Set]), LinkedHashSet_0, LinkedHashSet_1);
function $add_18(this$static, o){
  return $add_16(this$static.arrayList, o);
}

function $contains_2(this$static, elem){
  return $indexOf_2(this$static.arrayList, elem, 0) != -1;
}

defineSeed(1335, 607, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List]));
_.add_0 = function add_22(index_0, o){
  $add_15(this.arrayList, index_0, o);
}
;
_.add_1 = function add_23(o){
  return $add_18(this, o);
}
;
_.addAll = function addAll_4(c){
  return $addAll_1(this.arrayList, c);
}
;
_.clear_0 = function clear_7(){
  $clear_5(this.arrayList);
}
;
_.contains_0 = function contains_15(elem){
  return $contains_2(this, elem);
}
;
_.get_1 = function get_40(index_0){
  return $get_8(this.arrayList, index_0);
}
;
_.indexOf_0 = function indexOf_4(elem){
  return $indexOf_2(this.arrayList, elem, 0);
}
;
_.isEmpty_0 = function isEmpty_13(){
  return this.arrayList.size_0 == 0;
}
;
_.iterator = function iterator_24(){
  return new AbstractList$IteratorImpl_0(this.arrayList);
}
;
_.remove_1 = function remove_52(index_0){
  return $remove_17(this.arrayList, index_0);
}
;
_.removeRange = function removeRange_1(fromIndex, endIndex){
  $removeRange(this.arrayList, fromIndex, endIndex);
}
;
_.set_0 = function set_9(index_0, elem){
  return $set_5(this.arrayList, index_0, elem);
}
;
_.size_1 = function size_30(){
  return this.arrayList.size_0;
}
;
_.subList = function subList_3(fromIndex, toIndex){
  return new AbstractList$SubList_0(this.arrayList, fromIndex, toIndex);
}
;
_.toArray = function toArray_9(){
  return $toArray_0(this.arrayList);
}
;
_.toArray_0 = function toArray_10(a){
  return $toArray_1(this.arrayList, a);
}
;
_.toString$ = function toString_60(){
  return $toString_0(this.arrayList);
}
;
function $pop_0(this$static){
  var sz;
  sz = this$static.arrayList.size_0;
  if (sz > 0) {
    return $remove_17(this$static.arrayList, sz - 1);
  }
   else {
    throw new EmptyStackException_0;
  }
}

function $push_3(this$static, o){
  $add_16(this$static.arrayList, o);
  return o;
}

function Stack_0(){
  this.arrayList = new ArrayList_0;
}

defineSeed(1334, 1335, makeCastMap([Q$Serializable, Q$Iterable, Q$Collection, Q$List]), Stack_0);
var Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang.', 'LongLibBase$LongEmul', null), _3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForArray('[Lcom.google.gwt.lang.', 'LongLibBase$LongEmul;', 1348, Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit), B_classLit = createForPrimitive('byte', ' B'), Ljava_lang_Byte_2_classLit = createForClass('java.lang.', 'Byte', 1260), _3Ljava_lang_Byte_2_classLit = createForArray('[Ljava.lang.', 'Byte;', 1349, Ljava_lang_Byte_2_classLit), J_classLit = createForPrimitive('long', ' J'), _3J_classLit = createForArray('', '[J', 1351, J_classLit), Ljava_lang_Character_2_classLit = createForClass('java.lang.', 'Character', 1263), _3Ljava_lang_Character_2_classLit = createForArray('[Ljava.lang.', 'Character;', 1352, Ljava_lang_Character_2_classLit), D_classLit = createForPrimitive('double', ' D'), _3D_classLit = createForArray('', '[D', 1353, D_classLit), Ljava_lang_Double_2_classLit = createForClass('java.lang.', 'Double', 1267), F_classLit = createForPrimitive('float', ' F'), Ljava_lang_Float_2_classLit = createForClass('java.lang.', 'Float', 1268), Ljava_lang_Long_2_classLit = createForClass('java.lang.', 'Long', 1273), _3Ljava_lang_Long_2_classLit = createForArray('[Ljava.lang.', 'Long;', 1355, Ljava_lang_Long_2_classLit), S_classLit = createForPrimitive('short', ' S'), Ljava_lang_Short_2_classLit = createForClass('java.lang.', 'Short', 1280), _3Ljava_lang_Short_2_classLit = createForArray('[Ljava.lang.', 'Short;', 1356, Ljava_lang_Short_2_classLit), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException', 1255), Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util.', 'AbstractList$SubList', 1302), Lcom_lemania_timetracking_shared_CoursProxy_2_classLit = createForInterface('com.lemania.timetracking.shared.', 'CoursProxy'), Lcom_google_web_bindery_requestfactory_shared_Receiver_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.', 'Receiver', 627), Lcom_google_web_bindery_requestfactory_shared_Receiver$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.', 'Receiver$1', 628), Lcom_lemania_timetracking_shared_EcoleProxy_2_classLit = createForInterface('com.lemania.timetracking.shared.', 'EcoleProxy'), Lcom_lemania_timetracking_client_event_ActionInProgressEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'ActionInProgressEvent', 744), Lcom_lemania_timetracking_client_event_ActionCompletedEvent_2_classLit = createForClass('com.lemania.timetracking.client.event.', 'ActionCompletedEvent', 743), Lcom_lemania_timetracking_shared_ProfessorProxy_2_classLit = createForInterface('com.lemania.timetracking.shared.', 'ProfessorProxy'), Lcom_lemania_timetracking_shared_LogTypeProxy_2_classLit = createForInterface('com.lemania.timetracking.shared.', 'LogTypeProxy'), Lcom_lemania_timetracking_shared_UserProxy_2_classLit = createForInterface('com.lemania.timetracking.shared.', 'UserProxy'), Lcom_lemania_timetracking_client_presenter_MainPagePresenterMyProxyImpl$2_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'MainPagePresenterMyProxyImpl$2', 816), Lcom_lemania_timetracking_client_presenter_MainPagePresenterMyProxyImpl$2$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'MainPagePresenterMyProxyImpl$2$1', 817), Lcom_lemania_timetracking_client_presenter_MainPagePresenterMyProxyImpl$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'MainPagePresenterMyProxyImpl$3', 818), Lcom_lemania_timetracking_client_presenter_MainPagePresenterMyProxyImpl$3$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'MainPagePresenterMyProxyImpl$3$1', 819), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$3_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$3', 881), Lcom_lemania_timetracking_client_presenter_TimeInputPresenterMyProxyImpl$3$1_2_classLit = createForClass('com.lemania.timetracking.client.presenter.', 'TimeInputPresenterMyProxyImpl$3$1', 882), Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util.', 'Collections$SingletonList', 1314), Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableCollection', 1315), Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableList', 1317), Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap', 1319), Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableSet', 1321), Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap$UnmodifiableEntrySet', 1320), Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry', 1323), Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableRandomAccessList', 1324), Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableCollectionIterator', 1316), Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableListIterator', 1318), Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap$UnmodifiableEntrySet$1', 1322), Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle', 174, Ljava_lang_Enum_2_classLit, values_3), _3Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$OutlineStyle;', 1360, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit), Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TableLayout', 194, Ljava_lang_Enum_2_classLit, values_6), _3Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$TableLayout;', 1363, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit), Lcom_google_gwt_dom_client_Style$OutlineStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$1', 175, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$2', 176, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$3', 177, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$4', 178, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$5', 179, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$6', 180, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$7', 181, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$8', 182, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$9', 183, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$TableLayout$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TableLayout$1', 195, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, null), Lcom_google_gwt_dom_client_Style$TableLayout$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TableLayout$2', 196, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, null), Lcom_google_gwt_user_cellview_client_Column_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'Column', 356), Lcom_google_gwt_user_cellview_client_Column$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'Column$1', 357), Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'TextColumn', 382), Lcom_google_gwt_view_client_SelectionChangeEvent_2_classLit = createForClass('com.google.gwt.view.client.', 'SelectionChangeEvent', 552), Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel_2_classLit = createForClass('com.google.gwt.view.client.', 'SelectionModel$AbstractSelectionModel', 553), Lcom_google_gwt_view_client_SingleSelectionModel_2_classLit = createForClass('com.google.gwt.view.client.', 'SingleSelectionModel', 555), Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel$1_2_classLit = createForClass('com.google.gwt.view.client.', 'SelectionModel$AbstractSelectionModel$1', 554), Lcom_google_web_bindery_requestfactory_shared_EntityProxy_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.', 'EntityProxy'), Lcom_google_web_bindery_requestfactory_shared_impl_IdFactory_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'IdFactory', 624), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestFactory_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestFactory', 623), Lcom_google_web_bindery_requestfactory_gwt_client_impl_AbstractClientRequestFactory_2_classLit = createForClass('com.google.web.bindery.requestfactory.gwt.client.impl.', 'AbstractClientRequestFactory', 622), Lcom_lemania_timetracking_shared_service_EcoleRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'EcoleRequestFactoryImpl', 1191), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestFactory$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestFactory$1', 643), Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit = createForEnum('com.google.web.bindery.requestfactory.shared.', 'WriteOperation', 630, Ljava_lang_Enum_2_classLit, values_17), _3Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit = createForArray('[Lcom.google.web.bindery.requestfactory.shared.', 'WriteOperation;', 1370, Lcom_google_web_bindery_requestfactory_shared_WriteOperation_2_classLit), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext', 632), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'IdMessage'), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit = createForEnum('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$Dialect', 637, Ljava_lang_Enum_2_classLit, values_18), _3Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit = createForArray('[Lcom.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$Dialect;', 1371, Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$State_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$State', 642), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$StandardPayloadDialect_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$StandardPayloadDialect', 641), Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'ResponseMessage'), Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'ServerFailureMessage'), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$MyConstraintViolation_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$MyConstraintViolation', 640), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect$1_2_classLit = createForEnum('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$Dialect$1', 638, Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit, null), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect$2_2_classLit = createForEnum('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$Dialect$2', 639, Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$Dialect_2_classLit, null), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$2', 633), Lcom_google_web_bindery_autobean_shared_AutoBeanVisitor_2_classLit = createForClass('com.google.web.bindery.autobean.shared.', 'AutoBeanVisitor', 565), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$3_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$3', 634), Ljava_util_Date_2_classLit = createForClass('java.util.', 'Date', 655), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$4_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$4', 635), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequestContext$5_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequestContext$5', 636), Lcom_google_web_bindery_requestfactory_shared_EntityProxyId_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.', 'EntityProxyId'), Lcom_google_web_bindery_requestfactory_shared_impl_AbstractRequest_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'AbstractRequest', 631), Lcom_google_web_bindery_autobean_shared_AutoBeanVisitor$ParameterizationVisitor_2_classLit = createForClass('com.google.web.bindery.autobean.shared.', 'AutoBeanVisitor$ParameterizationVisitor', 567), Lcom_lemania_timetracking_shared_service_EventSourceRequestTransport_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'EventSourceRequestTransport', 1198), Lcom_lemania_timetracking_shared_service_EventSourceRequestTransport$1_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'EventSourceRequestTransport$1', 1199), Lcom_google_web_bindery_requestfactory_gwt_client_DefaultRequestTransport_2_classLit = createForClass('com.google.web.bindery.requestfactory.gwt.client.', 'DefaultRequestTransport', 620), Lcom_google_web_bindery_requestfactory_gwt_client_DefaultRequestTransport$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.gwt.client.', 'DefaultRequestTransport$1', 621), Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Composite', 336), Lcom_google_gwt_user_cellview_client_AbstractHasData_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData', 335), Lcom_google_gwt_user_cellview_client_AbstractCellTable_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable', 334), Lcom_google_gwt_user_cellview_client_DataGrid_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid', 359), Lcom_google_gwt_user_cellview_client_DataGrid$TableWidget_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid$TableWidget', 362), Lcom_google_gwt_user_cellview_client_DataGrid$ResourcesAdapter_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid$ResourcesAdapter', 361), Lcom_google_gwt_user_cellview_client_DataGrid$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid$1', 360), Lcom_google_gwt_user_cellview_client_AbstractHasData$DefaultKeyboardSelectionHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$DefaultKeyboardSelectionHandler', 343), Lcom_google_gwt_user_cellview_client_AbstractCellTable$CellTableKeyboardSelectionHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$CellTableKeyboardSelectionHandler', 342), Lcom_google_gwt_user_cellview_client_AbstractCellTable$Impl_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$Impl', 344), Lcom_google_gwt_user_cellview_client_AbstractCellTable$ImplTrident_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$ImplTrident', 345), Lcom_google_gwt_user_cellview_client_AbstractCellTable$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$2', 339), Lcom_google_gwt_user_cellview_client_AbstractCellTable$3_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$3', 340), Lcom_google_gwt_user_cellview_client_AbstractCellTable$4_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$4', 341), Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$View', 348), Lcom_google_gwt_user_cellview_client_AbstractHasData$View$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$View$1', 349), Lcom_google_gwt_user_cellview_client_AbstractHasData$View$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$View$2', 350), Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit = createForEnum('com.google.gwt.user.cellview.client.', 'HasKeyboardPagingPolicy$KeyboardPagingPolicy', 376, Ljava_lang_Enum_2_classLit, values_12), _3Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit = createForArray('[Lcom.google.gwt.user.cellview.client.', 'HasKeyboardPagingPolicy$KeyboardPagingPolicy;', 1372, Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit), Lcom_google_gwt_user_cellview_client_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_2_classLit = createForEnum('com.google.gwt.user.cellview.client.', 'HasKeyboardSelectionPolicy$KeyboardSelectionPolicy', 377, Ljava_lang_Enum_2_classLit, values_13), _3Lcom_google_gwt_user_cellview_client_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_2_classLit = createForArray('[Lcom.google.gwt.user.cellview.client.', 'HasKeyboardSelectionPolicy$KeyboardSelectionPolicy;', 1373, Lcom_google_gwt_user_cellview_client_HasKeyboardSelectionPolicy$KeyboardSelectionPolicy_2_classLit), Lcom_google_gwt_view_client_CellPreviewEvent_2_classLit = createForClass('com.google.gwt.view.client.', 'CellPreviewEvent', 543), Lcom_google_gwt_user_cellview_client_HasDataPresenter_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter', 371), Lcom_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$DefaultState', 374), Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$PendingState', 375), Lcom_google_gwt_user_cellview_client_HasDataPresenter$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$1', 372), Lcom_google_gwt_user_cellview_client_HasDataPresenter$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$2', 373), Lcom_google_gwt_user_cellview_client_ColumnSortList_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'ColumnSortList', 358), Lcom_google_gwt_cell_client_AbstractCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractCell', 84), Lcom_google_gwt_cell_client_AbstractEditableCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractEditableCell', 85), Lcom_google_gwt_cell_client_EditTextCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'EditTextCell', 90), Lcom_google_gwt_cell_client_EditTextCell$ViewData_2_classLit = createForClass('com.google.gwt.cell.client.', 'EditTextCell$ViewData', 91), Lcom_google_gwt_cell_client_Cell$Context_2_classLit = createForClass('com.google.gwt.cell.client.', 'Cell$Context', 88), Lcom_google_gwt_cell_client_CheckboxCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'CheckboxCell', 89), Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable', 436), Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable', 435), Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$CellFormatter', 438), Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable$FlexCellFormatter', 437), Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$ColumnFormatter', 446), Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$1', 445), Lcom_google_gwt_view_client_AbstractDataProvider_2_classLit = createForClass('com.google.gwt.view.client.', 'AbstractDataProvider', 541), Lcom_google_gwt_view_client_ListDataProvider_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider', 546), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper', 547), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper$WrappedListIterator_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper$WrappedListIterator', 549), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper$1_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper$1', 548), Lcom_google_gwt_view_client_AbstractDataProvider$1_2_classLit = createForClass('com.google.gwt.view.client.', 'AbstractDataProvider$1', 542), Lcom_google_gwt_view_client_RangeChangeEvent_2_classLit = createForClass('com.google.gwt.view.client.', 'RangeChangeEvent', 551), Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel', 421), Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel', 489), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation', 493), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation$1', 494), Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$1', 490), Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$3', 491), Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$4', 492), Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel$1', 507), Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Event$NativePreviewEvent', 388), Lcom_google_gwt_cell_client_AbstractSafeHtmlCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractSafeHtmlCell', 86), Lcom_google_gwt_cell_client_TextCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'TextCell', 93), Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListBox', 466), Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLPanel', 444), Lcom_lemania_timetracking_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl', 1192), Lcom_lemania_timetracking_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl$2X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl$2X', 1193), Lcom_lemania_timetracking_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl$3X', 1194), Ljava_lang_Void_2_classLit = createForClass('java.lang.', 'Void', null), Lcom_google_gwt_text_shared_SimpleSafeHtmlRenderer_2_classLit = createForClass('com.google.gwt.text.shared.', 'SimpleSafeHtmlRenderer', 314), Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client.', 'LazyDomElement', 331), Lcom_google_gwt_cell_client_EditTextCell_1TemplateImpl_2_classLit = createForClass('com.google.gwt.cell.client.', 'EditTextCell_TemplateImpl', 92), Lcom_google_gwt_user_cellview_client_Header_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'Header', 378), Lcom_google_gwt_user_cellview_client_TextHeader_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'TextHeader', 383), Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client.', 'UiBinderUtil$TempAttachment', 333), Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalPanel', 524), Lcom_google_gwt_user_cellview_client_DataGrid_1Resources_1fr_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid_Resources_fr_InlineClientBundleGenerator', 363), Lcom_google_gwt_user_cellview_client_DataGrid_1Resources_1fr_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DataGrid_Resources_fr_InlineClientBundleGenerator$1', 364), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImpl', 353), Lcom_google_gwt_view_client_Range_2_classLit = createForClass('com.google.gwt.view.client.', 'Range', 550), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplTrident_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImplTrident', 354), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplTrident$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImplTrident$1', 355), Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl', 398), Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl$FreeNode', 399), Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Grid', 440), Lcom_google_web_bindery_requestfactory_shared_FanoutReceiver_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.', 'FanoutReceiver', 626), Lcom_google_gwt_user_client_ui_HeaderPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HeaderPanel', 452), Lcom_google_gwt_user_client_ui_HeaderPanel$WidgetProviderImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HeaderPanel$WidgetProviderImpl', 455), Lcom_google_gwt_user_client_ui_HeaderPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HeaderPanel$1', 453), Lcom_google_gwt_user_client_ui_HeaderPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HeaderPanel$2', 454), Lcom_google_gwt_user_client_ui_FiniteWidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FiniteWidgetIterator', 434), Lcom_google_gwt_user_client_ui_ResizeLayoutPanel$Impl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ResizeLayoutPanel$Impl', 496), Lcom_google_gwt_user_client_ui_ResizeLayoutPanel$ImplTrident_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ResizeLayoutPanel$ImplTrident', 497), Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ScrollPanel', 420), Lcom_google_gwt_user_client_ui_CustomScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel', 419), _3Lcom_google_gwt_user_client_ui_IsWidget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'IsWidget;', 1374, Lcom_google_gwt_user_client_ui_IsWidget_2_classLit), Lcom_google_gwt_user_client_ui_CustomScrollPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel$1', 422), Lcom_google_gwt_user_client_ui_CustomScrollPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel$2', 423), Lcom_google_gwt_user_client_ui_CustomScrollPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel$3', 424), Lcom_google_gwt_user_client_ui_CustomScrollPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel$4', 425), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactoryImpl', 1216), Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBoxBase', 488), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment', 519, Ljava_lang_Enum_2_classLit, values_14), _3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment;', 1375, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$1', 520, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$2', 521, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$3', 522, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$4', 523, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null), Lcom_google_gwt_i18n_client_AutoDirectionHandler_2_classLit = createForClass('com.google.gwt.i18n.client.', 'AutoDirectionHandler', 277), Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBoxBase', 487), Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBox', 486), Lcom_lemania_timetracking_shared_service_UserRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactoryImpl', 1230), Lcom_lemania_timetracking_shared_SettingOptionProxy_2_classLit = createForInterface('com.lemania.timetracking.shared.', 'SettingOptionProxy'), Lcom_lemania_timetracking_shared_service_SettingOptionRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'SettingOptionRequestFactoryImpl', 1225), Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util.', 'LinkedHashSet', 1332), Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder', 269), Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder$Method', 271), Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder$1', 270), Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestException', 272), Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client.', 'Request', 265), Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client.', 'Response', 268), Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client.', 'ResponseImpl', 267), Lcom_google_gwt_http_client_Request$RequestImplIE6To9$1_2_classLit = createForClass('com.google.gwt.http.client.', 'Request$RequestImplIE6To9$1', 266), Lcom_google_gwt_event_dom_client_ScrollEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ScrollEvent', 247), Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2_classLit = createForClass('com.google.gwt.safehtml.shared.', 'SafeHtmlBuilder', 308), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactoryImpl', 1210), Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CheckBox', 417), Lcom_google_gwt_view_client_DefaultSelectionEventManager_2_classLit = createForClass('com.google.gwt.view.client.', 'DefaultSelectionEventManager', 544), Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit = createForEnum('com.google.gwt.view.client.', 'DefaultSelectionEventManager$SelectAction', 545, Ljava_lang_Enum_2_classLit, values_15), _3Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit = createForArray('[Lcom.google.gwt.view.client.', 'DefaultSelectionEventManager$SelectAction;', 1380, Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit), Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable_TemplateImpl', 347), Lcom_google_gwt_user_cellview_client_AbstractCellTableBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTableBuilder', 346), Lcom_google_gwt_user_cellview_client_DefaultCellTableBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DefaultCellTableBuilder', 369), Lcom_google_gwt_user_cellview_client_AbstractHeaderOrFooterBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHeaderOrFooterBuilder', 351), Lcom_google_gwt_user_cellview_client_DefaultHeaderOrFooterBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DefaultHeaderOrFooterBuilder', 370), Lcom_google_gwt_user_cellview_client_AbstractHeaderOrFooterBuilder$TwoWayHashMap_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHeaderOrFooterBuilder$TwoWayHashMap', 352), Lcom_google_gwt_user_client_ui_CustomScrollPanel_1Resources_1fr_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel_Resources_fr_InlineClientBundleGenerator', 426), Lcom_google_gwt_user_client_ui_CustomScrollPanel_1Resources_1fr_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomScrollPanel_Resources_fr_InlineClientBundleGenerator$1', 427), Lcom_google_gwt_user_client_ui_AbstractNativeScrollbar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbstractNativeScrollbar', 409), Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeHorizontalScrollbar', 467), Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeVerticalScrollbar', 476), Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_1ResourcesTransparant_1fr_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeHorizontalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$1', 474), Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_1ResourcesTransparant_1fr_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeVerticalScrollbar_ResourcesTransparant_fr_InlineClientBundleGenerator$1', 483), Lcom_google_gwt_user_client_ui_SimpleCheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimpleCheckBox', 506), Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'LoadingStateChangeEvent', 379), Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'LoadingStateChangeEvent$DefaultLoadingState', 380), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl', 1217), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl$3X', 1220), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl', 1231), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl$5X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl$5X', 1237), Lcom_lemania_timetracking_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl', 1226), Lcom_lemania_timetracking_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl$2X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl$2X', 1227), Lcom_google_web_bindery_requestfactory_shared_impl_RequestData_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'RequestData', 651), Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestPermissionException', 273), Lcom_google_gwt_user_client_ui_ScrollImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ScrollImpl', 504), Lcom_google_gwt_user_client_ui_ScrollImpl$ScrollImplTrident_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ScrollImpl$ScrollImplTrident', 505), Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang.', 'NumberFormatException', 1279), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl', 1211), Lcom_google_web_bindery_autobean_gwt_client_impl_AbstractAutoBeanFactory_2_classLit = createForClass('com.google.web.bindery.autobean.gwt.client.impl.', 'AbstractAutoBeanFactory', 557), Lcom_google_web_bindery_requestfactory_shared_messages_MessageFactoryImpl_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'MessageFactoryImpl', 666), Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'InvocationMessage'), Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequest_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'JsonRpcRequest'), Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'OperationMessage'), Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'RequestMessage'), Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessage_2_classLit = createForInterface('com.google.web.bindery.requestfactory.shared.messages.', 'ViolationMessage'), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit = createForEnum('com.google.web.bindery.requestfactory.shared.messages.', 'IdMessage$Strength', 656, Ljava_lang_Enum_2_classLit, values_19), _3Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit = createForArray('[Lcom.google.web.bindery.requestfactory.shared.messages.', 'IdMessage$Strength;', 1382, Lcom_google_web_bindery_requestfactory_shared_messages_IdMessage$Strength_2_classLit), Lcom_google_web_bindery_requestfactory_shared_impl_SimpleProxyId_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'SimpleProxyId', 653), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl', null), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$EncodeState_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$EncodeState', 590), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$CoderCreator_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$CoderCreator', 588), Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit = createForInterface('com.google.web.bindery.autobean.shared.', 'Splittable'), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$CollectionCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$CollectionCoder', 589), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$EnumCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$EnumCoder', 591), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$HaltException_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$HaltException', 592), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$MapCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$MapCoder', 593), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$ObjectCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$ObjectCoder', 594), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$PropertyCoderCreator_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$PropertyCoderCreator', 595), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$PropertyGetter_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$PropertyGetter', 596), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$SplittableCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$SplittableCoder', 597), Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$ValueCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AutoBeanCodexImpl$ValueCoder', 598), Lcom_google_gwt_resources_client_CommonResources_1Bundle_1ie8_1fr_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.resources.client.', 'CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator', 300), Lcom_google_gwt_resources_client_CommonResources_1Bundle_1ie8_1fr_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.resources.client.', 'CommonResources_Bundle_ie8_fr_InlineClientBundleGenerator$1', 301), Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_1NativeHorizontalScrollbarUiBinderImpl$Widgets_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Widgets', 468), Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_1NativeVerticalScrollbarUiBinderImpl$Widgets_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Widgets', 477), Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit = createForInterface('com.google.web.bindery.autobean.shared.', 'AutoBean'), Lcom_google_web_bindery_autobean_shared_AutoBeanUtils$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.', 'AutoBeanUtils$1', 564), Lcom_google_web_bindery_autobean_shared_AutoBeanUtils$2_2_classLit = createForClass('com.google.web.bindery.autobean.shared.', 'AutoBeanUtils$2', 566), Ljava_math_BigDecimal_2_classLit = createForClass('java.math.', 'BigDecimal', 1289), Ljava_math_BigInteger_2_classLit = createForClass('java.math.', 'BigInteger', 1290), V_classLit = createForPrimitive('void', ' V'), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type', 569, Ljava_lang_Enum_2_classLit, values_16), _3Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit = createForArray('[Lcom.google.web.bindery.autobean.shared.', 'ValueCodex$Type;', 1383, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$1_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$1', 570, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$2_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$2', 577, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$3_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$3', 578, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$4_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$4', 579, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$5_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$5', 580, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$6_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$6', 581, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$7_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$7', 582, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$8_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$8', 583, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$9_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$9', 584, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$10_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$10', 571, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$11_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$11', 572, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$12_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$12', 573, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$13_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$13', 574, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$14_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$14', 575, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$15_2_classLit = createForEnum('com.google.web.bindery.autobean.shared.', 'ValueCodex$Type$15', 576, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null), Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ChangeEvent', 230), Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client.', 'StyleInjector$1', 223), Lcom_google_gwt_touch_client_TouchScroller_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller', 320), Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$TemporalPoint', 330), Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$MomentumCommand', 327), Lcom_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$MomentumTouchRemovalCommand', 329), Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand$1_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$MomentumCommand$1', 328), Lcom_google_gwt_touch_client_TouchScroller$1_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$1', 321), Lcom_google_gwt_touch_client_TouchScroller$2_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$2', 322), Lcom_google_gwt_touch_client_TouchScroller$3_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$3', 323), Lcom_google_gwt_touch_client_TouchScroller$4_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$4', 324), Lcom_google_gwt_touch_client_TouchScroller$5_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$5', 325), Lcom_google_gwt_touch_client_TouchScroller$6_2_classLit = createForClass('com.google.gwt.touch.client.', 'TouchScroller$6', 326), Lcom_google_gwt_user_cellview_client_RowHoverEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'RowHoverEvent', 381), Lcom_google_web_bindery_autobean_shared_impl_AbstractAutoBean_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AbstractAutoBean', 585), Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'InvocationMessageAutoBean', 660), _3Ljava_lang_Class_2_classLit = createForArray('[Ljava.lang.', 'Class;', 1384, Ljava_lang_Class_2_classLit), Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'InvocationMessageAutoBean$1', 661), Lcom_google_web_bindery_requestfactory_shared_messages_InvocationMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'InvocationMessageAutoBean$2', 662), Lcom_google_web_bindery_autobean_shared_impl_AbstractAutoBean$OneShotContext_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'AbstractAutoBean$OneShotContext', 586), Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequestAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'JsonRpcRequestAutoBean', 663), Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequestAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'JsonRpcRequestAutoBean$1', 664), Lcom_google_web_bindery_requestfactory_shared_messages_JsonRpcRequestAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'JsonRpcRequestAutoBean$2', 665), Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'RequestMessageAutoBean', 670), Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'RequestMessageAutoBean$1', 671), Lcom_google_web_bindery_requestfactory_shared_messages_RequestMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'RequestMessageAutoBean$2', 672), Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'OperationMessageAutoBean', 667), Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'OperationMessageAutoBean$1', 668), Lcom_google_web_bindery_requestfactory_shared_messages_OperationMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'OperationMessageAutoBean$2', 669), Ljava_util_Vector_2_classLit = createForClass('java.util.', 'Vector', 1335), Ljava_util_Stack_2_classLit = createForClass('java.util.', 'Stack', 1334), Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestTimeoutException', 274), Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'ArrayIndexOutOfBoundsException', 1256), Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchEvent', 249), Lcom_google_gwt_event_dom_client_TouchStartEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchStartEvent', 253), Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchEvent$TouchSupportDetector', 251), Lcom_google_gwt_event_dom_client_TouchMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchMoveEvent', 252), Lcom_google_gwt_event_dom_client_TouchEndEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchEndEvent', 250), Lcom_google_gwt_event_dom_client_TouchCancelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'TouchCancelEvent', 248), Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared.', 'AbstractRenderer', 313), Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughRenderer', 316), Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughParser', 315), _3Ljava_math_BigDecimal_2_classLit = createForArray('[Ljava.math.', 'BigDecimal;', 1385, Ljava_math_BigDecimal_2_classLit), _3Ljava_math_BigInteger_2_classLit = createForArray('[Ljava.math.', 'BigInteger;', 1386, Ljava_math_BigInteger_2_classLit), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'IdMessageAutoBean', 657), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'IdMessageAutoBean$1', 658), Lcom_google_web_bindery_requestfactory_shared_messages_IdMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'IdMessageAutoBean$2', 659), Lcom_lemania_timetracking_shared_service_EcoleRequestFactory_1EcoleRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'EcoleRequestFactory_EcoleRequestContextImpl_FactoryImpl', 1197), Lcom_lemania_timetracking_shared_service_ProfessorRequestFactory_1ProfessorRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'ProfessorRequestFactory_ProfessorRequestContextImpl_FactoryImpl', 1224), Lcom_lemania_timetracking_shared_service_UserRequestFactory_1UserRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'UserRequestFactory_UserRequestContextImpl_FactoryImpl', 1240), Lcom_lemania_timetracking_shared_service_SettingOptionRequestFactory_1SettingOptionRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'SettingOptionRequestFactory_SettingOptionRequestContextImpl_FactoryImpl', 1229), Lcom_google_web_bindery_requestfactory_shared_ServerFailure_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.', 'ServerFailure', 629), Lcom_google_gwt_dom_builder_shared_AbstractElementBuilderBase_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'AbstractElementBuilderBase', 132), Lcom_google_gwt_dom_builder_shared_HtmlElementBuilderBase_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlElementBuilderBase', 140), Lcom_google_gwt_dom_builder_shared_HtmlTableSectionBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlTableSectionBuilder', 150), Lcom_google_gwt_dom_builder_shared_ElementBuilderFactory_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderFactory', 133), Lcom_google_gwt_dom_builder_shared_HtmlBuilderFactory_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlBuilderFactory', 137), Lcom_lemania_timetracking_shared_service_LogTypeRequestFactory_1LogTypeRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogTypeRequestFactory_LogTypeRequestContextImpl_FactoryImpl', 1215), Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderImpl', 134), Lcom_google_gwt_dom_builder_shared_HtmlBuilderImpl_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlBuilderImpl', 138), Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl$StackNode_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderImpl$StackNode', 136), Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl$FastPeekStack_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderImpl$FastPeekStack', 135), Lcom_google_gwt_touch_client_DefaultMomentum_2_classLit = createForClass('com.google.gwt.touch.client.', 'DefaultMomentum', 317), Lcom_google_gwt_touch_client_Momentum$State_2_classLit = createForClass('com.google.gwt.touch.client.', 'Momentum$State', 318), Lcom_lemania_timetracking_shared_service_CoursRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'CoursRequestFactoryImpl', 1185), Lcom_lemania_timetracking_shared_LogProxy_2_classLit = createForInterface('com.lemania.timetracking.shared.', 'LogProxy'), Lcom_lemania_timetracking_shared_service_LogRequestFactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactoryImpl', 1200), Lcom_google_gwt_touch_client_Point_2_classLit = createForClass('com.google.gwt.touch.client.', 'Point', 319), Lemul_java_util_SetAutoBean_2_classLit = createForClass('emul.java.util.', 'SetAutoBean', 1253), Lemul_java_util_SetAutoBean$1_2_classLit = createForClass('emul.java.util.', 'SetAutoBean$1', 1254), Lcom_google_web_bindery_autobean_gwt_client_impl_ClientPropertyContext_2_classLit = createForClass('com.google.web.bindery.autobean.gwt.client.impl.', 'ClientPropertyContext', 558), Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ServerFailureMessageAutoBean', 676), Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ServerFailureMessageAutoBean$1', 677), Lcom_google_web_bindery_requestfactory_shared_messages_ServerFailureMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ServerFailureMessageAutoBean$2', 678), Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ResponseMessageAutoBean', 673), Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ResponseMessageAutoBean$1', 674), Lcom_google_web_bindery_requestfactory_shared_messages_ResponseMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ResponseMessageAutoBean$2', 675), Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessageAutoBean_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ViolationMessageAutoBean', 679), Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessageAutoBean$1_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ViolationMessageAutoBean$1', 680), Lcom_google_web_bindery_requestfactory_shared_messages_ViolationMessageAutoBean$2_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.messages.', 'ViolationMessageAutoBean$2', 681), Lemul_java_util_ListAutoBean_2_classLit = createForClass('emul.java.util.', 'ListAutoBean', 1245), Lemul_java_util_ListAutoBean$1_2_classLit = createForClass('emul.java.util.', 'ListAutoBean$1', 1246), Lemul_java_util_MapAutoBean_2_classLit = createForClass('emul.java.util.', 'MapAutoBean', 1249), Lemul_java_util_MapAutoBean$1_2_classLit = createForClass('emul.java.util.', 'MapAutoBean$1', 1250), Lemul_java_util_IteratorAutoBean_2_classLit = createForClass('emul.java.util.', 'IteratorAutoBean', 1243), Lemul_java_util_IteratorAutoBean$1_2_classLit = createForClass('emul.java.util.', 'IteratorAutoBean$1', 1244), Lemul_java_util_ListIteratorAutoBean_2_classLit = createForClass('emul.java.util.', 'ListIteratorAutoBean', 1247), Lemul_java_util_ListIteratorAutoBean$1_2_classLit = createForClass('emul.java.util.', 'ListIteratorAutoBean$1', 1248), Lemul_java_util_Map_1EntryAutoBean_2_classLit = createForClass('emul.java.util.', 'Map_EntryAutoBean', 1251), Lemul_java_util_Map_1EntryAutoBean$1_2_classLit = createForClass('emul.java.util.', 'Map_EntryAutoBean$1', 1252), Lemul_java_util_CollectionAutoBean_2_classLit = createForClass('emul.java.util.', 'CollectionAutoBean', 1241), Lemul_java_util_CollectionAutoBean$1_2_classLit = createForClass('emul.java.util.', 'CollectionAutoBean$1', 1242), Lcom_lemania_timetracking_shared_EcoleProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.timetracking.shared.', 'EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1157), Lcom_lemania_timetracking_shared_EcoleProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.timetracking.shared.', 'EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1158), Lcom_lemania_timetracking_shared_EcoleProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.timetracking.shared.', 'EcoleProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1159), Lcom_lemania_timetracking_shared_CoursProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.timetracking.shared.', 'CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1154), Lcom_lemania_timetracking_shared_CoursProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.timetracking.shared.', 'CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1155), Lcom_lemania_timetracking_shared_CoursProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.timetracking.shared.', 'CoursProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1156), Lcom_lemania_timetracking_shared_ProfessorProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.timetracking.shared.', 'ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1166), Lcom_lemania_timetracking_shared_ProfessorProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.timetracking.shared.', 'ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1167), Lcom_lemania_timetracking_shared_ProfessorProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.timetracking.shared.', 'ProfessorProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1168), Lcom_lemania_timetracking_shared_UserProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.timetracking.shared.', 'UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1172), Lcom_lemania_timetracking_shared_UserProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.timetracking.shared.', 'UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1173), Lcom_lemania_timetracking_shared_UserProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.timetracking.shared.', 'UserProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1174), Lcom_lemania_timetracking_shared_SettingOptionProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.timetracking.shared.', 'SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1169), Lcom_lemania_timetracking_shared_SettingOptionProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.timetracking.shared.', 'SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1170), Lcom_lemania_timetracking_shared_SettingOptionProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.timetracking.shared.', 'SettingOptionProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1171), Lcom_lemania_timetracking_shared_LogTypeProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.timetracking.shared.', 'LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1163), Lcom_lemania_timetracking_shared_LogTypeProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.timetracking.shared.', 'LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1164), Lcom_lemania_timetracking_shared_LogTypeProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.timetracking.shared.', 'LogTypeProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1165), Lcom_google_gwt_dom_builder_shared_HtmlTableRowBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlTableRowBuilder', 149), Lcom_lemania_timetracking_shared_service_CoursRequestFactory_1CoursRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl', 1186), Lcom_lemania_timetracking_shared_service_CoursRequestFactory_1CoursRequestContextImpl$3X_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl$3X', 1187), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl', 1201), Ljava_util_EmptyStackException_2_classLit = createForClass('java.util.', 'EmptyStackException', 1326), Lcom_google_web_bindery_requestfactory_shared_EntityProxyChange_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.', 'EntityProxyChange', 625), Lcom_google_web_bindery_requestfactory_shared_impl_SimpleEntityProxyId_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.', 'SimpleEntityProxyId', 652), Lcom_google_gwt_dom_builder_shared_HtmlDivBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlDivBuilder', 139), Lcom_google_gwt_dom_builder_shared_HtmlElementBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlElementBuilder', 141), Lcom_google_gwt_dom_builder_shared_HtmlInputBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlInputBuilder', 142), Lcom_google_gwt_dom_builder_shared_HtmlLIBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlLIBuilder', 143), Lcom_google_gwt_dom_builder_shared_HtmlOptionBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlOptionBuilder', 144), Lcom_google_gwt_dom_builder_shared_HtmlSpanBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlSpanBuilder', 145), Lcom_google_gwt_dom_builder_shared_HtmlStylesBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlStylesBuilder', 146), Lcom_google_gwt_dom_builder_shared_HtmlStylesBuilder$FastStringMapClient_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlStylesBuilder$FastStringMapClient', 147), Lcom_google_gwt_dom_builder_shared_HtmlTableCellBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlTableCellBuilder', 148), Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_1NativeHorizontalScrollbarUiBinderImpl_1GenBundle_1fr_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator', 469), Lcom_google_gwt_user_client_ui_NativeHorizontalScrollbar_1NativeHorizontalScrollbarUiBinderImpl_1GenBundle_1fr_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$1', 470), Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_1NativeVerticalScrollbarUiBinderImpl_1GenBundle_1fr_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator', 478), Lcom_google_gwt_user_client_ui_NativeVerticalScrollbar_1NativeVerticalScrollbarUiBinderImpl_1GenBundle_1fr_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle_fr_InlineClientBundleGenerator$1', 479), Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'StringIndexOutOfBoundsException', 1286), Lcom_google_web_bindery_requestfactory_shared_impl_posers_DatePoser_2_classLit = createForClass('com.google.web.bindery.requestfactory.shared.impl.posers.', 'DatePoser', 654), Lcom_lemania_timetracking_shared_service_CoursRequestFactory_1CoursRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'CoursRequestFactory_CoursRequestContextImpl_FactoryImpl', 1190), Lcom_lemania_timetracking_shared_service_LogRequestFactory_1LogRequestContextImpl_1FactoryImpl_2_classLit = createForClass('com.lemania.timetracking.shared.service.', 'LogRequestFactory_LogRequestContextImpl_FactoryImpl', 1209), Lcom_lemania_timetracking_shared_LogProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory_2_classLit = createForClass('com.lemania.timetracking.shared.', 'LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory', 1160), Lcom_lemania_timetracking_shared_LogProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$1_2_classLit = createForClass('com.lemania.timetracking.shared.', 'LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$1', 1161), Lcom_lemania_timetracking_shared_LogProxyAutoBean_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1EntityProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1ValueProxyCategory_1com_1google_1web_1bindery_1requestfactory_1shared_1impl_1BaseProxyCategory$2_2_classLit = createForClass('com.lemania.timetracking.shared.', 'LogProxyAutoBean_com_google_web_bindery_requestfactory_shared_impl_EntityProxyCategory_com_google_web_bindery_requestfactory_shared_impl_ValueProxyCategory_com_google_web_bindery_requestfactory_shared_impl_BaseProxyCategory$2', 1162), Lcom_google_web_bindery_autobean_shared_impl_SplittableList_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableList', 606), Lcom_google_web_bindery_autobean_shared_impl_SplittableSet_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSet', 608), Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableComplexMap', 599), Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableComplexMap$1', 600), Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableComplexMap$1$1', 603), Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableComplexMap$1$1$1', 604), Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$2_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableComplexMap$2', 605), Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSimpleMap', 609), Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSimpleMap$1', 610), Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSimpleMap$1$1', 611), Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSimpleMap$1$1$1', 612), Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$2_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSimpleMap$2', 613), Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$2$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl.', 'SplittableSimpleMap$2$1', 614);
$entry(onLoad)(20);
