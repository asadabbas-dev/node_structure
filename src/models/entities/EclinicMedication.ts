import { Column, Entity } from "typeorm";

@Entity("EclinicMedication", { schema: "dbo" })
export class EclinicMedication {
  @Column("varchar", { name: "session_token", length: 100 })
  sessionToken: string;

  @Column("varchar", { name: "upi", length: 50 })
  upi: string;

  @Column("varchar", { name: "drug_id", nullable: true, length: 50 })
  drugId: string | null;

  @Column("varchar", { name: "drug_name", nullable: true, length: 250 })
  drugName: string | null;

  @Column("varchar", { name: "duration", nullable: true, length: 50 })
  duration: string | null;

  @Column("varchar", { name: "frequency", nullable: true, length: 50 })
  frequency: string | null;

  @Column("varchar", { name: "length", nullable: true, length: 50 })
  length: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 50 })
  status: string | null;

  @Column("varchar", { name: "route", nullable: true, length: 50 })
  route: string | null;

  @Column("varchar", { name: "dosage", nullable: true, length: 50 })
  dosage: string | null;

  @Column("varchar", { name: "strength", nullable: true, length: 50 })
  strength: string | null;

  @Column("varchar", { name: "quantity", nullable: true, length: 50 })
  quantity: string | null;

  @Column("varchar", { name: "med_type", nullable: true, length: 50 })
  medType: string | null;

  @Column("varchar", { name: "refill", nullable: true, length: 50 })
  refill: string | null;

  @Column("bit", { name: "updated", default: () => "(0)" })
  updated: boolean;

  @Column("bit", { name: "Iscancel", default: () => "(0)" })
  iscancel: boolean;

  @Column("numeric", {
    name: "registrationid",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  registrationid: number;

  @Column("varchar", { name: "pin", length: 50 })
  pin: string;
}
