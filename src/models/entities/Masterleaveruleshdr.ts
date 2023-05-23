import { Column, Entity } from "typeorm";

@Entity("MASTERLEAVERULESHDR", { schema: "dbo" })
export class Masterleaveruleshdr {
  @Column("int", { name: "RULECODE" })
  rulecode: number;

  @Column("varchar", { name: "DESCRIPTION", length: 50 })
  description: string;

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
