import { Column, Entity } from "typeorm";

@Entity("EMR_AngioInflationData_dtl", { schema: "dbo" })
export class EmrAngioInflationDataDtl {
  @Column("varchar", { name: "MPat_PatientId_Id", length: 15 })
  mPatPatientIdId: string;

  @Column("numeric", { name: "Acd_AdmOrRegId_id", precision: 18, scale: 0 })
  acdAdmOrRegIdId: number;

  @Column("varchar", { name: "Mdoc_DocCode_id", length: 10 })
  mdocDocCodeId: string;

  @Column("varchar", { name: "Acd_PatientType_cd", length: 2 })
  acdPatientTypeCd: string;

  @Column("varchar", { name: "Acd_Vessel_desc", nullable: true, length: 500 })
  acdVesselDesc: string | null;

  @Column("varchar", { name: "Acd_Stent_desc", nullable: true, length: 500 })
  acdStentDesc: string | null;

  @Column("varchar", { name: "Acd_Balloon_desc", nullable: true, length: 500 })
  acdBalloonDesc: string | null;

  @Column("varchar", { name: "Acd_ATM_desc", nullable: true, length: 500 })
  acdAtmDesc: string | null;

  @Column("varchar", { name: "Acd_Sec_desc", nullable: true, length: 500 })
  acdSecDesc: string | null;

  @Column("varchar", { name: "Acd_CreatedBy_Id", length: 50 })
  acdCreatedById: string;

  @Column("datetime", { name: "Acd_Created_dttm" })
  acdCreatedDttm: Date;

  @Column("varchar", { name: "Acd_ModifiedBy_Id", length: 50 })
  acdModifiedById: string;

  @Column("datetime", { name: "Acd_Modified_dttm" })
  acdModifiedDttm: Date;
}
