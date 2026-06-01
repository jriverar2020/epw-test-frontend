import { useState } from 'react'
import './App.css'
//Contenido de la pagina
import CustomersPage from "./pages/CustomersPage";
import DepartamentPage from "./pages/DepartamentPage";
import TestMenuOptionPage from "./pages/TestMenuOptionPage";
//Organizador de la interfaz
import MainLayout from "./layouts/MainLayout";
//Contenedor del menú
import SidebarMenu from "./components/SidebarMenu";
import DashboardPage from './pages/DashboardPage';

function App() {

  const [page, setPage] = useState("home");
  const [menuOptions, setMenuOptions] = useState([
    {
      name: "home",
      content: "Dashboard"
    },
    {
      name: "customers",
      content: "Customers"
    },
    {
      name: "departments",
      content: "Departments"
    },
    {
      name: "tmo",
      content: "TMO"
    },
    {
      name: "about",
      content: "About..."
    },
    {
      name: "log-out",
      content: "Log out"
    }
  ]);

  function renderContent() {
    switch (page) {
      case "home":
        return <DashboardPage />;
      case "customers":
        return <CustomersPage />;
      case "departments":
        return <DepartamentPage />;
      case "tmo":
        return <TestMenuOptionPage />;
      default:
        return <DashboardPage />;
    }
  }

  return (
    <MainLayout
      sidebar={<SidebarMenu current={page}
        onChange={setPage}
        menuOptions={menuOptions} />}

      content={renderContent()} />
  )
}

export default App
