import { Column, Entity, Index } from "typeorm";

@Index("PK__EMRPedia__6EF58810F63EA1AC", ["registrationId"], { unique: true })
@Entity("EMRPediatricHistory", { schema: "dbo" })
export class EmrPediatricHistory {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("smallint", { name: "Gestation", nullable: true })
  gestation: number | null;

  @Column("int", { name: "NoofWeeks", nullable: true })
  noofWeeks: number | null;

  @Column("smallint", { name: "DeliveryType", nullable: true })
  deliveryType: number | null;

  @Column("bit", { name: "Resusctation", nullable: true })
  resusctation: boolean | null;

  @Column("numeric", {
    name: "BirthWeight",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  birthWeight: number | null;

  @Column("varchar", { name: "OtherDetails", nullable: true, length: 500 })
  otherDetails: string | null;

  @Column("smallint", { name: "MileStones", nullable: true })
  mileStones: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
