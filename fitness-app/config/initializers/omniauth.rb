Rails.application.config.middleware.use OmniAuth::Builder do
  provider :underarmour, ENV["UAKEY"], ENV["UASECRETKEY"]
end




