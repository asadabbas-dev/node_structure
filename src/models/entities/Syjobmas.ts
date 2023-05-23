import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SYJOBMAS_1", ["costcode"], { unique: true })
@Entity("SYJOBMAS", { schema: "dbo" })
export class Syjobmas {
  @Column("varchar", { name: "COMPCODE", length: 5 })
  compcode: string;

  @PrimaryGeneratedColumn({ type: "int", name: "COSTID" })
  costid: number;

  @Column("varchar", { primary: true, name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "COSTDESC", length: 50 })
  costdesc: string;

  @Column("bit", { name: "COSTFLAG" })
  costflag: boolean;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("varchar", { name: "PARENTJOB", nullable: true, length: 10 })
  parentjob: string | null;

  @Column("bit", { name: "HRDFLAG" })
  hrdflag: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
