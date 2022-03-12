module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f1ac715b55ccd4624acc11a2660ed4f7'),
  },
});
