import { Column, Entity } from "typeorm";

@Entity("Table_payrolltest", { schema: "dbo" })
export class TablePayrolltest {
  @Column("int", { name: "EMPID" })
  empid: number;

  @Column("varchar", { name: "EMPCODE", length: 50 })
  empcode: string;
}
