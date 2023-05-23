import { Column, Entity, Index } from "typeorm";

@Index("PK_MATERIALISSUEDTL", ["requestnumber", "itemid", "priceid"], {
  unique: true,
})
@Entity("MATISSUEREQDTL", { schema: "dbo" })
export class Matissuereqdtl {
  @Column("varchar", { primary: true, name: "REQUESTNUMBER", length: 52 })
  requestnumber: string;

  @Column("numeric", { primary: true, name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("numeric", {
    primary: true,
    name: "PRICEID",
    precision: 18,
    scale: 0,
  })
  priceid: number;

  @Column("int", { name: "REQUESTQTY" })
  requestqty: number;

  @Column("numeric", { name: "COSTPRICE", precision: 18, scale: 2 })
  costprice: number;

  @Column("int", { name: "TRANSFERQTY", default: () => "(0)" })
  transferqty: number;

  @Column("numeric", {
    name: "TOTALAMOUNT",
    nullable: true,
    precision: 29,
    scale: 2,
  })
  totalamount: number | null;
}
