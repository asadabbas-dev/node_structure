import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterEMRForms", ["masterEmrFormId"], { unique: true })
@Entity("MasterEMRForms", { schema: "dbo" })
export class MasterEmrForms {
  @PrimaryGeneratedColumn({ type: "int", name: "MasterEMRFormId" })
  masterEmrFormId: number;

  @Column("varchar", { name: "MasterEMRForm", length: 50 })
  masterEmrForm: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
