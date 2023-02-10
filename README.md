# shopping_ms

to start mongod on unbuntu -->       mongod --dbpath ~/data/db
start service in -->                 sudo service nginx restart
remove file -->                      sudo rm -r filename
create file with multiple dir -->    sudo mkdir -p /data/db




**************************nginx as load balancer**************************

blog url -- https://blog.logrocket.com/how-to-run-a-node-js-server-with-nginx/
nginx-ubuntu-doc url -- https://ubuntu.com/tutorials/install-and-configure-nginx#5-activating-virtual-host-and-testing-results

**************usefull linux commands*******************

sudo unlik filename (deletes file)
touch filename (create file)
esc , :wq (to write and quite)
cat filename (readonly)
sudo vim /etc/nginx/sites-available/myserver.config (open file in edit mode in vim )



***************myserver.config****************
server{
listen 80;
server_name wach.quest;
location / {
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        # location /overview {
        #     proxy_pass http://127.0.0.1:3000$request_uri; # proxy_redirect off; # }
}
}

The above configuration has Nginx listening on port 80 on your-domain.com. The / is your Uniform Resource Identifier (URI) with the following properties:

proxy_set_header, which sets the host header to be that of the Nginx server
proxy_pass http, which instructs Nginx to proxy all requests matching the location pattern to an upstream (backend) server
proxy_http_version, which converts the incoming connection to HTTP 1.1
proxy_set_header Upgrade, which converts the proxied connection to type Upgrade because WebSockets only communicate on upgraded connections
proxy_set_header Connection, which ensures the connection header value is U``pgrade

For the next step, let’s enable the above file by creating a symbolic from it to the sites-enabled directory, which Nginx reads from during startup:

sudo ln -s /etc/nginx/sites-available/myserver.config /etc/nginx/sites-enabled/
The server block is now enabled and configured to return responses to requests based on the listen port and location path.

sudo nginx -t
The output upon running the above command would look like this:

nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

sudo ufw allow 'Nginx Full' (allowing traffic through firewall , preventing 502)

sudo service nginx restart




*******node app running on nginx*******


rabbitmq installationguide ---- https://www.cherryservers.com/blog/how-to-install-and-start-using-rabbitmq-on-ubuntu-22-04