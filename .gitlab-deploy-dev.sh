#!/bin/bash

# Get servers list
set -f
string=$DEV_DEPLOY_SERVER
array=(${string//,/ })

# iterate servers for deploy and pull latest code
for i in "${!array[@]}"; do
  echo "deploying to ${array[i]}"
  ssh ubuntu@${array[i]} "cd /home/ubuntu/admin && git pull origin dev && npm i && forever restartall" 
done
