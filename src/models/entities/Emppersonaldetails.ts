import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPPERSONALDETAILS", ["empid"], { unique: true })
@Entity("EMPPERSONALDETAILS", { schema: "dbo" })
export class Emppersonaldetails {
  @Column("int", { primary: true, name: "EMPID" })
  empid: number;

  @Column("varchar", { name: "FATHERSNAME", nullable: true, length: 100 })
  fathersname: string | null;

  @Column("varchar", { name: "MOTHERSNAME", nullable: true, length: 100 })
  mothersname: string | null;

  @Column("varchar", { name: "SPOUSENAME", nullable: true, length: 100 })
  spousename: string | null;

  @Column("varchar", { name: "ADDRESS", nullable: true, length: 100 })
  address: string | null;

  @Column("varchar", { name: "CONTACTNO", nullable: true, length: 15 })
  contactno: string | null;

  @Column("varchar", { name: "EMECONTACTNO", nullable: true, length: 15 })
  emecontactno: string | null;

  @Column("varchar", { name: "BIRTHPLACE", nullable: true, length: 50 })
  birthplace: string | null;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 500 })
  remarks: string | null;

  @Column("varchar", { name: "BLOODGROUP", nullable: true, length: 10 })
  bloodgroup: string | null;
}
