import './App.css';
import { Flex } from './elements';
import Intro from './page/Intro';

const App = () => {

  return (
    <Flex styles={{ minWidth: '1200px' }}>
      <Intro></Intro>
    </Flex>
  );
}

export default App;
