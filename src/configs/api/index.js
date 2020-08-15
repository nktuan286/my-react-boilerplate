/* eslint-disable no-async-promise-executor */
import axios from 'axios';

class HttpService {
  _get(endpoint) {
    return new Promise((resolve, reject) => {
      axios.get(endpoint, { withCredentials: true })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  _post(endpoint, _data) {
    return new Promise((resolve, reject) => {
      axios.post(endpoint, _data, { withCredentials: true })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  _put(endpoint, _data) {
    return new Promise((resolve, reject) => {
      axios.put(endpoint, _data, { withCredentials: true })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  _delete(endpoint) {
    return new Promise((resolve, reject) => {
      axios.delete(endpoint, { withCredentials: true })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  handleError(error) {
    return error;
  }
}

export const httpService = new HttpService();
