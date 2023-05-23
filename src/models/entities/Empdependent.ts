import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPDEPENDENT", ["empid", "relationid", "dependantname"], {
  unique: true,
})
@Entity("EMPDEPENDENT", { schema: "dbo" })
export class Empdependent {
  @Column("int", { primary: true, name: "EMPID" })
  empid: number;

  @Column("int", { primary: true, name: "RELATIONID" })
  relationid: number;

  @Column("varchar", { primary: true, name: "DEPENDANTNAME", length: 100 })
  dependantname: string;

  @Column("varchar", { name: "GENDER", length: 6 })
  gender: string;

  @Column("bit", { name: "TICKET" })
  ticket: boolean;

  @Column("bit", { name: "INSURANCE" })
  insurance: boolean;

  @Column("date", { name: "DATEOFBIRTH" })
  dateofbirth: Date;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
