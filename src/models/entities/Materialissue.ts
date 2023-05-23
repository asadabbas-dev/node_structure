import { Column, Entity, Index } from "typeorm";

@Index("PK_MATERIALISSUE", ["requesttype", "requesttypecode", "requestno"], {
  unique: true,
})
@Entity("MATERIALISSUE", { schema: "dbo" })
export class Materialissue {
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

  @Column("varchar", { name: "REQUESTNUMBER", nullable: true, length: 12 })
  requestnumber: string | null;

  @Column("date", { name: "REQUESTDATE", nullable: true })
  requestdate: Date | null;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "WARECODE", nullable: true, length: 10 })
  warecode: string | null;

  @Column("varchar", { name: "TRANSCOSTCODE", nullable: true, length: 10 })
  transcostcode: string | null;

  @Column("varchar", { name: "TRANSWARECODE", nullable: true, length: 10 })
  transwarecode: string | null;

  @Column("int", { name: "ISSUETYPE" })
  issuetype: number;

  @Column("varchar", { name: "ISUUEREQNO", nullable: true, length: 12 })
  isuuereqno: string | null;

  @Column("date", { name: "ISSUEREQDATE", nullable: true })
  issuereqdate: Date | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
