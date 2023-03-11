import files from "../datas/fileExplorerData";
import Entry from "../components/fileExplorerComponent/Entry";

export default function FileExplorer() {
  return (
    <div>
      <h1>File Explorer</h1>
      <Entry files={files} depth={1} />
    </div>
  );
}
