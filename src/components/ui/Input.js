import { useEffect, useState } from 'react';
import classes from './Input.module.css';
import mysvg from '../../assets/SVG/search.svg'
const Input = (props) => {
  const [enteredValue, setEnteredValue] =useState('');

  useEffect(() => {
    const searcher = setTimeout(() => {
     props.onSearch(enteredValue);
    }, 500);
    return () => {
      clearTimeout(searcher);
    };
  }, [enteredValue]);

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const cancelHandler = () => {
    setEnteredValue('');
  };

return (
  <div className={classes.input} >
    <img src={mysvg} alt='search' />
    <input type="text" onChange={onChangeHandler} placeholder='Search pokemon...' value={enteredValue} />
    
    {enteredValue && <button onClick={cancelHandler}>Cancel</button>}
  </div>
);
};

export default Input;