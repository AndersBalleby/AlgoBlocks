import { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
// Register blocks outside component (only once)
//Blockly.common.defineBlocks(customBlocks);
//Object.assign(javascriptGenerator.forBlock, customGenerators);

export default function BlocklyWorkspace({ toolbox }) {
  const blocklyDiv = useRef(null);
  const workspace = useRef(null);

  useEffect(() => {
    if (blocklyDiv.current && !workspace.current) {
      workspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox,
        scrollbars: true,
        trashcan: true,
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2
        }
      });
    }

    return () => {
      if (workspace.current) {
        workspace.current.dispose();
        workspace.current = null;
      }
    };
  }, [toolbox]);

  return (
    <div  
      ref={blocklyDiv}
      className='basis-full h-full min-w-[600px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden'
    />
  );
}