import { Column, Entity, Index } from "typeorm";

@Index("PK_MATERIALISSUEHDR", ["requesttype", "requesttypecode", "requestno"], {
  unique: true,
})
@Entity("MATISSUEREQHDR", { schema: "dbo" })
export class Matissuereqhdr {
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

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "WARECODE", length: 10 })
  warecode: string;

  @Column("varchar", { name: "TRANSCOSTCODE", nullable: true, length: 10 })
  transcostcode: string | null;

  @Column("varchar", { name: "TRANSWARECODE", nullable: true, length: 10 })
  transwarecode: string | null;

  @Column("bit", { name: "FIRSTAPPROVAL" })
  firstapproval: boolean;

  @Column("datetime", { name: "FAPPROVALDATE", nullable: true })
  fapprovaldate: Date | null;

  @Column("bit", { name: "SECONDAPPROVAL" })
  secondapproval: boolean;

  @Column("datetime", { name: "SAPPROVALDATE", nullable: true })
  sapprovaldate: Date | null;

  @Column("bit", { name: "FINALAPPROVAL" })
  finalapproval: boolean;

  @Column("datetime", { name: "LAPPROVALDATE", nullable: true })
  lapprovaldate: Date | null;

  @Column("int", { name: "ISSUETYPE" })
  issuetype: number;

  @Column("varchar", { name: "REQUESTBY", length: 50 })
  requestby: string;

  @Column("date", { name: "REQUESTDATE" })
  requestdate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
