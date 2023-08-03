import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";


const Main = lazy(() => import('./pages/Main/Main'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));

const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Navigation/>
        <Outlet />
      </Suspense>
    </>
  );
};

function App() {
  return(
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main/>} />
        <Route path="/departaments" element={null} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App;
