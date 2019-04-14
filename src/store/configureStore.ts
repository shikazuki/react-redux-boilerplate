import { applyMiddleware, compose, createStore, StoreEnhancer, StoreEnhancerStoreCreator } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./modules";

export function configureStore() {
  const windowIfDefined = typeof window === "undefined" ? null : (window as any);
  const devToolsExtension = windowIfDefined && (windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__ as () => StoreEnhancer);
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next
  )(createStore);
  return createStoreWithMiddleware(rootReducer, {});
}
