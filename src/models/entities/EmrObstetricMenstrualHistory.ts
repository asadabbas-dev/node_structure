import { Column, Entity, Index } from "typeorm";

@Index("PK__tmp_ms_x__6EF58810FEECADEE", ["registrationId"], { unique: true })
@Entity("EMRObstetricMenstrualHistory", { schema: "dbo" })
export class EmrObstetricMenstrualHistory {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("int", { name: "MarriedFor", nullable: true })
  marriedFor: number | null;

  @Column("varchar", { name: "Gravida", nullable: true, length: 50 })
  gravida: string | null;

  @Column("varchar", { name: "Para", nullable: true, length: 20 })
  para: string | null;

  @Column("varchar", { name: "Cycle", nullable: true, length: 20 })
  cycle: string | null;

  @Column("date", { name: "EDDDate", nullable: true })
  eddDate: Date | null;

  @Column("date", { name: "QuickeningDate", nullable: true })
  quickeningDate: Date | null;

  @Column("varchar", {
    name: "ContraceptionHistory",
    nullable: true,
    length: 200,
  })
  contraceptionHistory: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
