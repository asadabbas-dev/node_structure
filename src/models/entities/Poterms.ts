import { Column, Entity } from "typeorm";

@Entity("POTERMS", { schema: "dbo" })
export class Poterms {
  @Column("varchar", { name: "TERMCODE", length: 10 })
  termcode: string;

  @Column("varchar", { name: "TERMS" })
  terms: string;
}
