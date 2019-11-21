#!/bin/sh

#project_path=$(cd `dirname $0`; pwd)
#project_name="${project_path##*/}"
#parent_path=$(dirname "$PWD")
#echo $project_path
#echo $project_name
#echo $parent_path

# system type
sysOS=`uname -s`
# work path
project_path=$(cd `dirname $0`; pwd)
#echo $project_path
# parent root
parent_path=$(dirname "$PWD")
current_path="$PWD"

if [[ ${sysOS} == "Darwin" || ${sysOS} == "Linux" ]];then
 config_path=${parent_path}/ecosystem.config.js
else
 config_path=${current_path}/ecosystem.config.js
fi
# start pm2 with config
npx pm2 start ${config_path}
#
## set logrotate limit 10 log files
npx pm2 set pm2-logrotate:retain 10


exec /bin/bash
