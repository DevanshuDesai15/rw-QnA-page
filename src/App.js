import React, { useState } from "react";
import data from './data';
import SingleQuestion from "./Question";

function App() {

  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>Some of the frequently asked Questions...</h3>
      <section className="info">
          {
            questions.map((quest) => {
              return <SingleQuestion key={quest.id} {...quest} />
            })
          }
      </section>
      </div>
    </main>
  );
}

export default App;
