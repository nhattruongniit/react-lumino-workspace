import { LuminoLayout } from "./libs/Lumino";
import { LuminoWidget } from "./libs/Lumino";

function App() {

  return (
    <div className="App">
      <LuminoLayout
        layout={null}
        onUpdate={layout => {
          console.log('onUpdate: ', layout)
        }}
      >
        <LuminoWidget>
          <div>TestTestTestTest</div>

        </LuminoWidget>
      </LuminoLayout>
    </div>
  )
}

export default App
