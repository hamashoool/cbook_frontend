import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Layout} from './components/layout/Layout';
import {LoginLayout} from './components/layout/LoginLayout';
import {LeftNavLayout} from './components/layout/LeftNavLayout';
import {DashboardPage} from "./components/pages/DashboardPage";
import {PageA} from "./components/dashboard/PageA";
import {PageB} from "./components/dashboard/PageB";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <LoginLayout /> } />
            <Route path='/dashboard' element={ <Layout /> } >
                <Route index element={ <DashboardPage /> }/>
                <Route path="page-a" element={ <PageA /> }/>
                <Route path="page-b" element={ <PageB /> }/>
                <Route path='nav' element={ <LeftNavLayout /> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
