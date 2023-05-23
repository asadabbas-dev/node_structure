import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_PatientBedDetails_1",
  ["registrationId", "pin", "bedId", "createdDate"],
  { unique: true }
)
@Entity("PatientBedDetails", { schema: "dbo" })
export class PatientBedDetails {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { primary: true, name: "BedId" })
  bedId: number;

  @Column("date", { name: "FromDate" })
  fromDate: Date;

  @Column("date", { name: "ToDate", nullable: true })
  toDate: Date | null;

  @Column("varchar", { name: "OrderNo", nullable: true, length: 10 })
  orderNo: string | null;

  @Column("int", { name: "Status" })
  status: number;

  @Column("bit", { name: "IsCancel" })
  isCancel: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { primary: true, name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
