
const filterPost = (state = { filter: "" }, action) => {
    switch (action.type) {
      case "FILTER_POST":
        return {
          filter: action.payload,
        };
        default: return state
    }}
export default filterPost