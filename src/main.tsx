import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import DevicesContextProvider from "./context/DevicesContext.tsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <DevicesContextProvider>
                <App />
            </DevicesContextProvider>
        </MantineProvider>
    </React.StrictMode>
);
