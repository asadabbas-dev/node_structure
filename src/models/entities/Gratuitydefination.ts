import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_GRATUITYDEFINATION", ["gratuityid"], { unique: true })
@Entity("GRATUITYDEFINATION", { schema: "dbo" })
export class Gratuitydefination {
  @PrimaryGeneratedColumn({ type: "int", name: "GRATUITYID" })
  gratuityid: number;

  @Column("varchar", { name: "GRATUITYCODE", length: 5 })
  gratuitycode: string;

  @Column("varchar", { name: "DESCRIPTION", length: 50 })
  description: string;

  @Column("numeric", { name: "FROMYEAR", precision: 18, scale: 2 })
  fromyear: number;

  @Column("numeric", { name: "TOYEAR", precision: 18, scale: 2 })
  toyear: number;

  @Column("int", { name: "NOOFDAYS" })
  noofdays: number;

  @Column("int", { name: "COMPENSID", nullable: true, default: () => "(0)" })
  compensid: number | null;

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
