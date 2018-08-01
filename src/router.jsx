import React, { Component}  from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import {
  NotFoundPage
} from './components';

import {
    LoaderBar
} from './atoms';

import App from './App';

class DynamicWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            module: null
        };
    }
    componentDidMount() {
        const { path } = this.props;
        import(`${path}`).then(module => {
            this.setState({module: module.default});
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        const { module: LoadedComponent } = this.state;
        if(LoadedComponent !== null) {
            return LoadedComponent && <LoadedComponent />;
         } else {
            return (
                <LoaderBar />
            );
        }
    }
};

const AppRouter = () => (
    <App>
      <Switch>
          <Route exact path='/' component={() => <DynamicWrapper path='./pages/main/index.jsx' />} />
          <Route path='/history' component={() => <DynamicWrapper path='./pages/history/index.jsx' />} />
          <Route component={NotFoundPage} />
      </Switch>
    </App>
);

export default AppRouter;
