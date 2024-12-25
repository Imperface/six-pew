import React from "react";
import { SectionWrapper } from "./Section.styled";
import { Container } from "@/shared/Container";

export const Section = ({
  className,
  children,
}: {
  className: string;
  children: React.JSX.Element | React.JSX.Element[];
}) => {
  return (
    <SectionWrapper className={className}>
      <Container>{children}</Container>
    </SectionWrapper>
  );
};
