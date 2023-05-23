import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MASTERITEM_1", ["itemid", "compcode", "itemcode"], { unique: true })
@Entity("MASTERITEM", { schema: "dbo" })
export class Masteritem {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "ITEMID",
    precision: 18,
    scale: 0,
  })
  itemid: number;

  @Column("varchar", { primary: true, name: "COMPCODE", length: 5 })
  compcode: string;

  @Column("int", { name: "ITEMTYPE" })
  itemtype: number;

  @Column("int", { name: "ITEMCATEGORY" })
  itemcategory: number;

  @Column("int", { name: "ITEMGROUP" })
  itemgroup: number;

  @Column("varchar", { primary: true, name: "ITEMCODE", length: 50 })
  itemcode: string;

  @Column("varchar", { name: "ITEMNAME", length: 500 })
  itemname: string;

  @Column("int", { name: "CODETYPE" })
  codetype: number;

  @Column("int", { name: "MANUFACTURE" })
  manufacture: number;

  @Column("int", { name: "FORM", nullable: true })
  form: number | null;

  @Column("int", { name: "MODEL", nullable: true })
  model: number | null;

  @Column("int", { name: "COLOUR", nullable: true })
  colour: number | null;

  @Column("int", { name: "REORDERLEVEL", nullable: true })
  reorderlevel: number | null;

  @Column("int", { name: "REORDERQTY", nullable: true })
  reorderqty: number | null;

  @Column("int", { name: "REDLEVEL", nullable: true })
  redlevel: number | null;

  @Column("int", { name: "YELLOWLEVEL", nullable: true })
  yellowlevel: number | null;

  @Column("varchar", { name: "RACKNO", nullable: true, length: 50 })
  rackno: string | null;

  @Column("bit", { name: "ISBATCH", default: () => "(1)" })
  isbatch: boolean;

  @Column("bit", { name: "ISACTIVE", default: () => "(0)" })
  isactive: boolean;

  @Column("varchar", { name: "SALESACCOUNT", nullable: true, length: 50 })
  salesaccount: string | null;

  @Column("varchar", { name: "CONSUMEACCOUNT", nullable: true, length: 50 })
  consumeaccount: string | null;

  @Column("varchar", { name: "PURCHASEACCOUNT", nullable: true, length: 50 })
  purchaseaccount: string | null;

  @Column("varchar", { name: "IPSALESACCOUNT", nullable: true, length: 50 })
  ipsalesaccount: string | null;

  @Column("varchar", { name: "ERSALESACCOUNT", nullable: true, length: 50 })
  ersalesaccount: string | null;

  @Column("int", { name: "MATERIALTYPE", default: () => "(0)" })
  materialtype: number;

  @Column("int", { name: "GST", default: () => "(0)" })
  gst: number;

  @Column("int", { name: "PST", default: () => "(0)" })
  pst: number;

  @Column("int", { name: "ADVANCETAX", default: () => "(0)" })
  advancetax: number;

  @Column("int", { name: "OTHERTAX", default: () => "(0)" })
  othertax: number;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
