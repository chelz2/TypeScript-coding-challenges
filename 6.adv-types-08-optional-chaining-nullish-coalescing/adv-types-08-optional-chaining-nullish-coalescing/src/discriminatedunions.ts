// Discriminated Unions patterns - type guard checks

type FileSrc = { type: "file"; path: string };

const fileSrc: FileSrc = {
  type: "file",
  path: "some/file/paths",
};

type DBSrc = { type: "db"; connectionURL: string };

const dbSrc: DBSrc = {
  type: "db",
  connectionURL: "some-url-connection",
};

type Src = FileSrc | DBSrc; //union type

function ldData(source: Src) {
  // discriminated unions pattern --- check for diff value based on based shared property
  if (source.type === "file") {
    // source.path => open the file
    return;
  }
  // source.connectionUrl => connect to db server
  return;
}
