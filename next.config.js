const isProduction = process.env.NODE_ENV === 'production';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProduction
});

module.exports = withPWA({
  images: {
    domains: ['res.cloudinary.com']
  }
});
