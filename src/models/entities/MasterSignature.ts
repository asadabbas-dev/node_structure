import { Column, Entity, Index } from "typeorm";

@Index("PK_MasterSignature", ["userId"], { unique: true })
@Entity("MasterSignature", { schema: "dbo" })
export class MasterSignature {
  @Column("varchar", { primary: true, name: "UserId", length: 10 })
  userId: string;

  @Column("image", { name: "Signature" })
  signature: Buffer;
}
