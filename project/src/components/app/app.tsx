import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import EventScreen from '../../pages/event-screen/event-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NonFoundScreen from '../../pages/non-found-screen/non-found-screen';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../../pages/main-screen/main-screen';

type MainScreenProps = {
  pointCount: number;
}

function App({pointCount}: MainScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Event}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <EventScreen pointCount={pointCount}/>
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
