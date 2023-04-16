import { LuminoLayout, LuminoWidget } from "./libs/Lumino";

// mock data
import { models, widgets } from "./data";

function App() {

  return (
    <>
      <h1>Add too truong</h1>
      <h3>push lan 2</h3>
      {
        Object.keys(models).map( workspace_id => {
          return <LuminoLayout
            key={`workspace-${workspace_id}`}
            id={`workspace-${workspace_id}`}
            hidden={false}
            // layout={ workspace.layout?.orientation ? { main: workspace.layout } : null }
            layout={ null }
            onUpdate={ layout => {
              console.log("??? update layout", layout);
            } }
          >

            {
              Object.keys(widgets).map( id => {
                const widget = widgets[id];

                return <LuminoWidget
                  key={`workspace-${workspace_id}-${id}`}
                  id={`workspace-${workspace_id}-${id}`}
                  title="Widget Title"
                  onDelete={ e => {
                    e.preventDefault();
                    console.log("??? handle delete");
                  } }
                >
                  <span style={{color: "black"}}>
                    Content: { JSON.stringify(widget) }
                  </span>

                </LuminoWidget>
              }) 
            }

          </LuminoLayout>
        })
      }
    </>
  )
}

export default App
