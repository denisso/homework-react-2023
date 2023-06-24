import styles from "./blockwrapper.module.scss";

const BlockWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${styles.block} ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default BlockWrapper;
