module.exports = (function() {
    var self = this
    
    this.env = 'development' // OR 'production'
    this.url = 'example.com'
    this.secretKey = 'halla at cho boi' // some random, creative string

    this.auth0 = {
        domain: '***.auth0.com',
        clientID: '{{ ClientID }}',
        clientSecret: '{{ ClientSecret }}',
        callbackURL: 'https://' + self.url + '/login/callback'
    };
    
    this.setupEnvironment = function() {
        process.env.NODE_ENV = self.env
        
        process.env.AUTH0_CLIENT_ID = self.auth0.clientID
        process.env.AUTH0_CLIENT_SECRET = self.auth0.clientSecret
        process.env.AUTH0_DOMAIN = self.auth0.domain
        process.env.AUTH0_CALLBACK_URL = self.auth0.callbackURL
    }
    
    return this
})()