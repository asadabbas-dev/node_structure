import { Column, Entity, Index } from "typeorm";

@Index("PK_MasterVaccine", ["vaccineCode"], { unique: true })
@Entity("MasterVaccine", { schema: "dbo" })
export class MasterVaccine {
  @Column("int", { primary: true, name: "VaccineCode" })
  vaccineCode: number;

  @Column("varchar", { name: "VaccineName", length: 50 })
  vaccineName: string;

  @Column("int", { name: "VaccineDays" })
  vaccineDays: number;

  @Column("int", { name: "VaccineDuration" })
  vaccineDuration: number;

  @Column("varchar", { name: "VaccineDurationType", length: 50 })
  vaccineDurationType: string;

  @Column("varchar", { name: "VaccineCaption", length: 50 })
  vaccineCaption: string;

  @Column("bit", { name: "ISActive" })
  isActive: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
