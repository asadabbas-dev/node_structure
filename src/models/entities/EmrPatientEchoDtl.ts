import { Column, Entity } from "typeorm";

@Entity("EMR_PatientEcho_dtl", { schema: "dbo" })
export class EmrPatientEchoDtl {
  @Column("numeric", { name: "Mpat_EchoId_Id", precision: 18, scale: 0 })
  mpatEchoIdId: number;

  @Column("numeric", {
    name: "MPat_PatientId_Id",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  mPatPatientIdId: number | null;

  @Column("int", { name: "Mdoc_DocCode_Id", default: () => "(0)" })
  mdocDocCodeId: number;

  @Column("datetime", { name: "Echo_VisitDate_dttm", nullable: true })
  echoVisitDateDttm: Date | null;

  @Column("varchar", { name: "Echo_1_cd", length: 50 })
  echo_1Cd: string;

  @Column("varchar", { name: "Echo_2_cd", length: 50 })
  echo_2Cd: string;

  @Column("varchar", { name: "Echo_3_cd", length: 50 })
  echo_3Cd: string;

  @Column("varchar", { name: "Echo_4_cd", length: 50 })
  echo_4Cd: string;

  @Column("varchar", { name: "Echo_5_cd", length: 50 })
  echo_5Cd: string;

  @Column("varchar", { name: "Echo_6_cd", length: 50 })
  echo_6Cd: string;

  @Column("varchar", { name: "Echo_7_cd", length: 50 })
  echo_7Cd: string;

  @Column("varchar", { name: "Echo_8_cd", length: 50 })
  echo_8Cd: string;

  @Column("varchar", { name: "Echo_9_cd", length: 50 })
  echo_9Cd: string;

  @Column("varchar", { name: "Echo_10_cd", length: 50 })
  echo_10Cd: string;

  @Column("varchar", { name: "Echo_11_cd", length: 50 })
  echo_11Cd: string;

  @Column("varchar", { name: "Echo_12_cd", length: 50 })
  echo_12Cd: string;

  @Column("varchar", { name: "Echo_13_cd", length: 50 })
  echo_13Cd: string;

  @Column("varchar", { name: "Echo_14_cd", length: 50 })
  echo_14Cd: string;

  @Column("varchar", { name: "Echo_15_cd", length: 50 })
  echo_15Cd: string;

  @Column("varchar", { name: "Echo_16_cd", length: 50 })
  echo_16Cd: string;

  @Column("varchar", { name: "Echo_17_cd", length: 50 })
  echo_17Cd: string;

  @Column("varchar", { name: "Echo_18_cd", length: 50 })
  echo_18Cd: string;

  @Column("varchar", { name: "Echo_19_cd", length: 50 })
  echo_19Cd: string;

  @Column("varchar", { name: "Echo_20_cd", length: 50 })
  echo_20Cd: string;

  @Column("varchar", { name: "Echo_21_cd", length: 50 })
  echo_21Cd: string;

  @Column("varchar", { name: "Echo_22_cd", length: 50 })
  echo_22Cd: string;

  @Column("varchar", { name: "Echo_23_cd", length: 50 })
  echo_23Cd: string;

  @Column("varchar", { name: "Echo_24_cd", length: 50 })
  echo_24Cd: string;

  @Column("varchar", { name: "Echo_25_cd", length: 50 })
  echo_25Cd: string;

  @Column("varchar", { name: "Echo_26_cd", length: 50 })
  echo_26Cd: string;

  @Column("varchar", { name: "Echo_27_cd", length: 50 })
  echo_27Cd: string;

  @Column("varchar", { name: "Echo_28_cd", length: 50 })
  echo_28Cd: string;

  @Column("varchar", { name: "Echo_29_cd", length: 50 })
  echo_29Cd: string;

  @Column("varchar", { name: "Echo_30_cd", length: 50 })
  echo_30Cd: string;

  @Column("varchar", { name: "Echo_31_cd", length: 50 })
  echo_31Cd: string;

  @Column("varchar", { name: "Echo_32_cd", length: 50 })
  echo_32Cd: string;

  @Column("varchar", { name: "Echo_33_cd", length: 50 })
  echo_33Cd: string;

  @Column("varchar", { name: "Echo_PatType_cd", length: 50 })
  echoPatTypeCd: string;

  @Column("varchar", { name: "Echo_Interpertation_cd", length: 1500 })
  echoInterpertationCd: string;

  @Column("varchar", { name: "Echo_34_cd", length: 50 })
  echo_34Cd: string;

  @Column("bit", { name: "Echo_Viewed_flg", default: () => "(0)" })
  echoViewedFlg: boolean;

  @Column("datetime", { name: "Echo_PerformedDate_dttm", nullable: true })
  echoPerformedDateDttm: Date | null;

  @Column("varchar", { name: "Echo_CreatedBy_id", length: 50 })
  echoCreatedById: string;

  @Column("datetime", { name: "Echo_Created_dttm" })
  echoCreatedDttm: Date;

  @Column("varchar", { name: "Echo_LastModifiedBy_id", length: 50 })
  echoLastModifiedById: string;

  @Column("datetime", { name: "Echo_LastModified_dttm" })
  echoLastModifiedDttm: Date;
}
