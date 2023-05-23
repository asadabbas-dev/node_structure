import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MASTERINVENTORY_1", ["masterid", "compcode"], { unique: true })
@Entity("MASTERINVENTORY", { schema: "dbo" })
export class Masterinventory {
  @PrimaryGeneratedColumn({ type: "int", name: "MASTERID" })
  masterid: number;

  @Column("varchar", { primary: true, name: "COMPCODE", length: 5 })
  compcode: string;

  @Column("int", { name: "MASTERTYPE" })
  mastertype: number;

  @Column("int", { name: "SUBTYPE", nullable: true })
  subtype: number | null;

  @Column("varchar", { name: "MASTERCODE", length: 50 })
  mastercode: string;

  @Column("varchar", { name: "MASTERNAME", length: 1000 })
  mastername: string;

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
