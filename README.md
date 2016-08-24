# uni-order-no

`ui-order-no` can help you to generate unique string. This is string concat utc datetime and shortid. Very suitable for primary key in database

## Install

```
npm install uni-order-no --save
```

## Usage

```
var orderNo = require('uni-order-no');

console.log(orderNo.generate());
// You will get an unique order no:  20160824T160229HyRMrBsq
```
