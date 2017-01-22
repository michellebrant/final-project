Rails.application.config.middleware.use OmniAuth::Builder do
  var UAKEY = process.env.UAKEY
  var UASECRETKEY = process.env.UASECRETKEY
  provider :underarmour, UAKEY, UASECRETKEY
end




