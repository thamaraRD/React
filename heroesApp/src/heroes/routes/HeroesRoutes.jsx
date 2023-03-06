import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from '../pages/NavBar';
import { DcPage } from "../pages/DcPage";
import { MarvelPage } from "../pages/MarvelPage";
import { Search } from "../pages/Search";
import { Hero } from "../pages/Hero";

export const HeroesRoutes = () => {
  return (
    <>
    <NavBar />

    <div className="container">
    <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<Search />} />
        <Route path="hero" element={< Hero />} />
        
        <Route path="/" element={<Navigate to="/marvel" replace />} />
      </Routes>
    </div>

    </>
  )
}
