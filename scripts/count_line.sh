#!/usr/bin/env bash

function search {
  echo $(find src -name "$1" -type f -print0 | xargs -0 cat | grep ^. | wc -l)
}

# Ищет файлы по расширению и подсчитывает только те строки, которые не пусты.
js=$(search '*.js')
vue=$(search '*.vue')

echo 'Строк кода (без пробелов):'
echo '———————⟊—————'
echo "   .js | ${js}"
echo "  .vue | ${vue}"
echo '———————⟊—————'
echo " TOTAL | $(($js + $vue))"
echo
