Rails.application.config.middleware.use OmniAuth::Builder do
  provider :underarmour, UAKEY, UASECRETKEY
end




