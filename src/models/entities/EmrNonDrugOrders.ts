import { Column, Entity } from "typeorm";

@Entity("EMRNonDrugOrders", { schema: "dbo" })
export class EmrNonDrugOrders {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { name: "Date" })
  date: Date;

  @Column("varchar", { name: "DrugOrders", nullable: true, length: 200 })
  drugOrders: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
