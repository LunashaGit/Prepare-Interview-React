import { useState } from "react";

type Data = {
  name: string;
  children?: Data[];
};

const Entry = (
  { files, depth }: { files: Data; depth: number },
  index: number
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      style={{
        listStyleType: "none",
        textAlign: "left",
      }}
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        {(files.children && "📁 ") || "📄 "} {files.name}
      </button>
      {files.children && isOpen && (
        <div
          style={{
            marginLeft: depth * 20,
          }}
        >
          {files.children?.map((file) => (
            <Entry files={file} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Entry;
