import { Column, Entity } from "typeorm";

@Entity("PatientDocument", { schema: "dbo" })
export class PatientDocument {
  @Column("varchar", { name: "PIN", length: 12 })
  pin: string;

  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("int", { name: "DocumentType" })
  documentType: number;

  @Column("varbinary", { name: "FileContent" })
  fileContent: Buffer;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
