import { FC, PropsWithChildren } from "react";

export interface LayoutProps {
  children: React.ReactChild
}

export default function Layout({children}: LayoutProps) {
  return(
    <div>
    {children}
    </div>
  );
}