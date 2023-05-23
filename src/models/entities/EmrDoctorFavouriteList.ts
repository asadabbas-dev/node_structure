import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_EMRDoctorFavouriteList", ["favouriteListId"], { unique: true })
@Entity("EMRDoctorFavouriteList", { schema: "dbo" })
export class EmrDoctorFavouriteList {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "FavouriteListId",
    precision: 18,
    scale: 0,
  })
  favouriteListId: number;

  @Column("int", { name: "FavouriteListType" })
  favouriteListType: number;

  @Column("varchar", { name: "DoctorId", length: 20 })
  doctorId: string;

  @Column("varchar", { name: "FavouriteList", length: 100 })
  favouriteList: string;

  @Column("varchar", { name: "Freq_Unit", nullable: true, length: 50 })
  freqUnit: string | null;

  @Column("int", { name: "Frequency", nullable: true })
  frequency: number | null;

  @Column("int", { name: "Route", nullable: true })
  route: number | null;

  @Column("varchar", { name: "Remarks", nullable: true })
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
