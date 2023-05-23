import { Column, Entity, Index } from "typeorm";

@Index("PK_FINBANKMASTER_1", ["accountcode"], { unique: true })
@Entity("FINBANKMASTER", { schema: "dbo" })
export class Finbankmaster {
  @Column("varchar", { primary: true, name: "ACCOUNTCODE", length: 10 })
  accountcode: string;

  @Column("varchar", { name: "BANKNAME", length: 150 })
  bankname: string;

  @Column("varchar", { name: "BANKADDRESS", length: 150 })
  bankaddress: string;

  @Column("varchar", { name: "BANKTYPE", length: 10 })
  banktype: string;

  @Column("varchar", { name: "CURRENCYCODE", length: 3 })
  currencycode: string;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "ACCOUNTNO", length: 25 })
  accountno: string;

  @Column("varchar", { name: "TRANSFERNO", nullable: true, length: 25 })
  transferno: string | null;

  @Column("numeric", {
    name: "ODLIMIT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  odlimit: number | null;

  @Column("varchar", { name: "CHEQUENO", nullable: true, length: 50 })
  chequeno: string | null;

  @Column("varchar", { name: "PCRACCCODE", nullable: true, length: 10 })
  pcracccode: string | null;

  @Column("varchar", { name: "PCRCOSTCODE", nullable: true, length: 10 })
  pcrcostcode: string | null;

  @Column("varchar", { name: "PDRACCCODE", nullable: true, length: 10 })
  pdracccode: string | null;

  @Column("varchar", { name: "PDRCOSTCODE", nullable: true, length: 10 })
  pdrcostcode: string | null;

  @Column("varchar", { name: "PROCESSDOCID", nullable: true, length: 10 })
  processdocid: string | null;

  @Column("varchar", { name: "CANCELDOCID", nullable: true, length: 10 })
  canceldocid: string | null;

  @Column("varchar", { name: "PROCESSDOCTYPE", nullable: true, length: 5 })
  processdoctype: string | null;

  @Column("varchar", { name: "PROCESSSUBTYPE", nullable: true, length: 10 })
  processsubtype: string | null;

  @Column("varchar", { name: "CANCELDOCTYPE", nullable: true, length: 5 })
  canceldoctype: string | null;

  @Column("varchar", { name: "CANCELSUBTYPE", nullable: true, length: 10 })
  cancelsubtype: string | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
