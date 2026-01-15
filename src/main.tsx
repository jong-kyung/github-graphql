import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RelayEnvironmentProvider } from "react-relay";
import { gitHubEnvironment } from "./api/GraphQLClient.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RelayEnvironmentProvider environment={gitHubEnvironment}>
      <App />
    </RelayEnvironmentProvider>
  </StrictMode>
);
