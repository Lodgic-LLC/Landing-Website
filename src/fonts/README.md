# Web fonts

`SourceSans3-latin.woff` and `Manrope-latin.woff` are subsets of the variable TTF files in this folder. The original fonts and their OFL licenses remain here. The site uses the smaller WOFF files; Open Graph images use the separate `-OG.ttf` files.

To regenerate a web font after changing its source, run:

```sh
pyftsubset src/fonts/SourceSans3.ttf --output-file=src/fonts/SourceSans3-latin.woff --flavor=woff --unicodes='U+0000-00FF,U+0100-017F,U+0180-024F,U+1E00-1EFF,U+2000-206F,U+20AC,U+2122,U+2190-22FF' --layout-features='*' --name-IDs='*' --name-languages='*'
pyftsubset src/fonts/Manrope.ttf --output-file=src/fonts/Manrope-latin.woff --flavor=woff --unicodes='U+0000-00FF,U+0100-017F,U+0180-024F,U+1E00-1EFF,U+2000-206F,U+20AC,U+2122,U+2190-22FF' --layout-features='*' --name-IDs='*' --name-languages='*'
```

Check newly added site text for glyphs outside these ranges before regenerating.
