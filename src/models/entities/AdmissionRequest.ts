import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_AdmissionRequest_1", ["requestId"], { unique: true })
@Entity("AdmissionRequest", { schema: "dbo" })
export class AdmissionRequest {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "RequestId",
    precision: 18,
    scale: 0,
  })
  requestId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { name: "AdmissionDate" })
  admissionDate: Date;

  @Column("varchar", { name: "RequestBy", nullable: true, length: 10 })
  requestBy: string | null;

  @Column("varchar", { name: "AdmittingDoctor", length: 10 })
  admittingDoctor: string;

  @Column("varchar", { name: "AdmissionReason", length: 200 })
  admissionReason: string;

  @Column("numeric", {
    name: "RegistrationId",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  registrationId: number | null;

  @Column("numeric", {
    name: "AdmissionId",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  admissionId: number | null;

  @Column("bit", { name: "IsInvoiced", default: () => "(0)" })
  isInvoiced: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
