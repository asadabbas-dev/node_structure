import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_EMRTreeviewNodes", ["nodeId"], { unique: true })
@Entity("EMRTreeviewNodes", { schema: "dbo" })
export class EmrTreeviewNodes {
  @PrimaryGeneratedColumn({ type: "int", name: "NodeId" })
  nodeId: number;

  @Column("varchar", { name: "DisplayName", length: 50 })
  displayName: string;

  @Column("varchar", { name: "ScreenName", length: 50 })
  screenName: string;

  @Column("varchar", { name: "Department", length: 50 })
  department: string;

  @Column("int", { name: "NodeLevel" })
  nodeLevel: number;

  @Column("int", { name: "NodeOrder" })
  nodeOrder: number;

  @Column("varchar", { name: "PatientType", length: 50 })
  patientType: string;

  @Column("int", { name: "NodeType", default: () => "(0)" })
  nodeType: number;

  @Column("bit", { name: "IsActive" })
  isActive: boolean;
}
