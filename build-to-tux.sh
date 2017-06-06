#!/bin/bash
# to be ran on drexel tux server, copies react build directory into public
# folder of tux server so site can be hosted off https://cs.drexel.edu/~nne23/
#

PROJECT_ROOT="${PWD}"
TUX_ROOT="${PROJECT_ROOT}/../"

# back up previous build
cd "${TUX_ROOT}"
rm -rf public_html_backup
mv public_html/ public_html_backup/

# copy latest tux-build to public directory
cd "${PROJECT_ROOT}"
git checkout master
git fetch origin
git branch -D build
git checkout origin/build
git checkout -b build
cp -rf tux-build "${TUX_ROOT}"/public_html

# make public files visble and javascript executuable
cd "${TUX_ROOT}"
chmod -R 755 public_html
