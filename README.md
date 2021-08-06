# Assessment Task
The application is built in NodeJS. It has just one endpoint '/version' that returns application information in JSON format as required. The applicaiton is containerized and every code change bieng pushed to git repository, generates a new docker image. The docker image is built and pushed to a public docker regisery on docker hub (link: https://hub.docker.com/repository/docker/ransdesai90/task/general). Github Actions are being used for building the docker images and pushing it to the contianer registery. 

## How to Install

In order to deploy on a Kubernetes cluster

- Clone the repo
```
git clone https://github.com/RansDesai/node-app.git
```

- Run the deploy.sh script under k8s directory. Please make sure you are connected to the right kubernetes cluster before deploying the resources.
```
chmod +x k8s/deploy.sh
./k8s/deploy.sh
```
- You can port forward the service to test the application
```
kubectl port-forward service/task-service 8080:80 -n technical-test
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

- If you need to update the application version then just to restart the deployment
```
kubectl rollout restart deployment.apps/task-deployment -n technical-test
```

- In order to clean up the resources
```
chmod +x k8s/remove.sh
./k8s/remove.sh
```


## Versioning Strategy
The version number of the application is taken from the packages.json. The version field is optional here but if we want to publish the node app to npm registery then it becomes mandatory. So the version field  actually the true representation of application version.

The images that are being pushed to the container registery are also taggged with a unique id. GITHUB_RUNID is being used as a unique id for the tagging. 


## Risks:
- The repository is public
- The docker repo is public
- No automated testing of the application
