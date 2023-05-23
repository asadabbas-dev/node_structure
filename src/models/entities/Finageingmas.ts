import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FINAGEINGMAS", ["ageid"], { unique: true })
@Entity("FINAGEINGMAS", { schema: "dbo" })
export class Finageingmas {
  @PrimaryGeneratedColumn({ type: "int", name: "AGEID" })
  ageid: number;

  @Column("varchar", { name: "AGENAME", length: 50 })
  agename: string;
}
