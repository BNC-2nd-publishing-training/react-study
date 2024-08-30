import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@/styles/index.css";
import DefaultLayout from "./layouts/DefaultLayouts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <DefaultLayout>
            <App />
        </DefaultLayout>
    </StrictMode>
);