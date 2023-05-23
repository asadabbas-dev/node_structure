import { Column, Entity, Index } from "typeorm";

@Index("PK_GRATUITYRULEDTL", ["gratuityruleid", "gratuityid"], { unique: true })
@Entity("GRATUITYRULEDTL", { schema: "dbo" })
export class Gratuityruledtl {
  @Column("int", { primary: true, name: "GRATUITYRULEID" })
  gratuityruleid: number;

  @Column("int", { primary: true, name: "GRATUITYID" })
  gratuityid: number;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
