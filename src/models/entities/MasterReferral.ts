import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterReferral", ["referralId"], { unique: true })
@Entity("MasterReferral", { schema: "dbo" })
export class MasterReferral {
  @PrimaryGeneratedColumn({ type: "int", name: "ReferralId" })
  referralId: number;

  @Column("varchar", { name: "ReferralName", length: 150 })
  referralName: string;

  @Column("varchar", { name: "ContactNumber", nullable: true, length: 50 })
  contactNumber: string | null;

  @Column("varchar", { name: "Email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "Description", nullable: true, length: 150 })
  description: string | null;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("smalldatetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("smalldatetime", { name: "ModifyDate" })
  modifyDate: Date;
}
