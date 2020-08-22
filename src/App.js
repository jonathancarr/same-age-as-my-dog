import React, { useState, useMemo } from 'react';
import './App.scss';
import "react-datepicker/dist/react-datepicker.css";
import Header from './components/Header';
import MyDatePicker from './components/MyDatePicker';
import Footer from './components/Footer';
import DatePicker from 'react-datepicker';
import DogsDatePicker from './components/DogsDatePicker';

const App = () => {
  const [myBirthDate, setMyBirthDate] = useState(new Date());
  const [dogsBirthDate, setDogsBirthDate] = useState(new Date());
  const [isCalculated, setIsCalculated] = useState(false);

  const targetDate = useMemo(() => {
    if (!myBirthDate || !dogsBirthDate) return new Date();

    const diffTime = dogsBirthDate - myBirthDate;
    return new Date(dogsBirthDate.getTime() + diffTime / 6)
  }, [myBirthDate, dogsBirthDate]);

  return (
    <div className="container">

      <Header isCalculated={isCalculated} targetDate={targetDate}/>

      <div className="controls">
        <MyDatePicker
          className="controls__item"
          myBirthDate={myBirthDate}
          setMyBirthDate={setMyBirthDate}
          isCalculated={isCalculated}
        />
        <div className="controls__item phoebe">
          Phoebe!
        </div>
        <DogsDatePicker 
          className="controls__item"
          dogsBirthDate={dogsBirthDate}
          setDogsBirthDate={setMyBirthDate}
          isCalculated={isCalculated}
        />
      </div>

      <Footer
        isCalculated={isCalculated}
        setIsCalculated={setIsCalculated}
        targetDate={targetDate}
      />
    </div>
  );
}

export default App;
