import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../component';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
} 

const ColorPicker = () => {
  return (
    <div className="m-1 md:m-5 mt-5 p-1 md:p-5 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
          <div className="flex justify-center items-center gap-20 flex-wrap">
            <div>
              <p className="text-2xl font-semibold mt-2 mb-4">Indian Pallete</p>
              <ColorPickerComponent 
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
              />
            </div>
            <div>
              <p className="text-2xl font-semibold mt-2 mb-4">Indian Picker</p>
              <ColorPickerComponent 
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ColorPicker