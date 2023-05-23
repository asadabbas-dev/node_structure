import { Column, Entity } from "typeorm";

@Entity("DocIncentiveExclusion", { schema: "dbo" })
export class DocIncentiveExclusion {
  @Column("varchar", { name: "DoctorCode", length: 10 })
  doctorCode: string;

  @Column("varchar", { name: "GroupCode", length: 10 })
  groupCode: string;
}
