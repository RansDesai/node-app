#!/bin/bash
echo "Applying k8s templates"
kubectl apply -f k8s/templates/Deployment.yaml
kubectl apply -f k8s/templates/Service.yaml
kubectl apply -f k8s/templates/hpa.yaml