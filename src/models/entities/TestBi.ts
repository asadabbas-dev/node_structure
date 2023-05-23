import { Column, Entity } from "typeorm";

@Entity("TestBI", { schema: "dbo" })
export class TestBi {
  @Column("varchar", { name: "col1", length: 50 })
  col1: string;

  @Column("varchar", { name: "col2", nullable: true, length: 500 })
  col2: string | null;

  @Column("varchar", { name: "col3", nullable: true, length: 500 })
  col3: string | null;

  @Column("varchar", { name: "col4", nullable: true, length: 500 })
  col4: string | null;

  @Column("varchar", { name: "col5", nullable: true, length: 500 })
  col5: string | null;

  @Column("varchar", { name: "col11", nullable: true, length: 50 })
  col11: string | null;

  @Column("varchar", { name: "col21", nullable: true, length: 500 })
  col21: string | null;

  @Column("varchar", { name: "col31", nullable: true, length: 500 })
  col31: string | null;

  @Column("varchar", { name: "col41", nullable: true, length: 500 })
  col41: string | null;

  @Column("varchar", { name: "col51", nullable: true, length: 500 })
  col51: string | null;
}
