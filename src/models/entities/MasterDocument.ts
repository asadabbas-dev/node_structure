import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterDocument", ["documentId"], { unique: true })
@Entity("MasterDocument", { schema: "dbo" })
export class MasterDocument {
  @PrimaryGeneratedColumn({ type: "int", name: "DocumentId" })
  documentId: number;

  @Column("int", { name: "MasterDocumentId" })
  masterDocumentId: number;

  @Column("varchar", { name: "DocumentName", length: 150 })
  documentName: string;

  @Column("nvarchar", { name: "DocumentCode", length: 100 })
  documentCode: string;

  @Column("int", { name: "DoctomentType" })
  doctomentType: number;

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
