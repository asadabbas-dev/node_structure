import { Column, Entity, Index } from "typeorm";

@Index("PK_MasterCompany", ["compcode"], { unique: true })
@Entity("MasterCompany", { schema: "dbo" })
export class MasterCompany {
  @Column("varchar", { primary: true, name: "Compcode", length: 10 })
  compcode: string;

  @Column("varchar", { name: "CompName", length: 50 })
  compName: string;

  @Column("varchar", { name: "CompDatabase", nullable: true, length: 50 })
  compDatabase: string | null;

  @Column("varchar", { name: "Address", nullable: true, length: 200 })
  address: string | null;

  @Column("varchar", { name: "PhoneNo", nullable: true, length: 50 })
  phoneNo: string | null;

  @Column("varchar", { name: "TollNo", nullable: true, length: 50 })
  tollNo: string | null;

  @Column("varchar", { name: "WhatsupNo", nullable: true, length: 50 })
  whatsupNo: string | null;

  @Column("varchar", { name: "Email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "GST", nullable: true, length: 50 })
  gst: string | null;

  @Column("varchar", { name: "NTN", nullable: true, length: 50 })
  ntn: string | null;

  @Column("bit", { name: "Active", default: () => "(0)" })
  active: boolean;
}
