import React from "react";
import { Stack } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <Stack>
      <Outlet />
    </Stack>
  );
}
