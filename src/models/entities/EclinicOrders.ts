import { Column, Entity, Index } from "typeorm";

@Index("PK_EclinicOrders", ["token", "vitalsToken", "orderDate"], {
  unique: true,
})
@Entity("EclinicOrders", { schema: "dbo" })
export class EclinicOrders {
  @Column("varchar", { primary: true, name: "token", length: 100 })
  token: string;

  @Column("varchar", { primary: true, name: "vitals_token", length: 100 })
  vitalsToken: string;

  @Column("varchar", { name: "upi", length: 50 })
  upi: string;

  @Column("varchar", { name: "status", nullable: true, length: 50 })
  status: string | null;

  @Column("varchar", { name: "order_type", nullable: true, length: 50 })
  orderType: string | null;

  @Column("datetime", { primary: true, name: "order_date" })
  orderDate: Date;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column("numeric", { name: "chargeid", precision: 18, scale: 0 })
  chargeid: number;

  @Column("varchar", { name: "item_id", length: 50 })
  itemId: string;

  @Column("bit", { name: "updated", default: () => "(0)" })
  updated: boolean;

  @Column("bit", { name: "iscancel", nullable: true, default: () => "(0)" })
  iscancel: boolean | null;

  @Column("numeric", {
    name: "registrationid",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  registrationid: number;
}
