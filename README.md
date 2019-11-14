# SomeYTChanges
Some changes to the youtube GUI.

Use Tampermonkey or equivalents to install.

[Install](https://raw.githubusercontent.com/luckri13/SomeYTChanges/master/SomeYTChanges.user.js)

I also recommend adding these lines to your ublock origin filters

```
! removes youtube mixes etc
www.youtube.com##ytd-item-section-renderer:has(span:has-text(/Latest YouTube posts/i))
www.youtube.com##ytd-rich-section-renderer:has(span:has-text(/YouTube Mixes/i))
www.youtube.com##ytd-rich-section-renderer:has(span:has-text(/Breaking News/i))
www.youtube.com##ytd-rich-section-renderer:has(span:has-text(/Latest YouTube posts/i))
```
