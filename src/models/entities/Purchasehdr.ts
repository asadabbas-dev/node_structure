import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_PURCHASEHDR_1",
  ["requesttype", "requesttypecode", "requestno", "requestdate"],
  { unique: true }
)
@Entity("PURCHASEHDR", { schema: "dbo" })
export class Purchasehdr {
  @Column("int", { primary: true, name: "REQUESTTYPE" })
  requesttype: number;

  @Column("varchar", { primary: true, name: "REQUESTTYPECODE", length: 5 })
  requesttypecode: string;

  @Column("numeric", {
    primary: true,
    name: "REQUESTNO",
    precision: 18,
    scale: 0,
  })
  requestno: number;

  @Column("date", { primary: true, name: "REQUESTDATE" })
  requestdate: Date;

  @Column("varchar", { name: "REQUESTNUMBER", nullable: true, length: 12 })
  requestnumber: string | null;

  @Column("varchar", { name: "SUPPLIER", length: 10 })
  supplier: string;

  @Column("varchar", { name: "COSTCENTER", length: 10 })
  costcenter: string;

  @Column("varchar", { name: "WARECODE", nullable: true, length: 10 })
  warecode: string | null;

  @Column("varchar", { name: "CURRENCY", length: 10 })
  currency: string;

  @Column("varchar", { name: "POTERMS", length: 10 })
  poterms: string;

  @Column("varchar", { name: "REFNO", length: 20 })
  refno: string;

  @Column("date", { name: "REFDATE" })
  refdate: Date;

  @Column("numeric", { name: "TOTALAMOUNT", precision: 18, scale: 2 })
  totalamount: number;

  @Column("numeric", { name: "FTOTALAMOUNT", precision: 18, scale: 2 })
  ftotalamount: number;

  @Column("varchar", { name: "REMARKS", length: 100 })
  remarks: string;

  @Column("numeric", { name: "EXCHANGE", precision: 18, scale: 2 })
  exchange: number;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("varchar", { name: "REQUESTBY", length: 50 })
  requestby: string;

  @Column("varchar", { name: "GRNNO", nullable: true, length: 20 })
  grnno: string | null;

  @Column("date", { name: "GRNDATE", nullable: true })
  grndate: Date | null;

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

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
