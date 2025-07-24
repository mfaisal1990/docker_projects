FROM php:8.2-apache

# Install the PDO MySQL extension dependencies and enable it
RUN apt-get update && apt-get install -y libpng-dev libonig-dev libxml2-dev zip unzip \
    && docker-php-ext-install pdo_mysql

COPY api.php /var/www/html/api.php

EXPOSE 80
