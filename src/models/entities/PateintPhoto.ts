import { Column, Entity, Index } from "typeorm";

@Index("PK_PateintPhoto", ["pin"], { unique: true })
@Entity("PateintPhoto", { schema: "dbo" })
export class PateintPhoto {
  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("image", { name: "PatientPhoto" })
  patientPhoto: Buffer;
}
