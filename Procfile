web: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-development}
release: bin/rails db:migrate
release: bin/rails db:seed