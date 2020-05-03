# blobToBase64

## Description:
blobをbase64に変換

## Installation

```bash
npm i castling/blobToBase64
```

## Usage:

```javascript
import blobToBase64 from 'castling/blobToBase64'

let img = new Image()

img.src = 'data:image/png;base64,' + blobToBase64(blob)
```

# API

```javascript
blobToBase64(blob)
```

* `blob` `{Blob}` Blob object
* return: `{String}` base64 string value
