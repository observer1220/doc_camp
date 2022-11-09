# 輸入指令一鍵佈署 .\deploy.sh

# 發生錯誤時終止腳本
set -e

# 打包編譯
# npm run build

# 將專案放到Github
git add .
git commit -m "update `date +'%Y-%m-%d %H:%M:%S'`";
git push origin main
# git push gitlab main

cd -