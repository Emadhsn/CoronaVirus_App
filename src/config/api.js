const BASE_DEV_URl = 'https://api.covid19api.com';
const BASE_PROD_URl = 'https://api.covid19api.com';

const BASE_URl = __DEV__ ? BASE_DEV_URl : BASE_PROD_URl;

export {BASE_URl};
