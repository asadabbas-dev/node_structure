import { Column, Entity } from "typeorm";

@Entity("ITEMGENERIC", { schema: "dbo" })
export class Itemgeneric {
  @Column("numeric", { name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("int", { name: "GENERIC" })
  generic: number;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
