import { Column, Entity, Index } from "typeorm";

@Index("PK_MASTERDEPRECIATIONCYCLE", ["yearcode", "monthcode"], {
  unique: true,
})
@Entity("MASTERDEPRECIATIONCYCLE", { schema: "dbo" })
export class Masterdepreciationcycle {
  @Column("int", { primary: true, name: "YEARCODE" })
  yearcode: number;

  @Column("int", { primary: true, name: "MONTHCODE" })
  monthcode: number;

  @Column("varchar", { name: "DESCRIPTION", length: 50 })
  description: string;

  @Column("int", { name: "TOTALDAYS", nullable: true })
  totaldays: number | null;

  @Column("bit", { name: "CLOSED" })
  closed: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
