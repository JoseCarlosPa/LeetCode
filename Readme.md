# Problems (LeetCode practice)

Objetivo
--------
Tener un lugar centralizado donde poder programar, ejecutar y probar soluciones a problemas de LeetCode en TypeScript. Este repositorio contiene ejercicios individuales bajo `src/` (cada problema en su propia carpeta), una suite de tests para validar las soluciones y herramientas de lint para mantener el código consistente.

Estructura relevante
--------------------
- `package.json` — scripts y dependencias de desarrollo (tests, lint).
- `tsconfig.json` — configuración de TypeScript.
- `src/` — soluciones y tests. Ejemplo: `src/01-TwoSums/` contiene la solución y sus tests.

Requisitos
----------
- Node.js (recomendado >= 18)
- npm

Cómo usar (rápido)
------------------
1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar la suite de tests (Vitest):

```bash
npm test
```

3. Ejecutar ESLint para comprobar estilo:

```bash
npm run lint
```

4. Aplicar correcciones automáticas de ESLint (cuando sea posible):

```bash
npm run lint:fix
```

Notas sobre TypeScript / ESLint
------------------------------
- La configuración actual usa TypeScript con `moduleResolution: nodenext` para compatibilidad con imports ESM. Es posible que veas una advertencia de compatibilidad entre `@typescript-eslint` y la versión de TypeScript instalada; esto es solamente una advertencia (no bloqueante). Si deseas eliminar esa advertencia puedes usar una versión de TypeScript soportada por `@typescript-eslint` (por ejemplo 5.3.x / 5.2.x según la versión del plugin) o actualizar el plugin cuando haya soporte oficial.

Agregar nuevos problemas
-----------------------
1. Crea una nueva carpeta bajo `src/` con un prefijo numérico, por ejemplo `src/02-AddTwoNumbers/`.
2. Añade el archivo de implementación `index.ts` y un archivo de tests `index.test.ts` usando Vitest (mira `src/01-TwoSums/` como referencia).
3. Ejecuta `npm test` para validar.

Enlaces
-------
- Mi perfil de LeetCode:

![Leetcode Stats](https://leetcard.jacoblin.cool/josecarlospas1)

