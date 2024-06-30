import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import "./App.css";
import Accordion from "./components";

const accordionItems = [
  {
    value: "item_1",
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod ut corrupti suscipit itaque blanditiis distinctio aliquid delectus labore eaque!",
  },
  {
    value: "item_2",
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque at sunt labore, aliquid nisi sint quas totam minus aspernatur error.",
  },
  {
    value: "item_3",
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus repellat repellendus explicabo at optio, reiciendis nisi eveniet quis laboriosam temporibus.",
  },
];

const App = () => {
  return (
    <div className="min-h-screen w-full grid items-center p-4 space-y-10 bg-neutral-50">
      <div className="max-w-screen-sm w-full mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">React Accordion</h2>
          <p className="text-black/50">
            A customizable accordion component, designed with the Compound Components pattern and Context in React.
          </p>
        </div>

        <Accordion type="single"
          defaultExpanded={"item_2"}
          onValueChange={(values) => console.log(values)}
        >
          {accordionItems.map((item) => (
            <Accordion.Item value={item.value} key={item.value}>
              <Accordion.Header>
                <span>
                  <QuestionMarkCircleIcon className="size-5 inline-block mr-2 text-blue-600" />
                  {item.question}
                </span>
              </Accordion.Header>
              <Accordion.Content>{item.answer}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default App;