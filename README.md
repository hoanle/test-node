2 ways of creating KEY

1.

brew install mkcert
mkcert -install
mkcert localhost

==> Key will be `localhost-key.pem` and `localhost.pem`

==> Replace in app.js


2. Run
curl -sS https://raw.githubusercontent.com/hoanle/ssl/master/ssl.sh | bash -s 127.0.0.1

==> Key will be `cert.pem` and `key.pem`
==> Replace in app.js
