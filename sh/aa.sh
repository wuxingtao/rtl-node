#!/bin/sh

#project_path=$(cd `dirname $0`; pwd)
#project_name="${project_path##*/}"
#root_path=$(dirname "$PWD")
#echo $project_path
#echo $project_name
#echo $root_path

project_path=$(cd `dirname $0`; pwd)
root_path=$(dirname "$PWD")
echo $project_path
echo $root_path

exec /bin/bash
