import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterSample", ["sampleId"], { unique: true })
@Entity("MasterSample", { schema: "dbo" })
export class MasterSample {
  @PrimaryGeneratedColumn({ type: "int", name: "SampleId" })
  sampleId: number;

  @Column("varchar", { name: "SampleCode", length: 10 })
  sampleCode: string;

  @Column("varchar", { name: "SampleName", length: 50 })
  sampleName: string;

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
