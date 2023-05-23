import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Masterpassage } from "./Masterpassage";
import { Masterpystatus } from "./Masterpystatus";

@Index("PK_EMPLOYEEMASTER", ["empid"], { unique: true })
@Entity("EMPLOYEEMASTER", { schema: "dbo" })
export class Employeemaster {
  @Column("int", { primary: true, name: "EMPID" })
  empid: number;

  @Column("int", { name: "EMPTYPE" })
  emptype: number;

  @Column("varchar", { name: "EMPCODE", nullable: true, length: 16 })
  empcode: string | null;

  @Column("varchar", { name: "EMPNAME", length: 100 })
  empname: string;

  @Column("date", { name: "STATUSDATE" })
  statusdate: Date;

  @Column("date", { name: "JOINDATE" })
  joindate: Date;

  @Column("date", { name: "BIRTHDATE" })
  birthdate: Date;

  @Column("date", { name: "BENDATE" })
  bendate: Date;

  @Column("int", { name: "EMPGROUPID" })
  empgroupid: number;

  @Column("int", { name: "VISASTATUSID" })
  visastatusid: number;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("int", { name: "LOCATIONID" })
  locationid: number;

  @Column("int", { name: "DESIGNATIONID" })
  designationid: number;

  @Column("int", { name: "NATIONALITYID" })
  nationalityid: number;

  @Column("int", { name: "GRADEID" })
  gradeid: number;

  @Column("int", { name: "CATEGORYID" })
  categoryid: number;

  @Column("int", { name: "ACCOMODATEID" })
  accomodateid: number;

  @Column("int", { name: "RELIGIONID" })
  religionid: number;

  @Column("int", { name: "MARITIALSTATUSID" })
  maritialstatusid: number;

  @Column("int", { name: "TICKETTYPEID" })
  tickettypeid: number;

  @Column("varchar", { name: "GENDER", length: 6 })
  gender: string;

  @Column("bit", { name: "FAMILYTICKET" })
  familyticket: boolean;

  @Column("int", { name: "NOOFFTICKET", nullable: true })
  nooffticket: number | null;

  @Column("int", { name: "NOOFYTICKET", nullable: true })
  noofyticket: number | null;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Column("int", { name: "INSURANCEID" })
  insuranceid: number;

  @Column("int", { name: "PROBATIONPERIOD", nullable: true })
  probationperiod: number | null;

  @Column("int", { name: "CONTRACTTYPEID" })
  contracttypeid: number;

  @Column("bit", { name: "NATTYPE" })
  nattype: boolean;

  @Column("bit", { name: "APPOINTMENT" })
  appointment: boolean;

  @Column("bit", { name: "ADMISSION" })
  admission: boolean;

  @Column("bit", { name: "RADIOLOGIST" })
  radiologist: boolean;

  @Column("bit", { name: "PATHOLOGIST" })
  pathologist: boolean;

  @Column("bit", { name: "SURGEON" })
  surgeon: boolean;

  @Column("bit", { name: "ANESTHETIST", default: () => "(0)" })
  anesthetist: boolean;

  @Column("varchar", { name: "LICENSENO", nullable: true, length: 50 })
  licenseno: string | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;

  @Column("varchar", { name: "EMPPREFIX", length: 10 })
  empprefix: string;

  @Column("varchar", { name: "OLDEMPCODE", nullable: true, length: 50 })
  oldempcode: string | null;

  @ManyToOne(
    () => Masterpassage,
    (masterpassage) => masterpassage.employeemasters
  )
  @JoinColumn([{ name: "PASSAGEID", referencedColumnName: "passageid" }])
  passage: Masterpassage;

  @ManyToOne(
    () => Masterpystatus,
    (masterpystatus) => masterpystatus.employeemasters
  )
  @JoinColumn([{ name: "STATUSID", referencedColumnName: "statusid" }])
  status: Masterpystatus;
}
