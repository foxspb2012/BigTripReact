import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NonFoundScreen from '../../pages/non-found-screen/non-found-screen';
import PrivateRoute from '../private-route/private-route';

type MainScreenProps = {
  pointCount: number;
}

function App({pointCount}: MainScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Root}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MainScreen pointCount={pointCount}/>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NonFoundScreen/>}
        />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
