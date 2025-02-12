import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex flex-col w-full justify-start items-center bg-sky-800 text-sky-100">
      <div className="w-full">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
