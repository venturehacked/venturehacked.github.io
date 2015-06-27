#!/bin/bash
set -ev
echo "Attempting to generate pages"
if [[ "${TRAVIS_PULL_REQUEST}" = "false" && "${TRAVIS_BRANCH}" == 'main' ]]; then
  ember github-pages:commit --message "New release" --branch "${GH_DEST_BRANCH}"
  git push deploy master
else
  echo "Not a main build -- no deploy"
fi
