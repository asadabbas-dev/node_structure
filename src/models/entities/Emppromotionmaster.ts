import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPPROMOTIONMASTER", ["transid"], { unique: true })
@Entity("EMPPROMOTIONMASTER", { schema: "dbo" })
export class Emppromotionmaster {
  @Column("int", { primary: true, name: "TRANSID" })
  transid: number;

  @Column("int", { name: "TRANSTYPE" })
  transtype: number;

  @Column("smallint", { name: "EFFECTTYPE" })
  effecttype: number;

  @Column("date", { name: "EFFECTFROM" })
  effectfrom: Date;

  @Column("date", { name: "EFFECTTO", nullable: true })
  effectto: Date | null;

  @Column("varchar", { name: "EMPCODE", length: 15 })
  empcode: string;

  @Column("int", { name: "EMPGROUPID" })
  empgroupid: number;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("int", { name: "LOCATIONID" })
  locationid: number;

  @Column("int", { name: "DESIGNATIONID" })
  designationid: number;

  @Column("int", { name: "GRADEID" })
  gradeid: number;

  @Column("int", { name: "CATEGORYID" })
  categoryid: number;

  @Column("int", { name: "PASSAGEID" })
  passageid: number;

  @Column("int", { name: "TICKETTYPEID" })
  tickettypeid: number;

  @Column("bit", { name: "FAMILYTICKET" })
  familyticket: boolean;

  @Column("int", { name: "NOOFFTICKET", nullable: true })
  nooffticket: number | null;

  @Column("int", { name: "NOOFYTICKET", nullable: true })
  noofyticket: number | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
