import Image from "next/image";
import { ReactNode } from "react";

import styles from "./Alert.module.css";
import InfoIcon from "/public/info.svg";
import WarningIcon from "/public/warning.svg";

type Props = {
  children: ReactNode;
  type: "warning" | "info";
};

const Alert = ({ children, type }: Props) => {
  return (
    <div className={styles.alertBody}>
      <div className={styles.iconWrapper}>
        {type === "warning" ? (
          <Image src={WarningIcon} alt="alert-icon" />
        ) : (
          <Image src={InfoIcon} alt="info-icon" />
        )}
      </div>
      <p className={styles.message}>{children}</p>
    </div>
  );
};

export default Alert;
