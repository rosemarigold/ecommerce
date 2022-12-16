// React Router
import { lazy } from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import { Suspense } from "react";

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

export default function App() {
  return  <Suspense fallback={<>...</>}>
    <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<Home />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
      </Routes>
    </Suspense>
}
