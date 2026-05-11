import TestPublic from "@/components/TestPublic";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <TestPublic />
      <Outlet />
    </div>
  );
}
