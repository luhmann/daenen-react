#!/bin/bash

sudo apt-get update

# Install necessary letsencrypt dependencies
sudo apt-get -y install git bc htop

# Clone the letsencrypt repo
sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt

# Install node
# curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
# sudo apt-get -y install nodejs
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
nvm install 5.9.0


# Install pm2 process manager
node -v
npm install pm2 -g
# register init scripts
pm2 startup
pm2 start daenen4-config.json
# create dump file to enable restart
pm2 save

# Install nginx
curl http://nginx.org/keys/nginx_signing.key | sudo apt-key add -
sudo echo -e "deb http://nginx.org/packages/mainline/ubuntu/ `lsb_release -cs` nginx\ndeb-src http://nginx.org/packages/mainline/ubuntu/ `lsb_release -cs` nginx" > /etc/apt/sources.list.d/nginx.list
sudo apt-get update
sudo apt-get install nginx

# Import nginx vhost

# Create base folders
sudo mkdir -p /srv/www/daenen-react
sudo chown -R ubuntu:www-data /srv/www/daenen-react

# deploy here

# Obtain Certificate
./letsencrypt-auto certonly -a webroot --webroot-path=/srv/www/daenen-react/current -d daenen4.de -d www.daenen4.de

# Generate strong diffie hellman group
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048

# Configure unattended-backups
# sudo dpkg-reconfigure -plow unattended-upgrades

# Install logentries agent
# wget https://raw.githubusercontent.com/logentries/le/master/install/linux/logentries_install.sh && sudo bash logentries_install.sh
