import Image from "next/image";
import styles from "./maintenance.module.css";

export default function Maintenance() {
  return (
    <div className={styles.container}>
      {/* Mobile Image */}
      <Image
        src="/images/3bros_mobile_safe_1080x1920.png"
        alt="3 Bros Logo"
        fill
        style={{ objectFit: "cover" }}
        priority
        className={styles.mobileImage}
      />
      {/* Tablet Image */}
      <Image
        src="/images/3Bros_Website_Landing_Page.png"
        alt="3 Bros Logo"
        fill
        style={{ objectFit: "cover" }}
        priority
        className={styles.tabletImage}
      />
      {/* Desktop Image */}
      <Image
        src="/images/3bros_desktop_safe_1920x1080.png"
        alt="3 Bros Logo"
        fill
        style={{ objectFit: "cover" }}
        priority
        className={styles.desktopImage}
      />
    </div>
  );
}
