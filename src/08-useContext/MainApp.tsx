import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar, HomePage, AboutPage, LoginPage } from './components'
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return    (
    <UserProvider>
      <NavBar />
      <hr />

      {/* Configuracion de rutas */}
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="login" element={ <LoginPage /> } />

        {/* Redireccion */}
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </UserProvider>
  )
}
