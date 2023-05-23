import { Column, Entity } from "typeorm";

@Entity("EMPSIGNATURE", { schema: "dbo" })
export class Empsignature {
  @Column("int", { name: "EMPID" })
  empid: number;

  @Column("image", { name: "SIGNATURE", nullable: true })
  signature: Buffer | null;

  @Column("image", { name: "PHOTO", nullable: true })
  photo: Buffer | null;
}
