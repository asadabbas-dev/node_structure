import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPAPPROVALRIGHTS", ["empid"], { unique: true })
@Entity("EMPAPPROVALRIGHTS", { schema: "dbo" })
export class Empapprovalrights {
  @Column("int", { primary: true, name: "EMPID" })
  empid: number;

  @Column("bit", { name: "FAPPROVAL" })
  fapproval: boolean;

  @Column("varchar", { name: "FCOSTCENTRE", nullable: true, length: 10 })
  fcostcentre: string | null;

  @Column("int", { name: "FGROUP", nullable: true })
  fgroup: number | null;

  @Column("bit", { name: "SAPPROVAL" })
  sapproval: boolean;

  @Column("varchar", { name: "SCOSTCENTRE", nullable: true, length: 10 })
  scostcentre: string | null;

  @Column("int", { name: "SGROUP", nullable: true })
  sgroup: number | null;

  @Column("bit", { name: "LAPPROVAL" })
  lapproval: boolean;

  @Column("varchar", { name: "LCOSTCENTRE", nullable: true, length: 10 })
  lcostcentre: string | null;

  @Column("int", { name: "LGROUP", nullable: true })
  lgroup: number | null;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
