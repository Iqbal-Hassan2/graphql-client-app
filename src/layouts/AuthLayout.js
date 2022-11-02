import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
