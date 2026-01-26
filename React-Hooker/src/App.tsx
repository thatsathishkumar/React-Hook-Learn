import { useNavigate } from "react-router-dom";

function App() {
  const navigator = useNavigate();
  return (
    <>
      <div>
        <header>Welcome to react Hooks</header>
        <main>
          <div className="selectHeader">
            <div className="childMain">select the page</div>
            <div className="child1">
              <button
                onClick={() => {
                  navigator("/CarGame");
                }}
              >
                Use State
              </button>
            </div>
            <div className="child2">
              <button
                onClick={() => {
                  navigator("/PostApi");
                }}
              >
                Use Effect
              </button>
            </div>
            <div className="child3">
              <button>Use Context</button>
            </div>
            <div className="child4">
              <button>Use Ref</button>
            </div>
            <div className="child5">
              <button>Use CallBack</button>
            </div>
            <div className="child6">
              <button>Use Memo</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
