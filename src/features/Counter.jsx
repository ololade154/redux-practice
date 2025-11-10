import { useDispatch, useSelector } from 'react-redux';
import { increment } from './counterSlice';
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
export default Counter;
