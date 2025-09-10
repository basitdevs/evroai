import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Privacy from "./pages/Privacy";
import Home from "./pages/Home";
import Terms from "./pages/Terms";

import AOS from "aos";
import "aos/dist/aos.css";
import SolutionPage from "./pages/SolutionPage";
import PlatformPage from "./pages/PlatformPage";
import CompanyPage from "./pages/CompanyPage";
import TeamMembers from "./pages/TeamMembers";
import TeamLeadesPage from "./pages/TeamLeadesPage";
import PeopleAndCultures from "./pages/PeopleAndCultures";
import SaleAndMarketing from "./pages/SaleAndMarketing";
import ITTeams from "./pages/ITTeams";
import OpreationTeam from "./pages/OpreationTeams";
import FinanceTeams from "./pages/FinanceTeams";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animate only once
    });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/solutions' element={<SolutionPage />} />
      <Route path='/solutions/by-role/team-members' element={<TeamMembers />} />
      <Route path='/solutions/by-role/team-leaders' element={<TeamLeadesPage />} />
      <Route path='/solutions/by-role/people-and-culture-teams' element={<PeopleAndCultures />} />
      <Route path='/solutions/by-role/sales-and-marketing-teams' element={<SaleAndMarketing />} />
      <Route path='/solutions/by-role/it-teams' element={<ITTeams />} />
      <Route path='/solutions/by-role/operations-teams' element={<OpreationTeam />} />
      <Route path='/solutions/by-role/finance-teams' element={<FinanceTeams />} />
      <Route path='/solutions/by-role/executive-teams' element={<FinanceTeams />} />
      <Route path='/platform' element={<PlatformPage />} />
      <Route path='/company' element={<CompanyPage />} />
      <Route path='/privacy-statement' element={<Privacy />} />
      <Route path='/terms-of-service' element={<Terms />} />
    </Routes>
  );
}

export default App;
