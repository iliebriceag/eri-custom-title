# eri-custom-title

## Project setup
```
npm i eri-custom-title
```

### main.js
```
import { createApp } from 'vue'
import App from './App.vue'

import  EriCustomTitle  from 'eri-custom-title/dist/eri-custom-title.common.js'
import 'eri-custom-title/dist/eri-custom-title.css'

createApp(App)
.component('eri-custom-title', EriCustomTitle)
.mount('#app')
```

### app.vue
```
<eri-custom-title myTitle="Custom Title"
                  textColor="black"
                  borderColor="gray"
                  borderHeight="2px"
                  />
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# eri-custom-title
# eri-custom-title
