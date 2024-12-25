import React from "react";
import { ContainerWrapper } from "./Container.styled";

export const Container = ({
  children,
}: {
  children: React.JSX.Element | React.JSX.Element[];
}) => <ContainerWrapper className="container">{children}</ContainerWrapper>;
