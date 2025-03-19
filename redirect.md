RewriteEngine On
RewriteCond %{HTTP_HOST} ^1creepertv.github.io [NC,OR]
RewriteCond %{HTTP_HOST} ^1creepertv.github.io [NC]
RewriteRule ^(.*)$ https://sites.google.com/view/1creepertv/accueil [L,R=301,NC]
