# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# Define env variables for oauth

ENV['GOOGLE_OAUTH_CLIENT_ID'] = '441360430821-7u2gsltnqc59p0b2vqkenbmkpganmr3i.apps.googleusercontent.com'
ENV['GOOGLE_OAUTH_CLIENT_SECRET'] = 'zDKVKo2g-mfuUdYGu_COW4eM'