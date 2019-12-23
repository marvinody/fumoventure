#!/bin/bash
# RUN AS ./thumbnailify.sh <THUMB DIRECTORY WITH TRAILING SLASH>
# THE FOLDER THE SCRIPT RUNS IN WILL DETERMINE FROM WHERE IT TRAVERSES
# will find every image, duplicate folder structure, and thumbnail it
SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

basefolder="$1"

for i in $(find * -iname '*.JPG' -o -iname "*.PNG"); do
  if [ $(dirname $i) != "." ]; then
    dirpath="${i%/*}"
    dir_arr=($(echo $dirpath | tr "/" "\n"))
    path=""
    for x in "${dir_arr[@]}"; do
      if [ -z "$path" ]; then
        path=$x
        mkdir -p $basefolder$path
      else
        path=$path"/"$x
        mkdir -p $basefolder$path
      fi
    done
    ext="."${i##*.}
    output=${i/$ext/".jpg"}
    if [ ! -f $basefolder$output ] || [ $i -nt $basefolder$output ]; then
      echo "$i -> $basefolder$output"
      convert $i -auto-orient -resize 640 $basefolder$output
    fi
  else
    ext="."${i##*.}
    output=${i/$ext/".jpg"}
    if [ ! -f $basefolder$output ] || [ $i -nt $basefolder$output ]; then
      echo $i
      convert $i -auto-orient -resize 640x480 -quality 60 $basefolder$output
    fi
  fi
done
