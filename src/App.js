import './App.scss';
import LandingPageLayout from "./layouts/LandingPageLayout";
import Home from "./pages/Home";

function App() {
  return (
    <LandingPageLayout>
        <Home />
    </LandingPageLayout>
  );
}

export default App;
