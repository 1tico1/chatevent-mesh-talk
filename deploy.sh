#!/bin/sh

set -e

echo "\033[42;97mBuilding the project...\033[0m"
docker build -t aloisogomes/sitechatevent:1.0.0 .

echo "\033[42;97mDeploying the project...\033[0m"
docker push aloisogomes/sitechatevent:1.0.0

