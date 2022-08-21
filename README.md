# pushx-js

`pushx-js` is a simple wrapper library for [pushx](https://github.com/robertlestak/pushx). `pushx-js` exports a single function, `pushx`, which accepts two arguments, `input`, and `args`. `input` is the pre-formatted input string, and `args` is an array containing `pushx` configuration arguments. 

You must have `pushx` installed in order to use `pushx-js`.

See `examples/example.js` for an example of using one codebase and dynamically pushing to multiple services.

Here is a basic example:

```js
let data = {
    name: "John Doe",
    age: 30,
    address: "123 Main St"
}
let args = [
    "-driver",
    "redis-list",
    "-redis-host",
    "localhost",
    "-redis-port",
    "6379",
    "-redis-key",
    "test-redis-list"
]
let input = JSON.stringify(data)
await pushx(input, args)
```

Since the entire data layer configuration is contained within the `args` JS array, this can be moved to a configuration layer such as Vault or Consul. If you ever need to change the data layer configuration, you can simply update the `args` configuration, and your code will remain entirely the same.