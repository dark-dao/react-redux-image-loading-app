import _ from 'lodash';
import request from 'axios';

const metods = ['get', 'post', 'put', 'patch', 'delete'];
class ApiClient {
  constructor() {
    metods.forEach((method) => {
      this[method] = (url, rest) => {
        let options = {
          method: _.lowerCase([method]),
          uri: url,
          headers: {},
          body: rest || '',
          json: true
        };

        return request[options.method](options.uri)
          .then(response => {
            return {success: true, response};
          })
          .catch(error => {
            return {success: false, error};
          });
      };
    });
  }
}
export default ApiClient;
