import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/Routes";
import { LoadingOverlay } from "./components";

function App() {
  const routing = useRoutes(routes);

  return (
    <Suspense fallback={<LoadingOverlay />}>
      {routing}
    </Suspense>
  );
}

export default App;
