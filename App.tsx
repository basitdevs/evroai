import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
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
import useHashScroll from "./hooks/useHashScroll";
import ExecutiveTeams from "./pages/ExecutiveTeams";
import Privacy from "./pages/Privacy";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const ScrollController = () => {
    useHashScroll();
    return null;
  };

  return (
    <>
      <ScrollController />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/solutions' element={<SolutionPage />} />
        <Route path='/solutions/teamMembers' element={<TeamMembers />} />
        <Route path='/solutions/teamLeaders' element={<TeamLeadesPage />} />
        <Route path='/solutions/peopleCulture' element={<PeopleAndCultures />} />
        <Route path='/solutions/salesMarketing' element={<SaleAndMarketing />} />
        <Route path='/solutions/it' element={<ITTeams />} />
        <Route path='/solutions/operations' element={<OpreationTeam />} />
        <Route path='/solutions/finance' element={<FinanceTeams />} />
        <Route path='/solutions/executive' element={<ExecutiveTeams />} />
        <Route path='/platform' element={<PlatformPage />} />
        <Route path='/company' element={<CompanyPage />} />
        <Route path='/privacy-statement' element={<Privacy />} />
        <Route path='/terms-of-service' element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
