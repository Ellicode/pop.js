# pop.js
Simple pop-up alerts with javascript.
<p align="center"><img src="ScreenRecorderProject1.gif"></img></p>

## Installation
### Download link
|                           |                            |
|:-------------------------:|:--------------------------:|
|<a href="src/pop.js">JS</a>|<a href="src/pop.js">CSS</a>|
### CDN
The CDN link to my website are coming soon.
## Usage
All you need to do is calling the `uialert`, `uiconfirm` or `uiprompt` function and enter some parameters
### Example
```javascript
uiprompt( {
                title: "Warning",
                type: "delete",
                text: "Do you want to delete this file? No redo.",
                prompt: "Check this checkbox to proceed",
                inputType: "checkbox",
                buttons: {
                
                    ok: {
                        text:"OK",
                        func: function() {
                            uialert(
                                {
                                    title: "Deleted",
                                    type: "delete",
                                    text: "You heve delete permenantely your file.",
                                }
                            )
                        }
                    },
                }
            }
        )
```
It will make a confirm then if you click the next button, it will show an alert.
## Keywords
```javascript
        {
                title: "Title of the modal",
                type: "Type of the modal: 'warning' 'info' 'success' 'question' 'delete'",
                text: "Text on the modal. Can be HTML.",
                inputType: "Only on uiprompt().  input type",
                prompt: "Only on uiprompt().  input label",
                buttons: {
                
                    ok: {
                        text:"Text on the 'ok button'",
                        func: function() {
                            uialert(
                                {
                                    title: "Func is",
                                    text: "The action when you click on the button"
                                }
                            )
                        }
                    },
                    cancel: {
                        text:"Text on the 'Cancel button'",
                        func: function() {
                            uialert(
                                {
                                    title: "Func is",
                                    text: "The action when you click on the button"
                                }
                            )
                        }
                    }
                }
            }
```
