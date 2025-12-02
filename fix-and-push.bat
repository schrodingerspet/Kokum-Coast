@echo off
echo Deleting yarn.lock...
del yarn.lock

echo Installing dependencies...
yarn install

echo Building project...
yarn build

echo Staging changes...
git add package.json yarn.lock

echo Committing...
git commit -m "Fix css-parser dependency to use HTTPS instead of SSH"

echo Pushing to remote...
git push

echo Done!
pause
