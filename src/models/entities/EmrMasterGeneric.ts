import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRMasterGeneric", ["genericId"], { unique: true })
@Entity("EMRMasterGeneric", { schema: "dbo" })
export class EmrMasterGeneric {
  @Column("int", { primary: true, name: "GenericId" })
  genericId: number;

  @Column("varchar", { name: "Generic", length: 200 })
  generic: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
