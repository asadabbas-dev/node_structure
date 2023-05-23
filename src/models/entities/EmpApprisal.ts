import { Column, Entity } from "typeorm";

@Entity("EMPApprisal", { schema: "dbo" })
export class EmpApprisal {
  @Column("varchar", { name: "Criteria", length: 100 })
  criteria: string;

  @Column("int", { name: "ApprisalValue" })
  apprisalValue: number;

  @Column("numeric", { name: "Managerial", precision: 18, scale: 0 })
  managerial: number;

  @Column("numeric", { name: "Supervisory", precision: 18, scale: 0 })
  supervisory: number;

  @Column("numeric", { name: "ProfAdmin", precision: 18, scale: 0 })
  profAdmin: number;

  @Column("numeric", { name: "ProfClinical", precision: 18, scale: 0 })
  profClinical: number;

  @Column("numeric", { name: "ProfMedical", precision: 18, scale: 0 })
  profMedical: number;

  @Column("numeric", { name: "Rank", precision: 18, scale: 0 })
  rank: number;

  @Column("numeric", { name: "LSB", precision: 18, scale: 0 })
  lsb: number;
}
