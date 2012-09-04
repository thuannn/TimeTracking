// Automatically Generated -- DO NOT EDIT
// com.lemania.timetracking.shared.service.ProfessorRequestFactory
package com.lemania.timetracking.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class ProfessorRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
withOperation(new OperationKey("T1XbREcvj0LoJwulkz$xn3OK2Mg="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/ProfessorProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Professor;)Ljava/util/List;")
  .withMethodName("listEcoles")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("IAiZWd5l08yJfHM9yN8_PPbImY4="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/ProfessorProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Professor;)V")
  .withMethodName("save")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("BOpvP4Molsxs_uC9xiPbDEYeJZw="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()Ljava/util/List;")
  .withMethodName("listAll")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("t5IFoQOswm3E3Q3W2NR8VliWqVA="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/ProfessorProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Professor;)V")
  .withMethodName("removeProfessor")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("yI87RsyoDsBZEvpUZqK4aITdDI8="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/ProfessorProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Professor;)Lcom/lemania/timetracking/server/Professor;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withRawTypeToken("wEmO7GIXGVmYnHTr$bRzd1vhTHM=", "com.lemania.timetracking.shared.EcoleProxy");
withRawTypeToken("QVZ$sjfjvTS6fRjG5V4DJUTmz2M=", "com.lemania.timetracking.shared.ProfessorProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.timetracking.server.Ecole", Arrays.asList("com.lemania.timetracking.shared.EcoleProxy"));
withClientToDomainMappings("com.lemania.timetracking.server.Professor", Arrays.asList("com.lemania.timetracking.shared.ProfessorProxy"));
}}
