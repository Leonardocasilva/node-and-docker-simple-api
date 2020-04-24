docker stop endpoint-api

docker container rm endpoint-api

docker image rm leonardocasilva/endpoint

docker build -t leonardocasilva/endpoint .

docker run --name endpoint-api -p 3000:3000 -d leonardocasilva/endpoint

