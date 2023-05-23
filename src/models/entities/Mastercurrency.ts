import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("MASTERCURRENCY", { schema: "dbo" })
export class Mastercurrency {
  @PrimaryGeneratedColumn({ type: "int", name: "CURRENCYID" })
  currencyid: number;

  @Column("varchar", { name: "CURRENCYCODE", length: 3 })
  currencycode: string;

  @Column("varchar", { name: "CURRENCY", length: 50 })
  currency: string;

  @Column("varchar", { name: "BASECURRENCY", length: 50 })
  basecurrency: string;

  @Column("varchar", { name: "SUBCURRENCY", length: 50 })
  subcurrency: string;

  @Column("numeric", { name: "EXCHANGERATE", precision: 18, scale: 2 })
  exchangerate: number;

  @Column("date", { name: "CONVERSIONDATE" })
  conversiondate: Date;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
