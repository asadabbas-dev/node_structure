import { Column, Entity, Index } from "typeorm";

@Index("PK_EMREndoscopyIntraRecord", ["registrationId", "pin", "medication"], {
  unique: true,
})
@Entity("EMREndoscopyIntraRecord", { schema: "dbo" })
export class EmrEndoscopyIntraRecord {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("numeric", {
    primary: true,
    name: "Medication",
    precision: 18,
    scale: 0,
  })
  medication: number;

  @Column("varchar", { name: "Dose", nullable: true, length: 20 })
  dose: string | null;

  @Column("int", { name: "Route", nullable: true })
  route: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
