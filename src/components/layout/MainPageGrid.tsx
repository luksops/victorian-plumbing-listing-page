import type { ReactNode } from "react";

type MainPageGridProps = {
  children: ReactNode;
  customClass?: string;
};

export function MainPageGrid({ children, customClass }: MainPageGridProps) {
  return (
    <div className={`grid grid-cols-4 gap-4 ${customClass ?? ""}`}>
      {children}
    </div>
  );
}
