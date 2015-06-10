// Automatically Generated -- DO NOT EDIT
// com.lemania.timetracking.shared.service.SettingOptionRequestFactory
package com.lemania.timetracking.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class SettingOptionRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("LQkUuZ$pk6Ccu$KeNX9EzDQpPzU="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/SettingOptionProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/SettingOption;)V")
  .withMethodName("removeSettingOption")
  .withRequestContext("com.lemania.timetracking.shared.service.SettingOptionRequestFactory$SettingOptionRequestContext")
  .build());
withOperation(new OperationKey("wtxSs$uzFmur4x3itVwd9YzGzUA="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.timetracking.shared.service.SettingOptionRequestFactory$SettingOptionRequestContext")
  .build());
withOperation(new OperationKey("swLwGEeypS$TgbC_6YVrBdTjjjQ="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/SettingOptionProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/SettingOption;)Lcom/lemania/timetracking/server/SettingOption;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.timetracking.shared.service.SettingOptionRequestFactory$SettingOptionRequestContext")
  .build());
withOperation(new OperationKey("70eRtg4k$dzp6_jfFqwNHr4oy24="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.timetracking.shared.service.SettingOptionRequestFactory$SettingOptionRequestContext")
  .build());
withOperation(new OperationKey("FraVUXZHouisEv8pV$yhCOfbRV0="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.SettingOptionRequestFactory$SettingOptionRequestContext")
  .build());
withRawTypeToken("XExGMRoBOuid61Pt3s2oU9wTiXw=", "com.lemania.timetracking.shared.SettingOptionProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.timetracking.server.SettingOption", Arrays.asList("com.lemania.timetracking.shared.SettingOptionProxy"));
}}
