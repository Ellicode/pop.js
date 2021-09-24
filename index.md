# Pop.js
### A library of customisable simple modals


## Downloading
Click the button below to download pop.css!

[Download](popjs.zip)

Thank you for downloading pop.css!

## Usage
All you need to do is calling the uialert, uiconfirm or uiprompt function and enter some parameters (See keyword section).

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


## Keywords

Below is all the keywords in pop.js

```javascript
{
    title: "Title of the modal",
    type: "Type of the modal: 'error' 'info' 'success' 'question' 'delete'",
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
## Examples

### Success
```javascript
uialert( {
        title: "Success!",
        type: "success",
        text: "Hello world!",
})
```

### Error
```javascript
uialert( {
        title: "Error!",
        type: "error",
        text: "Hello world!",
})
```

### Delete
```javascript
uialert( {
        title: "Delete!",
        type: "delete",
        text: "Hello world!",
})
```

### Confirm
```javascript
uiconfirm( {
        title: "Confirm?",
        text: "Hello world!",
})
```

### Prompt
```javascript
uiprompt( {
        title: "Prompt!",
        text: "Hello world!",
        prompt: "Prompt: "
})
```

### Checkbox
```javascript
uiprompt( {
        title: "Prompt!",
        text: "Hello world!",
        inputType: "checkbox",
        prompt: "Prompt: "
})
```
INFO: Write html input types in the inputType option.

