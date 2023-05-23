import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_PURCHASEREQUESTDTL_1",
  ["requestnumber", "requestdate", "itemid", "requesttype", "priceid"],
  { unique: true }
)
@Entity("PURCHASEREQUESTDTL", { schema: "dbo" })
export class Purchaserequestdtl {
  @Column("varchar", { primary: true, name: "REQUESTNUMBER", length: 15 })
  requestnumber: string;

  @Column("date", { primary: true, name: "REQUESTDATE" })
  requestdate: Date;

  @Column("numeric", { primary: true, name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("int", { primary: true, name: "REQUESTTYPE", default: () => "(0)" })
  requesttype: number;

  @Column("numeric", {
    primary: true,
    name: "PRICEID",
    precision: 18,
    scale: 0,
  })
  priceid: number;

  @Column("int", { name: "REQUESTQTY" })
  requestqty: number;

  @Column("int", { name: "APPROVEDQTY" })
  approvedqty: number;

  @Column("int", { name: "TRANSFERQTY", default: () => "(0)" })
  transferqty: number;

  @Column("bit", { name: "ISACTIVE", default: () => "(0)" })
  isactive: boolean;

  @Column("bit", { name: "ISLPO", default: () => "(0)" })
  islpo: boolean;

  @Column("varchar", { name: "LPONO", nullable: true, length: 20 })
  lpono: string | null;

  @Column("date", { name: "LPODATE", nullable: true })
  lpodate: Date | null;

  @Column("bit", { name: "FIRSTAPPROVAL" })
  firstapproval: boolean;

  @Column("varchar", { name: "FAPPROVEBY", nullable: true, length: 50 })
  fapproveby: string | null;

  @Column("datetime", { name: "FAPPROVALDATE", nullable: true })
  fapprovaldate: Date | null;

  @Column("bit", { name: "SECONDAPPROVAL" })
  secondapproval: boolean;

  @Column("varchar", { name: "SAPPROVEDBY", nullable: true, length: 50 })
  sapprovedby: string | null;

  @Column("datetime", { name: "SAPPROVALDATE", nullable: true })
  sapprovaldate: Date | null;

  @Column("bit", { name: "FINALAPPROVAL" })
  finalapproval: boolean;

  @Column("varchar", { name: "LAPPROVEDBY", nullable: true, length: 50 })
  lapprovedby: string | null;

  @Column("datetime", { name: "LAPPROVALDATE", nullable: true })
  lapprovaldate: Date | null;
}
