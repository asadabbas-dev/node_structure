import { Column, Entity, Index } from "typeorm";

@Index("PK_PatientMaster_1", ["prefix", "id"], { unique: true })
@Entity("PatientMaster", { schema: "dbo" })
export class PatientMaster {
  @Column("varchar", { primary: true, name: "Prefix", length: 3 })
  prefix: string;

  @Column("numeric", { primary: true, name: "Id", precision: 18, scale: 0 })
  id: number;

  @Column("varchar", { name: "PIN", nullable: true, length: 10 })
  pin: string | null;

  @Column("varchar", { name: "Patientname", length: 150 })
  patientname: string;

  @Column("varchar", { name: "Gender", length: 10 })
  gender: string;

  @Column("date", { name: "Dateofbirth", nullable: true })
  dateofbirth: Date | null;

  @Column("varchar", { name: "Mobile", length: 50 })
  mobile: string;

  @Column("int", { name: "Maritalstatus", nullable: true })
  maritalstatus: number | null;

  @Column("int", { name: "Nationality", nullable: true })
  nationality: number | null;

  @Column("int", { name: "Religion", nullable: true })
  religion: number | null;

  @Column("varchar", { name: "Email", nullable: true, length: 50 })
  email: string | null;

  @Column("int", { name: "Phone", nullable: true })
  phone: number | null;

  @Column("varchar", { name: "Poboxno", nullable: true, length: 50 })
  poboxno: string | null;

  @Column("int", { name: "State", nullable: true })
  state: number | null;

  @Column("int", { name: "Country", nullable: true })
  country: number | null;

  @Column("int", { name: "Occuption", nullable: true })
  occuption: number | null;

  @Column("varchar", { name: "NationalId", nullable: true, length: 50 })
  nationalId: string | null;

  @Column("varchar", { name: "Passportno", nullable: true, length: 50 })
  passportno: string | null;

  @Column("bit", { name: "VIP", default: () => "(0)" })
  vip: boolean;

  @Column("varchar", { name: "BloodGroup", nullable: true, length: 10 })
  bloodGroup: string | null;

  @Column("varchar", { name: "Address", nullable: true, length: 250 })
  address: string | null;

  @Column("varchar", { name: "PatientPhoto", nullable: true, length: 50 })
  patientPhoto: string | null;

  @Column("varchar", { name: "Comments", nullable: true, length: 150 })
  comments: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;

  @Column("varchar", { name: "upi", nullable: true, length: 50 })
  upi: string | null;
}
