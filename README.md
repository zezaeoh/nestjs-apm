# nestjs-apm


## Installation
```
$ yarn add @dano/apm
```
## NestJs config
### main.ts (first line)

```
import { apm } from '@dano/apm';
...
```

```
if (apm.isStarted()) {
	console.log('APM running');
}
```

### app.module.ts

```
...
import { ApmModule } from '@dano/apm';
...
```

```
@NgModule({
  ...
  imports: [
    ...,
    ApmModule.register(),
    ...
  ]
})
export class AppModule { }
```

### Env variables
```
APP=
VERSION=
APM_URL=
NODE_ENV=
```
