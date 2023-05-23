import { Column, Entity } from "typeorm";

@Entity("EMR_AngioGraphy_hdr", { schema: "dbo" })
export class EmrAngioGraphyHdr {
  @Column("varchar", { name: "MPat_PatientId_Id", length: 15 })
  mPatPatientIdId: string;

  @Column("numeric", { name: "Acg_AdmOrRegId_id", precision: 18, scale: 0 })
  acgAdmOrRegIdId: number;

  @Column("varchar", { name: "Mdoc_DocCode_id", length: 10 })
  mdocDocCodeId: string;

  @Column("datetime", { name: "Acg_PerformedDate_dttm" })
  acgPerformedDateDttm: Date;

  @Column("datetime", { name: "Acg_ResultDate_dttm" })
  acgResultDateDttm: Date;

  @Column("varchar", { name: "Acg_PatientType_cd", length: 2 })
  acgPatientTypeCd: string;

  @Column("varchar", {
    name: "Acg_ClinicalPres_desc",
    nullable: true,
    length: 1000,
  })
  acgClinicalPresDesc: string | null;

  @Column("varchar", { name: "Acg_AngiECG_desc", nullable: true, length: 1000 })
  acgAngiEcgDesc: string | null;

  @Column("varchar", {
    name: "Acg_HardwaresUsed_desc",
    nullable: true,
    length: 1000,
  })
  acgHardwaresUsedDesc: string | null;

  @Column("varchar", {
    name: "Acg_Approach_desc",
    nullable: true,
    length: 1000,
  })
  acgApproachDesc: string | null;

  @Column("varchar", {
    name: "Acg_Hemodynamics_desc",
    nullable: true,
    length: 1000,
  })
  acgHemodynamicsDesc: string | null;

  @Column("varchar", {
    name: "Acg_LeftVentricularAngiography_desc",
    nullable: true,
    length: 1000,
  })
  acgLeftVentricularAngiographyDesc: string | null;

  @Column("varchar", {
    name: "Acg_LeftMainCoronaryArtery_desc",
    nullable: true,
    length: 1000,
  })
  acgLeftMainCoronaryArteryDesc: string | null;

  @Column("varchar", {
    name: "Acg_LeftAnteriorDescArtery_desc",
    nullable: true,
    length: 1000,
  })
  acgLeftAnteriorDescArteryDesc: string | null;

  @Column("varchar", {
    name: "Acg_FirstDiagonalBranch_desc",
    nullable: true,
    length: 1000,
  })
  acgFirstDiagonalBranchDesc: string | null;

  @Column("varchar", {
    name: "Acg_SecondDiagonalBranch_desc",
    nullable: true,
    length: 1000,
  })
  acgSecondDiagonalBranchDesc: string | null;

  @Column("varchar", {
    name: "Acg_RamusIntermediusArtery_desc",
    nullable: true,
    length: 1000,
  })
  acgRamusIntermediusArteryDesc: string | null;

  @Column("varchar", {
    name: "Acg_LeftCircumflexArtery_desc",
    nullable: true,
    length: 1000,
  })
  acgLeftCircumflexArteryDesc: string | null;

  @Column("varchar", {
    name: "Acg_FirstObtuseMarginalBranch_desc",
    nullable: true,
    length: 1000,
  })
  acgFirstObtuseMarginalBranchDesc: string | null;

  @Column("varchar", {
    name: "Acg_SecondObtuseMarginalBranch_desc",
    nullable: true,
    length: 1000,
  })
  acgSecondObtuseMarginalBranchDesc: string | null;

  @Column("varchar", {
    name: "Acg_RightCoronaryArtery_desc",
    nullable: true,
    length: 1000,
  })
  acgRightCoronaryArteryDesc: string | null;

  @Column("varchar", {
    name: "Acg_PosteriorDescArtery_desc",
    nullable: true,
    length: 1000,
  })
  acgPosteriorDescArteryDesc: string | null;

  @Column("varchar", {
    name: "Acg_PosteriorLeftVentricularBranch_desc",
    nullable: true,
    length: 1000,
  })
  acgPosteriorLeftVentricularBranchDesc: string | null;

  @Column("varchar", {
    name: "Acg_FinalDiagnoses_desc",
    nullable: true,
    length: 1000,
  })
  acgFinalDiagnosesDesc: string | null;

  @Column("varchar", {
    name: "Acg_Recommendation_desc",
    nullable: true,
    length: 1000,
  })
  acgRecommendationDesc: string | null;

  @Column("varchar", {
    name: "Acg_AngioplastyClinicalPres_desc",
    nullable: true,
    length: 1000,
  })
  acgAngioplastyClinicalPresDesc: string | null;

  @Column("varchar", {
    name: "Acg_AngioplastyECG_desc",
    nullable: true,
    length: 1000,
  })
  acgAngioplastyEcgDesc: string | null;

  @Column("varchar", {
    name: "Acg_GuidingCatheter_desc",
    nullable: true,
    length: 1000,
  })
  acgGuidingCatheterDesc: string | null;

  @Column("varchar", {
    name: "Acg_GuideWire_desc",
    nullable: true,
    length: 1000,
  })
  acgGuideWireDesc: string | null;

  @Column("varchar", { name: "Acg_Balloon_desc", nullable: true, length: 1000 })
  acgBalloonDesc: string | null;

  @Column("varchar", { name: "Acg_Stents_desc", nullable: true, length: 1000 })
  acgStentsDesc: string | null;

  @Column("varchar", { name: "Acg_Heparin_desc", nullable: true, length: 1000 })
  acgHeparinDesc: string | null;

  @Column("varchar", {
    name: "Acg_Aggrastat_desc",
    nullable: true,
    length: 1000,
  })
  acgAggrastatDesc: string | null;

  @Column("varchar", {
    name: "Acg_Procedure_desc",
    nullable: true,
    length: 5000,
  })
  acgProcedureDesc: string | null;

  @Column("varchar", {
    name: "Acg_AngioplastyFinalDiagnosis_desc",
    nullable: true,
    length: 1000,
  })
  acgAngioplastyFinalDiagnosisDesc: string | null;

  @Column("varchar", {
    name: "Acg_FollowUp_desc",
    nullable: true,
    length: 1000,
  })
  acgFollowUpDesc: string | null;

  @Column("bit", { name: "Acg_IsApproved_flg", default: () => "(0)" })
  acgIsApprovedFlg: boolean;

  @Column("varchar", { name: "Acg_ApprovedBy_cd", nullable: true, length: 50 })
  acgApprovedByCd: string | null;

  @Column("datetime", { name: "Acg_ApprovedDate", nullable: true })
  acgApprovedDate: Date | null;

  @Column("varchar", { name: "Acg_CreatedBy_Id", length: 50 })
  acgCreatedById: string;

  @Column("datetime", { name: "Acg_Created_dttm" })
  acgCreatedDttm: Date;

  @Column("varchar", { name: "Acg_ModifiedBy_Id", length: 50 })
  acgModifiedById: string;

  @Column("datetime", { name: "Acg_Modified_dttm" })
  acgModifiedDttm: Date;

  @Column("varchar", {
    name: "Acg_ReferringClinician_desc",
    nullable: true,
    length: 50,
  })
  acgReferringClinicianDesc: string | null;

  @Column("varchar", { name: "Acg_CathNo_desc", nullable: true, length: 50 })
  acgCathNoDesc: string | null;

  @Column("bit", { name: "Acg_AngioPrint_flg", default: () => "(1)" })
  acgAngioPrintFlg: boolean;

  @Column("bit", { name: "Acg_AngiograpyPrint_flg", default: () => "(1)" })
  acgAngiograpyPrintFlg: boolean;

  @Column("bit", { name: "Acg_AngioPlastyPrint_flg", default: () => "(1)" })
  acgAngioPlastyPrintFlg: boolean;
}
