import "../blocks/logic/logic_generator";
import { useEffect, useRef } from "react";
import * as Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

export default function BlocklyWorkspace({ toolbox, isRunning, onRun }) {
  const blocklyDiv = useRef(null);
  const workspace = useRef(null);

  useEffect(() => {
    if (blocklyDiv.current && !workspace.current) {
      workspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox,
        scrollbars: false,
        trashcan: true,
        move: {
          scrollbars: false,
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
        },
      });
    }

    /* TODO: Tilføj saveWorkspace og loadWorkspace */

    return () => {
      if (workspace.current) {
        workspace.current.dispose();
        workspace.current = null;
      }
    };
  }, [toolbox]);

  useEffect(() => {
    if (isRunning) {
      if (workspace.current.getAllBlocks().length === 0) {
        alert("Du skal placere blokke før du kan afprøve din kode");
        return;
      }
      const code = javascriptGenerator.workspaceToCode(workspace.current);
      onRun(code);
    }
  }, [isRunning]);

  return (
    <div
      ref={blocklyDiv}
      className="basis-full h-full min-w-150 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden"
    />
  );
}
