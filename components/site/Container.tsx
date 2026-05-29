import styles from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  width?: "default" | "narrow";
  as?: "div" | "section" | "article";
};

export function Container({
  children,
  width = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={width === "narrow" ? styles.narrow : styles.default}>
      {children}
    </Tag>
  );
}
