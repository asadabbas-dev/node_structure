import { Column, Entity, Index } from "typeorm";

@Index("PK_FINEXPENSECONFIG_1", ["accountcode", "sourcecostcode", "costcode"], {
  unique: true,
})
@Entity("FINEXPENSECONFIG", { schema: "dbo" })
export class Finexpenseconfig {
  @Column("varchar", { primary: true, name: "ACCOUNTCODE", length: 12 })
  accountcode: string;

  @Column("varchar", { primary: true, name: "SOURCECOSTCODE", length: 10 })
  sourcecostcode: string;

  @Column("varchar", { primary: true, name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("numeric", { name: "PERCENTAGE", precision: 18, scale: 2 })
  percentage: number;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
