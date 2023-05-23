import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterEDI", ["columnName"], { unique: true })
@Entity("MasterEDI", { schema: "dbo" })
export class MasterEdi {
  @PrimaryGeneratedColumn({ type: "int", name: "ColumnId" })
  columnId: number;

  @Column("varchar", { primary: true, name: "ColumnName", length: 50 })
  columnName: string;

  @Column("bit", { name: "Display" })
  display: boolean;

  @Column("varchar", { name: "DisplayName", length: 50 })
  displayName: string;

  @Column("int", { name: "OrderColumn" })
  orderColumn: number;

  @Column("bit", { name: "Groupby" })
  groupby: boolean;
}
