// Automatically Generated -- DO NOT EDIT
// com.lemania.timetracking.shared.service.EcoleRequestFactory
package com.lemania.timetracking.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class EcoleRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("B57efEqQlqOYC_qMXPpn$_IMuYc="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/EcoleProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Ecole;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.timetracking.shared.service.EcoleRequestFactory$EcoleRequestContext")
  .build());
withOperation(new OperationKey("8ASuoEZfzTuorFp4rjYOW8w8jYg="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.EcoleRequestFactory$EcoleRequestContext")
  .build());
withOperation(new OperationKey("Fs$dWINWMromRUPDXKZdyrOQnOs="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/EcoleProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Ecole;)V")
  .withMethodName("removeEcole")
  .withRequestContext("com.lemania.timetracking.shared.service.EcoleRequestFactory$EcoleRequestContext")
  .build());
withOperation(new OperationKey("9EsiXw3x9Vb9cvKxBmpxVD60090="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/EcoleProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Ecole;)Lcom/lemania/timetracking/server/Ecole;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.timetracking.shared.service.EcoleRequestFactory$EcoleRequestContext")
  .build());
withRawTypeToken("wEmO7GIXGVmYnHTr$bRzd1vhTHM=", "com.lemania.timetracking.shared.EcoleProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.timetracking.server.Ecole", Arrays.asList("com.lemania.timetracking.shared.EcoleProxy"));
}}
