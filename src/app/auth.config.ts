import { AuthConfig } from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: '54150330143-fv4bjlm2r92o7virc8u4k1jf0po9vq3q.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
}
