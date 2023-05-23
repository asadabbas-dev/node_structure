import { Column, Entity } from "typeorm";

@Entity("Tableupdate", { schema: "dbo" })
export class Tableupdate {
  @Column("varchar", { name: "coumn1", length: 500 })
  coumn1: string;

  @Column("varchar", { name: "coumn2", nullable: true, length: 50 })
  coumn2: string | null;
}
