import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_QuotationMaster", ["quotationId"], { unique: true })
@Entity("QuotationMaster", { schema: "dbo" })
export class QuotationMaster {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "QuotationId",
    precision: 18,
    scale: 0,
  })
  quotationId: number;

  @Column("varchar", { name: "QuotationName", length: 100 })
  quotationName: string;

  @Column("numeric", { name: "QuotationPrice", precision: 18, scale: 2 })
  quotationPrice: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
