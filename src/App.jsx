import TheNavbar from "./components/TheNavbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    < >
      <TheNavbar />

      <div className="bg-white max-w-xl mx-auto p-10 m-10 space-y-5 text-center">
        <HomePage/>
        <AboutPage/>
        <ContactPage/>
      </div>
    </>
  );
}

export default App;
