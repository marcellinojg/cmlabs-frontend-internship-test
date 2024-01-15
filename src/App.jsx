import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ROUTES } from "./constant/routes";
import LandingPage from "./pages/Landing";
import MealPage from "./pages/Meal";
import CategoryPage from "./pages/Category";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<LandingPage />} />
            <Route path={ROUTES.MEAL} element={<MealPage />} />
            <Route path={ROUTES.CATEGORY} element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
