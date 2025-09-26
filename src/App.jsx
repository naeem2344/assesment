import React, { lazy, Suspense, useState } from 'react'
import Loader from './components/Loader';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
const UserInterface = lazy(() => import('./pages/UserInterface'));
const ThreeModel = lazy(() => import('./pages/ThreeModel'));
const Nave = lazy(() => import('./components/Nave'));
const UploadModel = lazy(() => import('./pages/UploadModel'))
const ModelViwer = lazy(() => import('./pages/ModelViwer'));

const App = () => {
  const [texture,setTexture] = useState('/assets/textures/picariobig.jpg');
  return (
    <div className='main__container'>
      < Nave />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<UploadModel />} />
          <Route path='/model' element={<ModelViwer />} />
          <Route path='/render' element={
            <div className='app_container'>
            <ThreeModel texture={texture}/>
            <UserInterface setFunction={setTexture}  />
          </div>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;