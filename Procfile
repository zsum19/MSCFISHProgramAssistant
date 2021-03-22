web: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-development}
release: rails db:migrate VERSION=0 rails db:migrate db:seed