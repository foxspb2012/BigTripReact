import MainScreen from '../../pages/main-screen/main-screen';

type MainScreenProps = {
  pointCount: number;
}

function App({pointCount}: MainScreenProps): JSX.Element {
  return <MainScreen pointCount={pointCount}/>;
}

export default App;
