import  {legacy_createStore as createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const middleware = [thunk];

if(process.env.NODE_ENV === "development"){
    const {logger} = require ('redux-logger')
    middleware.push(logger)
}

const store = createStore(applyMiddleware(...middleware));
export default store;