import { Column, Entity } from "typeorm";

@Entity("UserMaster", { schema: "dbo" })
export class UserMaster {
  @Column("nvarchar", { name: "UserId", nullable: true })
  userId: string | null;

  @Column("nvarchar", { name: "Password", nullable: true })
  password: string | null;

  @Column("nvarchar", { name: "PasswordExpiry", nullable: true, length: 255 })
  passwordExpiry: string | null;

  @Column("nvarchar", { name: "Status", nullable: true })
  status: string | null;

  @Column("float", { name: "Interface", nullable: true, precision: 53 })
  interface: number | null;

  @Column("float", { name: "GroupId", nullable: true, precision: 53 })
  groupId: number | null;

  @Column("nvarchar", { name: "CreatedBy", nullable: true })
  createdBy: string | null;

  @Column("datetime", { name: "CreatedDate", nullable: true })
  createdDate: Date | null;

  @Column("nvarchar", { name: "ModifyBy", nullable: true })
  modifyBy: string | null;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
