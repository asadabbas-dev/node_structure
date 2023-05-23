import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_SettlementDetail",
  ["settlementId", "inernalBillid", "tpaId", "chargeId"],
  { unique: true }
)
@Entity("SettlementDetail", { schema: "dbo" })
export class SettlementDetail {
  @Column("int", { primary: true, name: "SettlementID" })
  settlementId: number;

  @Column("numeric", {
    primary: true,
    name: "InernalBillid",
    precision: 18,
    scale: 0,
  })
  inernalBillid: number;

  @Column("numeric", { primary: true, name: "TPAId", precision: 18, scale: 0 })
  tpaId: number;

  @Column("numeric", {
    primary: true,
    name: "ChargeId",
    precision: 18,
    scale: 0,
  })
  chargeId: number;

  @Column("numeric", { name: "ReceivedAmount", precision: 18, scale: 2 })
  receivedAmount: number;

  @Column("numeric", { name: "RejectedAmount", precision: 18, scale: 2 })
  rejectedAmount: number;

  @Column("varchar", { name: "RejectReason", length: 50 })
  rejectReason: string;
}
