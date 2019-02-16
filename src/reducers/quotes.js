
export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(e => e.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      return state.map(e => e.id === action.quoteId ? {...e, votes: e.votes+1} : e);
    case "DOWNVOTE_QUOTE":
      return state.map(e => e.id === action.quoteId ? {...e, votes: e.votes === 0 ? 0 : e.votes-1} : e);
    default:
      return state
  }
}
