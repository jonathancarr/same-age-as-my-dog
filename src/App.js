import React, { useState, useMemo, useCallback } from 'react';
import './App.scss';
import "react-datepicker/dist/react-datepicker.css";
import Header from './components/Header';
import MyDatePicker from './components/MyDatePicker';
import Phoebe from './components/Phoebe';
import Footer from './components/Footer';
import DogsDatePicker from './components/DogsDatePicker';
import { useMedia } from './hooks';
import { SMALL_SCREEN } from './constants';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E27396',
    },
  },
});

const App = () => {
  const [myBirthDate, setMyBirthDate] = useState(null);
  const [dogsBirthDate, setDogsBirthDate] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);
  const [expression, setExpression] = useState("normal");

  const isMobile = useMedia(
    [`(max-width: ${SMALL_SCREEN})`],
    [true],
    false
  );

  const targetDate = useMemo(() => {
    if (!myBirthDate || !dogsBirthDate) return new Date();

    const diffTime = dogsBirthDate.diff(myBirthDate);
    return new Date(dogsBirthDate.valueOf() + diffTime / 6)
  }, [myBirthDate, dogsBirthDate]);

  const inFuture = useMemo(() => targetDate.getTime() > new Date().getTime(), [targetDate])

  const goToResults = useCallback(() => {
    if (!myBirthDate || !dogsBirthDate) {
      setExpression("disgruntled");
    } else {
      setExpression(inFuture ? "party" : "old");
      setIsCalculated(true);
    }
  }, [dogsBirthDate, myBirthDate, setExpression, setIsCalculated, inFuture]);

  const goToForm = useCallback(() => {
    setExpression("normal");
    setIsCalculated(false);
  })

  return (
    <div className="container">

      <Header
        isCalculated={isCalculated}
        targetDate={targetDate}
        isMobile={isMobile}
      />

      <div className="controls">
        <ThemeProvider theme={theme}>
          <MyDatePicker
            className="controls__item"
            myBirthDate={myBirthDate}
            setMyBirthDate={setMyBirthDate}
            targetDate={targetDate}
            isCalculated={isCalculated}
            isMobile={isMobile}
            setExpression={setExpression}
          />

          <Phoebe
            className="controls__item"
            expression={expression}
            setExpression={setExpression}
          />

          <DogsDatePicker
            className="controls__item"
            dogsBirthDate={dogsBirthDate}
            setDogsBirthDate={setDogsBirthDate}
            targetDate={targetDate}
            isCalculated={isCalculated}
            isMobile={isMobile}
            setExpression={setExpression}
          />
        </ThemeProvider>
      </div>

      <Footer
        isCalculated={isCalculated}
        goToResults={goToResults}
        goToForm={goToForm}
        targetDate={targetDate}
        isMobile={isMobile}
      />
    </div>
  );
}

export default App;
