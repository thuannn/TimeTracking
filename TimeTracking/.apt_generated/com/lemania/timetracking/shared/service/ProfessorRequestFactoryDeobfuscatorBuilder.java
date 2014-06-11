// Automatically Generated -- DO NOT EDIT
// com.lemania.timetracking.shared.service.ProfessorRequestFactory
package com.lemania.timetracking.shared.service;
import java.util.Arrays;
import com.google.web.bindery.requestfactory.vm.impl.OperationData;
import com.google.web.bindery.requestfactory.vm.impl.OperationKey;
public final class ProfessorRequestFactoryDeobfuscatorBuilder extends com.google.web.bindery.requestfactory.vm.impl.Deobfuscator.Builder {
{
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
withOperation(new OperationKey("y4Erx6ku_NihiukA3faS_HYuP7E="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/util/List;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/util/List;)Ljava/util/List;")
  .withMethodName("listAllByCourseList")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("SRfXXzEnM$4J86WOg5M_pJH28Hw="),
  new OperationData.Builder()
  .withClientMethodDescriptor("()Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("()V")
  .withMethodName("initialize")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("fn0y14SFjm2fiaJ$NsdUMYOo5Gk="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;I)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;I)Ljava/util/List;")
  .withMethodName("listAllByCourseWithTime")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("V$DB2$k$L6KOdOLJxLo83lbU2I8="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllActiveByCourse")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("t5IFoQOswm3E3Q3W2NR8VliWqVA="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/ProfessorProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Professor;)V")
  .withMethodName("removeProfessor")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("oY1IS4WJEW8Vu8$ZlpCgUnGA1AI="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/Boolean;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/Boolean;)Ljava/util/List;")
  .withMethodName("listAllActive")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("yI87RsyoDsBZEvpUZqK4aITdDI8="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Lcom/lemania/timetracking/shared/ProfessorProxy;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Lcom/lemania/timetracking/server/Professor;)Lcom/lemania/timetracking/server/Professor;")
  .withMethodName("saveAndReturn")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withOperation(new OperationKey("ywncKjv4F7rkiVzVbLxtJTCHnls="),
  new OperationData.Builder()
  .withClientMethodDescriptor("(Ljava/lang/String;)Lcom/google/web/bindery/requestfactory/shared/Request;")
  .withDomainMethodDescriptor("(Ljava/lang/String;)Ljava/util/List;")
  .withMethodName("listAllByCourse")
  .withRequestContext("com.lemania.timetracking.shared.service.ProfessorRequestFactory$ProfessorRequestContext")
  .build());
withRawTypeToken("9A6Z0BBecsT3KkZYCXf_ZkIbd8M=", "com.lemania.timetracking.shared.CoursProxy");
withRawTypeToken("QVZ$sjfjvTS6fRjG5V4DJUTmz2M=", "com.lemania.timetracking.shared.ProfessorProxy");
withRawTypeToken("w1Qg$YHpDaNcHrR5HZ$23y518nA=", "com.google.web.bindery.requestfactory.shared.EntityProxy");
withRawTypeToken("FXHD5YU0TiUl3uBaepdkYaowx9k=", "com.google.web.bindery.requestfactory.shared.BaseProxy");
withClientToDomainMappings("com.lemania.timetracking.server.Cours", Arrays.asList("com.lemania.timetracking.shared.CoursProxy"));
withClientToDomainMappings("com.lemania.timetracking.server.Professor", Arrays.asList("com.lemania.timetracking.shared.ProfessorProxy"));
}}
