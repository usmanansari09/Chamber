const successStatusCodes = [200, 201, 202, 203, 204, 205, 206, 207, 208, 209];

function onResponse(response) {
  return response
    .then(result => {
      console.log(result);
      if (successStatusCodes.includes(result.status)) {
        return Promise.resolve(result.data);
      } else {
        let error = '';
        try {
          error = result.data;
          if (error) {
            error = Object.values(result.data)[0];
            if (error) {
              if (typeof error === 'string') {
                return Promise.reject(error);
              }
            }
          }
          error = result.data
            ? Object.values(result.data)[0][0]
            : result.data?.message ?? 'SERVER_ERROR';
        } catch (e) {
          error = result.data?.message ?? 'SERVER_ERROR';
        }
        return Promise.reject(error);
      }
    })
    .catch(onResponseFailure);
}

function onResponseFailure(error) {
  console.log('onResponseFailure', error);
  return Promise.reject(error);
}

export default {
  onResponse,
  onResponseFailure,
};
