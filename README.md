# Multiple Nested Selectors (Angular Reactive Forms)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `/dist` directory.

## Deploy (soon)

1. After the build, move the folder that is inside the `/dist` folder to the root of the project, rename it  from "project-name" to "docs"	
2. In the index.html that is inside the new `/docs` folder add a dot: "`.`" before the slash on the tag base like this:
```html
  <base href="./">
```
4. In GithubPages make the deploy from /docs NOT from /root.

