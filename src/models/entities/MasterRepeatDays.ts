import { Column, Entity, Index } from "typeorm";

@Index("PK_MasterRepeatDays", ["chargeId"], { unique: true })
@Entity("MasterRepeatDays", { schema: "dbo" })
export class MasterRepeatDays {
  @Column("int", { primary: true, name: "ChargeId" })
  chargeId: number;

  @Column("int", { name: "RepeatDays" })
  repeatDays: number;

  @Column("bit", { name: "IsActive" })
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
