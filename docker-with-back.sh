#!/bin/bash

export REACT_APP_API_HOST=$(ip route show default | awk '{print $3}')

npm start
