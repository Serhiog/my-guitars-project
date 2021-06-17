import { createRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { setMinPrice, setMaxPrice, setTypeGuitar, setStringGuitar } from "../../store/action";
import { getActiveFilters, getMostExpensiveGuitarForInput, getMostCheaperGuitarForInput, getGuitarsWithPriceSort } from "../../store/selectors";
import { guitarTypes } from "../../consts";

const allStrings = ['4', '6', '7', '12'];
const allGuitars = ["Акустическая гитара", "Электрогитара", "Укулеле"];
const guitarStrings = {
  "Акустическая гитара": ['6', '7', '12'],
  "Электрогитара": ['4', '6', '7'],
  "Укулеле": ['4']
};
const stringGuitars = {
  4: ["Электрогитара", "Укулеле"],
  6: ["Акустическая гитара",  "Электрогитара"],
  7: ["Акустическая гитара",  "Электрогитара"],
  12: ["Акустическая гитара"]
};
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

  const [selectedGuitars, setSelectedGuitars] = useState([]);
  const [selectedStrings, setSelectedStrings] = useState([]);


  const handleType = (evt) => {
    let type = evt.target.dataset.name;

    setSelectedGuitars((prevGuitars) => {
      if (prevGuitars.includes(type)) {
        return prevGuitars.filter(guitar => guitar !== type);
      } else {
        return [...prevGuitars, type];
      }
    });
  };

  const filteredStrings = selectedGuitars.reduce((resultStrings, guitarType) => {
    const set = new Set([...resultStrings, ...guitarStrings[guitarType]]);
    return [...set];
  }, []).sort();

  const filteredGuitars = selectedStrings.reduce((resultGuitars, stringType) => {
    const set = new Set([...resultGuitars, ...stringGuitars[stringType]]);
    return [...set];
  }, []).sort();

  console.log('selectedGuitars:', selectedGuitars);
  console.log('selectedStrings:', selectedStrings);
  console.log('filteredStrings:', filteredStrings);
  console.log('filteredGuitars:', filteredGuitars);


  const onlyAllowedStrings = filteredStrings.length !== 0 ? filteredStrings : allStrings;
  const onlyAllowedGuitars = filteredGuitars.length !== 0 ? filteredGuitars : allGuitars;

  console.log('onlyAllowedStrings:', onlyAllowedStrings);
  console.log('onlyAllowedGuitars:', onlyAllowedGuitars);
  const stringKey = JSON.stringify(onlyAllowedStrings);
  const guitarKey = JSON.stringify(onlyAllowedGuitars);

  useEffect(() => {
    setSelectedStrings(prevStrings => {
        return prevStrings.filter(stringType => onlyAllowedStrings.includes(stringType));
    });
  }, [stringKey]);

  useEffect(() => {
    setSelectedGuitars(prevGuitars => {
      return prevGuitars.filter(guitarType => onlyAllowedGuitars.includes(guitarType));
    });
  }, [guitarKey]);

  const handleStrings = (evt) => {
    console.log('string click:', evt.target.disabled);
    // setSelectedStrings(true)
    // setSelectedTypes(false)
    let selectedString = evt.target.dataset.name;

    setSelectedStrings((prevStrings) => {
      if (prevStrings.includes(selectedString)) {
        return prevStrings.filter(string => string !== selectedString);
      } else {
        return [...prevStrings, selectedString];
      }
    });

  
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
              checked={selectedGuitars.includes("Акустическая гитара")}
              disabled={!onlyAllowedGuitars.includes("Акустическая гитара")} />
            <span className="filter__type-checkbox"></span>
                        Акустические гитары
          </label>
          <label htmlFor="electro" className="filter__type-label">
            <input id="electro" className="filter__type-input" data-name="Электрогитара" type="checkbox" onChange={handleType}
            checked={selectedGuitars.includes("Электрогитара")}
              disabled={!onlyAllowedGuitars.includes("Электрогитара")} />
            <span className="filter__type-checkbox"></span>
                        Электрогитары
          </label>
          <label htmlFor="ukulele" className="filter__type-label">
            <input id="ukulele" className="filter__type-input" data-name="Укулеле" type="checkbox" onChange={handleType}
            checked={selectedGuitars.includes("Укулеле")}
              disabled={!onlyAllowedGuitars.includes("Укулеле")} />
            <span className="filter__type-checkbox"></span>
                        Укулеле
          </label>
        </div>
        <div className="filter__string">
          <p className="filter__string-name">Количество струн</p>
          <label htmlFor="four" className="filter__string-label">
            <input id="four" className="filter__string-input" data-name="4" type="checkbox" checked={selectedStrings.includes('4')} onChange={handleStrings} disabled={!onlyAllowedStrings.includes('4')} />
            <span className="filter__string-checkbox"></span>
            <span className={blockedStrings.four && !clickedStringFilter ? `filter__string-num-disabled` : `filter__string-num`}>4</span>
          </label>
          <label htmlFor="six" className="filter__string-label">
            <input id="six" className="filter__string-input" data-name="6" type="checkbox" checked={selectedStrings.includes('6')} onChange={handleStrings} disabled={!onlyAllowedStrings.includes('6')} />
            <span className="filter__string-checkbox"></span>
            <span className={blockedStrings.six && !clickedStringFilter ? `filter__string-num-disabled` : `filter__string-num`}>6</span>
          </label>
          <label htmlFor="seven" className="filter__string-label">
            <input id="seven" className="filter__string-input" data-name="7" type="checkbox" checked={selectedStrings.includes('7')} onChange={handleStrings} disabled={!onlyAllowedStrings.includes('7')} />
            <span className="filter__string-checkbox"></span>
            <span className={blockedStrings.seven && !clickedStringFilter ? `filter__string-num-disabled` : `filter__string-num`}>7</span>
          </label>
          <label htmlFor="twelve" className="filter__string-label">
            <input id="twelve" className="filter__string-input" data-name="12" type="checkbox" checked={selectedStrings.includes('12')} onChange={handleStrings} disabled={!onlyAllowedStrings.includes('12')} />
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
