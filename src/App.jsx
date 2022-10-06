import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import Login from './components/users/login';
import Register from './components/users/register';
import UpdateUser from './components/users/updateUser';

import routes from './routes';
import store from './store';
import { Header, Footer } from './components';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>


      <Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='edit-profile' element={<UpdateUser />} />
        </Route>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            element={<route.component />}

          />
        ))}
        
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider >
);

export default App;
