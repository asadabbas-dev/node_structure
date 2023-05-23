import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterCharges", ["chargeId", "chargeCode"], { unique: true })
@Entity("MasterCharges", { schema: "dbo" })
export class MasterCharges {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "ChargeId",
    precision: 18,
    scale: 0,
  })
  chargeId: number;

  @Column("varchar", { primary: true, name: "ChargeCode", length: 20 })
  chargeCode: string;

  @Column("varchar", { name: "ServiceGroup", length: 50 })
  serviceGroup: string;

  @Column("varchar", { name: "ChargeName", length: 200 })
  chargeName: string;

  @Column("varchar", { name: "LongDescription", length: 200 })
  longDescription: string;

  @Column("varchar", { name: "InternationalCode", nullable: true, length: 50 })
  internationalCode: string | null;

  @Column("int", { name: "CodeType" })
  codeType: number;

  @Column("varchar", { name: "AccountCode", length: 50 })
  accountCode: string;

  @Column("varchar", { name: "IPAccountCode", nullable: true, length: 50 })
  ipAccountCode: string | null;

  @Column("varchar", { name: "ERAccountCode", nullable: true, length: 50 })
  erAccountCode: string | null;

  @Column("int", { name: "PackageVisitCount", default: () => "(0)" })
  packageVisitCount: number;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;

  @Column("bit", { name: "ServiceEdit", default: () => "(0)" })
  serviceEdit: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
