import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SalesReturnHdr", ["salesReturnId"], { unique: true })
@Entity("SalesReturnHdr", { schema: "dbo" })
export class SalesReturnHdr {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "SalesReturnId",
    precision: 18,
    scale: 0,
  })
  salesReturnId: number;

  @Column("varchar", { name: "Prefix", nullable: true, length: 5 })
  prefix: string | null;

  @Column("date", { name: "ReturnDate" })
  returnDate: Date;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
