import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductPage } from "./pages/ProductPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <ProductPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
