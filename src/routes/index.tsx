import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { Header } from '../components/Header';

// import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';

import { FavoritesList } from '../pages/FavoritesList';
// import { Profile } from '../pages/Profile';
import { ComicList } from '../pages/ComicList';

export const Routes = (): JSX.Element => (
  <Switch>
    {/* <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} /> */}

    <Header>
      <>
        <Route path="/favorites" component={FavoritesList} isPrivate />
        <Route path="/comics" component={ComicList} isPrivate />
        {/* <Route path="/comic" component={Comic} isPrivate /> */}
      </>
    </Header>
  </Switch>
);
