import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK__tmp_ms_x__028142795D424426", ["loantypeid"], { unique: true })
@Entity("MASTERLOANTYPES", { schema: "dbo" })
export class Masterloantypes {
  @PrimaryGeneratedColumn({ type: "int", name: "LOANTYPEID" })
  loantypeid: number;

  @Column("varchar", { name: "TYPECODE", length: 10 })
  typecode: string;

  @Column("varchar", { name: "TYPEDESC", length: 50 })
  typedesc: string;

  @Column("int", { name: "DEDUCTIONID" })
  deductionid: number;

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
