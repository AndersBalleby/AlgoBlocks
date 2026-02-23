import { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { blocks as customBlocks } from './blocks';
import { forBlock as customGenerators } from './generator';

// Register blocks outside component (only once)
Blockly.common.defineBlocks(customBlocks);
Object.assign(javascriptGenerator.forBlock, customGenerators);

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
      id="blocklyWorkspace" 
      ref={blocklyDiv}
      style={{ 
        flex: 1, 
        height: '100%',
        minWidth: '600px'
      }}
    />
  );
}