import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <main className="p-8">
        <Button text="Clique aqui" />
      </main>
      <Footer />
    </>
  );
}

export default App;
