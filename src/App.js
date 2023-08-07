import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Container from "./components/Container/Container";


const Main = lazy(() => import('./pages/Main/Main'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const Departament = lazy(() => import('./pages/Departament/Departament'));

const MainLayout = () => {
  return (
    <Container>
      <Suspense fallback={<Loader/>}>
        <Navigation/>
        <Outlet />
      </Suspense>
    </Container>
  );
};

function App() {
  return(
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main/>} />
        <Route path="/departaments" element={<Departament/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App;
