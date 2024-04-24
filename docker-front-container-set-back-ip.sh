#!/bin/bash

# This file is used by "Dockerfile-with-back" file

export REACT_APP_API_HOST=$(ip route show default | awk '{print $3}')

npm start
