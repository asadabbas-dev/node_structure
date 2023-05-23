import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_ReclaimMaster", ["batchId"], { unique: true })
@Entity("ReclaimMaster", { schema: "dbo" })
export class ReclaimMaster {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "BatchId",
    precision: 18,
    scale: 0,
  })
  batchId: number;

  @Column("varchar", { name: "BatchPrefix", length: 3 })
  batchPrefix: string;

  @Column("varchar", { name: "BatchNumber", nullable: true, length: 10 })
  batchNumber: string | null;

  @Column("date", { name: "BatchDate" })
  batchDate: Date;

  @Column("varchar", { name: "BatchFileName", nullable: true, length: 50 })
  batchFileName: string | null;

  @Column("int", { name: "TPAId" })
  tpaId: number;

  @Column("int", { name: "TotalClaim" })
  totalClaim: number;

  @Column("numeric", { name: "TotalClaimAmount", precision: 18, scale: 2 })
  totalClaimAmount: number;

  @Column("bit", { name: "Uploaded", default: () => "(0)" })
  uploaded: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
