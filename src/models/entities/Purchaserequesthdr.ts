import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_PURCHASEREQUESTHDR_1",
  ["requesttype", "requesttypecode", "requestno", "issuetype"],
  { unique: true }
)
@Entity("PURCHASEREQUESTHDR", { schema: "dbo" })
export class Purchaserequesthdr {
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

  @Column("int", { primary: true, name: "ISSUETYPE" })
  issuetype: number;

  @Column("varchar", { name: "REQUESTNUMBER", nullable: true, length: 12 })
  requestnumber: string | null;

  @Column("varchar", { name: "REQUESTBY", length: 50 })
  requestby: string;

  @Column("date", { name: "REQUESTDATE" })
  requestdate: Date;

  @Column("varchar", { name: "COSTCODE", length: 20 })
  costcode: string;

  @Column("varchar", { name: "WARECODE", nullable: true, length: 10 })
  warecode: string | null;

  @Column("varchar", { name: "TRANSWARECODE", nullable: true, length: 10 })
  transwarecode: string | null;

  @Column("varchar", { name: "TRANSCOSTCODE", nullable: true, length: 10 })
  transcostcode: string | null;

  @Column("varchar", { name: "REMARKS" })
  remarks: string;

  @Column("int", { name: "MODULECODE" })
  modulecode: number;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
