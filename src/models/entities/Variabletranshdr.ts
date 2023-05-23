import { Column, Entity, Index } from "typeorm";

@Index("PK__tmp_ms_x__D4B623C4779F824D", ["transno"], { unique: true })
@Entity("VARIABLETRANSHDR", { schema: "dbo" })
export class Variabletranshdr {
  @Column("int", { primary: true, name: "TRANSNO" })
  transno: number;

  @Column("int", { name: "EMPID" })
  empid: number;

  @Column("int", { name: "TRANSMONTH" })
  transmonth: number;

  @Column("int", { name: "TRANSYEAR" })
  transyear: number;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
