import { Column, Entity, Index } from "typeorm";

@Index("PK_FINCOSTGROUP", ["groupcode"], { unique: true })
@Entity("FINCOSTGROUP", { schema: "dbo" })
export class Fincostgroup {
  @Column("varchar", { primary: true, name: "GROUPCODE", length: 10 })
  groupcode: string;

  @Column("varchar", { name: "GROUPNAME", length: 50 })
  groupname: string;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
