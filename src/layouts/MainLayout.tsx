import { MainLayoutWrapper } from "./MainLayout.styled";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <MainLayoutWrapper className="mainLayout">
      <main className="main">
        <Outlet />
      </main>
    </MainLayoutWrapper>
  );
};
