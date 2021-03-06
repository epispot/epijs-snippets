echo "Installing dependencies..."

read -p "Use yarn? (Y/n): " YARN

if [ "$YARN" = "Y" -o "$YARN" = "y" ]; then
  yarn install
else
  npm install
fi

echo "Succesfully installed dependencies."

if [ "$YARN" = "Y" -o "$YARN" = "y" ]; then
  echo -e "Use \033[32myarn run lint\033[0m to lint, and \033[32myarn run test\033[0m to test."
else
  echo -e "Use \033[32mnpm run lint\033[0m to lint, and \033[32mnpm run test\033[0m to test."
fi

code . 
