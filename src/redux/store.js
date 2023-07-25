import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const Store = createStore(rootReducer, composeWithDevTools);
const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;

{/* <tr key={id}>
            <th scope="row">{resData.id}</th>
            <td>{resData.name}</td>
            <td>{resData.email}</td>
          </tr>; */}