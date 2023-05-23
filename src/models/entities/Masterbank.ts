import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MASTERBANK", ["bankid"], { unique: true })
@Entity("MASTERBANK", { schema: "dbo" })
export class Masterbank {
  @PrimaryGeneratedColumn({ type: "int", name: "BANKID" })
  bankid: number;

  @Column("varchar", { name: "BANKNAME", length: 50 })
  bankname: string;

  @Column("varchar", { name: "BANKCODE", length: 10 })
  bankcode: string;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
