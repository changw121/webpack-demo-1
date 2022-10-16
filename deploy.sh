# 部署脚本
yarn build &&                         # 先在main分支生成新的dist
    git checkout gh-pages &&          # 进入gh-pages分支
    rm -rf *.html *.css *.js *.png && # 删除gh-pages原来旧的dist目录下的文件
    mv dist/* ./ &&                   # 删掉旧的文件，就可以将新生成的文件从dist掏出来
    rm -rf dist
git add . &&
    git commit -m 'update dist' &&
    git push &&
    git checkout -
