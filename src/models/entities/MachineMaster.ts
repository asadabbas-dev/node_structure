import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MachineMaster", ["machineId"], { unique: true })
@Entity("MachineMaster", { schema: "dbo" })
export class MachineMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "MachineId" })
  machineId: number;

  @Column("varchar", { name: "MachineName", length: 50 })
  machineName: string;

  @Column("varchar", { name: "CommPort", nullable: true, length: 50 })
  commPort: string | null;

  @Column("int", { name: "Parity", nullable: true })
  parity: number | null;

  @Column("varchar", { name: "BaudRate", nullable: true, length: 50 })
  baudRate: string | null;

  @Column("int", { name: "StopBit", nullable: true })
  stopBit: number | null;

  @Column("varchar", { name: "DataBits", nullable: true, length: 50 })
  dataBits: string | null;

  @Column("int", { name: "HandShake", nullable: true })
  handShake: number | null;

  @Column("bit", { name: "ISActive" })
  isActive: boolean;

  @Column("bit", { name: "ISCom" })
  isCom: boolean;

  @Column("varchar", { name: "IPAdress", nullable: true, length: 50 })
  ipAdress: string | null;

  @Column("varchar", { name: "TCPPortno", nullable: true, length: 50 })
  tcpPortno: string | null;
}
