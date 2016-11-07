docker rmi -f ielab/rest3-ui 

docker rm -f $(docker ps | grep rest3angular | awk "{print \$1}")

docker build -t ielab/rest3-ui .
docker-compose up -d