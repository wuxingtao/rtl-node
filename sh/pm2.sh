#!/bin/sh

#project_path=$(cd `dirname $0`; pwd)
#project_name="${project_path##*/}"
#root_path=$(dirname "$PWD")
#echo $project_path
#echo $project_name
#echo $root_path

# system type
sysOS=`uname -s`
# work path
project_path=$(cd `dirname $0`; pwd)
#echo $project_path
# parent root
root_path=$(dirname "$PWD")

if [[ ${sysOS} == "Darwin" && ${sysOS} == "Linux" ]];then
 config_path=${root_path}/ecosystem.config.js
else
 config_path=${root_path}/sh/ecosystem.config.js
fi
# start pm2 with config
npx pm2 start ${config_path}

# set logrotate limit 10 log files
npx pm2 set pm2-logrotate:retain 10


#exec /bin/bash
