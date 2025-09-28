# Use official nginx image
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy your built static site to nginx's public folder
COPY html /usr/share/nginx/html

# Copy images, scripts, and style.css into nginx's public folder
COPY img /usr/share/nginx/html/img
COPY scripts /usr/share/nginx/html/scripts
COPY src /usr/share/nginx/html/src

EXPOSE  80
# EXPOSE 3030

# Start nginx (default CMD in nginx image)