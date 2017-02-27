# create-webpack-split-point

Webpack 2 exposes import() a async module loader that will automatically define a split point and create a new bundle in your code that will only be loaded if the system.import is executed. React components that are not part of initial paint are a taylor made use case for this. This module aims to abstract a way the work of creating one of these components.

## use

`apm install  create-webpack-split-point`

In atom right click inside of a component you wish to turn into async bundled split point and select Create Webpack Split Point. This wil create two files, index.js which exports the async component and component-async which writes the comopnent that loads the split bundle in componentDidMount.

For example if you exexcuted in /components/header/header.js. Then in the place you want to use the async header component you could simply import from the directory.

```js
import Header from "./components/header";
```

As soon as componentDidMount in Header is fired `import` will be called and it will asynchronously load the bundle containing the Header component and render it on the page, before that a Component returning null will be rendered.

- - -

Copyright (C) 2017 Social Tables, Inc. (https://www.socialtables.com) All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
