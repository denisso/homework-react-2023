import styles from "./modal.module.scss";
import { createPortal } from "react-dom";
import BlockWrapper from "./BlockWrapper";

type ModalProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose: (ok: boolean) => void;
  className?: string;
};

const Modal = ({
  children,
  isOpen = false,
  onClose,
  className,
}: ModalProps) => {
  if (!isOpen) return null;
  return createPortal(
    <div className={styles.overlay}>
      <BlockWrapper className={`${styles.modal} ${className}`}>
        <div className="content">{children}</div>
        <div className={styles.buttons}>
          <div
            className={`${styles.btn} ${styles.ok}`}
            onClick={() => onClose(true)}
          >
            Да
          </div>
          <div
            className={`${styles.btn} ${styles.cancel}`}
            onClick={() => onClose(false)}
          >
            Нет
          </div>
        </div>
      </BlockWrapper>
    </div>,
    document.body
  );
};

export default Modal;
