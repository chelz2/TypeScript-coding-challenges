// Type Guards checks

type FileSource = { path: string };

const fileSource: FileSource = {
  path: "some/file/paths",
};

type DBSource = { connectionURL: string };

const dbSource: DBSource = {
  connectionURL: "some-url-connection",
};

type Source = FileSource | DBSource; //union type

function loadData(source: Source) {
  if ("path" in source) {
    // type guard : checking - source type
    // source.path => open the file
    return;
  }
  // source.connectionUrl => connect to db
  return;
}
