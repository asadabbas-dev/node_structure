import { Column, Entity, Index } from "typeorm";

@Index("PK_QuotationDetail", ["quotationId", "chargeId"], { unique: true })
@Entity("QuotationDetail", { schema: "dbo" })
export class QuotationDetail {
  @Column("numeric", {
    primary: true,
    name: "QuotationId",
    precision: 18,
    scale: 0,
  })
  quotationId: number;

  @Column("numeric", {
    primary: true,
    name: "ChargeId",
    precision: 18,
    scale: 0,
  })
  chargeId: number;

  @Column("int", { name: "Quantity" })
  quantity: number;

  @Column("numeric", { name: "ChargePrice", precision: 18, scale: 2 })
  chargePrice: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
