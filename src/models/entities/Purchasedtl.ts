import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_PURCHASEDTL",
  ["requestnumber", "itemid", "priceid", "requestdate"],
  { unique: true }
)
@Entity("PURCHASEDTL", { schema: "dbo" })
export class Purchasedtl {
  @Column("varchar", { primary: true, name: "REQUESTNUMBER", length: 15 })
  requestnumber: string;

  @Column("numeric", { primary: true, name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("numeric", {
    primary: true,
    name: "PRICEID",
    precision: 18,
    scale: 0,
  })
  priceid: number;

  @Column("date", { primary: true, name: "REQUESTDATE" })
  requestdate: Date;

  @Column("int", { name: "REQUESTQTY", default: () => "(0)" })
  requestqty: number;

  @Column("int", { name: "QUANTITY" })
  quantity: number;

  @Column("int", { name: "BONUSQTY" })
  bonusqty: number;

  @Column("int", { name: "TOTALQTY" })
  totalqty: number;

  @Column("int", { name: "RECEIVEDQTY", default: () => "(0)" })
  receivedqty: number;

  @Column("int", { name: "LQTY", default: () => "(0)" })
  lqty: number;

  @Column("int", { name: "LBQTY", default: () => "(0)" })
  lbqty: number;

  @Column("int", { name: "LTOTALQTY" })
  ltotalqty: number;

  @Column("int", { name: "LRECEIVEDQTY" })
  lreceivedqty: number;

  @Column("int", { name: "LBRECEIVEDQTY", default: () => "(0)" })
  lbreceivedqty: number;

  @Column("numeric", { name: "COSTPRICE", precision: 18, scale: 2 })
  costprice: number;

  @Column("numeric", {
    name: "PACKPRICE",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  packprice: number;

  @Column("int", { name: "DISPERCENTAGE" })
  dispercentage: number;

  @Column("numeric", { name: "NETPRICE", precision: 18, scale: 2 })
  netprice: number;

  @Column("numeric", { name: "GST", nullable: true, precision: 18, scale: 2 })
  gst: number | null;

  @Column("numeric", { name: "PST", nullable: true, precision: 18, scale: 2 })
  pst: number | null;

  @Column("numeric", {
    name: "ADVANCETAX",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  advancetax: number | null;

  @Column("numeric", {
    name: "OTHERTAX",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  othertax: number | null;

  @Column("numeric", { name: "TOTALAMOUNT", precision: 18, scale: 2 })
  totalamount: number;

  @Column("numeric", { name: "FTOTALAMOUNT", precision: 18, scale: 2 })
  ftotalamount: number;

  @Column("numeric", { name: "EXCHANGE", precision: 18, scale: 2 })
  exchange: number;

  @Column("bit", { name: "ISACTIVE", default: () => "(0)" })
  isactive: boolean;
}
