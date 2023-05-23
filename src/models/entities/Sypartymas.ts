import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SYPARTYMAS_1", ["partycode"], { unique: true })
@Entity("SYPARTYMAS", { schema: "dbo" })
export class Sypartymas {
  @PrimaryGeneratedColumn({ type: "int", name: "PARTYID" })
  partyid: number;

  @Column("varchar", { name: "COMPCODE", length: 5 })
  compcode: string;

  @Column("varchar", { name: "PARTYTYPE", length: 2 })
  partytype: string;

  @Column("varchar", { primary: true, name: "PARTYCODE", length: 20 })
  partycode: string;

  @Column("varchar", { name: "PARTYNAME", length: 100 })
  partyname: string;

  @Column("int", { name: "MAINPARTYID" })
  mainpartyid: number;

  @Column("int", { name: "PARTYCATEGORY" })
  partycategory: number;

  @Column("varchar", { name: "CONTACTPERSON", length: 50 })
  contactperson: string;

  @Column("varchar", { name: "CONTACTNO", length: 25 })
  contactno: string;

  @Column("varchar", { name: "EMAIL", length: 50 })
  email: string;

  @Column("varchar", { name: "ADDRESS", length: 100 })
  address: string;

  @Column("int", { name: "RCREDITDAYS" })
  rcreditdays: number;

  @Column("int", { name: "PCREDITDAYS" })
  pcreditdays: number;

  @Column("numeric", { name: "RCREDITLIMIT", precision: 18, scale: 0 })
  rcreditlimit: number;

  @Column("numeric", { name: "PCREDITLIMIT", precision: 18, scale: 0 })
  pcreditlimit: number;

  @Column("bit", { name: "PAYMENTHOLD" })
  paymenthold: boolean;

  @Column("int", { name: "PAYTYPE", default: () => "(0)" })
  paytype: number;

  @Column("bit", { name: "ISINSURANCE", default: () => "(0)" })
  isinsurance: boolean;

  @Column("int", { name: "PriceId", default: () => "(0)" })
  priceId: number;

  @Column("varchar", { name: "GST", nullable: true, length: 50 })
  gst: string | null;

  @Column("varchar", { name: "NTN", nullable: true, length: 50 })
  ntn: string | null;

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
