import Auth0 from 'react-native-auth0';

const AUTH0_DOMAIN = 'coffeetracker.auth0.com';
const CLIENT_ID = 's4Gb3ii7TlL4nvr0UTsNFyvo9XyNtm81';

const auth0 = new Auth0({
  domain: `${AUTH0_DOMAIN}`,
  clientId: `${CLIENT_ID}` 
});

export {
  auth0,
  AUTH0_DOMAIN,
  CLIENT_ID
};
