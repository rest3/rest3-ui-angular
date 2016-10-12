docker rmi -f apprenda/rest3
docker rm -f $(docker ps | grep rest3angular | awk "{print \$1}")

docker build -t apprenda/rest3 .
docker-compose up -d