#!/bin/bash
echo "Removing application resources"
kubectl delete -f k8s/templates/Deployment.yaml -n technical-test
kubectl delete -f k8s/templates/Service.yaml -n technical-test
kubectl delete -f k8s/templates/hpa.yaml -n technical-test