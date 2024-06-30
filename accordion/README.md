# Accordion
Un componente creado a partir del patrón Compound Components.

### Características 

- **Desglose modular**: Cada parte del Accordion (header, content, etc.) está implementada como un componente separado.
- **Flexibilidad**: Puedes personalizar cada parte del Accordion.
- **Reutilización**: Los diferentes elementos del Accordion se pueden reutilizar.

<a href="https://react-components-one-lilac.vercel.app/" target="_blank">Ver ejemplo</a>

# Uso

#### Ejemplo de datos del Accordion en formato JSON

```ts
const accordionItems = [
  {
    value: "item_1",
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod ut corrupti suscipit itaque blanditiis distinctio aliquid delectus labore eaque!",
  },
  {
    value: "item_2",
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque at sunt labore, aliquid nisi sint quas totam minus aspernatur error?",
  }
];
```

#### Iterando a través de los datos del Accordion

```jsx
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Accordion from "./components";

<Accordion type="single" defaultValue="item_1"  onValueChange={(values) => console.log(values)}>
  {accordionItems.map((item) => (
    <Accordion.Item value={item.value} key={item.value}>
      <Accordion.Header>
        <span>
          <QuestionMarkCircleIcon className="size-5 inline-block mr-2 text-[#81A296]" />
          {item.question}
        </span>
      </Accordion.Header>
      <Accordion.Content>{item.answer}</Accordion.Content>
    </Accordion.Item>
  ))}
</Accordion>
```

# Props

| Propiedad       | Tipo                   | Requerdio   | Descripción |
| --------------- | ---------------------- | ----------- | ----------- |
| type            | `"single"` \| `"multiple"` | :heavy_check_mark: | Determina si se puede desplegar uno o varios ítems del Accordion a la vez. |
| defaultValue    | `string` \| `string[]` | :x: | Establece qué ítems del Accordion estarán desplegados por defecto. Si `type` es `"single"`, se especifica un solo valor. Si es `"multiple"`, se puede proporcionar un array de valores. |
| onValueChange   | `(values: string \| string[]) => void` | :x: | Callback que se ejecuta cuando cambia el estado del Accordion, pasando los valores afectados como argumento. |
| value           | `string`               | :heavy_check_mark: | Identificador único para cada ítem del Accordion. Requerido para cada ítem. |

Notas:
- `defaultValue` y `onValueChange` tienen comportamientos diferentes según el valor de `type`.
- Este componente utiliza `Tailwind CSS` para estilos.
