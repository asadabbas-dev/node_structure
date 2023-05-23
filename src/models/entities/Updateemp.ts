import { Column, Entity } from "typeorm";

@Entity("updateemp", { schema: "dbo" })
export class Updateemp {
  @Column("int", { name: "Empid", default: () => "(0)" })
  empid: number;

  @Column("varchar", { name: "Empno", length: 50 })
  empno: string;

  @Column("varchar", { name: "Groupcode", length: 50 })
  groupcode: string;

  @Column("varchar", { name: "Designation", length: 50 })
  designation: string;

  @Column("varchar", { name: "basic", length: 50 })
  basic: string;

  @Column("varchar", { name: "housing", length: 50 })
  housing: string;

  @Column("varchar", { name: "housingAmount", length: 50 })
  housingAmount: string;

  @Column("varchar", { name: "transport", length: 50 })
  transport: string;

  @Column("varchar", { name: "transportamount", length: 50 })
  transportamount: string;

  @Column("varchar", { name: "meal", length: 50 })
  meal: string;

  @Column("varchar", { name: "mealamount", length: 50 })
  mealamount: string;

  @Column("varchar", { name: "utility", length: 50 })
  utility: string;

  @Column("varchar", { name: "utlityamount", length: 50 })
  utlityamount: string;

  @Column("varchar", { name: "wardrobe", length: 50 })
  wardrobe: string;

  @Column("varchar", { name: "wardrobeamount", length: 50 })
  wardrobeamount: string;

  @Column("varchar", { name: "ded1", nullable: true, length: 50 })
  ded1: string | null;

  @Column("varchar", { name: "ded1amount", nullable: true, length: 50 })
  ded1amount: string | null;

  @Column("varchar", { name: "ded2", nullable: true, length: 50 })
  ded2: string | null;

  @Column("varchar", { name: "ded2amount", nullable: true, length: 50 })
  ded2amount: string | null;
}
