import { Column, Entity, Index } from "typeorm";

@Index("PK_PURSTOCKMERGEHDR", ["mergecode", "mergeno"], { unique: true })
@Entity("PURSTOCKMERGEHDR", { schema: "dbo" })
export class Purstockmergehdr {
  @Column("varchar", { primary: true, name: "MERGECODE", length: 5 })
  mergecode: string;

  @Column("numeric", {
    primary: true,
    name: "MERGENO",
    precision: 18,
    scale: 0,
  })
  mergeno: number;

  @Column("date", { name: "MERGEDATE" })
  mergedate: Date;

  @Column("varchar", { name: "MERGENUMBER", nullable: true, length: 12 })
  mergenumber: string | null;

  @Column("numeric", { name: "TOTAL", precision: 18, scale: 2 })
  total: number;

  @Column("int", { name: "ITEMTYPE" })
  itemtype: number;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "WARECODE", length: 10 })
  warecode: string;

  @Column("bit", { name: "FIRSTAPPROVAL", nullable: true })
  firstapproval: boolean | null;

  @Column("varchar", { name: "FAPPROVEBY", nullable: true, length: 50 })
  fapproveby: string | null;

  @Column("datetime", { name: "FAPPROVALDATE", nullable: true })
  fapprovaldate: Date | null;

  @Column("bit", { name: "SECONDAPPROVAL", nullable: true })
  secondapproval: boolean | null;

  @Column("varchar", { name: "SAPPROVEDBY", nullable: true, length: 50 })
  sapprovedby: string | null;

  @Column("datetime", { name: "SAPPROVALDATE", nullable: true })
  sapprovaldate: Date | null;

  @Column("bit", { name: "FINALAPPROVAL", nullable: true })
  finalapproval: boolean | null;

  @Column("varchar", { name: "LAPPROVEDBY", nullable: true, length: 50 })
  lapprovedby: string | null;

  @Column("datetime", { name: "LAPPROVALDATE", nullable: true })
  lapprovaldate: Date | null;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("bit", { name: "ISACTIVE", default: () => "(0)" })
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
