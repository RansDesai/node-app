#!/bin/bash
echo "Deploying application resources on Kubernetes"
kubectl create ns technical-test
kubectl apply -f k8s/templates/Deployment.yaml -n technical-test
kubectl apply -f k8s/templates/Service.yaml -n technical-test
kubectl apply -f k8s/templates/hpa.yaml -n technical-test
