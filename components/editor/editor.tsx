import { useState } from "react";
import AceEditor from "react-ace";
import { FaPlay } from "react-icons/fa";
import { MdInput } from "react-icons/md";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/theme-monokai";

interface Props {
  onRun: (code: string) => void;
}

const Editor: React.FC<Props> = ({ onRun }) => {
  const [value, setValue] = useState(
    'def hello(name: str):\n\treturn "Hello, {}!".format(name)\n\nprint(hello("World"))'
  );
  const [showStdinSection, setShowStdinSection] = useState(false);

  // Editor options states for Ace
  const [fontSize, setFontSize] = useState(16);
  const [showGutter, setShowGutter] = useState(true);
  const [showPrintMargin, setShowPrintMargin] = useState(true);
  const [enableBasicAutocompletion, setEnableBasicAutocompletion] =
    useState(true);
  const [enableLiveAutocompletion, setEnableLiveAutocompletion] =
    useState(true);
  const [enableSnippets, setEnableSnippets] = useState(true);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [tabSize, setTabSize] = useState(2);

  function onChange(newValue: string) {
    setValue(newValue);
  }

  return (
    <div className="editor p-2 bg-base-300 rounded-lg">
      {/* The Editor */}
      <AceEditor
        className="editor-input rounded-lg"
        mode="python"
        theme="monokai"
        name="editor"
        onChange={onChange}
        highlightActiveLine={true}
        value={value}
        width="100%"
        height="26rem"
        setOptions={{
          fontSize: fontSize,
          showGutter: showGutter,
          showPrintMargin: showPrintMargin,
          enableBasicAutocompletion: enableBasicAutocompletion,
          enableLiveAutocompletion: enableLiveAutocompletion,
          enableSnippets: enableSnippets,
          showLineNumbers: showLineNumbers,
          tabSize: tabSize,
        }}
      />

      {/* STDIN Input */}
      <div className="stdin mt-2" hidden={!showStdinSection}>
        <div className="stdin-label font-semibold">Enter input (stdin)</div>
        <textarea className="stdin-input textarea textarea-bordered w-full mt-1"></textarea>
      </div>

      {/* Editor Panel */}
      <div className="editor-panel mt-2">
        <div className="btn-panel flex justify-between mt-2">
          <div className="btn-panel-left grid grid-cols-2 gap-2">
            <button
              className="btn"
              onClick={() => setShowStdinSection(!showStdinSection)}
            >
              <MdInput className="mr-2" /> {showStdinSection ? "Hide" : "Show"}{" "}
              STDIN
            </button>
            <label htmlFor="editor-options-modal" className="btn modal-button">
              <IoIosOptions className="mr-2" /> Editor Options
            </label>
          </div>

          <div className="btn-panel-right">
            <button className="btn btn-primary" onClick={() => onRun(value)}>
              <FaPlay className="mr-2" />
              Run
            </button>
          </div>
        </div>
      </div>

      {/* Editor options modal */}
      <input
        type="checkbox"
        id="editor-options-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="editor-options-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <AiOutlineClose />
          </label>
          <div className="editor-options-modal-container">
            <h3 className="font-bold text-lg">Editor options</h3>
            <div className="editor-options-modal-form">
              {/* Font size */}
              <div className="form-control w-full max-w-xs">
                <label className="label">Font size:</label>
                <input
                  type="number"
                  value={fontSize}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e: any) => setFontSize(Number(e.target.value))}
                ></input>
              </div>

              {/* Tab size */}
              <div className="form-control w-full max-w-xs">
                <label className="label">Tab size:</label>
                <input
                  type="number"
                  value={tabSize}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e: any) => setTabSize(Number(e.target.value))}
                ></input>
              </div>

              {/* Show gutter */}
              <div className="form-control mt-2">
                <label className="label cursor-pointer">
                  <span className="label-text">Show gutter</span>
                  <input
                    type="checkbox"
                    checked={showGutter}
                    className="checkbox"
                    onChange={() => setShowGutter(!showGutter)}
                  />
                </label>
              </div>

              {/* Show print margin */}
              <div className="form-control mt-2">
                <label className="label cursor-pointer">
                  <span className="label-text">Show print margin</span>
                  <input
                    type="checkbox"
                    checked={showPrintMargin}
                    className="checkbox"
                    onChange={() => setShowPrintMargin(!showPrintMargin)}
                  />
                </label>
              </div>

              {/* Enable basic autocompletion */}
              <div className="form-control mt-2">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    Enable basic auto-completion
                  </span>
                  <input
                    type="checkbox"
                    checked={enableBasicAutocompletion}
                    className="checkbox"
                    onChange={() =>
                      setEnableBasicAutocompletion(!enableBasicAutocompletion)
                    }
                  />
                </label>
              </div>

              {/* Enable live auto-completion */}
              <div className="form-control mt-2">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    Enable live auto-completion
                  </span>
                  <input
                    type="checkbox"
                    checked={enableLiveAutocompletion}
                    className="checkbox"
                    onChange={() =>
                      setEnableLiveAutocompletion(!enableLiveAutocompletion)
                    }
                  />
                </label>
              </div>

              {/* Enable snippets */}
              <div className="form-control mt-2">
                <label className="label cursor-pointer">
                  <span className="label-text">Enable snippets</span>
                  <input
                    type="checkbox"
                    checked={enableSnippets}
                    className="checkbox"
                    onChange={() => setEnableSnippets(!enableSnippets)}
                  />
                </label>
              </div>

              {/* Show line numbers */}
              <div className="form-control mt-2">
                <label className="label cursor-pointer">
                  <span className="label-text">Show line numbers</span>
                  <input
                    type="checkbox"
                    checked={showLineNumbers}
                    className="checkbox"
                    onChange={() => setShowLineNumbers(!showLineNumbers)}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
