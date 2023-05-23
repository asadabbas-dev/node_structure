import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_ISSUERETURN",
  ["requesttype", "requesttypecode", "requestno", "requestdate"],
  { unique: true }
)
@Entity("ISSUERETURN", { schema: "dbo" })
export class Issuereturn {
  @Column("int", { primary: true, name: "REQUESTTYPE" })
  requesttype: number;

  @Column("varchar", { primary: true, name: "REQUESTTYPECODE", length: 5 })
  requesttypecode: string;

  @Column("numeric", {
    primary: true,
    name: "REQUESTNO",
    precision: 18,
    scale: 0,
  })
  requestno: number;

  @Column("date", { primary: true, name: "REQUESTDATE" })
  requestdate: Date;

  @Column("varchar", { name: "REQUESTNUMBER", nullable: true, length: 12 })
  requestnumber: string | null;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "WARECODE", nullable: true, length: 10 })
  warecode: string | null;

  @Column("varchar", { name: "FROMWARECODE", nullable: true, length: 10 })
  fromwarecode: string | null;

  @Column("varchar", { name: "FROMCOSTCODE", nullable: true, length: 10 })
  fromcostcode: string | null;

  @Column("varchar", { name: "PARTYCODE", nullable: true, length: 10 })
  partycode: string | null;

  @Column("int", { name: "ISSUETYPE" })
  issuetype: number;

  @Column("varchar", { name: "REFNO", length: 20 })
  refno: string;

  @Column("date", { name: "REFDATE" })
  refdate: Date;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
