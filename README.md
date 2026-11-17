# Keyvane web vault

Built output of `apps/keyvane` (Flutter web), served by GitHub Pages at
https://vault.techhigh.co.uk. Do not edit by hand. To update, from the Keyvane repo:

    cd apps/keyvane
    flutter build web --release --base-href / --no-web-resources-cdn \
      --dart-define-from-file=dart_defines.local.json
    rsync -a --delete --exclude .git --exclude CNAME --exclude .nojekyll --exclude README.md \
      build/web/ ../../../keyvane-web/

then commit and push here.
