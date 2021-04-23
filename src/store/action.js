export const ActionType = {
  GET_INITIAL_PIC: `GET_INITIAL_PIC`,
  GET_NEXT_PIC: `GET_NEXT_PIC`,
  GET_PREVIOUSLY_PIC: `GET_PREVIOUSLY_PIC`,
  SHOW_POPUP: `SHOW_POPUP`,
  HIDE_POPUP: `HIDE_POPUP`,
  SEND_REVIEW: `SEND__REVIEW`,
  SET_FAVORITE_STAR: `SET_FAVORITE_STAR`,
  RESET_FAVORITE_STAR: `RESET_FAVORITE_STAR`
};

export const ActionCreator = {
  addInitialPic: () => ({
    type: ActionType.GET_INITIAL_PIC,
  }),
  selectNextPic: (payload) => ({
    type: ActionType.GET_NEXT_PIC,
    payload,
  }),
  selectPreviouslyPic: (payload) => ({
    type: ActionType.GET_PREVIOUSLY_PIC,
    payload,
  }),
  showPopup: () => ({
    type: ActionType.SHOW_POPUP,
  }),
  hidePopup: () => ({
    type: ActionType.HIDE_POPUP,
  }),
  sendMessage: (payload) => ({
    type: ActionType.SEND_REVIEW,
    payload,
  }),
  setSelectedStars: (payload) => ({
    type: ActionType.SET_FAVORITE_STAR,
    payload,
  }),
  resetSelectedStars: (payload) => ({
    type: ActionType.RESET_FAVORITE_STAR,
    payload,
  }),
};
