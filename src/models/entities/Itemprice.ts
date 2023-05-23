import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_ITEMPRICE", ["priceid"], { unique: true })
@Entity("ITEMPRICE", { schema: "dbo" })
export class Itemprice {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "PRICEID",
    precision: 18,
    scale: 0,
  })
  priceid: number;

  @Column("numeric", { name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("int", { name: "BRAND" })
  brand: number;

  @Column("int", { name: "PACKAGE" })
  package: number;

  @Column("int", { name: "SIZE" })
  size: number;

  @Column("numeric", { name: "COSTPRICE", precision: 18, scale: 2 })
  costprice: number;

  @Column("numeric", { name: "SALEPRICE", precision: 18, scale: 2 })
  saleprice: number;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
