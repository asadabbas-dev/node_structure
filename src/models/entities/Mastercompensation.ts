import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Payglinterface } from "./Payglinterface";

@Index("PK_MASTERCOMPENSATION", ["compensid"], { unique: true })
@Entity("MASTERCOMPENSATION", { schema: "dbo" })
export class Mastercompensation {
  @PrimaryGeneratedColumn({ type: "int", name: "COMPENSID" })
  compensid: number;

  @Column("varchar", { name: "COMPENSTYPE", length: 1 })
  compenstype: string;

  @Column("varchar", { name: "COMPENSCODE", length: 10 })
  compenscode: string;

  @Column("varchar", { name: "COMPENSNAME", length: 50 })
  compensname: string;

  @Column("int", { name: "APPLICABLE" })
  applicable: number;

  @Column("bit", { name: "COMPENSPAYTYPE" })
  compenspaytype: boolean;

  @Column("int", { name: "FREQUENCY" })
  frequency: number;

  @Column("int", { name: "SEQUENCE" })
  sequence: number;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("bit", { name: "ISFORROUNDOFF", nullable: true })
  isforroundoff: boolean | null;

  @Column("bit", { name: "ISBASICPAY", nullable: true })
  isbasicpay: boolean | null;

  @Column("numeric", {
    name: "OTPERCENT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  otpercent: number | null;

  @Column("bit", { name: "ISRATED", nullable: true })
  israted: boolean | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;

  @OneToMany(() => Payglinterface, (payglinterface) => payglinterface.compens)
  payglinterfaces: Payglinterface[];
}
