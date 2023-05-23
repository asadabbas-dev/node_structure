import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_APPROVALRIGHTS", ["approvalid"], { unique: true })
@Entity("APPROVALRIGHTS", { schema: "dbo" })
export class Approvalrights {
  @PrimaryGeneratedColumn({ type: "int", name: "APPROVALID" })
  approvalid: number;

  @Column("varchar", { name: "USERID", length: 10 })
  userid: string;

  @Column("varchar", { name: "MODULECODE", length: 10 })
  modulecode: string;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("bit", { name: "FIRSTAPPROVAL" })
  firstapproval: boolean;

  @Column("bit", { name: "SECONDAPPROVAL" })
  secondapproval: boolean;

  @Column("bit", { name: "THIRDAPPROVAL" })
  thirdapproval: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
