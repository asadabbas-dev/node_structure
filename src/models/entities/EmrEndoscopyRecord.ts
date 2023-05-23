import { Column, Entity, Index } from "typeorm";

@Index("PK_EMREndoscopyRecord", ["registrationId", "pin"], { unique: true })
@Entity("EMREndoscopyRecord", { schema: "dbo" })
export class EmrEndoscopyRecord {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("bit", { name: "FitforAnaesthesia", nullable: true })
  fitforAnaesthesia: boolean | null;

  @Column("datetime", { name: "ProceStartTime", nullable: true })
  proceStartTime: Date | null;

  @Column("datetime", { name: "ProceEndTime", nullable: true })
  proceEndTime: Date | null;

  @Column("varchar", { name: "PostInstruction", nullable: true, length: 500 })
  postInstruction: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
