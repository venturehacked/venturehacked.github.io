#!/bin/bash
if [[ "${TRAVIS_PULL_REQUEST}" == "false" && "${TRAVIS_BRANCH}" == "main" ]]; then
  echo "Attempting to generate pages"
  ember github-pages:commit --message "DEPLOYED ON $(date +%Y-%m-%d) AT $(date +%H:%M:%S)" --branch "${GH_DEST_BRANCH}"
  echo "Generated a deployment"
  git push deploy master 2>&1 >/dev/null
  echo "Pushed to master"
else
  echo "Not a main build -- no deploy"
fi
