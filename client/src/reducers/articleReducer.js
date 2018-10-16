export default function articleReducer(state = [], action) {
  switch(action.type) {
    case 'SAVE_ARTICLE':
      return [...state, 
        Object.assign({}, action.article)
      ];

    default:
      return state;
  }
}