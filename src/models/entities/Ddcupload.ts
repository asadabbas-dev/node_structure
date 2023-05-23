import { Column, Entity } from "typeorm";

@Entity("DDCUPLOAD", { schema: "dbo" })
export class Ddcupload {
  @Column("varchar", { name: "DDCCODE", nullable: true, length: 50 })
  ddccode: string | null;

  @Column("varchar", { name: "TRADENAME", nullable: true, length: 1000 })
  tradename: string | null;

  @Column("varchar", { name: "SCIENTIFICCODE", length: 50 })
  scientificcode: string;

  @Column("varchar", { name: "INGREDIENT", nullable: true, length: 1000 })
  ingredient: string | null;

  @Column("varchar", { name: "DOSAGEFORMPACK", nullable: true, length: 1000 })
  dosageformpack: string | null;

  @Column("varchar", { name: "ROUTEOFADMIN", nullable: true, length: 100 })
  routeofadmin: string | null;

  @Column("varchar", { name: "PACKPRICE", nullable: true, length: 50 })
  packprice: string | null;

  @Column("varchar", { name: "UNIT", nullable: true, length: 50 })
  unit: string | null;

  @Column("varchar", { name: "MANUFACTURER", nullable: true, length: 500 })
  manufacturer: string | null;

  @Column("varchar", { name: "SUPPLIER", nullable: true, length: 500 })
  supplier: string | null;
}
