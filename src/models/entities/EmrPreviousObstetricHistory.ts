import { Column, Entity, Index } from "typeorm";

@Index(
  "PK__tmp_ms_x__F4628EC183B33D05",
  ["registrationId", "pin", "dateofBirth"],
  { unique: true }
)
@Entity("EMRPreviousObstetricHistory", { schema: "dbo" })
export class EmrPreviousObstetricHistory {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("date", { primary: true, name: "DateofBirth" })
  dateofBirth: Date;

  @Column("varchar", { name: "PlaceofBirth", nullable: true, length: 50 })
  placeofBirth: string | null;

  @Column("int", { name: "PregnancyDuration", nullable: true })
  pregnancyDuration: number | null;

  @Column("varchar", { name: "ModeofDelivery", nullable: true, length: 20 })
  modeofDelivery: string | null;

  @Column("varchar", { name: "Puerperium", nullable: true, length: 50 })
  puerperium: string | null;

  @Column("varchar", { name: "ChildGender", nullable: true, length: 10 })
  childGender: string | null;

  @Column("numeric", {
    name: "ChildWeight",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  childWeight: number | null;

  @Column("varchar", { name: "ChildMalformations", nullable: true, length: 50 })
  childMalformations: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
