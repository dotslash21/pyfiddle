interface Props {
  value: string;
}

const Output: React.FC<Props> = ({ value }) => {
  return (
    <div className="p-2 bg-base-300 rounded-lg">
      <div className="output">
        <div className="output-label font-semibold">Output</div>
        <textarea
          className="output-input textarea textarea-bordered w-full mt-1"
          placeholder={value}
          disabled
        ></textarea>
      </div>
    </div>
  );
};

export default Output;
