//outsourcing type guards - using type predicate
type FileSr = { type: "file"; path: string };

const fileSr: FileSrc = {
  type: "file",
  path: "some/file/paths",
};

type DbSrc = { type: "db"; connectionURL: string };

const dbSr: DBSrc = {
  type: "db",
  connectionURL: "some-url-connection",
};

type Sr = FileSrc | DBSrc; //union type

function isFile(source: Sr) {
  // outsourcing type guard check logic - gives boolean & predicate
  return source.type === "file";
}
function loaddData(source: Sr) {
  if (isFile(source)) {
    // using outsorce type guard logic fuction
    // source.path => open the file
    return;
  }
  // source.connectionUrl => connect to db server
}
