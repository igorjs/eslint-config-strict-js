<div align="center">
  <center>
    <img width="148" height="148" alt="Strict ESLint Config logo" src="https://raw.githubusercontent.com/igorjs/eslint-config-strict-js/main/docs/eslint.png" />
  </center>
</div>
<div align="center">
  <center>
    <h1 align="center"><i></i>A Strict, Awesome ESLint Config<i></i></h1>
  </center>
</div>

Base eslint config for latest ecma script standards with strict rules

## Usage
To make use of this configuration, you need to first install the configuration in your Node.js project:

```bash
npm install --save-dev eslint-config-strict-js
```

After that, you need to include a reference to the package in your package.json:

```json
{
  "name": "mypackage",
  "version": "1.0.0",
  ...
  "eslintConfig": {
    "extends": "@igorjs/eslint-config-strict-js"
  }
}
```

You can override the settings that are provided by the plugin by including additional rules in your package.json. For instance, if you wanted to turn off a rule named max-len, your package.json would look something like this:

```json
{
  "name": "mypackage",
  "version": "1.0.0",
  ...
  "eslintConfig": {
    "extends": "@igorjs/eslint-config-strict-js",
    "rules": {
        "max-len": "off"
    }
  }
}
```

In `.eslintrc`:

```json
{
  "root": true,
  "extends": ["@igorjs/eslint-config-strict-js"],
  "rules": {
      "max-len": "off"
  }
}
```

**NOTE:** you may need to restart your editor for config to take effect

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues] page. If you would like to contribute, please take a look at the [contributing] guide.


## Plugins


## License
This project is [MIT][license] licensed.

[issues]: https://github.com/igorjs/eslint-config-strict-js/issues
[license]: ./LICENSE
[contributing]: ./docs/CONTRIBUTING.md