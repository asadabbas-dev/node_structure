import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MASTWAREHOUSE", ["wareid"], { unique: true })
@Entity("MASTWAREHOUSE", { schema: "dbo" })
export class Mastwarehouse {
  @PrimaryGeneratedColumn({ type: "int", name: "WAREID" })
  wareid: number;

  @Column("int", { name: "WARETYPE" })
  waretype: number;

  @Column("varchar", { name: "WARECODE", length: 5 })
  warecode: string;

  @Column("varchar", { name: "WARENAME", length: 50 })
  warename: string;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "WAREADDRESS", length: 100 })
  wareaddress: string;

  @Column("int", { name: "MAINWAREID" })
  mainwareid: number;

  @Column("bit", { name: "CONSIGNMENT", default: () => "(0)" })
  consignment: boolean;

  @Column("varchar", { name: "ACCOUNTCODE", nullable: true, length: 15 })
  accountcode: string | null;

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
