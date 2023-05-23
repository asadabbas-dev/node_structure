import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SampleMaster", ["sampleId", "registrationId"], { unique: true })
@Entity("SampleMaster", { schema: "dbo" })
export class SampleMaster {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "SampleId",
    precision: 18,
    scale: 0,
  })
  sampleId: number;

  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("varchar", { name: "OrderNumber", length: 10 })
  orderNumber: string;

  @Column("datetime", { name: "OrderDate" })
  orderDate: Date;

  @Column("varchar", { name: "ReferredBy", length: 10 })
  referredBy: string;

  @Column("varchar", { name: "SampleNoPrefix", length: 3 })
  sampleNoPrefix: string;

  @Column("int", { name: "SampleNo" })
  sampleNo: number;

  @Column("varchar", { name: "SampleNumber", nullable: true, length: 10 })
  sampleNumber: string | null;

  @Column("datetime", { name: "SampleDate" })
  sampleDate: Date;

  @Column("bit", { name: "RequestType" })
  requestType: boolean;

  @Column("bit", { name: "SMS", default: () => "(0)" })
  sms: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
