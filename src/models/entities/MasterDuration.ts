import { Column, Entity } from "typeorm";

@Entity("MasterDuration", { schema: "dbo" })
export class MasterDuration {
  @Column("int", { name: "DurationId" })
  durationId: number;

  @Column("varchar", { name: "ShortName", length: 15 })
  shortName: string;

  @Column("nvarchar", { name: "LatinName", nullable: true, length: 100 })
  latinName: string | null;

  @Column("varchar", { name: "LongName", length: 50 })
  longName: string;

  @Column("int", { name: "FreqValue", default: () => "(0)" })
  freqValue: number;

  @Column("varchar", { name: "FreqType", nullable: true, length: 50 })
  freqType: string | null;

  @Column("int", { name: "Morning" })
  morning: number;

  @Column("int", { name: "Afternonn" })
  afternonn: number;

  @Column("int", { name: "Evening" })
  evening: number;

  @Column("int", { name: "Night", default: () => "(0)" })
  night: number;

  @Column("bit", { name: "FillData" })
  fillData: boolean;

  @Column("int", { name: "ItemCount", nullable: true })
  itemCount: number | null;
}
