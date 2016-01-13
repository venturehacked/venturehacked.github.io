#!/bin/bash

echo "Attempting to generate pages"
echo "Pull request? ${TRAVIS_PULL_REQUEST}"
echo "Branch ${TRAVIS_BRANCH}"

if [[ "${TRAVIS_PULL_REQUEST}" == "false" && "${TRAVIS_BRANCH}" == "main" ]]; then
  ember github-pages:commit --message "DEPLOYED ON $(date +%Y-%m-%d) AT $(date +%H:%M:%S)" --branch "${GH_DEST_BRANCH}"
  echo "Generated a deployment"
  git push deploy master 2>&1 >/dev/null
  echo "Pushed to master"
else
  echo "Not a main build -- no deploy"
fi
