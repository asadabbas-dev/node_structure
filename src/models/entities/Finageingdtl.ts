import { Column, Entity, Index } from "typeorm";

@Index("PK_FINAGEINGDTL", ["ageid", "sno"], { unique: true })
@Entity("FINAGEINGDTL", { schema: "dbo" })
export class Finageingdtl {
  @Column("int", { primary: true, name: "AGEID" })
  ageid: number;

  @Column("int", { primary: true, name: "SNO" })
  sno: number;

  @Column("int", { name: "FROM" })
  from: number;

  @Column("int", { name: "TO" })
  to: number;
}
