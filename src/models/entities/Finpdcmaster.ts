import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FINPDCMASTER", ["pdcid"], { unique: true })
@Entity("FINPDCMASTER", { schema: "dbo" })
export class Finpdcmaster {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "PDCID",
    precision: 18,
    scale: 0,
  })
  pdcid: number;

  @Column("varchar", { name: "TRANSACCOUNT", length: 15 })
  transaccount: string;

  @Column("bit", { name: "BANKACCOUNT", default: () => "(1)" })
  bankaccount: boolean;

  @Column("varchar", { name: "CONVERSIONACC", nullable: true, length: 15 })
  conversionacc: string | null;

  @Column("varchar", { name: "CONVERSIONACCNAME", nullable: true, length: 50 })
  conversionaccname: string | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
