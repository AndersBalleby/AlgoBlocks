import { useEffect, useRef } from "react";
import * as Blockly from "blockly";

export default function BlocklyWorkspace({ toolbox }) {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);

  useEffect(() => {
    if(!blocklyDiv.current) return;

    workspaceRef.current = Blockly.inject(blocklyDiv.current, {
      toolbox,
      scrollbars: true,
      trashcan: true,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
    })

    return () => {
      workspaceRef.current?.dispose();
    }
  }, [])
  
  return <div ref={blocklyDiv} className="w-full h-full" />
}