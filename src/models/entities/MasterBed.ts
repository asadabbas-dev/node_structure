import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterBed", ["bedId", "bedNumber"], { unique: true })
@Entity("MasterBed", { schema: "dbo" })
export class MasterBed {
  @PrimaryGeneratedColumn({ type: "int", name: "BedId" })
  bedId: number;

  @Column("varchar", { primary: true, name: "BedNumber", length: 50 })
  bedNumber: string;

  @Column("int", { name: "WardId" })
  wardId: number;

  @Column("int", { name: "ChargeId" })
  chargeId: number;

  @Column("int", { name: "BedStatus", default: () => "(0)" })
  bedStatus: number;

  @Column("int", { name: "BedCalculation", default: () => "(0)" })
  bedCalculation: number;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
