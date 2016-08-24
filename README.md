# uni-order-no

`ui-order-no` can help you to generate unique string. This is string concat utc datetime and shortid. Very suitable for primary key in database

## Install

```javascript
npm install uni-order-no --save
```

## Usage

```javascript
var orderNo = require('uni-order-no');

console.log(orderNo.generate());
// You will get an unique string:  20160824T160229HyRMrBsq
```
