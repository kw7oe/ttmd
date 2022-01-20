# ttmd

A minimal Firefox Extension to convert the current tab title and url to Markdown format.

## Installation

Since this is very minimal web extension, it is not yet publised to Firefox as Add ons.
So if you are interested to use this, you'll have to load this manually with the following
instructions:

1. `git clone https://github.com/kw7oe/ttmd`
2. Open Firefox browser.
3. Visit `(about:debugging#/runtime/this-firefox`
4. Click `Load Temporay Add-on...`
5. Choose `manifest.json` from this directory cloned to your machine.
6. Click `Open` and you're good to go.

## How do I learn to write this?

All the codes written are mainly reference to [webextensions-examples/bookmark-it · mdn/webextensions-examples](https://github.com/mdn/webextensions-examples/tree/master/bookmark-it) and
the following documentations:

- [tabs.query() - Mozilla | MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)
- [Interact with the clipboard - Mozilla | MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [notifications.create() - Mozilla | MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/create)

_(All the links above are copy and pasted using this extension. Dogfooding FTW!)_
