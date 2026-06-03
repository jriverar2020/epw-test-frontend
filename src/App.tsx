import { useState } from 'react'
import './App.css'
//Contenido de la pagina
import CustomersPage from "./pages/CustomersPage";
import DepartamentPage from "./pages/DepartamentPage";
import TestMenuOptionPage from "./pages/TestMenuOptionPage";
import DashboardPage from "./pages/DashboardPage";
//Organizador de la interfaz
import MainLayout from "./layouts/MainLayout";
//Contenedor del menú
import SidebarMenu from "./components/SidebarMenu";

function App() {

  const [page, setPage] = useState("customers");
  const [menuOptions, setMenuOptions] = useState([
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
      name: "db",
      content: "Dashboard"
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
      case "customers":
        return <CustomersPage />;
      case "departments":
        return <DepartamentPage />;
      case "tmo":
        return <TestMenuOptionPage />;
      case "db":
        return <DashboardPage />;
      default:
        return <CustomersPage />;
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
