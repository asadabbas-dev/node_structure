import { Column, Entity } from "typeorm";

@Entity("FINCOSTGROUPDTL", { schema: "dbo" })
export class Fincostgroupdtl {
  @Column("varchar", { name: "GROUPCODE", length: 10 })
  groupcode: string;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;
}
