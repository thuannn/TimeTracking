// Automatically Generated -- DO NOT EDIT
// com.lemania.timetracking.shared.service.AssignmentRequestFactory
package com.lemania.timetracking.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class AssignmentRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("DzrCPIbz7HAHVRh7Cw3NWos3LKI="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/AssignmentProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Assignment;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.timetracking.shared.service.AssignmentRequestFactory$AssignmentRequestContext")
  .build());
withOperation(new OperationKey("vNQGa_4pIcVG7TpJJ6B0kLJ3Dos="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.AssignmentRequestFactory$AssignmentRequestContext")
  .build());
withOperation(new OperationKey("nXzBSZ9$tRbKBBgjUY2gRKt05FY="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.AssignmentRequestFactory$AssignmentRequestContext")
  .build());
withOperation(new OperationKey("3fPbw27cOetNE4BqwD3xZbsy_Jw="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/AssignmentProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Assignment;)V")
  .withMethodName("removeAssignment")
  .withRequestContext("com.lemania.timetracking.shared.service.AssignmentRequestFactory$AssignmentRequestContext")
  .build());
withOperation(new OperationKey("CA8Tcwn2pHVY3qEQdMGoeXJlqEM="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.timetracking.shared.service.AssignmentRequestFactory$AssignmentRequestContext")
  .build());
withOperation(new OperationKey("t4VxZpmpymI5EZBHunEw3I6vgq4="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Lcom/lemania/timetracking/server/Assignment;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.timetracking.shared.service.AssignmentRequestFactory$AssignmentRequestContext")
  .build());
withOperation(new OperationKey("PUeI7jOsqr7P1vAiRnnbF_Xyb5Q="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/AssignmentProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Assignment;)Lcom/lemania/timetracking/server/Assignment;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.timetracking.shared.service.AssignmentRequestFactory$AssignmentRequestContext")
  .build());
withRawTypeToken("nZbZVLrq3Nvi3xgPJFIvRwOnXEo=", "com.lemania.timetracking.shared.AssignmentProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.timetracking.server.Assignment", Arrays.asList("com.lemania.timetracking.shared.AssignmentProxy"));
}}
