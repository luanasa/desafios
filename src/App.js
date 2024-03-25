import TopBar from "./components/TopBar/topbar";
import './App.css';
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Features from "./components/Features/features";

function App() {
  return (
    <div className="container">
      <TopBar />
      <Header />
      <Hero />
      <Features
        imageUrl="./clock.svg"
        title="Reembolso"
        description="Se por algum motivo você não gostar dos materiais você pode reembolsar sem taxa e perguntas."
      />
      <Features
        imageUrl="./raio.svg"
        title="Vitalício"
        description="Você tem acesso a todas as atualizações e para sempre. Basta acessar a plataforma da Hotmart."
      />
      <Features
        imageUrl="./discord.svg"
        title="Comunidade"
        description="Você terá acesso a comunidade exclusiva do Discord, onde utilizamos para resolver dúvidas."
      />
      <Features
        imageUrl="./notion.svg"
        title="Notion"
        description="Através do Notion você tem acesso aos materiais para realizar os estudos sobre frontend e design."
      />
    </div>
  );
}

export default App;
