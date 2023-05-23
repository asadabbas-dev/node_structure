import { Column, Entity, Index } from "typeorm";

@Index("PK_PURSTOCKADJUSTMENTHDR", ["adjustmentcode", "adjustmentno"], {
  unique: true,
})
@Entity("PURSTOCKADJUSTMENTHDR", { schema: "dbo" })
export class Purstockadjustmenthdr {
  @Column("varchar", { primary: true, name: "ADJUSTMENTCODE", length: 5 })
  adjustmentcode: string;

  @Column("numeric", {
    primary: true,
    name: "ADJUSTMENTNO",
    precision: 18,
    scale: 0,
  })
  adjustmentno: number;

  @Column("date", { name: "ADJUSTMENTDATE" })
  adjustmentdate: Date;

  @Column("varchar", { name: "ADJUSTMENTNUMBER", nullable: true, length: 12 })
  adjustmentnumber: string | null;

  @Column("numeric", { name: "EXCESSAMOUNT", precision: 18, scale: 2 })
  excessamount: number;

  @Column("numeric", { name: "SHORTAGEAMOUNT", precision: 18, scale: 2 })
  shortageamount: number;

  @Column("int", { name: "ITEMTYPE" })
  itemtype: number;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "WARECODE", length: 10 })
  warecode: string;

  @Column("varchar", { name: "ACCOUNTCODE", length: 15 })
  accountcode: string;

  @Column("varchar", { name: "DOCTYPE", length: 5 })
  doctype: string;

  @Column("varchar", { name: "SUBTYPE", length: 5 })
  subtype: string;

  @Column("bit", { name: "FIRSTAPPROVAL", nullable: true })
  firstapproval: boolean | null;

  @Column("varchar", { name: "FAPPROVEBY", nullable: true, length: 50 })
  fapproveby: string | null;

  @Column("datetime", { name: "FAPPROVALDATE", nullable: true })
  fapprovaldate: Date | null;

  @Column("bit", { name: "SECONDAPPROVAL", nullable: true })
  secondapproval: boolean | null;

  @Column("varchar", { name: "SAPPROVEDBY", nullable: true, length: 50 })
  sapprovedby: string | null;

  @Column("datetime", { name: "SAPPROVALDATE", nullable: true })
  sapprovaldate: Date | null;

  @Column("bit", { name: "FINALAPPROVAL", nullable: true })
  finalapproval: boolean | null;

  @Column("varchar", { name: "LAPPROVEDBY", nullable: true, length: 50 })
  lapprovedby: string | null;

  @Column("datetime", { name: "LAPPROVALDATE", nullable: true })
  lapprovaldate: Date | null;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("bit", { name: "ISACTIVE", default: () => "(0)" })
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
