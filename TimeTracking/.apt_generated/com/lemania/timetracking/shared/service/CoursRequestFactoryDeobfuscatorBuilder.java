// Automatically Generated -- DO NOT EDIT
// com.lemania.timetracking.shared.service.CoursRequestFactory
package com.lemania.timetracking.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class CoursRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("8ZfojIzS2mRmrMJ9upuqVN0IfPc="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/CoursProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Cours;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.timetracking.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("yN7F8RR6LGTv$2c$d_vWYQc7I9k="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/CoursProxy;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Cours;Ljava/lang/String;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.timetracking.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("BLIV222KyyIVKvUHXh4RiZPB5Sg="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("BD99uupV94bnmaljBiFceseWORw="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("6DcIyf7zINDgSw5iDC85PdEGYis="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/CoursProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Cours;)V")
  .withMethodName("removeCours")
  .withRequestContext("com.lemania.timetracking.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("qG25sMlCZBaUJcqz8pZ3Y4sofgc="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.timetracking.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withOperation(new OperationKey("rbmJhIFcA5GVgrckSnOI018NXMk="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/CoursProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Cours;)Lcom/lemania/timetracking/server/Cours;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.timetracking.shared.service.CoursRequestFactory$CoursRequestContext")
  .build());
withRawTypeToken("9A6Z0BBecsT3KkZYCXf_ZkIbd8M=", "com.lemania.timetracking.shared.CoursProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.timetracking.server.Cours", Arrays.asList("com.lemania.timetracking.shared.CoursProxy"));
}}
