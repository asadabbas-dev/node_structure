import { Column, Entity, Index } from "typeorm";

@Index("PK_PURAPPROVALCONFIG", ["userid", "approvaltype", "requesttype"], {
  unique: true,
})
@Entity("PURAPPROVALCONFIG", { schema: "dbo" })
export class Purapprovalconfig {
  @Column("varchar", { primary: true, name: "USERID", length: 10 })
  userid: string;

  @Column("int", { primary: true, name: "APPROVALTYPE" })
  approvaltype: number;

  @Column("int", { primary: true, name: "REQUESTTYPE" })
  requesttype: number;

  @Column("bit", { name: "FIRSTAPPROVAL" })
  firstapproval: boolean;

  @Column("bit", { name: "SECONDAPPROVAL" })
  secondapproval: boolean;

  @Column("bit", { name: "FINALAPPROVAL" })
  finalapproval: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
