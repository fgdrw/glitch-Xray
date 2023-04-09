#!/bin/bash

PORT=8080

chmod +x caddy xray

# start service
./xray -config xray.json &
./caddy run --config etc/caddy/Caddyfile --adapter caddyfile
