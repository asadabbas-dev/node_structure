import { Column, Entity } from "typeorm";

@Entity("ChargePrice", { schema: "dbo" })
export class ChargePrice {
  @Column("numeric", { name: "ChargeId", precision: 18, scale: 0 })
  chargeId: number;

  @Column("varchar", { name: "ChargeCode", length: 20 })
  chargeCode: string;

  @Column("int", { name: "PriceListId" })
  priceListId: number;

  @Column("numeric", { name: "Price", precision: 18, scale: 2 })
  price: number;

  @Column("varchar", { name: "CreaedBy", length: 50 })
  creaedBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
