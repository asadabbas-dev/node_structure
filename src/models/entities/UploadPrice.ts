import { Column, Entity } from "typeorm";

@Entity("UploadPrice", { schema: "dbo" })
export class UploadPrice {
  @Column("varchar", { name: "id", length: 50 })
  id: string;

  @Column("varchar", { name: "Code", length: 150 })
  code: string;

  @Column("varchar", { name: "costprice", length: 150 })
  costprice: string;

  @Column("varchar", { name: "Price", length: 50 })
  price: string;
}
