import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Todo from "../components/Todo.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/main.jsx">
                <Todo/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews