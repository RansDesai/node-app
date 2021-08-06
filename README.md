# Assessment Task
The application is built in NodeJs. It has just one endpoint /version that return a json output containing the application information as required. The applicaiton is containerized and every code change bieng pushed to git repo generates a new docker image. The docker image is built and pushed to a public docker regisery on docker hub (link: https://hub.docker.com/repository/docker/ransdesai90/task/general). Github Actions are being used for building the docker image and pushing it to the contianer registery. 


## How to Install

In order to deploy on a kubernetes cluster

- Clone the repo
```
git clone https://github.com/RansDesai/node-app.git
```

- Run the deploy.sh script under k8s directory
```
chmod +x k8s/deploy.sh
./k8s/deploy.sh
```
- You can port forward the service to test the application
```
kubectl port-forward service/task-service 8080:80
```

- Hit the page https://localhost:8080/version the expected output will be;
```
{
  "myapplication": [
    {
      "version": "1.0.1",
      "lastcommitsha": "57985022598ca3f6e72f7d9331066cbbc49c5c0d\n",
      "description": "pre-interview technical test"
    }
  ]
}
```

Risks:
- The repository is public
- The docker repo is public
- No automated testing of the application
