import { Column, Entity, Index } from "typeorm";

@Index("PK_GRATUITYRULEHDR", ["gratuityruleid"], { unique: true })
@Entity("GRATUITYRULEHDR", { schema: "dbo" })
export class Gratuityrulehdr {
  @Column("int", { primary: true, name: "GRATUITYRULEID" })
  gratuityruleid: number;

  @Column("varchar", { name: "GRRULECODE", length: 10 })
  grrulecode: string;

  @Column("int", { name: "STATUSID" })
  statusid: number;

  @Column("int", { name: "GRATUITYID" })
  gratuityid: number;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("int", { name: "COMPENSID", nullable: true, default: () => "(0)" })
  compensid: number | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
