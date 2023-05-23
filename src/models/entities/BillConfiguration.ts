import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_BillConfiguration", ["documentId"], { unique: true })
@Entity("BillConfiguration", { schema: "dbo" })
export class BillConfiguration {
  @PrimaryGeneratedColumn({ type: "int", name: "DocumentId" })
  documentId: number;

  @Column("varchar", { name: "DocumentName", length: 50 })
  documentName: string;

  @Column("varchar", { name: "DocumentCode", length: 3 })
  documentCode: string;

  @Column("bit", { name: "FirstApproval", default: () => "(0)" })
  firstApproval: boolean;

  @Column("bit", { name: "SecondApproval", default: () => "(0)" })
  secondApproval: boolean;

  @Column("bit", { name: "FinalApproval", default: () => "(0)" })
  finalApproval: boolean;

  @Column("int", { name: "ItemType", default: () => "(0)" })
  itemType: number;

  @Column("int", { name: "InventoryFlag", default: () => "(0)" })
  inventoryFlag: number;

  @Column("int", { name: "MasterId", nullable: true })
  masterId: number | null;

  @Column("varchar", { name: "FinanceDoccode", nullable: true, length: 3 })
  financeDoccode: string | null;

  @Column("int", {
    name: "FinanceDocType",
    nullable: true,
    default: () => "(0)",
  })
  financeDocType: number | null;

  @Column("varchar", { name: "AccountCode", nullable: true, length: 20 })
  accountCode: string | null;

  @Column("varchar", { name: "DBCRCODE", nullable: true, length: 20 })
  dbcrcode: string | null;

  @Column("bit", { name: "AutoFlag", default: () => "(0)" })
  autoFlag: boolean;

  @Column("bit", { name: "Postflag", default: () => "(0)" })
  postflag: boolean;

  @Column("varchar", { name: "GST", nullable: true, length: 10 })
  gst: string | null;

  @Column("varchar", { name: "PST", nullable: true, length: 10 })
  pst: string | null;

  @Column("varchar", { name: "AdvanceTax", nullable: true, length: 10 })
  advanceTax: string | null;

  @Column("varchar", { name: "OtherTax", nullable: true, length: 10 })
  otherTax: string | null;

  @Column("varchar", { name: "TaxSubledger", nullable: true, length: 20 })
  taxSubledger: string | null;

  @Column("varchar", { name: "TaxCostCode", nullable: true, length: 10 })
  taxCostCode: string | null;
}
