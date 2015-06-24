// Automatically Generated -- DO NOT EDIT
// com.lemania.timetracking.shared.service.LogRequestFactory
package com.lemania.timetracking.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class LogRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("O7gb32zJhuWVMfKLRpcrbA5ufds="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)Ljava/util/List;")
  .withMethodName("batchUpdate")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("xnPISWZ4lBR9rHCoRwANJ28cPz4="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("batchUpdate")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("tDC7lLOJfVdsA4iVyX907h2IS_U="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/LogProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Log;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("ppgHbdsCjY9F$gPBQ7NdM7Kb_CM="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAllFullDetail")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("Z9jONGDxCKtP$8lWnGHVODUZCf8="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/LogProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Log;)V")
  .withMethodName("removeLog")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("o9i_UuShEjF$Gd$7shm4aORWsWc="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllFullDetailByProf")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("FlPc0OtewVFA7nSBQyfJXiJh$lg="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;II)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;II)Ljava/util/List;")
  .withMethodName("listAllFullDetailByProf")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("9i$cjMWx0a5wDkXS2I7tWJpvo8A="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(IILjava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(IILjava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllFullDetailByManager")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("5h14jyFhSA0RGLHOcpBdXq$DtWU="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(II)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(II)Ljava/util/List;")
  .withMethodName("listAllFullDetailByMonth")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("rPUIasPiIEUgs$O7xIkrKCFLwqY="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/LogProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Log;)Lcom/lemania/timetracking/server/Log;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("FOoPXC2CiNB9rNCivSfcImstgfE="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("rPl4K6fdVW7Khbh5XG__wSa8jn4="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("jYwYNZ2GdAHpRkHITOENfbCme_E="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("6O_bTyUtbbARCoUx5gZwNiTrEpM="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)V")
  .withMethodName("updateLogStatus")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withOperation(new OperationKey("EtkNafzDOYwy1M$QC1LOstR3Dpg="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllFullDetailByDepartment")
  .withRequestContext("com.lemania.timetracking.shared.service.LogRequestFactory$LogRequestContext")
  .build());
withRawTypeToken("16SpWH2YVyznesd8b4Pdep_GTzI=", "com.lemania.timetracking.shared.LogProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.timetracking.server.Log", Arrays.asList("com.lemania.timetracking.shared.LogProxy"));
}}
