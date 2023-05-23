import { Column, Entity, Index } from "typeorm";

@Index("PK__tmp_ms_x__406F832E321C5D63", ["attendanceno", "attdate"], {
  unique: true,
})
@Entity("ATTENDANCEDTL", { schema: "dbo" })
export class Attendancedtl {
  @Column("int", { primary: true, name: "ATTENDANCENO" })
  attendanceno: number;

  @Column("date", { primary: true, name: "ATTDATE" })
  attdate: Date;

  @Column("varchar", { name: "ATTENDANCE", nullable: true, length: 3 })
  attendance: string | null;
}
