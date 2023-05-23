import { Column, Entity, Index } from "typeorm";

@Index("PK_PURSTOCKMERGEDTL", ["mergenumber", "itemid", "priceid", "batchno"], {
  unique: true,
})
@Entity("PURSTOCKMERGEDTL", { schema: "dbo" })
export class Purstockmergedtl {
  @Column("varchar", { primary: true, name: "MERGENUMBER", length: 15 })
  mergenumber: string;

  @Column("numeric", { primary: true, name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("int", { primary: true, name: "PRICEID" })
  priceid: number;

  @Column("varchar", { primary: true, name: "BATCHNO", length: 50 })
  batchno: string;

  @Column("date", { name: "BATCHDATE", nullable: true })
  batchdate: Date | null;

  @Column("date", { name: "BATCHEXPIRY", nullable: true })
  batchexpiry: Date | null;

  @Column("int", { name: "REQUESTQTY" })
  requestqty: number;

  @Column("numeric", { name: "PRICE", precision: 18, scale: 2 })
  price: number;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;

  @Column("varchar", { name: "DOCTYPE", length: 5 })
  doctype: string;

  @Column("varchar", { name: "SUBTYPE", length: 5 })
  subtype: string;

  @Column("numeric", { name: "MERGEITEMID", precision: 18, scale: 0 })
  mergeitemid: number;

  @Column("int", { name: "MERGEPRICEID" })
  mergepriceid: number;

  @Column("varchar", { name: "MERGEBATCHNO", length: 50 })
  mergebatchno: string;

  @Column("date", { name: "MERGEBATCHDATE", nullable: true })
  mergebatchdate: Date | null;

  @Column("date", { name: "MERGEBATCHEXPIRY", nullable: true })
  mergebatchexpiry: Date | null;

  @Column("int", { name: "MERGEQTY" })
  mergeqty: number;

  @Column("numeric", { name: "MERGEPRICE", precision: 18, scale: 2 })
  mergeprice: number;

  @Column("varchar", { name: "MERGEDOCTYPE", length: 5 })
  mergedoctype: string;

  @Column("varchar", { name: "MERGESUBTYPE", length: 5 })
  mergesubtype: string;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
