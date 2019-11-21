#!/bin/sh

#project_path=$(cd `dirname $0`; pwd)
#project_name="${project_path##*/}"
#root_path=$(dirname "$PWD")
#echo $project_path
#echo $project_name
#echo $root_path

root_path=$(dirname "$PWD")
# start pm2 with config
npx pm2 start $root_path/ecosystem.config.js

# set logrotate limit 10 log files
npx pm2 set pm2-logrotate:retain 10

#exec /bin/bash