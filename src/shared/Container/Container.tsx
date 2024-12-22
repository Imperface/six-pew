import React from "react";
import { ContainerWrapper } from "./Container.styled";

export const Container = ({ children }: { children: React.JSX.Element }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);
