# pop.js
Simple pop-up alerts with javascript.
## Installation
### Download link
Start by downloading using <a href="../pop.js">This link</a>. 
### CDN
The CDN link to my website are coming soon.
## Usage
All you need to do is calling the `uialert`, `uiconfirm` or `uiprompt` function and enter some parameters
### Example
```javascript
uiconfirm( {
        title: 'Hello',
        type: 'question',
        text: 'Lorem ipsum',

        buttons: {
            ok: {

                text:'Next',
                func: function() {
                    uialert( {

                            title: 'Hello',
                            text: 'Hello! World!',
                            buttons: {
                                ok: {
                                    text: 'Ok'
                                }

                                ,
                                cancel: {
                                    text: 'Cancel'
                                }
                            }
                        }

                    )
                }
            },
            cancel: {}
        }
    }
)
```
It will make a confirm then if you click the next button, it will show an alert.
## Keywords
- `title` | Title of the dialog | `string`
- `text` | Text on the dialog | `string`
- `type` | Icon on the top of the dialog | `string`. Choices: `info`, `warning`, `question`, `success`
