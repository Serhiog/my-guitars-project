import {ActionType} from "./action";
import slider1Min from "../img/slider-1-min.png";
import slider2Min from "../img/slider-min-2.jpg";
import slider3Min from "../img/slider-min-3.png";
import slider1Big from "../img/slider-big-1.png";
import slider2Big from "../img/slider-2-big.png";
import slider3Big from "../img/slider-3-big.png";

const initialState = {
  stars: [
    {
      id: 1,
      isSelected: false,
    },
    {
      id: 2,
      isSelected: false,
    },
    {
      id: 3,
      isSelected: false,
    },
    {
      id: 4,
      isSelected: false,
    },
    {
      id: 5,
      isSelected: false,
    },
  ],

  picPreviews: [
    {pic: slider1Min, id: 1},
    {pic: slider2Min, id: 2},
    {pic: slider3Min, id: 3},
  ],
  bigPics: [
    {pic: slider1Big, id: 1},
    {pic: slider2Big, id: 2},
    {pic: slider3Big, id: 3},
  ],
  activePic: ``,
  showPopup: false,
  reviews: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_INITIAL_PIC:
      return Object.assign({}, state, {activePic: state.bigPics[0]});
    case ActionType.GET_NEXT_PIC:
      const picNext = state.bigPics.find((pic) => {
        return pic.id === action.payload;
      });
      return Object.assign({}, state, {
        activePic: picNext,
      });
    case ActionType.GET_PREVIOUSLY_PIC:
      const picPreviously = state.bigPics.find((pic) => {
        return pic.id === action.payload;
      });
      return Object.assign({}, state, {
        activePic: picPreviously,
      });
    case ActionType.SHOW_POPUP:
      return Object.assign({}, state, {showPopup: true});
    case ActionType.HIDE_POPUP:
      return Object.assign({}, state, {showPopup: false});
    case ActionType.SEND_REVIEW:
      return Object.assign({}, state, {
        reviews: [
          ...state.reviews,
          Object.assign({}, action.payload, {id: state.reviews.length}),
        ],
      });
    case ActionType.SET_FAVORITE_STAR:
      return Object.assign({}, state, {
        stars: state.stars.map((star) => {
          if (star.id <= action.payload) {
            star.isSelected = true;
          }
          return star;
        }),
      });
    case ActionType.RESET_FAVORITE_STAR:
      return Object.assign({}, state, {
        stars: state.stars.map((star) => {
          if (star.id <= action.payload) {
            star.isSelected = false;
          }
          return star;
        }),
      });
    default:
      return state;
  }
};

export {rootReducer};
