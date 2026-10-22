# FESTIVAL CONTROL · React Native + Expo Web + AWS Amplify

App para administrar la programación de un festival. Mantiene la identidad visual del cuaderno 04-PILARES-SERVERLESS: fondo `#090909`, cards `#151515`, acento `#FF2F92`, confirmado `#39D98A` y retrasado `#F5C542`. Los eventos se guardan en un backend de Amplify Data respaldado por DynamoDB.

## Inicio rápido

```bash
npm install
npx expo install --fix
npm run sandbox
npm run web
```

`npm run sandbox` despliega un entorno de desarrollo de Amplify y genera `amplify_outputs.json`; la app usa ese archivo para conectarse a la API. El entorno requiere credenciales de AWS y Node.js 20 o posterior.

## Despliegue en AWS Amplify Hosting

```bash
npm run build:web
```

El resultado estático se genera en `dist/`. Conecta el repositorio en Amplify Hosting y usa `amplify.yml`: el paso backend despliega la API y la tabla, y el paso frontend genera la web. Configura el rol de despliegue de Amplify con permisos para desplegar el backend. Las ramas conectadas a Amplify tendrán sus propios recursos backend.

## Prueba de alumno

1. Abrir **Eventos** y filtrar por escenario o artista.
2. Crear `TECHNO TITANS`, escenario `MAIN STAGE`, hora `21:45` y estado `CONFIRMED`.
3. Editar el evento y cambiar la hora a `23:00`.
4. Cambiar el estado a `DELAYED`.
5. Recargar la página y comprobar que los cambios siguen guardados.
6. Eliminar el evento.

La API usa una API key pública para simplificar la demo. Cualquier persona con acceso a la app puede leer, crear, modificar y eliminar eventos; no uses este modo para datos sensibles ni producción. Las API keys caducan a los 30 días y deben renovarse desde el backend de Amplify.

## Referencia docente

https://github.com/albertohdezakkari/04-PILARES-SERVERLESS
