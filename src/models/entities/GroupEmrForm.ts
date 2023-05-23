import { Column, Entity, Index } from "typeorm";

@Index("PK_GroupEMRForm", ["groupId", "emrFormId"], { unique: true })
@Entity("GroupEMRForm", { schema: "dbo" })
export class GroupEmrForm {
  @Column("int", { primary: true, name: "GroupId" })
  groupId: number;

  @Column("int", { primary: true, name: "EMRFormId" })
  emrFormId: number;
}
