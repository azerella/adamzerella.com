#!/bin/bash

# -----------------------------------------------------------------------------
# BASH script for a first time deployment to a new ubuntu-server machine
# -----------------------------------------------------------------------------

set -eu

# Update repositories and libs
apt-get update && apt-get upgrade --yes

# Install NGINX
# See: https://packages.ubuntu.com/bionic/nginx-full
apt install --yes build-essential curl git openssl nginx-full 

# Setup Node.js
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install --yes nodejs

# Download and setup project files, then build site
git clone https://github.com/adamzerella/adamzerella
cd adamzerella
npm i
npm run build

# Create relevant directories
mkdir -p /etc/nginx/ssl/
mkdir -p /var/www/adamzerella.com/build/

# Copy NGINX configurations to relevant places
cp .deploy/nginx.conf /etc/nginx/nginx.conf
cp .deploy/general.conf /etc/nginx/general.conf
cp -r .deploy/sites-enabled/* /etc/nginx/sites-enabled/

# Copy site built bundle to relevant place
cp -r build/* /var/www/adamzerella.com/build/

# Issue a Diffie-Hellman key
openssl dhparam -dsaparam -out /etc/nginx/ssl/dhparam.pem 2048

# #############COPY CERT MANUALLY#############
# /etc/nginx/ssl/server.crt
# /etc/nginx/ssl/server.key
# /etc/nginx/ssl/chain.pem
# ############################################
