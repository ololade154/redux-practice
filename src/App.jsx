import { useSelector, useDispatch } from 'react-redux';
import { increment } from './features/counterSlice';

const App = () => {
  // const counter = useSelector((state) => state.counter);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
export default App;
