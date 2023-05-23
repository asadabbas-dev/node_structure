import { Column, Entity, Index } from "typeorm";

@Index("PK_GroupLabDepartment", ["groupId", "labDepartmentId"], {
  unique: true,
})
@Entity("GroupLabDepartment", { schema: "dbo" })
export class GroupLabDepartment {
  @Column("int", { primary: true, name: "GroupId" })
  groupId: number;

  @Column("int", { primary: true, name: "LabDepartmentId" })
  labDepartmentId: number;
}
