import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { map } from "lodash";
import routes from "./routes"; // Importar las rutas correctamente

export function Navigation() {
  return (
    <Router>
      <Routes>
        {map(routes, (route, index) => (
          <Route 
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.Component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}