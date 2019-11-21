#!/bin/sh

root_path=$(dirname "$PWD")
# start pm2 with config
npx pm2 start $root_path/ecosystem.config.js

# set logrotate limit 10 log files
npx pm2 set pm2-logrotate:retain 10


#exec /bin/bash