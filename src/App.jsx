import { useSelector } from 'react-redux';

const App = () => {
  // const counter = useSelector((state) => state.counter);
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};
export default App;
