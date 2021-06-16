import { createRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { setMinPrice, setMaxPrice, setTypeGuitar, setStringGuitar } from "../../store/action";
import { getActiveFilters, getMostExpensiveGuitarForInput, getMostCheaperGuitarForInput, getGuitarsWithPriceSort } from "../../store/selectors";
import { guitarTypes } from "../../consts";

const Filter = ({ setMinPrice, setMaxPrice, setTypeGuitar, setStringGuitar, minPrice, maxPrice, blockedStrings, mostExpensiveGuitar, mostCheaperGuitar, clickedStringFilter, guitars }) => {


  
  const [minPriceValue, setMinPriceValue] = useState(false);
  const handleMinPrice = (evt) => {
    setMinPriceValue(evt.target.value);
    setMinPrice(evt.target.value);
  };

  const [maxPriceValue, setMaxPriceValue] = useState(false);
  const handleMaxPrice = (evt) => {
    setMaxPriceValue(evt.target.value);
    setMaxPrice(evt.target.value);
  };

  const [acoustic, setAcoustic] = useState(false);
  const [electro, setElectro] = useState(false);
  const [ucu, setUcu] = useState(false);

  const [acuDisabled, setAcuDisabled] = useState(false)
  const [ucuDisabled, setUcuDisabled] = useState(false)
  const [electroDisabled, setElectroDisabled] = useState(false)

  const [fourDisabled, setFourDisabled] = useState(false)
  const [sixDisabled, setSixDisabled] = useState(false)
  const [sevenDisabled, setSevenDisabled] = useState(false)
  const [twelveDisabled, setTwelveDisabled] = useState(false)

  const [selectedTypes, setSelectedTypes] = useState(false)

  const handleType = (evt) => {
    setSelectedStrings(false)
    setSelectedTypes(true)
    let type = evt.target.dataset.name;
    if (type === guitarTypes.acu && !acoustic) {
      setAcoustic(true);
      setTypeGuitar({ name: type, status: true });
    } else if (type === guitarTypes.acu && acoustic) {
      setAcoustic(false);
      setTypeGuitar({ name: type, status: false });
    }
    if (type === guitarTypes.electro && !electro) {
      setElectro(true);
      setTypeGuitar({ name: type, status: true });
    } else if (type === guitarTypes.electro && electro) {
      setElectro(false);
      setTypeGuitar({ name: type, status: false });
    }
    if (type === guitarTypes.ucu && !ucu) {
      setUcu(true);
      setTypeGuitar({ name: type, status: true });
    } else if (type === guitarTypes.ucu && ucu) {
      setUcu(false);
      setTypeGuitar({ name: type, status: false });
    }
  };

  useEffect(() => {
    let existAcu = !guitars.some(guitar => guitar.type === "Акустическая гитара")
    setAcuDisabled(existAcu)
    let existUcu = !guitars.some(guitar => guitar.type === "Укулеле")
    setUcuDisabled(existUcu)
    let existElectro = !guitars.some(guitar => guitar.type === "Электрогитара")
    setElectroDisabled(existElectro)
  })

  useEffect(() => {
    let existFour = !guitars.some(guitar => guitar.strings === "4")
    setFourDisabled(existFour)
    let existSix = !guitars.some(guitar => guitar.strings === "6")
    setSixDisabled(existSix)
    let existSeven = !guitars.some(guitar => guitar.strings === "7")
    setSevenDisabled(existSeven)
    let existTwelve = !guitars.some(guitar => guitar.strings === "12")
    setTwelveDisabled(existTwelve)
  })

  const [string4, setString4] = useState(false);
  const [string6, setString6] = useState(false);
  const [string7, setString7] = useState(false);
  const [string12, setString12] = useState(false);

  const [selectedStrings, setSelectedStrings] = useState(false)


  const handleStrings = (evt) => {
    setSelectedStrings(true)
    setSelectedTypes(false)
    let selectedString = evt.target.dataset.name;
    if (selectedString === guitarTypes.four && !string4) {
      setString4(true);
      setStringGuitar({ name: selectedString, status: true });
    } else if (selectedString === guitarTypes.four && string4) {
      setString4(false);
      setStringGuitar({ name: selectedString, status: false });
    }
    if (selectedString === guitarTypes.six && !string6) {
      setString6(true);
      setStringGuitar({ name: selectedString, status: true });
    } else if (selectedString === guitarTypes.six && string6) {
      setString6(false);
      setStringGuitar({ name: selectedString, status: false });
    }
    if (selectedString === guitarTypes.seven && !string7) {
      setString7(true);
      setStringGuitar({ name: selectedString, status: true });
    } else if (selectedString === guitarTypes.seven && string7) {
      setString7(false);
      setStringGuitar({ name: selectedString, status: false });
    }
    if (selectedString === guitarTypes.twelve && !string12) {
      setString12(true);
      setStringGuitar({ name: selectedString, status: true });
    } else if (selectedString === guitarTypes.twelve && string12) {
      setString12(false);
      setStringGuitar({ name: selectedString, status: false });
    }
  };


  const maxPriceRef = createRef();
  const minPriceRef = createRef();
  const [maxOnFocus, setMaxOnFocus] = useState(false);
  const [minOnFocus, setMinOnFocus] = useState(false);


  useEffect(() => {
    maxPriceRef.current.onfocus = function () {
      setMinOnFocus(false);
      setMaxOnFocus(true);
    };
    maxPriceRef.current.onblur = function () {
      setMaxOnFocus(false);
    };

    minPriceRef.current.onfocus = function () {
      setMaxOnFocus(false);
      setMinOnFocus(true);
    };
    minPriceRef.current.onblur = function () {
      setMinOnFocus(false);
    };
  });


  if (minPrice !== 0 && maxPrice !== 0) {
    if (+minPriceValue > +maxPriceValue && maxPriceValue !== false && minOnFocus) {
      setMinPrice(maxPriceValue);
      setMaxPrice(minPriceValue);
    }
  }


  if (maxPrice !== 0 && minPrice !== 0) {
    if (+maxPriceValue < +minPriceValue && maxPriceValue !== false && !maxOnFocus) {
      setMaxPrice(minPriceValue);
      setMinPrice(maxPriceValue);
    }
  }

  return (
    <div className="filter">
      <p className="filter__name">Фильтр</p>
      <form className="filter__from">
        <div className="filter__price">
          <p className="filter__price-name">Цена, ₽</p>
          <div className="filter__price-inner">
            <input className="filter__price-from" placeholder={mostCheaperGuitar} type="number" onChange={handleMinPrice}
              ref={minPriceRef}
              value={minPrice <= 0 ? `` : minPrice}
              min="0"
            />
            <input ref={maxPriceRef} className="filter__price-to" placeholder={mostExpensiveGuitar} type="number" onChange={handleMaxPrice}
              value={maxPrice <= 0 ? `` : maxPrice}
              min="0"
            />
          </div>
        </div>
        <div className="filter__type">
          <p className="filter__type-name">Тип гитар</p>
          <label htmlFor="acoustic" className="filter__type-label">
            <input id="acoustic" className="filter__type-input" data-name="Акустическая гитара" type="checkbox" onChange={handleType}
              disabled={acuDisabled && !selectedTypes} />
            <span className="filter__type-checkbox"></span>
                        Акустические гитары
          </label>
          <label htmlFor="electro" className="filter__type-label">
            <input id="electro" className="filter__type-input" data-name="Электрогитара" type="checkbox" onChange={handleType}
              disabled={electroDisabled && !selectedTypes} />
            <span className="filter__type-checkbox"></span>
                        Электрогитары
          </label>
          <label htmlFor="ukulele" className="filter__type-label">
            <input id="ukulele" className="filter__type-input" data-name="Укулеле" type="checkbox" onChange={handleType}
              disabled={ucuDisabled && !selectedTypes} />
            <span className="filter__type-checkbox"></span>
                        Укулеле
          </label>
        </div>
        <div className="filter__string">
          <p className="filter__string-name">Количество струн</p>
          <label htmlFor="four" className="filter__string-label">
            <input id="four" className="filter__string-input" data-name="4" type="checkbox" onChange={handleStrings} disabled={fourDisabled && !selectedStrings} />
            <span className="filter__string-checkbox"></span>
            <span className={blockedStrings.four && !clickedStringFilter ? `filter__string-num-disabled` : `filter__string-num`}>4</span>
          </label>
          <label htmlFor="six" className="filter__string-label">
            <input id="six" className="filter__string-input" data-name="6" type="checkbox" onChange={handleStrings} disabled={sixDisabled && !selectedStrings} />
            <span className="filter__string-checkbox"></span>
            <span className={blockedStrings.six && !clickedStringFilter ? `filter__string-num-disabled` : `filter__string-num`}>6</span>
          </label>
          <label htmlFor="seven" className="filter__string-label">
            <input id="seven" className="filter__string-input" data-name="7" type="checkbox" onChange={handleStrings} disabled={sevenDisabled && !selectedStrings} />
            <span className="filter__string-checkbox"></span>
            <span className={blockedStrings.seven && !clickedStringFilter ? `filter__string-num-disabled` : `filter__string-num`}>7</span>
          </label>
          <label htmlFor="twelve" className="filter__string-label">
            <input id="twelve" className="filter__string-input" data-name="12" type="checkbox" onChange={handleStrings} disabled={twelveDisabled && !selectedStrings} />
            <span className="filter__string-checkbox"></span>
            <span className={blockedStrings.twelve && !clickedStringFilter ? `filter__string-num-disabled` : `filter__string-num`}>12</span>
          </label>
        </div>
      </form>

    </div >
  );
};

const mapStateToProps = (state) => ({
  minPrice: state.minPrice,
  maxPrice: state.maxPrice,
  blockedStrings: getActiveFilters(state),
  mostExpensiveGuitar: getMostExpensiveGuitarForInput(state),
  mostCheaperGuitar: getMostCheaperGuitarForInput(state),
  clickedStringFilter: state.clickedStringFilter,
  guitars: getGuitarsWithPriceSort(state)
});

export default connect(mapStateToProps, { setMinPrice, setMaxPrice, setTypeGuitar, setStringGuitar })(Filter);
