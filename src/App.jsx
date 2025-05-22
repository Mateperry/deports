import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import ScrollToTop from "./componets/ScrollToTop";
import Footer from "./componets/Footer"; // Importa tu Footer actualizado
import Home from "./Pages/Home";
import Soccer from "./Pages/Soccer";
import Basket from "./Pages/Basket";
import F1 from "./Pages/F1";
/**Futbol */
import Historia_soccer from "../src/sections/Soccer/secciones/Historia-Soccer";
import GrandsCompeticiones from "./sections/Soccer/secciones/Grandescompeticiones";
import MejoresJugadores from "./sections/Soccer/secciones/Jugadoresgrandes";
import ReglasFutbol from "./sections/Soccer/secciones/Reglasfutbol";
import Ligaespanola from "./sections/Soccer/secciones/ligaespanola/Ligaespanola";
import PremierLeagueHistory from "./sections/Soccer/secciones/premier/PremierLeague";
import BundesligaHistory from "./sections/Soccer/secciones/bundes/Bundesliga";
import LigaPortuguesaHistory from "./sections/Soccer/secciones/purtuguesa/Portuguesa";
import Ligue1History from "./sections/Soccer/secciones/ligue1/Ligue";
/**Basketball */
import BasketballHistory  from "./sections/Basket/sectionsnba/Historianbawnba";
import ChampionsData from "./sections/Basket/sectionsnba/ultimoscampeones";
import NbaWnbaRules from "./sections/Basket/sectionsnba/NbaWnbaRules";
import  Equiposnbaw from "./sections/Basket/sectionsnba/Equiposnbaw";
import  AllStarAndSpecialEvents from "./sections/Basket/sectionsnba/AllStarAndSpecialEvents";
import  JugadoresHistoricos from "./sections/Basket/sectionsnba/Jugadoreshistoricos";
/**Formula 1 */
import HistoriaF1 from './sections/F1/seccionesf1/Historiaf1';
import F1Stats from './sections/F1/seccionesf1/Estadisticas';
import TopF1Pilots from './sections/F1/seccionesf1/Toppilotos'
import JuniorFormulaLadder from './sections/F1/seccionesf1/Juniorpilots'
import MotorsportsRules from './sections/F1/seccionesf1/Reglasf1'
/**Creando */
import Creando from "./sections/Creando";

// --- IMPORTACIONES PARA LOS MODALES ---
import PrivacyPolicyModal from './componets/PrivacyPolicyModal';
import TermsAndConditionsModal from './componets/Terms';
import ContactUsModal from './componets/Contact';
// -------------------------------------


function App() {
  // --- ESTADOS PARA CONTROLAR LA VISIBILIDAD DE LOS MODALES ---
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // -----------------------------------------------------------

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <ScrollToTop />
        <main className="flex-1">
          <Routes>
            {/* Botón Inicio */}
            <Route path="/home" element={<Home />} />

            {/* Botones Fútbol */}
            <Route path="/soccer" element={<Soccer />} />
            <Route path="/historia_soccer" element={<Historia_soccer />} />
            <Route path="/competiciones_soccer" element={<GrandsCompeticiones  />} />
            <Route path="/jugadores_soccer" element={<MejoresJugadores  />} />
            <Route path="/reglas_soccer" element={<ReglasFutbol  />} />
            <Route path="/Liga_espanola" element={<Ligaespanola />} />
            <Route path="/PremierLeagueHistory" element={< PremierLeagueHistory />} />
            <Route path="/BundesligaHistory" element={< BundesligaHistory/>} />
            <Route path="/Liga_portuguesa" element={< LigaPortuguesaHistory />} />
            <Route path="/Ligue1History" element={< Ligue1History />} />
            
            {/* Botones Basket */}
            <Route path="/basket" element={<Basket />} />
            <Route path="/historia_basket" element={< BasketballHistory />} />
            <Route path="/campeones_basket" element={< ChampionsData/>} />
            <Route path="/rulesnba" element={<NbaWnbaRules/>} />
             <Route path="/euiposnbaw" element={< Equiposnbaw/>} />
             <Route path="/AllStarAndSpecialEvents" element={< AllStarAndSpecialEvents/>} />
              <Route path="/JugadoresHistoricos" element={< JugadoresHistoricos/>} />
            {/* Botones F1 */}
            <Route path="/f1" element={<F1 />} />
            <Route path="/historia_f1" element={<HistoriaF1/>} />
            <Route path="/estadisticas" element={<F1Stats/>} />
            <Route path="/toppilotos" element={<TopF1Pilots/>} />
            <Route path="/juniorpilots" element={<JuniorFormulaLadder/>} />
            <Route path="/reglasf1" element={<MotorsportsRules/>} />
            
            {/* Ruta en creación */}
            <Route path="*" element={<Creando />} />
            <Route path="/creando" element={<Creando />} />
          </Routes>

          {/* Aquí puedes añadir otros elementos de tu main, si los tienes */}

        </main>
        {/* --- PASANDO LOS PROPS AL FOOTER --- */}
        <Footer
          onOpenPrivacy={() => setIsPrivacyModalOpen(true)} // Pasa la función para abrir el modal de privacidad
          onOpenTerms={() => setIsTermsModalOpen(true)}   // Pasa la función para abrir el modal de términos
          onOpenContact={() => setIsContactModalOpen(true)} // Pasa la función para abrir el modal de contacto
        />
        {/* ----------------------------------- */}
      </Router>

      {/* --- RENDERIZADO DE LOS MODALES (SIGUEN EN APP.JSX) --- */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <TermsAndConditionsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />

      <ContactUsModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      {/* ---------------------------------------------------- */}
    </div>
  );
}

export default App;