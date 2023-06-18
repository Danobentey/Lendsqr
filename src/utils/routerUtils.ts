import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const routerUtils = {
  push: (route: string) => {
    history.push(route);
  },

  getRouterState: () => {
    return history.location.state;
  },
};

export default routerUtils;