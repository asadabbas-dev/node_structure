import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mastercompensation } from "./Mastercompensation";

@Index("PK__tmp_ms_x__497DFAC97A37A920", ["payglinterfaceid"], { unique: true })
@Entity("PAYGLINTERFACE", { schema: "dbo" })
export class Payglinterface {
  @PrimaryGeneratedColumn({ type: "int", name: "PAYGLINTERFACEID" })
  payglinterfaceid: number;

  @Column("int", { name: "CATEGORYID" })
  categoryid: number;

  @Column("char", { name: "PAYMODE", length: 1 })
  paymode: string;

  @Column("varchar", { name: "DRACCOUNT", length: 10 })
  draccount: string;

  @Column("varchar", { name: "CRACCOUNT", length: 10 })
  craccount: string;

  @Column("varchar", { name: "DRCOSTCODE", nullable: true, length: 10 })
  drcostcode: string | null;

  @Column("varchar", { name: "CRCOSTCODE", nullable: true, length: 10 })
  crcostcode: string | null;

  @Column("bit", { name: "DRPARTYFLAG" })
  drpartyflag: boolean;

  @Column("bit", { name: "CRPARTYFLAG" })
  crpartyflag: boolean;

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

  @ManyToOne(
    () => Mastercompensation,
    (mastercompensation) => mastercompensation.payglinterfaces
  )
  @JoinColumn([{ name: "COMPENSID", referencedColumnName: "compensid" }])
  compens: Mastercompensation;
}
