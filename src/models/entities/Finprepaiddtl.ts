import { Column, Entity, Index } from "typeorm";

@Index("PK_FINPREPAIDDTL_1", ["prepaidid", "subclassid", "instdate"], {
  unique: true,
})
@Entity("FINPREPAIDDTL", { schema: "dbo" })
export class Finprepaiddtl {
  @Column("int", { primary: true, name: "PREPAIDID" })
  prepaidid: number;

  @Column("int", { primary: true, name: "SUBCLASSID" })
  subclassid: number;

  @Column("date", { primary: true, name: "INSTDATE" })
  instdate: Date;

  @Column("numeric", { name: "INSTAMOUNT", precision: 18, scale: 2 })
  instamount: number;

  @Column("numeric", {
    name: "INSTADJAMOUNT",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  instadjamount: number;

  @Column("varchar", { name: "JVDOCTYPE", nullable: true, length: 5 })
  jvdoctype: string | null;

  @Column("int", { name: "JVSUBTYPE", nullable: true })
  jvsubtype: number | null;

  @Column("date", { name: "JVDATE", nullable: true })
  jvdate: Date | null;

  @Column("varchar", { name: "JVDOCNUMBER", nullable: true, length: 15 })
  jvdocnumber: string | null;

  @Column("bit", { name: "JVSTATUS", default: () => "(0)" })
  jvstatus: boolean;
}
