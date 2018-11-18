#!/bin/bash

# -----------------------------------------------------------------------------
# BASH script for a first time deployment to a new ubuntu-server machine
# -----------------------------------------------------------------------------

set -eu

# Update repositories and libs
sudo yum update && sudo yum upgrade -y

# Install NGINX
# See: https://packages.ubuntu.com/bionic/nginx-full
sudo yum install -y curl wget git nginx 

# Setup Node.js
wget https://nodejs.org/dist/v10.13.0/node-v10.13.0-linux-x64.tar.xz
tar xvf node-v10.13.0-linux-x64.tar.xz
cp -r node-v10.13.0-linux-x64/* /usr/local/

# Download and setup project files, then build site
git clone https://github.com/adamzerella/adamzerella
cd adamzerella
npm i
npm run build

# Create relevant directories
mkdir -p /etc/nginx/ssl/
mkdir -p /etc/nginx/sites-enabled/
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
