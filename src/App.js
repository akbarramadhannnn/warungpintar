import { Switch, Route } from 'react-router-dom';
import Layout from './layout';
import Routes from './routes';

const App = () => {
  return (
    <Layout>
      <Switch>
        {Routes.map((routes, i) => {
          return (
            <Route
              key={i}
              exact={routes.exact}
              path={routes.path}
              component={routes.component}
            />
          );
        })}
      </Switch>
    </Layout>
  );
};

export default App;
