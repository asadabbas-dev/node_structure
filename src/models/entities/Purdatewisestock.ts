import { Column, Entity, Index } from "typeorm";

@Index("PK_PURDATEWISESTOCK", ["stockdate", "warecode", "itemid", "priceid"], {
  unique: true,
})
@Entity("PURDATEWISESTOCK", { schema: "dbo" })
export class Purdatewisestock {
  @Column("date", { primary: true, name: "STOCKDATE" })
  stockdate: Date;

  @Column("varchar", { primary: true, name: "WARECODE", length: 10 })
  warecode: string;

  @Column("numeric", { primary: true, name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("numeric", {
    primary: true,
    name: "PRICEID",
    precision: 18,
    scale: 0,
  })
  priceid: number;

  @Column("int", { name: "REQUESTTYPE", default: () => "(0)" })
  requesttype: number;

  @Column("int", { name: "CLBALQTY" })
  clbalqty: number;

  @Column("numeric", { name: "CLBALPRICE", precision: 18, scale: 2 })
  clbalprice: number;

  @Column("numeric", { name: "CLBALAMOUNT", precision: 18, scale: 2 })
  clbalamount: number;
}
