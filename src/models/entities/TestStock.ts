import { Column, Entity } from "typeorm";

@Entity("TESTStock", { schema: "dbo" })
export class TestStock {
  @Column("int", { name: "id" })
  id: number;

  @Column("varchar", { name: "warecode", length: 50 })
  warecode: string;

  @Column("int", { name: "itemid" })
  itemid: number;

  @Column("int", { name: "priceid" })
  priceid: number;

  @Column("int", { name: "clbqty" })
  clbqty: number;

  @Column("int", { name: "qty" })
  qty: number;

  @Column("bit", { name: "updated", default: () => "(0)" })
  updated: boolean;
}
