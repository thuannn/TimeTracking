// Automatically Generated -- DO NOT EDIT
// com.lemania.timetracking.shared.service.LogTypeRequestFactory
package com.lemania.timetracking.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class LogTypeRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("6lwGHhkcEZgJwVKhEsuhdLKDNU4="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/LogTypeProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/LogType;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.timetracking.shared.service.LogTypeRequestFactory$LogTypeRequestContext")
  .build());
withOperation(new OperationKey("cIE5M8ZO8E_gfYUVGSqnszIg2m0="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.timetracking.shared.service.LogTypeRequestFactory$LogTypeRequestContext")
  .build());
withOperation(new OperationKey("a4g9gZ79OAWgJvEMb1SrFcYOYLc="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/LogTypeProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/LogType;)Lcom/lemania/timetracking/server/LogType;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.timetracking.shared.service.LogTypeRequestFactory$LogTypeRequestContext")
  .build());
withOperation(new OperationKey("5NNp0L2l2ZdYAvTkgphtaRygK4U="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/LogTypeProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/LogType;)V")
  .withMethodName("removeLogType")
  .withRequestContext("com.lemania.timetracking.shared.service.LogTypeRequestFactory$LogTypeRequestContext")
  .build());
withOperation(new OperationKey("9_d6ngqwh69Q9p5il7xLdp$O0Eo="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.timetracking.shared.service.LogTypeRequestFactory$LogTypeRequestContext")
  .build());
withOperation(new OperationKey("tPqW$mcU$NfZt9T1aQTt8kiSNcU="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.LogTypeRequestFactory$LogTypeRequestContext")
  .build());
withRawTypeToken("ML1FfLRPAgqTS9_67fKg1FOfeok=", "com.lemania.timetracking.shared.LogTypeProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.timetracking.server.LogType", Arrays.asList("com.lemania.timetracking.shared.LogTypeProxy"));
}}
