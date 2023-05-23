import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterTheatre", ["theatreId"], { unique: true })
@Entity("MasterTheatre", { schema: "dbo" })
export class MasterTheatre {
  @PrimaryGeneratedColumn({ type: "int", name: "TheatreId" })
  theatreId: number;

  @Column("varchar", { name: "TheatreCode", length: 10 })
  theatreCode: string;

  @Column("varchar", { name: "TheatreName", length: 50 })
  theatreName: string;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
