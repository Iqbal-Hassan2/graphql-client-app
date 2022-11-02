import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
//
import { client } from "./graphql/graphqlConfig";
// routing
import { AppRoutes } from "./routes/Routes";

// project imports
import { NavigationScroll } from "./layouts/NavigationScroll";
import { ThemeProvider } from "react-bootstrap";

//
import { UserProvider } from "./context/context";
// ==============================|| APP ||============================== //

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ThemeProvider>
            <NavigationScroll>
              <UserProvider>
                <AppRoutes />
              </UserProvider>
            </NavigationScroll>
          </ThemeProvider>
        </ApolloProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
