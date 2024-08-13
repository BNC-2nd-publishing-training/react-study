import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/styles/index.css";
import DefaultLayout from "./layouts/DefaultLayouts.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <DefaultLayout>
            <App />
        </DefaultLayout>
    </StrictMode>
);
