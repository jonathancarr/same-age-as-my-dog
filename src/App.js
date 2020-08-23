import React, { useState, useMemo } from 'react';
import './App.scss';
import "react-datepicker/dist/react-datepicker.css";
import Header from './components/Header';
import MyDatePicker from './components/MyDatePicker';
import Phoebe from './components/Phoebe';
import Footer from './components/Footer';
import DogsDatePicker from './components/DogsDatePicker';
import { useMedia } from './hooks';
import { SMALL_SCREEN } from './constants';

const App = () => {
  const [myBirthDate, setMyBirthDate] = useState(new Date());
  const [dogsBirthDate, setDogsBirthDate] = useState(new Date());
  const [isCalculated, setIsCalculated] = useState(false);

  const isMobile = useMedia(
    [`(max-width: ${SMALL_SCREEN})`],
    [true],
    false
  );

  const targetDate = useMemo(() => {
    if (!myBirthDate || !dogsBirthDate) return new Date();

    const diffTime = dogsBirthDate - myBirthDate;
    return new Date(dogsBirthDate.getTime() + diffTime / 6)
  }, [myBirthDate, dogsBirthDate]);

  return (
    <div className="container">

      <Header
        isCalculated={isCalculated}
        targetDate={targetDate}
        isMobile={isMobile}
      />

      <div className="controls">
        <MyDatePicker
          className="controls__item"
          myBirthDate={myBirthDate}
          setMyBirthDate={setMyBirthDate}
          targetDate={targetDate}
          isCalculated={isCalculated}
          isMobile={isMobile}
        />

        <Phoebe className="controls__item" />

        <DogsDatePicker
          className="controls__item"
          dogsBirthDate={dogsBirthDate}
          setDogsBirthDate={setMyBirthDate}
          targetDate={targetDate}
          isCalculated={isCalculated}
          isMobile={isMobile}
        />
      </div>

      <Footer
        isCalculated={isCalculated}
        setIsCalculated={setIsCalculated}
        targetDate={targetDate}
        isMobile={isMobile}
      />
    </div>
  );
}

export default App;
