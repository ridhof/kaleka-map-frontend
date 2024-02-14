build:
	docker build -t kaleka-map-frontend .
run:
	docker run -d -p 3001:3000 --name kaleka-map-frontend-service kaleka-map-frontend
stop:
	docker stop kaleka-map-frontend-service
remove:
	docker rm kaleka-map-frontend-service
