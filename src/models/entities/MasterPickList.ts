import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterPickList", ["pickListId"], { unique: true })
@Entity("MasterPickList", { schema: "dbo" })
export class MasterPickList {
  @PrimaryGeneratedColumn({ type: "int", name: "PickListId" })
  pickListId: number;

  @Column("varchar", { name: "PickList", length: 50 })
  pickList: string;

  @Column("varchar", { name: "Result" })
  result: string;

  @Column("int", { name: "RequestType" })
  requestType: number;

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
