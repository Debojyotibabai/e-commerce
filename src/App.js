import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./AppRoutes";
import { MainLayout } from "./app/layout/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ErrorBoundary FallbackComponent={() => <h1>Something went wrong!</h1>}>
        <HelmetProvider>
          <BrowserRouter>
            <MainLayout>
              <AppRoutes />
              <Toaster />
            </MainLayout>
          </BrowserRouter>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
