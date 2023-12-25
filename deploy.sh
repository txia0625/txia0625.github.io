#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
 git push -f https://github.com/txia0625/txia0625.github.io.git main
 #git push -f https://${access_token}@github.com/txia0625/txia0625.github.io.git main


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:messiahhh/blog.git master:gh-pages
#git push -f https://github.com/txia0625/txia0625.github.io.git master:gh-pages


cd -