import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_AssetAcquistion", ["assetId"], { unique: true })
@Entity("AssetAcquistion", { schema: "dbo" })
export class AssetAcquistion {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "AssetId",
    precision: 18,
    scale: 0,
  })
  assetId: number;

  @Column("numeric", { name: "AssetNo", precision: 18, scale: 0 })
  assetNo: number;

  @Column("varchar", { name: "Prefix", length: 5 })
  prefix: string;

  @Column("varchar", { name: "AssetCode", nullable: true, length: 10 })
  assetCode: string | null;

  @Column("varchar", { name: "Description", length: 100 })
  description: string;

  @Column("int", { name: "Status" })
  status: number;

  @Column("int", { name: "AssetGroup" })
  assetGroup: number;

  @Column("int", { name: "Category" })
  category: number;

  @Column("int", { name: "AssetType" })
  assetType: number;

  @Column("int", { name: "Location" })
  location: number;

  @Column("int", { name: "Noofunits" })
  noofunits: number;

  @Column("int", { name: "ParentAsset", nullable: true })
  parentAsset: number | null;

  @Column("varchar", { name: "Manufacture", nullable: true, length: 50 })
  manufacture: string | null;

  @Column("varchar", { name: "SerialNo", nullable: true, length: 50 })
  serialNo: string | null;

  @Column("varchar", { name: "Model", nullable: true, length: 50 })
  model: string | null;

  @Column("varchar", { name: "CostCenter", nullable: true, length: 50 })
  costCenter: string | null;

  @Column("int", { name: "FirstHand", nullable: true })
  firstHand: number | null;

  @Column("int", { name: "DeprMetod", nullable: true })
  deprMetod: number | null;

  @Column("numeric", {
    name: "Deprvalue",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  deprvalue: number | null;

  @Column("numeric", {
    name: "ResidualValue",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  residualValue: number | null;

  @Column("varchar", { name: "AssignedTo", nullable: true, length: 50 })
  assignedTo: string | null;

  @Column("varchar", { name: "Vendor", nullable: true, length: 50 })
  vendor: string | null;

  @Column("date", { name: "PurchaseDate", nullable: true })
  purchaseDate: Date | null;

  @Column("varchar", { name: "GRN", nullable: true, length: 50 })
  grn: string | null;

  @Column("varchar", { name: "ItemCode", nullable: true, length: 50 })
  itemCode: string | null;

  @Column("numeric", {
    name: "PurchaseValue",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  purchaseValue: number | null;

  @Column("date", { name: "Warranty", nullable: true })
  warranty: Date | null;

  @Column("int", { name: "ExpectedLife", nullable: true })
  expectedLife: number | null;

  @Column("int", { name: "DeprPercentage", nullable: true })
  deprPercentage: number | null;

  @Column("date", { name: "DeprDate", nullable: true })
  deprDate: Date | null;

  @Column("varchar", { name: "AuthroziationNo", nullable: true, length: 50 })
  authroziationNo: string | null;

  @Column("numeric", {
    name: "CapitalValue",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  capitalValue: number | null;

  @Column("int", { name: "TotalDeprPeriod", nullable: true })
  totalDeprPeriod: number | null;

  @Column("int", { name: "DeprPeriod", nullable: true })
  deprPeriod: number | null;

  @Column("varchar", { name: "CummulativeDepr", nullable: true, length: 50 })
  cummulativeDepr: string | null;

  @Column("varchar", { name: "YTDDepr", nullable: true, length: 50 })
  ytdDepr: string | null;

  @Column("int", { name: "RemainingPieces", nullable: true })
  remainingPieces: number | null;

  @Column("int", { name: "DisposedUnit", nullable: true })
  disposedUnit: number | null;

  @Column("numeric", {
    name: "DisposedValue",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  disposedValue: number | null;

  @Column("numeric", {
    name: "WDVOpening",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  wdvOpening: number | null;

  @Column("varchar", { name: "Insurance", nullable: true, length: 50 })
  insurance: string | null;

  @Column("date", { name: "InsuranceDate", nullable: true })
  insuranceDate: Date | null;

  @Column("numeric", {
    name: "InsureValue",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  insureValue: number | null;

  @Column("varchar", { name: "InsuranceRefNo", nullable: true, length: 50 })
  insuranceRefNo: string | null;

  @Column("int", { name: "InsurePeriod", nullable: true })
  insurePeriod: number | null;

  @Column("varchar", { name: "CreditAccount", nullable: true, length: 50 })
  creditAccount: string | null;

  @Column("varchar", { name: "DebitAccount", nullable: true, length: 50 })
  debitAccount: string | null;

  @Column("varchar", { name: "Remarks", nullable: true, length: 50 })
  remarks: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
